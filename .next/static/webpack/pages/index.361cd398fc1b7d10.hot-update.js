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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/solid */ \"../node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-currency-formatter */ \"./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MAX_RATING = 5;\nvar MIN_RATING = 1;\nfunction Product(param) {\n    var id = param.id, title = param.title, price = param.price, description = param.description, category = param.category, image = param.image;\n    var _this = this;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING), rating = ref[0];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() < 0.5)), hasPrime = ref1[0];\n    var addItemToBasket = function() {\n        var product = {\n            id: id,\n            title: title,\n            price: price,\n            description: description,\n            category: category,\n            image: image\n        };\n        dispatch((0,_slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__.addToBasket)(product));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex flex-col m-5 bg-white z-30 p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"absolute top-2 right-2 text-xs italic text-gray-400\",\n                children: category\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: image,\n                height: 200,\n                width: 200,\n                objectFit: \"contain\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            \",\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"my-3\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: Array(rating).fill().map(function(_, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__.StarIcon, {\n                        className: \"h-5 text-yellow-500 \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-xs my-2 line-clamp-2\",\n                children: description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    quantity: price * 450,\n                    currency: \"NGN\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            hasPrime && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-2 -mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://papareact.com/fdw\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs text-gray-500\",\n                        children: \"FREE Next-day Delivery\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: addItemToBasket,\n                className: \"mt-auto button\",\n                children: \"Add to Basket\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Product, \"RmaDm+uETstB6QZ2U+qaJYYN/Gw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQUVHLFNBQVMsRUFBQyxDQUFnQjswQkFBQyxDQUU3RDs7Ozs7Ozs7Ozs7O0FBR04sQ0FBQztHQTlDUWhCLE9BQU87O1FBQ0dKLG9EQUFXOzs7S0FEckJJLE9BQU87QUFnRGhCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcz80ZTgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSBcInJlYWN0LWN1cnJlbmN5LWZvcm1hdHRlclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBhZGRUb0Jhc2tldCB9IGZyb20gXCIuLi9zbGljZXMvYmFza2V0U2xpY2VcIjtcclxuXHJcbmNvbnN0IE1BWF9SQVRJTkcgPSA1O1xyXG5jb25zdCBNSU5fUkFUSU5HID0gMTtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3QoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlIH0pIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3JhdGluZ10gPSB1c2VTdGF0ZShcclxuICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChNQVhfUkFUSU5HIC0gTUlOX1JBVElORyArIDEpKSArIE1JTl9SQVRJTkdcclxuICApO1xyXG4gIGNvbnN0IFtoYXNQcmltZV0gPSB1c2VTdGF0ZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgPCAwLjUpKTtcclxuICBjb25zdCBhZGRJdGVtVG9CYXNrZXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0ge1xyXG4gICAgICBpZCxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHByaWNlLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgY2F0ZWdvcnksXHJcbiAgICAgIGltYWdlLFxyXG4gICAgfTtcclxuICAgIGRpc3BhdGNoKGFkZFRvQmFza2V0KHByb2R1Y3QpKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgbS01IGJnLXdoaXRlIHotMzAgcC0xMFwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMiByaWdodC0yIHRleHQteHMgaXRhbGljIHRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICB7Y2F0ZWdvcnl9XHJcbiAgICAgIDwvcD5cclxuICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBvYmplY3RGaXQ9XCJjb250YWluXCIgLz4sXHJcbiAgICAgIDxoNCBjbGFzc05hbWU9XCJteS0zXCI+e3RpdGxlfTwvaDQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgIHtBcnJheShyYXRpbmcpXHJcbiAgICAgICAgICAuZmlsbCgpXHJcbiAgICAgICAgICAubWFwKChfLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxTdGFySWNvbiBjbGFzc05hbWU9XCJoLTUgdGV4dC15ZWxsb3ctNTAwIFwiIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbXktMiBsaW5lLWNsYW1wLTJcIj57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTUgXCI+XHJcbiAgICAgICAgPEN1cnJlbmN5IHF1YW50aXR5PXtwcmljZSAqIDQ1MH0gY3VycmVuY3k9XCJOR05cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2hhc1ByaW1lICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiAtbXQtNVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3BhcGFyZWFjdC5jb20vZmR3XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPkZSRUUgTmV4dC1kYXkgRGVsaXZlcnk8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17YWRkSXRlbVRvQmFza2V0fSBjbGFzc05hbWU9XCJtdC1hdXRvIGJ1dHRvblwiPlxyXG4gICAgICAgIEFkZCB0byBCYXNrZXRcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiU3Rhckljb24iLCJDdXJyZW5jeSIsInVzZURpc3BhdGNoIiwiYWRkVG9CYXNrZXQiLCJNQVhfUkFUSU5HIiwiTUlOX1JBVElORyIsIlByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJkaXNwYXRjaCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhdGluZyIsImhhc1ByaW1lIiwiYWRkSXRlbVRvQmFza2V0IiwicHJvZHVjdCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsIm9iamVjdEZpdCIsImg0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJxdWFudGl0eSIsImN1cnJlbmN5IiwiaW1nIiwiYWx0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Product.js\n");

/***/ })

});