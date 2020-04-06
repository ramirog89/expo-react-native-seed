import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import Reactotron from "../../ReactotronConfig";

import { coreState } from "./core";
import { userState } from "./user";

export const sagaMiddleware = createSagaMiddleware();
const withDevtools = composeWithDevTools({
  maxAge: 20,
  shouldCatchErrors: true
});

export const store = createStore(
  combineReducers({
    core: coreState.reducer,
    user: userState.reducer
  }),
  withDevtools(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer())
);
