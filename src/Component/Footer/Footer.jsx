import React from 'react';
import Logo from "../../assets/img/Logo.svg";
import './Footer.scss';
import Button from "../button/Button";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
    return (
        <footer id='Footer'>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className={`navbar-brand`} href='# '>
                        <img src={Logo} alt="" />
                    </a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href='/Home'>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/Menu'>Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/AboutUs'>AboutUs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/OurStory'>Our Story</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/Blog'>Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/Contact'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
            <div className="bottom">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col">
                            <span>© 2021 Finsweet | All rights reserved.</span>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="icon">
                                    <BsFacebook />
                                </div>
                                <div className="icon">
                                    <BsTwitter />
                                </div>
                                <div className="icon">
                                    <AiOutlineInstagram />
                                </div>
                                <div className="icon">
                                    <AiFillLinkedin />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <Button title="Contact Us" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;