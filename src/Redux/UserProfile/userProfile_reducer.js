import {
    ADD_USER_PROFILE,
    LOAD_USER_PROFILE,
    GET_USER_PROFILE,
    GET_ALL_USERS_PROFILE,
    DELETE_USER
} from "./types"

const initialState = {
    userProfile:null,
    userProfiles:{},
    refresh:false,
    allUsersProfile:[],
    refresh:false
}

export default (state = initialState,action) => {
    switch(action.type) {
        case ADD_USER_PROFILE:
            return {
                ...state,
            }
        case LOAD_USER_PROFILE:
            return {
                ...state,
                userProfile:action.payload
            }
        case GET_USER_PROFILE:
            return {
                ...state,
                userProfile:action.payload
            }
        case GET_ALL_USERS_PROFILE:
            return {
                ...state,
                allUsersProfile:action.payload
            }
        case DELETE_USER:
            return {
                ...state,
                refresh:!state.refresh
            }
         default:
             return state   
    }
}