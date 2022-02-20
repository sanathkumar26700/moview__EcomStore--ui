const filterBtn = document.querySelector("#filter--btn");
const closeBtn = document.querySelector("#close--btn");

const productListSection = document.querySelector(".product-list__section");
const filterSection = document.querySelector(".filter__section");

filterBtn.addEventListener("click", () => {
    productListSection.style.display = "none";
    filterSection.style.display = "block";
    filterBtn.style.display = "none";
    closeBtn.style.display = "block";

})

closeBtn.addEventListener("click", () => {
    productListSection.style.display = "grid";
    filterSection.style.display = "none";
    closeBtn.style.display = "none";
    filterBtn.style.display = "block";
})