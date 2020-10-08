import React from "react";
import "./landing.css";
import Header from "../../component/Landing/Header";
import Services from "../../component/Landing/Services";

const Landing = () => {
  return (
    <div className="landing-center">
      {/* <Header className="header-cmp"/> */}
      <Services />
    </div>
  );
};

export default Landing;
