import React from "react";
import styles from "./Header.css"
const Header = () => {
  return (
    <nav>
      <div className={styles.navBar}>
        <h1>
          Virtual <span>Psychiatrist</span>
        </h1>
      <div className={styles.navLink}>
        <a className = "auth" href="/vp/user/signup">Sign Up</a>
        <a href="/vp/user/signin">Sign In</a>
      </div>
      </div>
    </nav>
  );
};

export default Header;
