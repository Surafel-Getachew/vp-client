import axios from "axios";
import { ADD_PSYCH_SOCIAL,PSYCH_SOCIAL_EROOR } from "../types";

export const addPsychSocial = (formData) => async(dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/vp/psych/social", formData, config);
    dispatch({type:ADD_PSYCH_SOCIAL,payload:res.data})
  } catch (error) {
      dispatch({type:PSYCH_SOCIAL_EROOR,payload:error.message});
  }
};


