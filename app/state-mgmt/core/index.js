import { initialState } from "./state";
import { actions, ActionType } from "./actions";
import reducer from "./reducer";
import * as sagas from "./sagas";

export const coreState = { initialState, reducer, actions, ActionType, sagas };
