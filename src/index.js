import createTask from "./handleDom";
function test() {
    const taskName = document.querySelector(".taskName").value;
    console.log(taskName);
}
test();
createTask();