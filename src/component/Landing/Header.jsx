import React from "react";
import "./Header.css"
const Header = () => {
  return (
    <nav>
      <div className="nav-bar">
        <h1>
          Virtual <span>Psychiatrist</span>
        </h1>
      <div className="nav-link">
        <a className = "auth" href="/signup">Sign Up</a>
        <a href="/login">Sign In</a>
      </div>
      </div>
    </nav>
  );
};

export default Header;
