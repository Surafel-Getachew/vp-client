import axios from "axios";
import { ADD_USER_APPT, USER_APPT_ERROR } from "./types";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const addUserAppt = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/vp/user/appointment",formData,config);
    dispatch({ type: ADD_USER_APPT, payload: res.data.msg });
  } catch (error) {
    dispatch({ type: USER_APPT_ERROR, payload: error.response.data.msg });
  }
};
