import { initialState } from "./state";
import { actions, ActionType } from "./actions";
import reducer from "./reducer";

export const coreState = { initialState, reducer, actions, ActionType };
