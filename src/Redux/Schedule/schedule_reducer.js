import { ADD_SCHEDULE, SCHEDULE_ERROR, CLEAR_SCHEDULE_ERROR } from "./types";

const initialState = {
  schedule: [],
  scheduleError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCHEDULE:
      return {};
    case SCHEDULE_ERROR:
      return {
        scheduleError: action.payload,
      };
    case CLEAR_SCHEDULE_ERROR:
      return{
        scheduleError:null
      };
    default:
      return state;
  }
};
