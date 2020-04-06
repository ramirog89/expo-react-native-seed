export const ActionType = {
  USERS_BEGIN: "USERS_BEGIN",
  USERS_SUCCESS: "USERS_SUCCESS",
  USERS_FAILED: "USERS_FAILED",
  USER_CREATE_BEGIN: "USER_CREATE_BEGIN",
  USER_CREATE_SUCCESS: "USER_CREATE_SUCCESS",
  USER_CREATE_FAILED: "USER_CREATE_FAILED",
  USER_UPDATE_BEGIN: "USER_UPDATE_BEGIN",
  USER_UPDATE_SUCCESS: "USER_UPDATE_SUCCESS",
  USER_UPDATE_FAILED: "USER_UPDATE_FAILED",
  USER_DELETE_BEGIN: "USER_DELETE_BEGIN",
  USER_DELETE_SUCCESS: "USER_DELETE_SUCCESS",
  USER_DELETE_FAILED: "USER_DELETE_FAILED",
  USER_RESET: "USER_RESET"
};

export const actions = {
  usersRequest: () => {
    return {
      type: ActionType.USERS_BEGIN
    };
  },

  usersSuccess: users => {
    return {
      type: ActionType.USERS_SUCCESS,
      data: users
    };
  },

  usersFailed: error => {
    return {
      type: ActionType.USERS_FAILED,
      message: error
    };
  },
  userCreateRequest: user => ({
    type: ActionType.USER_CREATE_BEGIN,
    payload: { user }
  }),
  userCreateSuccess: user => {
    return {
      type: ActionType.USER_CREATE_SUCCESS,
      data: user
    };
  },

  userCreateFailed: error => {
    return {
      type: ActionType.USER_CREATE_FAILED,
      message: error
    };
  },

  userUpdateRequest: user => ({
    type: ActionType.USER_UPDATE_BEGIN,
    payload: { user }
  }),
  userUpdateSuccess: user => {
    return {
      type: ActionType.USER_UPDATE_SUCCESS,
      data: user
    };
  },

  userUpdateFailed: error => {
    return {
      type: ActionType.USER_UPDATE_FAILED,
      message: error
    };
  },
  userDeleteRequest: id => ({
    type: ActionType.USER_DELETE_BEGIN,
    payload: { id }
  }),
  userDeleteSuccess: userId => {
    return {
      type: ActionType.USER_DELETE_SUCCESS,
      data: userId
    };
  },
  userDeleteFailed: error => {
    return {
      type: ActionType.USER_DELETE_FAILED,
      message: error
    };
  },

  resetUser: () => {
    return {
      type: ActionType.USER_RESET
    };
  }
};
