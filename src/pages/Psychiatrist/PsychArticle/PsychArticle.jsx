import React,{useState,useContext} from "react";
import Layout from "../../../component/Layout/Layout";
import styles from "./psych-article.module.css";
import ReactQuill from "react-quill";
import ArticleContext from "../../../context/article/articleContext"
import ArticleItems from "./ArticleItems";
const PsychArticle = (props) => {
  const articleContext = useContext(ArticleContext);
  const {
    addArticle
  } = articleContext
  const [title,setTitle] = useState("");
  const [body,setBody] = useState("");
  const onTitleChange = (e) => {
    setTitle(e.target.value)
    console.log(title);
  }
  const onBodyChange = (value) => {
    setBody(value)
  } 
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Title",title);
    console.log("Body",body);
    addArticle({
      title:title,
      body:body
    })
    setTitle("");
    setBody("");
    // console.log("submit button");
  }
  return (
    <Layout>
      <div className = {styles.articleCnt}>
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
              value = {title}
              onChange = {onTitleChange}
            ></input>
            <br />
            <label className={styles.richTextSpan} htmlFor="story">
              Blog Post
            </label>{" "}
            <br />
            <ReactQuill className={styles.richText} onChange = {onBodyChange}/>
            <div>
              <input
                className={styles.submitBtn}
                type="submit"
                value="submit"
                onClick = {onSubmit}
              />
            </div>
          </form>
        </div>
      </div>
      <div className = {styles.articleList}>
        <ArticleItems/>
      </div>
      </div>
    </Layout>
  );
};

export default PsychArticle;
