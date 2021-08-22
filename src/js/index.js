// TODO: Controller

import Search from "./models/Search";
import { elements, renderLoader, clearLoader } from "./views/base";
import * as searchView from "./views/searchView";

const state = {};

const ControlSearch = async () => {
  // get query
  const query = searchView.getInput();

  if (query) {
    // pass it to class
    state.search = new Search(query);

    // UI for clear input
    searchView.clearInput();

    // UI for clear results
    searchView.clearResult();

    //UI for spinner
    renderLoader(elements.searchRes);

    // render it using try and catch
    try {
      await state.search.getResult();

      // clear loader
      clearLoader();

      // render result
      searchView.renderResults(state.search.result);
    } catch (error) {
      alert("Something error in Controller.....");
    }
  }
};

elements.searchInput.addEventListener("submit", (e) => {
  e.preventDefault();
  ControlSearch();
});
