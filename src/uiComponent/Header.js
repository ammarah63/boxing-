import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Image, Form, FormControl, Button } from "react-bootstrap";
import './Header.css';

function Header() {
    const [toggleState, setToggleState] = useState("");

    function toggle() {
        setToggleState(toggleState === "change" ? "" : "change");
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="header">
            {/* <Container > */}
            <Navbar.Brand>
                <Link to="/">
                    <Image className="logo" src={require('../assets/images/logo.png')} draggable={false} />
                </Link>
                <Link to="/" className="brand-text">The Great Boxing</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
                <span className={`switch ${toggleState} menu`} onClick={toggle}>
                    <div className="bar1" />
                    <div className="bar2" />
                    <div className="bar3" />
                </span>
            </Navbar.Toggle>

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto center-nav">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/contact-us">Contact Us</Link>
                </Nav>
                <Nav className="right-nav">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Link to="/login">Login</Link>
                    <Link to="/sign-up">Sign Up</Link>
                </Nav>
            </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
    );
}

export default Header;
