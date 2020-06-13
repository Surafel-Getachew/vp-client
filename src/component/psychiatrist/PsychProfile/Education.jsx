import React from 'react'
import styles from "./psychprofile.module.css";

const Education = () => {
    return (
        <div className={styles.profileCard}>
            <div className={styles.profileCardCenter}>
                <div className={styles.profileCardTitle}>
                    <h4>Education</h4>
                </div>
                <div className={styles.profileCardForm}>
                    <div>
                        <label htmlFor="services">Degree</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="services">College/institution</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="services">Year of Completion</label>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
