//import PropTypes from 'prop-types'
import { Component } from "react";

export class Navbar extends Component {
  //static propTypes = {}

  categories = [
    "Headlines",
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  render() {
    return (
      <div>
        <div className="text-center my-4 d-none d-sm-block">
          <a
            className="fw-bold h1 link-underline link-underline-opacity-0"
            href="/"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Insight Informer
          </a>
        </div>
        <nav
          className="navbar navbar-expand-md border-top border-bottom border-dark"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          <div className="container">
            <a
              className="navbar-brand fw-bold d-md-none"
              href="/"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Insight Informer
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
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-md-0 d-flex justify-content-center w-100">
                {this.categories.map((category, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      <a
                        className="nav-link py-0"
                        aria-current={category}
                        href="/"
                      >
                        {category}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="material-symbols-outlined">contrast</i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end show">
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <i className="material-symbols-outlined">brightness_7</i>
                      <span className="ms-2">Light</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <i className="material-symbols-outlined">dark_mode</i>
                      <span className="ms-2">Dark</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* 
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form> 
              */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
