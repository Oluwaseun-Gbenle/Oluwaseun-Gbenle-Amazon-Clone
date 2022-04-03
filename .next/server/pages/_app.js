/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        basket: _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3N0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUQ7QUFDQTtBQUUxQyxLQUFLLENBQUNFLEtBQUssR0FBR0YsZ0VBQWMsQ0FBQyxDQUFDO0lBQ25DRyxPQUFPLEVBQUUsQ0FBQztRQUNSQyxNQUFNLEVBQUVILDJEQUFhO0lBQ3ZCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0Ly4vc3JjL2FwcC9zdG9yZS5qcz81OGM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IGJhc2tldFJlZHVjZXIgZnJvbSBcIi4uL3NsaWNlcy9iYXNrZXRTbGljZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHtcclxuICAgIGJhc2tldDogYmFza2V0UmVkdWNlcixcclxuICB9LFxyXG59KTtcclxuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiYmFza2V0UmVkdWNlciIsInN0b3JlIiwicmVkdWNlciIsImJhc2tldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/store.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/store */ \"./src/app/store.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_4__.SessionProvider, {\n        session: pageProps.session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n            store: _app_store__WEBPACK_IMPORTED_MODULE_2__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 9,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNGO0FBQ047QUFDbUI7QUFFakQsS0FBSyxDQUFDRyxHQUFHLElBQUksQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUN6QyxNQUFNLDZFQUNISCw0REFBZTtRQUFDSSxPQUFPLEVBQUVELFNBQVMsQ0FBQ0MsT0FBTzs4RkFDMUNOLGlEQUFRO1lBQUNDLEtBQUssRUFBRUEsNkNBQUs7a0dBQ3JCRyxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSTVCLENBQUM7QUFFRCxpRUFBZUYsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL2FwcC9zdG9yZSc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCJcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PlxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgPC9Qcm92aWRlcj5cbiAgPC9TZXNzaW9uUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsInN0b3JlIiwiU2Vzc2lvblByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/slices/basketSlice.js":
/*!***********************************!*\
  !*** ./src/slices/basketSlice.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basketSlice\": () => (/* binding */ basketSlice),\n/* harmony export */   \"addToBasket\": () => (/* binding */ addToBasket),\n/* harmony export */   \"removeFromBasket\": () => (/* binding */ removeFromBasket),\n/* harmony export */   \"selectItems\": () => (/* binding */ selectItems),\n/* harmony export */   \"selectTotal\": () => (/* binding */ selectTotal),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    items: []\n};\nconst basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"basket\",\n    initialState,\n    reducers: {\n        addToBasket: (state, action)=>{\n            state.items = [\n                ...state.items,\n                action.payload\n            ];\n        },\n        removeFromBasket: (state, action)=>{\n            const index = state.items.findIndex((b)=>b.id === action.payload.id\n            );\n            let newBasket = [\n                ...state.items\n            ];\n            if (index >= 0) {\n                newBasket.splice(index, 1);\n            } else {\n                console.warn(\"Cannot remove product as it is not in basket\");\n            }\n            state.items = newBasket;\n        }\n    }\n});\nconst { addToBasket , removeFromBasket  } = basketSlice.actions;\n// Selectors - This is how we pull information from the Global store slice\nconst selectItems = (state)=>state.basket.items\n;\nconst selectTotal = (state)=>state.basket.items.reduce((total, item)=>total + item.price * 450\n    , 0)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basketSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpY2VzL2Jhc2tldFNsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThDO0FBRTlDLEtBQUssQ0FBQ0MsWUFBWSxHQUFHLENBQUM7SUFDcEJDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDWCxDQUFDO0FBRU0sS0FBSyxDQUFDQyxXQUFXLEdBQUdILDZEQUFXLENBQUMsQ0FBQztJQUN0Q0ksSUFBSSxFQUFFLENBQVE7SUFDZEgsWUFBWTtJQUNaSSxRQUFRLEVBQUUsQ0FBQztRQUNUQyxXQUFXLEdBQUdDLEtBQUssRUFBRUMsTUFBTSxHQUFLLENBQUM7WUFDL0JELEtBQUssQ0FBQ0wsS0FBSyxHQUFHLENBQUM7bUJBQUdLLEtBQUssQ0FBQ0wsS0FBSztnQkFBRU0sTUFBTSxDQUFDQyxPQUFPO1lBQUEsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDREMsZ0JBQWdCLEdBQUdILEtBQUssRUFBRUMsTUFBTSxHQUFLLENBQUM7WUFDcEMsS0FBSyxDQUFDRyxLQUFLLEdBQUdKLEtBQUssQ0FBQ0wsS0FBSyxDQUFDVSxTQUFTLEVBQUVDLENBQUMsR0FBS0EsQ0FBQyxDQUFDQyxFQUFFLEtBQUtOLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDSyxFQUFFOztZQUVyRSxHQUFHLENBQUNDLFNBQVMsR0FBRyxDQUFDO21CQUFHUixLQUFLLENBQUNMLEtBQUs7WUFBQSxDQUFDO1lBRWhDLEVBQUUsRUFBRVMsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNmSSxTQUFTLENBQUNDLE1BQU0sQ0FBQ0wsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdCLENBQUMsTUFBTSxDQUFDO2dCQUNOTSxPQUFPLENBQUNDLElBQUksQ0FBQyxDQUE4Qyw4Q0FBQyxDQUFDO1lBQy9ELENBQUM7WUFDRFgsS0FBSyxDQUFDTCxLQUFLLEdBQUdhLFNBQVMsQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFTSxLQUFLLENBQUMsQ0FBQyxDQUFDVCxXQUFXLEdBQUVJLGdCQUFnQixFQUFDLENBQUMsR0FBR1AsV0FBVyxDQUFDZ0IsT0FBTztBQUVwRSxFQUEwRTtBQUNuRSxLQUFLLENBQUNDLFdBQVcsSUFBSWIsS0FBSyxHQUFLQSxLQUFLLENBQUNjLE1BQU0sQ0FBQ25CLEtBQUs7O0FBQ2pELEtBQUssQ0FBQ29CLFdBQVcsSUFBSWYsS0FBSyxHQUFLQSxLQUFLLENBQUNjLE1BQU0sQ0FBQ25CLEtBQUssQ0FBQ3FCLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEdBQUlELEtBQUssR0FBSUMsSUFBSSxDQUFDQyxLQUFLLEdBQUcsR0FBRztNQUFJLENBQUM7O0FBRTlHLGlFQUFldkIsV0FBVyxDQUFDd0IsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0Ly4vc3JjL3NsaWNlcy9iYXNrZXRTbGljZS5qcz84OTYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpdGVtczogW10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYmFza2V0U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJiYXNrZXRcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGFkZFRvQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5pdGVtcyA9IFsuLi5zdGF0ZS5pdGVtcywgYWN0aW9uLnBheWxvYWRdO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUZyb21CYXNrZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuaXRlbXMuZmluZEluZGV4KChiKSA9PiBiLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCk7XHJcblxyXG4gICAgICBsZXQgbmV3QmFza2V0ID0gWy4uLnN0YXRlLml0ZW1zXTtcclxuXHJcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgbmV3QmFza2V0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IHJlbW92ZSBwcm9kdWN0IGFzIGl0IGlzIG5vdCBpbiBiYXNrZXRcIik7XHJcbiAgICAgIH1cclxuICAgICAgc3RhdGUuaXRlbXMgPSBuZXdCYXNrZXQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgYWRkVG9CYXNrZXQsIHJlbW92ZUZyb21CYXNrZXQgfSA9IGJhc2tldFNsaWNlLmFjdGlvbnM7XHJcblxyXG4vLyBTZWxlY3RvcnMgLSBUaGlzIGlzIGhvdyB3ZSBwdWxsIGluZm9ybWF0aW9uIGZyb20gdGhlIEdsb2JhbCBzdG9yZSBzbGljZVxyXG5leHBvcnQgY29uc3Qgc2VsZWN0SXRlbXMgPSAoc3RhdGUpID0+IHN0YXRlLmJhc2tldC5pdGVtcztcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFRvdGFsID0gKHN0YXRlKSA9PiBzdGF0ZS5iYXNrZXQuaXRlbXMucmVkdWNlKCh0b3RhbCwgaXRlbSk9PiB0b3RhbCArIChpdGVtLnByaWNlICogNDUwKSAsIDApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFza2V0U2xpY2UucmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiaXRlbXMiLCJiYXNrZXRTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZFRvQmFza2V0Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVtb3ZlRnJvbUJhc2tldCIsImluZGV4IiwiZmluZEluZGV4IiwiYiIsImlkIiwibmV3QmFza2V0Iiwic3BsaWNlIiwiY29uc29sZSIsIndhcm4iLCJhY3Rpb25zIiwic2VsZWN0SXRlbXMiLCJiYXNrZXQiLCJzZWxlY3RUb3RhbCIsInJlZHVjZSIsInRvdGFsIiwiaXRlbSIsInByaWNlIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/slices/basketSlice.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();