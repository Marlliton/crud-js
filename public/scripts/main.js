const buttonsUpdate = document.querySelectorAll("#update");
const buttonsDelete = document.querySelectorAll("#delete");
const formAction = document.querySelector(".modal form");

buttonsUpdate.forEach(button => {
  button.addEventListener("click", handleClick);
});

buttonsDelete.forEach(button => {
  button.addEventListener("click", handleClick);
});

function handleClick(event) {
  event.preventDefault();
  const userId = event.target.dataset.userid;
  const action = event.target.dataset.action;
  const titleModal = document.querySelector(".modal h2");
  const descModal = document.querySelector(".modal p");
  const inputs = document.querySelector(".modal form > div");

  const title = action === "delete" ? "Delete user" : "Update";
  const desc =
    action === "delete"
      ? "Are you sure you want to delete this user?"
      : "update user information";

  action === "delete" ? inputs.classList.add("sr-only"): inputs.classList.remove("sr-only");


  formAction.setAttribute("action", `/actions/${action}/${userId}`);

  titleModal.innerHTML = title;
  descModal.innerHTML = desc;

  open();
}

const modalWrapper = document.querySelector(".modal-wrapper");
const modalContent = document.querySelector(".modal");

const cancelModal = document.querySelector(".button-cancel");
cancelModal.addEventListener("click", close);

function open() {
  modalContent.classList.remove("close-modal");
  modalWrapper.classList.add("active");
  modalContent.classList.add("open-modal");
}

function close() {
  modalContent.classList.add("close-modal");
  modalContent.classList.remove("open-modal");
  setTimeout(() => {
    modalWrapper.classList.remove("active");
  }, 300);
}
