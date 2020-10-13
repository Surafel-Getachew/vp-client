import React from "react";
import Layout from "../../../component/Layout/Layout";
import styles from "./psych-article.module.css";
import ReactQuill from "react-quill";
const PsychArticle = () => {
  return (
    <Layout>
      <div className={styles.articleFormCnt}>
        <div className={styles.articleCenter}>
          <form className={styles.formContainer}>
            <label className={styles.titleSpan} htmlFor="title">
              Title
            </label>
            <br />
            <input
              className={styles.titleInput}
              type="text"
              name="title"
            ></input>
            <br />
            <label className={styles.richTextSpan} htmlFor="story">
              Blog Post
            </label>{" "}
            <br />
            <ReactQuill className={styles.richText} />
            <div>
              <input
                className={styles.submitBtn}
                type="submit"
                value="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default PsychArticle;
