import './pages/index.css';

const cardTemplate = document.querySelector("#card-template").content.querySelector(".places__item");
const placesWrap = document.querySelector(".places__list");

function createCard(cardData, deleteCard) {
    const card = cardTemplate.cloneNode(true);
    
    const cardTitle = card.querySelector(".card__title");
    cardTitle.textContent = cardData.name;
    
    const cardImage = card.querySelector(".card__image");
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;

    const deleteButton = card.querySelector(".card__delete-button");
    deleteButton.addEventListener("click", deleteCard);

    return card;
}

function deleteCard(evt) {
    evt.target.closest(".card").remove();
}

initialCards.forEach((cardData) => {
    placesWrap.append(createCard(cardData, deleteCard));
})