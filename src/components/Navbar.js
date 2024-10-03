// Navbar.js
import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { FaSearch, FaCog, FaBell, FaCalendarAlt } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import "./Navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand href="#" className="navbar-logo">
        <div className="navbar-icon">
          <i className="fas fa-th"></i> {/* Left icon (square dots) */}
        </div>
        Test
      </Navbar.Brand>
      <Form className="ml-auto search-icon">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-sm-2"
        />
        <FaSearch />
      </Form>
      <Nav className="ml-auto nav-icons">
        <Nav.Link href="#">
          <FaCog />
        </Nav.Link>
        <Nav.Link href="#">
          <FaBell />
        </Nav.Link>
        <Nav.Link href="#">
          <FaCalendarAlt />
        </Nav.Link>
        <Nav.Link href="#" className="profile-icon">
          <MdAccountCircle />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
