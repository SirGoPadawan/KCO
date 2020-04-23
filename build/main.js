/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./path/to/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./css/fonts.css":
/*!**************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/fonts.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../fonts/Gilroy-Regular.otf */ \"./fonts/Gilroy-Regular.otf\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../fonts/Gilroy-Medium.otf */ \"./fonts/Gilroy-Medium.otf\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../fonts/Gilroy-Semibold.otf */ \"./fonts/Gilroy-Semibold.otf\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../fonts/Gilroy-Bold.otf */ \"./fonts/Gilroy-Bold.otf\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../fonts/Gilroy-Extrabold.otf */ \"./fonts/Gilroy-Extrabold.otf\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\n// Module\nexports.push([module.i, \"@font-face {\\r\\n  font-family: \\\"Gilroy\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"opentype\\\");\\r\\n  font-weight: normal;\\r\\n  font-style: normal;\\r\\n}\\r\\n@font-face {\\r\\n  font-family: \\\"Gilroy\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"opentype\\\");\\r\\n  font-weight: 500;\\r\\n  font-style: normal;\\r\\n}\\r\\n@font-face {\\r\\n  font-family: \\\"Gilroy\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"opentype\\\");\\r\\n  font-weight: 600;\\r\\n  font-style: normal;\\r\\n}\\r\\n@font-face {\\r\\n  font-family: \\\"Gilroy\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format(\\\"opentype\\\");\\r\\n  font-weight: 700;\\r\\n  font-style: normal;\\r\\n}\\r\\n@font-face {\\r\\n  font-family: \\\"Gilroy\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") format(\\\"opentype\\\");\\r\\n  font-weight: 800;\\r\\n  font-style: normal;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./css/fonts.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./css/normalize.css":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/normalize.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\r\\n\\r\\n/* Document\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * 1. Correct the line height in all browsers.\\r\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\r\\n */\\r\\n\\r\\nhtml {\\r\\n  line-height: 1.15; /* 1 */\\r\\n  -webkit-text-size-adjust: 100%; /* 2 */\\r\\n}\\r\\n\\r\\n/* Sections\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * Remove the margin in all browsers.\\r\\n */\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Render the `main` element consistently in IE.\\r\\n */\\r\\n\\r\\nmain {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Correct the font size and margin on `h1` elements within `section` and\\r\\n * `article` contexts in Chrome, Firefox, and Safari.\\r\\n */\\r\\n\\r\\nh1 {\\r\\n  font-size: 2em;\\r\\n  margin: 0.67em 0;\\r\\n}\\r\\n\\r\\n/* Grouping content\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * 1. Add the correct box sizing in Firefox.\\r\\n * 2. Show the overflow in Edge and IE.\\r\\n */\\r\\n\\r\\nhr {\\r\\n  box-sizing: content-box; /* 1 */\\r\\n  height: 0; /* 1 */\\r\\n  overflow: visible; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\r\\n * 2. Correct the odd `em` font sizing in all browsers.\\r\\n */\\r\\n\\r\\npre {\\r\\n  font-family: monospace, monospace; /* 1 */\\r\\n  font-size: 1em; /* 2 */\\r\\n}\\r\\n\\r\\n/* Text-level semantics\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * Remove the gray background on active links in IE 10.\\r\\n */\\r\\n\\r\\na {\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Remove the bottom border in Chrome 57-\\r\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\r\\n */\\r\\n\\r\\nabbr[title] {\\r\\n  border-bottom: none; /* 1 */\\r\\n  text-decoration: underline; /* 2 */\\r\\n  text-decoration: underline dotted; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * Add the correct font weight in Chrome, Edge, and Safari.\\r\\n */\\r\\n\\r\\nb,\\r\\nstrong {\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\r\\n * 2. Correct the odd `em` font sizing in all browsers.\\r\\n */\\r\\n\\r\\ncode,\\r\\nkbd,\\r\\nsamp {\\r\\n  font-family: monospace, monospace; /* 1 */\\r\\n  font-size: 1em; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * Add the correct font size in all browsers.\\r\\n */\\r\\n\\r\\nsmall {\\r\\n  font-size: 80%;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Prevent `sub` and `sup` elements from affecting the line height in\\r\\n * all browsers.\\r\\n */\\r\\n\\r\\nsub,\\r\\nsup {\\r\\n  font-size: 75%;\\r\\n  line-height: 0;\\r\\n  position: relative;\\r\\n  vertical-align: baseline;\\r\\n}\\r\\n\\r\\nsub {\\r\\n  bottom: -0.25em;\\r\\n}\\r\\n\\r\\nsup {\\r\\n  top: -0.5em;\\r\\n}\\r\\n\\r\\n/* Embedded content\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * Remove the border on images inside links in IE 10.\\r\\n */\\r\\n\\r\\nimg {\\r\\n  border-style: none;\\r\\n}\\r\\n\\r\\n/* Forms\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * 1. Change the font styles in all browsers.\\r\\n * 2. Remove the margin in Firefox and Safari.\\r\\n */\\r\\n\\r\\nbutton,\\r\\ninput,\\r\\noptgroup,\\r\\nselect,\\r\\ntextarea {\\r\\n  font-family: inherit; /* 1 */\\r\\n  font-size: 100%; /* 1 */\\r\\n  line-height: 1.15; /* 1 */\\r\\n  margin: 0; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * Show the overflow in IE.\\r\\n * 1. Show the overflow in Edge.\\r\\n */\\r\\n\\r\\nbutton,\\r\\ninput {\\r\\n  /* 1 */\\r\\n  overflow: visible;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\r\\n * 1. Remove the inheritance of text transform in Firefox.\\r\\n */\\r\\n\\r\\nbutton,\\r\\nselect {\\r\\n  /* 1 */\\r\\n  text-transform: none;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Correct the inability to style clickable types in iOS and Safari.\\r\\n */\\r\\n\\r\\nbutton,\\r\\n[type=\\\"button\\\"],\\r\\n[type=\\\"reset\\\"],\\r\\n[type=\\\"submit\\\"] {\\r\\n  -webkit-appearance: button;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Remove the inner border and padding in Firefox.\\r\\n */\\r\\n\\r\\nbutton::-moz-focus-inner,\\r\\n[type=\\\"button\\\"]::-moz-focus-inner,\\r\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\r\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\r\\n  border-style: none;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Restore the focus styles unset by the previous rule.\\r\\n */\\r\\n\\r\\nbutton:-moz-focusring,\\r\\n[type=\\\"button\\\"]:-moz-focusring,\\r\\n[type=\\\"reset\\\"]:-moz-focusring,\\r\\n[type=\\\"submit\\\"]:-moz-focusring {\\r\\n  outline: 1px dotted ButtonText;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Correct the padding in Firefox.\\r\\n */\\r\\n\\r\\nfieldset {\\r\\n  padding: 0.35em 0.75em 0.625em;\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Correct the text wrapping in Edge and IE.\\r\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\r\\n * 3. Remove the padding so developers are not caught out when they zero out\\r\\n *    `fieldset` elements in all browsers.\\r\\n */\\r\\n\\r\\nlegend {\\r\\n  box-sizing: border-box; /* 1 */\\r\\n  color: inherit; /* 2 */\\r\\n  display: table; /* 1 */\\r\\n  max-width: 100%; /* 1 */\\r\\n  padding: 0; /* 3 */\\r\\n  white-space: normal; /* 1 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\r\\n */\\r\\n\\r\\nprogress {\\r\\n  vertical-align: baseline;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Remove the default vertical scrollbar in IE 10+.\\r\\n */\\r\\n\\r\\ntextarea {\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Add the correct box sizing in IE 10.\\r\\n * 2. Remove the padding in IE 10.\\r\\n */\\r\\n\\r\\n[type=\\\"checkbox\\\"],\\r\\n[type=\\\"radio\\\"] {\\r\\n  box-sizing: border-box; /* 1 */\\r\\n  padding: 0; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\r\\n */\\r\\n\\r\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\r\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Correct the odd appearance in Chrome and Safari.\\r\\n * 2. Correct the outline style in Safari.\\r\\n */\\r\\n\\r\\n[type=\\\"search\\\"] {\\r\\n  -webkit-appearance: textfield; /* 1 */\\r\\n  outline-offset: -2px; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n * Remove the inner padding in Chrome and Safari on macOS.\\r\\n */\\r\\n\\r\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\r\\n  -webkit-appearance: none;\\r\\n}\\r\\n\\r\\n/**\\r\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\r\\n * 2. Change font properties to `inherit` in Safari.\\r\\n */\\r\\n\\r\\n::-webkit-file-upload-button {\\r\\n  -webkit-appearance: button; /* 1 */\\r\\n  font: inherit; /* 2 */\\r\\n}\\r\\n\\r\\n/* Interactive\\r\\n   ========================================================================== */\\r\\n\\r\\n/*\\r\\n * Add the correct display in Edge, IE 10+, and Firefox.\\r\\n */\\r\\n\\r\\ndetails {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n/*\\r\\n * Add the correct display in all browsers.\\r\\n */\\r\\n\\r\\nsummary {\\r\\n  display: list-item;\\r\\n}\\r\\n\\r\\n/* Misc\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * Add the correct display in IE 10+.\\r\\n */\\r\\n\\r\\ntemplate {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/**\\r\\n * Add the correct display in IE 10.\\r\\n */\\r\\n\\r\\n[hidden] {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./css/normalize.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./css/style.css":
/*!**************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/style.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./fonts.css */ \"../node_modules/css-loader/dist/cjs.js!./css/fonts.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ \"../node_modules/css-loader/dist/cjs.js!./css/normalize.css\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/eye.png */ \"./img/eye.png\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../img/phone.png */ \"./img/phone.png\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../img/point.png */ \"./img/point.png\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../img/social.png */ \"./img/social.png\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../img/butter.png */ \"./img/butter.png\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../img/close.png */ \"./img/close.png\");\nvar ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ../img/layer-main-block.png */ \"./img/layer-main-block.png\");\nvar ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ../img/middle_1.png */ \"./img/middle_1.png\");\nvar ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ../img/middle_2.png */ \"./img/middle_2.png\");\nvar ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! ../img/watch.png */ \"./img/watch.png\");\nvar ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! ../img/read.png */ \"./img/read.png\");\nvar ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(/*! ../img/arrow_down.png */ \"./img/arrow_down.png\");\nvar ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(/*! ../img/digest-img-1.png */ \"./img/digest-img-1.png\");\nvar ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(/*! ../img/digest-img-2.png */ \"./img/digest-img-2.png\");\nvar ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(/*! ../img/digest-img-3.png */ \"./img/digest-img-3.png\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___);\n// Module\nexports.push([module.i, \"* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\nbody {\\r\\n  background-color: white;\\r\\n  font-family: \\\"Gilroy\\\";\\r\\n}\\r\\na {\\r\\n  color: #066ec0;\\r\\n  text-decoration: none;\\r\\n}\\r\\nul {\\r\\n  list-style-type: none;\\r\\n  background: white;\\r\\n}\\r\\nli {\\r\\n  list-style-type: none;\\r\\n}\\r\\ni {\\r\\n  color: #00c78c;\\r\\n}\\r\\n.q {\\r\\n  quotes: \\\"\\\\00ab\\\"\\\"\\\\00bb\\\";\\r\\n}\\r\\n.black {\\r\\n  color: black;\\r\\n}\\r\\n.green {\\r\\n  color: #00c78c;\\r\\n}\\r\\n.blue {\\r\\n  color: #0072c0;\\r\\n}\\r\\n.white {\\r\\n  color: #ffffff;\\r\\n}\\r\\n.container {\\r\\n  margin-right: auto;\\r\\n  margin-left: auto;\\r\\n  max-width: 1245px;\\r\\n  padding-right: 10px;\\r\\n  padding-left: 10px;\\r\\n}\\r\\n.header__top {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n.header__link {\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  flex-grow: 1;\\r\\n}\\r\\n.header__link.header__link_indentation-left {\\r\\n  justify-content: flex-start;\\r\\n  padding: 0 0 0 30px;\\r\\n}\\r\\n.header__link.header__link_more-size {\\r\\n  flex-grow: 2.5;\\r\\n}\\r\\n.header__link.header__link_indentation-right {\\r\\n  padding: 0 30px 0 0;\\r\\n}\\r\\n.header-eye:after {\\r\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  margin-left: 15px;\\r\\n}\\r\\n.header__bottom {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-around;\\r\\n  border-radius: 10px;\\r\\n  background-color: rgb(255, 255, 255);\\r\\n  box-shadow: 4px 6.928px 35px 0px rgb(217, 229, 237);\\r\\n  height: 180px;\\r\\n}\\r\\n.header__title {\\r\\n  font-size: 2.4rem;\\r\\n  font-weight: 700;\\r\\n  width: 408px;\\r\\n  letter-spacing: -0.04em;\\r\\n  line-height: 0.9em;\\r\\n  margin-left: 12px;\\r\\n}\\r\\n.header__logo {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n.header__hot-line {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  line-height: 1.1em;\\r\\n}\\r\\n.header__text {\\r\\n  font-size: 16px;\\r\\n  font-weight: 400;\\r\\n}\\r\\n.header__number {\\r\\n  margin: 0 0 0 -28px;\\r\\n}\\r\\n.header__phone {\\r\\n  font-weight: bold;\\r\\n  font-size: 23px;\\r\\n  letter-spacing: 1px;\\r\\n}\\r\\n.header__phone:before {\\r\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  margin-right: 9px;\\r\\n}\\r\\n.header__address {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n.header__index-text {\\r\\n  font-size: 16px;\\r\\n  font-weight: 400;\\r\\n}\\r\\n.header__point {\\r\\n  font-size: 16px;\\r\\n  font-weight: 400;\\r\\n}\\r\\n.header__point:before {\\r\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n  margin-right: 7px;\\r\\n}\\r\\n.header__reference {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  height: 75px;\\r\\n}\\r\\n.btn {\\r\\n  background: none;\\r\\n  border: none;\\r\\n  position: relative;\\r\\n  cursor: pointer;\\r\\n  outline: none;\\r\\n}\\r\\n.header__btn {\\r\\n  z-index: 2;\\r\\n}\\r\\n.header__btn:after {\\r\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\r\\n}\\r\\n.header__social-links {\\r\\n  display: none;\\r\\n  justify-content: start;\\r\\n  align-items: center;\\r\\n  border-radius: 10px;\\r\\n  background-color: rgb(255, 255, 255);\\r\\n  box-shadow: 4px 6.928px 35px 0px rgb(217, 229, 237);\\r\\n  position: absolute;\\r\\n  width: 299px;\\r\\n  height: 44px;\\r\\n  right: 280px;\\r\\n  top: 92px;\\r\\n  padding-left: 14px;\\r\\n  z-index: 1;\\r\\n}\\r\\n.header__social-links.active {\\r\\n  display: flex;\\r\\n}\\r\\n.header__social-item {\\r\\n  padding: 0 18px 0 3px;\\r\\n  font-family: FontAwesome;\\r\\n  font-size: 16px;\\r\\n}\\r\\n.header__social-item.vk:before {\\r\\n  content: \\\"\\\\f189\\\";\\r\\n}\\r\\n.header__social-item.ok:before {\\r\\n  content: \\\"\\\\f263\\\";\\r\\n}\\r\\n.header__social-item.inst:before {\\r\\n  content: \\\"\\\\f16d\\\";\\r\\n}\\r\\n.header__social-item.fb:before {\\r\\n  content: \\\"\\\\f39e\\\";\\r\\n}\\r\\n.header__map-site {\\r\\n  display: flex;\\r\\n}\\r\\n.header__butter {\\r\\n  z-index: 4;\\r\\n}\\r\\n.header__butter:before {\\r\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\r\\n}\\r\\n.header__map-menu {\\r\\n  position: absolute;\\r\\n  display: none;\\r\\n  z-index: 3;\\r\\n}\\r\\n.header__map-menu.active {\\r\\n  display: flex;\\r\\n}\\r\\n.header__main-menu {\\r\\n  display: flex;\\r\\n  align-items: end;\\r\\n  text-align: center;\\r\\n  justify-content: space-evenly;\\r\\n  font-weight: 400;\\r\\n  font-size: 20px;\\r\\n  margin-top: 15px;\\r\\n}\\r\\n.header__menu-items {\\r\\n  display: contents;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n.header__link-item {\\r\\n  display: flex;\\r\\n  position: relative;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  border: 1px solid;\\r\\n  border-radius: 5px;\\r\\n  border-color: transparent;\\r\\n  padding: 8px 15px 8px 15px;\\r\\n  margin: -8px -15px -8px -15px;\\r\\n}\\r\\n.header__link-item:hover {\\r\\n  border: 1px solid #00c78c;\\r\\n}\\r\\n.header__submenu {\\r\\n  display: none;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n  justify-content: space-between;\\r\\n  position: absolute;\\r\\n  border: 1px solid transparent;\\r\\n  border-top: 3px solid #00c78c;\\r\\n  border-radius: 5px;\\r\\n  background: #ffffff;\\r\\n  padding: 0;\\r\\n  top: 105%;\\r\\n  text-align: left;\\r\\n  min-width: 100%;\\r\\n}\\r\\n.header__menu-items li:hover > .header__submenu {\\r\\n  display: block;\\r\\n}\\r\\n.header__submenu > li {\\r\\n  width: 100%;\\r\\n  padding-top: 10px;\\r\\n  padding-bottom: 10px;\\r\\n  margin-left: 0;\\r\\n}\\r\\n.header__submenu > li:hover {\\r\\n  background-color: rgb(218, 223, 226);\\r\\n}\\r\\n.to__right {\\r\\n  border-top: transparent;\\r\\n  top: 26.3%;\\r\\n  left: 100%;\\r\\n}\\r\\n.fas {\\r\\n  font-family: \\\"FontAwesome\\\";\\r\\n  padding-left: 5px;\\r\\n}\\r\\n.header__form-search {\\r\\n  position: relative;\\r\\n}\\r\\n.header__search-btn {\\r\\n  position: absolute;\\r\\n  z-index: 6;\\r\\n}\\r\\n.header__search-btn:before {\\r\\n  content: \\\"\\\\f002\\\";\\r\\n  font-family: FontAwesome;\\r\\n  font-size: 18px;\\r\\n  color: rgb(0, 0, 0);\\r\\n}\\r\\n.header__input-search {\\r\\n  display: none;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  border-radius: 10px;\\r\\n  background-color: rgb(255, 255, 255);\\r\\n  box-shadow: 4px 6.928px 35px 0px rgb(217, 229, 237);\\r\\n  transition: 0.4s cubic-bezier(0, 0.8, 0, 1);\\r\\n  position: absolute;\\r\\n  width: 1208px;\\r\\n  height: 37px;\\r\\n  left: -1185px;\\r\\n  top: -7px;\\r\\n  z-index: 5;\\r\\n  padding-left: 30px;\\r\\n}\\r\\n.header__input-search:after {\\r\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\r\\n}\\r\\n.header__input-search.active {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.main-box {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin-top: 23px;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n.left-boxs {\\r\\n  border-radius: 10px;\\r\\n\\r\\n  background-image: linear-gradient(rgba(0, 47, 199, 0) 0%, rgba(0, 47, 199, 0.5) 100%),\\r\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \");\\r\\n  background-size: cover;\\r\\n  width: 75%;\\r\\n  height: 735px;\\r\\n}\\r\\n\\r\\n.left-1 {\\r\\n  font-size: 23px;\\r\\n  color: rgb(255, 255, 255);\\r\\n  position: absolute;\\r\\n  margin: 521px 0 0 45px;\\r\\n  font-weight: bold;\\r\\n  letter-spacing: 0.58px;\\r\\n}\\r\\n.left-2 {\\r\\n  font-size: 40px;\\r\\n  color: rgb(255, 255, 255);\\r\\n  font-weight: 600;\\r\\n  line-height: 1.125;\\r\\n  position: absolute;\\r\\n  margin: 565px 0 0 43px;\\r\\n  width: 808px;\\r\\n  letter-spacing: 0.135px;\\r\\n}\\r\\n.right-boxs {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  align-items: stretch;\\r\\n}\\r\\n.right-text_l {\\r\\n  padding: 5px 0 0 28px;\\r\\n  font-size: 20px;\\r\\n  line-height: 1.5;\\r\\n  letter-spacing: 0.4px;\\r\\n}\\r\\n.box-r {\\r\\n  border-radius: 10px;\\r\\n  width: 300px;\\r\\n  height: 181px;\\r\\n}\\r\\n.box-r.green {\\r\\n  background-image: linear-gradient(\\r\\n    360deg,\\r\\n    rgb(0, 183, 185) 0%,\\r\\n    rgba(0, 183, 185, 0) 100%\\r\\n  );\\r\\n  color: rgb(255, 255, 255);\\r\\n}\\r\\n.box-r.blue {\\r\\n  background-image: linear-gradient(\\r\\n    360deg,\\r\\n    rgb(154, 0, 199) 0%,\\r\\n    rgba(154, 0, 199, 0) 100%\\r\\n  );\\r\\n  color: rgb(255, 255, 255);\\r\\n}\\r\\n.box-r.aqua {\\r\\n  background-image: linear-gradient(\\r\\n    360deg,\\r\\n    rgb(0, 114, 192) 0%,\\r\\n    rgba(131, 135, 138, 0) 100%\\r\\n  );\\r\\n  color: rgb(0, 114, 192);\\r\\n}\\r\\n.box-r.white {\\r\\n  border-width: 1px;\\r\\n  border-color: rgb(0, 0, 0);\\r\\n  border-style: dashed;\\r\\n  background-color: rgb(255, 255, 255);\\r\\n  color: black;\\r\\n}\\r\\n.right-time {\\r\\n  font-size: 14px;\\r\\n  padding: 16px 11px 0 29px;\\r\\n  line-height: 2.12;\\r\\n  letter-spacing: 1.125;\\r\\n}\\r\\n.right-num {\\r\\n  position: absolute;\\r\\n  margin: -16px 0px 0px 28px;\\r\\n  font-size: 24px;\\r\\n  letter-spacing: 0.38;\\r\\n}\\r\\n.all-num {\\r\\n  color: rgb(0, 199, 140);\\r\\n  padding: 28px 0 0 54px;\\r\\n  font-size: 19px;\\r\\n}\\r\\n.cursor-left_:before {\\r\\n  content: \\\"\\\\f060\\\";\\r\\n  font-family: FontAwesome;\\r\\n}\\r\\n.cursor-left.main {\\r\\n  position: absolute;\\r\\n  margin: -37px 0px 0 28px;\\r\\n  font-size: 18px;\\r\\n  color: rgb(0, 199, 140);\\r\\n}\\r\\n.news {\\r\\n  position: relative;\\r\\n}\\r\\n.middle-items {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n.headline-top {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.headline {\\r\\n  font-size: 43px;\\r\\n  font-family: \\\"Gilroy\\\";\\r\\n  line-height: 1.111;\\r\\n}\\r\\n.headline.blue {\\r\\n  color: rgb(0, 114, 192);\\r\\n}\\r\\n.archive {\\r\\n  position: absolute;\\r\\n  right: 0%;\\r\\n  font-size: 20px;\\r\\n  font-weight: 500;\\r\\n}\\r\\n.news__middle {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n.news__middle__box {\\r\\n  border-radius: 10px;\\r\\n  width: 49.5%;\\r\\n  height: 375px;\\r\\n  font-size: 24px;\\r\\n  color: rgb(0, 0, 0);\\r\\n  line-height: 1.25;\\r\\n  font-weight: bold;\\r\\n}\\r\\n.news__middle__box.box_left {\\r\\n  background-image: linear-gradient(\\r\\n      360deg,\\r\\n      rgba(232, 245, 255, 0) 0%,\\r\\n      rgba(232, 245, 255, 0.9) 100%\\r\\n    ),\\r\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \");\\r\\n  background-size: cover;\\r\\n}\\r\\n.news__middle__box.box_right {\\r\\n  background-image: linear-gradient(\\r\\n      360deg,\\r\\n      rgba(232, 245, 255, 0) 0%,\\r\\n      rgba(232, 245, 255, 0.9) 100%\\r\\n    ),\\r\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \");\\r\\n  background-size: cover;\\r\\n}\\r\\n.news__middle__box-text.left,\\r\\n.news__middle__box-text.right {\\r\\n  position: absolute;\\r\\n  width: 42%;\\r\\n  font-weight: bold;\\r\\n}\\r\\n.news__middle__box-text.right {\\r\\n  padding: 46px 0 0 50px;\\r\\n}\\r\\n.news__middle__box-text.left {\\r\\n  padding: 45px 0 0 45px;\\r\\n}\\r\\n.news__middle__ico {\\r\\n  position: absolute;\\r\\n  padding: 33px 0 0 540px;\\r\\n}\\r\\n.link_reverse {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  position: absolute;\\r\\n  border-radius: 5px;\\r\\n  font-weight: 700;\\r\\n  width: 14%;\\r\\n  height: 44px;\\r\\n  color: white;\\r\\n}\\r\\n.link_reverse.pos {\\r\\n  margin: 288px 0 0 46px;\\r\\n}\\r\\n.link_reverse.green {\\r\\n  background: #00c396;\\r\\n}\\r\\n.link_reverse.blue {\\r\\n  background: #056ec0;\\r\\n}\\r\\n.time {\\r\\n  font-size: 15px;\\r\\n}\\r\\n.time.position {\\r\\n  position: absolute;\\r\\n  padding: 34px 0 0 46px;\\r\\n}\\r\\n.news__middle__ico.watch:before {\\r\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \");\\r\\n}\\r\\n.news__middle__ico.read:before {\\r\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \");\\r\\n}\\r\\n.news__bottom {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: flex-end;\\r\\n  height: 226px;\\r\\n}\\r\\n.news__bottom-box {\\r\\n  width: 50%;\\r\\n  display: flex;\\r\\n}\\r\\n.news__bottom-box.item {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  width: 24.3%;\\r\\n  height: 199px;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n.news__bottom-box.second {\\r\\n  width: 56%;\\r\\n  margin-left: 16px;\\r\\n}\\r\\n.img__new-bottom {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n.p-text_style {\\r\\n  font-size: 20px;\\r\\n  line-height: 1.5;\\r\\n  font-weight: bold;\\r\\n}\\r\\n.smoke {\\r\\n  color: rgb(156, 174, 188);\\r\\n}\\r\\n.btn-link {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  border: 1px solid;\\r\\n  border-radius: 5px;\\r\\n  background-color: rgb(255, 255, 255);\\r\\n  width: 133px;\\r\\n  height: 43px;\\r\\n  font-weight: bold;\\r\\n  font-size: 18px;\\r\\n}\\r\\n.btn-link.blue {\\r\\n  color: rgb(0, 114, 192);\\r\\n  border-color: rgb(0, 114, 192);\\r\\n}\\r\\n.btn-link.green {\\r\\n  border-color: rgb(0, 199, 140);\\r\\n  color: rgb(0, 199, 140);\\r\\n}\\r\\n.nav-middle {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  position: relative;\\r\\n  border: 0.2rem dashed #000000;\\r\\n  border-radius: 10px;\\r\\n  margin-top: 6rem;\\r\\n  height: 228px;\\r\\n  width: 100%;\\r\\n}\\r\\n.btn-list {\\r\\n  display: flex;\\r\\n  position: absolute;\\r\\n  background: white;\\r\\n  top: -14px;\\r\\n  left: 50px;\\r\\n}\\r\\n.nav-middle__btn {\\r\\n  border: none;\\r\\n  background-color: white;\\r\\n  font-size: 1.12em;\\r\\n  font-weight: bold;\\r\\n  color: rgb(0, 114, 192);\\r\\n  margin-left: 5%;\\r\\n  cursor: pointer;\\r\\n  outline: none;\\r\\n}\\r\\n.nav-middle__btn.active {\\r\\n  color: rgb(156, 174, 188);\\r\\n  display: flex;\\r\\n  align-items: flex-end;\\r\\n  justify-content: center;\\r\\n}\\r\\n.nav-middle__btn.active:before {\\r\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \");\\r\\n  position: absolute;\\r\\n  top: 100%;\\r\\n}\\r\\n.nav-middle__list {\\r\\n  display: flex;\\r\\n  height: inherit;\\r\\n}\\r\\n.list {\\r\\n  display: none;\\r\\n}\\r\\n.list.list_active {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  flex-wrap: wrap;\\r\\n  width: 100%;\\r\\n}\\r\\n.nav-middle__list ul > li {\\r\\n  font-size: 1.3rem;\\r\\n  flex-grow: 1;\\r\\n  min-height: 95px;\\r\\n  padding-top: 3%;\\r\\n  font-weight: 500;\\r\\n}\\r\\n.nav-middle__list ul li > a {\\r\\n  color: #000000;\\r\\n}\\r\\n.relevant {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  position: relative;\\r\\n}\\r\\n.relevant__top {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n.arrow {\\r\\n  color: rgb(188, 205, 218);\\r\\n  font-size: 33px;\\r\\n}\\r\\n.arrow.box {\\r\\n  border: 1px solid rgb(188, 205, 218);\\r\\n  background-color: rgb(255, 255, 255);\\r\\n  width: 43px;\\r\\n  height: 43px;\\r\\n  outline: none;\\r\\n  cursor: pointer;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n.arrow.left:before {\\r\\n  content: \\\"\\\\f104\\\";\\r\\n  font-family: FontAwesome;\\r\\n}\\r\\n.arrow.right:before {\\r\\n  content: \\\"\\\\f105\\\";\\r\\n  font-family: FontAwesome;\\r\\n}\\r\\n.relevant__bottom {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n.relevant__bottom__box {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  border-radius: 10px;\\r\\n  background-color: rgb(232, 245, 255);\\r\\n  text-align: center;\\r\\n  padding-top: 50px;\\r\\n  padding-bottom: 50px;\\r\\n  width: 404px;\\r\\n}\\r\\n.text {\\r\\n  font-size: 20px;\\r\\n  font-family: \\\"Gilroy\\\";\\r\\n  line-height: 1.5;\\r\\n  font-weight: 500;\\r\\n}\\r\\n.text.relevant {\\r\\n  text-align: center;\\r\\n  margin-bottom: auto;\\r\\n}\\r\\n.link_big {\\r\\n  font-size: 20px;\\r\\n  border-radius: 5px;\\r\\n  background-color: rgb(255, 255, 255);\\r\\n  width: 315px;\\r\\n  height: 45px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  font-weight: 500;\\r\\n}\\r\\n.digest-main {\\r\\n  position: relative;\\r\\n  border-bottom: 2px dotted black;\\r\\n  padding-bottom: 6%;\\r\\n}\\r\\n.digest__box {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n.box-img {\\r\\n  height: 255px;\\r\\n  border-radius: 10px;\\r\\n  background-size: cover;\\r\\n}\\r\\n.box-img.digest-one {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \");\\r\\n}\\r\\n.box-img.digest-two {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_13___ + \");\\r\\n}\\r\\n.box-img.digest-three {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_14___ + \");\\r\\n}\\r\\n.digest__box.item {\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  width: 32.3%;\\r\\n}\\r\\n.time.digest {\\r\\n  padding: 7px;\\r\\n}\\r\\n.text.digest {\\r\\n  margin-bottom: auto;\\r\\n}\\r\\n.btn-link.digest {\\r\\n  margin-top: 6%;\\r\\n}\\r\\n\\r\\n/* .public {\\r\\n  position: relative;\\r\\n  border-bottom: 2px dotted black;\\r\\n  padding-bottom: 6%;\\r\\n}\\r\\n.public__box {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n.public__box-item {\\r\\n  display: flex;\\r\\n  width: 50%;\\r\\n}\\r\\n.public__box-item.vertical {\\r\\n  flex-direction: column;\\r\\n}\\r\\n.box-img.public-one {\\r\\n  background-image: url(../img/public-img-1.png);\\r\\n}\\r\\n.box-img.public-two {\\r\\n  background-image: url(../img/public-img-2.png);\\r\\n}\\r\\n.box-img.public-three {\\r\\n  background-image: url(../img/public-img-3.png);\\r\\n}\\r\\n.pub-box_style {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 70%;\\r\\n}\\r\\n */\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./css/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./fonts/Gilroy-Bold.otf":
/*!*******************************!*\
  !*** ./fonts/Gilroy-Bold.otf ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"26e59eb7761ea9f4e60f39f54cd52dd6.otf\");\n\n//# sourceURL=webpack:///./fonts/Gilroy-Bold.otf?");

/***/ }),

/***/ "./fonts/Gilroy-Extrabold.otf":
/*!************************************!*\
  !*** ./fonts/Gilroy-Extrabold.otf ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"af427ae84b09ef1fdb214dc3899141d4.otf\");\n\n//# sourceURL=webpack:///./fonts/Gilroy-Extrabold.otf?");

/***/ }),

/***/ "./fonts/Gilroy-Medium.otf":
/*!*********************************!*\
  !*** ./fonts/Gilroy-Medium.otf ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"59799af8723d1858833d925f070b6ac1.otf\");\n\n//# sourceURL=webpack:///./fonts/Gilroy-Medium.otf?");

/***/ }),

/***/ "./fonts/Gilroy-Regular.otf":
/*!**********************************!*\
  !*** ./fonts/Gilroy-Regular.otf ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f7f5960c33f8ccf7b92c2653c23fcd44.otf\");\n\n//# sourceURL=webpack:///./fonts/Gilroy-Regular.otf?");

/***/ }),

/***/ "./fonts/Gilroy-Semibold.otf":
/*!***********************************!*\
  !*** ./fonts/Gilroy-Semibold.otf ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4b11ebb0c738401c499c8333da9e4596.otf\");\n\n//# sourceURL=webpack:///./fonts/Gilroy-Semibold.otf?");

/***/ }),

/***/ "./img/arrow_down.png":
/*!****************************!*\
  !*** ./img/arrow_down.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b93845637836fa8730f09c17dd29f50f.png\");\n\n//# sourceURL=webpack:///./img/arrow_down.png?");

/***/ }),

/***/ "./img/butter.png":
/*!************************!*\
  !*** ./img/butter.png ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"5b48a07487c56d5ed9d14886d5d026c4.png\");\n\n//# sourceURL=webpack:///./img/butter.png?");

/***/ }),

/***/ "./img/close.png":
/*!***********************!*\
  !*** ./img/close.png ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fb81c7d61abeb99a4fa7099876be86fb.png\");\n\n//# sourceURL=webpack:///./img/close.png?");

/***/ }),

/***/ "./img/digest-img-1.png":
/*!******************************!*\
  !*** ./img/digest-img-1.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e7f760a0d134c75dc5463fa61c528584.png\");\n\n//# sourceURL=webpack:///./img/digest-img-1.png?");

/***/ }),

/***/ "./img/digest-img-2.png":
/*!******************************!*\
  !*** ./img/digest-img-2.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"87d95a97468f7757b4324744da4e9731.png\");\n\n//# sourceURL=webpack:///./img/digest-img-2.png?");

/***/ }),

/***/ "./img/digest-img-3.png":
/*!******************************!*\
  !*** ./img/digest-img-3.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"af81e645dc9c6bf675b24ad0cc56ac15.png\");\n\n//# sourceURL=webpack:///./img/digest-img-3.png?");

/***/ }),

/***/ "./img/eye.png":
/*!*********************!*\
  !*** ./img/eye.png ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"dde9418b4ff202e345641688a8ee5d4a.png\");\n\n//# sourceURL=webpack:///./img/eye.png?");

/***/ }),

/***/ "./img/layer-main-block.png":
/*!**********************************!*\
  !*** ./img/layer-main-block.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ccaa339c569369400c344d713c1c5eb9.png\");\n\n//# sourceURL=webpack:///./img/layer-main-block.png?");

/***/ }),

/***/ "./img/logo.png":
/*!**********************!*\
  !*** ./img/logo.png ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"bf7649fd932dd4c738e35f5179660406.png\");\n\n//# sourceURL=webpack:///./img/logo.png?");

/***/ }),

/***/ "./img/middle_1.png":
/*!**************************!*\
  !*** ./img/middle_1.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1a030360711cf5b5b795cfb1fdfa1641.png\");\n\n//# sourceURL=webpack:///./img/middle_1.png?");

/***/ }),

/***/ "./img/middle_2.png":
/*!**************************!*\
  !*** ./img/middle_2.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"80b6a3b433ada5391d1cd01cd9561a72.png\");\n\n//# sourceURL=webpack:///./img/middle_2.png?");

/***/ }),

/***/ "./img/phone.png":
/*!***********************!*\
  !*** ./img/phone.png ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7da04c223c687f0c737bad9657ca4ef5.png\");\n\n//# sourceURL=webpack:///./img/phone.png?");

/***/ }),

/***/ "./img/point.png":
/*!***********************!*\
  !*** ./img/point.png ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f3956e07f65d685b2ab234a3ae6cf200.png\");\n\n//# sourceURL=webpack:///./img/point.png?");

/***/ }),

/***/ "./img/read.png":
/*!**********************!*\
  !*** ./img/read.png ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b1106834bc84124709eccde695009e8d.png\");\n\n//# sourceURL=webpack:///./img/read.png?");

/***/ }),

/***/ "./img/social.png":
/*!************************!*\
  !*** ./img/social.png ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2b24a6fd45adc8e8dc514b8e209d7dbe.png\");\n\n//# sourceURL=webpack:///./img/social.png?");

/***/ }),

/***/ "./img/watch.png":
/*!***********************!*\
  !*** ./img/watch.png ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"5c565af582c24c63daa09f4e97f477cc.png\");\n\n//# sourceURL=webpack:///./img/watch.png?");

/***/ }),

/***/ "./path/to/index.js":
/*!**************************!*\
  !*** ./path/to/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/logo.png */ \"./img/logo.png\");\n\r\n\r\n\r\ndocument.getElementById(\"headerSocialBtn\").onclick = function () {\r\n  updateState(\"headerSocialLinks\");\r\n};\r\ndocument.getElementById(\"headerMapBtn\").onclick = function () {\r\n  updateState(\"headerMapMenu\");\r\n};\r\ndocument.getElementById(\"headerSearchBtn\").onclick = function () {\r\n  updateState(\"headerSearchPlace\");\r\n};\r\nfunction updateState(id) {\r\n  let elem = document.getElementById(id);\r\n\r\n  if (elem.classList.contains(\"active\")) {\r\n    elem.classList.remove(\"active\");\r\n  } else elem.classList.add(\"active\");\r\n}\r\n\r\n/* function menuOpen(id) {\r\n  let n = document.querySelectorAll(\".nav-middle__btn\");\r\n  n.forEach(function (btn) {\r\n    btn.onclick = function () {\r\n      n.forEach(function (btn) {\r\n        btn.classList.remove(\"active\");\r\n      });\r\n      btn.classList.add(\"active\");\r\n    };\r\n  });\r\n}\r\n */\r\n\n\n//# sourceURL=webpack:///./path/to/index.js?");

/***/ })

/******/ });