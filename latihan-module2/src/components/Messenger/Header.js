import React from "react";
import { Link } from "react-router-dom"; // Using Link for navigation

export default function Header() {
  const headerStyle = {
    background: 'linear-gradient(to right, #007bff, #00bfff)', // gradient background
    color: '#ffffff' 
  };

  return (
    <header className="navbar navbar-expand-lg sticky-top" style={headerStyle}>
      <div className="container-fluid">
        <h1 className="fw-bold d-flex align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/LOGO_IBIK.png"
            alt="IBIK Logo"
            className="me-2"
            width="40"
            height="40"
          />
          IBI KESATUAN
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav nav-pills ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/chapter-1">Chapter One</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/chapter-2">Chapter Two</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/chapter-3">Chapter Three</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/sign-in">Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
