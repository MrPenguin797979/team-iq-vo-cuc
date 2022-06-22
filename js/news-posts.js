const cards = document.querySelector(".cards");
const cardElements = cards.children;
const cardsLength = cards.childElementCount;
const maxCardsLength = 5;

if (cardsLength > maxCardsLength) {
  for (let i = maxCardsLength; i < cardsLength; ++i) {
    cardElements[i].style = "display: none";
  }
}
