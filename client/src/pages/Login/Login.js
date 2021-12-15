import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../config';
import { Context } from '../../context/Context';
import './Login.css';

const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axiosInstance.post('/auth/login', {
                username: userRef.current.value,
                password: passwordRef.current.value
            });
            dispatch({ type: "LOGIN_SUCCESS", payload:res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE"}); 
        }
    };


    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input className="loginInput" type="text" placeholder="Enter your username..." id="username" ref={userRef} />
                <label htmlFor="password">Password</label>
                <input className="loginInput" type="password" placeholder="Enter your password..." id="password" ref={passwordRef} />
                <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
            </form>
            <Link to="/register" className="link loginRegisterButton">Register</Link>
        </div>
    );
};

export default Login;