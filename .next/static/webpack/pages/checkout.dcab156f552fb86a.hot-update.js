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

/***/ "./src/pages/checkout.js":
/*!*******************************!*\
  !*** ./src/pages/checkout.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_ProductCheckout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ProductCheckout */ \"./src/components/ProductCheckout.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Checkout() {\n    var _this = this;\n    _s();\n    var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_4__.selectItems);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\checkout.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"lg:flex max-w-screen-2xl mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-grow m-5 shadow-sm\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"https://links.papareact.com/ikj\",\n                                width: 1020,\n                                height: 250,\n                                objectFit: \"contain\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\checkout.js\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col p-5 space-y-10 bg-white\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-3xl border-b pb-4\",\n                                        children: items.length === 0 ? \"Your Amazon Basket is empty\" : \"Shopping basket\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\checkout.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 13\n                                    }, this),\n                                    items.map(function(item, i) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCheckout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            id: item.id,\n                                            title: item.title,\n                                            price: item.price,\n                                            description: item.description,\n                                            category: item.category,\n                                            image: item.image,\n                                            rating: item.rating,\n                                            hasPrime: item.hasPrime\n                                        }, i, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\checkout.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 13\n                                        }, _this);\n                                    })\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\checkout.js\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\checkout.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: items.length > 0 && 0\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\checkout.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\checkout.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\checkout.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Checkout, \"tY2Gvv5VcC5OmHFNMSHq17tjIN8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = Checkout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checkout);\nvar _c;\n$RefreshReg$(_c, \"Checkout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hlY2tvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2dCO0FBQ1g7QUFDcUI7QUFDVjtBQUNrQjs7U0FFbERNLFFBQVEsR0FBRyxDQUFDOzs7SUFDbkIsR0FBSyxDQUFDQyxLQUFLLEdBQUdILHdEQUFXLENBQUNELDREQUFXO0lBQ3JDLE1BQU0sNkVBQ0hLLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWE7O3dGQUN6QlIsMERBQU07Ozs7O3dGQUVOUyxDQUFJO2dCQUFDRCxTQUFTLEVBQUMsQ0FBa0M7O2dHQUUvQ0QsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQXlCOzt3R0FDckNQLG1EQUFLO2dDQUNKUyxHQUFHLEVBQUMsQ0FBaUM7Z0NBQ3JDQyxLQUFLLEVBQUUsSUFBSTtnQ0FDWEMsTUFBTSxFQUFFLEdBQUc7Z0NBQ1hDLFNBQVMsRUFBQyxDQUFTOzs7Ozs7d0dBRXBCTixDQUFHO2dDQUFDQyxTQUFTLEVBQUMsQ0FBdUM7O2dIQUNuRE0sQ0FBRTt3Q0FBQ04sU0FBUyxFQUFDLENBQXdCO2tEQUNuQ0YsS0FBSyxDQUFDUyxNQUFNLEtBQUssQ0FBQyxHQUNmLENBQTZCLCtCQUM3QixDQUFpQjs7Ozs7O29DQUUxQlQsS0FBSyxDQUFDVSxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUVDLENBQUM7MkhBQ2RkLG1FQUFlOzRDQUVoQmUsRUFBRSxFQUFFRixJQUFJLENBQUNFLEVBQUU7NENBQ1hDLEtBQUssRUFBRUgsSUFBSSxDQUFDRyxLQUFLOzRDQUNqQkMsS0FBSyxFQUFFSixJQUFJLENBQUNJLEtBQUs7NENBQ2pCQyxXQUFXLEVBQUVMLElBQUksQ0FBQ0ssV0FBVzs0Q0FDN0JDLFFBQVEsRUFBRU4sSUFBSSxDQUFDTSxRQUFROzRDQUN2QkMsS0FBSyxFQUFFUCxJQUFJLENBQUNPLEtBQUs7NENBQ2pCQyxNQUFNLEVBQUVSLElBQUksQ0FBQ1EsTUFBTTs0Q0FDbkJDLFFBQVEsRUFBRVQsSUFBSSxDQUFDUyxRQUFROzJDQVJsQlIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dHQWdCVFgsQ0FBRztrQ0FDQ0QsS0FBSyxDQUFDUyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQyxDQUFDO0dBN0NRVixRQUFROztRQUNERixvREFBVzs7O0tBRGxCRSxRQUFRO0FBK0NqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jaGVja291dC5qcz9kNDM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHNlbGVjdEl0ZW1zIH0gZnJvbSBcIi4uL3NsaWNlcy9iYXNrZXRTbGljZVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUHJvZHVjdENoZWNrb3V0IGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RDaGVja291dFwiO1xyXG5cclxuZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XHJcbiAgY29uc3QgaXRlbXMgPSB1c2VTZWxlY3RvcihzZWxlY3RJdGVtcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDBcIj5cclxuICAgICAgPEhlYWRlciAvPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibGc6ZmxleCBtYXgtdy1zY3JlZW4tMnhsIG14LWF1dG9cIj5cclxuICAgICAgICB7LypsZWZ0ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IG0tNSBzaGFkb3ctc21cIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vaWtqXCJcclxuICAgICAgICAgICAgd2lkdGg9ezEwMjB9XHJcbiAgICAgICAgICAgIGhlaWdodD17MjUwfVxyXG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC01IHNwYWNlLXktMTAgYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGJvcmRlci1iIHBiLTRcIj5cclxuICAgICAgICAgICAgICB7aXRlbXMubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICA/IFwiWW91ciBBbWF6b24gQmFza2V0IGlzIGVtcHR5XCJcclxuICAgICAgICAgICAgICAgIDogXCJTaG9wcGluZyBiYXNrZXRcIn1cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxQcm9kdWN0Q2hlY2tvdXRcclxuICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgIHByaWNlPXtpdGVtLnByaWNlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgY2F0ZWdvcnk9e2l0ZW0uY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICByYXRpbmc9e2l0ZW0ucmF0aW5nfVxyXG4gICAgICAgICAgICBoYXNQcmltZT17aXRlbS5oYXNQcmltZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qcmlnaHQgKi99XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2l0ZW1zLmxlbmd0aCA+IDAgJiYgMH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIkltYWdlIiwic2VsZWN0SXRlbXMiLCJ1c2VTZWxlY3RvciIsIlByb2R1Y3RDaGVja291dCIsIkNoZWNrb3V0IiwiaXRlbXMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJoMSIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpIiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImltYWdlIiwicmF0aW5nIiwiaGFzUHJpbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/checkout.js\n");

/***/ })

});