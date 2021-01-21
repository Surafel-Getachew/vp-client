import React, { useState, useContext, useEffect } from "react";
import Layout from "../../../component/Layout/Layout";
import styles from "./psych-article.module.css";
import ReactQuill from "react-quill";
import { Select, Input, Upload, Button, Alert } from "antd";
import ArticleContext from "../../../context/article/articleContext";
import ArticleItems from "./ArticleItems";
import { UploadOutlined } from "@ant-design/icons";
const { Search } = Input;
const { Option } = Select;
const PsychArticle = (props) => {
  const articleContext = useContext(ArticleContext);
  const {
    addArticle,
    loadPsychiatristArticles,
    psychSearchArticle,
    articles,
    current,
    clearCurrent,
    updateArticle,
  } = articleContext;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [articleTag, setTag] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [articlePhoto, setArticlePhoto] = useState(null);
  const [btnName, setBtnName] = useState("Submit");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    loadPsychiatristArticles();
  }, []);
  useEffect(() => {
    if (current !== null) {
      setTitle(current.title);
      setBody(current.body);
      setTag(current.articleTag);
      setBtnName("Update");
    }
  }, [current]);
  useEffect(() => {
    if (searchValue === "") {
      loadPsychiatristArticles();
    }
  }, [searchValue]);
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onBodyChange = (value) => {
    setBody(value);
  };
  const onArticlePhoto = ({ fileList }) => {
    setArticlePhoto(fileList[0].originFileObj);
  };
  const onSubmit = (e) => {
    if (
      title === "" ||
      body === "" ||
      articleTag === "" ||
      articlePhoto === null
    ) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false)
      }, 5000);
    } else {
      e.preventDefault();
      if (current === null) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("body", body);
        formData.append("articleTag", articleTag);
        formData.append("articlePhoto", articlePhoto);
        addArticle(formData);
        setBody("");
        setTitle("");
        setTag("");
      } else {
        const articlee = {
          title: title,
          body: body,
          articleTag: articleTag,
        };
        const idOfArticle = current._id;
        updateArticle(articlee, idOfArticle);
        clearCurrent();
        setBody("");
        setTitle("");
        setTag("");
        setBtnName("Submit");
      }
    }
    // console.log("submit button");
  };
  const onArticleSearch = () => {
    psychSearchArticle({
      search: searchValue,
    });
  };
  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
    psychSearchArticle({ search: e.target.value });
  };
  const onTagChange = (value) => {
    setTag(value);
  };
  return (
    <Layout>
      <div className={styles.articleCnt}>
        <div className={styles.articleFormCnt}>
          <div className={styles.articleCenter}>
            <form className={styles.formContainer}>
              {showAlert ? (
                <Alert
                  style={{ width: "300px",marginBottom:"10px"}}
                  message="All Fileds must be filled"
                  type="error"
                />
              ) : null}
              <Upload onChange={onArticlePhoto} required>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
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
                required
              ></input>
              <br />
              <label className={styles.richTextSpan} htmlFor="story">
                Blog Post
              </label>{" "}
              <br />
              <ReactQuill
                className={styles.richText}
                onChange={onBodyChange}
                value={body}
                
              />
              <div className={styles.articleTags}>
                <label htmlFor="tags" className={styles.tagsSpan}>
                  Tags
                </label>
                <br />
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Select Category"
                  optionFilterProp="children"
                  onChange={onTagChange}
                  value={articleTag}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="Addiction">Addiction</Option>
                  <Option value="Family">Family</Option>
                  <Option value="Social">Social</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </div>
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
          <Search
            style={{ width: "50%" }}
            placeholder="input search text"
            value={searchValue}
            onChange={onSearchChange}
            onSearch={onArticleSearch}
            required
            enterButton
          />
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
