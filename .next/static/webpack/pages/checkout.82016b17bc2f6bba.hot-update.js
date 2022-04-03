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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ \"../node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-currency-formatter */ \"./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction ProductCheckout(param) {\n    var id = param.id, title = param.title, price = param.price, description = param.description, category = param.category, image = param.image, rating = param.rating, hasPrime = param.hasPrime;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: image,\n                height: 200,\n                width: 200,\n                objectFit: \"contain\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-3 mx-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: Array(rating).fill().map(function(_, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.StarIcon, {\n                                className: \"h-5 text-yellow-500 \"\n                            }, i, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs my-2 line-clamp-3\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        quantity: price * 450,\n                        currency: \"NGN\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: hasPrime && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center space-x-2 -mt-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    loading: \"lazy\",\n                                    class: true,\n                                    src: \"https://papareact.com/fdw\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xs text-gray-500\",\n                                    children: \"FREE Next-day Delivery\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                            lineNumber: 33,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = ProductCheckout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCheckout);\nvar _c;\n$RefreshReg$(_c, \"ProductCheckout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2hlY2tvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDSztBQUNtQjtBQUNGO1NBRXRDSSxlQUFlLENBQUMsS0FTeEIsRUFBRSxDQUFDO1FBUkZDLEVBQUUsR0FEcUIsS0FTeEIsQ0FSQ0EsRUFBRSxFQUNGQyxLQUFLLEdBRmtCLEtBU3hCLENBUENBLEtBQUssRUFDTEMsS0FBSyxHQUhrQixLQVN4QixDQU5DQSxLQUFLLEVBQ0xDLFdBQVcsR0FKWSxLQVN4QixDQUxDQSxXQUFXLEVBQ1hDLFFBQVEsR0FMZSxLQVN4QixDQUpDQSxRQUFRLEVBQ1JDLEtBQUssR0FOa0IsS0FTeEIsQ0FIQ0EsS0FBSyxFQUNMQyxNQUFNLEdBUGlCLEtBU3hCLENBRkNBLE1BQU0sRUFDTkMsUUFBUSxHQVJlLEtBU3hCLENBRENBLFFBQVE7O0lBRVIsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBa0I7O3dGQUM5QmIsbURBQUs7Z0JBQUNjLEdBQUcsRUFBRUwsS0FBSztnQkFBRU0sTUFBTSxFQUFFLEdBQUc7Z0JBQUVDLEtBQUssRUFBRSxHQUFHO2dCQUFFQyxTQUFTLEVBQUMsQ0FBUzs7Ozs7O3dGQUU5REwsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWlCOztnR0FDN0JLLENBQUM7a0NBQUViLEtBQUs7Ozs7OztnR0FDUk8sQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQU07a0NBQ2xCTSxLQUFLLENBQUNULE1BQU0sRUFDVlUsSUFBSSxHQUNKQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxDQUFDLEVBQUVDLENBQUM7K0dBQ1B0Qiw0REFBUTtnQ0FBU1ksU0FBUyxFQUFDLENBQXNCOytCQUFuQ1UsQ0FBQzs7Ozs7Ozs7Ozs7Z0dBR3JCTCxDQUFDO3dCQUFDTCxTQUFTLEVBQUMsQ0FBMkI7a0NBQUVOLFdBQVc7Ozs7OztnR0FDcERMLGlFQUFRO3dCQUFDc0IsUUFBUSxFQUFFbEIsS0FBSyxHQUFHLEdBQUc7d0JBQUVtQixRQUFRLEVBQUMsQ0FBSzs7Ozs7O2dHQUM5Q2IsQ0FBRztrQ0FDQ0QsUUFBUSxnRkFDWkMsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQW1DOzs0R0FDL0NhLENBQUc7b0NBQUNDLE9BQU8sRUFBQyxDQUFNO29DQUFDQyxLQUFLO29DQUFDZCxHQUFHLEVBQUMsQ0FBMkI7b0NBQUNlLEdBQUcsRUFBQyxDQUFFOzs7Ozs7NEdBQy9EWCxDQUFDO29DQUFDTCxTQUFTLEVBQUMsQ0FBdUI7OENBQUMsQ0FBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JFLENBQUM7S0FwQ1FWLGVBQWU7QUFzQ3hCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdENoZWNrb3V0LmpzPzAxODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSBcInJlYWN0LWN1cnJlbmN5LWZvcm1hdHRlclwiO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdENoZWNrb3V0KHtcclxuICBpZCxcclxuICB0aXRsZSxcclxuICBwcmljZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBjYXRlZ29yeSxcclxuICBpbWFnZSxcclxuICByYXRpbmcsXHJcbiAgaGFzUHJpbWUsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy01XCI+XHJcbiAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBoZWlnaHQ9ezIwMH0gd2lkdGg9ezIwMH0gb2JqZWN0Rml0PVwiY29udGFpblwiIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgbXgtNVwiPlxyXG4gICAgICAgIDxwPnt0aXRsZX08L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICB7QXJyYXkocmF0aW5nKVxyXG4gICAgICAgICAgICAuZmlsbCgpXHJcbiAgICAgICAgICAgIC5tYXAoKF8sIGkpID0+IChcclxuICAgICAgICAgICAgICA8U3Rhckljb24ga2V5PXtpfSBjbGFzc05hbWU9XCJoLTUgdGV4dC15ZWxsb3ctNTAwIFwiIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbXktMiBsaW5lLWNsYW1wLTNcIj57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxDdXJyZW5jeSBxdWFudGl0eT17cHJpY2UgKiA0NTB9IGN1cnJlbmN5PVwiTkdOXCIgLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7aGFzUHJpbWUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIC1tdC01XCI+XHJcbiAgICAgICAgICA8aW1nIGxvYWRpbmc9XCJsYXp5XCIgY2xhc3Mgc3JjPVwiaHR0cHM6Ly9wYXBhcmVhY3QuY29tL2Zkd1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5GUkVFIE5leHQtZGF5IERlbGl2ZXJ5PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2hlY2tvdXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiU3Rhckljb24iLCJDdXJyZW5jeSIsIlByb2R1Y3RDaGVja291dCIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsInJhdGluZyIsImhhc1ByaW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJvYmplY3RGaXQiLCJwIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJxdWFudGl0eSIsImN1cnJlbmN5IiwiaW1nIiwibG9hZGluZyIsImNsYXNzIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProductCheckout.js\n");

/***/ })

});