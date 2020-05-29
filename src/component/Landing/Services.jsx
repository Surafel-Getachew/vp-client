import React from "react";
import "./services.css";
const Services = () => {
  return (
    <div>
      <section id="services">
        <div className="services-title">
          <h2>What we can offer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            earum blanditiis sit totam repellendus enim non impedit ad modi
            quia.
          </p>
        </div>
        <div className="services-center">
          <div className="services-card">
            <img
              src={require("../../assets/images/service-icons/relationship.png")}
              alt=""
            />
            <h3>relationship</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              officia!
            </p>
          </div>
          <div className="services-card">
            <img
              src={require("../../assets/images/service-icons/relaxation.png")}
              alt=""
            />
            <h3>mental health</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              officia!
            </p>
          </div>
          <div className="services-card">
            <img
              src={require("../../assets/images/service-icons/relaxation.png")}
              alt=""
            />
            <h3>feelings</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              officia!
            </p>
          </div>
          <div className="services-card">
            <img
              src={require("../../assets/images/service-icons/conflicting.png")}
              alt=""
            />
            <h3>conflicting</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              officia!
            </p>
          </div>
          <div className="services-card">
            <img
              src={require("../../assets/images/service-icons/meditation.png")}
              alt=""
            />
            <h3>meditation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              officia!
            </p>
          </div>
          <div className="services-card">
            <img
              src={require("../../assets/images/service-icons/depression.png")}
              alt=""
            />
            <h3>depression</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              officia!
            </p>
          </div>
          <div className="services-card">
            <img
              src={require("../../assets/images/service-icons/mind.png")}
              alt=""
            />
            <h3>mindgames</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              officia!
            </p>
          </div>
          <div className="services-card">
            <img
              src={require("../../assets/images/service-icons/relaxation.png")}
              alt=""
            />
            <h3>Relaxation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              officia!
            </p>
          </div>
        </div>
      </section>
      <section id="about-us">
        <div className="about-center">
          <div className="about-img">
            <img src={require("../../assets/images/person.png")} alt="" />
          </div>
          <div className="about-text">
            <h1>About us</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            eveniet ipsam earum ratione voluptatibus necessitatibus qui
            obcaecati repellat hic facilis rem perspiciatis quisquam, dolor
            deserunt et ullam possimus asperiores commodi? Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Ex corporis autem minima
            magnam quidem, cupiditate tempore illo impedit quo modi voluptatum
            amet enim reiciendis. Molestias, nostrum sed quam illum possimus
            quidem tenetur inventore laudantium ea ratione quas odio incidunt
            commodi voluptas dolor laborum? Perferendis maxime nam dicta veniam
            fugit autem?
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Services;
