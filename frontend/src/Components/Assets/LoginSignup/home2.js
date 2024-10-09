import React from 'react';
import NavbarComponent from './navbarcomp';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.css'

function Home1() {
    return (
        <div>
            <NavbarComponent />
            <div className="container mt-5 text-center"> 
                <h1>Welcome to My App</h1>
                <h4>To continue</h4>
                <div className="mt-4">
                    <Link to="/login">
                        <Button variant="primary" size="sm" className="me-3"> 
                            Login
                        </Button>
                    </Link>
                    <Link to="/signup">
                        <Button variant="success" size="sm" className="me-3"> 
                            Signup
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home1;
