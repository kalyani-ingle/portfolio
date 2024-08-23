"use client";
import React from "react";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 999,
        }}
      >
        <nav className="flex-container">
          <ul>
            <li>
              <HashLink smooth to="#about">
            <i className="fas fa-user"/>&nbsp;About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#projects">
              <i className="fas fa-briefcase"/>&nbsp;Projects
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#contact">
            <i className="fas fa-envelope"/>&nbsp;Contact
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
