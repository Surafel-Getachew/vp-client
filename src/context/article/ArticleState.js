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
    SEARCH_PSYCH_ARTICLE,
    SEARCH_ALL_ARTICLE,
    GET_ARTICLE_BY_CATEGORY,
    GET_ARTICLE_BY_ID,
    PROFILE
}from "../../types";



const ArticleState = (props) => {

    const initialState = {

        articles:[],
        userSearchedArticles:[],
        article:null,
        articlesByCategory:[],
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

    const updateArticle = async (article,id) => {
        try {
            const config = {
                headers:{
                    "Content-Type":"application/json"
                }
            }
            const res = await axios.patch(`/vp/article/${id}`,article,config);
            dispatch({type:UPDATE_ARTICLE,payload:res.data})
        } catch (error) {
            
        }
    }

    const clearCurrent = () => {
        dispatch({type:CLEAR_CURRENT})
    }

    const psychSearchArticle = async(formData) => {
        // console.log("search article",formData);
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        try {
            const res = await axios.post("/vp/article/psychiatrist/search",formData,config)
            dispatch({type:SEARCH_PSYCH_ARTICLE,payload:res.data})
        } catch (error) {
            
        }
    }

    const searchAllArticle = async (formData) => {
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        try {
            const res = await axios.post("/vp/article/search/all",formData,config)
            dispatch({type:SEARCH_ALL_ARTICLE,payload:res.data});

        } catch (error) {
            
        }
    }

    const getArticleByCategory = async (category) => {
        // console.log("get Article of",category);
        try {
            const res = await axios.get(`/vp/article/category/${category}`);
            dispatch({type:GET_ARTICLE_BY_CATEGORY,payload:res.data})
        } catch (error) {
            
        }
    }

    const getArticleById = async(id) => {
        try {
            const res = await axios.get(`/vp/article/findById/${id}`);
            dispatch({type:GET_ARTICLE_BY_ID,payload:res.data.article});
        } catch (error) {
            
        }
    }

    return (
        <ArticleContext.Provider value = {{
            articles:state.articles,
            userSearchedArticles:state.userSearchedArticles,
            article:state.article,
            articlesByCategory:state.articlesByCategory,
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
            profilePicture,
            psychSearchArticle,
            searchAllArticle,
            getArticleByCategory,
            getArticleById
            // profile:state.profile,
        }}>
            {props.children}
        </ArticleContext.Provider>
    )
}

export default ArticleState