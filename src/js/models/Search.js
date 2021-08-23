// TODO: Modal Segment
export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResult() {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${this.query}`
      );
      const info = await res.json();
      this.result = info.recipes;
      // console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
