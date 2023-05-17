function createTask() {
  const taskBtn = document.querySelector(".newTask");
  const modal = document.querySelector(".modal");
  taskBtn.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

export default createTask;