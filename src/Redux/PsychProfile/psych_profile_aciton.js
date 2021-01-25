import axios from "axios";
import {
  ADD_PSYCH_PROFILE,
  PSYCH_PROFILE_EROOR,
  PSYCH_PROFILE_FORM,
  LOAD_PSYCH_PROFILE,
  LOAD_ALL_PSYCH_PROFILE,
} from "../types";
 
import {GET_AVATAR,DOESNT_HAVE_AVATAR,LOAD_ALL_PSYCHS_BASIC_PROFILE,LOAD_PSYCH_BASIC_PROFILE,GET_PSYCH_CREDENTIAL, ADMIN_SEARCH_PSYCHS} from "./type"
const config = {
  headers: {
    "Content-Type":  "application/json",
  },
};
export const addPsychProfile = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type":  "application/json",
    },
  };
  try {
    const res = await axios.post("/vp/psych/profile", formData,config);
    dispatch({ type: ADD_PSYCH_PROFILE, payload: res.data });
  } catch (error) {
    dispatch({ type: PSYCH_PROFILE_EROOR, payload: error });
  }
};

export const addPsychAvatar = (formData) => async(dispatch) => {
  const config = {
    headers: {
      "Content-Type":"multipart/form-data"
    }
  }
  try {
    const res = await axios.post("/vp/psych/profile/avatar",formData,config)
  } catch (error) {
    dispatch({type:DOESNT_HAVE_AVATAR,})
  }
}

export const getPsychAvatar = () => async (dispatch) => {
  try {
    const res = await axios.get("/vp/psych/profile/avatar");
    dispatch({type:GET_AVATAR,payload:res.data})
  } catch (error) {
    dispatch({type:DOESNT_HAVE_AVATAR})
  }
}

export const loadPsychProfile = () => async (dispatch) => {
  const res = await axios.get("/vp/psych/profile/me");
  dispatch({ type: LOAD_PSYCH_PROFILE, payload: res.data });
};

export const loadPsychProfileForUser = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/vp/psych/profile/${id}`);
    dispatch({ type: LOAD_PSYCH_PROFILE, payload: res.data });
  } catch (error) {}
};

export const loadAllPsychProfile = () => async (dispatch) => {
  const res = await axios.get("/vp/psych/profile/all");
  dispatch({ type: LOAD_ALL_PSYCH_PROFILE, payload: res.data });
};

export const psychProfileForm = (formData) => (dispatch) => {
  dispatch({ type: PSYCH_PROFILE_FORM, payload: formData });
  // console.log(formData);
};

export const loadAllPsychsBasicProfile = () => async(dispatch) => {
  try {
    const res = await axios.get("/vp/psych/profile/all/basic");
    dispatch({type:LOAD_ALL_PSYCHS_BASIC_PROFILE,payload:res.data});
  } catch (error) {
      
  }
}

export const loadPsychBasicProfile = (id) => async(dispatch) => {
  try {
    const res = await axios.get(`/vp/psych/profile/basic/${id}`)
    dispatch({type:LOAD_PSYCH_BASIC_PROFILE,payload:res.data});
  } catch (error) {
    
  }
}

export const adminSearchPsychs= (searchText) => async(dispatch) => {
  try {
    const res = await axios.post("/vp/psych/profile/search/all",searchText,config);
    dispatch({type:ADMIN_SEARCH_PSYCHS,payload:res.data})
  } catch (error) {
    
  }
}


// export const loadAllPsychsBasicProfile = () => (dispatch) =>{
//   try {
//     const res = await axios.get("/vp/psych/profile/all/basic");
//     dispatch({type:LOAD_PSYCHS_BASIC_PROFILE,payload:res.data});
//   } catch (error) {
    
//   }
// }
