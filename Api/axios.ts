import axios from "axios";

const instance = axios.create({
  baseURL: "https://amirsarani.ir",
});

export default instance;
