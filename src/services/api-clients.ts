import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1a423952dc184946951d797d4b0c770b",
  },
});
