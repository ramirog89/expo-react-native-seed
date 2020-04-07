import { actions, ActionType } from "./actions";

describe("core actions", () => {
  it(`should create an action to dispatch ${ActionType.SETTINGS_BEGIN}`, () => {
    const expectedAction = {
      type: ActionType.SETTINGS_BEGIN,
      payload: null
    };
    expect(actions.settingsRequest()).toEqual(expectedAction);
  });
  it(`should create an action to dispatch ${ActionType.SETTINGS_SUCCESS}`, () => {
    const settings = { key: 1, a: 2 };
    const expectedAction = {
      type: ActionType.SETTINGS_SUCCESS,
      payload: { settings }
    };
    expect(actions.settingsSuccess(settings)).toEqual(expectedAction);
  });
  it(`should create an action to dispatch ${ActionType.SETTINGS_FAILED}`, () => {
    const error = "some error";
    const expectedAction = {
      type: ActionType.SETTINGS_FAILED,
      payload: { error }
    };
    expect(actions.settingsFailed(error)).toEqual(expectedAction);
  });
});
