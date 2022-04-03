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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basketSlice\": function() { return /* binding */ basketSlice; },\n/* harmony export */   \"addToBasket\": function() { return /* binding */ addToBasket; },\n/* harmony export */   \"removeFromBasket\": function() { return /* binding */ removeFromBasket; },\n/* harmony export */   \"selectItems\": function() { return /* binding */ selectItems; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar initialState = {\n    items: []\n};\nvar basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"basket\",\n    initialState: initialState,\n    reducers: {\n        addToBasket: function(state, action) {\n            state.items = _toConsumableArray(state.items).concat([\n                action.payload\n            ]);\n        },\n        removeFromBasket: function(state, action) {\n            var index = state.items.findIndex(function(b) {\n                return b.id === action.payload.id;\n            });\n            var newBasket = _toConsumableArray(state.items);\n            if (index >= 0) {\n                newBasket.splice(index, 1);\n            } else {\n                console.warn(\"Cannot remove product as it is not in basket\");\n            }\n            state.items = newBasket;\n        }\n    }\n});\nvar _actions = basketSlice.actions;\nvar addToBasket = _actions.addToBasket, removeFromBasket = _actions.removeFromBasket;\n// Selectors - This is how we pull information from the Global store slice\nvar selectItems = function(state) {\n    return state.basket.items;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (basketSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpY2VzL2Jhc2tldFNsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QztBQUU5QyxHQUFLLENBQUNDLFlBQVksR0FBRyxDQUFDO0lBQ3BCQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUVNLEdBQUssQ0FBQ0MsV0FBVyxHQUFHSCw2REFBVyxDQUFDLENBQUM7SUFDdENJLElBQUksRUFBRSxDQUFRO0lBQ2RILFlBQVksRUFBWkEsWUFBWTtJQUNaSSxRQUFRLEVBQUUsQ0FBQztRQUNUQyxXQUFXLEVBQUUsUUFBUUMsQ0FBUEMsS0FBSyxFQUFFRCxNQUFNLEVBQUssQ0FBQztZQUMvQkMsS0FBSyxDQUFDTixLQUFLLHNCQUFPTSxLQUFLLENBQUNOLEtBQUssU0FBZixDQUFDO2dCQUFlSyxNQUFNLENBQUNFLE9BQU87WUFBQSxDQUFDO1FBQy9DLENBQUM7UUFDREMsZ0JBQWdCLEVBQUUsUUFBUUgsQ0FBUEMsS0FBSyxFQUFFRCxNQUFNLEVBQUssQ0FBQztZQUMxQyxHQUFLLENBQUNJLEtBQUssR0FBR0gsS0FBSyxDQUFDTixLQUFLLENBQUNVLFNBQVMsQ0FBQyxRQUFRLENBQVBDLENBQUM7dUJBQUtBLENBQUMsQ0FBQ0MsRUFBRSxLQUFLUCxNQUFNLENBQUNFLE9BQU8sQ0FBQ0ssRUFBRTs7WUFFckUsR0FBRyxDQUFDQyxTQUFTLHNCQUFPUCxLQUFLLENBQUNOLEtBQUs7WUFFL0IsRUFBRSxFQUFFUyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ2pCSSxTQUFTLENBQUNDLE1BQU0sQ0FBQ0wsS0FBSyxFQUFHLENBQUM7WUFDMUIsQ0FBQyxNQUFJLENBQUM7Z0JBQ0pNLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLENBQThDO1lBQzdELENBQUM7WUFDRFYsS0FBSyxDQUFDTixLQUFLLEdBQUdhLFNBQVM7UUFDbkIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0lBRWdEWixRQUFtQixHQUFuQkEsV0FBVyxDQUFDZ0IsT0FBTztBQUE3RCxHQUFLLENBQUdiLFdBQVcsR0FBdUJILFFBQW1CLENBQXJERyxXQUFXLEVBQUVJLGdCQUFnQixHQUFLUCxRQUFtQixDQUF4Q08sZ0JBQWdCO0FBRTVDLEVBQTBFO0FBQ25FLEdBQUssQ0FBQ1UsV0FBVyxHQUFHLFFBQVEsQ0FBUFosS0FBSztXQUFLQSxLQUFLLENBQUNhLE1BQU0sQ0FBQ25CLEtBQUs7O0FBRXhELCtEQUFlQyxXQUFXLENBQUNtQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NsaWNlcy9iYXNrZXRTbGljZS5qcz84OTYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpdGVtczogW10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYmFza2V0U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJiYXNrZXRcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGFkZFRvQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5pdGVtcyA9IFsuLi5zdGF0ZS5pdGVtcyxhY3Rpb24ucGF5bG9hZF1cclxuICAgIH0sXHJcbiAgICByZW1vdmVGcm9tQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5jb25zdCBpbmRleCA9IHN0YXRlLml0ZW1zLmZpbmRJbmRleCgoYikgPT4gYi5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpXHJcblxyXG5sZXQgbmV3QmFza2V0ID0gWy4uLnN0YXRlLml0ZW1zXVxyXG5cclxuaWYgKGluZGV4ID49IDApIHtcclxubmV3QmFza2V0LnNwbGljZShpbmRleCAsIDEpXHJcbn1lbHNle1xyXG4gIGNvbnNvbGUud2FybihcIkNhbm5vdCByZW1vdmUgcHJvZHVjdCBhcyBpdCBpcyBub3QgaW4gYmFza2V0XCIpXHJcbn1cclxuc3RhdGUuaXRlbXMgPSBuZXdCYXNrZXRcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBhZGRUb0Jhc2tldCwgcmVtb3ZlRnJvbUJhc2tldCB9ID0gYmFza2V0U2xpY2UuYWN0aW9ucztcclxuXHJcbi8vIFNlbGVjdG9ycyAtIFRoaXMgaXMgaG93IHdlIHB1bGwgaW5mb3JtYXRpb24gZnJvbSB0aGUgR2xvYmFsIHN0b3JlIHNsaWNlXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RJdGVtcyA9IChzdGF0ZSkgPT4gc3RhdGUuYmFza2V0Lml0ZW1zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFza2V0U2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJpdGVtcyIsImJhc2tldFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkVG9CYXNrZXQiLCJhY3Rpb24iLCJzdGF0ZSIsInBheWxvYWQiLCJyZW1vdmVGcm9tQmFza2V0IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJiIiwiaWQiLCJuZXdCYXNrZXQiLCJzcGxpY2UiLCJjb25zb2xlIiwid2FybiIsImFjdGlvbnMiLCJzZWxlY3RJdGVtcyIsImJhc2tldCIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/slices/basketSlice.js\n");

/***/ })

});