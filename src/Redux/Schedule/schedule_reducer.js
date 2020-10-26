import {
  ADD_SCHEDULE,
  SCHEDULE_ERROR,
  CLEAR_SCHEDULE_ERROR,
  LOAD_TODAYS_SCHEDULE,
  DELETE_SCHEDULE,
} from "./types";

const initialState = {
  schedule: [],
  scheduleError: null,
  todaysSchedule: [],
  refresh:false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCHEDULE:
      return {
        ...state,
        refresh:!state.refresh
        // todaysSchedule:[...state,action.payload]
      };
    case SCHEDULE_ERROR:
      return {
        ...state,
        scheduleError: action.payload,
      };
    case CLEAR_SCHEDULE_ERROR:
      return {
        ...state,
        scheduleError: null,
      };
    case LOAD_TODAYS_SCHEDULE:
      return {
        ...state,
        todaysSchedule: action.payload,
      };
    case DELETE_SCHEDULE:
      return {
        ...state,
        refresh:!state.refresh
      }
    default:
      return state;
  }
};
