(() => {
  const {
    openModalBtn,
    closeModalBtn,
    modal,
    body
  } = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector("body")
  };

  openModalBtn.addEventListener("click", toggleModal);
  closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal(e) {
    e.preventDefault();
    modal.classList.toggle("is-hidden");

    !modal.classList.contains("is-hidden")
      ? body.style.overflow = "hidden"
      : body.style.overflow = "auto";
  }
})();