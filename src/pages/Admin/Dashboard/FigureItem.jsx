import React from "react";
import styles from "./figureItem.module.css";
const FigureItem = ({ figure }) => {
  const { Icon, name, totalNum, backgroundColor, color } = figure;
  return (
    <div className={styles.figureItemCnt}>
      <div className={styles.figureIconCont}>
        <icon
          style={{ color: color, background: backgroundColor }}
          className={`${Icon} ${styles.figureIcon}`}
        />{" "}
      </div>
      <div className={styles.totalNumCont}>
        <span className={styles.figureTitle}>{name}</span>
        <h2>{totalNum}</h2>
      </div>
    </div>
  );
};

export default FigureItem;
