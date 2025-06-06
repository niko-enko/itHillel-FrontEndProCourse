/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/api.js":
/*!************************!*\
  !*** ./src/api/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadComments: () => (/* binding */ loadComments),\n/* harmony export */   loadPosts: () => (/* binding */ loadPosts),\n/* harmony export */   uploadPost: () => (/* binding */ uploadPost)\n/* harmony export */ });\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config.js */ \"./src/config/config.js\");\n\nconst request = async (url, init) => {\n  try {\n    const response = await fetch(url, init);\n    if (!response.ok) {\n      throw new Error(`API response error. Code: ${response.status}.`);\n    }\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n    return [];\n  }\n};\nconst loadPosts = async () => {\n  const url = `${_config_config_js__WEBPACK_IMPORTED_MODULE_0__.API_URL}/${_config_config_js__WEBPACK_IMPORTED_MODULE_0__.PATH.posts}?${_config_config_js__WEBPACK_IMPORTED_MODULE_0__.QUERIES.limit}=10`;\n  const requestParams = {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json, charset=UTF-8'\n    }\n  };\n  const response = await request(url, requestParams);\n  if (!response.length) {\n    return;\n  }\n  return response;\n};\nconst loadComments = async postId => {\n  const id = postId.split('-')[1];\n  const url = `${_config_config_js__WEBPACK_IMPORTED_MODULE_0__.API_URL}/${_config_config_js__WEBPACK_IMPORTED_MODULE_0__.PATH.posts}/${id}/${_config_config_js__WEBPACK_IMPORTED_MODULE_0__.PATH.comments}?${_config_config_js__WEBPACK_IMPORTED_MODULE_0__.QUERIES.limit}=2`;\n  const requestParams = {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json, charset=UTF-8'\n    }\n  };\n  const response = await request(url, requestParams);\n  if (!response.length) {\n    return;\n  }\n  return response;\n};\nconst uploadPost = async postData => {\n  const url = `${_config_config_js__WEBPACK_IMPORTED_MODULE_0__.API_URL}/${_config_config_js__WEBPACK_IMPORTED_MODULE_0__.PATH.posts}`;\n  const requestParams = {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json, charset=UTF-8'\n    },\n    body: JSON.stringify(postData)\n  };\n  return await request(url, requestParams);\n};\n\n//# sourceURL=webpack://ithillel-frontendprocourse/./src/api/api.js?");

/***/ }),

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_URL: () => (/* binding */ API_URL),\n/* harmony export */   PATH: () => (/* binding */ PATH),\n/* harmony export */   QUERIES: () => (/* binding */ QUERIES)\n/* harmony export */ });\nconst API_URL = 'https://jsonplaceholder.typicode.com/';\nconst QUERIES = {\n  limit: `_limit`\n};\nconst PATH = {\n  posts: 'posts',\n  comments: 'comments'\n};\n\n//# sourceURL=webpack://ithillel-frontendprocourse/./src/config/config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/ui.js */ \"./src/js/ui.js\");\n/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/api.js */ \"./src/api/api.js\");\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/style.scss */ \"./src/style/style.scss\");\n\n\n\nconst addPostForm = document.querySelector('#form');\nconst postsList = document.querySelector('.posts-list');\npostsList.addEventListener('click', e => {\n  const targetPostId = e.target.closest('.post').id;\n  (0,_api_api_js__WEBPACK_IMPORTED_MODULE_1__.loadComments)(targetPostId).then(comments => (0,_js_ui_js__WEBPACK_IMPORTED_MODULE_0__.renderComments)(targetPostId, comments));\n});\naddPostForm.addEventListener('submit', e => {\n  e.preventDefault();\n  const formData = new FormData(addPostForm);\n  const newPost = {\n    title: formData.get('title'),\n    body: formData.get('body')\n  };\n  (0,_api_api_js__WEBPACK_IMPORTED_MODULE_1__.uploadPost)(newPost).then(id => (0,_js_ui_js__WEBPACK_IMPORTED_MODULE_0__.renderPosts)({\n    ...id,\n    ...newPost\n  }));\n});\n(0,_api_api_js__WEBPACK_IMPORTED_MODULE_1__.loadPosts)().then(posts => posts.forEach(post => (0,_js_ui_js__WEBPACK_IMPORTED_MODULE_0__.renderPosts)(post)));\n\n//# sourceURL=webpack://ithillel-frontendprocourse/./src/index.js?");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderComments: () => (/* binding */ renderComments),\n/* harmony export */   renderPosts: () => (/* binding */ renderPosts)\n/* harmony export */ });\nconst createErrorBlock = errorText => {\n  const errorBlock = document.createElement('li');\n  errorBlock.classList.add('comments__li');\n  errorBlock.innerText = `${errorText}`;\n  return errorBlock;\n};\nconst createPostBlock = postData => {\n  const postBlock = document.createElement('li');\n  postBlock.classList.add('post');\n  const {\n    title,\n    body,\n    id\n  } = postData;\n  postBlock.id = `post-${id}`;\n  postBlock.innerHTML = `\n        <h2>${title}</h2>\n        <p>${body}</p>\n        <div class=\"post-actions\">\n            <button id=\"load-comments\">Load comments</button>\n        </div>\n    `;\n  return postBlock;\n};\nconst createCommentBlock = commentData => {\n  const commentBlock = document.createElement('li');\n  commentBlock.classList.add('comments__li');\n  const {\n    name,\n    email,\n    body,\n    id\n  } = commentData;\n  commentBlock.id = `comment-${id}`;\n  commentBlock.innerHTML = `\n            <div>\n                <h4>${name}</h4>\n                <span>${email}</span>\n            </div>\n            <p>${body}</p>\n        `;\n  return commentBlock;\n};\nconst renderPosts = postData => {\n  const postsList = document.querySelector('.posts-list');\n  const post = createPostBlock(postData);\n  postsList.appendChild(post);\n};\nconst renderComments = (id, commentsData) => {\n  const post = document.querySelector(`#${id}`);\n  const commentContainer = document.createElement('ul');\n  commentContainer.classList.add('comments');\n  if (!commentsData) {\n    const errorBlock = createErrorBlock('No comments yet');\n    commentContainer.appendChild(errorBlock);\n  } else {\n    commentsData.forEach(comment => {\n      const commentBlock = createCommentBlock(comment);\n      commentContainer.appendChild(commentBlock);\n    });\n  }\n  post.appendChild(commentContainer);\n};\n\n//# sourceURL=webpack://ithillel-frontendprocourse/./src/js/ui.js?");

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ithillel-frontendprocourse/./src/style/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;