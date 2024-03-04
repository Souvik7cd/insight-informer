import PropTypes from "prop-types";
import { Component } from "react";
import { Link } from "react-router-dom";
import { capitalize } from "../util/stringUtil";

export class Navbar extends Component {
  static propTypes = {
    categories: PropTypes.array,
  };

  setTheme(theme) {
    document.body.setAttribute('data-bs-theme', theme);
  }

  render() {
    return (
      <div style={{ fontFamily: "'Georgia', serif" }}>
        <div className="text-center my-4 d-none d-sm-block">
          <Link
            className="fw-bold h1 link-underline link-underline-opacity-0"
            to="/"
          >
            Insight Informer
          </Link>
        </div>
        <nav className="navbar navbar-expand-md border-top border-bottom border-dark">
          <div className="container">
            <Link className="navbar-brand fw-bold d-md-none" to="/">
              Insight Informer
            </Link>
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
                <li className="nav-item">
                  <Link
                    className="nav-link py-0"
                    aria-current="headlines"
                    to="/"
                  >
                    Headlines
                  </Link>
                </li>
                {this.props.categories.map((category, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      <Link className="nav-link py-0" to={category}>
                        {capitalize(category)}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="nav-item dropdown" aria-label="theme-selection">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="material-symbols-outlined">contrast</i>
                </a>
                <ul className="dropdown-menu shadow dropdown-menu-end">
                  <li>
                    <button
                      type="button"
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      onClick={this.setTheme("dark")}
                    >
                      <span className="d-flex align-items-center">
                        <i className="material-symbols-outlined">dark_mode</i>
                        <span className="ms-2">Dark</span>
                      </span>
                      <i className="material-symbols-outlined" style={{scale: "0.75"}}>check</i>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      onClick={this.setTheme("light")}
                    >
                      <span className="d-flex align-items-center">
                        <i className="material-symbols-outlined">light_mode</i>
                        <span className="ms-2">Light</span>
                      </span>
                      <i className="material-symbols-outlined" style={{scale: "0.75"}}>check</i>
                    </button>
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
