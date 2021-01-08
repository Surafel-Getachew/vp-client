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
    PROFILE
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
        default:
            return state 
    }
}