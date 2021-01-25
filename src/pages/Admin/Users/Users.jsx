import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllUsersProfile } from "../../../Redux/UserProfile/userProfile_action";
import { adminSearchUser } from "../../../Redux/UserProfile/userProfile_action";
import Layout from "../Layout/Layout";
import { Input } from "antd";
import styles from "../Psychiatrists/psychs.module.css";
import UserItems from "./UserItems";
const { Search } = Input;
const Users = (props) => {
  const {
    getAllUsersProfile,
    allUsersProfile,
    refresh,
    adminSearchUser,
  } = props;
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    getAllUsersProfile();
  }, []);

  useEffect(() => {
    getAllUsersProfile();
  }, [refresh]);

  useEffect(() => {
    if (searchValue == "") {
      getAllUsersProfile();
    }
  }, [searchValue]);

  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
    adminSearchUser({ searchText: e.target.value });
  };

  const onSearch = () => {
    adminSearchUser({ searchText: searchValue });
  };

  return (
    <Layout>
      <div className={styles.psychsCont}>
        <div className={styles.searchCnt}>
          <Search
            placeholder="input search text"
            allowClear
            value={searchValue}
            onChange={onSearchChange}
            onSearch={onSearch}
            enterButton
            style={{ width: 200, margin: "0 10px" }}
          />
        </div>
        <div className={styles.psychListTitle}>
          <div className={styles.listName}>
            <h3>Name</h3>
          </div>
          <div className={styles.listEmail}>
            <h3>Email</h3>
          </div>
          <div className={styles.listActions}>
            <h3>Actions</h3>
          </div>
        </div>
        {allUsersProfile.map((profile) => (
          <UserItems profile={profile} />
        ))}
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  allUsersProfile: state.userProfile.allUsersProfile,
  refresh: state.userProfile.refresh,
});

export default connect(mapStateToProps, {
  getAllUsersProfile,
  adminSearchUser,
})(Users);
