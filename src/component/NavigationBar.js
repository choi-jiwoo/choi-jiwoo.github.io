import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import cv from "../asset/cv.pdf";

const NavigationBar = () => {
  return (
    <Navbar className="py-2 flex justify-between" variant="dark" expand="lg">
      <Link
        className="navbar-brand font-extrabold tracking-widest"
        to="/"
        reloadDocument
      >
        <p className="text-2xl blue-theme">CHOI JI WOO</p>
      </Link>
      <Link
        className="nav-link font-extrabold tracking-widest"
        to={cv}
        target="_blank"
      >
        CV
      </Link>
    </Navbar>
  );
};

export default NavigationBar;
