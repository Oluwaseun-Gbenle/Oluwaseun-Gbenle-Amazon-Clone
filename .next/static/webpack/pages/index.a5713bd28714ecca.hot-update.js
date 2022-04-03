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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/solid */ \"../node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-currency-formatter */ \"./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MAX_RATING = 5;\nvar MIN_RATING = 1;\nfunction Product(param) {\n    var id = param.id, title = param.title, price = param.price, description = param.description, category = param.category, image = param.image;\n    var _this = this;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING), rating = ref[0];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() < 0.5)), hasPrime = ref1[0];\n    var addItemToBasket = function() {\n        var product = {\n            id: id,\n            title: title,\n            price: price,\n            description: description,\n            category: category,\n            image: image\n        };\n        dispatch((0,_slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__.addToBasket)(product));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex flex-col m-5 bg-white z-30 p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"absolute top-2 right-2 text-xs italic text-gray-400\",\n                children: category\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: image,\n                height: 200,\n                width: 200,\n                objectFit: \"contain\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            \",\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"my-3\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: Array(rating).fill().map(function(_, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__.StarIcon, {\n                        className: \"h-5 text-yellow-500 \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-xs my-2 line-clamp-2\",\n                children: description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    quantity: price,\n                    currency: \"NGN\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            hasPrime && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-2 -mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://papareact.com/fdw\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs text-gray-500\",\n                        children: \"FREE Next-day Delivery\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: addItemToBasket,\n                className: \"mt-auto button\",\n                children: \"Add to Basket\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Product.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Product, \"RmaDm+uETstB6QZ2U+qaJYYN/Gw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDVDtBQUNtQjtBQUNGO0FBQ047QUFDVTs7QUFFbkQsR0FBSyxDQUFDTyxVQUFVLEdBQUcsQ0FBQztBQUNwQixHQUFLLENBQUNDLFVBQVUsR0FBRyxDQUFDO1NBRVhDLE9BQU8sQ0FBQyxLQUFrRCxFQUFFLENBQUM7UUFBbkRDLEVBQUUsR0FBSixLQUFrRCxDQUFoREEsRUFBRSxFQUFFQyxLQUFLLEdBQVgsS0FBa0QsQ0FBNUNBLEtBQUssRUFBRUMsS0FBSyxHQUFsQixLQUFrRCxDQUFyQ0EsS0FBSyxFQUFFQyxXQUFXLEdBQS9CLEtBQWtELENBQTlCQSxXQUFXLEVBQUVDLFFBQVEsR0FBekMsS0FBa0QsQ0FBakJBLFFBQVEsRUFBRUMsS0FBSyxHQUFoRCxLQUFrRCxDQUFQQSxLQUFLOzs7SUFDL0QsR0FBSyxDQUFDQyxRQUFRLEdBQUdYLHdEQUFXO0lBQzVCLEdBQUssQ0FBWUosR0FFaEIsR0FGZ0JBLCtDQUFRLENBQ3ZCZ0IsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxNQUFNWixVQUFVLEdBQUdDLFVBQVUsR0FBRyxDQUFDLEtBQUtBLFVBQVUsR0FEakVZLE1BQU0sR0FBSW5CLEdBRWhCO0lBQ0QsR0FBSyxDQUFjQSxJQUF5QyxHQUF6Q0EsK0NBQVEsQ0FBQ2dCLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sS0FBSyxHQUFHLElBQW5ERSxRQUFRLEdBQUlwQixJQUF5QztJQUM1RCxHQUFLLENBQUNxQixlQUFlLEdBQUcsUUFBUSxHQUFGLENBQUM7UUFDN0IsR0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBQztZQUNmYixFQUFFLEVBQUZBLEVBQUU7WUFDRkMsS0FBSyxFQUFMQSxLQUFLO1lBQ0xDLEtBQUssRUFBTEEsS0FBSztZQUNMQyxXQUFXLEVBQVhBLFdBQVc7WUFDWEMsUUFBUSxFQUFSQSxRQUFRO1lBQ1JDLEtBQUssRUFBTEEsS0FBSztRQUNQLENBQUM7UUFDREMsUUFBUSxDQUFDVixnRUFBVyxDQUFDaUIsT0FBTyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUNELE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQStDOzt3RkFDM0RDLENBQUM7Z0JBQUNELFNBQVMsRUFBQyxDQUFxRDswQkFDL0RYLFFBQVE7Ozs7Ozt3RkFFVlosbURBQUs7Z0JBQUN5QixHQUFHLEVBQUVaLEtBQUs7Z0JBQUVhLE1BQU0sRUFBRSxHQUFHO2dCQUFFQyxLQUFLLEVBQUUsR0FBRztnQkFBRUMsU0FBUyxFQUFDLENBQVM7Ozs7OztZQUFHLENBQ2xFO3dGQUFDQyxDQUFFO2dCQUFDTixTQUFTLEVBQUMsQ0FBTTswQkFBRWQsS0FBSzs7Ozs7O3dGQUMxQmEsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQU07MEJBQ2xCTyxLQUFLLENBQUNaLE1BQU0sRUFDVmEsSUFBSSxHQUNKQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxDQUFDLEVBQUVDLENBQUM7dUdBQ1BqQyw0REFBUTt3QkFBQ3NCLFNBQVMsRUFBQyxDQUFzQjs7Ozs7Ozs7Ozs7O3dGQUcvQ0MsQ0FBQztnQkFBQ0QsU0FBUyxFQUFDLENBQTJCOzBCQUFFWixXQUFXOzs7Ozs7d0ZBQ3BEVyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBTztzR0FDbkJyQixpRUFBUTtvQkFBQ2lDLFFBQVEsRUFBRXpCLEtBQUs7b0JBQUUwQixRQUFRLEVBQUMsQ0FBSzs7Ozs7Ozs7Ozs7WUFFMUNqQixRQUFRLGdGQUNORyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBbUM7O2dHQUMvQ2MsQ0FBRzt3QkFBQ1osR0FBRyxFQUFDLENBQTJCO3dCQUFDYSxHQUFHLEVBQUMsQ0FBRTs7Ozs7O2dHQUMxQ2QsQ0FBQzt3QkFBQ0QsU0FBUyxFQUFDLENBQXVCO2tDQUFDLENBQXNCOzs7Ozs7Ozs7Ozs7d0ZBRzlEZ0IsQ0FBTTtnQkFBQ0MsT0FBTyxFQUFFcEIsZUFBZTtnQkFBRUcsU0FBUyxFQUFDLENBQWdCOzBCQUFDLENBRTdEOzs7Ozs7Ozs7Ozs7QUFHTixDQUFDO0dBOUNRaEIsT0FBTzs7UUFDR0osb0RBQVc7OztLQURyQkksT0FBTztBQWdEaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LmpzPzRlODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XHJcbmltcG9ydCBDdXJyZW5jeSBmcm9tIFwicmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFkZFRvQmFza2V0IH0gZnJvbSBcIi4uL3NsaWNlcy9iYXNrZXRTbGljZVwiO1xyXG5cclxuY29uc3QgTUFYX1JBVElORyA9IDU7XHJcbmNvbnN0IE1JTl9SQVRJTkcgPSAxO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbcmF0aW5nXSA9IHVzZVN0YXRlKFxyXG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE1BWF9SQVRJTkcgLSBNSU5fUkFUSU5HICsgMSkpICsgTUlOX1JBVElOR1xyXG4gICk7XHJcbiAgY29uc3QgW2hhc1ByaW1lXSA9IHVzZVN0YXRlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSA8IDAuNSkpO1xyXG4gIGNvbnN0IGFkZEl0ZW1Ub0Jhc2tldCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSB7XHJcbiAgICAgIGlkLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgcHJpY2UsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBjYXRlZ29yeSxcclxuICAgICAgaW1hZ2UsXHJcbiAgICB9O1xyXG4gICAgZGlzcGF0Y2goYWRkVG9CYXNrZXQocHJvZHVjdCkpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtLTUgYmctd2hpdGUgei0zMCBwLTEwXCI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgdGV4dC14cyBpdGFsaWMgdGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgIHtjYXRlZ29yeX1cclxuICAgICAgPC9wPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPixcclxuICAgICAgPGg0IGNsYXNzTmFtZT1cIm15LTNcIj57dGl0bGV9PC9oND5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAge0FycmF5KHJhdGluZylcclxuICAgICAgICAgIC5maWxsKClcclxuICAgICAgICAgIC5tYXAoKF8sIGkpID0+IChcclxuICAgICAgICAgICAgPFN0YXJJY29uIGNsYXNzTmFtZT1cImgtNSB0ZXh0LXllbGxvdy01MDAgXCIgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBteS0yIGxpbmUtY2xhbXAtMlwiPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNSBcIj5cclxuICAgICAgICA8Q3VycmVuY3kgcXVhbnRpdHk9e3ByaWNlfSBjdXJyZW5jeT1cIk5HTlwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aGFzUHJpbWUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIC1tdC01XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcGFwYXJlYWN0LmNvbS9mZHdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+RlJFRSBOZXh0LWRheSBEZWxpdmVyeTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRJdGVtVG9CYXNrZXR9IGNsYXNzTmFtZT1cIm10LWF1dG8gYnV0dG9uXCI+XHJcbiAgICAgICAgQWRkIHRvIEJhc2tldFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJTdGFySWNvbiIsIkN1cnJlbmN5IiwidXNlRGlzcGF0Y2giLCJhZGRUb0Jhc2tldCIsIk1BWF9SQVRJTkciLCJNSU5fUkFUSU5HIiwiUHJvZHVjdCIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsImRpc3BhdGNoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmF0aW5nIiwiaGFzUHJpbWUiLCJhZGRJdGVtVG9CYXNrZXQiLCJwcm9kdWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInNyYyIsImhlaWdodCIsIndpZHRoIiwib2JqZWN0Rml0IiwiaDQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsInF1YW50aXR5IiwiY3VycmVuY3kiLCJpbWciLCJhbHQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Product.js\n");

/***/ })

});