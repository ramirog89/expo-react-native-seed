import { actions } from "./actions";
import { initialState } from "./state";
import core from "./reducer";

describe("core reducer", () => {
  let action;
  let newState;

  describe("settingsRequest", () => {
    beforeEach(() => {
      action = actions.settingsRequest();
      newState = core(initialState, action);
    });

    it("should set isLoading on true", () => {
      expect(newState).toEqual({
        ...initialState,
        isLoading: true
      });
    });
  });

  describe("settingsSuccess", () => {
    const data = { foo: "foo", bar: "bar" };
    beforeEach(() => {
      action = actions.settingsSuccess(data);
      newState = core(initialState, action);
    });

    it("should return settings from state", () => {
      expect(newState).toEqual({
        data,
        error: false,
        errorMessage: null,
        isLoading: false
      });
    });
  });

  describe("settingsFailed", () => {
    const error = "some error";
    beforeEach(() => {
      action = actions.settingsFailed(error);
      newState = core(initialState, action);
    });

    it("should return settings from state", () => {
      expect(newState).toEqual({
        data: null,
        isLoading: false,
        error: true,
        errorMessage: error
      });
    });
  });

  describe("noAction given", () => {
    beforeEach(() => {
      newState = core(initialState, {});
    });

    it("should return the current state", () => {
      expect(newState).toEqual(initialState);
    });
  });
});
