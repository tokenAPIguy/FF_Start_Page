"use strict";
/******** Needs to be Refactored 🛑 ***********/
//Open Tabs in new Page
const openLink = (value) => {
  window.open(`https://${value}.com`);
};

//Open Commodum
const openCommodum = () => {
  window.open(`https://commodum.testbench.cloud`);
};
/*************************************************/

//Search by clicking Enter
const searchInput = document.getElementById("search");

searchInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    window.open(`https://google.com/search?q=${searchInput.value}`);
  }
});

// Greeting Message
const greetingMessage = () => {
  const today = new Date();
  const hours = today.getHours();

  if (hours < 12 && hours > 4) {
    return "Good Morning, Jake";
  } else if (hours > 12 && hours < 6) {
    return "Good Afternoon, Jake";
  } else {
    return "Good Evening, Jake";
  }
};

document.getElementById("greeting").innerHTML = greetingMessage();
