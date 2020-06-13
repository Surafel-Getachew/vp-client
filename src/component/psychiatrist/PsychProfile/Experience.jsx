import React from 'react'
import styles from "./psychprofile.module.css";

const Experience = () => {
    return (
        <div className={styles.profileCard}>
            <div className={styles.profileCardCenter}>
                <div className={styles.profileCardTitle}>
                    <h4>Experience</h4>
                </div>
                <div className={styles.profileCardForm}>
                    <div>
                        <label htmlFor="services">Hospital Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="services">From</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="services">To</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="services">Designation</label>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
