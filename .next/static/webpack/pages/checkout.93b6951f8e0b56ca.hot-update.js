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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Checkout() {\n    var _this = this;\n    _s();\n    var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_4__.selectItems);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\checkout.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"lg:flex max-w-screen-2xl mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-grow m-5 shadow-sm\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"https://links.papareact.com/ikj\",\n                                width: 1020,\n                                height: 250,\n                                objectFit: \"contain\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\checkout.js\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col p-5 space-y-10 bg-white\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-3xl border-b pb-4\",\n                                        children: items.length === 0 ? \"Your Amazon Basket is empty\" : \"Shopping basket\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\checkout.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 13\n                                    }, this),\n                                    items.map(function(item, i) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductCheckout, {\n                                            id: item.id,\n                                            title: title,\n                                            price: price,\n                                            description: description,\n                                            category: category,\n                                            image: image\n                                        }, i, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\checkout.js\",\n                                            lineNumber: 29,\n                                            columnNumber: 13\n                                        }, _this);\n                                    })\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\checkout.js\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\checkout.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\checkout.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\checkout.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\pages\\\\checkout.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(Checkout, \"tY2Gvv5VcC5OmHFNMSHq17tjIN8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = Checkout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checkout);\nvar _c;\n$RefreshReg$(_c, \"Checkout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hlY2tvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDZ0I7QUFDWDtBQUNxQjtBQUNWOztTQUVoQ0ssUUFBUSxHQUFHLENBQUM7OztJQUNuQixHQUFLLENBQUNDLEtBQUssR0FBR0Ysd0RBQVcsQ0FBQ0QsNERBQVc7SUFDckMsTUFBTSw2RUFDSEksQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBYTs7d0ZBQ3pCUCwwREFBTTs7Ozs7d0ZBRU5RLENBQUk7Z0JBQUNELFNBQVMsRUFBQyxDQUFrQzs7Z0dBRS9DRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBeUI7O3dHQUNyQ04sbURBQUs7Z0NBQ0pRLEdBQUcsRUFBQyxDQUFpQztnQ0FDckNDLEtBQUssRUFBRSxJQUFJO2dDQUNYQyxNQUFNLEVBQUUsR0FBRztnQ0FDWEMsU0FBUyxFQUFDLENBQVM7Ozs7Ozt3R0FFcEJOLENBQUc7Z0NBQUNDLFNBQVMsRUFBQyxDQUF1Qzs7Z0hBQ25ETSxDQUFFO3dDQUFDTixTQUFTLEVBQUMsQ0FBd0I7a0RBQ25DRixLQUFLLENBQUNTLE1BQU0sS0FBSyxDQUFDLEdBQ2YsQ0FBNkIsK0JBQzdCLENBQWlCOzs7Ozs7b0NBRTFCVCxLQUFLLENBQUNVLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsQ0FBQzsySEFDZEMsZUFBZTs0Q0FFaEJDLEVBQUUsRUFBRUgsSUFBSSxDQUFDRyxFQUFFOzRDQUNYQyxLQUFLLEVBQUVBLEtBQUs7NENBQ1pDLEtBQUssRUFBRUEsS0FBSzs0Q0FDWkMsV0FBVyxFQUFFQSxXQUFXOzRDQUN4QkMsUUFBUSxFQUFFQSxRQUFROzRDQUNsQkMsS0FBSyxFQUFFQSxLQUFLOzJDQU5QUCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBY1RYLENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVosQ0FBQztHQXpDUUYsUUFBUTs7UUFDREQsb0RBQVc7OztLQURsQkMsUUFBUTtBQTJDakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2hlY2tvdXQuanM/ZDQzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBzZWxlY3RJdGVtcyB9IGZyb20gXCIuLi9zbGljZXMvYmFza2V0U2xpY2VcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmZ1bmN0aW9uIENoZWNrb3V0KCkge1xyXG4gIGNvbnN0IGl0ZW1zID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXRlbXMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwXCI+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImxnOmZsZXggbWF4LXctc2NyZWVuLTJ4bCBteC1hdXRvXCI+XHJcbiAgICAgICAgey8qbGVmdCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBtLTUgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2lralwiXHJcbiAgICAgICAgICAgIHdpZHRoPXsxMDIwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezI1MH1cclxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtNSBzcGFjZS15LTEwIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBib3JkZXItYiBwYi00XCI+XHJcbiAgICAgICAgICAgICAge2l0ZW1zLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyBcIllvdXIgQW1hem9uIEJhc2tldCBpcyBlbXB0eVwiXHJcbiAgICAgICAgICAgICAgICA6IFwiU2hvcHBpbmcgYmFza2V0XCJ9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8UHJvZHVjdENoZWNrb3V0XHJcbiAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LypyaWdodCAqL31cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja291dDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGVyIiwiSW1hZ2UiLCJzZWxlY3RJdGVtcyIsInVzZVNlbGVjdG9yIiwiQ2hlY2tvdXQiLCJpdGVtcyIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImgxIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImkiLCJQcm9kdWN0Q2hlY2tvdXQiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/checkout.js\n");

/***/ })

});