import React, { useState, useContext, useEffect } from "react";
import Layout from "../../../component/Layout/Layout";
import styles from "./psych-article.module.css";
import ReactQuill from "react-quill";
import ArticleContext from "../../../context/article/articleContext";
import ArticleItems from "./ArticleItems";
const PsychArticle = (props) => {
  const articleContext = useContext(ArticleContext);
  const {
    addArticle,
    loadPsychiatristArticles,
    articles,
    current,
    clearCurrent,
    updateArticle,
  } = articleContext;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [btnName, setBtnName] = useState("Submit");
  useEffect(() => {
    loadPsychiatristArticles();
  }, []);
  useEffect(() => {
    if (current !== null) {
      setTitle(current.title);
      setBody(current.body);
      setBtnName("Update");
    }
  }, [current]);
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onBodyChange = (value) => {
    setBody(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addArticle({
        title: title,
        body: body,
      });
      setBody("");
      setTitle("");
    } else {
      const articlee = {
        title: title,
        body: body,
      };
      const idOfArticle = current._id;
      updateArticle(articlee, idOfArticle);
      clearCurrent();
      setBody("");
      setTitle("");
      setBtnName("Submit");
    }
    // console.log("submit button");
  };
  return (
    <Layout>
      <div className={styles.articleCnt}>
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
                value={title}
                onChange={onTitleChange}
              ></input>
              <br />
              <label className={styles.richTextSpan} htmlFor="story">
                Blog Post
              </label>{" "}
              <br />
              <ReactQuill className={styles.richText} onChange={onBodyChange} value = {body}/>
              <div>
                <input
                  className={styles.submitBtn}
                  type="submit"
                  value={btnName}
                  onClick={onSubmit}
                />
              </div>
            </form>
          </div>
        </div>
        {/* <Carousel> */}
        <div className={styles.articleList}>
          {articles.map((article) => (
            <div key={article._id}>
              <ArticleItems article={article} />
            </div>
          ))}
        </div>
        {/* </Carousel> */}
      </div>
    </Layout>
  );
};

export default PsychArticle;
