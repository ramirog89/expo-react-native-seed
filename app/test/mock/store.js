import { coreState, userState } from "../../state-mgmt";

export const getInitialState = () => ({
  core: { ...coreState.initialState },
  user: { ...userState.initialState }
});
