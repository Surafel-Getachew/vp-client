import axios from "axios";

import {
  ADD_SCHEDULE,
  SCHEDULE_ERROR,
  CLEAR_SCHEDULE_ERROR,
  LOAD_TODAYS_SCHEDULE,
  DELETE_SCHEDULE,
  GET_PSYCH_SCHEDULE_BY_ID,
  TOTAL_SCHEDULE_EACH_DAY
} from "./types";

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
    // console.log("from schedule action", error.response.data.msg);
  }
};

export const psychTodaysSchedule = (theDay) => async (dispatch) => {
  try {
    const res = await axios.get(`/vp/psych/schedule/my-schedule/${theDay}`);
    dispatch({ type: LOAD_TODAYS_SCHEDULE, payload: res.data });
  } catch (error) {
    // dispatch({ type: SCHEDULE_ERROR, payload: error.response.data.msg });
  }
};

export const deletePsychSchedule = (info) => async(dispatch) => {
  try {
    const res = await axios.delete(`/vp/psych/schedule/my-schedule/${info.date}/${info.id}`)
    dispatch({type:DELETE_SCHEDULE,payload:res.data});
  } catch (error) {
    dispatch({type:SCHEDULE_ERROR,payload:error.response.data.msg});
  }
}

export const getPsychScheduleById = (id,date) => async (dispatch) => {
  try {
    const res = await axios.get(`/vp/psych/schedule/${id}/${date}`);
    dispatch({type:GET_PSYCH_SCHEDULE_BY_ID,payload:res.data});
  } catch (error) {
    dispatch({type:SCHEDULE_ERROR,payload:error.response.data.msg})
  }
}

export const getTotalSchduleOfEachDay = () => async(dispatch) => {
  try {
    const res = await axios.get("/vp/psych/schedule/admin/allSchedule");
    dispatch({type:TOTAL_SCHEDULE_EACH_DAY,payload:res.data})
  } catch (error) {
    
  }
}

export const clearScheduleError = () => async(dispatch) => {
  setTimeout(() => {
    dispatch({ type: CLEAR_SCHEDULE_ERROR });
  }, 5000);
};
