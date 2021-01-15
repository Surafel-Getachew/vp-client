import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Input, Select, Spin } from "antd";
import {
  getAllRooms,
  getRoomsByCategory,
  searchForRoom,
} from "../../../Redux/GroupVideoChat/group-video-chat-action";
import Layout from "../Layout/Layout";
import RoomCard from "./RoomCard";
import styles from "./userGroupVideoChat.module.css";
const { Search } = Input;
const { Option } = Select;
const UserGroupVideo = (props) => {
  const {
    getAllRooms,
    getRoomsByCategory,
    allRooms,
    roomsByCategory,
    searchForRoom,
  } = props;
  const [category, setCategory] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    if (category == null || searchValue == null) {
      getAllRooms();
    } else {
      getRoomsByCategory({ category: category });
    }
  }, [category,searchValue]);
  useEffect(() => {
    if (allRooms !== []) {
      setRooms(allRooms);
    }
  }, [allRooms]);
  useEffect(() => {
    if (roomsByCategory !== []) {
      setRooms(roomsByCategory);
    }
  }, [roomsByCategory]);
  console.log("rooms", rooms);
  const onCategoryChange = (value) => {
    setCategory(value);
  };
  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
    const serachText = {
      searchText: e.target.value,
    };
    searchForRoom(serachText);
  };
  const onSearch = () => {
    const searchText = {
      searchText: searchValue,
    };
    searchForRoom(searchText);
  };
  return (
    <Layout>
      <div className={styles.groupVideoCnt}>
        <div className={styles.topNav}>
          <Search
            placeholder="input search text"
            allowClear
            value={searchValue}
            onChange={onSearchChange}
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
        <div className={styles.groupTherapyRooms}>
          {rooms === [] ? (
            <Spin className={styles.spin} />
          ) : (
            rooms.map((room) => <RoomCard key={room._id} roomie={room} />)
          )}
        </div>
      </div>
    </Layout>
  );
};
const mapStateToProps = (state) => ({
  allRooms: state.groupVideoChat.allRooms,
  roomsByCategory: state.groupVideoChat.roomsByCategory,
});
export default connect(mapStateToProps, {
  getAllRooms,
  getRoomsByCategory,
  searchForRoom,
})(UserGroupVideo);
