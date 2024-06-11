import { products } from "../core/data.js";
import { categoryGroup, categoryTemplate } from "../core/selectors.js";
import { renderProduct } from "./products.js";

export const createCategory = (categoryName) => {
  const template = categoryTemplate.content.cloneNode(true);
  template.querySelector(".cat-btn").innerText = categoryName;
  return template;
};

export const renderCategory = (categories) => {
  categories.forEach((cart) => {
    categoryGroup.append(createCategory(cart));
  });
};

// show product click btn
export const handleCategoryGroup = (event) => {
  if (event.target.classList.contains("cat-btn")) {
    const currentCategoryBtn = event.target;

    // ? operator
    document.querySelector(".cat-btn.active")?.classList.remove("active");
    currentCategoryBtn.classList.add("active");

    const currentCategory = event.target.innerText;

    renderProduct(
      products.filter(
        (el) => el.category === currentCategory || currentCategory === "All"
      )
    );
  }
};
