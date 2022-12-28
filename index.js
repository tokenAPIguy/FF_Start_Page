"use strict";

//Open Tabs in new Page
const openLink = (value) => {
  window.open(`https://${value}.com`);
};

//Search by clicking Enter
const searchTerm = document.getElementById("search").value;
console.log(document.getElementById("search").value);

search.addEventListener("keydown", (searchTerm) => {
  console.log(searchTerm)
  searchTerm.keyCode === 13
    ? window.open(`https://google.com/search?q=${searchTerm}`)
    : null;
});
