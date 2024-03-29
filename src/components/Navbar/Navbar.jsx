import { React, useState } from "react";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import Toggle from "./../toggle/Toggle";

export default function Navbar() {
  return (
    <div className="general-nav">
      <div className="nav-body">
        <div className="navbar">
          <Link to="./">
            <div className="logo">Shobam</div>
          </Link>
          <NavLink
            to="./about"
            className={({ isActive }) => {
              return "nav-link" + (isActive ? " highlight" : "");
            }}
          >
            About
          </NavLink>

          <NavLink
            to="./services"
            className={({ isActive }) => {
              return "nav-link" + (isActive ? " highlight" : "");
            }}
          >
            Services
          </NavLink>

          <NavLink
            to="./worklist"
            className={({ isActive }) => {
              return "nav-link" + (isActive ? " highlight" : "");
            }}
          >
            Works
          </NavLink>
          <NavLink
            to="./skills"
            className={({ isActive }) => {
              return "nav-link" + (isActive ? " highlight" : "");
            }}
          >
            Skills
          </NavLink>
          <NavLink
            to="./contact"
            className={({ isActive }) => {
              return "nav-link" + (isActive ? " highlight" : "");
            }}
          >
            Contact
          </NavLink>

          <a href="https://docs.google.com/document/d/1HRSf0vq37Z9WphhQIGYmm6_MhlFd1HDAiVhO63MWrik/edit?usp=sharing" target='_blank'>
            <button className="resume">
              <i className="fa fa-download"></i>Resume
            </button>
          </a>
        </div>

        <Toggle />
      </div>

      {/* <div className="small-nav">
        <div class="offcanvas offcanvas-start" id="demodd">
          <div class="offcanvas-header">
            <h1 class="offcanvas-title">Shobam</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div class="offcanvas-body">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <button class="btn btn-primary" type="button">
              Button
            </button>
          </div>
        </div>
        <button
          class="btn btn-secondary"
          data-bs-target="#demodd"
          data-bs-toggle="offcanvas"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
      </div> */}
    </div>
  );
}
