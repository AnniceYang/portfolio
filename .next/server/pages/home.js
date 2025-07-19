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
exports.id = "pages/home";
exports.ids = ["pages/home"];
exports.modules = {

/***/ "./locales lazy recursive ^\\.\\/.*\\.json$":
/*!*******************************************************!*\
  !*** ./locales/ lazy ^\.\/.*\.json$ namespace object ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en.json": [
		"./locales/en.json",
		"locales_en_json"
	],
	"./zh.json": [
		"./locales/zh.json",
		"locales_zh_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./locales lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fhome&preferredRegion=&absolutePagePath=.%2Fpages%5Chome.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fhome&preferredRegion=&absolutePagePath=.%2Fpages%5Chome.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages/module.compiled */ \"./node_modules/next/dist/server/future/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./pages/_app.js\");\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages\\home.js */ \"./pages/home.js\");\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_home_js__WEBPACK_IMPORTED_MODULE_5__, \"default\"));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_home_js__WEBPACK_IMPORTED_MODULE_5__, \"getStaticProps\");\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_home_js__WEBPACK_IMPORTED_MODULE_5__, \"getStaticPaths\");\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_home_js__WEBPACK_IMPORTED_MODULE_5__, \"getServerSideProps\");\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_home_js__WEBPACK_IMPORTED_MODULE_5__, \"config\");\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_home_js__WEBPACK_IMPORTED_MODULE_5__, \"reportWebVitals\");\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_home_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticProps\");\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_home_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticPaths\");\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_home_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticParams\");\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_home_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerProps\");\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_home_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerSideProps\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/home\",\n        pathname: \"/home\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    components: {\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _pages_home_js__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGaG9tZSZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDaG9tZS5qcyZhYnNvbHV0ZUFwcFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2FwcCZhYnNvbHV0ZURvY3VtZW50UGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZG9jdW1lbnQmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ2hDO0FBQ0w7QUFDMUQ7QUFDb0Q7QUFDVjtBQUMxQztBQUM2QztBQUM3QztBQUNBLGlFQUFlLHdFQUFLLENBQUMsMkNBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sdUJBQXVCLHdFQUFLLENBQUMsMkNBQVE7QUFDckMsdUJBQXVCLHdFQUFLLENBQUMsMkNBQVE7QUFDckMsMkJBQTJCLHdFQUFLLENBQUMsMkNBQVE7QUFDekMsZUFBZSx3RUFBSyxDQUFDLDJDQUFRO0FBQzdCLHdCQUF3Qix3RUFBSyxDQUFDLDJDQUFRO0FBQzdDO0FBQ08sZ0NBQWdDLHdFQUFLLENBQUMsMkNBQVE7QUFDOUMsZ0NBQWdDLHdFQUFLLENBQUMsMkNBQVE7QUFDOUMsaUNBQWlDLHdFQUFLLENBQUMsMkNBQVE7QUFDL0MsZ0NBQWdDLHdFQUFLLENBQUMsMkNBQVE7QUFDOUMsb0NBQW9DLHdFQUFLLENBQUMsMkNBQVE7QUFDekQ7QUFDTyx3QkFBd0IseUdBQWdCO0FBQy9DO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3Jmb2xpby8/ZTMzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc1JvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIGFwcCBhbmQgZG9jdW1lbnQgbW9kdWxlcy5cbmltcG9ydCBEb2N1bWVudCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19kb2N1bWVudFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHBcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzXFxcXGhvbWUuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgY29tcG9uZW50IChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIik7XG4vLyBSZS1leHBvcnQgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcImdldFN0YXRpY1Byb3BzXCIpO1xuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gaG9pc3QodXNlcmxhbmQsIFwiZ2V0U3RhdGljUGF0aHNcIik7XG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gaG9pc3QodXNlcmxhbmQsIFwiZ2V0U2VydmVyU2lkZVByb3BzXCIpO1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCBcImNvbmZpZ1wiKTtcbmV4cG9ydCBjb25zdCByZXBvcnRXZWJWaXRhbHMgPSBob2lzdCh1c2VybGFuZCwgXCJyZXBvcnRXZWJWaXRhbHNcIik7XG4vLyBSZS1leHBvcnQgbGVnYWN5IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTdGF0aWNQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCBcInVuc3RhYmxlX2dldFN0YXRpY1BhdGhzXCIpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1BhcmFtcyA9IGhvaXN0KHVzZXJsYW5kLCBcInVuc3RhYmxlX2dldFN0YXRpY1BhcmFtc1wiKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcInVuc3RhYmxlX2dldFNlcnZlclByb3BzXCIpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcInVuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wc1wiKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTLFxuICAgICAgICBwYWdlOiBcIi9ob21lXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9ob21lXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQXBwLFxuICAgICAgICBEb2N1bWVudFxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fhome&preferredRegion=&absolutePagePath=.%2Fpages%5Chome.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

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

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-intl */ \"next-intl\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Navbar */ \"./components/Navbar.js\");\n//首页（主页）页面组件\n// pages/index.js\n\n\n\nfunction Home() {\n    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_1__.useTranslations)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\porfolio\\\\pages\\\\home.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-extrabold mb-4\",\n                        children: t(\"home_title\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\porfolio\\\\pages\\\\home.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg text-gray-600 max-w-xl text-center\",\n                        children: t(\"home_description\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\porfolio\\\\pages\\\\home.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\porfolio\\\\pages\\\\home.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nasync function getStaticProps({ locale }) {\n    return {\n        props: {\n            messages: (await __webpack_require__(\"./locales lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(`./${locale}.json`)).default\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxZQUFZO0FBRVosaUJBQWlCOztBQUMyQjtBQUNIO0FBRTFCLFNBQVNFO0lBQ3RCLE1BQU1DLElBQUlILDBEQUFlQTtJQUV6QixxQkFDRTs7MEJBQ0UsOERBQUNDLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNHO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQWdDRixFQUFFOzs7Ozs7a0NBQ2hELDhEQUFDSTt3QkFBRUYsV0FBVTtrQ0FDVkYsRUFBRTs7Ozs7Ozs7Ozs7Ozs7QUFLYjtBQUVPLGVBQWVLLGVBQWUsRUFBRUMsTUFBTSxFQUFFO0lBQzdDLE9BQU87UUFDTEMsT0FBTztZQUNMQyxVQUFVLENBQUMsTUFBTSxrRUFBTyxHQUFZLEVBQUVGLE9BQU8sTUFBTSxHQUFHRyxPQUFPO1FBQy9EO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcmZvbGlvLy4vcGFnZXMvaG9tZS5qcz8xNjc5Il0sInNvdXJjZXNDb250ZW50IjpbIi8v6aaW6aG177yI5Li76aG177yJ6aG16Z2i57uE5Lu2XHJcblxyXG4vLyBwYWdlcy9pbmRleC5qc1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbnMgfSBmcm9tIFwibmV4dC1pbnRsXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIkAvY29tcG9uZW50cy9OYXZiYXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgdCA9IHVzZVRyYW5zbGF0aW9ucygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTUwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1leHRyYWJvbGQgbWItNFwiPnt0KFwiaG9tZV90aXRsZVwiKX08L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTYwMCBtYXgtdy14bCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAge3QoXCJob21lX2Rlc2NyaXB0aW9uXCIpfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBsb2NhbGUgfSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZXNzYWdlczogKGF3YWl0IGltcG9ydChgLi4vbG9jYWxlcy8ke2xvY2FsZX0uanNvbmApKS5kZWZhdWx0LFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VUcmFuc2xhdGlvbnMiLCJOYXZiYXIiLCJIb21lIiwidCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImdldFN0YXRpY1Byb3BzIiwibG9jYWxlIiwicHJvcHMiLCJtZXNzYWdlcyIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.js\n");

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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fhome&preferredRegion=&absolutePagePath=.%2Fpages%5Chome.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();