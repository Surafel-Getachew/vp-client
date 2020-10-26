import React from 'react'
import UserPage from "../../../component/Page/User/UserPage"
import PsychiatristProfiles from "../../../component/Profiles/Psychiatrist/PsychiatristProfiles"

const PsychiatristList = () => {
    return (
        <UserPage>
            <div>
                <PsychiatristProfiles />
            </div>
        </UserPage>
    )
}

export default PsychiatristList
