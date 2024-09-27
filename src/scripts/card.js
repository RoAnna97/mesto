const cardTemplate = document.querySelector("#card-template").content.querySelector(".places__item");

export function deleteCard(evt) {
  evt.target.closest(".card").remove();
}

export function likeCard(evt) {
	evt.target.classList.toggle("card__like-button_is-active");
}

export function createCard(cardData, {deleteCard, likeCard, openImage}) {
  const card = cardTemplate.cloneNode(true);

  const cardTitle = card.querySelector(".card__title");
  cardTitle.textContent = cardData.name;

  const cardImage = card.querySelector(".card__image");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
	cardImage.style.backgroundImage = `url(${cardData.link})`;

  const deleteButton = card.querySelector(".card__delete-button");
	if (deleteCard) {
		deleteButton.addEventListener("click", deleteCard);
	}

	const likeButton = card.querySelector(".card__like-button");
	if (likeCard) {
		likeButton.addEventListener("click", likeCard);
	}

	if (openImage) {
		likeButton.addEventListener("click", () => openImage(cardData));
	}

  return card;
}

