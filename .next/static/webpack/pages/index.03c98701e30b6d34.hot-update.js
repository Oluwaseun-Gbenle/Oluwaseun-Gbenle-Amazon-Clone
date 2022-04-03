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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/solid */ \"../node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-currency-formatter */ \"./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MAX_RATING = 5;\nvar MIN_RATING = 1;\nfunction Product(param) {\n    var id = param.id, title = param.title, price = param.price, description = param.description, category = param.category, image = param.image;\n    var _this = this;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING), rating = ref[0];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() < 0.5)), hasPrime = ref1[0];\n    var addItemToBasket = function() {\n        var product = {\n            id: id,\n            title: title,\n            price: price,\n            description: description,\n            category: category,\n            image: image\n        };\n        dispatch((0,_slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__.addToBasket)(pro));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex flex-col m-5 bg-white z-30 p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"absolute top-2 right-2 text-xs italic text-gray-400\",\n                children: category\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: image,\n                height: 200,\n                width: 200,\n                objectFit: \"contain\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            \",\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"my-3\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: Array(rating).fill().map(function(_, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__.StarIcon, {\n                        className: \"h-5 text-yellow-500 \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-xs my-2 line-clamp-2\",\n                children: description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 35,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    quantity: price,\n                    currency: \"NGN\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            hasPrime && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-2 -mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://papareact.com/fdw\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs text-gray-500\",\n                        children: \"FREE Next-day Delivery\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return addItemToBasket;\n                },\n                className: \"mt-auto button\",\n                children: \"Add to Basket\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Product, \"RmaDm+uETstB6QZ2U+qaJYYN/Gw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxFQUFDLENBQWdCOzBCQUFDLENBQWE7Ozs7Ozs7Ozs7OztBQUdyRixDQUFDO0dBckNRakIsT0FBTzs7UUFDR0osb0RBQVc7OztLQURyQkksT0FBTztBQXVDaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LmpzPzRlODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XHJcbmltcG9ydCBDdXJyZW5jeSBmcm9tIFwicmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFkZFRvQmFza2V0IH0gZnJvbSBcIi4uL3NsaWNlcy9iYXNrZXRTbGljZVwiO1xyXG5cclxuY29uc3QgTUFYX1JBVElORyA9IDU7XHJcbmNvbnN0IE1JTl9SQVRJTkcgPSAxO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbcmF0aW5nXSA9IHVzZVN0YXRlKFxyXG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE1BWF9SQVRJTkcgLSBNSU5fUkFUSU5HICsgMSkpICsgTUlOX1JBVElOR1xyXG4gICk7XHJcbiAgY29uc3QgW2hhc1ByaW1lXSA9IHVzZVN0YXRlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSA8IDAuNSkpO1xyXG5jb25zdCBhZGRJdGVtVG9CYXNrZXQgPSAoKSA9PiB7XHJcbmNvbnN0IHByb2R1Y3QgPSB7XHJcbiAgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZVxyXG59XHJcbmRpc3BhdGNoKGFkZFRvQmFza2V0KHBybykpXHJcbn1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG0tNSBiZy13aGl0ZSB6LTMwIHAtMTBcIj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiB0ZXh0LXhzIGl0YWxpYyB0ZXh0LWdyYXktNDAwXCI+e2NhdGVnb3J5fTwvcD5cclxuICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBvYmplY3RGaXQ9XCJjb250YWluXCIgLz4sXHJcbiAgICAgIDxoNCBjbGFzc05hbWU9XCJteS0zXCI+e3RpdGxlfTwvaDQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgIHtBcnJheShyYXRpbmcpXHJcbiAgICAgICAgICAuZmlsbCgpXHJcbiAgICAgICAgICAubWFwKChfLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxTdGFySWNvbiBjbGFzc05hbWU9XCJoLTUgdGV4dC15ZWxsb3ctNTAwIFwiIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBteS0yIGxpbmUtY2xhbXAtMlwiPntkZXNjcmlwdGlvbn08L3A+IFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTUgXCI+XHJcbiAgICAgICAgPEN1cnJlbmN5IHF1YW50aXR5PXtwcmljZX0gY3VycmVuY3k9XCJOR05cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2hhc1ByaW1lICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiAtbXQtNVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3BhcGFyZWFjdC5jb20vZmR3XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPkZSRUUgTmV4dC1kYXkgRGVsaXZlcnk8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBhZGRJdGVtVG9CYXNrZXR9IGNsYXNzTmFtZT1cIm10LWF1dG8gYnV0dG9uXCI+QWRkIHRvIEJhc2tldDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIlN0YXJJY29uIiwiQ3VycmVuY3kiLCJ1c2VEaXNwYXRjaCIsImFkZFRvQmFza2V0IiwiTUFYX1JBVElORyIsIk1JTl9SQVRJTkciLCJQcm9kdWN0IiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImltYWdlIiwiZGlzcGF0Y2giLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYXRpbmciLCJoYXNQcmltZSIsImFkZEl0ZW1Ub0Jhc2tldCIsInByb2R1Y3QiLCJwcm8iLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJvYmplY3RGaXQiLCJoNCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwicXVhbnRpdHkiLCJjdXJyZW5jeSIsImltZyIsImFsdCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Product.js\n");

/***/ })

});