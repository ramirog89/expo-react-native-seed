import { ActionType } from "./actions";
import { initialState } from "./state";

const core = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SETTINGS_BEGIN:
      return {
        ...state,
        isLoading: true
      };
    case ActionType.SETTINGS_SUCCESS:
      return {
        data: {
          ...action.payload.settings
        },
        error: false,
        errorMessage: null,
        isLoading: false
      };
    case ActionType.SETTINGS_FAILED:
      return {
        error: true,
        errorMessage: action.payload.error,
        isLoading: false,
        data: null
      };
    default:
      return state;
  }
};

export default core;
