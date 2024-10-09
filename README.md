This project is a simple login page built using Node.js, Express, React, and SQLite with Sequelize ORM.


## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [API Endpoints](#api-endpoints)


## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for Node.js.
- **React**: Frontend library for building user interfaces.
- **SQLite**: Lightweight database for storing user credentials.
- **Sequelize**: Promise-based ORM for Node.js to interact with SQLite.

- User registration
- User login
- Error handling for invalid credentials
- Responsive design with basic styling

## API

POST /api/register
Registers a new user.
Body: { "username": "string", "password": "string" }


POST /api/login
Authenticates a user.
Body: { "username": "string", "password": "string" }
