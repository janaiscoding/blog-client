"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const API = \"https://janas-blog-api.fly.dev/posts/\";\n    const fetchRequest = (url, setter)=>{\n        fetch(url, {\n            method: \"GET\"\n        }).then((response)=>response.json()).then((data)=>{\n            setter(data.posts);\n        }).catch((error)=>{\n            console.log(error.message);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchRequest(API, setPosts);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"h-screen flex flex-col items-start justify-center p-24 gap-24\",\n        children: posts.map((post, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            i + 1,\n                            \". \",\n                            post.title\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/janaiscoding/repos/github-projects/blog-client/app/page.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: post.text\n                    }, void 0, false, {\n                        fileName: \"/home/janaiscoding/repos/github-projects/blog-client/app/page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, i, true, {\n                fileName: \"/home/janaiscoding/repos/github-projects/blog-client/app/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/home/janaiscoding/repos/github-projects/blog-client/app/page.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"bG8V4duoIfO0BEPgauWMVT5Qvyw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUM0QztBQUU3QixTQUFTRTs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDLEVBQUU7SUFDckMsTUFBTUksTUFBTTtJQUNaLE1BQU1DLGVBQWUsQ0FBQ0MsS0FBS0M7UUFDekJDLE1BQU1GLEtBQUs7WUFDVEcsUUFBUTtRQUNWLEdBQ0dDLEtBQUssQ0FBQ0MsV0FBYUEsU0FBU0MsUUFDNUJGLEtBQUssQ0FBQ0c7WUFDTE4sT0FBT00sS0FBS1g7UUFDZCxHQUNDWSxNQUFNLENBQUNDO1lBQ05DLFFBQVFDLElBQUlGLE1BQU1HO1FBQ3BCO0lBQ0o7SUFDQW5CLGdEQUFTQSxDQUFDO1FBQ1JNLGFBQWFELEtBQUtEO0lBQ3BCLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDZ0I7UUFBS0MsV0FBVTtrQkFDYmxCLE1BQU1tQixJQUFJLENBQUNDLE1BQU1DLGtCQUNoQiw4REFBQ0M7O2tDQUNDLDhEQUFDQzs7NEJBQ0VGLElBQUk7NEJBQUU7NEJBQUdELEtBQUtJOzs7Ozs7O2tDQUVqQiw4REFBQ0Q7a0NBQUdILEtBQUtLOzs7Ozs7O2VBSkRKOzs7Ozs7Ozs7O0FBU2xCO0dBOUJ3QnRCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgQVBJID0gXCJodHRwczovL2phbmFzLWJsb2ctYXBpLmZseS5kZXYvcG9zdHMvXCI7XG4gIGNvbnN0IGZldGNoUmVxdWVzdCA9ICh1cmwsIHNldHRlcikgPT4ge1xuICAgIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldHRlcihkYXRhLnBvc3RzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hSZXF1ZXN0KEFQSSwgc2V0UG9zdHMpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlciBwLTI0IGdhcC0yNFwiPlxuICAgICAge3Bvc3RzLm1hcCgocG9zdCwgaSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7aSArIDF9LiB7cG9zdC50aXRsZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+e3Bvc3QudGV4dH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsInBvc3RzIiwic2V0UG9zdHMiLCJBUEkiLCJmZXRjaFJlcXVlc3QiLCJ1cmwiLCJzZXR0ZXIiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwibWFpbiIsImNsYXNzTmFtZSIsIm1hcCIsInBvc3QiLCJpIiwiZGl2IiwicCIsInRpdGxlIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});