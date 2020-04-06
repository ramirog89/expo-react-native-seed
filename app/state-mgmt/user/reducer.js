import { ActionType } from "./actions";
import { initialState } from "./state";

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.USERS_BEGIN:
      return Object.assign({}, state, {
        isFetching: true,
        receivedAt: null
      });

    case ActionType.USERS_SUCCESS:
      return {
        data: action.data,
        error: false,
        errorMessage: null,
        isFetching: false,
        receivedAt: Date.now()
      };

    case ActionType.USERS_FAILED:
      return {
        error: true,
        errorMessage: action.message,
        isFetching: false,
        receivedAt: Date.now(),
        data: []
      };

    case ActionType.USER_CREATE_BEGIN:
      return Object.assign({}, state, {
        isUpdating: true,
        updated: false
      });

    case ActionType.USER_CREATE_SUCCESS: {
      const userList = state.data || [];
      userList.push(action.data);

      return {
        data: userList,
        error: false,
        errorMessage: null,
        isFetching: false,
        isUpdating: false,
        updated: true,
        receivedAt: Date.now()
      };
    }

    case ActionType.USER_CREATE_FAILED:
      return {
        error: true,
        errorMessage: action.message,
        isFetching: false,
        isUpdating: false,
        updated: false,
        receivedAt: Date.now(),
        data: state.data
      };

    case ActionType.USER_UPDATE_BEGIN:
      return Object.assign({}, state, {
        isUpdating: true,
        updated: false
      });

    case ActionType.USER_UPDATE_SUCCESS: {
      return {
        data: state.data.map(user =>
          user.id === action.data.id ? { ...action.data } : user
        ),
        error: false,
        errorMessage: null,
        isFetching: false,
        isUpdating: false,
        updated: true,
        receivedAt: Date.now()
      };
    }

    case ActionType.USER_UPDATE_FAILED:
      return {
        error: true,
        errorMessage: action.message,
        isFetching: false,
        isUpdating: false,
        updated: true,
        receivedAt: Date.now(),
        data: state.data
      };

    case ActionType.USER_DELETE_BEGIN:
      return Object.assign({}, state, {
        isUpdating: true,
        deleted: false
      });

    case ActionType.USER_DELETE_SUCCESS: {
      const userList = state.data.filter(user => user.id !== action.data);

      return {
        data: userList,
        error: false,
        errorMessage: null,
        isFetching: false,
        isUpdating: false,
        deleted: true,
        receivedAt: Date.now()
      };
    }

    case ActionType.USER_DELETE_FAILED:
      return {
        error: true,
        errorMessage: action.message,
        isFetching: false,
        isUpdating: false,
        deleted: true,
        receivedAt: Date.now(),
        data: state.data
      };

    case ActionType.USER_RESET:
      return {
        ...initialState,
        data: state.data
      };

    default:
      return state;
  }
};

export default user;
