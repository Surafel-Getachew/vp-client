import React from "react";

const About = (props) => {
  const {profile} = props
  return (
    <div style={{ width: "500px", marginLeft: "40px" }}>
        <h4>About Me</h4>
      <p>
        {profile}
      </p>
    </div>
  );
};

export default About;
