export const ActionType = {
  SETTINGS_BEGIN: "SETTINGS_BEGIN",
  SETTINGS_SUCCESS: "SETTINGS_SUCCESS",
  SETTINGS_FAILED: "SETTINGS_FAILED"
};

export const actions = {
  settingsRequest: () => ({
    type: ActionType.SETTINGS_BEGIN,
    payload: null
  }),
  settingsSuccess: settings => ({
    type: ActionType.SETTINGS_SUCCESS,
    payload: { settings }
  }),
  settingsFailed: error => ({
    type: ActionType.SETTINGS_FAILED,
    payload: { error }
  })
};
