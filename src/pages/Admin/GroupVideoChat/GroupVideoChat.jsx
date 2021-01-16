import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getAllRooms,
  getRoomsByCategory,
  searchForRoom,
} from "../../../Redux/GroupVideoChat/group-video-chat-action";
import { Input, Select } from "antd";
import Layout from "../Layout/Layout";
import RoomCard from "./RoomCard";
import styles from "./adminGroupVideoChat.module.css";
const { Search } = Input;
const { Option } = Select;
const GroupVideoChat = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState(null);
  const [rooms, setRooms] = useState([]);
  const {
    getAllRooms,
    allRooms,
    getRoomsByCategory,
    roomsByCategory,
    searchForRoom,
    refresh,
  } = props;
  useEffect(() => {
    getAllRooms();
  }, [refresh]);
  useEffect(() => {
    if (searchValue == "" && category == null) {
      getAllRooms();
    }
  }, [category, searchValue]);
  useEffect(() => {
    getRoomsByCategory({ category: category });
  }, [category]);
  useEffect(() => {
    if (roomsByCategory !== []) {
      setRooms(roomsByCategory);
    }
  }, [roomsByCategory]);
  useEffect(() => {
    if (allRooms !== []) {
      setRooms(allRooms);
    }
  }, [allRooms]);
  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
    searchForRoom({ searchText: e.target.value });
  };

  const onCategoryChange = (value) => {
    setCategory(value);
  };

  const onSearch = () => {
    searchForRoom({ searchText: searchValue });
  };
  return (
    <Layout>
      <div className={styles.adminGroupChatCnt}>
        <div className={styles.adminGroupChatTop}>
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
        <div className={styles.roomName}>
          <hr style={{ width: "90px" }} />
          <h3>{category == null ? "All" : category}</h3>
          {/* <h3>ALL</h3> */}
          <hr style={{ width: "90px" }} />
        </div>
        <div className={styles.roomCardCnt}>
          {rooms.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  allRooms: state.groupVideoChat.allRooms,
  roomsByCategory: state.groupVideoChat.roomsByCategory,
  refresh: state.groupVideoChat.refresh,
});

export default connect(mapStateToProps, {
  getAllRooms,
  getRoomsByCategory,
  searchForRoom,
})(GroupVideoChat);
