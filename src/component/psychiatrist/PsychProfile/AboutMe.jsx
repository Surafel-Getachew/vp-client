import React from 'react'
import styles from "./psychprofile.module.css"
const AboutMe = () => {
    return (
        <div className={styles.profileCard}>
            <div className={styles.profileCardCenter}>
                <div className={styles.profileCardTitle}>
                    <h4>About Me</h4>
                </div>
                <div className={styles.profileCardForm}>
                    <div>
                        <textarea></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
