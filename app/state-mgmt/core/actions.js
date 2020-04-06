export const ActionType = {
  SETTINGS_BEGIN: "SETTINGS_BEGIN",
  SETTINGS_SUCCESS: "SETTINGS_SUCCESS",
  SETTINGS_FAILED: "SETTINGS_FAILED"
};

export const actions = {
  settingsRequest: () => {
    return {
      type: ActionType.SETTINGS_BEGIN
    };
  },
  settingsSuccess: settings => {
    return {
      type: ActionType.SETTINGS_SUCCESS,
      data: settings
    };
  },
  settingsFailed: error => {
    return {
      type: ActionType.SETTINGS_FAILED,
      message: error
    };
  }
};
