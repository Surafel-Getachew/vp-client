import axios from "axios";

import { ADD_SCHEDULE, SCHEDULE_ERROR, CLEAR_SCHEDULE_ERROR } from "./types";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const addSchedule = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/vp/psych/schedule", formData, config);
    dispatch({ type: ADD_SCHEDULE, payload: res.data });
  } catch (error) {
    dispatch({ type: SCHEDULE_ERROR, payload: error.response.data.msg });
  }
};

export const clearScheduleError = () => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: CLEAR_SCHEDULE_ERROR });
  }, 3000);
};
