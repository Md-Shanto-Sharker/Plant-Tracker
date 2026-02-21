let totalCount = document.getElementById("total");
let thrivingCount = document.getElementById("thrivingCount");
let strugglingCount = document.getElementById("strugglingCount");

const allCards = document.getElementById("allCards");

function calculateCount() {
  totalCount.innerText = allCards.children.length;
}
calculateCount();
