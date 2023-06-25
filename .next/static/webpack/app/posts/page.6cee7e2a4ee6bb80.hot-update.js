"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/posts/page",{

/***/ "(app-client)/./app/posts/page.tsx":
/*!****************************!*\
  !*** ./app/posts/page.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const API = \"https://janas-blog-api.fly.dev/posts/\";\n    const fetchRequest = (url, setter)=>{\n        fetch(url, {\n            method: \"GET\"\n        }).then((response)=>response.json()).then((data)=>{\n            setter(data.posts);\n            console.log(\"setting successful\");\n        }).catch((error)=>{\n            console.log(error.message);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchRequest(API, setPosts);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"h-screen flex flex-col items-start justify-center p-24 gap-24\",\n        children: posts.map((post, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"posts/\" + post._id,\n                        children: [\n                            i + 1,\n                            \". \",\n                            post.title\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/janaiscoding/repos/github-projects/blog-client/app/posts/page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: post.text\n                    }, void 0, false, {\n                        fileName: \"/home/janaiscoding/repos/github-projects/blog-client/app/posts/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, i, true, {\n                fileName: \"/home/janaiscoding/repos/github-projects/blog-client/app/posts/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/home/janaiscoding/repos/github-projects/blog-client/app/posts/page.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"bG8V4duoIfO0BEPgauWMVT5Qvyw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3Bvc3RzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUM0QztBQVk3QixTQUFTRTs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQVFoQyxFQUFFO0lBQ0osTUFBTUksTUFBTTtJQUVaLE1BQU1DLGVBQWUsQ0FBQ0MsS0FBYUM7UUFDakNDLE1BQU1GLEtBQUs7WUFDVEcsUUFBUTtRQUNWLEdBQ0dDLEtBQUssQ0FBQ0MsV0FBYUEsU0FBU0MsUUFDNUJGLEtBQUssQ0FBQ0c7WUFDTE4sT0FBT00sS0FBS1g7WUFDWlksUUFBUUMsSUFBSTtRQUNkLEdBQ0NDLE1BQU0sQ0FBQ0M7WUFDTkgsUUFBUUMsSUFBSUUsTUFBTUM7UUFDcEI7SUFDSjtJQUVBbkIsZ0RBQVNBLENBQUM7UUFDUk0sYUFBYUQsS0FBS0Q7SUFDcEIsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNnQjtRQUFLQyxXQUFVO2tCQUNibEIsTUFBTW1CLElBQUksQ0FBQ0MsTUFBTUMsa0JBQ2hCLDhEQUFDQzs7a0NBQ0MsOERBQUNDO3dCQUFFQyxNQUFNLFdBQVdKLEtBQUtLOzs0QkFDdEJKLElBQUk7NEJBQUU7NEJBQUdELEtBQUtNOzs7Ozs7O2tDQUVqQiw4REFBQ0M7a0NBQUdQLEtBQUtROzs7Ozs7O2VBSkRQOzs7Ozs7Ozs7O0FBU2xCO0dBekN3QnRCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wb3N0cy9wYWdlLnRzeD9mOTkxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvc3RzRGF0YSB7XG4gIHBvc3RzOiBbXG4gICAge1xuICAgICAgdGl0bGU6IHN0cmluZztcbiAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgIF9pZDogc3RyaW5nO1xuICAgIH1cbiAgXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZTxcbiAgICBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgICAgX2lkOiBzdHJpbmc7XG4gICAgICB9XG4gICAgXVxuICA+KFtdKTtcbiAgY29uc3QgQVBJID0gXCJodHRwczovL2phbmFzLWJsb2ctYXBpLmZseS5kZXYvcG9zdHMvXCI7XG5cbiAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gKHVybDogc3RyaW5nLCBzZXR0ZXI6IGFueSkgPT4ge1xuICAgIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldHRlcihkYXRhLnBvc3RzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXR0aW5nIHN1Y2Nlc3NmdWxcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hSZXF1ZXN0KEFQSSwgc2V0UG9zdHMpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlciBwLTI0IGdhcC0yNFwiPlxuICAgICAge3Bvc3RzLm1hcCgocG9zdCwgaSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgPGEgaHJlZj17XCJwb3N0cy9cIiArIHBvc3QuX2lkfT5cbiAgICAgICAgICAgIHtpICsgMX0uIHtwb3N0LnRpdGxlfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8cD57cG9zdC50ZXh0fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwicG9zdHMiLCJzZXRQb3N0cyIsIkFQSSIsImZldGNoUmVxdWVzdCIsInVybCIsInNldHRlciIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsIm1lc3NhZ2UiLCJtYWluIiwiY2xhc3NOYW1lIiwibWFwIiwicG9zdCIsImkiLCJkaXYiLCJhIiwiaHJlZiIsIl9pZCIsInRpdGxlIiwicCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/posts/page.tsx\n"));

/***/ })

});