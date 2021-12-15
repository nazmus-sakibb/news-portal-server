import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../config';
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axiosInstance.post('/auth/register', {
                username,
                email,
                password
            });
            res.data && window.location.replace('/login');
        } catch (err) {
            setError(true);
        }
    }


    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input className="registerInput" type="username" placeholder="Enter your username..." id="username" onChange={e => setUsername(e.target.value)} />
                <label htmlFor="email">Email</label>
                <input className="registerInput" type="email" placeholder="Enter your email..." id="email" onChange={e => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input className="registerInput" type="password" placeholder="Enter your password..." id="password" onChange={e => setPassword(e.target.value)} />
                <button className="registerButton" type="submit">Register</button>
                {error && <p style={{textAlign: 'center', fontWeight: 'bold  '}}>Something went wrong!</p>}
            </form>
            <Link to="/login" className="link registerLoginButton">Login</Link>
        </div>
    );
};

export default Register;