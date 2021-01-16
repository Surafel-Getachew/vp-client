import React from "react";
import { Link } from "react-router-dom";
import styles from "./articleCard.module.css";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";

const AdminArticleCard = ({ article }) => {
  const { _id, title, articleTag, articlePhoto } = article;
  return (
    <div className={styles.articleCard}>
      <div className={styles.articleImgCnt}>
        {/* <img src={require("../../../assets/family1.jpg")} alt="" /> */}
        <img src={`data:image/jpeg;base64,${articlePhoto}`} alt="" />
      </div>
      <div>
        <h2>
          <Link
            className={styles.articleTitleLink}
            to={{
              pathname: `/vp/article/${_id}`,
            }}
          >
            {title}
          </Link>
        </h2>
      </div>
      <div className={styles.articleCategoryCnt}>
        <h4>Category:</h4> <p>{articleTag}</p>
      </div>
      <div className={styles.articleCardBtnCnt}>
        <div className={styles.viewArticleBtnCnt}>
          <Link
            to={{
              pathname: `/vp/article/${_id}`,
            }}
            style={{ color: " #c6b1f0" }}
          >
            <EyeOutlined
              style={{ fontSize: "17px", marginRight: "3px" }}
              className={styles.viewArticleIcon}
            />
            Read Article
          </Link>
        </div>
        <div className={styles.deleteArticleBtnCnt}>
          <DeleteOutlined style={{ fontSize: "17px", marginRight: "3px" }} />
          Delete Article
        </div>
      </div>
    </div>
  );
};

export default AdminArticleCard;
