import axios from "axios";
//정해진 json file을 읽기만 하는 용도
//DI 및 동일 인터페이스를 가지고 다른 구현사항 만들어 주기 위해 사용
export default class FakeYoutube {
  async search(keyword) {
    //private class 호출
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }
  async #searchByKeyword(keyword) {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  async #mostPopular() {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }
}
