import React,{useState,useEffect} from 'react'
import {connect} from "react-redux";
import styles from "./psychprofile.module.css"
import {
    psychProfileForm,
} from "../../../Redux/PsychProfile/psych_profile_aciton";

const AboutMe = ({psychProfileForm,profileForm}) => {
    const [About,setAbout] = useState({about:""});

    const {about} = About

    const onChange = (e) => {
        setAbout({About,[e.target.name]:e.target.value})
    }

    useEffect(() => {
        psychProfileForm({about})
    },[about,psychProfileForm,])
 

    return (
        <div className={styles.profileCard}>
            <div className={styles.profileCardCenter}>
                <div className={styles.profileCardTitle}>
                    <h4>About Me</h4>
                </div>
                <div className={styles.profileCardForm}>
                    <div>
                        <textarea name = "about" onChange = {onChange} value = {about}></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

    profileForm: state.psychProfile.psychProfileForm
})


export default connect(mapStateToProps,{psychProfileForm})(AboutMe)
