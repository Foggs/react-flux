import React, { Component } from "react";

class Header extends Component {
  renderContent() {
    console.log(this.props.auth)
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="nav-item">
            <a className="nav-link" href="/auth/google">
              Login
            </a>
          </li>
        )

      default:
        return (
        <div>
        <li className="nav-item">
          <a className="nav-link" href="/api/logout">
            Logout
          </a>
        </li>

        </div>
      )
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
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
              <ul className="navbar-nav mr-auto">{this.renderContent()}</ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
