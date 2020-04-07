import { apiService } from "./apiHelper";

describe("ApiService", () => {
  describe("request", () => {
    let result;

    describe("valid METHOD and a valid URL", () => {
      beforeEach(() => {
        result = apiService.request({
          method: "GET",
          url: "example.com/endpoint"
        });
      });

      it("should return a promise", () => {
        result.then(response => {
          expect(response).toEqual({});
        });
      });
    });
  });

  describe("find", () => {
    beforeEach(() => {
      apiService.request = jest.fn();
      apiService.find({
        entity: "users",
        page: 1,
        limit: 30,
        query: {
          q: "some-query",
          sortBy: "ASC",
          sortDirection: "name"
        }
      });
    });

    it("should call apiService.request with given params", () => {
      expect(apiService.request).toHaveBeenCalledWith({
        method: "GET",
        params: {
          limit: 30,
          page: 1,
          query: "some-query"
        },
        url: "/users"
      });
    });
  });

  describe("findOne", () => {
    beforeEach(() => {
      apiService.request = jest.fn();
      apiService.findOne({
        entity: "users",
        _id: "user-id-1"
      });
    });

    it("should call apiService.request with given params", () => {
      expect(apiService.request).toHaveBeenCalledWith({
        method: "GET",
        url: "/users/user-id-1"
      });
    });
  });

  describe("create", () => {
    beforeEach(() => {
      apiService.request = jest.fn();
      apiService.create({
        entity: "users",
        data: "someData"
      });
    });

    it("should call apiService.request with given params", () => {
      expect(apiService.request).toHaveBeenCalledWith({
        method: "POST",
        url: "/users",
        data: "someData"
      });
    });
  });

  describe("update", () => {
    beforeEach(() => {
      apiService.request = jest.fn();
      apiService.update({
        entity: "users",
        _id: "user-id-1",
        data: "someData"
      });
    });

    it("should call apiService.request with given params", () => {
      expect(apiService.request).toHaveBeenCalledWith({
        method: "PUT",
        url: "/users/user-id-1",
        data: "someData"
      });
    });
  });

  describe("delete", () => {
    let ids;
    beforeEach(() => {
      ids = ["user-id-1", "user-id-2"];
      apiService.request = jest.fn();
      apiService.delete({
        entity: "users",
        data: ids
      });
    });

    it("should call apiService.request with given params", () => {
      expect(apiService.request).toHaveBeenCalledWith({
        method: "POST",
        url: "/users/delete",
        data: ids
      });
    });
  });

  describe("deleteOne", () => {
    beforeEach(() => {
      apiService.request = jest.fn();
      apiService.deleteOne({
        entity: "users",
        _id: "user-id-1"
      });
    });

    it("should call apiService.request with given params", () => {
      expect(apiService.request).toHaveBeenCalledWith({
        method: "DELETE",
        url: "/users/user-id-1"
      });
    });
  });
});
