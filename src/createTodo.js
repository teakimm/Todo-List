function createTask(name, description) {
    this.name = name;
    this.description = description
}

let taskList = [];

function handleFormSubmission() {
    const taskName = document.querySelector(".taskName").value;
    const taskDescription = document.querySelector(".taskDesc").value;
    const newTask = new createTask(taskName, taskDescription);
    taskList.push(newTask);
    console.log(taskList)
    document.querySelector(".taskName").value = "";
    document.querySelector(".taskDesc").value = "";

}
export default handleFormSubmission;