"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Product.js":
/*!***********************************!*\
  !*** ./src/components/Product.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/solid */ \"../node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-currency-formatter */ \"./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MAX_RATING = 5;\nvar MIN_RATING = 1;\nfunction Product(param) {\n    var id = param.id, title = param.title, price = param.price, description = param.description, category = param.category, image = param.image;\n    var _this = this;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING), rating = ref[0];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() < 0.5)), hasPrime = ref1[0];\n    var addItemToBasket = function() {\n        var product = {\n            id: id,\n            title: title,\n            price: price,\n            rating: rating,\n            description: description,\n            category: category,\n            image: image\n        };\n        dispatch((0,_slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__.addToBasket)(product));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex flex-col m-5 bg-white z-30 p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"absolute top-2 right-2 text-xs italic text-gray-400\",\n                children: category\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: image,\n                height: 200,\n                width: 200,\n                objectFit: \"contain\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            \",\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"my-3\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: Array(rating).fill().map(function(_, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__.StarIcon, {\n                        className: \"h-5 text-yellow-500 \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-xs my-2 line-clamp-2\",\n                children: description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    quantity: price * 450,\n                    currency: \"NGN\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            hasPrime && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-2 -mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://papareact.com/fdw\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs text-gray-500\",\n                        children: \"FREE Next-day Delivery\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: addItemToBasket,\n                className: \"mt-auto button\",\n                children: \"Add to Basket\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Product, \"RmaDm+uETstB6QZ2U+qaJYYN/Gw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQyxPQUFPLEVBQUVwQixlQUFlO2dCQUFFRyxTQUFTLEVBQUMsQ0FBZ0I7MEJBQUMsQ0FFN0Q7Ozs7Ozs7Ozs7OztBQUdOLENBQUM7R0FoRFFoQixPQUFPOztRQUNHSixvREFBVzs7O0tBRHJCSSxPQUFPO0FBa0RoQiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QuanM/NGU4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcclxuaW1wb3J0IEN1cnJlbmN5IGZyb20gXCJyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYWRkVG9CYXNrZXQgfSBmcm9tIFwiLi4vc2xpY2VzL2Jhc2tldFNsaWNlXCI7XHJcblxyXG5jb25zdCBNQVhfUkFUSU5HID0gNTtcclxuY29uc3QgTUlOX1JBVElORyA9IDE7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0KHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSB9KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtyYXRpbmddID0gdXNlU3RhdGUoXHJcbiAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoTUFYX1JBVElORyAtIE1JTl9SQVRJTkcgKyAxKSkgKyBNSU5fUkFUSU5HXHJcbiAgKTtcclxuICBjb25zdCBbaGFzUHJpbWVdID0gdXNlU3RhdGUoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpIDwgMC41KSk7XHJcbiAgY29uc3QgYWRkSXRlbVRvQmFza2V0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IHtcclxuICAgICAgaWQsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBwcmljZSxcclxuICAgICAgcmF0aW5nLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgY2F0ZWdvcnksXHJcbiAgICAgIGltYWdlLFxyXG4gICAgICBcclxuICAgIH07XHJcbiAgICBkaXNwYXRjaChhZGRUb0Jhc2tldChwcm9kdWN0KSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG0tNSBiZy13aGl0ZSB6LTMwIHAtMTBcIj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiB0ZXh0LXhzIGl0YWxpYyB0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBoZWlnaHQ9ezIwMH0gd2lkdGg9ezIwMH0gb2JqZWN0Rml0PVwiY29udGFpblwiIC8+LFxyXG4gICAgICA8aDQgY2xhc3NOYW1lPVwibXktM1wiPnt0aXRsZX08L2g0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICB7QXJyYXkocmF0aW5nKVxyXG4gICAgICAgICAgLmZpbGwoKVxyXG4gICAgICAgICAgLm1hcCgoXywgaSkgPT4gKFxyXG4gICAgICAgICAgICA8U3Rhckljb24gY2xhc3NOYW1lPVwiaC01IHRleHQteWVsbG93LTUwMCBcIiAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG15LTIgbGluZS1jbGFtcC0yXCI+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01IFwiPlxyXG4gICAgICAgIDxDdXJyZW5jeSBxdWFudGl0eT17cHJpY2UgKiA0NTB9IGN1cnJlbmN5PVwiTkdOXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtoYXNQcmltZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgLW10LTVcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9wYXBhcmVhY3QuY29tL2Zkd1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5GUkVFIE5leHQtZGF5IERlbGl2ZXJ5PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZEl0ZW1Ub0Jhc2tldH0gY2xhc3NOYW1lPVwibXQtYXV0byBidXR0b25cIj5cclxuICAgICAgICBBZGQgdG8gQmFza2V0XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIlN0YXJJY29uIiwiQ3VycmVuY3kiLCJ1c2VEaXNwYXRjaCIsImFkZFRvQmFza2V0IiwiTUFYX1JBVElORyIsIk1JTl9SQVRJTkciLCJQcm9kdWN0IiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImltYWdlIiwiZGlzcGF0Y2giLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYXRpbmciLCJoYXNQcmltZSIsImFkZEl0ZW1Ub0Jhc2tldCIsInByb2R1Y3QiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJvYmplY3RGaXQiLCJoNCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwicXVhbnRpdHkiLCJjdXJyZW5jeSIsImltZyIsImFsdCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Product.js\n");

/***/ })

});