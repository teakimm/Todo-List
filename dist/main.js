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

/***/ "./src/handleDom.js":
/*!**************************!*\
  !*** ./src/handleDom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTask() {\n  const taskBtn = document.querySelector(\".newTask\");\n  const modal = document.querySelector(\".modal\");\n  taskBtn.onclick = function() {\n    modal.style.display = \"block\";\n}\nwindow.onclick = function(event) {\n    if (event.target == modal) {\n      modal.style.display = \"none\";\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);\n\n//# sourceURL=webpack://todo-list/./src/handleDom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handleDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleDom */ \"./src/handleDom.js\");\n/* harmony import */ var _initialRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialRender */ \"./src/initialRender.js\");\n\n\n\n\n\n\n(0,_initialRender__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_handleDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/initialRender.js":
/*!******************************!*\
  !*** ./src/initialRender.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction elementConstructor(type, className = \"\", textContent = \"\") {\n    const element = document.createElement(type);\n    element.className = className;\n    element.textContent = textContent;\n    return element;\n}\nfunction createNav() {\n    const nav = new elementConstructor(\"nav\", \"navbar\", \"\");\n    const title = new elementConstructor(\"p\", \"\", \"toDoList\")\n    nav.appendChild(title);\n    return nav;\n}\nfunction createContent() {\n    const content = new elementConstructor(\"div\", \"content\", \"\");\n    const sideBar = new elementConstructor(\"div\", \"sideBar\", \"\");\n    const main = new elementConstructor(\"div\", \"main\", \"\");\n\n    const taskContainer = new elementConstructor(\"div\", \"taskContainer\", \"\");\n    const currentTask = new elementConstructor(\"p\", \"currentTask\", \"All\");\n    const newTask = new elementConstructor(\"button\", \"newTask\", \"+ New Task\");\n    taskContainer.append(currentTask, newTask);\n\n    const modal = new elementConstructor(\"div\", \"modal\");\n    const modalContent = new elementConstructor(\"div\", \"modalContent\");\n    const modalTitle = new elementConstructor(\"p\", \"modalTitle\", \"New Task\");\n\n\n    const taskInputs = new elementConstructor(\"div\", \"taskInputs\");\n    const form = new elementConstructor(\"form\", \"form\", \"\");\n\n    const taskName = new elementConstructor(\"input\", \"taskName\", \"\");\n    taskName.setAttribute(\"type\", \"test\");\n    taskName.setAttribute(\"placeholder\", \"Task Name\");\n    const taskDesc = new elementConstructor(\"textarea\", \"taskDesc\", \"\");\n    taskDesc.setAttribute(\"name\", \"taskDesc\");\n    taskDesc.setAttribute(\"cols\", \"30\");\n    taskDesc.setAttribute(\"rows\", \"10\");\n    taskDesc.setAttribute(\"placeholder\", \"Description\");\n    const createTask = new elementConstructor(\"input\", \"submit\", \"\");\n    createTask.setAttribute(\"type\", \"button\");\n    createTask.setAttribute(\"value\", \"Submit\");\n\n    form.append(taskName, taskDesc, createTask);\n\n    taskInputs.append(form);\n    modalContent.append(modalTitle, taskInputs);\n    modal.append(modalContent);\n\n    main.append(taskContainer, modal);\n\n    content.append(sideBar, main);\n    return content;\n}\nfunction initialRender() {\n    const navBar = createNav();\n    const content = createContent();\n    document.body.append(navBar, content);\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialRender);\n\n//# sourceURL=webpack://todo-list/./src/initialRender.js?");

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