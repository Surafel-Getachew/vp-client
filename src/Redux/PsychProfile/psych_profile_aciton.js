import axios from "axios";
import {
  ADD_PSYCH_PROFILE,
  PSYCH_PROFILE_EROOR,
  PSYCH_PROFILE_FORM,
  LOAD_PSYCH_PROFILE,
  LOAD_ALL_PSYCH_PROFILE,
} from "../types";

export const addPsychProfile = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/vp/psych/profile", formData, config);
    dispatch({ type: ADD_PSYCH_PROFILE, payload: res.data });
  } catch (error) {
    dispatch({ type: PSYCH_PROFILE_EROOR, payload: error });
  }
};

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
  console.log(formData);
};
