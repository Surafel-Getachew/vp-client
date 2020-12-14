import React from 'react'
import Navbar from "../NavBar/NavBar";
import styles from "./styles.module.css"
const Layout = (props) => {
    return (
        <div className = {styles.layoutCnt}>
            <div className = {styles.sideNav}>
            <Navbar/>
            </div>
            <div className = {styles.page}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout
