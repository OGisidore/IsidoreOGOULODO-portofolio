/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/utilities.js":
/*!*****************************!*\
  !*** ./src/js/utilities.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateID: () => (/* binding */ generateID)\n/* harmony export */ });\nconst generateID = ()=>{\n    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);\n    return timestamp + 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, function(){\n      return (Math.random()*16 | 0 ).toString(16)\n    }).toLowerCase();\n  }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdXRpbGl0aWVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL215LXBvcnRvZmxvbGlvLy4vc3JjL2pzL3V0aWxpdGllcy5qcz81ZDJlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZW5lcmF0ZUlEID0gKCk9PntcbiAgICB2YXIgdGltZXN0YW1wID0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCB8IDApLnRvU3RyaW5nKDE2KTtcbiAgICByZXR1cm4gdGltZXN0YW1wICsgJ3h4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3hdL2csIGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gKE1hdGgucmFuZG9tKCkqMTYgfCAwICkudG9TdHJpbmcoMTYpXG4gICAgfSkudG9Mb3dlckNhc2UoKTtcbiAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/utilities.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/utilities.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;