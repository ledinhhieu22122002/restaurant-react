import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = (props) => {
    const [cout, setCout] = useState(false);
    function MenuNavBar() {
        return setCout(pre => !cout);
    }
    const LLink = (props) => {
        return (
            <li className="nav-item">
                <Link className="navbar__link" to={props.to}>{props.title}</Link>
            </li>
        )
    }
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className={`logo navbar__logo navbar-brand`} to='/'>
                    <img src={props.logo} alt="" />
                </Link>
                <button className="menu-mobile" onClick={MenuNavBar}>
                    <AiOutlineMenu />
                </button>
                <div className={`nav-ul ${cout ? "show" : ""} collapse navbar-collapse`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <LLink to='/' title='Home' />
                        <LLink to='/Menu' title='Menu' />
                        <LLink to='/AboutUs' title='About Us' />
                        <LLink to='/OurStory' title='Our Story' />
                        <LLink to='/Blog' title='Blog' />
                        <LLink to='/OurStory' title='Our Story' />
                        <LLink to='/Contact' title='Contact' />
                    </ul>
                    <div className="button d-flex">
                        <Link className="navbar__clone_project" to="/clone ">
                            Clone Project
                            <span className="navbar__clone_icon"><HiOutlineArrowNarrowRight /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;