const escUp = (evt) => {
    if(evt.key === "Escape") {
        const activePopup = document.querySelector(".popup_is-opened");
        closeModalWindow(activePopup);
    }
};

export const openModalWindow = (modalWindow) => {
    modalWindow.classList.add("popup_is-opened");
    document.addEventListener("keyup", escUp);
};

export const closeModalWindow = (modalWindow) => {
    modalWindow.classList.remove("popup_is-opened");
    document.removeEventListener("keyup", escUp);
};

export const setCloseModalWindow = (modalWindow) => {
    const closeButton = modalWindow.querySelector(".popup__close")
    closeButton.addEventListener("click", () => {
        closeModalWindow(modalWindow);
    });

    modalWindow.addEventListener("mousedown", (evt) => {
        if (evt.target.classList.contains("popup")) {
            closeModalWindow(modalWindow);
        }
    });
}