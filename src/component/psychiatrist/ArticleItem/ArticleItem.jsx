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
      <div dangerouslySetInnerHTML={createMarkup(articles.body)}></div>
      <div className = {styles.articleItemBtn}>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ArticleItem;
