const categoriesList = document.getElementById("categories");

const categoryItems = categoriesList.querySelectorAll("li.item");
console.log(categoryItems);

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((category) => {
    const title = category.querySelector("h2").textContent;

    const itemCount = category.querySelectorAll("ul li").length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemCount}`);
});
