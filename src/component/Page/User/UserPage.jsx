import React from 'react'
import styles from "../psychPage.module.css";
import UserNav from "../../User/UserNav/UserNav";

const UserPage = (props) => {
    return (
        <div className={styles.psychPage}>
            <div className={styles.psychPageCenter}>
                <UserNav />
                {props.children}
            </div>
        </div>
    )
}

export default UserPage
