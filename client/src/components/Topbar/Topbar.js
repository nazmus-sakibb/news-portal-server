import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './Topbar.css';

const Topbar = () => {
    const { user, dispatch } = useContext(Context);
    const PF = "https://news-portal2.herokuapp.com/images/";

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }

    return (
        <div className="topbar">
            <div className="topLeft">
                <h2><Link to="/" className="link">NewsPortal</Link></h2>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/" className="link">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/" className="link">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write" className="link">WRITE</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link to="/settings"><img className="topImage" src={PF + user.profilePic} alt="" /></Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link to="/login" className="link">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link to="/register" className="link">REGISTER</Link>
                        </li>
                    </ul>
                )}
                <i className="searchIcon fas fa-search"></i>
            </div>
        </div>
    );
};

export default Topbar;