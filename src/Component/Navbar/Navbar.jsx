import React from 'react';
/* Import Navbar */
import NavBar from "./Navbar.module.scss";
import Logo from "../../img/Logo.svg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className={`${NavBar.navbar__logo} navbar-brand`} href='# '>
                    <img src={Logo} alt="" />   
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`${NavBar.navbar__link} nav-link`} href='/Home'>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${NavBar.navbar__link} nav-link`} href='/Menu'>Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${NavBar.navbar__link} nav-link`} href='/AboutUs'>AboutUs</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${NavBar.navbar__link} nav-link`} href='/OurStory'>Our Story</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${NavBar.navbar__link} nav-link`} href='/Blog'>Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${NavBar.navbar__link} nav-link`} href='/Contact'>Contact</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <a className={NavBar.navbar__clone_project} href="/clone ">Clone Project
                            <span className={NavBar.navbar__clone_icon}><HiOutlineArrowNarrowRight /></span></a>
                    </form>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;