import axios from "axios";

const fetchAPI = (url, method = "GET", data = null) => {

  const axiosInstance = axios.create({
    headers: {
      Accept: "application/json"
    }
  });

  return axiosInstance({
    method: "get",
    url
  }).then(res => {
    const { data: response, headers: responseHeader } = res;
    return { response, responseHeader }
  });
};

export default fetchAPI;
