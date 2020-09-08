import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import style from "./serspec.module.css";
const ServicesSpecialites = ({ profile }) => {
  const [serASpec, setSerASpec] = useState({
    services: [],
    specialites: [],
  });
  const [loading, setLoading] = useState(true);
  const { services, spcialites } = serASpec;

  useEffect(() => {
    setSerASpec({
      spcialites: profile.specializations,
      services: profile.service,
    });
    // If error comes up check setSerASpec line 13 and change how you set the state
    if (profile.service && profile.specializations !== undefined) {
      setLoading(false);
    }
  }, [profile]);
  console.log(profile);
  return (
    <div className={style.servSpecCnt}>
      <div className={style.ser}>
        <h4>Services</h4>
        {loading === false ? (
          services.map((service) => (
            <ul>
              <li key = {service}>{service}</li>
            </ul>
          ))
        ) : (
          <Spin />
        )}
      </div>
      <div className={style.spec}>
        <h4>Specialites</h4>
        {loading === false ? (
          spcialites.map((speciality) => (
            <ul>
              <li key = {speciality._id}>{speciality}</li>
            </ul>
          ))
        ) : (
          <Spin />
        )}
      </div>
    </div>
  );
};

export default ServicesSpecialites;
