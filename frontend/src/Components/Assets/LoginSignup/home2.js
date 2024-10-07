import React from 'react';
import NavbarComponent from './navbarcomp';
import { Button } from 'react-bootstrap'; // Import Button from Bootstrap
import { Link } from 'react-router-dom';
import './home.css'

function Home1() {
    return (
        <div>
            <NavbarComponent />
            <div className="container mt-5 text-center"> {/* Center align the content */}
                <h1>Welcome to My App</h1>
                <div className="mt-4">
                    {/* Add buttons for login and signup */}
                    <Link to="/login">
                        <Button variant="primary" size="sm" className="me-3"> {/* Reduced size */}
                            Login
                        </Button>
                    </Link>
                    <Link to="/signup">
                        <Button variant="success" size="sm" className="me-3"> {/* Reduced size */}
                            Signup
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home1;
