import React from "react";
import style from "./form.module.css";



const FormComponent = (props) => {
  return (
      <div className={style.formCon}>
        <div className={style.pic}>
            <img src= {require("./user_auth.svg")} alt=""/>
        </div>
        <div className={style.form}>
        {props.children}  
        </div>
      </div>
  );
};

export default FormComponent;
