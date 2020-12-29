import React, { useState, useContext, useEffect } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactQuill from "react-quill";
// import PsychPage from "../../../component/Page/PsychPage";
import Layout from "../../../component/Layout/Layout";
import ArticleItem from "../../../component/psychiatrist/ArticleItem/ArticleItem";
import styles from "./psychArticle.module.css";

import ArticleContext from "../../../context/article/articleContext";

const PsychArticle = () => {
  const articleContext = useContext(ArticleContext);
  const {
    addArticle,
    loadPsychiatristArticles,
    articles,
    current,
    updateArticle,
    clearCurrent,
  } = articleContext;

  const [article, setArticle] = useState({
    title: "",
    body: "",
  });

  const { title, body } = article;

  useEffect(() => {
    loadPsychiatristArticles();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (current !== null) {
      // setArticle({title:current.title,body:current.body});
      setArticle(current);
    } else {
      setArticle({ title: "", body: "" });
    }
    // eslint-disable-next-line
  }, [current]);
  // i have to check articleContext in the dependency array check the useEffect hook

  const onChangeTitle = (e) => {
    setArticle({ ...article, title: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current == null) {
      addArticle({ title, body });
    } else {
      updateArticle(article);
    }
    clearCurrent();
  };

  return (
    <Layout>
      <div className={styles.psychArticleCnt}>
        <form className={styles.psychArticleForm} onSubmit={onSubmit}>
          <label className={styles.psychArticleFormLabel} htmlFor="title">
            <span> Title</span>
          </label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChangeTitle}
            placeholder="title"
          />
          <br />
          <label className={styles.psychArticleFormLabel} htmlFor="body">
            Body
          </label>
          <br />
          {/* <CKEditor
              editor={ClassicEditor}
              data={body}
              onInit={(editor) => {
                console.log("editor is ready to use", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setArticle({ ...article, body: data });
              }}
            ></CKEditor> */}
          <ReactQuill style={{ height: "300px" }} />
          <input type="submit" value="Publish" />
        </form>
        <div>
          {articles.map((article) => (
            <div key={article._id}>
              <ArticleItem articles={article} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PsychArticle;
