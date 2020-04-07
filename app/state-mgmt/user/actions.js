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
  usersRequest: () => ({
    type: ActionType.USERS_BEGIN,
    payload: null
  }),
  usersSuccess: users => ({
    type: ActionType.USERS_SUCCESS,
    payload: { users }
  }),
  usersFailed: error => ({
    type: ActionType.USERS_FAILED,
    payload: { error }
  }),
  userCreateRequest: user => ({
    type: ActionType.USER_CREATE_BEGIN,
    payload: { user }
  }),
  userCreateSuccess: user => ({
    type: ActionType.USER_CREATE_SUCCESS,
    payload: { user }
  }),
  userCreateFailed: error => ({
    type: ActionType.USER_CREATE_FAILED,
    payload: { error }
  }),
  userUpdateRequest: user => ({
    type: ActionType.USER_UPDATE_BEGIN,
    payload: { user }
  }),
  userUpdateSuccess: user => ({
    type: ActionType.USER_UPDATE_SUCCESS,
    payload: { user }
  }),
  userUpdateFailed: error => ({
    type: ActionType.USER_UPDATE_FAILED,
    payload: { error }
  }),
  userDeleteRequest: id => ({
    type: ActionType.USER_DELETE_BEGIN,
    payload: { id }
  }),
  userDeleteSuccess: id => ({
    type: ActionType.USER_DELETE_SUCCESS,
    payload: { id }
  }),
  userDeleteFailed: error => ({
    type: ActionType.USER_DELETE_FAILED,
    payload: { error }
  })
};
