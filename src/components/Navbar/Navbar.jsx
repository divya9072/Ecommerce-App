import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className='Container'>
            <div className='Wrapper'>
                <div className='left'>
                    <div className="language">EN</div>
                    <div className="SearchContainer">
                        <input type="text"></input><Search style={{color:"gray",fontSize:16}}/>
                    </div>
                </div>
                <div className='center'><h1>FISA.</h1></div>
                <div className="right"><span>REGISTER</span>
                <span>SIGN IN</span>
                <span><Badge badgeContent={4} color="primary"/><ShoppingCartOutlined/></span></div>
            </div>
        </div>
    )
};

export default Navbar;
