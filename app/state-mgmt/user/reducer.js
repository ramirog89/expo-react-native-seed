import { ActionType } from "./actions";
import { initialState } from "./state";

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.USERS_BEGIN:
      return {
        ...state,
        isLoading: true
      };
    case ActionType.USERS_SUCCESS:
      return {
        ...state,
        data: action.payload.users,
        isLoading: false
      };
    case ActionType.USERS_FAILED:
      return {
        error: true,
        errorMessage: action.payload.error,
        isLoading: false,
        data: []
      };
    case ActionType.USER_CREATE_BEGIN:
      return {
        ...state,
        isLoading: true
      };
    case ActionType.USER_CREATE_SUCCESS: {
      return {
        // eslint-disable-next-line prettier/prettier
        data: [...state.data, action.payload.user],
        error: false,
        errorMessage: null,
        isLoading: false
      };
    }
    case ActionType.USER_CREATE_FAILED:
      return {
        error: true,
        errorMessage: action.payload.error,
        isLoading: false,
        data: state.data
      };
    case ActionType.USER_UPDATE_BEGIN:
      return {
        ...state,
        isLoading: true
      };
    case ActionType.USER_UPDATE_SUCCESS: {
      return {
        data: state.data.map(user =>
          user.id === action.payload.user.id ? { ...action.payload.user } : user
        ),
        error: false,
        errorMessage: null,
        isLoading: false
      };
    }
    case ActionType.USER_UPDATE_FAILED:
      return {
        error: true,
        errorMessage: action.payload.error,
        isLoading: false,
        data: state.data
      };
    case ActionType.USER_DELETE_BEGIN:
      return {
        ...state,
        isLoading: true
      };
    case ActionType.USER_DELETE_SUCCESS: {
      return {
        data: state.data.filter(user => user.id !== action.payload.id),
        error: false,
        errorMessage: null,
        isLoading: false
      };
    }
    case ActionType.USER_DELETE_FAILED:
      return {
        error: true,
        errorMessage: action.payload.error,
        isLoading: false,
        data: state.data
      };
    default:
      return state;
  }
};

export default user;
