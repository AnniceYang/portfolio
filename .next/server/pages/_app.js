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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-intl */ \"next-intl\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n//导航栏组件\n\n\n\n\nfunction Navbar() {\n    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_2__.useTranslations)();\n    const locale = (0,next_intl__WEBPACK_IMPORTED_MODULE_2__.useLocale)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const navItems = [\n        {\n            href: \"/\",\n            label: t(\"nav.home\")\n        },\n        {\n            href: \"/about\",\n            label: t(\"nav.about\")\n        },\n        {\n            href: \"/projects\",\n            label: t(\"nav.projects\")\n        },\n        {\n            href: \"/contact\",\n            label: t(\"nav.contact\")\n        }\n    ];\n    const switchLocale = locale === \"en\" ? \"zh\" : \"en\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-white shadow-md px-8 py-4 flex justify-between items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-xl font-bold text-pink-600\",\n                children: \"Annice Yang\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\porfolio\\\\components\\\\Navbar.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex space-x-6 text-gray-700\",\n                children: [\n                    navItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: item.href,\n                                className: \"relative text-pink-600 font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full\",\n                                children: item.label\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\porfolio\\\\components\\\\Navbar.js\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, this)\n                        }, item.href, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\porfolio\\\\components\\\\Navbar.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: router.asPath,\n                            locale: switchLocale,\n                            className: \"ml-4 text-sm border border-pink-400 rounded px-2 py-1 text-pink-600 hover:bg-pink-50 transition\",\n                            children: switchLocale === \"en\" ? \"EN\" : \"中文\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\porfolio\\\\components\\\\Navbar.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\porfolio\\\\components\\\\Navbar.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\porfolio\\\\components\\\\Navbar.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\porfolio\\\\components\\\\Navbar.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPOztBQUNzQjtBQUMwQjtBQUNmO0FBRXpCLFNBQVNJO0lBQ3RCLE1BQU1DLElBQUlKLDBEQUFlQTtJQUN6QixNQUFNSyxTQUFTSixvREFBU0E7SUFDeEIsTUFBTUssU0FBU0osc0RBQVNBO0lBRXhCLE1BQU1LLFdBQVc7UUFDZjtZQUFFQyxNQUFNO1lBQUtDLE9BQU9MLEVBQUU7UUFBWTtRQUNsQztZQUFFSSxNQUFNO1lBQVVDLE9BQU9MLEVBQUU7UUFBYTtRQUN4QztZQUFFSSxNQUFNO1lBQWFDLE9BQU9MLEVBQUU7UUFBZ0I7UUFDOUM7WUFBRUksTUFBTTtZQUFZQyxPQUFPTCxFQUFFO1FBQWU7S0FDN0M7SUFFRCxNQUFNTSxlQUFlTCxXQUFXLE9BQU8sT0FBTztJQUU5QyxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUFrQzs7Ozs7OzBCQUNqRCw4REFBQ0U7Z0JBQUdGLFdBQVU7O29CQUNYTCxTQUFTUSxHQUFHLENBQUMsQ0FBQ0MscUJBQ2IsOERBQUNDO3NDQUNDLDRFQUFDbEIsa0RBQUlBO2dDQUNIUyxNQUFNUSxLQUFLUixJQUFJO2dDQUNmSSxXQUFVOzBDQUVUSSxLQUFLUCxLQUFLOzs7Ozs7MkJBTE5PLEtBQUtSLElBQUk7Ozs7O2tDQVVwQiw4REFBQ1M7a0NBQ0MsNEVBQUNsQixrREFBSUE7NEJBQ0hTLE1BQU1GLE9BQU9ZLE1BQU07NEJBQ25CYixRQUFRSzs0QkFDUkUsV0FBVTtzQ0FFVEYsaUJBQWlCLE9BQU8sT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3Jmb2xpby8uL2NvbXBvbmVudHMvTmF2YmFyLmpzP2ZiY2EiXSwic291cmNlc0NvbnRlbnQiOlsiLy/lr7zoiKrmoI/nu4Tku7ZcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbnMsIHVzZUxvY2FsZSB9IGZyb20gXCJuZXh0LWludGxcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3QgdCA9IHVzZVRyYW5zbGF0aW9ucygpO1xyXG4gIGNvbnN0IGxvY2FsZSA9IHVzZUxvY2FsZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBuYXZJdGVtcyA9IFtcclxuICAgIHsgaHJlZjogXCIvXCIsIGxhYmVsOiB0KFwibmF2LmhvbWVcIikgfSxcclxuICAgIHsgaHJlZjogXCIvYWJvdXRcIiwgbGFiZWw6IHQoXCJuYXYuYWJvdXRcIikgfSxcclxuICAgIHsgaHJlZjogXCIvcHJvamVjdHNcIiwgbGFiZWw6IHQoXCJuYXYucHJvamVjdHNcIikgfSxcclxuICAgIHsgaHJlZjogXCIvY29udGFjdFwiLCBsYWJlbDogdChcIm5hdi5jb250YWN0XCIpIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgc3dpdGNoTG9jYWxlID0gbG9jYWxlID09PSBcImVuXCIgPyBcInpoXCIgOiBcImVuXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1tZCBweC04IHB5LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1waW5rLTYwMFwiPkFubmljZSBZYW5nPC9kaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNiB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAge25hdkl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aXRlbS5ocmVmfT5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1waW5rLTYwMCBmb250LW1lZGl1bSBhZnRlcjpjb250ZW50LVsnJ10gYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6bGVmdC0wIGFmdGVyOi1ib3R0b20tMSBhZnRlcjpoLTAuNSBhZnRlcjp3LTAgYWZ0ZXI6YmctcGluay01MDAgYWZ0ZXI6dHJhbnNpdGlvbi1hbGwgYWZ0ZXI6ZHVyYXRpb24tMzAwIGhvdmVyOmFmdGVyOnctZnVsbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuXHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj17cm91dGVyLmFzUGF0aH1cclxuICAgICAgICAgICAgbG9jYWxlPXtzd2l0Y2hMb2NhbGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTQgdGV4dC1zbSBib3JkZXIgYm9yZGVyLXBpbmstNDAwIHJvdW5kZWQgcHgtMiBweS0xIHRleHQtcGluay02MDAgaG92ZXI6YmctcGluay01MCB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3N3aXRjaExvY2FsZSA9PT0gXCJlblwiID8gXCJFTlwiIDogXCLkuK3mlodcIn1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVRyYW5zbGF0aW9ucyIsInVzZUxvY2FsZSIsInVzZVJvdXRlciIsIk5hdmJhciIsInQiLCJsb2NhbGUiLCJyb3V0ZXIiLCJuYXZJdGVtcyIsImhyZWYiLCJsYWJlbCIsInN3aXRjaExvY2FsZSIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsInVsIiwibWFwIiwiaXRlbSIsImxpIiwiYXNQYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-intl */ \"next-intl\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_3__);\n//项目顶层入口组件，统一注入全局样式和状态\n// pages/_app.js\n// pages/_app.js\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_intl__WEBPACK_IMPORTED_MODULE_3__.NextIntlProvider, {\n        messages: pageProps.messages,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\porfolio\\\\pages\\\\_app.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\porfolio\\\\pages\\\\_app.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\porfolio\\\\pages\\\\_app.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0JBQXNCO0FBRXRCLGdCQUFnQjtBQUNoQixnQkFBZ0I7O0FBQ2M7QUFDVztBQUNJO0FBRTlCLFNBQVNFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDcEQscUJBQ0UsOERBQUNILHVEQUFnQkE7UUFBQ0ksVUFBVUQsVUFBVUMsUUFBUTs7MEJBQzVDLDhEQUFDTCwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDRztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3Jmb2xpby8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL+mhueebrumhtuWxguWFpeWPo+e7hOS7tu+8jOe7n+S4gOazqOWFpeWFqOWxgOagt+W8j+WSjOeKtuaAgVxyXG5cclxuLy8gcGFnZXMvX2FwcC5qc1xyXG4vLyBwYWdlcy9fYXBwLmpzXHJcbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIkAvY29tcG9uZW50cy9OYXZiYXJcIjtcclxuaW1wb3J0IHsgTmV4dEludGxQcm92aWRlciB9IGZyb20gXCJuZXh0LWludGxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmV4dEludGxQcm92aWRlciBtZXNzYWdlcz17cGFnZVByb3BzLm1lc3NhZ2VzfT5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L05leHRJbnRsUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiTmV4dEludGxQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibWVzc2FnZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-intl":
/*!****************************!*\
  !*** external "next-intl" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-intl");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();