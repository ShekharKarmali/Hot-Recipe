// TODO: View Segment
import { elements } from "./base";

export const getInput = () => elements.searchField.value;

export const clearInput = () => {
  elements.searchField.value = "";
};

export const clearResult = () => {
  elements.searchResultlist.innerHTML = "";
};

export const limitRecipeTitle = (title, limit = 17) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(" ").reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }

      return acc + cur.length;
    }, 0);

    return `${newTitle.join(" ")}...`;
  }

  return title;
};

const renderRecipe = (recipe) => {
  const markup = `
      <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}"></img>
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(
                      recipe.title
                    )}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
      </li>
      `;
  elements.searchResultlist.insertAdjacentHTML("beforeend", markup);
};

export const renderResults = (recipes) => {
  recipes.forEach(renderRecipe);
};
