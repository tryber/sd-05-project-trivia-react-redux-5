import { SET_TIMER, IS_DISABLED } from '../action';

const INITIAL_STATE = {
  timer: null,
  disabled: false,
};

export default function timerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_TIMER:
      return {
        ...state,
        timer:
          state.timer + action.timer > 30 ? 30 : state.timer + action.timer,
      };
    case IS_DISABLED:
      return {
        ...state,
        disabled: action.disabled,
      };
    default:
      return state;
  }
}
