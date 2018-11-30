/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("@fortawesome/react-fontawesome");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-intl");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toggleAddPost = toggleAddPost;
	exports.toggleEditPost = toggleEditPost;
	// Export Constants
	var TOGGLE_ADD_POST = exports.TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
	var TOGGLE_EDIT_POST = exports.TOGGLE_EDIT_POST = 'TOGGLE_EDIT_POST';
	// Export Actions
	function toggleAddPost() {
	  return {
	    type: TOGGLE_ADD_POST
	  };
	}
	function toggleEditPost() {
	  return {
	    type: TOGGLE_EDIT_POST
	  };
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getShowEditPost = exports.getShowAddPost = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Import Actions
	
	
	var _AppActions = __webpack_require__(5);
	
	// Initial State
	var initialState = {
	  showAddPost: false,
	  showEditPost: false
	};
	
	var AppReducer = function AppReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  // console.log(state, action);
	  switch (action.type) {
	    case _AppActions.TOGGLE_ADD_POST:
	      return {
	        showAddPost: !state.showAddPost
	      };
	    case _AppActions.TOGGLE_EDIT_POST:
	      return _extends({}, state, {
	        showEditPost: !state.showEditPost
	      });
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get showAddPost
	var getShowAddPost = exports.getShowAddPost = function getShowAddPost(state) {
	  return state.app.showAddPost;
	};
	var getShowEditPost = exports.getShowEditPost = function getShowEditPost(state) {
	  return state.app.showEditPost;
	};
	
	// Export Reducer
	exports.default = AppReducer;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.THUMB_DOWN = exports.THUMB_UP = exports.EDIT_POST = exports.DELETE_POST = exports.ADD_POSTS = exports.ADD_POST = undefined;
	exports.addPost = addPost;
	exports.addPostRequest = addPostRequest;
	exports.addPosts = addPosts;
	exports.fetchPosts = fetchPosts;
	exports.fetchPost = fetchPost;
	exports.deletePost = deletePost;
	exports.deletePostRequest = deletePostRequest;
	exports.editPost = editPost;
	exports.editPostRequest = editPostRequest;
	exports.thumbUp = thumbUp;
	exports.thumbUpRequest = thumbUpRequest;
	exports.thumbDown = thumbDown;
	exports.thumbDownRequest = thumbDownRequest;
	
	var _apiCaller = __webpack_require__(51);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export Constants
	var ADD_POST = exports.ADD_POST = 'ADD_POST';
	var ADD_POSTS = exports.ADD_POSTS = 'ADD_POSTS';
	var DELETE_POST = exports.DELETE_POST = 'DELETE_POST';
	var EDIT_POST = exports.EDIT_POST = 'EDIT_POST';
	var THUMB_UP = exports.THUMB_UP = 'THUMB_UP';
	var THUMB_DOWN = exports.THUMB_DOWN = 'THUMB_DOWN';
	
	// Export Actions
	function addPost(post) {
	  return {
	    type: ADD_POST,
	    post: post
	  };
	}
	
	function addPostRequest(post) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts', 'post', {
	      post: {
	        name: post.name,
	        title: post.title,
	        content: post.content
	      }
	    }).then(function (res) {
	      return dispatch(addPost(res.post));
	    });
	  };
	}
	
	function addPosts(posts) {
	  return {
	    type: ADD_POSTS,
	    posts: posts
	  };
	}
	
	function fetchPosts() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts').then(function (res) {
	      dispatch(addPosts(res.posts));
	    });
	  };
	}
	
	function fetchPost(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid).then(function (res) {
	      return dispatch(addPost(res.post));
	    });
	  };
	}
	
	function deletePost(cuid) {
	  return {
	    type: DELETE_POST,
	    cuid: cuid
	  };
	}
	
	function deletePostRequest(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid, 'delete').then(function () {
	      return dispatch(deletePost(cuid));
	    });
	  };
	}
	
	function editPost(cuid, post) {
	  return {
	    type: EDIT_POST,
	    cuid: cuid,
	    post: post
	  };
	}
	
	function editPostRequest(cuid, post) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid, 'put', {
	      post: { name: post.name,
	        title: post.title,
	        content: post.content
	      }
	    }).then(function () {
	      return dispatch(editPost(cuid, post));
	    });
	  };
	}
	function thumbUp(cuid, votes) {
	  return {
	    type: THUMB_UP,
	    cuid: cuid,
	    votes: votes
	  };
	}
	function thumbUpRequest(cuid, votes) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid, 'put', {
	      post: { votes: votes }
	    }).then(function () {
	      return dispatch(thumbUp(cuid, votes));
	    });
	  };
	}
	
	function thumbDown(cuid, votes) {
	  return {
	    type: THUMB_DOWN,
	    cuid: cuid,
	    votes: votes
	  };
	}
	function thumbDownRequest(cuid, votes) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid, 'put', {
	      post: { votes: votes }
	    }).then(function () {
	      return dispatch(thumbDown(cuid, votes));
	    });
	  };
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPost = exports.getPosts = undefined;
	
	var _PostActions = __webpack_require__(8);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// Initial State
	var initialState = {
	  data: []
	};
	
	var PostReducer = function PostReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _PostActions.ADD_POST:
	      return {
	        data: [action.post].concat(_toConsumableArray(state.data))
	      };
	
	    case _PostActions.ADD_POSTS:
	      return {
	        data: action.posts
	      };
	
	    case _PostActions.DELETE_POST:
	      return {
	        data: state.data.filter(function (post) {
	          return post.cuid !== action.cuid;
	        })
	      };
	
	    case _PostActions.EDIT_POST:
	      return {
	        data: state.data.map(function (post) {
	          return post.cuid === action.cuid ? Object.assign({}, post, action.post) : post;
	        })
	      };
	    case _PostActions.THUMB_UP:
	      return {
	        data: state.data.map(function (post) {
	          return post.cuid === action.cuid ? Object.assign({}, post, { votes: post.votes + 1 }) : post;
	        })
	      };
	    case _PostActions.THUMB_DOWN:
	      return {
	        data: state.data.map(function (post) {
	          return post.cuid === action.cuid ? Object.assign({}, post, { votes: post.votes - 1 }) : post;
	        })
	      };
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get all posts
	var getPosts = exports.getPosts = function getPosts(state) {
	  return state.posts.data;
	};
	
	// Get post by cuid
	var getPost = exports.getPost = function getPost(state, cuid) {
	  return state.posts.data.filter(function (post) {
	    return post.cuid === cuid;
	  })[0];
	};
	
	// Export Reducer
	exports.default = PostReducer;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  mongoURL: process.env.MONGO_URL || 'mongodb://mernuser:mongo123456789@ds161780.mlab.com:61780/mern-blog',
	  port: process.env.PORT || 8000
	};
	
	exports.default = config;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.localizationData = exports.enabledLanguages = undefined;
	
	var _reactIntl = __webpack_require__(3);
	
	var _intl = __webpack_require__(57);
	
	var _intl2 = _interopRequireDefault(_intl);
	
	var _intlLocalesSupported = __webpack_require__(58);
	
	var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);
	
	__webpack_require__(59);
	
	var _en = __webpack_require__(67);
	
	var _en2 = _interopRequireDefault(_en);
	
	var _en3 = __webpack_require__(36);
	
	var _en4 = _interopRequireDefault(_en3);
	
	__webpack_require__(60);
	
	var _fr = __webpack_require__(68);
	
	var _fr2 = _interopRequireDefault(_fr);
	
	var _fr3 = __webpack_require__(37);
	
	var _fr4 = _interopRequireDefault(_fr3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// list of available languages
	var enabledLanguages = exports.enabledLanguages = ['en', 'fr'];
	
	// this object will have language-specific data added to it which will be placed in the state when that language is active
	// if localization data get to big, stop importing in all languages and switch to using API requests to load upon switching languages
	var localizationData = exports.localizationData = {};
	
	// here you bring in 'intl' browser polyfill and language-specific polyfills
	// (needed as safari doesn't have native intl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
	// as well as react-intl's language-specific data
	// be sure to use static imports for language or else every language will be included in your build (adds ~800 kb)
	
	
	// need Intl polyfill, Intl not supported in Safari
	
	
	if (global.Intl) {
	  // Determine if the built-in `Intl` has the locale data we need.
	  if (!(0, _intlLocalesSupported2.default)(enabledLanguages)) {
	    // `Intl` exists, but it doesn't have the data we need, so load the
	    // polyfill and patch the constructors we need with the polyfill's.
	    global.Intl.NumberFormat = _intl2.default.NumberFormat;
	    global.Intl.DateTimeFormat = _intl2.default.DateTimeFormat;
	  }
	} else {
	  // No `Intl`, so use and load the polyfill.
	  global.Intl = _intl2.default;
	}
	
	// use this to allow nested messages, taken from docs:
	// https://github.com/yahoo/react-intl/wiki/Upgrade-Guide#flatten-messages-object
	function flattenMessages() {
	  var nestedMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	  return Object.keys(nestedMessages).reduce(function (messages, key) {
	    var value = nestedMessages[key];
	    var prefixedKey = prefix ? prefix + '.' + key : key;
	
	    if (typeof value === 'string') {
	      messages[prefixedKey] = value; // eslint-disable-line no-param-reassign
	    } else {
	      Object.assign(messages, flattenMessages(value, prefixedKey));
	    }
	
	    return messages;
	  }, {});
	}
	
	// bring in intl polyfill, react-intl, and app-specific language data
	
	(0, _reactIntl.addLocaleData)(_en2.default);
	localizationData.en = _en4.default;
	localizationData.en.messages = flattenMessages(localizationData.en.messages);
	
	(0, _reactIntl.addLocaleData)(_fr2.default);
	localizationData.fr = _fr4.default;
	localizationData.fr.messages = flattenMessages(localizationData.fr.messages);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
	// Import Style
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Carousel = __webpack_require__(41);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _About = {
	  "carousel-caption": "_-KLlRBr3oRRvYKGo5ZtcV",
	  "cards-wrapper": "_3asOVXU3tghrsognS7fAym",
	  "image": "_3SYPz_D3nslrMsMmHONpci",
	  "card": "_8PlWhuC878YGTGWA65R_q",
	  "github-link": "_2dJUX8Z4h6r87EuLrGNgsq",
	  "linkedin-link": "CaOAx2n_RCYpBwZWavBQm",
	  "instagram-link": "_1Fl2NNM1rwMl6SMlDeGQCZ",
	  "github": "_3D5Rjb3Vf2zI7sg0_0Dy7K",
	  "linkedin": "_1_9d8TGar92iY4TlaHKSuj",
	  "instagram": "_1VGFsXh9F9pNCyu3xaQLbL",
	  "socialIcon": "_3PG-73dgDP6ilzH5MW8s2R"
	};
	
	var _About2 = _interopRequireDefault(_About);
	
	var _Card = __webpack_require__(38);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	var _Card3 = __webpack_require__(39);
	
	var _Card4 = _interopRequireDefault(_Card3);
	
	var _Card5 = __webpack_require__(40);
	
	var _Card6 = _interopRequireDefault(_Card5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_Carousel2.default, {});
	
	var _ref2 = _jsx('div', {
	  className: 'container'
	}, void 0, _jsx('div', {
	  className: 'row'
	}, void 0, _jsx('div', {
	  className: 'col-sm'
	}, void 0, _jsx('div', {
	  className: 'card'
	}, void 0, _jsx(_Card2.default, {}))), _jsx('div', {
	  className: 'col-sm'
	}, void 0, _jsx(_Card4.default, {})), _jsx('div', {
	  className: 'col-sm'
	}, void 0, _jsx(_Card6.default, {}))));
	
	var About = function About() {
	  return _jsx('div', {}, void 0, _ref, _jsx('div', {
	    className: _About2.default['cards-wrapper']
	  }, void 0, _ref2));
	};
	
	exports.default = About;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxDevtools = __webpack_require__(69);
	
	var _reduxDevtoolsLogMonitor = __webpack_require__(71);
	
	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);
	
	var _reduxDevtoolsDockMonitor = __webpack_require__(70);
	
	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-w'
	}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	// import { bindActionCreators } from 'redux';
	
	// Import Style
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(1);
	
	var _logo = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NDEuOSA1OTUuMyI+DQogICAgPGcgZmlsbD0iIzYxREFGQiI+DQogICAgICAgIDxwYXRoIGQ9Ik02NjYuMyAyOTYuNWMwLTMyLjUtNDAuNy02My4zLTEwMy4xLTgyLjQgMTQuNC02My42IDgtMTE0LjItMjAuMi0xMzAuNC02LjUtMy44LTE0LjEtNS42LTIyLjQtNS42djIyLjNjNC42IDAgOC4zLjkgMTEuNCAyLjYgMTMuNiA3LjggMTkuNSAzNy41IDE0LjkgNzUuNy0xLjEgOS40LTIuOSAxOS4zLTUuMSAyOS40LTE5LjYtNC44LTQxLTguNS02My41LTEwLjktMTMuNS0xOC41LTI3LjUtMzUuMy00MS42LTUwIDMyLjYtMzAuMyA2My4yLTQ2LjkgODQtNDYuOVY3OGMtMjcuNSAwLTYzLjUgMTkuNi05OS45IDUzLjYtMzYuNC0zMy44LTcyLjQtNTMuMi05OS45LTUzLjJ2MjIuM2MyMC43IDAgNTEuNCAxNi41IDg0IDQ2LjYtMTQgMTQuNy0yOCAzMS40LTQxLjMgNDkuOS0yMi42IDIuNC00NCA2LjEtNjMuNiAxMS0yLjMtMTAtNC0xOS43LTUuMi0yOS00LjctMzguMiAxLjEtNjcuOSAxNC42LTc1LjggMy0xLjggNi45LTIuNiAxMS41LTIuNlY3OC41Yy04LjQgMC0xNiAxLjgtMjIuNiA1LjYtMjguMSAxNi4yLTM0LjQgNjYuNy0xOS45IDEzMC4xLTYyLjIgMTkuMi0xMDIuNyA0OS45LTEwMi43IDgyLjMgMCAzMi41IDQwLjcgNjMuMyAxMDMuMSA4Mi40LTE0LjQgNjMuNi04IDExNC4yIDIwLjIgMTMwLjQgNi41IDMuOCAxNC4xIDUuNiAyMi41IDUuNiAyNy41IDAgNjMuNS0xOS42IDk5LjktNTMuNiAzNi40IDMzLjggNzIuNCA1My4yIDk5LjkgNTMuMiA4LjQgMCAxNi0xLjggMjIuNi01LjYgMjguMS0xNi4yIDM0LjQtNjYuNyAxOS45LTEzMC4xIDYyLTE5LjEgMTAyLjUtNDkuOSAxMDIuNS04Mi4zem0tMTMwLjItNjYuN2MtMy43IDEyLjktOC4zIDI2LjItMTMuNSAzOS41LTQuMS04LTguNC0xNi0xMy4xLTI0LTQuNi04LTkuNS0xNS44LTE0LjQtMjMuNCAxNC4yIDIuMSAyNy45IDQuNyA0MSA3Ljl6bS00NS44IDEwNi41Yy03LjggMTMuNS0xNS44IDI2LjMtMjQuMSAzOC4yLTE0LjkgMS4zLTMwIDItNDUuMiAyLTE1LjEgMC0zMC4yLS43LTQ1LTEuOS04LjMtMTEuOS0xNi40LTI0LjYtMjQuMi0zOC03LjYtMTMuMS0xNC41LTI2LjQtMjAuOC0zOS44IDYuMi0xMy40IDEzLjItMjYuOCAyMC43LTM5LjkgNy44LTEzLjUgMTUuOC0yNi4zIDI0LjEtMzguMiAxNC45LTEuMyAzMC0yIDQ1LjItMiAxNS4xIDAgMzAuMi43IDQ1IDEuOSA4LjMgMTEuOSAxNi40IDI0LjYgMjQuMiAzOCA3LjYgMTMuMSAxNC41IDI2LjQgMjAuOCAzOS44LTYuMyAxMy40LTEzLjIgMjYuOC0yMC43IDM5Ljl6bTMyLjMtMTNjNS40IDEzLjQgMTAgMjYuOCAxMy44IDM5LjgtMTMuMSAzLjItMjYuOSA1LjktNDEuMiA4IDQuOS03LjcgOS44LTE1LjYgMTQuNC0yMy43IDQuNi04IDguOS0xNi4xIDEzLTI0LjF6TTQyMS4yIDQzMGMtOS4zLTkuNi0xOC42LTIwLjMtMjcuOC0zMiA5IC40IDE4LjIuNyAyNy41LjcgOS40IDAgMTguNy0uMiAyNy44LS43LTkgMTEuNy0xOC4zIDIyLjQtMjcuNSAzMnptLTc0LjQtNTguOWMtMTQuMi0yLjEtMjcuOS00LjctNDEtNy45IDMuNy0xMi45IDguMy0yNi4yIDEzLjUtMzkuNSA0LjEgOCA4LjQgMTYgMTMuMSAyNCA0LjcgOCA5LjUgMTUuOCAxNC40IDIzLjR6TTQyMC43IDE2M2M5LjMgOS42IDE4LjYgMjAuMyAyNy44IDMyLTktLjQtMTguMi0uNy0yNy41LS43LTkuNCAwLTE4LjcuMi0yNy44LjcgOS0xMS43IDE4LjMtMjIuNCAyNy41LTMyem0tNzQgNTguOWMtNC45IDcuNy05LjggMTUuNi0xNC40IDIzLjctNC42IDgtOC45IDE2LTEzIDI0LTUuNC0xMy40LTEwLTI2LjgtMTMuOC0zOS44IDEzLjEtMy4xIDI2LjktNS44IDQxLjItNy45em0tOTAuNSAxMjUuMmMtMzUuNC0xNS4xLTU4LjMtMzQuOS01OC4zLTUwLjYgMC0xNS43IDIyLjktMzUuNiA1OC4zLTUwLjYgOC42LTMuNyAxOC03IDI3LjctMTAuMSA1LjcgMTkuNiAxMy4yIDQwIDIyLjUgNjAuOS05LjIgMjAuOC0xNi42IDQxLjEtMjIuMiA2MC42LTkuOS0zLjEtMTkuMy02LjUtMjgtMTAuMnpNMzEwIDQ5MGMtMTMuNi03LjgtMTkuNS0zNy41LTE0LjktNzUuNyAxLjEtOS40IDIuOS0xOS4zIDUuMS0yOS40IDE5LjYgNC44IDQxIDguNSA2My41IDEwLjkgMTMuNSAxOC41IDI3LjUgMzUuMyA0MS42IDUwLTMyLjYgMzAuMy02My4yIDQ2LjktODQgNDYuOS00LjUtLjEtOC4zLTEtMTEuMy0yLjd6bTIzNy4yLTc2LjJjNC43IDM4LjItMS4xIDY3LjktMTQuNiA3NS44LTMgMS44LTYuOSAyLjYtMTEuNSAyLjYtMjAuNyAwLTUxLjQtMTYuNS04NC00Ni42IDE0LTE0LjcgMjgtMzEuNCA0MS4zLTQ5LjkgMjIuNi0yLjQgNDQtNi4xIDYzLjYtMTEgMi4zIDEwLjEgNC4xIDE5LjggNS4yIDI5LjF6bTM4LjUtNjYuN2MtOC42IDMuNy0xOCA3LTI3LjcgMTAuMS01LjctMTkuNi0xMy4yLTQwLTIyLjUtNjAuOSA5LjItMjAuOCAxNi42LTQxLjEgMjIuMi02MC42IDkuOSAzLjEgMTkuMyA2LjUgMjguMSAxMC4yIDM1LjQgMTUuMSA1OC4zIDM0LjkgNTguMyA1MC42LS4xIDE1LjctMjMgMzUuNi01OC40IDUwLjZ6TTMyMC44IDc4LjR6Ii8+DQogICAgICAgIDxjaXJjbGUgY3g9IjQyMC45IiBjeT0iMjk2LjUiIHI9IjQ1LjciLz4NCiAgICAgICAgPHBhdGggZD0iTTUyMC41IDc4LjF6Ii8+DQogICAgPC9nPg0KPC9zdmc+DQo=";
	
	var _logo2 = _interopRequireDefault(_logo);
	
	var _Home = {
	  "jumbotron": "MxRwoA0vmt34S8PqpwtrL",
	  "App-logo": "_1ptSV2sk9XGEFRcqf6m0Yk",
	  "App-logo-spin": "_1h28jGaYdScuUcte2Kefjx"
	};
	
	var _Home2 = _interopRequireDefault(_Home);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('h1', {
	  className: 'display-4 mb-4'
	}, void 0, 'Hello, world!');
	
	var _ref2 = _jsx('p', {
	  className: 'lead'
	}, void 0, 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.');
	
	var _ref3 = _jsx('hr', {
	  className: 'my-4 mt-4'
	});
	
	var _ref4 = _jsx('p', {}, void 0, 'Click on button below if You want to see posts list.');
	
	var _ref5 = _jsx('p', {
	  className: 'lead'
	}, void 0, _jsx(_reactRouter.Link, {
	  className: 'btn btn-primary btn-lg mt-4',
	  to: '/',
	  href: '#',
	  role: 'button'
	}, void 0, 'Learn more'));
	
	var Home = function Home() {
	  return _jsx('div', {
	    className: _Home2.default.jumbotron + ' ' + "jumbotron"
	  }, void 0, _jsx('div', {
	    className: 'container text-center'
	  }, void 0, _jsx('img', {
	    src: _logo2.default,
	    className: _Home2.default['App-logo'],
	    alt: 'logo'
	  }), _ref, _ref2, _ref3, _ref4, _ref5));
	};
	
	exports.default = Home;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SWITCH_LANGUAGE = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.switchLanguage = switchLanguage;
	
	var _setup = __webpack_require__(14);
	
	// Export Constants
	var SWITCH_LANGUAGE = exports.SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';
	
	function switchLanguage(newLang) {
	  return _extends({
	    type: SWITCH_LANGUAGE
	  }, _setup.localizationData[newLang]);
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PostDetailPage = undefined;
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(4);
	
	var _reactHelmet = __webpack_require__(6);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(3);
	
	var _AppReducer = __webpack_require__(7);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactFontawesome = __webpack_require__(2);
	
	var _PostListItem = {
	  "full-height": "_1GjG4WUiwlKVAm29xdhUd-",
	  "list-view": "_4UUgkjTIKasBiRWgL_2Uq",
	  "edit-post-wrapper": "_3i7OyciAsEv6LVDBFOzNXQ",
	  "edit-post-button": "_28MH_jrCf9XkXp2I8bJhk",
	  "cancel-post-button": "_1Lc_VRAeFlwSWQjB5xHgUb",
	  "form": "R_mEdiCpyHaYTYsKoni8n",
	  "form-content": "_1y7Rs59wtq1EX91ZBhURLy",
	  "form-title": "_10J2zs5FWaJQJBgQF19sQU",
	  "form-field": "_3TEW0SrLL1iG0okBmDxPF-",
	  "appear": "OdMDDK0IReiOqFx23M2HU",
	  "single-post": "_2wFZUrnLLPIM2UvuNgnV1r",
	  "post-title": "_1BU3HyU1b5fh1tsPA9MtRq",
	  "author-name": "_2pYEGhQRMs0Mh9CsoJsCrq",
	  "post-desc-inside": "_1Tz6MI2Lx8k_honCeAXX_-",
	  "post-desc": "_2hG8tPFCGI0k7BZ5cz9nnH",
	  "post-action": "_37qYFcYfJHxrTH_bV6-TQo",
	  "divider": "_3H_6OlXO_Hx_93avyoPoZ2",
	  "post-detail": "_16xorg78DM6DwmPTBglw02",
	  "thumbs": "btSrW-jkNbAiMEdFnkPOl",
	  "thumbUp": "_3YX-d-1m6Ebp5vkaFzOCca",
	  "thumbDown": "dHEY839LnKqA1s-UAX0XA"
	};
	
	var _PostListItem2 = _interopRequireDefault(_PostListItem);
	
	var _PostActions = __webpack_require__(8);
	
	var _PostReducer = __webpack_require__(9);
	
	var _AppActions = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// Import Style
	
	
	// Import Actions
	
	
	// Import Selectors
	
	// is that necessary???
	
	
	var _ref = _jsx(_reactIntl.FormattedMessage, {
	  id: 'editPost'
	});
	
	var _ref2 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'accept'
	});
	
	var _ref3 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'cancel'
	});
	
	var _ref4 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'editPost'
	});
	
	var _ref5 = _jsx(_reactFontawesome.FontAwesomeIcon, {
	  icon: 'pencil-alt'
	});
	
	var _ref6 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'by'
	});
	
	var PostDetailPage = exports.PostDetailPage = function (_React$Component) {
	  _inherits(PostDetailPage, _React$Component);
	
	  function PostDetailPage(props) {
	    _classCallCheck(this, PostDetailPage);
	
	    var _this = _possibleConstructorReturn(this, (PostDetailPage.__proto__ || Object.getPrototypeOf(PostDetailPage)).call(this, props));
	
	    _this.handleInputChange = function (e) {
	      var _e$target = e.target,
	          value = _e$target.value,
	          name = _e$target.name;
	
	
	      _this.setState(_defineProperty({}, name, value));
	    };
	
	    _this.handleEditPost = function () {
	      _this.props.toggleEditPost();
	      _this.props.editPostRequest(_this.state);
	    };
	
	    _this.handleCancelPost = function () {
	      _this.props.toggleEditPost();
	    };
	
	    _this.renderPostForm = function () {
	      return _jsx('div', {
	        className: _PostListItem2.default['form-content']
	      }, void 0, _jsx('h2', {
	        className: _PostListItem2.default['form-title']
	      }, void 0, _ref), _jsx('input', {
	        placeholder: _this.props.intl.messages.authorName,
	        className: _PostListItem2.default['form-field'],
	        name: 'name',
	        value: _this.state.name,
	        onChange: _this.handleInputChange,
	        type: 'text'
	      }), _jsx('input', {
	        placeholder: _this.props.intl.messages.postTitle,
	        className: _PostListItem2.default['form-field'],
	        name: 'title',
	        value: _this.state.title,
	        onChange: _this.handleInputChange,
	        type: 'text'
	      }), _jsx('textarea', {
	        placeholder: _this.props.intl.messages.postContent,
	        className: _PostListItem2.default['form-field'],
	        name: 'content',
	        value: _this.state.content,
	        onChange: _this.handleInputChange
	      }), _jsx('a', {
	        className: 'btn btn-success',
	        href: '#',
	        onClick: _this.handleEditPost
	      }, void 0, _ref2), _jsx('a', {
	        className: _PostListItem2.default['cancel-post-button'] + ' btn btn-danger',
	        href: '#',
	        onClick: _this.handleCancelPost
	      }, void 0, _ref3));
	    };
	
	    _this.renderPost = function () {
	      return _jsx('div', {
	        className: 'container ' + _PostListItem2.default['full-height']
	      }, void 0, _jsx('div', {
	        className: _PostListItem2.default['single-post'] + ' ' + _PostListItem2.default['post-detail']
	      }, void 0, _jsx(_reactRouter.Link, {
	        to: '/',
	        className: _PostListItem2.default['edit-post-button'] + ' btn btn-primary'
	      }, void 0, ' Back'), _jsx('a', {
	        className: _PostListItem2.default['edit-post-button'] + ' btn btn-warning',
	        href: '#',
	        onClick: _this.props.toggleEditPost
	      }, void 0, _ref4, _ref5), _jsx('h3', {
	        className: _PostListItem2.default['post-title']
	      }, void 0, _this.props.post.title), _jsx('p', {
	        className: _PostListItem2.default['author-name']
	      }, void 0, _ref6, ' ', _this.props.post.name), _jsx('p', {
	        className: _PostListItem2.default['post-desc-inside']
	      }, void 0, _this.props.post.content)));
	    };
	
	    _this.state = {
	      name: _this.props.post.name,
	      title: _this.props.post.title,
	      content: _this.props.post.content,
	      votes: _this.props.post.votes
	    };
	    return _this;
	  }
	
	  _createClass(PostDetailPage, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	        title: this.props.post.title
	      }), _jsx('div', {
	        className: _PostListItem2.default['edit-post-wrapper']
	      }, void 0), this.props.showEditPost ? this.renderPostForm() : this.renderPost());
	    }
	  }]);
	
	  return PostDetailPage;
	}(_react2.default.Component);
	
	// Actions required to provide data for this component to render in server side.
	
	
	PostDetailPage.need = [function (params) {
	  return (0, _PostActions.fetchPost)(params.cuid);
	}];
	
	// Retrieve data from store as props
	function mapStateToProps(state, props) {
	  return {
	    post: (0, _PostReducer.getPost)(state, props.params.cuid),
	    showEditPost: (0, _AppReducer.getShowEditPost)(state)
	  };
	}
	function mapDispatchToProps(dispatch, props) {
	  return {
	    toggleEditPost: function toggleEditPost() {
	      return dispatch((0, _AppActions.toggleEditPost)());
	    },
	    editPostRequest: function editPostRequest(post) {
	      return dispatch((0, _PostActions.editPostRequest)(props.params.cuid, post));
	    }
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactIntl.injectIntl)(PostDetailPage));

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(4);
	
	var _PostList = __webpack_require__(48);
	
	var _PostList2 = _interopRequireDefault(_PostList);
	
	var _PostCreateWidget = __webpack_require__(47);
	
	var _PostCreateWidget2 = _interopRequireDefault(_PostCreateWidget);
	
	var _PostActions = __webpack_require__(8);
	
	var _AppActions = __webpack_require__(5);
	
	var _AppReducer = __webpack_require__(7);
	
	var _PostReducer = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Components
	
	
	// Import Actions
	
	
	// Import Selectors
	
	
	var PostListPage = function (_Component) {
	  _inherits(PostListPage, _Component);
	
	  function PostListPage() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, PostListPage);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostListPage.__proto__ || Object.getPrototypeOf(PostListPage)).call.apply(_ref, [this].concat(args))), _this), _this.handleDeletePost = function (post) {
	      if (confirm('Do you want to delete this post')) {
	        // eslint-disable-line
	        _this.props.dispatch((0, _PostActions.deletePostRequest)(post));
	      }
	    }, _this.handleAddPost = function (name, title, content) {
	      _this.props.dispatch((0, _AppActions.toggleAddPost)());
	      _this.props.dispatch((0, _PostActions.addPostRequest)({ name: name, title: title, content: content }));
	    }, _this.handleThumbUp = function (cuid, votes) {
	      var newVotes = Number(votes) + 1;
	      _this.props.dispatch((0, _PostActions.thumbUpRequest)(cuid, newVotes));
	    }, _this.handleThumbDown = function (cuid, votes) {
	      var newVotes = Number(votes) - 1;
	      _this.props.dispatch((0, _PostActions.thumbDownRequest)(cuid, newVotes));
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(PostListPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _PostActions.fetchPosts)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx(_PostCreateWidget2.default, {
	        addPost: this.handleAddPost,
	        showAddPost: this.props.showAddPost
	      }), _jsx(_PostList2.default, {
	        handleDeletePost: this.handleDeletePost,
	        posts: this.props.posts,
	        handleThumbUp: this.handleThumbUp,
	        handleThumbDown: this.handleThumbDown
	      }));
	    }
	  }]);
	
	  return PostListPage;
	}(_react.Component);
	
	// Actions required to provide data for this component to render in sever side.
	
	
	PostListPage.need = [function () {
	  return (0, _PostActions.fetchPosts)();
	}];
	
	// Retrieve data from store as props
	function mapStateToProps(state) {
	  return {
	    showAddPost: (0, _AppReducer.getShowAddPost)(state),
	    posts: (0, _PostReducer.getPosts)(state)
	  };
	}
	
	PostListPage.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostListPage);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(12);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var postSchema = new Schema({
	  name: { type: 'String', required: true },
	  title: { type: 'String', required: true },
	  content: { type: 'String', required: true },
	  slug: { type: 'String', required: true },
	  cuid: { type: 'String', required: true },
	  dateAdded: { type: 'Date', default: Date.now, required: true },
	  votes: { type: 'Number', default: 0 }
	});
	
	exports.default = _mongoose2.default.model('Post', postSchema);

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IntlWrapper = IntlWrapper;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(3);
	
	var _reactRedux = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function IntlWrapper(props) {
	  return _react2.default.createElement(
	    _reactIntl.IntlProvider,
	    props.intl,
	    props.children
	  );
	}
	
	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    intl: store.intl
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(IntlWrapper);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(1);
	
	var _App = __webpack_require__(42);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// require.ensure polyfill for node
	if (false) {
	  require.ensure = function requireModule(deps, callback) {
	    callback(require);
	  };
	}
	
	/* Workaround for async react routes to work with react-hot-reloader till
	  https://github.com/reactjs/react-router/issues/2182 and
	  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  // Require async routes only in development for react-hot-reloader to work.
	  __webpack_require__(20);
	  __webpack_require__(19);
	  __webpack_require__(17);
	  __webpack_require__(15);
	}
	
	// react-router setup with code-splitting
	// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
	exports.default = _jsx(_reactRouter.Route, {
	  path: '/',
	  component: _App2.default
	}, void 0, _jsx(_reactRouter.IndexRoute, {
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(20).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/posts/:slug-:cuid',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(19).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/home',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(17).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/about',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(15).default);
	    }).bind(null, __webpack_require__));
	  }
	}));

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;
	
	var _redux = __webpack_require__(22);
	
	var _reduxThunk = __webpack_require__(72);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _DevTools = __webpack_require__(16);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _reducers = __webpack_require__(50);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Main store function
	 */
	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  // Middleware and store enhancers
	  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];
	
	  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
	    // Enable DevTools only when rendering on client and during development.
	    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : _DevTools2.default.instrument());
	  }
	
	  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));
	
	  // For hot reloading reducers
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', function () {
	      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
	      store.replaceReducer(nextReducer);
	    });
	  }
	
	  return store;
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  _post2.default.count().exec(function (err, count) {
	    if (count > 0) {
	      return;
	    }
	
	    var content1 = 'Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum';
	
	    var content2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum. Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet.';
	
	    var post1 = new _post2.default({ name: 'Admin', title: 'Hello MERN', slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
	    var post2 = new _post2.default({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });
	
	    _post2.default.create([post1, post2], function (error) {
	      if (!error) {
	        // console.log('ready to go....');
	      }
	    });
	  });
	};
	
	var _post = __webpack_require__(21);
	
	var _post2 = _interopRequireDefault(_post);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(11);
	
	var _post = __webpack_require__(52);
	
	var PostController = _interopRequireWildcard(_post);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	// Get all Posts
	router.route('/posts').get(PostController.getPosts);
	
	// Get one post by cuid
	router.route('/posts/:cuid').get(PostController.getPost);
	
	// Add a new Post
	router.route('/posts').post(PostController.addPost);
	
	// Delete a post by cuid
	router.route('/posts/:cuid').delete(PostController.deletePost);
	// Update a post by cuid
	router.route('/posts/:cuid').put(PostController.editPost);
	
	// Thumbs
	router.route('/posts/:cuid/up').put(PostController.thumbUp);
	router.route('/posts/:cuid/down').put(PostController.thumbDown);
	
	exports.default = router;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;
	
	var _promiseUtils = __webpack_require__(54);
	
	function fetchComponentData(store, components, params) {
	  var needs = components.reduce(function (prev, current) {
	    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
	  }, []);
	
	  return (0, _promiseUtils.sequence)(needs, function (need) {
	    return store.dispatch(need(params, store.getState()));
	  });
	} /*
	  Utility function to fetch required data for component to render in server side.
	  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
	  */

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	var webpack = __webpack_require__(13);
	var cssnext = __webpack_require__(63);
	var postcssFocus = __webpack_require__(64);
	var postcssReporter = __webpack_require__(65);
	
	module.exports = {
	  devtool: 'cheap-module-eval-source-map',
	
	  entry: {
	    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
	    vendor: ['react', 'react-dom']
	  },
	
	  output: {
	    path: __dirname,
	    filename: 'app.js',
	    publicPath: 'http://0.0.0.0:8000/'
	  },
	
	  resolve: {
	    extensions: ['', '.js', '.jsx'],
	    modules: ['client', 'node_modules']
	  },
	
	  module: {
	    loaders: [{
	      test: /\.css$/,
	      exclude: /node_modules/,
	      loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
	    }, {
	      test: /\.css$/,
	      include: /node_modules/,
	      loaders: ['style-loader', 'css-loader']
	    }, {
	      test: /\.jsx*$/,
	      exclude: [/node_modules/, /.+\.config.js/],
	      loader: 'babel'
	    }, {
	      test: /\.(jpe?g|gif|png|svg)$/i,
	      loader: 'url-loader?limit=10000'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }, {
	      test: /\.(scss)$/,
	      include: /node_modules/,
	      use: [{
	        loader: 'style-loader' // inject CSS to page
	      }, {
	        loader: 'css-loader' // translates CSS into CommonJS modules
	      }, {
	        loader: 'postcss-loader', // Run post css actions
	        options: {
	          plugins: function plugins() {
	            // post css plugins, can be exported to postcss.config.js
	            return [__webpack_require__(66), __webpack_require__(55)];
	          }
	        }
	      }, {
	        loader: 'sass-loader' // compiles Sass to CSS
	      }]
	    }]
	  },
	
	  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    minChunks: Infinity,
	    filename: 'vendor.js'
	  }), new webpack.DefinePlugin({
	    'process.env': {
	      CLIENT: JSON.stringify(true),
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })],
	
	  postcss: function postcss() {
	    return [postcssFocus(), cssnext({
	      browsers: ['last 2 versions', 'IE > 10']
	    }), postcssReporter({
	      clearMessages: true
	    })];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  locale: 'en',
	  messages: {
	    siteTitle: 'MERN Starter Blog',
	    about: 'About',
	    home: 'Home',
	    addPost: 'Add Post',
	    editPost: 'Edit Post',
	    switchLanguage: 'Switch Language',
	    twitterMessage: 'We are on Twitter',
	    by: 'By',
	    deletePost: 'Delete Post',
	    createNewPost: 'Create new post',
	    authorName: 'Author\'s Name',
	    postTitle: 'Post Title',
	    postContent: 'Post Content',
	    submit: 'Submit',
	    accept: 'Accept',
	    cancel: 'Cancel',
	    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t}',
	    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t}',
	    nestedDateComment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} as of {date}'
	  }
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  locale: 'fr',
	  messages: {
	    siteTitle: 'MERN blog de démarrage',
	    about: 'À propos de moi',
	    home: 'Accueil',
	    addPost: 'Ajouter Poster',
	    editPost: 'Editer Poster',
	    switchLanguage: 'Changer de langue',
	    twitterMessage: 'Nous sommes sur Twitter',
	    by: 'Par',
	    deletePost: 'Supprimer le message',
	    createNewPost: 'Créer un nouveau message',
	    authorName: 'Nom de l\'auteur',
	    postTitle: 'Titre de l\'article',
	    postContent: 'Contenu après',
	    submit: 'Soumettre',
	    accept: 'Accepter',
	    cancel: 'Annuler',
	    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} (in real app this would be translated to French)',
	    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t} (in real app this would be translated to French)',
	    nestedDateComment: 'user {name} {value, plural,\n  \t\t  =0 {does not have any comments}\n  \t\t  =1 {has # comment}\n  \t\t  other {has # comments}\n  \t\t} as of {date} (in real app this would be translated to French)'
	  }
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	// Import Style
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactFontawesome = __webpack_require__(2);
	
	var _About = {
	  "carousel-caption": "_-KLlRBr3oRRvYKGo5ZtcV",
	  "cards-wrapper": "_3asOVXU3tghrsognS7fAym",
	  "image": "_3SYPz_D3nslrMsMmHONpci",
	  "card": "_8PlWhuC878YGTGWA65R_q",
	  "github-link": "_2dJUX8Z4h6r87EuLrGNgsq",
	  "linkedin-link": "CaOAx2n_RCYpBwZWavBQm",
	  "instagram-link": "_1Fl2NNM1rwMl6SMlDeGQCZ",
	  "github": "_3D5Rjb3Vf2zI7sg0_0Dy7K",
	  "linkedin": "_1_9d8TGar92iY4TlaHKSuj",
	  "instagram": "_1VGFsXh9F9pNCyu3xaQLbL",
	  "socialIcon": "_3PG-73dgDP6ilzH5MW8s2R"
	};
	
	var _About2 = _interopRequireDefault(_About);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('h6', {
	  className: 'card-subtitle mb-2 text-muted'
	}, void 0, 'Github profile');
	
	var _ref2 = _jsx('p', {
	  className: 'card-text'
	}, void 0, 'Check out my portfolio at Github.com. Some basic html, CSS and JavaScript works.');
	
	var Card1 = function Card1() {
	  return (
	    // eslint-disable-next-line
	    _jsx('div', {
	      className: "card text-center" + ' ' + _About2.default['card']
	    }, void 0, _jsx('div', {
	      className: 'card-body'
	    }, void 0, _jsx('h5', {
	      className: "card-title" + ' ' + _About2.default['github']
	    }, void 0, _jsx(_reactFontawesome.FontAwesomeIcon, {
	      icon: ['fab', 'github']
	    })), _ref, _ref2, _jsx('a', {
	      href: 'https://github.com/patraspan',
	      target: '_blank',
	      className: "card-link" + ' ' + _About2.default['github-link']
	    }, void 0, 'Go to repo')))
	  );
	};
	
	exports.default = Card1;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	// Import Style
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactFontawesome = __webpack_require__(2);
	
	var _About = {
	  "carousel-caption": "_-KLlRBr3oRRvYKGo5ZtcV",
	  "cards-wrapper": "_3asOVXU3tghrsognS7fAym",
	  "image": "_3SYPz_D3nslrMsMmHONpci",
	  "card": "_8PlWhuC878YGTGWA65R_q",
	  "github-link": "_2dJUX8Z4h6r87EuLrGNgsq",
	  "linkedin-link": "CaOAx2n_RCYpBwZWavBQm",
	  "instagram-link": "_1Fl2NNM1rwMl6SMlDeGQCZ",
	  "github": "_3D5Rjb3Vf2zI7sg0_0Dy7K",
	  "linkedin": "_1_9d8TGar92iY4TlaHKSuj",
	  "instagram": "_1VGFsXh9F9pNCyu3xaQLbL",
	  "socialIcon": "_3PG-73dgDP6ilzH5MW8s2R"
	};
	
	var _About2 = _interopRequireDefault(_About);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('h6', {
	  className: 'card-subtitle mb-2 text-muted'
	}, void 0, 'LinkedIn');
	
	var _ref2 = _jsx('p', {
	  className: 'card-text'
	}, void 0, 'If You would like to know something about me, visit my LinkedIn page.');
	
	var Card2 = function Card2() {
	  return (
	    // eslint-disable-next-line
	    _jsx('div', {
	      className: "card text-center" + ' ' + _About2.default['card']
	    }, void 0, _jsx('div', {
	      className: 'card-body'
	    }, void 0, _jsx('h5', {
	      className: "card-title" + ' ' + _About2.default['linkedin']
	    }, void 0, _jsx(_reactFontawesome.FontAwesomeIcon, {
	      className: _About2.default.socialIcon,
	      icon: ['fab', 'linkedin']
	    })), _ref, _ref2, _jsx('a', {
	      href: 'https://www.linkedin.com/in/patryk-kurzeja-design/',
	      target: '_blank',
	      className: "card-link" + ' ' + _About2.default['linkedin-link']
	    }, void 0, 'Visit page')))
	  );
	};
	
	exports.default = Card2;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	// Import Style
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactFontawesome = __webpack_require__(2);
	
	var _About = {
	  "carousel-caption": "_-KLlRBr3oRRvYKGo5ZtcV",
	  "cards-wrapper": "_3asOVXU3tghrsognS7fAym",
	  "image": "_3SYPz_D3nslrMsMmHONpci",
	  "card": "_8PlWhuC878YGTGWA65R_q",
	  "github-link": "_2dJUX8Z4h6r87EuLrGNgsq",
	  "linkedin-link": "CaOAx2n_RCYpBwZWavBQm",
	  "instagram-link": "_1Fl2NNM1rwMl6SMlDeGQCZ",
	  "github": "_3D5Rjb3Vf2zI7sg0_0Dy7K",
	  "linkedin": "_1_9d8TGar92iY4TlaHKSuj",
	  "instagram": "_1VGFsXh9F9pNCyu3xaQLbL",
	  "socialIcon": "_3PG-73dgDP6ilzH5MW8s2R"
	};
	
	var _About2 = _interopRequireDefault(_About);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('h6', {
	  className: 'card-subtitle mb-2 text-muted'
	}, void 0, 'Instagram');
	
	var _ref2 = _jsx('p', {
	  className: 'card-text'
	}, void 0, 'My private account. Follow me to see my content!');
	
	var Card3 = function Card3() {
	  return (
	    // eslint-disable-next-line
	    _jsx('div', {
	      className: "card text-center" + ' ' + _About2.default['card']
	    }, void 0, _jsx('div', {
	      className: 'card-body'
	    }, void 0, _jsx('h5', {
	      className: "card-title" + ' ' + _About2.default['instagram']
	    }, void 0, _jsx(_reactFontawesome.FontAwesomeIcon, {
	      className: _About2.default.socialIcon,
	      icon: ['fab', 'instagram']
	    })), _ref, _ref2, _jsx('a', {
	      href: 'https://www.instagram.com/patrykkurzeja/',
	      target: '_blank',
	      className: "card-link" + ' ' + _About2.default['instagram-link']
	    }, void 0, 'Follow')))
	  );
	};
	
	exports.default = Card3;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _About = {
	    "carousel-caption": "_-KLlRBr3oRRvYKGo5ZtcV",
	    "cards-wrapper": "_3asOVXU3tghrsognS7fAym",
	    "image": "_3SYPz_D3nslrMsMmHONpci",
	    "card": "_8PlWhuC878YGTGWA65R_q",
	    "github-link": "_2dJUX8Z4h6r87EuLrGNgsq",
	    "linkedin-link": "CaOAx2n_RCYpBwZWavBQm",
	    "instagram-link": "_1Fl2NNM1rwMl6SMlDeGQCZ",
	    "github": "_3D5Rjb3Vf2zI7sg0_0Dy7K",
	    "linkedin": "_1_9d8TGar92iY4TlaHKSuj",
	    "instagram": "_1VGFsXh9F9pNCyu3xaQLbL",
	    "socialIcon": "_3PG-73dgDP6ilzH5MW8s2R"
	};
	
	var _About2 = _interopRequireDefault(_About);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('ol', {
	    className: 'carousel-indicators'
	}, void 0, _jsx('li', {
	    'data-target': '#carouselExampleIndicators',
	    'data-slide-to': '0',
	    className: 'active'
	}), _jsx('li', {
	    'data-target': '#carouselExampleIndicators',
	    'data-slide-to': '1'
	}), _jsx('li', {
	    'data-target': '#carouselExampleIndicators',
	    'data-slide-to': '2'
	}));
	
	var _ref2 = _jsx('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo natus doloribus a consectetur distinctio temporibus porro iusto dolores pariatur sit?');
	
	var _ref3 = _jsx('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo natus doloribus a consectetur distinctio temporibus porro iusto dolores pariatur sit?');
	
	var _ref4 = _jsx('p', {}, void 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo natus doloribus a consectetur distinctio temporibus porro iusto dolores pariatur sit?');
	
	var _ref5 = _jsx('a', {
	    className: 'carousel-control-prev',
	    href: '#carouselExampleIndicators',
	    role: 'button',
	    'data-slide': 'prev'
	}, void 0, _jsx('span', {
	    className: 'carousel-control-prev-icon',
	    'aria-hidden': 'true'
	}), _jsx('span', {
	    className: 'sr-only'
	}, void 0, 'Previous'));
	
	var _ref6 = _jsx('a', {
	    className: 'carousel-control-next',
	    href: '#carouselExampleIndicators',
	    role: 'button',
	    'data-slide': 'next'
	}, void 0, _jsx('span', {
	    className: 'carousel-control-next-icon',
	    'aria-hidden': 'true'
	}), _jsx('span', {
	    className: 'sr-only'
	}, void 0, 'Next'));
	
	var Carousel = function Carousel() {
	    return _jsx('div', {
	        id: 'carouselExampleIndicators',
	        className: 'carousel slide',
	        'data-ride': 'carousel'
	    }, void 0, _ref, _jsx('div', {
	        className: 'carousel-inner'
	    }, void 0, _jsx('div', {
	        className: 'carousel-item active'
	    }, void 0, _jsx('img', {
	        className: _About2.default.image + ' d-block w-100',
	        src: 'https://res.cloudinary.com/dsgnpk/image/upload/v1539437246/BlogMERN/35mm-analog-analogue-1002634.jpg',
	        alt: 'First slide'
	    }), _jsx('div', {
	        className: _About2.default['carousel-caption'] + ' carousel-caption d-none d-md-block'
	    }, void 0, _jsx('h5', {
	        className: _About2.default['caption-header']
	    }, void 0, 'Photography is...'), _ref2)), _jsx('div', {
	        className: 'carousel-item'
	    }, void 0, _jsx('img', {
	        className: _About2.default.image + ' d-block w-100',
	        src: 'https://res.cloudinary.com/dsgnpk/image/upload/v1539437236/BlogMERN/background-book-coffee-951230.jpg',
	        alt: 'Second slide'
	    }), _jsx('div', {
	        className: _About2.default['carousel-caption'] + ' carousel-caption d-none d-md-block'
	    }, void 0, _jsx('h5', {
	        className: _About2.default['caption-header']
	    }, void 0, 'Programming is..'), _ref3)), _jsx('div', {
	        className: 'carousel-item'
	    }, void 0, _jsx('img', {
	        className: _About2.default.image + ' d-block w-100',
	        src: 'https://res.cloudinary.com/dsgnpk/image/upload/v1539437236/BlogMERN/controller-game-hands-807330.jpg',
	        alt: 'Third slide'
	    }), _jsx('div', {
	        className: _About2.default['carousel-caption'] + ' carousel-caption d-none d-md-block'
	    }, void 0, _jsx('h5', {
	        className: _About2.default['caption-header']
	    }, void 0, 'Gaming is..'), _ref4))), _ref5, _ref6);
	};
	
	exports.default = Carousel;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(4);
	
	var _reactHelmet = __webpack_require__(6);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _DevTools = __webpack_require__(16);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _Header = __webpack_require__(44);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(43);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _Navbar = __webpack_require__(45);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	var _AppActions = __webpack_require__(5);
	
	var _IntlActions = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	// import styles from './App.css';
	
	// Import Components
	
	
	// Import Actions
	
	
	var _ref = _jsx(_DevTools2.default, {});
	
	var _ref2 = _jsx(_Footer2.default, {});
	
	var App = exports.App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	    _this.toggleAddPostSection = function () {
	      _this.props.dispatch((0, _AppActions.toggleAddPost)());
	    };
	
	    _this.state = { isMounted: false };
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ isMounted: true }); // eslint-disable-line
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _jsx('div', {}, void 0, this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && _ref, _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	        title: 'Blog App',
	        titleTemplate: '%s - Blog App',
	        meta: [{ charset: 'utf-8' }, {
	          'http-equiv': 'X-UA-Compatible',
	          content: 'IE=edge'
	        }, {
	          name: 'viewport',
	          content: 'width=device-width, initial-scale=1'
	        }]
	      }), _jsx(_Navbar2.default, {
	        switchLanguage: function switchLanguage(lang) {
	          return _this2.props.dispatch((0, _IntlActions.switchLanguage)(lang));
	        },
	        intl: this.props.intl
	      }), _jsx(_Header2.default, {
	        toggleAddPost: this.toggleAddPostSection
	      }), _jsx('div', {}, void 0, this.props.children), _ref2));
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    intl: store.intl
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	exports.Footer = Footer;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Footer = {
	  "footer": "_1oiRVDtQ6fOWkhBVWcRyE_"
	};
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('p', {}, void 0, '\xA9 2018 \xB7 DESIGN PK \xB7 ', _jsx('a', {
	  href: 'https://portfoliosite',
	  target: '_Blank'
	}, void 0, 'Portfolio Site'));
	
	var _ref2 = _jsx('p', {}, void 0, 'Created with: ', _jsx('a', {
	  href: 'https://twitter.com/@mern_io',
	  target: '_Blank'
	}, void 0, '@mern_io'));
	
	function Footer() {
	  return _jsx('div', {
	    className: _Footer2.default.footer
	  }, void 0, _ref, _ref2);
	}
	
	exports.default = Footer;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	exports.Header = Header;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactIntl = __webpack_require__(3);
	
	var _reactFontawesome = __webpack_require__(2);
	
	var _Header = {
	  "header": "_3EGjKVGKCGTGQn_m_YASdF",
	  "content": "_391cv5n_RFU0K9SBOjXDEt",
	  "site-title": "_11V45Tl3_Hdy_ARI53CW9g",
	  "container": "_2UvSMuY_zBp1rhZJpvZDaM",
	  "add-post-button": "XrNjmGRHH_vMEgGeC3S75"
	};
	
	var _Header2 = _interopRequireDefault(_Header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactRouter.Link, {
	  to: '/'
	}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'siteTitle'
	}));
	
	var _ref2 = _jsx(_reactRouter.Link, {
	  to: '/about'
	}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'about'
	}));
	
	var _ref3 = _jsx(_reactRouter.Link, {
	  to: '/home'
	}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'home'
	}));
	
	var _ref4 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'addPost'
	});
	
	function Header(props, context) {
	  return _jsx('div', {
	    className: _Header2.default.header
	  }, void 0, _jsx('div', {
	    className: 'container'
	  }, void 0, _jsx('div', {
	    className: _Header2.default.content
	  }, void 0, _jsx('h1', {
	    className: _Header2.default['site-title']
	  }, void 0, context.router.isActive('/', true) ? _ref : null, context.router.isActive('/about', true) ? _ref2 : null, context.router.isActive('/home', true) ? _ref3 : null), context.router.isActive('/', true) ? _jsx('button', {
	    className: _Header2.default['add-post-button'] + ' btn btn-primary',
	    href: '#',
	    onClick: props.toggleAddPost
	  }, void 0, _ref4, _jsx(_reactFontawesome.FontAwesomeIcon, {
	    className: _Header2.default.plus,
	    icon: 'plus'
	  })) : null)));
	}
	
	Header.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	exports.default = Header;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	exports.Navbar = Navbar;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactIntl = __webpack_require__(3);
	
	var _reactFontawesome = __webpack_require__(2);
	
	var _Navbar = {
	  "header": "_18I3vHfMSP9gwGtuGdmsfg",
	  "content": "_1sTjHzxnKSupxebPQ9RslD",
	  "site-title": "XhekGeNF9vlJbk_96xCDF",
	  "add-post-button": "_2nlklIXM6tOecTryk0Wgcf",
	  "language-switcher": "_2_01HvPyflNB6Dt29k5yjM",
	  "selected": "_2EoS9ruXazKPvxeZmKW1lH",
	  "dropdown-menu": "_2dsomaJ3wwNVK_jrwk5jt-",
	  "container": "IQN7v7-QgZgScYS6pLBca",
	  "nav-link": "_3qOLGu06GYRloXgeH2j5vM",
	  "nav-brand": "_2Tig1HLypqtkdc9BhLEkov",
	  "btn-outline-secondary": "_1SPbdki88A5EgPPDIE4eq1",
	  "lang": "_17xI9Hb6XGio6JaFXTa3Up",
	  "stroopwafel": "_2VAojGF1aQYobHtuEFASpS"
	};
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('button', {
	  className: 'navbar-toggler',
	  type: 'button',
	  'data-toggle': 'collapse',
	  'data-target': '#navbarSupportedContent',
	  'aria-controls': 'navbarSupportedContent',
	  'aria-expanded': 'false',
	  'aria-label': 'Toggle navigation'
	}, void 0, _jsx('span', {
	  className: 'navbar-toggler-icon'
	}));
	
	var _ref2 = _jsx('li', {
	  className: 'nav-item'
	}, void 0, _jsx(_reactRouter.Link, {
	  className: 'nav-link',
	  to: '/home'
	}, void 0, ' Home'));
	
	var _ref3 = _jsx('li', {
	  className: 'nav-item'
	}, void 0, _jsx(_reactRouter.Link, {
	  className: 'nav-link',
	  to: '/about'
	}, void 0, ' About'));
	
	var _ref4 = _jsx('li', {
	  className: 'nav-item'
	}, void 0, _jsx(_reactRouter.Link, {
	  className: 'nav-link',
	  to: '/'
	}, void 0, ' Blog'));
	
	var _ref5 = _jsx('a', {
	  className: 'nav-link dropdown-toggle',
	  'data-toggle': 'dropdown',
	  href: '#',
	  role: 'button',
	  'aria-haspopup': 'true',
	  'aria-expanded': 'false'
	}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'switchLanguage'
	}));
	
	function Navbar(props) {
	  var languageNodes = props.intl.enabledLanguages.map(function (lang) {
	    return _jsx('a', {
	      onClick: function onClick() {
	        return props.switchLanguage(lang);
	      },
	      className: 'dropdown-item lang'
	    }, lang, lang);
	  });
	  return _jsx('nav', {
	    className: "navbar navbar-expand-lg navbar-dark bg-dark"
	  }, void 0, _jsx('div', {
	    className: "container"
	  }, void 0, _jsx(_reactRouter.Link, {
	    className: 'navbar-brand',
	    to: '/home'
	  }, void 0, _jsx(_reactFontawesome.FontAwesomeIcon, {
	    className: _Navbar2.default.stroopwafel,
	    icon: 'stroopwafel'
	  }), ' Mern Blog'), _ref, _jsx('div', {
	    className: 'collapse navbar-collapse',
	    id: 'navbarSupportedContent'
	  }, void 0, _jsx('ul', {
	    className: 'navbar-nav mr-auto'
	  }, void 0, _ref2, _ref3, _ref4, _jsx('li', {
	    className: 'text-right nav-item dropdown'
	  }, void 0, _ref5, _jsx('div', {
	    className: _Navbar2.default['dropdown-menu'] + ' dropdown-menu'
	  }, void 0, languageNodes))))));
	}
	
	Navbar.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	exports.default = Navbar;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _setup = __webpack_require__(14);
	
	var _IntlActions = __webpack_require__(18);
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var initLocale = global.navigator && global.navigator.language || 'en';
	
	var initialState = _extends({
	  locale: initLocale,
	  enabledLanguages: _setup.enabledLanguages
	}, _setup.localizationData[initLocale] || {});
	
	var IntlReducer = function IntlReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _IntlActions.SWITCH_LANGUAGE:
	      {
	        var type = action.type,
	            actionWithoutType = _objectWithoutProperties(action, ['type']); // eslint-disable-line
	
	
	        return _extends({}, state, actionWithoutType);
	      }
	
	    default:
	      return state;
	  }
	};
	
	exports.default = IntlReducer;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PostCreateWidget = undefined;
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(3);
	
	var _PostCreateWidget = {
	  "form": "_1_WEV3z8MyISJ_IVeQGbfN",
	  "form-content": "_3CPctdi6XIS37va2ubmlCG",
	  "form-title": "_1CSMUfhA4ysKjSED0EfzhX",
	  "form-field": "_2UV8G3K76UKXYl2G9ov3yn",
	  "appear": "_38mS7lSZiNDV5iEXieRUC7"
	};
	
	var _PostCreateWidget2 = _interopRequireDefault(_PostCreateWidget);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	var _ref2 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'createNewPost'
	});
	
	var _ref3 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'submit'
	});
	
	var PostCreateWidget = exports.PostCreateWidget = function (_Component) {
	  _inherits(PostCreateWidget, _Component);
	
	  function PostCreateWidget() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, PostCreateWidget);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostCreateWidget.__proto__ || Object.getPrototypeOf(PostCreateWidget)).call.apply(_ref, [this].concat(args))), _this), _this.addPost = function () {
	      var nameRef = _this.refs.name;
	      var titleRef = _this.refs.title;
	      var contentRef = _this.refs.content;
	      var votes = 0;
	      if (nameRef.value && titleRef.value && contentRef.value) {
	        _this.props.addPost(nameRef.value, titleRef.value, contentRef.value, votes);
	        nameRef.value = titleRef.value = contentRef.value = '';
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(PostCreateWidget, [{
	    key: 'render',
	    value: function render() {
	      var cls = _PostCreateWidget2.default.form + ' ' + (this.props.showAddPost ? _PostCreateWidget2.default.appear : '');
	      return _jsx('div', {
	        className: cls
	      }, void 0, _jsx('div', {
	        className: _PostCreateWidget2.default['form-content']
	      }, void 0, _jsx('h2', {
	        className: _PostCreateWidget2.default['form-title']
	      }, void 0, _ref2), _react2.default.createElement('input', { placeholder: this.props.intl.messages.authorName, className: _PostCreateWidget2.default['form-field'], ref: 'name' }), _react2.default.createElement('input', { placeholder: this.props.intl.messages.postTitle, className: _PostCreateWidget2.default['form-field'], ref: 'title' }), _react2.default.createElement('textarea', { placeholder: this.props.intl.messages.postContent, className: _PostCreateWidget2.default['form-field'], ref: 'content' }), _jsx('a', {
	        className: 'btn btn-success',
	        href: '#',
	        onClick: this.addPost
	      }, void 0, _ref3)));
	    }
	  }]);
	
	  return PostCreateWidget;
	}(_react.Component);
	
	exports.default = (0, _reactIntl.injectIntl)(PostCreateWidget);

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	// Import Components
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PostListItem = {
	  "full-height": "_1GjG4WUiwlKVAm29xdhUd-",
	  "list-view": "_4UUgkjTIKasBiRWgL_2Uq",
	  "edit-post-wrapper": "_3i7OyciAsEv6LVDBFOzNXQ",
	  "edit-post-button": "_28MH_jrCf9XkXp2I8bJhk",
	  "cancel-post-button": "_1Lc_VRAeFlwSWQjB5xHgUb",
	  "form": "R_mEdiCpyHaYTYsKoni8n",
	  "form-content": "_1y7Rs59wtq1EX91ZBhURLy",
	  "form-title": "_10J2zs5FWaJQJBgQF19sQU",
	  "form-field": "_3TEW0SrLL1iG0okBmDxPF-",
	  "appear": "OdMDDK0IReiOqFx23M2HU",
	  "single-post": "_2wFZUrnLLPIM2UvuNgnV1r",
	  "post-title": "_1BU3HyU1b5fh1tsPA9MtRq",
	  "author-name": "_2pYEGhQRMs0Mh9CsoJsCrq",
	  "post-desc-inside": "_1Tz6MI2Lx8k_honCeAXX_-",
	  "post-desc": "_2hG8tPFCGI0k7BZ5cz9nnH",
	  "post-action": "_37qYFcYfJHxrTH_bV6-TQo",
	  "divider": "_3H_6OlXO_Hx_93avyoPoZ2",
	  "post-detail": "_16xorg78DM6DwmPTBglw02",
	  "thumbs": "btSrW-jkNbAiMEdFnkPOl",
	  "thumbUp": "_3YX-d-1m6Ebp5vkaFzOCca",
	  "thumbDown": "dHEY839LnKqA1s-UAX0XA"
	};
	
	var _PostListItem2 = _interopRequireDefault(_PostListItem);
	
	var _PostListItem3 = __webpack_require__(49);
	
	var _PostListItem4 = _interopRequireDefault(_PostListItem3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function PostList(props) {
	  return _jsx('div', {
	    className: _PostListItem2.default['list-view'] + ' container'
	  }, void 0, props.posts.map(function (post) {
	    return _jsx(_PostListItem4.default, {
	      post: post,
	      onDelete: function onDelete() {
	        return props.handleDeletePost(post.cuid);
	      },
	      onThumbUp: function onThumbUp() {
	        return props.handleThumbUp(post.cuid, post.votes);
	      },
	      onThumbDown: function onThumbDown() {
	        return props.handleThumbDown(post.cuid, post.votes);
	      }
	    }, post.cuid);
	  }));
	}
	
	exports.default = PostList;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactIntl = __webpack_require__(3);
	
	var _reactFontawesome = __webpack_require__(2);
	
	var _PostListItem = {
	  "full-height": "_1GjG4WUiwlKVAm29xdhUd-",
	  "list-view": "_4UUgkjTIKasBiRWgL_2Uq",
	  "edit-post-wrapper": "_3i7OyciAsEv6LVDBFOzNXQ",
	  "edit-post-button": "_28MH_jrCf9XkXp2I8bJhk",
	  "cancel-post-button": "_1Lc_VRAeFlwSWQjB5xHgUb",
	  "form": "R_mEdiCpyHaYTYsKoni8n",
	  "form-content": "_1y7Rs59wtq1EX91ZBhURLy",
	  "form-title": "_10J2zs5FWaJQJBgQF19sQU",
	  "form-field": "_3TEW0SrLL1iG0okBmDxPF-",
	  "appear": "OdMDDK0IReiOqFx23M2HU",
	  "single-post": "_2wFZUrnLLPIM2UvuNgnV1r",
	  "post-title": "_1BU3HyU1b5fh1tsPA9MtRq",
	  "author-name": "_2pYEGhQRMs0Mh9CsoJsCrq",
	  "post-desc-inside": "_1Tz6MI2Lx8k_honCeAXX_-",
	  "post-desc": "_2hG8tPFCGI0k7BZ5cz9nnH",
	  "post-action": "_37qYFcYfJHxrTH_bV6-TQo",
	  "divider": "_3H_6OlXO_Hx_93avyoPoZ2",
	  "post-detail": "_16xorg78DM6DwmPTBglw02",
	  "thumbs": "btSrW-jkNbAiMEdFnkPOl",
	  "thumbUp": "_3YX-d-1m6Ebp5vkaFzOCca",
	  "thumbDown": "dHEY839LnKqA1s-UAX0XA"
	};
	
	var _PostListItem2 = _interopRequireDefault(_PostListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactIntl.FormattedMessage, {
	  id: 'by'
	});
	
	var _ref2 = _jsx(_reactFontawesome.FontAwesomeIcon, {
	  icon: 'trash'
	});
	
	var _ref3 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'deletePost'
	});
	
	function PostListItem(props) {
	  return _jsx('div', {
	    className: _PostListItem2.default['single-post']
	  }, void 0, _jsx('h3', {
	    className: _PostListItem2.default['post-title']
	  }, void 0, _jsx(_reactRouter.Link, {
	    to: '/posts/' + props.post.slug + '-' + props.post.cuid
	  }, void 0, props.post.title)), _jsx('p', {
	    className: _PostListItem2.default['author-name']
	  }, void 0, _ref, ' ', props.post.name), _jsx('p', {
	    className: _PostListItem2.default['post-desc']
	  }, void 0, props.post.content), _jsx('p', {
	    className: _PostListItem2.default['post-action']
	  }, void 0, _jsx('a', {
	    href: '#',
	    onClick: props.onDelete
	  }, void 0, _ref2, _ref3)), _jsx('div', {
	    className: _PostListItem2.default.thumbs
	  }, void 0, _jsx('span', {
	    onClick: props.onThumbUp
	  }, void 0, _jsx(_reactFontawesome.FontAwesomeIcon, {
	    icon: 'arrow-alt-circle-up',
	    className: _PostListItem2.default.thumbUp
	  })), _jsx('span', {}, void 0, 'Votes: ', props.post.votes), _jsx('span', {
	    onClick: props.onThumbDown
	  }, void 0, _jsx(_reactFontawesome.FontAwesomeIcon, {
	    icon: 'arrow-alt-circle-down',
	    className: _PostListItem2.default.thumbDown
	  }))), _jsx('hr', {
	    className: _PostListItem2.default.divider
	  }));
	}
	
	exports.default = PostListItem;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(22);
	
	var _AppReducer = __webpack_require__(7);
	
	var _AppReducer2 = _interopRequireDefault(_AppReducer);
	
	var _PostReducer = __webpack_require__(9);
	
	var _PostReducer2 = _interopRequireDefault(_PostReducer);
	
	var _IntlReducer = __webpack_require__(46);
	
	var _IntlReducer2 = _interopRequireDefault(_IntlReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Combine all reducers into one root reducer
	/**
	 * Root Reducer
	 */
	exports.default = (0, _redux.combineReducers)({
	  app: _AppReducer2.default,
	  posts: _PostReducer2.default,
	  intl: _IntlReducer2.default
	});
	
	// Import Reducers

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = undefined;
	exports.default = callApi;
	
	var _isomorphicFetch = __webpack_require__(61);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _config = __webpack_require__(10);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';
	
	function callApi(endpoint) {
	  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	  var body = arguments[2];
	
	  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
	    headers: { 'content-type': 'application/json' },
	    method: method,
	    body: JSON.stringify(body)
	  }).then(function (response) {
	    return response.json().then(function (json) {
	      return { json: json, response: response };
	    });
	  }).then(function (_ref) {
	    var json = _ref.json,
	        response = _ref.response;
	
	    if (!response.ok) {
	      return Promise.reject(json);
	    }
	
	    return json;
	  }).then(function (response) {
	    return response;
	  }, function (error) {
	    return error;
	  });
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPosts = getPosts;
	exports.addPost = addPost;
	exports.getPost = getPost;
	exports.deletePost = deletePost;
	exports.editPost = editPost;
	exports.thumbUp = thumbUp;
	exports.thumbDown = thumbDown;
	
	var _post = __webpack_require__(21);
	
	var _post2 = _interopRequireDefault(_post);
	
	var _cuid = __webpack_require__(56);
	
	var _cuid2 = _interopRequireDefault(_cuid);
	
	var _limax = __webpack_require__(62);
	
	var _limax2 = _interopRequireDefault(_limax);
	
	var _sanitizeHtml = __webpack_require__(73);
	
	var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Get all posts
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPosts(req, res) {
	  _post2.default.find().sort('-dateAdded').exec(function (err, posts) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ posts: posts });
	  });
	}
	
	/**
	 * Save a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function addPost(req, res) {
	  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
	    res.status(403).end();
	  }
	
	  var newPost = new _post2.default(req.body.post);
	
	  // Let's sanitize inputs
	  newPost.title = (0, _sanitizeHtml2.default)(newPost.title);
	  newPost.name = (0, _sanitizeHtml2.default)(newPost.name);
	  newPost.content = (0, _sanitizeHtml2.default)(newPost.content);
	
	  newPost.slug = (0, _limax2.default)(newPost.title.toLowerCase(), { lowercase: true });
	  newPost.cuid = (0, _cuid2.default)();
	  newPost.save(function (err, saved) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: saved });
	  });
	}
	
	/**
	 * Get a single post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: post });
	  });
	}
	
	/**
	 * Delete a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function deletePost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }
	
	    post.remove(function () {
	      res.status(200).end();
	    });
	  });
	}
	
	function editPost(req, res) {
	  _post2.default.update({ cuid: req.params.cuid }, req.body.post).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: post });
	  });
	}
	
	function thumbUp(req, res) {
	  _post2.default.findOneAndUpdate({ cuid: req.params.cuid }, { $inc: { voteCount: 1 } }, function (err) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.status(200).end();
	  });
	}
	
	function thumbDown(req, res) {
	  _post2.default.findOneAndUpdate({ cuid: req.params.cuid }, { $inc: { voteCount: -1 } }, function (err) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.status(200).end();
	  });
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Webpack Requirements
	
	
	var _express = __webpack_require__(11);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _compression = __webpack_require__(31);
	
	var _compression2 = _interopRequireDefault(_compression);
	
	var _mongoose = __webpack_require__(12);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	var _bodyParser = __webpack_require__(30);
	
	var _bodyParser2 = _interopRequireDefault(_bodyParser);
	
	var _path = __webpack_require__(32);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _IntlWrapper = __webpack_require__(23);
	
	var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);
	
	var _webpack = __webpack_require__(13);
	
	var _webpack2 = _interopRequireDefault(_webpack);
	
	var _webpackConfig = __webpack_require__(29);
	
	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);
	
	var _webpackDevMiddleware = __webpack_require__(34);
	
	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);
	
	var _webpackHotMiddleware = __webpack_require__(35);
	
	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);
	
	var _store = __webpack_require__(25);
	
	var _reactRedux = __webpack_require__(4);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(33);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactHelmet = __webpack_require__(6);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _routes = __webpack_require__(24);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _fetchData = __webpack_require__(28);
	
	var _post = __webpack_require__(27);
	
	var _post2 = _interopRequireDefault(_post);
	
	var _dummyData = __webpack_require__(26);
	
	var _dummyData2 = _interopRequireDefault(_dummyData);
	
	var _config = __webpack_require__(10);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Initialize the Express App
	var app = new _express2.default();
	
	// Set Development modes checks
	var isDevMode = process.env.NODE_ENV === 'development' || false;
	var isProdMode = process.env.NODE_ENV === 'production' || false;
	
	// Run Webpack dev server in development mode
	if (isDevMode) {
	  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
	  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
	  app.use((0, _webpackHotMiddleware2.default)(compiler));
	}
	
	// React And Redux Setup
	
	
	// Import required modules
	
	
	// Set native promises as mongoose promise
	_mongoose2.default.Promise = global.Promise;
	
	// MongoDB Connection
	_mongoose2.default.connect(_config2.default.mongoURL, function (error) {
	  if (error) {
	    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
	    throw error;
	  }
	
	  // feed some dummy data in DB.
	  (0, _dummyData2.default)();
	});
	
	// Apply body Parser and server public assets and routes
	app.use((0, _compression2.default)());
	app.use(_bodyParser2.default.json({ limit: '20mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist/client')));
	app.use('/api', _post2.default);
	
	// Render Initial HTML
	var renderFullPage = function renderFullPage(html, initialState) {
	  var head = _reactHelmet2.default.rewind();
	
	  // Import Manifests
	  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
	  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);
	
	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (isProdMode ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link rel="shortcut icon" href="https://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (isProdMode ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (isProdMode ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (isProdMode ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
	};
	
	var renderError = function renderError(err) {
	  var softTab = '&#32;&#32;&#32;&#32;';
	  var errTrace = isProdMode ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
	  return renderFullPage('Server Error' + errTrace, {});
	};
	
	// Server Side Rendering based on routes matched by React-router.
	app.use(function (req, res, next) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	    if (err) {
	      return res.status(500).end(renderError(err));
	    }
	
	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }
	
	    if (!renderProps) {
	      return next();
	    }
	
	    var store = (0, _store.configureStore)();
	
	    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
	      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
	        store: store
	      }, void 0, _jsx(_IntlWrapper2.default, {}, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps))));
	      var finalState = store.getState();
	
	      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
	    }).catch(function (error) {
	      return next(error);
	    });
	  });
	});
	
	// start app
	app.listen(_config2.default.port, function (error) {
	  if (!error) {
	    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
	  }
	});
	
	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sequence = sequence;
	/**
	 * Throw an array to it and a function which can generate promises
	 * and it will call them sequentially, one after another
	 */
	function sequence(items, consumer) {
	  var results = [];
	  var runner = function runner() {
	    var item = items.shift();
	    if (item) {
	      return consumer(item).then(function (result) {
	        results.push(result);
	      }).then(runner);
	    }
	
	    return Promise.resolve(results);
	  };
	
	  return runner();
	}

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = require("autoprefixer");

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = require("cuid");

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = require("intl");

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = require("intl-locales-supported");

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/en");

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/fr");

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = require("limax");

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = require("precss");

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/en");

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/fr");

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = require("sanitize-html");

/***/ }
/******/ ]);