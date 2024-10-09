const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const sequelize = require('./util/database')
const User = require('./models/User');
require('dotenv').config();



const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET'],
    credentials: true
}));
app.use(cookieParser());
sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
        return sequelize.sync();
    })
    .then(() => {
        app.listen(8081, () => {
            console.log('Server is running on http://localhost:8081');
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
app.get('/', (req, res) => {
    res.send('Welcome to the backend API');
});

app.get('/auth', (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET || 'default_secret', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        return res.status(200).json({ message: 'Authenticated', userID: decoded.UserID });
    });
});

app.post('/signup', async (req, res) => {
    try {
        const { username, password, email } = req.body;

        if (!(username && email && password)) {
            return res.status(400).json({ error: 'All fields are compulsory' });
        }
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        const existingUsername = await User.findOne({ where: { username } });
        if (existingUsername) {
            return res.status(400).json({ error: 'Username already exists' });
        }
        const rounds = 10;
        const hashedPassword = await bcrypt.hash(password, rounds);
        const newUser = User.create({ username, password: hashedPassword, email });

        const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';
        const token = jwt.sign({ UserID: newUser.id }, JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            maxAge: 3600000,
            sameSite: 'strict',
        });

        return res.status(201).json({
            message: 'User created successfully',
            userID: newUser.id,
        });
    } catch (error) {
        console.error(error);
        const errorMessage = error.errors ? error.errors[0].message : 'Something went wrong, please try again later';
        return res.status(400).json({ error: errorMessage });
    }
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!(email && password)) {
            return res.status(400).json({ error: 'Email and Password are required' })
        }

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: 'User does not exist, Create an account' })
        }
        const ismatch = await bcrypt.compare(password, user.password);
        if (!ismatch) {
            return res.status(400).json({ error: 'Invalid Credentials' });
        }

        const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';
        const token = jwt.sign({ UserID: user.id },
            JWT_SECRET, { expiresIn: '1h' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            maxAge: 3600000
        });

        return res.status(200).json({
            message: 'Login Successful',
            userID: user.id,
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong, Please try again later' })
    }


});

