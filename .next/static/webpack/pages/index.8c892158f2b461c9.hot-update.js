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

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/outline */ \"../node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)(), session = ref.data;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__.selectItems);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center bg-amazon_blue p-1 flex-grow py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-2 flex item-center flex-grow sm:flex-grow-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            lo: true,\n                            onClick: function() {\n                                return router.push(\"/\");\n                            },\n                            src: \"https://links.papareact.com/f90\",\n                            width: 150,\n                            height: 40,\n                            objectFit: \"contain\",\n                            className: \"cursor-pointer\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden bg-yellow-400 hover:bg-yellow-500 sm:flex items-center h-10 rounded-md flex-grow cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"h-fill p-2 w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.SearchIcon, {\n                                className: \"h-12 p-4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-white items-center flex text-xs space-x-6 mx-6 whitespace-\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: !session ? next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn : next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut,\n                                className: \"link\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: session ? \"Hello, \".concat(session.user.name) : \"Sign in\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-extrabold md:text-sm\",\n                                        children: \"Account & Lists\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"link\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Returns\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-extrabold md:text-sm\",\n                                        children: \"& Orders\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: function() {\n                                    return router.push(\"/checkout\");\n                                },\n                                className: \"relative flex items-center link\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold\",\n                                        children: items.length\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.ShoppingCartIcon, {\n                                        className: \"h-10 \"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"hidden md:inline font-extrabold md:text-sm mt-2\",\n                                        children: \"Basket\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.MenuIcon, {\n                                className: \"h-6 mr-1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this),\n                            \"All\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link \",\n                        children: \"Prime Video\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link\",\n                        children: \"Amazon Business\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link\",\n                        children: \"Today's Deals\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Electronics\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Food & Grocery\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Prime\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Buy Again\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Shopper Toolkit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Health & Personal Care\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"KXMX3mLjuhvV6NckFXCO7cGTNxM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN2RFUsQ0FBQzt3QkFBQ1YsU0FBUyxFQUFDLENBQTRCO2tDQUFDLENBQUs7Ozs7OztnR0FDOUNVLENBQUM7d0JBQUNWLFNBQVMsRUFBQyxDQUE0QjtrQ0FBQyxDQUFTOzs7Ozs7Z0dBQ2xEVSxDQUFDO3dCQUFDVixTQUFTLEVBQUMsQ0FBNEI7a0NBQUMsQ0FBZTs7Ozs7O2dHQUN4RFUsQ0FBQzt3QkFBQ1YsU0FBUyxFQUFDLENBQTRCO2tDQUFDLENBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEUsQ0FBQztHQWhFUVAsTUFBTTs7UUFDYUosdURBQVU7UUFDckJDLGtEQUFTO1FBQ1pFLG9EQUFXOzs7S0FIaEJDLE1BQU07QUFrRWYsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanM/MzMyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBNZW51SWNvbiwgU2VhcmNoSWNvbixTaG9wcGluZ0NhcnRJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBzZWxlY3RJdGVtcyB9ZnJvbSBcIi4uL3NsaWNlcy9iYXNrZXRTbGljZVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gY29uc3QgaXRlbXM9IHVzZVNlbGVjdG9yKHNlbGVjdEl0ZW1zKVxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJnLWFtYXpvbl9ibHVlIHAtMSBmbGV4LWdyb3cgcHktMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBmbGV4IGl0ZW0tY2VudGVyIGZsZXgtZ3JvdyBzbTpmbGV4LWdyb3ctMFwiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBsb1xyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9mOTBcIlxyXG4gICAgICAgICAgICB3aWR0aD17MTUwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezQwfVxyXG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBiZy15ZWxsb3ctNDAwIGhvdmVyOmJnLXllbGxvdy01MDAgc206ZmxleCBpdGVtcy1jZW50ZXIgaC0xMCByb3VuZGVkLW1kIGZsZXgtZ3JvdyBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZmlsbCBwLTIgdy02IGZsZXgtZ3JvdyBmbGV4LXNocmluayByb3VuZGVkLWwtbWQgZm9jdXM6b3V0bGluZS1ub25lIHB4LTRcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwiaC0xMiBwLTRcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBpdGVtcy1jZW50ZXIgZmxleCB0ZXh0LXhzIHNwYWNlLXgtNiBteC02IHdoaXRlc3BhY2UtXCI+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyFzZXNzaW9uID8gc2lnbkluIDogc2lnbk91dH0gY2xhc3NOYW1lPVwibGlua1wiPlxyXG4gICAgICAgICAgICA8cD57c2Vzc2lvbiA/IGBIZWxsbywgJHtzZXNzaW9uLnVzZXIubmFtZX1gIDogXCJTaWduIGluXCJ9PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCBtZDp0ZXh0LXNtXCI+QWNjb3VudCAmIExpc3RzPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtcIj5cclxuICAgICAgICAgICAgPHA+UmV0dXJuczwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgbWQ6dGV4dC1zbVwiPiYgT3JkZXJzPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LypCYXNrZXQgKi99XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2NoZWNrb3V0XCIpfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBsaW5rXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgbWQ6cmlnaHQtMTAgaC00IHctNCBiZy15ZWxsb3ctNDAwIHRleHQtY2VudGVyIHJvdW5kZWQtZnVsbCB0ZXh0LWJsYWNrIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgIHtpdGVtcy5sZW5ndGh9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPFNob3BwaW5nQ2FydEljb24gY2xhc3NOYW1lPVwiaC0xMCBcIiAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6aW5saW5lIGZvbnQtZXh0cmFib2xkIG1kOnRleHQtc20gbXQtMlwiPlxyXG4gICAgICAgICAgICAgIEJhc2tldFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKkJhc2tldCBlbmQqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zIHAtMiBwbC02IGJnLWFtYXpvbl9ibHVlLWxpZ2h0IHRleHQtd2hpdGUgdGV4dC1zbVwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmsgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxNZW51SWNvbiBjbGFzc05hbWU9XCJoLTYgbXItMVwiIC8+XHJcbiAgICAgICAgICBBbGxcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGluayBcIj5QcmltZSBWaWRlbzwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rXCI+QW1hem9uIEJ1c2luZXNzPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmtcIj5Ub2RheSdzIERlYWxzPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmsgaGlkZGVuIGxnOmlubGluZS1mbGV4XCI+RWxlY3Ryb25pY3M8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGluayBoaWRkZW4gbGc6aW5saW5lLWZsZXhcIj5Gb29kICYgR3JvY2VyeTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rIGhpZGRlbiBsZzppbmxpbmUtZmxleFwiPlByaW1lPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmsgaGlkZGVuIGxnOmlubGluZS1mbGV4XCI+QnV5IEFnYWluPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmsgaGlkZGVuIGxnOmlubGluZS1mbGV4XCI+U2hvcHBlciBUb29sa2l0PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmsgaGlkZGVuIGxnOmlubGluZS1mbGV4XCI+SGVhbHRoICYgUGVyc29uYWwgQ2FyZTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiTWVudUljb24iLCJTZWFyY2hJY29uIiwiU2hvcHBpbmdDYXJ0SWNvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwidXNlUm91dGVyIiwic2VsZWN0SXRlbXMiLCJ1c2VTZWxlY3RvciIsIkhlYWRlciIsInNlc3Npb24iLCJkYXRhIiwicm91dGVyIiwiaXRlbXMiLCJoZWFkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJsbyIsIm9uQ2xpY2siLCJwdXNoIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJpbnB1dCIsInR5cGUiLCJwIiwidXNlciIsIm5hbWUiLCJzcGFuIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header.js\n");

/***/ })

});