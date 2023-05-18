import { taskList, handleFormSubmission} from "./createTodo";

function elementConstructor(type, className = "", textContent = "") {
    const element = document.createElement(type);
    if (className !== "") {
        element.className = className;
    }
    element.textContent = textContent;
    return element;
}
function createNav() {
    const nav = new elementConstructor("nav", "navbar", "");
    const title = new elementConstructor("p", "", "toDoList");
    const panicButton = new elementConstructor("button", "panic", "AHHHH"); //delete later
    nav.append(title, panicButton); 
    return nav;
}
function createContent() {
    const content = new elementConstructor("div", "content", "");
    const sideBar = new elementConstructor("div", "sideBar", "");
    const main = new elementConstructor("div", "main", "");

    const taskContainer = new elementConstructor("div", "taskContainer", "");
    const infoBar = new elementConstructor("div", "infoBar", "");
    const currentProject = new elementConstructor("p", "currentProject", "All");
    const newTask = new elementConstructor("button", "newTask", "+ New Task");
    infoBar.append(currentProject, newTask);
    const taskList = new elementConstructor("div", "taskList", "");
    taskContainer.append(infoBar, taskList);

    const modal = new elementConstructor("div", "modal");
    const modalContent = new elementConstructor("div", "modalContent");
    const modalTitle = new elementConstructor("p", "modalTitle", "New Task");

    const taskInputs = new elementConstructor("div", "taskInputs");
    const form = new elementConstructor("form", "form", "");

    const taskName = new elementConstructor("input", "taskName", "");
    taskName.setAttribute("placeholder", "Task Name");
    const taskDesc = new elementConstructor("textarea", "taskDesc", "");
    taskDesc.setAttribute("placeholder", "Description");

    const priorityContainer = new elementConstructor("div", "priorityContainer", "Priority: ");

    const highLabel = new elementConstructor("label", "", "");
    const highPriority = new elementConstructor("input", "highPriority", "");
    highPriority.setAttribute("type", "radio");
    highPriority.setAttribute("name", "priority");
    highPriority.setAttribute("value", "high");
    const highImg = new elementConstructor("img", "", "");
    highImg.setAttribute("src", "./assets/high.svg")
    highImg.setAttribute("title", "High");
    highLabel.append(highPriority, highImg);
 
    const medLabel = new elementConstructor("label", "", "");
    const medPriority = new elementConstructor("input", "medPriority", "");
    medPriority.setAttribute("type", "radio");
    medPriority.setAttribute("name", "priority");
    medPriority.setAttribute("value", "med");
    const medImg = new elementConstructor("img", "", "");
    medImg.setAttribute("src", "./assets/med.svg");
    medImg.setAttribute("title", "Medium");
    medLabel.append(medPriority, medImg);

    const lowLabel = new elementConstructor("label", "", "");
    const lowPriority = new elementConstructor("input", "lowPriority", "");
    lowPriority.setAttribute("type", "radio");
    lowPriority.setAttribute("name", "priority");
    lowPriority.setAttribute("value", "low");
    lowPriority.setAttribute("checked", "checked");
    const lowImg = new elementConstructor("img", "", "");
    lowImg.setAttribute("src", "./assets/low.svg")
    lowImg.setAttribute("title", "Low");
    lowLabel.append(lowPriority, lowImg);

    priorityContainer.append(highLabel, medLabel, lowLabel);

    const createTask = new elementConstructor("input", "submit", "");
    createTask.setAttribute("type", "button");
    createTask.setAttribute("value", "Submit");

    form.append(taskName, taskDesc, priorityContainer, createTask);

    taskInputs.append(form);
    modalContent.append(modalTitle, taskInputs);
    modal.append(modalContent);

    main.append(taskContainer, modal);

    content.append(sideBar, main);
    return content;
}
function initialRender() {
    const navBar = createNav();
    const content = createContent();
    document.body.append(navBar, content);

}
function clickHandler() {
    const modal = document.querySelector(".modal");
    const formSubmit = document.querySelector(".submit");
    const tasks = document.querySelector(".taskList");

    document.addEventListener("click", e => {
      if(e.target.className === "newTask") {
        modal.style.display = "block";
      } else if(e.target.className === "modal") {
        modal.style.display = "none";
      } else if(e.target === formSubmit) {
        handleFormSubmission();
        modal.style.display = "none";
        for(let data of taskList) {
            const entry = new elementConstructor("div", "entry", "");
            const name = new elementConstructor("div", "name", data.name);
            const description = new elementConstructor("div", "description", data.description);
            entry.append(name, description);
            tasks.append(entry);
        }
      } else if(e.target.className === "panic") {  //this is for debugging because im dumb 
        console.log(taskList[0]);
      }
    });
}

export { initialRender, clickHandler };