import React, {useState,useContext} from "react";
import AuthContext from "../../../context/article/articleContext";
import { Input, Select } from "antd";
import Layout from "../Layout/Layout";
import styles from "./userArticle.module.css";
import ArticlesList from "./ArticlesList";
const { Search } = Input;
const { Option } = Select;
const UserArticle = () => {
  const articleContext = useContext(AuthContext);
  const {searchAllArticle} = articleContext;
  const [category, setCategory] = useState("Addiction");
  const [searchValue,setSearchValue] = useState("");
  const onCategoryChange = (value) => {
    setCategory(value);
    console.log("category value", value);
  };
  const onSearchChange = (e) => {
    setSearchValue(e.target.value)
    searchAllArticle({searchText:searchValue});
  }
  const onSearch = () => {
    searchAllArticle({searchText:searchValue});
  }
  return (
    <Layout>
      <div className={styles.userArticleCnt}>
        <div className={styles.userArticleTopNav}>
          <Search
            placeholder="input search text"
            allowClear
            value = {searchValue}
            onChange = {onSearchChange}
            onSearch={onSearch}
            style={{ width: 200, margin: "0 10px" }}
          />
          <h2>VP</h2>
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
        <div className={styles.aList}>
          {searchValue === "" ? (<ArticlesList category={category} />) : (<ArticlesList category={"All"} />)}
          
          {/* <ArticlesList category="Addiction" /> */}
          {/* <ArticlesList category={category} /> */}
          {/* <ArticlesList category="Family" /> */}
        </div>
      </div>
    </Layout>
  );
};

export default UserArticle;
