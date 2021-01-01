import {
    ADD_USER_PROFILE,
    LOAD_USER_PROFILE
} from "./types"

const initialState = {
    userProfile:null,
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
         default:
             return state   
    }
}