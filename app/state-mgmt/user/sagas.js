import { put, call } from "redux-saga/effects";

import { apiService } from "../../helpers/apiHelper";
import { actions } from "./actions";

export function* getUsers() {
  try {
    const response = yield call(apiService.find, { entity: "users" });
    yield put(actions.usersSuccess(response.docs));
  } catch (error) {
    yield put(actions.usersFailed(error));
  }
}

export function* createUser(action) {
  const { user } = action.payload;
  try {
    const response = yield call(apiService.create, {
      entity: "users",
      data: user
    });
    yield put(actions.userCreateSuccess(response));
  } catch (error) {
    yield put(actions.userCreateFailed(error));
  }
}

export function* updateUser(action) {
  const { user } = action.payload;
  try {
    const response = yield call(apiService.update, {
      entity: "users",
      data: user
    });
    yield put(actions.userUpdateSuccess(response));
  } catch (error) {
    yield put(actions.userUpdateFailed(error));
  }
}

export function* deleteUser(action) {
  const { id } = action.payload;
  try {
    const response = yield call(apiService.delete, {
      entity: "users",
      data: id
    });
    yield put(actions.userDeleteSuccess(response));
  } catch (error) {
    yield put(actions.userDeleteFailed(error));
  }
}
