import React from "react";
import { Link } from "react-router-dom";
import HeaderNavbar from "./headerNavbar/HeaderNavbar";
import MainNavbar from "./mainNavbar/MainNavbar";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbarMain">
      <div className="headerNavbar">
        <HeaderNavbar />
      </div>
      <div className="mainNavbar">
        <MainNavbar />
      </div>
    </div>
  );
}