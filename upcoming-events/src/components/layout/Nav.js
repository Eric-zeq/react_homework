import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
import logo from "../../images/logo.svg";
import request from "../../images/measering.svg";
import calculator from "../../images/calculation.svg";

function Nav() {
  return (
    <header className={classes.header}>
        <div className={classes.logo}><img src={logo} alt="logo" /></div>
        <nav>
            <ul>
                <li><Link to="/">Services</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contacts">Contact</Link></li>
            </ul>
        </nav>
        <div className={classes.request}>
            <img src={request} alt="request" />
             Make a Request
        </div>
        <div className={classes.calculator}>
            <img src={calculator} alt="calculator" />
            Calculator
        </div>
    </header>
  );} 

export default Nav;
