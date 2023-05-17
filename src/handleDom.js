import handleFormSubmission from "./createTodo";
function clickHandler() {
  const modal = document.querySelector(".modal");
  const formSubmit = document.querySelector(".submit");
  document.addEventListener("click", e => {
    if(e.target.className === "newTask") {
      modal.style.display = "block";
    } else if(e.target.className === "modal") {
      modal.style.display = "none";
    } else if(e.target === formSubmit) {
      handleFormSubmission();
      modal.style.display = "none";
    }
  });
}

export default clickHandler;