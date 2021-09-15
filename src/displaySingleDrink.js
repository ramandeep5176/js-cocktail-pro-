//
import { hideLoading } from "./toggleLoading.js";
import get from "./getElement.js";

const displayDrink = (data) => {
  hideLoading();

  const drink = data.drinks[0];
  const { strDrinkThumb: image, strDrink: name, StrInstruction: desc } = drink;
  const list = [
    drink.strIngredients1,
    drink.strIngredients2,
    drink.strIngredients3,
    drink.strIngredients4,
    drink.strIngredients5,
  ];
  const img = get(".drink-img");
  const drinkName = get(".drink-name");
  const description = get(".drink-desc");
  const ingredients = get(".drink-ingredients");
  img.src = image;
  document.title = name;
  drinkName.textContent = name;
  description.textContent = desc;
  ingredients.innerHTML = list
    .map((item) => {
      if (!item) return;
      return `<li><i class="far fa-check-square"></i>${item}</li>`;
    })
    .join("");
};
export default displayDrink;
