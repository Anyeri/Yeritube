import axios from "axios";
//실제 youtube api를 사용

export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: "AIzaSyCsDQown5LQ3p-4yDU-DD1I7cpo-AMUYqk" },
    });
  }

  async search(params) {
    return this.httpClient.get("search", params);
  }
  async videos(params) {
    return this.httpClient.get("videos", params);
  }

  async channels(params) {
    return this.httpClient.get("channels", params);
  }
}
//axios 통신에 필요한 기본적인 setting
