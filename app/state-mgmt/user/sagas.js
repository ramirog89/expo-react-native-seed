import { put, call } from "redux-saga/effects";

import { apiService } from "../../helpers/apiHelper";
import { setItem } from "../../helpers/storageHelper";
import { actions } from "./actions";

export function* getUsers() {
  try {
    const response = yield call(apiService.find, { entity: "users" });
    setItem("LAST_REQUEST_TIME", JSON.stringify(new Date()));
    yield put(actions.usersSuccess(response.docs));
  } catch (error) {
    yield put(actions.usersFailed(error));
  }
}

export function* createUser(payload) {
  try {
    const response = yield call(apiService.create, {
      entity: "users",
      data: payload.user
    });
    setItem("LAST_REQUEST_TIME", JSON.stringify(new Date()));
    yield put(actions.userCreateSuccess(response));
  } catch (error) {
    yield put(actions.userCreateFailed(error));
  }
}

export function* updateUser(payload) {
  try {
    const response = yield call(apiService.update, {
      entity: "users",
      data: payload.user
    });
    setItem("LAST_REQUEST_TIME", JSON.stringify(new Date()));
    yield put(actions.userUpdateSuccess(response));
  } catch (error) {
    yield put(actions.userUpdateFailed(error));
  }
}

export function* deleteUser(payload) {
  try {
    const response = yield call(apiService.delete, {
      entity: "users",
      data: payload.id
    });
    setItem("LAST_REQUEST_TIME", JSON.stringify(new Date()));
    yield put(actions.userDeleteSuccess(response));
  } catch (error) {
    yield put(actions.userDeleteFailed(error));
  }
}
