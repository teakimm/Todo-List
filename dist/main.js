/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleFormSubmission\": () => (/* binding */ handleFormSubmission),\n/* harmony export */   \"taskList\": () => (/* binding */ taskList)\n/* harmony export */ });\nfunction createTask(name, description, priority) {\n    this.name = name;\n    this.description = description;\n    this.priority = priority; \n}\n\nlet taskList = [];\n\nfunction handleFormSubmission() {\n    const taskName = document.querySelector(\".taskName\").value;\n    const taskDescription = document.querySelector(\".taskDesc\").value;\n    const taskPriority = document.querySelector('input[name=\"priority\"]:checked').value;\n    const newTask = new createTask(taskName, taskDescription, taskPriority);\n    taskList.push(newTask);\n    document.querySelector(\".taskName\").value = \"\";\n    document.querySelector(\".taskDesc\").value = \"\";\n    document.querySelector(\".highPriority\").checked = false;\n    document.querySelector(\".medPriority\").checked = false;\n    document.querySelector(\".lowPriority\").checked = true;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/createTodo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n(0,_render__WEBPACK_IMPORTED_MODULE_0__.initialRender)();\n(0,_render__WEBPACK_IMPORTED_MODULE_0__.clickHandler)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clickHandler\": () => (/* binding */ clickHandler),\n/* harmony export */   \"initialRender\": () => (/* binding */ initialRender)\n/* harmony export */ });\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n\n\nfunction elementConstructor(type, className = \"\", textContent = \"\") {\n    const element = document.createElement(type);\n    if (className !== \"\") {\n        element.className = className;\n    }\n    element.textContent = textContent;\n    return element;\n}\nfunction createNav() {\n    const nav = new elementConstructor(\"nav\", \"navbar\", \"\");\n    const title = new elementConstructor(\"p\", \"\", \"toDoList\");\n    const panicButton = new elementConstructor(\"button\", \"panic\", \"AHHHH\"); //delete later\n    nav.append(title, panicButton); \n    return nav;\n}\nfunction createContent() {\n    const content = new elementConstructor(\"div\", \"content\", \"\");\n    const sideBar = new elementConstructor(\"div\", \"sideBar\", \"\");\n    const main = new elementConstructor(\"div\", \"main\", \"\");\n\n    const taskContainer = new elementConstructor(\"div\", \"taskContainer\", \"\");\n    const infoBar = new elementConstructor(\"div\", \"infoBar\", \"\");\n    const currentProject = new elementConstructor(\"p\", \"currentProject\", \"All\");\n    const newTask = new elementConstructor(\"button\", \"newTask\", \"+ New Task\");\n    infoBar.append(currentProject, newTask);\n    const taskList = new elementConstructor(\"div\", \"taskList\", \"\");\n    taskContainer.append(infoBar, taskList);\n\n    const modal = new elementConstructor(\"div\", \"modal\");\n    const modalContent = new elementConstructor(\"div\", \"modalContent\");\n    const modalTitle = new elementConstructor(\"p\", \"modalTitle\", \"New Task\");\n\n    const taskInputs = new elementConstructor(\"div\", \"taskInputs\");\n    const form = new elementConstructor(\"form\", \"form\", \"\");\n\n    const taskName = new elementConstructor(\"input\", \"taskName\", \"\");\n    taskName.setAttribute(\"placeholder\", \"Task Name\");\n    const taskDesc = new elementConstructor(\"textarea\", \"taskDesc\", \"\");\n    taskDesc.setAttribute(\"placeholder\", \"Description\");\n\n    const priorityContainer = new elementConstructor(\"div\", \"priorityContainer\", \"Priority: \");\n\n    const highLabel = new elementConstructor(\"label\", \"\", \"\");\n    const highPriority = new elementConstructor(\"input\", \"highPriority\", \"\");\n    highPriority.setAttribute(\"type\", \"radio\");\n    highPriority.setAttribute(\"name\", \"priority\");\n    highPriority.setAttribute(\"value\", \"high\");\n    const highImg = new elementConstructor(\"img\", \"\", \"\");\n    highImg.setAttribute(\"src\", \"./assets/high.svg\")\n    highImg.setAttribute(\"title\", \"High\");\n    highLabel.append(highPriority, highImg);\n \n    const medLabel = new elementConstructor(\"label\", \"\", \"\");\n    const medPriority = new elementConstructor(\"input\", \"medPriority\", \"\");\n    medPriority.setAttribute(\"type\", \"radio\");\n    medPriority.setAttribute(\"name\", \"priority\");\n    medPriority.setAttribute(\"value\", \"med\");\n    const medImg = new elementConstructor(\"img\", \"\", \"\");\n    medImg.setAttribute(\"src\", \"./assets/med.svg\");\n    medImg.setAttribute(\"title\", \"Medium\");\n    medLabel.append(medPriority, medImg);\n\n    const lowLabel = new elementConstructor(\"label\", \"\", \"\");\n    const lowPriority = new elementConstructor(\"input\", \"lowPriority\", \"\");\n    lowPriority.setAttribute(\"type\", \"radio\");\n    lowPriority.setAttribute(\"name\", \"priority\");\n    lowPriority.setAttribute(\"value\", \"low\");\n    lowPriority.setAttribute(\"checked\", \"checked\");\n    const lowImg = new elementConstructor(\"img\", \"\", \"\");\n    lowImg.setAttribute(\"src\", \"./assets/low.svg\")\n    lowImg.setAttribute(\"title\", \"Low\");\n    lowLabel.append(lowPriority, lowImg);\n\n    priorityContainer.append(highLabel, medLabel, lowLabel);\n\n    const createTask = new elementConstructor(\"input\", \"submit\", \"\");\n    createTask.setAttribute(\"type\", \"button\");\n    createTask.setAttribute(\"value\", \"Submit\");\n\n    form.append(taskName, taskDesc, priorityContainer, createTask);\n\n    taskInputs.append(form);\n    modalContent.append(modalTitle, taskInputs);\n    modal.append(modalContent);\n\n    main.append(taskContainer, modal);\n\n    content.append(sideBar, main);\n    return content;\n}\nfunction initialRender() {\n    const navBar = createNav();\n    const content = createContent();\n    document.body.append(navBar, content);\n\n}\nfunction clickHandler() {\n    const modal = document.querySelector(\".modal\");\n    const formSubmit = document.querySelector(\".submit\");\n    const tasks = document.querySelector(\".taskList\");\n\n    document.addEventListener(\"click\", e => {\n      if(e.target.className === \"newTask\") {\n        modal.style.display = \"block\";\n      } else if(e.target.className === \"modal\") {\n        modal.style.display = \"none\";\n      } else if(e.target === formSubmit) {\n        (0,_createTodo__WEBPACK_IMPORTED_MODULE_0__.handleFormSubmission)();\n        modal.style.display = \"none\";\n        for(let data of _createTodo__WEBPACK_IMPORTED_MODULE_0__.taskList) {\n            const entry = new elementConstructor(\"div\", \"entry\", \"\");\n            const name = new elementConstructor(\"div\", \"name\", data.name);\n            const description = new elementConstructor(\"div\", \"description\", data.description);\n            entry.append(name, description);\n            tasks.append(entry);\n        }\n      } else if(e.target.className === \"panic\") {  //this is for debugging because im dumb \n        console.log(_createTodo__WEBPACK_IMPORTED_MODULE_0__.taskList[0]);\n      }\n    });\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;