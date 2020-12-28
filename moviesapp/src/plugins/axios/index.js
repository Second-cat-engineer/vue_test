import axios from "axios";
// import interceptors from "./interceptors";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

instance.interceptors.request.use(
  config => {
    const params = config.params || {};
    config.params = Object.assign(params, {
      apikey: process.env.VUE_APP_API_KEY,
      plot: "full"
    });
    return config;
  },
  er => {
    console.log(er);
  }
);
instance.interceptors.response.use(res => {
  return res.data;
});

export default instance;
