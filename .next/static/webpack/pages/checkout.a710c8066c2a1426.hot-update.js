"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./src/components/ProductCheckout.js":
/*!*******************************************!*\
  !*** ./src/components/ProductCheckout.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ProductCheckout(param) {\n    var id = param.id, title = param.title, price = param.price, description = param.description, category = param.category, image = param.image, rating = param.rating, hasPrime = param.hasPrime;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: image,\n                height: 200,\n                width: 200,\n                objectFit: \"contain\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-3 mx-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: Array(rating).fill().map(function(_, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StarIcon, {\n                                className: \"h-5 text-yellow-500 \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                                lineNumber: 24,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = ProductCheckout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCheckout);\nvar _c;\n$RefreshReg$(_c, \"ProductCheckout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2hlY2tvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUI7QUFDSztTQUVyQkUsZUFBZSxDQUFDLEtBU3hCLEVBQUUsQ0FBQztRQVJGQyxFQUFFLEdBRHFCLEtBU3hCLENBUkNBLEVBQUUsRUFDRkMsS0FBSyxHQUZrQixLQVN4QixDQVBDQSxLQUFLLEVBQ0xDLEtBQUssR0FIa0IsS0FTeEIsQ0FOQ0EsS0FBSyxFQUNMQyxXQUFXLEdBSlksS0FTeEIsQ0FMQ0EsV0FBVyxFQUNYQyxRQUFRLEdBTGUsS0FTeEIsQ0FKQ0EsUUFBUSxFQUNSQyxLQUFLLEdBTmtCLEtBU3hCLENBSENBLEtBQUssRUFDTEMsTUFBTSxHQVBpQixLQVN4QixDQUZDQSxNQUFNLEVBQ05DLFFBQVEsR0FSZSxLQVN4QixDQURDQSxRQUFROztJQUVSLE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWtCOzt3RkFDOUJYLG1EQUFLO2dCQUFDWSxHQUFHLEVBQUVMLEtBQUs7Z0JBQUVNLE1BQU0sRUFBRSxHQUFHO2dCQUFFQyxLQUFLLEVBQUUsR0FBRztnQkFBRUMsU0FBUyxFQUFDLENBQVM7Ozs7Ozt3RkFFOURMLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFpQjs7Z0dBQzdCSyxDQUFDO2tDQUFFYixLQUFLOzs7Ozs7Z0dBQ1JPLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFFO2tDQUNkTSxLQUFLLENBQUNULE1BQU0sRUFDVlUsSUFBSSxHQUNKQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxDQUFDLEVBQUVDLENBQUM7K0dBQ1BDLFFBQVE7Z0NBQUNYLFNBQVMsRUFBQyxDQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhELENBQUM7S0ExQlFWLGVBQWU7QUE0QnhCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdENoZWNrb3V0LmpzPzAxODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RDaGVja291dCh7XHJcbiAgaWQsXHJcbiAgdGl0bGUsXHJcbiAgcHJpY2UsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgY2F0ZWdvcnksXHJcbiAgaW1hZ2UsXHJcbiAgcmF0aW5nLFxyXG4gIGhhc1ByaW1lLFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNVwiPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIG14LTVcIj5cclxuICAgICAgICA8cD57dGl0bGV9PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICB7QXJyYXkocmF0aW5nKVxyXG4gICAgICAgICAgICAuZmlsbCgpXHJcbiAgICAgICAgICAgIC5tYXAoKF8sIGkpID0+IChcclxuICAgICAgICAgICAgICA8U3Rhckljb24gY2xhc3NOYW1lPVwiaC01IHRleHQteWVsbG93LTUwMCBcIiAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2hlY2tvdXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiUHJvZHVjdENoZWNrb3V0IiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImltYWdlIiwicmF0aW5nIiwiaGFzUHJpbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsIm9iamVjdEZpdCIsInAiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsIlN0YXJJY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProductCheckout.js\n");

/***/ })

});