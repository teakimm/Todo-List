function elementConstructor(type, className = "", textContent = "") {
    const element = document.createElement(type);
    element.className = className;
    element.textContent = textContent;
    return element;
}
function createNav() {
    const nav = new elementConstructor("nav", "navbar", "");
    const title = new elementConstructor("p", "", "toDoList")
    nav.appendChild(title);
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
    form.setAttribute("action", "javascript:submit()");

    const taskName = new elementConstructor("input", "taskName", "");
    taskName.setAttribute("type", "test");
    taskName.setAttribute("placeholder", "Task Name");
    const taskDesc = new elementConstructor("textarea", "taskDesc", "");
    taskDesc.setAttribute("name", "taskDesc");
    taskDesc.setAttribute("placeholder", "Description");
    const createTask = new elementConstructor("input", "submit", "");
    createTask.setAttribute("type", "button");
    createTask.setAttribute("value", "Submit");

    form.append(taskName, taskDesc, createTask);

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
export default initialRender