document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);
})

const handleFormSubmit = function (event) {
  event.preventDefault()

  const newItem = document.createElement("p");
  newItem.textContent = `Title: ${event.target.title.value} Author: ${event.target.author.value} Category: ${event.target.category.value}`;
  const resultParagraph = document.querySelector("#reading-list");
  resultParagraph.appendChild(newItem);
  this.reset();
};
