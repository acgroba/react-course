import axios from "axios";
const KEY = "AIzaSyBOXLSZQABWun2Z24uI7QTZLOMDR_yYYeY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: 5, key: KEY, type: "video" },
});
