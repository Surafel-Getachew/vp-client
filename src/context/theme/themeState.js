import React,{useReducer} from "react";
import ThemeContext from "./themeContext";
import ThemeReducer from "./themeReducer";
const themeState = (props) => {

    const initialState = {
        themeName:"light",

    }
    const [state,dispathc] = useReducer(ThemeReducer,initialState);
    const 
    return (
        <ThemeContext.Provider
            value = {

            }
        >
            {props.children}
        </ThemeContext.Provider>
    )
}