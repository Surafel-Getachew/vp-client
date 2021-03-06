import {
    ADD_ARTICLE,
    LOAD_ARTICLE,
    LOAD_PSYCHIATRIST_ARTICLE,
    UPDATE_ARTICLE,
    CLEAR_ARTICLE,
    DELETE_ARTICLE,
    SET_CURRENT,
    CLEAR_CURRENT,
    SEARCH_PSYCH_ARTICLE,
    SEARCH_ALL_ARTICLE,
    GET_ARTICLE_BY_CATEGORY,
    GET_ARTICLE_BY_ID,
    PROFILE,
    ADMIN_DELETE_ARTICLE,
    PSYCHS_TOTAL_ARTICLE,
    TOTAL_ARTICLE
}from "../../types";

export default (state,action) => {
    switch(action.type){
        
        case ADD_ARTICLE:
            return {
                ...state,
                articles:[...state.articles,action.payload],
                owner:action.payload.owner,
                loading:false,
                error:null
            }
        
        case LOAD_ARTICLE:{
            return {
                ...state,
                articles:action.payload,
                loading:false,
                error:null
            }
        }
        case SEARCH_ALL_ARTICLE:
            return {
                ...state,
                userSearchedArticles:[],
                userSearchedArticles:action.payload,
                loading:false,
                error:null
            }
        case SEARCH_PSYCH_ARTICLE:{
            return {
                ...state,
                articles:[],
                articles:action.payload,
                loading:false,
                error:null
            }
        }
        case LOAD_PSYCHIATRIST_ARTICLE:{
            return{
                ...state,
                articles:action.payload,
                loading:false,
                error:null
            }
        }
        case GET_ARTICLE_BY_CATEGORY:{
            return{
                ...state,
                articlesByCategory:action.payload,
                loading:false,
                error:null
            }
        }
        case GET_ARTICLE_BY_ID:{
            return{
                ...state,
                article:action.payload,
                loading:false,
                error:null
            }
        }
        case SET_CURRENT:{
            return{
                ...state,
                current:action.payload,
                error:null
            }
        }
        case DELETE_ARTICLE:{
            return{
                ...state,
                articles: state.articles.filter(
                    article => article._id !== action.payload
                ),
                error:null
            }
        }
        case UPDATE_ARTICLE:{
            return{
                ...state,
                articles:state.articles.map(article => article._id === action.payload._id ? action.payload: article  ),
                loading:false,
            }
        }    
        case CLEAR_ARTICLE:{
            return {
                ...state,
                articles:null,
                loading:false, 
                error:null,
                current:null,
            }
        }
        case CLEAR_CURRENT:{
            return {
                ...state,
                current:null
            }
        }
        case PROFILE:{
            return {
                ...state,
                profile:action.payload
            }
        }
        case ADMIN_DELETE_ARTICLE:{
            return{
                ...state,
                refresh:!state.refresh
            }
        }
        case PSYCHS_TOTAL_ARTICLE:{
            return {
                ...state,
                psychTotalArticle:action.payload
            }
        }
        case TOTAL_ARTICLE:{
            return {
                ...state,
                totalArticles:action.payload
            }
        }

        default:
            return state 
    }
}