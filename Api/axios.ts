import axios from "axios";

const instance = axios.create({
  baseURL: "http://amirsarani.ir",
});

export default instance;
