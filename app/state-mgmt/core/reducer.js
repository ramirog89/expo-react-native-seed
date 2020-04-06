import { ActionType } from "./actions";
import { initialState } from "./state";

const core = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SETTINGS_BEGIN:
      return Object.assign({}, state, {
        isFetching: true
      });

    case ActionType.SETTINGS_SUCCESS:
      return {
        data: {
          ...action.data
        },
        error: false,
        errorMessage: null,
        isFetching: false,
        receivedAt: Date.now()
      };

    case ActionType.SETTINGS_FAILED:
      return {
        error: true,
        errorMessage: action.message,
        isFetching: false,
        receivedAt: Date.now(),
        data: null
      };

    default:
      return state;
  }
};

export default core;
