// src/Home.js
import React, { useEffect, useState } from 'react';
import NavbarComponent from './navbarcomp';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure to import axios

function Home() {
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('http://localhost:8081/');
                if (response.status === 200) {
                    setAuth(true);
                }
            } catch (error) {
                console.error('Error checking authentication:', error);
                setAuth(false);
            }
        };
        checkAuth();
    }, []);

    const handleLogout = () => {
        document.cookie = 'token=; Max-Age=0;'; // Clear cookie
        navigate('/login'); // Redirect to login page
    };

    return (
        auth ? (
            <div>
                <NavbarComponent />
                <div className="container mt-5">
                    <h1 style={{ color: 'orange', fontWeight: 'bolder', textAlign: 'center' }}>Welcome to My App</h1>
                    <p style={{ color: 'black', fontWeight: 'bolder', textAlign: 'center' }}>Login Successful.</p>
                    <p style={{ color: 'blue', fontWeight: 'bold', textAlign: 'center' }}>You Are Authorized....!</p>
                    <Button style={{ width: '200px', marginLeft: '545px' }} variant="dark" onClick={handleLogout}>Log out</Button>
                </div>
            </div>
        ) : (
            <div>
                <NavbarComponent />
                <div className="container mt-5">
                    <h1 style={{ color: 'orange', fontWeight: 'bolder', textAlign: 'center' }}>Welcome to My App</h1>
                    <p style={{ color: 'black', fontWeight: 'bolder', textAlign: 'center' }}>Login Unsuccessful.</p>
                    <p style={{ color: 'blue', fontWeight: 'bold', textAlign: 'center' }}>You are not Authorized....!</p>
                </div>
            </div>
        )
    );
}

export default Home;
