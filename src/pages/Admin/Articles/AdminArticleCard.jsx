import React, { useContext } from "react";
import ArticleContext from "../../../context/article/articleContext";
import { Link } from "react-router-dom";
import styles from "./articleCard.module.css";
import {
  DeleteOutlined,
  EyeOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
const { confirm } = Modal;
const AdminArticleCard = ({ article }) => {
  const { _id, title, articleTag, articlePhoto } = article;
  const articleContext = useContext(ArticleContext);
  const { adminDeleteArticle } = articleContext;
  function showDeleteConfirm() {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleOutlined />,
      content: "Once deleted it can't be reversed",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        adminDeleteArticle(_id);
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }
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
        <div className={styles.deleteArticleBtnCnt} onClick={showDeleteConfirm}>
          <DeleteOutlined style={{ fontSize: "17px", marginRight: "3px" }} />
          Delete Article
        </div>
      </div>
    </div>
  );
};

export default AdminArticleCard;
