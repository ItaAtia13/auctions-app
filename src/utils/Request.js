import axios from "axios";
const BASE_URL = "http://localhost:8989";

export const Request = {
  get(url, params = {}) {},

  async post(url, data = {}) {
    return await axios.post(BASE_URL + url, data);
  },
};
