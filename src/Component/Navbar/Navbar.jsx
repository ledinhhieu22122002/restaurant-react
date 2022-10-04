import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Navbar = (props) => {
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
                <Link className={`navbar__logo navbar-brand`} to='/restaurant-react/'>
                    <img src={props.logo} alt="" />
                </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <LLink to='/restaurant-react/' title='Home' />
                        <LLink to='/restaurant-react/Menu' title='Menu' />
                        <LLink to='/restaurant-react/AboutUs' title='About Us' />
                        <LLink to='/restaurant-react/OurStory' title='Our Story' />
                        <LLink to='/restaurant-react/Blog' title='Blog' />
                        <LLink to='/restaurant-react/OurStory' title='Our Story' />
                        <LLink to='/restaurant-react/Contact' title='Contact' />
                    </ul>
                    <div className="d-flex">
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