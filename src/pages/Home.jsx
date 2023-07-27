import React from "react";
import "./Home.css";
import bookshelfImage from "../images/bookstore.jpg";

const Home = () => {
  return (
    <div className="Home-Page bg-dark text-white container-fluid  d-flex justify-content-center align-items-center">
      <div className="row container">
        <div
          className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
          style={{ height: "91.5vh" }}
        >
          <h2 style={{ fontSize: "50px" }}>
            Empowering Minds, One Book at a Time: Your Trusted Bookstore Online.
          </h2>
          <button className="viewBook my-3">View Books</button>
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-items-center flex-column"
          style={{ height: "91.5vh" }}
        >
          <img
            className="homeimg img-fluid"
            src={bookshelfImage}
            alt="Bookshelf"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
