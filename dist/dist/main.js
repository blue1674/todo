/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/main.js":
/*!**********************!*\
  !*** ./dist/main.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"53b4ad374190b088a3db.js\";\n\n//# sourceURL=webpack://todo/./dist/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/login.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/login.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root{\\n --first: #1b262c;\\n --black:black;\\n--second: #0f4c75;\\n--third: #3282b8;\\n--fourth: #bbe1fa;\\n}\\n.first{\\n    color: var(--first);\\n}\\n.second{\\n    color: var(--second); \\n}\\n.third{\\n    color: var(--third);\\n}\\n.fourth{\\n    color: var(--fourth); \\n}\\n.btn-success{\\n    background-color: #00a400;\\n    transition: none;\\n    border-color: #00a400;\\n}\\n.btn-success:hover, .btn-success:focus{\\n    background: linear-gradient(#79bc64, #578843)!important;\\n    border-color: #00a400;\\n    box-shadow: none;\\n}\\nbody{\\n    /* background-color: rgba(128, 128, 128, 0.486); */\\n    background-color: var(--first);\\n\\n}\\nform, .modal{\\n    color:var(--first);\\n}\\n\\nbutton{\\n    position: relative;\\n}\\nbutton>img{\\n    position: absolute;\\n    left: 8%;\\n}\\n/* // Small devices (landscape phones, 576px and up) */\\n@media (min-width: 576px) { \\n    #loginForm{\\n        width: 80%!important;\\n    }\\n }\\n\\n/* // Medium devices (tablets, 768px and up) */\\n@media (min-width: 768px) { \\n    #loginForm{\\n        width: 50%!important;\\n    }\\n }\\n\\n/* // Large devices (desktops, 992px and up) */\\n@media (min-width: 992px) { \\n    #loginForm{\\n        width: 38%!important;\\n    }\\n }\\n\\n/* // X-Large devices (large desktops, 1200px and up) */\\n@media (min-width: 1200px) { \\n    #loginForm{\\n        width: 28%!important;\\n        margin-top: 40px !important;\\n    }\\n    \\n }\\n\\n/* // XX-Large devices (larger desktops, 1400px and up) */\\n@media (min-width: 1400px) {  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/css/login.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root{\\n    --first: #1b262c;\\n    --black:black;\\n   --second: #0f4c75;\\n   --third: #3282b8;\\n   --fourth: #bbe1fa;\\n   }\\n#modal-header{\\n    display: grid;\\n    grid-template-columns: 1fr auto auto;\\n    grid-template-rows: 1fr 1fr;\\n    grid-template-areas: \\n    \\\"h5 . closeBtn\\\"\\n    \\\"subtitle . .\\\";\\n    padding-top: 0;\\n    padding-right: 0;\\n    padding-bottom: 0;\\n    border-color: var(--first);\\n}\\n#signUpSubtitle{\\ncolor: var(--third);\\n}\\n#modal-footer{\\n    justify-content: center;\\n    border-color: var(--first);\\n}\\n.modal-content{\\n    background-color: #d3e9f8;\\n    color: var(--second);\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/css/modal.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/signUp.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/signUp.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n#signUpTitle{\\n    grid-area: h5;\\n    padding-top: 2%;\\n}\\n\\n#signUpSubtitle{\\n    grid-area: subtitle;\\n    color: rgba(128, 128, 128, 0.842);\\n}\\n#signUpClose{\\n    grid-area: closeBtn;\\n    top: 0;\\n    align-self: start;\\n    margin-top: 2%;\\n    margin-right: 2%;\\n}\\n#signUpSave{\\n left: 2%;\\n top: 2%;\\n min-width: 40%;\\n}\\n\\n\\n \", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/css/signUp.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/html/index.html":
/*!*****************************!*\
  !*** ./src/html/index.html ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/facebook-icon.svg */ \"./src/images/facebook-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../dist/main.js */ \"./dist/main.js\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>TODO</title>\\n    <link href=\\\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\\\" rel=\\\"stylesheet\\\"\\n        integrity=\\\"sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl\\\" crossorigin=\\\"anonymous\\\">\\n\\n</head>\\n\\n<body>\\n    <div class=\\\"container text-white\\\">\\n        <div class=\\\"position-relative pb-5\\\">\\n            <h1 class=\\\"position-absolute top-0 start-50 translate-middle-x display-1\\\">TODO</h1>\\n        </div>\\n        <div class=\\\"position-relative mt-5 \\\">\\n            <form class=\\\"position-absolute top-0 start-50 translate-middle-x w-100\\\" id=\\\"loginForm\\\">\\n                <div class=\\\"mb-3\\\">\\n                    <label for=\\\"inputEmail1\\\" class=\\\"form-label text-white\\\">Email address</label>\\n                    <input type=\\\"email\\\" class=\\\"form-control\\\" id=\\\"inputEmail1\\\" aria-describedby=\\\"emailHelp\\\">\\n                    <div id=\\\"emailHelp\\\" class=\\\"form-text\\\">We'll never share your email with anyone else.</div>\\n                </div>\\n                <div class=\\\"mb-3\\\">\\n                    <label for=\\\"inputPassword1\\\" class=\\\"form-label text-white\\\">Password</label>\\n                    <input type=\\\"password\\\" class=\\\"form-control\\\" id=\\\"inputPassword1\\\">\\n                </div>\\n\\n                <div class=\\\"d-grid gap-2 mt-4\\\">\\n                    <button type=\\\"button\\\" class=\\\"btn btn-primary\\\">Sign In</button>\\n                </div>\\n                <div class=\\\"d-grid gap-2 mt-4\\\">\\n                    <button type=\\\"button\\\" class=\\\"btn btn-success\\\" data-bs-toggle=\\\"modal\\\" data-bs-target=\\\"#signUpModal\\\">\\n                        <!-- data-bs-target=\\\"#exampleModal\\\" -->\\n                        Create an Account\\n                    </button>\\n                </div>\\n\\n                <hr />\\n                <div class=\\\"d-grid gap-2 mt-4\\\">\\n                    <button type=\\\"button\\\" class=\\\"btn btn-light\\\"><img width=\\\"20px\\\"\\n                            style=\\\"margin-bottom:3px; margin-right:5px\\\" alt=\\\"Google sign-in\\\"\\n                            src=\\\"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png\\\" />Sign\\n                        In with Google</button>\\n                </div>\\n                <div class=\\\"d-grid gap-2 mt-4\\\">\\n                    <button type=\\\"button\\\" class=\\\"btn btn-light\\\"><img width=\\\"20px\\\"\\n                            style=\\\"margin-bottom:3px; margin-right:5px\\\" alt=\\\"Facebook sign-in\\\"\\n                            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">Sign\\n                        In with Facebook</button>\\n                </div>\\n            </form>\\n        </div>\\n    </div>\\n\\n    <!-- Button trigger modal -->\\n\\n\\n    <!-- Modal -->\\n    <div class=\\\"modal fade\\\" id=\\\"signUpModal\\\" tabindex=\\\"-1\\\" aria-labelledby=\\\"signUpLabel\\\" aria-hidden=\\\"true\\\">\\n        <div class=\\\"modal-dialog\\\">\\n            <div class=\\\"modal-content\\\">\\n                <div class=\\\"modal-header  position-relative\\\" id=\\\"modal-header\\\">\\n                    <h2 id=\\\"signUpTitle\\\" class=\\\"modal-title\\\">Sign Up</h2>\\n                    <h6 id=\\\"signUpSubtitle\\\">It's quick and easy.</h6>\\n                    <button type=\\\"button\\\" class=\\\"btn-close\\\" data-bs-dismiss=\\\"modal\\\" aria-label=\\\"Close\\\"\\n                        id=\\\"signUpClose\\\"></button>\\n                </div>\\n\\n                <div class=\\\"modal-body\\\">\\n                    <form id=\\\"signUpForm\\\">\\n                        <div class=\\\"form-floating mb-3\\\">\\n                            <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"username\\\"\\n                                placeholder=\\\"between 4 and 16 letters\\\">\\n                            <label for=\\\"username\\\">Username</label>\\n                            <div id=\\\"validationServerUsernameFeedback\\\" class=\\\"invalid-feedback\\\">\\n                                Please choose a username between 4 and 24 characters.\\n                            </div>\\n                        </div>\\n                        <div class=\\\"form-floating mb-3\\\">\\n                            <input type=\\\"email\\\" class=\\\"form-control\\\" id=\\\"email\\\" placeholder=\\\"name@example.com\\\">\\n                            <label for=\\\"email\\\">Email address</label>\\n                            <div id=\\\"validationServerUsernameFeedback\\\" class=\\\"invalid-feedback\\\">\\n                                Please enter a valid email address.\\n                            </div>\\n                        </div>\\n                        <div class=\\\"form-floating\\\">\\n                            <input type=\\\"password\\\" class=\\\"form-control\\\" id=\\\"password\\\" placeholder=\\\"Password\\\">\\n                            <label for=\\\"password\\\">Password</label>\\n                            <div id=\\\"validationServerUsernameFeedback\\\" class=\\\"invalid-feedback\\\">\\n                                Password must be at least 8 characters long and must contain a letter, digit and a\\n                                special character.\\n                            </div>\\n                        </div>\\n                        <div class=\\\"mt-2 mb-2\\\">\\n                            <input type=\\\"checkbox\\\" class=\\\"form-check-input\\\" id=\\\"checkbox\\\" value=\\\"\\\">\\n                            <label for=\\\"checkbox\\\" class=\\\"form-check-label\\\">Show Password</label>\\n                        </div>\\n\\n\\n                        <div class=\\\"modal-footer\\\" id=\\\"modal-footer\\\">\\n                            <button type=\\\"button\\\" class=\\\"btn btn-success btn-block btn-lg mt-3\\\" id=\\\"signUpSave\\\">Sign\\n                                Up</button>\\n                        </div>\\n                    </form>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n    </div>\\n    <script src=\\\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js\\\"\\n        integrity=\\\"sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0\\\"\\n        crossorigin=\\\"anonymous\\\"></script>\\n    <script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"></script>\\n</body>\\n\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://todo/./src/html/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todo/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/css/login.css":
/*!***************************!*\
  !*** ./src/css/login.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./login.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/login.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todo/./src/css/login.css?");

/***/ }),

/***/ "./src/css/modal.css":
/*!***************************!*\
  !*** ./src/css/modal.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modal.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/modal.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todo/./src/css/modal.css?");

/***/ }),

/***/ "./src/css/signUp.css":
/*!****************************!*\
  !*** ./src/css/signUp.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_signUp_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./signUp.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/signUp.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_signUp_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_signUp_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todo/./src/css/signUp.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/images/facebook-icon.svg":
/*!**************************************!*\
  !*** ./src/images/facebook-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4db0c31fd7097596460c.svg\";\n\n//# sourceURL=webpack://todo/./src/images/facebook-icon.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_login_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/login.css */ \"./src/css/login.css\");\n/* harmony import */ var _css_signUp_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/signUp.css */ \"./src/css/signUp.css\");\n/* harmony import */ var _signUpForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signUpForm.js */ \"./src/signUpForm.js\");\n/* harmony import */ var _signUpForm_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_signUpForm_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/modal.css */ \"./src/css/modal.css\");\n/* harmony import */ var _html_index_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html/index.html */ \"./src/html/index.html\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/signUpForm.js":
/*!***************************!*\
  !*** ./src/signUpForm.js ***!
  \***************************/
/***/ (() => {

eval("const signUpBtn = document.getElementById('signUpSave');\nsignUpBtn.addEventListener('click', validate);\n\nconst validator = {\n    email: /.*@.*/,\n    password: /^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?;&]{8,}$/,\n    username: /.{4,24}/,\n}\n\nconst checkbox = document.getElementById(\"checkbox\");\ncheckbox.addEventListener('click', function () {\n\n    const password = document.getElementById('password');\n    if (password.type === 'password')\n        password.type = \"text\";\n    else\n        password.type = 'password';\n})\n\nfunction validate() {\n    const inputList = document.querySelectorAll('.form-floating input');\n    inputList.forEach(x => {\n        if (x.value.match(validator[`${x.id}`])) {\n            x.classList.add('is-valid');\n            x.classList.remove('is-invalid');\n        }\n        else {\n            x.classList.add('is-invalid');\n            x.classList.remove('is-valid');\n        }\n    }\n    );\n}\n\n\n//# sourceURL=webpack://todo/./src/signUpForm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// no jsonp function
/******/ 		
/******/ 		// no deferred startup
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;