import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            Bookstore
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* Use Bootstrap utility classes to change the color of the hamburger menu icon */}
            <span
              className="navbar-toggler-icon"
              style={{ filter: "invert(1)" }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link className="nav-item nav-link active text-white" to="/">
                Home
              </Link>
              <Link className="nav-item nav-link active text-white" to="/books">
                Books
              </Link>
              <Link
                className="nav-item nav-link active text-white"
                to="/addBooks"
              >
                Add Books
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <hr style={{ margin: "0", borderColor: "white", borderWidth: "1px" }} />
    </div>
  );
};

export default Navbar;
