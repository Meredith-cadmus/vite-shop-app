import { renderCategory } from "../app/categories.js";
import { renderProduct } from "../app/products.js";
import { categories, products } from "./data.js";
import listener from "./listener.js";

const initialRender = () => {
  renderCategory(categories);
  renderProduct(products);
  listener();
};

export default initialRender;
