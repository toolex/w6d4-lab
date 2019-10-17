document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);
})

const readingList = [];

const handleFormSubmit = function (event) {
  event.preventDefault()
  const resultParagraph = document.querySelector("#reading-list");
  const newItem = `Title: ${event.target.title.value} Author: ${event.target.author.value} Category: ${event.target.category.value}`;
  readingList.push(newItem);
  resultParagraph.textContent = readingList;
  form.reset();
};
