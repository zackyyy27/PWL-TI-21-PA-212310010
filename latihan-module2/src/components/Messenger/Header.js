import React from "react";

export default function Headers() {
  const headerStyle = {
    background: 'linear-gradient(to right, #007bff, #00bfff)', // mengubah latar belakang menjadi gradient biru-putih
    color: '#ffffff' 
  };

  return (
    <header className="navbar navbar-expand-lg sticky-top" style={{ background: 'linear-gradient(to right, #007bff, #00bfff)' }}>
      <div className="container-fluid" style={headerStyle}>
        <h1 className="fw-bold">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/LOGO_IBIK.png" alt="IBIK Logo" className="me-2" width="40" height="40" />
        IBI KESATUAN
        </h1>
        <div>
        <ul className="nav nav-pills ms-auto">
            <li className="nav-item">
              <a className="nav-link text-light">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light">PWL</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
