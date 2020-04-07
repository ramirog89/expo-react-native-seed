import { actions } from "./actions";
import { initialState } from "./state";
import { User1, User2 } from "../../test/mock/user";
import user from "./reducer";

describe("user reducer", () => {
  let action;
  let newState;
  const initialStateWithUser = {
    ...initialState,
    data: [User1(), User2()]
  };

  describe("usersRequest", () => {
    beforeEach(() => {
      action = actions.usersRequest();
      newState = user(initialState, action);
    });

    it("should set isLoading in true", () => {
      expect(newState).toEqual({
        ...initialState,
        isLoading: true
      });
    });
  });

  describe("usersSuccess", () => {
    const userList = [{ name: "Alina", age: 25 }];
    beforeEach(() => {
      action = actions.usersSuccess(userList);
      newState = user(initialState, action);
    });

    it("should add a new user in state", () => {
      expect(newState).toEqual({
        ...initialState,
        data: userList
      });
    });
  });

  describe("usersFailed", () => {
    const error = "error";
    beforeEach(() => {
      action = actions.usersFailed(error);
      newState = user(initialState, action);
    });

    it("should return error when user fails", () => {
      expect(newState).toEqual({
        ...initialState,
        error: true,
        errorMessage: error,
        data: []
      });
    });
  });

  describe("userCreateRequest", () => {
    const newUser = { name: "New user", age: 21 };
    beforeEach(() => {
      action = actions.userCreateRequest(newUser);
      newState = user(initialState, action);
    });

    it("should set isLoading in true", () => {
      expect(newState).toEqual({
        ...initialState,
        isLoading: true
      });
    });
  });

  describe("userCreateSuccess", () => {
    const newUser = { id: 3, name: "Lorenzo", age: 28 };
    beforeEach(() => {
      action = actions.userCreateSuccess(newUser);
      newState = user(initialStateWithUser, action);
    });

    it("should add a new user in state", () => {
      expect(newState).toEqual({
        ...initialStateWithUser,
        data: [...initialStateWithUser.data, newUser]
      });
    });
  });

  describe("userCreateFailed", () => {
    const error = "error";
    beforeEach(() => {
      action = actions.userCreateFailed(error);
      newState = user(initialState, action);
    });

    it("should return error when user fails", () => {
      expect(newState).toEqual({
        ...initialState,
        error: true,
        errorMessage: error
      });
    });
  });

  describe("userUpdateRequest", () => {
    beforeEach(() => {
      action = actions.userUpdateRequest();
      newState = user(initialState, action);
    });

    it("should set isLoading in true", () => {
      expect(newState).toEqual({
        ...initialState,
        isLoading: true
      });
    });
  });

  describe("userUpdateSuccess", () => {
    const updateUser = { id: 2, name: "Robert Hawks", age: 34 };
    beforeEach(() => {
      action = actions.userUpdateSuccess(updateUser);
      newState = user(initialStateWithUser, action);
    });

    it("should add a new user in state", () => {
      expect(newState).toEqual({
        ...initialStateWithUser,
        data: [User1(), updateUser]
      });
    });
  });

  describe("userUpdateFailed", () => {
    const error = "error";
    beforeEach(() => {
      action = actions.userUpdateFailed(error);
      newState = user(initialStateWithUser, action);
    });

    it("should return error when user fails", () => {
      expect(newState).toEqual({
        ...initialStateWithUser,
        error: true,
        errorMessage: error
      });
    });
  });

  describe("userDeleteRequest", () => {
    beforeEach(() => {
      action = actions.userDeleteRequest();
      newState = user(initialState, action);
    });

    it("should set isLoading in true", () => {
      expect(newState).toEqual({
        ...initialState,
        isLoading: true
      });
    });
  });

  describe("userDeleteSuccess", () => {
    const userId = 2;
    beforeEach(() => {
      action = actions.userDeleteSuccess(userId);
      newState = user(initialStateWithUser, action);
    });

    it("should add a new user in state", () => {
      expect(newState).toEqual({
        ...initialStateWithUser,
        data: [User1()]
      });
    });
  });

  describe("userDeleteFailed", () => {
    const error = "error";
    beforeEach(() => {
      action = actions.userDeleteFailed(error);
      newState = user(initialStateWithUser, action);
    });

    it("should return error when user fails", () => {
      expect(newState).toEqual({
        ...initialStateWithUser,
        error: true,
        errorMessage: error
      });
    });
  });

  describe("noAction given", () => {
    beforeEach(() => {
      newState = user(initialState, {});
    });

    it("should return the current state", () => {
      expect(newState).toEqual(initialState);
    });
  });
});
