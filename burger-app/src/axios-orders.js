import axios from "axios";

const instance = axios.create({
  baseURL: "https://myburger-ddfc6.firebaseio.com",
});

export default instance;
