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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/solid */ \"../node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-currency-formatter */ \"./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MAX_RATING = 5;\nvar MIN_RATING = 1;\nfunction Product(param) {\n    var id = param.id, title = param.title, price = param.price, description = param.description, category = param.category, image = param.image;\n    var _this = this;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING), rating = ref[0];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() < 0.5)), hasPrime = ref1[0];\n    var addItemToBasket = function() {\n        var product = {\n            id: id,\n            title: title,\n            price: price,\n            description: description,\n            category: category,\n            image: image\n        };\n        dispatch;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex flex-col m-5 bg-white z-30 p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"absolute top-2 right-2 text-xs italic text-gray-400\",\n                children: category\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: image,\n                height: 200,\n                width: 200,\n                objectFit: \"contain\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            \",\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"my-3\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: Array(rating).fill().map(function(_, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__.StarIcon, {\n                        className: \"h-5 text-yellow-500 \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-xs my-2 line-clamp-2\",\n                children: description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 35,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    quantity: price,\n                    currency: \"NGN\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            hasPrime && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-2 -mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://papareact.com/fdw\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs text-gray-500\",\n                        children: \"FREE Next-day Delivery\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return addItemToBasket;\n                },\n                className: \"mt-auto button\",\n                children: \"Add to Basket\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Product, \"RmaDm+uETstB6QZ2U+qaJYYN/Gw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YTs7Ozs7Ozs7Ozs7O0FBR3JGLENBQUM7R0FyQ1FoQixPQUFPOztRQUNHSixvREFBVzs7O0tBRHJCSSxPQUFPO0FBdUNoQiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QuanM/NGU4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcclxuaW1wb3J0IEN1cnJlbmN5IGZyb20gXCJyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYWRkVG9CYXNrZXQgfSBmcm9tIFwiLi4vc2xpY2VzL2Jhc2tldFNsaWNlXCI7XHJcblxyXG5jb25zdCBNQVhfUkFUSU5HID0gNTtcclxuY29uc3QgTUlOX1JBVElORyA9IDE7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0KHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSB9KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtyYXRpbmddID0gdXNlU3RhdGUoXHJcbiAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoTUFYX1JBVElORyAtIE1JTl9SQVRJTkcgKyAxKSkgKyBNSU5fUkFUSU5HXHJcbiAgKTtcclxuICBjb25zdCBbaGFzUHJpbWVdID0gdXNlU3RhdGUoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpIDwgMC41KSk7XHJcbmNvbnN0IGFkZEl0ZW1Ub0Jhc2tldCA9ICgpID0+IHtcclxuY29uc3QgcHJvZHVjdCA9IHtcclxuICBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlXHJcbn1cclxuZGlzcGF0Y2hcclxufVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgbS01IGJnLXdoaXRlIHotMzAgcC0xMFwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMiByaWdodC0yIHRleHQteHMgaXRhbGljIHRleHQtZ3JheS00MDBcIj57Y2F0ZWdvcnl9PC9wPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPixcclxuICAgICAgPGg0IGNsYXNzTmFtZT1cIm15LTNcIj57dGl0bGV9PC9oND5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAge0FycmF5KHJhdGluZylcclxuICAgICAgICAgIC5maWxsKClcclxuICAgICAgICAgIC5tYXAoKF8sIGkpID0+IChcclxuICAgICAgICAgICAgPFN0YXJJY29uIGNsYXNzTmFtZT1cImgtNSB0ZXh0LXllbGxvdy01MDAgXCIgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG15LTIgbGluZS1jbGFtcC0yXCI+e2Rlc2NyaXB0aW9ufTwvcD4gXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNSBcIj5cclxuICAgICAgICA8Q3VycmVuY3kgcXVhbnRpdHk9e3ByaWNlfSBjdXJyZW5jeT1cIk5HTlwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aGFzUHJpbWUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIC1tdC01XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcGFwYXJlYWN0LmNvbS9mZHdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+RlJFRSBOZXh0LWRheSBEZWxpdmVyeTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IGFkZEl0ZW1Ub0Jhc2tldH0gY2xhc3NOYW1lPVwibXQtYXV0byBidXR0b25cIj5BZGQgdG8gQmFza2V0PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiU3Rhckljb24iLCJDdXJyZW5jeSIsInVzZURpc3BhdGNoIiwiYWRkVG9CYXNrZXQiLCJNQVhfUkFUSU5HIiwiTUlOX1JBVElORyIsIlByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJkaXNwYXRjaCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhdGluZyIsImhhc1ByaW1lIiwiYWRkSXRlbVRvQmFza2V0IiwicHJvZHVjdCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsIm9iamVjdEZpdCIsImg0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJxdWFudGl0eSIsImN1cnJlbmN5IiwiaW1nIiwiYWx0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Product.js\n");

/***/ })

});