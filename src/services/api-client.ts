import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "24e25923a33148b6a4f5db3ed50aad5d",
  },
});
