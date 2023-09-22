import data from "./data.js";

const container = document.querySelector(".data_container");
console.log(data);

data.forEach((item) => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("data_item");

  const icon = document.createElement("img");
  icon.src = item.icon;
  icon.alt = `${item.category} icon`;
  itemDiv.append(icon);

  const categoryText = document.createElement("p");
  categoryText.innerText = item.category;
  itemDiv.append(categoryText);

  const score = document.createElement("p");
  score.innerText = item.score;
  itemDiv.append(score);

  container.append(itemDiv);
});
