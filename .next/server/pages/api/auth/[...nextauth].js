"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/email":
/*!********************************************!*\
  !*** external "next-auth/providers/email" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/email");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/email */ \"next-auth/providers/email\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_email__WEBPACK_IMPORTED_MODULE_2__);\n// pages/api/auth/[...nextauth].js\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        // OAuth authentication providers\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET,\n            authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'\n        })\n    ],\n    jwt: {\n        encryption: true\n    },\n    secret: process.env.SECRET,\n    callbacks: {\n        async jwt (token, account) {\n            if (account === null || account === void 0 ? void 0 : account.accessToken) {\n                token.accessToken = account.accessToken;\n            }\n            return token;\n        },\n        redirect: async (url, _baseUrl)=>{\n            if (url === '/user') {\n                return Promise.resolve('/');\n            }\n            return Promise.resolve('/');\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsRUFBa0M7QUFDRjtBQUN1QjtBQUNGO0FBR3JELGlFQUFlQSxnREFBUSxDQUFDLENBQUM7SUFDdkJHLFNBQVMsRUFBRSxDQUFDO1FBQ1YsRUFBaUM7UUFDakNGLGlFQUFjLENBQUMsQ0FBQztZQUNkRyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxhQUFhO1lBQ3ZDQyxnQkFBZ0IsRUFBRSxDQUFvRztRQUN4SCxDQUFDO0lBTUgsQ0FBQztJQUNEQyxHQUFHLEVBQUUsQ0FBQztRQUNKQyxVQUFVLEVBQUUsSUFBSTtJQUNsQixDQUFDO0lBQ0RDLE1BQU0sRUFBRVIsT0FBTyxDQUFDQyxHQUFHLENBQUNRLE1BQU07SUFDMUJDLFNBQVMsRUFBRSxDQUFDO2NBQ0pKLEdBQUcsRUFBQ0ssS0FBSyxFQUFFQyxPQUFPLEVBQUUsQ0FBQztZQUN6QixFQUFFLEVBQUVBLE9BQU8sYUFBUEEsT0FBTyxjQUFQQSxJQUFJLENBQUpBLENBQXFCLEdBQXJCQSxPQUFPLENBQUdDLFdBQVcsRUFBRSxDQUFDO2dCQUMxQkYsS0FBSyxDQUFDRSxXQUFXLEdBQUdELE9BQU8sQ0FBQ0MsV0FBVztZQUN6QyxDQUFDO1lBQ0QsTUFBTSxDQUFDRixLQUFLO1FBQ2QsQ0FBQztRQUNERyxRQUFRLFNBQVNDLEdBQUcsRUFBRUMsUUFBUSxHQUFHLENBQUM7WUFDaEMsRUFBRSxFQUFFRCxHQUFHLEtBQUssQ0FBTyxRQUFFLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDQyxPQUFPLENBQUMsQ0FBRztZQUM1QixDQUFDO1lBQ0QsTUFBTSxDQUFFRCxPQUFPLENBQUNDLE9BQU8sQ0FBQyxDQUFHO1FBQzdCLENBQUM7SUFDTCxDQUFDO0FBQ0QsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0Ly4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NzhhYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzXHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiXHJcbmltcG9ydCBFbWFpbFByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2VtYWlsXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICAvLyBPQXV0aCBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxyXG4gICAgICBhdXRob3JpemF0aW9uVXJsOiAnaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3YyL2F1dGg/cHJvbXB0PWNvbnNlbnQmYWNjZXNzX3R5cGU9b2ZmbGluZSZyZXNwb25zZV90eXBlPWNvZGUnXHJcbiAgICB9KSxcclxuICAgLyogRW1haWxQcm92aWRlcih7XHJcbiAgICAgIHNlcnZlcjogcHJvY2Vzcy5lbnYuTUFJTF9TRVJWRVIsXHJcbiAgICAgIGZyb206IFwiPG5vLXJlcGx5QGV4YW1wbGUuY29tPlwiLFxyXG4gICAgfSksKi9cclxuICAgIC8vIFNpZ24gaW4gd2l0aCBwYXNzd29yZGxlc3MgZW1haWwgbGlua1xyXG4gIF0sXHJcbiAgand0OiB7XHJcbiAgICBlbmNyeXB0aW9uOiB0cnVlXHJcbiAgfSxcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVCxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIGp3dCh0b2tlbiwgYWNjb3VudCkge1xyXG4gICAgICBpZiAoYWNjb3VudCA/LmFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgdG9rZW4uYWNjZXNzVG9rZW4gPSBhY2NvdW50LmFjY2Vzc1Rva2VuXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfSxcclxuICAgIHJlZGlyZWN0OiBhc3luYyAodXJsLCBfYmFzZVVybCk9PntcclxuICAgICAgaWYgKHVybCA9PT0gJy91c2VyJykge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoJy8nKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAgUHJvbWlzZS5yZXNvbHZlKCcvJylcclxuICAgIH1cclxufVxyXG59KVxyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIkVtYWlsUHJvdmlkZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfU0VDUkVUIiwiYXV0aG9yaXphdGlvblVybCIsImp3dCIsImVuY3J5cHRpb24iLCJzZWNyZXQiLCJTRUNSRVQiLCJjYWxsYmFja3MiLCJ0b2tlbiIsImFjY291bnQiLCJhY2Nlc3NUb2tlbiIsInJlZGlyZWN0IiwidXJsIiwiX2Jhc2VVcmwiLCJQcm9taXNlIiwicmVzb2x2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();