import "./Header.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Productlist from "./Prodlist";
import AboutUs from "./Aboutus";
import ContactUs from "./Contact";
import { loginUser, registerUser } from "./api";
import { useState } from 'react';

const Header = ({ countH, setcount, popStatus, setpopStatus }) => {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src="./image.png" alt="Your Logo" />
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <div className="cart-icon" onClick={setpopStatus}>
                    <span className="cart-count">{countH}</span>
                </div>
            </header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route 
                    path='/products' 
                    element={
                        <Productlist 
                            receivecartCount={setcount}
                            popupStatus={popStatus}
                            popupclose={setpopStatus}
                        />
                    } 
                />
                <Route path='/aboutus' element={<AboutUs />} />
                <Route path='/contact' element={<ContactUs />} />
            </Routes>
        </div>
    );
}

export default Header;
