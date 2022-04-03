"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/slices/basketSlice.js":
/*!***********************************!*\
  !*** ./src/slices/basketSlice.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basketSlice\": function() { return /* binding */ basketSlice; },\n/* harmony export */   \"addToBasket\": function() { return /* binding */ addToBasket; },\n/* harmony export */   \"removeFromBasket\": function() { return /* binding */ removeFromBasket; },\n/* harmony export */   \"selectItems\": function() { return /* binding */ selectItems; },\n/* harmony export */   \"selectTotal\": function() { return /* binding */ selectTotal; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar initialState = {\n    items: []\n};\nvar basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"basket\",\n    initialState: initialState,\n    reducers: {\n        addToBasket: function(state, action) {\n            state.items = _toConsumableArray(state.items).concat([\n                action.payload\n            ]);\n        },\n        removeFromBasket: function(state, action) {\n            var index = state.items.findIndex(function(b) {\n                return b.id === action.payload.id;\n            });\n            var newBasket = _toConsumableArray(state.items);\n            if (index >= 0) {\n                newBasket.splice(index, 1);\n            } else {\n                console.warn(\"Cannot remove product as it is not in basket\");\n            }\n            state.items = newBasket;\n        }\n    }\n});\nvar _actions = basketSlice.actions;\nvar addToBasket = _actions.addToBasket, removeFromBasket = _actions.removeFromBasket;\n// Selectors - This is how we pull information from the Global store slice\nvar selectItems = function(state) {\n    return state.basket.items;\n};\nvar selectTotal = function(state) {\n    return state.basket.items.reduce(function(total, item) {\n        return total;\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (basketSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpY2VzL2Jhc2tldFNsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFFOUMsR0FBSyxDQUFDQyxZQUFZLEdBQUcsQ0FBQztJQUNwQkMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNYLENBQUM7QUFFTSxHQUFLLENBQUNDLFdBQVcsR0FBR0gsNkRBQVcsQ0FBQyxDQUFDO0lBQ3RDSSxJQUFJLEVBQUUsQ0FBUTtJQUNkSCxZQUFZLEVBQVpBLFlBQVk7SUFDWkksUUFBUSxFQUFFLENBQUM7UUFDVEMsV0FBVyxFQUFFLFFBQVFDLENBQVBDLEtBQUssRUFBRUQsTUFBTSxFQUFLLENBQUM7WUFDL0JDLEtBQUssQ0FBQ04sS0FBSyxzQkFBT00sS0FBSyxDQUFDTixLQUFLLFNBQWYsQ0FBQztnQkFBZ0JLLE1BQU0sQ0FBQ0UsT0FBTztZQUFBLENBQUMsRUFBQztRQUNqRCxDQUFDO1FBQ0RDLGdCQUFnQixFQUFFLFFBQVFILENBQVBDLEtBQUssRUFBRUQsTUFBTSxFQUFLLENBQUM7WUFDcEMsR0FBSyxDQUFDSSxLQUFLLEdBQUdILEtBQUssQ0FBQ04sS0FBSyxDQUFDVSxTQUFTLENBQUMsUUFBUSxDQUFQQyxDQUFDO3VCQUFLQSxDQUFDLENBQUNDLEVBQUUsS0FBS1AsTUFBTSxDQUFDRSxPQUFPLENBQUNLLEVBQUU7O1lBRXJFLEdBQUcsQ0FBQ0MsU0FBUyxzQkFBT1AsS0FBSyxDQUFDTixLQUFLO1lBRS9CLEVBQUUsRUFBRVMsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNmSSxTQUFTLENBQUNDLE1BQU0sQ0FBQ0wsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdCLENBQUMsTUFBTSxDQUFDO2dCQUNOTSxPQUFPLENBQUNDLElBQUksQ0FBQyxDQUE4Qyw4Q0FBQyxDQUFDO1lBQy9ELENBQUM7WUFDRFYsS0FBSyxDQUFDTixLQUFLLEdBQUdhLFNBQVMsQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7SUFFZ0RaLFFBQW1CLEdBQW5CQSxXQUFXLENBQUNnQixPQUFPO0FBQTdELEdBQUssQ0FBR2IsV0FBVyxHQUF1QkgsUUFBbUIsQ0FBckRHLFdBQVcsRUFBRUksZ0JBQWdCLEdBQUtQLFFBQW1CLENBQXhDTyxnQkFBZ0I7QUFFNUMsRUFBMEU7QUFDbkUsR0FBSyxDQUFDVSxXQUFXLEdBQUcsUUFBUSxDQUFQWixLQUFLO1dBQUtBLEtBQUssQ0FBQ2EsTUFBTSxDQUFDbkIsS0FBSzs7QUFDakQsR0FBSyxDQUFDb0IsV0FBVyxHQUFHLFFBQVEsQ0FBUGQsS0FBSztXQUFLQSxLQUFLLENBQUNhLE1BQU0sQ0FBQ25CLEtBQUssQ0FBQ3FCLE1BQU0sQ0FBQyxRQUFRQyxDQUFQQyxLQUFLLEVBQUVELElBQUk7ZUFBSUMsS0FBSzs7O0FBRXJGLCtEQUFldEIsV0FBVyxDQUFDdUIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zbGljZXMvYmFza2V0U2xpY2UuanM/ODk2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXRlbXM6IFtdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGJhc2tldFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwiYmFza2V0XCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBhZGRUb0Jhc2tldDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuaXRlbXMgPSBbLi4uc3RhdGUuaXRlbXMsIGFjdGlvbi5wYXlsb2FkXTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVGcm9tQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLml0ZW1zLmZpbmRJbmRleCgoYikgPT4gYi5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpO1xyXG5cclxuICAgICAgbGV0IG5ld0Jhc2tldCA9IFsuLi5zdGF0ZS5pdGVtc107XHJcblxyXG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgIG5ld0Jhc2tldC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCByZW1vdmUgcHJvZHVjdCBhcyBpdCBpcyBub3QgaW4gYmFza2V0XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHN0YXRlLml0ZW1zID0gbmV3QmFza2V0O1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGFkZFRvQmFza2V0LCByZW1vdmVGcm9tQmFza2V0IH0gPSBiYXNrZXRTbGljZS5hY3Rpb25zO1xyXG5cclxuLy8gU2VsZWN0b3JzIC0gVGhpcyBpcyBob3cgd2UgcHVsbCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBHbG9iYWwgc3RvcmUgc2xpY2VcclxuZXhwb3J0IGNvbnN0IHNlbGVjdEl0ZW1zID0gKHN0YXRlKSA9PiBzdGF0ZS5iYXNrZXQuaXRlbXM7XHJcbmV4cG9ydCBjb25zdCBzZWxlY3RUb3RhbCA9IChzdGF0ZSkgPT4gc3RhdGUuYmFza2V0Lml0ZW1zLnJlZHVjZSgodG90YWwsIGl0ZW0pPT4gdG90YWwgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhc2tldFNsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsIml0ZW1zIiwiYmFza2V0U2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRUb0Jhc2tldCIsImFjdGlvbiIsInN0YXRlIiwicGF5bG9hZCIsInJlbW92ZUZyb21CYXNrZXQiLCJpbmRleCIsImZpbmRJbmRleCIsImIiLCJpZCIsIm5ld0Jhc2tldCIsInNwbGljZSIsImNvbnNvbGUiLCJ3YXJuIiwiYWN0aW9ucyIsInNlbGVjdEl0ZW1zIiwiYmFza2V0Iiwic2VsZWN0VG90YWwiLCJyZWR1Y2UiLCJpdGVtIiwidG90YWwiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/slices/basketSlice.js\n");

/***/ })

});