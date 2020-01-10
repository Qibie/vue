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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vue_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_js__ = __webpack_require__(10);

// esModule的模块导入



new __WEBPACK_IMPORTED_MODULE_1__vue_js___default.a({
	el:'#app',
	components:{
		App: __WEBPACK_IMPORTED_MODULE_2__App_js__["a" /* default */]
	},
	template:'<App />'
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(3);
            var content = __webpack_require__(4);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = {};

function modulesToDom(moduleId, list, options) {
  for (var i = 0; i < list.length; i++) {
    var part = {
      css: list[i][1],
      media: list[i][2],
      sourceMap: list[i][3]
    };

    if (stylesInDom[moduleId][i]) {
      stylesInDom[moduleId][i](part);
    } else {
      stylesInDom[moduleId].push(addStyle(part, options));
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : null;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (moduleId, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  moduleId = options.base ? moduleId + options.base : moduleId;
  list = list || [];

  if (!stylesInDom[moduleId]) {
    stylesInDom[moduleId] = [];
  }

  modulesToDom(moduleId, list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    if (!stylesInDom[moduleId]) {
      stylesInDom[moduleId] = [];
    }

    modulesToDom(moduleId, newList, options);

    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {
      stylesInDom[moduleId][j]();
    }

    stylesInDom[moduleId].length = newList.length;

    if (stylesInDom[moduleId].length === 0) {
      delete stylesInDom[moduleId];
    }
  };
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\r\n\tbackground-color: green;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Vue = factory());
}(this, function () { 'use strict';

  /*  */

  var emptyObject = Object.freeze({});

  // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.
  function isUndef (v) {
    return v === undefined || v === null
  }

  function isDef (v) {
    return v !== undefined && v !== null
  }

  function isTrue (v) {
    return v === true
  }

  function isFalse (v) {
    return v === false
  }

  /**
   * Check if value is primitive.
   */
  function isPrimitive (value) {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      // $flow-disable-line
      typeof value === 'symbol' ||
      typeof value === 'boolean'
    )
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject (obj) {
    return obj !== null && typeof obj === 'object'
  }

  /**
   * Get the raw type string of a value, e.g., [object Object].
   */
  var _toString = Object.prototype.toString;

  function toRawType (value) {
    return _toString.call(value).slice(8, -1)
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject (obj) {
    return _toString.call(obj) === '[object Object]'
  }

  function isRegExp (v) {
    return _toString.call(v) === '[object RegExp]'
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex (val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val)
  }

  function isPromise (val) {
    return (
      isDef(val) &&
      typeof val.then === 'function' &&
      typeof val.catch === 'function'
    )
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString (val) {
    return val == null
      ? ''
      : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
        ? JSON.stringify(val, null, 2)
        : String(val)
  }

  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber (val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap (
    str,
    expectsLowerCase
  ) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase
      ? function (val) { return map[val.toLowerCase()]; }
      : function (val) { return map[val]; }
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Check if an attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array.
   */
  function remove (arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1)
      }
    }
  }

  /**
   * Check whether an object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn (obj, key) {
    return hasOwnProperty.call(obj, key)
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached (fn) {
    var cache = Object.create(null);
    return (function cachedFn (str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str))
    })
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
  });

  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */
  function polyfillBind (fn, ctx) {
    function boundFn (a) {
      var l = arguments.length;
      return l
        ? l > 1
          ? fn.apply(ctx, arguments)
          : fn.call(ctx, a)
        : fn.call(ctx)
    }

    boundFn._length = fn.length;
    return boundFn
  }

  function nativeBind (fn, ctx) {
    return fn.bind(ctx)
  }

  var bind = Function.prototype.bind
    ? nativeBind
    : polyfillBind;

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray (list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret
  }

  /**
   * Mix properties into target object.
   */
  function extend (to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject (arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res
  }

  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */
  function noop (a, b, c) {}

  /**
   * Always return false.
   */
  var no = function (a, b, c) { return false; };

  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */
  var identity = function (_) { return _; };

  /**
   * Generate a string containing static keys from compiler modules.
   */
  function genStaticKeys (modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || [])
    }, []).join(',')
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual (a, b) {
    if (a === b) { return true }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i])
          })
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime()
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key])
          })
        } else {
          /* istanbul ignore next */
          return false
        }
      } catch (e) {
        /* istanbul ignore next */
        return false
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b)
    } else {
      return false
    }
  }

  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */
  function looseIndexOf (arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) { return i }
    }
    return -1
  }

  /**
   * Ensure a function is called only once.
   */
  function once (fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    }
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = [
    'component',
    'directive',
    'filter'
  ];

  var LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
    'errorCaptured',
    'serverPrefetch'
  ];

  /*  */



  var config = ({
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  });

  /*  */

  /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */
  var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

  /**
   * Check if a string starts with $ or _
   */
  function isReserved (str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F
  }

  /**
   * Define a property.
   */
  function def (obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
  function parsePath (path) {
    if (bailRE.test(path)) {
      return
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
  var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/);

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = ({}).watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', ({
        get: function get () {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      })); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function () {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative (Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
  }

  var hasSymbol =
    typeof Symbol !== 'undefined' && isNative(Symbol) &&
    typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /*@__PURE__*/(function () {
      function Set () {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has (key) {
        return this.set[key] === true
      };
      Set.prototype.add = function add (key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear () {
        this.set = Object.create(null);
      };

      return Set;
    }());
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var generateComponentTrace = (noop); // work around flow check
  var formatComponentName = (noop);

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function (str) { return str
      .replace(classifyRE, function (c) { return c.toUpperCase(); })
      .replace(/[-_]/g, ''); };

    warn = function (msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && (!config.silent)) {
        console.error(("[Vue warn]: " + msg + trace));
      }
    };

    tip = function (msg, vm) {
      if (hasConsole && (!config.silent)) {
        console.warn("[Vue tip]: " + msg + (
          vm ? generateComponentTrace(vm) : ''
        ));
      }
    };

    formatComponentName = function (vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>'
      }
      var options = typeof vm === 'function' && vm.cid != null
        ? vm.options
        : vm._isVue
          ? vm.$options || vm.constructor.options
          : vm;
      var name = options.name || options._componentTag;
      var file = options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (
        (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
        (file && includeFile !== false ? (" at " + file) : '')
      )
    };

    var repeat = function (str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) { res += str; }
        if (n > 1) { str += str; }
        n >>= 1;
      }
      return res
    };

    generateComponentTrace = function (vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree
          .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
              ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
              : formatComponentName(vm))); })
          .join('\n')
      } else {
        return ("\n\n(found in " + (formatComponentName(vm)) + ")")
      }
    };
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep () {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub (sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub (sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend () {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify () {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    if (!config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort(function (a, b) { return a.id - b.id; });
    }
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // The current target watcher being evaluated.
  // This is globally unique because only one watcher
  // can be evaluated at a time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget (target) {
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget () {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }

  /*  */

  var VNode = function VNode (
    tag,
    data,
    children,
    text,
    elm,
    context,
    componentOptions,
    asyncFactory
  ) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance
  };

  Object.defineProperties( VNode.prototype, prototypeAccessors );

  var createEmptyVNode = function (text) {
    if ( text === void 0 ) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node
  };

  function createTextVNode (val) {
    return new VNode(undefined, undefined, undefined, String(val))
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode (vnode) {
    var cloned = new VNode(
      vnode.tag,
      vnode.data,
      // #7975
      // clone children array to avoid mutating original in case of cloning
      // a child.
      vnode.children && vnode.children.slice(),
      vnode.text,
      vnode.elm,
      vnode.context,
      vnode.componentOptions,
      vnode.asyncFactory
    );
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);

  var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ];

  /**
   * Intercept mutating methods and emit events
   */
  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break
        case 'splice':
          inserted = args.slice(2);
          break
      }
      if (inserted) { ob.observeArray(inserted); }
      // notify change
      ob.dep.notify();
      return result
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */
  var shouldObserve = true;

  function toggleObserving (value) {
    shouldObserve = value;
  }

  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */
  var Observer = function Observer (value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk (obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray (items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment (target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment (target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe (value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (
      shouldObserve &&
      !isServerRendering() &&
      (Array.isArray(value) || isPlainObject(value)) &&
      Object.isExtensible(value) &&
      !value._isVue
    ) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive$$1 (
    obj,
    key,
    val,
    customSetter,
    shallow
  ) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter () {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value
      },
      set: function reactiveSetter (newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || (newVal !== newVal && value !== value)) {
          return
        }
        /* eslint-enable no-self-compare */
        if (customSetter) {
          customSetter();
        }
        // #7981: for accessor properties without setter
        if (getter && !setter) { return }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set (target, key, val) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
        'at runtime - declare it upfront in the data option.'
      );
      return val
    }
    if (!ob) {
      target[key] = val;
      return val
    }
    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del (target, key) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid deleting properties on a Vue instance or its root $data ' +
        '- just set it to null.'
      );
      return
    }
    if (!hasOwn(target, key)) {
      return
    }
    delete target[key];
    if (!ob) {
      return
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray (value) {
    for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn(
          "option \"" + key + "\" can only be used during instance " +
          'creation with the `new` keyword.'
        );
      }
      return defaultStrat(parent, child)
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData (to, from) {
    if (!from) { return to }
    var key, toVal, fromVal;

    var keys = hasSymbol
      ? Reflect.ownKeys(from)
      : Object.keys(from);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      // in case the object is already observed...
      if (key === '__ob__') { continue }
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (
        toVal !== fromVal &&
        isPlainObject(toVal) &&
        isPlainObject(fromVal)
      ) {
        mergeData(toVal, fromVal);
      }
    }
    return to
  }

  /**
   * Data
   */
  function mergeDataOrFn (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal
      }
      if (!parentVal) {
        return childVal
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn () {
        return mergeData(
          typeof childVal === 'function' ? childVal.call(this, this) : childVal,
          typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
        )
      }
    } else {
      return function mergedInstanceDataFn () {
        // instance merge
        var instanceData = typeof childVal === 'function'
          ? childVal.call(vm, vm)
          : childVal;
        var defaultData = typeof parentVal === 'function'
          ? parentVal.call(vm, vm)
          : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData)
        } else {
          return defaultData
        }
      }
    }
  }

  strats.data = function (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        warn(
          'The "data" option should be a function ' +
          'that returns a per-instance value in component ' +
          'definitions.',
          vm
        );

        return parentVal
      }
      return mergeDataOrFn(parentVal, childVal)
    }

    return mergeDataOrFn(parentVal, childVal, vm)
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook (
    parentVal,
    childVal
  ) {
    var res = childVal
      ? parentVal
        ? parentVal.concat(childVal)
        : Array.isArray(childVal)
          ? childVal
          : [childVal]
      : parentVal;
    return res
      ? dedupeHooks(res)
      : res
  }

  function dedupeHooks (hooks) {
    var res = [];
    for (var i = 0; i < hooks.length; i++) {
      if (res.indexOf(hooks[i]) === -1) {
        res.push(hooks[i]);
      }
    }
    return res
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets (
    parentVal,
    childVal,
    vm,
    key
  ) {
    var res = Object.create(parentVal || null);
    if (childVal) {
      assertObjectType(key, childVal, vm);
      return extend(res, childVal)
    } else {
      return res
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) { parentVal = undefined; }
    if (childVal === nativeWatch) { childVal = undefined; }
    /* istanbul ignore if */
    if (!childVal) { return Object.create(parentVal || null) }
    {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent
        ? parent.concat(child)
        : Array.isArray(child) ? child : [child];
    }
    return ret
  };

  /**
   * Other object hashes.
   */
  strats.props =
  strats.methods =
  strats.inject =
  strats.computed = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = Object.create(null);
    extend(ret, parentVal);
    if (childVal) { extend(ret, childVal); }
    return ret
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };

  /**
   * Validate component names
   */
  function checkComponents (options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName (name) {
    if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
      warn(
        'Invalid component name: "' + name + '". Component names ' +
        'should conform to valid custom element name in html5 specification.'
      );
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + name
      );
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps (options, vm) {
    var props = options.props;
    if (!props) { return }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val)
          ? val
          : { type: val };
      }
    } else {
      warn(
        "Invalid value for option \"props\": expected an Array or an Object, " +
        "but got " + (toRawType(props)) + ".",
        vm
      );
    }
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject (options, vm) {
    var inject = options.inject;
    if (!inject) { return }
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val)
          ? extend({ from: key }, val)
          : { from: val };
      }
    } else {
      warn(
        "Invalid value for option \"inject\": expected an Array or an Object, " +
        "but got " + (toRawType(inject)) + ".",
        vm
      );
    }
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives (options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def$$1 = dirs[key];
        if (typeof def$$1 === 'function') {
          dirs[key] = { bind: def$$1, update: def$$1 };
        }
      }
    }
  }

  function assertObjectType (name, value, vm) {
    if (!isPlainObject(value)) {
      warn(
        "Invalid value for option \"" + name + "\": expected an Object, " +
        "but got " + (toRawType(value)) + ".",
        vm
      );
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions (
    parent,
    child,
    vm
  ) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child);

    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }
      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField (key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset (
    options,
    type,
    id,
    warnMissing
  ) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) { return assets[id] }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if (warnMissing && !res) {
      warn(
        'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
        options
      );
    }
    return res
  }

  /*  */



  function validateProp (
    key,
    propOptions,
    propsData,
    vm
  ) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);
        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue (vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if (isObject(def)) {
      warn(
        'Invalid default value for prop "' + key + '": ' +
        'Props with type Object/Array must use a factory function ' +
        'to return the default value.',
        vm
      );
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData &&
      vm.$options.propsData[key] === undefined &&
      vm._props[key] !== undefined
    ) {
      return vm._props[key]
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function'
      ? def.call(vm)
      : def
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp (
    prop,
    name,
    value,
    vm,
    absent
  ) {
    if (prop.required && absent) {
      warn(
        'Missing required prop: "' + name + '"',
        vm
      );
      return
    }
    if (value == null && !prop.required) {
      return
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }

    if (!valid) {
      warn(
        getInvalidTypeMessage(name, value, expectedTypes),
        vm
      );
      return
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn(
          'Invalid prop: custom validator check failed for prop "' + name + '".',
          vm
        );
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType (value, type) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value;
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    }
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType (fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ''
  }

  function isSameType (a, b) {
    return getType(a) === getType(b)
  }

  function getTypeIndex (type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i
      }
    }
    return -1
  }

  function getInvalidTypeMessage (name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', '));
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    var expectedValue = styleValue(value, expectedType);
    var receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        !isBoolean(expectedType, receivedType)) {
      message += " with value " + expectedValue;
    }
    message += ", got " + receivedType + " ";
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
      message += "with value " + receivedValue + ".";
    }
    return message
  }

  function styleValue (value, type) {
    if (type === 'String') {
      return ("\"" + value + "\"")
    } else if (type === 'Number') {
      return ("" + (Number(value)))
    } else {
      return ("" + value)
    }
  }

  function isExplicable (value) {
    var explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
  }

  function isBoolean () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
  }

  /*  */

  function handleError (err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();
    try {
      if (vm) {
        var cur = vm;
        while ((cur = cur.$parent)) {
          var hooks = cur.$options.errorCaptured;
          if (hooks) {
            for (var i = 0; i < hooks.length; i++) {
              try {
                var capture = hooks[i].call(cur, err, vm, info) === false;
                if (capture) { return }
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook');
              }
            }
          }
        }
      }
      globalHandleError(err, vm, info);
    } finally {
      popTarget();
    }
  }

  function invokeWithErrorHandling (
    handler,
    context,
    args,
    vm,
    info
  ) {
    var res;
    try {
      res = args ? handler.apply(context, args) : handler.call(context);
      if (res && !res._isVue && isPromise(res) && !res._handled) {
        res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
        // issue #9511
        // avoid catch triggering multiple times when nested calls
        res._handled = true;
      }
    } catch (e) {
      handleError(e, vm, info);
    }
    return res
  }

  function globalHandleError (err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info)
      } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) {
          logError(e, null, 'config.errorHandler');
        }
      }
    }
    logError(err, vm, info);
  }

  function logError (err, vm, info) {
    {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }

  /*  */

  var isUsingMicroTask = false;

  var callbacks = [];
  var pending = false;

  function flushCallbacks () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using microtasks.
  // In 2.5 we used (macro) tasks (in combination with microtasks).
  // However, it has subtle problems when state is changed right before repaint
  // (e.g. #6813, out-in transitions).
  // Also, using (macro) tasks in event handler would cause some weird behaviors
  // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
  // So we now use microtasks everywhere, again.
  // A major drawback of this tradeoff is that there are some scenarios
  // where microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690, which have workarounds)
  // or even between bubbling of the same event (#6566).
  var timerFunc;

  // The nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore next, $flow-disable-line */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    timerFunc = function () {
      p.then(flushCallbacks);
      // In problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
    isUsingMicroTask = true;
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
    isUsingMicroTask = true;
  } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Technically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function () {
      setImmediate(flushCallbacks);
    };
  } else {
    // Fallback to setTimeout.
    timerFunc = function () {
      setTimeout(flushCallbacks, 0);
    };
  }

  function nextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }

  /*  */

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (
      perf &&
      perf.mark &&
      perf.measure &&
      perf.clearMarks &&
      perf.clearMeasures
    ) {
      mark = function (tag) { return perf.mark(tag); };
      measure = function (name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        // perf.clearMeasures(name)
      };
    }
  }

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap(
      'Infinity,undefined,NaN,isFinite,isNaN,' +
      'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
      'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
      'require' // for Webpack/Browserify
    );

    var warnNonPresent = function (target, key) {
      warn(
        "Property or method \"" + key + "\" is not defined on the instance but " +
        'referenced during render. Make sure that this property is reactive, ' +
        'either in the data option, or for class-based components, by ' +
        'initializing the property. ' +
        'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
        target
      );
    };

    var warnReservedPrefix = function (target, key) {
      warn(
        "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
        'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
        'prevent conflicts with Vue internals. ' +
        'See: https://vuejs.org/v2/api/#data',
        target
      );
    };

    var hasProxy =
      typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set (target, key, value) {
          if (isBuiltInModifier(key)) {
            warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
            return false
          } else {
            target[key] = value;
            return true
          }
        }
      });
    }

    var hasHandler = {
      has: function has (target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) ||
          (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
        if (!has && !isAllowed) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return has || !isAllowed
      }
    };

    var getHandler = {
      get: function get (target, key) {
        if (typeof key === 'string' && !(key in target)) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return target[key]
      }
    };

    initProxy = function initProxy (vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped
          ? getHandler
          : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var seenObjects = new _Set();

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse (val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
  }

  function _traverse (val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
      return
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) { _traverse(val[i], seen); }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) { _traverse(val[keys[i]], seen); }
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    }
  });

  function createFnInvoker (fns, vm) {
    function invoker () {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
        }
      } else {
        // return handler return value for single handlers
        return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
      }
    }
    invoker.fns = fns;
    return invoker
  }

  function updateListeners (
    on,
    oldOn,
    add,
    remove$$1,
    createOnceHandler,
    vm
  ) {
    var name, def$$1, cur, old, event;
    for (name in on) {
      def$$1 = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) {
        warn(
          "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
          vm
        );
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur, vm);
        }
        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }
        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook (def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook () {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData (
    data,
    Ctor,
    tag
  ) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();
          if (
            key !== keyInLowerCase &&
            attrs && hasOwn(attrs, keyInLowerCase)
          ) {
            tip(
              "Prop \"" + keyInLowerCase + "\" is passed to component " +
              (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
              " \"" + key + "\". " +
              "Note that HTML attributes are case-insensitive and camelCased " +
              "props need to use their kebab-case equivalents when using in-DOM " +
              "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
            );
          }
        }
        checkProp(res, props, key, altKey, true) ||
        checkProp(res, attrs, key, altKey, false);
      }
    }
    return res
  }

  function checkProp (
    res,
    hash,
    key,
    altKey,
    preserve
  ) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true
      }
    }
    return false
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren (children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children)
      }
    }
    return children
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren (children) {
    return isPrimitive(children)
      ? [createTextVNode(children)]
      : Array.isArray(children)
        ? normalizeArrayChildren(children)
        : undefined
  }

  function isTextNode (node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment)
  }

  function normalizeArrayChildren (children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') { continue }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + (c[0]).text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) &&
            isDef(c.tag) &&
            isUndef(c.key) &&
            isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res
  }

  /*  */

  function initProvide (vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function'
        ? provide.call(vm)
        : provide;
    }
  }

  function initInjections (vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key], function () {
            warn(
              "Avoid mutating an injected value directly since the changes will be " +
              "overwritten whenever the provided component re-renders. " +
              "injection being mutated: \"" + key + "\"",
              vm
            );
          });
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject (inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        // #6574 in case the inject object is observed...
        if (key === '__ob__') { continue }
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function'
              ? provideDefault.call(vm)
              : provideDefault;
          } else {
            warn(("Injection \"" + key + "\" not found"), vm);
          }
        }
      }
      return result
    }
  }

  /*  */



  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots (
    children,
    context
  ) {
    if (!children || !children.length) {
      return {}
    }
    var slots = {};
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.fnContext === context) &&
        data && data.slot != null
      ) {
        var name = data.slot;
        var slot = (slots[name] || (slots[name] = []));
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots
  }

  function isWhitespace (node) {
    return (node.isComment && !node.asyncFactory) || node.text === ' '
  }

  /*  */

  function normalizeScopedSlots (
    slots,
    normalSlots,
    prevSlots
  ) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = slots ? !!slots.$stable : !hasNormalSlots;
    var key = slots && slots.$key;
    if (!slots) {
      res = {};
    } else if (slots._normalized) {
      // fast path 1: child component re-render only, parent did not change
      return slots._normalized
    } else if (
      isStable &&
      prevSlots &&
      prevSlots !== emptyObject &&
      key === prevSlots.$key &&
      !hasNormalSlots &&
      !prevSlots.$hasNormal
    ) {
      // fast path 2: stable scoped slots w/ no normal slots to proxy,
      // only need to normalize once
      return prevSlots
    } else {
      res = {};
      for (var key$1 in slots) {
        if (slots[key$1] && key$1[0] !== '$') {
          res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
        }
      }
    }
    // expose normal slots on scopedSlots
    for (var key$2 in normalSlots) {
      if (!(key$2 in res)) {
        res[key$2] = proxyNormalSlot(normalSlots, key$2);
      }
    }
    // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error
    if (slots && Object.isExtensible(slots)) {
      (slots)._normalized = res;
    }
    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res
  }

  function normalizeScopedSlot(normalSlots, key, fn) {
    var normalized = function () {
      var res = arguments.length ? fn.apply(null, arguments) : fn({});
      res = res && typeof res === 'object' && !Array.isArray(res)
        ? [res] // single vnode
        : normalizeChildren(res);
      return res && (
        res.length === 0 ||
        (res.length === 1 && res[0].isComment) // #9658
      ) ? undefined
        : res
    };
    // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.
    if (fn.proxy) {
      Object.defineProperty(normalSlots, key, {
        get: normalized,
        enumerable: true,
        configurable: true
      });
    }
    return normalized
  }

  function proxyNormalSlot(slots, key) {
    return function () { return slots[key]; }
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      if (hasSymbol && val[Symbol.iterator]) {
        ret = [];
        var iterator = val[Symbol.iterator]();
        var result = iterator.next();
        while (!result.done) {
          ret.push(render(result.value, ret.length));
          result = iterator.next();
        }
      } else {
        keys = Object.keys(val);
        ret = new Array(keys.length);
        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
    }
    if (!isDef(ret)) {
      ret = [];
    }
    (ret)._isVList = true;
    return ret
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot (
    name,
    fallback,
    props,
    bindObject
  ) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) { // scoped slot
      props = props || {};
      if (bindObject) {
        if (!isObject(bindObject)) {
          warn(
            'slot v-bind without argument expects an Object',
            this
          );
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes = scopedSlotFn(props) || fallback;
    } else {
      nodes = this.$slots[name] || fallback;
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes)
    } else {
      return nodes
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
  }

  /*  */

  function isKeyNotMatch (expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1
    } else {
      return expect !== actual
    }
  }

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes (
    eventKeyCode,
    key,
    builtInKeyCode,
    eventKeyName,
    builtInKeyName
  ) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName)
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode)
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key
    }
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps (
    data,
    tag,
    value,
    asProp,
    isSync
  ) {
    if (value) {
      if (!isObject(value)) {
        warn(
          'v-bind without argument expects an Object or Array value',
          this
        );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function ( key ) {
          if (
            key === 'class' ||
            key === 'style' ||
            isReservedAttribute(key)
          ) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {});
          }
          var camelizedKey = camelize(key);
          var hyphenatedKey = hyphenate(key);
          if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on[("update:" + key)] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) loop( key );
      }
    }
    return data
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic (
    index,
    isInFor
  ) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
      return tree
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(
      this._renderProxy,
      null,
      this // for render fns generated for functional component templates
    );
    markStatic(tree, ("__static__" + index), false);
    return tree
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce (
    tree,
    index,
    key
  ) {
    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
    return tree
  }

  function markStatic (
    tree,
    key,
    isOnce
  ) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode (node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners (data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        warn(
          'v-on without argument expects an Object value',
          this
        );
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data
  }

  /*  */

  function resolveScopedSlots (
    fns, // see flow/vnode
    res,
    // the following are added in 2.6
    hasDynamicKeys,
    contentHashKey
  ) {
    res = res || { $stable: !hasDynamicKeys };
    for (var i = 0; i < fns.length; i++) {
      var slot = fns[i];
      if (Array.isArray(slot)) {
        resolveScopedSlots(slot, res, hasDynamicKeys);
      } else if (slot) {
        // marker for reverse proxying v-slot without scope on this.$slots
        if (slot.proxy) {
          slot.fn.proxy = true;
        }
        res[slot.key] = slot.fn;
      }
    }
    if (contentHashKey) {
      (res).$key = contentHashKey;
    }
    return res
  }

  /*  */

  function bindDynamicKeys (baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
      var key = values[i];
      if (typeof key === 'string' && key) {
        baseObj[values[i]] = values[i + 1];
      } else if (key !== '' && key !== null) {
        // null is a special value for explicitly removing a binding
        warn(
          ("Invalid value for dynamic directive argument (expected string or null): " + key),
          this
        );
      }
    }
    return baseObj
  }

  // helper to dynamically append modifier runtime markers to event names.
  // ensure only append when value is already string, otherwise it will be cast
  // to string and cause the type check to miss.
  function prependModifier (value, symbol) {
    return typeof value === 'string' ? symbol + value : value
  }

  /*  */

  function installRenderHelpers (target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }

  /*  */

  function FunctionalRenderContext (
    data,
    props,
    children,
    parent,
    Ctor
  ) {
    var this$1 = this;

    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent);
      // $flow-disable-line
      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent;
      // $flow-disable-line
      parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
      if (!this$1.$slots) {
        normalizeScopedSlots(
          data.scopedSlots,
          this$1.$slots = resolveSlots(children, parent)
        );
      }
      return this$1.$slots
    };

    Object.defineProperty(this, 'scopedSlots', ({
      enumerable: true,
      get: function get () {
        return normalizeScopedSlots(data.scopedSlots, this.slots())
      }
    }));

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }
        return vnode
      };
    } else {
      this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent (
    Ctor,
    propsData,
    data,
    contextVm,
    children
  ) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
      if (isDef(data.props)) { mergeProps(props, data.props); }
    }

    var renderContext = new FunctionalRenderContext(
      data,
      props,
      children,
      contextVm,
      Ctor
    );

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);
      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
      }
      return res
    }
  }

  function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    {
      (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
    }
    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone
  }

  function mergeProps (to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  /*  */

  /*  */

  /*  */

  // inline hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init (vnode, hydrating) {
      if (
        vnode.componentInstance &&
        !vnode.componentInstance._isDestroyed &&
        vnode.data.keepAlive
      ) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(
          vnode,
          activeInstance
        );
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },

    prepatch: function prepatch (oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(
        child,
        options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
      );
    },

    insert: function insert (vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy (vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent (
    Ctor,
    data,
    context,
    children,
    tag
  ) {
    if (isUndef(Ctor)) {
      return
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn(("Invalid Component definition: " + (String(Ctor))), context);
      }
      return
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(
          asyncFactory,
          data,
          context,
          children,
          tag
        )
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children)
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // install component management hooks onto the placeholder node
    installComponentHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode(
      ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
      data, undefined, undefined, undefined, context,
      { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
      asyncFactory
    );

    return vnode
  }

  function createComponentInstanceForVnode (
    vnode, // we know it's MountedComponentVNode but flow doesn't
    parent // activeInstance in lifecycle state
  ) {
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options)
  }

  function installComponentHooks (data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];
      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1 (f1, f2) {
    var merged = function (a, b) {
      // flow complains about extra args which is why we use any
      f1(a, b);
      f2(a, b);
    };
    merged._merged = true;
    return merged
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel (options, data) {
    var prop = (options.model && options.model.prop) || 'value';
    var event = (options.model && options.model.event) || 'input'
    ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;
    if (isDef(existing)) {
      if (
        Array.isArray(existing)
          ? existing.indexOf(callback) === -1
          : existing !== callback
      ) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement (
    context,
    tag,
    data,
    children,
    normalizationType,
    alwaysNormalize
  ) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType)
  }

  function _createElement (
    context,
    tag,
    data,
    children,
    normalizationType
  ) {
    if (isDef(data) && isDef((data).__ob__)) {
      warn(
        "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
        'Always create fresh vnode data objects in each render!',
        context
      );
      return createEmptyVNode()
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode()
    }
    // warn against non-primitive key
    if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
    ) {
      {
        warn(
          'Avoid using non-primitive value as key, ' +
          'use string/number value instead.',
          context
        );
      }
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) &&
      typeof children[0] === 'function'
    ) {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        if (isDef(data) && isDef(data.nativeOn)) {
          warn(
            ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
            context
          );
        }
        vnode = new VNode(
          config.parsePlatformTagName(tag), data, children,
          undefined, undefined, context
        );
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(
          tag, data, children,
          undefined, undefined, context
        );
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (Array.isArray(vnode)) {
      return vnode
    } else if (isDef(vnode)) {
      if (isDef(ns)) { applyNS(vnode, ns); }
      if (isDef(data)) { registerDeepBindings(data); }
      return vnode
    } else {
      return createEmptyVNode()
    }
  }

  function applyNS (vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (
          isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes
  function registerDeepBindings (data) {
    if (isObject(data.style)) {
      traverse(data.style);
    }
    if (isObject(data.class)) {
      traverse(data.class);
    }
  }

  /*  */

  function initRender (vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  var currentRenderingInstance = null;

  function renderMixin (Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this)
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = normalizeScopedSlots(
          _parentVnode.data.scopedSlots,
          vm.$slots,
          vm.$scopedSlots
        );
      }

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        // There's no need to maintain a stack because all render fns are called
        // separately from one another. Nested component's render fns are called
        // when parent component is patched.
        currentRenderingInstance = vm;
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } finally {
        currentRenderingInstance = null;
      }
      // if the returned array contains only a single node, allow it
      if (Array.isArray(vnode) && vnode.length === 1) {
        vnode = vnode[0];
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if (Array.isArray(vnode)) {
          warn(
            'Multiple root nodes returned from render function. Render function ' +
            'should return a single root node.',
            vm
          );
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode
    };
  }

  /*  */

  function ensureCtor (comp, base) {
    if (
      comp.__esModule ||
      (hasSymbol && comp[Symbol.toStringTag] === 'Module')
    ) {
      comp = comp.default;
    }
    return isObject(comp)
      ? base.extend(comp)
      : comp
  }

  function createAsyncPlaceholder (
    factory,
    data,
    context,
    children,
    tag
  ) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node
  }

  function resolveAsyncComponent (
    factory,
    baseCtor
  ) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp
    }

    if (isDef(factory.resolved)) {
      return factory.resolved
    }

    var owner = currentRenderingInstance;
    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
      // already pending
      factory.owners.push(owner);
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp
    }

    if (owner && !isDef(factory.owners)) {
      var owners = factory.owners = [owner];
      var sync = true;
      var timerLoading = null;
      var timerTimeout = null

      ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

      var forceRender = function (renderCompleted) {
        for (var i = 0, l = owners.length; i < l; i++) {
          (owners[i]).$forceUpdate();
        }

        if (renderCompleted) {
          owners.length = 0;
          if (timerLoading !== null) {
            clearTimeout(timerLoading);
            timerLoading = null;
          }
          if (timerTimeout !== null) {
            clearTimeout(timerTimeout);
            timerTimeout = null;
          }
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender(true);
        } else {
          owners.length = 0;
        }
      });

      var reject = once(function (reason) {
        warn(
          "Failed to resolve async component: " + (String(factory)) +
          (reason ? ("\nReason: " + reason) : '')
        );
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (isPromise(res)) {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isPromise(res.component)) {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              timerLoading = setTimeout(function () {
                timerLoading = null;
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            timerTimeout = setTimeout(function () {
              timerTimeout = null;
              if (isUndef(factory.resolved)) {
                reject(
                  "timeout (" + (res.timeout) + "ms)"
                );
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading
        ? factory.loadingComp
        : factory.resolved
    }
  }

  /*  */

  function isAsyncPlaceholder (node) {
    return node.isComment && node.asyncFactory
  }

  /*  */

  function getFirstComponentChild (children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents (vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add (event, fn) {
    target.$on(event, fn);
  }

  function remove$1 (event, fn) {
    target.$off(event, fn);
  }

  function createOnceHandler (event, fn) {
    var _target = target;
    return function onceHandler () {
      var res = fn.apply(null, arguments);
      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    }
  }

  function updateComponentListeners (
    vm,
    listeners,
    oldListeners
  ) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin (Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on () {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          vm.$off(event[i$1], fn);
        }
        return vm
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm
      }
      if (!fn) {
        vm._events[event] = null;
        return vm
      }
      // specific handler
      var cb;
      var i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break
        }
      }
      return vm
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip(
            "Event \"" + lowerCaseEvent + "\" is emitted in component " +
            (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
            "Note that HTML attributes are case-insensitive and you cannot use " +
            "v-on to listen to camelCase events when using in-DOM templates. " +
            "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
          );
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        var info = "event handler for \"" + event + "\"";
        for (var i = 0, l = cbs.length; i < l; i++) {
          invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
      }
      return vm
    };
  }

  /*  */

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
      activeInstance = prevActiveInstance;
    }
  }

  function initLifecycle (vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin (Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      restoreActiveInstance();
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent (
    vm,
    el,
    hydrating
  ) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
          vm.$options.el || el) {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'compiler is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          );
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          );
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if (config.performance && mark) {
      updateComponent = function () {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure(("vue " + name + " render"), startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure(("vue " + name + " patch"), startTag, endTag);
      };
    } else {
      updateComponent = function () {
        vm._update(vm._render(), hydrating);
      };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, {
      before: function before () {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true /* isRenderWatcher */);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm
  }

  function updateChildComponent (
    vm,
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    {
      isUpdatingChildComponent = true;
    }

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.

    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.
    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!(
      (newScopedSlots && !newScopedSlots.$stable) ||
      (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
      (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
    );

    // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.
    var needsForceUpdate = !!(
      renderChildren ||               // has new static slots
      vm.$options._renderChildren ||  // has old static slots
      hasDynamicScopedSlot
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) { // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?
        props[key] = validateProp(key, propOptions, propsData, vm);
      }
      toggleObserving(true);
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);

    // resolve slots + force update if has children
    if (needsForceUpdate) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree (vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) { return true }
    }
    return false
  }

  function activateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return
      }
    } else if (vm._directInactive) {
      return
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook (vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        invokeWithErrorHandling(handlers[i], vm, null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState () {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  // Async edge case #6566 requires saving the timestamp when event listeners are
  // attached. However, calling performance.now() has a perf overhead especially
  // if the page has thousands of event listeners. Instead, we take a timestamp
  // every time the scheduler flushes and use that for all event listeners
  // attached during that flush.
  var currentFlushTimestamp = 0;

  // Async edge case fix requires storing an event listener's attach timestamp.
  var getNow = Date.now;

  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  // All IE versions use low-res event timestamps, and have problematic clock
  // implementations (#9632)
  if (inBrowser && !isIE) {
    var performance = window.performance;
    if (
      performance &&
      typeof performance.now === 'function' &&
      getNow() > document.createEvent('Event').timeStamp
    ) {
      // if the event timestamp, although evaluated AFTER the Date.now(), is
      // smaller than it, it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listener timestamps as
      // well.
      getNow = function () { return performance.now(); };
    }
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue () {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) { return a.id - b.id; });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      if (watcher.before) {
        watcher.before();
      }
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if (has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn(
            'You may have an infinite update loop ' + (
              watcher.user
                ? ("in watcher with expression \"" + (watcher.expression) + "\"")
                : "in a component render function."
            ),
            watcher.vm
          );
          break
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks (queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent (vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks (queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher (watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;

        if (!config.async) {
          flushSchedulerQueue();
          return
        }
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */



  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher (
    vm,
    expOrFn,
    cb,
    options,
    isRenderWatcher
  ) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = noop;
        warn(
          "Failed watching path: \"" + expOrFn + "\" " +
          'Watcher only accepts simple dot-delimited paths. ' +
          'For full control, use a function instead.',
          vm
        );
      }
    }
    this.value = this.lazy
      ? undefined
      : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get () {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep (dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var i = this.deps.length;
    while (i--) {
      var dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run () {
    if (this.active) {
      var value = this.get();
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate () {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend () {
    var i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown () {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  };

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy (target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter () {
      return this[sourceKey][key]
    };
    sharedPropertyDefinition.set = function proxySetter (val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState (vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) { initProps(vm, opts.props); }
    if (opts.methods) { initMethods(vm, opts.methods); }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) { initComputed(vm, opts.computed); }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps (vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
      toggleObserving(false);
    }
    var loop = function ( key ) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) ||
            config.isReservedAttr(hyphenatedKey)) {
          warn(
            ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
            vm
          );
        }
        defineReactive$$1(props, key, value, function () {
          if (!isRoot && !isUpdatingChildComponent) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              "value. Prop being mutated: \"" + key + "\"",
              vm
            );
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop( key );
    toggleObserving(true);
  }

  function initData (vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function'
      ? getData(data, vm)
      : data || {};
    if (!isPlainObject(data)) {
      data = {};
      warn(
        'data functions should return an object:\n' +
        'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
        vm
      );
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a data property."),
            vm
          );
        }
      }
      if (props && hasOwn(props, key)) {
        warn(
          "The data property \"" + key + "\" is already declared as a prop. " +
          "Use prop default value instead.",
          vm
        );
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData (data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
      return data.call(vm, vm)
    } catch (e) {
      handleError(e, vm, "data()");
      return {}
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed (vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      if (getter == null) {
        warn(
          ("Getter is missing for computed property \"" + key + "\"."),
          vm
        );
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(
          vm,
          getter || noop,
          noop,
          computedWatcherOptions
        );
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn(("The computed property \"" + key + "\" is already defined in data."), vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
        }
      }
    }
  }

  function defineComputed (
    target,
    key,
    userDef
  ) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache
        ? createComputedGetter(key)
        : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get
        ? shouldCache && userDef.cache !== false
          ? createComputedGetter(key)
          : createGetterInvoker(userDef.get)
        : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }
    if (sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn(
          ("Computed property \"" + key + "\" was assigned to but it has no setter."),
          this
        );
      };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter (key) {
    return function computedGetter () {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value
      }
    }
  }

  function createGetterInvoker(fn) {
    return function computedGetter () {
      return fn.call(this, this)
    }
  }

  function initMethods (vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      {
        if (typeof methods[key] !== 'function') {
          warn(
            "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
            "Did you reference the function correctly?",
            vm
          );
        }
        if (props && hasOwn(props, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a prop."),
            vm
          );
        }
        if ((key in vm) && isReserved(key)) {
          warn(
            "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
            "Avoid defining component methods that start with _ or $."
          );
        }
      }
      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch (vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher (
    vm,
    expOrFn,
    handler,
    options
  ) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options)
  }

  function stateMixin (Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () { return this._data };
    var propsDef = {};
    propsDef.get = function () { return this._props };
    {
      dataDef.set = function () {
        warn(
          'Avoid replacing instance root $data. ' +
          'Use nested data properties instead.',
          this
        );
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (
      expOrFn,
      cb,
      options
    ) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options)
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        try {
          cb.call(vm, watcher.value);
        } catch (error) {
          handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
        }
      }
      return function unwatchFn () {
        watcher.teardown();
      }
    };
  }

  /*  */

  var uid$3 = 0;

  function initMixin (Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$3++;

      var startTag, endTag;
      /* istanbul ignore if */
      if (config.performance && mark) {
        startTag = "vue-perf-start:" + (vm._uid);
        endTag = "vue-perf-end:" + (vm._uid);
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(
          resolveConstructorOptions(vm.constructor),
          options || {},
          vm
        );
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if (config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure(("vue " + (vm._name) + " init"), startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent (vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;

    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions (Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options
  }

  function resolveModifiedOptions (Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) { modified = {}; }
        modified[key] = latest[key];
      }
    }
    return modified
  }

  function Vue (options) {
    if (!(this instanceof Vue)
    ) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);

  /*  */

  function initUse (Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
      if (installedPlugins.indexOf(plugin) > -1) {
        return this
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this
    };
  }

  /*  */

  function initMixin$1 (Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this
    };
  }

  /*  */

  function initExtend (Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId]
      }

      var name = extendOptions.name || Super.options.name;
      if (name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent (options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(
        Super.options,
        extendOptions
      );
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub
    };
  }

  function initProps$1 (Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1 (Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters (Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (
        id,
        definition
      ) {
        if (!definition) {
          return this.options[type + 's'][id]
        } else {
          /* istanbul ignore if */
          if (type === 'component') {
            validateComponentName(id);
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition
        }
      };
    });
  }

  /*  */



  function getComponentName (opts) {
    return opts && (opts.Ctor.options.name || opts.tag)
  }

  function matches (pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1
    } else if (isRegExp(pattern)) {
      return pattern.test(name)
    }
    /* istanbul ignore next */
    return false
  }

  function pruneCache (keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry (
    cache,
    key,
    keys,
    current
  ) {
    var cached$$1 = cache[key];
    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    created: function created () {
      this.cache = Object.create(null);
      this.keys = [];
    },

    destroyed: function destroyed () {
      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },

    mounted: function mounted () {
      var this$1 = this;

      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) { return matches(val, name); });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) { return !matches(val, name); });
      });
    },

    render: function render () {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;
        if (
          // not included
          (include && (!name || !matches(include, name))) ||
          // excluded
          (exclude && name && matches(exclude, name))
        ) {
          return vnode
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null
          // same constructor may get registered as different local components
          // so cid alone is not enough (#3269)
          ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
          : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }
      return vnode || (slot && slot[0])
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI (Vue) {
    // config
    var configDef = {};
    configDef.get = function () { return config; };
    {
      configDef.set = function () {
        warn(
          'Do not replace the Vue.config object, set individual fields instead.'
        );
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    // 2.6 explicit observable API
    Vue.observable = function (obj) {
      observe(obj);
      return obj
    };

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);

  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get () {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext
    }
  });

  // expose FunctionalRenderContext for ssr runtime helper installation
  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });

  Vue.version = '2.6.11';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function (tag, type, attr) {
    return (
      (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
      (attr === 'selected' && tag === 'option') ||
      (attr === 'checked' && tag === 'input') ||
      (attr === 'muted' && tag === 'video')
    )
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

  var convertEnumeratedValue = function (key, value) {
    return isFalsyAttrValue(value) || value === 'false'
      ? 'false'
      // allow arbitrary string value for contenteditable
      : key === 'contenteditable' && isValidContentEditableValue(value)
        ? value
        : 'true'
  };

  var isBooleanAttr = makeMap(
    'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,translate,' +
    'truespeed,typemustmatch,visible'
  );

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function (name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
  };

  var getXlinkProp = function (name) {
    return isXlink(name) ? name.slice(6, name.length) : ''
  };

  var isFalsyAttrValue = function (val) {
    return val == null || val === false
  };

  /*  */

  function genClassForVnode (vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class)
  }

  function mergeClassData (child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class)
        ? [child.class, parent.class]
        : parent.class
    }
  }

  function renderClass (
    staticClass,
    dynamicClass
  ) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass))
    }
    /* istanbul ignore next */
    return ''
  }

  function concat (a, b) {
    return a ? b ? (a + ' ' + b) : a : (b || '')
  }

  function stringifyClass (value) {
    if (Array.isArray(value)) {
      return stringifyArray(value)
    }
    if (isObject(value)) {
      return stringifyObject(value)
    }
    if (typeof value === 'string') {
      return value
    }
    /* istanbul ignore next */
    return ''
  }

  function stringifyArray (value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) { res += ' '; }
        res += stringified;
      }
    }
    return res
  }

  function stringifyObject (value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) { res += ' '; }
        res += key;
      }
    }
    return res
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap(
    'html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot'
  );

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap(
    'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
    true
  );

  var isPreTag = function (tag) { return tag === 'pre'; };

  var isReservedTag = function (tag) {
    return isHTMLTag(tag) || isSVG(tag)
  };

  function getTagNamespace (tag) {
    if (isSVG(tag)) {
      return 'svg'
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math'
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement (tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true
    }
    if (isReservedTag(tag)) {
      return false
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag]
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return (unknownElementCache[tag] = (
        el.constructor === window.HTMLUnknownElement ||
        el.constructor === window.HTMLElement
      ))
    } else {
      return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query (el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        warn(
          'Cannot find element: ' + el
        );
        return document.createElement('div')
      }
      return selected
    } else {
      return el
    }
  }

  /*  */

  function createElement$1 (tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm
  }

  function createElementNS (namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName)
  }

  function createTextNode (text) {
    return document.createTextNode(text)
  }

  function createComment (text) {
    return document.createComment(text)
  }

  function insertBefore (parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild (node, child) {
    node.removeChild(child);
  }

  function appendChild (node, child) {
    node.appendChild(child);
  }

  function parentNode (node) {
    return node.parentNode
  }

  function nextSibling (node) {
    return node.nextSibling
  }

  function tagName (node) {
    return node.tagName
  }

  function setTextContent (node, text) {
    node.textContent = text;
  }

  function setStyleScope (node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps = /*#__PURE__*/Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });

  /*  */

  var ref = {
    create: function create (_, vnode) {
      registerRef(vnode);
    },
    update: function update (oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy (vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef (vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!isDef(key)) { return }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode (a, b) {
    return (
      a.key === b.key && (
        (
          a.tag === b.tag &&
          a.isComment === b.isComment &&
          isDef(a.data) === isDef(b.data) &&
          sameInputType(a, b)
        ) || (
          isTrue(a.isAsyncPlaceholder) &&
          a.asyncFactory === b.asyncFactory &&
          isUndef(b.asyncFactory.error)
        )
      )
    )
  }

  function sameInputType (a, b) {
    if (a.tag !== 'input') { return true }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
  }

  function createKeyToOldIdx (children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) { map[key] = i; }
    }
    return map
  }

  function createPatchFunction (backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt (elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
    }

    function createRmCb (childElm, listeners) {
      function remove$$1 () {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove$$1.listeners = listeners;
      return remove$$1
    }

    function removeNode (el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1 (vnode, inVPre) {
      return (
        !inVPre &&
        !vnode.ns &&
        !(
          config.ignoredElements.length &&
          config.ignoredElements.some(function (ignore) {
            return isRegExp(ignore)
              ? ignore.test(vnode.tag)
              : ignore === vnode.tag
          })
        ) &&
        config.isUnknownElement(vnode.tag)
      )
    }

    var creatingElmInVPre = 0;

    function createElm (
      vnode,
      insertedVnodeQueue,
      parentElm,
      refElm,
      nested,
      ownerArray,
      index
    ) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }
          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn(
              'Unknown custom element: <' + tag + '> - did you ' +
              'register the component correctly? For recursive components, ' +
              'make sure to provide the "name" option.',
              vnode.context
            );
          }
        }

        vnode.elm = vnode.ns
          ? nodeOps.createElementNS(vnode.ns, tag)
          : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if (data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true
        }
      }
    }

    function initComponent (vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert (parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren (vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable (vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag)
    }

    function invokeCreateHooks (vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) { i.create(emptyNode, vnode); }
        if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope (vnode) {
      var i;
      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        i !== vnode.fnContext &&
        isDef(i = i.$options._scopeId)
      ) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook (vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
        for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes (vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else { // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook (vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
          idxInOld = isDef(newStartVnode.key)
            ? oldKeyToIdx[newStartVnode.key]
            : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) { // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys (children) {
      var seenKeys = {};
      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;
        if (isDef(key)) {
          if (seenKeys[key]) {
            warn(
              ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
              vnode.context
            );
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld (node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) { return i }
      }
    }

    function patchVnode (
      oldVnode,
      vnode,
      insertedVnodeQueue,
      ownerArray,
      index,
      removeOnly
    ) {
      if (oldVnode === vnode) {
        return
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
      ) {
        vnode.componentInstance = oldVnode.componentInstance;
        return
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
        if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
        } else if (isDef(ch)) {
          {
            checkDuplicateKeys(ch);
          }
          if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
      }
    }

    function invokeInsertHook (vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || (data && data.pre);
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true
      }
      // assert node match
      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false
        }
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }
                return false
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }
                return false
              }
            }
          }
        }
        if (isDef(data)) {
          var fullInvoke = false;
          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break
            }
          }
          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true
    }

    function assertNodeMatch (node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || (
          !isUnknownElement$$1(vnode, inVPre) &&
          vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
        )
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3)
      }
    }

    return function patch (oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
        return
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode
              } else {
                warn(
                  'The client-side rendered virtual DOM tree is not matching ' +
                  'server-rendered content. This is likely caused by incorrect ' +
                  'HTML markup, for example nesting block-level elements inside ' +
                  '<p>, or missing <tbody>. Bailing hydration and performing ' +
                  'full client-side render.'
                );
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm);

          // create new node
          createElm(
            vnode,
            insertedVnodeQueue,
            // extremely rare edge case: do not insert if old element is in a
            // leaving transition. Only happens when combining transition +
            // keep-alive + HOCs. (#4590)
            oldElm._leaveCb ? null : parentElm,
            nodeOps.nextSibling(oldElm)
          );

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm)) {
            removeVnodes([oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm
    }
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives (vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives (oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update (oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        dir.oldArg = oldDir.arg;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function () {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1 (
    dirs,
    vm
  ) {
    var res = Object.create(null);
    if (!dirs) {
      // $flow-disable-line
      return res
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res
  }

  function getRawDirName (dir) {
    return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
  }

  function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
      }
    }
  }

  var baseModules = [
    ref,
    directives
  ];

  /*  */

  function updateAttrs (oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr (el, key, value) {
    if (el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED'
          ? 'true'
          : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, convertEnumeratedValue(key, value));
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr (el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        el.tagName === 'TEXTAREA' &&
        key === 'placeholder' && value !== '' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass (oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (
      isUndef(data.staticClass) &&
      isUndef(data.class) && (
        isUndef(oldData) || (
          isUndef(oldData.staticClass) &&
          isUndef(oldData.class)
        )
      )
    ) {
      return
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters (exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
      } else if (
        c === 0x7C && // pipe
        exp.charCodeAt(i + 1) !== 0x7C &&
        exp.charCodeAt(i - 1) !== 0x7C &&
        !curly && !square && !paren
      ) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22: inDouble = true; break         // "
          case 0x27: inSingle = true; break         // '
          case 0x60: inTemplateString = true; break // `
          case 0x28: paren++; break                 // (
          case 0x29: paren--; break                 // )
          case 0x5B: square++; break                // [
          case 0x5D: square--; break                // ]
          case 0x7B: curly++; break                 // {
          case 0x7D: curly--; break                 // }
        }
        if (c === 0x2f) { // /
          var j = i - 1;
          var p = (void 0);
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') { break }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter () {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression
  }

  function wrapFilter (exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return ("_f(\"" + filter + "\")(" + exp + ")")
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
    }
  }

  /*  */



  /* eslint-disable no-unused-vars */
  function baseWarn (msg, range) {
    console.error(("[Vue compiler]: " + msg));
  }
  /* eslint-enable no-unused-vars */

  function pluckModuleFunction (
    modules,
    key
  ) {
    return modules
      ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
      : []
  }

  function addProp (el, name, value, range, dynamic) {
    (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  function addAttr (el, name, value, range, dynamic) {
    var attrs = dynamic
      ? (el.dynamicAttrs || (el.dynamicAttrs = []))
      : (el.attrs || (el.attrs = []));
    attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  // add a raw attr (use this in preTransforms)
  function addRawAttr (el, name, value, range) {
    el.attrsMap[name] = value;
    el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
  }

  function addDirective (
    el,
    name,
    rawName,
    value,
    arg,
    isDynamicArg,
    modifiers,
    range
  ) {
    (el.directives || (el.directives = [])).push(rangeSetItem({
      name: name,
      rawName: rawName,
      value: value,
      arg: arg,
      isDynamicArg: isDynamicArg,
      modifiers: modifiers
    }, range));
    el.plain = false;
  }

  function prependModifierMarker (symbol, name, dynamic) {
    return dynamic
      ? ("_p(" + name + ",\"" + symbol + "\")")
      : symbol + name // mark the event as captured
  }

  function addHandler (
    el,
    name,
    value,
    modifiers,
    important,
    warn,
    range,
    dynamic
  ) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if (
      warn &&
      modifiers.prevent && modifiers.passive
    ) {
      warn(
        'passive and prevent can\'t be used together. ' +
        'Passive handler can\'t prevent default event.',
        range
      );
    }

    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (modifiers.right) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
      } else if (name === 'click') {
        name = 'contextmenu';
        delete modifiers.right;
      }
    } else if (modifiers.middle) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
      } else if (name === 'click') {
        name = 'mouseup';
      }
    }

    // check capture modifier
    if (modifiers.capture) {
      delete modifiers.capture;
      name = prependModifierMarker('!', name, dynamic);
    }
    if (modifiers.once) {
      delete modifiers.once;
      name = prependModifierMarker('~', name, dynamic);
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
      delete modifiers.passive;
      name = prependModifierMarker('&', name, dynamic);
    }

    var events;
    if (modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    el.plain = false;
  }

  function getRawBindingAttr (
    el,
    name
  ) {
    return el.rawAttrsMap[':' + name] ||
      el.rawAttrsMap['v-bind:' + name] ||
      el.rawAttrsMap[name]
  }

  function getBindingAttr (
    el,
    name,
    getStatic
  ) {
    var dynamicValue =
      getAndRemoveAttr(el, ':' + name) ||
      getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue)
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue)
      }
    }
  }

  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.
  function getAndRemoveAttr (
    el,
    name,
    removeFromMap
  ) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break
        }
      }
    }
    if (removeFromMap) {
      delete el.attrsMap[name];
    }
    return val
  }

  function getAndRemoveAttrByRegex (
    el,
    name
  ) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      var attr = list[i];
      if (name.test(attr.name)) {
        list.splice(i, 1);
        return attr
      }
    }
  }

  function rangeSetItem (
    item,
    range
  ) {
    if (range) {
      if (range.start != null) {
        item.start = range.start;
      }
      if (range.end != null) {
        item.end = range.end;
      }
    }
    return item
  }

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel (
    el,
    value,
    modifiers
  ) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression =
        "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: ("(" + value + ")"),
      expression: JSON.stringify(value),
      callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
    };
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode (
    value,
    assignment
  ) {
    var res = parseModel(value);
    if (res.key === null) {
      return (value + "=" + assignment)
    } else {
      return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
    }
  }

  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */

  var len, str, chr, index$1, expressionPos, expressionEndPos;



  function parseModel (val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');
      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        }
      } else {
        return {
          exp: val,
          key: null
        }
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    }
  }

  function next () {
    return str.charCodeAt(++index$1)
  }

  function eof () {
    return index$1 >= len
  }

  function isStringStart (chr) {
    return chr === 0x22 || chr === 0x27
  }

  function parseBracket (chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue
      }
      if (chr === 0x5B) { inBracket++; }
      if (chr === 0x5D) { inBracket--; }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break
      }
    }
  }

  function parseString (chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break
      }
    }
  }

  /*  */

  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model (
    el,
    dir,
    _warn
  ) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1(
          "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
          "File inputs are read only. Use a v-on:change listener instead.",
          el.rawAttrsMap['v-model']
        );
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "v-model is not supported on this element type. " +
        'If you are working with contenteditable, it\'s recommended to ' +
        'wrap a library dedicated for that purpose inside a custom component.',
        el.rawAttrsMap['v-model']
      );
    }

    // ensure runtime directive metadata
    return true
  }

  function genCheckboxModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked',
      "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
    );
    addHandler(el, 'change',
      "var $$a=" + value + "," +
          '$$el=$event.target,' +
          "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
      'if(Array.isArray($$a)){' +
        "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
            '$$i=_i($$a,$$v);' +
        "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
        "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
      "}else{" + (genAssignmentCode(value, '$$c')) + "}",
      null, true
    );
  }

  function genRadioModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
    addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" +
      ".call($event.target.options,function(o){return o.selected})" +
      ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
      "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + (genAssignmentCode(value, assignment));
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel (
    el,
    value,
    modifiers
  ) {
    var type = el.attrsMap.type;

    // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type
    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
      if (value$1 && !typeBinding) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(
          binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
          'because the latter already expands to a value binding internally',
          el.rawAttrsMap[binding]
        );
      }
    }

    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy
      ? 'change'
      : type === 'range'
        ? RANGE_TOKEN
        : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', ("(" + value + ")"));
    addHandler(el, event, code, null, true);
    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents (on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler$1 (event, handler, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler () {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    }
  }

  // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
  // implementation and does not fire microtasks in between event propagation, so
  // safe to exclude.
  var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

  function add$1 (
    name,
    handler,
    capture,
    passive
  ) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
      var attachedTimestamp = currentFlushTimestamp;
      var original = handler;
      handler = original._wrapper = function (e) {
        if (
          // no bubbling, should always fire.
          // this is just a safety net in case event.timeStamp is unreliable in
          // certain weird environments...
          e.target === e.currentTarget ||
          // event is fired after handler attachment
          e.timeStamp >= attachedTimestamp ||
          // bail for environments that have buggy event.timeStamp implementations
          // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
          // #9681 QtWebEngine event.timeStamp is negative value
          e.timeStamp <= 0 ||
          // #9448 bail if event is fired in another document in a multi-page
          // electron/nw.js app, since event.timeStamp will be using a different
          // starting reference
          e.target.ownerDocument !== document
        ) {
          return original.apply(this, arguments)
        }
      };
    }
    target$1.addEventListener(
      name,
      handler,
      supportsPassive
        ? { capture: capture, passive: passive }
        : capture
    );
  }

  function remove$2 (
    name,
    handler,
    capture,
    _target
  ) {
    (_target || target$1).removeEventListener(
      name,
      handler._wrapper || handler,
      capture
    );
  }

  function updateDOMListeners (oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  var svgContainer;

  function updateDOMProps (oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (!(key in props)) {
        elm[key] = '';
      }
    }

    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) { vnode.children.length = 0; }
        if (cur === oldProps[key]) { continue }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value' && elm.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
        // IE doesn't support innerHTML for SVG elements
        svgContainer = svgContainer || document.createElement('div');
        svgContainer.innerHTML = "<svg>" + cur + "</svg>";
        var svg = svgContainer.firstChild;
        while (elm.firstChild) {
          elm.removeChild(elm.firstChild);
        }
        while (svg.firstChild) {
          elm.appendChild(svg.firstChild);
        }
      } else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecesarry `checked` update.
        cur !== oldProps[key]
      ) {
        // some property updates can throw
        // e.g. `value` on <progress> w/ non-finite value
        try {
          elm[key] = cur;
        } catch (e) {}
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue (elm, checkVal) {
    return (!elm.composing && (
      elm.tagName === 'OPTION' ||
      isNotInFocusAndDirty(elm, checkVal) ||
      isDirtyWithModifiers(elm, checkVal)
    ))
  }

  function isNotInFocusAndDirty (elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try { notInFocus = document.activeElement !== elm; } catch (e) {}
    return notInFocus && elm.value !== checkVal
  }

  function isDirtyWithModifiers (elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal)
      }
      if (modifiers.trim) {
        return value.trim() !== newVal.trim()
      }
    }
    return value !== newVal
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData (data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle
      ? extend(data.staticStyle, style)
      : style
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding (bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle)
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle)
    }
    return bindingStyle
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle (vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (
          childNode && childNode.data &&
          (styleData = normalizeStyleData(childNode.data))
        ) {
          extend(res, styleData);
        }
      }
    }

    if ((styleData = normalizeStyleData(vnode.data))) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while ((parentNode = parentNode.parent)) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function (el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && (prop in emptyStyle)) {
      return prop
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name
      }
    }
  });

  function updateStyle (oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) &&
      isUndef(oldData.staticStyle) && isUndef(oldData.style)
    ) {
      return
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__)
      ? extend({}, style)
      : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  var whitespaceRE = /\s+/;

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition (def$$1) {
    if (!def$$1) {
      return
    }
    /* istanbul ignore else */
    if (typeof def$$1 === 'object') {
      var res = {};
      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }
      extend(res, def$$1);
      return res
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1)
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: (name + "-enter"),
      enterToClass: (name + "-enter-to"),
      enterActiveClass: (name + "-enter-active"),
      leaveClass: (name + "-leave"),
      leaveToClass: (name + "-leave-to"),
      leaveActiveClass: (name + "-leave-active")
    }
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined &&
      window.onwebkittransitionend !== undefined
    ) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined &&
      window.onwebkitanimationend !== undefined
    ) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser
    ? window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : setTimeout
    : /* istanbul ignore next */ function (fn) { return fn(); };

  function nextFrame (fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass (el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass (el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds (
    el,
    expectedType,
    cb
  ) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) { return cb() }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function () {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function (e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo (el, expectedType) {
    var styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0
        ? transitionTimeout > animationTimeout
          ? TRANSITION
          : ANIMATION
        : null;
      propCount = type
        ? type === TRANSITION
          ? transitionDurations.length
          : animationDurations.length
        : 0;
    }
    var hasTransform =
      type === TRANSITION &&
      transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    }
  }

  function getTimeout (delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i])
    }))
  }

  // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors
  function toMs (s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000
  }

  /*  */

  function enter (vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      context = transitionNode.context;
      transitionNode = transitionNode.parent;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return
    }

    var startClass = isAppear && appearClass
      ? appearClass
      : enterClass;
    var activeClass = isAppear && appearActiveClass
      ? appearActiveClass
      : enterActiveClass;
    var toClass = isAppear && appearToClass
      ? appearToClass
      : enterToClass;

    var beforeEnterHook = isAppear
      ? (beforeAppear || beforeEnter)
      : beforeEnter;
    var enterHook = isAppear
      ? (typeof appear === 'function' ? appear : enter)
      : enter;
    var afterEnterHook = isAppear
      ? (afterAppear || afterEnter)
      : afterEnter;
    var enterCancelledHook = isAppear
      ? (appearCancelled || enterCancelled)
      : enterCancelled;

    var explicitEnterDuration = toNumber(
      isObject(duration)
        ? duration.enter
        : duration
    );

    if (explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb
        ) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);
        if (!cb.cancelled) {
          addTransitionClass(el, toClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave (vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
      return rm()
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
      return
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(
      isObject(duration)
        ? duration.leave
        : duration
    );

    if (isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave () {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return
      }
      // record leaving element
      if (!vnode.data.show && el.parentNode) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration (val, name, vnode) {
    if (typeof val !== 'number') {
      warn(
        "<transition> explicit " + name + " duration is not a valid number - " +
        "got " + (JSON.stringify(val)) + ".",
        vnode.context
      );
    } else if (isNaN(val)) {
      warn(
        "<transition> explicit " + name + " duration is NaN - " +
        'the duration expression might be incorrect.',
        vnode.context
      );
    }
  }

  function isValidDuration (val) {
    return typeof val === 'number' && !isNaN(val)
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength (fn) {
    if (isUndef(fn)) {
      return false
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(
        Array.isArray(invokerFns)
          ? invokerFns[0]
          : invokerFns
      )
    } else {
      return (fn._length || fn.length) > 1
    }
  }

  function _enter (_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1 (vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [
    attrs,
    klass,
    events,
    domProps,
    style,
    transition
  ];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted (el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated (el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple
            ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
            : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected (el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected (el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      warn(
        "<select multiple v-model=\"" + (binding.expression) + "\"> " +
        "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
        vm
      );
      return
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption (value, options) {
    return options.every(function (o) { return !looseEqual(o, value); })
  }

  function getValue (option) {
    return '_value' in option
      ? option._value
      : option.value
  }

  function onCompositionStart (e) {
    e.target.composing = true;
  }

  function onCompositionEnd (e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) { return }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger (el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode (vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
      ? locateNode(vnode.componentInstance._vnode)
      : vnode
  }

  var show = {
    bind: function bind (el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay =
        el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update (el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (!value === !oldValue) { return }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind (
      el,
      binding,
      vnode,
      oldVnode,
      isDestroy
    ) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show
  };

  /*  */

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild (vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children))
    } else {
      return vnode
    }
  }

  function extractTransitionData (comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data
  }

  function placeholder (h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      })
    }
  }

  function hasParentTransition (vnode) {
    while ((vnode = vnode.parent)) {
      if (vnode.data.transition) {
        return true
      }
    }
  }

  function isSameChild (child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag
  }

  var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

  var isVShowDirective = function (d) { return d.name === 'show'; };

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render (h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(isNotTextNode);
      /* istanbul ignore if */
      if (!children.length) {
        return
      }

      // warn multiple elements
      if (children.length > 1) {
        warn(
          '<transition> can only be used on a single element. Use ' +
          '<transition-group> for lists.',
          this.$parent
        );
      }

      var mode = this.mode;

      // warn invalid mode
      if (mode && mode !== 'in-out' && mode !== 'out-in'
      ) {
        warn(
          'invalid <transition> mode: ' + mode,
          this.$parent
        );
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild
      }

      if (this._leaving) {
        return placeholder(h, rawChild)
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + (this._uid) + "-";
      child.key = child.key == null
        ? child.isComment
          ? id + 'comment'
          : id + child.tag
        : isPrimitive(child.key)
          ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
          : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(isVShowDirective)) {
        child.data.show = true;
      }

      if (
        oldChild &&
        oldChild.data &&
        !isSameChild(child, oldChild) &&
        !isAsyncPlaceholder(oldChild) &&
        // #6687 component root is a comment node
        !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
      ) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild)
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild
          }
          var delayedLeave;
          var performLeave = function () { delayedLeave(); };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
        }
      }

      return rawChild
    }
  };

  /*  */

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    beforeMount: function beforeMount () {
      var this$1 = this;

      var update = this._update;
      this._update = function (vnode, hydrating) {
        var restoreActiveInstance = setActiveInstance(this$1);
        // force removing pass
        this$1.__patch__(
          this$1._vnode,
          this$1.kept,
          false, // hydrating
          true // removeOnly (!important, avoids unnecessary moves)
        );
        this$1._vnode = this$1.kept;
        restoreActiveInstance();
        update.call(this$1, vnode, hydrating);
      };
    },

    render: function render (h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c
            ;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
            warn(("<transition-group> children must be keyed: <" + name + ">"));
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children)
    },

    updated: function updated () {
      var children = this.prevChildren;
      var moveClass = this.moveClass || ((this.name || 'v') + '-move');
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
            if (e && e.target !== el) {
              return
            }
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove (el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return (this._hasMove = info.hasTransform)
      }
    }
  };

  function callPendingCbs (c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition (c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation (c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents);

  // install platform patch function
  Vue.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating)
  };

  // devtools global hook
  /* istanbul ignore next */
  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else {
          console[console.info ? 'info' : 'log'](
            'Download the Vue Devtools extension for a better development experience:\n' +
            'https://github.com/vuejs/vue-devtools'
          );
        }
      }
      if (config.productionTip !== false &&
        typeof console !== 'undefined'
      ) {
        console[console.info ? 'info' : 'log'](
          "You are running Vue in development mode.\n" +
          "Make sure to turn on production mode when deploying for production.\n" +
          "See more tips at https://vuejs.org/guide/deployment.html"
        );
      }
    }, 0);
  }

  /*  */

  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
  });



  function parseText (
    text,
    delimiters
  ) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return
    }
    var tokens = [];
    var rawTokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, tokenValue;
    while ((match = tagRE.exec(text))) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index));
        tokens.push(JSON.stringify(tokenValue));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push(("_s(" + exp + ")"));
      rawTokens.push({ '@binding': exp });
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex));
      tokens.push(JSON.stringify(tokenValue));
    }
    return {
      expression: tokens.join('+'),
      tokens: rawTokens
    }
  }

  /*  */

  function transformNode (el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if (staticClass) {
      var res = parseText(staticClass, options.delimiters);
      if (res) {
        warn(
          "class=\"" + staticClass + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div class="{{ val }}">, use <div :class="val">.',
          el.rawAttrsMap['class']
        );
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData (el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + (el.staticClass) + ",";
    }
    if (el.classBinding) {
      data += "class:" + (el.classBinding) + ",";
    }
    return data
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData
  };

  /*  */

  function transformNode$1 (el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var res = parseText(staticStyle, options.delimiters);
        if (res) {
          warn(
            "style=\"" + staticStyle + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div style="{{ val }}">, use <div :style="val">.',
            el.rawAttrsMap['style']
          );
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1 (el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + (el.staticStyle) + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + (el.styleBinding) + "),";
    }
    return data
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1
  };

  /*  */

  var decoder;

  var he = {
    decode: function decode (html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent
    }
  };

  /*  */

  var isUnaryTag = makeMap(
    'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
    'link,meta,param,source,track,wbr'
  );

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap(
    'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
  );

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap(
    'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
    'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
    'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
    'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
    'title,tr,track'
  );

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  // Regular Expressions for parsing tags and attributes
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp(("^<" + qnameCapture));
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
  var doctype = /^<!DOCTYPE [^>]+>/i;
  // #7298: escape - to avoid being passed as HTML comment when inlined in page
  var comment = /^<!\--/;
  var conditionalComment = /^<!\[/;

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t',
    '&#39;': "'"
  };
  var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

  // #5992
  var isIgnoreNewlineTag = makeMap('pre,textarea', true);
  var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

  function decodeAttr (value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) { return decodingMap[match]; })
  }

  function parseHTML (html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
              }
              advance(commentEnd + 3);
              continue
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
              advance(1);
            }
            continue
          }
        }

        var text = (void 0), rest = (void 0), next = (void 0);
        if (textEnd >= 0) {
          rest = html.slice(textEnd);
          while (
            !endTag.test(rest) &&
            !startTagOpen.test(rest) &&
            !comment.test(rest) &&
            !conditionalComment.test(rest)
          ) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);
            if (next < 0) { break }
            textEnd += next;
            rest = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
        }

        if (textEnd < 0) {
          text = html;
        }

        if (text) {
          advance(text.length);
        }

        if (options.chars && text) {
          options.chars(text, index - text.length, index);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text
              .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
              .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }
          if (options.chars) {
            options.chars(text);
          }
          return ''
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if (!stack.length && options.warn) {
          options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
        }
        break
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance (n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag () {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
          attr.start = index;
          advance(attr[0].length);
          attr.end = index;
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match
        }
      }
    }

    function handleStartTag (match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
          ? options.shouldDecodeNewlinesForHref
          : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };
        if (options.outputSourceRange) {
          attrs[i].start = args.start + args[0].match(/^\s*/).length;
          attrs[i].end = args.end;
        }
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag (tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) { start = index; }
      if (end == null) { end = index; }

      // Find the closest opened tag of the same type
      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if (i > pos || !tagName &&
            options.warn
          ) {
            options.warn(
              ("tag <" + (stack[i].tag) + "> has no matching end tag."),
              { start: stack[i].start, end: stack[i].end }
            );
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:|^#/;
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;
  var dynamicArgRE = /^\[.*\]$/;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^\.|^v-bind:/;
  var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

  var slotRE = /^v-slot(:|$)|^#/;

  var lineBreakRE = /[\r\n]/;
  var whitespaceRE$1 = /\s+/g;

  var invalidAttributeRE = /[\s"'<>\/=]/;

  var decodeHTMLCached = cached(he.decode);

  var emptySlotScopeToken = "_empty_";

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;
  var maybeComponent;

  function createASTElement (
    tag,
    attrs,
    parent
  ) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      rawAttrsMap: {},
      parent: parent,
      children: []
    }
  }

  /**
   * Convert HTML string to AST.
   */
  function parse (
    template,
    options
  ) {
    warn$2 = options.warn || baseWarn;

    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;
    var isReservedTag = options.isReservedTag || no;
    maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var whitespaceOption = options.whitespace;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce (msg, range) {
      if (!warned) {
        warned = true;
        warn$2(msg, range);
      }
    }

    function closeElement (element) {
      trimEndingWhitespace(element);
      if (!inVPre && !element.processed) {
        element = processElement(element, options);
      }
      // tree management
      if (!stack.length && element !== root) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          {
            checkRootConstraints(element);
          }
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead.",
            { start: element.start }
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else {
          if (element.slotScope) {
            // scoped slot
            // keep it in the children list so that v-else(-if) conditions can
            // find it as the prev node.
            var name = element.slotTarget || '"default"'
            ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          }
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }

      // final children cleanup
      // filter out scoped slots
      element.children = element.children.filter(function (c) { return !(c).slotScope; });
      // remove trailing whitespace node again
      trimEndingWhitespace(element);

      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
      // apply post-transforms
      for (var i = 0; i < postTransforms.length; i++) {
        postTransforms[i](element, options);
      }
    }

    function trimEndingWhitespace (el) {
      // remove trailing whitespace node
      if (!inPre) {
        var lastNode;
        while (
          (lastNode = el.children[el.children.length - 1]) &&
          lastNode.type === 3 &&
          lastNode.text === ' '
        ) {
          el.children.pop();
        }
      }
    }

    function checkRootConstraints (el) {
      if (el.tag === 'slot' || el.tag === 'template') {
        warnOnce(
          "Cannot use <" + (el.tag) + "> as component root element because it may " +
          'contain multiple nodes.',
          { start: el.start }
        );
      }
      if (el.attrsMap.hasOwnProperty('v-for')) {
        warnOnce(
          'Cannot use v-for on stateful component root element because ' +
          'it renders multiple elements.',
          el.rawAttrsMap['v-for']
        );
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      outputSourceRange: options.outputSourceRange,
      start: function start (tag, attrs, unary, start$1, end) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);
        if (ns) {
          element.ns = ns;
        }

        {
          if (options.outputSourceRange) {
            element.start = start$1;
            element.end = end;
            element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
              cumulated[attr.name] = attr;
              return cumulated
            }, {});
          }
          attrs.forEach(function (attr) {
            if (invalidAttributeRE.test(attr.name)) {
              warn$2(
                "Invalid dynamic argument expression: attribute names cannot contain " +
                "spaces, quotes, <, >, / or =.",
                {
                  start: attr.start + attr.name.indexOf("["),
                  end: attr.start + attr.name.length
                }
              );
            }
          });
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          warn$2(
            'Templates should only be responsible for mapping the state to the ' +
            'UI. Avoid placing tags with side-effects in your templates, such as ' +
            "<" + tag + ">" + ', as they will not be parsed.',
            { start: element.start }
          );
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
        }

        if (!root) {
          root = element;
          {
            checkRootConstraints(root);
          }
        }

        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          closeElement(element);
        }
      },

      end: function end (tag, start, end$1) {
        var element = stack[stack.length - 1];
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        if (options.outputSourceRange) {
          element.end = end$1;
        }
        closeElement(element);
      },

      chars: function chars (text, start, end) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce(
                'Component template requires a root element, rather than just text.',
                { start: start }
              );
            } else if ((text = text.trim())) {
              warnOnce(
                ("text \"" + text + "\" outside root element will be ignored."),
                { start: start }
              );
            }
          }
          return
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE &&
          currentParent.tag === 'textarea' &&
          currentParent.attrsMap.placeholder === text
        ) {
          return
        }
        var children = currentParent.children;
        if (inPre || text.trim()) {
          text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
        } else if (!children.length) {
          // remove the whitespace-only node right after an opening tag
          text = '';
        } else if (whitespaceOption) {
          if (whitespaceOption === 'condense') {
            // in condense mode, remove the whitespace node if it contains
            // line break, otherwise condense to a single space
            text = lineBreakRE.test(text) ? '' : ' ';
          } else {
            text = ' ';
          }
        } else {
          text = preserveWhitespace ? ' ' : '';
        }
        if (text) {
          if (!inPre && whitespaceOption === 'condense') {
            // condense consecutive whitespaces into single space
            text = text.replace(whitespaceRE$1, ' ');
          }
          var res;
          var child;
          if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
            child = {
              type: 2,
              expression: res.expression,
              tokens: res.tokens,
              text: text
            };
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            child = {
              type: 3,
              text: text
            };
          }
          if (child) {
            if (options.outputSourceRange) {
              child.start = start;
              child.end = end;
            }
            children.push(child);
          }
        }
      },
      comment: function comment (text, start, end) {
        // adding anyting as a sibling to the root node is forbidden
        // comments should still be allowed, but ignored
        if (currentParent) {
          var child = {
            type: 3,
            text: text,
            isComment: true
          };
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          currentParent.children.push(child);
        }
      }
    });
    return root
  }

  function processPre (el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs (el) {
    var list = el.attrsList;
    var len = list.length;
    if (len) {
      var attrs = el.attrs = new Array(len);
      for (var i = 0; i < len; i++) {
        attrs[i] = {
          name: list[i].name,
          value: JSON.stringify(list[i].value)
        };
        if (list[i].start != null) {
          attrs[i].start = list[i].start;
          attrs[i].end = list[i].end;
        }
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement (
    element,
    options
  ) {
    processKey(element);

    // determine whether this is a plain element after
    // removing structural attributes
    element.plain = (
      !element.key &&
      !element.scopedSlots &&
      !element.attrsList.length
    );

    processRef(element);
    processSlotContent(element);
    processSlotOutlet(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }
    processAttrs(element);
    return element
  }

  function processKey (el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      {
        if (el.tag === 'template') {
          warn$2(
            "<template> cannot be keyed. Place the key on real elements instead.",
            getRawBindingAttr(el, 'key')
          );
        }
        if (el.for) {
          var iterator = el.iterator2 || el.iterator1;
          var parent = el.parent;
          if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
            warn$2(
              "Do not use v-for index as key on <transition-group> children, " +
              "this is the same as not using keys.",
              getRawBindingAttr(el, 'key'),
              true /* tip */
            );
          }
        }
      }
      el.key = exp;
    }
  }

  function processRef (el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor (el) {
    var exp;
    if ((exp = getAndRemoveAttr(el, 'v-for'))) {
      var res = parseFor(exp);
      if (res) {
        extend(el, res);
      } else {
        warn$2(
          ("Invalid v-for expression: " + exp),
          el.rawAttrsMap['v-for']
        );
      }
    }
  }



  function parseFor (exp) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) { return }
    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      res.alias = alias.replace(forIteratorRE, '').trim();
      res.iterator1 = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.iterator2 = iteratorMatch[2].trim();
      }
    } else {
      res.alias = alias;
    }
    return res
  }

  function processIf (el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions (el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2(
        "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
        "used on element <" + (el.tag) + "> without corresponding v-if.",
        el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
      );
    }
  }

  function findPrevElement (children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i]
      } else {
        if (children[i].text !== ' ') {
          warn$2(
            "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
            "will be ignored.",
            children[i]
          );
        }
        children.pop();
      }
    }
  }

  function addIfCondition (el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce (el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  // handle content being passed to a component as slot,
  // e.g. <template slot="xxx">, <div slot-scope="xxx">
  function processSlotContent (el) {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          el.rawAttrsMap['scope'],
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          el.rawAttrsMap['slot-scope'],
          true
        );
      }
      el.slotScope = slotScope;
    }

    // slot="xxx"
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
      }
    }

    // 2.6 v-slot syntax
    {
      if (el.tag === 'template') {
        // v-slot on <template>
        var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding) {
          {
            if (el.slotTarget || el.slotScope) {
              warn$2(
                "Unexpected mixed usage of different slot syntaxes.",
                el
              );
            }
            if (el.parent && !maybeComponent(el.parent)) {
              warn$2(
                "<template v-slot> can only appear at the root level inside " +
                "the receiving component",
                el
              );
            }
          }
          var ref = getSlotName(slotBinding);
          var name = ref.name;
          var dynamic = ref.dynamic;
          el.slotTarget = name;
          el.slotTargetDynamic = dynamic;
          el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
        }
      } else {
        // v-slot on component, denotes default slot
        var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding$1) {
          {
            if (!maybeComponent(el)) {
              warn$2(
                "v-slot can only be used on components or <template>.",
                slotBinding$1
              );
            }
            if (el.slotScope || el.slotTarget) {
              warn$2(
                "Unexpected mixed usage of different slot syntaxes.",
                el
              );
            }
            if (el.scopedSlots) {
              warn$2(
                "To avoid scope ambiguity, the default slot should also use " +
                "<template> syntax when there are other named slots.",
                slotBinding$1
              );
            }
          }
          // add the component's children to its default slot
          var slots = el.scopedSlots || (el.scopedSlots = {});
          var ref$1 = getSlotName(slotBinding$1);
          var name$1 = ref$1.name;
          var dynamic$1 = ref$1.dynamic;
          var slotContainer = slots[name$1] = createASTElement('template', [], el);
          slotContainer.slotTarget = name$1;
          slotContainer.slotTargetDynamic = dynamic$1;
          slotContainer.children = el.children.filter(function (c) {
            if (!c.slotScope) {
              c.parent = slotContainer;
              return true
            }
          });
          slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
          // remove children as they are returned from scopedSlots now
          el.children = [];
          // mark el non-plain so data gets generated
          el.plain = false;
        }
      }
    }
  }

  function getSlotName (binding) {
    var name = binding.name.replace(slotRE, '');
    if (!name) {
      if (binding.name[0] !== '#') {
        name = 'default';
      } else {
        warn$2(
          "v-slot shorthand syntax requires a slot name.",
          binding
        );
      }
    }
    return dynamicArgRE.test(name)
      // dynamic [name]
      ? { name: name.slice(1, -1), dynamic: true }
      // static name
      : { name: ("\"" + name + "\""), dynamic: false }
  }

  // handle <slot/> outlets
  function processSlotOutlet (el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if (el.key) {
        warn$2(
          "`key` does not work on <slot> because slots are abstract outlets " +
          "and can possibly expand into multiple elements. " +
          "Use the key on a wrapping element instead.",
          getRawBindingAttr(el, 'key')
        );
      }
    }
  }

  function processComponent (el) {
    var binding;
    if ((binding = getBindingAttr(el, 'is'))) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs (el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name.replace(dirRE, ''));
        // support .foo shorthand syntax for the .prop modifier
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) { // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          if (
            value.trim().length === 0
          ) {
            warn$2(
              ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
            );
          }
          if (modifiers) {
            if (modifiers.prop && !isDynamic) {
              name = camelize(name);
              if (name === 'innerHtml') { name = 'innerHTML'; }
            }
            if (modifiers.camel && !isDynamic) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              syncGen = genAssignmentCode(value, "$event");
              if (!isDynamic) {
                addHandler(
                  el,
                  ("update:" + (camelize(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
                if (hyphenate(name) !== camelize(name)) {
                  addHandler(
                    el,
                    ("update:" + (hyphenate(name))),
                    syncGen,
                    null,
                    false,
                    warn$2,
                    list[i]
                  );
                }
              } else {
                // handler w/ dynamic event name
                addHandler(
                  el,
                  ("\"update:\"+(" + name + ")"),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i],
                  true // dynamic
                );
              }
            }
          }
          if ((modifiers && modifiers.prop) || (
            !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
          )) {
            addProp(el, name, value, list[i], isDynamic);
          } else {
            addAttr(el, name, value, list[i], isDynamic);
          }
        } else if (onRE.test(name)) { // v-on
          name = name.replace(onRE, '');
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
        } else { // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          isDynamic = false;
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
            if (dynamicArgRE.test(arg)) {
              arg = arg.slice(1, -1);
              isDynamic = true;
            }
          }
          addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
          if (name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var res = parseText(value, delimiters);
          if (res) {
            warn$2(
              name + "=\"" + value + "\": " +
              'Interpolation inside attributes has been removed. ' +
              'Use v-bind or the colon shorthand instead. For example, ' +
              'instead of <div id="{{ val }}">, use <div :id="val">.',
              list[i]
            );
          }
        }
        addAttr(el, name, JSON.stringify(value), list[i]);
        // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation
        if (!el.component &&
            name === 'muted' &&
            platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true', list[i]);
        }
      }
    }
  }

  function checkInFor (el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true
      }
      parent = parent.parent;
    }
    return false
  }

  function parseModifiers (name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) { ret[m.slice(1)] = true; });
      return ret
    }
  }

  function makeAttrsMap (attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if (
        map[attrs[i].name] && !isIE && !isEdge
      ) {
        warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map
  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag (el) {
    return el.tag === 'script' || el.tag === 'style'
  }

  function isForbiddenTag (el) {
    return (
      el.tag === 'style' ||
      (el.tag === 'script' && (
        !el.attrsMap.type ||
        el.attrsMap.type === 'text/javascript'
      ))
    )
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug (attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res
  }

  function checkForAliasModel (el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2(
          "<" + (el.tag) + " v-model=\"" + value + "\">: " +
          "You are binding v-model directly to a v-for iteration alias. " +
          "This will not be able to modify the v-for source array because " +
          "writing to the alias is like modifying a function local variable. " +
          "Consider using an array of objects and use v-model on an object property instead.",
          el.rawAttrsMap['v-model']
        );
      }
      _el = _el.parent;
    }
  }

  /*  */

  function preTransformNode (el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;
      if (!map['v-model']) {
        return
      }

      var typeBinding;
      if (map[':type'] || map['v-bind:type']) {
        typeBinding = getBindingAttr(el, 'type');
      }
      if (!map.type && !typeBinding && map['v-bind']) {
        typeBinding = "(" + (map['v-bind']) + ").type";
      }

      if (typeBinding) {
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
        // 1. checkbox
        var branch0 = cloneASTElement(el);
        // process for on the main node
        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed
        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        });
        // 2. add radio else-if condition
        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        });
        // 3. other
        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0
      }
    }
  }

  function cloneASTElement (el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent)
  }

  var model$1 = {
    preTransformNode: preTransformNode
  };

  var modules$1 = [
    klass$1,
    style$1,
    model$1
  ];

  /*  */

  function text (el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
    }
  }

  /*  */

  function html (el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };

  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize (root, options) {
    if (!root) { return }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1 (keys) {
    return makeMap(
      'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
      (keys ? ',' + keys : '')
    )
  }

  function markStatic$1 (node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (
        !isPlatformReservedTag(node.tag) &&
        node.tag !== 'slot' &&
        node.attrsMap['inline-template'] == null
      ) {
        return
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);
          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots (node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(
        node.children.length === 1 &&
        node.children[0].type === 3
      )) {
        node.staticRoot = true;
        return
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic (node) {
    if (node.type === 2) { // expression
      return false
    }
    if (node.type === 3) { // text
      return true
    }
    return !!(node.pre || (
      !node.hasBindings && // no dynamic bindings
      !node.if && !node.for && // not v-if or v-for or v-else
      !isBuiltInTag(node.tag) && // not a built-in
      isPlatformReservedTag(node.tag) && // not a component
      !isDirectChildOfTemplateFor(node) &&
      Object.keys(node).every(isStaticKey)
    ))
  }

  function isDirectChildOfTemplateFor (node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false
      }
      if (node.for) {
        return true
      }
    }
    return false
  }

  /*  */

  var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
  var fnInvokeRE = /\([^)]*?\);*$/;
  var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

  // KeyboardEvent.keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // KeyboardEvent.key aliases
  var keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: 'Tab',
    enter: 'Enter',
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [' ', 'Spacebar'],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    'delete': ['Backspace', 'Delete', 'Del']
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers (
    events,
    isNative
  ) {
    var prefix = isNative ? 'nativeOn:' : 'on:';
    var staticHandlers = "";
    var dynamicHandlers = "";
    for (var name in events) {
      var handlerCode = genHandler(events[name]);
      if (events[name] && events[name].dynamic) {
        dynamicHandlers += name + "," + handlerCode + ",";
      } else {
        staticHandlers += "\"" + name + "\":" + handlerCode + ",";
      }
    }
    staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
    if (dynamicHandlers) {
      return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
    } else {
      return prefix + staticHandlers
    }
  }

  function genHandler (handler) {
    if (!handler) {
      return 'function(){}'
    }

    if (Array.isArray(handler)) {
      return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);
    var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

    if (!handler.modifiers) {
      if (isMethodPath || isFunctionExpression) {
        return handler.value
      }
      return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = (handler.modifiers);
          genModifierCode += genGuard(
            ['ctrl', 'shift', 'alt', 'meta']
              .filter(function (keyModifier) { return !modifiers[keyModifier]; })
              .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
              .join('||')
          );
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath
        ? ("return " + (handler.value) + "($event)")
        : isFunctionExpression
          ? ("return (" + (handler.value) + ")($event)")
          : isFunctionInvocation
            ? ("return " + (handler.value))
            : handler.value;
      return ("function($event){" + code + handlerCode + "}")
    }
  }

  function genKeyFilter (keys) {
    return (
      // make sure the key filters only apply to KeyboardEvents
      // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
      // key events that do not have keyCode property...
      "if(!$event.type.indexOf('key')&&" +
      (keys.map(genFilterCode).join('&&')) + ")return null;"
    )
  }

  function genFilterCode (key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return ("$event.keyCode!==" + keyVal)
    }
    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return (
      "_k($event.keyCode," +
      (JSON.stringify(key)) + "," +
      (JSON.stringify(keyCode)) + "," +
      "$event.key," +
      "" + (JSON.stringify(keyName)) +
      ")"
    )
  }

  /*  */

  function on (el, dir) {
    if (dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
  }

  /*  */

  function bind$1 (el, dir) {
    el.wrapData = function (code) {
      return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
    };
  }

  /*  */

  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop
  };

  /*  */





  var CodegenState = function CodegenState (options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;
    this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
    this.onceId = 0;
    this.staticRenderFns = [];
    this.pre = false;
  };



  function generate (
    ast,
    options
  ) {
    var state = new CodegenState(options);
    var code = ast ? genElement(ast, state) : '_c("div")';
    return {
      render: ("with(this){return " + code + "}"),
      staticRenderFns: state.staticRenderFns
    }
  }

  function genElement (el, state) {
    if (el.parent) {
      el.pre = el.pre || el.parent.pre;
    }

    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state)
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state)
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state)
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
      return genChildren(el, state) || 'void 0'
    } else if (el.tag === 'slot') {
      return genSlot(el, state)
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data;
        if (!el.plain || (el.pre && state.maybeComponent(el))) {
          data = genData$2(el, state);
        }

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
      }
      // module transforms
      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }
      return code
    }
  }

  // hoist static sub-trees out
  function genStatic (el, state) {
    el.staticProcessed = true;
    // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.
    var originalPreState = state.pre;
    if (el.pre) {
      state.pre = el.pre;
    }
    state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
    state.pre = originalPreState;
    return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
  }

  // v-once
  function genOnce (el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break
        }
        parent = parent.parent;
      }
      if (!key) {
        state.warn(
          "v-once can only be used inside v-for that is keyed. ",
          el.rawAttrsMap['v-once']
        );
        return genElement(el, state)
      }
      return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
    } else {
      return genStatic(el, state)
    }
  }

  function genIf (
    el,
    state,
    altGen,
    altEmpty
  ) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
  }

  function genIfConditions (
    conditions,
    state,
    altGen,
    altEmpty
  ) {
    if (!conditions.length) {
      return altEmpty || '_e()'
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
    } else {
      return ("" + (genTernaryExp(condition.block)))
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp (el) {
      return altGen
        ? altGen(el, state)
        : el.once
          ? genOnce(el, state)
          : genElement(el, state)
    }
  }

  function genFor (
    el,
    state,
    altGen,
    altHelper
  ) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
    var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

    if (state.maybeComponent(el) &&
      el.tag !== 'slot' &&
      el.tag !== 'template' &&
      !el.key
    ) {
      state.warn(
        "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
        "v-for should have explicit keys. " +
        "See https://vuejs.org/guide/list.html#key for more info.",
        el.rawAttrsMap['v-for'],
        true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return (altHelper || '_l') + "((" + exp + ")," +
      "function(" + alias + iterator1 + iterator2 + "){" +
        "return " + ((altGen || genElement)(el, state)) +
      '})'
  }

  function genData$2 (el, state) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs) { data += dirs + ','; }

    // key
    if (el.key) {
      data += "key:" + (el.key) + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + (el.ref) + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + (el.tag) + "\",";
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:" + (genProps(el.attrs)) + ",";
    }
    // DOM props
    if (el.props) {
      data += "domProps:" + (genProps(el.props)) + ",";
    }
    // event handlers
    if (el.events) {
      data += (genHandlers(el.events, false)) + ",";
    }
    if (el.nativeEvents) {
      data += (genHandlers(el.nativeEvents, true)) + ",";
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + (el.slotTarget) + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind dynamic argument wrap
    // v-bind with dynamic arguments must be applied using the same v-bind object
    // merge helper so that class/style/mustUseProp attrs are handled correctly.
    if (el.dynamicAttrs) {
      data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
    }
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }
    return data
  }

  function genDirectives (el, state) {
    var dirs = el.directives;
    if (!dirs) { return }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']'
    }
  }

  function genInlineTemplate (el, state) {
    var ast = el.children[0];
    if (el.children.length !== 1 || ast.type !== 1) {
      state.warn(
        'Inline-template components must have exactly one child element.',
        { start: el.start }
      );
    }
    if (ast && ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
    }
  }

  function genScopedSlots (
    el,
    slots,
    state
  ) {
    // by default scoped slots are considered "stable", this allows child
    // components with only scoped slots to skip forced updates from parent.
    // but in some cases we have to bail-out of this optimization
    // for example if the slot contains dynamic names, has v-if or v-for on them...
    var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
      var slot = slots[key];
      return (
        slot.slotTargetDynamic ||
        slot.if ||
        slot.for ||
        containsSlotChild(slot) // is passing down slot from parent which may be dynamic
      )
    });

    // #9534: if a component with scoped slots is inside a conditional branch,
    // it's possible for the same component to be reused but with different
    // compiled slot content. To avoid that, we generate a unique key based on
    // the generated code of all the slot contents.
    var needsKey = !!el.if;

    // OR when it is inside another scoped slot or v-for (the reactivity may be
    // disconnected due to the intermediate scope variable)
    // #9438, #9506
    // TODO: this can be further optimized by properly analyzing in-scope bindings
    // and skip force updating ones that do not actually use scope variables.
    if (!needsForceUpdate) {
      var parent = el.parent;
      while (parent) {
        if (
          (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
          parent.for
        ) {
          needsForceUpdate = true;
          break
        }
        if (parent.if) {
          needsKey = true;
        }
        parent = parent.parent;
      }
    }

    var generatedSlots = Object.keys(slots)
      .map(function (key) { return genScopedSlot(slots[key], state); })
      .join(',');

    return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
  }

  function hash(str) {
    var hash = 5381;
    var i = str.length;
    while(i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0
  }

  function containsSlotChild (el) {
    if (el.type === 1) {
      if (el.tag === 'slot') {
        return true
      }
      return el.children.some(containsSlotChild)
    }
    return false
  }

  function genScopedSlot (
    el,
    state
  ) {
    var isLegacySyntax = el.attrsMap['slot-scope'];
    if (el.if && !el.ifProcessed && !isLegacySyntax) {
      return genIf(el, state, genScopedSlot, "null")
    }
    if (el.for && !el.forProcessed) {
      return genFor(el, state, genScopedSlot)
    }
    var slotScope = el.slotScope === emptySlotScopeToken
      ? ""
      : String(el.slotScope);
    var fn = "function(" + slotScope + "){" +
      "return " + (el.tag === 'template'
        ? el.if && isLegacySyntax
          ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
          : genChildren(el, state) || 'undefined'
        : genElement(el, state)) + "}";
    // reverse proxy v-slot without scope on this.$slots
    var reverseProxy = slotScope ? "" : ",proxy:true";
    return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
  }

  function genChildren (
    el,
    state,
    checkSkip,
    altGenElement,
    altGenNode
  ) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 &&
        el$1.for &&
        el$1.tag !== 'template' &&
        el$1.tag !== 'slot'
      ) {
        var normalizationType = checkSkip
          ? state.maybeComponent(el$1) ? ",1" : ",0"
          : "";
        return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
      }
      var normalizationType$1 = checkSkip
        ? getNormalizationType(children, state.maybeComponent)
        : 0;
      var gen = altGenNode || genNode;
      return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType (
    children,
    maybeComponent
  ) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue
      }
      if (needsNormalization(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
        res = 2;
        break
      }
      if (maybeComponent(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
        res = 1;
      }
    }
    return res
  }

  function needsNormalization (el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
  }

  function genNode (node, state) {
    if (node.type === 1) {
      return genElement(node, state)
    } else if (node.type === 3 && node.isComment) {
      return genComment(node)
    } else {
      return genText(node)
    }
  }

  function genText (text) {
    return ("_v(" + (text.type === 2
      ? text.expression // no need for () because already wrapped in _s()
      : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
  }

  function genComment (comment) {
    return ("_e(" + (JSON.stringify(comment.text)) + ")")
  }

  function genSlot (el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? ("," + children) : '');
    var attrs = el.attrs || el.dynamicAttrs
      ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
          // slot props are camelized
          name: camelize(attr.name),
          value: attr.value,
          dynamic: attr.dynamic
        }); }))
      : null;
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')'
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent (
    componentName,
    el,
    state
  ) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
  }

  function genProps (props) {
    var staticProps = "";
    var dynamicProps = "";
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      var value = transformSpecialNewlines(prop.value);
      if (prop.dynamic) {
        dynamicProps += (prop.name) + "," + value + ",";
      } else {
        staticProps += "\"" + (prop.name) + "\":" + value + ",";
      }
    }
    staticProps = "{" + (staticProps.slice(0, -1)) + "}";
    if (dynamicProps) {
      return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
    } else {
      return staticProps
    }
  }

  // #3895, #4268
  function transformSpecialNewlines (text) {
    return text
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
  }

  /*  */



  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + (
    'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
    'super,throw,while,yield,delete,export,import,return,switch,default,' +
    'extends,finally,continue,debugger,function,arguments'
  ).split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + (
    'delete,typeof,void'
  ).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors (ast, warn) {
    if (ast) {
      checkNode(ast, warn);
    }
  }

  function checkNode (node, warn) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            var range = node.rawAttrsMap[name];
            if (name === 'v-for') {
              checkFor(node, ("v-for=\"" + value + "\""), warn, range);
            } else if (name === 'v-slot' || name[0] === '#') {
              checkFunctionParameterExpression(value, (name + "=\"" + value + "\""), warn, range);
            } else if (onRE.test(name)) {
              checkEvent(value, (name + "=\"" + value + "\""), warn, range);
            } else {
              checkExpression(value, (name + "=\"" + value + "\""), warn, range);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], warn);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, warn, node);
    }
  }

  function checkEvent (exp, text, warn, range) {
    var stripped = exp.replace(stripStringRE, '');
    var keywordMatch = stripped.match(unaryOperatorsRE);
    if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
      warn(
        "avoid using JavaScript unary operator as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
        range
      );
    }
    checkExpression(exp, text, warn, range);
  }

  function checkFor (node, text, warn, range) {
    checkExpression(node.for || '', text, warn, range);
    checkIdentifier(node.alias, 'v-for alias', text, warn, range);
    checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
    checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
  }

  function checkIdentifier (
    ident,
    type,
    text,
    warn,
    range
  ) {
    if (typeof ident === 'string') {
      try {
        new Function(("var " + ident + "=_"));
      } catch (e) {
        warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
      }
    }
  }

  function checkExpression (exp, text, warn, range) {
    try {
      new Function(("return " + exp));
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        warn(
          "avoid using JavaScript keyword as property name: " +
          "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
          range
        );
      } else {
        warn(
          "invalid expression: " + (e.message) + " in\n\n" +
          "    " + exp + "\n\n" +
          "  Raw expression: " + (text.trim()) + "\n",
          range
        );
      }
    }
  }

  function checkFunctionParameterExpression (exp, text, warn, range) {
    try {
      new Function(exp, '');
    } catch (e) {
      warn(
        "invalid function parameter expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }

  /*  */

  var range = 2;

  function generateCodeFrame (
    source,
    start,
    end
  ) {
    if ( start === void 0 ) start = 0;
    if ( end === void 0 ) end = source.length;

    var lines = source.split(/\r?\n/);
    var count = 0;
    var res = [];
    for (var i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (var j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length) { continue }
          res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
          var lineLength = lines[j].length;
          if (j === i) {
            // push underline
            var pad = start - (count - lineLength) + 1;
            var length = end > count ? lineLength - pad : end - start;
            res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
          } else if (j > i) {
            if (end > count) {
              var length$1 = Math.min(end - count, lineLength);
              res.push("   |  " + repeat$1("^", length$1));
            }
            count += lineLength + 1;
          }
        }
        break
      }
    }
    return res.join('\n')
  }

  function repeat$1 (str, n) {
    var result = '';
    if (n > 0) {
      while (true) { // eslint-disable-line
        if (n & 1) { result += str; }
        n >>>= 1;
        if (n <= 0) { break }
        str += str;
      }
    }
    return result
  }

  /*  */



  function createFunction (code, errors) {
    try {
      return new Function(code)
    } catch (err) {
      errors.push({ err: err, code: code });
      return noop
    }
  }

  function createCompileToFunctionFn (compile) {
    var cache = Object.create(null);

    return function compileToFunctions (
      template,
      options,
      vm
    ) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1(
              'It seems you are using the standalone build of Vue.js in an ' +
              'environment with Content Security Policy that prohibits unsafe-eval. ' +
              'The template compiler cannot work in this environment. Consider ' +
              'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
              'templates into render functions.'
            );
          }
        }
      }

      // check cache
      var key = options.delimiters
        ? String(options.delimiters) + template
        : template;
      if (cache[key]) {
        return cache[key]
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          if (options.outputSourceRange) {
            compiled.errors.forEach(function (e) {
              warn$$1(
                "Error compiling template:\n\n" + (e.msg) + "\n\n" +
                generateCodeFrame(template, e.start, e.end),
                vm
              );
            });
          } else {
            warn$$1(
              "Error compiling template:\n\n" + template + "\n\n" +
              compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
              vm
            );
          }
        }
        if (compiled.tips && compiled.tips.length) {
          if (options.outputSourceRange) {
            compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
          } else {
            compiled.tips.forEach(function (msg) { return tip(msg, vm); });
          }
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors)
      });

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1(
            "Failed to generate render function:\n\n" +
            fnGenErrors.map(function (ref) {
              var err = ref.err;
              var code = ref.code;

              return ((err.toString()) + " in\n\n" + code + "\n");
          }).join('\n'),
            vm
          );
        }
      }

      return (cache[key] = res)
    }
  }

  /*  */

  function createCompilerCreator (baseCompile) {
    return function createCompiler (baseOptions) {
      function compile (
        template,
        options
      ) {
        var finalOptions = Object.create(baseOptions);
        var errors = [];
        var tips = [];

        var warn = function (msg, range, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          if (options.outputSourceRange) {
            // $flow-disable-line
            var leadingSpaceLength = template.match(/^\s*/)[0].length;

            warn = function (msg, range, tip) {
              var data = { msg: msg };
              if (range) {
                if (range.start != null) {
                  data.start = range.start + leadingSpaceLength;
                }
                if (range.end != null) {
                  data.end = range.end + leadingSpaceLength;
                }
              }
              (tip ? tips : errors).push(data);
            };
          }
          // merge custom modules
          if (options.modules) {
            finalOptions.modules =
              (baseOptions.modules || []).concat(options.modules);
          }
          // merge custom directives
          if (options.directives) {
            finalOptions.directives = extend(
              Object.create(baseOptions.directives || null),
              options.directives
            );
          }
          // copy other options
          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        finalOptions.warn = warn;

        var compiled = baseCompile(template.trim(), finalOptions);
        {
          detectErrors(compiled.ast, warn);
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      }
    }
  }

  /*  */

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  var createCompiler = createCompilerCreator(function baseCompile (
    template,
    options
  ) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
      optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    }
  });

  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compile = ref$1.compile;
  var compileToFunctions = ref$1.compileToFunctions;

  /*  */

  // check whether current browser encodes a char inside attribute values
  var div;
  function getShouldDecode (href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0
  }

  // #3663: IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
  // #6828: chrome encodes content in a[href]
  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML
  });

  var mount = Vue.prototype.$mount;
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      warn(
        "Do not mount Vue to <html> or <body> - mount to normal elements instead."
      );
      return this
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if (!template) {
              warn(
                ("Template element not found or is empty: " + (options.template)),
                this
              );
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          outputSourceRange: "development" !== 'production',
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile end');
          measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating)
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML (el) {
    if (el.outerHTML) {
      return el.outerHTML
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML
    }
  }

  Vue.compile = compileToFunctions;

  return Vue;

}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(7).setImmediate))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(8);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(9)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export num1 */
/* unused harmony export num2 */
/* unused harmony export add */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_jpg__ = __webpack_require__(11);


var app = {
	data(){
		return {
			imgSrc:__WEBPACK_IMPORTED_MODULE_0__my_jpg__["a" /* default */]
		}
	},
	template:`
		<div>
			<img :src="imgSrc" alt="我的女朋友" />
		</div>
	`
};
// 通过export来导出
/* harmony default export */ __webpack_exports__["a"] = (app);

// 声明并导出
// 作为一整个对象key导出
var num1 = 2;

// 声明再导出
var num2 = 3;


function add(num1, num2) {
	console.log(num1 + num2);
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/7Re8UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAACccAVoAAxslRxwCAAACBAAcAjcACDIwMTUwNTMwHAI8AAYxOTA2NTUAOEJJTQQlAAAAAAAQBwqQtfFOl9KdFVRuZvo8GThCSU0EOgAAAAABUwAAABAAAAABAAAAAAALcHJpbnRPdXRwdXQAAAAHAAAAAENsclNlbnVtAAAAAENsclMAAAAAUkdCQwAAAABObSAgVEVYVAAAAAgAQwBJAEUAIABSAEcAQgAAAAAAAEludGVlbnVtAAAAAEludGUAAAAASW1nIAAAAABNcEJsYm9vbAAAAAAPcHJpbnRTaXh0ZWVuQml0Ym9vbAAAAAALcHJpbnRlck5hbWVURVhUAAAAGgBYAGUAcgBvAHgAIABXAG8AcgBrAEMAZQBuAHQAcgBlACAANwAyADQAMgAgAEcAUABEAAAAAAAPcHJpbnRQcm9vZlNldHVwT2JqYwAAAAwAUAByAG8AbwBmACAAUwBlAHQAdQBwAAAAAAAKcHJvb2ZTZXR1cAAAAAEAAAAAQmx0bmVudW0AAAAMYnVpbHRpblByb29mAAAACXByb29mQ01ZSwA4QklNBDsAAAAAAi0AAAAQAAAAAQAAAAAAEnByaW50T3V0cHV0T3B0aW9ucwAAABcAAAAAQ3B0bmJvb2wAAAAAAENsYnJib29sAAAAAABSZ3NNYm9vbAAAAAAAQ3JuQ2Jvb2wAAAAAAENudENib29sAAAAAABMYmxzYm9vbAAAAAAATmd0dmJvb2wAAAAAAEVtbERib29sAAAAAABJbnRyYm9vbAAAAAAAQmNrZ09iamMAAAABAAAAAAAAUkdCQwAAAAMAAAAAUmQgIGRvdWJAb+AAAAAAAAAAAABHcm4gZG91YkBv4AAAAAAAAAAAAEJsICBkb3ViQG/gAAAAAAAAAAAAQnJkVFVudEYjUmx0AAAAAAAAAAAAAAAAQmxkIFVudEYjUmx0AAAAAAAAAAAAAAAAUnNsdFVudEYjUHhsQFIAAAAAAAAAAAAKdmVjdG9yRGF0YWJvb2wBAAAAAFBnUHNlbnVtAAAAAFBnUHMAAAAAUGdQQwAAAABMZWZ0VW50RiNSbHQAAAAAAAAAAAAAAABUb3AgVW50RiNSbHQAAAAAAAAAAAAAAABTY2wgVW50RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAAAAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAASAAAAAEAAgBIAAAAAQACOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANFAAAABgAAAAAAAAAAAAADVQAABQAAAAAIAF8ASwA3AFIAOQAzADMAMgAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAFAAAAA1UAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAG51bGwAAAACAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAA1UAAAAAUmdodGxvbmcAAAUAAAAABnNsaWNlc1ZsTHMAAAABT2JqYwAAAAEAAAAAAAVzbGljZQAAABIAAAAHc2xpY2VJRGxvbmcAAAAAAAAAB2dyb3VwSURsb25nAAAAAAAAAAZvcmlnaW5lbnVtAAAADEVTbGljZU9yaWdpbgAAAA1hdXRvR2VuZXJhdGVkAAAAAFR5cGVl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AAAAAAAANI0AAKAsAAAPlVhZWiAAAAAAAAAmMQAAEC8AAL6c/+EOCWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOk1vZGlmeURhdGU9IjIwMTUtMTItMjRUMDk6MDk6MzgtMDg6MDAiIHhtcDpDcmVhdGVEYXRlPSIyMDE1LTA1LTMwVDE5OjA2OjU1IiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE1LTEyLTI0VDA5OjA5OjM4LTA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJBZG9iZSBSR0IgKDE5OTgpIiBwaG90b3Nob3A6RGF0ZUNyZWF0ZWQ9IjIwMTUtMDUtMzBUMTk6MDY6NTUuMDg5IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmJkMTMwMTBmLWY0YjUtNjY0MC1hNGU3LWFhNDRiOTBkNDBmYyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjFkNGFkOTgzLWFhNjEtMTFlNS1iNzI0LWJjZmNlODdkOTlhNSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjc1YmUyNDg2LTY2ZWUtMDU0Yi04ZWEyLWU3ZTJjMDI4MTU3YyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjc1YmUyNDg2LTY2ZWUtMDU0Yi04ZWEyLWU3ZTJjMDI4MTU3YyIgc3RFdnQ6d2hlbj0iMjAxNS0xMi0yNFQwOTowOTozOC0wODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiZDEzMDEwZi1mNGI1LTY2NDAtYTRlNy1hYTQ0YjkwZDQwZmMiIHN0RXZ0OndoZW49IjIwMTUtMTItMjRUMDk6MDk6MzgtMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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");

/***/ })
/******/ ]);