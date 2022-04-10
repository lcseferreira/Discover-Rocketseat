const buttonOpenModal = document.querySelector("button#openModal");
const divModalWrapper = document.querySelector("div.modal-wrapper");

buttonOpenModal.addEventListener("click", () => divModalWrapper.classList.remove("invisible"));

document.addEventListener("keydown", function (event) {
    const isEscKey = event.key === "Escape";
    const containsInvisible = divModalWrapper.classList.contains("invisible");

    if (isEscKey && !containsInvisible) {
        divModalWrapper.classList.add("invisible")
    };
});