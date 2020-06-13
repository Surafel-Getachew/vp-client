import React from 'react'
import PsychPage from "../../../component/Page/PsychPage";
import BasicInformation from "../../../component/psychiatrist/PsychProfile/BasicInformation";
import AboutMe from "../../../component/psychiatrist/PsychProfile/AboutMe";
import ContactDetail from "../../../component/psychiatrist/PsychProfile/ContactDetails";
import Specialization from "../../../component/psychiatrist/PsychProfile/Specialization"
import Experience from "../../../component/psychiatrist/PsychProfile/Experience"
import Awards from "../../../component/psychiatrist/PsychProfile/Awards"
import MemberShip from "../../../component/psychiatrist/PsychProfile/MemberShip"
const Psychprofilee = () => {
    return (
        <PsychPage>
            <div>
                <BasicInformation/>
                <AboutMe/>
                <ContactDetail/>
                <Specialization/>
                <Experience/>
                <Awards/>
                <MemberShip/>
            </div>
        </PsychPage>
    )
}

export default Psychprofilee
