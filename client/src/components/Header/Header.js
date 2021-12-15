import React from 'react';
import './Header.css';
import headerBanner from '../../images/headerBanner.jpg'

const Header = () => {
    return (
        <div className="header">
            <img className="headerImage" src={headerBanner} alt="" />
        </div>
    );
};

export default Header;