import axios from "axios";
import newApisData from "./newApis.json";  // Adjust the path as needed

const api = {};

// Dynamically create Axios requests from JSON data
Object.keys(newApisData).forEach((key) => {
  const { method, endpoint } = newApisData[key];

  api[key] = (data) =>
    method === "get"
      ? axios.get(endpoint, { params: data })
      : axios[method](endpoint, data);
});

export default api;
