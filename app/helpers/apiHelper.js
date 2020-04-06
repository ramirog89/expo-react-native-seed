import axios from "axios";
import { ENV } from "../constants/environment";

class ApiService {
  http = axios;

  headers = () => ({
    "x-access-token": ""
  });

  request = async (
    options = { method: null, url: null, params: {}, data: {} },
    extraOptions = {}
  ) => {
    const { method, url, params, data } = options;

    if (!/^(GET|POST|PUT|DELETE|PATCH|OPTIONS|HEAD)$/i.test(method))
      throw new Error("method is missing on request");
    if (!url) throw new Error("url is missing on request");

    const requestParams = {
      method: method.toLowerCase(),
      baseURL: ENV.API.URL,
      url,
      params,
      data,
      headers: this.headers(),
      ...extraOptions
    };
    return this.http(requestParams).then(response => response.data);
  };

  find = async (options = {}) => {
    const { entity, query = {}, ...extraOptions } = options;
    const { q, page = 0, limit = 99, sortBy, sortDirection, fields } = query;
    return this.request({
      method: "GET",
      url: `/${entity}`,
      params: {
        page,
        limit,
        sortBy,
        sortDirection,
        query: q,
        fields,
        ...extraOptions
      }
    });
  };

  findOne = async (options = {}) => {
    const { entity, _id } = options;
    return this.request({ method: "GET", url: `/${entity}/${_id}` });
  };

  create = async options => {
    const { entity, data } = options;
    return this.request({ method: "POST", url: `/${entity}`, data });
  };

  update = async (options = {}) => {
    const { entity, _id, data } = options;
    return this.request({ method: "PUT", url: `/${entity}/${_id}`, data });
  };

  delete = async (options = {}) => {
    const { entity, data } = options;
    return this.request({ method: "POST", url: `/${entity}/delete`, data });
  };

  deleteOne = async (options = {}) => {
    const { entity, _id } = options;
    return this.request({ method: "DELETE", url: `/${entity}/${_id}` });
  };
}

export const apiService = new ApiService();
