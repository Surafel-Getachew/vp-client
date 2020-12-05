import React from "react";
import style from "./form.module.css";

const FormComponent = (props) => {
  return (
    <div className={style.white}>
      <div className={style.formCon}>
        <div className={style.pic}>
          {/* <img src={require("./undraw_medicine_b1ol.png")} alt="" /> */}
          <img src={require("../../../../assets/authentication.svg")} alt="" />
          {/* <div className={style.filterimg}></div> */}
        </div>
        <div className={style.form}>{props.children}</div>
      </div>
    </div>
  );
};

export default FormComponent;
