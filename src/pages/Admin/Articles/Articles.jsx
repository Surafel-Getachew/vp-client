import React, { useContext, useEffect, useState } from "react";
import { Input, Select } from "antd";
import ArticleContext from "../../../context/article/articleContext";
import Layout from "../Layout/Layout";
import AdminArticleCard from "./AdminArticleCard";
import styles from "./adminArticles.module.css";
const { Search } = Input;
const { Option } = Select;
const Articles = () => {
  const articleContext = useContext(ArticleContext);
  const {
    loadArticle,
    articles,
    getArticleByCategory,
    articlesByCategory,
    searchAllArticle,
    userSearchedArticles,
    refresh
  } = articleContext;
  const [category, setCategory] = useState(null);
  const [searchValue, setSearchvalue] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    loadArticle();
  },[refresh])
  useEffect(() => {
    if (searchValue == "" && category == null) {
      loadArticle();
    }
  }, [category, searchValue]);
  useEffect(() => {
    getArticleByCategory(category);
  }, [category]);
  useEffect(() => {
    if (articlesByCategory !== []) {
      setPosts(articlesByCategory);
    }
  }, [articlesByCategory]);
  useEffect(() => {
    if (userSearchedArticles !== []){
        setPosts(userSearchedArticles)
    }
  },[userSearchedArticles])
  useEffect(() => {
    if (articles !== []) {
      setPosts(articles);
    }
  }, [articles]);
  const onCategoryChange = (value) => {
    setCategory(value);
  };
  const onSearchChange = (e) => {
    setSearchvalue(e.target.value)
    searchAllArticle({searchText:e.target.value});
  }
  const onSearch = () => {
    searchAllArticle({searchText:searchValue});
  }
  return (
    <Layout>
      <div className={styles.adminArticleCnt}>
        <div className={styles.adminArticleTop}>
          <Search
            placeholder="input search text"
            allowClear
            value={searchValue}
            onChange={onSearchChange}
            onSearch={onSearch}
            style={{ width: 200, margin: "0 10px" }}
            enterButton
          />
          <Select
            showSearch
            style={{ width: 200, marginRight: "30px" }}
            placeholder="Category"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            onChange={onCategoryChange}
            value={category}
            // onSearch={onSearch}
          >
            <Option value="Addiction">Addiction</Option>
            <Option value="Family">Family</Option>
            <Option value="Other">Other</Option>
          </Select>
        </div>
        <div className={styles.categoryTitle}>
          <hr style={{ width: "90px" }} />
          <h3>{category == null ? "All" : category}</h3>
          <hr style={{ width: "90px" }} />
        </div>
        <div className={styles.articleCardCnt}>
          {posts.map((article) => (
            <AdminArticleCard article={article} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Articles;
