import data from "./data.js";

const container = document.querySelector(".data_container");
console.log(data);

data.forEach((item) => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("data_item");

  const leftDiv = document.createElement("div");
  leftDiv.classList.add("left_div");

  const rightDiv = document.createElement("div");
  rightDiv.classList.add("right_div");

  const icon = document.createElement("img");
  icon.src = item.icon;
  icon.alt = `${item.category} icon`;
  leftDiv.append(icon);

  const categoryText = document.createElement("p");
  categoryText.innerText = item.category;
  leftDiv.append(categoryText);

  const score = document.createElement("p");
  score.innerText = item.score;
  rightDiv.append(score);

  const hundred = document.createElement("p");
  hundred.innerText = "/ 100";
  rightDiv.append(hundred);
  hundred.classList.add("hundred");

  itemDiv.append(leftDiv, rightDiv);

  container.append(itemDiv);
});
