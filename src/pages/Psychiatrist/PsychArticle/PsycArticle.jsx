import React, { useState, useContext, useEffect } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PsychNav from "../../../component/psychiatrist/PsychNav/PsychNav";
import styles from "./psychArticle.module.css";
import ArticleItem from "../../../component/psychiatrist/ArticleItem/ArticleItem";
import ArticleContext from "../../../context/article/articleContext";
import PsychPage from "../../../component/Page/PsychPage";

const PsycArticle = () => {
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
      setArticle(current);
    } else {
      setArticle({ title: "", body: "" });
    }
    // eslint-disable-next-line
  }, [articleContext, current]);
  const onChange = (e) => {
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
    // <div className={styles.psychArticle}>
    //   <div className={styles.psychArticleCenter}>
    // {/* <PsychNav /> */}
    <PsychPage>
      <div className={styles.psychArticleCnt}>
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Title</label>
          <br />
          <input type="text" name="title" value={title} onChange={onChange} />
          <br />
          <label htmlFor="body">Body</label>
          <br />
          <CKEditor
            editor={ClassicEditor}
            data={body}
            onInit={(editor) => {
              console.log("editor is ready to use", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setArticle({ ...article, body: data });
            }}
          ></CKEditor>
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
    </PsychPage>
    //   {/* </div>
    // </div> */}
  );
};

export default PsycArticle;
