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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ \"../node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-currency-formatter */ \"./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction ProductCheckout(param) {\n    var id = param.id, title = param.title, price = param.price, description = param.description, category = param.category, image = param.image, rating = param.rating, hasPrime = param.hasPrime;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: image,\n                height: 200,\n                width: 200,\n                objectFit: \"contain\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-3 mx-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: Array(rating).fill().map(function(_, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.StarIcon, {\n                                className: \"h-5 text-yellow-500 \"\n                            }, i, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs my-2 line-clamp-3\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-5 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            quantity: price * 450,\n                            currency: \"NGN\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                            lineNumber: 31,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: hasPrime && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center space-x-2 -mt-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    loading: \"lazy\",\n                                    className: \"w-12\",\n                                    src: \"https://mpng.subpng.com/20180630/buy/kisspng-amazon-com-amazon-prime-amazon-video-retail-prime-amazon-prime-5b376c3bdf3100.0051578015303588439142.jpg\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xs my-3 text-gray-500\",\n                                    children: \"FREE Next-day Delivery\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\ProductCheckout.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = ProductCheckout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCheckout);\nvar _c;\n$RefreshReg$(_c, \"ProductCheckout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2hlY2tvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDSztBQUNtQjtBQUNGO1NBRXRDSSxlQUFlLENBQUMsS0FTeEIsRUFBRSxDQUFDO1FBUkZDLEVBQUUsR0FEcUIsS0FTeEIsQ0FSQ0EsRUFBRSxFQUNGQyxLQUFLLEdBRmtCLEtBU3hCLENBUENBLEtBQUssRUFDTEMsS0FBSyxHQUhrQixLQVN4QixDQU5DQSxLQUFLLEVBQ0xDLFdBQVcsR0FKWSxLQVN4QixDQUxDQSxXQUFXLEVBQ1hDLFFBQVEsR0FMZSxLQVN4QixDQUpDQSxRQUFRLEVBQ1JDLEtBQUssR0FOa0IsS0FTeEIsQ0FIQ0EsS0FBSyxFQUNMQyxNQUFNLEdBUGlCLEtBU3hCLENBRkNBLE1BQU0sRUFDTkMsUUFBUSxHQVJlLEtBU3hCLENBRENBLFFBQVE7O0lBRVIsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBa0I7O3dGQUM5QmIsbURBQUs7Z0JBQUNjLEdBQUcsRUFBRUwsS0FBSztnQkFBRU0sTUFBTSxFQUFFLEdBQUc7Z0JBQUVDLEtBQUssRUFBRSxHQUFHO2dCQUFFQyxTQUFTLEVBQUMsQ0FBUzs7Ozs7O3dGQUU5REwsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWlCOztnR0FDN0JLLENBQUM7a0NBQUViLEtBQUs7Ozs7OztnR0FDUk8sQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQU07a0NBQ2xCTSxLQUFLLENBQUNULE1BQU0sRUFDVlUsSUFBSSxHQUNKQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxDQUFDLEVBQUVDLENBQUM7K0dBQ1B0Qiw0REFBUTtnQ0FBU1ksU0FBUyxFQUFDLENBQXNCOytCQUFuQ1UsQ0FBQzs7Ozs7Ozs7Ozs7Z0dBR3JCTCxDQUFDO3dCQUFDTCxTQUFTLEVBQUMsQ0FBMkI7a0NBQUVOLFdBQVc7Ozs7OztnR0FDcERLLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFPOzhHQUNyQlgsaUVBQVE7NEJBQUNzQixRQUFRLEVBQUVsQixLQUFLLEdBQUcsR0FBRzs0QkFBRW1CLFFBQVEsRUFBQyxDQUFLOzs7Ozs7Ozs7OztnR0FFOUNiLENBQUc7a0NBQ0NELFFBQVEsZ0ZBQ1pDLENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFtQzs7NEdBQy9DYSxDQUFHO29DQUFDQyxPQUFPLEVBQUMsQ0FBTTtvQ0FBQ2QsU0FBUyxFQUFDLENBQU07b0NBQUNDLEdBQUcsRUFBQyxDQUF1SjtvQ0FBQ2MsR0FBRyxFQUFDLENBQUU7Ozs7Ozs0R0FDdE1WLENBQUM7b0NBQUNMLFNBQVMsRUFBQyxDQUE0Qjs4Q0FBQyxDQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPMUUsQ0FBQztLQXRDUVYsZUFBZTtBQXdDeEIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2hlY2tvdXQuanM/MDE4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XHJcbmltcG9ydCBDdXJyZW5jeSBmcm9tIFwicmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0Q2hlY2tvdXQoe1xyXG4gIGlkLFxyXG4gIHRpdGxlLFxyXG4gIHByaWNlLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGNhdGVnb3J5LFxyXG4gIGltYWdlLFxyXG4gIHJhdGluZyxcclxuICBoYXNQcmltZSxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTVcIj5cclxuICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBvYmplY3RGaXQ9XCJjb250YWluXCIgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMyBteC01XCI+XHJcbiAgICAgICAgPHA+e3RpdGxlfTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgIHtBcnJheShyYXRpbmcpXHJcbiAgICAgICAgICAgIC5maWxsKClcclxuICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxTdGFySWNvbiBrZXk9e2l9IGNsYXNzTmFtZT1cImgtNSB0ZXh0LXllbGxvdy01MDAgXCIgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBteS0yIGxpbmUtY2xhbXAtM1wiPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01IFwiPlxyXG4gICAgICAgIDxDdXJyZW5jeSBxdWFudGl0eT17cHJpY2UgKiA0NTB9IGN1cnJlbmN5PVwiTkdOXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2hhc1ByaW1lICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiAtbXQtNVwiPlxyXG4gICAgICAgICAgPGltZyBsb2FkaW5nPVwibGF6eVwiIGNsYXNzTmFtZT1cInctMTJcIiBzcmM9XCJodHRwczovL21wbmcuc3VicG5nLmNvbS8yMDE4MDYzMC9idXkva2lzc3BuZy1hbWF6b24tY29tLWFtYXpvbi1wcmltZS1hbWF6b24tdmlkZW8tcmV0YWlsLXByaW1lLWFtYXpvbi1wcmltZS01YjM3NmMzYmRmMzEwMC4wMDUxNTc4MDE1MzAzNTg4NDM5MTQyLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG15LTMgdGV4dC1ncmF5LTUwMFwiPkZSRUUgTmV4dC1kYXkgRGVsaXZlcnk8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDaGVja291dDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJTdGFySWNvbiIsIkN1cnJlbmN5IiwiUHJvZHVjdENoZWNrb3V0IiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImltYWdlIiwicmF0aW5nIiwiaGFzUHJpbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsIm9iamVjdEZpdCIsInAiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsInF1YW50aXR5IiwiY3VycmVuY3kiLCJpbWciLCJsb2FkaW5nIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProductCheckout.js\n");

/***/ })

});