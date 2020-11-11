import React from "react";
import { CalendarFilled } from "@ant-design/icons";
import styles from "./figureItems.module.css";
const FigureItem = (props) => {
  const { colors, backgroundColor,Icon, name, totalNum } = props;
  return (
    <div className={styles.figureItemCont}>
      <div className={styles.figureIconCont}>
        <icon style={{ color: colors,background:backgroundColor }} className={`${Icon} ${styles.figureIcon}`} />{" "}
      </div>
      <div className={styles.totalNumCont}>
        <span className={styles.figureTitle}>{name}</span>
        <h2>{totalNum}</h2>
      </div>
    </div>
  );
};

export default FigureItem;
