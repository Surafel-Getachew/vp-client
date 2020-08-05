import React,{useReducer} from 'react'
import PsychContext from "./psychContext";
import PsychReducer from "./psychReducer";
import axios from "axios";
import {
    LOAD_ALL_PSYCH,
    LOAD_PSYCHIATRISTS_PROFILE
} from "./types"

const PsychState = (props) => {

    const initialState = {
        psychs:[],
        psychProfiles:[]
    }

    const [state,dispatch] = useReducer(PsychReducer,initialState);

    const loadAllPsych = async() => {
        const res = await axios.get("/vp/psychiatrist/all");
        dispatch({type:LOAD_ALL_PSYCH,payload:res.data})
    }
    
    const loadPsychProfiles = async ()=> {
       try {
           const res = await axios.get("/vp/psych/profile");
           dispatch({type:LOAD_PSYCHIATRISTS_PROFILE,payload:res.data.profile})
       } catch (error) {
           
       }
    }

    return (
        <PsychContext.Provider value = {{
            psychs:state.psychs,
            psychProfiles:state.psychProfiles,
            loadAllPsych,
            loadPsychProfiles
        }}>
            {props.children}
        </PsychContext.Provider>
    )
}

export default PsychState;
