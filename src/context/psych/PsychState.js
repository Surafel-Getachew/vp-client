import React,{useReducer} from 'react'
import PsychContext from "./psychContext";
import PsychReducer from "./psychReducer";
import axios from "axios";
import {
    LOAD_ALL_PSYCH
} from "./types"

const PsychState = (props) => {

    const initialState = {
        psychs:[]
    }

    const [state,dispatch] = useReducer(PsychReducer,initialState);

    const loadAllPsych = async() => {
        const res = await axios.get("/vp/psychiatrist/all");
        dispatch({type:LOAD_ALL_PSYCH,payload:res.data})
    }
    
    return (
        <PsychContext.Provider value = {{
            psychs:state.psychs,
            loadAllPsych
        }}>
            {props.children}
        </PsychContext.Provider>
    )
}

export default PsychState;
