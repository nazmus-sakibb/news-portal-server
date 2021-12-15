import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContainer">
                <div className="footerLeft">
                    <p>© Copyright 2021. All rights reserved || Designed by <a href="https://nazmus-sakibb.netlify.app/" className="link" style={{ fontWeight: 'bold' }}>Nazmus Sakib</a>.</p>
                </div>
                <div className="footerRight">
                    <a href="https://www.facebook.com/"><i className="icon fab fa-facebook-square"></i></a>
                    <a href="https://twitter.com/"><i className="icon fab fa-twitter-square"></i></a>
                    <a href="https://www.pinterest.com/"><i className="icon fab fa-pinterest-square"></i></a>
                    <a href="https://www.instagram.com/"><i className="icon fab fa-instagram-square"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;