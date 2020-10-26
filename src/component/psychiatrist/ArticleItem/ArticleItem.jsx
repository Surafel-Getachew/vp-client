import React, { useContext } from "react";
import ArticleContext from "../../../context/article/articleContext";
import styles from "./articleItem.module.css";

const ArticleItem = ({ articles }) => {
  const articleContext = useContext(ArticleContext);
  const { deleteArticle, setCurrent } = articleContext;
  function createMarkup(markup) {
    return {
      __html: markup,
    };
  }

  const onDelete = () => {
    deleteArticle(articles._id);
  };

  const onEdit = () => {
    setCurrent(articles);
  };

  return (
    <div className={styles.articleItem}>
      <h1 dangerouslySetInnerHTML={createMarkup(articles.title)}></h1>
      <div
        className={styles.articleItemBody}
        dangerouslySetInnerHTML={createMarkup(articles.body)}
      ></div>
      <div className={styles.articleItemFooter}>
        <div>
          <img src= {require("../../../assets/images/doctors/doctor-thumb-02.jpg")} alt=""/>
          {/* <span>{articles.date}</span> */}
        </div>
        <div>
          <button onClick={onEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>{" "}
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
