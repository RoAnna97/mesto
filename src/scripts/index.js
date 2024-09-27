import "../index.css";
import { initialCards } from "./cards.js";
import { createCard, deleteCard, likeCard } from "./card.js";


const placesWrap = document.querySelector(".places__list");

initialCards.forEach((cardData) => {
  placesWrap.append(createCard(cardData, deleteCard));
});
