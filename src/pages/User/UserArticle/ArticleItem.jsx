import React from "react";
import { Link } from "react-router-dom";
import styles from "./articleItems.module.css";
const ArticleItem = (props) => {
  const { article } = props;
  const { title, body, _id, articleTag } = article;
  return (
    <div className={styles.articleCard}>
      <div className={styles.articleImg}>
        <img src={require("../../../assets/family1.jpg")} alt="" />
      </div>
      <div className={styles.articleCardTitle}>
        <h1>
          <Link
            className = {styles.articleLink}
            to={{
              pathname: `/vp/article/${_id}`,
              state: {
                // id: psychOwner,
                // article:article
              },
            }}
          >
            {title}
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default ArticleItem;

{
  /* <Link
className={styles.profileLink}
to={{
  pathname: "/vp/psychiatrist/detail-profile",
  state: {
    id: psychOwner,
  },
}}
>
View Profile
</Link> */
}
