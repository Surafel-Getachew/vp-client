import React from "react";
import { Link } from "react-router-dom";
import styles from "./psychItems.module.css";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";

const PsychiatristItems = (props) => {
  const { name, avatar, psychOwner,email} = props.profile;
  // const [prof, setProf] = useState({});
 

  return (
    <div className={styles.psychItemsCnt}>
      <div className={styles.profileCnt}>
        <div className={styles.aviContainer}> 
          <img src={`data:image/jpeg;base64,${avatar}`} alt="" />
        </div>
        <div className={styles.psychName}>
          <h3>{name}</h3>
        </div>
      </div>
      <div className={styles.psychEmail}>
        {/* <h3>{psychCredential == null || psychCredential == undefined ? "Loading" : prof.email}</h3> */}
        <h3>{email}</h3>
      </div>
      <div className={styles.psychActions}>
        <div className={styles.viewProfileCnt}>
          <EyeOutlined className={styles.viewIcon} />
          <h4>
            <Link
              className={styles.viewProfileLink}
              to={{
                pathname: "/vp/psychiatrist/detail-profile",
                state: {
                  id: psychOwner,
                },
              }}
            >
              View Profile
            </Link>
          </h4>
        </div>
        <div className={styles.deleteCnt}>
          <DeleteOutlined className={styles.deleteIcon} />
          <h4>Delete Psychiatrsit</h4>
        </div>
      </div>
    </div>
  );
};

export default PsychiatristItems