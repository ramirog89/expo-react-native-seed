import { actions, ActionType } from "./actions";

describe("user actions", () => {
  it(`should create an action to dispatch ${ActionType.USERS_BEGIN}`, () => {
    const expectedAction = {
      type: ActionType.USERS_BEGIN,
      payload: null
    };
    expect(actions.usersRequest()).toEqual(expectedAction);
  });
  it(`should create an action to dispatch ${ActionType.USERS_SUCCESS}`, () => {
    const users = [
      { id: 1, name: "Alina" },
      { id: 2, name: "Mike" }
    ];
    const expectedAction = {
      type: ActionType.USERS_SUCCESS,
      payload: { users }
    };
    expect(actions.usersSuccess(users)).toEqual(expectedAction);
  });
  it(`should create an action to dispatch ${ActionType.USERS_FAILED}`, () => {
    const error = "some error";
    const expectedAction = {
      type: ActionType.USERS_FAILED,
      payload: { error }
    };
    expect(actions.usersFailed(error)).toEqual(expectedAction);
  });
  it(`should create an action to dispatch ${ActionType.USER_CREATE_BEGIN}`, () => {
    const user = { name: "Alina" };
    const expectedAction = {
      type: ActionType.USER_CREATE_BEGIN,
      payload: { user }
    };
    expect(actions.userCreateRequest(user)).toEqual(expectedAction);
  });
  it(`should create an action to dispatch ${ActionType.USER_CREATE_SUCCESS}`, () => {
    const user = { name: "Alina", age: 27 };
    const expectedAction = {
      type: ActionType.USER_CREATE_SUCCESS,
      payload: { user }
    };
    expect(actions.userCreateSuccess(user)).toEqual(expectedAction);
  });
  it(`should create an action to dispatch ${ActionType.USER_CREATE_FAILED}`, () => {
    const error = "some error";
    const expectedAction = {
      type: ActionType.USER_CREATE_FAILED,
      payload: { error }
    };
    expect(actions.userCreateFailed(error)).toEqual(expectedAction);
  });
  it(`should create an action to dispatch ${ActionType.USER_UPDATE_BEGIN}`, () => {
    const user = { id: 1, name: "Alina", age: 25 };
    const expectedAction = {
      type: ActionType.USER_UPDATE_BEGIN,
      payload: { user }
    };
    expect(actions.userUpdateRequest(user)).toEqual(expectedAction);
  });
  it(`should create an action to dispatch ${ActionType.USER_UPDATE_SUCCESS}`, () => {
    const user = { id: 1, name: "Alina", age: 25 };
    const expectedAction = {
      type: ActionType.USER_UPDATE_SUCCESS,
      payload: { user }
    };
    expect(actions.userUpdateSuccess(user)).toEqual(expectedAction);
  });
  it(`should create an action to dispatch ${ActionType.USER_UPDATE_FAILED}`, () => {
    const error = "some error";
    const expectedAction = {
      type: ActionType.USER_UPDATE_FAILED,
      payload: { error }
    };
    expect(actions.userUpdateFailed(error)).toEqual(expectedAction);
  });
  it(`should create an action to dispatch ${ActionType.USER_DELETE_BEGIN}`, () => {
    const id = 1;
    const expectedAction = {
      type: ActionType.USER_DELETE_BEGIN,
      payload: { id }
    };
    expect(actions.userDeleteRequest(id)).toEqual(expectedAction);
  });
  it(`should create an action to dispatch ${ActionType.USER_DELETE_SUCCESS}`, () => {
    const id = 1;
    const expectedAction = {
      type: ActionType.USER_DELETE_SUCCESS,
      payload: { id }
    };
    expect(actions.userDeleteSuccess(id)).toEqual(expectedAction);
  });
  it(`should create an action to dispatch ${ActionType.USER_DELETE_FAILED}`, () => {
    const error = "some error";
    const expectedAction = {
      type: ActionType.USER_DELETE_FAILED,
      payload: { error }
    };
    expect(actions.userDeleteFailed(error)).toEqual(expectedAction);
  });
});
