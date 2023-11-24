import * as G from "react";
import pn, { forwardRef as Ys, useContext as Re, createContext as Yt, useLayoutEffect as Id, useEffect as We, useState as Ht, useRef as Te, useMemo as He, useCallback as fe, useInsertionEffect as Fd, createElement as om, useId as wo, cloneElement as Co, Children as Gi, isValidElement as Ki, memo as im, useSyncExternalStore as am, Fragment as sm } from "react";
import { createPortal as Ld } from "react-dom";
var qo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hs = { exports: {} }, Mn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tc;
function lm() {
  return tc || (tc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = pn, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = Symbol.iterator, v = "@@iterator";
    function S(m) {
      if (m === null || typeof m != "object")
        return null;
      var $ = g && m[g] || m[v];
      return typeof $ == "function" ? $ : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(m) {
      {
        for (var $ = arguments.length, j = new Array($ > 1 ? $ - 1 : 0), L = 1; L < $; L++)
          j[L - 1] = arguments[L];
        C("error", m, j);
      }
    }
    function C(m, $, j) {
      {
        var L = _.ReactDebugCurrentFrame, re = L.getStackAddendum();
        re !== "" && ($ += "%s", j = j.concat([re]));
        var ee = j.map(function(X) {
          return String(X);
        });
        ee.unshift("Warning: " + $), Function.prototype.apply.call(console[m], console, ee);
      }
    }
    var k = !1, w = !1, A = !1, E = !1, M = !1, D;
    D = Symbol.for("react.module.reference");
    function O(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === n || m === i || M || m === o || m === c || m === u || E || m === p || k || w || A || typeof m == "object" && m !== null && (m.$$typeof === f || m.$$typeof === d || m.$$typeof === a || m.$$typeof === s || m.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === D || m.getModuleId !== void 0));
    }
    function I(m, $, j) {
      var L = m.displayName;
      if (L)
        return L;
      var re = $.displayName || $.name || "";
      return re !== "" ? j + "(" + re + ")" : j;
    }
    function le(m) {
      return m.displayName || "Context";
    }
    function N(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case s:
            var $ = m;
            return le($) + ".Consumer";
          case a:
            var j = m;
            return le(j._context) + ".Provider";
          case l:
            return I(m, m.render, "ForwardRef");
          case d:
            var L = m.displayName || null;
            return L !== null ? L : N(m.type) || "Memo";
          case f: {
            var re = m, ee = re._payload, X = re._init;
            try {
              return N(X(ee));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, U = 0, K, Q, je, be, Me, Y, Ce;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function Ae() {
      {
        if (U === 0) {
          K = console.log, Q = console.info, je = console.warn, be = console.error, Me = console.group, Y = console.groupCollapsed, Ce = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: H,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        U++;
      }
    }
    function de() {
      {
        if (U--, U === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, m, {
              value: K
            }),
            info: W({}, m, {
              value: Q
            }),
            warn: W({}, m, {
              value: je
            }),
            error: W({}, m, {
              value: be
            }),
            group: W({}, m, {
              value: Me
            }),
            groupCollapsed: W({}, m, {
              value: Y
            }),
            groupEnd: W({}, m, {
              value: Ce
            })
          });
        }
        U < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = _.ReactCurrentDispatcher, Ve;
    function ye(m, $, j) {
      {
        if (Ve === void 0)
          try {
            throw Error();
          } catch (re) {
            var L = re.stack.trim().match(/\n( *(at )?)/);
            Ve = L && L[1] || "";
          }
        return `
` + Ve + m;
      }
    }
    var Le = !1, Ie;
    {
      var De = typeof WeakMap == "function" ? WeakMap : Map;
      Ie = new De();
    }
    function R(m, $) {
      if (!m || Le)
        return "";
      {
        var j = Ie.get(m);
        if (j !== void 0)
          return j;
      }
      var L;
      Le = !0;
      var re = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ee;
      ee = he.current, he.current = null, Ae();
      try {
        if ($) {
          var X = function() {
            throw Error();
          };
          if (Object.defineProperty(X.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(X, []);
            } catch (rt) {
              L = rt;
            }
            Reflect.construct(m, [], X);
          } else {
            try {
              X.call();
            } catch (rt) {
              L = rt;
            }
            m.call(X.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (rt) {
            L = rt;
          }
          m();
        }
      } catch (rt) {
        if (rt && L && typeof rt.stack == "string") {
          for (var q = rt.stack.split(`
`), Ue = L.stack.split(`
`), _e = q.length - 1, Ee = Ue.length - 1; _e >= 1 && Ee >= 0 && q[_e] !== Ue[Ee]; )
            Ee--;
          for (; _e >= 1 && Ee >= 0; _e--, Ee--)
            if (q[_e] !== Ue[Ee]) {
              if (_e !== 1 || Ee !== 1)
                do
                  if (_e--, Ee--, Ee < 0 || q[_e] !== Ue[Ee]) {
                    var tt = `
` + q[_e].replace(" at new ", " at ");
                    return m.displayName && tt.includes("<anonymous>") && (tt = tt.replace("<anonymous>", m.displayName)), typeof m == "function" && Ie.set(m, tt), tt;
                  }
                while (_e >= 1 && Ee >= 0);
              break;
            }
        }
      } finally {
        Le = !1, he.current = ee, de(), Error.prepareStackTrace = re;
      }
      var Mt = m ? m.displayName || m.name : "", Wo = Mt ? ye(Mt) : "";
      return typeof m == "function" && Ie.set(m, Wo), Wo;
    }
    function Pe(m, $, j) {
      return R(m, !1);
    }
    function lt(m) {
      var $ = m.prototype;
      return !!($ && $.isReactComponent);
    }
    function ct(m, $, j) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return R(m, lt(m));
      if (typeof m == "string")
        return ye(m);
      switch (m) {
        case c:
          return ye("Suspense");
        case u:
          return ye("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case l:
            return Pe(m.render);
          case d:
            return ct(m.type, $, j);
          case f: {
            var L = m, re = L._payload, ee = L._init;
            try {
              return ct(ee(re), $, j);
            } catch {
            }
          }
        }
      return "";
    }
    var qt = Object.prototype.hasOwnProperty, Pr = {}, Ur = _.ReactDebugCurrentFrame;
    function cr(m) {
      if (m) {
        var $ = m._owner, j = ct(m.type, m._source, $ ? $.type : null);
        Ur.setExtraStackFrame(j);
      } else
        Ur.setExtraStackFrame(null);
    }
    function Qe(m, $, j, L, re) {
      {
        var ee = Function.call.bind(qt);
        for (var X in m)
          if (ee(m, X)) {
            var q = void 0;
            try {
              if (typeof m[X] != "function") {
                var Ue = Error((L || "React class") + ": " + j + " type `" + X + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[X] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ue.name = "Invariant Violation", Ue;
              }
              q = m[X]($, X, L, j, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_e) {
              q = _e;
            }
            q && !(q instanceof Error) && (cr(re), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", j, X, typeof q), cr(null)), q instanceof Error && !(q.message in Pr) && (Pr[q.message] = !0, cr(re), b("Failed %s type: %s", j, q.message), cr(null));
          }
      }
    }
    var Rt = Array.isArray;
    function Ct(m) {
      return Rt(m);
    }
    function et(m) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, j = $ && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return j;
      }
    }
    function ur(m) {
      try {
        return dr(m), !1;
      } catch {
        return !0;
      }
    }
    function dr(m) {
      return "" + m;
    }
    function Er(m) {
      if (ur(m))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", et(m)), dr(m);
    }
    var Ot = _.ReactCurrentOwner, Gt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $n, An, Yr;
    Yr = {};
    function zo(m) {
      if (qt.call(m, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(m, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function Bo(m) {
      if (qt.call(m, "key")) {
        var $ = Object.getOwnPropertyDescriptor(m, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function ga(m, $) {
      if (typeof m.ref == "string" && Ot.current && $ && Ot.current.stateNode !== $) {
        var j = N(Ot.current.type);
        Yr[j] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(Ot.current.type), m.ref), Yr[j] = !0);
      }
    }
    function va(m, $) {
      {
        var j = function() {
          $n || ($n = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        j.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: j,
          configurable: !0
        });
      }
    }
    function Kt(m, $) {
      {
        var j = function() {
          An || (An = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        j.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: j,
          configurable: !0
        });
      }
    }
    var qr = function(m, $, j, L, re, ee, X) {
      var q = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: m,
        key: $,
        ref: j,
        props: X,
        // Record the component responsible for creating this element.
        _owner: ee
      };
      return q._store = {}, Object.defineProperty(q._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(q, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.defineProperty(q, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.freeze && (Object.freeze(q.props), Object.freeze(q)), q;
    };
    function ba(m, $, j, L, re) {
      {
        var ee, X = {}, q = null, Ue = null;
        j !== void 0 && (Er(j), q = "" + j), Bo($) && (Er($.key), q = "" + $.key), zo($) && (Ue = $.ref, ga($, re));
        for (ee in $)
          qt.call($, ee) && !Gt.hasOwnProperty(ee) && (X[ee] = $[ee]);
        if (m && m.defaultProps) {
          var _e = m.defaultProps;
          for (ee in _e)
            X[ee] === void 0 && (X[ee] = _e[ee]);
        }
        if (q || Ue) {
          var Ee = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          q && va(X, Ee), Ue && Kt(X, Ee);
        }
        return qr(m, q, Ue, re, L, Ot.current, X);
      }
    }
    var Gr = _.ReactCurrentOwner, Vo = _.ReactDebugCurrentFrame;
    function Xt(m) {
      if (m) {
        var $ = m._owner, j = ct(m.type, m._source, $ ? $.type : null);
        Vo.setExtraStackFrame(j);
      } else
        Vo.setExtraStackFrame(null);
    }
    var Zt;
    Zt = !1;
    function Rn(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function jt() {
      {
        if (Gr.current) {
          var m = N(Gr.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function ya(m) {
      {
        if (m !== void 0) {
          var $ = m.fileName.replace(/^.*[\\\/]/, ""), j = m.lineNumber;
          return `

Check your code at ` + $ + ":" + j + ".";
        }
        return "";
      }
    }
    var Io = {};
    function xa(m) {
      {
        var $ = jt();
        if (!$) {
          var j = typeof m == "string" ? m : m.displayName || m.name;
          j && ($ = `

Check the top-level render call using <` + j + ">.");
        }
        return $;
      }
    }
    function Fo(m, $) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var j = xa($);
        if (Io[j])
          return;
        Io[j] = !0;
        var L = "";
        m && m._owner && m._owner !== Gr.current && (L = " It was passed a child from " + N(m._owner.type) + "."), Xt(m), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', j, L), Xt(null);
      }
    }
    function Lo(m, $) {
      {
        if (typeof m != "object")
          return;
        if (Ct(m))
          for (var j = 0; j < m.length; j++) {
            var L = m[j];
            Rn(L) && Fo(L, $);
          }
        else if (Rn(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var re = S(m);
          if (typeof re == "function" && re !== m.entries)
            for (var ee = re.call(m), X; !(X = ee.next()).done; )
              Rn(X.value) && Fo(X.value, $);
        }
      }
    }
    function _t(m) {
      {
        var $ = m.type;
        if ($ == null || typeof $ == "string")
          return;
        var j;
        if (typeof $ == "function")
          j = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === d))
          j = $.propTypes;
        else
          return;
        if (j) {
          var L = N($);
          Qe(j, m.props, "prop", L, m);
        } else if ($.PropTypes !== void 0 && !Zt) {
          Zt = !0;
          var re = N($);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", re || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Sa(m) {
      {
        for (var $ = Object.keys(m.props), j = 0; j < $.length; j++) {
          var L = $[j];
          if (L !== "children" && L !== "key") {
            Xt(m), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", L), Xt(null);
            break;
          }
        }
        m.ref !== null && (Xt(m), b("Invalid attribute `ref` supplied to `React.Fragment`."), Xt(null));
      }
    }
    function No(m, $, j, L, re, ee) {
      {
        var X = O(m);
        if (!X) {
          var q = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ue = ya(re);
          Ue ? q += Ue : q += jt();
          var _e;
          m === null ? _e = "null" : Ct(m) ? _e = "array" : m !== void 0 && m.$$typeof === t ? (_e = "<" + (N(m.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : _e = typeof m, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _e, q);
        }
        var Ee = ba(m, $, j, re, ee);
        if (Ee == null)
          return Ee;
        if (X) {
          var tt = $.children;
          if (tt !== void 0)
            if (L)
              if (Ct(tt)) {
                for (var Mt = 0; Mt < tt.length; Mt++)
                  Lo(tt[Mt], m);
                Object.freeze && Object.freeze(tt);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Lo(tt, m);
        }
        return m === n ? Sa(Ee) : _t(Ee), Ee;
      }
    }
    function wa(m, $, j) {
      return No(m, $, j, !0);
    }
    function Ca(m, $, j) {
      return No(m, $, j, !1);
    }
    var _a = Ca, fr = wa;
    Mn.Fragment = n, Mn.jsx = _a, Mn.jsxs = fr;
  }()), Mn;
}
var Dn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rc;
function cm() {
  if (rc)
    return Dn;
  rc = 1;
  var e = pn, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, l, c) {
    var u, d = {}, f = null, p = null;
    c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (u in l)
      n.call(l, u) && !i.hasOwnProperty(u) && (d[u] = l[u]);
    if (s && s.defaultProps)
      for (u in l = s.defaultProps, l)
        d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: s, key: f, ref: p, props: d, _owner: o.current };
  }
  return Dn.Fragment = r, Dn.jsx = a, Dn.jsxs = a, Dn;
}
process.env.NODE_ENV === "production" ? hs.exports = cm() : hs.exports = lm();
var P = hs.exports;
function um(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function dm(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var fm = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(dm(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var a = um(o);
      try {
        a.insertRule(n, a.cssRules.length);
      } catch (s) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', s);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), Ke = "-ms-", Pi = "-moz-", oe = "-webkit-", qs = "comm", Gs = "rule", Ks = "decl", pm = "@import", Wd = "@keyframes", hm = "@layer", mm = Math.abs, Xi = String.fromCharCode, gm = Object.assign;
function vm(e, t) {
  return qe(e, 0) ^ 45 ? (((t << 2 ^ qe(e, 0)) << 2 ^ qe(e, 1)) << 2 ^ qe(e, 2)) << 2 ^ qe(e, 3) : 0;
}
function Hd(e) {
  return e.trim();
}
function bm(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ie(e, t, r) {
  return e.replace(t, r);
}
function ms(e, t) {
  return e.indexOf(t);
}
function qe(e, t) {
  return e.charCodeAt(t) | 0;
}
function co(e, t, r) {
  return e.slice(t, r);
}
function Vt(e) {
  return e.length;
}
function Xs(e) {
  return e.length;
}
function Go(e, t) {
  return t.push(e), e;
}
function ym(e, t) {
  return e.map(t).join("");
}
var Zi = 1, hn = 1, Ud = 0, at = 0, Be = 0, _n = "";
function Ji(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Zi, column: hn, length: a, return: "" };
}
function zn(e, t) {
  return gm(Ji("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function xm() {
  return Be;
}
function Sm() {
  return Be = at > 0 ? qe(_n, --at) : 0, hn--, Be === 10 && (hn = 1, Zi--), Be;
}
function dt() {
  return Be = at < Ud ? qe(_n, at++) : 0, hn++, Be === 10 && (hn = 1, Zi++), Be;
}
function Ft() {
  return qe(_n, at);
}
function ci() {
  return at;
}
function _o(e, t) {
  return co(_n, e, t);
}
function uo(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Yd(e) {
  return Zi = hn = 1, Ud = Vt(_n = e), at = 0, [];
}
function qd(e) {
  return _n = "", e;
}
function ui(e) {
  return Hd(_o(at - 1, gs(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function wm(e) {
  for (; (Be = Ft()) && Be < 33; )
    dt();
  return uo(e) > 2 || uo(Be) > 3 ? "" : " ";
}
function Cm(e, t) {
  for (; --t && dt() && !(Be < 48 || Be > 102 || Be > 57 && Be < 65 || Be > 70 && Be < 97); )
    ;
  return _o(e, ci() + (t < 6 && Ft() == 32 && dt() == 32));
}
function gs(e) {
  for (; dt(); )
    switch (Be) {
      case e:
        return at;
      case 34:
      case 39:
        e !== 34 && e !== 39 && gs(Be);
        break;
      case 40:
        e === 41 && gs(e);
        break;
      case 92:
        dt();
        break;
    }
  return at;
}
function _m(e, t) {
  for (; dt() && e + Be !== 47 + 10; )
    if (e + Be === 42 + 42 && Ft() === 47)
      break;
  return "/*" + _o(t, at - 1) + "*" + Xi(e === 47 ? e : dt());
}
function km(e) {
  for (; !uo(Ft()); )
    dt();
  return _o(e, at);
}
function Tm(e) {
  return qd(di("", null, null, null, [""], e = Yd(e), 0, [0], e));
}
function di(e, t, r, n, o, i, a, s, l) {
  for (var c = 0, u = 0, d = a, f = 0, p = 0, g = 0, v = 1, S = 1, _ = 1, b = 0, C = "", k = o, w = i, A = n, E = C; S; )
    switch (g = b, b = dt()) {
      case 40:
        if (g != 108 && qe(E, d - 1) == 58) {
          ms(E += ie(ui(b), "&", "&\f"), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += ui(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += wm(g);
        break;
      case 92:
        E += Cm(ci() - 1, 7);
        continue;
      case 47:
        switch (Ft()) {
          case 42:
          case 47:
            Go(Pm(_m(dt(), ci()), t, r), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * v:
        s[c++] = Vt(E) * _;
      case 125 * v:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            S = 0;
          case 59 + u:
            _ == -1 && (E = ie(E, /\f/g, "")), p > 0 && Vt(E) - d && Go(p > 32 ? oc(E + ";", n, r, d - 1) : oc(ie(E, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            E += ";";
          default:
            if (Go(A = nc(E, t, r, c, u, o, s, C, k = [], w = [], d), i), b === 123)
              if (u === 0)
                di(E, t, A, A, k, i, d, s, w);
              else
                switch (f === 99 && qe(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    di(e, A, A, n && Go(nc(e, A, A, 0, 0, o, s, C, o, k = [], d), w), o, w, d, s, n ? k : w);
                    break;
                  default:
                    di(E, A, A, A, [""], w, 0, s, w);
                }
        }
        c = u = p = 0, v = _ = 1, C = E = "", d = a;
        break;
      case 58:
        d = 1 + Vt(E), p = g;
      default:
        if (v < 1) {
          if (b == 123)
            --v;
          else if (b == 125 && v++ == 0 && Sm() == 125)
            continue;
        }
        switch (E += Xi(b), b * v) {
          case 38:
            _ = u > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            s[c++] = (Vt(E) - 1) * _, _ = 1;
            break;
          case 64:
            Ft() === 45 && (E += ui(dt())), f = Ft(), u = d = Vt(C = E += km(ci())), b++;
            break;
          case 45:
            g === 45 && Vt(E) == 2 && (v = 0);
        }
    }
  return i;
}
function nc(e, t, r, n, o, i, a, s, l, c, u) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = Xs(f), g = 0, v = 0, S = 0; g < n; ++g)
    for (var _ = 0, b = co(e, d + 1, d = mm(v = a[g])), C = e; _ < p; ++_)
      (C = Hd(v > 0 ? f[_] + " " + b : ie(b, /&\f/g, f[_]))) && (l[S++] = C);
  return Ji(e, t, r, o === 0 ? Gs : s, l, c, u);
}
function Pm(e, t, r) {
  return Ji(e, t, r, qs, Xi(xm()), co(e, 2, -2), 0);
}
function oc(e, t, r, n) {
  return Ji(e, t, r, Ks, co(e, 0, n), co(e, n + 1, -1), n);
}
function ln(e, t) {
  for (var r = "", n = Xs(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Em(e, t, r, n) {
  switch (e.type) {
    case hm:
      if (e.children.length)
        break;
    case pm:
    case Ks:
      return e.return = e.return || e.value;
    case qs:
      return "";
    case Wd:
      return e.return = e.value + "{" + ln(e.children, n) + "}";
    case Gs:
      e.value = e.props.join(",");
  }
  return Vt(r = ln(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function $m(e) {
  var t = Xs(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function Am(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var ic = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function Gd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Rm = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Ft(), o === 38 && i === 12 && (r[n] = 1), !uo(i); )
    dt();
  return _o(t, at);
}, Om = function(t, r) {
  var n = -1, o = 44;
  do
    switch (uo(o)) {
      case 0:
        o === 38 && Ft() === 12 && (r[n] = 1), t[n] += Rm(at - 1, r, n);
        break;
      case 2:
        t[n] += ui(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Ft() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Xi(o);
    }
  while (o = dt());
  return t;
}, jm = function(t, r) {
  return qd(Om(Yd(t), r));
}, ac = /* @__PURE__ */ new WeakMap(), Mm = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !ac.get(n)) && !o) {
      ac.set(t, !0);
      for (var i = [], a = jm(r, i), s = n.props, l = 0, c = 0; l < a.length; l++)
        for (var u = 0; u < s.length; u++, c++)
          t.props[c] = i[l] ? a[l].replace(/&\f/g, s[u]) : s[u] + " " + a[l];
    }
  }
}, Dm = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, zm = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Bm = function(t) {
  return t.type === "comm" && t.children.indexOf(zm) > -1;
}, Vm = function(t) {
  return function(r, n, o) {
    if (!(r.type !== "rule" || t.compat)) {
      var i = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var a = !!r.parent, s = a ? r.parent.children : (
          // global rule at the root level
          o
        ), l = s.length - 1; l >= 0; l--) {
          var c = s[l];
          if (c.line < r.line)
            break;
          if (c.column < r.column) {
            if (Bm(c))
              return;
            break;
          }
        }
        i.forEach(function(u) {
          console.error('The pseudo class "' + u + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + u.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Kd = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Im = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!Kd(r[n]))
      return !0;
  return !1;
}, sc = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, Fm = function(t, r, n) {
  Kd(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), sc(t)) : Im(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), sc(t)));
};
function Xd(e, t) {
  switch (vm(e, t)) {
    case 5103:
      return oe + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return oe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return oe + e + Pi + e + Ke + e + e;
    case 6828:
    case 4268:
      return oe + e + Ke + e + e;
    case 6165:
      return oe + e + Ke + "flex-" + e + e;
    case 5187:
      return oe + e + ie(e, /(\w+).+(:[^]+)/, oe + "box-$1$2" + Ke + "flex-$1$2") + e;
    case 5443:
      return oe + e + Ke + "flex-item-" + ie(e, /flex-|-self/, "") + e;
    case 4675:
      return oe + e + Ke + "flex-line-pack" + ie(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return oe + e + Ke + ie(e, "shrink", "negative") + e;
    case 5292:
      return oe + e + Ke + ie(e, "basis", "preferred-size") + e;
    case 6060:
      return oe + "box-" + ie(e, "-grow", "") + oe + e + Ke + ie(e, "grow", "positive") + e;
    case 4554:
      return oe + ie(e, /([^-])(transform)/g, "$1" + oe + "$2") + e;
    case 6187:
      return ie(ie(ie(e, /(zoom-|grab)/, oe + "$1"), /(image-set)/, oe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ie(e, /(image-set\([^]*)/, oe + "$1$`$1");
    case 4968:
      return ie(ie(e, /(.+:)(flex-)?(.*)/, oe + "box-pack:$3" + Ke + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + oe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ie(e, /(.+)-inline(.+)/, oe + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Vt(e) - 1 - t > 6)
        switch (qe(e, t + 1)) {
          case 109:
            if (qe(e, t + 4) !== 45)
              break;
          case 102:
            return ie(e, /(.+:)(.+)-([^]+)/, "$1" + oe + "$2-$3$1" + Pi + (qe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ms(e, "stretch") ? Xd(ie(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (qe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (qe(e, Vt(e) - 3 - (~ms(e, "!important") && 10))) {
        case 107:
          return ie(e, ":", ":" + oe) + e;
        case 101:
          return ie(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + oe + (qe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + oe + "$2$3$1" + Ke + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (qe(e, t + 11)) {
        case 114:
          return oe + e + Ke + ie(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return oe + e + Ke + ie(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return oe + e + Ke + ie(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return oe + e + Ke + e + e;
  }
  return e;
}
var Lm = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Ks:
        t.return = Xd(t.value, t.length);
        break;
      case Wd:
        return ln([zn(t, {
          value: ie(t.value, "@", "@" + oe)
        })], o);
      case Gs:
        if (t.length)
          return ym(t.props, function(i) {
            switch (bm(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ln([zn(t, {
                  props: [ie(i, /:(read-\w+)/, ":" + Pi + "$1")]
                })], o);
              case "::placeholder":
                return ln([zn(t, {
                  props: [ie(i, /:(plac\w+)/, ":" + oe + "input-$1")]
                }), zn(t, {
                  props: [ie(i, /:(plac\w+)/, ":" + Pi + "$1")]
                }), zn(t, {
                  props: [ie(i, /:(plac\w+)/, Ke + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Nm = [Lm], Wm = function(t) {
  var r = t.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(v) {
      var S = v.getAttribute("data-emotion");
      S.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Nm;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(v) {
      for (var S = v.getAttribute("data-emotion").split(" "), _ = 1; _ < S.length; _++)
        i[S[_]] = !0;
      s.push(v);
    }
  );
  var l, c = [Mm, Dm];
  process.env.NODE_ENV !== "production" && c.push(Vm({
    get compat() {
      return g.compat;
    }
  }), Fm);
  {
    var u, d = [Em, process.env.NODE_ENV !== "production" ? function(v) {
      v.root || (v.return ? u.insert(v.return) : v.value && v.type !== qs && u.insert(v.value + "{}"));
    } : Am(function(v) {
      u.insert(v);
    })], f = $m(c.concat(o, d)), p = function(S) {
      return ln(Tm(S), f);
    };
    l = function(S, _, b, C) {
      u = b, process.env.NODE_ENV !== "production" && _.map !== void 0 && (u = {
        insert: function(w) {
          b.insert(w + _.map);
        }
      }), p(S ? S + "{" + _.styles + "}" : _.styles), C && (g.inserted[_.name] = !0);
    };
  }
  var g = {
    key: r,
    sheet: new fm({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return g.sheet.hydrate(s), g;
};
function Ei() {
  return Ei = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ei.apply(this, arguments);
}
var vs = { exports: {} }, ce = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lc;
function Hm() {
  return lc || (lc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function C(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === c || R === i || R === o || R === d || R === f || typeof R == "object" && R !== null && (R.$$typeof === g || R.$$typeof === p || R.$$typeof === a || R.$$typeof === s || R.$$typeof === u || R.$$typeof === S || R.$$typeof === _ || R.$$typeof === b || R.$$typeof === v);
    }
    function k(R) {
      if (typeof R == "object" && R !== null) {
        var Pe = R.$$typeof;
        switch (Pe) {
          case t:
            var lt = R.type;
            switch (lt) {
              case l:
              case c:
              case n:
              case i:
              case o:
              case d:
                return lt;
              default:
                var ct = lt && lt.$$typeof;
                switch (ct) {
                  case s:
                  case u:
                  case g:
                  case p:
                  case a:
                    return ct;
                  default:
                    return Pe;
                }
            }
          case r:
            return Pe;
        }
      }
    }
    var w = l, A = c, E = s, M = a, D = t, O = u, I = n, le = g, N = p, W = r, U = i, K = o, Q = d, je = !1;
    function be(R) {
      return je || (je = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Me(R) || k(R) === l;
    }
    function Me(R) {
      return k(R) === c;
    }
    function Y(R) {
      return k(R) === s;
    }
    function Ce(R) {
      return k(R) === a;
    }
    function H(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function Ae(R) {
      return k(R) === u;
    }
    function de(R) {
      return k(R) === n;
    }
    function he(R) {
      return k(R) === g;
    }
    function Ve(R) {
      return k(R) === p;
    }
    function ye(R) {
      return k(R) === r;
    }
    function Le(R) {
      return k(R) === i;
    }
    function Ie(R) {
      return k(R) === o;
    }
    function De(R) {
      return k(R) === d;
    }
    ce.AsyncMode = w, ce.ConcurrentMode = A, ce.ContextConsumer = E, ce.ContextProvider = M, ce.Element = D, ce.ForwardRef = O, ce.Fragment = I, ce.Lazy = le, ce.Memo = N, ce.Portal = W, ce.Profiler = U, ce.StrictMode = K, ce.Suspense = Q, ce.isAsyncMode = be, ce.isConcurrentMode = Me, ce.isContextConsumer = Y, ce.isContextProvider = Ce, ce.isElement = H, ce.isForwardRef = Ae, ce.isFragment = de, ce.isLazy = he, ce.isMemo = Ve, ce.isPortal = ye, ce.isProfiler = Le, ce.isStrictMode = Ie, ce.isSuspense = De, ce.isValidElementType = C, ce.typeOf = k;
  }()), ce;
}
var ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cc;
function Um() {
  if (cc)
    return ue;
  cc = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
  function C(w) {
    if (typeof w == "object" && w !== null) {
      var A = w.$$typeof;
      switch (A) {
        case t:
          switch (w = w.type, w) {
            case l:
            case c:
            case n:
            case i:
            case o:
            case d:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case s:
                case u:
                case g:
                case p:
                case a:
                  return w;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  function k(w) {
    return C(w) === c;
  }
  return ue.AsyncMode = l, ue.ConcurrentMode = c, ue.ContextConsumer = s, ue.ContextProvider = a, ue.Element = t, ue.ForwardRef = u, ue.Fragment = n, ue.Lazy = g, ue.Memo = p, ue.Portal = r, ue.Profiler = i, ue.StrictMode = o, ue.Suspense = d, ue.isAsyncMode = function(w) {
    return k(w) || C(w) === l;
  }, ue.isConcurrentMode = k, ue.isContextConsumer = function(w) {
    return C(w) === s;
  }, ue.isContextProvider = function(w) {
    return C(w) === a;
  }, ue.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, ue.isForwardRef = function(w) {
    return C(w) === u;
  }, ue.isFragment = function(w) {
    return C(w) === n;
  }, ue.isLazy = function(w) {
    return C(w) === g;
  }, ue.isMemo = function(w) {
    return C(w) === p;
  }, ue.isPortal = function(w) {
    return C(w) === r;
  }, ue.isProfiler = function(w) {
    return C(w) === i;
  }, ue.isStrictMode = function(w) {
    return C(w) === o;
  }, ue.isSuspense = function(w) {
    return C(w) === d;
  }, ue.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === n || w === c || w === i || w === o || w === d || w === f || typeof w == "object" && w !== null && (w.$$typeof === g || w.$$typeof === p || w.$$typeof === a || w.$$typeof === s || w.$$typeof === u || w.$$typeof === S || w.$$typeof === _ || w.$$typeof === b || w.$$typeof === v);
  }, ue.typeOf = C, ue;
}
process.env.NODE_ENV === "production" ? vs.exports = Um() : vs.exports = Hm();
var Ym = vs.exports, Zd = Ym, qm = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Gm = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Jd = {};
Jd[Zd.ForwardRef] = qm;
Jd[Zd.Memo] = Gm;
var Km = !0;
function Zs(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Qi = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Km === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, ea = function(t, r, n) {
  Qi(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Xm(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Zm = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, uc = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Jm = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Qm = /[A-Z]|^ms/g, Qd = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Js = function(t) {
  return t.charCodeAt(1) === 45;
}, dc = function(t) {
  return t != null && typeof t != "boolean";
}, Ma = /* @__PURE__ */ Gd(function(e) {
  return Js(e) ? e : e.replace(Qm, "-$&").toLowerCase();
}), $i = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Qd, function(n, o, i) {
          return Tt = {
            name: o,
            styles: i,
            next: Tt
          }, o;
        });
  }
  return Zm[t] !== 1 && !Js(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var eg = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, tg = ["normal", "none", "initial", "inherit", "unset"], rg = $i, ng = /^-ms-/, og = /-(.)/g, fc = {};
  $i = function(t, r) {
    if (t === "content" && (typeof r != "string" || tg.indexOf(r) === -1 && !eg.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = rg(t, r);
    return n !== "" && !Js(t) && t.indexOf("-") !== -1 && fc[t] === void 0 && (fc[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(ng, "ms-").replace(og, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var ef = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function fo(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(ef);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return Tt = {
          name: r.name,
          styles: r.styles,
          next: Tt
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            Tt = {
              name: n.name,
              styles: n.styles,
              next: Tt
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return ig(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = Tt, a = r(e);
        return Tt = i, fo(e, t, a);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], l = r.replace(Qd, function(u, d, f) {
          var p = "animation" + s.length;
          return s.push("const " + p + " = keyframes`" + f.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + p + "}";
        });
        s.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(s, ["`" + l + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + l + "`"));
      }
      break;
  }
  if (t == null)
    return r;
  var c = t[r];
  return c !== void 0 ? c : r;
}
function ig(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += fo(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : dc(a) && (n += Ma(i) + ":" + $i(i, a) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(ef);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var s = 0; s < a.length; s++)
            dc(a[s]) && (n += Ma(i) + ":" + $i(i, a[s]) + ";");
        else {
          var l = fo(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Ma(i) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(Jm), n += i + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var pc = /label:\s*([^\s;\n{]+)\s*(;|$)/g, tf;
process.env.NODE_ENV !== "production" && (tf = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Tt, mn = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Tt = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += fo(n, r, a)) : (process.env.NODE_ENV !== "production" && a[0] === void 0 && console.error(uc), i += a[0]);
  for (var s = 1; s < t.length; s++)
    i += fo(n, r, t[s]), o && (process.env.NODE_ENV !== "production" && a[s] === void 0 && console.error(uc), i += a[s]);
  var l;
  process.env.NODE_ENV !== "production" && (i = i.replace(tf, function(f) {
    return l = f, "";
  })), pc.lastIndex = 0;
  for (var c = "", u; (u = pc.exec(i)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var d = Xm(i) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: d,
    styles: i,
    map: l,
    next: Tt,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: d,
    styles: i,
    next: Tt
  };
}, ag = function(t) {
  return t();
}, rf = G["useInsertionEffect"] ? G["useInsertionEffect"] : !1, Qs = rf || ag, hc = rf || G.useLayoutEffect, sg = {}.hasOwnProperty, el = /* @__PURE__ */ G.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Wm({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (el.displayName = "EmotionCacheContext");
el.Provider;
var ta = function(t) {
  return /* @__PURE__ */ Ys(function(r, n) {
    var o = Re(el);
    return t(r, o, n);
  });
}, wr = /* @__PURE__ */ G.createContext({});
process.env.NODE_ENV !== "production" && (wr.displayName = "EmotionThemeContext");
var lg = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    if (process.env.NODE_ENV !== "production" && (n == null || typeof n != "object" || Array.isArray(n)))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return n;
  }
  if (process.env.NODE_ENV !== "production" && (r == null || typeof r != "object" || Array.isArray(r)))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return Ei({}, t, r);
}, cg = /* @__PURE__ */ ic(function(e) {
  return ic(function(t) {
    return lg(e, t);
  });
}), ug = function(t) {
  var r = G.useContext(wr);
  return t.theme !== r && (r = cg(r)(t.theme)), /* @__PURE__ */ G.createElement(wr.Provider, {
    value: r
  }, t.children);
}, mc = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", gc = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", dg = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Qi(r, n, o), Qs(function() {
    return ea(r, n, o);
  }), null;
}, fg = /* @__PURE__ */ ta(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[mc], i = [n], a = "";
  typeof e.className == "string" ? a = Zs(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = mn(i, void 0, G.useContext(wr));
  if (process.env.NODE_ENV !== "production" && s.name.indexOf("-") === -1) {
    var l = e[gc];
    l && (s = mn([s, "label:" + l + ";"]));
  }
  a += t.key + "-" + s.name;
  var c = {};
  for (var u in e)
    sg.call(e, u) && u !== "css" && u !== mc && (process.env.NODE_ENV === "production" || u !== gc) && (c[u] = e[u]);
  return c.ref = r, c.className = a, /* @__PURE__ */ G.createElement(G.Fragment, null, /* @__PURE__ */ G.createElement(dg, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ G.createElement(o, c));
});
process.env.NODE_ENV !== "production" && (fg.displayName = "EmotionCssPropInternal");
var pg = {
  name: "@emotion/react",
  version: "11.11.1",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.2",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.0",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, vc = !1, ko = /* @__PURE__ */ ta(function(e, t) {
  process.env.NODE_ENV !== "production" && !vc && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), vc = !0);
  var r = e.styles, n = mn([r], void 0, G.useContext(wr)), o = G.useRef();
  return hc(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), hc(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && ea(t, n.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (ko.displayName = "EmotionGlobal");
function hg() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return mn(t);
}
var mg = function() {
  var t = hg.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, gg = function e(t) {
  for (var r = t.length, n = 0, o = ""; n < r; n++) {
    var i = t[n];
    if (i != null) {
      var a = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            a = e(i);
          else {
            process.env.NODE_ENV !== "production" && i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), a = "";
            for (var s in i)
              i[s] && s && (a && (a += " "), a += s);
          }
          break;
        }
        default:
          a = i;
      }
      a && (o && (o += " "), o += a);
    }
  }
  return o;
};
function vg(e, t, r) {
  var n = [], o = Zs(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var bg = function(t) {
  var r = t.cache, n = t.serializedArr;
  return Qs(function() {
    for (var o = 0; o < n.length; o++)
      ea(r, n[o], !1);
  }), null;
}, yg = /* @__PURE__ */ ta(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    var f = mn(u, t.registered);
    return n.push(f), Qi(t, f, !1), t.key + "-" + f.name;
  }, i = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    return vg(t.registered, o, gg(u));
  }, a = {
    css: o,
    cx: i,
    theme: G.useContext(wr)
  }, s = e.children(a);
  return r = !0, /* @__PURE__ */ G.createElement(G.Fragment, null, /* @__PURE__ */ G.createElement(bg, {
    cache: t,
    serializedArr: n
  }), s);
});
process.env.NODE_ENV !== "production" && (yg.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var bc = !0, xg = typeof jest < "u" || typeof vi < "u";
  if (bc && !xg) {
    var yc = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : bc ? window : global
    ), xc = "__EMOTION_REACT_" + pg.version.split(".")[0] + "__";
    yc[xc] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), yc[xc] = !0;
  }
}
var nf = String.raw, of = nf`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`, Sg = () => /* @__PURE__ */ P.jsx(ko, { styles: of }), wg = ({ scope: e = "" }) => /* @__PURE__ */ P.jsx(
  ko,
  {
    styles: nf`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${of}
    `
  }
);
function Cg(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function kn(e = {}) {
  const {
    name: t,
    strict: r = !0,
    hookName: n = "useContext",
    providerName: o = "Provider",
    errorMessage: i,
    defaultValue: a
  } = e, s = Yt(a);
  s.displayName = t;
  function l() {
    var c;
    const u = Re(s);
    if (!u && r) {
      const d = new Error(
        i ?? Cg(n, o)
      );
      throw d.name = "ContextError", (c = Error.captureStackTrace) == null || c.call(Error, d, l), d;
    }
    return u;
  }
  return [s.Provider, l, s];
}
var [_g, kg] = kn({
  strict: !1,
  name: "PortalManagerContext"
});
function af(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ P.jsx(_g, { value: { zIndex: r }, children: t });
}
af.displayName = "PortalManager";
var Ai = globalThis != null && globalThis.document ? Id : We, [sf, Tg] = kn({
  strict: !1,
  name: "PortalContext"
}), tl = "chakra-portal", Pg = ".chakra-portal", Eg = (e) => /* @__PURE__ */ P.jsx(
  "div",
  {
    className: "chakra-portal-zIndex",
    style: {
      position: "absolute",
      zIndex: e.zIndex,
      top: 0,
      left: 0,
      right: 0
      // NB: Don't add `bottom: 0`, it makes the entire app unusable
      // @see https://github.com/chakra-ui/chakra-ui/issues/3201
    },
    children: e.children
  }
), $g = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = Ht(null), i = Te(null), [, a] = Ht({});
  We(() => a({}), []);
  const s = Tg(), l = kg();
  Ai(() => {
    if (!n)
      return;
    const u = n.ownerDocument, d = t ? s ?? u.body : u.body;
    if (!d)
      return;
    i.current = u.createElement("div"), i.current.className = tl, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [n]);
  const c = l != null && l.zIndex ? /* @__PURE__ */ P.jsx(Eg, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return i.current ? Ld(
    /* @__PURE__ */ P.jsx(sf, { value: i.current, children: c }),
    i.current
  ) : /* @__PURE__ */ P.jsx(
    "span",
    {
      ref: (u) => {
        u && o(u);
      }
    }
  );
}, Ag = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = He(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = tl), l;
  }, [o]), [, s] = Ht({});
  return Ai(() => s({}), []), Ai(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? Ld(
    /* @__PURE__ */ P.jsx(sf, { value: n ? a : null, children: t }),
    a
  ) : null;
};
function To(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ P.jsx(Ag, { containerRef: r, ...n }) : /* @__PURE__ */ P.jsx($g, { ...n });
}
To.className = tl;
To.selector = Pg;
To.displayName = "Portal";
function lf() {
  const e = Re(
    wr
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var rl = Yt({});
rl.displayName = "ColorModeContext";
function ra() {
  const e = Re(rl);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var Ko = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function Rg(e = {}) {
  const { preventTransition: t = !0 } = e, r = {
    setDataset: (n) => {
      const o = t ? r.preventTransition() : void 0;
      document.documentElement.dataset.theme = n, document.documentElement.style.colorScheme = n, o == null || o();
    },
    setClassName(n) {
      document.body.classList.add(n ? Ko.dark : Ko.light), document.body.classList.remove(n ? Ko.light : Ko.dark);
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme(n) {
      var o;
      return ((o = r.query().matches) != null ? o : n === "dark") ? "dark" : "light";
    },
    addListener(n) {
      const o = r.query(), i = (a) => {
        n(a.matches ? "dark" : "light");
      };
      return typeof o.addListener == "function" ? o.addListener(i) : o.addEventListener("change", i), () => {
        typeof o.removeListener == "function" ? o.removeListener(i) : o.removeEventListener("change", i);
      };
    },
    preventTransition() {
      const n = document.createElement("style");
      return n.appendChild(
        document.createTextNode(
          "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
        )
      ), document.head.appendChild(n), () => {
        window.getComputedStyle(document.body), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.head.removeChild(n);
          });
        });
      };
    }
  };
  return r;
}
var Og = "chakra-ui-color-mode";
function jg(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document))
        return t;
      let r;
      try {
        r = localStorage.getItem(e) || t;
      } catch {
      }
      return r || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {
      }
    }
  };
}
var Mg = jg(Og), Sc = () => {
};
function wc(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function cf(e) {
  const {
    value: t,
    children: r,
    options: {
      useSystemColorMode: n,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = Mg
  } = e, s = o === "dark" ? "dark" : "light", [l, c] = Ht(
    () => wc(a, s)
  ), [u, d] = Ht(
    () => wc(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: g, addListener: v } = He(
    () => Rg({ preventTransition: i }),
    [i]
  ), S = o === "system" && !l ? u : l, _ = fe(
    (k) => {
      const w = k === "system" ? f() : k;
      c(w), p(w === "dark"), g(w), a.set(w);
    },
    [a, f, p, g]
  );
  Ai(() => {
    o === "system" && d(f());
  }, []), We(() => {
    const k = a.get();
    if (k) {
      _(k);
      return;
    }
    if (o === "system") {
      _("system");
      return;
    }
    _(s);
  }, [a, s, o, _]);
  const b = fe(() => {
    _(S === "dark" ? "light" : "dark");
  }, [S, _]);
  We(() => {
    if (n)
      return v(_);
  }, [n, v, _]);
  const C = He(
    () => ({
      colorMode: t ?? S,
      toggleColorMode: t ? Sc : b,
      setColorMode: t ? Sc : _,
      forced: t !== void 0
    }),
    [S, b, _, t]
  );
  return /* @__PURE__ */ P.jsx(rl.Provider, { value: C, children: r });
}
cf.displayName = "ColorModeProvider";
function Dg() {
  const e = ra(), t = lf();
  return { ...e, theme: t };
}
var At = (...e) => e.filter(Boolean).join(" ");
function Et(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function yr(e, ...t) {
  return zg(e) ? e(...t) : e;
}
var zg = (e) => typeof e == "function", Cc = (e) => e ? "" : void 0;
function Bn(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
var Ri = { exports: {} };
Ri.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", c = "[object AsyncFunction]", u = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", g = "[object GeneratorFunction]", v = "[object Map]", S = "[object Number]", _ = "[object Null]", b = "[object Object]", C = "[object Proxy]", k = "[object RegExp]", w = "[object Set]", A = "[object String]", E = "[object Undefined]", M = "[object WeakMap]", D = "[object ArrayBuffer]", O = "[object DataView]", I = "[object Float32Array]", le = "[object Float64Array]", N = "[object Int8Array]", W = "[object Int16Array]", U = "[object Int32Array]", K = "[object Uint8Array]", Q = "[object Uint8ClampedArray]", je = "[object Uint16Array]", be = "[object Uint32Array]", Me = /[\\^$.*+?()[\]{}|]/g, Y = /^\[object .+?Constructor\]$/, Ce = /^(?:0|[1-9]\d*)$/, H = {};
  H[I] = H[le] = H[N] = H[W] = H[U] = H[K] = H[Q] = H[je] = H[be] = !0, H[s] = H[l] = H[D] = H[u] = H[O] = H[d] = H[f] = H[p] = H[v] = H[S] = H[b] = H[k] = H[w] = H[A] = H[M] = !1;
  var Ae = typeof qo == "object" && qo && qo.Object === Object && qo, de = typeof self == "object" && self && self.Object === Object && self, he = Ae || de || Function("return this")(), Ve = t && !t.nodeType && t, ye = Ve && !0 && e && !e.nodeType && e, Le = ye && ye.exports === Ve, Ie = Le && Ae.process, De = function() {
    try {
      var h = ye && ye.require && ye.require("util").types;
      return h || Ie && Ie.binding && Ie.binding("util");
    } catch {
    }
  }(), R = De && De.isTypedArray;
  function Pe(h, y, T) {
    switch (T.length) {
      case 0:
        return h.call(y);
      case 1:
        return h.call(y, T[0]);
      case 2:
        return h.call(y, T[0], T[1]);
      case 3:
        return h.call(y, T[0], T[1], T[2]);
    }
    return h.apply(y, T);
  }
  function lt(h, y) {
    for (var T = -1, z = Array(h); ++T < h; )
      z[T] = y(T);
    return z;
  }
  function ct(h) {
    return function(y) {
      return h(y);
    };
  }
  function qt(h, y) {
    return h == null ? void 0 : h[y];
  }
  function Pr(h, y) {
    return function(T) {
      return h(y(T));
    };
  }
  var Ur = Array.prototype, cr = Function.prototype, Qe = Object.prototype, Rt = he["__core-js_shared__"], Ct = cr.toString, et = Qe.hasOwnProperty, ur = function() {
    var h = /[^.]+$/.exec(Rt && Rt.keys && Rt.keys.IE_PROTO || "");
    return h ? "Symbol(src)_1." + h : "";
  }(), dr = Qe.toString, Er = Ct.call(Object), Ot = RegExp(
    "^" + Ct.call(et).replace(Me, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Gt = Le ? he.Buffer : void 0, $n = he.Symbol, An = he.Uint8Array, Yr = Gt ? Gt.allocUnsafe : void 0, zo = Pr(Object.getPrototypeOf, Object), Bo = Object.create, ga = Qe.propertyIsEnumerable, va = Ur.splice, Kt = $n ? $n.toStringTag : void 0, qr = function() {
    try {
      var h = Ta(Object, "defineProperty");
      return h({}, "", {}), h;
    } catch {
    }
  }(), ba = Gt ? Gt.isBuffer : void 0, Gr = Math.max, Vo = Date.now, Xt = Ta(he, "Map"), Zt = Ta(Object, "create"), Rn = function() {
    function h() {
    }
    return function(y) {
      if (!$r(y))
        return {};
      if (Bo)
        return Bo(y);
      h.prototype = y;
      var T = new h();
      return h.prototype = void 0, T;
    };
  }();
  function jt(h) {
    var y = -1, T = h == null ? 0 : h.length;
    for (this.clear(); ++y < T; ) {
      var z = h[y];
      this.set(z[0], z[1]);
    }
  }
  function ya() {
    this.__data__ = Zt ? Zt(null) : {}, this.size = 0;
  }
  function Io(h) {
    var y = this.has(h) && delete this.__data__[h];
    return this.size -= y ? 1 : 0, y;
  }
  function xa(h) {
    var y = this.__data__;
    if (Zt) {
      var T = y[h];
      return T === n ? void 0 : T;
    }
    return et.call(y, h) ? y[h] : void 0;
  }
  function Fo(h) {
    var y = this.__data__;
    return Zt ? y[h] !== void 0 : et.call(y, h);
  }
  function Lo(h, y) {
    var T = this.__data__;
    return this.size += this.has(h) ? 0 : 1, T[h] = Zt && y === void 0 ? n : y, this;
  }
  jt.prototype.clear = ya, jt.prototype.delete = Io, jt.prototype.get = xa, jt.prototype.has = Fo, jt.prototype.set = Lo;
  function _t(h) {
    var y = -1, T = h == null ? 0 : h.length;
    for (this.clear(); ++y < T; ) {
      var z = h[y];
      this.set(z[0], z[1]);
    }
  }
  function Sa() {
    this.__data__ = [], this.size = 0;
  }
  function No(h) {
    var y = this.__data__, T = rt(y, h);
    if (T < 0)
      return !1;
    var z = y.length - 1;
    return T == z ? y.pop() : va.call(y, T, 1), --this.size, !0;
  }
  function wa(h) {
    var y = this.__data__, T = rt(y, h);
    return T < 0 ? void 0 : y[T][1];
  }
  function Ca(h) {
    return rt(this.__data__, h) > -1;
  }
  function _a(h, y) {
    var T = this.__data__, z = rt(T, h);
    return z < 0 ? (++this.size, T.push([h, y])) : T[z][1] = y, this;
  }
  _t.prototype.clear = Sa, _t.prototype.delete = No, _t.prototype.get = wa, _t.prototype.has = Ca, _t.prototype.set = _a;
  function fr(h) {
    var y = -1, T = h == null ? 0 : h.length;
    for (this.clear(); ++y < T; ) {
      var z = h[y];
      this.set(z[0], z[1]);
    }
  }
  function m() {
    this.size = 0, this.__data__ = {
      hash: new jt(),
      map: new (Xt || _t)(),
      string: new jt()
    };
  }
  function $(h) {
    var y = Uo(this, h).delete(h);
    return this.size -= y ? 1 : 0, y;
  }
  function j(h) {
    return Uo(this, h).get(h);
  }
  function L(h) {
    return Uo(this, h).has(h);
  }
  function re(h, y) {
    var T = Uo(this, h), z = T.size;
    return T.set(h, y), this.size += T.size == z ? 0 : 1, this;
  }
  fr.prototype.clear = m, fr.prototype.delete = $, fr.prototype.get = j, fr.prototype.has = L, fr.prototype.set = re;
  function ee(h) {
    var y = this.__data__ = new _t(h);
    this.size = y.size;
  }
  function X() {
    this.__data__ = new _t(), this.size = 0;
  }
  function q(h) {
    var y = this.__data__, T = y.delete(h);
    return this.size = y.size, T;
  }
  function Ue(h) {
    return this.__data__.get(h);
  }
  function _e(h) {
    return this.__data__.has(h);
  }
  function Ee(h, y) {
    var T = this.__data__;
    if (T instanceof _t) {
      var z = T.__data__;
      if (!Xt || z.length < r - 1)
        return z.push([h, y]), this.size = ++T.size, this;
      T = this.__data__ = new fr(z);
    }
    return T.set(h, y), this.size = T.size, this;
  }
  ee.prototype.clear = X, ee.prototype.delete = q, ee.prototype.get = Ue, ee.prototype.has = _e, ee.prototype.set = Ee;
  function tt(h, y) {
    var T = $a(h), z = !T && Ea(h), te = !T && !z && Kl(h), pe = !T && !z && !te && Zl(h), xe = T || z || te || pe, Z = xe ? lt(h.length, String) : [], Se = Z.length;
    for (var mt in h)
      (y || et.call(h, mt)) && !(xe && // Safari 9 has enumerable `arguments.length` in strict mode.
      (mt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      te && (mt == "offset" || mt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      pe && (mt == "buffer" || mt == "byteLength" || mt == "byteOffset") || // Skip index properties.
      ql(mt, Se))) && Z.push(mt);
    return Z;
  }
  function Mt(h, y, T) {
    (T !== void 0 && !Yo(h[y], T) || T === void 0 && !(y in h)) && ka(h, y, T);
  }
  function Wo(h, y, T) {
    var z = h[y];
    (!(et.call(h, y) && Yo(z, T)) || T === void 0 && !(y in h)) && ka(h, y, T);
  }
  function rt(h, y) {
    for (var T = h.length; T--; )
      if (Yo(h[T][0], y))
        return T;
    return -1;
  }
  function ka(h, y, T) {
    y == "__proto__" && qr ? qr(h, y, {
      configurable: !0,
      enumerable: !0,
      value: T,
      writable: !0
    }) : h[y] = T;
  }
  var Ph = Fh();
  function Ho(h) {
    return h == null ? h === void 0 ? E : _ : Kt && Kt in Object(h) ? Lh(h) : qh(h);
  }
  function Ul(h) {
    return On(h) && Ho(h) == s;
  }
  function Eh(h) {
    if (!$r(h) || Uh(h))
      return !1;
    var y = Ra(h) ? Ot : Y;
    return y.test(Zh(h));
  }
  function $h(h) {
    return On(h) && Xl(h.length) && !!H[Ho(h)];
  }
  function Ah(h) {
    if (!$r(h))
      return Yh(h);
    var y = Gl(h), T = [];
    for (var z in h)
      z == "constructor" && (y || !et.call(h, z)) || T.push(z);
    return T;
  }
  function Yl(h, y, T, z, te) {
    h !== y && Ph(y, function(pe, xe) {
      if (te || (te = new ee()), $r(pe))
        Rh(h, y, xe, T, Yl, z, te);
      else {
        var Z = z ? z(Pa(h, xe), pe, xe + "", h, y, te) : void 0;
        Z === void 0 && (Z = pe), Mt(h, xe, Z);
      }
    }, Jl);
  }
  function Rh(h, y, T, z, te, pe, xe) {
    var Z = Pa(h, T), Se = Pa(y, T), mt = xe.get(Se);
    if (mt) {
      Mt(h, T, mt);
      return;
    }
    var ut = pe ? pe(Z, Se, T + "", h, y, xe) : void 0, jn = ut === void 0;
    if (jn) {
      var Oa = $a(Se), ja = !Oa && Kl(Se), ec = !Oa && !ja && Zl(Se);
      ut = Se, Oa || ja || ec ? $a(Z) ? ut = Z : Jh(Z) ? ut = Bh(Z) : ja ? (jn = !1, ut = Mh(Se, !0)) : ec ? (jn = !1, ut = zh(Se, !0)) : ut = [] : Qh(Se) || Ea(Se) ? (ut = Z, Ea(Z) ? ut = em(Z) : (!$r(Z) || Ra(Z)) && (ut = Nh(Se))) : jn = !1;
    }
    jn && (xe.set(Se, ut), te(ut, Se, z, pe, xe), xe.delete(Se)), Mt(h, T, ut);
  }
  function Oh(h, y) {
    return Kh(Gh(h, y, Ql), h + "");
  }
  var jh = qr ? function(h, y) {
    return qr(h, "toString", {
      configurable: !0,
      enumerable: !1,
      value: rm(y),
      writable: !0
    });
  } : Ql;
  function Mh(h, y) {
    if (y)
      return h.slice();
    var T = h.length, z = Yr ? Yr(T) : new h.constructor(T);
    return h.copy(z), z;
  }
  function Dh(h) {
    var y = new h.constructor(h.byteLength);
    return new An(y).set(new An(h)), y;
  }
  function zh(h, y) {
    var T = y ? Dh(h.buffer) : h.buffer;
    return new h.constructor(T, h.byteOffset, h.length);
  }
  function Bh(h, y) {
    var T = -1, z = h.length;
    for (y || (y = Array(z)); ++T < z; )
      y[T] = h[T];
    return y;
  }
  function Vh(h, y, T, z) {
    var te = !T;
    T || (T = {});
    for (var pe = -1, xe = y.length; ++pe < xe; ) {
      var Z = y[pe], Se = z ? z(T[Z], h[Z], Z, T, h) : void 0;
      Se === void 0 && (Se = h[Z]), te ? ka(T, Z, Se) : Wo(T, Z, Se);
    }
    return T;
  }
  function Ih(h) {
    return Oh(function(y, T) {
      var z = -1, te = T.length, pe = te > 1 ? T[te - 1] : void 0, xe = te > 2 ? T[2] : void 0;
      for (pe = h.length > 3 && typeof pe == "function" ? (te--, pe) : void 0, xe && Wh(T[0], T[1], xe) && (pe = te < 3 ? void 0 : pe, te = 1), y = Object(y); ++z < te; ) {
        var Z = T[z];
        Z && h(y, Z, z, pe);
      }
      return y;
    });
  }
  function Fh(h) {
    return function(y, T, z) {
      for (var te = -1, pe = Object(y), xe = z(y), Z = xe.length; Z--; ) {
        var Se = xe[h ? Z : ++te];
        if (T(pe[Se], Se, pe) === !1)
          break;
      }
      return y;
    };
  }
  function Uo(h, y) {
    var T = h.__data__;
    return Hh(y) ? T[typeof y == "string" ? "string" : "hash"] : T.map;
  }
  function Ta(h, y) {
    var T = qt(h, y);
    return Eh(T) ? T : void 0;
  }
  function Lh(h) {
    var y = et.call(h, Kt), T = h[Kt];
    try {
      h[Kt] = void 0;
      var z = !0;
    } catch {
    }
    var te = dr.call(h);
    return z && (y ? h[Kt] = T : delete h[Kt]), te;
  }
  function Nh(h) {
    return typeof h.constructor == "function" && !Gl(h) ? Rn(zo(h)) : {};
  }
  function ql(h, y) {
    var T = typeof h;
    return y = y ?? a, !!y && (T == "number" || T != "symbol" && Ce.test(h)) && h > -1 && h % 1 == 0 && h < y;
  }
  function Wh(h, y, T) {
    if (!$r(T))
      return !1;
    var z = typeof y;
    return (z == "number" ? Aa(T) && ql(y, T.length) : z == "string" && y in T) ? Yo(T[y], h) : !1;
  }
  function Hh(h) {
    var y = typeof h;
    return y == "string" || y == "number" || y == "symbol" || y == "boolean" ? h !== "__proto__" : h === null;
  }
  function Uh(h) {
    return !!ur && ur in h;
  }
  function Gl(h) {
    var y = h && h.constructor, T = typeof y == "function" && y.prototype || Qe;
    return h === T;
  }
  function Yh(h) {
    var y = [];
    if (h != null)
      for (var T in Object(h))
        y.push(T);
    return y;
  }
  function qh(h) {
    return dr.call(h);
  }
  function Gh(h, y, T) {
    return y = Gr(y === void 0 ? h.length - 1 : y, 0), function() {
      for (var z = arguments, te = -1, pe = Gr(z.length - y, 0), xe = Array(pe); ++te < pe; )
        xe[te] = z[y + te];
      te = -1;
      for (var Z = Array(y + 1); ++te < y; )
        Z[te] = z[te];
      return Z[y] = T(xe), Pe(h, this, Z);
    };
  }
  function Pa(h, y) {
    if (!(y === "constructor" && typeof h[y] == "function") && y != "__proto__")
      return h[y];
  }
  var Kh = Xh(jh);
  function Xh(h) {
    var y = 0, T = 0;
    return function() {
      var z = Vo(), te = i - (z - T);
      if (T = z, te > 0) {
        if (++y >= o)
          return arguments[0];
      } else
        y = 0;
      return h.apply(void 0, arguments);
    };
  }
  function Zh(h) {
    if (h != null) {
      try {
        return Ct.call(h);
      } catch {
      }
      try {
        return h + "";
      } catch {
      }
    }
    return "";
  }
  function Yo(h, y) {
    return h === y || h !== h && y !== y;
  }
  var Ea = Ul(function() {
    return arguments;
  }()) ? Ul : function(h) {
    return On(h) && et.call(h, "callee") && !ga.call(h, "callee");
  }, $a = Array.isArray;
  function Aa(h) {
    return h != null && Xl(h.length) && !Ra(h);
  }
  function Jh(h) {
    return On(h) && Aa(h);
  }
  var Kl = ba || nm;
  function Ra(h) {
    if (!$r(h))
      return !1;
    var y = Ho(h);
    return y == p || y == g || y == c || y == C;
  }
  function Xl(h) {
    return typeof h == "number" && h > -1 && h % 1 == 0 && h <= a;
  }
  function $r(h) {
    var y = typeof h;
    return h != null && (y == "object" || y == "function");
  }
  function On(h) {
    return h != null && typeof h == "object";
  }
  function Qh(h) {
    if (!On(h) || Ho(h) != b)
      return !1;
    var y = zo(h);
    if (y === null)
      return !0;
    var T = et.call(y, "constructor") && y.constructor;
    return typeof T == "function" && T instanceof T && Ct.call(T) == Er;
  }
  var Zl = R ? ct(R) : $h;
  function em(h) {
    return Vh(h, Jl(h));
  }
  function Jl(h) {
    return Aa(h) ? tt(h, !0) : Ah(h);
  }
  var tm = Ih(function(h, y, T, z) {
    Yl(h, y, T, z);
  });
  function rm(h) {
    return function() {
      return h;
    };
  }
  function Ql(h) {
    return h;
  }
  function nm() {
    return !1;
  }
  e.exports = tm;
})(Ri, Ri.exports);
var Bg = Ri.exports;
const It = /* @__PURE__ */ Nd(Bg);
var Vg = (e) => /!(important)?$/.test(e), _c = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, Ig = (e, t) => (r) => {
  const n = String(t), o = Vg(n), i = _c(n), a = e ? `${e}.${i}` : i;
  let s = Et(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t;
  return s = _c(s), o ? `${s} !important` : s;
};
function nl(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (i, a) => {
    var s;
    const l = Ig(t, i)(a);
    let c = (s = r == null ? void 0 : r(l, a)) != null ? s : l;
    return n && (c = n(c, a)), c;
  };
}
var Xo = (...e) => (t) => e.reduce((r, n) => n(r), t);
function gt(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = nl({
      scale: e,
      transform: t
    }), n;
  };
}
var Fg = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function Lg(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: Fg(t),
    transform: r ? nl({
      scale: r,
      compose: n
    }) : n
  };
}
var uf = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function Ng() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...uf
  ].join(" ");
}
function Wg() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...uf
  ].join(" ");
}
var Hg = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)"
  ].join(" ")
}, Ug = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function Yg(e) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)"
    ].join(", ")
  };
}
var qg = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, bs = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, Gg = new Set(Object.values(bs)), ys = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), Kg = (e) => e.trim();
function Xg(e, t) {
  if (e == null || ys.has(e))
    return e;
  if (!(xs(e) || ys.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...c] = a.split(",").map(Kg).filter(Boolean);
  if ((c == null ? void 0 : c.length) === 0)
    return e;
  const u = l in bs ? bs[l] : l;
  c.unshift(u);
  const d = c.map((f) => {
    if (Gg.has(f))
      return f;
    const p = f.indexOf(" "), [g, v] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], S = xs(v) ? v : v && v.split(" "), _ = `colors.${g}`, b = _ in t.__cssMap ? t.__cssMap[_].varRef : g;
    return S ? [
      b,
      ...Array.isArray(S) ? S : [S]
    ].join(" ") : b;
  });
  return `${s}(${d.join(", ")})`;
}
var xs = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), Zg = (e, t) => Xg(e, t ?? {});
function Jg(e) {
  return /^var\(--.+\)$/.test(e);
}
var Qg = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, Dt = (e) => (t) => `${e}(${t})`, J = {
  filter(e) {
    return e !== "auto" ? e : Hg;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : Ug;
  },
  ring(e) {
    return Yg(J.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? Ng() : e === "auto-gpu" ? Wg() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = Qg(e);
    return t || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, t) {
    const r = { left: "right", right: "left" };
    return t.direction === "rtl" ? r[e] : e;
  },
  degree(e) {
    if (Jg(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: Zg,
  blur: Dt("blur"),
  opacity: Dt("opacity"),
  brightness: Dt("brightness"),
  contrast: Dt("contrast"),
  dropShadow: Dt("drop-shadow"),
  grayscale: Dt("grayscale"),
  hueRotate: (e) => Dt("hue-rotate")(J.degree(e)),
  invert: Dt("invert"),
  saturate: Dt("saturate"),
  sepia: Dt("sepia"),
  bgImage(e) {
    return e == null || xs(e) || ys.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: r, divide: n } = (t = qg[e]) != null ? t : {}, o = { flexDirection: e };
    return r && (o[r] = 1), n && (o[n] = 1), o;
  }
}, x = {
  borderWidths: gt("borderWidths"),
  borderStyles: gt("borderStyles"),
  colors: gt("colors"),
  borders: gt("borders"),
  gradients: gt("gradients", J.gradient),
  radii: gt("radii", J.px),
  space: gt("space", Xo(J.vh, J.px)),
  spaceT: gt("space", Xo(J.vh, J.px)),
  degreeT(e) {
    return { property: e, transform: J.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: nl({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: gt("sizes", Xo(J.vh, J.px)),
  sizesT: gt("sizes", Xo(J.vh, J.fraction)),
  shadows: gt("shadows"),
  logical: Lg,
  blur: gt("blur", J.blur)
}, fi = {
  background: x.colors("background"),
  backgroundColor: x.colors("backgroundColor"),
  backgroundImage: x.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: J.bgClip },
  bgSize: x.prop("backgroundSize"),
  bgPosition: x.prop("backgroundPosition"),
  bg: x.colors("background"),
  bgColor: x.colors("backgroundColor"),
  bgPos: x.prop("backgroundPosition"),
  bgRepeat: x.prop("backgroundRepeat"),
  bgAttachment: x.prop("backgroundAttachment"),
  bgGradient: x.gradients("backgroundImage"),
  bgClip: { transform: J.bgClip }
};
Object.assign(fi, {
  bgImage: fi.backgroundImage,
  bgImg: fi.backgroundImage
});
var ne = {
  border: x.borders("border"),
  borderWidth: x.borderWidths("borderWidth"),
  borderStyle: x.borderStyles("borderStyle"),
  borderColor: x.colors("borderColor"),
  borderRadius: x.radii("borderRadius"),
  borderTop: x.borders("borderTop"),
  borderBlockStart: x.borders("borderBlockStart"),
  borderTopLeftRadius: x.radii("borderTopLeftRadius"),
  borderStartStartRadius: x.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: x.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: x.radii("borderTopRightRadius"),
  borderStartEndRadius: x.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: x.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: x.borders("borderRight"),
  borderInlineEnd: x.borders("borderInlineEnd"),
  borderBottom: x.borders("borderBottom"),
  borderBlockEnd: x.borders("borderBlockEnd"),
  borderBottomLeftRadius: x.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: x.radii("borderBottomRightRadius"),
  borderLeft: x.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: x.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: x.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: x.borders(["borderLeft", "borderRight"]),
  borderInline: x.borders("borderInline"),
  borderY: x.borders(["borderTop", "borderBottom"]),
  borderBlock: x.borders("borderBlock"),
  borderTopWidth: x.borderWidths("borderTopWidth"),
  borderBlockStartWidth: x.borderWidths("borderBlockStartWidth"),
  borderTopColor: x.colors("borderTopColor"),
  borderBlockStartColor: x.colors("borderBlockStartColor"),
  borderTopStyle: x.borderStyles("borderTopStyle"),
  borderBlockStartStyle: x.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: x.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: x.borderWidths("borderBlockEndWidth"),
  borderBottomColor: x.colors("borderBottomColor"),
  borderBlockEndColor: x.colors("borderBlockEndColor"),
  borderBottomStyle: x.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: x.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: x.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: x.borderWidths("borderInlineStartWidth"),
  borderLeftColor: x.colors("borderLeftColor"),
  borderInlineStartColor: x.colors("borderInlineStartColor"),
  borderLeftStyle: x.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: x.borderStyles("borderInlineStartStyle"),
  borderRightWidth: x.borderWidths("borderRightWidth"),
  borderInlineEndWidth: x.borderWidths("borderInlineEndWidth"),
  borderRightColor: x.colors("borderRightColor"),
  borderInlineEndColor: x.colors("borderInlineEndColor"),
  borderRightStyle: x.borderStyles("borderRightStyle"),
  borderInlineEndStyle: x.borderStyles("borderInlineEndStyle"),
  borderTopRadius: x.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: x.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: x.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: x.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(ne, {
  rounded: ne.borderRadius,
  roundedTop: ne.borderTopRadius,
  roundedTopLeft: ne.borderTopLeftRadius,
  roundedTopRight: ne.borderTopRightRadius,
  roundedTopStart: ne.borderStartStartRadius,
  roundedTopEnd: ne.borderStartEndRadius,
  roundedBottom: ne.borderBottomRadius,
  roundedBottomLeft: ne.borderBottomLeftRadius,
  roundedBottomRight: ne.borderBottomRightRadius,
  roundedBottomStart: ne.borderEndStartRadius,
  roundedBottomEnd: ne.borderEndEndRadius,
  roundedLeft: ne.borderLeftRadius,
  roundedRight: ne.borderRightRadius,
  roundedStart: ne.borderInlineStartRadius,
  roundedEnd: ne.borderInlineEndRadius,
  borderStart: ne.borderInlineStart,
  borderEnd: ne.borderInlineEnd,
  borderTopStartRadius: ne.borderStartStartRadius,
  borderTopEndRadius: ne.borderStartEndRadius,
  borderBottomStartRadius: ne.borderEndStartRadius,
  borderBottomEndRadius: ne.borderEndEndRadius,
  borderStartRadius: ne.borderInlineStartRadius,
  borderEndRadius: ne.borderInlineEndRadius,
  borderStartWidth: ne.borderInlineStartWidth,
  borderEndWidth: ne.borderInlineEndWidth,
  borderStartColor: ne.borderInlineStartColor,
  borderEndColor: ne.borderInlineEndColor,
  borderStartStyle: ne.borderInlineStartStyle,
  borderEndStyle: ne.borderInlineEndStyle
});
var ev = {
  color: x.colors("color"),
  textColor: x.colors("color"),
  fill: x.colors("fill"),
  stroke: x.colors("stroke")
}, Ss = {
  boxShadow: x.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: x.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: x.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Ss, {
  shadow: Ss.boxShadow
});
var tv = {
  filter: { transform: J.filter },
  blur: x.blur("--chakra-blur"),
  brightness: x.propT("--chakra-brightness", J.brightness),
  contrast: x.propT("--chakra-contrast", J.contrast),
  hueRotate: x.propT("--chakra-hue-rotate", J.hueRotate),
  invert: x.propT("--chakra-invert", J.invert),
  saturate: x.propT("--chakra-saturate", J.saturate),
  dropShadow: x.propT("--chakra-drop-shadow", J.dropShadow),
  backdropFilter: { transform: J.backdropFilter },
  backdropBlur: x.blur("--chakra-backdrop-blur"),
  backdropBrightness: x.propT(
    "--chakra-backdrop-brightness",
    J.brightness
  ),
  backdropContrast: x.propT("--chakra-backdrop-contrast", J.contrast),
  backdropHueRotate: x.propT(
    "--chakra-backdrop-hue-rotate",
    J.hueRotate
  ),
  backdropInvert: x.propT("--chakra-backdrop-invert", J.invert),
  backdropSaturate: x.propT("--chakra-backdrop-saturate", J.saturate)
}, Oi = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: J.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: x.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: x.space("gap"),
  rowGap: x.space("rowGap"),
  columnGap: x.space("columnGap")
};
Object.assign(Oi, {
  flexDir: Oi.flexDirection
});
var df = {
  gridGap: x.space("gridGap"),
  gridColumnGap: x.space("gridColumnGap"),
  gridRowGap: x.space("gridRowGap"),
  gridColumn: !0,
  gridRow: !0,
  gridAutoFlow: !0,
  gridAutoColumns: !0,
  gridColumnStart: !0,
  gridColumnEnd: !0,
  gridRowStart: !0,
  gridRowEnd: !0,
  gridAutoRows: !0,
  gridTemplate: !0,
  gridTemplateColumns: !0,
  gridTemplateRows: !0,
  gridTemplateAreas: !0,
  gridArea: !0
}, rv = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: J.outline },
  outlineOffset: !0,
  outlineColor: x.colors("outlineColor")
}, bt = {
  width: x.sizesT("width"),
  inlineSize: x.sizesT("inlineSize"),
  height: x.sizes("height"),
  blockSize: x.sizes("blockSize"),
  boxSize: x.sizes(["width", "height"]),
  minWidth: x.sizes("minWidth"),
  minInlineSize: x.sizes("minInlineSize"),
  minHeight: x.sizes("minHeight"),
  minBlockSize: x.sizes("minBlockSize"),
  maxWidth: x.sizes("maxWidth"),
  maxInlineSize: x.sizes("maxInlineSize"),
  maxHeight: x.sizes("maxHeight"),
  maxBlockSize: x.sizes("maxBlockSize"),
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  overscrollBehavior: !0,
  overscrollBehaviorX: !0,
  overscrollBehaviorY: !0,
  display: !0,
  aspectRatio: !0,
  hideFrom: {
    scale: "breakpoints",
    transform: (e, t) => {
      var r, n, o;
      return { [`@media screen and (min-width: ${(o = (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null ? void 0 : n.minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, t) => {
      var r, n, o;
      return { [`@media screen and (max-width: ${(o = (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null ? void 0 : n._minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: x.propT("float", J.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(bt, {
  w: bt.width,
  h: bt.height,
  minW: bt.minWidth,
  maxW: bt.maxWidth,
  minH: bt.minHeight,
  maxH: bt.maxHeight,
  overscroll: bt.overscrollBehavior,
  overscrollX: bt.overscrollBehaviorX,
  overscrollY: bt.overscrollBehaviorY
});
var nv = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: x.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: x.prop("listStyleImage")
};
function ov(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var iv = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, i, a) => {
    if (typeof n > "u")
      return e(n, o, i);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const s = t.get(n);
    if (s.has(o))
      return s.get(o);
    const l = e(n, o, i, a);
    return s.set(o, l), l;
  };
}, av = iv(ov), sv = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, lv = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Da = (e, t, r) => {
  const n = {}, o = av(e, t, {});
  for (const i in o)
    i in r && r[i] != null || (n[i] = o[i]);
  return n;
}, cv = {
  srOnly: {
    transform(e) {
      return e === !0 ? sv : e === "focusable" ? lv : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => Da(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => Da(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => Da(t, e, r)
  }
}, Xn = {
  position: !0,
  pos: x.prop("position"),
  zIndex: x.prop("zIndex", "zIndices"),
  inset: x.spaceT("inset"),
  insetX: x.spaceT(["left", "right"]),
  insetInline: x.spaceT("insetInline"),
  insetY: x.spaceT(["top", "bottom"]),
  insetBlock: x.spaceT("insetBlock"),
  top: x.spaceT("top"),
  insetBlockStart: x.spaceT("insetBlockStart"),
  bottom: x.spaceT("bottom"),
  insetBlockEnd: x.spaceT("insetBlockEnd"),
  left: x.spaceT("left"),
  insetInlineStart: x.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: x.spaceT("right"),
  insetInlineEnd: x.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(Xn, {
  insetStart: Xn.insetInlineStart,
  insetEnd: Xn.insetInlineEnd
});
var uv = {
  ring: { transform: J.ring },
  ringColor: x.colors("--chakra-ring-color"),
  ringOffset: x.prop("--chakra-ring-offset-width"),
  ringOffsetColor: x.colors("--chakra-ring-offset-color"),
  ringInset: x.prop("--chakra-ring-inset")
}, ve = {
  margin: x.spaceT("margin"),
  marginTop: x.spaceT("marginTop"),
  marginBlockStart: x.spaceT("marginBlockStart"),
  marginRight: x.spaceT("marginRight"),
  marginInlineEnd: x.spaceT("marginInlineEnd"),
  marginBottom: x.spaceT("marginBottom"),
  marginBlockEnd: x.spaceT("marginBlockEnd"),
  marginLeft: x.spaceT("marginLeft"),
  marginInlineStart: x.spaceT("marginInlineStart"),
  marginX: x.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: x.spaceT("marginInline"),
  marginY: x.spaceT(["marginTop", "marginBottom"]),
  marginBlock: x.spaceT("marginBlock"),
  padding: x.space("padding"),
  paddingTop: x.space("paddingTop"),
  paddingBlockStart: x.space("paddingBlockStart"),
  paddingRight: x.space("paddingRight"),
  paddingBottom: x.space("paddingBottom"),
  paddingBlockEnd: x.space("paddingBlockEnd"),
  paddingLeft: x.space("paddingLeft"),
  paddingInlineStart: x.space("paddingInlineStart"),
  paddingInlineEnd: x.space("paddingInlineEnd"),
  paddingX: x.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: x.space("paddingInline"),
  paddingY: x.space(["paddingTop", "paddingBottom"]),
  paddingBlock: x.space("paddingBlock")
};
Object.assign(ve, {
  m: ve.margin,
  mt: ve.marginTop,
  mr: ve.marginRight,
  me: ve.marginInlineEnd,
  marginEnd: ve.marginInlineEnd,
  mb: ve.marginBottom,
  ml: ve.marginLeft,
  ms: ve.marginInlineStart,
  marginStart: ve.marginInlineStart,
  mx: ve.marginX,
  my: ve.marginY,
  p: ve.padding,
  pt: ve.paddingTop,
  py: ve.paddingY,
  px: ve.paddingX,
  pb: ve.paddingBottom,
  pl: ve.paddingLeft,
  ps: ve.paddingInlineStart,
  paddingStart: ve.paddingInlineStart,
  pr: ve.paddingRight,
  pe: ve.paddingInlineEnd,
  paddingEnd: ve.paddingInlineEnd
});
var dv = {
  textDecorationColor: x.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: x.shadows("textShadow")
}, fv = {
  clipPath: !0,
  transform: x.propT("transform", J.transform),
  transformOrigin: !0,
  translateX: x.spaceT("--chakra-translate-x"),
  translateY: x.spaceT("--chakra-translate-y"),
  skewX: x.degreeT("--chakra-skew-x"),
  skewY: x.degreeT("--chakra-skew-y"),
  scaleX: x.prop("--chakra-scale-x"),
  scaleY: x.prop("--chakra-scale-y"),
  scale: x.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: x.degreeT("--chakra-rotate")
}, pv = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: x.prop("transitionDuration", "transition.duration"),
  transitionProperty: x.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: x.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, hv = {
  fontFamily: x.prop("fontFamily", "fonts"),
  fontSize: x.prop("fontSize", "fontSizes", J.px),
  fontWeight: x.prop("fontWeight", "fontWeights"),
  lineHeight: x.prop("lineHeight", "lineHeights"),
  letterSpacing: x.prop("letterSpacing", "letterSpacings"),
  textAlign: !0,
  fontStyle: !0,
  textIndent: !0,
  wordBreak: !0,
  overflowWrap: !0,
  textOverflow: !0,
  textTransform: !0,
  whiteSpace: !0,
  isTruncated: {
    transform(e) {
      if (e === !0)
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
    }
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      //@ts-ignore
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
}, mv = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: x.spaceT("scrollMargin"),
  scrollMarginTop: x.spaceT("scrollMarginTop"),
  scrollMarginBottom: x.spaceT("scrollMarginBottom"),
  scrollMarginLeft: x.spaceT("scrollMarginLeft"),
  scrollMarginRight: x.spaceT("scrollMarginRight"),
  scrollMarginX: x.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: x.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: x.spaceT("scrollPadding"),
  scrollPaddingTop: x.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: x.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: x.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: x.spaceT("scrollPaddingRight"),
  scrollPaddingX: x.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: x.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function ff(e) {
  return Et(e) && e.reference ? e.reference : String(e);
}
var na = (e, ...t) => t.map(ff).join(` ${e} `).replace(/calc/g, ""), kc = (...e) => `calc(${na("+", ...e)})`, Tc = (...e) => `calc(${na("-", ...e)})`, ws = (...e) => `calc(${na("*", ...e)})`, Pc = (...e) => `calc(${na("/", ...e)})`, Ec = (e) => {
  const t = ff(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : ws(t, -1);
}, Mr = Object.assign(
  (e) => ({
    add: (...t) => Mr(kc(e, ...t)),
    subtract: (...t) => Mr(Tc(e, ...t)),
    multiply: (...t) => Mr(ws(e, ...t)),
    divide: (...t) => Mr(Pc(e, ...t)),
    negate: () => Mr(Ec(e)),
    toString: () => e.toString()
  }),
  {
    add: kc,
    subtract: Tc,
    multiply: ws,
    divide: Pc,
    negate: Ec
  }
);
function gv(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function vv(e) {
  const t = gv(e.toString());
  return yv(bv(t));
}
function bv(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function yv(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function xv(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function Sv(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function wv(e, t = "") {
  return vv(`--${xv(e, t)}`);
}
function V(e, t, r) {
  const n = wv(e, r);
  return {
    variable: n,
    reference: Sv(n, t)
  };
}
function Cv(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [o, i] = n;
      r[o] = V(`${e}-${o}`, i);
      continue;
    }
    r[n] = V(`${e}-${n}`);
  }
  return r;
}
function _v(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function kv(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Cs(e) {
  if (e == null)
    return e;
  const { unitless: t } = kv(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var pf = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, ol = (e) => Object.fromEntries(Object.entries(e).sort(pf));
function $c(e) {
  const t = ol(e);
  return Object.assign(Object.values(t), t);
}
function Tv(e) {
  const t = Object.keys(ol(e));
  return new Set(t);
}
function Ac(e) {
  var t;
  if (!e)
    return e;
  e = (t = Cs(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number" ? `${e + r}` : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function Hn(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${Cs(e)})`), t && r.push("and", `(max-width: ${Cs(t)})`), r.join(" ");
}
function Pv(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = $c(e), n = Object.entries(e).sort(pf).map(([a, s], l, c) => {
    var u;
    let [, d] = (u = c[l + 1]) != null ? u : [];
    return d = parseFloat(d) > 0 ? Ac(d) : void 0, {
      _minW: Ac(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: Hn(null, d),
      minWQuery: Hn(s),
      minMaxQuery: Hn(s, d)
    };
  }), o = Tv(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: ol(e),
    asArray: $c(e),
    details: n,
    get(a) {
      return n.find((s) => s.breakpoint === a);
    },
    media: [
      null,
      ...r.map((a) => Hn(a)).slice(1)
    ],
    /**
     * Converts the object responsive syntax to array syntax
     *
     * @example
     * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
     */
    toArrayValue(a) {
      if (!Et(a))
        throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var c;
        return (c = a[l]) != null ? c : null;
      });
      for (; _v(s) === null; )
        s.pop();
      return s;
    },
    /**
     * Converts the array responsive syntax to object syntax
     *
     * @example
     * toObjectValue([1, 2, 3]) // => { base: 1, sm: 2, md: 3 }
     */
    toObjectValue(a) {
      if (!Array.isArray(a))
        throw new Error("toObjectValue: value must be an array");
      return a.reduce((s, l, c) => {
        const u = i[c];
        return u != null && l != null && (s[u] = l), s;
      }, {});
    }
  };
}
var Ye = {
  hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
  focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
  focusVisible: (e, t) => `${e}:focus-visible ${t}`,
  focusWithin: (e, t) => `${e}:focus-within ${t}`,
  active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
  disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
  invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
  checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
  indeterminate: (e, t) => `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
  readOnly: (e, t) => `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
  expanded: (e, t) => `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
  placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`
}, pr = (e) => hf((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), Jt = (e) => hf((t) => e(t, "~ &"), "[data-peer]", ".peer"), hf = (e, ...t) => t.map(e).join(", "), oa = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: "&:hover, &[data-hover]",
  /**
   * Styles for CSS Selector `&:active`
   */
  _active: "&:active, &[data-active]",
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus: "&:focus, &[data-focus]",
  /**
   * Styles for the highlighted state.
   */
  _highlighted: "&[data-highlighted]",
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin: "&:focus-within",
  /**
   * Styles to apply when this element has received focus via tabbing
   * - CSS Selector `&:focus-visible`
   */
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   * - `&[disabled]`
   */
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _before={{content:`""` }}/>
   * ```
   */
  _before: "&::before",
  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _after={{content:`""` }}/>
   * ```
   */
  _after: "&::after",
  /**
   * Styles for CSS selector `&:empty`
   */
  _empty: "&:empty",
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked: "&[aria-checked=true], &[data-checked]",
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  _valid: "&[data-valid], &[data-state=valid]",
  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  _loading: "&[data-loading], &[aria-busy=true]",
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  _selected: "&[aria-selected=true], &[data-selected]",
  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  _hidden: "&[hidden], &[data-hidden]",
  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  _autofill: "&:-webkit-autofill",
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even: "&:nth-of-type(even)",
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd: "&:nth-of-type(odd)",
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first: "&:first-of-type",
  /**
   * Styles for CSS selector `&::first-letter`
   *
   * NOTE: This selector is only applied for block-level elements and not preceded by an image or table.
   * @example
   * ```jsx
   * <Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>
   * ```
   */
  _firstLetter: "&::first-letter",
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last: "&:last-of-type",
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst: "&:not(:first-of-type)",
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast: "&:not(:last-of-type)",
  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited: "&:visited",
  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  _activeLink: "&[aria-current=page]",
  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  _activeStep: "&[aria-current=step]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
   */
  _groupHover: pr(Ye.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: Jt(Ye.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: pr(Ye.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: Jt(Ye.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: pr(Ye.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: Jt(Ye.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: pr(Ye.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: Jt(Ye.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: pr(Ye.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: Jt(Ye.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: pr(Ye.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: Jt(Ye.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: pr(Ye.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: Jt(Ye.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: pr(Ye.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: Jt(Ye.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: Jt(Ye.placeholderShown),
  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  _placeholder: "&::placeholder",
  /**
   * Styles for CSS Selector `&:placeholder-shown`.
   */
  _placeholderShown: "&:placeholder-shown",
  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  _fullScreen: "&:fullscreen",
  /**
   * Styles for CSS Selector `&::selection`
   */
  _selection: "&::selection",
  /**
   * Styles for CSS Selector `[dir=rtl] &`
   * It is applied when a parent element or this element has `dir="rtl"`
   */
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  /**
   * Styles for CSS Selector `[dir=ltr] &`
   * It is applied when a parent element or this element has `dir="ltr"`
   */
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * It is used when the user has requested the system use a light or dark color theme.
   */
  _mediaDark: "@media (prefers-color-scheme: dark)",
  /**
   * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
   * It is used when the user has requested the system to reduce the amount of animations.
   */
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  /**
   * Styles for the CSS Selector `&[data-orientation=horizontal]`
   */
  _horizontal: "&[data-orientation=horizontal]",
  /**
   * Styles for the CSS Selector `&[data-orientation=vertical]`
   */
  _vertical: "&[data-orientation=vertical]"
}, mf = Object.keys(
  oa
);
function Rc(e, t) {
  return V(String(e).replace(/\./g, "-"), void 0, t);
}
function Ev(e, t) {
  let r = {};
  const n = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: c } = Rc(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...g] = f, v = `${p}.-${g.join(".")}`, S = Mr.negate(s), _ = Mr.negate(c);
        n[v] = {
          value: S,
          var: l,
          varRef: _
        };
      }
      r[l] = s, n[o] = {
        value: s,
        var: l,
        varRef: c
      };
      continue;
    }
    const u = (f) => {
      const g = [String(o).split(".")[0], f].join(".");
      if (!e[g])
        return f;
      const { reference: S } = Rc(g, t == null ? void 0 : t.cssVarPrefix);
      return S;
    }, d = Et(s) ? s : { default: s };
    r = It(
      r,
      Object.entries(d).reduce(
        (f, [p, g]) => {
          var v, S;
          if (!g)
            return f;
          const _ = u(`${g}`);
          if (p === "default")
            return f[l] = _, f;
          const b = (S = (v = oa) == null ? void 0 : v[p]) != null ? S : p;
          return f[b] = { [l]: _ }, f;
        },
        {}
      )
    ), n[o] = {
      value: c,
      var: l,
      varRef: c
    };
  }
  return {
    cssVars: r,
    cssMap: n
  };
}
function $v(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function Av(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function Rv(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function Oc(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function i(a, s = []) {
    var l;
    if (Rv(a) || Array.isArray(a)) {
      const c = {};
      for (const [u, d] of Object.entries(a)) {
        const f = (l = o == null ? void 0 : o(u)) != null ? l : u, p = [...s, f];
        if (n != null && n(a, p))
          return t(a, s);
        c[f] = i(d, p);
      }
      return c;
    }
    return t(a, s);
  }
  return i(e);
}
var Ov = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints"
];
function jv(e) {
  return Av(e, Ov);
}
function Mv(e) {
  return e.semanticTokens;
}
function Dv(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var zv = (e) => mf.includes(e) || e === "default";
function Bv({
  tokens: e,
  semanticTokens: t
}) {
  const r = {};
  return Oc(e, (n, o) => {
    n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
  }), Oc(
    t,
    (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
    },
    {
      stop: (n) => Object.keys(n).every(zv)
    }
  ), r;
}
function Vv(e) {
  var t;
  const r = Dv(e), n = jv(r), o = Mv(r), i = Bv({ tokens: n, semanticTokens: o }), a = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
    /**
     * This is more like a dictionary of tokens users will type `green.500`,
     * and their equivalent css variable.
     */
    cssMap: s,
    /**
     * The extracted css variables will be stored here, and used in
     * the emotion's <Global/> component to attach variables to `:root`
     */
    cssVars: l
  } = Ev(i, { cssVarPrefix: a });
  return Object.assign(r, {
    __cssVars: { ...{
      "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-ring-offset-width": "0px",
      "--chakra-ring-offset-color": "#fff",
      "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
      "--chakra-ring-offset-shadow": "0 0 #0000",
      "--chakra-ring-shadow": "0 0 #0000",
      "--chakra-space-x-reverse": "0",
      "--chakra-space-y-reverse": "0"
    }, ...l },
    __cssMap: s,
    __breakpoints: Pv(r.breakpoints)
  }), r;
}
var il = It(
  {},
  fi,
  ne,
  ev,
  Oi,
  bt,
  tv,
  uv,
  rv,
  df,
  cv,
  Xn,
  Ss,
  ve,
  mv,
  hv,
  dv,
  fv,
  nv,
  pv
);
Object.assign({}, ve, bt, Oi, df, Xn);
var Iv = [...Object.keys(il), ...mf], Fv = { ...il, ...oa }, Lv = (e) => e in Fv, Nv = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, i = {};
  for (const a in e) {
    let s = yr(e[a], t);
    if (s == null)
      continue;
    if (s = Et(s) && r(s) ? n(s) : s, !Array.isArray(s)) {
      i[a] = s;
      continue;
    }
    const l = s.slice(0, o.length).length;
    for (let c = 0; c < l; c += 1) {
      const u = o == null ? void 0 : o[c];
      if (!u) {
        i[a] = s[c];
        continue;
      }
      i[u] = i[u] || {}, s[c] != null && (i[u][a] = s[c]);
    }
  }
  return i;
};
function Wv(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (n = !0, r += i) : i === ")" ? (n = !1, r += i) : i === "," && !n ? (t.push(r), r = "") : r += i;
  }
  return r = r.trim(), r && t.push(r), t;
}
function Hv(e) {
  return /^var\(--.+\)$/.test(e);
}
var Uv = (e, t) => e.startsWith("--") && typeof t == "string" && !Hv(t), Yv = (e, t) => {
  var r, n;
  if (t == null)
    return t;
  const o = (l) => {
    var c, u;
    return (u = (c = e.__cssMap) == null ? void 0 : c[l]) == null ? void 0 : u.varRef;
  }, i = (l) => {
    var c;
    return (c = o(l)) != null ? c : l;
  }, [a, s] = Wv(t);
  return t = (n = (r = o(a)) != null ? r : i(s)) != null ? n : i(t), t;
};
function qv(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (i, a = !1) => {
    var s, l, c;
    const u = yr(i, n), d = Nv(u)(n);
    let f = {};
    for (let p in d) {
      const g = d[p];
      let v = yr(g, n);
      p in r && (p = r[p]), Uv(p, v) && (v = Yv(n, v));
      let S = t[p];
      if (S === !0 && (S = { property: p }), Et(v)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = It(
          {},
          f[p],
          o(v, !0)
        );
        continue;
      }
      let _ = (c = (l = S == null ? void 0 : S.transform) == null ? void 0 : l.call(S, v, n, u)) != null ? c : v;
      _ = S != null && S.processResult ? o(_, !0) : _;
      const b = yr(S == null ? void 0 : S.property, n);
      if (!a && (S != null && S.static)) {
        const C = yr(S.static, n);
        f = It({}, f, C);
      }
      if (b && Array.isArray(b)) {
        for (const C of b)
          f[C] = _;
        continue;
      }
      if (b) {
        b === "&" && Et(_) ? f = It({}, f, _) : f[b] = _;
        continue;
      }
      if (Et(_)) {
        f = It({}, f, _);
        continue;
      }
      f[p] = _;
    }
    return f;
  };
  return o;
}
var gf = (e) => (t) => qv({
  theme: t,
  pseudos: oa,
  configs: il
})(e);
function ge(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function Gv(e, t) {
  if (Array.isArray(e))
    return e;
  if (Et(e))
    return t(e);
  if (e != null)
    return [e];
}
function Kv(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function Xv(e) {
  const t = e.__breakpoints;
  return function(n, o, i, a) {
    var s, l;
    if (!t)
      return;
    const c = {}, u = Gv(i, t.toArrayValue);
    if (!u)
      return c;
    const d = u.length, f = d === 1, p = !!n.parts;
    for (let g = 0; g < d; g++) {
      const v = t.details[g], S = t.details[Kv(u, g)], _ = Hn(v.minW, S == null ? void 0 : S._minW), b = yr((s = n[o]) == null ? void 0 : s[u[g]], a);
      if (b) {
        if (p) {
          (l = n.parts) == null || l.forEach((C) => {
            It(c, {
              [C]: f ? b[C] : { [_]: b[C] }
            });
          });
          continue;
        }
        if (!p) {
          f ? It(c, b) : c[_] = b;
          continue;
        }
        c[_] = b;
      }
    }
    return c;
  };
}
function Zv(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: i } = t, a = Xv(i);
    return It(
      {},
      yr((r = e.baseStyle) != null ? r : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", n, t)
    );
  };
}
function Jv(e, t, r) {
  var n, o, i;
  return (i = (o = (n = e.__cssMap) == null ? void 0 : n[`${t}.${r}`]) == null ? void 0 : o.varRef) != null ? i : r;
}
function Tn(e) {
  return $v(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var Qv = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, e0 = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, t0 = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, r0 = {
  property: Qv,
  easing: e0,
  duration: t0
}, n0 = r0, o0 = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
}, i0 = o0, a0 = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, s0 = a0, l0 = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, c0 = l0, u0 = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
}, d0 = u0, f0 = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, p0 = f0, h0 = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
}, m0 = h0, g0 = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, v0 = g0, b0 = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
}, vf = b0, bf = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
}, y0 = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
}, x0 = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, S0 = {
  ...bf,
  ...y0,
  container: x0
}, yf = S0, w0 = {
  breakpoints: c0,
  zIndices: i0,
  radii: p0,
  blur: v0,
  colors: d0,
  ...vf,
  sizes: yf,
  shadows: m0,
  space: bf,
  borders: s0,
  transition: n0
}, { defineMultiStyleConfig: C0, definePartsStyle: Un } = ge([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Qt = V("stepper-indicator-size"), Zr = V("stepper-icon-size"), Jr = V("stepper-title-font-size"), Yn = V("stepper-description-font-size"), Vn = V("stepper-accent-color"), _0 = Un(({ colorScheme: e }) => ({
  stepper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "4",
    "&[data-orientation=vertical]": {
      flexDirection: "column",
      alignItems: "flex-start"
    },
    "&[data-orientation=horizontal]": {
      flexDirection: "row",
      alignItems: "center"
    },
    [Vn.variable]: `colors.${e}.500`,
    _dark: {
      [Vn.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: Jr.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: Yn.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: Jr.reference
  },
  step: {
    flexShrink: 0,
    position: "relative",
    display: "flex",
    gap: "2",
    "&[data-orientation=horizontal]": {
      alignItems: "center"
    },
    flex: "1",
    "&:last-of-type:not([data-stretch])": {
      flex: "initial"
    }
  },
  icon: {
    flexShrink: 0,
    width: Zr.reference,
    height: Zr.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: Qt.reference,
    height: Qt.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: Vn.reference
    },
    "&[data-status=complete]": {
      bg: Vn.reference,
      color: "chakra-inverse-text"
    },
    "&[data-status=incomplete]": {
      borderWidth: "2px"
    }
  },
  separator: {
    bg: "chakra-border-color",
    flex: "1",
    "&[data-status=complete]": {
      bg: Vn.reference
    },
    "&[data-orientation=horizontal]": {
      width: "100%",
      height: "2px",
      marginStart: "2"
    },
    "&[data-orientation=vertical]": {
      width: "2px",
      position: "absolute",
      height: "100%",
      maxHeight: `calc(100% - ${Qt.reference} - 8px)`,
      top: `calc(${Qt.reference} + 4px)`,
      insetStart: `calc(${Qt.reference} / 2 - 1px)`
    }
  }
})), k0 = C0({
  baseStyle: _0,
  sizes: {
    xs: Un({
      stepper: {
        [Qt.variable]: "sizes.4",
        [Zr.variable]: "sizes.3",
        [Jr.variable]: "fontSizes.xs",
        [Yn.variable]: "fontSizes.xs"
      }
    }),
    sm: Un({
      stepper: {
        [Qt.variable]: "sizes.6",
        [Zr.variable]: "sizes.4",
        [Jr.variable]: "fontSizes.sm",
        [Yn.variable]: "fontSizes.xs"
      }
    }),
    md: Un({
      stepper: {
        [Qt.variable]: "sizes.8",
        [Zr.variable]: "sizes.5",
        [Jr.variable]: "fontSizes.md",
        [Yn.variable]: "fontSizes.sm"
      }
    }),
    lg: Un({
      stepper: {
        [Qt.variable]: "sizes.10",
        [Zr.variable]: "sizes.6",
        [Jr.variable]: "fontSizes.lg",
        [Yn.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function se(e, t = {}) {
  let r = !1;
  function n() {
    if (!r) {
      r = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function o(...u) {
    n();
    for (const d of u)
      t[d] = l(d);
    return se(e, t);
  }
  function i(...u) {
    for (const d of u)
      d in t || (t[d] = l(d));
    return se(e, t);
  }
  function a() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.selector])
    );
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.className])
    );
  }
  function l(u) {
    const p = `chakra-${(["container", "root"].includes(u ?? "") ? [e] : [e, u]).filter(Boolean).join("__")}`;
    return {
      className: p,
      selector: `.${p}`,
      toString: () => u
    };
  }
  return {
    parts: o,
    toPart: l,
    extend: i,
    selectors: a,
    classnames: s,
    get keys() {
      return Object.keys(t);
    },
    __type: {}
  };
}
var T0 = se("accordion").parts("root", "container", "button", "panel").extend("icon"), P0 = se("alert").parts("title", "description", "container").extend("icon", "spinner"), E0 = se("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), $0 = se("breadcrumb").parts("link", "item", "container").extend("separator");
se("button").parts();
var A0 = se("checkbox").parts("control", "icon", "container").extend("label");
se("progress").parts("track", "filledTrack").extend("label");
var R0 = se("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), O0 = se("editable").parts(
  "preview",
  "input",
  "textarea"
), j0 = se("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), M0 = se("formError").parts("text", "icon"), D0 = se("input").parts(
  "addon",
  "field",
  "element",
  "group"
), z0 = se("list").parts("container", "item", "icon"), B0 = se("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), V0 = se("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), I0 = se("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
se("pininput").parts("field");
var F0 = se("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), L0 = se("progress").parts(
  "label",
  "filledTrack",
  "track"
), N0 = se("radio").parts(
  "container",
  "control",
  "label"
), W0 = se("select").parts("field", "icon"), H0 = se("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), U0 = se("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), Y0 = se("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), q0 = se("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), G0 = se("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), K0 = se("tag").parts(
  "container",
  "label",
  "closeButton"
), X0 = se("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
se("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
function zr(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class Z0 extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var qn = Z0;
function al(e) {
  if (typeof e != "string")
    throw new qn(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = ib.test(e) ? eb(e) : e;
  const r = tb.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(po(s, 2), 16)), parseInt(po(a[3] || "f", 2), 16) / 255];
  }
  const n = rb.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = nb.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = ob.exec(t);
  if (i) {
    const [a, s, l, c] = Array.from(i).slice(1).map(parseFloat);
    if (zr(0, 100, s) !== s)
      throw new qn(e);
    if (zr(0, 100, l) !== l)
      throw new qn(e);
    return [...ab(a, s, l), Number.isNaN(c) ? 1 : c];
  }
  throw new qn(e);
}
function J0(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const jc = (e) => parseInt(e.replace(/_/g, ""), 36), Q0 = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = jc(t.substring(0, 3)), n = jc(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - n.length; i++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function eb(e) {
  const t = e.toLowerCase().trim(), r = Q0[J0(t)];
  if (!r)
    throw new qn(e);
  return `#${r}`;
}
const po = (e, t) => Array.from(Array(t)).map(() => e).join(""), tb = new RegExp(`^#${po("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), rb = new RegExp(`^#${po("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), nb = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${po(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), ob = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, ib = /^[a-z]+$/i, Mc = (e) => Math.round(e * 255), ab = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(Mc);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, c = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, c = a) : o >= 3 && o < 4 ? (l = a, c = i) : o >= 4 && o < 5 ? (s = a, c = i) : o >= 5 && o < 6 && (s = i, c = a);
  const u = n - i / 2, d = s + u, f = l + u, p = c + u;
  return [d, f, p].map(Mc);
};
function sb(e, t, r, n) {
  return `rgba(${zr(0, 255, e).toFixed()}, ${zr(0, 255, t).toFixed()}, ${zr(0, 255, r).toFixed()}, ${parseFloat(zr(0, 1, n).toFixed(3))})`;
}
function lb(e, t) {
  const [r, n, o, i] = al(e);
  return sb(r, n, o, i - t);
}
function cb(e) {
  const [t, r, n, o] = al(e);
  let i = (a) => {
    const s = zr(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function ub(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var db = (e) => Object.keys(e).length === 0, Ze = (e, t, r) => {
  const n = ub(e, `colors.${t}`, t);
  try {
    return cb(n), n;
  } catch {
    return r ?? "#000000";
  }
}, fb = (e) => {
  const [t, r, n] = al(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, pb = (e) => (t) => {
  const r = Ze(t, e);
  return fb(r) < 128 ? "dark" : "light";
}, hb = (e) => (t) => pb(e)(t) === "dark", gn = (e, t) => (r) => {
  const n = Ze(r, e);
  return lb(n, 1 - t);
};
function Dc(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`
  };
}
var mb = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function gb(e) {
  const t = mb();
  return !e || db(e) ? t : e.string && e.colors ? bb(e.string, e.colors) : e.string && !e.colors ? vb(e.string) : e.colors && !e.string ? yb(e.colors) : t;
}
function vb(e) {
  let t = 0;
  if (e.length === 0)
    return t.toString();
  for (let n = 0; n < e.length; n += 1)
    t = e.charCodeAt(n) + ((t << 5) - t), t = t & t;
  let r = "#";
  for (let n = 0; n < 3; n += 1) {
    const o = t >> n * 8 & 255;
    r += `00${o.toString(16)}`.substr(-2);
  }
  return r;
}
function bb(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function yb(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function B(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function sl(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function xf(e) {
  return Et(e) && e.reference ? e.reference : String(e);
}
var ia = (e, ...t) => t.map(xf).join(` ${e} `).replace(/calc/g, ""), zc = (...e) => `calc(${ia("+", ...e)})`, Bc = (...e) => `calc(${ia("-", ...e)})`, _s = (...e) => `calc(${ia("*", ...e)})`, Vc = (...e) => `calc(${ia("/", ...e)})`, Ic = (e) => {
  const t = xf(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : _s(t, -1);
}, er = Object.assign(
  (e) => ({
    add: (...t) => er(zc(e, ...t)),
    subtract: (...t) => er(Bc(e, ...t)),
    multiply: (...t) => er(_s(e, ...t)),
    divide: (...t) => er(Vc(e, ...t)),
    negate: () => er(Ic(e)),
    toString: () => e.toString()
  }),
  {
    add: zc,
    subtract: Bc,
    multiply: _s,
    divide: Vc,
    negate: Ic
  }
);
function xb(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function Sb(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function Sf(e) {
  const t = Sb(e.toString());
  return t.includes("\\.") ? e : xb(e) ? t.replace(".", "\\.") : e;
}
function wb(e, t = "") {
  return [t, Sf(e)].filter(Boolean).join("-");
}
function Cb(e, t) {
  return `var(${Sf(e)}${t ? `, ${t}` : ""})`;
}
function _b(e, t = "") {
  return `--${wb(e, t)}`;
}
function Fe(e, t) {
  const r = _b(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: Cb(r, kb(t == null ? void 0 : t.fallback))
  };
}
function kb(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: Tb, definePartsStyle: pi } = ge(Y0.keys), Zn = Fe("switch-track-width"), Vr = Fe("switch-track-height"), za = Fe("switch-track-diff"), Pb = er.subtract(Zn, Vr), ks = Fe("switch-thumb-x"), In = Fe("switch-bg"), Eb = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [Zn.reference],
    height: [Vr.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [In.variable]: "colors.gray.300",
    _dark: {
      [In.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [In.variable]: `colors.${t}.500`,
      _dark: {
        [In.variable]: `colors.${t}.200`
      }
    },
    bg: In.reference
  };
}, $b = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [Vr.reference],
  height: [Vr.reference],
  _checked: {
    transform: `translateX(${ks.reference})`
  }
}, Ab = pi((e) => ({
  container: {
    [za.variable]: Pb,
    [ks.variable]: za.reference,
    _rtl: {
      [ks.variable]: er(za).negate().toString()
    }
  },
  track: Eb(e),
  thumb: $b
})), Rb = {
  sm: pi({
    container: {
      [Zn.variable]: "1.375rem",
      [Vr.variable]: "sizes.3"
    }
  }),
  md: pi({
    container: {
      [Zn.variable]: "1.875rem",
      [Vr.variable]: "sizes.4"
    }
  }),
  lg: pi({
    container: {
      [Zn.variable]: "2.875rem",
      [Vr.variable]: "sizes.6"
    }
  })
}, Ob = Tb({
  baseStyle: Ab,
  sizes: Rb,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: jb, definePartsStyle: cn } = ge(q0.keys), Mb = cn({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
}), ji = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, Db = cn((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: B("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: B(`${t}.100`, `${t}.700`)(e),
      ...ji
    },
    td: {
      borderBottom: "1px",
      borderColor: B(`${t}.100`, `${t}.700`)(e),
      ...ji
    },
    caption: {
      color: B("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), zb = cn((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: B("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: B(`${t}.100`, `${t}.700`)(e),
      ...ji
    },
    td: {
      borderBottom: "1px",
      borderColor: B(`${t}.100`, `${t}.700`)(e),
      ...ji
    },
    caption: {
      color: B("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: B(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: B(`${t}.100`, `${t}.700`)(e)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), Bb = {
  simple: Db,
  striped: zb,
  unstyled: {}
}, Vb = {
  sm: cn({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: cn({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: cn({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
}, Ib = jb({
  baseStyle: Mb,
  variants: Bb,
  sizes: Vb,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), nt = V("tabs-color"), Pt = V("tabs-bg"), Zo = V("tabs-border-color"), { defineMultiStyleConfig: Fb, definePartsStyle: Lt } = ge(G0.keys), Lb = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, Nb = (e) => {
  const { isFitted: t } = e;
  return {
    flex: t ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
}, Wb = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, Hb = {
  p: 4
}, Ub = Lt((e) => ({
  root: Lb(e),
  tab: Nb(e),
  tablist: Wb(e),
  tabpanel: Hb
})), Yb = {
  sm: Lt({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Lt({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Lt({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, qb = Lt((e) => {
  const { colorScheme: t, orientation: r } = e, n = r === "vertical", o = n ? "borderStart" : "borderBottom", i = n ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [o]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [o]: "2px solid",
      borderColor: "transparent",
      [i]: "-2px",
      _selected: {
        [nt.variable]: `colors.${t}.600`,
        _dark: {
          [nt.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [Pt.variable]: "colors.gray.200",
        _dark: {
          [Pt.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: nt.reference,
      bg: Pt.reference
    }
  };
}), Gb = Lt((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [Zo.variable]: "transparent",
      _selected: {
        [nt.variable]: `colors.${t}.600`,
        [Zo.variable]: "colors.white",
        _dark: {
          [nt.variable]: `colors.${t}.300`,
          [Zo.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: Zo.reference
      },
      color: nt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), Kb = Lt((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [Pt.variable]: "colors.gray.50",
      _dark: {
        [Pt.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [Pt.variable]: "colors.white",
        [nt.variable]: `colors.${t}.600`,
        _dark: {
          [Pt.variable]: "colors.gray.800",
          [nt.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: nt.reference,
      bg: Pt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), Xb = Lt((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: Ze(r, `${t}.700`),
        bg: Ze(r, `${t}.100`)
      }
    }
  };
}), Zb = Lt((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [nt.variable]: "colors.gray.600",
      _dark: {
        [nt.variable]: "inherit"
      },
      _selected: {
        [nt.variable]: "colors.white",
        [Pt.variable]: `colors.${t}.600`,
        _dark: {
          [nt.variable]: "colors.gray.800",
          [Pt.variable]: `colors.${t}.300`
        }
      },
      color: nt.reference,
      bg: Pt.reference
    }
  };
}), Jb = Lt({}), Qb = {
  line: qb,
  enclosed: Gb,
  "enclosed-colored": Kb,
  "soft-rounded": Xb,
  "solid-rounded": Zb,
  unstyled: Jb
}, ey = Fb({
  baseStyle: Ub,
  sizes: Yb,
  variants: Qb,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), Oe = Cv("badge", ["bg", "color", "shadow"]), ty = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: Oe.bg.reference,
  color: Oe.color.reference,
  boxShadow: Oe.shadow.reference
}, ry = (e) => {
  const { colorScheme: t, theme: r } = e, n = gn(`${t}.500`, 0.6)(r);
  return {
    [Oe.bg.variable]: `colors.${t}.500`,
    [Oe.color.variable]: "colors.white",
    _dark: {
      [Oe.bg.variable]: n,
      [Oe.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, ny = (e) => {
  const { colorScheme: t, theme: r } = e, n = gn(`${t}.200`, 0.16)(r);
  return {
    [Oe.bg.variable]: `colors.${t}.100`,
    [Oe.color.variable]: `colors.${t}.800`,
    _dark: {
      [Oe.bg.variable]: n,
      [Oe.color.variable]: `colors.${t}.200`
    }
  };
}, oy = (e) => {
  const { colorScheme: t, theme: r } = e, n = gn(`${t}.200`, 0.8)(r);
  return {
    [Oe.color.variable]: `colors.${t}.500`,
    _dark: {
      [Oe.color.variable]: n
    },
    [Oe.shadow.variable]: `inset 0 0 0px 1px ${Oe.color.reference}`
  };
}, iy = {
  solid: ry,
  subtle: ny,
  outline: oy
}, Jn = {
  baseStyle: ty,
  variants: iy,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: ay, definePartsStyle: Ir } = ge(K0.keys), Fc = V("tag-bg"), Lc = V("tag-color"), Ba = V("tag-shadow"), hi = V("tag-min-height"), mi = V("tag-min-width"), gi = V("tag-font-size"), bi = V("tag-padding-inline"), sy = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [Lc.variable]: Oe.color.reference,
  [Fc.variable]: Oe.bg.reference,
  [Ba.variable]: Oe.shadow.reference,
  color: Lc.reference,
  bg: Fc.reference,
  boxShadow: Ba.reference,
  borderRadius: "md",
  minH: hi.reference,
  minW: mi.reference,
  fontSize: gi.reference,
  px: bi.reference,
  _focusVisible: {
    [Ba.variable]: "shadows.outline"
  }
}, ly = {
  lineHeight: 1.2,
  overflow: "visible"
}, cy = {
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
}, uy = Ir({
  container: sy,
  label: ly,
  closeButton: cy
}), dy = {
  sm: Ir({
    container: {
      [hi.variable]: "sizes.5",
      [mi.variable]: "sizes.5",
      [gi.variable]: "fontSizes.xs",
      [bi.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: Ir({
    container: {
      [hi.variable]: "sizes.6",
      [mi.variable]: "sizes.6",
      [gi.variable]: "fontSizes.sm",
      [bi.variable]: "space.2"
    }
  }),
  lg: Ir({
    container: {
      [hi.variable]: "sizes.8",
      [mi.variable]: "sizes.8",
      [gi.variable]: "fontSizes.md",
      [bi.variable]: "space.3"
    }
  })
}, fy = {
  subtle: Ir((e) => {
    var t;
    return {
      container: (t = Jn.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: Ir((e) => {
    var t;
    return {
      container: (t = Jn.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: Ir((e) => {
    var t;
    return {
      container: (t = Jn.variants) == null ? void 0 : t.outline(e)
    };
  })
}, py = ay({
  variants: fy,
  baseStyle: uy,
  sizes: dy,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: tr, defineMultiStyleConfig: hy } = ge(D0.keys), Qr = V("input-height"), en = V("input-font-size"), tn = V("input-padding"), rn = V("input-border-radius"), my = tr({
  addon: {
    height: Qr.reference,
    fontSize: en.reference,
    px: tn.reference,
    borderRadius: rn.reference
  },
  field: {
    width: "100%",
    height: Qr.reference,
    fontSize: en.reference,
    px: tn.reference,
    borderRadius: rn.reference,
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
}), hr = {
  lg: {
    [en.variable]: "fontSizes.lg",
    [tn.variable]: "space.4",
    [rn.variable]: "radii.md",
    [Qr.variable]: "sizes.12"
  },
  md: {
    [en.variable]: "fontSizes.md",
    [tn.variable]: "space.4",
    [rn.variable]: "radii.md",
    [Qr.variable]: "sizes.10"
  },
  sm: {
    [en.variable]: "fontSizes.sm",
    [tn.variable]: "space.3",
    [rn.variable]: "radii.sm",
    [Qr.variable]: "sizes.8"
  },
  xs: {
    [en.variable]: "fontSizes.xs",
    [tn.variable]: "space.2",
    [rn.variable]: "radii.sm",
    [Qr.variable]: "sizes.6"
  }
}, gy = {
  lg: tr({
    field: hr.lg,
    group: hr.lg
  }),
  md: tr({
    field: hr.md,
    group: hr.md
  }),
  sm: tr({
    field: hr.sm,
    group: hr.sm
  }),
  xs: tr({
    field: hr.xs,
    group: hr.xs
  })
};
function ll(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || B("blue.500", "blue.300")(e),
    errorBorderColor: r || B("red.500", "red.300")(e)
  };
}
var vy = tr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = ll(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: B("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Ze(t, n),
        boxShadow: `0 0 0 1px ${Ze(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: Ze(t, r),
        boxShadow: `0 0 0 1px ${Ze(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: B("inherit", "whiteAlpha.50")(e),
      bg: B("gray.100", "whiteAlpha.300")(e)
    }
  };
}), by = tr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = ll(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: B("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: B("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Ze(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: Ze(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: B("gray.100", "whiteAlpha.50")(e)
    }
  };
}), yy = tr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = ll(e);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Ze(t, n),
        boxShadow: `0px 1px 0px 0px ${Ze(t, n)}`
      },
      _focusVisible: {
        borderColor: Ze(t, r),
        boxShadow: `0px 1px 0px 0px ${Ze(t, r)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
}), xy = tr({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
}), Sy = {
  outline: vy,
  filled: by,
  flushed: yy,
  unstyled: xy
}, ae = hy({
  baseStyle: my,
  sizes: gy,
  variants: Sy,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), Nc, wy = {
  ...(Nc = ae.baseStyle) == null ? void 0 : Nc.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, Wc, Hc, Cy = {
  outline: (e) => {
    var t, r;
    return (r = (t = ae.variants) == null ? void 0 : t.outline(e).field) != null ? r : {};
  },
  flushed: (e) => {
    var t, r;
    return (r = (t = ae.variants) == null ? void 0 : t.flushed(e).field) != null ? r : {};
  },
  filled: (e) => {
    var t, r;
    return (r = (t = ae.variants) == null ? void 0 : t.filled(e).field) != null ? r : {};
  },
  unstyled: (Hc = (Wc = ae.variants) == null ? void 0 : Wc.unstyled.field) != null ? Hc : {}
}, Uc, Yc, qc, Gc, Kc, Xc, Zc, Jc, _y = {
  xs: (Yc = (Uc = ae.sizes) == null ? void 0 : Uc.xs.field) != null ? Yc : {},
  sm: (Gc = (qc = ae.sizes) == null ? void 0 : qc.sm.field) != null ? Gc : {},
  md: (Xc = (Kc = ae.sizes) == null ? void 0 : Kc.md.field) != null ? Xc : {},
  lg: (Jc = (Zc = ae.sizes) == null ? void 0 : Zc.lg.field) != null ? Jc : {}
}, ky = {
  baseStyle: wy,
  sizes: _y,
  variants: Cy,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, Jo = Fe("tooltip-bg"), Va = Fe("tooltip-fg"), Ty = Fe("popper-arrow-bg"), Py = {
  bg: Jo.reference,
  color: Va.reference,
  [Jo.variable]: "colors.gray.700",
  [Va.variable]: "colors.whiteAlpha.900",
  _dark: {
    [Jo.variable]: "colors.gray.300",
    [Va.variable]: "colors.gray.900"
  },
  [Ty.variable]: Jo.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, Ey = {
  baseStyle: Py
}, { defineMultiStyleConfig: $y, definePartsStyle: Gn } = ge(L0.keys), Ay = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, i = B(
    Dc(),
    Dc("1rem", "rgba(0,0,0,0.1)")
  )(e), a = B(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${Ze(r, a)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && i,
    ...n ? { bgImage: s } : { bgColor: a }
  };
}, Ry = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, Oy = (e) => ({
  bg: B("gray.100", "whiteAlpha.300")(e)
}), jy = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...Ay(e)
}), My = Gn((e) => ({
  label: Ry,
  filledTrack: jy(e),
  track: Oy(e)
})), Dy = {
  xs: Gn({
    track: { h: "1" }
  }),
  sm: Gn({
    track: { h: "2" }
  }),
  md: Gn({
    track: { h: "3" }
  }),
  lg: Gn({
    track: { h: "4" }
  })
}, zy = $y({
  sizes: Dy,
  baseStyle: My,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), By = (e) => typeof e == "function";
function Je(e, ...t) {
  return By(e) ? e(...t) : e;
}
var { definePartsStyle: yi, defineMultiStyleConfig: Vy } = ge(A0.keys), Qn = V("checkbox-size"), Iy = (e) => {
  const { colorScheme: t } = e;
  return {
    w: Qn.reference,
    h: Qn.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: B(`${t}.500`, `${t}.200`)(e),
      borderColor: B(`${t}.500`, `${t}.200`)(e),
      color: B("white", "gray.900")(e),
      _hover: {
        bg: B(`${t}.600`, `${t}.300`)(e),
        borderColor: B(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: B("gray.200", "transparent")(e),
        bg: B("gray.200", "whiteAlpha.300")(e),
        color: B("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: B(`${t}.500`, `${t}.200`)(e),
      borderColor: B(`${t}.500`, `${t}.200`)(e),
      color: B("white", "gray.900")(e)
    },
    _disabled: {
      bg: B("gray.100", "whiteAlpha.100")(e),
      borderColor: B("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: B("red.500", "red.300")(e)
    }
  };
}, Fy = {
  _disabled: { cursor: "not-allowed" }
}, Ly = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, Ny = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, Wy = yi((e) => ({
  icon: Ny,
  container: Fy,
  control: Je(Iy, e),
  label: Ly
})), Hy = {
  sm: yi({
    control: { [Qn.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: yi({
    control: { [Qn.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: yi({
    control: { [Qn.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Mi = Vy({
  baseStyle: Wy,
  sizes: Hy,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Uy, definePartsStyle: xi } = ge(N0.keys), Yy = (e) => {
  var t;
  const r = (t = Je(Mi.baseStyle, e)) == null ? void 0 : t.control;
  return {
    ...r,
    borderRadius: "full",
    _checked: {
      ...r == null ? void 0 : r._checked,
      _before: {
        content: '""',
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
}, qy = xi((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = Mi).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = Mi).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: Yy(e)
  };
}), Gy = {
  md: xi({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: xi({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: xi({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, Ky = Uy({
  baseStyle: qy,
  sizes: Gy,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Xy, definePartsStyle: Zy } = ge(W0.keys), Qo = V("select-bg"), Qc, Jy = {
  ...(Qc = ae.baseStyle) == null ? void 0 : Qc.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: Qo.reference,
  [Qo.variable]: "colors.white",
  _dark: {
    [Qo.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: Qo.reference
  }
}, Qy = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, e1 = Zy({
  field: Jy,
  icon: Qy
}), ei = {
  paddingInlineEnd: "8"
}, eu, tu, ru, nu, ou, iu, au, su, t1 = {
  lg: {
    ...(eu = ae.sizes) == null ? void 0 : eu.lg,
    field: {
      ...(tu = ae.sizes) == null ? void 0 : tu.lg.field,
      ...ei
    }
  },
  md: {
    ...(ru = ae.sizes) == null ? void 0 : ru.md,
    field: {
      ...(nu = ae.sizes) == null ? void 0 : nu.md.field,
      ...ei
    }
  },
  sm: {
    ...(ou = ae.sizes) == null ? void 0 : ou.sm,
    field: {
      ...(iu = ae.sizes) == null ? void 0 : iu.sm.field,
      ...ei
    }
  },
  xs: {
    ...(au = ae.sizes) == null ? void 0 : au.xs,
    field: {
      ...(su = ae.sizes) == null ? void 0 : su.xs.field,
      ...ei
    },
    icon: {
      insetEnd: "1"
    }
  }
}, r1 = Xy({
  baseStyle: e1,
  sizes: t1,
  variants: ae.variants,
  defaultProps: ae.defaultProps
}), Ia = V("skeleton-start-color"), Fa = V("skeleton-end-color"), n1 = {
  [Ia.variable]: "colors.gray.100",
  [Fa.variable]: "colors.gray.400",
  _dark: {
    [Ia.variable]: "colors.gray.800",
    [Fa.variable]: "colors.gray.600"
  },
  background: Ia.reference,
  borderColor: Fa.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, o1 = {
  baseStyle: n1
}, La = V("skip-link-bg"), i1 = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [La.variable]: "colors.white",
    _dark: {
      [La.variable]: "colors.gray.700"
    },
    bg: La.reference
  }
}, a1 = {
  baseStyle: i1
}, { defineMultiStyleConfig: s1, definePartsStyle: aa } = ge(H0.keys), ho = V("slider-thumb-size"), mo = V("slider-track-size"), br = V("slider-bg"), l1 = (e) => {
  const { orientation: t } = e;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...sl({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, c1 = (e) => ({
  ...sl({
    orientation: e.orientation,
    horizontal: { h: mo.reference },
    vertical: { w: mo.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [br.variable]: "colors.gray.200",
  _dark: {
    [br.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [br.variable]: "colors.gray.300",
    _dark: {
      [br.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: br.reference
}), u1 = (e) => {
  const { orientation: t } = e;
  return {
    ...sl({
      orientation: t,
      vertical: {
        left: "50%",
        transform: "translateX(-50%)",
        _active: {
          transform: "translateX(-50%) scale(1.15)"
        }
      },
      horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
        _active: {
          transform: "translateY(-50%) scale(1.15)"
        }
      }
    }),
    w: ho.reference,
    h: ho.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
}, d1 = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [br.variable]: `colors.${t}.500`,
    _dark: {
      [br.variable]: `colors.${t}.200`
    },
    bg: br.reference
  };
}, f1 = aa((e) => ({
  container: l1(e),
  track: c1(e),
  thumb: u1(e),
  filledTrack: d1(e)
})), p1 = aa({
  container: {
    [ho.variable]: "sizes.4",
    [mo.variable]: "sizes.1"
  }
}), h1 = aa({
  container: {
    [ho.variable]: "sizes.3.5",
    [mo.variable]: "sizes.1"
  }
}), m1 = aa({
  container: {
    [ho.variable]: "sizes.2.5",
    [mo.variable]: "sizes.0.5"
  }
}), g1 = {
  lg: p1,
  md: h1,
  sm: m1
}, v1 = s1({
  baseStyle: f1,
  sizes: g1,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Dr = Fe("spinner-size"), b1 = {
  width: [Dr.reference],
  height: [Dr.reference]
}, y1 = {
  xs: {
    [Dr.variable]: "sizes.3"
  },
  sm: {
    [Dr.variable]: "sizes.4"
  },
  md: {
    [Dr.variable]: "sizes.6"
  },
  lg: {
    [Dr.variable]: "sizes.8"
  },
  xl: {
    [Dr.variable]: "sizes.12"
  }
}, x1 = {
  baseStyle: b1,
  sizes: y1,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: S1, definePartsStyle: wf } = ge(U0.keys), w1 = {
  fontWeight: "medium"
}, C1 = {
  opacity: 0.8,
  marginBottom: "2"
}, _1 = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, k1 = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, T1 = wf({
  container: {},
  label: w1,
  helpText: C1,
  number: _1,
  icon: k1
}), P1 = {
  md: wf({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, E1 = S1({
  baseStyle: T1,
  sizes: P1,
  defaultProps: {
    size: "md"
  }
}), Na = V("kbd-bg"), $1 = {
  [Na.variable]: "colors.gray.100",
  _dark: {
    [Na.variable]: "colors.whiteAlpha.100"
  },
  bg: Na.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, A1 = {
  baseStyle: $1
}, R1 = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
}, O1 = {
  baseStyle: R1
}, { defineMultiStyleConfig: j1, definePartsStyle: M1 } = ge(z0.keys), D1 = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, z1 = M1({
  icon: D1
}), B1 = j1({
  baseStyle: z1
}), { defineMultiStyleConfig: V1, definePartsStyle: I1 } = ge(B0.keys), Bt = V("menu-bg"), Wa = V("menu-shadow"), F1 = {
  [Bt.variable]: "#fff",
  [Wa.variable]: "shadows.sm",
  _dark: {
    [Bt.variable]: "colors.gray.700",
    [Wa.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Bt.reference,
  boxShadow: Wa.reference
}, L1 = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [Bt.variable]: "colors.gray.100",
    _dark: {
      [Bt.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Bt.variable]: "colors.gray.200",
    _dark: {
      [Bt.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [Bt.variable]: "colors.gray.100",
    _dark: {
      [Bt.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: Bt.reference
}, N1 = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, W1 = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, H1 = {
  opacity: 0.6
}, U1 = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, Y1 = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, q1 = I1({
  button: Y1,
  list: F1,
  item: L1,
  groupTitle: N1,
  icon: W1,
  command: H1,
  divider: U1
}), G1 = V1({
  baseStyle: q1
}), { defineMultiStyleConfig: K1, definePartsStyle: Ts } = ge(V0.keys), Ha = V("modal-bg"), Ua = V("modal-shadow"), X1 = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, Z1 = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, J1 = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [Ha.variable]: "colors.white",
    [Ua.variable]: "shadows.lg",
    _dark: {
      [Ha.variable]: "colors.gray.700",
      [Ua.variable]: "shadows.dark-lg"
    },
    bg: Ha.reference,
    boxShadow: Ua.reference
  };
}, Q1 = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, ex = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, tx = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, rx = {
  px: "6",
  py: "4"
}, nx = Ts((e) => ({
  overlay: X1,
  dialogContainer: Je(Z1, e),
  dialog: Je(J1, e),
  header: Q1,
  closeButton: ex,
  body: Je(tx, e),
  footer: rx
}));
function kt(e) {
  return Ts(e === "full" ? {
    dialog: {
      maxW: "100vw",
      minH: "$100vh",
      my: "0",
      borderRadius: "0"
    }
  } : {
    dialog: { maxW: e }
  });
}
var ox = {
  xs: kt("xs"),
  sm: kt("sm"),
  md: kt("md"),
  lg: kt("lg"),
  xl: kt("xl"),
  "2xl": kt("2xl"),
  "3xl": kt("3xl"),
  "4xl": kt("4xl"),
  "5xl": kt("5xl"),
  "6xl": kt("6xl"),
  full: kt("full")
}, ix = K1({
  baseStyle: nx,
  sizes: ox,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: ax, definePartsStyle: Cf } = ge(I0.keys), cl = Fe("number-input-stepper-width"), _f = Fe("number-input-input-padding"), sx = er(cl).add("0.5rem").toString(), Ya = Fe("number-input-bg"), qa = Fe("number-input-color"), Ga = Fe("number-input-border-color"), lx = {
  [cl.variable]: "sizes.6",
  [_f.variable]: sx
}, cx = (e) => {
  var t, r;
  return (r = (t = Je(ae.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {};
}, ux = {
  width: cl.reference
}, dx = {
  borderStart: "1px solid",
  borderStartColor: Ga.reference,
  color: qa.reference,
  bg: Ya.reference,
  [qa.variable]: "colors.chakra-body-text",
  [Ga.variable]: "colors.chakra-border-color",
  _dark: {
    [qa.variable]: "colors.whiteAlpha.800",
    [Ga.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [Ya.variable]: "colors.gray.200",
    _dark: {
      [Ya.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, fx = Cf((e) => {
  var t;
  return {
    root: lx,
    field: (t = Je(cx, e)) != null ? t : {},
    stepperGroup: ux,
    stepper: dx
  };
});
function ti(e) {
  var t, r, n;
  const o = (t = ae.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md", s = vf.fontSizes[a];
  return Cf({
    field: {
      ...o.field,
      paddingInlineEnd: _f.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: er(s).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: i[e]
      },
      _last: {
        borderBottomEndRadius: i[e],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var px = {
  xs: ti("xs"),
  sm: ti("sm"),
  md: ti("md"),
  lg: ti("lg")
}, hx = ax({
  baseStyle: fx,
  sizes: px,
  variants: ae.variants,
  defaultProps: ae.defaultProps
}), lu, mx = {
  ...(lu = ae.baseStyle) == null ? void 0 : lu.field,
  textAlign: "center"
}, gx = {
  lg: {
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  }
}, cu, uu, vx = {
  outline: (e) => {
    var t, r, n;
    return (n = (r = Je((t = ae.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  flushed: (e) => {
    var t, r, n;
    return (n = (r = Je((t = ae.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  filled: (e) => {
    var t, r, n;
    return (n = (r = Je((t = ae.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  unstyled: (uu = (cu = ae.variants) == null ? void 0 : cu.unstyled.field) != null ? uu : {}
}, bx = {
  baseStyle: mx,
  sizes: gx,
  variants: vx,
  defaultProps: ae.defaultProps
}, { defineMultiStyleConfig: yx, definePartsStyle: xx } = ge(F0.keys), ri = Fe("popper-bg"), Sx = Fe("popper-arrow-bg"), du = Fe("popper-arrow-shadow-color"), wx = { zIndex: 10 }, Cx = {
  [ri.variable]: "colors.white",
  bg: ri.reference,
  [Sx.variable]: ri.reference,
  [du.variable]: "colors.gray.200",
  _dark: {
    [ri.variable]: "colors.gray.700",
    [du.variable]: "colors.whiteAlpha.300"
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
}, _x = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, kx = {
  px: 3,
  py: 2
}, Tx = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, Px = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, Ex = xx({
  popper: wx,
  content: Cx,
  header: _x,
  body: kx,
  footer: Tx,
  closeButton: Px
}), $x = yx({
  baseStyle: Ex
}), { definePartsStyle: Ps, defineMultiStyleConfig: Ax } = ge(R0.keys), Ka = V("drawer-bg"), Xa = V("drawer-box-shadow");
function Kr(e) {
  return Ps(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var Rx = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, Ox = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, jx = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [Ka.variable]: "colors.white",
    [Xa.variable]: "shadows.lg",
    _dark: {
      [Ka.variable]: "colors.gray.700",
      [Xa.variable]: "shadows.dark-lg"
    },
    bg: Ka.reference,
    boxShadow: Xa.reference
  };
}, Mx = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, Dx = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, zx = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, Bx = {
  px: "6",
  py: "4"
}, Vx = Ps((e) => ({
  overlay: Rx,
  dialogContainer: Ox,
  dialog: Je(jx, e),
  header: Mx,
  closeButton: Dx,
  body: zx,
  footer: Bx
})), Ix = {
  xs: Kr("xs"),
  sm: Kr("md"),
  md: Kr("lg"),
  lg: Kr("2xl"),
  xl: Kr("4xl"),
  full: Kr("full")
}, Fx = Ax({
  baseStyle: Vx,
  sizes: Ix,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: Lx, defineMultiStyleConfig: Nx } = ge(O0.keys), Wx = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, Hx = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, Ux = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, Yx = Lx({
  preview: Wx,
  input: Hx,
  textarea: Ux
}), qx = Nx({
  baseStyle: Yx
}), { definePartsStyle: Gx, defineMultiStyleConfig: Kx } = ge(j0.keys), un = V("form-control-color"), Xx = {
  marginStart: "1",
  [un.variable]: "colors.red.500",
  _dark: {
    [un.variable]: "colors.red.300"
  },
  color: un.reference
}, Zx = {
  mt: "2",
  [un.variable]: "colors.gray.600",
  _dark: {
    [un.variable]: "colors.whiteAlpha.600"
  },
  color: un.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, Jx = Gx({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: Xx,
  helperText: Zx
}), Qx = Kx({
  baseStyle: Jx
}), { definePartsStyle: eS, defineMultiStyleConfig: tS } = ge(M0.keys), dn = V("form-error-color"), rS = {
  [dn.variable]: "colors.red.500",
  _dark: {
    [dn.variable]: "colors.red.300"
  },
  color: dn.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, nS = {
  marginEnd: "0.5em",
  [dn.variable]: "colors.red.500",
  _dark: {
    [dn.variable]: "colors.red.300"
  },
  color: dn.reference
}, oS = eS({
  text: rS,
  icon: nS
}), iS = tS({
  baseStyle: oS
}), aS = {
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
}, sS = {
  baseStyle: aS
}, lS = {
  fontFamily: "heading",
  fontWeight: "bold"
}, cS = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  },
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  },
  md: {
    fontSize: "xl",
    lineHeight: 1.2
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.2
  },
  xs: {
    fontSize: "sm",
    lineHeight: 1.2
  }
}, uS = {
  baseStyle: lS,
  sizes: cS,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: dS, definePartsStyle: fS } = ge($0.keys), Za = V("breadcrumb-link-decor"), pS = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: Za.reference,
  [Za.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [Za.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, hS = fS({
  link: pS
}), mS = dS({
  baseStyle: hS
}), gS = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
}, kf = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: B("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: B("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: B("gray.200", "whiteAlpha.300")(e) }
    };
  const n = gn(`${t}.200`, 0.12)(r), o = gn(`${t}.200`, 0.24)(r);
  return {
    color: B(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: B(`${t}.50`, n)(e)
    },
    _active: {
      bg: B(`${t}.100`, o)(e)
    }
  };
}, vS = (e) => {
  const { colorScheme: t } = e, r = B("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...Je(kf, e)
  };
}, bS = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
}, yS = (e) => {
  var t;
  const { colorScheme: r } = e;
  if (r === "gray") {
    const l = B("gray.100", "whiteAlpha.200")(e);
    return {
      bg: l,
      color: B("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: B("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: l
        }
      },
      _active: { bg: B("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: n = `${r}.500`,
    color: o = "white",
    hoverBg: i = `${r}.600`,
    activeBg: a = `${r}.700`
  } = (t = bS[r]) != null ? t : {}, s = B(n, `${r}.200`)(e);
  return {
    bg: s,
    color: B(o, "gray.800")(e),
    _hover: {
      bg: B(i, `${r}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: B(a, `${r}.400`)(e) }
  };
}, xS = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: B(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: B(`${t}.700`, `${t}.500`)(e)
    }
  };
}, SS = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, wS = {
  ghost: kf,
  outline: vS,
  solid: yS,
  link: xS,
  unstyled: SS
}, CS = {
  lg: {
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  },
  md: {
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  },
  sm: {
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  },
  xs: {
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  }
}, _S = {
  baseStyle: gS,
  variants: wS,
  sizes: CS,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: Fr, defineMultiStyleConfig: kS } = ge(X0.keys), Di = V("card-bg"), nr = V("card-padding"), Tf = V("card-shadow"), Si = V("card-radius"), Pf = V("card-border-width", "0"), Ef = V("card-border-color"), TS = Fr({
  container: {
    [Di.variable]: "colors.chakra-body-bg",
    backgroundColor: Di.reference,
    boxShadow: Tf.reference,
    borderRadius: Si.reference,
    color: "chakra-body-text",
    borderWidth: Pf.reference,
    borderColor: Ef.reference
  },
  body: {
    padding: nr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: nr.reference
  },
  footer: {
    padding: nr.reference
  }
}), PS = {
  sm: Fr({
    container: {
      [Si.variable]: "radii.base",
      [nr.variable]: "space.3"
    }
  }),
  md: Fr({
    container: {
      [Si.variable]: "radii.md",
      [nr.variable]: "space.5"
    }
  }),
  lg: Fr({
    container: {
      [Si.variable]: "radii.xl",
      [nr.variable]: "space.7"
    }
  })
}, ES = {
  elevated: Fr({
    container: {
      [Tf.variable]: "shadows.base",
      _dark: {
        [Di.variable]: "colors.gray.700"
      }
    }
  }),
  outline: Fr({
    container: {
      [Pf.variable]: "1px",
      [Ef.variable]: "colors.chakra-border-color"
    }
  }),
  filled: Fr({
    container: {
      [Di.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [nr.variable]: 0
    },
    header: {
      [nr.variable]: 0
    },
    footer: {
      [nr.variable]: 0
    }
  }
}, $S = kS({
  baseStyle: TS,
  variants: ES,
  sizes: PS,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), eo = Fe("close-button-size"), Fn = Fe("close-button-bg"), AS = {
  w: [eo.reference],
  h: [eo.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [Fn.variable]: "colors.blackAlpha.100",
    _dark: {
      [Fn.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Fn.variable]: "colors.blackAlpha.200",
    _dark: {
      [Fn.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: Fn.reference
}, RS = {
  lg: {
    [eo.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [eo.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [eo.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, OS = {
  baseStyle: AS,
  sizes: RS,
  defaultProps: {
    size: "md"
  }
}, { variants: jS, defaultProps: MS } = Jn, DS = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: Oe.bg.reference,
  color: Oe.color.reference,
  boxShadow: Oe.shadow.reference
}, zS = {
  baseStyle: DS,
  variants: jS,
  defaultProps: MS
}, BS = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, VS = {
  baseStyle: BS
}, IS = {
  opacity: 0.6,
  borderColor: "inherit"
}, FS = {
  borderStyle: "solid"
}, LS = {
  borderStyle: "dashed"
}, NS = {
  solid: FS,
  dashed: LS
}, WS = {
  baseStyle: IS,
  variants: NS,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: HS, defineMultiStyleConfig: US } = ge(T0.keys), YS = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, qS = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
}, GS = {
  pt: "2",
  px: "4",
  pb: "5"
}, KS = {
  fontSize: "1.25em"
}, XS = HS({
  container: YS,
  button: qS,
  panel: GS,
  icon: KS
}), ZS = US({ baseStyle: XS }), { definePartsStyle: Po, defineMultiStyleConfig: JS } = ge(P0.keys), ft = V("alert-fg"), ar = V("alert-bg"), QS = Po({
  container: {
    bg: ar.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: ft.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: ft.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function ul(e) {
  const { theme: t, colorScheme: r } = e, n = gn(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var ew = Po((e) => {
  const { colorScheme: t } = e, r = ul(e);
  return {
    container: {
      [ft.variable]: `colors.${t}.600`,
      [ar.variable]: r.light,
      _dark: {
        [ft.variable]: `colors.${t}.200`,
        [ar.variable]: r.dark
      }
    }
  };
}), tw = Po((e) => {
  const { colorScheme: t } = e, r = ul(e);
  return {
    container: {
      [ft.variable]: `colors.${t}.600`,
      [ar.variable]: r.light,
      _dark: {
        [ft.variable]: `colors.${t}.200`,
        [ar.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: ft.reference
    }
  };
}), rw = Po((e) => {
  const { colorScheme: t } = e, r = ul(e);
  return {
    container: {
      [ft.variable]: `colors.${t}.600`,
      [ar.variable]: r.light,
      _dark: {
        [ft.variable]: `colors.${t}.200`,
        [ar.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: ft.reference
    }
  };
}), nw = Po((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [ft.variable]: "colors.white",
      [ar.variable]: `colors.${t}.600`,
      _dark: {
        [ft.variable]: "colors.gray.900",
        [ar.variable]: `colors.${t}.200`
      },
      color: ft.reference
    }
  };
}), ow = {
  subtle: ew,
  "left-accent": tw,
  "top-accent": rw,
  solid: nw
}, iw = JS({
  baseStyle: QS,
  variants: ow,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: $f, defineMultiStyleConfig: aw } = ge(E0.keys), fn = V("avatar-border-color"), to = V("avatar-bg"), go = V("avatar-font-size"), vn = V("avatar-size"), sw = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: fn.reference,
  [fn.variable]: "white",
  _dark: {
    [fn.variable]: "colors.gray.800"
  }
}, lw = {
  bg: to.reference,
  fontSize: go.reference,
  width: vn.reference,
  height: vn.reference,
  lineHeight: "1",
  [to.variable]: "colors.gray.200",
  _dark: {
    [to.variable]: "colors.whiteAlpha.400"
  }
}, cw = (e) => {
  const { name: t, theme: r } = e, n = t ? gb({ string: t }) : "colors.gray.400", o = hb(n)(r);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: to.reference,
    fontSize: go.reference,
    color: i,
    borderColor: fn.reference,
    verticalAlign: "top",
    width: vn.reference,
    height: vn.reference,
    "&:not([data-loaded])": {
      [to.variable]: n
    },
    [fn.variable]: "colors.white",
    _dark: {
      [fn.variable]: "colors.gray.800"
    }
  };
}, uw = {
  fontSize: go.reference,
  lineHeight: "1"
}, dw = $f((e) => ({
  badge: Je(sw, e),
  excessLabel: Je(lw, e),
  container: Je(cw, e),
  label: uw
}));
function mr(e) {
  const t = e !== "100%" ? yf[e] : void 0;
  return $f({
    container: {
      [vn.variable]: t ?? e,
      [go.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [vn.variable]: t ?? e,
      [go.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var fw = {
  "2xs": mr(4),
  xs: mr(6),
  sm: mr(8),
  md: mr(12),
  lg: mr(16),
  xl: mr(24),
  "2xl": mr(32),
  full: mr("100%")
}, pw = aw({
  baseStyle: dw,
  sizes: fw,
  defaultProps: {
    size: "md"
  }
}), hw = {
  Accordion: ZS,
  Alert: iw,
  Avatar: pw,
  Badge: Jn,
  Breadcrumb: mS,
  Button: _S,
  Checkbox: Mi,
  CloseButton: OS,
  Code: zS,
  Container: VS,
  Divider: WS,
  Drawer: Fx,
  Editable: qx,
  Form: Qx,
  FormError: iS,
  FormLabel: sS,
  Heading: uS,
  Input: ae,
  Kbd: A1,
  Link: O1,
  List: B1,
  Menu: G1,
  Modal: ix,
  NumberInput: hx,
  PinInput: bx,
  Popover: $x,
  Progress: zy,
  Radio: Ky,
  Select: r1,
  Skeleton: o1,
  SkipLink: a1,
  Slider: v1,
  Spinner: x1,
  Stat: E1,
  Switch: Ob,
  Table: Ib,
  Tabs: ey,
  Tag: py,
  Textarea: ky,
  Tooltip: Ey,
  Card: $S,
  Stepper: k0
}, mw = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, gw = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color"
    }
  }
}, vw = "ltr", bw = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, yw = {
  semanticTokens: mw,
  direction: vw,
  ...w0,
  components: hw,
  styles: gw,
  config: bw
};
function xw(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function Sw(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var ww = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, i, a) => {
    if (typeof n > "u")
      return e(n, o, i);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const s = t.get(n);
    if (s.has(o))
      return s.get(o);
    const l = e(n, o, i, a);
    return s.set(o, l), l;
  };
}, Af = ww(Sw);
function Rf(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var Of = (e) => Rf(e, (t) => t != null);
function Cw(e) {
  return typeof e == "function";
}
process.env.NODE_ENV;
process.env.NODE_ENV;
function jf(e, ...t) {
  return Cw(e) ? e(...t) : e;
}
var _w = typeof Element < "u", kw = typeof Map == "function", Tw = typeof Set == "function", Pw = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function wi(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var r, n, o;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!wi(e[n], t[n]))
          return !1;
      return !0;
    }
    var i;
    if (kw && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!wi(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (Tw && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (Pw && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (e[n] !== t[n])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
      return e.toString() === t.toString();
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n]))
        return !1;
    if (_w && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !wi(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Ew = function(t, r) {
  try {
    return wi(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const $w = /* @__PURE__ */ Nd(Ew);
function Mf(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t, { theme: i, colorMode: a } = Dg(), s = e ? Af(i, `components.${e}`) : void 0, l = n || s, c = It(
    { theme: i, colorMode: a },
    (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
    Of(xw(o, ["children"]))
  ), u = Te({});
  if (l) {
    const f = Zv(l)(c);
    $w(u.current, f) || (u.current = f);
  }
  return u.current;
}
function Pn(e, t = {}) {
  return Mf(e, t);
}
function Aw(e, t = {}) {
  return Mf(e, t);
}
var Rw = /* @__PURE__ */ new Set([
  ...Iv,
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx"
]), Ow = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function jw(e) {
  return Ow.has(e) || !Rw.has(e);
}
function Mw(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
function Dw(e) {
  const t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
var zw = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Bw = /* @__PURE__ */ Gd(
  function(e) {
    return zw.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Vw = Bw, Iw = function(t) {
  return t !== "theme";
}, fu = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Vw : Iw;
}, pu = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, hu = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Fw = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Qi(r, n, o), Qs(function() {
    return ea(r, n, o);
  }), null;
}, Lw = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = pu(t, r, n), l = s || fu(o), c = !l("as");
  return function() {
    var u = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      process.env.NODE_ENV !== "production" && u[0][0] === void 0 && console.error(hu), d.push(u[0][0]);
      for (var f = u.length, p = 1; p < f; p++)
        process.env.NODE_ENV !== "production" && u[0][p] === void 0 && console.error(hu), d.push(u[p], u[0][p]);
    }
    var g = ta(function(v, S, _) {
      var b = c && v.as || o, C = "", k = [], w = v;
      if (v.theme == null) {
        w = {};
        for (var A in v)
          w[A] = v[A];
        w.theme = G.useContext(wr);
      }
      typeof v.className == "string" ? C = Zs(S.registered, k, v.className) : v.className != null && (C = v.className + " ");
      var E = mn(d.concat(k), S.registered, w);
      C += S.key + "-" + E.name, a !== void 0 && (C += " " + a);
      var M = c && s === void 0 ? fu(b) : l, D = {};
      for (var O in v)
        c && O === "as" || // $FlowFixMe
        M(O) && (D[O] = v[O]);
      return D.className = C, D.ref = _, /* @__PURE__ */ G.createElement(G.Fragment, null, /* @__PURE__ */ G.createElement(Fw, {
        cache: S,
        serialized: E,
        isStringTag: typeof b == "string"
      }), /* @__PURE__ */ G.createElement(b, D));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = d, g.__emotion_forwardProp = s, Object.defineProperty(g, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), g.withComponent = function(v, S) {
      return e(v, Ei({}, r, S, {
        shouldForwardProp: pu(g, S, !0)
      })).apply(void 0, d);
    }, g;
  };
}, Nw = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], zi = Lw.bind();
Nw.forEach(function(e) {
  zi[e] = zi(e);
});
var mu, Ww = (mu = zi.default) != null ? mu : zi, Hw = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: i, ...a } = t, s = Rf(a, (d, f) => Lv(f)), l = jf(e, t), c = Mw(
    {},
    o,
    l,
    Of(s),
    i
  ), u = gf(c)(t.theme);
  return n ? [u, n] : u;
};
function Ja(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = jw);
  const o = Hw({ baseStyle: r }), i = Ww(
    e,
    n
  )(o);
  return pn.forwardRef(function(l, c) {
    const { colorMode: u, forced: d } = ra();
    return pn.createElement(i, {
      ref: c,
      "data-theme": d ? u : void 0,
      ...l
    });
  });
}
function Uw() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Ja, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, r, n) {
      return Ja(...n);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, r) {
      return e.has(r) || e.set(r, Ja(r)), e.get(r);
    }
  });
}
var we = Uw();
function wt(e) {
  return Ys(e);
}
function Yw(e = {}) {
  const {
    strict: t = !0,
    errorMessage: r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: n
  } = e, o = Yt(void 0);
  o.displayName = n;
  function i() {
    var a;
    const s = Re(o);
    if (!s && t) {
      const l = new Error(r);
      throw l.name = "ContextError", (a = Error.captureStackTrace) == null || a.call(Error, l, i), l;
    }
    return s;
  }
  return [
    o.Provider,
    i,
    o
  ];
}
function qw(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e, o = He(() => Vv(r), [r]);
  return /* @__PURE__ */ P.jsxs(ug, { theme: o, children: [
    /* @__PURE__ */ P.jsx(Gw, { root: t }),
    n
  ] });
}
function Gw({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ P.jsx(ko, { styles: (r) => ({ [t]: r.__cssVars }) });
}
Yw({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function Kw() {
  const { colorMode: e } = ra();
  return /* @__PURE__ */ P.jsx(
    ko,
    {
      styles: (t) => {
        const r = Af(t, "styles.global"), n = jf(r, { theme: t, colorMode: e });
        return n ? gf(n)(t) : void 0;
      }
    }
  );
}
var Df = Yt({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
Df.displayName = "EnvironmentContext";
function zf(e) {
  const { children: t, environment: r, disabled: n } = e, o = Te(null), i = He(() => r || {
    getDocument: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument) != null ? l : document;
    },
    getWindow: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) != null ? l : window;
    }
  }, [r]), a = !n || !r;
  return /* @__PURE__ */ P.jsxs(Df.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ P.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
zf.displayName = "EnvironmentProvider";
var Xw = (e) => {
  const {
    children: t,
    colorModeManager: r,
    portalZIndex: n,
    resetScope: o,
    resetCSS: i = !0,
    theme: a = {},
    environment: s,
    cssVarsRoot: l,
    disableEnvironment: c,
    disableGlobalStyle: u
  } = e, d = /* @__PURE__ */ P.jsx(
    zf,
    {
      environment: s,
      disabled: c,
      children: t
    }
  );
  return /* @__PURE__ */ P.jsx(qw, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ P.jsxs(
    cf,
    {
      colorModeManager: r,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ P.jsx(wg, { scope: o }) : /* @__PURE__ */ P.jsx(Sg, {}),
        !u && /* @__PURE__ */ P.jsx(Kw, {}),
        n ? /* @__PURE__ */ P.jsx(af, { zIndex: n, children: d }) : d
      ]
    }
  ) });
}, Zw = (e, t) => e.find((r) => r.id === t);
function gu(e, t) {
  const r = Bf(e, t), n = r ? e[r].findIndex((o) => o.id === t) : -1;
  return {
    position: r,
    index: n
  };
}
function Bf(e, t) {
  for (const [r, n] of Object.entries(e))
    if (Zw(n, t))
      return r;
}
function Jw(e) {
  const t = e.includes("right"), r = e.includes("left");
  let n = "center";
  return t && (n = "flex-end"), r && (n = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: n
  };
}
function Qw(e) {
  const r = e === "top" || e === "bottom" ? "0 auto" : void 0, n = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0, o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0, i = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)", a = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: r,
    top: n,
    bottom: o,
    right: i,
    left: a
  };
}
function Bi(e, t = []) {
  const r = Te(e);
  return We(() => {
    r.current = e;
  }), fe((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function eC(e, t) {
  const r = Bi(e);
  We(() => {
    if (t == null)
      return;
    let n = null;
    return n = window.setTimeout(() => {
      r();
    }, t), () => {
      n && window.clearTimeout(n);
    };
  }, [t, r]);
}
function vu(e, t) {
  const r = Te(!1), n = Te(!1);
  We(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), We(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
}
const Vf = Yt({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), sa = Yt({}), Eo = Yt(null), la = typeof document < "u", dl = la ? Id : We, If = Yt({ strict: !1 });
function tC(e, t, r, n) {
  const { visualElement: o } = Re(sa), i = Re(If), a = Re(Eo), s = Re(Vf).reducedMotion, l = Te();
  n = n || i.renderer, !l.current && n && (l.current = n(e, {
    visualState: t,
    parent: o,
    props: r,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const c = l.current;
  Fd(() => {
    c && c.update(r, a);
  });
  const u = Te(!!window.HandoffAppearAnimations);
  return dl(() => {
    c && (c.render(), u.current && c.animationState && c.animationState.animateChanges());
  }), We(() => {
    c && (c.updateFeatures(), !u.current && c.animationState && c.animationState.animateChanges(), window.HandoffAppearAnimations = void 0, u.current = !1);
  }), c;
}
function nn(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function rC(e, t, r) {
  return fe(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : nn(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function vo(e) {
  return typeof e == "string" || Array.isArray(e);
}
function ca(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const fl = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], pl = ["initial", ...fl];
function ua(e) {
  return ca(e.animate) || pl.some((t) => vo(e[t]));
}
function Ff(e) {
  return !!(ua(e) || e.variants);
}
function nC(e, t) {
  if (ua(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || vo(r) ? r : void 0,
      animate: vo(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function oC(e) {
  const { initial: t, animate: r } = nC(e, Re(sa));
  return He(() => ({ initial: t, animate: r }), [bu(t), bu(r)]);
}
function bu(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const yu = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, bo = {};
for (const e in yu)
  bo[e] = {
    isEnabled: (t) => yu[e].some((r) => !!t[r])
  };
function iC(e) {
  for (const t in e)
    bo[t] = {
      ...bo[t],
      ...e[t]
    };
}
const hl = Yt({}), Lf = Yt({}), aC = Symbol.for("motionComponentSymbol");
function sC({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && iC(e);
  function i(s, l) {
    let c;
    const u = {
      ...Re(Vf),
      ...s,
      layoutId: lC(s)
    }, { isStatic: d } = u, f = oC(s), p = n(s, d);
    if (!d && la) {
      f.visualElement = tC(o, p, u, t);
      const g = Re(Lf), v = Re(If).strict;
      f.visualElement && (c = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        u,
        v,
        e,
        g
      ));
    }
    return G.createElement(
      sa.Provider,
      { value: f },
      c && f.visualElement ? G.createElement(c, { visualElement: f.visualElement, ...u }) : null,
      r(o, s, rC(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = Ys(i);
  return a[aC] = o, a;
}
function lC({ layoutId: e }) {
  const t = Re(hl).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function cC(e) {
  function t(n, o = {}) {
    return sC(e(n, o));
  }
  if (typeof Proxy > "u")
    return t;
  const r = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o))
  });
}
const uC = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function ml(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(uC.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const Vi = {};
function dC(e) {
  Object.assign(Vi, e);
}
const $o = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Wr = new Set($o);
function Nf(e, { layout: t, layoutId: r }) {
  return Wr.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!Vi[e] || e === "opacity");
}
const st = (e) => !!(e && e.getVelocity), fC = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, pC = $o.length;
function hC(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let i = "";
  for (let a = 0; a < pC; a++) {
    const s = $o[a];
    if (e[s] !== void 0) {
      const l = fC[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, n ? "" : i) : r && n && (i = "none"), i;
}
const Wf = (e) => (t) => typeof t == "string" && t.startsWith(e), Hf = Wf("--"), Es = Wf("var(--"), mC = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, gC = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Cr = (e, t, r) => Math.min(Math.max(r, e), t), Hr = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, ro = {
  ...Hr,
  transform: (e) => Cr(0, 1, e)
}, ni = {
  ...Hr,
  default: 1
}, no = (e) => Math.round(e * 1e5) / 1e5, da = /(-)?([\d]*\.?[\d])+/g, Uf = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, vC = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ao(e) {
  return typeof e == "string";
}
const Ro = (e) => ({
  test: (t) => Ao(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), gr = Ro("deg"), Nt = Ro("%"), F = Ro("px"), bC = Ro("vh"), yC = Ro("vw"), xu = {
  ...Nt,
  parse: (e) => Nt.parse(e) / 100,
  transform: (e) => Nt.transform(e * 100)
}, Su = {
  ...Hr,
  transform: Math.round
}, Yf = {
  // Border props
  borderWidth: F,
  borderTopWidth: F,
  borderRightWidth: F,
  borderBottomWidth: F,
  borderLeftWidth: F,
  borderRadius: F,
  radius: F,
  borderTopLeftRadius: F,
  borderTopRightRadius: F,
  borderBottomRightRadius: F,
  borderBottomLeftRadius: F,
  // Positioning props
  width: F,
  maxWidth: F,
  height: F,
  maxHeight: F,
  size: F,
  top: F,
  right: F,
  bottom: F,
  left: F,
  // Spacing props
  padding: F,
  paddingTop: F,
  paddingRight: F,
  paddingBottom: F,
  paddingLeft: F,
  margin: F,
  marginTop: F,
  marginRight: F,
  marginBottom: F,
  marginLeft: F,
  // Transform props
  rotate: gr,
  rotateX: gr,
  rotateY: gr,
  rotateZ: gr,
  scale: ni,
  scaleX: ni,
  scaleY: ni,
  scaleZ: ni,
  skew: gr,
  skewX: gr,
  skewY: gr,
  distance: F,
  translateX: F,
  translateY: F,
  translateZ: F,
  x: F,
  y: F,
  z: F,
  perspective: F,
  transformPerspective: F,
  opacity: ro,
  originX: xu,
  originY: xu,
  originZ: F,
  // Misc
  zIndex: Su,
  // SVG
  fillOpacity: ro,
  strokeOpacity: ro,
  numOctaves: Su
};
function gl(e, t, r, n) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, c = !1, u = !0;
  for (const d in t) {
    const f = t[d];
    if (Hf(d)) {
      i[d] = f;
      continue;
    }
    const p = Yf[d], g = gC(f, p);
    if (Wr.has(d)) {
      if (l = !0, a[d] = g, !u)
        continue;
      f !== (p.default || 0) && (u = !1);
    } else
      d.startsWith("origin") ? (c = !0, s[d] = g) : o[d] = g;
  }
  if (t.transform || (l || n ? o.transform = hC(e.transform, r, u, n) : o.transform && (o.transform = "none")), c) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const vl = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function qf(e, t, r) {
  for (const n in t)
    !st(t[n]) && !Nf(n, r) && (e[n] = t[n]);
}
function xC({ transformTemplate: e }, t, r) {
  return He(() => {
    const n = vl();
    return gl(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function SC(e, t, r) {
  const n = e.style || {}, o = {};
  return qf(o, n, e), Object.assign(o, xC(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function wC(e, t, r) {
  const n = {}, o = SC(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const CC = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport"
]);
function Ii(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || CC.has(e);
}
let Gf = (e) => !Ii(e);
function _C(e) {
  e && (Gf = (t) => t.startsWith("on") ? !Ii(t) : e(t));
}
try {
  _C(require("@emotion/is-prop-valid").default);
} catch {
}
function kC(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Gf(o) || r === !0 && Ii(o) || !t && !Ii(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function wu(e, t, r) {
  return typeof e == "string" ? e : F.transform(t + r * e);
}
function TC(e, t, r) {
  const n = wu(t, e.x, e.width), o = wu(r, e.y, e.height);
  return `${n} ${o}`;
}
const PC = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, EC = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function $C(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? PC : EC;
  e[i.offset] = F.transform(-n);
  const a = F.transform(t), s = F.transform(r);
  e[i.array] = `${a} ${s}`;
}
function bl(e, {
  attrX: t,
  attrY: r,
  attrScale: n,
  originX: o,
  originY: i,
  pathLength: a,
  pathSpacing: s = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, u, d, f) {
  if (gl(e, c, u, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: g, dimensions: v } = e;
  p.transform && (v && (g.transform = p.transform), delete p.transform), v && (o !== void 0 || i !== void 0 || g.transform) && (g.transformOrigin = TC(v, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), r !== void 0 && (p.y = r), n !== void 0 && (p.scale = n), a !== void 0 && $C(p, a, s, l, !1);
}
const Kf = () => ({
  ...vl(),
  attrs: {}
}), yl = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function AC(e, t, r, n) {
  const o = He(() => {
    const i = Kf();
    return bl(i, t, { enableHardwareAcceleration: !1 }, yl(n), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    qf(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function RC(e = !1) {
  return (r, n, o, { latestValues: i }, a) => {
    const l = (ml(r) ? AC : wC)(n, i, a, r), u = {
      ...kC(n, typeof r == "string", e),
      ...l,
      ref: o
    }, { children: d } = n, f = He(() => st(d) ? d.get() : d, [d]);
    return om(r, {
      ...u,
      children: f
    });
  };
}
const xl = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Xf(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r)
    e.style.setProperty(i, r[i]);
}
const Zf = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Jf(e, t, r, n) {
  Xf(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(Zf.has(o) ? o : xl(o), t.attrs[o]);
}
function Sl(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    (st(r[o]) || t.style && st(t.style[o]) || Nf(o, e)) && (n[o] = r[o]);
  return n;
}
function Qf(e, t) {
  const r = Sl(e, t);
  for (const n in e)
    if (st(e[n]) || st(t[n])) {
      const o = $o.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function wl(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
function ep(e) {
  const t = Te(null);
  return t.current === null && (t.current = e()), t.current;
}
const Fi = (e) => Array.isArray(e), OC = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), jC = (e) => Fi(e) ? e[e.length - 1] || 0 : e;
function Ci(e) {
  const t = st(e) ? e.get() : e;
  return OC(t) ? t.toValue() : t;
}
function MC({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, i) {
  const a = {
    latestValues: DC(n, o, i, e),
    renderState: t()
  };
  return r && (a.mount = (s) => r(n, s, a)), a;
}
const tp = (e) => (t, r) => {
  const n = Re(sa), o = Re(Eo), i = () => MC(e, t, n, o);
  return r ? i() : ep(i);
};
function DC(e, t, r, n) {
  const o = {}, i = n(e, {});
  for (const f in i)
    o[f] = Ci(i[f]);
  let { initial: a, animate: s } = e;
  const l = ua(e), c = Ff(e);
  t && c && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let u = r ? r.initial === !1 : !1;
  u = u || a === !1;
  const d = u ? s : a;
  return d && typeof d != "boolean" && !ca(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const g = wl(e, p);
    if (!g)
      return;
    const { transitionEnd: v, transition: S, ..._ } = g;
    for (const b in _) {
      let C = _[b];
      if (Array.isArray(C)) {
        const k = u ? C.length - 1 : 0;
        C = C[k];
      }
      C !== null && (o[b] = C);
    }
    for (const b in v)
      o[b] = v[b];
  }), o;
}
const $e = (e) => e;
class Cu {
  constructor() {
    this.order = [], this.scheduled = /* @__PURE__ */ new Set();
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const r = this.order.indexOf(t);
    r !== -1 && (this.order.splice(r, 1), this.scheduled.delete(t));
  }
  clear() {
    this.order.length = 0, this.scheduled.clear();
  }
}
function zC(e) {
  let t = new Cu(), r = new Cu(), n = 0, o = !1, i = !1;
  const a = /* @__PURE__ */ new WeakSet(), s = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, c = !1, u = !1) => {
      const d = u && o, f = d ? t : r;
      return c && a.add(l), f.add(l) && d && o && (n = t.order.length), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      r.remove(l), a.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (o) {
        i = !0;
        return;
      }
      if (o = !0, [t, r] = [r, t], r.clear(), n = t.order.length, n)
        for (let c = 0; c < n; c++) {
          const u = t.order[c];
          u(l), a.has(u) && (s.schedule(u), e());
        }
      o = !1, i && (i = !1, s.process(l));
    }
  };
  return s;
}
const oi = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], BC = 40;
function VC(e, t) {
  let r = !1, n = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = oi.reduce((d, f) => (d[f] = zC(() => r = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    r = !1, o.delta = n ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, BC), 1), o.timestamp = d, o.isProcessing = !0, oi.forEach(a), o.isProcessing = !1, r && t && (n = !1, e(s));
  }, l = () => {
    r = !0, n = !0, o.isProcessing || e(s);
  };
  return { schedule: oi.reduce((d, f) => {
    const p = i[f];
    return d[f] = (g, v = !1, S = !1) => (r || l(), p.schedule(g, v, S)), d;
  }, {}), cancel: (d) => oi.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: me, cancel: sr, state: Ne, steps: Qa } = VC(typeof requestAnimationFrame < "u" ? requestAnimationFrame : $e, !0), IC = {
  useVisualState: tp({
    scrapeMotionValuesFromProps: Qf,
    createRenderState: Kf,
    onMount: (e, t, { renderState: r, latestValues: n }) => {
      me.read(() => {
        try {
          r.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          r.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), me.render(() => {
        bl(r, n, { enableHardwareAcceleration: !1 }, yl(t.tagName), e.transformTemplate), Jf(t, r);
      });
    }
  })
}, FC = {
  useVisualState: tp({
    scrapeMotionValuesFromProps: Sl,
    createRenderState: vl
  })
};
function LC(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...ml(e) ? IC : FC,
    preloadedFeatures: r,
    useRender: RC(t),
    createVisualElement: n,
    Component: e
  };
}
function rr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const rp = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function fa(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const NC = (e) => (t) => rp(t) && e(t, fa(t));
function or(e, t, r, n) {
  return rr(e, t, NC(r), n);
}
const WC = (e, t) => (r) => t(e(r)), xr = (...e) => e.reduce(WC);
function np(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const _u = np("dragHorizontal"), ku = np("dragVertical");
function op(e) {
  let t = !1;
  if (e === "y")
    t = ku();
  else if (e === "x")
    t = _u();
  else {
    const r = _u(), n = ku();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function ip() {
  const e = op(!0);
  return e ? (e(), !1) : !0;
}
class kr {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function Tu(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || ip())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && me.update(() => s[n](i, a));
  };
  return or(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class HC extends kr {
  mount() {
    this.unmount = xr(Tu(this.node, !0), Tu(this.node, !1));
  }
  unmount() {
  }
}
class UC extends kr {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = xr(rr(this.node.current, "focus", () => this.onFocus()), rr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const ap = (e, t) => t ? e === t ? !0 : ap(e, t.parentElement) : !1;
function es(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, fa(r));
}
class YC extends kr {
  constructor() {
    super(...arguments), this.removeStartListeners = $e, this.removeEndListeners = $e, this.removeAccessibleListeners = $e, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), i = or(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: c, onTapCancel: u } = this.node.getProps();
        me.update(() => {
          ap(this.node.current, s.target) ? c && c(s, l) : u && u(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), a = or(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = xr(i, a), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || es("up", (l, c) => {
            const { onTap: u } = this.node.getProps();
            u && me.update(() => u(l, c));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = rr(this.node.current, "keyup", a), es("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = rr(this.node.current, "keydown", t), n = () => {
        this.isPressing && es("cancel", (i, a) => this.cancelPress(i, a));
      }, o = rr(this.node.current, "blur", n);
      this.removeAccessibleListeners = xr(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && me.update(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !ip();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && me.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = or(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = rr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = xr(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const $s = /* @__PURE__ */ new WeakMap(), ts = /* @__PURE__ */ new WeakMap(), qC = (e) => {
  const t = $s.get(e.target);
  t && t(e);
}, GC = (e) => {
  e.forEach(qC);
};
function KC({ root: e, ...t }) {
  const r = e || document;
  ts.has(r) || ts.set(r, {});
  const n = ts.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(GC, { root: e, ...t })), n[o];
}
function XC(e, t, r) {
  const n = KC(t);
  return $s.set(e, r), n.observe(e), () => {
    $s.delete(e), n.unobserve(e);
  };
}
const ZC = {
  some: 0,
  all: 1
};
class JC extends kr {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: i } = t, a = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : ZC[o]
    }, s = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, i && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(), f = c ? u : d;
      f && f(l);
    };
    return XC(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(QC(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function QC({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const e_ = {
  inView: {
    Feature: JC
  },
  tap: {
    Feature: YC
  },
  focus: {
    Feature: UC
  },
  hover: {
    Feature: HC
  }
};
function sp(e, t) {
  if (!Array.isArray(t))
    return !1;
  const r = t.length;
  if (r !== e.length)
    return !1;
  for (let n = 0; n < r; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function t_(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function r_(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function pa(e, t, r) {
  const n = e.getProps();
  return wl(n, t, r !== void 0 ? r : n.custom, t_(e), r_(e));
}
const n_ = "framerAppearId", o_ = "data-" + xl(n_);
let Oo = $e, $t = $e;
process.env.NODE_ENV !== "production" && (Oo = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, $t = (e, t) => {
  if (!e)
    throw new Error(t);
});
const Sr = (e) => e * 1e3, ir = (e) => e / 1e3, i_ = {
  current: !1
}, lp = (e) => Array.isArray(e) && typeof e[0] == "number";
function cp(e) {
  return !!(!e || typeof e == "string" && up[e] || lp(e) || Array.isArray(e) && e.every(cp));
}
const Kn = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, up = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Kn([0, 0.65, 0.55, 1]),
  circOut: Kn([0.55, 0, 1, 0.45]),
  backIn: Kn([0.31, 0.01, 0.66, -0.59]),
  backOut: Kn([0.33, 1.53, 0.69, 0.99])
};
function dp(e) {
  if (e)
    return lp(e) ? Kn(e) : Array.isArray(e) ? e.map(dp) : up[e];
}
function a_(e, t, r, { delay: n = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const c = { [t]: r };
  l && (c.offset = l);
  const u = dp(s);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: n,
    duration: o,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
function s_(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const fp = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, l_ = 1e-7, c_ = 12;
function u_(e, t, r, n, o) {
  let i, a, s = 0;
  do
    a = t + (r - t) / 2, i = fp(a, n, o) - e, i > 0 ? r = a : t = a;
  while (Math.abs(i) > l_ && ++s < c_);
  return a;
}
function jo(e, t, r, n) {
  if (e === t && r === n)
    return $e;
  const o = (i) => u_(i, 0, 1, e, r);
  return (i) => i === 0 || i === 1 ? i : fp(o(i), t, n);
}
const d_ = jo(0.42, 0, 1, 1), f_ = jo(0, 0, 0.58, 1), pp = jo(0.42, 0, 0.58, 1), p_ = (e) => Array.isArray(e) && typeof e[0] != "number", hp = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, mp = (e) => (t) => 1 - e(1 - t), gp = (e) => 1 - Math.sin(Math.acos(e)), Cl = mp(gp), h_ = hp(Cl), vp = jo(0.33, 1.53, 0.69, 0.99), _l = mp(vp), m_ = hp(_l), g_ = (e) => (e *= 2) < 1 ? 0.5 * _l(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Pu = {
  linear: $e,
  easeIn: d_,
  easeInOut: pp,
  easeOut: f_,
  circIn: gp,
  circInOut: h_,
  circOut: Cl,
  backIn: _l,
  backInOut: m_,
  backOut: vp,
  anticipate: g_
}, Eu = (e) => {
  if (Array.isArray(e)) {
    $t(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, r, n, o] = e;
    return jo(t, r, n, o);
  } else if (typeof e == "string")
    return $t(Pu[e] !== void 0, `Invalid easing type '${e}'`), Pu[e];
  return e;
}, kl = (e, t) => (r) => !!(Ao(r) && vC.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), bp = (e, t, r) => (n) => {
  if (!Ao(n))
    return n;
  const [o, i, a, s] = n.match(da);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [r]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, v_ = (e) => Cr(0, 255, e), rs = {
  ...Hr,
  transform: (e) => Math.round(v_(e))
}, Br = {
  test: kl("rgb", "red"),
  parse: bp("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + rs.transform(e) + ", " + rs.transform(t) + ", " + rs.transform(r) + ", " + no(ro.transform(n)) + ")"
};
function b_(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const As = {
  test: kl("#"),
  parse: b_,
  transform: Br.transform
}, on = {
  test: kl("hsl", "hue"),
  parse: bp("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + Nt.transform(no(t)) + ", " + Nt.transform(no(r)) + ", " + no(ro.transform(n)) + ")"
}, Xe = {
  test: (e) => Br.test(e) || As.test(e) || on.test(e),
  parse: (e) => Br.test(e) ? Br.parse(e) : on.test(e) ? on.parse(e) : As.parse(e),
  transform: (e) => Ao(e) ? e : e.hasOwnProperty("red") ? Br.transform(e) : on.transform(e)
}, ke = (e, t, r) => -r * e + r * t + e;
function ns(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function y_({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    o = ns(l, s, e + 1 / 3), i = ns(l, s, e), a = ns(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: n
  };
}
const os = (e, t, r) => {
  const n = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, x_ = [As, Br, on], S_ = (e) => x_.find((t) => t.test(e));
function $u(e) {
  const t = S_(e);
  $t(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
  let r = t.parse(e);
  return t === on && (r = y_(r)), r;
}
const yp = (e, t) => {
  const r = $u(e), n = $u(t), o = { ...r };
  return (i) => (o.red = os(r.red, n.red, i), o.green = os(r.green, n.green, i), o.blue = os(r.blue, n.blue, i), o.alpha = ke(r.alpha, n.alpha, i), Br.transform(o));
};
function w_(e) {
  var t, r;
  return isNaN(e) && Ao(e) && (((t = e.match(da)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(Uf)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const xp = {
  regex: mC,
  countKey: "Vars",
  token: "${v}",
  parse: $e
}, Sp = {
  regex: Uf,
  countKey: "Colors",
  token: "${c}",
  parse: Xe.parse
}, wp = {
  regex: da,
  countKey: "Numbers",
  token: "${n}",
  parse: Hr.parse
};
function is(e, { regex: t, countKey: r, token: n, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + r] = i.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...i.map(o)));
}
function Li(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && is(r, xp), is(r, Sp), is(r, wp), r;
}
function Cp(e) {
  return Li(e).values;
}
function _p(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = Li(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < n ? s = s.replace(xp.token, a[l]) : l < n + r ? s = s.replace(Sp.token, Xe.transform(a[l])) : s = s.replace(wp.token, no(a[l]));
    return s;
  };
}
const C_ = (e) => typeof e == "number" ? 0 : e;
function __(e) {
  const t = Cp(e);
  return _p(e)(t.map(C_));
}
const _r = {
  test: w_,
  parse: Cp,
  createTransformer: _p,
  getAnimatableNone: __
}, kp = (e, t) => (r) => `${r > 0 ? t : e}`;
function Tp(e, t) {
  return typeof e == "number" ? (r) => ke(e, t, r) : Xe.test(e) ? yp(e, t) : e.startsWith("var(") ? kp(e, t) : Ep(e, t);
}
const Pp = (e, t) => {
  const r = [...e], n = r.length, o = e.map((i, a) => Tp(i, t[a]));
  return (i) => {
    for (let a = 0; a < n; a++)
      r[a] = o[a](i);
    return r;
  };
}, k_ = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = Tp(e[o], t[o]));
  return (o) => {
    for (const i in n)
      r[i] = n[i](o);
    return r;
  };
}, Ep = (e, t) => {
  const r = _r.createTransformer(t), n = Li(e), o = Li(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? xr(Pp(n.values, o.values), r) : (Oo(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), kp(e, t));
}, yo = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, Au = (e, t) => (r) => ke(e, t, r);
function T_(e) {
  return typeof e == "number" ? Au : typeof e == "string" ? Xe.test(e) ? yp : Ep : Array.isArray(e) ? Pp : typeof e == "object" ? k_ : Au;
}
function P_(e, t, r) {
  const n = [], o = r || T_(e[0]), i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || $e : t;
      s = xr(l, s);
    }
    n.push(s);
  }
  return n;
}
function $p(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  if ($t(i === t.length, "Both input and output ranges must be the same length"), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = P_(t, n, o), s = a.length, l = (c) => {
    let u = 0;
    if (s > 1)
      for (; u < e.length - 2 && !(c < e[u + 1]); u++)
        ;
    const d = yo(e[u], e[u + 1], c);
    return a[u](d);
  };
  return r ? (c) => l(Cr(e[0], e[i - 1], c)) : l;
}
function E_(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = yo(0, t, n);
    e.push(ke(r, 1, o));
  }
}
function $_(e) {
  const t = [0];
  return E_(t, e.length - 1), t;
}
function A_(e, t) {
  return e.map((r) => r * t);
}
function R_(e, t) {
  return e.map(() => t || pp).splice(0, e.length - 1);
}
function Ni({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = p_(n) ? n.map(Eu) : Eu(n), i = {
    done: !1,
    value: t[0]
  }, a = A_(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : $_(t),
    e
  ), s = $p(a, t, {
    ease: Array.isArray(o) ? o : R_(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function Ap(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const O_ = 5;
function Rp(e, t, r) {
  const n = Math.max(t - O_, 0);
  return Ap(r - e(n), t - n);
}
const as = 1e-3, j_ = 0.01, Ru = 10, M_ = 0.05, D_ = 1;
function z_({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, i;
  Oo(e <= Sr(Ru), "Spring duration must be 10 seconds or less");
  let a = 1 - t;
  a = Cr(M_, D_, a), e = Cr(j_, Ru, ir(e)), a < 1 ? (o = (c) => {
    const u = c * a, d = u * e, f = u - r, p = Rs(c, a), g = Math.exp(-d);
    return as - f / p * g;
  }, i = (c) => {
    const d = c * a * e, f = d * r + r, p = Math.pow(a, 2) * Math.pow(c, 2) * e, g = Math.exp(-d), v = Rs(Math.pow(c, 2), a);
    return (-o(c) + as > 0 ? -1 : 1) * ((f - p) * g) / v;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), d = (c - r) * e + 1;
    return -as + u * d;
  }, i = (c) => {
    const u = Math.exp(-c * e), d = (r - c) * (e * e);
    return u * d;
  });
  const s = 5 / e, l = V_(o, i, s);
  if (e = Sr(e), isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * n;
    return {
      stiffness: c,
      damping: a * 2 * Math.sqrt(n * c),
      duration: e
    };
  }
}
const B_ = 12;
function V_(e, t, r) {
  let n = r;
  for (let o = 1; o < B_; o++)
    n = n - e(n) / t(n);
  return n;
}
function Rs(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const I_ = ["duration", "bounce"], F_ = ["stiffness", "damping", "mass"];
function Ou(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function L_(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Ou(e, F_) && Ou(e, I_)) {
    const r = z_(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Op({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: c, velocity: u, duration: d, isResolvedFromDuration: f } = L_(n), p = u ? -ir(u) : 0, g = l / (2 * Math.sqrt(s * c)), v = i - o, S = ir(Math.sqrt(s / c)), _ = Math.abs(v) < 5;
  r || (r = _ ? 0.01 : 2), t || (t = _ ? 5e-3 : 0.5);
  let b;
  if (g < 1) {
    const C = Rs(S, g);
    b = (k) => {
      const w = Math.exp(-g * S * k);
      return i - w * ((p + g * S * v) / C * Math.sin(C * k) + v * Math.cos(C * k));
    };
  } else if (g === 1)
    b = (C) => i - Math.exp(-S * C) * (v + (p + S * v) * C);
  else {
    const C = S * Math.sqrt(g * g - 1);
    b = (k) => {
      const w = Math.exp(-g * S * k), A = Math.min(C * k, 300);
      return i - w * ((p + g * S * v) * Math.sinh(A) + C * v * Math.cosh(A)) / C;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (C) => {
      const k = b(C);
      if (f)
        a.done = C >= d;
      else {
        let w = p;
        C !== 0 && (g < 1 ? w = Rp(b, C, k) : w = 0);
        const A = Math.abs(w) <= r, E = Math.abs(i - k) <= t;
        a.done = A && E;
      }
      return a.value = a.done ? i : k, a;
    }
  };
}
function ju({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (M) => s !== void 0 && M < s || l !== void 0 && M > l, g = (M) => s === void 0 ? l : l === void 0 || Math.abs(s - M) < Math.abs(l - M) ? s : l;
  let v = r * t;
  const S = d + v, _ = a === void 0 ? S : a(S);
  _ !== S && (v = _ - d);
  const b = (M) => -v * Math.exp(-M / n), C = (M) => _ + b(M), k = (M) => {
    const D = b(M), O = C(M);
    f.done = Math.abs(D) <= c, f.value = f.done ? _ : O;
  };
  let w, A;
  const E = (M) => {
    p(f.value) && (w = M, A = Op({
      keyframes: [f.value, g(f.value)],
      velocity: Rp(C, M, f.value),
      damping: o,
      stiffness: i,
      restDelta: c,
      restSpeed: u
    }));
  };
  return E(0), {
    calculatedDuration: null,
    next: (M) => {
      let D = !1;
      return !A && w === void 0 && (D = !0, k(M), E(M)), w !== void 0 && M > w ? A.next(M - w) : (!D && k(M), f);
    }
  };
}
const N_ = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => me.update(t, !0),
    stop: () => sr(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Ne.isProcessing ? Ne.timestamp : performance.now()
  };
}, Mu = 2e4;
function Du(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < Mu; )
    t += r, n = e.next(t);
  return t >= Mu ? 1 / 0 : t;
}
const W_ = {
  decay: ju,
  inertia: ju,
  tween: Ni,
  keyframes: Ni,
  spring: Op
};
function Wi({ autoplay: e = !0, delay: t = 0, driver: r = N_, keyframes: n, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: c, onComplete: u, onUpdate: d, ...f }) {
  let p = 1, g = !1, v, S;
  const _ = () => {
    S = new Promise((Y) => {
      v = Y;
    });
  };
  _();
  let b;
  const C = W_[o] || Ni;
  let k;
  C !== Ni && typeof n[0] != "number" && (k = $p([0, 100], n, {
    clamp: !1
  }), n = [0, 100]);
  const w = C({ ...f, keyframes: n });
  let A;
  s === "mirror" && (A = C({
    ...f,
    keyframes: [...n].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let E = "idle", M = null, D = null, O = null;
  w.calculatedDuration === null && i && (w.calculatedDuration = Du(w));
  const { calculatedDuration: I } = w;
  let le = 1 / 0, N = 1 / 0;
  I !== null && (le = I + a, N = le * (i + 1) - a);
  let W = 0;
  const U = (Y) => {
    if (D === null)
      return;
    p > 0 && (D = Math.min(D, Y)), p < 0 && (D = Math.min(Y - N / p, D)), M !== null ? W = M : W = Math.round(Y - D) * p;
    const Ce = W - t * (p >= 0 ? 1 : -1), H = p >= 0 ? Ce < 0 : Ce > N;
    W = Math.max(Ce, 0), E === "finished" && M === null && (W = N);
    let Ae = W, de = w;
    if (i) {
      const Le = W / le;
      let Ie = Math.floor(Le), De = Le % 1;
      !De && Le >= 1 && (De = 1), De === 1 && Ie--, Ie = Math.min(Ie, i + 1);
      const R = !!(Ie % 2);
      R && (s === "reverse" ? (De = 1 - De, a && (De -= a / le)) : s === "mirror" && (de = A));
      let Pe = Cr(0, 1, De);
      W > N && (Pe = s === "reverse" && R ? 1 : 0), Ae = Pe * le;
    }
    const he = H ? { done: !1, value: n[0] } : de.next(Ae);
    k && (he.value = k(he.value));
    let { done: Ve } = he;
    !H && I !== null && (Ve = p >= 0 ? W >= N : W <= 0);
    const ye = M === null && (E === "finished" || E === "running" && Ve);
    return d && d(he.value), ye && je(), he;
  }, K = () => {
    b && b.stop(), b = void 0;
  }, Q = () => {
    E = "idle", K(), v(), _(), D = O = null;
  }, je = () => {
    E = "finished", u && u(), K(), v();
  }, be = () => {
    if (g)
      return;
    b || (b = r(U));
    const Y = b.now();
    l && l(), M !== null ? D = Y - M : (!D || E === "finished") && (D = Y), E === "finished" && _(), O = D, M = null, E = "running", b.start();
  };
  e && be();
  const Me = {
    then(Y, Ce) {
      return S.then(Y, Ce);
    },
    get time() {
      return ir(W);
    },
    set time(Y) {
      Y = Sr(Y), W = Y, M !== null || !b || p === 0 ? M = Y : D = b.now() - Y / p;
    },
    get duration() {
      const Y = w.calculatedDuration === null ? Du(w) : w.calculatedDuration;
      return ir(Y);
    },
    get speed() {
      return p;
    },
    set speed(Y) {
      Y === p || !b || (p = Y, Me.time = ir(W));
    },
    get state() {
      return E;
    },
    play: be,
    pause: () => {
      E = "paused", M = W;
    },
    stop: () => {
      g = !0, E !== "idle" && (E = "idle", c && c(), Q());
    },
    cancel: () => {
      O !== null && U(O), Q();
    },
    complete: () => {
      E = "finished";
    },
    sample: (Y) => (D = 0, U(Y))
  };
  return Me;
}
function H_(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const U_ = H_(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Y_ = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), ii = 10, q_ = 2e4, G_ = (e, t) => t.type === "spring" || e === "backgroundColor" || !cp(t.ease);
function K_(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(U_() && Y_.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const c = () => {
    l = new Promise((b) => {
      s = b;
    });
  };
  c();
  let { keyframes: u, duration: d = 300, ease: f, times: p } = o;
  if (G_(t, o)) {
    const b = Wi({
      ...o,
      repeat: 0,
      delay: 0
    });
    let C = { done: !1, value: u[0] };
    const k = [];
    let w = 0;
    for (; !C.done && w < q_; )
      C = b.sample(w), k.push(C.value), w += ii;
    p = void 0, u = k, d = w - ii, f = "linear";
  }
  const g = a_(e.owner.current, t, u, {
    ...o,
    duration: d,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease: f,
    times: p
  });
  o.syncStart && (g.startTime = Ne.isProcessing ? Ne.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
  const v = () => g.cancel(), S = () => {
    me.update(v), s(), c();
  };
  return g.onfinish = () => {
    e.set(s_(u, o)), n && n(), S();
  }, {
    then(b, C) {
      return l.then(b, C);
    },
    attachTimeline(b) {
      return g.timeline = b, g.onfinish = null, $e;
    },
    get time() {
      return ir(g.currentTime || 0);
    },
    set time(b) {
      g.currentTime = Sr(b);
    },
    get speed() {
      return g.playbackRate;
    },
    set speed(b) {
      g.playbackRate = b;
    },
    get duration() {
      return ir(d);
    },
    play: () => {
      a || (g.play(), sr(v));
    },
    pause: () => g.pause(),
    stop: () => {
      if (a = !0, g.playState === "idle")
        return;
      const { currentTime: b } = g;
      if (b) {
        const C = Wi({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(C.sample(b - ii).value, C.sample(b).value, ii);
      }
      S();
    },
    complete: () => g.finish(),
    cancel: S
  };
}
function X_({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (r && r(e[e.length - 1]), n && n(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: $e,
    pause: $e,
    stop: $e,
    then: (i) => (i(), Promise.resolve()),
    cancel: $e,
    complete: $e
  });
  return t ? Wi({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const Z_ = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, J_ = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Q_ = {
  type: "keyframes",
  duration: 0.8
}, ek = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, tk = (e, { keyframes: t }) => t.length > 2 ? Q_ : Wr.has(e) ? e.startsWith("scale") ? J_(t[1]) : Z_ : ek, Os = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(_r.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), rk = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function nk(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(da) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let i = rk.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + "(" + i + o + ")";
}
const ok = /([a-z-]*)\(.*?\)/g, js = {
  ..._r,
  getAnimatableNone: (e) => {
    const t = e.match(ok);
    return t ? t.map(nk).join(" ") : e;
  }
}, ik = {
  ...Yf,
  // Color props
  color: Xe,
  backgroundColor: Xe,
  outlineColor: Xe,
  fill: Xe,
  stroke: Xe,
  // Border props
  borderColor: Xe,
  borderTopColor: Xe,
  borderRightColor: Xe,
  borderBottomColor: Xe,
  borderLeftColor: Xe,
  filter: js,
  WebkitFilter: js
}, Tl = (e) => ik[e];
function jp(e, t) {
  let r = Tl(e);
  return r !== js && (r = _r), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const Mp = (e) => /^0[^.\s]+$/.test(e);
function ak(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || Mp(e);
}
function sk(e, t, r, n) {
  const o = Os(t, r);
  let i;
  Array.isArray(r) ? i = [...r] : i = [null, r];
  const a = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let c = 0; c < i.length; c++)
    i[c] === null && (i[c] = c === 0 ? a : i[c - 1]), ak(i[c]) && l.push(c), typeof i[c] == "string" && i[c] !== "none" && i[c] !== "0" && (s = i[c]);
  if (o && l.length && s)
    for (let c = 0; c < l.length; c++) {
      const u = l[c];
      i[u] = jp(t, s);
    }
  return i;
}
function lk({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
function Dp(e, t) {
  return e[t] || e.default || e;
}
const Pl = (e, t, r, n = {}) => (o) => {
  const i = Dp(n, e) || {}, a = i.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - Sr(a);
  const l = sk(t, e, r, i), c = l[0], u = l[l.length - 1], d = Os(e, c), f = Os(e, u);
  Oo(d === f, `You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);
  let p = {
    keyframes: l,
    velocity: t.getVelocity(),
    ease: "easeOut",
    ...i,
    delay: -s,
    onUpdate: (g) => {
      t.set(g), i.onUpdate && i.onUpdate(g);
    },
    onComplete: () => {
      o(), i.onComplete && i.onComplete();
    }
  };
  if (lk(i) || (p = {
    ...p,
    ...tk(e, p)
  }), p.duration && (p.duration = Sr(p.duration)), p.repeatDelay && (p.repeatDelay = Sr(p.repeatDelay)), !d || !f || i_.current || i.type === !1)
    return X_(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const g = K_(t, e, p);
    if (g)
      return g;
  }
  return Wi(p);
};
function Hi(e) {
  return !!(st(e) && e.add);
}
const zp = (e) => /^\-?\d*\.?\d+$/.test(e);
function El(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function $l(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Al {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return El(this.subscriptions, t), () => $l(this.subscriptions, t);
  }
  notify(t, r, n) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, r, n);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, r, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const zu = /* @__PURE__ */ new Set();
function Rl(e, t, r) {
  e || zu.has(t) || (console.warn(t), r && console.warn(r), zu.add(t));
}
const ck = (e) => !isNaN(parseFloat(e));
class uk {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, r = {}) {
    this.version = "10.16.5", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (n, o = !0) => {
      this.prev = this.current, this.current = n;
      const { delta: i, timestamp: a } = Ne;
      this.lastUpdated !== a && (this.timeDelta = i, this.lastUpdated = a, me.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => me.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: n }) => {
      n !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = ck(this.current), this.owner = r.owner;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return process.env.NODE_ENV !== "production" && Rl(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new Al());
    const n = this.events[t].add(r);
    return t === "change" ? () => {
      n(), me.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : n;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, r) {
    this.passiveEffect = t, this.stopPassiveEffect = r;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, r = !0) {
    !r || !this.passiveEffect ? this.updateAndNotify(t, r) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, r, n) {
    this.set(r), this.prev = t, this.timeDelta = n;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t) {
    this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    return this.canTrackVelocity ? (
      // These casts could be avoided if parseFloat would be typed better
      Ap(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
    ) : 0;
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = t(r), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function bn(e, t) {
  return new uk(e, t);
}
const Bp = (e) => (t) => t.test(e), dk = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Vp = [Hr, F, Nt, gr, yC, bC, dk], Ln = (e) => Vp.find(Bp(e)), fk = [...Vp, Xe, _r], pk = (e) => fk.find(Bp(e));
function hk(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, bn(r));
}
function mk(e, t) {
  const r = pa(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r ? e.makeTargetAnimatable(r, !1) : {};
  i = { ...i, ...n };
  for (const a in i) {
    const s = jC(i[a]);
    hk(e, a, s);
  }
}
function gk(e, t, r) {
  var n, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], c = t[l];
      let u = null;
      Array.isArray(c) && (u = c[0]), u === null && (u = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), u != null && (typeof u == "string" && (zp(u) || Mp(u)) ? u = parseFloat(u) : !pk(u) && _r.test(c) && (u = jp(l, c)), e.addValue(l, bn(u, { owner: e })), r[l] === void 0 && (r[l] = u), u !== null && e.setBaseTarget(l, u));
    }
}
function vk(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function bk(e, t, r) {
  const n = {};
  for (const o in e) {
    const i = vk(o, t);
    if (i !== void 0)
      n[o] = i;
    else {
      const a = r.getValue(o);
      a && (n[o] = a.get());
    }
  }
  return n;
}
function yk({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function Ip(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (i = n);
  const c = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || u && yk(u, d))
      continue;
    const g = {
      delay: r,
      elapsed: 0,
      ...i
    };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const S = e.getProps()[o_];
      S && (g.elapsed = window.HandoffAppearAnimations(S, d, f, me), g.syncStart = !0);
    }
    f.start(Pl(d, f, p, e.shouldReduceMotion && Wr.has(d) ? { type: !1 } : g));
    const v = f.animation;
    Hi(l) && (l.add(d), v.then(() => l.remove(d))), c.push(v);
  }
  return a && Promise.all(c).then(() => {
    a && mk(e, a);
  }), c;
}
function Ms(e, t, r = {}) {
  const n = pa(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const i = n ? () => Promise.all(Ip(e, n, r)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: c = 0, staggerChildren: u, staggerDirection: d } = o;
    return xk(e, t, c + l, u, d, r);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, c] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => c());
  } else
    return Promise.all([i(), a(r.delay)]);
}
function xk(e, t, r = 0, n = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? (c = 0) => c * n : (c = 0) => s - c * n;
  return Array.from(e.variantChildren).sort(Sk).forEach((c, u) => {
    c.notify("AnimationStart", t), a.push(Ms(c, t, {
      ...i,
      delay: r + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function Sk(e, t) {
  return e.sortNodePosition(t);
}
function wk(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => Ms(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = Ms(e, t, r);
  else {
    const o = typeof t == "function" ? pa(e, t, r.custom) : t;
    n = Promise.all(Ip(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const Ck = [...fl].reverse(), _k = fl.length;
function kk(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => wk(e, r, n)));
}
function Tk(e) {
  let t = kk(e);
  const r = Ek();
  let n = !0;
  const o = (l, c) => {
    const u = pa(e, c);
    if (u) {
      const { transition: d, transitionEnd: f, ...p } = u;
      l = { ...l, ...p, ...f };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function a(l, c) {
    const u = e.getProps(), d = e.getVariantContext(!0) || {}, f = [], p = /* @__PURE__ */ new Set();
    let g = {}, v = 1 / 0;
    for (let _ = 0; _ < _k; _++) {
      const b = Ck[_], C = r[b], k = u[b] !== void 0 ? u[b] : d[b], w = vo(k), A = b === c ? C.isActive : null;
      A === !1 && (v = _);
      let E = k === d[b] && k !== u[b] && w;
      if (E && n && e.manuallyAnimateOnMount && (E = !1), C.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !C.isActive && A === null || // If we didn't and don't have any defined prop for this animation type
      !k && !C.prevProp || // Or if the prop doesn't define an animation
      ca(k) || typeof k == "boolean")
        continue;
      const M = Pk(C.prevProp, k);
      let D = M || // If we're making this variant active, we want to always make it active
      b === c && C.isActive && !E && w || // If we removed a higher-priority variant (i is in reverse order)
      _ > v && w;
      const O = Array.isArray(k) ? k : [k];
      let I = O.reduce(o, {});
      A === !1 && (I = {});
      const { prevResolvedValues: le = {} } = C, N = {
        ...le,
        ...I
      }, W = (U) => {
        D = !0, p.delete(U), C.needsAnimating[U] = !0;
      };
      for (const U in N) {
        const K = I[U], Q = le[U];
        g.hasOwnProperty(U) || (K !== Q ? Fi(K) && Fi(Q) ? !sp(K, Q) || M ? W(U) : C.protectedKeys[U] = !0 : K !== void 0 ? W(U) : p.add(U) : K !== void 0 && p.has(U) ? W(U) : C.protectedKeys[U] = !0);
      }
      C.prevProp = k, C.prevResolvedValues = I, C.isActive && (g = { ...g, ...I }), n && e.blockInitialAnimation && (D = !1), D && !E && f.push(...O.map((U) => ({
        animation: U,
        options: { type: b, ...l }
      })));
    }
    if (p.size) {
      const _ = {};
      p.forEach((b) => {
        const C = e.getBaseTarget(b);
        C !== void 0 && (_[b] = C);
      }), f.push({ animation: _ });
    }
    let S = !!f.length;
    return n && u.initial === !1 && !e.manuallyAnimateOnMount && (S = !1), n = !1, S ? t(f) : Promise.resolve();
  }
  function s(l, c, u) {
    var d;
    if (r[l].isActive === c)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((p) => {
      var g;
      return (g = p.animationState) === null || g === void 0 ? void 0 : g.setActive(l, c);
    }), r[l].isActive = c;
    const f = a(u, l);
    for (const p in r)
      r[p].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => r
  };
}
function Pk(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !sp(t, e) : !1;
}
function Ar(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Ek() {
  return {
    animate: Ar(!0),
    whileInView: Ar(),
    whileHover: Ar(),
    whileTap: Ar(),
    whileDrag: Ar(),
    whileFocus: Ar(),
    exit: Ar()
  };
}
class $k extends kr {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Tk(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), ca(t) && (this.unmount = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
}
let Ak = 0;
class Rk extends kr {
  constructor() {
    super(...arguments), this.id = Ak++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: r, custom: n } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o)
      return;
    const i = this.node.animationState.setActive("exit", !t, { custom: n ?? this.node.getProps().custom });
    r && !t && i.then(() => r(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const Ok = {
  animation: {
    Feature: $k
  },
  exit: {
    Feature: Rk
  }
}, Bu = (e, t) => Math.abs(e - t);
function jk(e, t) {
  const r = Bu(e.x, t.x), n = Bu(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class Fp {
  constructor(t, r, { transformPagePoint: n } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = ls(this.lastMoveEventInfo, this.history), u = this.startEvent !== null, d = jk(c.offset, { x: 0, y: 0 }) >= 3;
      if (!u && !d)
        return;
      const { point: f } = c, { timestamp: p } = Ne;
      this.history.push({ ...f, timestamp: p });
      const { onStart: g, onMove: v } = this.handlers;
      u || (g && g(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, u) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = ss(u, this.transformPagePoint), me.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, u) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: d, onSessionEnd: f } = this.handlers, p = ls(c.type === "pointercancel" ? this.lastMoveEventInfo : ss(u, this.transformPagePoint), this.history);
      this.startEvent && d && d(c, p), f && f(c, p);
    }, !rp(t))
      return;
    this.handlers = r, this.transformPagePoint = n;
    const o = fa(t), i = ss(o, this.transformPagePoint), { point: a } = i, { timestamp: s } = Ne;
    this.history = [{ ...a, timestamp: s }];
    const { onSessionStart: l } = r;
    l && l(t, ls(i, this.history)), this.removeListeners = xr(or(window, "pointermove", this.handlePointerMove), or(window, "pointerup", this.handlePointerUp), or(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), sr(this.updatePoint);
  }
}
function ss(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Vu(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ls({ point: e }, t) {
  return {
    point: e,
    delta: Vu(e, Lp(t)),
    offset: Vu(e, Mk(t)),
    velocity: Dk(t, 0.1)
  };
}
function Mk(e) {
  return e[0];
}
function Lp(e) {
  return e[e.length - 1];
}
function Dk(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = Lp(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > Sr(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const i = ir(o.timestamp - n.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - n.x) / i,
    y: (o.y - n.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function pt(e) {
  return e.max - e.min;
}
function Ds(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function Iu(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = ke(t.min, t.max, e.origin), e.scale = pt(r) / pt(t), (Ds(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = ke(r.min, r.max, e.origin) - e.originPoint, (Ds(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function oo(e, t, r, n) {
  Iu(e.x, t.x, r.x, n ? n.originX : void 0), Iu(e.y, t.y, r.y, n ? n.originY : void 0);
}
function Fu(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + pt(t);
}
function zk(e, t, r) {
  Fu(e.x, t.x, r.x), Fu(e.y, t.y, r.y);
}
function Lu(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + pt(t);
}
function io(e, t, r) {
  Lu(e.x, t.x, r.x), Lu(e.y, t.y, r.y);
}
function Bk(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? ke(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? ke(r, e, n.max) : Math.min(e, r)), e;
}
function Nu(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function Vk(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: Nu(e.x, r, o),
    y: Nu(e.y, t, n)
  };
}
function Wu(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function Ik(e, t) {
  return {
    x: Wu(e.x, t.x),
    y: Wu(e.y, t.y)
  };
}
function Fk(e, t) {
  let r = 0.5;
  const n = pt(e), o = pt(t);
  return o > n ? r = yo(t.min, t.max - n, e.min) : n > o && (r = yo(e.min, e.max - o, t.min)), Cr(0, 1, r);
}
function Lk(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const zs = 0.35;
function Nk(e = zs) {
  return e === !1 ? e = 0 : e === !0 && (e = zs), {
    x: Hu(e, "left", "right"),
    y: Hu(e, "top", "bottom")
  };
}
function Hu(e, t, r) {
  return {
    min: Uu(e, t),
    max: Uu(e, r)
  };
}
function Uu(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Yu = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), an = () => ({
  x: Yu(),
  y: Yu()
}), qu = () => ({ min: 0, max: 0 }), ze = () => ({
  x: qu(),
  y: qu()
});
function zt(e) {
  return [e("x"), e("y")];
}
function Np({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function Wk({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Hk(e, t) {
  if (!t)
    return e;
  const r = t({ x: e.left, y: e.top }), n = t({ x: e.right, y: e.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: n.y,
    right: n.x
  };
}
function cs(e) {
  return e === void 0 || e === 1;
}
function Bs({ scale: e, scaleX: t, scaleY: r }) {
  return !cs(e) || !cs(t) || !cs(r);
}
function Rr(e) {
  return Bs(e) || Wp(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Wp(e) {
  return Gu(e.x) || Gu(e.y);
}
function Gu(e) {
  return e && e !== "0%";
}
function Ui(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function Ku(e, t, r, n, o) {
  return o !== void 0 && (e = Ui(e, o, n)), Ui(e, r, n) + t;
}
function Vs(e, t = 0, r = 1, n, o) {
  e.min = Ku(e.min, t, r, n, o), e.max = Ku(e.max, t, r, n, o);
}
function Hp(e, { x: t, y: r }) {
  Vs(e.x, t.translate, t.scale, t.originPoint), Vs(e.y, r.translate, r.scale, r.originPoint);
}
function Uk(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    i = r[s], a = i.projectionDelta;
    const l = i.instance;
    l && l.style && l.style.display === "contents" || (n && i.options.layoutScroll && i.scroll && i !== i.root && sn(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, Hp(e, a)), n && Rr(i.latestValues) && sn(e, i.latestValues));
  }
  t.x = Xu(t.x), t.y = Xu(t.y);
}
function Xu(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function vr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Zu(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = ke(e.min, e.max, i);
  Vs(e, t[r], t[n], a, t.scale);
}
const Yk = ["x", "scaleX", "originX"], qk = ["y", "scaleY", "originY"];
function sn(e, t) {
  Zu(e.x, t, Yk), Zu(e.y, t, qk);
}
function Up(e, t) {
  return Np(Hk(e.getBoundingClientRect(), t));
}
function Gk(e, t, r) {
  const n = Up(e, r), { scroll: o } = t;
  return o && (vr(n.x, o.offset.x), vr(n.y, o.offset.y)), n;
}
const Kk = /* @__PURE__ */ new WeakMap();
class Xk {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ze(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), r && this.snapToCursor(fa(l, "page").point);
    }, i = (l, c) => {
      const { drag: u, dragPropagation: d, onDragStart: f } = this.getProps();
      if (u && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = op(u), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), zt((g) => {
        let v = this.getAxisMotionValue(g).get() || 0;
        if (Nt.test(v)) {
          const { projection: S } = this.visualElement;
          if (S && S.layout) {
            const _ = S.layout.layoutBox[g];
            _ && (v = pt(_) * (parseFloat(v) / 100));
          }
        }
        this.originPoint[g] = v;
      }), f && me.update(() => f(l, c), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (l, c) => {
      const { dragPropagation: u, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!u && !this.openGlobalLock)
        return;
      const { offset: g } = c;
      if (d && this.currentDirection === null) {
        this.currentDirection = Zk(g), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", c.point, g), this.updateAxis("y", c.point, g), this.visualElement.render(), p && p(l, c);
    }, s = (l, c) => this.stop(l, c);
    this.panSession = new Fp(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  }
  stop(t, r) {
    const n = this.isDragging;
    if (this.cancel(), !n)
      return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && me.update(() => i(t, r));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: n } = this.getProps();
    !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), r && r.setActive("whileDrag", !1);
  }
  updateAxis(t, r, n) {
    const { drag: o } = this.getProps();
    if (!n || !ai(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (a = Bk(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(), { layout: n } = this.visualElement.projection || {}, o = this.constraints;
    t && nn(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = Vk(n.layoutBox, t) : this.constraints = !1, this.elastic = Nk(r), o !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && zt((i) => {
      this.getAxisMotionValue(i) && (this.constraints[i] = Lk(n.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !nn(t))
      return !1;
    const n = t.current;
    $t(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = Gk(n, o.root, this.visualElement.getTransformPagePoint());
    let a = Ik(o.layout.layoutBox, i);
    if (r) {
      const s = r(Wk(a));
      this.hasMutatedConstraints = !!s, s && (a = Np(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, c = zt((u) => {
      if (!ai(u, r, this.currentDirection))
        return;
      let d = l && l[u] || {};
      a && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, p = o ? 40 : 1e7, g = {
        type: "inertia",
        velocity: n ? t[u] : 0,
        bounceStiffness: f,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...d
      };
      return this.startAxisValueAnimation(u, g);
    });
    return Promise.all(c).then(s);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return n.start(Pl(t, n, 0, r));
  }
  stopAnimation() {
    zt((t) => this.getAxisMotionValue(t).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const r = "_drag" + t.toUpperCase(), n = this.visualElement.getProps(), o = n[r];
    return o || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    zt((r) => {
      const { drag: n } = this.getProps();
      if (!ai(r, n, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[r];
        i.set(t[r] - ke(a, s, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: r } = this.getProps(), { projection: n } = this.visualElement;
    if (!nn(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    zt((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = Fk({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), zt((a) => {
      if (!ai(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: c } = this.constraints[a];
      s.set(ke(l, c, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Kk.set(this.visualElement, this);
    const t = this.visualElement.current, r = or(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      nn(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const a = rr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (zt((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += l[u].translate, d.set(d.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), r(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = zs, dragMomentum: s = !0 } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s
    };
  }
}
function ai(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function Zk(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class Jk extends kr {
  constructor(t) {
    super(t), this.removeGroupControls = $e, this.removeListeners = $e, this.controls = new Xk(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || $e;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ju = (e) => (t, r) => {
  e && me.update(() => e(t, r));
};
class Qk extends kr {
  constructor() {
    super(...arguments), this.removePointerDownListener = $e;
  }
  onPointerDown(t) {
    this.session = new Fp(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Ju(t),
      onStart: Ju(r),
      onMove: n,
      onEnd: (i, a) => {
        delete this.session, o && me.update(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = or(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function eT() {
  const e = Re(Eo);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = wo();
  return We(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function tT() {
  return rT(Re(Eo));
}
function rT(e) {
  return e === null ? !0 : e.isPresent;
}
const _i = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Qu(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Nn = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (F.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = Qu(e, t.target.x), n = Qu(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, nT = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = _r.parse(e);
    if (o.length > 5)
      return n;
    const i = _r.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= l;
    const c = ke(s, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= c), typeof o[3 + a] == "number" && (o[3 + a] /= c), i(o);
  }
};
class oT extends pn.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: i } = t;
    dC(iT), i && (r.group && r.group.add(i), n && n.register && o && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), _i.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: i } = this.props, a = n.projection;
    return a && (a.isPresent = i, o || t.layoutDependency !== r || r === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || me.postRender(() => {
      const s = a.getStack();
      (!s || !s.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), queueMicrotask(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(o), n && n.deregister && n.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Yp(e) {
  const [t, r] = eT(), n = Re(hl);
  return pn.createElement(oT, { ...e, layoutGroup: n, switchLayoutGroup: Re(Lf), isPresent: t, safeToRemove: r });
}
const iT = {
  borderRadius: {
    ...Nn,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Nn,
  borderTopRightRadius: Nn,
  borderBottomLeftRadius: Nn,
  borderBottomRightRadius: Nn,
  boxShadow: nT
}, qp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], aT = qp.length, ed = (e) => typeof e == "string" ? parseFloat(e) : e, td = (e) => typeof e == "number" || F.test(e);
function sT(e, t, r, n, o, i) {
  o ? (e.opacity = ke(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    lT(n)
  ), e.opacityExit = ke(t.opacity !== void 0 ? t.opacity : 1, 0, cT(n))) : i && (e.opacity = ke(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let a = 0; a < aT; a++) {
    const s = `border${qp[a]}Radius`;
    let l = rd(t, s), c = rd(r, s);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || td(l) === td(c) ? (e[s] = Math.max(ke(ed(l), ed(c), n), 0), (Nt.test(c) || Nt.test(l)) && (e[s] += "%")) : e[s] = c;
  }
  (t.rotate || r.rotate) && (e.rotate = ke(t.rotate || 0, r.rotate || 0, n));
}
function rd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const lT = Gp(0, 0.5, Cl), cT = Gp(0.5, 0.95, $e);
function Gp(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(yo(e, t, n));
}
function nd(e, t) {
  e.min = t.min, e.max = t.max;
}
function vt(e, t) {
  nd(e.x, t.x), nd(e.y, t.y);
}
function od(e, t, r, n, o) {
  return e -= t, e = Ui(e, 1 / r, n), o !== void 0 && (e = Ui(e, 1 / o, n)), e;
}
function uT(e, t = 0, r = 1, n = 0.5, o, i = e, a = e) {
  if (Nt.test(t) && (t = parseFloat(t), t = ke(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = ke(i.min, i.max, n);
  e === i && (s -= t), e.min = od(e.min, t, r, s, o), e.max = od(e.max, t, r, s, o);
}
function id(e, t, [r, n, o], i, a) {
  uT(e, t[r], t[n], t[o], t.scale, i, a);
}
const dT = ["x", "scaleX", "originX"], fT = ["y", "scaleY", "originY"];
function ad(e, t, r, n) {
  id(e.x, t, dT, r ? r.x : void 0, n ? n.x : void 0), id(e.y, t, fT, r ? r.y : void 0, n ? n.y : void 0);
}
function sd(e) {
  return e.translate === 0 && e.scale === 1;
}
function Kp(e) {
  return sd(e.x) && sd(e.y);
}
function pT(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function Xp(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function ld(e) {
  return pt(e.x) / pt(e.y);
}
class hT {
  constructor() {
    this.members = [];
  }
  add(t) {
    El(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if ($l(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((o) => t === o);
    if (r === 0)
      return !1;
    let n;
    for (let o = r; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        n = i;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(t, r) {
    const n = this.lead;
    if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
      n.instance && n.scheduleRender(), t.scheduleRender(), t.resumeFrom = n, r && (t.resumeFrom.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: n } = t;
      r.onExitComplete && r.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function cd(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (n = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: c, rotateY: u } = r;
    l && (n += `rotate(${l}deg) `), c && (n += `rotateX(${c}deg) `), u && (n += `rotateY(${u}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (n += `scale(${a}, ${s})`), n || "none";
}
const mT = (e, t) => e.depth - t.depth;
class gT {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    El(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    $l(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(mT), this.isDirty = !1, this.children.forEach(t);
  }
}
function vT(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const i = o - r;
    i >= t && (sr(n), e(i - t));
  };
  return me.read(n, !0), () => sr(n);
}
function bT(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function yT(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function xT(e, t, r) {
  const n = st(e) ? e : bn(e);
  return n.start(Pl("", n, t, r)), n.animation;
}
const ud = ["", "X", "Y", "Z"], dd = 1e3;
let ST = 0;
const Or = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function Zp({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = ST++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        Or.totalNodes = Or.resolvedTargetDeltas = Or.recalculatedProjection = 0, this.nodes.forEach(_T), this.nodes.forEach($T), this.nodes.forEach(AT), this.nodes.forEach(kT), bT(Or);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new gT());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Al()), this.eventHandlers.get(a).add(s);
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    /**
     * Lifecycles
     */
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = yT(a), this.instance = a;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (c || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = vT(f, 250), _i.hasAnimatedSinceResize && (_i.hasAnimatedSinceResize = !1, this.nodes.forEach(pd));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: g }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const v = this.options.transition || u.getDefaultTransition() || DT, { onLayoutAnimationStart: S, onLayoutAnimationComplete: _ } = u.getProps(), b = !this.targetLayout || !Xp(this.targetLayout, g) || p, C = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || C || f && (b || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, C);
          const k = {
            ...Dp(v, "layout"),
            onPlay: S,
            onComplete: _
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (k.delay = 0, k.type = !1), this.startAnimation(k);
        } else
          f || pd(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = g;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, sr(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(RT), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), a && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(fd);
        return;
      }
      this.isUpdating || this.nodes.forEach(PT), this.isUpdating = !1, this.nodes.forEach(ET), this.nodes.forEach(wT), this.nodes.forEach(CT), this.clearAllSnapshots();
      const s = performance.now();
      Ne.delta = Cr(0, 1e3 / 60, s - Ne.timestamp), Ne.timestamp = s, Ne.isProcessing = !0, Qa.update.process(Ne), Qa.preRender.process(Ne), Qa.render.process(Ne), Ne.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(TT), this.sharedNodes.forEach(OT);
    }
    scheduleUpdateProjection() {
      me.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      me.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = ze(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s && s.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0);
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (s = !1), s && (this.scroll = {
        animationId: this.root.animationId,
        phase: a,
        isRoot: n(this.instance),
        offset: r(this.instance)
      });
    }
    resetTransform() {
      if (!o)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !Kp(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      a && (s || Rr(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), zT(l), {
        animationId: this.root.animationId,
        measuredBox: s,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a)
        return ze();
      const s = a.measureViewportBox(), { scroll: l } = this.root;
      return l && (vr(s.x, l.offset.x), vr(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = ze();
      vt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: d } = c;
        if (c !== this.root && u && d.layoutScroll) {
          if (u.isRoot) {
            vt(s, a);
            const { scroll: f } = this.root;
            f && (vr(s.x, -f.offset.x), vr(s.y, -f.offset.y));
          }
          vr(s.x, u.offset.x), vr(s.y, u.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = ze();
      vt(l, a);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !s && u.options.layoutScroll && u.scroll && u !== u.root && sn(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), Rr(u.latestValues) && sn(l, u.latestValues);
      }
      return Rr(this.latestValues) && sn(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = ze();
      vt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Rr(c.latestValues))
          continue;
        Bs(c.latestValues) && c.updateSnapshot();
        const u = ze(), d = c.measurePageBox();
        vt(u, d), ad(s, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Rr(this.latestValues) && ad(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      this.targetDelta = a, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ne.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(a || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (this.resolvedRelativeTargetAt = Ne.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ze(), this.relativeTargetOrigin = ze(), io(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), vt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ze(), this.targetWithTransforms = ze()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), zk(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : vt(this.target, this.layout.layoutBox), Hp(this.target, this.targetDelta)) : vt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ze(), this.relativeTargetOrigin = ze(), io(this.relativeTargetOrigin, this.target, p.target), vt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Or.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Bs(this.parent.latestValues) || Wp(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var a;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let c = !0;
      if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === Ne.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d))
        return;
      vt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      Uk(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: g } = s;
      if (!g) {
        this.projectionTransform && (this.projectionDelta = an(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = an(), this.projectionDeltaWithTransform = an());
      const v = this.projectionTransform;
      oo(this.projectionDelta, this.layoutCorrected, g, this.latestValues), this.projectionTransform = cd(this.projectionDelta, this.treeScale), (this.projectionTransform !== v || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), Or.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), a) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, d = an();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = ze(), p = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, v = p !== g, S = this.getStack(), _ = !S || S.members.length <= 1, b = !!(v && !_ && this.options.crossfade === !0 && !this.path.some(MT));
      this.animationProgress = 0;
      let C;
      this.mixTargetDelta = (k) => {
        const w = k / 1e3;
        hd(d.x, a.x, w), hd(d.y, a.y, w), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (io(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), jT(this.relativeTarget, this.relativeTargetOrigin, f, w), C && pT(this.relativeTarget, C) && (this.isProjectionDirty = !1), C || (C = ze()), vt(C, this.relativeTarget)), v && (this.animationValues = u, sT(u, c, this.latestValues, w, b, _)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (sr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = me.update(() => {
        _i.hasAnimatedSinceResize = !0, this.currentAnimation = xT(0, dd, {
          ...a,
          onUpdate: (s) => {
            this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
          },
          onComplete: () => {
            a.onComplete && a.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const a = this.getStack();
      a && a.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(dd), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: c, latestValues: u } = a;
      if (!(!s || !l || !c)) {
        if (this !== a && this.layout && c && Jp(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || ze();
          const d = pt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = pt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        vt(s, l), sn(s, u), oo(this.projectionDeltaWithTransform, this.layoutCorrected, s, u);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new hT()), this.sharedNodes.get(a).add(s);
      const c = s.options.initialPromotionConfig;
      s.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(s) : void 0
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? (a = this.getStack()) === null || a === void 0 ? void 0 : a.prevLead : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a)
        return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), a && (this.projectionDelta = void 0, this.needsReset = !0), s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: a } = this.options;
      if (!a)
        return;
      let s = !1;
      const { latestValues: l } = a;
      if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s)
        return;
      const c = {};
      for (let u = 0; u < ud.length; u++) {
        const d = "rotate" + ud[u];
        l[d] && (c[d] = l[d], a.setStaticValue(d, 0));
      }
      a.render();
      for (const u in c)
        a.setStaticValue(u, c[u]);
      a.scheduleRender();
    }
    getProjectionStyles(a = {}) {
      var s, l;
      const c = {};
      if (!this.instance || this.isSVG)
        return c;
      if (this.isVisible)
        c.visibility = "";
      else
        return { visibility: "hidden" };
      const u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = Ci(a.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = Ci(a.pointerEvents) || ""), this.hasProjected && !Rr(this.latestValues) && (v.transform = u ? u({}, "") : "none", this.hasProjected = !1), v;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), c.transform = cd(this.projectionDeltaWithTransform, this.treeScale, f), u && (c.transform = u(f, c.transform));
      const { x: p, y: g } = this.projectionDelta;
      c.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`, d.animationValues ? c.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : c.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const v in Vi) {
        if (f[v] === void 0)
          continue;
        const { correct: S, applyTo: _ } = Vi[v], b = c.transform === "none" ? f[v] : S(f[v], d);
        if (_) {
          const C = _.length;
          for (let k = 0; k < C; k++)
            c[_[k]] = b;
        } else
          c[v] = b;
      }
      return this.options.layoutId && (c.pointerEvents = d === this ? Ci(a.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(fd), this.root.sharedNodes.clear();
    }
  };
}
function wT(e) {
  e.updateLayout();
}
function CT(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: i } = e.options, a = r.source !== e.layout.source;
    i === "size" ? zt((d) => {
      const f = a ? r.measuredBox[d] : r.layoutBox[d], p = pt(f);
      f.min = n[d].min, f.max = f.min + p;
    }) : Jp(i, r.layoutBox, n) && zt((d) => {
      const f = a ? r.measuredBox[d] : r.layoutBox[d], p = pt(n[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = an();
    oo(s, n, r.layoutBox);
    const l = an();
    a ? oo(l, e.applyTransform(o, !0), r.measuredBox) : oo(l, n, r.layoutBox);
    const c = !Kp(s);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const g = ze();
          io(g, r.layoutBox, f.layoutBox);
          const v = ze();
          io(v, n, p.layoutBox), Xp(g, v) || (u = !0), d.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = g, e.relativeParent = d);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: r,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function _T(e) {
  Or.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function kT(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function TT(e) {
  e.clearSnapshot();
}
function fd(e) {
  e.clearMeasurements();
}
function PT(e) {
  e.isLayoutDirty = !1;
}
function ET(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function pd(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function $T(e) {
  e.resolveTargetDelta();
}
function AT(e) {
  e.calcProjection();
}
function RT(e) {
  e.resetRotation();
}
function OT(e) {
  e.removeLeadSnapshot();
}
function hd(e, t, r) {
  e.translate = ke(t.translate, 0, r), e.scale = ke(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function md(e, t, r, n) {
  e.min = ke(t.min, r.min, n), e.max = ke(t.max, r.max, n);
}
function jT(e, t, r, n) {
  md(e.x, t.x, r.x, n), md(e.y, t.y, r.y, n);
}
function MT(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const DT = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, gd = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), vd = gd("applewebkit/") && !gd("chrome/") ? Math.round : $e;
function bd(e) {
  e.min = vd(e.min), e.max = vd(e.max);
}
function zT(e) {
  bd(e.x), bd(e.y);
}
function Jp(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !Ds(ld(t), ld(r), 0.2);
}
const BT = Zp({
  attachResizeListener: (e, t) => rr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), us = {
  current: void 0
}, Qp = Zp({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!us.current) {
      const e = new BT({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), us.current = e;
    }
    return us.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), VT = {
  pan: {
    Feature: Qk
  },
  drag: {
    Feature: Jk,
    ProjectionNode: Qp,
    MeasureLayout: Yp
  }
}, IT = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function FT(e) {
  const t = IT.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
const LT = 4;
function Is(e, t, r = 1) {
  $t(r <= LT, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [n, o] = FT(e);
  if (!n)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  if (i) {
    const a = i.trim();
    return zp(a) ? parseFloat(a) : a;
  } else
    return Es(o) ? Is(o, t, r + 1) : o;
}
function NT(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element))
    return { target: t, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((o) => {
    const i = o.get();
    if (!Es(i))
      return;
    const a = Is(i, n);
    a && o.set(a);
  });
  for (const o in t) {
    const i = t[o];
    if (!Es(i))
      continue;
    const a = Is(i, n);
    a && (t[o] = a, r || (r = {}), r[o] === void 0 && (r[o] = i));
  }
  return { target: t, transitionEnd: r };
}
const WT = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), eh = (e) => WT.has(e), HT = (e) => Object.keys(e).some(eh), si = (e) => e === Hr || e === F, yd = (e, t) => parseFloat(e.split(", ")[t]), xd = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return yd(o[1], t);
  {
    const i = n.match(/^matrix\((.+)\)$/);
    return i ? yd(i[1], e) : 0;
  }
}, UT = /* @__PURE__ */ new Set(["x", "y", "z"]), YT = $o.filter((e) => !UT.has(e));
function qT(e) {
  const t = [];
  return YT.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const yn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: xd(4, 13),
  y: xd(5, 14)
};
yn.translateX = yn.x;
yn.translateY = yn.y;
const GT = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((c) => {
    s[c] = yn[c](n, i);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((c) => {
    const u = t.getValue(c);
    u && u.jump(s[c]), e[c] = yn[c](l, i);
  }), e;
}, KT = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(eh);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const c = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let u = r[l], d = Ln(u);
    const f = t[l];
    let p;
    if (Fi(f)) {
      const g = f.length, v = f[0] === null ? 1 : 0;
      u = f[v], d = Ln(u);
      for (let S = v; S < g && f[S] !== null; S++)
        p ? $t(Ln(f[S]) === p, "All keyframes must be of the same type") : (p = Ln(f[S]), $t(p === d || si(d) && si(p), "Keyframes must be of the same dimension as the current value"));
    } else
      p = Ln(f);
    if (d !== p)
      if (si(d) && si(p)) {
        const g = c.get();
        typeof g == "string" && c.set(parseFloat(g)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === F && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (u === 0 || f === 0) ? u === 0 ? c.set(p.transform(u)) : t[l] = d.transform(f) : (a || (i = qT(e), a = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], c.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, c = GT(t, e, s);
    return i.length && i.forEach(([u, d]) => {
      e.getValue(u).set(d);
    }), e.render(), la && l !== null && window.scrollTo({ top: l }), { target: c, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function XT(e, t, r, n) {
  return HT(t) ? KT(e, t, r, n) : { target: t, transitionEnd: n };
}
const ZT = (e, t, r, n) => {
  const o = NT(e, t, n);
  return t = o.target, n = o.transitionEnd, XT(e, t, r, n);
}, Fs = { current: null }, th = { current: !1 };
function JT() {
  if (th.current = !0, !!la)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Fs.current = e.matches;
      e.addListener(t), t();
    } else
      Fs.current = !1;
}
function QT(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const i = t[o], a = r[o];
    if (st(i))
      e.addValue(o, i), Hi(n) && n.add(o), process.env.NODE_ENV === "development" && Rl(i.version === "10.16.5", `Attempting to mix Framer Motion versions ${i.version} with 10.16.5 may not work as expected.`);
    else if (st(a))
      e.addValue(o, bn(i, { owner: e })), Hi(n) && n.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, bn(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const Sd = /* @__PURE__ */ new WeakMap(), rh = Object.keys(bo), eP = rh.length, wd = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], tP = pl.length;
class rP {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => me.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = ua(r), this.isVariantNode = Ff(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in u) {
      const f = u[d];
      s[d] !== void 0 && st(f) && (f.set(s[d], !1), Hi(c) && c.add(d));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, r) {
    return {};
  }
  mount(t) {
    this.current = t, Sd.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), th.current || JT(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Fs.current, process.env.NODE_ENV !== "production" && Rl(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Sd.delete(this.current), this.projection && this.projection.unmount(), sr(this.notifyUpdate), sr(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = Wr.has(t), o = r.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && me.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0);
    }), i = r.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...r }, n, o, i) {
    let a, s;
    if (process.env.NODE_ENV !== "production" && o && n) {
      const l = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
      r.ignoreStrict ? Oo(!1, l) : $t(!1, l);
    }
    for (let l = 0; l < eP; l++) {
      const c = rh[l], { isEnabled: u, Feature: d, ProjectionNode: f, MeasureLayout: p } = bo[c];
      f && (a = f), u(r) && (!this.features[c] && d && (this.features[c] = new d(this)), p && (s = p));
    }
    if (!this.projection && a) {
      this.projection = new a(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: c, drag: u, dragConstraints: d, layoutScroll: f, layoutRoot: p } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!u || d && nn(d),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: i,
        layoutScroll: f,
        layoutRoot: p
      });
    }
    return s;
  }
  updateFeatures() {
    for (const t in this.features) {
      const r = this.features[t];
      r.isMounted ? r.update() : (r.mount(), r.isMounted = !0);
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ze();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(t, r = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, r);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, r) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let n = 0; n < wd.length; n++) {
      const o = wd[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = QT(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(t = !1) {
    if (t)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const n = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (n.initial = this.props.initial), n;
    }
    const r = {};
    for (let n = 0; n < tP; n++) {
      const o = pl[n], i = this.props[o];
      (vo(i) || i === !1) && (r[o] = i);
    }
    return r;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(t), () => r.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, r) {
    r !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, r)), this.values.set(t, r), this.latestValues[t] = r.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    r && (r(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let n = this.values.get(t);
    return n === void 0 && r !== void 0 && (n = bn(r, { owner: this }), this.addValue(t, n)), n;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t) {
    var r;
    return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var r;
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = wl(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !st(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Al()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class nh extends rP {
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t];
  }
  makeTargetAnimatableFromInstance({ transition: t, transitionEnd: r, ...n }, { transformValues: o }, i) {
    let a = bk(n, t || {}, this);
    if (o && (r && (r = o(r)), n && (n = o(n)), a && (a = o(a))), i) {
      gk(this, n, a);
      const s = ZT(this, n, a, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function nP(e) {
  return window.getComputedStyle(e);
}
class oP extends nh {
  readValueFromInstance(t, r) {
    if (Wr.has(r)) {
      const n = Tl(r);
      return n && n.default || 0;
    } else {
      const n = nP(t), o = (Hf(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return Up(t, r);
  }
  build(t, r, n, o) {
    gl(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return Sl(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    st(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    Xf(t, r, n, o);
  }
}
class iP extends nh {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Wr.has(r)) {
      const n = Tl(r);
      return n && n.default || 0;
    }
    return r = Zf.has(r) ? r : xl(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return ze();
  }
  scrapeMotionValuesFromProps(t, r) {
    return Qf(t, r);
  }
  build(t, r, n, o) {
    bl(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    Jf(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = yl(t.tagName), super.mount(t);
  }
}
const aP = (e, t) => ml(e) ? new iP(t, { enableHardwareAcceleration: !1 }) : new oP(t, { enableHardwareAcceleration: !0 }), sP = {
  layout: {
    ProjectionNode: Qp,
    MeasureLayout: Yp
  }
}, lP = {
  ...Ok,
  ...e_,
  ...VT,
  ...sP
}, oh = /* @__PURE__ */ cC((e, t) => LC(e, t, lP, aP));
function ih() {
  const e = Te(!1);
  return dl(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function cP() {
  const e = ih(), [t, r] = Ht(0), n = fe(() => {
    e.current && r(t + 1);
  }, [t]);
  return [fe(() => me.postRender(n), [n]), t];
}
class uP extends G.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const n = this.props.sizeRef.current;
      n.height = r.offsetHeight || 0, n.width = r.offsetWidth || 0, n.top = r.offsetTop, n.left = r.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function dP({ children: e, isPresent: t }) {
  const r = wo(), n = Te(null), o = Te({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return Fd(() => {
    const { width: i, height: a, top: s, left: l } = o.current;
    if (t || !n.current || !i || !a)
      return;
    n.current.dataset.motionPopId = r;
    const c = document.createElement("style");
    return document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(c);
    };
  }, [t]), G.createElement(uP, { isPresent: t, childRef: n, sizeRef: o }, G.cloneElement(e, { ref: n }));
}
const ds = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = ep(fP), l = wo(), c = He(
    () => ({
      id: l,
      initial: t,
      isPresent: r,
      custom: o,
      onExitComplete: (u) => {
        s.set(u, !0);
        for (const d of s.values())
          if (!d)
            return;
        n && n();
      },
      register: (u) => (s.set(u, !1), () => s.delete(u))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    i ? void 0 : [r]
  );
  return He(() => {
    s.forEach((u, d) => s.set(d, !1));
  }, [r]), G.useEffect(() => {
    !r && !s.size && n && n();
  }, [r]), a === "popLayout" && (e = G.createElement(dP, { isPresent: r }, e)), G.createElement(Eo.Provider, { value: c }, e);
};
function fP() {
  return /* @__PURE__ */ new Map();
}
function pP(e) {
  return We(() => () => e(), []);
}
const jr = (e) => e.key || "";
function hP(e, t) {
  e.forEach((r) => {
    const n = jr(r);
    t.set(n, r);
  });
}
function mP(e) {
  const t = [];
  return Gi.forEach(e, (r) => {
    Ki(r) && t.push(r);
  }), t;
}
const ah = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  $t(!o, "Replace exitBeforeEnter with mode='wait'");
  const s = Re(hl).forceRender || cP()[0], l = ih(), c = mP(e);
  let u = c;
  const d = Te(/* @__PURE__ */ new Map()).current, f = Te(u), p = Te(/* @__PURE__ */ new Map()).current, g = Te(!0);
  if (dl(() => {
    g.current = !1, hP(c, p), f.current = u;
  }), pP(() => {
    g.current = !0, p.clear(), d.clear();
  }), g.current)
    return G.createElement(G.Fragment, null, u.map((b) => G.createElement(ds, { key: jr(b), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: i, mode: a }, b)));
  u = [...u];
  const v = f.current.map(jr), S = c.map(jr), _ = v.length;
  for (let b = 0; b < _; b++) {
    const C = v[b];
    S.indexOf(C) === -1 && !d.has(C) && d.set(C, void 0);
  }
  return a === "wait" && d.size && (u = []), d.forEach((b, C) => {
    if (S.indexOf(C) !== -1)
      return;
    const k = p.get(C);
    if (!k)
      return;
    const w = v.indexOf(C);
    let A = b;
    if (!A) {
      const E = () => {
        d.delete(C);
        const M = Array.from(p.keys()).filter((D) => !S.includes(D));
        if (M.forEach((D) => p.delete(D)), f.current = c.filter((D) => {
          const O = jr(D);
          return (
            // filter out the node exiting
            O === C || // filter out the leftover children
            M.includes(O)
          );
        }), !d.size) {
          if (l.current === !1)
            return;
          s(), n && n();
        }
      };
      A = G.createElement(ds, { key: jr(k), isPresent: !1, onExitComplete: E, custom: t, presenceAffectsLayout: i, mode: a }, k), d.set(C, A);
    }
    u.splice(w, 0, A);
  }), u = u.map((b) => {
    const C = b.key;
    return d.has(C) ? b : G.createElement(ds, { key: jr(b), isPresent: !0, presenceAffectsLayout: i, mode: a }, b);
  }), process.env.NODE_ENV !== "production" && a === "wait" && u.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), G.createElement(G.Fragment, null, d.size ? u : u.map((b) => Co(b)));
};
var gP = {
  initial: (e) => {
    const { position: t } = e, r = ["top", "bottom"].includes(t) ? "y" : "x";
    let n = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
    return t === "bottom" && (n = 1), {
      opacity: 0,
      [r]: n * 24
    };
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
}, sh = im((e) => {
  const {
    id: t,
    message: r,
    onCloseComplete: n,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: c = gP,
    toastSpacing: u = "0.5rem"
  } = e, [d, f] = Ht(s), p = tT();
  vu(() => {
    p || n == null || n();
  }, [p]), vu(() => {
    f(s);
  }, [s]);
  const g = () => f(null), v = () => f(s), S = () => {
    p && o();
  };
  We(() => {
    p && i && o();
  }, [p, i, o]), eC(S, d);
  const _ = He(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: u,
      ...l
    }),
    [l, u]
  ), b = He(() => Jw(a), [a]);
  return /* @__PURE__ */ P.jsx(
    oh.div,
    {
      layout: !0,
      className: "chakra-toast",
      variants: c,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: g,
      onHoverEnd: v,
      custom: { position: a },
      style: b,
      children: /* @__PURE__ */ P.jsx(
        we.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: _,
          children: yr(r, { id: t, onClose: S })
        }
      )
    }
  );
});
sh.displayName = "ToastComponent";
var Cd = {
  path: /* @__PURE__ */ P.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ P.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ P.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ P.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, En = wt((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: i = !1,
    children: a,
    className: s,
    __css: l,
    ...c
  } = e, u = At("chakra-icon", s), d = Pn("Icon", e), f = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: o,
    ...l,
    ...d
  }, p = {
    ref: t,
    focusable: i,
    className: u,
    __css: f
  }, g = n ?? Cd.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ P.jsx(we.svg, { as: r, ...p, ...c });
  const v = a ?? Cd.path;
  return /* @__PURE__ */ P.jsx(we.svg, { verticalAlign: "middle", viewBox: g, ...p, ...c, children: v });
});
En.displayName = "Icon";
function ha(e) {
  const {
    viewBox: t = "0 0 24 24",
    d: r,
    displayName: n,
    defaultProps: o = {}
  } = e, i = Gi.toArray(e.path), a = wt((s, l) => /* @__PURE__ */ P.jsx(En, { ref: l, viewBox: t, ...o, ...s, children: i.length ? i : /* @__PURE__ */ P.jsx("path", { fill: "currentColor", d: r }) }));
  return a.displayName = n, a;
}
function vP(e) {
  return /* @__PURE__ */ P.jsx(En, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ P.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function bP(e) {
  return /* @__PURE__ */ P.jsx(En, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ P.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function _d(e) {
  return /* @__PURE__ */ P.jsx(En, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ P.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var yP = mg({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Ol = wt((e, t) => {
  const r = Pn("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: a = "transparent",
    className: s,
    ...l
  } = Tn(e), c = At("chakra-spinner", s), u = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: a,
    borderLeftColor: a,
    animation: `${yP} ${i} linear infinite`,
    ...r
  };
  return /* @__PURE__ */ P.jsx(
    we.div,
    {
      ref: t,
      __css: u,
      className: c,
      ...l,
      children: n && /* @__PURE__ */ P.jsx(we.span, { srOnly: !0, children: n })
    }
  );
});
Ol.displayName = "Spinner";
var [xP, jl] = kn({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [SP, Ml] = kn({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), lh = {
  info: { icon: bP, colorScheme: "blue" },
  warning: { icon: _d, colorScheme: "orange" },
  success: { icon: vP, colorScheme: "green" },
  error: { icon: _d, colorScheme: "red" },
  loading: { icon: Ol, colorScheme: "blue" }
};
function wP(e) {
  return lh[e].colorScheme;
}
function CP(e) {
  return lh[e].icon;
}
var ch = wt(
  function(t, r) {
    const n = Ml(), { status: o } = jl(), i = {
      display: "inline",
      ...n.description
    };
    return /* @__PURE__ */ P.jsx(
      we.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: At("chakra-alert__desc", t.className),
        __css: i
      }
    );
  }
);
ch.displayName = "AlertDescription";
function uh(e) {
  const { status: t } = jl(), r = CP(t), n = Ml(), o = t === "loading" ? n.spinner : n.icon;
  return /* @__PURE__ */ P.jsx(
    we.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: At("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ P.jsx(r, { h: "100%", w: "100%" })
    }
  );
}
uh.displayName = "AlertIcon";
var dh = wt(
  function(t, r) {
    const n = Ml(), { status: o } = jl();
    return /* @__PURE__ */ P.jsx(
      we.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: At("chakra-alert__title", t.className),
        __css: n.title
      }
    );
  }
);
dh.displayName = "AlertTitle";
var fh = wt(function(t, r) {
  var n;
  const { status: o = "info", addRole: i = !0, ...a } = Tn(t), s = (n = t.colorScheme) != null ? n : wP(o), l = Aw("Alert", { ...t, colorScheme: s }), c = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ P.jsx(xP, { value: { status: o }, children: /* @__PURE__ */ P.jsx(SP, { value: l, children: /* @__PURE__ */ P.jsx(
    we.div,
    {
      "data-status": o,
      role: i ? "alert" : void 0,
      ref: r,
      ...a,
      className: At("chakra-alert", t.className),
      __css: c
    }
  ) }) });
});
fh.displayName = "Alert";
function _P(e) {
  return /* @__PURE__ */ P.jsx(En, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ P.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var ph = wt(
  function(t, r) {
    const n = Pn("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = Tn(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ P.jsx(
      we.button,
      {
        type: "button",
        "aria-label": "Close",
        ref: r,
        disabled: i,
        __css: {
          ...l,
          ...n,
          ...a
        },
        ...s,
        children: o || /* @__PURE__ */ P.jsx(_P, { width: "1em", height: "1em" })
      }
    );
  }
);
ph.displayName = "CloseButton";
var kP = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, ao = TP(kP);
function TP(e) {
  let t = e;
  const r = /* @__PURE__ */ new Set(), n = (o) => {
    t = o(t), r.forEach((i) => i());
  };
  return {
    getState: () => t,
    subscribe: (o) => (r.add(o), () => {
      n(() => e), r.delete(o);
    }),
    /**
     * Delete a toast record at its position
     */
    removeToast: (o, i) => {
      n((a) => ({
        ...a,
        // id may be string or number
        // eslint-disable-next-line eqeqeq
        [i]: a[i].filter((s) => s.id != o)
      }));
    },
    notify: (o, i) => {
      const a = PP(o, i), { position: s, id: l } = a;
      return n((c) => {
        var u, d;
        const p = s.includes("top") ? [a, ...(u = c[s]) != null ? u : []] : [...(d = c[s]) != null ? d : [], a];
        return {
          ...c,
          [s]: p
        };
      }), l;
    },
    update: (o, i) => {
      o && n((a) => {
        const s = { ...a }, { position: l, index: c } = gu(s, o);
        return l && c !== -1 && (s[l][c] = {
          ...s[l][c],
          ...i,
          message: $P(i)
        }), s;
      });
    },
    closeAll: ({ positions: o } = {}) => {
      n((i) => (o ?? [
        "bottom",
        "bottom-right",
        "bottom-left",
        "top",
        "top-left",
        "top-right"
      ]).reduce(
        (l, c) => (l[c] = i[c].map((u) => ({
          ...u,
          requestClose: !0
        })), l),
        { ...i }
      ));
    },
    close: (o) => {
      n((i) => {
        const a = Bf(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!gu(ao.getState(), o).position
  };
}
var kd = 0;
function PP(e, t = {}) {
  var r, n;
  kd += 1;
  const o = (r = t.id) != null ? r : kd, i = (n = t.position) != null ? n : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => ao.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var EP = (e) => {
  const {
    status: t,
    variant: r = "solid",
    id: n,
    title: o,
    isClosable: i,
    onClose: a,
    description: s,
    colorScheme: l,
    icon: c
  } = e, u = n ? {
    root: `toast-${n}`,
    title: `toast-${n}-title`,
    description: `toast-${n}-description`
  } : void 0;
  return /* @__PURE__ */ P.jsxs(
    fh,
    {
      addRole: !1,
      status: t,
      variant: r,
      id: u == null ? void 0 : u.root,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      paddingEnd: 8,
      textAlign: "start",
      width: "auto",
      colorScheme: l,
      children: [
        /* @__PURE__ */ P.jsx(uh, { children: c }),
        /* @__PURE__ */ P.jsxs(we.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ P.jsx(dh, { id: u == null ? void 0 : u.title, children: o }),
          s && /* @__PURE__ */ P.jsx(ch, { id: u == null ? void 0 : u.description, display: "block", children: s })
        ] }),
        i && /* @__PURE__ */ P.jsx(
          ph,
          {
            size: "sm",
            onClick: a,
            position: "absolute",
            insetEnd: 1,
            top: 1
          }
        )
      ]
    }
  );
};
function $P(e = {}) {
  const { render: t, toastComponent: r = EP } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ P.jsx(r, { ...o, ...e });
}
var [AP, $E] = kn({
  name: "ToastOptionsContext",
  strict: !1
}), RP = (e) => {
  const t = am(
    ao.subscribe,
    ao.getState,
    ao.getState
  ), {
    motionVariants: r,
    component: n = sh,
    portalProps: o
  } = e, a = Object.keys(t).map((s) => {
    const l = t[s];
    return /* @__PURE__ */ P.jsx(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${s}`,
        id: `chakra-toast-manager-${s}`,
        style: Qw(s),
        children: /* @__PURE__ */ P.jsx(ah, { initial: !1, children: l.map((c) => /* @__PURE__ */ P.jsx(
          n,
          {
            motionVariants: r,
            ...c
          },
          c.id
        )) })
      },
      s
    );
  });
  return /* @__PURE__ */ P.jsx(To, { ...o, children: a });
}, OP = (e) => function({
  children: r,
  theme: n = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ P.jsxs(Xw, { theme: n, ...i, children: [
    /* @__PURE__ */ P.jsx(AP, { value: o == null ? void 0 : o.defaultOptions, children: r }),
    /* @__PURE__ */ P.jsx(RP, { ...o })
  ] });
}, jP = OP(yw);
function MP(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function Yi(...e) {
  return (t) => {
    e.forEach((r) => {
      MP(r, t);
    });
  };
}
function DP(...e) {
  return He(() => Yi(...e), e);
}
function zP(e) {
  return Gi.toArray(e).filter(
    (t) => Ki(t)
  );
}
var [AE, BP] = kn({
  strict: !1,
  name: "ButtonGroupContext"
});
function VP(e) {
  const [t, r] = Ht(!e);
  return { ref: fe((i) => {
    i && r(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function Ls(e) {
  const { children: t, className: r, ...n } = e, o = Ki(t) ? Co(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, i = At("chakra-button__icon", r);
  return /* @__PURE__ */ P.jsx(
    we.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...n,
      className: i,
      children: o
    }
  );
}
Ls.displayName = "ButtonIcon";
function Ns(e) {
  const {
    label: t,
    placement: r,
    spacing: n = "0.5rem",
    children: o = /* @__PURE__ */ P.jsx(Ol, { color: "currentColor", width: "1em", height: "1em" }),
    className: i,
    __css: a,
    ...s
  } = e, l = At("chakra-button__spinner", i), c = r === "start" ? "marginEnd" : "marginStart", u = He(
    () => ({
      display: "flex",
      alignItems: "center",
      position: t ? "relative" : "absolute",
      [c]: t ? n : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...a
    }),
    [a, t, c, n]
  );
  return /* @__PURE__ */ P.jsx(we.div, { className: l, ...s, __css: u, children: o });
}
Ns.displayName = "ButtonSpinner";
var Dl = wt((e, t) => {
  const r = BP(), n = Pn("Button", { ...r, ...e }), {
    isDisabled: o = r == null ? void 0 : r.isDisabled,
    isLoading: i,
    isActive: a,
    children: s,
    leftIcon: l,
    rightIcon: c,
    loadingText: u,
    iconSpacing: d = "0.5rem",
    type: f,
    spinner: p,
    spinnerPlacement: g = "start",
    className: v,
    as: S,
    ..._
  } = Tn(e), b = He(() => {
    const A = { ...n == null ? void 0 : n._focus, zIndex: 1 };
    return {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      ...n,
      ...!!r && { _focus: A }
    };
  }, [n, r]), { ref: C, type: k } = VP(S), w = { rightIcon: c, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ P.jsxs(
    we.button,
    {
      ref: DP(t, C),
      as: S,
      type: f ?? k,
      "data-active": Cc(a),
      "data-loading": Cc(i),
      __css: b,
      className: At("chakra-button", v),
      ..._,
      disabled: o || i,
      children: [
        i && g === "start" && /* @__PURE__ */ P.jsx(
          Ns,
          {
            className: "chakra-button__spinner--start",
            label: u,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        i ? u || /* @__PURE__ */ P.jsx(we.span, { opacity: 0, children: /* @__PURE__ */ P.jsx(Td, { ...w }) }) : /* @__PURE__ */ P.jsx(Td, { ...w }),
        i && g === "end" && /* @__PURE__ */ P.jsx(
          Ns,
          {
            className: "chakra-button__spinner--end",
            label: u,
            placement: "end",
            spacing: d,
            children: p
          }
        )
      ]
    }
  );
});
Dl.displayName = "Button";
function Td(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e;
  return /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
    t && /* @__PURE__ */ P.jsx(Ls, { marginEnd: o, children: t }),
    n,
    r && /* @__PURE__ */ P.jsx(Ls, { marginStart: o, children: r })
  ] });
}
var hh = wt(
  (e, t) => {
    const { icon: r, children: n, isRound: o, "aria-label": i, ...a } = e, s = r || n, l = Ki(s) ? Co(s, {
      "aria-hidden": !0,
      focusable: !1
    }) : null;
    return /* @__PURE__ */ P.jsx(
      Dl,
      {
        padding: "0",
        borderRadius: o ? "full" : void 0,
        ref: t,
        "aria-label": i,
        ...a,
        children: l
      }
    );
  }
);
hh.displayName = "IconButton";
function fs(e, t, r, n) {
  const o = Bi(r);
  return We(() => {
    const i = typeof e == "function" ? e() : e ?? document;
    if (!(!r || !i))
      return i.addEventListener(t, o, n), () => {
        i.removeEventListener(t, o, n);
      };
  }, [t, e, n, o, r]), () => {
    const i = typeof e == "function" ? e() : e ?? document;
    i == null || i.removeEventListener(t, o, n);
  };
}
function IP(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function FP(e) {
  var t;
  if (!IP(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function LP(e) {
  const t = e.ownerDocument.defaultView || window, { overflow: r, overflowX: n, overflowY: o } = t.getComputedStyle(e);
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function NP(e) {
  return e.localName === "html" ? e : e.assignedSlot || e.parentElement || e.ownerDocument.documentElement;
}
function mh(e) {
  return ["html", "body", "#document"].includes(e.localName) ? e.ownerDocument.body : FP(e) && LP(e) ? e : mh(NP(e));
}
function WP(e, t) {
  return Array.isArray(e) ? e.map((r) => r === null ? null : t(r)) : Et(e) ? Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {}) : e != null ? t(e) : null;
}
var gh = wt(function(t, r) {
  const n = Pn("Text", t), { className: o, align: i, decoration: a, casing: s, ...l } = Tn(t), c = Dw({
    textAlign: t.align,
    textDecoration: t.decoration,
    textTransform: t.casing
  });
  return /* @__PURE__ */ P.jsx(
    we.p,
    {
      ref: r,
      className: At("chakra-text", t.className),
      ...c,
      ...l,
      __css: n
    }
  );
});
gh.displayName = "Text";
var vh = (e) => /* @__PURE__ */ P.jsx(
  we.div,
  {
    className: "chakra-stack__item",
    ...e,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...e.__css
    }
  }
);
vh.displayName = "StackItem";
function HP(e) {
  const { spacing: t, direction: r } = e, n = {
    column: {
      my: t,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    "column-reverse": {
      my: t,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    row: {
      mx: t,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    },
    "row-reverse": {
      mx: t,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    }
  };
  return {
    "&": WP(
      r,
      (o) => n[o]
    )
  };
}
var zl = wt((e, t) => {
  const {
    isInline: r,
    direction: n,
    align: o,
    justify: i,
    spacing: a = "0.5rem",
    wrap: s,
    children: l,
    divider: c,
    className: u,
    shouldWrapChildren: d,
    ...f
  } = e, p = r ? "row" : n ?? "column", g = He(
    () => HP({ spacing: a, direction: p }),
    [a, p]
  ), v = !!c, S = !d && !v, _ = He(() => {
    const C = zP(l);
    return S ? C : C.map((k, w) => {
      const A = typeof k.key < "u" ? k.key : w, E = w + 1 === C.length, D = d ? /* @__PURE__ */ P.jsx(vh, { children: k }, A) : k;
      if (!v)
        return D;
      const O = Co(
        c,
        {
          __css: g
        }
      ), I = E ? null : O;
      return /* @__PURE__ */ P.jsxs(sm, { children: [
        D,
        I
      ] }, A);
    });
  }, [
    c,
    g,
    v,
    S,
    d,
    l
  ]), b = At("chakra-stack", u);
  return /* @__PURE__ */ P.jsx(
    we.div,
    {
      ref: t,
      display: "flex",
      alignItems: o,
      justifyContent: i,
      flexDirection: p,
      flexWrap: s,
      gap: v ? void 0 : a,
      className: b,
      ...f,
      children: _
    }
  );
});
zl.displayName = "Stack";
var Xr = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), Ge = {
  arrowShadowColor: Xr("--popper-arrow-shadow-color"),
  arrowSize: Xr("--popper-arrow-size", "8px"),
  arrowSizeHalf: Xr("--popper-arrow-size-half"),
  arrowBg: Xr("--popper-arrow-bg"),
  transformOrigin: Xr("--popper-transform-origin"),
  arrowOffset: Xr("--popper-arrow-offset")
};
function UP(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var YP = {
  top: "bottom center",
  "top-start": "bottom left",
  "top-end": "bottom right",
  bottom: "top center",
  "bottom-start": "top left",
  "bottom-end": "top right",
  left: "right center",
  "left-start": "right top",
  "left-end": "right bottom",
  right: "left center",
  "right-start": "left top",
  "right-end": "left bottom"
}, qP = (e) => YP[e], Pd = {
  scroll: !0,
  resize: !0
};
function GP(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...Pd, ...e }
  } : t = {
    enabled: e,
    options: Pd
  }, t;
}
var KP = {
  name: "matchWidth",
  enabled: !0,
  phase: "beforeWrite",
  requires: ["computeStyles"],
  fn: ({ state: e }) => {
    e.styles.popper.width = `${e.rects.reference.width}px`;
  },
  effect: ({ state: e }) => () => {
    const t = e.elements.reference;
    e.elements.popper.style.width = `${t.offsetWidth}px`;
  }
}, XP = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    Ed(e);
  },
  effect: ({ state: e }) => () => {
    Ed(e);
  }
}, Ed = (e) => {
  e.elements.popper.style.setProperty(
    Ge.transformOrigin.var,
    qP(e.placement)
  );
}, ZP = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    JP(e);
  }
}, JP = (e) => {
  var t;
  if (!e.placement)
    return;
  const r = QP(e.placement);
  if ((t = e.elements) != null && t.arrow && r) {
    Object.assign(e.elements.arrow.style, {
      [r.property]: r.value,
      width: Ge.arrowSize.varRef,
      height: Ge.arrowSize.varRef,
      zIndex: -1
    });
    const n = {
      [Ge.arrowSizeHalf.var]: `calc(${Ge.arrowSize.varRef} / 2 - 1px)`,
      [Ge.arrowOffset.var]: `calc(${Ge.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in n)
      e.elements.arrow.style.setProperty(o, n[o]);
  }
}, QP = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: Ge.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: Ge.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: Ge.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: Ge.arrowOffset.varRef };
}, e2 = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    $d(e);
  },
  effect: ({ state: e }) => () => {
    $d(e);
  }
}, $d = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const r = UP(e.placement);
  r && t.style.setProperty("--popper-arrow-default-shadow", r), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: Ge.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, t2 = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, r2 = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function n2(e, t = "ltr") {
  var r, n;
  const o = ((r = t2[e]) == null ? void 0 : r[t]) || e;
  return t === "ltr" ? o : (n = r2[e]) != null ? n : o;
}
var ot = "top", xt = "bottom", St = "right", it = "left", Bl = "auto", Mo = [ot, xt, St, it], xn = "start", xo = "end", o2 = "clippingParents", bh = "viewport", Wn = "popper", i2 = "reference", Ad = /* @__PURE__ */ Mo.reduce(function(e, t) {
  return e.concat([t + "-" + xn, t + "-" + xo]);
}, []), yh = /* @__PURE__ */ [].concat(Mo, [Bl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + xn, t + "-" + xo]);
}, []), a2 = "beforeRead", s2 = "read", l2 = "afterRead", c2 = "beforeMain", u2 = "main", d2 = "afterMain", f2 = "beforeWrite", p2 = "write", h2 = "afterWrite", m2 = [a2, s2, l2, c2, u2, d2, f2, p2, h2];
function Ut(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ht(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Nr(e) {
  var t = ht(e).Element;
  return e instanceof t || e instanceof Element;
}
function yt(e) {
  var t = ht(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Vl(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ht(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function g2(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, i = t.elements[r];
    !yt(i) || !Ut(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function v2(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], i = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = a.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !yt(o) || !Ut(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const b2 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: g2,
  effect: v2,
  requires: ["computeStyles"]
};
function Wt(e) {
  return e.split("-")[0];
}
var Lr = Math.max, qi = Math.min, Sn = Math.round;
function Ws() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function xh() {
  return !/^((?!chrome|android).)*safari/i.test(Ws());
}
function wn(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, i = 1;
  t && yt(e) && (o = e.offsetWidth > 0 && Sn(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Sn(n.height) / e.offsetHeight || 1);
  var a = Nr(e) ? ht(e) : window, s = a.visualViewport, l = !xh() && r, c = (n.left + (l && s ? s.offsetLeft : 0)) / o, u = (n.top + (l && s ? s.offsetTop : 0)) / i, d = n.width / o, f = n.height / i;
  return {
    width: d,
    height: f,
    top: u,
    right: c + d,
    bottom: u + f,
    left: c,
    x: c,
    y: u
  };
}
function Il(e) {
  var t = wn(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Sh(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Vl(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function lr(e) {
  return ht(e).getComputedStyle(e);
}
function y2(e) {
  return ["table", "td", "th"].indexOf(Ut(e)) >= 0;
}
function Tr(e) {
  return ((Nr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ma(e) {
  return Ut(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Vl(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Tr(e)
  );
}
function Rd(e) {
  return !yt(e) || // https://github.com/popperjs/popper-core/issues/837
  lr(e).position === "fixed" ? null : e.offsetParent;
}
function x2(e) {
  var t = /firefox/i.test(Ws()), r = /Trident/i.test(Ws());
  if (r && yt(e)) {
    var n = lr(e);
    if (n.position === "fixed")
      return null;
  }
  var o = ma(e);
  for (Vl(o) && (o = o.host); yt(o) && ["html", "body"].indexOf(Ut(o)) < 0; ) {
    var i = lr(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Do(e) {
  for (var t = ht(e), r = Rd(e); r && y2(r) && lr(r).position === "static"; )
    r = Rd(r);
  return r && (Ut(r) === "html" || Ut(r) === "body" && lr(r).position === "static") ? t : r || x2(e) || t;
}
function Fl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function so(e, t, r) {
  return Lr(e, qi(t, r));
}
function S2(e, t, r) {
  var n = so(e, t, r);
  return n > r ? r : n;
}
function wh() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ch(e) {
  return Object.assign({}, wh(), e);
}
function _h(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var w2 = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Ch(typeof t != "number" ? t : _h(t, Mo));
};
function C2(e) {
  var t, r = e.state, n = e.name, o = e.options, i = r.elements.arrow, a = r.modifiersData.popperOffsets, s = Wt(r.placement), l = Fl(s), c = [it, St].indexOf(s) >= 0, u = c ? "height" : "width";
  if (!(!i || !a)) {
    var d = w2(o.padding, r), f = Il(i), p = l === "y" ? ot : it, g = l === "y" ? xt : St, v = r.rects.reference[u] + r.rects.reference[l] - a[l] - r.rects.popper[u], S = a[l] - r.rects.reference[l], _ = Do(i), b = _ ? l === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0, C = v / 2 - S / 2, k = d[p], w = b - f[u] - d[g], A = b / 2 - f[u] / 2 + C, E = so(k, A, w), M = l;
    r.modifiersData[n] = (t = {}, t[M] = E, t.centerOffset = E - A, t);
  }
}
function _2(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Sh(t.elements.popper, o) && (t.elements.arrow = o));
}
const k2 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: C2,
  effect: _2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Cn(e) {
  return e.split("-")[1];
}
var T2 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function P2(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Sn(r * o) / o || 0,
    y: Sn(n * o) / o || 0
  };
}
function Od(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = a.x, p = f === void 0 ? 0 : f, g = a.y, v = g === void 0 ? 0 : g, S = typeof u == "function" ? u({
    x: p,
    y: v
  }) : {
    x: p,
    y: v
  };
  p = S.x, v = S.y;
  var _ = a.hasOwnProperty("x"), b = a.hasOwnProperty("y"), C = it, k = ot, w = window;
  if (c) {
    var A = Do(r), E = "clientHeight", M = "clientWidth";
    if (A === ht(r) && (A = Tr(r), lr(A).position !== "static" && s === "absolute" && (E = "scrollHeight", M = "scrollWidth")), A = A, o === ot || (o === it || o === St) && i === xo) {
      k = xt;
      var D = d && A === w && w.visualViewport ? w.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        A[E]
      );
      v -= D - n.height, v *= l ? 1 : -1;
    }
    if (o === it || (o === ot || o === xt) && i === xo) {
      C = St;
      var O = d && A === w && w.visualViewport ? w.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        A[M]
      );
      p -= O - n.width, p *= l ? 1 : -1;
    }
  }
  var I = Object.assign({
    position: s
  }, c && T2), le = u === !0 ? P2({
    x: p,
    y: v
  }, ht(r)) : {
    x: p,
    y: v
  };
  if (p = le.x, v = le.y, l) {
    var N;
    return Object.assign({}, I, (N = {}, N[k] = b ? "0" : "", N[C] = _ ? "0" : "", N.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + v + "px)" : "translate3d(" + p + "px, " + v + "px, 0)", N));
  }
  return Object.assign({}, I, (t = {}, t[k] = b ? v + "px" : "", t[C] = _ ? p + "px" : "", t.transform = "", t));
}
function E2(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, a = i === void 0 ? !0 : i, s = r.roundOffsets, l = s === void 0 ? !0 : s, c = {
    placement: Wt(t.placement),
    variation: Cn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Od(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Od(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const $2 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: E2,
  data: {}
};
var li = {
  passive: !0
};
function A2(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, i = o === void 0 ? !0 : o, a = n.resize, s = a === void 0 ? !0 : a, l = ht(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, li);
  }), s && l.addEventListener("resize", r.update, li), function() {
    i && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, li);
    }), s && l.removeEventListener("resize", r.update, li);
  };
}
const R2 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: A2,
  data: {}
};
var O2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ki(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return O2[t];
  });
}
var j2 = {
  start: "end",
  end: "start"
};
function jd(e) {
  return e.replace(/start|end/g, function(t) {
    return j2[t];
  });
}
function Ll(e) {
  var t = ht(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Nl(e) {
  return wn(Tr(e)).left + Ll(e).scrollLeft;
}
function M2(e, t) {
  var r = ht(e), n = Tr(e), o = r.visualViewport, i = n.clientWidth, a = n.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var c = xh();
    (c || !c && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + Nl(e),
    y: l
  };
}
function D2(e) {
  var t, r = Tr(e), n = Ll(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Lr(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Lr(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + Nl(e), l = -n.scrollTop;
  return lr(o || r).direction === "rtl" && (s += Lr(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function Wl(e) {
  var t = lr(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function kh(e) {
  return ["html", "body", "#document"].indexOf(Ut(e)) >= 0 ? e.ownerDocument.body : yt(e) && Wl(e) ? e : kh(ma(e));
}
function lo(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = kh(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = ht(n), a = o ? [i].concat(i.visualViewport || [], Wl(n) ? n : []) : n, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(lo(ma(a)))
  );
}
function Hs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function z2(e, t) {
  var r = wn(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Md(e, t, r) {
  return t === bh ? Hs(M2(e, r)) : Nr(t) ? z2(t, r) : Hs(D2(Tr(e)));
}
function B2(e) {
  var t = lo(ma(e)), r = ["absolute", "fixed"].indexOf(lr(e).position) >= 0, n = r && yt(e) ? Do(e) : e;
  return Nr(n) ? t.filter(function(o) {
    return Nr(o) && Sh(o, n) && Ut(o) !== "body";
  }) : [];
}
function V2(e, t, r, n) {
  var o = t === "clippingParents" ? B2(e) : [].concat(t), i = [].concat(o, [r]), a = i[0], s = i.reduce(function(l, c) {
    var u = Md(e, c, n);
    return l.top = Lr(u.top, l.top), l.right = qi(u.right, l.right), l.bottom = qi(u.bottom, l.bottom), l.left = Lr(u.left, l.left), l;
  }, Md(e, a, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Th(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Wt(n) : null, i = n ? Cn(n) : null, a = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case ot:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case xt:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case St:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case it:
      l = {
        x: t.x - r.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var c = o ? Fl(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (i) {
      case xn:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case xo:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function So(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, i = r.strategy, a = i === void 0 ? e.strategy : i, s = r.boundary, l = s === void 0 ? o2 : s, c = r.rootBoundary, u = c === void 0 ? bh : c, d = r.elementContext, f = d === void 0 ? Wn : d, p = r.altBoundary, g = p === void 0 ? !1 : p, v = r.padding, S = v === void 0 ? 0 : v, _ = Ch(typeof S != "number" ? S : _h(S, Mo)), b = f === Wn ? i2 : Wn, C = e.rects.popper, k = e.elements[g ? b : f], w = V2(Nr(k) ? k : k.contextElement || Tr(e.elements.popper), l, u, a), A = wn(e.elements.reference), E = Th({
    reference: A,
    element: C,
    strategy: "absolute",
    placement: o
  }), M = Hs(Object.assign({}, C, E)), D = f === Wn ? M : A, O = {
    top: w.top - D.top + _.top,
    bottom: D.bottom - w.bottom + _.bottom,
    left: w.left - D.left + _.left,
    right: D.right - w.right + _.right
  }, I = e.modifiersData.offset;
  if (f === Wn && I) {
    var le = I[o];
    Object.keys(O).forEach(function(N) {
      var W = [St, xt].indexOf(N) >= 0 ? 1 : -1, U = [ot, xt].indexOf(N) >= 0 ? "y" : "x";
      O[N] += le[U] * W;
    });
  }
  return O;
}
function I2(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, a = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? yh : l, u = Cn(n), d = u ? s ? Ad : Ad.filter(function(g) {
    return Cn(g) === u;
  }) : Mo, f = d.filter(function(g) {
    return c.indexOf(g) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(g, v) {
    return g[v] = So(e, {
      placement: v,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[Wt(v)], g;
  }, {});
  return Object.keys(p).sort(function(g, v) {
    return p[g] - p[v];
  });
}
function F2(e) {
  if (Wt(e) === Bl)
    return [];
  var t = ki(e);
  return [jd(e), t, jd(t)];
}
function L2(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, s = a === void 0 ? !0 : a, l = r.fallbackPlacements, c = r.padding, u = r.boundary, d = r.rootBoundary, f = r.altBoundary, p = r.flipVariations, g = p === void 0 ? !0 : p, v = r.allowedAutoPlacements, S = t.options.placement, _ = Wt(S), b = _ === S, C = l || (b || !g ? [ki(S)] : F2(S)), k = [S].concat(C).reduce(function(Ae, de) {
      return Ae.concat(Wt(de) === Bl ? I2(t, {
        placement: de,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: g,
        allowedAutoPlacements: v
      }) : de);
    }, []), w = t.rects.reference, A = t.rects.popper, E = /* @__PURE__ */ new Map(), M = !0, D = k[0], O = 0; O < k.length; O++) {
      var I = k[O], le = Wt(I), N = Cn(I) === xn, W = [ot, xt].indexOf(le) >= 0, U = W ? "width" : "height", K = So(t, {
        placement: I,
        boundary: u,
        rootBoundary: d,
        altBoundary: f,
        padding: c
      }), Q = W ? N ? St : it : N ? xt : ot;
      w[U] > A[U] && (Q = ki(Q));
      var je = ki(Q), be = [];
      if (i && be.push(K[le] <= 0), s && be.push(K[Q] <= 0, K[je] <= 0), be.every(function(Ae) {
        return Ae;
      })) {
        D = I, M = !1;
        break;
      }
      E.set(I, be);
    }
    if (M)
      for (var Me = g ? 3 : 1, Y = function(de) {
        var he = k.find(function(Ve) {
          var ye = E.get(Ve);
          if (ye)
            return ye.slice(0, de).every(function(Le) {
              return Le;
            });
        });
        if (he)
          return D = he, "break";
      }, Ce = Me; Ce > 0; Ce--) {
        var H = Y(Ce);
        if (H === "break")
          break;
      }
    t.placement !== D && (t.modifiersData[n]._skip = !0, t.placement = D, t.reset = !0);
  }
}
const N2 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: L2,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Dd(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function zd(e) {
  return [ot, St, xt, it].some(function(t) {
    return e[t] >= 0;
  });
}
function W2(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = So(t, {
    elementContext: "reference"
  }), s = So(t, {
    altBoundary: !0
  }), l = Dd(a, n), c = Dd(s, o, i), u = zd(l), d = zd(c);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": d
  });
}
const H2 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: W2
};
function U2(e, t, r) {
  var n = Wt(e), o = [it, ot].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [it, St].indexOf(n) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function Y2(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, i = o === void 0 ? [0, 0] : o, a = yh.reduce(function(u, d) {
    return u[d] = U2(d, t.rects, i), u;
  }, {}), s = a[t.placement], l = s.x, c = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = a;
}
const q2 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Y2
};
function G2(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Th({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const K2 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: G2,
  data: {}
};
function X2(e) {
  return e === "x" ? "y" : "x";
}
function Z2(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, s = a === void 0 ? !1 : a, l = r.boundary, c = r.rootBoundary, u = r.altBoundary, d = r.padding, f = r.tether, p = f === void 0 ? !0 : f, g = r.tetherOffset, v = g === void 0 ? 0 : g, S = So(t, {
    boundary: l,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), _ = Wt(t.placement), b = Cn(t.placement), C = !b, k = Fl(_), w = X2(k), A = t.modifiersData.popperOffsets, E = t.rects.reference, M = t.rects.popper, D = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, O = typeof D == "number" ? {
    mainAxis: D,
    altAxis: D
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, D), I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, le = {
    x: 0,
    y: 0
  };
  if (A) {
    if (i) {
      var N, W = k === "y" ? ot : it, U = k === "y" ? xt : St, K = k === "y" ? "height" : "width", Q = A[k], je = Q + S[W], be = Q - S[U], Me = p ? -M[K] / 2 : 0, Y = b === xn ? E[K] : M[K], Ce = b === xn ? -M[K] : -E[K], H = t.elements.arrow, Ae = p && H ? Il(H) : {
        width: 0,
        height: 0
      }, de = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : wh(), he = de[W], Ve = de[U], ye = so(0, E[K], Ae[K]), Le = C ? E[K] / 2 - Me - ye - he - O.mainAxis : Y - ye - he - O.mainAxis, Ie = C ? -E[K] / 2 + Me + ye + Ve + O.mainAxis : Ce + ye + Ve + O.mainAxis, De = t.elements.arrow && Do(t.elements.arrow), R = De ? k === "y" ? De.clientTop || 0 : De.clientLeft || 0 : 0, Pe = (N = I == null ? void 0 : I[k]) != null ? N : 0, lt = Q + Le - Pe - R, ct = Q + Ie - Pe, qt = so(p ? qi(je, lt) : je, Q, p ? Lr(be, ct) : be);
      A[k] = qt, le[k] = qt - Q;
    }
    if (s) {
      var Pr, Ur = k === "x" ? ot : it, cr = k === "x" ? xt : St, Qe = A[w], Rt = w === "y" ? "height" : "width", Ct = Qe + S[Ur], et = Qe - S[cr], ur = [ot, it].indexOf(_) !== -1, dr = (Pr = I == null ? void 0 : I[w]) != null ? Pr : 0, Er = ur ? Ct : Qe - E[Rt] - M[Rt] - dr + O.altAxis, Ot = ur ? Qe + E[Rt] + M[Rt] - dr - O.altAxis : et, Gt = p && ur ? S2(Er, Qe, Ot) : so(p ? Er : Ct, Qe, p ? Ot : et);
      A[w] = Gt, le[w] = Gt - Qe;
    }
    t.modifiersData[n] = le;
  }
}
const J2 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Z2,
  requiresIfExists: ["offset"]
};
function Q2(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function eE(e) {
  return e === ht(e) || !yt(e) ? Ll(e) : Q2(e);
}
function tE(e) {
  var t = e.getBoundingClientRect(), r = Sn(t.width) / e.offsetWidth || 1, n = Sn(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function rE(e, t, r) {
  r === void 0 && (r = !1);
  var n = yt(t), o = yt(t) && tE(t), i = Tr(t), a = wn(e, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Ut(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Wl(i)) && (s = eE(t)), yt(t) ? (l = wn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Nl(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function nE(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    r.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }), n.push(i);
  }
  return e.forEach(function(i) {
    r.has(i.name) || o(i);
  }), n;
}
function oE(e) {
  var t = nE(e);
  return m2.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function iE(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function aE(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var Bd = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Vd() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function sE(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? Bd : o;
  return function(s, l, c) {
    c === void 0 && (c = i);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Bd, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, p = {
      state: u,
      setOptions: function(_) {
        var b = typeof _ == "function" ? _(u.options) : _;
        v(), u.options = Object.assign({}, i, u.options, b), u.scrollParents = {
          reference: Nr(s) ? lo(s) : s.contextElement ? lo(s.contextElement) : [],
          popper: lo(l)
        };
        var C = oE(aE([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = C.filter(function(k) {
          return k.enabled;
        }), g(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var _ = u.elements, b = _.reference, C = _.popper;
          if (Vd(b, C)) {
            u.rects = {
              reference: rE(b, Do(C), u.options.strategy === "fixed"),
              popper: Il(C)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(O) {
              return u.modifiersData[O.name] = Object.assign({}, O.data);
            });
            for (var k = 0; k < u.orderedModifiers.length; k++) {
              if (u.reset === !0) {
                u.reset = !1, k = -1;
                continue;
              }
              var w = u.orderedModifiers[k], A = w.fn, E = w.options, M = E === void 0 ? {} : E, D = w.name;
              typeof A == "function" && (u = A({
                state: u,
                options: M,
                name: D,
                instance: p
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: iE(function() {
        return new Promise(function(S) {
          p.forceUpdate(), S(u);
        });
      }),
      destroy: function() {
        v(), f = !0;
      }
    };
    if (!Vd(s, l))
      return p;
    p.setOptions(c).then(function(S) {
      !f && c.onFirstUpdate && c.onFirstUpdate(S);
    });
    function g() {
      u.orderedModifiers.forEach(function(S) {
        var _ = S.name, b = S.options, C = b === void 0 ? {} : b, k = S.effect;
        if (typeof k == "function") {
          var w = k({
            state: u,
            name: _,
            instance: p,
            options: C
          }), A = function() {
          };
          d.push(w || A);
        }
      });
    }
    function v() {
      d.forEach(function(S) {
        return S();
      }), d = [];
    }
    return p;
  };
}
var lE = [R2, K2, $2, b2, q2, N2, J2, k2, H2], cE = /* @__PURE__ */ sE({
  defaultModifiers: lE
});
function uE(e = {}) {
  const {
    enabled: t = !0,
    modifiers: r,
    placement: n = "bottom",
    strategy: o = "absolute",
    arrowPadding: i = 8,
    eventListeners: a = !0,
    offset: s,
    gutter: l = 8,
    flip: c = !0,
    boundary: u = "clippingParents",
    preventOverflow: d = !0,
    matchWidth: f,
    direction: p = "ltr"
  } = e, g = Te(null), v = Te(null), S = Te(null), _ = n2(n, p), b = Te(() => {
  }), C = fe(() => {
    var O;
    !t || !g.current || !v.current || ((O = b.current) == null || O.call(b), S.current = cE(g.current, v.current, {
      placement: _,
      modifiers: [
        e2,
        ZP,
        XP,
        {
          ...KP,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...GP(a)
        },
        {
          name: "arrow",
          options: { padding: i }
        },
        {
          name: "offset",
          options: {
            offset: s ?? [0, l]
          }
        },
        {
          name: "flip",
          enabled: !!c,
          options: { padding: 8 }
        },
        {
          name: "preventOverflow",
          enabled: !!d,
          options: { boundary: u }
        },
        // allow users override internal modifiers
        ...r ?? []
      ],
      strategy: o
    }), S.current.forceUpdate(), b.current = S.current.destroy);
  }, [
    _,
    t,
    r,
    f,
    a,
    i,
    s,
    l,
    c,
    d,
    u,
    o
  ]);
  We(() => () => {
    var O;
    !g.current && !v.current && ((O = S.current) == null || O.destroy(), S.current = null);
  }, []);
  const k = fe(
    (O) => {
      g.current = O, C();
    },
    [C]
  ), w = fe(
    (O = {}, I = null) => ({
      ...O,
      ref: Yi(k, I)
    }),
    [k]
  ), A = fe(
    (O) => {
      v.current = O, C();
    },
    [C]
  ), E = fe(
    (O = {}, I = null) => ({
      ...O,
      ref: Yi(A, I),
      style: {
        ...O.style,
        position: o,
        minWidth: f ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [o, A, f]
  ), M = fe((O = {}, I = null) => {
    const { size: le, shadowColor: N, bg: W, style: U, ...K } = O;
    return {
      ...K,
      ref: I,
      "data-popper-arrow": "",
      style: dE(O)
    };
  }, []), D = fe(
    (O = {}, I = null) => ({
      ...O,
      ref: I,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      var O;
      (O = S.current) == null || O.update();
    },
    forceUpdate() {
      var O;
      (O = S.current) == null || O.forceUpdate();
    },
    transformOrigin: Ge.transformOrigin.varRef,
    referenceRef: k,
    popperRef: A,
    getPopperProps: E,
    getArrowProps: M,
    getArrowInnerProps: D,
    getReferenceProps: w
  };
}
function dE(e) {
  const { size: t, shadowColor: r, bg: n, style: o } = e, i = { ...o, position: "absolute" };
  return t && (i["--popper-arrow-size"] = t), r && (i["--popper-arrow-shadow-color"] = r), n && (i["--popper-arrow-bg"] = n), i;
}
function fE(e = {}) {
  const {
    onClose: t,
    onOpen: r,
    isOpen: n,
    id: o
  } = e, i = Bi(r), a = Bi(t), [s, l] = Ht(e.defaultIsOpen || !1), c = n !== void 0 ? n : s, u = n !== void 0, d = wo(), f = o ?? `disclosure-${d}`, p = fe(() => {
    u || l(!1), a == null || a();
  }, [u, a]), g = fe(() => {
    u || l(!0), i == null || i();
  }, [u, i]), v = fe(() => {
    c ? p() : g();
  }, [c, g, p]);
  function S(b = {}) {
    return {
      ...b,
      "aria-expanded": c,
      "aria-controls": f,
      onClick(C) {
        var k;
        (k = b.onClick) == null || k.call(b, C), v();
      }
    };
  }
  function _(b = {}) {
    return {
      ...b,
      hidden: !c,
      id: f
    };
  }
  return {
    isOpen: c,
    onOpen: g,
    onClose: p,
    onToggle: v,
    isControlled: u,
    getButtonProps: S,
    getDisclosureProps: _
  };
}
var pE = {
  exit: {
    scale: 0.85,
    opacity: 0,
    transition: {
      opacity: { duration: 0.15, easings: "easeInOut" },
      scale: { duration: 0.2, easings: "easeInOut" }
    }
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      opacity: { easings: "easeOut", duration: 0.2 },
      scale: { duration: 0.2, ease: [0.175, 0.885, 0.4, 1.1] }
    }
  }
}, Us = (e) => {
  var t;
  return ((t = e.current) == null ? void 0 : t.ownerDocument) || document;
}, Ti = (e) => {
  var t, r;
  return ((r = (t = e.current) == null ? void 0 : t.ownerDocument) == null ? void 0 : r.defaultView) || window;
};
function hE(e = {}) {
  const {
    openDelay: t = 0,
    closeDelay: r = 0,
    closeOnClick: n = !0,
    closeOnMouseDown: o,
    closeOnScroll: i,
    closeOnPointerDown: a = o,
    closeOnEsc: s = !0,
    onOpen: l,
    onClose: c,
    placement: u,
    id: d,
    isOpen: f,
    defaultIsOpen: p,
    arrowSize: g = 10,
    arrowShadowColor: v,
    arrowPadding: S,
    modifiers: _,
    isDisabled: b,
    gutter: C,
    offset: k,
    direction: w,
    ...A
  } = e, { isOpen: E, onOpen: M, onClose: D } = fE({
    isOpen: f,
    defaultIsOpen: p,
    onOpen: l,
    onClose: c
  }), { referenceRef: O, getPopperProps: I, getArrowInnerProps: le, getArrowProps: N } = uE({
    enabled: E,
    placement: u,
    arrowPadding: S,
    modifiers: _,
    gutter: C,
    offset: k,
    direction: w
  }), W = wo(), K = `tooltip-${d ?? W}`, Q = Te(null), je = Te(), be = fe(() => {
    je.current && (clearTimeout(je.current), je.current = void 0);
  }, []), Me = Te(), Y = fe(() => {
    Me.current && (clearTimeout(Me.current), Me.current = void 0);
  }, []), Ce = fe(() => {
    Y(), D();
  }, [D, Y]), H = mE(Q, Ce), Ae = fe(() => {
    if (!b && !je.current) {
      E && H();
      const R = Ti(Q);
      je.current = R.setTimeout(M, t);
    }
  }, [H, b, E, M, t]), de = fe(() => {
    be();
    const R = Ti(Q);
    Me.current = R.setTimeout(Ce, r);
  }, [r, Ce, be]), he = fe(() => {
    E && n && de();
  }, [n, de, E]), Ve = fe(() => {
    E && a && de();
  }, [a, de, E]), ye = fe(
    (R) => {
      E && R.key === "Escape" && de();
    },
    [E, de]
  );
  fs(
    () => Us(Q),
    "keydown",
    s ? ye : void 0
  ), fs(
    () => {
      if (!i)
        return null;
      const R = Q.current;
      if (!R)
        return null;
      const Pe = mh(R);
      return Pe.localName === "body" ? Ti(Q) : Pe;
    },
    "scroll",
    () => {
      E && i && Ce();
    },
    { passive: !0, capture: !0 }
  ), We(() => {
    b && (be(), E && D());
  }, [b, E, D, be]), We(() => () => {
    be(), Y();
  }, [be, Y]), fs(() => Q.current, "pointerleave", de);
  const Le = fe(
    (R = {}, Pe = null) => ({
      ...R,
      ref: Yi(Q, Pe, O),
      onPointerEnter: Bn(R.onPointerEnter, (ct) => {
        ct.pointerType !== "touch" && Ae();
      }),
      onClick: Bn(R.onClick, he),
      onPointerDown: Bn(R.onPointerDown, Ve),
      onFocus: Bn(R.onFocus, Ae),
      onBlur: Bn(R.onBlur, de),
      "aria-describedby": E ? K : void 0
    }),
    [
      Ae,
      de,
      Ve,
      E,
      K,
      he,
      O
    ]
  ), Ie = fe(
    (R = {}, Pe = null) => I(
      {
        ...R,
        style: {
          ...R.style,
          [Ge.arrowSize.var]: g ? `${g}px` : void 0,
          [Ge.arrowShadowColor.var]: v
        }
      },
      Pe
    ),
    [I, g, v]
  ), De = fe(
    (R = {}, Pe = null) => {
      const lt = {
        ...R.style,
        position: "relative",
        transformOrigin: Ge.transformOrigin.varRef
      };
      return {
        ref: Pe,
        ...A,
        ...R,
        id: K,
        role: "tooltip",
        style: lt
      };
    },
    [A, K]
  );
  return {
    isOpen: E,
    show: Ae,
    hide: de,
    getTriggerProps: Le,
    getTooltipProps: De,
    getTooltipPositionerProps: Ie,
    getArrowProps: N,
    getArrowInnerProps: le
  };
}
var ps = "chakra-ui:close-tooltip";
function mE(e, t) {
  return We(() => {
    const r = Us(e);
    return r.addEventListener(ps, t), () => r.removeEventListener(ps, t);
  }, [t, e]), () => {
    const r = Us(e), n = Ti(e);
    r.dispatchEvent(new n.CustomEvent(ps));
  };
}
function gE(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function vE(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
var bE = we(oh.div), Hl = wt((e, t) => {
  var r, n;
  const o = Pn("Tooltip", e), i = Tn(e), a = lf(), {
    children: s,
    label: l,
    shouldWrapChildren: c,
    "aria-label": u,
    hasArrow: d,
    bg: f,
    portalProps: p,
    background: g,
    backgroundColor: v,
    bgColor: S,
    motionProps: _,
    ...b
  } = i, C = (n = (r = g ?? v) != null ? r : f) != null ? n : S;
  if (C) {
    o.bg = C;
    const I = Jv(a, "colors", C);
    o[Ge.arrowBg.var] = I;
  }
  const k = hE({ ...b, direction: a.direction }), w = typeof s == "string" || c;
  let A;
  if (w)
    A = /* @__PURE__ */ P.jsx(
      we.span,
      {
        display: "inline-block",
        tabIndex: 0,
        ...k.getTriggerProps(),
        children: s
      }
    );
  else {
    const I = Gi.only(s);
    A = Co(
      I,
      k.getTriggerProps(I.props, I.ref)
    );
  }
  const E = !!u, M = k.getTooltipProps({}, t), D = E ? gE(M, ["role", "id"]) : M, O = vE(M, ["role", "id"]);
  return l ? /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
    A,
    /* @__PURE__ */ P.jsx(ah, { children: k.isOpen && /* @__PURE__ */ P.jsx(To, { ...p, children: /* @__PURE__ */ P.jsx(
      we.div,
      {
        ...k.getTooltipPositionerProps(),
        __css: {
          zIndex: o.zIndex,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ P.jsxs(
          bE,
          {
            variants: pE,
            initial: "exit",
            animate: "enter",
            exit: "exit",
            ..._,
            ...D,
            __css: o,
            children: [
              l,
              E && /* @__PURE__ */ P.jsx(we.span, { srOnly: !0, ...O, children: u }),
              d && /* @__PURE__ */ P.jsx(
                we.div,
                {
                  "data-popper-arrow": !0,
                  className: "chakra-tooltip__arrow-wrapper",
                  children: /* @__PURE__ */ P.jsx(
                    we.div,
                    {
                      "data-popper-arrow-inner": !0,
                      className: "chakra-tooltip__arrow",
                      __css: { bg: o.bg }
                    }
                  )
                }
              )
            ]
          }
        )
      }
    ) }) })
  ] }) : /* @__PURE__ */ P.jsx(P.Fragment, { children: s });
});
Hl.displayName = "Tooltip";
var yE = ha({
  displayName: "SunIcon",
  path: /* @__PURE__ */ P.jsxs(
    "g",
    {
      strokeLinejoin: "round",
      strokeLinecap: "round",
      strokeWidth: "2",
      fill: "none",
      stroke: "currentColor",
      children: [
        /* @__PURE__ */ P.jsx("circle", { cx: "12", cy: "12", r: "5" }),
        /* @__PURE__ */ P.jsx("path", { d: "M12 1v2" }),
        /* @__PURE__ */ P.jsx("path", { d: "M12 21v2" }),
        /* @__PURE__ */ P.jsx("path", { d: "M4.22 4.22l1.42 1.42" }),
        /* @__PURE__ */ P.jsx("path", { d: "M18.36 18.36l1.42 1.42" }),
        /* @__PURE__ */ P.jsx("path", { d: "M1 12h2" }),
        /* @__PURE__ */ P.jsx("path", { d: "M21 12h2" }),
        /* @__PURE__ */ P.jsx("path", { d: "M4.22 19.78l1.42-1.42" }),
        /* @__PURE__ */ P.jsx("path", { d: "M18.36 5.64l1.42-1.42" })
      ]
    }
  )
}), xE = ha({
  d: "M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z",
  displayName: "MoonIcon"
}), SE = ha({
  displayName: "CloseIcon",
  d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
}), wE = ha({
  d: "M0.913134,0.920639 C1.49851,0.331726 2.29348,0 3.12342,0 L10.8766,0 C11.7065,0 12.5015,0.331725 13.0869,0.920639 C13.6721,1.50939 14,2.30689 14,3.13746 L14,8.12943 C13.9962,8.51443 13.9059,8.97125 13.7629,9.32852 C13.6128,9.683 13.3552,10.0709 13.0869,10.3462 C12.813,10.6163 12.4265,10.8761 12.0734,11.0274 C11.7172,11.1716 11.2607,11.263 10.8766,11.2669 L10.1234,11.2669 L10.1234,12.5676 L10.1209,12.5676 C10.1204,12.793 10.0633,13.0791 9.97807,13.262 C9.8627,13.466 9.61158,13.7198 9.40818,13.8382 L9.40824,13.8383 C9.4077,13.8386 9.40716,13.8388 9.40661,13.8391 C9.40621,13.8393 9.4058,13.8396 9.40539,13.8398 L9.40535,13.8397 C9.22958,13.9254 8.94505,13.9951 8.75059,14 L8.74789,14 C8.35724,13.9963 7.98473,13.8383 7.71035,13.5617 L5.39553,11.2669 L3.12342,11.2669 C2.29348,11.2669 1.49851,10.9352 0.913134,10.3462 C0.644826,10.0709 0.387187,9.683 0.23711,9.32852 C0.0941235,8.97125 0.00379528,8.51443 0,8.12943 L0,3.13746 C0,2.30689 0.327915,1.50939 0.913134,0.920639 Z M3.12342,1.59494 C2.71959,1.59494 2.33133,1.75628 2.04431,2.04503 C1.75713,2.33395 1.59494,2.72681 1.59494,3.13746 L1.59494,8.12943 C1.59114,8.35901 1.62114,8.51076 1.71193,8.72129 C1.79563,8.9346 1.88065,9.06264 2.04431,9.22185 C2.33133,9.5106 2.71959,9.67195 3.12342,9.67195 L5.72383,9.67195 C5.93413,9.67195 6.13592,9.75502 6.28527,9.90308 L8.52848,12.1269 L8.52848,10.4694 C8.52848,10.029 8.88552,9.67195 9.32595,9.67195 L10.8766,9.67195 C11.1034,9.67583 11.2517,9.64614 11.4599,9.55518 C11.6712,9.47132 11.7976,9.38635 11.9557,9.22185 C12.1193,9.06264 12.2044,8.9346 12.2881,8.72129 C12.3789,8.51076 12.4089,8.35901 12.4051,8.12943 L12.4051,3.13746 C12.4051,2.72681 12.2429,2.33394 11.9557,2.04503 C11.6687,1.75628 11.2804,1.59494 10.8766,1.59494 L3.12342,1.59494 Z",
  displayName: "ChatIcon",
  viewBox: "0 0 14 14"
});
const CE = ({
  onClick: e,
  showInterview: t
}) => /* @__PURE__ */ P.jsx(Hl, { hasArrow: !0, label: t ? "Hide Interview" : "Show Interview", placement: "left", children: /* @__PURE__ */ P.jsx(
  hh,
  {
    "aria-label": "Toggle Interview",
    size: "lg",
    icon: t ? /* @__PURE__ */ P.jsx(SE, {}) : /* @__PURE__ */ P.jsx(wE, {}),
    colorScheme: "blue",
    isRound: !0,
    width: "fit-content",
    position: "absolute",
    right: "20px",
    bottom: "20px",
    onClick: e
  }
) }), _E = () => /* @__PURE__ */ P.jsx(zl, { justifyContent: "center", alignItems: "center", h: "100vh", children: /* @__PURE__ */ P.jsx(gh, { fontSize: "1.2rem", children: "Interview Screen" }) }), kE = () => {
  const { colorMode: e, toggleColorMode: t } = ra();
  return /* @__PURE__ */ P.jsx(
    Hl,
    {
      hasArrow: !0,
      placement: "left",
      label: e === "light" ? "Toggle Dark Mode" : "Toggle Light Mode",
      children: /* @__PURE__ */ P.jsx(
        Dl,
        {
          onClick: t,
          width: "fit-content",
          position: "absolute",
          top: "20px",
          right: "20px",
          children: e === "light" ? /* @__PURE__ */ P.jsx(xE, {}) : /* @__PURE__ */ P.jsx(yE, {})
        }
      )
    }
  );
}, RE = () => {
  const [e, t] = Ht(!1), r = () => {
    t(!e);
  };
  return /* @__PURE__ */ P.jsx(jP, { children: /* @__PURE__ */ P.jsxs(zl, { h: "100vh", children: [
    /* @__PURE__ */ P.jsx(kE, {}),
    /* @__PURE__ */ P.jsx(CE, { onClick: r, showInterview: e }),
    e && /* @__PURE__ */ P.jsx(_E, {})
  ] }) });
};
export {
  RE as Interview
};
