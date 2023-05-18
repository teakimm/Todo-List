function createTask(name, description, priority) {
    this.name = name;
    this.description = description;
    this.priority = priority; 
}

let taskList = [];

function handleFormSubmission() {
    const taskName = document.querySelector(".taskName").value;
    const taskDescription = document.querySelector(".taskDesc").value;
    const taskPriority = document.querySelector('input[name="priority"]:checked').value;
    const newTask = new createTask(taskName, taskDescription, taskPriority);
    taskList.push(newTask);
    document.querySelector(".taskName").value = "";
    document.querySelector(".taskDesc").value = "";
    document.querySelector(".highPriority").checked = false;
    document.querySelector(".medPriority").checked = false;
    document.querySelector(".lowPriority").checked = true;
}
export { taskList, handleFormSubmission};