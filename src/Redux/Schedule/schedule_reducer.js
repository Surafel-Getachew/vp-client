import {
  ADD_SCHEDULE,
  SCHEDULE_ERROR,
  CLEAR_SCHEDULE_ERROR,
  LOAD_TODAYS_SCHEDULE,
  DELETE_SCHEDULE,
  GET_PSYCH_SCHEDULE_BY_ID
} from "./types";

const initialState = {
  schedule: [],
  scheduleError: null,
  todaysSchedule: [],
  refresh:false,
  psychScheduleById:[]
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
    case GET_PSYCH_SCHEDULE_BY_ID:
      return {
        ...state,
        psychScheduleById:action.payload
      }
    default:
      return state;
  }
};
