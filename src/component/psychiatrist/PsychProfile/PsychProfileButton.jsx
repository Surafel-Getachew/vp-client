import React from 'react'
import {connect} from "react-redux";
import {addPsychProfile} from "../../../Redux/PsychProfile/psych_profile_aciton";

const PsychProfileButton = ({addPsychProfile,profileFormm:{psychProfileForm}}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        addPsychProfile(psychProfileForm);
    }
    return (
        <div>
            
            <button onClick = {onSubmit}>Submit</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    profileFormm:state.psychProfile
})
export default connect (mapStateToProps,{addPsychProfile})(PsychProfileButton) 
