import React, { Component, useContext } from "react";
import style from "./style.module.css";
import AuthContext from "../../context/auth/authContext";
const Filter = () => {
  const authContext = useContext(AuthContext);
  const { showForgotPassword } = authContext;
  const onClick = () => {
    showForgotPassword();
  };
  return <div onClick={onClick} className={style.filter}></div>;
};

export default Filter;


