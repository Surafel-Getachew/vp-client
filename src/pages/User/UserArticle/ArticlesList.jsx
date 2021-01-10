import React, { useContext, useEffect, useState } from "react";
import ArticleContext from "../../../context/article/articleContext";
import ArticleItem from "./ArticleItem";
import styles from "./articleList.module.css";
const ArticlesList = (props) => {
  const { category } = props;
  const articleContext = useContext(ArticleContext);
  const {
    getArticleByCategory,
    articlesByCategory,
    userSearchedArticles,
  } = articleContext;
  useEffect(() => {
    if (category !== "All") {
      getArticleByCategory(category);
    }
  }, [category]);
  console.log("current cat", category);
  return (
    <div className={styles.articleListCnt}>
      <div className={styles.categoryTitleCnt}>
        <div className={styles.categoryTitleCenter}>
          <div className={styles.categoryTitleLine}></div>
          <h2>{category === undefined ? "Addiction" : category}</h2>
          <div className={styles.categoryTitleLine}></div>
        </div>
      </div>
      <div className={styles.articleItemsCnt}>
        {category !== "All"
          ? articlesByCategory.map((article) => (
              <div className={styles.articleItems}>
                <ArticleItem article={article} />
              </div>
            ))
          : userSearchedArticles.map((article) => (
              <div className={styles.articleItems}>
                <ArticleItem article={article} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default ArticlesList;
