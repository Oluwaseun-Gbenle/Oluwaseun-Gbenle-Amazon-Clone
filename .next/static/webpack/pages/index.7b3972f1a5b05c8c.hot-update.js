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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/outline */ \"../node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)(), session = ref.data;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__.selectItems);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center bg-amazon_blue p-1 flex-grow py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-2 flex item-center flex-grow sm:flex-grow-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"link\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: \"link\",\n                                onClick: function() {\n                                    return router.push(\"/\");\n                                },\n                                src: \"https://links.papareact.com/f90\",\n                                width: 150,\n                                height: 40,\n                                objectFit: \"contain\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden bg-yellow-400 hover:bg-yellow-500 sm:flex items-center h-10 rounded-md flex-grow cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"h-fill p-2 w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.SearchIcon, {\n                                className: \"h-12 p-4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-white items-center flex text-xs space-x-6 mx-6 whitespace-\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: !session ? next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn : next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut,\n                                className: \"link\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: session ? \"Hello, \".concat(session.user.name) : \"Sign in\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-extrabold md:text-sm\",\n                                        children: \"Account & Lists\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"link\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Returns\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-extrabold md:text-sm\",\n                                        children: \"& Orders\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: function() {\n                                    return router.push(\"/checkout\");\n                                },\n                                className: \"relative flex items-center link\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold\",\n                                        children: items.length\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.ShoppingCartIcon, {\n                                        className: \"h-10 \"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"hidden md:inline font-extrabold md:text-sm mt-2\",\n                                        children: \"Basket\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.MenuIcon, {\n                                className: \"h-6 mr-1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            \"All\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link \",\n                        children: \"Prime Video\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link\",\n                        children: \"Amazon Business\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link\",\n                        children: \"Today's Deals\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Electronics\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Food & Grocery\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Prime\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Buy Again\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Shopper Toolkit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Health & Personal Care\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\Amazon clone\\\\amazon-clone\\\\src\\\\components\\\\Header.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"KXMX3mLjuhvV6NckFXCO7cGTNxM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQTRCO2tDQUFDLENBQWM7Ozs7OztnR0FDdkRTLENBQUM7d0JBQUNULFNBQVMsRUFBQyxDQUE0QjtrQ0FBQyxDQUFLOzs7Ozs7Z0dBQzlDUyxDQUFDO3dCQUFDVCxTQUFTLEVBQUMsQ0FBNEI7a0NBQUMsQ0FBUzs7Ozs7O2dHQUNsRFMsQ0FBQzt3QkFBQ1QsU0FBUyxFQUFDLENBQTRCO2tDQUFDLENBQWU7Ozs7OztnR0FDeERTLENBQUM7d0JBQUNULFNBQVMsRUFBQyxDQUE0QjtrQ0FBQyxDQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhFLENBQUM7R0FqRVFQLE1BQU07O1FBQ2FKLHVEQUFVO1FBQ3JCQyxrREFBUztRQUNaRSxvREFBVzs7O0tBSGhCQyxNQUFNO0FBbUVmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzPzMzMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgTWVudUljb24sIFNlYXJjaEljb24sU2hvcHBpbmdDYXJ0SWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgc2VsZWN0SXRlbXMgfWZyb20gXCIuLi9zbGljZXMvYmFza2V0U2xpY2VcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuIGNvbnN0IGl0ZW1zPSB1c2VTZWxlY3RvcihzZWxlY3RJdGVtcylcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBiZy1hbWF6b25fYmx1ZSBwLTEgZmxleC1ncm93IHB5LTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZmxleCBpdGVtLWNlbnRlciBmbGV4LWdyb3cgc206ZmxleC1ncm93LTBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua1wiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZjkwXCJcclxuICAgICAgICAgICAgd2lkdGg9ezE1MH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs0MH1cclxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gYmcteWVsbG93LTQwMCBob3ZlcjpiZy15ZWxsb3ctNTAwIHNtOmZsZXggaXRlbXMtY2VudGVyIGgtMTAgcm91bmRlZC1tZCBmbGV4LWdyb3cgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZpbGwgcC0yIHctNiBmbGV4LWdyb3cgZmxleC1zaHJpbmsgcm91bmRlZC1sLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBweC00XCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT1cImgtMTIgcC00XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaXRlbXMtY2VudGVyIGZsZXggdGV4dC14cyBzcGFjZS14LTYgbXgtNiB3aGl0ZXNwYWNlLVwiPlxyXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXshc2Vzc2lvbiA/IHNpZ25JbiA6IHNpZ25PdXR9IGNsYXNzTmFtZT1cImxpbmtcIj5cclxuICAgICAgICAgICAgPHA+e3Nlc3Npb24gPyBgSGVsbG8sICR7c2Vzc2lvbi51c2VyLm5hbWV9YCA6IFwiU2lnbiBpblwifTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgbWQ6dGV4dC1zbVwiPkFjY291bnQgJiBMaXN0czwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rXCI+XHJcbiAgICAgICAgICAgIDxwPlJldHVybnM8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIG1kOnRleHQtc21cIj4mIE9yZGVyczwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qQmFza2V0ICovfVxyXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9jaGVja291dFwiKX0gY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgbGlua1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIG1kOnJpZ2h0LTEwIGgtNCB3LTQgYmcteWVsbG93LTQwMCB0ZXh0LWNlbnRlciByb3VuZGVkLWZ1bGwgdGV4dC1ibGFjayBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICB7aXRlbXMubGVuZ3RofVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxTaG9wcGluZ0NhcnRJY29uIGNsYXNzTmFtZT1cImgtMTAgXCIgLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmlubGluZSBmb250LWV4dHJhYm9sZCBtZDp0ZXh0LXNtIG10LTJcIj5cclxuICAgICAgICAgICAgICBCYXNrZXRcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LypCYXNrZXQgZW5kKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMyBwLTIgcGwtNiBiZy1hbWF6b25fYmx1ZS1saWdodCB0ZXh0LXdoaXRlIHRleHQtc21cIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPVwiaC02IG1yLTFcIiAvPlxyXG4gICAgICAgICAgQWxsXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmsgXCI+UHJpbWUgVmlkZW88L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlua1wiPkFtYXpvbiBCdXNpbmVzczwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rXCI+VG9kYXkncyBEZWFsczwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rIGhpZGRlbiBsZzppbmxpbmUtZmxleFwiPkVsZWN0cm9uaWNzPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmsgaGlkZGVuIGxnOmlubGluZS1mbGV4XCI+Rm9vZCAmIEdyb2Nlcnk8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGluayBoaWRkZW4gbGc6aW5saW5lLWZsZXhcIj5QcmltZTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rIGhpZGRlbiBsZzppbmxpbmUtZmxleFwiPkJ1eSBBZ2FpbjwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rIGhpZGRlbiBsZzppbmxpbmUtZmxleFwiPlNob3BwZXIgVG9vbGtpdDwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rIGhpZGRlbiBsZzppbmxpbmUtZmxleFwiPkhlYWx0aCAmIFBlcnNvbmFsIENhcmU8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIk1lbnVJY29uIiwiU2VhcmNoSWNvbiIsIlNob3BwaW5nQ2FydEljb24iLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsInNlbGVjdEl0ZW1zIiwidXNlU2VsZWN0b3IiLCJIZWFkZXIiLCJzZXNzaW9uIiwiZGF0YSIsInJvdXRlciIsIml0ZW1zIiwiaGVhZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInB1c2giLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImlucHV0IiwidHlwZSIsInAiLCJ1c2VyIiwibmFtZSIsInNwYW4iLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header.js\n");

/***/ })

});