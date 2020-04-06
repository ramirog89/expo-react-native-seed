import { put, call } from "redux-saga/effects";

import { apiService } from "../../helpers/apiHelper";
import { actions } from "./actions";

export function* registerChatUser(payload) {
  try {
    yield put(actions.settingsRequest());
    const response = yield call(apiService.find, {
      entity: "settings/account"
    });
    yield put(actions.settingsSuccess(response));
  } catch (error) {
    yield put(actions.settingsFailed(error));
  }
}
