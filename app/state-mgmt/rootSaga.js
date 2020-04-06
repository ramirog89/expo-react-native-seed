import { takeEvery } from "redux-saga/effects";

import { userState } from "./user";
import Logger from "../helpers/loggerHelper";

export default function* rootSaga() {
  const sagaErrorHandler = generator =>
    function* safeGenerator(...args) {
      try {
        yield generator(...args);
      } catch (error) {
        Logger.error(error);
      }
    };

  const sagas = {
    ...userState.sagas
  };

  yield takeEvery(
    userState.ActionType.USERS_BEGIN,
    sagaErrorHandler(sagas.getUsers)
  );
  yield takeEvery(
    userState.ActionType.USER_CREATE_BEGIN,
    sagaErrorHandler(sagas.createUser)
  );
  yield takeEvery(
    userState.ActionType.USER_UPDATE_BEGIN,
    sagaErrorHandler(sagas.updateUser)
  );
  yield takeEvery(
    userState.ActionType.USER_DELETE_BEGIN,
    sagaErrorHandler(sagas.deleteUser)
  );
}
