import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                navigate('/');
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div style={containerStyle}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={formContainerStyle}
            >
                <h1 style={headingStyle}>Login</h1>
                <form onSubmit={handleLogin}>
                    <div style={inputContainerStyle}>
                        <label htmlFor="username" style={labelStyle}>Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={inputStyle}
                        />
                    </div>
                    <div style={inputContainerStyle}>
                        <label htmlFor="password" style={labelStyle}>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={inputStyle}
                        />
                    </div>
                    {error && <p style={errorStyle}>{error}</p>}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={buttonStyle}
                        type="submit"
                    >
                        Login
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
};

const formContainerStyle = {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center',
};

const headingStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
};

const inputContainerStyle = {
    marginBottom: '20px',
};

const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontSize: '1rem',
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
};

const buttonStyle = {
    backgroundColor: 'orange',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
};

const errorStyle = {
    color: 'red',
    marginBottom: '20px',
};

export default Login;