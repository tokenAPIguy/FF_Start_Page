"use strict";

//Open Tabs in new Page
const openLink = (value) => {
  window.open(`https://${value}.com`);
};

//Search by clicking Enter
const searchInput = document.getElementById("search");

searchInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    window.open(`https://google.com/search?q=${searchInput.value}`);
  }
});
