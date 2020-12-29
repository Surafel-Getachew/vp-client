import React, { useContext } from "react";
import ArticleContext from "../../../context/article/articleContext";
import ShowMoreText from "react-show-more-text";
import styles from "./articleItems.module.css";
import { Button } from "antd";
const ArticleItems = ({ article }) => {
  const { _id, body, title, owner } = article;
  const articleContext = useContext(ArticleContext);
  const { deleteArticle, setCurrent } = articleContext;
  const onDelete = () => {
    deleteArticle(_id);
  };

  const onUpdate = () => {
    const article = {
      _id: _id,
      title: title,
      body: body,
    };
    setCurrent(article);
  };

  function createMarkup(markup) {
    return {
      __html: markup,
    };
  }
  return (
    <div className={styles.articleItemCnt}>
      <div className={styles.articleImg}>
        <img src={require("../../../assets/family.jpeg")} alt="" />
      </div>
      <div className={styles.articleContentCnt}>
        <h2>{title}</h2>
        <ShowMoreText
          lines={3}
          more="Read more"
          less="Read less"
          className="content-css"
          anchorClass="my-anchor-css-class"
          expanded={false}
          width={200}
          height={120}
        >
          <div dangerouslySetInnerHTML={createMarkup(body)}></div>
        </ShowMoreText>
        <div className={styles.btnCnt}>
          <Button type="primary" ghost onClick={onUpdate}>
            Edit
          </Button>
          <Button danger onClick={onDelete}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleItems;

// import { Collapse } from "antd";
// const { Panel } = Collapse;
// const count = 3;

// const text = `
// A dog is a type of domesticated animal.
// Known for its loyalty and faithfulness,
// it can be found as a welcome guest in many households across the world.
// `;
// function callback(key) {
// console.log(key);
// }

{
  /* <Collapse showArrow={false} defaultActiveKey={["1"]} onChange={callback}>
<Panel
  showArrow={false}
  header="This is panel header with arrow icon"
  key="1"
>
  <p>{text}</p>
</Panel>
<Panel
  showArrow={false}
  header="This is panel header with no arrow icon"
  key="2"
>
  <p>{text}</p>
</Panel>
</Collapse> */
}

{
  /* <button className={`${styles.articleBtn} ${styles.articleUpdateBtn}`}>
            Update
          </button> */
}
{
  /* <button className={`${styles.articleBtn} ${styles.articleDeleteBtn}`}>
            Delete
          </button> */
}
