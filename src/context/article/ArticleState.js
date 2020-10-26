import React,{useReducer} from "react";
import axios from "axios";

import ArticleContext from "./articleContext";
import ArticleReducer from "./articleReducer";

import {
    ADD_ARTICLE,
    LOAD_ARTICLE,
    LOAD_PSYCHIATRIST_ARTICLE,
    SET_CURRENT,
    UPDATE_ARTICLE,
    DELETE_ARTICLE,
    CLEAR_ARTICLE,
    ARTICLE_ERROR,
    CLEAR_CURRENT,
    PROFILE
}from "../../types";



const ArticleState = (props) => {

    const initialState = {

        articles:[],
        owner:null,
        current:null,
        filtered:null,
        loading:true,
        error:null,
        profile:null
    }

    const [state,dispatch] = useReducer(ArticleReducer,initialState) 


    // Adds Article To The DB
    const addArticle = async (formData) => {
        
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
    
    try {
        const res = await axios.post("/vp/article",formData,config);
        dispatch({type:ADD_ARTICLE,payload:res.data})
    } catch (error) {
        dispatch({type:ARTICLE_ERROR})    
    }    
    
    }

    // Load All The Articles
    const loadArticle = async () => {

       try {
           const res = await axios.get("/vp/article");
           dispatch({type:LOAD_ARTICLE,payload:res.data})
       } catch (error) {
           dispatch({type:ARTICLE_ERROR})
       }

    }
    
    // Load All Articles Ceated By The Psychiatrist
    const loadPsychiatristArticles = async() => {
        try {
            const res = await axios.get("/vp/article/find");
            dispatch({type:LOAD_PSYCHIATRIST_ARTICLE,payload:res.data})
        } catch (error) {
            dispatch({type:ARTICLE_ERROR})
        }
    }

    // trial for profile pic
        const profilePicture = async() => {

            try {
                const res = await axios.get("/vp/psychiatrist/profilePic");
                dispatch({type:PROFILE,payload:res.data})
            } catch (error) {
                
            }
        }
    
    // set the value of current 
    const setCurrent =  (article) => {
        dispatch({type:SET_CURRENT,payload:article});
    }

    // Delete Article from the DB by the authorized psychiatrist
    const deleteArticle = async (id) => {
        try {
            await axios.delete(`/vp/article/${id}`);
            dispatch({type:DELETE_ARTICLE,payload:id})
        } catch (error) {
            
        }
    }

    const clearArticle = () => {
        dispatch({type:CLEAR_ARTICLE})
    }

    const updateArticle = async (article) => {
        try {
            const config = {
                headers:{
                    "Content-Type":"application/json"
                }
            }
            const res = await axios.patch(`/vp/article/${article._id}`,article,config);
            dispatch({type:UPDATE_ARTICLE,payload:res.data})
        } catch (error) {
            
        }
    }

    const clearCurrent = () => {
        dispatch({type:CLEAR_CURRENT})
    }

    return (
        <ArticleContext.Provider value = {{
            articles:state.articles,
            owner:state.owner,
            current:state.current,
            filtered:state.filtered,
            loading:state.loading,
            error:state.error,
            addArticle,
            loadArticle,
            setCurrent,
            deleteArticle,
            clearArticle,  
            loadPsychiatristArticles,
            updateArticle,
            clearCurrent,
            profile:state.profile,
            profilePicture
        }}>
            {props.children}
        </ArticleContext.Provider>
    )
}

export default ArticleState