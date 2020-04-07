import { call, put } from "redux-saga/effects";

import { apiService } from "../../helpers/apiHelper";
import { actions } from "./actions";
import * as userSagas from "./sagas";

jest.mock("../../helpers/apiHelper");

fdescribe("userSagas", () => {
  let gen;

  describe("getUsers", () => {
    let actionRequest;
    beforeEach(() => {
      actionRequest = {
        payload: {}
      };
      gen = userSagas.getUsers(actionRequest);
    });

    it("success", () => {
      expect(gen.next().value).toEqual(
        call(apiService.find, { entity: "users" })
      );

      const dataResponse = { docs: [{ id: 1, name: "Aldana", age: 22 }] };
      expect(gen.next(dataResponse).value).toEqual(
        put(actions.usersSuccess(dataResponse.docs))
      );
      expect(gen.next().done).toBeTruthy();
    });

    it("fail", () => {
      gen.next();
      expect(gen.throw({}).value).toEqual(put(actions.usersFailed({})));
      expect(gen.next().done).toBeTruthy();
    });
  });

  describe("createUser", () => {
    let actionRequest;
    const user = { name: "Sandra", age: 40 };
    beforeEach(() => {
      actionRequest = {
        payload: {
          user
        }
      };
      gen = userSagas.createUser(actionRequest);
    });

    it("success", () => {
      expect(gen.next().value).toEqual(
        call(apiService.create, {
          entity: "users",
          data: actionRequest.payload.user
        })
      );
      const createResponse = actionRequest.payload.user;
      expect(gen.next(createResponse).value).toEqual(
        put(actions.userCreateSuccess(createResponse))
      );
      expect(gen.next().done).toBeTruthy();
    });

    it("fail", () => {
      gen.next();
      expect(gen.throw({}).value).toEqual(put(actions.userCreateFailed({})));
      expect(gen.next().done).toBeTruthy();
    });
  });

  describe("updateUser", () => {
    let actionRequest;
    const user = { id: 1, name: "Alina", age: 26 };
    beforeEach(() => {
      actionRequest = {
        payload: {
          user
        }
      };
      gen = userSagas.updateUser(actionRequest);
    });

    it("success", () => {
      expect(gen.next().value).toEqual(
        call(apiService.update, {
          entity: "users",
          data: actionRequest.payload.user
        })
      );
      const deleteResponse = actionRequest.payload.user;
      expect(gen.next(deleteResponse).value).toEqual(
        put(actions.userUpdateSuccess(deleteResponse))
      );
      expect(gen.next().done).toBeTruthy();
    });

    it("fail", () => {
      gen.next();
      expect(gen.throw({}).value).toEqual(put(actions.userUpdateFailed({})));
      expect(gen.next().done).toBeTruthy();
    });
  });

  describe("deleteUser", () => {
    const actionRequest = {
      payload: {
        id: 1
      }
    };
    beforeEach(() => {
      gen = userSagas.deleteUser(actionRequest);
    });

    it("success", () => {
      expect(gen.next().value).toEqual(
        call(apiService.delete, {
          entity: "users",
          data: actionRequest.payload.id
        })
      );
      const deleteResponse = actionRequest.payload.id;
      expect(gen.next(deleteResponse).value).toEqual(
        put(actions.userDeleteSuccess(deleteResponse))
      );
      expect(gen.next().done).toBeTruthy();
    });

    it("fail", () => {
      gen.next();
      expect(gen.throw({}).value).toEqual(put(actions.userDeleteFailed({})));
      expect(gen.next().done).toBeTruthy();
    });
  });
});
