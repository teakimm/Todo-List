function createTask() {
    const taskBtn = document.querySelector(".newTask");
    const modal = document.querySelector(".modal");
    taskBtn.onclick = function() {
        modal.style.display = "block";
    }
}
export default createTask;