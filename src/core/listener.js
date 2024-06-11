import { handleCartItemGroup } from "../app/card.js";
import { handleCategoryGroup } from "../app/categories.js";
import { handleProductGroup } from "../app/products.js";
import { cartItemGroup, categoryGroup, productGroup } from "./selectors.js";

const listener = () => {
  categoryGroup.addEventListener("click", handleCategoryGroup);
  productGroup.addEventListener("click", handleProductGroup);
  cartItemGroup.addEventListener("click", handleCartItemGroup);
};

export default listener;
