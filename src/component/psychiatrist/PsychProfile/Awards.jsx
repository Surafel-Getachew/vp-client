import React from 'react'
import styles from "./psychprofile.module.css";

const Awards = () => {
    return (
        <div className={styles.profileCard}>
            <div className={styles.profileCardCenter}>
                <div className={styles.profileCardTitle}>
                    <h4>Awards</h4>
                </div>
                <div className={styles.profileCardForm}>
                    <div>
                        <label htmlFor="services">Awards</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="services">Year</label>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awards
