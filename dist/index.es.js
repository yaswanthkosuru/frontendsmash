import * as te from "react";
import ke, { forwardRef as Qn, useContext as it, createContext as Vr, useLayoutEffect as Fu, useEffect as Me, useState as ue, useRef as De, useMemo as ot, useCallback as pe, useInsertionEffect as hy, createElement as _S, useId as zr, cloneElement as Fs, Children as Ns, isValidElement as Nu, memo as PS, useSyncExternalStore as OS, PureComponent as ES, Fragment as kS } from "react";
import { createPortal as my } from "react-dom";
var Nn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function TS(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Bc = { exports: {} }, oa = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xd;
function CS() {
  return xd || (xd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ke, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), x = Symbol.iterator, w = "@@iterator";
    function _(b) {
      if (b === null || typeof b != "object")
        return null;
      var N = x && b[x] || b[w];
      return typeof N == "function" ? N : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(b) {
      {
        for (var N = arguments.length, H = new Array(N > 1 ? N - 1 : 0), ee = 1; ee < N; ee++)
          H[ee - 1] = arguments[ee];
        k("error", b, H);
      }
    }
    function k(b, N, H) {
      {
        var ee = T.ReactDebugCurrentFrame, ce = ee.getStackAddendum();
        ce !== "" && (N += "%s", H = H.concat([ce]));
        var de = H.map(function(se) {
          return String(se);
        });
        de.unshift("Warning: " + N), Function.prototype.apply.call(console[b], console, de);
      }
    }
    var $ = !1, S = !1, C = !1, v = !1, f = !1, h;
    h = Symbol.for("react.module.reference");
    function p(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === n || b === a || f || b === o || b === c || b === u || v || b === y || $ || S || C || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === d || b.$$typeof === i || b.$$typeof === s || b.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === h || b.getModuleId !== void 0));
    }
    function g(b, N, H) {
      var ee = b.displayName;
      if (ee)
        return ee;
      var ce = N.displayName || N.name || "";
      return ce !== "" ? H + "(" + ce + ")" : H;
    }
    function A(b) {
      return b.displayName || "Context";
    }
    function D(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case s:
            var N = b;
            return A(N) + ".Consumer";
          case i:
            var H = b;
            return A(H._context) + ".Provider";
          case l:
            return g(b, b.render, "ForwardRef");
          case d:
            var ee = b.displayName || null;
            return ee !== null ? ee : D(b.type) || "Memo";
          case m: {
            var ce = b, de = ce._payload, se = ce._init;
            try {
              return D(se(de));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, F = 0, U, L, j, V, E, O, B;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function Y() {
      {
        if (F === 0) {
          U = console.log, L = console.info, j = console.warn, V = console.error, E = console.group, O = console.groupCollapsed, B = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: K,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        F++;
      }
    }
    function Z() {
      {
        if (F--, F === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, b, {
              value: U
            }),
            info: R({}, b, {
              value: L
            }),
            warn: R({}, b, {
              value: j
            }),
            error: R({}, b, {
              value: V
            }),
            group: R({}, b, {
              value: E
            }),
            groupCollapsed: R({}, b, {
              value: O
            }),
            groupEnd: R({}, b, {
              value: B
            })
          });
        }
        F < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = T.ReactCurrentDispatcher, re;
    function J(b, N, H) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (ce) {
            var ee = ce.stack.trim().match(/\n( *(at )?)/);
            re = ee && ee[1] || "";
          }
        return `
` + re + b;
      }
    }
    var oe = !1, ae;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new ne();
    }
    function G(b, N) {
      if (!b || oe)
        return "";
      {
        var H = ae.get(b);
        if (H !== void 0)
          return H;
      }
      var ee;
      oe = !0;
      var ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var de;
      de = Q.current, Q.current = null, Y();
      try {
        if (N) {
          var se = function() {
            throw Error();
          };
          if (Object.defineProperty(se.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(se, []);
            } catch (Ge) {
              ee = Ge;
            }
            Reflect.construct(b, [], se);
          } else {
            try {
              se.call();
            } catch (Ge) {
              ee = Ge;
            }
            b.call(se.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ge) {
            ee = Ge;
          }
          b();
        }
      } catch (Ge) {
        if (Ge && ee && typeof Ge.stack == "string") {
          for (var ie = Ge.stack.split(`
`), Ee = ee.stack.split(`
`), be = ie.length - 1, Se = Ee.length - 1; be >= 1 && Se >= 0 && ie[be] !== Ee[Se]; )
            Se--;
          for (; be >= 1 && Se >= 0; be--, Se--)
            if (ie[be] !== Ee[Se]) {
              if (be !== 1 || Se !== 1)
                do
                  if (be--, Se--, Se < 0 || ie[be] !== Ee[Se]) {
                    var Ve = `
` + ie[be].replace(" at new ", " at ");
                    return b.displayName && Ve.includes("<anonymous>") && (Ve = Ve.replace("<anonymous>", b.displayName)), typeof b == "function" && ae.set(b, Ve), Ve;
                  }
                while (be >= 1 && Se >= 0);
              break;
            }
        }
      } finally {
        oe = !1, Q.current = de, Z(), Error.prepareStackTrace = ce;
      }
      var xt = b ? b.displayName || b.name : "", Rn = xt ? J(xt) : "";
      return typeof b == "function" && ae.set(b, Rn), Rn;
    }
    function ge(b, N, H) {
      return G(b, !1);
    }
    function et(b) {
      var N = b.prototype;
      return !!(N && N.isReactComponent);
    }
    function Be(b, N, H) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return G(b, et(b));
      if (typeof b == "string")
        return J(b);
      switch (b) {
        case c:
          return J("Suspense");
        case u:
          return J("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case l:
            return ge(b.render);
          case d:
            return Be(b.type, N, H);
          case m: {
            var ee = b, ce = ee._payload, de = ee._init;
            try {
              return Be(de(ce), N, H);
            } catch {
            }
          }
        }
      return "";
    }
    var Je = Object.prototype.hasOwnProperty, ht = {}, Ke = T.ReactDebugCurrentFrame;
    function bt(b) {
      if (b) {
        var N = b._owner, H = Be(b.type, b._source, N ? N.type : null);
        Ke.setExtraStackFrame(H);
      } else
        Ke.setExtraStackFrame(null);
    }
    function lt(b, N, H, ee, ce) {
      {
        var de = Function.call.bind(Je);
        for (var se in b)
          if (de(b, se)) {
            var ie = void 0;
            try {
              if (typeof b[se] != "function") {
                var Ee = Error((ee || "React class") + ": " + H + " type `" + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ee.name = "Invariant Violation", Ee;
              }
              ie = b[se](N, se, ee, H, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (be) {
              ie = be;
            }
            ie && !(ie instanceof Error) && (bt(ce), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ee || "React class", H, se, typeof ie), bt(null)), ie instanceof Error && !(ie.message in ht) && (ht[ie.message] = !0, bt(ce), P("Failed %s type: %s", H, ie.message), bt(null));
          }
      }
    }
    var Tt = Array.isArray;
    function mt(b) {
      return Tt(b);
    }
    function at(b) {
      {
        var N = typeof Symbol == "function" && Symbol.toStringTag, H = N && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return H;
      }
    }
    function Vt(b) {
      try {
        return Mt(b), !1;
      } catch {
        return !0;
      }
    }
    function Mt(b) {
      return "" + b;
    }
    function nr(b) {
      if (Vt(b))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", at(b)), Mt(b);
    }
    var St = T.ReactCurrentOwner, Kt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, vr, xr, or;
    or = {};
    function sn(b) {
      if (Je.call(b, "ref")) {
        var N = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function fe(b) {
      if (Je.call(b, "key")) {
        var N = Object.getOwnPropertyDescriptor(b, "key").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function ct(b, N) {
      if (typeof b.ref == "string" && St.current && N && St.current.stateNode !== N) {
        var H = D(St.current.type);
        or[H] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(St.current.type), b.ref), or[H] = !0);
      }
    }
    function zt(b, N) {
      {
        var H = function() {
          vr || (vr = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        H.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: H,
          configurable: !0
        });
      }
    }
    function tt(b, N) {
      {
        var H = function() {
          xr || (xr = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        H.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: H,
          configurable: !0
        });
      }
    }
    var It = function(b, N, H, ee, ce, de, se) {
      var ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: b,
        key: N,
        ref: H,
        props: se,
        // Record the component responsible for creating this element.
        _owner: de
      };
      return ie._store = {}, Object.defineProperty(ie._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ie, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.defineProperty(ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.freeze && (Object.freeze(ie.props), Object.freeze(ie)), ie;
    };
    function ln(b, N, H, ee, ce) {
      {
        var de, se = {}, ie = null, Ee = null;
        H !== void 0 && (nr(H), ie = "" + H), fe(N) && (nr(N.key), ie = "" + N.key), sn(N) && (Ee = N.ref, ct(N, ce));
        for (de in N)
          Je.call(N, de) && !Kt.hasOwnProperty(de) && (se[de] = N[de]);
        if (b && b.defaultProps) {
          var be = b.defaultProps;
          for (de in be)
            se[de] === void 0 && (se[de] = be[de]);
        }
        if (ie || Ee) {
          var Se = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          ie && zt(se, Se), Ee && tt(se, Se);
        }
        return It(b, ie, Ee, ce, ee, St.current, se);
      }
    }
    var Gt = T.ReactCurrentOwner, _r = T.ReactDebugCurrentFrame;
    function yt(b) {
      if (b) {
        var N = b._owner, H = Be(b.type, b._source, N ? N.type : null);
        _r.setExtraStackFrame(H);
      } else
        _r.setExtraStackFrame(null);
    }
    var Ct;
    Ct = !1;
    function ar(b) {
      return typeof b == "object" && b !== null && b.$$typeof === t;
    }
    function Rt() {
      {
        if (Gt.current) {
          var b = D(Gt.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function cn(b) {
      {
        if (b !== void 0) {
          var N = b.fileName.replace(/^.*[\\\/]/, ""), H = b.lineNumber;
          return `

Check your code at ` + N + ":" + H + ".";
        }
        return "";
      }
    }
    var En = {};
    function Zo(b) {
      {
        var N = Rt();
        if (!N) {
          var H = typeof b == "string" ? b : b.displayName || b.name;
          H && (N = `

Check the top-level render call using <` + H + ">.");
        }
        return N;
      }
    }
    function kn(b, N) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var H = Zo(N);
        if (En[H])
          return;
        En[H] = !0;
        var ee = "";
        b && b._owner && b._owner !== Gt.current && (ee = " It was passed a child from " + D(b._owner.type) + "."), yt(b), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', H, ee), yt(null);
      }
    }
    function Tn(b, N) {
      {
        if (typeof b != "object")
          return;
        if (mt(b))
          for (var H = 0; H < b.length; H++) {
            var ee = b[H];
            ar(ee) && kn(ee, N);
          }
        else if (ar(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var ce = _(b);
          if (typeof ce == "function" && ce !== b.entries)
            for (var de = ce.call(b), se; !(se = de.next()).done; )
              ar(se.value) && kn(se.value, N);
        }
      }
    }
    function Xt(b) {
      {
        var N = b.type;
        if (N == null || typeof N == "string")
          return;
        var H;
        if (typeof N == "function")
          H = N.propTypes;
        else if (typeof N == "object" && (N.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        N.$$typeof === d))
          H = N.propTypes;
        else
          return;
        if (H) {
          var ee = D(N);
          lt(H, b.props, "prop", ee, b);
        } else if (N.PropTypes !== void 0 && !Ct) {
          Ct = !0;
          var ce = D(N);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
        }
        typeof N.getDefaultProps == "function" && !N.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jo(b) {
      {
        for (var N = Object.keys(b.props), H = 0; H < N.length; H++) {
          var ee = N[H];
          if (ee !== "children" && ee !== "key") {
            yt(b), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ee), yt(null);
            break;
          }
        }
        b.ref !== null && (yt(b), P("Invalid attribute `ref` supplied to `React.Fragment`."), yt(null));
      }
    }
    function Cn(b, N, H, ee, ce, de) {
      {
        var se = p(b);
        if (!se) {
          var ie = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ee = cn(ce);
          Ee ? ie += Ee : ie += Rt();
          var be;
          b === null ? be = "null" : mt(b) ? be = "array" : b !== void 0 && b.$$typeof === t ? (be = "<" + (D(b.type) || "Unknown") + " />", ie = " Did you accidentally export a JSX literal instead of a component?") : be = typeof b, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", be, ie);
        }
        var Se = ln(b, N, H, ce, de);
        if (Se == null)
          return Se;
        if (se) {
          var Ve = N.children;
          if (Ve !== void 0)
            if (ee)
              if (mt(Ve)) {
                for (var xt = 0; xt < Ve.length; xt++)
                  Tn(Ve[xt], b);
                Object.freeze && Object.freeze(Ve);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Tn(Ve, b);
        }
        return b === n ? Jo(Se) : Xt(Se), Se;
      }
    }
    function Qo(b, N, H) {
      return Cn(b, N, H, !0);
    }
    function ea(b, N, H) {
      return Cn(b, N, H, !1);
    }
    var ta = ea, Pr = Qo;
    oa.Fragment = n, oa.jsx = ta, oa.jsxs = Pr;
  }()), oa;
}
var aa = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _d;
function RS() {
  if (_d)
    return aa;
  _d = 1;
  var e = ke, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, c) {
    var u, d = {}, m = null, y = null;
    c !== void 0 && (m = "" + c), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (y = l.ref);
    for (u in l)
      n.call(l, u) && !a.hasOwnProperty(u) && (d[u] = l[u]);
    if (s && s.defaultProps)
      for (u in l = s.defaultProps, l)
        d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: s, key: m, ref: y, props: d, _owner: o.current };
  }
  return aa.Fragment = r, aa.jsx = i, aa.jsxs = i, aa;
}
process.env.NODE_ENV === "production" ? Bc.exports = RS() : Bc.exports = CS();
var I = Bc.exports;
function AS(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function DS(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var MS = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var a;
      n.tags.length === 0 ? n.insertionPoint ? a = n.insertionPoint.nextSibling : n.prepend ? a = n.container.firstChild : a = n.before : a = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, a), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(DS(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var a = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      a && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !a;
    }
    if (this.isSpeedy) {
      var i = AS(o);
      try {
        i.insertRule(n, i.cssRules.length);
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
}(), At = "-ms-", hs = "-moz-", Ce = "-webkit-", Bu = "comm", Vu = "rule", zu = "decl", IS = "@import", yy = "@keyframes", $S = "@layer", jS = Math.abs, Vs = String.fromCharCode, LS = Object.assign;
function FS(e, t) {
  return Et(e, 0) ^ 45 ? (((t << 2 ^ Et(e, 0)) << 2 ^ Et(e, 1)) << 2 ^ Et(e, 2)) << 2 ^ Et(e, 3) : 0;
}
function vy(e) {
  return e.trim();
}
function NS(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Re(e, t, r) {
  return e.replace(t, r);
}
function Vc(e, t) {
  return e.indexOf(t);
}
function Et(e, t) {
  return e.charCodeAt(t) | 0;
}
function Fa(e, t, r) {
  return e.slice(t, r);
}
function Tr(e) {
  return e.length;
}
function Wu(e) {
  return e.length;
}
function Oi(e, t) {
  return t.push(e), e;
}
function BS(e, t) {
  return e.map(t).join("");
}
var zs = 1, Mo = 1, gy = 0, qt = 0, dt = 0, Ho = "";
function Ws(e, t, r, n, o, a, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: zs, column: Mo, length: i, return: "" };
}
function ia(e, t) {
  return LS(Ws("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function VS() {
  return dt;
}
function zS() {
  return dt = qt > 0 ? Et(Ho, --qt) : 0, Mo--, dt === 10 && (Mo = 1, zs--), dt;
}
function Jt() {
  return dt = qt < gy ? Et(Ho, qt++) : 0, Mo++, dt === 10 && (Mo = 1, zs++), dt;
}
function $r() {
  return Et(Ho, qt);
}
function qi() {
  return qt;
}
function oi(e, t) {
  return Fa(Ho, e, t);
}
function Na(e) {
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
function by(e) {
  return zs = Mo = 1, gy = Tr(Ho = e), qt = 0, [];
}
function Sy(e) {
  return Ho = "", e;
}
function Yi(e) {
  return vy(oi(qt - 1, zc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function WS(e) {
  for (; (dt = $r()) && dt < 33; )
    Jt();
  return Na(e) > 2 || Na(dt) > 3 ? "" : " ";
}
function US(e, t) {
  for (; --t && Jt() && !(dt < 48 || dt > 102 || dt > 57 && dt < 65 || dt > 70 && dt < 97); )
    ;
  return oi(e, qi() + (t < 6 && $r() == 32 && Jt() == 32));
}
function zc(e) {
  for (; Jt(); )
    switch (dt) {
      case e:
        return qt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && zc(dt);
        break;
      case 40:
        e === 41 && zc(e);
        break;
      case 92:
        Jt();
        break;
    }
  return qt;
}
function HS(e, t) {
  for (; Jt() && e + dt !== 47 + 10; )
    if (e + dt === 42 + 42 && $r() === 47)
      break;
  return "/*" + oi(t, qt - 1) + "*" + Vs(e === 47 ? e : Jt());
}
function qS(e) {
  for (; !Na($r()); )
    Jt();
  return oi(e, qt);
}
function YS(e) {
  return Sy(Ki("", null, null, null, [""], e = by(e), 0, [0], e));
}
function Ki(e, t, r, n, o, a, i, s, l) {
  for (var c = 0, u = 0, d = i, m = 0, y = 0, x = 0, w = 1, _ = 1, T = 1, P = 0, k = "", $ = o, S = a, C = n, v = k; _; )
    switch (x = P, P = Jt()) {
      case 40:
        if (x != 108 && Et(v, d - 1) == 58) {
          Vc(v += Re(Yi(P), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        v += Yi(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        v += WS(x);
        break;
      case 92:
        v += US(qi() - 1, 7);
        continue;
      case 47:
        switch ($r()) {
          case 42:
          case 47:
            Oi(KS(HS(Jt(), qi()), t, r), l);
            break;
          default:
            v += "/";
        }
        break;
      case 123 * w:
        s[c++] = Tr(v) * T;
      case 125 * w:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            _ = 0;
          case 59 + u:
            T == -1 && (v = Re(v, /\f/g, "")), y > 0 && Tr(v) - d && Oi(y > 32 ? Od(v + ";", n, r, d - 1) : Od(Re(v, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            v += ";";
          default:
            if (Oi(C = Pd(v, t, r, c, u, o, s, k, $ = [], S = [], d), a), P === 123)
              if (u === 0)
                Ki(v, t, C, C, $, a, d, s, S);
              else
                switch (m === 99 && Et(v, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ki(e, C, C, n && Oi(Pd(e, C, C, 0, 0, o, s, k, o, $ = [], d), S), o, S, d, s, n ? $ : S);
                    break;
                  default:
                    Ki(v, C, C, C, [""], S, 0, s, S);
                }
        }
        c = u = y = 0, w = T = 1, k = v = "", d = i;
        break;
      case 58:
        d = 1 + Tr(v), y = x;
      default:
        if (w < 1) {
          if (P == 123)
            --w;
          else if (P == 125 && w++ == 0 && zS() == 125)
            continue;
        }
        switch (v += Vs(P), P * w) {
          case 38:
            T = u > 0 ? 1 : (v += "\f", -1);
            break;
          case 44:
            s[c++] = (Tr(v) - 1) * T, T = 1;
            break;
          case 64:
            $r() === 45 && (v += Yi(Jt())), m = $r(), u = d = Tr(k = v += qS(qi())), P++;
            break;
          case 45:
            x === 45 && Tr(v) == 2 && (w = 0);
        }
    }
  return a;
}
function Pd(e, t, r, n, o, a, i, s, l, c, u) {
  for (var d = o - 1, m = o === 0 ? a : [""], y = Wu(m), x = 0, w = 0, _ = 0; x < n; ++x)
    for (var T = 0, P = Fa(e, d + 1, d = jS(w = i[x])), k = e; T < y; ++T)
      (k = vy(w > 0 ? m[T] + " " + P : Re(P, /&\f/g, m[T]))) && (l[_++] = k);
  return Ws(e, t, r, o === 0 ? Vu : s, l, c, u);
}
function KS(e, t, r) {
  return Ws(e, t, r, Bu, Vs(VS()), Fa(e, 2, -2), 0);
}
function Od(e, t, r, n) {
  return Ws(e, t, r, zu, Fa(e, 0, n), Fa(e, n + 1, -1), n);
}
function Oo(e, t) {
  for (var r = "", n = Wu(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function GS(e, t, r, n) {
  switch (e.type) {
    case $S:
      if (e.children.length)
        break;
    case IS:
    case zu:
      return e.return = e.return || e.value;
    case Bu:
      return "";
    case yy:
      return e.return = e.value + "{" + Oo(e.children, n) + "}";
    case Vu:
      e.value = e.props.join(",");
  }
  return Tr(r = Oo(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function XS(e) {
  var t = Wu(e);
  return function(r, n, o, a) {
    for (var i = "", s = 0; s < t; s++)
      i += e[s](r, n, o, a) || "";
    return i;
  };
}
function ZS(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Ed = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function wy(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var JS = function(t, r, n) {
  for (var o = 0, a = 0; o = a, a = $r(), o === 38 && a === 12 && (r[n] = 1), !Na(a); )
    Jt();
  return oi(t, qt);
}, QS = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Na(o)) {
      case 0:
        o === 38 && $r() === 12 && (r[n] = 1), t[n] += JS(qt - 1, r, n);
        break;
      case 2:
        t[n] += Yi(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = $r() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Vs(o);
    }
  while (o = Jt());
  return t;
}, ew = function(t, r) {
  return Sy(QS(by(t), r));
}, kd = /* @__PURE__ */ new WeakMap(), tw = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !kd.get(n)) && !o) {
      kd.set(t, !0);
      for (var a = [], i = ew(r, a), s = n.props, l = 0, c = 0; l < i.length; l++)
        for (var u = 0; u < s.length; u++, c++)
          t.props[c] = a[l] ? i[l].replace(/&\f/g, s[u]) : s[u] + " " + i[l];
    }
  }
}, rw = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, nw = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", ow = function(t) {
  return t.type === "comm" && t.children.indexOf(nw) > -1;
}, aw = function(t) {
  return function(r, n, o) {
    if (!(r.type !== "rule" || t.compat)) {
      var a = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (a) {
        for (var i = !!r.parent, s = i ? r.parent.children : (
          // global rule at the root level
          o
        ), l = s.length - 1; l >= 0; l--) {
          var c = s[l];
          if (c.line < r.line)
            break;
          if (c.column < r.column) {
            if (ow(c))
              return;
            break;
          }
        }
        a.forEach(function(u) {
          console.error('The pseudo class "' + u + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + u.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, xy = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, iw = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!xy(r[n]))
      return !0;
  return !1;
}, Td = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, sw = function(t, r, n) {
  xy(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Td(t)) : iw(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Td(t)));
};
function _y(e, t) {
  switch (FS(e, t)) {
    case 5103:
      return Ce + "print-" + e + e;
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
      return Ce + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ce + e + hs + e + At + e + e;
    case 6828:
    case 4268:
      return Ce + e + At + e + e;
    case 6165:
      return Ce + e + At + "flex-" + e + e;
    case 5187:
      return Ce + e + Re(e, /(\w+).+(:[^]+)/, Ce + "box-$1$2" + At + "flex-$1$2") + e;
    case 5443:
      return Ce + e + At + "flex-item-" + Re(e, /flex-|-self/, "") + e;
    case 4675:
      return Ce + e + At + "flex-line-pack" + Re(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Ce + e + At + Re(e, "shrink", "negative") + e;
    case 5292:
      return Ce + e + At + Re(e, "basis", "preferred-size") + e;
    case 6060:
      return Ce + "box-" + Re(e, "-grow", "") + Ce + e + At + Re(e, "grow", "positive") + e;
    case 4554:
      return Ce + Re(e, /([^-])(transform)/g, "$1" + Ce + "$2") + e;
    case 6187:
      return Re(Re(Re(e, /(zoom-|grab)/, Ce + "$1"), /(image-set)/, Ce + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Re(e, /(image-set\([^]*)/, Ce + "$1$`$1");
    case 4968:
      return Re(Re(e, /(.+:)(flex-)?(.*)/, Ce + "box-pack:$3" + At + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ce + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Re(e, /(.+)-inline(.+)/, Ce + "$1$2") + e;
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
      if (Tr(e) - 1 - t > 6)
        switch (Et(e, t + 1)) {
          case 109:
            if (Et(e, t + 4) !== 45)
              break;
          case 102:
            return Re(e, /(.+:)(.+)-([^]+)/, "$1" + Ce + "$2-$3$1" + hs + (Et(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Vc(e, "stretch") ? _y(Re(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Et(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Et(e, Tr(e) - 3 - (~Vc(e, "!important") && 10))) {
        case 107:
          return Re(e, ":", ":" + Ce) + e;
        case 101:
          return Re(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ce + (Et(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ce + "$2$3$1" + At + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Et(e, t + 11)) {
        case 114:
          return Ce + e + At + Re(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ce + e + At + Re(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ce + e + At + Re(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ce + e + At + e + e;
  }
  return e;
}
var lw = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case zu:
        t.return = _y(t.value, t.length);
        break;
      case yy:
        return Oo([ia(t, {
          value: Re(t.value, "@", "@" + Ce)
        })], o);
      case Vu:
        if (t.length)
          return BS(t.props, function(a) {
            switch (NS(a, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Oo([ia(t, {
                  props: [Re(a, /:(read-\w+)/, ":" + hs + "$1")]
                })], o);
              case "::placeholder":
                return Oo([ia(t, {
                  props: [Re(a, /:(plac\w+)/, ":" + Ce + "input-$1")]
                }), ia(t, {
                  props: [Re(a, /:(plac\w+)/, ":" + hs + "$1")]
                }), ia(t, {
                  props: [Re(a, /:(plac\w+)/, At + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, cw = [lw], uw = function(t) {
  var r = t.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(w) {
      var _ = w.getAttribute("data-emotion");
      _.indexOf(" ") !== -1 && (document.head.appendChild(w), w.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || cw;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var a = {}, i, s = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(w) {
      for (var _ = w.getAttribute("data-emotion").split(" "), T = 1; T < _.length; T++)
        a[_[T]] = !0;
      s.push(w);
    }
  );
  var l, c = [tw, rw];
  process.env.NODE_ENV !== "production" && c.push(aw({
    get compat() {
      return x.compat;
    }
  }), sw);
  {
    var u, d = [GS, process.env.NODE_ENV !== "production" ? function(w) {
      w.root || (w.return ? u.insert(w.return) : w.value && w.type !== Bu && u.insert(w.value + "{}"));
    } : ZS(function(w) {
      u.insert(w);
    })], m = XS(c.concat(o, d)), y = function(_) {
      return Oo(YS(_), m);
    };
    l = function(_, T, P, k) {
      u = P, process.env.NODE_ENV !== "production" && T.map !== void 0 && (u = {
        insert: function(S) {
          P.insert(S + T.map);
        }
      }), y(_ ? _ + "{" + T.styles + "}" : T.styles), k && (x.inserted[T.name] = !0);
    };
  }
  var x = {
    key: r,
    sheet: new MS({
      key: r,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: a,
    registered: {},
    insert: l
  };
  return x.sheet.hydrate(s), x;
};
function Kn() {
  return Kn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kn.apply(this, arguments);
}
var Wc = { exports: {} }, $e = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cd;
function fw() {
  return Cd || (Cd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function k(G) {
      return typeof G == "string" || typeof G == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      G === n || G === c || G === a || G === o || G === d || G === m || typeof G == "object" && G !== null && (G.$$typeof === x || G.$$typeof === y || G.$$typeof === i || G.$$typeof === s || G.$$typeof === u || G.$$typeof === _ || G.$$typeof === T || G.$$typeof === P || G.$$typeof === w);
    }
    function $(G) {
      if (typeof G == "object" && G !== null) {
        var ge = G.$$typeof;
        switch (ge) {
          case t:
            var et = G.type;
            switch (et) {
              case l:
              case c:
              case n:
              case a:
              case o:
              case d:
                return et;
              default:
                var Be = et && et.$$typeof;
                switch (Be) {
                  case s:
                  case u:
                  case x:
                  case y:
                  case i:
                    return Be;
                  default:
                    return ge;
                }
            }
          case r:
            return ge;
        }
      }
    }
    var S = l, C = c, v = s, f = i, h = t, p = u, g = n, A = x, D = y, R = r, F = a, U = o, L = d, j = !1;
    function V(G) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(G) || $(G) === l;
    }
    function E(G) {
      return $(G) === c;
    }
    function O(G) {
      return $(G) === s;
    }
    function B(G) {
      return $(G) === i;
    }
    function K(G) {
      return typeof G == "object" && G !== null && G.$$typeof === t;
    }
    function Y(G) {
      return $(G) === u;
    }
    function Z(G) {
      return $(G) === n;
    }
    function Q(G) {
      return $(G) === x;
    }
    function re(G) {
      return $(G) === y;
    }
    function J(G) {
      return $(G) === r;
    }
    function oe(G) {
      return $(G) === a;
    }
    function ae(G) {
      return $(G) === o;
    }
    function ne(G) {
      return $(G) === d;
    }
    $e.AsyncMode = S, $e.ConcurrentMode = C, $e.ContextConsumer = v, $e.ContextProvider = f, $e.Element = h, $e.ForwardRef = p, $e.Fragment = g, $e.Lazy = A, $e.Memo = D, $e.Portal = R, $e.Profiler = F, $e.StrictMode = U, $e.Suspense = L, $e.isAsyncMode = V, $e.isConcurrentMode = E, $e.isContextConsumer = O, $e.isContextProvider = B, $e.isElement = K, $e.isForwardRef = Y, $e.isFragment = Z, $e.isLazy = Q, $e.isMemo = re, $e.isPortal = J, $e.isProfiler = oe, $e.isStrictMode = ae, $e.isSuspense = ne, $e.isValidElementType = k, $e.typeOf = $;
  }()), $e;
}
var je = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rd;
function dw() {
  if (Rd)
    return je;
  Rd = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function k(S) {
    if (typeof S == "object" && S !== null) {
      var C = S.$$typeof;
      switch (C) {
        case t:
          switch (S = S.type, S) {
            case l:
            case c:
            case n:
            case a:
            case o:
            case d:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case s:
                case u:
                case x:
                case y:
                case i:
                  return S;
                default:
                  return C;
              }
          }
        case r:
          return C;
      }
    }
  }
  function $(S) {
    return k(S) === c;
  }
  return je.AsyncMode = l, je.ConcurrentMode = c, je.ContextConsumer = s, je.ContextProvider = i, je.Element = t, je.ForwardRef = u, je.Fragment = n, je.Lazy = x, je.Memo = y, je.Portal = r, je.Profiler = a, je.StrictMode = o, je.Suspense = d, je.isAsyncMode = function(S) {
    return $(S) || k(S) === l;
  }, je.isConcurrentMode = $, je.isContextConsumer = function(S) {
    return k(S) === s;
  }, je.isContextProvider = function(S) {
    return k(S) === i;
  }, je.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, je.isForwardRef = function(S) {
    return k(S) === u;
  }, je.isFragment = function(S) {
    return k(S) === n;
  }, je.isLazy = function(S) {
    return k(S) === x;
  }, je.isMemo = function(S) {
    return k(S) === y;
  }, je.isPortal = function(S) {
    return k(S) === r;
  }, je.isProfiler = function(S) {
    return k(S) === a;
  }, je.isStrictMode = function(S) {
    return k(S) === o;
  }, je.isSuspense = function(S) {
    return k(S) === d;
  }, je.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === n || S === c || S === a || S === o || S === d || S === m || typeof S == "object" && S !== null && (S.$$typeof === x || S.$$typeof === y || S.$$typeof === i || S.$$typeof === s || S.$$typeof === u || S.$$typeof === _ || S.$$typeof === T || S.$$typeof === P || S.$$typeof === w);
  }, je.typeOf = k, je;
}
process.env.NODE_ENV === "production" ? Wc.exports = dw() : Wc.exports = fw();
var Uu = Wc.exports, Py = Uu, pw = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, hw = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Oy = {};
Oy[Py.ForwardRef] = pw;
Oy[Py.Memo] = hw;
var mw = !0;
function Hu(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Us = function(t, r, n) {
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
  mw === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, Hs = function(t, r, n) {
  Us(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var a = r;
    do
      t.insert(r === a ? "." + o : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function yw(e) {
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
var vw = {
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
}, Ad = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, gw = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", bw = /[A-Z]|^ms/g, Ey = /_EMO_([^_]+?)_([^]*?)_EMO_/g, qu = function(t) {
  return t.charCodeAt(1) === 45;
}, Dd = function(t) {
  return t != null && typeof t != "boolean";
}, Ol = /* @__PURE__ */ wy(function(e) {
  return qu(e) ? e : e.replace(bw, "-$&").toLowerCase();
}), ms = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Ey, function(n, o, a) {
          return br = {
            name: o,
            styles: a,
            next: br
          }, o;
        });
  }
  return vw[t] !== 1 && !qu(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var Sw = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, ww = ["normal", "none", "initial", "inherit", "unset"], xw = ms, _w = /^-ms-/, Pw = /-(.)/g, Md = {};
  ms = function(t, r) {
    if (t === "content" && (typeof r != "string" || ww.indexOf(r) === -1 && !Sw.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = xw(t, r);
    return n !== "" && !qu(t) && t.indexOf("-") !== -1 && Md[t] === void 0 && (Md[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(_w, "ms-").replace(Pw, function(o, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var ky = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Ba(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(ky);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return br = {
          name: r.name,
          styles: r.styles,
          next: br
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            br = {
              name: n.name,
              styles: n.styles,
              next: br
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return Ow(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var a = br, i = r(e);
        return br = a, Ba(e, t, i);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], l = r.replace(Ey, function(u, d, m) {
          var y = "animation" + s.length;
          return s.push("const " + y + " = keyframes`" + m.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + y + "}";
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
function Ow(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Ba(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += a + "{" + t[i] + "}" : Dd(i) && (n += Ol(a) + ":" + ms(a, i) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(ky);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            Dd(i[s]) && (n += Ol(a) + ":" + ms(a, i[s]) + ";");
        else {
          var l = Ba(e, t, i);
          switch (a) {
            case "animation":
            case "animationName": {
              n += Ol(a) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && a === "undefined" && console.error(gw), n += a + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var Id = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Ty;
process.env.NODE_ENV !== "production" && (Ty = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var br, Io = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, a = "";
  br = void 0;
  var i = t[0];
  i == null || i.raw === void 0 ? (o = !1, a += Ba(n, r, i)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(Ad), a += i[0]);
  for (var s = 1; s < t.length; s++)
    a += Ba(n, r, t[s]), o && (process.env.NODE_ENV !== "production" && i[s] === void 0 && console.error(Ad), a += i[s]);
  var l;
  process.env.NODE_ENV !== "production" && (a = a.replace(Ty, function(m) {
    return l = m, "";
  })), Id.lastIndex = 0;
  for (var c = "", u; (u = Id.exec(a)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var d = yw(a) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: d,
    styles: a,
    map: l,
    next: br,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: d,
    styles: a,
    next: br
  };
}, Ew = function(t) {
  return t();
}, Cy = te["useInsertionEffect"] ? te["useInsertionEffect"] : !1, Yu = Cy || Ew, $d = Cy || te.useLayoutEffect, kw = {}.hasOwnProperty, Ku = /* @__PURE__ */ te.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ uw({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Ku.displayName = "EmotionCacheContext");
Ku.Provider;
var qs = function(t) {
  return /* @__PURE__ */ Qn(function(r, n) {
    var o = it(Ku);
    return t(r, o, n);
  });
}, wn = /* @__PURE__ */ te.createContext({});
process.env.NODE_ENV !== "production" && (wn.displayName = "EmotionThemeContext");
var Tw = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    if (process.env.NODE_ENV !== "production" && (n == null || typeof n != "object" || Array.isArray(n)))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return n;
  }
  if (process.env.NODE_ENV !== "production" && (r == null || typeof r != "object" || Array.isArray(r)))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return Kn({}, t, r);
}, Cw = /* @__PURE__ */ Ed(function(e) {
  return Ed(function(t) {
    return Tw(e, t);
  });
}), Rw = function(t) {
  var r = te.useContext(wn);
  return t.theme !== r && (r = Cw(r)(t.theme)), /* @__PURE__ */ te.createElement(wn.Provider, {
    value: r
  }, t.children);
}, jd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Ld = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Aw = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Us(r, n, o), Yu(function() {
    return Hs(r, n, o);
  }), null;
}, Dw = /* @__PURE__ */ qs(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[jd], a = [n], i = "";
  typeof e.className == "string" ? i = Hu(t.registered, a, e.className) : e.className != null && (i = e.className + " ");
  var s = Io(a, void 0, te.useContext(wn));
  if (process.env.NODE_ENV !== "production" && s.name.indexOf("-") === -1) {
    var l = e[Ld];
    l && (s = Io([s, "label:" + l + ";"]));
  }
  i += t.key + "-" + s.name;
  var c = {};
  for (var u in e)
    kw.call(e, u) && u !== "css" && u !== jd && (process.env.NODE_ENV === "production" || u !== Ld) && (c[u] = e[u]);
  return c.ref = r, c.className = i, /* @__PURE__ */ te.createElement(te.Fragment, null, /* @__PURE__ */ te.createElement(Aw, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ te.createElement(o, c));
});
process.env.NODE_ENV !== "production" && (Dw.displayName = "EmotionCssPropInternal");
var Mw = {
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
}, Fd = !1, ai = /* @__PURE__ */ qs(function(e, t) {
  process.env.NODE_ENV !== "production" && !Fd && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Fd = !0);
  var r = e.styles, n = Io([r], void 0, te.useContext(wn)), o = te.useRef();
  return $d(function() {
    var a = t.key + "-global", i = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + a + " " + n.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", a), i.hydrate([l])), o.current = [i, s], function() {
      i.flush();
    };
  }, [t]), $d(function() {
    var a = o.current, i = a[0], s = a[1];
    if (s) {
      a[1] = !1;
      return;
    }
    if (n.next !== void 0 && Hs(t, n.next, !0), i.tags.length) {
      var l = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = l, i.flush();
    }
    t.insert("", n, i, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (ai.displayName = "EmotionGlobal");
function Iw() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Io(t);
}
var ii = function() {
  var t = Iw.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, $w = function e(t) {
  for (var r = t.length, n = 0, o = ""; n < r; n++) {
    var a = t[n];
    if (a != null) {
      var i = void 0;
      switch (typeof a) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(a))
            i = e(a);
          else {
            process.env.NODE_ENV !== "production" && a.styles !== void 0 && a.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), i = "";
            for (var s in a)
              a[s] && s && (i && (i += " "), i += s);
          }
          break;
        }
        default:
          i = a;
      }
      i && (o && (o += " "), o += i);
    }
  }
  return o;
};
function jw(e, t, r) {
  var n = [], o = Hu(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var Lw = function(t) {
  var r = t.cache, n = t.serializedArr;
  return Yu(function() {
    for (var o = 0; o < n.length; o++)
      Hs(r, n[o], !1);
  }), null;
}, Fw = /* @__PURE__ */ qs(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    var m = Io(u, t.registered);
    return n.push(m), Us(t, m, !1), t.key + "-" + m.name;
  }, a = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    return jw(t.registered, o, $w(u));
  }, i = {
    css: o,
    cx: a,
    theme: te.useContext(wn)
  }, s = e.children(i);
  return r = !0, /* @__PURE__ */ te.createElement(te.Fragment, null, /* @__PURE__ */ te.createElement(Lw, {
    cache: t,
    serializedArr: n
  }), s);
});
process.env.NODE_ENV !== "production" && (Fw.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Nd = !0, Nw = typeof jest < "u" || typeof vi < "u";
  if (Nd && !Nw) {
    var Bd = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Nd ? window : global
    ), Vd = "__EMOTION_REACT_" + Mw.version.split(".")[0] + "__";
    Bd[Vd] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Bd[Vd] = !0;
  }
}
var Ry = String.raw, Ay = Ry`
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
`, Bw = () => /* @__PURE__ */ I.jsx(ai, { styles: Ay }), Vw = ({ scope: e = "" }) => /* @__PURE__ */ I.jsx(
  ai,
  {
    styles: Ry`
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

      ${Ay}
    `
  }
);
function zw(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function yr(e = {}) {
  const {
    name: t,
    strict: r = !0,
    hookName: n = "useContext",
    providerName: o = "Provider",
    errorMessage: a,
    defaultValue: i
  } = e, s = Vr(i);
  s.displayName = t;
  function l() {
    var c;
    const u = it(s);
    if (!u && r) {
      const d = new Error(
        a ?? zw(n, o)
      );
      throw d.name = "ContextError", (c = Error.captureStackTrace) == null || c.call(Error, d, l), d;
    }
    return u;
  }
  return [s.Provider, l, s];
}
var [Ww, Uw] = yr({
  strict: !1,
  name: "PortalManagerContext"
});
function Dy(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ I.jsx(Ww, { value: { zIndex: r }, children: t });
}
Dy.displayName = "PortalManager";
var Va = globalThis != null && globalThis.document ? Fu : Me, [My, Hw] = yr({
  strict: !1,
  name: "PortalContext"
}), Gu = "chakra-portal", qw = ".chakra-portal", Yw = (e) => /* @__PURE__ */ I.jsx(
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
), Kw = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = ue(null), a = De(null), [, i] = ue({});
  Me(() => i({}), []);
  const s = Hw(), l = Uw();
  Va(() => {
    if (!n)
      return;
    const u = n.ownerDocument, d = t ? s ?? u.body : u.body;
    if (!d)
      return;
    a.current = u.createElement("div"), a.current.className = Gu, d.appendChild(a.current), i({});
    const m = a.current;
    return () => {
      d.contains(m) && d.removeChild(m);
    };
  }, [n]);
  const c = l != null && l.zIndex ? /* @__PURE__ */ I.jsx(Yw, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return a.current ? my(
    /* @__PURE__ */ I.jsx(My, { value: a.current, children: c }),
    a.current
  ) : /* @__PURE__ */ I.jsx(
    "span",
    {
      ref: (u) => {
        u && o(u);
      }
    }
  );
}, Gw = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, a = o ?? (typeof window < "u" ? document.body : void 0), i = ot(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = Gu), l;
  }, [o]), [, s] = ue({});
  return Va(() => s({}), []), Va(() => {
    if (!(!i || !a))
      return a.appendChild(i), () => {
        a.removeChild(i);
      };
  }, [i, a]), a && i ? my(
    /* @__PURE__ */ I.jsx(My, { value: n ? i : null, children: t }),
    i
  ) : null;
};
function qo(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ I.jsx(Gw, { containerRef: r, ...n }) : /* @__PURE__ */ I.jsx(Kw, { ...n });
}
qo.className = Gu;
qo.selector = qw;
qo.displayName = "Portal";
function Iy() {
  const e = it(
    wn
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var Xu = Vr({});
Xu.displayName = "ColorModeContext";
function Ys() {
  const e = it(Xu);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var Ei = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function Xw(e = {}) {
  const { preventTransition: t = !0 } = e, r = {
    setDataset: (n) => {
      const o = t ? r.preventTransition() : void 0;
      document.documentElement.dataset.theme = n, document.documentElement.style.colorScheme = n, o == null || o();
    },
    setClassName(n) {
      document.body.classList.add(n ? Ei.dark : Ei.light), document.body.classList.remove(n ? Ei.light : Ei.dark);
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme(n) {
      var o;
      return ((o = r.query().matches) != null ? o : n === "dark") ? "dark" : "light";
    },
    addListener(n) {
      const o = r.query(), a = (i) => {
        n(i.matches ? "dark" : "light");
      };
      return typeof o.addListener == "function" ? o.addListener(a) : o.addEventListener("change", a), () => {
        typeof o.removeListener == "function" ? o.removeListener(a) : o.removeEventListener("change", a);
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
var Zw = "chakra-ui-color-mode";
function Jw(e) {
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
var Qw = Jw(Zw), zd = () => {
};
function Wd(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function $y(e) {
  const {
    value: t,
    children: r,
    options: {
      useSystemColorMode: n,
      initialColorMode: o,
      disableTransitionOnChange: a
    } = {},
    colorModeManager: i = Qw
  } = e, s = o === "dark" ? "dark" : "light", [l, c] = ue(
    () => Wd(i, s)
  ), [u, d] = ue(
    () => Wd(i)
  ), { getSystemTheme: m, setClassName: y, setDataset: x, addListener: w } = ot(
    () => Xw({ preventTransition: a }),
    [a]
  ), _ = o === "system" && !l ? u : l, T = pe(
    ($) => {
      const S = $ === "system" ? m() : $;
      c(S), y(S === "dark"), x(S), i.set(S);
    },
    [i, m, y, x]
  );
  Va(() => {
    o === "system" && d(m());
  }, []), Me(() => {
    const $ = i.get();
    if ($) {
      T($);
      return;
    }
    if (o === "system") {
      T("system");
      return;
    }
    T(s);
  }, [i, s, o, T]);
  const P = pe(() => {
    T(_ === "dark" ? "light" : "dark");
  }, [_, T]);
  Me(() => {
    if (n)
      return w(T);
  }, [n, w, T]);
  const k = ot(
    () => ({
      colorMode: t ?? _,
      toggleColorMode: t ? zd : P,
      setColorMode: t ? zd : T,
      forced: t !== void 0
    }),
    [_, P, T, t]
  );
  return /* @__PURE__ */ I.jsx(Xu.Provider, { value: k, children: r });
}
$y.displayName = "ColorModeProvider";
function jy() {
  const e = Ys(), t = Iy();
  return { ...e, theme: t };
}
var Ye = (...e) => e.filter(Boolean).join(" ");
function Qt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function Ar(e, ...t) {
  return ex(e) ? e(...t) : e;
}
var ex = (e) => typeof e == "function", qe = (e) => e ? "" : void 0, El = (e) => e ? !0 : void 0;
function ft(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function tx(...e) {
  return function(r) {
    e.forEach((n) => {
      n == null || n(r);
    });
  };
}
var ys = { exports: {} };
ys.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, a = 16, i = 9007199254740991, s = "[object Arguments]", l = "[object Array]", c = "[object AsyncFunction]", u = "[object Boolean]", d = "[object Date]", m = "[object Error]", y = "[object Function]", x = "[object GeneratorFunction]", w = "[object Map]", _ = "[object Number]", T = "[object Null]", P = "[object Object]", k = "[object Proxy]", $ = "[object RegExp]", S = "[object Set]", C = "[object String]", v = "[object Undefined]", f = "[object WeakMap]", h = "[object ArrayBuffer]", p = "[object DataView]", g = "[object Float32Array]", A = "[object Float64Array]", D = "[object Int8Array]", R = "[object Int16Array]", F = "[object Int32Array]", U = "[object Uint8Array]", L = "[object Uint8ClampedArray]", j = "[object Uint16Array]", V = "[object Uint32Array]", E = /[\\^$.*+?()[\]{}|]/g, O = /^\[object .+?Constructor\]$/, B = /^(?:0|[1-9]\d*)$/, K = {};
  K[g] = K[A] = K[D] = K[R] = K[F] = K[U] = K[L] = K[j] = K[V] = !0, K[s] = K[l] = K[h] = K[u] = K[p] = K[d] = K[m] = K[y] = K[w] = K[_] = K[P] = K[$] = K[S] = K[C] = K[f] = !1;
  var Y = typeof Nn == "object" && Nn && Nn.Object === Object && Nn, Z = typeof self == "object" && self && self.Object === Object && self, Q = Y || Z || Function("return this")(), re = t && !t.nodeType && t, J = re && !0 && e && !e.nodeType && e, oe = J && J.exports === re, ae = oe && Y.process, ne = function() {
    try {
      var M = J && J.require && J.require("util").types;
      return M || ae && ae.binding && ae.binding("util");
    } catch {
    }
  }(), G = ne && ne.isTypedArray;
  function ge(M, z, q) {
    switch (q.length) {
      case 0:
        return M.call(z);
      case 1:
        return M.call(z, q[0]);
      case 2:
        return M.call(z, q[0], q[1]);
      case 3:
        return M.call(z, q[0], q[1], q[2]);
    }
    return M.apply(z, q);
  }
  function et(M, z) {
    for (var q = -1, le = Array(M); ++q < M; )
      le[q] = z(q);
    return le;
  }
  function Be(M) {
    return function(z) {
      return M(z);
    };
  }
  function Je(M, z) {
    return M == null ? void 0 : M[z];
  }
  function ht(M, z) {
    return function(q) {
      return M(z(q));
    };
  }
  var Ke = Array.prototype, bt = Function.prototype, lt = Object.prototype, Tt = Q["__core-js_shared__"], mt = bt.toString, at = lt.hasOwnProperty, Vt = function() {
    var M = /[^.]+$/.exec(Tt && Tt.keys && Tt.keys.IE_PROTO || "");
    return M ? "Symbol(src)_1." + M : "";
  }(), Mt = lt.toString, nr = mt.call(Object), St = RegExp(
    "^" + mt.call(at).replace(E, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Kt = oe ? Q.Buffer : void 0, vr = Q.Symbol, xr = Q.Uint8Array, or = Kt ? Kt.allocUnsafe : void 0, sn = ht(Object.getPrototypeOf, Object), fe = Object.create, ct = lt.propertyIsEnumerable, zt = Ke.splice, tt = vr ? vr.toStringTag : void 0, It = function() {
    try {
      var M = vl(Object, "defineProperty");
      return M({}, "", {}), M;
    } catch {
    }
  }(), ln = Kt ? Kt.isBuffer : void 0, Gt = Math.max, _r = Date.now, yt = vl(Q, "Map"), Ct = vl(Object, "create"), ar = function() {
    function M() {
    }
    return function(z) {
      if (!An(z))
        return {};
      if (fe)
        return fe(z);
      M.prototype = z;
      var q = new M();
      return M.prototype = void 0, q;
    };
  }();
  function Rt(M) {
    var z = -1, q = M == null ? 0 : M.length;
    for (this.clear(); ++z < q; ) {
      var le = M[z];
      this.set(le[0], le[1]);
    }
  }
  function cn() {
    this.__data__ = Ct ? Ct(null) : {}, this.size = 0;
  }
  function En(M) {
    var z = this.has(M) && delete this.__data__[M];
    return this.size -= z ? 1 : 0, z;
  }
  function Zo(M) {
    var z = this.__data__;
    if (Ct) {
      var q = z[M];
      return q === n ? void 0 : q;
    }
    return at.call(z, M) ? z[M] : void 0;
  }
  function kn(M) {
    var z = this.__data__;
    return Ct ? z[M] !== void 0 : at.call(z, M);
  }
  function Tn(M, z) {
    var q = this.__data__;
    return this.size += this.has(M) ? 0 : 1, q[M] = Ct && z === void 0 ? n : z, this;
  }
  Rt.prototype.clear = cn, Rt.prototype.delete = En, Rt.prototype.get = Zo, Rt.prototype.has = kn, Rt.prototype.set = Tn;
  function Xt(M) {
    var z = -1, q = M == null ? 0 : M.length;
    for (this.clear(); ++z < q; ) {
      var le = M[z];
      this.set(le[0], le[1]);
    }
  }
  function Jo() {
    this.__data__ = [], this.size = 0;
  }
  function Cn(M) {
    var z = this.__data__, q = Ge(z, M);
    if (q < 0)
      return !1;
    var le = z.length - 1;
    return q == le ? z.pop() : zt.call(z, q, 1), --this.size, !0;
  }
  function Qo(M) {
    var z = this.__data__, q = Ge(z, M);
    return q < 0 ? void 0 : z[q][1];
  }
  function ea(M) {
    return Ge(this.__data__, M) > -1;
  }
  function ta(M, z) {
    var q = this.__data__, le = Ge(q, M);
    return le < 0 ? (++this.size, q.push([M, z])) : q[le][1] = z, this;
  }
  Xt.prototype.clear = Jo, Xt.prototype.delete = Cn, Xt.prototype.get = Qo, Xt.prototype.has = ea, Xt.prototype.set = ta;
  function Pr(M) {
    var z = -1, q = M == null ? 0 : M.length;
    for (this.clear(); ++z < q; ) {
      var le = M[z];
      this.set(le[0], le[1]);
    }
  }
  function b() {
    this.size = 0, this.__data__ = {
      hash: new Rt(),
      map: new (yt || Xt)(),
      string: new Rt()
    };
  }
  function N(M) {
    var z = _i(this, M).delete(M);
    return this.size -= z ? 1 : 0, z;
  }
  function H(M) {
    return _i(this, M).get(M);
  }
  function ee(M) {
    return _i(this, M).has(M);
  }
  function ce(M, z) {
    var q = _i(this, M), le = q.size;
    return q.set(M, z), this.size += q.size == le ? 0 : 1, this;
  }
  Pr.prototype.clear = b, Pr.prototype.delete = N, Pr.prototype.get = H, Pr.prototype.has = ee, Pr.prototype.set = ce;
  function de(M) {
    var z = this.__data__ = new Xt(M);
    this.size = z.size;
  }
  function se() {
    this.__data__ = new Xt(), this.size = 0;
  }
  function ie(M) {
    var z = this.__data__, q = z.delete(M);
    return this.size = z.size, q;
  }
  function Ee(M) {
    return this.__data__.get(M);
  }
  function be(M) {
    return this.__data__.has(M);
  }
  function Se(M, z) {
    var q = this.__data__;
    if (q instanceof Xt) {
      var le = q.__data__;
      if (!yt || le.length < r - 1)
        return le.push([M, z]), this.size = ++q.size, this;
      q = this.__data__ = new Pr(le);
    }
    return q.set(M, z), this.size = q.size, this;
  }
  de.prototype.clear = se, de.prototype.delete = ie, de.prototype.get = Ee, de.prototype.has = be, de.prototype.set = Se;
  function Ve(M, z) {
    var q = Sl(M), le = !q && bl(M), Pe = !q && !le && yd(M), ze = !q && !le && !Pe && gd(M), Xe = q || le || Pe || ze, xe = Xe ? et(M.length, String) : [], Ze = xe.length;
    for (var ir in M)
      (z || at.call(M, ir)) && !(Xe && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ir == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Pe && (ir == "offset" || ir == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ze && (ir == "buffer" || ir == "byteLength" || ir == "byteOffset") || // Skip index properties.
      hd(ir, Ze))) && xe.push(ir);
    return xe;
  }
  function xt(M, z, q) {
    (q !== void 0 && !Pi(M[z], q) || q === void 0 && !(z in M)) && yl(M, z, q);
  }
  function Rn(M, z, q) {
    var le = M[z];
    (!(at.call(M, z) && Pi(le, q)) || q === void 0 && !(z in M)) && yl(M, z, q);
  }
  function Ge(M, z) {
    for (var q = M.length; q--; )
      if (Pi(M[q][0], z))
        return q;
    return -1;
  }
  function yl(M, z, q) {
    z == "__proto__" && It ? It(M, z, {
      configurable: !0,
      enumerable: !0,
      value: q,
      writable: !0
    }) : M[z] = q;
  }
  var q0 = aS();
  function xi(M) {
    return M == null ? M === void 0 ? v : T : tt && tt in Object(M) ? iS(M) : dS(M);
  }
  function dd(M) {
    return ra(M) && xi(M) == s;
  }
  function Y0(M) {
    if (!An(M) || uS(M))
      return !1;
    var z = xl(M) ? St : O;
    return z.test(yS(M));
  }
  function K0(M) {
    return ra(M) && vd(M.length) && !!K[xi(M)];
  }
  function G0(M) {
    if (!An(M))
      return fS(M);
    var z = md(M), q = [];
    for (var le in M)
      le == "constructor" && (z || !at.call(M, le)) || q.push(le);
    return q;
  }
  function pd(M, z, q, le, Pe) {
    M !== z && q0(z, function(ze, Xe) {
      if (Pe || (Pe = new de()), An(ze))
        X0(M, z, Xe, q, pd, le, Pe);
      else {
        var xe = le ? le(gl(M, Xe), ze, Xe + "", M, z, Pe) : void 0;
        xe === void 0 && (xe = ze), xt(M, Xe, xe);
      }
    }, bd);
  }
  function X0(M, z, q, le, Pe, ze, Xe) {
    var xe = gl(M, q), Ze = gl(z, q), ir = Xe.get(Ze);
    if (ir) {
      xt(M, q, ir);
      return;
    }
    var Zt = ze ? ze(xe, Ze, q + "", M, z, Xe) : void 0, na = Zt === void 0;
    if (na) {
      var _l = Sl(Ze), Pl = !_l && yd(Ze), wd = !_l && !Pl && gd(Ze);
      Zt = Ze, _l || Pl || wd ? Sl(xe) ? Zt = xe : vS(xe) ? Zt = rS(xe) : Pl ? (na = !1, Zt = Q0(Ze, !0)) : wd ? (na = !1, Zt = tS(Ze, !0)) : Zt = [] : gS(Ze) || bl(Ze) ? (Zt = xe, bl(xe) ? Zt = bS(xe) : (!An(xe) || xl(xe)) && (Zt = sS(Ze))) : na = !1;
    }
    na && (Xe.set(Ze, Zt), Pe(Zt, Ze, le, ze, Xe), Xe.delete(Ze)), xt(M, q, Zt);
  }
  function Z0(M, z) {
    return hS(pS(M, z, Sd), M + "");
  }
  var J0 = It ? function(M, z) {
    return It(M, "toString", {
      configurable: !0,
      enumerable: !1,
      value: wS(z),
      writable: !0
    });
  } : Sd;
  function Q0(M, z) {
    if (z)
      return M.slice();
    var q = M.length, le = or ? or(q) : new M.constructor(q);
    return M.copy(le), le;
  }
  function eS(M) {
    var z = new M.constructor(M.byteLength);
    return new xr(z).set(new xr(M)), z;
  }
  function tS(M, z) {
    var q = z ? eS(M.buffer) : M.buffer;
    return new M.constructor(q, M.byteOffset, M.length);
  }
  function rS(M, z) {
    var q = -1, le = M.length;
    for (z || (z = Array(le)); ++q < le; )
      z[q] = M[q];
    return z;
  }
  function nS(M, z, q, le) {
    var Pe = !q;
    q || (q = {});
    for (var ze = -1, Xe = z.length; ++ze < Xe; ) {
      var xe = z[ze], Ze = le ? le(q[xe], M[xe], xe, q, M) : void 0;
      Ze === void 0 && (Ze = M[xe]), Pe ? yl(q, xe, Ze) : Rn(q, xe, Ze);
    }
    return q;
  }
  function oS(M) {
    return Z0(function(z, q) {
      var le = -1, Pe = q.length, ze = Pe > 1 ? q[Pe - 1] : void 0, Xe = Pe > 2 ? q[2] : void 0;
      for (ze = M.length > 3 && typeof ze == "function" ? (Pe--, ze) : void 0, Xe && lS(q[0], q[1], Xe) && (ze = Pe < 3 ? void 0 : ze, Pe = 1), z = Object(z); ++le < Pe; ) {
        var xe = q[le];
        xe && M(z, xe, le, ze);
      }
      return z;
    });
  }
  function aS(M) {
    return function(z, q, le) {
      for (var Pe = -1, ze = Object(z), Xe = le(z), xe = Xe.length; xe--; ) {
        var Ze = Xe[M ? xe : ++Pe];
        if (q(ze[Ze], Ze, ze) === !1)
          break;
      }
      return z;
    };
  }
  function _i(M, z) {
    var q = M.__data__;
    return cS(z) ? q[typeof z == "string" ? "string" : "hash"] : q.map;
  }
  function vl(M, z) {
    var q = Je(M, z);
    return Y0(q) ? q : void 0;
  }
  function iS(M) {
    var z = at.call(M, tt), q = M[tt];
    try {
      M[tt] = void 0;
      var le = !0;
    } catch {
    }
    var Pe = Mt.call(M);
    return le && (z ? M[tt] = q : delete M[tt]), Pe;
  }
  function sS(M) {
    return typeof M.constructor == "function" && !md(M) ? ar(sn(M)) : {};
  }
  function hd(M, z) {
    var q = typeof M;
    return z = z ?? i, !!z && (q == "number" || q != "symbol" && B.test(M)) && M > -1 && M % 1 == 0 && M < z;
  }
  function lS(M, z, q) {
    if (!An(q))
      return !1;
    var le = typeof z;
    return (le == "number" ? wl(q) && hd(z, q.length) : le == "string" && z in q) ? Pi(q[z], M) : !1;
  }
  function cS(M) {
    var z = typeof M;
    return z == "string" || z == "number" || z == "symbol" || z == "boolean" ? M !== "__proto__" : M === null;
  }
  function uS(M) {
    return !!Vt && Vt in M;
  }
  function md(M) {
    var z = M && M.constructor, q = typeof z == "function" && z.prototype || lt;
    return M === q;
  }
  function fS(M) {
    var z = [];
    if (M != null)
      for (var q in Object(M))
        z.push(q);
    return z;
  }
  function dS(M) {
    return Mt.call(M);
  }
  function pS(M, z, q) {
    return z = Gt(z === void 0 ? M.length - 1 : z, 0), function() {
      for (var le = arguments, Pe = -1, ze = Gt(le.length - z, 0), Xe = Array(ze); ++Pe < ze; )
        Xe[Pe] = le[z + Pe];
      Pe = -1;
      for (var xe = Array(z + 1); ++Pe < z; )
        xe[Pe] = le[Pe];
      return xe[z] = q(Xe), ge(M, this, xe);
    };
  }
  function gl(M, z) {
    if (!(z === "constructor" && typeof M[z] == "function") && z != "__proto__")
      return M[z];
  }
  var hS = mS(J0);
  function mS(M) {
    var z = 0, q = 0;
    return function() {
      var le = _r(), Pe = a - (le - q);
      if (q = le, Pe > 0) {
        if (++z >= o)
          return arguments[0];
      } else
        z = 0;
      return M.apply(void 0, arguments);
    };
  }
  function yS(M) {
    if (M != null) {
      try {
        return mt.call(M);
      } catch {
      }
      try {
        return M + "";
      } catch {
      }
    }
    return "";
  }
  function Pi(M, z) {
    return M === z || M !== M && z !== z;
  }
  var bl = dd(function() {
    return arguments;
  }()) ? dd : function(M) {
    return ra(M) && at.call(M, "callee") && !ct.call(M, "callee");
  }, Sl = Array.isArray;
  function wl(M) {
    return M != null && vd(M.length) && !xl(M);
  }
  function vS(M) {
    return ra(M) && wl(M);
  }
  var yd = ln || xS;
  function xl(M) {
    if (!An(M))
      return !1;
    var z = xi(M);
    return z == y || z == x || z == c || z == k;
  }
  function vd(M) {
    return typeof M == "number" && M > -1 && M % 1 == 0 && M <= i;
  }
  function An(M) {
    var z = typeof M;
    return M != null && (z == "object" || z == "function");
  }
  function ra(M) {
    return M != null && typeof M == "object";
  }
  function gS(M) {
    if (!ra(M) || xi(M) != P)
      return !1;
    var z = sn(M);
    if (z === null)
      return !0;
    var q = at.call(z, "constructor") && z.constructor;
    return typeof q == "function" && q instanceof q && mt.call(q) == nr;
  }
  var gd = G ? Be(G) : K0;
  function bS(M) {
    return nS(M, bd(M));
  }
  function bd(M) {
    return wl(M) ? Ve(M, !0) : G0(M);
  }
  var SS = oS(function(M, z, q, le) {
    pd(M, z, q, le);
  });
  function wS(M) {
    return function() {
      return M;
    };
  }
  function Sd(M) {
    return M;
  }
  function xS() {
    return !1;
  }
  e.exports = SS;
})(ys, ys.exports);
var rx = ys.exports;
const Dr = /* @__PURE__ */ Bs(rx);
var nx = (e) => /!(important)?$/.test(e), Ud = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, ox = (e, t) => (r) => {
  const n = String(t), o = nx(n), a = Ud(n), i = e ? `${e}.${a}` : a;
  let s = Qt(r.__cssMap) && i in r.__cssMap ? r.__cssMap[i].varRef : t;
  return s = Ud(s), o ? `${s} !important` : s;
};
function Zu(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (a, i) => {
    var s;
    const l = ox(t, a)(i);
    let c = (s = r == null ? void 0 : r(l, i)) != null ? s : l;
    return n && (c = n(c, i)), c;
  };
}
var ki = (...e) => (t) => e.reduce((r, n) => n(r), t);
function sr(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = Zu({
      scale: e,
      transform: t
    }), n;
  };
}
var ax = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function ix(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: ax(t),
    transform: r ? Zu({
      scale: r,
      compose: n
    }) : n
  };
}
var Ly = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function sx() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...Ly
  ].join(" ");
}
function lx() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...Ly
  ].join(" ");
}
var cx = {
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
}, ux = {
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
function fx(e) {
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
var dx = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Uc = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, px = new Set(Object.values(Uc)), Hc = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), hx = (e) => e.trim();
function mx(e, t) {
  if (e == null || Hc.has(e))
    return e;
  if (!(qc(e) || Hc.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), a = o == null ? void 0 : o[1], i = o == null ? void 0 : o[2];
  if (!a || !i)
    return e;
  const s = a.includes("-gradient") ? a : `${a}-gradient`, [l, ...c] = i.split(",").map(hx).filter(Boolean);
  if ((c == null ? void 0 : c.length) === 0)
    return e;
  const u = l in Uc ? Uc[l] : l;
  c.unshift(u);
  const d = c.map((m) => {
    if (px.has(m))
      return m;
    const y = m.indexOf(" "), [x, w] = y !== -1 ? [m.substr(0, y), m.substr(y + 1)] : [m], _ = qc(w) ? w : w && w.split(" "), T = `colors.${x}`, P = T in t.__cssMap ? t.__cssMap[T].varRef : x;
    return _ ? [
      P,
      ...Array.isArray(_) ? _ : [_]
    ].join(" ") : P;
  });
  return `${s}(${d.join(", ")})`;
}
var qc = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), yx = (e, t) => mx(e, t ?? {});
function vx(e) {
  return /^var\(--.+\)$/.test(e);
}
var gx = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, Or = (e) => (t) => `${e}(${t})`, _e = {
  filter(e) {
    return e !== "auto" ? e : cx;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : ux;
  },
  ring(e) {
    return fx(_e.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? sx() : e === "auto-gpu" ? lx() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = gx(e);
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
    if (vx(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: yx,
  blur: Or("blur"),
  opacity: Or("opacity"),
  brightness: Or("brightness"),
  contrast: Or("contrast"),
  dropShadow: Or("drop-shadow"),
  grayscale: Or("grayscale"),
  hueRotate: (e) => Or("hue-rotate")(_e.degree(e)),
  invert: Or("invert"),
  saturate: Or("saturate"),
  sepia: Or("sepia"),
  bgImage(e) {
    return e == null || qc(e) || Hc.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: r, divide: n } = (t = dx[e]) != null ? t : {}, o = { flexDirection: e };
    return r && (o[r] = 1), n && (o[n] = 1), o;
  }
}, W = {
  borderWidths: sr("borderWidths"),
  borderStyles: sr("borderStyles"),
  colors: sr("colors"),
  borders: sr("borders"),
  gradients: sr("gradients", _e.gradient),
  radii: sr("radii", _e.px),
  space: sr("space", ki(_e.vh, _e.px)),
  spaceT: sr("space", ki(_e.vh, _e.px)),
  degreeT(e) {
    return { property: e, transform: _e.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: Zu({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: sr("sizes", ki(_e.vh, _e.px)),
  sizesT: sr("sizes", ki(_e.vh, _e.fraction)),
  shadows: sr("shadows"),
  logical: ix,
  blur: sr("blur", _e.blur)
}, Gi = {
  background: W.colors("background"),
  backgroundColor: W.colors("backgroundColor"),
  backgroundImage: W.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: _e.bgClip },
  bgSize: W.prop("backgroundSize"),
  bgPosition: W.prop("backgroundPosition"),
  bg: W.colors("background"),
  bgColor: W.colors("backgroundColor"),
  bgPos: W.prop("backgroundPosition"),
  bgRepeat: W.prop("backgroundRepeat"),
  bgAttachment: W.prop("backgroundAttachment"),
  bgGradient: W.gradients("backgroundImage"),
  bgClip: { transform: _e.bgClip }
};
Object.assign(Gi, {
  bgImage: Gi.backgroundImage,
  bgImg: Gi.backgroundImage
});
var Te = {
  border: W.borders("border"),
  borderWidth: W.borderWidths("borderWidth"),
  borderStyle: W.borderStyles("borderStyle"),
  borderColor: W.colors("borderColor"),
  borderRadius: W.radii("borderRadius"),
  borderTop: W.borders("borderTop"),
  borderBlockStart: W.borders("borderBlockStart"),
  borderTopLeftRadius: W.radii("borderTopLeftRadius"),
  borderStartStartRadius: W.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: W.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: W.radii("borderTopRightRadius"),
  borderStartEndRadius: W.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: W.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: W.borders("borderRight"),
  borderInlineEnd: W.borders("borderInlineEnd"),
  borderBottom: W.borders("borderBottom"),
  borderBlockEnd: W.borders("borderBlockEnd"),
  borderBottomLeftRadius: W.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: W.radii("borderBottomRightRadius"),
  borderLeft: W.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: W.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: W.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: W.borders(["borderLeft", "borderRight"]),
  borderInline: W.borders("borderInline"),
  borderY: W.borders(["borderTop", "borderBottom"]),
  borderBlock: W.borders("borderBlock"),
  borderTopWidth: W.borderWidths("borderTopWidth"),
  borderBlockStartWidth: W.borderWidths("borderBlockStartWidth"),
  borderTopColor: W.colors("borderTopColor"),
  borderBlockStartColor: W.colors("borderBlockStartColor"),
  borderTopStyle: W.borderStyles("borderTopStyle"),
  borderBlockStartStyle: W.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: W.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: W.borderWidths("borderBlockEndWidth"),
  borderBottomColor: W.colors("borderBottomColor"),
  borderBlockEndColor: W.colors("borderBlockEndColor"),
  borderBottomStyle: W.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: W.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: W.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: W.borderWidths("borderInlineStartWidth"),
  borderLeftColor: W.colors("borderLeftColor"),
  borderInlineStartColor: W.colors("borderInlineStartColor"),
  borderLeftStyle: W.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: W.borderStyles("borderInlineStartStyle"),
  borderRightWidth: W.borderWidths("borderRightWidth"),
  borderInlineEndWidth: W.borderWidths("borderInlineEndWidth"),
  borderRightColor: W.colors("borderRightColor"),
  borderInlineEndColor: W.colors("borderInlineEndColor"),
  borderRightStyle: W.borderStyles("borderRightStyle"),
  borderInlineEndStyle: W.borderStyles("borderInlineEndStyle"),
  borderTopRadius: W.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: W.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: W.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: W.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(Te, {
  rounded: Te.borderRadius,
  roundedTop: Te.borderTopRadius,
  roundedTopLeft: Te.borderTopLeftRadius,
  roundedTopRight: Te.borderTopRightRadius,
  roundedTopStart: Te.borderStartStartRadius,
  roundedTopEnd: Te.borderStartEndRadius,
  roundedBottom: Te.borderBottomRadius,
  roundedBottomLeft: Te.borderBottomLeftRadius,
  roundedBottomRight: Te.borderBottomRightRadius,
  roundedBottomStart: Te.borderEndStartRadius,
  roundedBottomEnd: Te.borderEndEndRadius,
  roundedLeft: Te.borderLeftRadius,
  roundedRight: Te.borderRightRadius,
  roundedStart: Te.borderInlineStartRadius,
  roundedEnd: Te.borderInlineEndRadius,
  borderStart: Te.borderInlineStart,
  borderEnd: Te.borderInlineEnd,
  borderTopStartRadius: Te.borderStartStartRadius,
  borderTopEndRadius: Te.borderStartEndRadius,
  borderBottomStartRadius: Te.borderEndStartRadius,
  borderBottomEndRadius: Te.borderEndEndRadius,
  borderStartRadius: Te.borderInlineStartRadius,
  borderEndRadius: Te.borderInlineEndRadius,
  borderStartWidth: Te.borderInlineStartWidth,
  borderEndWidth: Te.borderInlineEndWidth,
  borderStartColor: Te.borderInlineStartColor,
  borderEndColor: Te.borderInlineEndColor,
  borderStartStyle: Te.borderInlineStartStyle,
  borderEndStyle: Te.borderInlineEndStyle
});
var bx = {
  color: W.colors("color"),
  textColor: W.colors("color"),
  fill: W.colors("fill"),
  stroke: W.colors("stroke")
}, Yc = {
  boxShadow: W.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: W.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: W.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Yc, {
  shadow: Yc.boxShadow
});
var Sx = {
  filter: { transform: _e.filter },
  blur: W.blur("--chakra-blur"),
  brightness: W.propT("--chakra-brightness", _e.brightness),
  contrast: W.propT("--chakra-contrast", _e.contrast),
  hueRotate: W.propT("--chakra-hue-rotate", _e.hueRotate),
  invert: W.propT("--chakra-invert", _e.invert),
  saturate: W.propT("--chakra-saturate", _e.saturate),
  dropShadow: W.propT("--chakra-drop-shadow", _e.dropShadow),
  backdropFilter: { transform: _e.backdropFilter },
  backdropBlur: W.blur("--chakra-backdrop-blur"),
  backdropBrightness: W.propT(
    "--chakra-backdrop-brightness",
    _e.brightness
  ),
  backdropContrast: W.propT("--chakra-backdrop-contrast", _e.contrast),
  backdropHueRotate: W.propT(
    "--chakra-backdrop-hue-rotate",
    _e.hueRotate
  ),
  backdropInvert: W.propT("--chakra-backdrop-invert", _e.invert),
  backdropSaturate: W.propT("--chakra-backdrop-saturate", _e.saturate)
}, vs = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: _e.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: W.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: W.space("gap"),
  rowGap: W.space("rowGap"),
  columnGap: W.space("columnGap")
};
Object.assign(vs, {
  flexDir: vs.flexDirection
});
var Fy = {
  gridGap: W.space("gridGap"),
  gridColumnGap: W.space("gridColumnGap"),
  gridRowGap: W.space("gridRowGap"),
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
}, wx = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: _e.outline },
  outlineOffset: !0,
  outlineColor: W.colors("outlineColor")
}, ur = {
  width: W.sizesT("width"),
  inlineSize: W.sizesT("inlineSize"),
  height: W.sizes("height"),
  blockSize: W.sizes("blockSize"),
  boxSize: W.sizes(["width", "height"]),
  minWidth: W.sizes("minWidth"),
  minInlineSize: W.sizes("minInlineSize"),
  minHeight: W.sizes("minHeight"),
  minBlockSize: W.sizes("minBlockSize"),
  maxWidth: W.sizes("maxWidth"),
  maxInlineSize: W.sizes("maxInlineSize"),
  maxHeight: W.sizes("maxHeight"),
  maxBlockSize: W.sizes("maxBlockSize"),
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
  float: W.propT("float", _e.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(ur, {
  w: ur.width,
  h: ur.height,
  minW: ur.minWidth,
  maxW: ur.maxWidth,
  minH: ur.minHeight,
  maxH: ur.maxHeight,
  overscroll: ur.overscrollBehavior,
  overscrollX: ur.overscrollBehaviorX,
  overscrollY: ur.overscrollBehaviorY
});
var xx = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: W.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: W.prop("listStyleImage")
};
function _x(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var Px = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, a, i) => {
    if (typeof n > "u")
      return e(n, o, a);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const s = t.get(n);
    if (s.has(o))
      return s.get(o);
    const l = e(n, o, a, i);
    return s.set(o, l), l;
  };
}, Ox = Px(_x), Ex = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, kx = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, kl = (e, t, r) => {
  const n = {}, o = Ox(e, t, {});
  for (const a in o)
    a in r && r[a] != null || (n[a] = o[a]);
  return n;
}, Tx = {
  srOnly: {
    transform(e) {
      return e === !0 ? Ex : e === "focusable" ? kx : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => kl(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => kl(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => kl(t, e, r)
  }
}, Oa = {
  position: !0,
  pos: W.prop("position"),
  zIndex: W.prop("zIndex", "zIndices"),
  inset: W.spaceT("inset"),
  insetX: W.spaceT(["left", "right"]),
  insetInline: W.spaceT("insetInline"),
  insetY: W.spaceT(["top", "bottom"]),
  insetBlock: W.spaceT("insetBlock"),
  top: W.spaceT("top"),
  insetBlockStart: W.spaceT("insetBlockStart"),
  bottom: W.spaceT("bottom"),
  insetBlockEnd: W.spaceT("insetBlockEnd"),
  left: W.spaceT("left"),
  insetInlineStart: W.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: W.spaceT("right"),
  insetInlineEnd: W.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(Oa, {
  insetStart: Oa.insetInlineStart,
  insetEnd: Oa.insetInlineEnd
});
var Cx = {
  ring: { transform: _e.ring },
  ringColor: W.colors("--chakra-ring-color"),
  ringOffset: W.prop("--chakra-ring-offset-width"),
  ringOffsetColor: W.colors("--chakra-ring-offset-color"),
  ringInset: W.prop("--chakra-ring-inset")
}, He = {
  margin: W.spaceT("margin"),
  marginTop: W.spaceT("marginTop"),
  marginBlockStart: W.spaceT("marginBlockStart"),
  marginRight: W.spaceT("marginRight"),
  marginInlineEnd: W.spaceT("marginInlineEnd"),
  marginBottom: W.spaceT("marginBottom"),
  marginBlockEnd: W.spaceT("marginBlockEnd"),
  marginLeft: W.spaceT("marginLeft"),
  marginInlineStart: W.spaceT("marginInlineStart"),
  marginX: W.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: W.spaceT("marginInline"),
  marginY: W.spaceT(["marginTop", "marginBottom"]),
  marginBlock: W.spaceT("marginBlock"),
  padding: W.space("padding"),
  paddingTop: W.space("paddingTop"),
  paddingBlockStart: W.space("paddingBlockStart"),
  paddingRight: W.space("paddingRight"),
  paddingBottom: W.space("paddingBottom"),
  paddingBlockEnd: W.space("paddingBlockEnd"),
  paddingLeft: W.space("paddingLeft"),
  paddingInlineStart: W.space("paddingInlineStart"),
  paddingInlineEnd: W.space("paddingInlineEnd"),
  paddingX: W.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: W.space("paddingInline"),
  paddingY: W.space(["paddingTop", "paddingBottom"]),
  paddingBlock: W.space("paddingBlock")
};
Object.assign(He, {
  m: He.margin,
  mt: He.marginTop,
  mr: He.marginRight,
  me: He.marginInlineEnd,
  marginEnd: He.marginInlineEnd,
  mb: He.marginBottom,
  ml: He.marginLeft,
  ms: He.marginInlineStart,
  marginStart: He.marginInlineStart,
  mx: He.marginX,
  my: He.marginY,
  p: He.padding,
  pt: He.paddingTop,
  py: He.paddingY,
  px: He.paddingX,
  pb: He.paddingBottom,
  pl: He.paddingLeft,
  ps: He.paddingInlineStart,
  paddingStart: He.paddingInlineStart,
  pr: He.paddingRight,
  pe: He.paddingInlineEnd,
  paddingEnd: He.paddingInlineEnd
});
var Rx = {
  textDecorationColor: W.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: W.shadows("textShadow")
}, Ax = {
  clipPath: !0,
  transform: W.propT("transform", _e.transform),
  transformOrigin: !0,
  translateX: W.spaceT("--chakra-translate-x"),
  translateY: W.spaceT("--chakra-translate-y"),
  skewX: W.degreeT("--chakra-skew-x"),
  skewY: W.degreeT("--chakra-skew-y"),
  scaleX: W.prop("--chakra-scale-x"),
  scaleY: W.prop("--chakra-scale-y"),
  scale: W.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: W.degreeT("--chakra-rotate")
}, Dx = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: W.prop("transitionDuration", "transition.duration"),
  transitionProperty: W.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: W.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, Mx = {
  fontFamily: W.prop("fontFamily", "fonts"),
  fontSize: W.prop("fontSize", "fontSizes", _e.px),
  fontWeight: W.prop("fontWeight", "fontWeights"),
  lineHeight: W.prop("lineHeight", "lineHeights"),
  letterSpacing: W.prop("letterSpacing", "letterSpacings"),
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
}, Ix = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: W.spaceT("scrollMargin"),
  scrollMarginTop: W.spaceT("scrollMarginTop"),
  scrollMarginBottom: W.spaceT("scrollMarginBottom"),
  scrollMarginLeft: W.spaceT("scrollMarginLeft"),
  scrollMarginRight: W.spaceT("scrollMarginRight"),
  scrollMarginX: W.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: W.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: W.spaceT("scrollPadding"),
  scrollPaddingTop: W.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: W.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: W.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: W.spaceT("scrollPaddingRight"),
  scrollPaddingX: W.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: W.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function Ny(e) {
  return Qt(e) && e.reference ? e.reference : String(e);
}
var Ks = (e, ...t) => t.map(Ny).join(` ${e} `).replace(/calc/g, ""), Hd = (...e) => `calc(${Ks("+", ...e)})`, qd = (...e) => `calc(${Ks("-", ...e)})`, Kc = (...e) => `calc(${Ks("*", ...e)})`, Yd = (...e) => `calc(${Ks("/", ...e)})`, Kd = (e) => {
  const t = Ny(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Kc(t, -1);
}, jn = Object.assign(
  (e) => ({
    add: (...t) => jn(Hd(e, ...t)),
    subtract: (...t) => jn(qd(e, ...t)),
    multiply: (...t) => jn(Kc(e, ...t)),
    divide: (...t) => jn(Yd(e, ...t)),
    negate: () => jn(Kd(e)),
    toString: () => e.toString()
  }),
  {
    add: Hd,
    subtract: qd,
    multiply: Kc,
    divide: Yd,
    negate: Kd
  }
);
function $x(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function jx(e) {
  const t = $x(e.toString());
  return Fx(Lx(t));
}
function Lx(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function Fx(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function Nx(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function Bx(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function Vx(e, t = "") {
  return jx(`--${Nx(e, t)}`);
}
function ye(e, t, r) {
  const n = Vx(e, r);
  return {
    variable: n,
    reference: Bx(n, t)
  };
}
function zx(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [o, a] = n;
      r[o] = ye(`${e}-${o}`, a);
      continue;
    }
    r[n] = ye(`${e}-${n}`);
  }
  return r;
}
function Wx(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Ux(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Gc(e) {
  if (e == null)
    return e;
  const { unitless: t } = Ux(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var By = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Ju = (e) => Object.fromEntries(Object.entries(e).sort(By));
function Gd(e) {
  const t = Ju(e);
  return Object.assign(Object.values(t), t);
}
function Hx(e) {
  const t = Object.keys(Ju(e));
  return new Set(t);
}
function Xd(e) {
  var t;
  if (!e)
    return e;
  e = (t = Gc(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number" ? `${e + r}` : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function va(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${Gc(e)})`), t && r.push("and", `(max-width: ${Gc(t)})`), r.join(" ");
}
function qx(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = Gd(e), n = Object.entries(e).sort(By).map(([i, s], l, c) => {
    var u;
    let [, d] = (u = c[l + 1]) != null ? u : [];
    return d = parseFloat(d) > 0 ? Xd(d) : void 0, {
      _minW: Xd(s),
      breakpoint: i,
      minW: s,
      maxW: d,
      maxWQuery: va(null, d),
      minWQuery: va(s),
      minMaxQuery: va(s, d)
    };
  }), o = Hx(e), a = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(i) {
      const s = Object.keys(i);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: Ju(e),
    asArray: Gd(e),
    details: n,
    get(i) {
      return n.find((s) => s.breakpoint === i);
    },
    media: [
      null,
      ...r.map((i) => va(i)).slice(1)
    ],
    /**
     * Converts the object responsive syntax to array syntax
     *
     * @example
     * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
     */
    toArrayValue(i) {
      if (!Qt(i))
        throw new Error("toArrayValue: value must be an object");
      const s = a.map((l) => {
        var c;
        return (c = i[l]) != null ? c : null;
      });
      for (; Wx(s) === null; )
        s.pop();
      return s;
    },
    /**
     * Converts the array responsive syntax to object syntax
     *
     * @example
     * toObjectValue([1, 2, 3]) // => { base: 1, sm: 2, md: 3 }
     */
    toObjectValue(i) {
      if (!Array.isArray(i))
        throw new Error("toObjectValue: value must be an array");
      return i.reduce((s, l, c) => {
        const u = a[c];
        return u != null && l != null && (s[u] = l), s;
      }, {});
    }
  };
}
var _t = {
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
}, un = (e) => Vy((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), qr = (e) => Vy((t) => e(t, "~ &"), "[data-peer]", ".peer"), Vy = (e, ...t) => t.map(e).join(", "), Gs = {
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
  _groupHover: un(_t.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: qr(_t.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: un(_t.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: qr(_t.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: un(_t.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: qr(_t.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: un(_t.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: qr(_t.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: un(_t.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: qr(_t.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: un(_t.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: qr(_t.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: un(_t.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: qr(_t.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: un(_t.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: qr(_t.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: qr(_t.placeholderShown),
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
}, zy = Object.keys(
  Gs
);
function Zd(e, t) {
  return ye(String(e).replace(/\./g, "-"), void 0, t);
}
function Yx(e, t) {
  let r = {};
  const n = {};
  for (const [o, a] of Object.entries(e)) {
    const { isSemantic: i, value: s } = a, { variable: l, reference: c } = Zd(o, t == null ? void 0 : t.cssVarPrefix);
    if (!i) {
      if (o.startsWith("space")) {
        const m = o.split("."), [y, ...x] = m, w = `${y}.-${x.join(".")}`, _ = jn.negate(s), T = jn.negate(c);
        n[w] = {
          value: _,
          var: l,
          varRef: T
        };
      }
      r[l] = s, n[o] = {
        value: s,
        var: l,
        varRef: c
      };
      continue;
    }
    const u = (m) => {
      const x = [String(o).split(".")[0], m].join(".");
      if (!e[x])
        return m;
      const { reference: _ } = Zd(x, t == null ? void 0 : t.cssVarPrefix);
      return _;
    }, d = Qt(s) ? s : { default: s };
    r = Dr(
      r,
      Object.entries(d).reduce(
        (m, [y, x]) => {
          var w, _;
          if (!x)
            return m;
          const T = u(`${x}`);
          if (y === "default")
            return m[l] = T, m;
          const P = (_ = (w = Gs) == null ? void 0 : w[y]) != null ? _ : y;
          return m[P] = { [l]: T }, m;
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
function Kx(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function Gx(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function Xx(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function Jd(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function a(i, s = []) {
    var l;
    if (Xx(i) || Array.isArray(i)) {
      const c = {};
      for (const [u, d] of Object.entries(i)) {
        const m = (l = o == null ? void 0 : o(u)) != null ? l : u, y = [...s, m];
        if (n != null && n(i, y))
          return t(i, s);
        c[m] = a(d, y);
      }
      return c;
    }
    return t(i, s);
  }
  return a(e);
}
var Zx = [
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
function Jx(e) {
  return Gx(e, Zx);
}
function Qx(e) {
  return e.semanticTokens;
}
function e_(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var t_ = (e) => zy.includes(e) || e === "default";
function r_({
  tokens: e,
  semanticTokens: t
}) {
  const r = {};
  return Jd(e, (n, o) => {
    n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
  }), Jd(
    t,
    (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
    },
    {
      stop: (n) => Object.keys(n).every(t_)
    }
  ), r;
}
function n_(e) {
  var t;
  const r = e_(e), n = Jx(r), o = Qx(r), a = r_({ tokens: n, semanticTokens: o }), i = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
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
  } = Yx(a, { cssVarPrefix: i });
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
    __breakpoints: qx(r.breakpoints)
  }), r;
}
var Qu = Dr(
  {},
  Gi,
  Te,
  bx,
  vs,
  ur,
  Sx,
  Cx,
  wx,
  Fy,
  Tx,
  Oa,
  Yc,
  He,
  Ix,
  Mx,
  Rx,
  Ax,
  xx,
  Dx
), o_ = Object.assign({}, He, ur, vs, Fy, Oa), a_ = Object.keys(
  o_
), i_ = [...Object.keys(Qu), ...zy], s_ = { ...Qu, ...Gs }, l_ = (e) => e in s_, c_ = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, a = {};
  for (const i in e) {
    let s = Ar(e[i], t);
    if (s == null)
      continue;
    if (s = Qt(s) && r(s) ? n(s) : s, !Array.isArray(s)) {
      a[i] = s;
      continue;
    }
    const l = s.slice(0, o.length).length;
    for (let c = 0; c < l; c += 1) {
      const u = o == null ? void 0 : o[c];
      if (!u) {
        a[i] = s[c];
        continue;
      }
      a[u] = a[u] || {}, s[c] != null && (a[u][i] = s[c]);
    }
  }
  return a;
};
function u_(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    a === "(" ? (n = !0, r += a) : a === ")" ? (n = !1, r += a) : a === "," && !n ? (t.push(r), r = "") : r += a;
  }
  return r = r.trim(), r && t.push(r), t;
}
function f_(e) {
  return /^var\(--.+\)$/.test(e);
}
var d_ = (e, t) => e.startsWith("--") && typeof t == "string" && !f_(t), p_ = (e, t) => {
  var r, n;
  if (t == null)
    return t;
  const o = (l) => {
    var c, u;
    return (u = (c = e.__cssMap) == null ? void 0 : c[l]) == null ? void 0 : u.varRef;
  }, a = (l) => {
    var c;
    return (c = o(l)) != null ? c : l;
  }, [i, s] = u_(t);
  return t = (n = (r = o(i)) != null ? r : a(s)) != null ? n : a(t), t;
};
function h_(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (a, i = !1) => {
    var s, l, c;
    const u = Ar(a, n), d = c_(u)(n);
    let m = {};
    for (let y in d) {
      const x = d[y];
      let w = Ar(x, n);
      y in r && (y = r[y]), d_(y, w) && (w = p_(n, w));
      let _ = t[y];
      if (_ === !0 && (_ = { property: y }), Qt(w)) {
        m[y] = (s = m[y]) != null ? s : {}, m[y] = Dr(
          {},
          m[y],
          o(w, !0)
        );
        continue;
      }
      let T = (c = (l = _ == null ? void 0 : _.transform) == null ? void 0 : l.call(_, w, n, u)) != null ? c : w;
      T = _ != null && _.processResult ? o(T, !0) : T;
      const P = Ar(_ == null ? void 0 : _.property, n);
      if (!i && (_ != null && _.static)) {
        const k = Ar(_.static, n);
        m = Dr({}, m, k);
      }
      if (P && Array.isArray(P)) {
        for (const k of P)
          m[k] = T;
        continue;
      }
      if (P) {
        P === "&" && Qt(T) ? m = Dr({}, m, T) : m[P] = T;
        continue;
      }
      if (Qt(T)) {
        m = Dr({}, m, T);
        continue;
      }
      m[y] = T;
    }
    return m;
  };
  return o;
}
var Wy = (e) => (t) => h_({
  theme: t,
  pseudos: Gs,
  configs: Qu
})(e);
function Ue(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function m_(e, t) {
  if (Array.isArray(e))
    return e;
  if (Qt(e))
    return t(e);
  if (e != null)
    return [e];
}
function y_(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function v_(e) {
  const t = e.__breakpoints;
  return function(n, o, a, i) {
    var s, l;
    if (!t)
      return;
    const c = {}, u = m_(a, t.toArrayValue);
    if (!u)
      return c;
    const d = u.length, m = d === 1, y = !!n.parts;
    for (let x = 0; x < d; x++) {
      const w = t.details[x], _ = t.details[y_(u, x)], T = va(w.minW, _ == null ? void 0 : _._minW), P = Ar((s = n[o]) == null ? void 0 : s[u[x]], i);
      if (P) {
        if (y) {
          (l = n.parts) == null || l.forEach((k) => {
            Dr(c, {
              [k]: m ? P[k] : { [T]: P[k] }
            });
          });
          continue;
        }
        if (!y) {
          m ? Dr(c, P) : c[T] = P;
          continue;
        }
        c[T] = P;
      }
    }
    return c;
  };
}
function g_(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: a } = t, i = v_(a);
    return Dr(
      {},
      Ar((r = e.baseStyle) != null ? r : {}, t),
      i(e, "sizes", o, t),
      i(e, "variants", n, t)
    );
  };
}
function b_(e, t, r) {
  var n, o, a;
  return (a = (o = (n = e.__cssMap) == null ? void 0 : n[`${t}.${r}`]) == null ? void 0 : o.varRef) != null ? a : r;
}
function Wr(e) {
  return Kx(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var S_ = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, w_ = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, x_ = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, __ = {
  property: S_,
  easing: w_,
  duration: x_
}, P_ = __, O_ = {
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
}, E_ = O_, k_ = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, T_ = k_, C_ = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, R_ = C_, A_ = {
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
}, D_ = A_, M_ = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, I_ = M_, $_ = {
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
}, j_ = $_, L_ = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, F_ = L_, N_ = {
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
}, Uy = N_, Hy = {
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
}, B_ = {
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
}, V_ = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, z_ = {
  ...Hy,
  ...B_,
  container: V_
}, qy = z_, W_ = {
  breakpoints: R_,
  zIndices: E_,
  radii: I_,
  blur: F_,
  colors: D_,
  ...Uy,
  sizes: qy,
  shadows: j_,
  space: Hy,
  borders: T_,
  transition: P_
}, { defineMultiStyleConfig: U_, definePartsStyle: ga } = Ue([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Yr = ye("stepper-indicator-size"), ho = ye("stepper-icon-size"), mo = ye("stepper-title-font-size"), ba = ye("stepper-description-font-size"), sa = ye("stepper-accent-color"), H_ = ga(({ colorScheme: e }) => ({
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
    [sa.variable]: `colors.${e}.500`,
    _dark: {
      [sa.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: mo.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: ba.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: mo.reference
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
    width: ho.reference,
    height: ho.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: Yr.reference,
    height: Yr.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: sa.reference
    },
    "&[data-status=complete]": {
      bg: sa.reference,
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
      bg: sa.reference
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
      maxHeight: `calc(100% - ${Yr.reference} - 8px)`,
      top: `calc(${Yr.reference} + 4px)`,
      insetStart: `calc(${Yr.reference} / 2 - 1px)`
    }
  }
})), q_ = U_({
  baseStyle: H_,
  sizes: {
    xs: ga({
      stepper: {
        [Yr.variable]: "sizes.4",
        [ho.variable]: "sizes.3",
        [mo.variable]: "fontSizes.xs",
        [ba.variable]: "fontSizes.xs"
      }
    }),
    sm: ga({
      stepper: {
        [Yr.variable]: "sizes.6",
        [ho.variable]: "sizes.4",
        [mo.variable]: "fontSizes.sm",
        [ba.variable]: "fontSizes.xs"
      }
    }),
    md: ga({
      stepper: {
        [Yr.variable]: "sizes.8",
        [ho.variable]: "sizes.5",
        [mo.variable]: "fontSizes.md",
        [ba.variable]: "fontSizes.sm"
      }
    }),
    lg: ga({
      stepper: {
        [Yr.variable]: "sizes.10",
        [ho.variable]: "sizes.6",
        [mo.variable]: "fontSizes.lg",
        [ba.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function Ie(e, t = {}) {
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
    return Ie(e, t);
  }
  function a(...u) {
    for (const d of u)
      d in t || (t[d] = l(d));
    return Ie(e, t);
  }
  function i() {
    return Object.fromEntries(
      Object.entries(t).map(([d, m]) => [d, m.selector])
    );
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([d, m]) => [d, m.className])
    );
  }
  function l(u) {
    const y = `chakra-${(["container", "root"].includes(u ?? "") ? [e] : [e, u]).filter(Boolean).join("__")}`;
    return {
      className: y,
      selector: `.${y}`,
      toString: () => u
    };
  }
  return {
    parts: o,
    toPart: l,
    extend: a,
    selectors: i,
    classnames: s,
    get keys() {
      return Object.keys(t);
    },
    __type: {}
  };
}
var Y_ = Ie("accordion").parts("root", "container", "button", "panel").extend("icon"), K_ = Ie("alert").parts("title", "description", "container").extend("icon", "spinner"), G_ = Ie("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), X_ = Ie("breadcrumb").parts("link", "item", "container").extend("separator");
Ie("button").parts();
var Z_ = Ie("checkbox").parts("control", "icon", "container").extend("label");
Ie("progress").parts("track", "filledTrack").extend("label");
var J_ = Ie("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), Q_ = Ie("editable").parts(
  "preview",
  "input",
  "textarea"
), eP = Ie("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), tP = Ie("formError").parts("text", "icon"), rP = Ie("input").parts(
  "addon",
  "field",
  "element",
  "group"
), nP = Ie("list").parts("container", "item", "icon"), oP = Ie("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), aP = Ie("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), iP = Ie("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
Ie("pininput").parts("field");
var sP = Ie("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), lP = Ie("progress").parts(
  "label",
  "filledTrack",
  "track"
), cP = Ie("radio").parts(
  "container",
  "control",
  "label"
), uP = Ie("select").parts("field", "icon"), fP = Ie("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), dP = Ie("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), pP = Ie("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), hP = Ie("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), mP = Ie("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), yP = Ie("tag").parts(
  "container",
  "label",
  "closeButton"
), vP = Ie("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
Ie("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
function Bn(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class gP extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Sa = gP;
function ef(e) {
  if (typeof e != "string")
    throw new Sa(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = EP.test(e) ? wP(e) : e;
  const r = xP.exec(t);
  if (r) {
    const i = Array.from(r).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(za(s, 2), 16)), parseInt(za(i[3] || "f", 2), 16) / 255];
  }
  const n = _P.exec(t);
  if (n) {
    const i = Array.from(n).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(i[3] || "ff", 16) / 255];
  }
  const o = PP.exec(t);
  if (o) {
    const i = Array.from(o).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(i[3] || "1")];
  }
  const a = OP.exec(t);
  if (a) {
    const [i, s, l, c] = Array.from(a).slice(1).map(parseFloat);
    if (Bn(0, 100, s) !== s)
      throw new Sa(e);
    if (Bn(0, 100, l) !== l)
      throw new Sa(e);
    return [...kP(i, s, l), Number.isNaN(c) ? 1 : c];
  }
  throw new Sa(e);
}
function bP(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const Qd = (e) => parseInt(e.replace(/_/g, ""), 36), SP = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = Qd(t.substring(0, 3)), n = Qd(t.substring(3)).toString(16);
  let o = "";
  for (let a = 0; a < 6 - n.length; a++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function wP(e) {
  const t = e.toLowerCase().trim(), r = SP[bP(t)];
  if (!r)
    throw new Sa(e);
  return `#${r}`;
}
const za = (e, t) => Array.from(Array(t)).map(() => e).join(""), xP = new RegExp(`^#${za("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), _P = new RegExp(`^#${za("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), PP = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${za(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), OP = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, EP = /^[a-z]+$/i, ep = (e) => Math.round(e * 255), kP = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(ep);
  const o = (e % 360 + 360) % 360 / 60, a = (1 - Math.abs(2 * n - 1)) * (t / 100), i = a * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, c = 0;
  o >= 0 && o < 1 ? (s = a, l = i) : o >= 1 && o < 2 ? (s = i, l = a) : o >= 2 && o < 3 ? (l = a, c = i) : o >= 3 && o < 4 ? (l = i, c = a) : o >= 4 && o < 5 ? (s = i, c = a) : o >= 5 && o < 6 && (s = a, c = i);
  const u = n - a / 2, d = s + u, m = l + u, y = c + u;
  return [d, m, y].map(ep);
};
function TP(e, t, r, n) {
  return `rgba(${Bn(0, 255, e).toFixed()}, ${Bn(0, 255, t).toFixed()}, ${Bn(0, 255, r).toFixed()}, ${parseFloat(Bn(0, 1, n).toFixed(3))})`;
}
function CP(e, t) {
  const [r, n, o, a] = ef(e);
  return TP(r, n, o, a - t);
}
function RP(e) {
  const [t, r, n, o] = ef(e);
  let a = (i) => {
    const s = Bn(0, 255, i).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${a(t)}${a(r)}${a(n)}${o < 1 ? a(Math.round(o * 255)) : ""}`;
}
function AP(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var DP = (e) => Object.keys(e).length === 0, Nt = (e, t, r) => {
  const n = AP(e, `colors.${t}`, t);
  try {
    return RP(n), n;
  } catch {
    return r ?? "#000000";
  }
}, MP = (e) => {
  const [t, r, n] = ef(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, IP = (e) => (t) => {
  const r = Nt(t, e);
  return MP(r) < 128 ? "dark" : "light";
}, $P = (e) => (t) => IP(e)(t) === "dark", $o = (e, t) => (r) => {
  const n = Nt(r, e);
  return CP(n, 1 - t);
};
function tp(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var jP = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function LP(e) {
  const t = jP();
  return !e || DP(e) ? t : e.string && e.colors ? NP(e.string, e.colors) : e.string && !e.colors ? FP(e.string) : e.colors && !e.string ? BP(e.colors) : t;
}
function FP(e) {
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
function NP(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function BP(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function me(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function tf(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function Yy(e) {
  return Qt(e) && e.reference ? e.reference : String(e);
}
var Xs = (e, ...t) => t.map(Yy).join(` ${e} `).replace(/calc/g, ""), rp = (...e) => `calc(${Xs("+", ...e)})`, np = (...e) => `calc(${Xs("-", ...e)})`, Xc = (...e) => `calc(${Xs("*", ...e)})`, op = (...e) => `calc(${Xs("/", ...e)})`, ap = (e) => {
  const t = Yy(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Xc(t, -1);
}, Kr = Object.assign(
  (e) => ({
    add: (...t) => Kr(rp(e, ...t)),
    subtract: (...t) => Kr(np(e, ...t)),
    multiply: (...t) => Kr(Xc(e, ...t)),
    divide: (...t) => Kr(op(e, ...t)),
    negate: () => Kr(ap(e)),
    toString: () => e.toString()
  }),
  {
    add: rp,
    subtract: np,
    multiply: Xc,
    divide: op,
    negate: ap
  }
);
function VP(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function zP(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function Ky(e) {
  const t = zP(e.toString());
  return t.includes("\\.") ? e : VP(e) ? t.replace(".", "\\.") : e;
}
function WP(e, t = "") {
  return [t, Ky(e)].filter(Boolean).join("-");
}
function UP(e, t) {
  return `var(${Ky(e)}${t ? `, ${t}` : ""})`;
}
function HP(e, t = "") {
  return `--${WP(e, t)}`;
}
function gt(e, t) {
  const r = HP(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: UP(r, qP(t == null ? void 0 : t.fallback))
  };
}
function qP(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: YP, definePartsStyle: Xi } = Ue(pP.keys), Ea = gt("switch-track-width"), zn = gt("switch-track-height"), Tl = gt("switch-track-diff"), KP = Kr.subtract(Ea, zn), Zc = gt("switch-thumb-x"), la = gt("switch-bg"), GP = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [Ea.reference],
    height: [zn.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [la.variable]: "colors.gray.300",
    _dark: {
      [la.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [la.variable]: `colors.${t}.500`,
      _dark: {
        [la.variable]: `colors.${t}.200`
      }
    },
    bg: la.reference
  };
}, XP = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [zn.reference],
  height: [zn.reference],
  _checked: {
    transform: `translateX(${Zc.reference})`
  }
}, ZP = Xi((e) => ({
  container: {
    [Tl.variable]: KP,
    [Zc.variable]: Tl.reference,
    _rtl: {
      [Zc.variable]: Kr(Tl).negate().toString()
    }
  },
  track: GP(e),
  thumb: XP
})), JP = {
  sm: Xi({
    container: {
      [Ea.variable]: "1.375rem",
      [zn.variable]: "sizes.3"
    }
  }),
  md: Xi({
    container: {
      [Ea.variable]: "1.875rem",
      [zn.variable]: "sizes.4"
    }
  }),
  lg: Xi({
    container: {
      [Ea.variable]: "2.875rem",
      [zn.variable]: "sizes.6"
    }
  })
}, QP = YP({
  baseStyle: ZP,
  sizes: JP,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: e1, definePartsStyle: Eo } = Ue(hP.keys), t1 = Eo({
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
}), gs = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, r1 = Eo((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: me("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: me(`${t}.100`, `${t}.700`)(e),
      ...gs
    },
    td: {
      borderBottom: "1px",
      borderColor: me(`${t}.100`, `${t}.700`)(e),
      ...gs
    },
    caption: {
      color: me("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), n1 = Eo((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: me("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: me(`${t}.100`, `${t}.700`)(e),
      ...gs
    },
    td: {
      borderBottom: "1px",
      borderColor: me(`${t}.100`, `${t}.700`)(e),
      ...gs
    },
    caption: {
      color: me("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: me(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: me(`${t}.100`, `${t}.700`)(e)
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
}), o1 = {
  simple: r1,
  striped: n1,
  unstyled: {}
}, a1 = {
  sm: Eo({
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
  md: Eo({
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
  lg: Eo({
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
}, i1 = e1({
  baseStyle: t1,
  variants: o1,
  sizes: a1,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Wt = ye("tabs-color"), Sr = ye("tabs-bg"), Ti = ye("tabs-border-color"), { defineMultiStyleConfig: s1, definePartsStyle: jr } = Ue(mP.keys), l1 = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, c1 = (e) => {
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
}, u1 = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, f1 = {
  p: 4
}, d1 = jr((e) => ({
  root: l1(e),
  tab: c1(e),
  tablist: u1(e),
  tabpanel: f1
})), p1 = {
  sm: jr({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: jr({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: jr({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, h1 = jr((e) => {
  const { colorScheme: t, orientation: r } = e, n = r === "vertical", o = n ? "borderStart" : "borderBottom", a = n ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [o]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [o]: "2px solid",
      borderColor: "transparent",
      [a]: "-2px",
      _selected: {
        [Wt.variable]: `colors.${t}.600`,
        _dark: {
          [Wt.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [Sr.variable]: "colors.gray.200",
        _dark: {
          [Sr.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: Wt.reference,
      bg: Sr.reference
    }
  };
}), m1 = jr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [Ti.variable]: "transparent",
      _selected: {
        [Wt.variable]: `colors.${t}.600`,
        [Ti.variable]: "colors.white",
        _dark: {
          [Wt.variable]: `colors.${t}.300`,
          [Ti.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: Ti.reference
      },
      color: Wt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), y1 = jr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [Sr.variable]: "colors.gray.50",
      _dark: {
        [Sr.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [Sr.variable]: "colors.white",
        [Wt.variable]: `colors.${t}.600`,
        _dark: {
          [Sr.variable]: "colors.gray.800",
          [Wt.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: Wt.reference,
      bg: Sr.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), v1 = jr((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: Nt(r, `${t}.700`),
        bg: Nt(r, `${t}.100`)
      }
    }
  };
}), g1 = jr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [Wt.variable]: "colors.gray.600",
      _dark: {
        [Wt.variable]: "inherit"
      },
      _selected: {
        [Wt.variable]: "colors.white",
        [Sr.variable]: `colors.${t}.600`,
        _dark: {
          [Wt.variable]: "colors.gray.800",
          [Sr.variable]: `colors.${t}.300`
        }
      },
      color: Wt.reference,
      bg: Sr.reference
    }
  };
}), b1 = jr({}), S1 = {
  line: h1,
  enclosed: m1,
  "enclosed-colored": y1,
  "soft-rounded": v1,
  "solid-rounded": g1,
  unstyled: b1
}, w1 = s1({
  baseStyle: d1,
  sizes: p1,
  variants: S1,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), st = zx("badge", ["bg", "color", "shadow"]), x1 = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: st.bg.reference,
  color: st.color.reference,
  boxShadow: st.shadow.reference
}, _1 = (e) => {
  const { colorScheme: t, theme: r } = e, n = $o(`${t}.500`, 0.6)(r);
  return {
    [st.bg.variable]: `colors.${t}.500`,
    [st.color.variable]: "colors.white",
    _dark: {
      [st.bg.variable]: n,
      [st.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, P1 = (e) => {
  const { colorScheme: t, theme: r } = e, n = $o(`${t}.200`, 0.16)(r);
  return {
    [st.bg.variable]: `colors.${t}.100`,
    [st.color.variable]: `colors.${t}.800`,
    _dark: {
      [st.bg.variable]: n,
      [st.color.variable]: `colors.${t}.200`
    }
  };
}, O1 = (e) => {
  const { colorScheme: t, theme: r } = e, n = $o(`${t}.200`, 0.8)(r);
  return {
    [st.color.variable]: `colors.${t}.500`,
    _dark: {
      [st.color.variable]: n
    },
    [st.shadow.variable]: `inset 0 0 0px 1px ${st.color.reference}`
  };
}, E1 = {
  solid: _1,
  subtle: P1,
  outline: O1
}, ka = {
  baseStyle: x1,
  variants: E1,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: k1, definePartsStyle: Wn } = Ue(yP.keys), ip = ye("tag-bg"), sp = ye("tag-color"), Cl = ye("tag-shadow"), Zi = ye("tag-min-height"), Ji = ye("tag-min-width"), Qi = ye("tag-font-size"), es = ye("tag-padding-inline"), T1 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [sp.variable]: st.color.reference,
  [ip.variable]: st.bg.reference,
  [Cl.variable]: st.shadow.reference,
  color: sp.reference,
  bg: ip.reference,
  boxShadow: Cl.reference,
  borderRadius: "md",
  minH: Zi.reference,
  minW: Ji.reference,
  fontSize: Qi.reference,
  px: es.reference,
  _focusVisible: {
    [Cl.variable]: "shadows.outline"
  }
}, C1 = {
  lineHeight: 1.2,
  overflow: "visible"
}, R1 = {
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
}, A1 = Wn({
  container: T1,
  label: C1,
  closeButton: R1
}), D1 = {
  sm: Wn({
    container: {
      [Zi.variable]: "sizes.5",
      [Ji.variable]: "sizes.5",
      [Qi.variable]: "fontSizes.xs",
      [es.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: Wn({
    container: {
      [Zi.variable]: "sizes.6",
      [Ji.variable]: "sizes.6",
      [Qi.variable]: "fontSizes.sm",
      [es.variable]: "space.2"
    }
  }),
  lg: Wn({
    container: {
      [Zi.variable]: "sizes.8",
      [Ji.variable]: "sizes.8",
      [Qi.variable]: "fontSizes.md",
      [es.variable]: "space.3"
    }
  })
}, M1 = {
  subtle: Wn((e) => {
    var t;
    return {
      container: (t = ka.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: Wn((e) => {
    var t;
    return {
      container: (t = ka.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: Wn((e) => {
    var t;
    return {
      container: (t = ka.variants) == null ? void 0 : t.outline(e)
    };
  })
}, I1 = k1({
  variants: M1,
  baseStyle: A1,
  sizes: D1,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: Gr, defineMultiStyleConfig: $1 } = Ue(rP.keys), yo = ye("input-height"), vo = ye("input-font-size"), go = ye("input-padding"), bo = ye("input-border-radius"), j1 = Gr({
  addon: {
    height: yo.reference,
    fontSize: vo.reference,
    px: go.reference,
    borderRadius: bo.reference
  },
  field: {
    width: "100%",
    height: yo.reference,
    fontSize: vo.reference,
    px: go.reference,
    borderRadius: bo.reference,
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
}), fn = {
  lg: {
    [vo.variable]: "fontSizes.lg",
    [go.variable]: "space.4",
    [bo.variable]: "radii.md",
    [yo.variable]: "sizes.12"
  },
  md: {
    [vo.variable]: "fontSizes.md",
    [go.variable]: "space.4",
    [bo.variable]: "radii.md",
    [yo.variable]: "sizes.10"
  },
  sm: {
    [vo.variable]: "fontSizes.sm",
    [go.variable]: "space.3",
    [bo.variable]: "radii.sm",
    [yo.variable]: "sizes.8"
  },
  xs: {
    [vo.variable]: "fontSizes.xs",
    [go.variable]: "space.2",
    [bo.variable]: "radii.sm",
    [yo.variable]: "sizes.6"
  }
}, L1 = {
  lg: Gr({
    field: fn.lg,
    group: fn.lg
  }),
  md: Gr({
    field: fn.md,
    group: fn.md
  }),
  sm: Gr({
    field: fn.sm,
    group: fn.sm
  }),
  xs: Gr({
    field: fn.xs,
    group: fn.xs
  })
};
function rf(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || me("blue.500", "blue.300")(e),
    errorBorderColor: r || me("red.500", "red.300")(e)
  };
}
var F1 = Gr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = rf(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: me("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Nt(t, n),
        boxShadow: `0 0 0 1px ${Nt(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: Nt(t, r),
        boxShadow: `0 0 0 1px ${Nt(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: me("inherit", "whiteAlpha.50")(e),
      bg: me("gray.100", "whiteAlpha.300")(e)
    }
  };
}), N1 = Gr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = rf(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: me("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: me("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Nt(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: Nt(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: me("gray.100", "whiteAlpha.50")(e)
    }
  };
}), B1 = Gr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = rf(e);
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
        borderColor: Nt(t, n),
        boxShadow: `0px 1px 0px 0px ${Nt(t, n)}`
      },
      _focusVisible: {
        borderColor: Nt(t, r),
        boxShadow: `0px 1px 0px 0px ${Nt(t, r)}`
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
}), V1 = Gr({
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
}), z1 = {
  outline: F1,
  filled: N1,
  flushed: B1,
  unstyled: V1
}, Ae = $1({
  baseStyle: j1,
  sizes: L1,
  variants: z1,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), lp, W1 = {
  ...(lp = Ae.baseStyle) == null ? void 0 : lp.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, cp, up, U1 = {
  outline: (e) => {
    var t, r;
    return (r = (t = Ae.variants) == null ? void 0 : t.outline(e).field) != null ? r : {};
  },
  flushed: (e) => {
    var t, r;
    return (r = (t = Ae.variants) == null ? void 0 : t.flushed(e).field) != null ? r : {};
  },
  filled: (e) => {
    var t, r;
    return (r = (t = Ae.variants) == null ? void 0 : t.filled(e).field) != null ? r : {};
  },
  unstyled: (up = (cp = Ae.variants) == null ? void 0 : cp.unstyled.field) != null ? up : {}
}, fp, dp, pp, hp, mp, yp, vp, gp, H1 = {
  xs: (dp = (fp = Ae.sizes) == null ? void 0 : fp.xs.field) != null ? dp : {},
  sm: (hp = (pp = Ae.sizes) == null ? void 0 : pp.sm.field) != null ? hp : {},
  md: (yp = (mp = Ae.sizes) == null ? void 0 : mp.md.field) != null ? yp : {},
  lg: (gp = (vp = Ae.sizes) == null ? void 0 : vp.lg.field) != null ? gp : {}
}, q1 = {
  baseStyle: W1,
  sizes: H1,
  variants: U1,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, Ci = gt("tooltip-bg"), Rl = gt("tooltip-fg"), Y1 = gt("popper-arrow-bg"), K1 = {
  bg: Ci.reference,
  color: Rl.reference,
  [Ci.variable]: "colors.gray.700",
  [Rl.variable]: "colors.whiteAlpha.900",
  _dark: {
    [Ci.variable]: "colors.gray.300",
    [Rl.variable]: "colors.gray.900"
  },
  [Y1.variable]: Ci.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, G1 = {
  baseStyle: K1
}, { defineMultiStyleConfig: X1, definePartsStyle: wa } = Ue(lP.keys), Z1 = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, a = me(
    tp(),
    tp("1rem", "rgba(0,0,0,0.1)")
  )(e), i = me(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${Nt(r, i)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && a,
    ...n ? { bgImage: s } : { bgColor: i }
  };
}, J1 = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, Q1 = (e) => ({
  bg: me("gray.100", "whiteAlpha.300")(e)
}), eO = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...Z1(e)
}), tO = wa((e) => ({
  label: J1,
  filledTrack: eO(e),
  track: Q1(e)
})), rO = {
  xs: wa({
    track: { h: "1" }
  }),
  sm: wa({
    track: { h: "2" }
  }),
  md: wa({
    track: { h: "3" }
  }),
  lg: wa({
    track: { h: "4" }
  })
}, nO = X1({
  sizes: rO,
  baseStyle: tO,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), oO = (e) => typeof e == "function";
function Bt(e, ...t) {
  return oO(e) ? e(...t) : e;
}
var { definePartsStyle: ts, defineMultiStyleConfig: aO } = Ue(Z_.keys), Ta = ye("checkbox-size"), iO = (e) => {
  const { colorScheme: t } = e;
  return {
    w: Ta.reference,
    h: Ta.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: me(`${t}.500`, `${t}.200`)(e),
      borderColor: me(`${t}.500`, `${t}.200`)(e),
      color: me("white", "gray.900")(e),
      _hover: {
        bg: me(`${t}.600`, `${t}.300`)(e),
        borderColor: me(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: me("gray.200", "transparent")(e),
        bg: me("gray.200", "whiteAlpha.300")(e),
        color: me("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: me(`${t}.500`, `${t}.200`)(e),
      borderColor: me(`${t}.500`, `${t}.200`)(e),
      color: me("white", "gray.900")(e)
    },
    _disabled: {
      bg: me("gray.100", "whiteAlpha.100")(e),
      borderColor: me("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: me("red.500", "red.300")(e)
    }
  };
}, sO = {
  _disabled: { cursor: "not-allowed" }
}, lO = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, cO = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, uO = ts((e) => ({
  icon: cO,
  container: sO,
  control: Bt(iO, e),
  label: lO
})), fO = {
  sm: ts({
    control: { [Ta.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: ts({
    control: { [Ta.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: ts({
    control: { [Ta.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, bs = aO({
  baseStyle: uO,
  sizes: fO,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: dO, definePartsStyle: rs } = Ue(cP.keys), pO = (e) => {
  var t;
  const r = (t = Bt(bs.baseStyle, e)) == null ? void 0 : t.control;
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
}, hO = rs((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = bs).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = bs).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: pO(e)
  };
}), mO = {
  md: rs({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: rs({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: rs({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, yO = dO({
  baseStyle: hO,
  sizes: mO,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: vO, definePartsStyle: gO } = Ue(uP.keys), Ri = ye("select-bg"), bp, bO = {
  ...(bp = Ae.baseStyle) == null ? void 0 : bp.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: Ri.reference,
  [Ri.variable]: "colors.white",
  _dark: {
    [Ri.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: Ri.reference
  }
}, SO = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, wO = gO({
  field: bO,
  icon: SO
}), Ai = {
  paddingInlineEnd: "8"
}, Sp, wp, xp, _p, Pp, Op, Ep, kp, xO = {
  lg: {
    ...(Sp = Ae.sizes) == null ? void 0 : Sp.lg,
    field: {
      ...(wp = Ae.sizes) == null ? void 0 : wp.lg.field,
      ...Ai
    }
  },
  md: {
    ...(xp = Ae.sizes) == null ? void 0 : xp.md,
    field: {
      ...(_p = Ae.sizes) == null ? void 0 : _p.md.field,
      ...Ai
    }
  },
  sm: {
    ...(Pp = Ae.sizes) == null ? void 0 : Pp.sm,
    field: {
      ...(Op = Ae.sizes) == null ? void 0 : Op.sm.field,
      ...Ai
    }
  },
  xs: {
    ...(Ep = Ae.sizes) == null ? void 0 : Ep.xs,
    field: {
      ...(kp = Ae.sizes) == null ? void 0 : kp.xs.field,
      ...Ai
    },
    icon: {
      insetEnd: "1"
    }
  }
}, _O = vO({
  baseStyle: wO,
  sizes: xO,
  variants: Ae.variants,
  defaultProps: Ae.defaultProps
}), Al = ye("skeleton-start-color"), Dl = ye("skeleton-end-color"), PO = {
  [Al.variable]: "colors.gray.100",
  [Dl.variable]: "colors.gray.400",
  _dark: {
    [Al.variable]: "colors.gray.800",
    [Dl.variable]: "colors.gray.600"
  },
  background: Al.reference,
  borderColor: Dl.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, OO = {
  baseStyle: PO
}, Ml = ye("skip-link-bg"), EO = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [Ml.variable]: "colors.white",
    _dark: {
      [Ml.variable]: "colors.gray.700"
    },
    bg: Ml.reference
  }
}, kO = {
  baseStyle: EO
}, { defineMultiStyleConfig: TO, definePartsStyle: Zs } = Ue(fP.keys), Wa = ye("slider-thumb-size"), Ua = ye("slider-track-size"), yn = ye("slider-bg"), CO = (e) => {
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
    ...tf({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, RO = (e) => ({
  ...tf({
    orientation: e.orientation,
    horizontal: { h: Ua.reference },
    vertical: { w: Ua.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [yn.variable]: "colors.gray.200",
  _dark: {
    [yn.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [yn.variable]: "colors.gray.300",
    _dark: {
      [yn.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: yn.reference
}), AO = (e) => {
  const { orientation: t } = e;
  return {
    ...tf({
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
    w: Wa.reference,
    h: Wa.reference,
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
}, DO = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [yn.variable]: `colors.${t}.500`,
    _dark: {
      [yn.variable]: `colors.${t}.200`
    },
    bg: yn.reference
  };
}, MO = Zs((e) => ({
  container: CO(e),
  track: RO(e),
  thumb: AO(e),
  filledTrack: DO(e)
})), IO = Zs({
  container: {
    [Wa.variable]: "sizes.4",
    [Ua.variable]: "sizes.1"
  }
}), $O = Zs({
  container: {
    [Wa.variable]: "sizes.3.5",
    [Ua.variable]: "sizes.1"
  }
}), jO = Zs({
  container: {
    [Wa.variable]: "sizes.2.5",
    [Ua.variable]: "sizes.0.5"
  }
}), LO = {
  lg: IO,
  md: $O,
  sm: jO
}, FO = TO({
  baseStyle: MO,
  sizes: LO,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Ln = gt("spinner-size"), NO = {
  width: [Ln.reference],
  height: [Ln.reference]
}, BO = {
  xs: {
    [Ln.variable]: "sizes.3"
  },
  sm: {
    [Ln.variable]: "sizes.4"
  },
  md: {
    [Ln.variable]: "sizes.6"
  },
  lg: {
    [Ln.variable]: "sizes.8"
  },
  xl: {
    [Ln.variable]: "sizes.12"
  }
}, VO = {
  baseStyle: NO,
  sizes: BO,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: zO, definePartsStyle: Gy } = Ue(dP.keys), WO = {
  fontWeight: "medium"
}, UO = {
  opacity: 0.8,
  marginBottom: "2"
}, HO = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, qO = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, YO = Gy({
  container: {},
  label: WO,
  helpText: UO,
  number: HO,
  icon: qO
}), KO = {
  md: Gy({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, GO = zO({
  baseStyle: YO,
  sizes: KO,
  defaultProps: {
    size: "md"
  }
}), Il = ye("kbd-bg"), XO = {
  [Il.variable]: "colors.gray.100",
  _dark: {
    [Il.variable]: "colors.whiteAlpha.100"
  },
  bg: Il.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, ZO = {
  baseStyle: XO
}, JO = {
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
}, QO = {
  baseStyle: JO
}, { defineMultiStyleConfig: eE, definePartsStyle: tE } = Ue(nP.keys), rE = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, nE = tE({
  icon: rE
}), oE = eE({
  baseStyle: nE
}), { defineMultiStyleConfig: aE, definePartsStyle: iE } = Ue(oP.keys), kr = ye("menu-bg"), $l = ye("menu-shadow"), sE = {
  [kr.variable]: "#fff",
  [$l.variable]: "shadows.sm",
  _dark: {
    [kr.variable]: "colors.gray.700",
    [$l.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: kr.reference,
  boxShadow: $l.reference
}, lE = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [kr.variable]: "colors.gray.100",
    _dark: {
      [kr.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [kr.variable]: "colors.gray.200",
    _dark: {
      [kr.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [kr.variable]: "colors.gray.100",
    _dark: {
      [kr.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: kr.reference
}, cE = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, uE = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, fE = {
  opacity: 0.6
}, dE = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, pE = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, hE = iE({
  button: pE,
  list: sE,
  item: lE,
  groupTitle: cE,
  icon: uE,
  command: fE,
  divider: dE
}), mE = aE({
  baseStyle: hE
}), { defineMultiStyleConfig: yE, definePartsStyle: Jc } = Ue(aP.keys), jl = ye("modal-bg"), Ll = ye("modal-shadow"), vE = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, gE = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, bE = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [jl.variable]: "colors.white",
    [Ll.variable]: "shadows.lg",
    _dark: {
      [jl.variable]: "colors.gray.700",
      [Ll.variable]: "shadows.dark-lg"
    },
    bg: jl.reference,
    boxShadow: Ll.reference
  };
}, SE = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, wE = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, xE = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, _E = {
  px: "6",
  py: "4"
}, PE = Jc((e) => ({
  overlay: vE,
  dialogContainer: Bt(gE, e),
  dialog: Bt(bE, e),
  header: SE,
  closeButton: wE,
  body: Bt(xE, e),
  footer: _E
}));
function gr(e) {
  return Jc(e === "full" ? {
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
var OE = {
  xs: gr("xs"),
  sm: gr("sm"),
  md: gr("md"),
  lg: gr("lg"),
  xl: gr("xl"),
  "2xl": gr("2xl"),
  "3xl": gr("3xl"),
  "4xl": gr("4xl"),
  "5xl": gr("5xl"),
  "6xl": gr("6xl"),
  full: gr("full")
}, EE = yE({
  baseStyle: PE,
  sizes: OE,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: kE, definePartsStyle: Xy } = Ue(iP.keys), nf = gt("number-input-stepper-width"), Zy = gt("number-input-input-padding"), TE = Kr(nf).add("0.5rem").toString(), Fl = gt("number-input-bg"), Nl = gt("number-input-color"), Bl = gt("number-input-border-color"), CE = {
  [nf.variable]: "sizes.6",
  [Zy.variable]: TE
}, RE = (e) => {
  var t, r;
  return (r = (t = Bt(Ae.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {};
}, AE = {
  width: nf.reference
}, DE = {
  borderStart: "1px solid",
  borderStartColor: Bl.reference,
  color: Nl.reference,
  bg: Fl.reference,
  [Nl.variable]: "colors.chakra-body-text",
  [Bl.variable]: "colors.chakra-border-color",
  _dark: {
    [Nl.variable]: "colors.whiteAlpha.800",
    [Bl.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [Fl.variable]: "colors.gray.200",
    _dark: {
      [Fl.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, ME = Xy((e) => {
  var t;
  return {
    root: CE,
    field: (t = Bt(RE, e)) != null ? t : {},
    stepperGroup: AE,
    stepper: DE
  };
});
function Di(e) {
  var t, r, n;
  const o = (t = Ae.sizes) == null ? void 0 : t[e], a = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, i = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md", s = Uy.fontSizes[i];
  return Xy({
    field: {
      ...o.field,
      paddingInlineEnd: Zy.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: Kr(s).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: a[e]
      },
      _last: {
        borderBottomEndRadius: a[e],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var IE = {
  xs: Di("xs"),
  sm: Di("sm"),
  md: Di("md"),
  lg: Di("lg")
}, $E = kE({
  baseStyle: ME,
  sizes: IE,
  variants: Ae.variants,
  defaultProps: Ae.defaultProps
}), Tp, jE = {
  ...(Tp = Ae.baseStyle) == null ? void 0 : Tp.field,
  textAlign: "center"
}, LE = {
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
}, Cp, Rp, FE = {
  outline: (e) => {
    var t, r, n;
    return (n = (r = Bt((t = Ae.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  flushed: (e) => {
    var t, r, n;
    return (n = (r = Bt((t = Ae.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  filled: (e) => {
    var t, r, n;
    return (n = (r = Bt((t = Ae.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  unstyled: (Rp = (Cp = Ae.variants) == null ? void 0 : Cp.unstyled.field) != null ? Rp : {}
}, NE = {
  baseStyle: jE,
  sizes: LE,
  variants: FE,
  defaultProps: Ae.defaultProps
}, { defineMultiStyleConfig: BE, definePartsStyle: VE } = Ue(sP.keys), Mi = gt("popper-bg"), zE = gt("popper-arrow-bg"), Ap = gt("popper-arrow-shadow-color"), WE = { zIndex: 10 }, UE = {
  [Mi.variable]: "colors.white",
  bg: Mi.reference,
  [zE.variable]: Mi.reference,
  [Ap.variable]: "colors.gray.200",
  _dark: {
    [Mi.variable]: "colors.gray.700",
    [Ap.variable]: "colors.whiteAlpha.300"
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
}, HE = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, qE = {
  px: 3,
  py: 2
}, YE = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, KE = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, GE = VE({
  popper: WE,
  content: UE,
  header: HE,
  body: qE,
  footer: YE,
  closeButton: KE
}), XE = BE({
  baseStyle: GE
}), { definePartsStyle: Qc, defineMultiStyleConfig: ZE } = Ue(J_.keys), Vl = ye("drawer-bg"), zl = ye("drawer-box-shadow");
function ao(e) {
  return Qc(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var JE = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, QE = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, ek = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [Vl.variable]: "colors.white",
    [zl.variable]: "shadows.lg",
    _dark: {
      [Vl.variable]: "colors.gray.700",
      [zl.variable]: "shadows.dark-lg"
    },
    bg: Vl.reference,
    boxShadow: zl.reference
  };
}, tk = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, rk = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, nk = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, ok = {
  px: "6",
  py: "4"
}, ak = Qc((e) => ({
  overlay: JE,
  dialogContainer: QE,
  dialog: Bt(ek, e),
  header: tk,
  closeButton: rk,
  body: nk,
  footer: ok
})), ik = {
  xs: ao("xs"),
  sm: ao("md"),
  md: ao("lg"),
  lg: ao("2xl"),
  xl: ao("4xl"),
  full: ao("full")
}, sk = ZE({
  baseStyle: ak,
  sizes: ik,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: lk, defineMultiStyleConfig: ck } = Ue(Q_.keys), uk = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, fk = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, dk = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, pk = lk({
  preview: uk,
  input: fk,
  textarea: dk
}), hk = ck({
  baseStyle: pk
}), { definePartsStyle: mk, defineMultiStyleConfig: yk } = Ue(eP.keys), ko = ye("form-control-color"), vk = {
  marginStart: "1",
  [ko.variable]: "colors.red.500",
  _dark: {
    [ko.variable]: "colors.red.300"
  },
  color: ko.reference
}, gk = {
  mt: "2",
  [ko.variable]: "colors.gray.600",
  _dark: {
    [ko.variable]: "colors.whiteAlpha.600"
  },
  color: ko.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, bk = mk({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: vk,
  helperText: gk
}), Sk = yk({
  baseStyle: bk
}), { definePartsStyle: wk, defineMultiStyleConfig: xk } = Ue(tP.keys), To = ye("form-error-color"), _k = {
  [To.variable]: "colors.red.500",
  _dark: {
    [To.variable]: "colors.red.300"
  },
  color: To.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, Pk = {
  marginEnd: "0.5em",
  [To.variable]: "colors.red.500",
  _dark: {
    [To.variable]: "colors.red.300"
  },
  color: To.reference
}, Ok = wk({
  text: _k,
  icon: Pk
}), Ek = xk({
  baseStyle: Ok
}), kk = {
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
}, Tk = {
  baseStyle: kk
}, Ck = {
  fontFamily: "heading",
  fontWeight: "bold"
}, Rk = {
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
}, Ak = {
  baseStyle: Ck,
  sizes: Rk,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: Dk, definePartsStyle: Mk } = Ue(X_.keys), Wl = ye("breadcrumb-link-decor"), Ik = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: Wl.reference,
  [Wl.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [Wl.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, $k = Mk({
  link: Ik
}), jk = Dk({
  baseStyle: $k
}), Lk = {
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
}, Jy = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: me("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: me("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: me("gray.200", "whiteAlpha.300")(e) }
    };
  const n = $o(`${t}.200`, 0.12)(r), o = $o(`${t}.200`, 0.24)(r);
  return {
    color: me(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: me(`${t}.50`, n)(e)
    },
    _active: {
      bg: me(`${t}.100`, o)(e)
    }
  };
}, Fk = (e) => {
  const { colorScheme: t } = e, r = me("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...Bt(Jy, e)
  };
}, Nk = {
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
}, Bk = (e) => {
  var t;
  const { colorScheme: r } = e;
  if (r === "gray") {
    const l = me("gray.100", "whiteAlpha.200")(e);
    return {
      bg: l,
      color: me("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: me("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: l
        }
      },
      _active: { bg: me("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: n = `${r}.500`,
    color: o = "white",
    hoverBg: a = `${r}.600`,
    activeBg: i = `${r}.700`
  } = (t = Nk[r]) != null ? t : {}, s = me(n, `${r}.200`)(e);
  return {
    bg: s,
    color: me(o, "gray.800")(e),
    _hover: {
      bg: me(a, `${r}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: me(i, `${r}.400`)(e) }
  };
}, Vk = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: me(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: me(`${t}.700`, `${t}.500`)(e)
    }
  };
}, zk = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, Wk = {
  ghost: Jy,
  outline: Fk,
  solid: Bk,
  link: Vk,
  unstyled: zk
}, Uk = {
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
}, Hk = {
  baseStyle: Lk,
  variants: Wk,
  sizes: Uk,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: Un, defineMultiStyleConfig: qk } = Ue(vP.keys), Ss = ye("card-bg"), Zr = ye("card-padding"), Qy = ye("card-shadow"), ns = ye("card-radius"), ev = ye("card-border-width", "0"), tv = ye("card-border-color"), Yk = Un({
  container: {
    [Ss.variable]: "colors.chakra-body-bg",
    backgroundColor: Ss.reference,
    boxShadow: Qy.reference,
    borderRadius: ns.reference,
    color: "chakra-body-text",
    borderWidth: ev.reference,
    borderColor: tv.reference
  },
  body: {
    padding: Zr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: Zr.reference
  },
  footer: {
    padding: Zr.reference
  }
}), Kk = {
  sm: Un({
    container: {
      [ns.variable]: "radii.base",
      [Zr.variable]: "space.3"
    }
  }),
  md: Un({
    container: {
      [ns.variable]: "radii.md",
      [Zr.variable]: "space.5"
    }
  }),
  lg: Un({
    container: {
      [ns.variable]: "radii.xl",
      [Zr.variable]: "space.7"
    }
  })
}, Gk = {
  elevated: Un({
    container: {
      [Qy.variable]: "shadows.base",
      _dark: {
        [Ss.variable]: "colors.gray.700"
      }
    }
  }),
  outline: Un({
    container: {
      [ev.variable]: "1px",
      [tv.variable]: "colors.chakra-border-color"
    }
  }),
  filled: Un({
    container: {
      [Ss.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [Zr.variable]: 0
    },
    header: {
      [Zr.variable]: 0
    },
    footer: {
      [Zr.variable]: 0
    }
  }
}, Xk = qk({
  baseStyle: Yk,
  variants: Gk,
  sizes: Kk,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), Ca = gt("close-button-size"), ca = gt("close-button-bg"), Zk = {
  w: [Ca.reference],
  h: [Ca.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [ca.variable]: "colors.blackAlpha.100",
    _dark: {
      [ca.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [ca.variable]: "colors.blackAlpha.200",
    _dark: {
      [ca.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: ca.reference
}, Jk = {
  lg: {
    [Ca.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [Ca.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [Ca.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, Qk = {
  baseStyle: Zk,
  sizes: Jk,
  defaultProps: {
    size: "md"
  }
}, { variants: eT, defaultProps: tT } = ka, rT = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: st.bg.reference,
  color: st.color.reference,
  boxShadow: st.shadow.reference
}, nT = {
  baseStyle: rT,
  variants: eT,
  defaultProps: tT
}, oT = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, aT = {
  baseStyle: oT
}, iT = {
  opacity: 0.6,
  borderColor: "inherit"
}, sT = {
  borderStyle: "solid"
}, lT = {
  borderStyle: "dashed"
}, cT = {
  solid: sT,
  dashed: lT
}, uT = {
  baseStyle: iT,
  variants: cT,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: fT, defineMultiStyleConfig: dT } = Ue(Y_.keys), pT = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, hT = {
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
}, mT = {
  pt: "2",
  px: "4",
  pb: "5"
}, yT = {
  fontSize: "1.25em"
}, vT = fT({
  container: pT,
  button: hT,
  panel: mT,
  icon: yT
}), gT = dT({ baseStyle: vT }), { definePartsStyle: si, defineMultiStyleConfig: bT } = Ue(K_.keys), er = ye("alert-fg"), tn = ye("alert-bg"), ST = si({
  container: {
    bg: tn.reference,
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
    color: er.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: er.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function of(e) {
  const { theme: t, colorScheme: r } = e, n = $o(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var wT = si((e) => {
  const { colorScheme: t } = e, r = of(e);
  return {
    container: {
      [er.variable]: `colors.${t}.600`,
      [tn.variable]: r.light,
      _dark: {
        [er.variable]: `colors.${t}.200`,
        [tn.variable]: r.dark
      }
    }
  };
}), xT = si((e) => {
  const { colorScheme: t } = e, r = of(e);
  return {
    container: {
      [er.variable]: `colors.${t}.600`,
      [tn.variable]: r.light,
      _dark: {
        [er.variable]: `colors.${t}.200`,
        [tn.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: er.reference
    }
  };
}), _T = si((e) => {
  const { colorScheme: t } = e, r = of(e);
  return {
    container: {
      [er.variable]: `colors.${t}.600`,
      [tn.variable]: r.light,
      _dark: {
        [er.variable]: `colors.${t}.200`,
        [tn.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: er.reference
    }
  };
}), PT = si((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [er.variable]: "colors.white",
      [tn.variable]: `colors.${t}.600`,
      _dark: {
        [er.variable]: "colors.gray.900",
        [tn.variable]: `colors.${t}.200`
      },
      color: er.reference
    }
  };
}), OT = {
  subtle: wT,
  "left-accent": xT,
  "top-accent": _T,
  solid: PT
}, ET = bT({
  baseStyle: ST,
  variants: OT,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: rv, defineMultiStyleConfig: kT } = Ue(G_.keys), Co = ye("avatar-border-color"), Ra = ye("avatar-bg"), Ha = ye("avatar-font-size"), jo = ye("avatar-size"), TT = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: Co.reference,
  [Co.variable]: "white",
  _dark: {
    [Co.variable]: "colors.gray.800"
  }
}, CT = {
  bg: Ra.reference,
  fontSize: Ha.reference,
  width: jo.reference,
  height: jo.reference,
  lineHeight: "1",
  [Ra.variable]: "colors.gray.200",
  _dark: {
    [Ra.variable]: "colors.whiteAlpha.400"
  }
}, RT = (e) => {
  const { name: t, theme: r } = e, n = t ? LP({ string: t }) : "colors.gray.400", o = $P(n)(r);
  let a = "white";
  return o || (a = "gray.800"), {
    bg: Ra.reference,
    fontSize: Ha.reference,
    color: a,
    borderColor: Co.reference,
    verticalAlign: "top",
    width: jo.reference,
    height: jo.reference,
    "&:not([data-loaded])": {
      [Ra.variable]: n
    },
    [Co.variable]: "colors.white",
    _dark: {
      [Co.variable]: "colors.gray.800"
    }
  };
}, AT = {
  fontSize: Ha.reference,
  lineHeight: "1"
}, DT = rv((e) => ({
  badge: Bt(TT, e),
  excessLabel: Bt(CT, e),
  container: Bt(RT, e),
  label: AT
}));
function dn(e) {
  const t = e !== "100%" ? qy[e] : void 0;
  return rv({
    container: {
      [jo.variable]: t ?? e,
      [Ha.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [jo.variable]: t ?? e,
      [Ha.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var MT = {
  "2xs": dn(4),
  xs: dn(6),
  sm: dn(8),
  md: dn(12),
  lg: dn(16),
  xl: dn(24),
  "2xl": dn(32),
  full: dn("100%")
}, IT = kT({
  baseStyle: DT,
  sizes: MT,
  defaultProps: {
    size: "md"
  }
}), $T = {
  Accordion: gT,
  Alert: ET,
  Avatar: IT,
  Badge: ka,
  Breadcrumb: jk,
  Button: Hk,
  Checkbox: bs,
  CloseButton: Qk,
  Code: nT,
  Container: aT,
  Divider: uT,
  Drawer: sk,
  Editable: hk,
  Form: Sk,
  FormError: Ek,
  FormLabel: Tk,
  Heading: Ak,
  Input: Ae,
  Kbd: ZO,
  Link: QO,
  List: oE,
  Menu: mE,
  Modal: EE,
  NumberInput: $E,
  PinInput: NE,
  Popover: XE,
  Progress: nO,
  Radio: yO,
  Select: _O,
  Skeleton: OO,
  SkipLink: kO,
  Slider: FO,
  Spinner: VO,
  Stat: GO,
  Switch: QP,
  Table: i1,
  Tabs: w1,
  Tag: I1,
  Textarea: q1,
  Tooltip: G1,
  Card: Xk,
  Stepper: q_
}, jT = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, LT = {
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
}, FT = "ltr", NT = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, BT = {
  semanticTokens: jT,
  direction: FT,
  ...W_,
  components: $T,
  styles: LT,
  config: NT
};
function VT() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var zT = /* @__PURE__ */ VT();
function WT(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function UT(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var HT = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, a, i) => {
    if (typeof n > "u")
      return e(n, o, a);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const s = t.get(n);
    if (s.has(o))
      return s.get(o);
    const l = e(n, o, a, i);
    return s.set(o, l), l;
  };
}, nv = HT(UT);
function ov(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var av = (e) => ov(e, (t) => t != null);
function qT(e) {
  return typeof e == "function";
}
process.env.NODE_ENV;
process.env.NODE_ENV;
function iv(e, ...t) {
  return qT(e) ? e(...t) : e;
}
function YT(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
var KT = typeof Element < "u", GT = typeof Map == "function", XT = typeof Set == "function", ZT = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function os(e, t) {
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
        if (!os(e[n], t[n]))
          return !1;
      return !0;
    }
    var a;
    if (GT && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!os(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (XT && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (ZT && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (KT && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !os(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var af = function(t, r) {
  try {
    return os(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const JT = /* @__PURE__ */ Bs(af);
function sv(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t, { theme: a, colorMode: i } = jy(), s = e ? nv(a, `components.${e}`) : void 0, l = n || s, c = Dr(
    { theme: a, colorMode: i },
    (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
    av(WT(o, ["children"]))
  ), u = De({});
  if (l) {
    const m = g_(l)(c);
    JT(u.current, m) || (u.current = m);
  }
  return u.current;
}
function eo(e, t = {}) {
  return sv(e, t);
}
function li(e, t = {}) {
  return sv(e, t);
}
var QT = /* @__PURE__ */ new Set([
  ...i_,
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
]), eC = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function tC(e) {
  return eC.has(e) || !QT.has(e);
}
function rC(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
function nC(e) {
  const t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
var oC = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, aC = /* @__PURE__ */ wy(
  function(e) {
    return oC.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), iC = aC, sC = function(t) {
  return t !== "theme";
}, Dp = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? iC : sC;
}, Mp = function(t, r, n) {
  var o;
  if (r) {
    var a = r.shouldForwardProp;
    o = t.__emotion_forwardProp && a ? function(i) {
      return t.__emotion_forwardProp(i) && a(i);
    } : a;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Ip = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, lC = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Us(r, n, o), Yu(function() {
    return Hs(r, n, o);
  }), null;
}, cC = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, a, i;
  r !== void 0 && (a = r.label, i = r.target);
  var s = Mp(t, r, n), l = s || Dp(o), c = !l("as");
  return function() {
    var u = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && d.push("label:" + a + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      process.env.NODE_ENV !== "production" && u[0][0] === void 0 && console.error(Ip), d.push(u[0][0]);
      for (var m = u.length, y = 1; y < m; y++)
        process.env.NODE_ENV !== "production" && u[0][y] === void 0 && console.error(Ip), d.push(u[y], u[0][y]);
    }
    var x = qs(function(w, _, T) {
      var P = c && w.as || o, k = "", $ = [], S = w;
      if (w.theme == null) {
        S = {};
        for (var C in w)
          S[C] = w[C];
        S.theme = te.useContext(wn);
      }
      typeof w.className == "string" ? k = Hu(_.registered, $, w.className) : w.className != null && (k = w.className + " ");
      var v = Io(d.concat($), _.registered, S);
      k += _.key + "-" + v.name, i !== void 0 && (k += " " + i);
      var f = c && s === void 0 ? Dp(P) : l, h = {};
      for (var p in w)
        c && p === "as" || // $FlowFixMe
        f(p) && (h[p] = w[p]);
      return h.className = k, h.ref = T, /* @__PURE__ */ te.createElement(te.Fragment, null, /* @__PURE__ */ te.createElement(lC, {
        cache: _,
        serialized: v,
        isStringTag: typeof P == "string"
      }), /* @__PURE__ */ te.createElement(P, h));
    });
    return x.displayName = a !== void 0 ? a : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", x.defaultProps = t.defaultProps, x.__emotion_real = x, x.__emotion_base = o, x.__emotion_styles = d, x.__emotion_forwardProp = s, Object.defineProperty(x, "toString", {
      value: function() {
        return i === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), x.withComponent = function(w, _) {
      return e(w, Kn({}, r, _, {
        shouldForwardProp: Mp(x, _, !0)
      })).apply(void 0, d);
    }, x;
  };
}, uC = [
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
], ws = cC.bind();
uC.forEach(function(e) {
  ws[e] = ws(e);
});
var $p, fC = ($p = ws.default) != null ? $p : ws, dC = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: a, ...i } = t, s = ov(i, (d, m) => l_(m)), l = iv(e, t), c = rC(
    {},
    o,
    l,
    av(s),
    a
  ), u = Wy(c)(t.theme);
  return n ? [u, n] : u;
};
function Ul(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = tC);
  const o = dC({ baseStyle: r }), a = fC(
    e,
    n
  )(o);
  return ke.forwardRef(function(l, c) {
    const { colorMode: u, forced: d } = Ys();
    return ke.createElement(a, {
      ref: c,
      "data-theme": d ? u : void 0,
      ...l
    });
  });
}
function pC() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Ul, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, r, n) {
      return Ul(...n);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, r) {
      return e.has(r) || e.set(r, Ul(r)), e.get(r);
    }
  });
}
var we = pC();
function Le(e) {
  return Qn(e);
}
function hC(e = {}) {
  const {
    strict: t = !0,
    errorMessage: r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: n
  } = e, o = Vr(void 0);
  o.displayName = n;
  function a() {
    var i;
    const s = it(o);
    if (!s && t) {
      const l = new Error(r);
      throw l.name = "ContextError", (i = Error.captureStackTrace) == null || i.call(Error, l, a), l;
    }
    return s;
  }
  return [
    o.Provider,
    a,
    o
  ];
}
function mC(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e, o = ot(() => n_(r), [r]);
  return /* @__PURE__ */ I.jsxs(Rw, { theme: o, children: [
    /* @__PURE__ */ I.jsx(yC, { root: t }),
    n
  ] });
}
function yC({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ I.jsx(ai, { styles: (r) => ({ [t]: r.__cssVars }) });
}
hC({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function vC() {
  const { colorMode: e } = Ys();
  return /* @__PURE__ */ I.jsx(
    ai,
    {
      styles: (t) => {
        const r = nv(t, "styles.global"), n = iv(r, { theme: t, colorMode: e });
        return n ? Wy(n)(t) : void 0;
      }
    }
  );
}
var lv = Vr({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
lv.displayName = "EnvironmentContext";
function cv(e) {
  const { children: t, environment: r, disabled: n } = e, o = De(null), a = ot(() => r || {
    getDocument: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument) != null ? l : document;
    },
    getWindow: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) != null ? l : window;
    }
  }, [r]), i = !n || !r;
  return /* @__PURE__ */ I.jsxs(lv.Provider, { value: a, children: [
    t,
    i && /* @__PURE__ */ I.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
cv.displayName = "EnvironmentProvider";
var gC = (e) => {
  const {
    children: t,
    colorModeManager: r,
    portalZIndex: n,
    resetScope: o,
    resetCSS: a = !0,
    theme: i = {},
    environment: s,
    cssVarsRoot: l,
    disableEnvironment: c,
    disableGlobalStyle: u
  } = e, d = /* @__PURE__ */ I.jsx(
    cv,
    {
      environment: s,
      disabled: c,
      children: t
    }
  );
  return /* @__PURE__ */ I.jsx(mC, { theme: i, cssVarsRoot: l, children: /* @__PURE__ */ I.jsxs(
    $y,
    {
      colorModeManager: r,
      options: i.config,
      children: [
        a ? /* @__PURE__ */ I.jsx(Vw, { scope: o }) : /* @__PURE__ */ I.jsx(Bw, {}),
        !u && /* @__PURE__ */ I.jsx(vC, {}),
        n ? /* @__PURE__ */ I.jsx(Dy, { zIndex: n, children: d }) : d
      ]
    }
  ) });
}, bC = (e, t) => e.find((r) => r.id === t);
function jp(e, t) {
  const r = uv(e, t), n = r ? e[r].findIndex((o) => o.id === t) : -1;
  return {
    position: r,
    index: n
  };
}
function uv(e, t) {
  for (const [r, n] of Object.entries(e))
    if (bC(n, t))
      return r;
}
function SC(e) {
  const t = e.includes("right"), r = e.includes("left");
  let n = "center";
  return t && (n = "flex-end"), r && (n = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: n
  };
}
function wC(e) {
  const r = e === "top" || e === "bottom" ? "0 auto" : void 0, n = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0, o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0, a = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)", i = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: r,
    top: n,
    bottom: o,
    right: a,
    left: i
  };
}
function xs(e, t = []) {
  const r = De(e);
  return Me(() => {
    r.current = e;
  }), pe((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function xC(e, t) {
  const r = xs(e);
  Me(() => {
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
function Lp(e, t) {
  const r = De(!1), n = De(!1);
  Me(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), Me(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
}
const fv = Vr({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Js = Vr({}), ci = Vr(null), Qs = typeof document < "u", sf = Qs ? Fu : Me, dv = Vr({ strict: !1 });
function _C(e, t, r, n) {
  const { visualElement: o } = it(Js), a = it(dv), i = it(ci), s = it(fv).reducedMotion, l = De();
  n = n || a.renderer, !l.current && n && (l.current = n(e, {
    visualState: t,
    parent: o,
    props: r,
    presenceContext: i,
    blockInitialAnimation: i ? i.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const c = l.current;
  hy(() => {
    c && c.update(r, i);
  });
  const u = De(!!window.HandoffAppearAnimations);
  return sf(() => {
    c && (c.render(), u.current && c.animationState && c.animationState.animateChanges());
  }), Me(() => {
    c && (c.updateFeatures(), !u.current && c.animationState && c.animationState.animateChanges(), window.HandoffAppearAnimations = void 0, u.current = !1);
  }), c;
}
function So(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function PC(e, t, r) {
  return pe(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : So(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function qa(e) {
  return typeof e == "string" || Array.isArray(e);
}
function el(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const lf = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], cf = ["initial", ...lf];
function tl(e) {
  return el(e.animate) || cf.some((t) => qa(e[t]));
}
function pv(e) {
  return !!(tl(e) || e.variants);
}
function OC(e, t) {
  if (tl(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || qa(r) ? r : void 0,
      animate: qa(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function EC(e) {
  const { initial: t, animate: r } = OC(e, it(Js));
  return ot(() => ({ initial: t, animate: r }), [Fp(t), Fp(r)]);
}
function Fp(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Np = {
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
}, Ya = {};
for (const e in Np)
  Ya[e] = {
    isEnabled: (t) => Np[e].some((r) => !!t[r])
  };
function kC(e) {
  for (const t in e)
    Ya[t] = {
      ...Ya[t],
      ...e[t]
    };
}
const uf = Vr({}), hv = Vr({}), TC = Symbol.for("motionComponentSymbol");
function CC({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && kC(e);
  function a(s, l) {
    let c;
    const u = {
      ...it(fv),
      ...s,
      layoutId: RC(s)
    }, { isStatic: d } = u, m = EC(s), y = n(s, d);
    if (!d && Qs) {
      m.visualElement = _C(o, y, u, t);
      const x = it(hv), w = it(dv).strict;
      m.visualElement && (c = m.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        u,
        w,
        e,
        x
      ));
    }
    return te.createElement(
      Js.Provider,
      { value: m },
      c && m.visualElement ? te.createElement(c, { visualElement: m.visualElement, ...u }) : null,
      r(o, s, PC(y, m.visualElement, l), y, d, m.visualElement)
    );
  }
  const i = Qn(a);
  return i[TC] = o, i;
}
function RC({ layoutId: e }) {
  const t = it(uf).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function AC(e) {
  function t(n, o = {}) {
    return CC(e(n, o));
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
const DC = [
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
function ff(e) {
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
      !!(DC.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const _s = {};
function MC(e) {
  Object.assign(_s, e);
}
const ui = [
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
], to = new Set(ui);
function mv(e, { layout: t, layoutId: r }) {
  return to.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!_s[e] || e === "opacity");
}
const Yt = (e) => !!(e && e.getVelocity), IC = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, $C = ui.length;
function jC(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let a = "";
  for (let i = 0; i < $C; i++) {
    const s = ui[i];
    if (e[s] !== void 0) {
      const l = IC[s] || s;
      a += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (a += "translateZ(0)"), a = a.trim(), o ? a = o(e, n ? "" : a) : r && n && (a = "none"), a;
}
const yv = (e) => (t) => typeof t == "string" && t.startsWith(e), vv = yv("--"), eu = yv("var(--"), LC = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, FC = (e, t) => t && typeof e == "number" ? t.transform(e) : e, xn = (e, t, r) => Math.min(Math.max(r, e), t), ro = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Aa = {
  ...ro,
  transform: (e) => xn(0, 1, e)
}, Ii = {
  ...ro,
  default: 1
}, Da = (e) => Math.round(e * 1e5) / 1e5, rl = /(-)?([\d]*\.?[\d])+/g, gv = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, NC = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function fi(e) {
  return typeof e == "string";
}
const di = (e) => ({
  test: (t) => fi(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), hn = di("deg"), Lr = di("%"), ve = di("px"), BC = di("vh"), VC = di("vw"), Bp = {
  ...Lr,
  parse: (e) => Lr.parse(e) / 100,
  transform: (e) => Lr.transform(e * 100)
}, Vp = {
  ...ro,
  transform: Math.round
}, bv = {
  // Border props
  borderWidth: ve,
  borderTopWidth: ve,
  borderRightWidth: ve,
  borderBottomWidth: ve,
  borderLeftWidth: ve,
  borderRadius: ve,
  radius: ve,
  borderTopLeftRadius: ve,
  borderTopRightRadius: ve,
  borderBottomRightRadius: ve,
  borderBottomLeftRadius: ve,
  // Positioning props
  width: ve,
  maxWidth: ve,
  height: ve,
  maxHeight: ve,
  size: ve,
  top: ve,
  right: ve,
  bottom: ve,
  left: ve,
  // Spacing props
  padding: ve,
  paddingTop: ve,
  paddingRight: ve,
  paddingBottom: ve,
  paddingLeft: ve,
  margin: ve,
  marginTop: ve,
  marginRight: ve,
  marginBottom: ve,
  marginLeft: ve,
  // Transform props
  rotate: hn,
  rotateX: hn,
  rotateY: hn,
  rotateZ: hn,
  scale: Ii,
  scaleX: Ii,
  scaleY: Ii,
  scaleZ: Ii,
  skew: hn,
  skewX: hn,
  skewY: hn,
  distance: ve,
  translateX: ve,
  translateY: ve,
  translateZ: ve,
  x: ve,
  y: ve,
  z: ve,
  perspective: ve,
  transformPerspective: ve,
  opacity: Aa,
  originX: Bp,
  originY: Bp,
  originZ: ve,
  // Misc
  zIndex: Vp,
  // SVG
  fillOpacity: Aa,
  strokeOpacity: Aa,
  numOctaves: Vp
};
function df(e, t, r, n) {
  const { style: o, vars: a, transform: i, transformOrigin: s } = e;
  let l = !1, c = !1, u = !0;
  for (const d in t) {
    const m = t[d];
    if (vv(d)) {
      a[d] = m;
      continue;
    }
    const y = bv[d], x = FC(m, y);
    if (to.has(d)) {
      if (l = !0, i[d] = x, !u)
        continue;
      m !== (y.default || 0) && (u = !1);
    } else
      d.startsWith("origin") ? (c = !0, s[d] = x) : o[d] = x;
  }
  if (t.transform || (l || n ? o.transform = jC(e.transform, r, u, n) : o.transform && (o.transform = "none")), c) {
    const { originX: d = "50%", originY: m = "50%", originZ: y = 0 } = s;
    o.transformOrigin = `${d} ${m} ${y}`;
  }
}
const pf = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Sv(e, t, r) {
  for (const n in t)
    !Yt(t[n]) && !mv(n, r) && (e[n] = t[n]);
}
function zC({ transformTemplate: e }, t, r) {
  return ot(() => {
    const n = pf();
    return df(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function WC(e, t, r) {
  const n = e.style || {}, o = {};
  return Sv(o, n, e), Object.assign(o, zC(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function UC(e, t, r) {
  const n = {}, o = WC(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const HC = /* @__PURE__ */ new Set([
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
function Ps(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || HC.has(e);
}
let wv = (e) => !Ps(e);
function qC(e) {
  e && (wv = (t) => t.startsWith("on") ? !Ps(t) : e(t));
}
try {
  qC(require("@emotion/is-prop-valid").default);
} catch {
}
function YC(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (wv(o) || r === !0 && Ps(o) || !t && !Ps(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function zp(e, t, r) {
  return typeof e == "string" ? e : ve.transform(t + r * e);
}
function KC(e, t, r) {
  const n = zp(t, e.x, e.width), o = zp(r, e.y, e.height);
  return `${n} ${o}`;
}
const GC = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, XC = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function ZC(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const a = o ? GC : XC;
  e[a.offset] = ve.transform(-n);
  const i = ve.transform(t), s = ve.transform(r);
  e[a.array] = `${i} ${s}`;
}
function hf(e, {
  attrX: t,
  attrY: r,
  attrScale: n,
  originX: o,
  originY: a,
  pathLength: i,
  pathSpacing: s = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, u, d, m) {
  if (df(e, c, u, m), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: y, style: x, dimensions: w } = e;
  y.transform && (w && (x.transform = y.transform), delete y.transform), w && (o !== void 0 || a !== void 0 || x.transform) && (x.transformOrigin = KC(w, o !== void 0 ? o : 0.5, a !== void 0 ? a : 0.5)), t !== void 0 && (y.x = t), r !== void 0 && (y.y = r), n !== void 0 && (y.scale = n), i !== void 0 && ZC(y, i, s, l, !1);
}
const xv = () => ({
  ...pf(),
  attrs: {}
}), mf = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function JC(e, t, r, n) {
  const o = ot(() => {
    const a = xv();
    return hf(a, t, { enableHardwareAcceleration: !1 }, mf(n), e.transformTemplate), {
      ...a.attrs,
      style: { ...a.style }
    };
  }, [t]);
  if (e.style) {
    const a = {};
    Sv(a, e.style, e), o.style = { ...a, ...o.style };
  }
  return o;
}
function QC(e = !1) {
  return (r, n, o, { latestValues: a }, i) => {
    const l = (ff(r) ? JC : UC)(n, a, i, r), u = {
      ...YC(n, typeof r == "string", e),
      ...l,
      ref: o
    }, { children: d } = n, m = ot(() => Yt(d) ? d.get() : d, [d]);
    return _S(r, {
      ...u,
      children: m
    });
  };
}
const yf = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function _v(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const a in r)
    e.style.setProperty(a, r[a]);
}
const Pv = /* @__PURE__ */ new Set([
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
function Ov(e, t, r, n) {
  _v(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(Pv.has(o) ? o : yf(o), t.attrs[o]);
}
function vf(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    (Yt(r[o]) || t.style && Yt(t.style[o]) || mv(o, e)) && (n[o] = r[o]);
  return n;
}
function Ev(e, t) {
  const r = vf(e, t);
  for (const n in e)
    if (Yt(e[n]) || Yt(t[n])) {
      const o = ui.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function gf(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
function kv(e) {
  const t = De(null);
  return t.current === null && (t.current = e()), t.current;
}
const Os = (e) => Array.isArray(e), eR = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), tR = (e) => Os(e) ? e[e.length - 1] || 0 : e;
function as(e) {
  const t = Yt(e) ? e.get() : e;
  return eR(t) ? t.toValue() : t;
}
function rR({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, a) {
  const i = {
    latestValues: nR(n, o, a, e),
    renderState: t()
  };
  return r && (i.mount = (s) => r(n, s, i)), i;
}
const Tv = (e) => (t, r) => {
  const n = it(Js), o = it(ci), a = () => rR(e, t, n, o);
  return r ? a() : kv(a);
};
function nR(e, t, r, n) {
  const o = {}, a = n(e, {});
  for (const m in a)
    o[m] = as(a[m]);
  let { initial: i, animate: s } = e;
  const l = tl(e), c = pv(e);
  t && c && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), s === void 0 && (s = t.animate));
  let u = r ? r.initial === !1 : !1;
  u = u || i === !1;
  const d = u ? s : i;
  return d && typeof d != "boolean" && !el(d) && (Array.isArray(d) ? d : [d]).forEach((y) => {
    const x = gf(e, y);
    if (!x)
      return;
    const { transitionEnd: w, transition: _, ...T } = x;
    for (const P in T) {
      let k = T[P];
      if (Array.isArray(k)) {
        const $ = u ? k.length - 1 : 0;
        k = k[$];
      }
      k !== null && (o[P] = k);
    }
    for (const P in w)
      o[P] = w[P];
  }), o;
}
const nt = (e) => e;
class Wp {
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
function oR(e) {
  let t = new Wp(), r = new Wp(), n = 0, o = !1, a = !1;
  const i = /* @__PURE__ */ new WeakSet(), s = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, c = !1, u = !1) => {
      const d = u && o, m = d ? t : r;
      return c && i.add(l), m.add(l) && d && o && (n = t.order.length), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      r.remove(l), i.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (o) {
        a = !0;
        return;
      }
      if (o = !0, [t, r] = [r, t], r.clear(), n = t.order.length, n)
        for (let c = 0; c < n; c++) {
          const u = t.order[c];
          u(l), i.has(u) && (s.schedule(u), e());
        }
      o = !1, a && (a = !1, s.process(l));
    }
  };
  return s;
}
const $i = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], aR = 40;
function iR(e, t) {
  let r = !1, n = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, a = $i.reduce((d, m) => (d[m] = oR(() => r = !0), d), {}), i = (d) => a[d].process(o), s = () => {
    const d = performance.now();
    r = !1, o.delta = n ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, aR), 1), o.timestamp = d, o.isProcessing = !0, $i.forEach(i), o.isProcessing = !1, r && t && (n = !1, e(s));
  }, l = () => {
    r = !0, n = !0, o.isProcessing || e(s);
  };
  return { schedule: $i.reduce((d, m) => {
    const y = a[m];
    return d[m] = (x, w = !1, _ = !1) => (r || l(), y.schedule(x, w, _)), d;
  }, {}), cancel: (d) => $i.forEach((m) => a[m].cancel(d)), state: o, steps: a };
}
const { schedule: We, cancel: rn, state: wt, steps: Hl } = iR(typeof requestAnimationFrame < "u" ? requestAnimationFrame : nt, !0), sR = {
  useVisualState: Tv({
    scrapeMotionValuesFromProps: Ev,
    createRenderState: xv,
    onMount: (e, t, { renderState: r, latestValues: n }) => {
      We.read(() => {
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
      }), We.render(() => {
        hf(r, n, { enableHardwareAcceleration: !1 }, mf(t.tagName), e.transformTemplate), Ov(t, r);
      });
    }
  })
}, lR = {
  useVisualState: Tv({
    scrapeMotionValuesFromProps: vf,
    createRenderState: pf
  })
};
function cR(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...ff(e) ? sR : lR,
    preloadedFeatures: r,
    useRender: QC(t),
    createVisualElement: n,
    Component: e
  };
}
function Xr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const Cv = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function nl(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const uR = (e) => (t) => Cv(t) && e(t, nl(t));
function Jr(e, t, r, n) {
  return Xr(e, t, uR(r), n);
}
const fR = (e, t) => (r) => t(e(r)), vn = (...e) => e.reduce(fR);
function Rv(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const Up = Rv("dragHorizontal"), Hp = Rv("dragVertical");
function Av(e) {
  let t = !1;
  if (e === "y")
    t = Hp();
  else if (e === "x")
    t = Up();
  else {
    const r = Up(), n = Hp();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function Dv() {
  const e = Av(!0);
  return e ? (e(), !1) : !0;
}
class Pn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function qp(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (a, i) => {
    if (a.type === "touch" || Dv())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && We.update(() => s[n](a, i));
  };
  return Jr(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class dR extends Pn {
  mount() {
    this.unmount = vn(qp(this.node, !0), qp(this.node, !1));
  }
  unmount() {
  }
}
class pR extends Pn {
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
    this.unmount = vn(Xr(this.node.current, "focus", () => this.onFocus()), Xr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const Mv = (e, t) => t ? e === t ? !0 : Mv(e, t.parentElement) : !1;
function ql(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, nl(r));
}
class hR extends Pn {
  constructor() {
    super(...arguments), this.removeStartListeners = nt, this.removeEndListeners = nt, this.removeAccessibleListeners = nt, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), a = Jr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: c, onTapCancel: u } = this.node.getProps();
        We.update(() => {
          Mv(this.node.current, s.target) ? c && c(s, l) : u && u(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), i = Jr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = vn(a, i), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (a) => {
        if (a.key !== "Enter" || this.isPressing)
          return;
        const i = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || ql("up", (l, c) => {
            const { onTap: u } = this.node.getProps();
            u && We.update(() => u(l, c));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Xr(this.node.current, "keyup", i), ql("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = Xr(this.node.current, "keydown", t), n = () => {
        this.isPressing && ql("cancel", (a, i) => this.cancelPress(a, i));
      }, o = Xr(this.node.current, "blur", n);
      this.removeAccessibleListeners = vn(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && We.update(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Dv();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && We.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = Jr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = Xr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = vn(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const tu = /* @__PURE__ */ new WeakMap(), Yl = /* @__PURE__ */ new WeakMap(), mR = (e) => {
  const t = tu.get(e.target);
  t && t(e);
}, yR = (e) => {
  e.forEach(mR);
};
function vR({ root: e, ...t }) {
  const r = e || document;
  Yl.has(r) || Yl.set(r, {});
  const n = Yl.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(yR, { root: e, ...t })), n[o];
}
function gR(e, t, r) {
  const n = vR(t);
  return tu.set(e, r), n.observe(e), () => {
    tu.delete(e), n.unobserve(e);
  };
}
const bR = {
  some: 0,
  all: 1
};
class SR extends Pn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: a } = t, i = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : bR[o]
    }, s = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, a && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(), m = c ? u : d;
      m && m(l);
    };
    return gR(this.node.current, i, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(wR(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function wR({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const xR = {
  inView: {
    Feature: SR
  },
  tap: {
    Feature: hR
  },
  focus: {
    Feature: pR
  },
  hover: {
    Feature: dR
  }
};
function Iv(e, t) {
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
function _R(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function PR(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function ol(e, t, r) {
  const n = e.getProps();
  return gf(n, t, r !== void 0 ? r : n.custom, _R(e), PR(e));
}
const OR = "framerAppearId", ER = "data-" + yf(OR);
let pi = nt, wr = nt;
process.env.NODE_ENV !== "production" && (pi = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, wr = (e, t) => {
  if (!e)
    throw new Error(t);
});
const gn = (e) => e * 1e3, Qr = (e) => e / 1e3, kR = {
  current: !1
}, $v = (e) => Array.isArray(e) && typeof e[0] == "number";
function jv(e) {
  return !!(!e || typeof e == "string" && Lv[e] || $v(e) || Array.isArray(e) && e.every(jv));
}
const xa = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, Lv = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: xa([0, 0.65, 0.55, 1]),
  circOut: xa([0.55, 0, 1, 0.45]),
  backIn: xa([0.31, 0.01, 0.66, -0.59]),
  backOut: xa([0.33, 1.53, 0.69, 0.99])
};
function Fv(e) {
  if (e)
    return $v(e) ? xa(e) : Array.isArray(e) ? e.map(Fv) : Lv[e];
}
function TR(e, t, r, { delay: n = 0, duration: o, repeat: a = 0, repeatType: i = "loop", ease: s, times: l } = {}) {
  const c = { [t]: r };
  l && (c.offset = l);
  const u = Fv(s);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: n,
    duration: o,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: a + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
function CR(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const Nv = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, RR = 1e-7, AR = 12;
function DR(e, t, r, n, o) {
  let a, i, s = 0;
  do
    i = t + (r - t) / 2, a = Nv(i, n, o) - e, a > 0 ? r = i : t = i;
  while (Math.abs(a) > RR && ++s < AR);
  return i;
}
function hi(e, t, r, n) {
  if (e === t && r === n)
    return nt;
  const o = (a) => DR(a, 0, 1, e, r);
  return (a) => a === 0 || a === 1 ? a : Nv(o(a), t, n);
}
const MR = hi(0.42, 0, 1, 1), IR = hi(0, 0, 0.58, 1), Bv = hi(0.42, 0, 0.58, 1), $R = (e) => Array.isArray(e) && typeof e[0] != "number", Vv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, zv = (e) => (t) => 1 - e(1 - t), Wv = (e) => 1 - Math.sin(Math.acos(e)), bf = zv(Wv), jR = Vv(bf), Uv = hi(0.33, 1.53, 0.69, 0.99), Sf = zv(Uv), LR = Vv(Sf), FR = (e) => (e *= 2) < 1 ? 0.5 * Sf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Yp = {
  linear: nt,
  easeIn: MR,
  easeInOut: Bv,
  easeOut: IR,
  circIn: Wv,
  circInOut: jR,
  circOut: bf,
  backIn: Sf,
  backInOut: LR,
  backOut: Uv,
  anticipate: FR
}, Kp = (e) => {
  if (Array.isArray(e)) {
    wr(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, r, n, o] = e;
    return hi(t, r, n, o);
  } else if (typeof e == "string")
    return wr(Yp[e] !== void 0, `Invalid easing type '${e}'`), Yp[e];
  return e;
}, wf = (e, t) => (r) => !!(fi(r) && NC.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), Hv = (e, t, r) => (n) => {
  if (!fi(n))
    return n;
  const [o, a, i, s] = n.match(rl);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(a),
    [r]: parseFloat(i),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, NR = (e) => xn(0, 255, e), Kl = {
  ...ro,
  transform: (e) => Math.round(NR(e))
}, Vn = {
  test: wf("rgb", "red"),
  parse: Hv("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + Kl.transform(e) + ", " + Kl.transform(t) + ", " + Kl.transform(r) + ", " + Da(Aa.transform(n)) + ")"
};
function BR(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const ru = {
  test: wf("#"),
  parse: BR,
  transform: Vn.transform
}, wo = {
  test: wf("hsl", "hue"),
  parse: Hv("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + Lr.transform(Da(t)) + ", " + Lr.transform(Da(r)) + ", " + Da(Aa.transform(n)) + ")"
}, Ft = {
  test: (e) => Vn.test(e) || ru.test(e) || wo.test(e),
  parse: (e) => Vn.test(e) ? Vn.parse(e) : wo.test(e) ? wo.parse(e) : ru.parse(e),
  transform: (e) => fi(e) ? e : e.hasOwnProperty("red") ? Vn.transform(e) : wo.transform(e)
}, Qe = (e, t, r) => -r * e + r * t + e;
function Gl(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function VR({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, a = 0, i = 0;
  if (!t)
    o = a = i = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    o = Gl(l, s, e + 1 / 3), a = Gl(l, s, e), i = Gl(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(a * 255),
    blue: Math.round(i * 255),
    alpha: n
  };
}
const Xl = (e, t, r) => {
  const n = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, zR = [ru, Vn, wo], WR = (e) => zR.find((t) => t.test(e));
function Gp(e) {
  const t = WR(e);
  wr(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
  let r = t.parse(e);
  return t === wo && (r = VR(r)), r;
}
const qv = (e, t) => {
  const r = Gp(e), n = Gp(t), o = { ...r };
  return (a) => (o.red = Xl(r.red, n.red, a), o.green = Xl(r.green, n.green, a), o.blue = Xl(r.blue, n.blue, a), o.alpha = Qe(r.alpha, n.alpha, a), Vn.transform(o));
};
function UR(e) {
  var t, r;
  return isNaN(e) && fi(e) && (((t = e.match(rl)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(gv)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const Yv = {
  regex: LC,
  countKey: "Vars",
  token: "${v}",
  parse: nt
}, Kv = {
  regex: gv,
  countKey: "Colors",
  token: "${c}",
  parse: Ft.parse
}, Gv = {
  regex: rl,
  countKey: "Numbers",
  token: "${n}",
  parse: ro.parse
};
function Zl(e, { regex: t, countKey: r, token: n, parse: o }) {
  const a = e.tokenised.match(t);
  a && (e["num" + r] = a.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...a.map(o)));
}
function Es(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && Zl(r, Yv), Zl(r, Kv), Zl(r, Gv), r;
}
function Xv(e) {
  return Es(e).values;
}
function Zv(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = Es(e), a = t.length;
  return (i) => {
    let s = o;
    for (let l = 0; l < a; l++)
      l < n ? s = s.replace(Yv.token, i[l]) : l < n + r ? s = s.replace(Kv.token, Ft.transform(i[l])) : s = s.replace(Gv.token, Da(i[l]));
    return s;
  };
}
const HR = (e) => typeof e == "number" ? 0 : e;
function qR(e) {
  const t = Xv(e);
  return Zv(e)(t.map(HR));
}
const _n = {
  test: UR,
  parse: Xv,
  createTransformer: Zv,
  getAnimatableNone: qR
}, Jv = (e, t) => (r) => `${r > 0 ? t : e}`;
function Qv(e, t) {
  return typeof e == "number" ? (r) => Qe(e, t, r) : Ft.test(e) ? qv(e, t) : e.startsWith("var(") ? Jv(e, t) : tg(e, t);
}
const eg = (e, t) => {
  const r = [...e], n = r.length, o = e.map((a, i) => Qv(a, t[i]));
  return (a) => {
    for (let i = 0; i < n; i++)
      r[i] = o[i](a);
    return r;
  };
}, YR = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = Qv(e[o], t[o]));
  return (o) => {
    for (const a in n)
      r[a] = n[a](o);
    return r;
  };
}, tg = (e, t) => {
  const r = _n.createTransformer(t), n = Es(e), o = Es(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? vn(eg(n.values, o.values), r) : (pi(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Jv(e, t));
}, Ka = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, Xp = (e, t) => (r) => Qe(e, t, r);
function KR(e) {
  return typeof e == "number" ? Xp : typeof e == "string" ? Ft.test(e) ? qv : tg : Array.isArray(e) ? eg : typeof e == "object" ? YR : Xp;
}
function GR(e, t, r) {
  const n = [], o = r || KR(e[0]), a = e.length - 1;
  for (let i = 0; i < a; i++) {
    let s = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || nt : t;
      s = vn(l, s);
    }
    n.push(s);
  }
  return n;
}
function rg(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const a = e.length;
  if (wr(a === t.length, "Both input and output ranges must be the same length"), a === 1)
    return () => t[0];
  e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const i = GR(t, n, o), s = i.length, l = (c) => {
    let u = 0;
    if (s > 1)
      for (; u < e.length - 2 && !(c < e[u + 1]); u++)
        ;
    const d = Ka(e[u], e[u + 1], c);
    return i[u](d);
  };
  return r ? (c) => l(xn(e[0], e[a - 1], c)) : l;
}
function XR(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = Ka(0, t, n);
    e.push(Qe(r, 1, o));
  }
}
function ZR(e) {
  const t = [0];
  return XR(t, e.length - 1), t;
}
function JR(e, t) {
  return e.map((r) => r * t);
}
function QR(e, t) {
  return e.map(() => t || Bv).splice(0, e.length - 1);
}
function ks({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = $R(n) ? n.map(Kp) : Kp(n), a = {
    done: !1,
    value: t[0]
  }, i = JR(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : ZR(t),
    e
  ), s = rg(i, t, {
    ease: Array.isArray(o) ? o : QR(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (a.value = s(l), a.done = l >= e, a)
  };
}
function ng(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const eA = 5;
function og(e, t, r) {
  const n = Math.max(t - eA, 0);
  return ng(r - e(n), t - n);
}
const Jl = 1e-3, tA = 0.01, Zp = 10, rA = 0.05, nA = 1;
function oA({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, a;
  pi(e <= gn(Zp), "Spring duration must be 10 seconds or less");
  let i = 1 - t;
  i = xn(rA, nA, i), e = xn(tA, Zp, Qr(e)), i < 1 ? (o = (c) => {
    const u = c * i, d = u * e, m = u - r, y = nu(c, i), x = Math.exp(-d);
    return Jl - m / y * x;
  }, a = (c) => {
    const d = c * i * e, m = d * r + r, y = Math.pow(i, 2) * Math.pow(c, 2) * e, x = Math.exp(-d), w = nu(Math.pow(c, 2), i);
    return (-o(c) + Jl > 0 ? -1 : 1) * ((m - y) * x) / w;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), d = (c - r) * e + 1;
    return -Jl + u * d;
  }, a = (c) => {
    const u = Math.exp(-c * e), d = (r - c) * (e * e);
    return u * d;
  });
  const s = 5 / e, l = iA(o, a, s);
  if (e = gn(e), isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * n;
    return {
      stiffness: c,
      damping: i * 2 * Math.sqrt(n * c),
      duration: e
    };
  }
}
const aA = 12;
function iA(e, t, r) {
  let n = r;
  for (let o = 1; o < aA; o++)
    n = n - e(n) / t(n);
  return n;
}
function nu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const sA = ["duration", "bounce"], lA = ["stiffness", "damping", "mass"];
function Jp(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function cA(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Jp(e, lA) && Jp(e, sA)) {
    const r = oA(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function ag({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], a = e[e.length - 1], i = { done: !1, value: o }, { stiffness: s, damping: l, mass: c, velocity: u, duration: d, isResolvedFromDuration: m } = cA(n), y = u ? -Qr(u) : 0, x = l / (2 * Math.sqrt(s * c)), w = a - o, _ = Qr(Math.sqrt(s / c)), T = Math.abs(w) < 5;
  r || (r = T ? 0.01 : 2), t || (t = T ? 5e-3 : 0.5);
  let P;
  if (x < 1) {
    const k = nu(_, x);
    P = ($) => {
      const S = Math.exp(-x * _ * $);
      return a - S * ((y + x * _ * w) / k * Math.sin(k * $) + w * Math.cos(k * $));
    };
  } else if (x === 1)
    P = (k) => a - Math.exp(-_ * k) * (w + (y + _ * w) * k);
  else {
    const k = _ * Math.sqrt(x * x - 1);
    P = ($) => {
      const S = Math.exp(-x * _ * $), C = Math.min(k * $, 300);
      return a - S * ((y + x * _ * w) * Math.sinh(C) + k * w * Math.cosh(C)) / k;
    };
  }
  return {
    calculatedDuration: m && d || null,
    next: (k) => {
      const $ = P(k);
      if (m)
        i.done = k >= d;
      else {
        let S = y;
        k !== 0 && (x < 1 ? S = og(P, k, $) : S = 0);
        const C = Math.abs(S) <= r, v = Math.abs(a - $) <= t;
        i.done = C && v;
      }
      return i.value = i.done ? a : $, i;
    }
  };
}
function Qp({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: a = 500, modifyTarget: i, min: s, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const d = e[0], m = {
    done: !1,
    value: d
  }, y = (f) => s !== void 0 && f < s || l !== void 0 && f > l, x = (f) => s === void 0 ? l : l === void 0 || Math.abs(s - f) < Math.abs(l - f) ? s : l;
  let w = r * t;
  const _ = d + w, T = i === void 0 ? _ : i(_);
  T !== _ && (w = T - d);
  const P = (f) => -w * Math.exp(-f / n), k = (f) => T + P(f), $ = (f) => {
    const h = P(f), p = k(f);
    m.done = Math.abs(h) <= c, m.value = m.done ? T : p;
  };
  let S, C;
  const v = (f) => {
    y(m.value) && (S = f, C = ag({
      keyframes: [m.value, x(m.value)],
      velocity: og(k, f, m.value),
      damping: o,
      stiffness: a,
      restDelta: c,
      restSpeed: u
    }));
  };
  return v(0), {
    calculatedDuration: null,
    next: (f) => {
      let h = !1;
      return !C && S === void 0 && (h = !0, $(f), v(f)), S !== void 0 && f > S ? C.next(f - S) : (!h && $(f), m);
    }
  };
}
const uA = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => We.update(t, !0),
    stop: () => rn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => wt.isProcessing ? wt.timestamp : performance.now()
  };
}, eh = 2e4;
function th(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < eh; )
    t += r, n = e.next(t);
  return t >= eh ? 1 / 0 : t;
}
const fA = {
  decay: Qp,
  inertia: Qp,
  tween: ks,
  keyframes: ks,
  spring: ag
};
function Ts({ autoplay: e = !0, delay: t = 0, driver: r = uA, keyframes: n, type: o = "keyframes", repeat: a = 0, repeatDelay: i = 0, repeatType: s = "loop", onPlay: l, onStop: c, onComplete: u, onUpdate: d, ...m }) {
  let y = 1, x = !1, w, _;
  const T = () => {
    _ = new Promise((O) => {
      w = O;
    });
  };
  T();
  let P;
  const k = fA[o] || ks;
  let $;
  k !== ks && typeof n[0] != "number" && ($ = rg([0, 100], n, {
    clamp: !1
  }), n = [0, 100]);
  const S = k({ ...m, keyframes: n });
  let C;
  s === "mirror" && (C = k({
    ...m,
    keyframes: [...n].reverse(),
    velocity: -(m.velocity || 0)
  }));
  let v = "idle", f = null, h = null, p = null;
  S.calculatedDuration === null && a && (S.calculatedDuration = th(S));
  const { calculatedDuration: g } = S;
  let A = 1 / 0, D = 1 / 0;
  g !== null && (A = g + i, D = A * (a + 1) - i);
  let R = 0;
  const F = (O) => {
    if (h === null)
      return;
    y > 0 && (h = Math.min(h, O)), y < 0 && (h = Math.min(O - D / y, h)), f !== null ? R = f : R = Math.round(O - h) * y;
    const B = R - t * (y >= 0 ? 1 : -1), K = y >= 0 ? B < 0 : B > D;
    R = Math.max(B, 0), v === "finished" && f === null && (R = D);
    let Y = R, Z = S;
    if (a) {
      const oe = R / A;
      let ae = Math.floor(oe), ne = oe % 1;
      !ne && oe >= 1 && (ne = 1), ne === 1 && ae--, ae = Math.min(ae, a + 1);
      const G = !!(ae % 2);
      G && (s === "reverse" ? (ne = 1 - ne, i && (ne -= i / A)) : s === "mirror" && (Z = C));
      let ge = xn(0, 1, ne);
      R > D && (ge = s === "reverse" && G ? 1 : 0), Y = ge * A;
    }
    const Q = K ? { done: !1, value: n[0] } : Z.next(Y);
    $ && (Q.value = $(Q.value));
    let { done: re } = Q;
    !K && g !== null && (re = y >= 0 ? R >= D : R <= 0);
    const J = f === null && (v === "finished" || v === "running" && re);
    return d && d(Q.value), J && j(), Q;
  }, U = () => {
    P && P.stop(), P = void 0;
  }, L = () => {
    v = "idle", U(), w(), T(), h = p = null;
  }, j = () => {
    v = "finished", u && u(), U(), w();
  }, V = () => {
    if (x)
      return;
    P || (P = r(F));
    const O = P.now();
    l && l(), f !== null ? h = O - f : (!h || v === "finished") && (h = O), v === "finished" && T(), p = h, f = null, v = "running", P.start();
  };
  e && V();
  const E = {
    then(O, B) {
      return _.then(O, B);
    },
    get time() {
      return Qr(R);
    },
    set time(O) {
      O = gn(O), R = O, f !== null || !P || y === 0 ? f = O : h = P.now() - O / y;
    },
    get duration() {
      const O = S.calculatedDuration === null ? th(S) : S.calculatedDuration;
      return Qr(O);
    },
    get speed() {
      return y;
    },
    set speed(O) {
      O === y || !P || (y = O, E.time = Qr(R));
    },
    get state() {
      return v;
    },
    play: V,
    pause: () => {
      v = "paused", f = R;
    },
    stop: () => {
      x = !0, v !== "idle" && (v = "idle", c && c(), L());
    },
    cancel: () => {
      p !== null && F(p), L();
    },
    complete: () => {
      v = "finished";
    },
    sample: (O) => (h = 0, F(O))
  };
  return E;
}
function dA(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const pA = dA(() => Object.hasOwnProperty.call(Element.prototype, "animate")), hA = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), ji = 10, mA = 2e4, yA = (e, t) => t.type === "spring" || e === "backgroundColor" || !jv(t.ease);
function vA(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(pA() && hA.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let i = !1, s, l;
  const c = () => {
    l = new Promise((P) => {
      s = P;
    });
  };
  c();
  let { keyframes: u, duration: d = 300, ease: m, times: y } = o;
  if (yA(t, o)) {
    const P = Ts({
      ...o,
      repeat: 0,
      delay: 0
    });
    let k = { done: !1, value: u[0] };
    const $ = [];
    let S = 0;
    for (; !k.done && S < mA; )
      k = P.sample(S), $.push(k.value), S += ji;
    y = void 0, u = $, d = S - ji, m = "linear";
  }
  const x = TR(e.owner.current, t, u, {
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
    ease: m,
    times: y
  });
  o.syncStart && (x.startTime = wt.isProcessing ? wt.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
  const w = () => x.cancel(), _ = () => {
    We.update(w), s(), c();
  };
  return x.onfinish = () => {
    e.set(CR(u, o)), n && n(), _();
  }, {
    then(P, k) {
      return l.then(P, k);
    },
    attachTimeline(P) {
      return x.timeline = P, x.onfinish = null, nt;
    },
    get time() {
      return Qr(x.currentTime || 0);
    },
    set time(P) {
      x.currentTime = gn(P);
    },
    get speed() {
      return x.playbackRate;
    },
    set speed(P) {
      x.playbackRate = P;
    },
    get duration() {
      return Qr(d);
    },
    play: () => {
      i || (x.play(), rn(w));
    },
    pause: () => x.pause(),
    stop: () => {
      if (i = !0, x.playState === "idle")
        return;
      const { currentTime: P } = x;
      if (P) {
        const k = Ts({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(k.sample(P - ji).value, k.sample(P).value, ji);
      }
      _();
    },
    complete: () => x.finish(),
    cancel: _
  };
}
function gA({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (r && r(e[e.length - 1]), n && n(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: nt,
    pause: nt,
    stop: nt,
    then: (a) => (a(), Promise.resolve()),
    cancel: nt,
    complete: nt
  });
  return t ? Ts({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const bA = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, SA = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), wA = {
  type: "keyframes",
  duration: 0.8
}, xA = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, _A = (e, { keyframes: t }) => t.length > 2 ? wA : to.has(e) ? e.startsWith("scale") ? SA(t[1]) : bA : xA, ou = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(_n.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), PA = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function OA(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(rl) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let a = PA.has(t) ? 1 : 0;
  return n !== r && (a *= 100), t + "(" + a + o + ")";
}
const EA = /([a-z-]*)\(.*?\)/g, au = {
  ..._n,
  getAnimatableNone: (e) => {
    const t = e.match(EA);
    return t ? t.map(OA).join(" ") : e;
  }
}, kA = {
  ...bv,
  // Color props
  color: Ft,
  backgroundColor: Ft,
  outlineColor: Ft,
  fill: Ft,
  stroke: Ft,
  // Border props
  borderColor: Ft,
  borderTopColor: Ft,
  borderRightColor: Ft,
  borderBottomColor: Ft,
  borderLeftColor: Ft,
  filter: au,
  WebkitFilter: au
}, xf = (e) => kA[e];
function ig(e, t) {
  let r = xf(e);
  return r !== au && (r = _n), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const sg = (e) => /^0[^.\s]+$/.test(e);
function TA(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || sg(e);
}
function CA(e, t, r, n) {
  const o = ou(t, r);
  let a;
  Array.isArray(r) ? a = [...r] : a = [null, r];
  const i = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let c = 0; c < a.length; c++)
    a[c] === null && (a[c] = c === 0 ? i : a[c - 1]), TA(a[c]) && l.push(c), typeof a[c] == "string" && a[c] !== "none" && a[c] !== "0" && (s = a[c]);
  if (o && l.length && s)
    for (let c = 0; c < l.length; c++) {
      const u = l[c];
      a[u] = ig(t, s);
    }
  return a;
}
function RA({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: a, repeatType: i, repeatDelay: s, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
function lg(e, t) {
  return e[t] || e.default || e;
}
const _f = (e, t, r, n = {}) => (o) => {
  const a = lg(n, e) || {}, i = a.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - gn(i);
  const l = CA(t, e, r, a), c = l[0], u = l[l.length - 1], d = ou(e, c), m = ou(e, u);
  pi(d === m, `You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);
  let y = {
    keyframes: l,
    velocity: t.getVelocity(),
    ease: "easeOut",
    ...a,
    delay: -s,
    onUpdate: (x) => {
      t.set(x), a.onUpdate && a.onUpdate(x);
    },
    onComplete: () => {
      o(), a.onComplete && a.onComplete();
    }
  };
  if (RA(a) || (y = {
    ...y,
    ..._A(e, y)
  }), y.duration && (y.duration = gn(y.duration)), y.repeatDelay && (y.repeatDelay = gn(y.repeatDelay)), !d || !m || kR.current || a.type === !1)
    return gA(y);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const x = vA(t, e, y);
    if (x)
      return x;
  }
  return Ts(y);
};
function Cs(e) {
  return !!(Yt(e) && e.add);
}
const cg = (e) => /^\-?\d*\.?\d+$/.test(e);
function Pf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Of(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Ef {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Pf(this.subscriptions, t), () => Of(this.subscriptions, t);
  }
  notify(t, r, n) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, r, n);
      else
        for (let a = 0; a < o; a++) {
          const i = this.subscriptions[a];
          i && i(t, r, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const rh = /* @__PURE__ */ new Set();
function kf(e, t, r) {
  e || rh.has(t) || (console.warn(t), r && console.warn(r), rh.add(t));
}
const AA = (e) => !isNaN(parseFloat(e));
class DA {
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
      const { delta: a, timestamp: i } = wt;
      this.lastUpdated !== i && (this.timeDelta = a, this.lastUpdated = i, We.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => We.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: n }) => {
      n !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = AA(this.current), this.owner = r.owner;
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
    return process.env.NODE_ENV !== "production" && kf(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new Ef());
    const n = this.events[t].add(r);
    return t === "change" ? () => {
      n(), We.read(() => {
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
      ng(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function Lo(e, t) {
  return new DA(e, t);
}
const ug = (e) => (t) => t.test(e), MA = {
  test: (e) => e === "auto",
  parse: (e) => e
}, fg = [ro, ve, Lr, hn, VC, BC, MA], ua = (e) => fg.find(ug(e)), IA = [...fg, Ft, _n], $A = (e) => IA.find(ug(e));
function jA(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Lo(r));
}
function LA(e, t) {
  const r = ol(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...a } = r ? e.makeTargetAnimatable(r, !1) : {};
  a = { ...a, ...n };
  for (const i in a) {
    const s = tR(a[i]);
    jA(e, i, s);
  }
}
function FA(e, t, r) {
  var n, o;
  const a = Object.keys(t).filter((s) => !e.hasValue(s)), i = a.length;
  if (i)
    for (let s = 0; s < i; s++) {
      const l = a[s], c = t[l];
      let u = null;
      Array.isArray(c) && (u = c[0]), u === null && (u = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), u != null && (typeof u == "string" && (cg(u) || sg(u)) ? u = parseFloat(u) : !$A(u) && _n.test(c) && (u = ig(l, c)), e.addValue(l, Lo(u, { owner: e })), r[l] === void 0 && (r[l] = u), u !== null && e.setBaseTarget(l, u));
    }
}
function NA(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function BA(e, t, r) {
  const n = {};
  for (const o in e) {
    const a = NA(o, t);
    if (a !== void 0)
      n[o] = a;
    else {
      const i = r.getValue(o);
      i && (n[o] = i.get());
    }
  }
  return n;
}
function VA({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function dg(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let { transition: a = e.getDefaultTransition(), transitionEnd: i, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (a = n);
  const c = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const m = e.getValue(d), y = s[d];
    if (!m || y === void 0 || u && VA(u, d))
      continue;
    const x = {
      delay: r,
      elapsed: 0,
      ...a
    };
    if (window.HandoffAppearAnimations && !m.hasAnimated) {
      const _ = e.getProps()[ER];
      _ && (x.elapsed = window.HandoffAppearAnimations(_, d, m, We), x.syncStart = !0);
    }
    m.start(_f(d, m, y, e.shouldReduceMotion && to.has(d) ? { type: !1 } : x));
    const w = m.animation;
    Cs(l) && (l.add(d), w.then(() => l.remove(d))), c.push(w);
  }
  return i && Promise.all(c).then(() => {
    i && LA(e, i);
  }), c;
}
function iu(e, t, r = {}) {
  const n = ol(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const a = n ? () => Promise.all(dg(e, n, r)) : () => Promise.resolve(), i = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: c = 0, staggerChildren: u, staggerDirection: d } = o;
    return zA(e, t, c + l, u, d, r);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, c] = s === "beforeChildren" ? [a, i] : [i, a];
    return l().then(() => c());
  } else
    return Promise.all([a(), i(r.delay)]);
}
function zA(e, t, r = 0, n = 0, o = 1, a) {
  const i = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? (c = 0) => c * n : (c = 0) => s - c * n;
  return Array.from(e.variantChildren).sort(WA).forEach((c, u) => {
    c.notify("AnimationStart", t), i.push(iu(c, t, {
      ...a,
      delay: r + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function WA(e, t) {
  return e.sortNodePosition(t);
}
function UA(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((a) => iu(e, a, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = iu(e, t, r);
  else {
    const o = typeof t == "function" ? ol(e, t, r.custom) : t;
    n = Promise.all(dg(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const HA = [...lf].reverse(), qA = lf.length;
function YA(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => UA(e, r, n)));
}
function KA(e) {
  let t = YA(e);
  const r = XA();
  let n = !0;
  const o = (l, c) => {
    const u = ol(e, c);
    if (u) {
      const { transition: d, transitionEnd: m, ...y } = u;
      l = { ...l, ...y, ...m };
    }
    return l;
  };
  function a(l) {
    t = l(e);
  }
  function i(l, c) {
    const u = e.getProps(), d = e.getVariantContext(!0) || {}, m = [], y = /* @__PURE__ */ new Set();
    let x = {}, w = 1 / 0;
    for (let T = 0; T < qA; T++) {
      const P = HA[T], k = r[P], $ = u[P] !== void 0 ? u[P] : d[P], S = qa($), C = P === c ? k.isActive : null;
      C === !1 && (w = T);
      let v = $ === d[P] && $ !== u[P] && S;
      if (v && n && e.manuallyAnimateOnMount && (v = !1), k.protectedKeys = { ...x }, // If it isn't active and hasn't *just* been set as inactive
      !k.isActive && C === null || // If we didn't and don't have any defined prop for this animation type
      !$ && !k.prevProp || // Or if the prop doesn't define an animation
      el($) || typeof $ == "boolean")
        continue;
      const f = GA(k.prevProp, $);
      let h = f || // If we're making this variant active, we want to always make it active
      P === c && k.isActive && !v && S || // If we removed a higher-priority variant (i is in reverse order)
      T > w && S;
      const p = Array.isArray($) ? $ : [$];
      let g = p.reduce(o, {});
      C === !1 && (g = {});
      const { prevResolvedValues: A = {} } = k, D = {
        ...A,
        ...g
      }, R = (F) => {
        h = !0, y.delete(F), k.needsAnimating[F] = !0;
      };
      for (const F in D) {
        const U = g[F], L = A[F];
        x.hasOwnProperty(F) || (U !== L ? Os(U) && Os(L) ? !Iv(U, L) || f ? R(F) : k.protectedKeys[F] = !0 : U !== void 0 ? R(F) : y.add(F) : U !== void 0 && y.has(F) ? R(F) : k.protectedKeys[F] = !0);
      }
      k.prevProp = $, k.prevResolvedValues = g, k.isActive && (x = { ...x, ...g }), n && e.blockInitialAnimation && (h = !1), h && !v && m.push(...p.map((F) => ({
        animation: F,
        options: { type: P, ...l }
      })));
    }
    if (y.size) {
      const T = {};
      y.forEach((P) => {
        const k = e.getBaseTarget(P);
        k !== void 0 && (T[P] = k);
      }), m.push({ animation: T });
    }
    let _ = !!m.length;
    return n && u.initial === !1 && !e.manuallyAnimateOnMount && (_ = !1), n = !1, _ ? t(m) : Promise.resolve();
  }
  function s(l, c, u) {
    var d;
    if (r[l].isActive === c)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((y) => {
      var x;
      return (x = y.animationState) === null || x === void 0 ? void 0 : x.setActive(l, c);
    }), r[l].isActive = c;
    const m = i(u, l);
    for (const y in r)
      r[y].protectedKeys = {};
    return m;
  }
  return {
    animateChanges: i,
    setActive: s,
    setAnimateFunction: a,
    getState: () => r
  };
}
function GA(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Iv(t, e) : !1;
}
function Dn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function XA() {
  return {
    animate: Dn(!0),
    whileInView: Dn(),
    whileHover: Dn(),
    whileTap: Dn(),
    whileDrag: Dn(),
    whileFocus: Dn(),
    exit: Dn()
  };
}
class ZA extends Pn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = KA(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), el(t) && (this.unmount = t.subscribe(this.node));
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
let JA = 0;
class QA extends Pn {
  constructor() {
    super(...arguments), this.id = JA++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: r, custom: n } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o)
      return;
    const a = this.node.animationState.setActive("exit", !t, { custom: n ?? this.node.getProps().custom });
    r && !t && a.then(() => r(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const eD = {
  animation: {
    Feature: ZA
  },
  exit: {
    Feature: QA
  }
}, nh = (e, t) => Math.abs(e - t);
function tD(e, t) {
  const r = nh(e.x, t.x), n = nh(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class pg {
  constructor(t, r, { transformPagePoint: n } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = ec(this.lastMoveEventInfo, this.history), u = this.startEvent !== null, d = tD(c.offset, { x: 0, y: 0 }) >= 3;
      if (!u && !d)
        return;
      const { point: m } = c, { timestamp: y } = wt;
      this.history.push({ ...m, timestamp: y });
      const { onStart: x, onMove: w } = this.handlers;
      u || (x && x(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), w && w(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, u) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = Ql(u, this.transformPagePoint), We.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, u) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: d, onSessionEnd: m } = this.handlers, y = ec(c.type === "pointercancel" ? this.lastMoveEventInfo : Ql(u, this.transformPagePoint), this.history);
      this.startEvent && d && d(c, y), m && m(c, y);
    }, !Cv(t))
      return;
    this.handlers = r, this.transformPagePoint = n;
    const o = nl(t), a = Ql(o, this.transformPagePoint), { point: i } = a, { timestamp: s } = wt;
    this.history = [{ ...i, timestamp: s }];
    const { onSessionStart: l } = r;
    l && l(t, ec(a, this.history)), this.removeListeners = vn(Jr(window, "pointermove", this.handlePointerMove), Jr(window, "pointerup", this.handlePointerUp), Jr(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), rn(this.updatePoint);
  }
}
function Ql(e, t) {
  return t ? { point: t(e.point) } : e;
}
function oh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ec({ point: e }, t) {
  return {
    point: e,
    delta: oh(e, hg(t)),
    offset: oh(e, rD(t)),
    velocity: nD(t, 0.1)
  };
}
function rD(e) {
  return e[0];
}
function hg(e) {
  return e[e.length - 1];
}
function nD(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = hg(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > gn(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const a = Qr(o.timestamp - n.timestamp);
  if (a === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - n.x) / a,
    y: (o.y - n.y) / a
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function tr(e) {
  return e.max - e.min;
}
function su(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function ah(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = Qe(t.min, t.max, e.origin), e.scale = tr(r) / tr(t), (su(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Qe(r.min, r.max, e.origin) - e.originPoint, (su(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Ma(e, t, r, n) {
  ah(e.x, t.x, r.x, n ? n.originX : void 0), ah(e.y, t.y, r.y, n ? n.originY : void 0);
}
function ih(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + tr(t);
}
function oD(e, t, r) {
  ih(e.x, t.x, r.x), ih(e.y, t.y, r.y);
}
function sh(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + tr(t);
}
function Ia(e, t, r) {
  sh(e.x, t.x, r.x), sh(e.y, t.y, r.y);
}
function aD(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? Qe(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? Qe(r, e, n.max) : Math.min(e, r)), e;
}
function lh(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function iD(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: lh(e.x, r, o),
    y: lh(e.y, t, n)
  };
}
function ch(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function sD(e, t) {
  return {
    x: ch(e.x, t.x),
    y: ch(e.y, t.y)
  };
}
function lD(e, t) {
  let r = 0.5;
  const n = tr(e), o = tr(t);
  return o > n ? r = Ka(t.min, t.max - n, e.min) : n > o && (r = Ka(e.min, e.max - o, t.min)), xn(0, 1, r);
}
function cD(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const lu = 0.35;
function uD(e = lu) {
  return e === !1 ? e = 0 : e === !0 && (e = lu), {
    x: uh(e, "left", "right"),
    y: uh(e, "top", "bottom")
  };
}
function uh(e, t, r) {
  return {
    min: fh(e, t),
    max: fh(e, r)
  };
}
function fh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const dh = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), xo = () => ({
  x: dh(),
  y: dh()
}), ph = () => ({ min: 0, max: 0 }), ut = () => ({
  x: ph(),
  y: ph()
});
function Er(e) {
  return [e("x"), e("y")];
}
function mg({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function fD({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function dD(e, t) {
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
function tc(e) {
  return e === void 0 || e === 1;
}
function cu({ scale: e, scaleX: t, scaleY: r }) {
  return !tc(e) || !tc(t) || !tc(r);
}
function Mn(e) {
  return cu(e) || yg(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function yg(e) {
  return hh(e.x) || hh(e.y);
}
function hh(e) {
  return e && e !== "0%";
}
function Rs(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function mh(e, t, r, n, o) {
  return o !== void 0 && (e = Rs(e, o, n)), Rs(e, r, n) + t;
}
function uu(e, t = 0, r = 1, n, o) {
  e.min = mh(e.min, t, r, n, o), e.max = mh(e.max, t, r, n, o);
}
function vg(e, { x: t, y: r }) {
  uu(e.x, t.translate, t.scale, t.originPoint), uu(e.y, r.translate, r.scale, r.originPoint);
}
function pD(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let a, i;
  for (let s = 0; s < o; s++) {
    a = r[s], i = a.projectionDelta;
    const l = a.instance;
    l && l.style && l.style.display === "contents" || (n && a.options.layoutScroll && a.scroll && a !== a.root && _o(e, {
      x: -a.scroll.offset.x,
      y: -a.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, vg(e, i)), n && Mn(a.latestValues) && _o(e, a.latestValues));
  }
  t.x = yh(t.x), t.y = yh(t.y);
}
function yh(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function mn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function vh(e, t, [r, n, o]) {
  const a = t[o] !== void 0 ? t[o] : 0.5, i = Qe(e.min, e.max, a);
  uu(e, t[r], t[n], i, t.scale);
}
const hD = ["x", "scaleX", "originX"], mD = ["y", "scaleY", "originY"];
function _o(e, t) {
  vh(e.x, t, hD), vh(e.y, t, mD);
}
function gg(e, t) {
  return mg(dD(e.getBoundingClientRect(), t));
}
function yD(e, t, r) {
  const n = gg(e, r), { scroll: o } = t;
  return o && (mn(n.x, o.offset.x), mn(n.y, o.offset.y)), n;
}
const vD = /* @__PURE__ */ new WeakMap();
class gD {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ut(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), r && this.snapToCursor(nl(l, "page").point);
    }, a = (l, c) => {
      const { drag: u, dragPropagation: d, onDragStart: m } = this.getProps();
      if (u && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Av(u), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Er((x) => {
        let w = this.getAxisMotionValue(x).get() || 0;
        if (Lr.test(w)) {
          const { projection: _ } = this.visualElement;
          if (_ && _.layout) {
            const T = _.layout.layoutBox[x];
            T && (w = tr(T) * (parseFloat(w) / 100));
          }
        }
        this.originPoint[x] = w;
      }), m && We.update(() => m(l, c), !1, !0);
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, i = (l, c) => {
      const { dragPropagation: u, dragDirectionLock: d, onDirectionLock: m, onDrag: y } = this.getProps();
      if (!u && !this.openGlobalLock)
        return;
      const { offset: x } = c;
      if (d && this.currentDirection === null) {
        this.currentDirection = bD(x), this.currentDirection !== null && m && m(this.currentDirection);
        return;
      }
      this.updateAxis("x", c.point, x), this.updateAxis("y", c.point, x), this.visualElement.render(), y && y(l, c);
    }, s = (l, c) => this.stop(l, c);
    this.panSession = new pg(t, {
      onSessionStart: o,
      onStart: a,
      onMove: i,
      onSessionEnd: s
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  }
  stop(t, r) {
    const n = this.isDragging;
    if (this.cancel(), !n)
      return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && We.update(() => a(t, r));
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
    if (!n || !Li(t, o, this.currentDirection))
      return;
    const a = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (i = aD(i, this.constraints[t], this.elastic[t])), a.set(i);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(), { layout: n } = this.visualElement.projection || {}, o = this.constraints;
    t && So(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = iD(n.layoutBox, t) : this.constraints = !1, this.elastic = uD(r), o !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && Er((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = cD(n.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !So(t))
      return !1;
    const n = t.current;
    wr(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const a = yD(n, o.root, this.visualElement.getTransformPagePoint());
    let i = sD(o.layout.layoutBox, a);
    if (r) {
      const s = r(fD(i));
      this.hasMutatedConstraints = !!s, s && (i = mg(s));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: a, dragSnapToOrigin: i, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, c = Er((u) => {
      if (!Li(u, r, this.currentDirection))
        return;
      let d = l && l[u] || {};
      i && (d = { min: 0, max: 0 });
      const m = o ? 200 : 1e6, y = o ? 40 : 1e7, x = {
        type: "inertia",
        velocity: n ? t[u] : 0,
        bounceStiffness: m,
        bounceDamping: y,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...a,
        ...d
      };
      return this.startAxisValueAnimation(u, x);
    });
    return Promise.all(c).then(s);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return n.start(_f(t, n, 0, r));
  }
  stopAnimation() {
    Er((t) => this.getAxisMotionValue(t).stop());
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
    Er((r) => {
      const { drag: n } = this.getProps();
      if (!Li(r, n, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, a = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: i, max: s } = o.layout.layoutBox[r];
        a.set(t[r] - Qe(i, s, 0.5));
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
    if (!So(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Er((i) => {
      const s = this.getAxisMotionValue(i);
      if (s) {
        const l = s.get();
        o[i] = lD({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    this.visualElement.current.style.transform = a ? a({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), Er((i) => {
      if (!Li(i, t, null))
        return;
      const s = this.getAxisMotionValue(i), { min: l, max: c } = this.constraints[i];
      s.set(Qe(l, c, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    vD.set(this.visualElement, this);
    const t = this.visualElement.current, r = Jr(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      So(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, a = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const i = Xr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (Er((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += l[u].translate, d.set(d.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), r(), a(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: a = !1, dragElastic: i = lu, dragMomentum: s = !0 } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: o,
      dragConstraints: a,
      dragElastic: i,
      dragMomentum: s
    };
  }
}
function Li(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function bD(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class SD extends Pn {
  constructor(t) {
    super(t), this.removeGroupControls = nt, this.removeListeners = nt, this.controls = new gD(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || nt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const gh = (e) => (t, r) => {
  e && We.update(() => e(t, r));
};
class wD extends Pn {
  constructor() {
    super(...arguments), this.removePointerDownListener = nt;
  }
  onPointerDown(t) {
    this.session = new pg(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: gh(t),
      onStart: gh(r),
      onMove: n,
      onEnd: (a, i) => {
        delete this.session, o && We.update(() => o(a, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Jr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function bg() {
  const e = it(ci);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = zr();
  return Me(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function xD() {
  return _D(it(ci));
}
function _D(e) {
  return e === null ? !0 : e.isPresent;
}
const is = {
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
function bh(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const fa = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (ve.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = bh(e, t.target.x), n = bh(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, PD = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = _n.parse(e);
    if (o.length > 5)
      return n;
    const a = _n.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, s = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + i] /= s, o[1 + i] /= l;
    const c = Qe(s, l, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= c), typeof o[3 + i] == "number" && (o[3 + i] /= c), a(o);
  }
};
class OD extends ke.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: a } = t;
    MC(ED), a && (r.group && r.group.add(a), n && n.register && o && n.register(a), a.root.didUpdate(), a.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), a.setOptions({
      ...a.options,
      onExitComplete: () => this.safeToRemove()
    })), is.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: a } = this.props, i = n.projection;
    return i && (i.isPresent = a, o || t.layoutDependency !== r || r === void 0 ? i.willUpdate() : this.safeToRemove(), t.isPresent !== a && (a ? i.promote() : i.relegate() || We.postRender(() => {
      const s = i.getStack();
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
function Sg(e) {
  const [t, r] = bg(), n = it(uf);
  return ke.createElement(OD, { ...e, layoutGroup: n, switchLayoutGroup: it(hv), isPresent: t, safeToRemove: r });
}
const ED = {
  borderRadius: {
    ...fa,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: fa,
  borderTopRightRadius: fa,
  borderBottomLeftRadius: fa,
  borderBottomRightRadius: fa,
  boxShadow: PD
}, wg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], kD = wg.length, Sh = (e) => typeof e == "string" ? parseFloat(e) : e, wh = (e) => typeof e == "number" || ve.test(e);
function TD(e, t, r, n, o, a) {
  o ? (e.opacity = Qe(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    CD(n)
  ), e.opacityExit = Qe(t.opacity !== void 0 ? t.opacity : 1, 0, RD(n))) : a && (e.opacity = Qe(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let i = 0; i < kD; i++) {
    const s = `border${wg[i]}Radius`;
    let l = xh(t, s), c = xh(r, s);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || wh(l) === wh(c) ? (e[s] = Math.max(Qe(Sh(l), Sh(c), n), 0), (Lr.test(c) || Lr.test(l)) && (e[s] += "%")) : e[s] = c;
  }
  (t.rotate || r.rotate) && (e.rotate = Qe(t.rotate || 0, r.rotate || 0, n));
}
function xh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const CD = xg(0, 0.5, bf), RD = xg(0.5, 0.95, nt);
function xg(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(Ka(e, t, n));
}
function _h(e, t) {
  e.min = t.min, e.max = t.max;
}
function lr(e, t) {
  _h(e.x, t.x), _h(e.y, t.y);
}
function Ph(e, t, r, n, o) {
  return e -= t, e = Rs(e, 1 / r, n), o !== void 0 && (e = Rs(e, 1 / o, n)), e;
}
function AD(e, t = 0, r = 1, n = 0.5, o, a = e, i = e) {
  if (Lr.test(t) && (t = parseFloat(t), t = Qe(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let s = Qe(a.min, a.max, n);
  e === a && (s -= t), e.min = Ph(e.min, t, r, s, o), e.max = Ph(e.max, t, r, s, o);
}
function Oh(e, t, [r, n, o], a, i) {
  AD(e, t[r], t[n], t[o], t.scale, a, i);
}
const DD = ["x", "scaleX", "originX"], MD = ["y", "scaleY", "originY"];
function Eh(e, t, r, n) {
  Oh(e.x, t, DD, r ? r.x : void 0, n ? n.x : void 0), Oh(e.y, t, MD, r ? r.y : void 0, n ? n.y : void 0);
}
function kh(e) {
  return e.translate === 0 && e.scale === 1;
}
function _g(e) {
  return kh(e.x) && kh(e.y);
}
function ID(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function Pg(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function Th(e) {
  return tr(e.x) / tr(e.y);
}
class $D {
  constructor() {
    this.members = [];
  }
  add(t) {
    Pf(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Of(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
      const a = this.members[o];
      if (a.isPresent !== !1) {
        n = a;
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
function Ch(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, a = e.y.translate / t.y;
  if ((o || a) && (n = `translate3d(${o}px, ${a}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: c, rotateY: u } = r;
    l && (n += `rotate(${l}deg) `), c && (n += `rotateX(${c}deg) `), u && (n += `rotateY(${u}deg) `);
  }
  const i = e.x.scale * t.x, s = e.y.scale * t.y;
  return (i !== 1 || s !== 1) && (n += `scale(${i}, ${s})`), n || "none";
}
const jD = (e, t) => e.depth - t.depth;
class LD {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Pf(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Of(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(jD), this.isDirty = !1, this.children.forEach(t);
  }
}
function FD(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const a = o - r;
    a >= t && (rn(n), e(a - t));
  };
  return We.read(n, !0), () => rn(n);
}
function ND(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function BD(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function VD(e, t, r) {
  const n = Yt(e) ? e : Lo(e);
  return n.start(_f("", n, t, r)), n.animation;
}
const Rh = ["", "X", "Y", "Z"], Ah = 1e3;
let zD = 0;
const In = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function Og({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(i = {}, s = t == null ? void 0 : t()) {
      this.id = zD++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        In.totalNodes = In.resolvedTargetDeltas = In.recalculatedProjection = 0, this.nodes.forEach(HD), this.nodes.forEach(XD), this.nodes.forEach(ZD), this.nodes.forEach(qD), ND(In);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new LD());
    }
    addEventListener(i, s) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new Ef()), this.eventHandlers.get(i).add(s);
    }
    notifyListeners(i, ...s) {
      const l = this.eventHandlers.get(i);
      l && l.notify(...s);
    }
    hasListeners(i) {
      return this.eventHandlers.has(i);
    }
    /**
     * Lifecycles
     */
    mount(i, s = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = BD(i), this.instance = i;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (c || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const m = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = FD(m, 250), is.hasAnimatedSinceResize && (is.hasAnimatedSinceResize = !1, this.nodes.forEach(Mh));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: m, hasRelativeTargetChanged: y, layout: x }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const w = this.options.transition || u.getDefaultTransition() || rM, { onLayoutAnimationStart: _, onLayoutAnimationComplete: T } = u.getProps(), P = !this.targetLayout || !Pg(this.targetLayout, x) || y, k = !m && y;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || k || m && (P || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, k);
          const $ = {
            ...lg(w, "layout"),
            onPlay: _,
            onComplete: T
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && ($.delay = 0, $.type = !1), this.startAnimation($);
        } else
          m || Mh(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = x;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, rn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(JD), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: i } = this.options;
      return i && i.getProps().transformTemplate;
    }
    willUpdate(i = !0) {
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
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Dh);
        return;
      }
      this.isUpdating || this.nodes.forEach(KD), this.isUpdating = !1, this.nodes.forEach(GD), this.nodes.forEach(WD), this.nodes.forEach(UD), this.clearAllSnapshots();
      const s = performance.now();
      wt.delta = xn(0, 1e3 / 60, s - wt.timestamp), wt.timestamp = s, wt.isProcessing = !0, Hl.update.process(wt), Hl.preRender.process(wt), Hl.render.process(wt), wt.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(YD), this.sharedNodes.forEach(QD);
    }
    scheduleUpdateProjection() {
      We.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      We.postRender(() => {
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
      const i = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = ut(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s && s.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0);
    }
    updateScroll(i = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (s = !1), s && (this.scroll = {
        animationId: this.root.animationId,
        phase: i,
        isRoot: n(this.instance),
        offset: r(this.instance)
      });
    }
    resetTransform() {
      if (!o)
        return;
      const i = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !_g(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      i && (s || Mn(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return i && (l = this.removeTransform(l)), nM(l), {
        animationId: this.root.animationId,
        measuredBox: s,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: i } = this.options;
      if (!i)
        return ut();
      const s = i.measureViewportBox(), { scroll: l } = this.root;
      return l && (mn(s.x, l.offset.x), mn(s.y, l.offset.y)), s;
    }
    removeElementScroll(i) {
      const s = ut();
      lr(s, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: d } = c;
        if (c !== this.root && u && d.layoutScroll) {
          if (u.isRoot) {
            lr(s, i);
            const { scroll: m } = this.root;
            m && (mn(s.x, -m.offset.x), mn(s.y, -m.offset.y));
          }
          mn(s.x, u.offset.x), mn(s.y, u.offset.y);
        }
      }
      return s;
    }
    applyTransform(i, s = !1) {
      const l = ut();
      lr(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !s && u.options.layoutScroll && u.scroll && u !== u.root && _o(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), Mn(u.latestValues) && _o(l, u.latestValues);
      }
      return Mn(this.latestValues) && _o(l, this.latestValues), l;
    }
    removeTransform(i) {
      const s = ut();
      lr(s, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Mn(c.latestValues))
          continue;
        cu(c.latestValues) && c.updateSnapshot();
        const u = ut(), d = c.measurePageBox();
        lr(u, d), Eh(s, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Mn(this.latestValues) && Eh(s, this.latestValues), s;
    }
    setTargetDelta(i) {
      this.targetDelta = i, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(i) {
      this.options = {
        ...this.options,
        ...i,
        crossfade: i.crossfade !== void 0 ? i.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== wt.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(i = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(i || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: d, layoutId: m } = this.options;
      if (!(!this.layout || !(d || m))) {
        if (this.resolvedRelativeTargetAt = wt.timestamp, !this.targetDelta && !this.relativeTarget) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ut(), this.relativeTargetOrigin = ut(), Ia(this.relativeTargetOrigin, this.layout.layoutBox, y.layout.layoutBox), lr(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ut(), this.targetWithTransforms = ut()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), oD(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : lr(this.target, this.layout.layoutBox), vg(this.target, this.targetDelta)) : lr(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y && !!y.resumingFrom == !!this.resumingFrom && !y.options.layoutScroll && y.target && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ut(), this.relativeTargetOrigin = ut(), Ia(this.relativeTargetOrigin, this.target, y.target), lr(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          In.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || cu(this.parent.latestValues) || yg(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var i;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let c = !0;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === wt.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d))
        return;
      lr(this.layoutCorrected, this.layout.layoutBox);
      const m = this.treeScale.x, y = this.treeScale.y;
      pD(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: x } = s;
      if (!x) {
        this.projectionTransform && (this.projectionDelta = xo(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = xo(), this.projectionDeltaWithTransform = xo());
      const w = this.projectionTransform;
      Ma(this.projectionDelta, this.layoutCorrected, x, this.latestValues), this.projectionTransform = Ch(this.projectionDelta, this.treeScale), (this.projectionTransform !== w || this.treeScale.x !== m || this.treeScale.y !== y) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", x)), In.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(i = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), i) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(i, s = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, d = xo();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const m = ut(), y = l ? l.source : void 0, x = this.layout ? this.layout.source : void 0, w = y !== x, _ = this.getStack(), T = !_ || _.members.length <= 1, P = !!(w && !T && this.options.crossfade === !0 && !this.path.some(tM));
      this.animationProgress = 0;
      let k;
      this.mixTargetDelta = ($) => {
        const S = $ / 1e3;
        Ih(d.x, i.x, S), Ih(d.y, i.y, S), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ia(m, this.layout.layoutBox, this.relativeParent.layout.layoutBox), eM(this.relativeTarget, this.relativeTargetOrigin, m, S), k && ID(this.relativeTarget, k) && (this.isProjectionDirty = !1), k || (k = ut()), lr(k, this.relativeTarget)), w && (this.animationValues = u, TD(u, c, this.latestValues, S, P, T)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = S;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (rn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = We.update(() => {
        is.hasAnimatedSinceResize = !0, this.currentAnimation = VD(0, Ah, {
          ...i,
          onUpdate: (s) => {
            this.mixTargetDelta(s), i.onUpdate && i.onUpdate(s);
          },
          onComplete: () => {
            i.onComplete && i.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const i = this.getStack();
      i && i.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ah), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: s, target: l, layout: c, latestValues: u } = i;
      if (!(!s || !l || !c)) {
        if (this !== i && this.layout && c && Eg(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || ut();
          const d = tr(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + d;
          const m = tr(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + m;
        }
        lr(s, l), _o(s, u), Ma(this.projectionDeltaWithTransform, this.layoutCorrected, s, u);
      }
    }
    registerSharedNode(i, s) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new $D()), this.sharedNodes.get(i).add(s);
      const c = s.options.initialPromotionConfig;
      s.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(s) : void 0
      });
    }
    isLead() {
      const i = this.getStack();
      return i ? i.lead === this : !0;
    }
    getLead() {
      var i;
      const { layoutId: s } = this.options;
      return s ? ((i = this.getStack()) === null || i === void 0 ? void 0 : i.lead) || this : this;
    }
    getPrevLead() {
      var i;
      const { layoutId: s } = this.options;
      return s ? (i = this.getStack()) === null || i === void 0 ? void 0 : i.prevLead : void 0;
    }
    getStack() {
      const { layoutId: i } = this.options;
      if (i)
        return this.root.sharedNodes.get(i);
    }
    promote({ needsReset: i, transition: s, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), i && (this.projectionDelta = void 0, this.needsReset = !0), s && this.setOptions({ transition: s });
    }
    relegate() {
      const i = this.getStack();
      return i ? i.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: i } = this.options;
      if (!i)
        return;
      let s = !1;
      const { latestValues: l } = i;
      if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s)
        return;
      const c = {};
      for (let u = 0; u < Rh.length; u++) {
        const d = "rotate" + Rh[u];
        l[d] && (c[d] = l[d], i.setStaticValue(d, 0));
      }
      i.render();
      for (const u in c)
        i.setStaticValue(u, c[u]);
      i.scheduleRender();
    }
    getProjectionStyles(i = {}) {
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
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = as(i.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const w = {};
        return this.options.layoutId && (w.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, w.pointerEvents = as(i.pointerEvents) || ""), this.hasProjected && !Mn(this.latestValues) && (w.transform = u ? u({}, "") : "none", this.hasProjected = !1), w;
      }
      const m = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), c.transform = Ch(this.projectionDeltaWithTransform, this.treeScale, m), u && (c.transform = u(m, c.transform));
      const { x: y, y: x } = this.projectionDelta;
      c.transformOrigin = `${y.origin * 100}% ${x.origin * 100}% 0`, d.animationValues ? c.opacity = d === this ? (l = (s = m.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : m.opacityExit : c.opacity = d === this ? m.opacity !== void 0 ? m.opacity : "" : m.opacityExit !== void 0 ? m.opacityExit : 0;
      for (const w in _s) {
        if (m[w] === void 0)
          continue;
        const { correct: _, applyTo: T } = _s[w], P = c.transform === "none" ? m[w] : _(m[w], d);
        if (T) {
          const k = T.length;
          for (let $ = 0; $ < k; $++)
            c[T[$]] = P;
        } else
          c[w] = P;
      }
      return this.options.layoutId && (c.pointerEvents = d === this ? as(i.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var s;
        return (s = i.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(Dh), this.root.sharedNodes.clear();
    }
  };
}
function WD(e) {
  e.updateLayout();
}
function UD(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: a } = e.options, i = r.source !== e.layout.source;
    a === "size" ? Er((d) => {
      const m = i ? r.measuredBox[d] : r.layoutBox[d], y = tr(m);
      m.min = n[d].min, m.max = m.min + y;
    }) : Eg(a, r.layoutBox, n) && Er((d) => {
      const m = i ? r.measuredBox[d] : r.layoutBox[d], y = tr(n[d]);
      m.max = m.min + y, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + y);
    });
    const s = xo();
    Ma(s, n, r.layoutBox);
    const l = xo();
    i ? Ma(l, e.applyTransform(o, !0), r.measuredBox) : Ma(l, n, r.layoutBox);
    const c = !_g(s);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: m, layout: y } = d;
        if (m && y) {
          const x = ut();
          Ia(x, r.layoutBox, m.layoutBox);
          const w = ut();
          Ia(w, n, y.layoutBox), Pg(x, w) || (u = !0), d.options.layoutRoot && (e.relativeTarget = w, e.relativeTargetOrigin = x, e.relativeParent = d);
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
function HD(e) {
  In.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function qD(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function YD(e) {
  e.clearSnapshot();
}
function Dh(e) {
  e.clearMeasurements();
}
function KD(e) {
  e.isLayoutDirty = !1;
}
function GD(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Mh(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function XD(e) {
  e.resolveTargetDelta();
}
function ZD(e) {
  e.calcProjection();
}
function JD(e) {
  e.resetRotation();
}
function QD(e) {
  e.removeLeadSnapshot();
}
function Ih(e, t, r) {
  e.translate = Qe(t.translate, 0, r), e.scale = Qe(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function $h(e, t, r, n) {
  e.min = Qe(t.min, r.min, n), e.max = Qe(t.max, r.max, n);
}
function eM(e, t, r, n) {
  $h(e.x, t.x, r.x, n), $h(e.y, t.y, r.y, n);
}
function tM(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const rM = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, jh = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), Lh = jh("applewebkit/") && !jh("chrome/") ? Math.round : nt;
function Fh(e) {
  e.min = Lh(e.min), e.max = Lh(e.max);
}
function nM(e) {
  Fh(e.x), Fh(e.y);
}
function Eg(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !su(Th(t), Th(r), 0.2);
}
const oM = Og({
  attachResizeListener: (e, t) => Xr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), rc = {
  current: void 0
}, kg = Og({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!rc.current) {
      const e = new oM({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), rc.current = e;
    }
    return rc.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), aM = {
  pan: {
    Feature: wD
  },
  drag: {
    Feature: SD,
    ProjectionNode: kg,
    MeasureLayout: Sg
  }
}, iM = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function sM(e) {
  const t = iM.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
const lM = 4;
function fu(e, t, r = 1) {
  wr(r <= lM, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [n, o] = sM(e);
  if (!n)
    return;
  const a = window.getComputedStyle(t).getPropertyValue(n);
  if (a) {
    const i = a.trim();
    return cg(i) ? parseFloat(i) : i;
  } else
    return eu(o) ? fu(o, t, r + 1) : o;
}
function cM(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element))
    return { target: t, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((o) => {
    const a = o.get();
    if (!eu(a))
      return;
    const i = fu(a, n);
    i && o.set(i);
  });
  for (const o in t) {
    const a = t[o];
    if (!eu(a))
      continue;
    const i = fu(a, n);
    i && (t[o] = i, r || (r = {}), r[o] === void 0 && (r[o] = a));
  }
  return { target: t, transitionEnd: r };
}
const uM = /* @__PURE__ */ new Set([
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
]), Tg = (e) => uM.has(e), fM = (e) => Object.keys(e).some(Tg), Fi = (e) => e === ro || e === ve, Nh = (e, t) => parseFloat(e.split(", ")[t]), Bh = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return Nh(o[1], t);
  {
    const a = n.match(/^matrix\((.+)\)$/);
    return a ? Nh(a[1], e) : 0;
  }
}, dM = /* @__PURE__ */ new Set(["x", "y", "z"]), pM = ui.filter((e) => !dM.has(e));
function hM(e) {
  const t = [];
  return pM.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const Fo = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Bh(4, 13),
  y: Bh(5, 14)
};
Fo.translateX = Fo.x;
Fo.translateY = Fo.y;
const mM = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, a = getComputedStyle(o), { display: i } = a, s = {};
  i === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((c) => {
    s[c] = Fo[c](n, a);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((c) => {
    const u = t.getValue(c);
    u && u.jump(s[c]), e[c] = Fo[c](l, a);
  }), e;
}, yM = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(Tg);
  let a = [], i = !1;
  const s = [];
  if (o.forEach((l) => {
    const c = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let u = r[l], d = ua(u);
    const m = t[l];
    let y;
    if (Os(m)) {
      const x = m.length, w = m[0] === null ? 1 : 0;
      u = m[w], d = ua(u);
      for (let _ = w; _ < x && m[_] !== null; _++)
        y ? wr(ua(m[_]) === y, "All keyframes must be of the same type") : (y = ua(m[_]), wr(y === d || Fi(d) && Fi(y), "Keyframes must be of the same dimension as the current value"));
    } else
      y = ua(m);
    if (d !== y)
      if (Fi(d) && Fi(y)) {
        const x = c.get();
        typeof x == "string" && c.set(parseFloat(x)), typeof m == "string" ? t[l] = parseFloat(m) : Array.isArray(m) && y === ve && (t[l] = m.map(parseFloat));
      } else
        d != null && d.transform && (y != null && y.transform) && (u === 0 || m === 0) ? u === 0 ? c.set(y.transform(u)) : t[l] = d.transform(m) : (i || (a = hM(e), i = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], c.jump(m));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, c = mM(t, e, s);
    return a.length && a.forEach(([u, d]) => {
      e.getValue(u).set(d);
    }), e.render(), Qs && l !== null && window.scrollTo({ top: l }), { target: c, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function vM(e, t, r, n) {
  return fM(t) ? yM(e, t, r, n) : { target: t, transitionEnd: n };
}
const gM = (e, t, r, n) => {
  const o = cM(e, t, n);
  return t = o.target, n = o.transitionEnd, vM(e, t, r, n);
}, du = { current: null }, Cg = { current: !1 };
function bM() {
  if (Cg.current = !0, !!Qs)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => du.current = e.matches;
      e.addListener(t), t();
    } else
      du.current = !1;
}
function SM(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const a = t[o], i = r[o];
    if (Yt(a))
      e.addValue(o, a), Cs(n) && n.add(o), process.env.NODE_ENV === "development" && kf(a.version === "10.16.5", `Attempting to mix Framer Motion versions ${a.version} with 10.16.5 may not work as expected.`);
    else if (Yt(i))
      e.addValue(o, Lo(a, { owner: e })), Cs(n) && n.remove(o);
    else if (i !== a)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(a);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, Lo(s !== void 0 ? s : a, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const Vh = /* @__PURE__ */ new WeakMap(), Rg = Object.keys(Ya), wM = Rg.length, zh = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], xM = cf.length;
class _M {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: a }, i = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => We.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = a;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = i, this.isControllingVariants = tl(r), this.isVariantNode = pv(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in u) {
      const m = u[d];
      s[d] !== void 0 && Yt(m) && (m.set(s[d], !1), Cs(c) && c.add(d));
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
    this.current = t, Vh.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), Cg.current || bM(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : du.current, process.env.NODE_ENV !== "production" && kf(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Vh.delete(this.current), this.projection && this.projection.unmount(), rn(this.notifyUpdate), rn(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = to.has(t), o = r.on("change", (i) => {
      this.latestValues[t] = i, this.props.onUpdate && We.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0);
    }), a = r.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), a();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...r }, n, o, a) {
    let i, s;
    if (process.env.NODE_ENV !== "production" && o && n) {
      const l = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
      r.ignoreStrict ? pi(!1, l) : wr(!1, l);
    }
    for (let l = 0; l < wM; l++) {
      const c = Rg[l], { isEnabled: u, Feature: d, ProjectionNode: m, MeasureLayout: y } = Ya[c];
      m && (i = m), u(r) && (!this.features[c] && d && (this.features[c] = new d(this)), y && (s = y));
    }
    if (!this.projection && i) {
      this.projection = new i(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: c, drag: u, dragConstraints: d, layoutScroll: m, layoutRoot: y } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!u || d && So(d),
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
        initialPromotionConfig: a,
        layoutScroll: m,
        layoutRoot: y
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ut();
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
    for (let n = 0; n < zh.length; n++) {
      const o = zh[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const a = t["on" + o];
      a && (this.propEventSubscriptions[o] = this.on(o, a));
    }
    this.prevMotionValues = SM(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let n = 0; n < xM; n++) {
      const o = cf[n], a = this.props[o];
      (qa(a) || a === !1) && (r[o] = a);
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
    return n === void 0 && r !== void 0 && (n = Lo(r, { owner: this }), this.addValue(t, n)), n;
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
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = gf(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const a = this.getBaseTargetFromProps(this.props, t);
    return a !== void 0 && !Yt(a) ? a : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Ef()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class Ag extends _M {
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t];
  }
  makeTargetAnimatableFromInstance({ transition: t, transitionEnd: r, ...n }, { transformValues: o }, a) {
    let i = BA(n, t || {}, this);
    if (o && (r && (r = o(r)), n && (n = o(n)), i && (i = o(i))), a) {
      FA(this, n, i);
      const s = gM(this, n, i, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function PM(e) {
  return window.getComputedStyle(e);
}
class OM extends Ag {
  readValueFromInstance(t, r) {
    if (to.has(r)) {
      const n = xf(r);
      return n && n.default || 0;
    } else {
      const n = PM(t), o = (vv(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return gg(t, r);
  }
  build(t, r, n, o) {
    df(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return vf(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Yt(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    _v(t, r, n, o);
  }
}
class EM extends Ag {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (to.has(r)) {
      const n = xf(r);
      return n && n.default || 0;
    }
    return r = Pv.has(r) ? r : yf(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return ut();
  }
  scrapeMotionValuesFromProps(t, r) {
    return Ev(t, r);
  }
  build(t, r, n, o) {
    hf(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    Ov(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = mf(t.tagName), super.mount(t);
  }
}
const kM = (e, t) => ff(e) ? new EM(t, { enableHardwareAcceleration: !1 }) : new OM(t, { enableHardwareAcceleration: !0 }), TM = {
  layout: {
    ProjectionNode: kg,
    MeasureLayout: Sg
  }
}, CM = {
  ...eD,
  ...xR,
  ...aM,
  ...TM
}, no = /* @__PURE__ */ AC((e, t) => cR(e, t, CM, kM));
function Dg() {
  const e = De(!1);
  return sf(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function RM() {
  const e = Dg(), [t, r] = ue(0), n = pe(() => {
    e.current && r(t + 1);
  }, [t]);
  return [pe(() => We.postRender(n), [n]), t];
}
class AM extends te.Component {
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
function DM({ children: e, isPresent: t }) {
  const r = zr(), n = De(null), o = De({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return hy(() => {
    const { width: a, height: i, top: s, left: l } = o.current;
    if (t || !n.current || !a || !i)
      return;
    n.current.dataset.motionPopId = r;
    const c = document.createElement("style");
    return document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${i}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(c);
    };
  }, [t]), te.createElement(AM, { isPresent: t, childRef: n, sizeRef: o }, te.cloneElement(e, { ref: n }));
}
const nc = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: a, mode: i }) => {
  const s = kv(MM), l = zr(), c = ot(
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
    a ? void 0 : [r]
  );
  return ot(() => {
    s.forEach((u, d) => s.set(d, !1));
  }, [r]), te.useEffect(() => {
    !r && !s.size && n && n();
  }, [r]), i === "popLayout" && (e = te.createElement(DM, { isPresent: r }, e)), te.createElement(ci.Provider, { value: c }, e);
};
function MM() {
  return /* @__PURE__ */ new Map();
}
function IM(e) {
  return Me(() => () => e(), []);
}
const $n = (e) => e.key || "";
function $M(e, t) {
  e.forEach((r) => {
    const n = $n(r);
    t.set(n, r);
  });
}
function jM(e) {
  const t = [];
  return Ns.forEach(e, (r) => {
    Nu(r) && t.push(r);
  }), t;
}
const Yo = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: a = !0, mode: i = "sync" }) => {
  wr(!o, "Replace exitBeforeEnter with mode='wait'");
  const s = it(uf).forceRender || RM()[0], l = Dg(), c = jM(e);
  let u = c;
  const d = De(/* @__PURE__ */ new Map()).current, m = De(u), y = De(/* @__PURE__ */ new Map()).current, x = De(!0);
  if (sf(() => {
    x.current = !1, $M(c, y), m.current = u;
  }), IM(() => {
    x.current = !0, y.clear(), d.clear();
  }), x.current)
    return te.createElement(te.Fragment, null, u.map((P) => te.createElement(nc, { key: $n(P), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: a, mode: i }, P)));
  u = [...u];
  const w = m.current.map($n), _ = c.map($n), T = w.length;
  for (let P = 0; P < T; P++) {
    const k = w[P];
    _.indexOf(k) === -1 && !d.has(k) && d.set(k, void 0);
  }
  return i === "wait" && d.size && (u = []), d.forEach((P, k) => {
    if (_.indexOf(k) !== -1)
      return;
    const $ = y.get(k);
    if (!$)
      return;
    const S = w.indexOf(k);
    let C = P;
    if (!C) {
      const v = () => {
        d.delete(k);
        const f = Array.from(y.keys()).filter((h) => !_.includes(h));
        if (f.forEach((h) => y.delete(h)), m.current = c.filter((h) => {
          const p = $n(h);
          return (
            // filter out the node exiting
            p === k || // filter out the leftover children
            f.includes(p)
          );
        }), !d.size) {
          if (l.current === !1)
            return;
          s(), n && n();
        }
      };
      C = te.createElement(nc, { key: $n($), isPresent: !1, onExitComplete: v, custom: t, presenceAffectsLayout: a, mode: i }, $), d.set(k, C);
    }
    u.splice(S, 0, C);
  }), u = u.map((P) => {
    const k = P.key;
    return d.has(k) ? P : te.createElement(nc, { key: $n(P), isPresent: !0, presenceAffectsLayout: a, mode: i }, P);
  }), process.env.NODE_ENV !== "production" && i === "wait" && u.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), te.createElement(te.Fragment, null, d.size ? u : u.map((P) => Fs(P)));
};
var LM = {
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
}, Mg = PS((e) => {
  const {
    id: t,
    message: r,
    onCloseComplete: n,
    onRequestRemove: o,
    requestClose: a = !1,
    position: i = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: c = LM,
    toastSpacing: u = "0.5rem"
  } = e, [d, m] = ue(s), y = xD();
  Lp(() => {
    y || n == null || n();
  }, [y]), Lp(() => {
    m(s);
  }, [s]);
  const x = () => m(null), w = () => m(s), _ = () => {
    y && o();
  };
  Me(() => {
    y && a && o();
  }, [y, a, o]), xC(_, d);
  const T = ot(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: u,
      ...l
    }),
    [l, u]
  ), P = ot(() => SC(i), [i]);
  return /* @__PURE__ */ I.jsx(
    no.div,
    {
      layout: !0,
      className: "chakra-toast",
      variants: c,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: x,
      onHoverEnd: w,
      custom: { position: i },
      style: P,
      children: /* @__PURE__ */ I.jsx(
        we.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: T,
          children: Ar(r, { id: t, onClose: _ })
        }
      )
    }
  );
});
Mg.displayName = "ToastComponent";
function FM(e, t) {
  var r;
  const n = e ?? "bottom", a = {
    "top-start": { ltr: "top-left", rtl: "top-right" },
    "top-end": { ltr: "top-right", rtl: "top-left" },
    "bottom-start": { ltr: "bottom-left", rtl: "bottom-right" },
    "bottom-end": { ltr: "bottom-right", rtl: "bottom-left" }
  }[n];
  return (r = a == null ? void 0 : a[t]) != null ? r : n;
}
var Wh = {
  path: /* @__PURE__ */ I.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ I.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ I.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ I.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, Ko = Le((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: a = !1,
    children: i,
    className: s,
    __css: l,
    ...c
  } = e, u = Ye("chakra-icon", s), d = eo("Icon", e), m = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: o,
    ...l,
    ...d
  }, y = {
    ref: t,
    focusable: a,
    className: u,
    __css: m
  }, x = n ?? Wh.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ I.jsx(we.svg, { as: r, ...y, ...c });
  const w = i ?? Wh.path;
  return /* @__PURE__ */ I.jsx(we.svg, { verticalAlign: "middle", viewBox: x, ...y, ...c, children: w });
});
Ko.displayName = "Icon";
function Ig(e) {
  const {
    viewBox: t = "0 0 24 24",
    d: r,
    displayName: n,
    defaultProps: o = {}
  } = e, a = Ns.toArray(e.path), i = Le((s, l) => /* @__PURE__ */ I.jsx(Ko, { ref: l, viewBox: t, ...o, ...s, children: a.length ? a : /* @__PURE__ */ I.jsx("path", { fill: "currentColor", d: r }) }));
  return i.displayName = n, i;
}
function NM(e) {
  return /* @__PURE__ */ I.jsx(Ko, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ I.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function BM(e) {
  return /* @__PURE__ */ I.jsx(Ko, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ I.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function Uh(e) {
  return /* @__PURE__ */ I.jsx(Ko, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ I.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var VM = ii({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), mi = Le((e, t) => {
  const r = eo("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: a = "0.45s",
    emptyColor: i = "transparent",
    className: s,
    ...l
  } = Wr(e), c = Ye("chakra-spinner", s), u = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: i,
    borderLeftColor: i,
    animation: `${VM} ${a} linear infinite`,
    ...r
  };
  return /* @__PURE__ */ I.jsx(
    we.div,
    {
      ref: t,
      __css: u,
      className: c,
      ...l,
      children: n && /* @__PURE__ */ I.jsx(we.span, { srOnly: !0, children: n })
    }
  );
});
mi.displayName = "Spinner";
var [zM, Tf] = yr({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [WM, Cf] = yr({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), $g = {
  info: { icon: BM, colorScheme: "blue" },
  warning: { icon: Uh, colorScheme: "orange" },
  success: { icon: NM, colorScheme: "green" },
  error: { icon: Uh, colorScheme: "red" },
  loading: { icon: mi, colorScheme: "blue" }
};
function UM(e) {
  return $g[e].colorScheme;
}
function HM(e) {
  return $g[e].icon;
}
var jg = Le(
  function(t, r) {
    const n = Cf(), { status: o } = Tf(), a = {
      display: "inline",
      ...n.description
    };
    return /* @__PURE__ */ I.jsx(
      we.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: Ye("chakra-alert__desc", t.className),
        __css: a
      }
    );
  }
);
jg.displayName = "AlertDescription";
function Lg(e) {
  const { status: t } = Tf(), r = HM(t), n = Cf(), o = t === "loading" ? n.spinner : n.icon;
  return /* @__PURE__ */ I.jsx(
    we.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: Ye("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ I.jsx(r, { h: "100%", w: "100%" })
    }
  );
}
Lg.displayName = "AlertIcon";
var Fg = Le(
  function(t, r) {
    const n = Cf(), { status: o } = Tf();
    return /* @__PURE__ */ I.jsx(
      we.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: Ye("chakra-alert__title", t.className),
        __css: n.title
      }
    );
  }
);
Fg.displayName = "AlertTitle";
var Ng = Le(function(t, r) {
  var n;
  const { status: o = "info", addRole: a = !0, ...i } = Wr(t), s = (n = t.colorScheme) != null ? n : UM(o), l = li("Alert", { ...t, colorScheme: s }), c = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ I.jsx(zM, { value: { status: o }, children: /* @__PURE__ */ I.jsx(WM, { value: l, children: /* @__PURE__ */ I.jsx(
    we.div,
    {
      "data-status": o,
      role: a ? "alert" : void 0,
      ref: r,
      ...i,
      className: Ye("chakra-alert", t.className),
      __css: c
    }
  ) }) });
});
Ng.displayName = "Alert";
function qM(e) {
  return /* @__PURE__ */ I.jsx(Ko, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ I.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var Rf = Le(
  function(t, r) {
    const n = eo("CloseButton", t), { children: o, isDisabled: a, __css: i, ...s } = Wr(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ I.jsx(
      we.button,
      {
        type: "button",
        "aria-label": "Close",
        ref: r,
        disabled: a,
        __css: {
          ...l,
          ...n,
          ...i
        },
        ...s,
        children: o || /* @__PURE__ */ I.jsx(qM, { width: "1em", height: "1em" })
      }
    );
  }
);
Rf.displayName = "CloseButton";
var YM = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, Cr = KM(YM);
function KM(e) {
  let t = e;
  const r = /* @__PURE__ */ new Set(), n = (o) => {
    t = o(t), r.forEach((a) => a());
  };
  return {
    getState: () => t,
    subscribe: (o) => (r.add(o), () => {
      n(() => e), r.delete(o);
    }),
    /**
     * Delete a toast record at its position
     */
    removeToast: (o, a) => {
      n((i) => ({
        ...i,
        // id may be string or number
        // eslint-disable-next-line eqeqeq
        [a]: i[a].filter((s) => s.id != o)
      }));
    },
    notify: (o, a) => {
      const i = GM(o, a), { position: s, id: l } = i;
      return n((c) => {
        var u, d;
        const y = s.includes("top") ? [i, ...(u = c[s]) != null ? u : []] : [...(d = c[s]) != null ? d : [], i];
        return {
          ...c,
          [s]: y
        };
      }), l;
    },
    update: (o, a) => {
      o && n((i) => {
        const s = { ...i }, { position: l, index: c } = jp(s, o);
        return l && c !== -1 && (s[l][c] = {
          ...s[l][c],
          ...a,
          message: Bg(a)
        }), s;
      });
    },
    closeAll: ({ positions: o } = {}) => {
      n((a) => (o ?? [
        "bottom",
        "bottom-right",
        "bottom-left",
        "top",
        "top-left",
        "top-right"
      ]).reduce(
        (l, c) => (l[c] = a[c].map((u) => ({
          ...u,
          requestClose: !0
        })), l),
        { ...a }
      ));
    },
    close: (o) => {
      n((a) => {
        const i = uv(a, o);
        return i ? {
          ...a,
          [i]: a[i].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : a;
      });
    },
    isActive: (o) => !!jp(Cr.getState(), o).position
  };
}
var Hh = 0;
function GM(e, t = {}) {
  var r, n;
  Hh += 1;
  const o = (r = t.id) != null ? r : Hh, a = (n = t.position) != null ? n : "bottom";
  return {
    id: o,
    message: e,
    position: a,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Cr.removeToast(String(o), a),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var XM = (e) => {
  const {
    status: t,
    variant: r = "solid",
    id: n,
    title: o,
    isClosable: a,
    onClose: i,
    description: s,
    colorScheme: l,
    icon: c
  } = e, u = n ? {
    root: `toast-${n}`,
    title: `toast-${n}-title`,
    description: `toast-${n}-description`
  } : void 0;
  return /* @__PURE__ */ I.jsxs(
    Ng,
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
        /* @__PURE__ */ I.jsx(Lg, { children: c }),
        /* @__PURE__ */ I.jsxs(we.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ I.jsx(Fg, { id: u == null ? void 0 : u.title, children: o }),
          s && /* @__PURE__ */ I.jsx(jg, { id: u == null ? void 0 : u.description, display: "block", children: s })
        ] }),
        a && /* @__PURE__ */ I.jsx(
          Rf,
          {
            size: "sm",
            onClick: i,
            position: "absolute",
            insetEnd: 1,
            top: 1
          }
        )
      ]
    }
  );
};
function Bg(e = {}) {
  const { render: t, toastComponent: r = XM } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ I.jsx(r, { ...o, ...e });
}
function ZM(e, t) {
  const r = (o) => {
    var a;
    return {
      ...t,
      ...o,
      position: FM(
        (a = o == null ? void 0 : o.position) != null ? a : t == null ? void 0 : t.position,
        e
      )
    };
  }, n = (o) => {
    const a = r(o), i = Bg(a);
    return Cr.notify(i, a);
  };
  return n.update = (o, a) => {
    Cr.update(o, r(a));
  }, n.promise = (o, a) => {
    const i = n({
      ...a.loading,
      status: "loading",
      duration: null
    });
    o.then(
      (s) => n.update(i, {
        status: "success",
        duration: 5e3,
        ...Ar(a.success, s)
      })
    ).catch(
      (s) => n.update(i, {
        status: "error",
        duration: 5e3,
        ...Ar(a.error, s)
      })
    );
  }, n.closeAll = Cr.closeAll, n.close = Cr.close, n.isActive = Cr.isActive, n;
}
var [JM, QM] = yr({
  name: "ToastOptionsContext",
  strict: !1
}), eI = (e) => {
  const t = OS(
    Cr.subscribe,
    Cr.getState,
    Cr.getState
  ), {
    motionVariants: r,
    component: n = Mg,
    portalProps: o
  } = e, i = Object.keys(t).map((s) => {
    const l = t[s];
    return /* @__PURE__ */ I.jsx(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${s}`,
        id: `chakra-toast-manager-${s}`,
        style: wC(s),
        children: /* @__PURE__ */ I.jsx(Yo, { initial: !1, children: l.map((c) => /* @__PURE__ */ I.jsx(
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
  return /* @__PURE__ */ I.jsx(qo, { ...o, children: i });
};
function Af(e) {
  const { theme: t } = jy(), r = QM();
  return ot(
    () => ZM(t.direction, {
      ...r,
      ...e
    }),
    [e, t.direction, r]
  );
}
var tI = (e) => function({
  children: r,
  theme: n = e,
  toastOptions: o,
  ...a
}) {
  return /* @__PURE__ */ I.jsxs(gC, { theme: n, ...a, children: [
    /* @__PURE__ */ I.jsx(JM, { value: o == null ? void 0 : o.defaultOptions, children: r }),
    /* @__PURE__ */ I.jsx(eI, { ...o })
  ] });
}, rI = tI(BT);
function nI(e, t) {
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
function nn(...e) {
  return (t) => {
    e.forEach((r) => {
      nI(r, t);
    });
  };
}
function oI(...e) {
  return ot(() => nn(...e), e);
}
var qh = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, Hn = {
  enter: {
    duration: 0.2,
    ease: qh.easeOut
  },
  exit: {
    duration: 0.1,
    ease: qh.easeIn
  }
}, qn = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, aI = {
  enter: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 1,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : qn.enter(Hn.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 0,
      transition: (n = e == null ? void 0 : e.exit) != null ? n : qn.exit(Hn.exit, r),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, Vg = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: aI
}, iI = Qn(function(t, r) {
  const {
    unmountOnExit: n,
    in: o,
    className: a,
    transition: i,
    transitionEnd: s,
    delay: l,
    ...c
  } = t, u = o || n ? "enter" : "exit", d = n ? o && n : !0, m = { transition: i, transitionEnd: s, delay: l };
  return /* @__PURE__ */ I.jsx(Yo, { custom: m, children: d && /* @__PURE__ */ I.jsx(
    no.div,
    {
      ref: r,
      className: Ye("chakra-fade", a),
      custom: m,
      ...Vg,
      animate: u,
      ...c
    }
  ) });
});
iI.displayName = "Fade";
var sI = {
  exit: ({ reverse: e, initialScale: t, transition: r, transitionEnd: n, delay: o }) => {
    var a;
    return {
      opacity: 0,
      ...e ? { scale: t, transitionEnd: n == null ? void 0 : n.exit } : { transitionEnd: { scale: t, ...n == null ? void 0 : n.exit } },
      transition: (a = r == null ? void 0 : r.exit) != null ? a : qn.exit(Hn.exit, o)
    };
  },
  enter: ({ transitionEnd: e, transition: t, delay: r }) => {
    var n;
    return {
      opacity: 1,
      scale: 1,
      transition: (n = t == null ? void 0 : t.enter) != null ? n : qn.enter(Hn.enter, r),
      transitionEnd: e == null ? void 0 : e.enter
    };
  }
}, zg = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: sI
}, lI = Qn(
  function(t, r) {
    const {
      unmountOnExit: n,
      in: o,
      reverse: a = !0,
      initialScale: i = 0.95,
      className: s,
      transition: l,
      transitionEnd: c,
      delay: u,
      ...d
    } = t, m = n ? o && n : !0, y = o || n ? "enter" : "exit", x = { initialScale: i, reverse: a, transition: l, transitionEnd: c, delay: u };
    return /* @__PURE__ */ I.jsx(Yo, { custom: x, children: m && /* @__PURE__ */ I.jsx(
      no.div,
      {
        ref: r,
        className: Ye("chakra-offset-slide", s),
        ...zg,
        animate: y,
        custom: x,
        ...d
      }
    ) });
  }
);
lI.displayName = "ScaleFade";
var cI = {
  initial: ({ offsetX: e, offsetY: t, transition: r, transitionEnd: n, delay: o }) => {
    var a;
    return {
      opacity: 0,
      x: e,
      y: t,
      transition: (a = r == null ? void 0 : r.exit) != null ? a : qn.exit(Hn.exit, o),
      transitionEnd: n == null ? void 0 : n.exit
    };
  },
  enter: ({ transition: e, transitionEnd: t, delay: r }) => {
    var n;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : qn.enter(Hn.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ offsetY: e, offsetX: t, transition: r, transitionEnd: n, reverse: o, delay: a }) => {
    var i;
    const s = { x: t, y: e };
    return {
      opacity: 0,
      transition: (i = r == null ? void 0 : r.exit) != null ? i : qn.exit(Hn.exit, a),
      ...o ? { ...s, transitionEnd: n == null ? void 0 : n.exit } : { transitionEnd: { ...s, ...n == null ? void 0 : n.exit } }
    };
  }
}, _a = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: cI
}, uI = Qn(
  function(t, r) {
    const {
      unmountOnExit: n,
      in: o,
      reverse: a = !0,
      className: i,
      offsetX: s = 0,
      offsetY: l = 8,
      transition: c,
      transitionEnd: u,
      delay: d,
      ...m
    } = t, y = n ? o && n : !0, x = o || n ? "enter" : "exit", w = {
      offsetX: s,
      offsetY: l,
      reverse: a,
      transition: c,
      transitionEnd: u,
      delay: d
    };
    return /* @__PURE__ */ I.jsx(Yo, { custom: w, children: y && /* @__PURE__ */ I.jsx(
      no.div,
      {
        ref: r,
        className: Ye("chakra-offset-slide", i),
        custom: w,
        ..._a,
        animate: x,
        ...m
      }
    ) });
  }
);
uI.displayName = "SlideFade";
var pu = Le(function(t, r) {
  const { htmlWidth: n, htmlHeight: o, alt: a, ...i } = t;
  return /* @__PURE__ */ I.jsx("img", { width: n, height: o, ref: r, alt: a, ...i });
});
pu.displayName = "NativeImage";
function fI(e) {
  const {
    loading: t,
    src: r,
    srcSet: n,
    onLoad: o,
    onError: a,
    crossOrigin: i,
    sizes: s,
    ignoreFallback: l
  } = e, [c, u] = ue("pending");
  Me(() => {
    u(r ? "loading" : "pending");
  }, [r]);
  const d = De(), m = pe(() => {
    if (!r)
      return;
    y();
    const x = new Image();
    x.src = r, i && (x.crossOrigin = i), n && (x.srcset = n), s && (x.sizes = s), t && (x.loading = t), x.onload = (w) => {
      y(), u("loaded"), o == null || o(w);
    }, x.onerror = (w) => {
      y(), u("failed"), a == null || a(w);
    }, d.current = x;
  }, [r, i, n, s, o, a, t]), y = () => {
    d.current && (d.current.onload = null, d.current.onerror = null, d.current = null);
  };
  return Va(() => {
    if (!l)
      return c === "loading" && m(), () => {
        y();
      };
  }, [c, m, l]), l ? "loaded" : c;
}
var dI = (e, t) => e !== "loaded" && t === "beforeLoadOrError" || e === "failed" && t === "onError";
function pI(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
var Df = Le(function(t, r) {
  const {
    fallbackSrc: n,
    fallback: o,
    src: a,
    srcSet: i,
    align: s,
    fit: l,
    loading: c,
    ignoreFallback: u,
    crossOrigin: d,
    fallbackStrategy: m = "beforeLoadOrError",
    referrerPolicy: y,
    ...x
  } = t, w = n !== void 0 || o !== void 0, _ = c != null || // use can opt out of fallback image
  u || // if the user doesn't provide any kind of fallback we should ignore it
  !w, T = fI({
    ...t,
    crossOrigin: d,
    ignoreFallback: _
  }), P = dI(T, m), k = {
    ref: r,
    objectFit: l,
    objectPosition: s,
    ..._ ? x : pI(x, ["onError", "onLoad"])
  };
  return P ? o || /* @__PURE__ */ I.jsx(
    we.img,
    {
      as: pu,
      className: "chakra-image__placeholder",
      src: n,
      ...k
    }
  ) : /* @__PURE__ */ I.jsx(
    we.img,
    {
      as: pu,
      src: a,
      srcSet: i,
      crossOrigin: d,
      loading: c,
      referrerPolicy: y,
      className: "chakra-image",
      ...k
    }
  );
});
Df.displayName = "Image";
function hI(e) {
  return Ns.toArray(e).filter(
    (t) => Nu(t)
  );
}
var [s5, mI] = yr({
  strict: !1,
  name: "ButtonGroupContext"
});
function yI(e) {
  const [t, r] = ue(!e);
  return { ref: pe((a) => {
    a && r(a.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function hu(e) {
  const { children: t, className: r, ...n } = e, o = Nu(t) ? Fs(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, a = Ye("chakra-button__icon", r);
  return /* @__PURE__ */ I.jsx(
    we.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...n,
      className: a,
      children: o
    }
  );
}
hu.displayName = "ButtonIcon";
function mu(e) {
  const {
    label: t,
    placement: r,
    spacing: n = "0.5rem",
    children: o = /* @__PURE__ */ I.jsx(mi, { color: "currentColor", width: "1em", height: "1em" }),
    className: a,
    __css: i,
    ...s
  } = e, l = Ye("chakra-button__spinner", a), c = r === "start" ? "marginEnd" : "marginStart", u = ot(
    () => ({
      display: "flex",
      alignItems: "center",
      position: t ? "relative" : "absolute",
      [c]: t ? n : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...i
    }),
    [i, t, c, n]
  );
  return /* @__PURE__ */ I.jsx(we.div, { className: l, ...s, __css: u, children: o });
}
mu.displayName = "ButtonSpinner";
var fr = Le((e, t) => {
  const r = mI(), n = eo("Button", { ...r, ...e }), {
    isDisabled: o = r == null ? void 0 : r.isDisabled,
    isLoading: a,
    isActive: i,
    children: s,
    leftIcon: l,
    rightIcon: c,
    loadingText: u,
    iconSpacing: d = "0.5rem",
    type: m,
    spinner: y,
    spinnerPlacement: x = "start",
    className: w,
    as: _,
    ...T
  } = Wr(e), P = ot(() => {
    const C = { ...n == null ? void 0 : n._focus, zIndex: 1 };
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
      ...!!r && { _focus: C }
    };
  }, [n, r]), { ref: k, type: $ } = yI(_), S = { rightIcon: c, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ I.jsxs(
    we.button,
    {
      ref: oI(t, k),
      as: _,
      type: m ?? $,
      "data-active": qe(i),
      "data-loading": qe(a),
      __css: P,
      className: Ye("chakra-button", w),
      ...T,
      disabled: o || a,
      children: [
        a && x === "start" && /* @__PURE__ */ I.jsx(
          mu,
          {
            className: "chakra-button__spinner--start",
            label: u,
            placement: "start",
            spacing: d,
            children: y
          }
        ),
        a ? u || /* @__PURE__ */ I.jsx(we.span, { opacity: 0, children: /* @__PURE__ */ I.jsx(Yh, { ...S }) }) : /* @__PURE__ */ I.jsx(Yh, { ...S }),
        a && x === "end" && /* @__PURE__ */ I.jsx(
          mu,
          {
            className: "chakra-button__spinner--end",
            label: u,
            placement: "end",
            spacing: d,
            children: y
          }
        )
      ]
    }
  );
});
fr.displayName = "Button";
function Yh(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e;
  return /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
    t && /* @__PURE__ */ I.jsx(hu, { marginEnd: o, children: t }),
    n,
    r && /* @__PURE__ */ I.jsx(hu, { marginStart: o, children: r })
  ] });
}
var [vI, Wg] = yr({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [gI, al] = yr({
  strict: !1,
  name: "FormControlContext"
});
function bI(e) {
  const {
    id: t,
    isRequired: r,
    isInvalid: n,
    isDisabled: o,
    isReadOnly: a,
    ...i
  } = e, s = zr(), l = t || `field-${s}`, c = `${l}-label`, u = `${l}-feedback`, d = `${l}-helptext`, [m, y] = ue(!1), [x, w] = ue(!1), [_, T] = ue(!1), P = pe(
    (v = {}, f = null) => ({
      id: d,
      ...v,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: nn(f, (h) => {
        h && w(!0);
      })
    }),
    [d]
  ), k = pe(
    (v = {}, f = null) => ({
      ...v,
      ref: f,
      "data-focus": qe(_),
      "data-disabled": qe(o),
      "data-invalid": qe(n),
      "data-readonly": qe(a),
      id: v.id !== void 0 ? v.id : c,
      htmlFor: v.htmlFor !== void 0 ? v.htmlFor : l
    }),
    [l, o, _, n, a, c]
  ), $ = pe(
    (v = {}, f = null) => ({
      id: u,
      ...v,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: nn(f, (h) => {
        h && y(!0);
      }),
      "aria-live": "polite"
    }),
    [u]
  ), S = pe(
    (v = {}, f = null) => ({
      ...v,
      ...i,
      ref: f,
      role: "group",
      "data-focus": qe(_),
      "data-disabled": qe(o),
      "data-invalid": qe(n),
      "data-readonly": qe(a)
    }),
    [i, o, _, n, a]
  ), C = pe(
    (v = {}, f = null) => ({
      ...v,
      ref: f,
      role: "presentation",
      "aria-hidden": !0,
      children: v.children || "*"
    }),
    []
  );
  return {
    isRequired: !!r,
    isInvalid: !!n,
    isReadOnly: !!a,
    isDisabled: !!o,
    isFocused: !!_,
    onFocus: () => T(!0),
    onBlur: () => T(!1),
    hasFeedbackText: m,
    setHasFeedbackText: y,
    hasHelpText: x,
    setHasHelpText: w,
    id: l,
    labelId: c,
    feedbackId: u,
    helpTextId: d,
    htmlProps: i,
    getHelpTextProps: P,
    getErrorMessageProps: $,
    getRootProps: S,
    getLabelProps: k,
    getRequiredIndicatorProps: C
  };
}
var Ug = Le(
  function(t, r) {
    const n = li("Form", t), o = Wr(t), {
      getRootProps: a,
      htmlProps: i,
      ...s
    } = bI(o), l = Ye("chakra-form-control", t.className);
    return /* @__PURE__ */ I.jsx(gI, { value: s, children: /* @__PURE__ */ I.jsx(vI, { value: n, children: /* @__PURE__ */ I.jsx(
      we.div,
      {
        ...a({}, r),
        className: l,
        __css: n.container
      }
    ) }) });
  }
);
Ug.displayName = "FormControl";
var SI = Le(
  function(t, r) {
    const n = al(), o = Wg(), a = Ye("chakra-form__helper-text", t.className);
    return /* @__PURE__ */ I.jsx(
      we.div,
      {
        ...n == null ? void 0 : n.getHelpTextProps(t, r),
        __css: o.helperText,
        className: a
      }
    );
  }
);
SI.displayName = "FormHelperText";
var Hg = Le(function(t, r) {
  var n;
  const o = eo("FormLabel", t), a = Wr(t), {
    className: i,
    children: s,
    requiredIndicator: l = /* @__PURE__ */ I.jsx(qg, {}),
    optionalIndicator: c = null,
    ...u
  } = a, d = al(), m = (n = d == null ? void 0 : d.getLabelProps(u, r)) != null ? n : { ref: r, ...u };
  return /* @__PURE__ */ I.jsxs(
    we.label,
    {
      ...m,
      className: Ye("chakra-form__label", a.className),
      __css: {
        display: "block",
        textAlign: "start",
        ...o
      },
      children: [
        s,
        d != null && d.isRequired ? l : c
      ]
    }
  );
});
Hg.displayName = "FormLabel";
var qg = Le(
  function(t, r) {
    const n = al(), o = Wg();
    if (!(n != null && n.isRequired))
      return null;
    const a = Ye("chakra-form__required-indicator", t.className);
    return /* @__PURE__ */ I.jsx(
      we.span,
      {
        ...n == null ? void 0 : n.getRequiredIndicatorProps(t, r),
        __css: o.requiredIndicator,
        className: a
      }
    );
  }
);
qg.displayName = "RequiredIndicator";
var wI = () => typeof document < "u", Kh = !1, yi = null, Gn = !1, yu = !1, vu = /* @__PURE__ */ new Set();
function Mf(e, t) {
  vu.forEach((r) => r(e, t));
}
var xI = typeof window < "u" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : !1;
function _I(e) {
  return !(e.metaKey || !xI && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Gh(e) {
  Gn = !0, _I(e) && (yi = "keyboard", Mf("keyboard", e));
}
function io(e) {
  if (yi = "pointer", e.type === "mousedown" || e.type === "pointerdown") {
    Gn = !0;
    const t = e.composedPath ? e.composedPath()[0] : e.target;
    let r = !1;
    try {
      r = t.matches(":focus-visible");
    } catch {
    }
    if (r)
      return;
    Mf("pointer", e);
  }
}
function PI(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : e.detail === 0 && !e.pointerType;
}
function OI(e) {
  PI(e) && (Gn = !0, yi = "virtual");
}
function EI(e) {
  e.target === window || e.target === document || (!Gn && !yu && (yi = "virtual", Mf("virtual", e)), Gn = !1, yu = !1);
}
function kI() {
  Gn = !1, yu = !0;
}
function Xh() {
  return yi !== "pointer";
}
function TI() {
  if (!wI() || Kh)
    return;
  const { focus: e } = HTMLElement.prototype;
  HTMLElement.prototype.focus = function(...r) {
    Gn = !0, e.apply(this, r);
  }, document.addEventListener("keydown", Gh, !0), document.addEventListener("keyup", Gh, !0), document.addEventListener("click", OI, !0), window.addEventListener("focus", EI, !0), window.addEventListener("blur", kI, !1), typeof PointerEvent < "u" ? (document.addEventListener("pointerdown", io, !0), document.addEventListener("pointermove", io, !0), document.addEventListener("pointerup", io, !0)) : (document.addEventListener("mousedown", io, !0), document.addEventListener("mousemove", io, !0), document.addEventListener("mouseup", io, !0)), Kh = !0;
}
function CI(e) {
  TI(), e(Xh());
  const t = () => e(Xh());
  return vu.add(t), () => {
    vu.delete(t);
  };
}
function oc(e, t, r, n) {
  const o = xs(r);
  return Me(() => {
    const a = typeof e == "function" ? e() : e ?? document;
    if (!(!r || !a))
      return a.addEventListener(t, o, n), () => {
        a.removeEventListener(t, o, n);
      };
  }, [t, e, n, o, r]), () => {
    const a = typeof e == "function" ? e() : e ?? document;
    a == null || a.removeEventListener(t, o, n);
  };
}
function RI(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var gu = { exports: {} }, ac, Zh;
function If() {
  if (Zh)
    return ac;
  Zh = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ac = e, ac;
}
var ic, Jh;
function AI() {
  if (Jh)
    return ic;
  Jh = 1;
  var e = If();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ic = function() {
    function n(i, s, l, c, u, d) {
      if (d !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, ic;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var sc, Qh;
function DI() {
  if (Qh)
    return sc;
  Qh = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var i = {}, s = 0; s < 10; s++)
        i["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(i).map(function(u) {
        return i[u];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        c[u] = u;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return sc = o() ? Object.assign : function(a, i) {
    for (var s, l = n(a), c, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var d in s)
        t.call(s, d) && (l[d] = s[d]);
      if (e) {
        c = e(s);
        for (var m = 0; m < c.length; m++)
          r.call(s, c[m]) && (l[c[m]] = s[c[m]]);
      }
    }
    return l;
  }, sc;
}
var lc, em;
function Yg() {
  return em || (em = 1, lc = Function.call.bind(Object.prototype.hasOwnProperty)), lc;
}
var cc, tm;
function MI() {
  if (tm)
    return cc;
  tm = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = If(), r = {}, n = Yg();
    e = function(a) {
      var i = "Warning: " + a;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(a, i, s, l, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in a)
        if (n(a, u)) {
          var d;
          try {
            if (typeof a[u] != "function") {
              var m = Error(
                (l || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            d = a[u](i, u, l, s, null, t);
          } catch (x) {
            d = x;
          }
          if (d && !(d instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var y = c ? c() : "";
            e(
              "Failed " + s + " type: " + d.message + (y ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, cc = o, cc;
}
var uc, rm;
function II() {
  if (rm)
    return uc;
  rm = 1;
  var e = Uu, t = DI(), r = If(), n = Yg(), o = MI(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return uc = function(s, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(E) {
      var O = E && (c && E[c] || E[u]);
      if (typeof O == "function")
        return O;
    }
    var m = "<<anonymous>>", y = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: P(),
      arrayOf: k,
      element: $(),
      elementType: S(),
      instanceOf: C,
      node: p(),
      objectOf: f,
      oneOf: v,
      oneOfType: h,
      shape: A,
      exact: D
    };
    function x(E, O) {
      return E === O ? E !== 0 || 1 / E === 1 / O : E !== E && O !== O;
    }
    function w(E, O) {
      this.message = E, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    w.prototype = Error.prototype;
    function _(E) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, B = 0;
      function K(Z, Q, re, J, oe, ae, ne) {
        if (J = J || m, ae = ae || re, ne !== r) {
          if (l) {
            var G = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw G.name = "Invariant Violation", G;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ge = J + ":" + re;
            !O[ge] && // Avoid spamming the console because they are often not actionable except for lib authors
            B < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + ae + "` prop on `" + J + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[ge] = !0, B++);
          }
        }
        return Q[re] == null ? Z ? Q[re] === null ? new w("The " + oe + " `" + ae + "` is marked as required " + ("in `" + J + "`, but its value is `null`.")) : new w("The " + oe + " `" + ae + "` is marked as required in " + ("`" + J + "`, but its value is `undefined`.")) : null : E(Q, re, J, oe, ae);
      }
      var Y = K.bind(null, !1);
      return Y.isRequired = K.bind(null, !0), Y;
    }
    function T(E) {
      function O(B, K, Y, Z, Q, re) {
        var J = B[K], oe = U(J);
        if (oe !== E) {
          var ae = L(J);
          return new w(
            "Invalid " + Z + " `" + Q + "` of type " + ("`" + ae + "` supplied to `" + Y + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return _(O);
    }
    function P() {
      return _(i);
    }
    function k(E) {
      function O(B, K, Y, Z, Q) {
        if (typeof E != "function")
          return new w("Property `" + Q + "` of component `" + Y + "` has invalid PropType notation inside arrayOf.");
        var re = B[K];
        if (!Array.isArray(re)) {
          var J = U(re);
          return new w("Invalid " + Z + " `" + Q + "` of type " + ("`" + J + "` supplied to `" + Y + "`, expected an array."));
        }
        for (var oe = 0; oe < re.length; oe++) {
          var ae = E(re, oe, Y, Z, Q + "[" + oe + "]", r);
          if (ae instanceof Error)
            return ae;
        }
        return null;
      }
      return _(O);
    }
    function $() {
      function E(O, B, K, Y, Z) {
        var Q = O[B];
        if (!s(Q)) {
          var re = U(Q);
          return new w("Invalid " + Y + " `" + Z + "` of type " + ("`" + re + "` supplied to `" + K + "`, expected a single ReactElement."));
        }
        return null;
      }
      return _(E);
    }
    function S() {
      function E(O, B, K, Y, Z) {
        var Q = O[B];
        if (!e.isValidElementType(Q)) {
          var re = U(Q);
          return new w("Invalid " + Y + " `" + Z + "` of type " + ("`" + re + "` supplied to `" + K + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return _(E);
    }
    function C(E) {
      function O(B, K, Y, Z, Q) {
        if (!(B[K] instanceof E)) {
          var re = E.name || m, J = V(B[K]);
          return new w("Invalid " + Z + " `" + Q + "` of type " + ("`" + J + "` supplied to `" + Y + "`, expected ") + ("instance of `" + re + "`."));
        }
        return null;
      }
      return _(O);
    }
    function v(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), i;
      function O(B, K, Y, Z, Q) {
        for (var re = B[K], J = 0; J < E.length; J++)
          if (x(re, E[J]))
            return null;
        var oe = JSON.stringify(E, function(ne, G) {
          var ge = L(G);
          return ge === "symbol" ? String(G) : G;
        });
        return new w("Invalid " + Z + " `" + Q + "` of value `" + String(re) + "` " + ("supplied to `" + Y + "`, expected one of " + oe + "."));
      }
      return _(O);
    }
    function f(E) {
      function O(B, K, Y, Z, Q) {
        if (typeof E != "function")
          return new w("Property `" + Q + "` of component `" + Y + "` has invalid PropType notation inside objectOf.");
        var re = B[K], J = U(re);
        if (J !== "object")
          return new w("Invalid " + Z + " `" + Q + "` of type " + ("`" + J + "` supplied to `" + Y + "`, expected an object."));
        for (var oe in re)
          if (n(re, oe)) {
            var ae = E(re, oe, Y, Z, Q + "." + oe, r);
            if (ae instanceof Error)
              return ae;
          }
        return null;
      }
      return _(O);
    }
    function h(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var O = 0; O < E.length; O++) {
        var B = E[O];
        if (typeof B != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + j(B) + " at index " + O + "."
          ), i;
      }
      function K(Y, Z, Q, re, J) {
        for (var oe = [], ae = 0; ae < E.length; ae++) {
          var ne = E[ae], G = ne(Y, Z, Q, re, J, r);
          if (G == null)
            return null;
          G.data && n(G.data, "expectedType") && oe.push(G.data.expectedType);
        }
        var ge = oe.length > 0 ? ", expected one of type [" + oe.join(", ") + "]" : "";
        return new w("Invalid " + re + " `" + J + "` supplied to " + ("`" + Q + "`" + ge + "."));
      }
      return _(K);
    }
    function p() {
      function E(O, B, K, Y, Z) {
        return R(O[B]) ? null : new w("Invalid " + Y + " `" + Z + "` supplied to " + ("`" + K + "`, expected a ReactNode."));
      }
      return _(E);
    }
    function g(E, O, B, K, Y) {
      return new w(
        (E || "React class") + ": " + O + " type `" + B + "." + K + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Y + "`."
      );
    }
    function A(E) {
      function O(B, K, Y, Z, Q) {
        var re = B[K], J = U(re);
        if (J !== "object")
          return new w("Invalid " + Z + " `" + Q + "` of type `" + J + "` " + ("supplied to `" + Y + "`, expected `object`."));
        for (var oe in E) {
          var ae = E[oe];
          if (typeof ae != "function")
            return g(Y, Z, Q, oe, L(ae));
          var ne = ae(re, oe, Y, Z, Q + "." + oe, r);
          if (ne)
            return ne;
        }
        return null;
      }
      return _(O);
    }
    function D(E) {
      function O(B, K, Y, Z, Q) {
        var re = B[K], J = U(re);
        if (J !== "object")
          return new w("Invalid " + Z + " `" + Q + "` of type `" + J + "` " + ("supplied to `" + Y + "`, expected `object`."));
        var oe = t({}, B[K], E);
        for (var ae in oe) {
          var ne = E[ae];
          if (n(E, ae) && typeof ne != "function")
            return g(Y, Z, Q, ae, L(ne));
          if (!ne)
            return new w(
              "Invalid " + Z + " `" + Q + "` key `" + ae + "` supplied to `" + Y + "`.\nBad object: " + JSON.stringify(B[K], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var G = ne(re, ae, Y, Z, Q + "." + ae, r);
          if (G)
            return G;
        }
        return null;
      }
      return _(O);
    }
    function R(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(R);
          if (E === null || s(E))
            return !0;
          var O = d(E);
          if (O) {
            var B = O.call(E), K;
            if (O !== E.entries) {
              for (; !(K = B.next()).done; )
                if (!R(K.value))
                  return !1;
            } else
              for (; !(K = B.next()).done; ) {
                var Y = K.value;
                if (Y && !R(Y[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function F(E, O) {
      return E === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function U(E) {
      var O = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : F(O, E) ? "symbol" : O;
    }
    function L(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var O = U(E);
      if (O === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function j(E) {
      var O = L(E);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function V(E) {
      return !E.constructor || !E.constructor.name ? m : E.constructor.name;
    }
    return y.checkPropTypes = o, y.resetWarningCache = o.resetWarningCache, y.PropTypes = y, y;
  }, uc;
}
if (process.env.NODE_ENV !== "production") {
  var $I = Uu, jI = !0;
  gu.exports = II()($I.isElement, jI);
} else
  gu.exports = AI()();
var Fe = gu.exports;
const Kg = /* @__PURE__ */ Bs(Fe);
var bu = "data-focus-lock", Gg = "data-focus-lock-disabled", LI = "data-no-focus-lock", FI = "data-autofocus-inside", NI = "data-no-autofocus";
function BI(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function VI(e, t) {
  var r = ue(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
function Xg(e, t) {
  return VI(t || null, function(r) {
    return e.forEach(function(n) {
      return BI(n, r);
    });
  });
}
var fc = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
process.env.NODE_ENV !== "production" && Kg.node;
var Rr = function() {
  return Rr = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Rr.apply(this, arguments);
};
function Zg(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function zI(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, a; n < o; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Jg(e) {
  return e;
}
function Qg(e, t) {
  t === void 0 && (t = Jg);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, n);
      return r.push(i), function() {
        r = r.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (n = !0; r.length; ) {
        var i = r;
        r = [], i.forEach(a);
      }
      r = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(a) {
      n = !0;
      var i = [];
      if (r.length) {
        var s = r;
        r = [], s.forEach(a), i = r;
      }
      var l = function() {
        var u = i;
        i = [], u.forEach(a);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), r = {
        push: function(u) {
          i.push(u), c();
        },
        filter: function(u) {
          return i = i.filter(u), r;
        }
      };
    }
  };
  return o;
}
function $f(e, t) {
  return t === void 0 && (t = Jg), Qg(e, t);
}
function eb(e) {
  e === void 0 && (e = {});
  var t = Qg(null);
  return t.options = Rr({ async: !0, ssr: !1 }, e), t;
}
var tb = function(e) {
  var t = e.sideCar, r = Zg(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return te.createElement(n, Rr({}, r));
};
tb.isSideCarExport = !0;
function WI(e, t) {
  return e.useMedium(t), tb;
}
var rb = $f({}, function(e) {
  var t = e.target, r = e.currentTarget;
  return {
    target: t,
    currentTarget: r
  };
}), nb = $f(), UI = $f(), HI = eb({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), qI = [], jf = /* @__PURE__ */ te.forwardRef(function(t, r) {
  var n, o = te.useState(), a = o[0], i = o[1], s = te.useRef(), l = te.useRef(!1), c = te.useRef(null), u = t.children, d = t.disabled, m = t.noFocusGuards, y = t.persistentFocus, x = t.crossFrame, w = t.autoFocus, _ = t.allowTextSelection, T = t.group, P = t.className, k = t.whiteList, $ = t.hasPositiveIndices, S = t.shards, C = S === void 0 ? qI : S, v = t.as, f = v === void 0 ? "div" : v, h = t.lockProps, p = h === void 0 ? {} : h, g = t.sideCar, A = t.returnFocus, D = t.focusOptions, R = t.onActivation, F = t.onDeactivation, U = te.useState({}), L = U[0], j = te.useCallback(function() {
    c.current = c.current || document && document.activeElement, s.current && R && R(s.current), l.current = !0;
  }, [R]), V = te.useCallback(function() {
    l.current = !1, F && F(s.current);
  }, [F]);
  Me(function() {
    d || (c.current = null);
  }, []);
  var E = te.useCallback(function(J) {
    var oe = c.current;
    if (oe && oe.focus) {
      var ae = typeof A == "function" ? A(oe) : A;
      if (ae) {
        var ne = typeof ae == "object" ? ae : void 0;
        c.current = null, J ? Promise.resolve().then(function() {
          return oe.focus(ne);
        }) : oe.focus(ne);
      }
    }
  }, [A]), O = te.useCallback(function(J) {
    l.current && rb.useMedium(J);
  }, []), B = nb.useMedium, K = te.useCallback(function(J) {
    s.current !== J && (s.current = J, i(J));
  }, []);
  process.env.NODE_ENV !== "production" && (typeof _ < "u" && console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default"), te.useEffect(function() {
    !s.current && typeof f != "string" && console.error("FocusLock: could not obtain ref to internal node");
  }, []));
  var Y = Kn((n = {}, n[Gg] = d && "disabled", n[bu] = T, n), p), Z = m !== !0, Q = Z && m !== "tail", re = Xg([r, K]);
  return /* @__PURE__ */ te.createElement(te.Fragment, null, Z && [
    // nearest focus guard
    te.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: fc
    }),
    // first tabbed element guard
    $ ? /* @__PURE__ */ te.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: fc
    }) : null
  ], !d && /* @__PURE__ */ te.createElement(g, {
    id: L,
    sideCar: HI,
    observed: a,
    disabled: d,
    persistentFocus: y,
    crossFrame: x,
    autoFocus: w,
    whiteList: k,
    shards: C,
    onActivation: j,
    onDeactivation: V,
    returnFocus: E,
    focusOptions: D
  }), /* @__PURE__ */ te.createElement(f, Kn({
    ref: re
  }, Y, {
    className: P,
    onBlur: B,
    onFocus: O
  }), u), Q && /* @__PURE__ */ te.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: fc
  }));
});
jf.propTypes = process.env.NODE_ENV !== "production" ? {
  children: Fe.node,
  disabled: Fe.bool,
  returnFocus: Fe.oneOfType([Fe.bool, Fe.object, Fe.func]),
  focusOptions: Fe.object,
  noFocusGuards: Fe.bool,
  hasPositiveIndices: Fe.bool,
  allowTextSelection: Fe.bool,
  autoFocus: Fe.bool,
  persistentFocus: Fe.bool,
  crossFrame: Fe.bool,
  group: Fe.string,
  className: Fe.string,
  whiteList: Fe.func,
  shards: Fe.arrayOf(Fe.any),
  as: Fe.oneOfType([Fe.string, Fe.func, Fe.object]),
  lockProps: Fe.object,
  onActivation: Fe.func,
  onDeactivation: Fe.func,
  sideCar: Fe.any.isRequired
} : {};
jf.defaultProps = {
  children: void 0,
  disabled: !1,
  returnFocus: !1,
  focusOptions: void 0,
  noFocusGuards: !1,
  autoFocus: !0,
  persistentFocus: !1,
  crossFrame: !0,
  hasPositiveIndices: void 0,
  allowTextSelection: void 0,
  group: void 0,
  className: void 0,
  whiteList: void 0,
  shards: void 0,
  as: "div",
  lockProps: {},
  onActivation: void 0,
  onDeactivation: void 0
};
const ob = jf;
function Su(e, t) {
  return Su = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Su(e, t);
}
function YI(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Su(e, t);
}
function Ga(e) {
  "@babel/helpers - typeof";
  return Ga = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ga(e);
}
function KI(e, t) {
  if (Ga(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ga(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function GI(e) {
  var t = KI(e, "string");
  return Ga(t) === "symbol" ? t : String(t);
}
function XI(e, t, r) {
  return t = GI(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function ZI(e, t) {
  if (process.env.NODE_ENV !== "production") {
    if (typeof e != "function")
      throw new Error("Expected reducePropsToState to be a function.");
    if (typeof t != "function")
      throw new Error("Expected handleStateChangeOnClient to be a function.");
  }
  function r(n) {
    return n.displayName || n.name || "Component";
  }
  return function(o) {
    if (process.env.NODE_ENV !== "production" && typeof o != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    var a = [], i;
    function s() {
      i = e(a.map(function(c) {
        return c.props;
      })), t(i);
    }
    var l = /* @__PURE__ */ function(c) {
      YI(u, c);
      function u() {
        return c.apply(this, arguments) || this;
      }
      u.peek = function() {
        return i;
      };
      var d = u.prototype;
      return d.componentDidMount = function() {
        a.push(this), s();
      }, d.componentDidUpdate = function() {
        s();
      }, d.componentWillUnmount = function() {
        var y = a.indexOf(this);
        a.splice(y, 1), s();
      }, d.render = function() {
        return /* @__PURE__ */ ke.createElement(o, this.props);
      }, u;
    }(ES);
    return XI(l, "displayName", "SideEffect(" + r(o) + ")"), l;
  };
}
var Ur = function(e) {
  for (var t = Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}, As = function(e) {
  return Array.isArray(e) ? e : [e];
}, ab = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, JI = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, ib = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, sb = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, QI = function(e, t) {
  return !e || sb(e) || !JI(e) && t(ib(e));
}, lb = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = QI(t, lb.bind(void 0, e));
  return e.set(t, n), n;
}, e$ = function(e, t) {
  return e && !sb(e) ? n$(e) ? t(ib(e)) : !1 : !0;
}, cb = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = e$(t, cb.bind(void 0, e));
  return e.set(t, n), n;
}, ub = function(e) {
  return e.dataset;
}, t$ = function(e) {
  return e.tagName === "BUTTON";
}, fb = function(e) {
  return e.tagName === "INPUT";
}, db = function(e) {
  return fb(e) && e.type === "radio";
}, r$ = function(e) {
  return !((fb(e) || t$(e)) && (e.type === "hidden" || e.disabled));
}, n$ = function(e) {
  var t = e.getAttribute(NI);
  return ![!0, "true", ""].includes(t);
}, Lf = function(e) {
  var t;
  return !!(e && (!((t = ub(e)) === null || t === void 0) && t.focusGuard));
}, Ds = function(e) {
  return !Lf(e);
}, o$ = function(e) {
  return !!e;
}, a$ = function(e, t) {
  var r = e.tabIndex - t.tabIndex, n = e.index - t.index;
  if (r) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return r || n;
}, pb = function(e, t, r) {
  return Ur(e).map(function(n, o) {
    return {
      node: n,
      index: o,
      tabIndex: r && n.tabIndex === -1 ? (n.dataset || {}).focusGuard ? 0 : -1 : n.tabIndex
    };
  }).filter(function(n) {
    return !t || n.tabIndex >= 0;
  }).sort(a$);
}, i$ = [
  "button:enabled",
  "select:enabled",
  "textarea:enabled",
  "input:enabled",
  // elements with explicit roles will also use explicit tabindex
  // '[role="button"]',
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[tabindex]",
  "[contenteditable]",
  "[autofocus]"
], Ff = i$.join(","), s$ = "".concat(Ff, ", [data-focus-guard]"), hb = function(e, t) {
  return Ur((e.shadowRoot || e).children).reduce(function(r, n) {
    return r.concat(n.matches(t ? s$ : Ff) ? [n] : [], hb(n));
  }, []);
}, l$ = function(e, t) {
  var r;
  return e instanceof HTMLIFrameElement && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? il([e.contentDocument.body], t) : [e];
}, il = function(e, t) {
  return e.reduce(function(r, n) {
    var o, a = hb(n, t), i = (o = []).concat.apply(o, a.map(function(s) {
      return l$(s, t);
    }));
    return r.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      i,
      // add if node is tabbable itself
      n.parentNode ? Ur(n.parentNode.querySelectorAll(Ff)).filter(function(s) {
        return s === n;
      }) : []
    );
  }, []);
}, c$ = function(e) {
  var t = e.querySelectorAll("[".concat(FI, "]"));
  return Ur(t).map(function(r) {
    return il([r]);
  }).reduce(function(r, n) {
    return r.concat(n);
  }, []);
}, Nf = function(e, t) {
  return Ur(e).filter(function(r) {
    return lb(t, r);
  }).filter(function(r) {
    return r$(r);
  });
}, nm = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), Ur(e).filter(function(r) {
    return cb(t, r);
  });
}, wu = function(e, t, r) {
  return pb(Nf(il(e, r), t), !0, r);
}, om = function(e, t) {
  return pb(Nf(il(e), t), !1);
}, u$ = function(e, t) {
  return Nf(c$(e), t);
}, Ro = function(e, t) {
  return e.shadowRoot ? Ro(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Ur(e.children).some(function(r) {
    var n;
    if (r instanceof HTMLIFrameElement) {
      var o = (n = r.contentDocument) === null || n === void 0 ? void 0 : n.body;
      return o ? Ro(o, t) : !1;
    }
    return Ro(r, t);
  });
}, f$ = function(e) {
  for (var t = /* @__PURE__ */ new Set(), r = e.length, n = 0; n < r; n += 1)
    for (var o = n + 1; o < r; o += 1) {
      var a = e[n].compareDocumentPosition(e[o]);
      (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(n);
    }
  return e.filter(function(i, s) {
    return !t.has(s);
  });
}, mb = function(e) {
  return e.parentNode ? mb(e.parentNode) : e;
}, Bf = function(e) {
  var t = As(e);
  return t.filter(Boolean).reduce(function(r, n) {
    var o = n.getAttribute(bu);
    return r.push.apply(r, o ? f$(Ur(mb(n).querySelectorAll("[".concat(bu, '="').concat(o, '"]:not([').concat(Gg, '="disabled"])')))) : [n]), r;
  }, []);
}, d$ = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Xa = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Xa(t.shadowRoot) : t instanceof HTMLIFrameElement && d$(function() {
      return t.contentWindow.document;
    }) ? Xa(t.contentWindow.document) : t;
  }
}, p$ = function(e, t) {
  return e === t;
}, h$ = function(e, t) {
  return !!Ur(e.querySelectorAll("iframe")).some(function(r) {
    return p$(r, t);
  });
}, yb = function(e, t) {
  return t === void 0 && (t = Xa(ab(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Bf(e).some(function(r) {
    return Ro(r, t) || h$(r, t);
  });
}, m$ = function(e) {
  e === void 0 && (e = document);
  var t = Xa(e);
  return t ? Ur(e.querySelectorAll("[".concat(LI, "]"))).some(function(r) {
    return Ro(r, t);
  }) : !1;
}, y$ = function(e, t) {
  return t.filter(db).filter(function(r) {
    return r.name === e.name;
  }).filter(function(r) {
    return r.checked;
  })[0] || e;
}, Vf = function(e, t) {
  return db(e) && e.name ? y$(e, t) : e;
}, v$ = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(r) {
    return t.add(Vf(r, e));
  }), e.filter(function(r) {
    return t.has(r);
  });
}, am = function(e) {
  return e[0] && e.length > 1 ? Vf(e[0], e) : e[0];
}, im = function(e, t) {
  return e.length > 1 ? e.indexOf(Vf(e[t], e)) : t;
}, vb = "NEW_FOCUS", g$ = function(e, t, r, n) {
  var o = e.length, a = e[0], i = e[o - 1], s = Lf(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var l = r !== void 0 ? t.indexOf(r) : -1, c = n ? t.indexOf(n) : l, u = n ? e.indexOf(n) : -1, d = l - c, m = t.indexOf(a), y = t.indexOf(i), x = v$(t), w = r !== void 0 ? x.indexOf(r) : -1, _ = w - (n ? x.indexOf(n) : l), T = im(e, 0), P = im(e, o - 1);
    if (l === -1 || u === -1)
      return vb;
    if (!d && u >= 0)
      return u;
    if (l <= m && s && Math.abs(d) > 1)
      return P;
    if (l >= y && s && Math.abs(d) > 1)
      return T;
    if (d && Math.abs(_) > 1)
      return u;
    if (l <= m)
      return P;
    if (l > y)
      return T;
    if (d)
      return Math.abs(d) > 1 ? u : (o + u + d) % o;
  }
}, b$ = function(e) {
  return function(t) {
    var r, n = (r = ub(t)) === null || r === void 0 ? void 0 : r.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      n !== void 0 && n !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, S$ = function(e, t, r) {
  var n = e.map(function(a) {
    var i = a.node;
    return i;
  }), o = nm(n.filter(b$(r)));
  return o && o.length ? am(o) : am(nm(t));
}, xu = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && xu(e.parentNode.host || e.parentNode, t), t;
}, dc = function(e, t) {
  for (var r = xu(e), n = xu(t), o = 0; o < r.length; o += 1) {
    var a = r[o];
    if (n.indexOf(a) >= 0)
      return a;
  }
  return !1;
}, gb = function(e, t, r) {
  var n = As(e), o = As(t), a = n[0], i = !1;
  return o.filter(Boolean).forEach(function(s) {
    i = dc(i || s, s) || i, r.filter(Boolean).forEach(function(l) {
      var c = dc(a, l);
      c && (!i || Ro(c, i) ? i = c : i = dc(c, i));
    });
  }), i;
}, w$ = function(e, t) {
  return e.reduce(function(r, n) {
    return r.concat(u$(n, t));
  }, []);
}, x$ = function(e, t) {
  var r = /* @__PURE__ */ new Map();
  return t.forEach(function(n) {
    return r.set(n.node, n);
  }), e.map(function(n) {
    return r.get(n);
  }).filter(o$);
}, _$ = function(e, t) {
  var r = Xa(As(e).length > 0 ? document : ab(e).ownerDocument), n = Bf(e).filter(Ds), o = gb(r || e, e, n), a = /* @__PURE__ */ new Map(), i = om(n, a), s = wu(n, a).filter(function(y) {
    var x = y.node;
    return Ds(x);
  });
  if (!(!s[0] && (s = i, !s[0]))) {
    var l = om([o], a).map(function(y) {
      var x = y.node;
      return x;
    }), c = x$(l, s), u = c.map(function(y) {
      var x = y.node;
      return x;
    }), d = g$(u, l, r, t);
    if (d === vb) {
      var m = S$(i, u, w$(n, a));
      if (m)
        return { node: m };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : c[d];
  }
}, P$ = function(e) {
  var t = Bf(e).filter(Ds), r = gb(e, e, t), n = /* @__PURE__ */ new Map(), o = wu([r], n, !0), a = wu(t, n).filter(function(i) {
    var s = i.node;
    return Ds(s);
  }).map(function(i) {
    var s = i.node;
    return s;
  });
  return o.map(function(i) {
    var s = i.node, l = i.index;
    return {
      node: s,
      index: l,
      lockItem: a.indexOf(s) >= 0,
      guard: Lf(s)
    };
  });
}, O$ = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, pc = 0, hc = !1, bb = function(e, t, r) {
  r === void 0 && (r = {});
  var n = _$(e, t);
  if (!hc && n) {
    if (pc > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), hc = !0, setTimeout(function() {
        hc = !1;
      }, 1);
      return;
    }
    pc++, O$(n.node, r.focusOptions), pc--;
  }
};
function zf(e) {
  setTimeout(e, 1);
}
var E$ = function() {
  return document && document.activeElement === document.body;
}, k$ = function() {
  return E$() || m$();
}, Ao = null, Po = null, Do = null, Za = !1, T$ = function() {
  return !0;
}, C$ = function(t) {
  return (Ao.whiteList || T$)(t);
}, R$ = function(t, r) {
  Do = {
    observerNode: t,
    portaledElement: r
  };
}, A$ = function(t) {
  return Do && Do.portaledElement === t;
};
function sm(e, t, r, n) {
  var o = null, a = e;
  do {
    var i = n[a];
    if (i.guard)
      i.node.dataset.focusAutoGuard && (o = i);
    else if (i.lockItem) {
      if (a !== e)
        return;
      o = null;
    } else
      break;
  } while ((a += r) !== t);
  o && (o.node.tabIndex = 0);
}
var D$ = function(t) {
  return t && "current" in t ? t.current : t;
}, M$ = function(t) {
  return t ? !!Za : Za === "meanwhile";
}, I$ = function e(t, r, n) {
  return r && // find host equal to active element and check nested active element
  (r.host === t && (!r.activeElement || n.contains(r.activeElement)) || r.parentNode && e(t, r.parentNode, n));
}, $$ = function(t, r) {
  return r.some(function(n) {
    return I$(t, n, n);
  });
}, Ms = function() {
  var t = !1;
  if (Ao) {
    var r = Ao, n = r.observed, o = r.persistentFocus, a = r.autoFocus, i = r.shards, s = r.crossFrame, l = r.focusOptions, c = n || Do && Do.portaledElement, u = document && document.activeElement;
    if (c) {
      var d = [c].concat(i.map(D$).filter(Boolean));
      if ((!u || C$(u)) && (o || M$(s) || !k$() || !Po && a) && (c && !// active element is "inside" working area
      (yb(d) || // check for shadow-dom contained elements
      u && $$(u, d) || A$(u)) && (document && !Po && u && !a ? (u.blur && u.blur(), document.body.focus()) : (t = bb(d, Po, {
        focusOptions: l
      }), Do = {})), Za = !1, Po = document && document.activeElement), document) {
        var m = document && document.activeElement, y = P$(d), x = y.map(function(w) {
          var _ = w.node;
          return _;
        }).indexOf(m);
        x > -1 && (y.filter(function(w) {
          var _ = w.guard, T = w.node;
          return _ && T.dataset.focusAutoGuard;
        }).forEach(function(w) {
          var _ = w.node;
          return _.removeAttribute("tabIndex");
        }), sm(x, y.length, 1, y), sm(x, -1, -1, y));
      }
    }
  }
  return t;
}, Sb = function(t) {
  Ms() && t && (t.stopPropagation(), t.preventDefault());
}, Wf = function() {
  return zf(Ms);
}, j$ = function(t) {
  var r = t.target, n = t.currentTarget;
  n.contains(r) || R$(n, r);
}, L$ = function() {
  return null;
};
process.env.NODE_ENV !== "production" && Kg.node.isRequired;
var wb = function() {
  Za = "just", zf(function() {
    Za = "meanwhile";
  });
}, F$ = function() {
  document.addEventListener("focusin", Sb), document.addEventListener("focusout", Wf), window.addEventListener("blur", wb);
}, N$ = function() {
  document.removeEventListener("focusin", Sb), document.removeEventListener("focusout", Wf), window.removeEventListener("blur", wb);
};
function B$(e) {
  return e.filter(function(t) {
    var r = t.disabled;
    return !r;
  });
}
function V$(e) {
  var t = e.slice(-1)[0];
  t && !Ao && F$();
  var r = Ao, n = r && t && t.id === r.id;
  Ao = t, r && !n && (r.onDeactivation(), e.filter(function(o) {
    var a = o.id;
    return a === r.id;
  }).length || r.returnFocus(!t)), t ? (Po = null, (!n || r.observed !== t.observed) && t.onActivation(), Ms(), zf(Ms)) : (N$(), Po = null);
}
rb.assignSyncMedium(j$);
nb.assignMedium(Wf);
UI.assignMedium(function(e) {
  return e({
    moveFocusInside: bb,
    focusInside: yb
  });
});
const z$ = ZI(B$, V$)(L$);
var xb = /* @__PURE__ */ te.forwardRef(function(t, r) {
  return /* @__PURE__ */ te.createElement(ob, Kn({
    sideCar: z$,
    ref: r
  }, t));
}), _b = ob.propTypes || {};
_b.sideCar;
var W$ = RI(_b, ["sideCar"]);
xb.propTypes = process.env.NODE_ENV !== "production" ? W$ : {};
const lm = xb;
function U$(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function Pb(e) {
  var t;
  if (!U$(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function H$(e) {
  const t = e.ownerDocument.defaultView || window, { overflow: r, overflowX: n, overflowY: o } = t.getComputedStyle(e);
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function q$(e) {
  return e.localName === "html" ? e : e.assignedSlot || e.parentElement || e.ownerDocument.documentElement;
}
function Ob(e) {
  return ["html", "body", "#document"].includes(e.localName) ? e.ownerDocument.body : Pb(e) && H$(e) ? e : Ob(q$(e));
}
var Y$ = (e) => e.hasAttribute("tabindex");
function K$(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function Eb(e) {
  return e.parentElement && Eb(e.parentElement) ? !0 : e.hidden;
}
function G$(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function X$(e) {
  if (!Pb(e) || Eb(e) || K$(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : G$(e) ? !0 : Y$(e);
}
var Z$ = [
  "input:not(:disabled):not([disabled])",
  "select:not(:disabled):not([disabled])",
  "textarea:not(:disabled):not([disabled])",
  "embed",
  "iframe",
  "object",
  "a[href]",
  "area[href]",
  "button:not(:disabled):not([disabled])",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  "*[tabindex]:not([aria-disabled])",
  "*[contenteditable]"
], J$ = Z$.join(), Q$ = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function ej(e) {
  const t = Array.from(
    e.querySelectorAll(J$)
  );
  return t.unshift(e), t.filter((r) => X$(r) && Q$(r));
}
var cm, tj = (cm = lm.default) != null ? cm : lm, kb = (e) => {
  const {
    initialFocusRef: t,
    finalFocusRef: r,
    contentRef: n,
    restoreFocus: o,
    children: a,
    isDisabled: i,
    autoFocus: s,
    persistentFocus: l,
    lockFocusAcrossFrames: c
  } = e, u = pe(() => {
    t != null && t.current ? t.current.focus() : n != null && n.current && ej(n.current).length === 0 && requestAnimationFrame(() => {
      var x;
      (x = n.current) == null || x.focus();
    });
  }, [t, n]), d = pe(() => {
    var y;
    (y = r == null ? void 0 : r.current) == null || y.focus();
  }, [r]), m = o && !r;
  return /* @__PURE__ */ I.jsx(
    tj,
    {
      crossFrame: c,
      persistentFocus: l,
      autoFocus: s,
      disabled: i,
      onActivation: u,
      onDeactivation: d,
      returnFocus: m,
      children: a
    }
  );
};
kb.displayName = "FocusLock";
var rj = zT ? Fu : Me;
function um(e, t = []) {
  const r = De(e);
  return rj(() => {
    r.current = e;
  }), pe((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function nj(e, t) {
  const r = zr();
  return ot(
    () => e || [t, r].filter(Boolean).join("-"),
    [e, t, r]
  );
}
function oj(e, t) {
  const r = e !== void 0;
  return [r, r && typeof e < "u" ? e : t];
}
function Tb(e = {}) {
  const {
    onClose: t,
    onOpen: r,
    isOpen: n,
    id: o
  } = e, a = um(r), i = um(t), [s, l] = ue(e.defaultIsOpen || !1), [c, u] = oj(n, s), d = nj(o, "disclosure"), m = pe(() => {
    c || l(!1), i == null || i();
  }, [c, i]), y = pe(() => {
    c || l(!0), a == null || a();
  }, [c, a]), x = pe(() => {
    (u ? m : y)();
  }, [u, y, m]);
  return {
    isOpen: !!u,
    onOpen: y,
    onClose: m,
    onToggle: x,
    isControlled: c,
    getButtonProps: (w = {}) => ({
      ...w,
      "aria-expanded": u,
      "aria-controls": d,
      onClick: YT(w.onClick, x)
    }),
    getDisclosureProps: (w = {}) => ({
      ...w,
      hidden: !u,
      id: d
    })
  };
}
function aj(e, t) {
  return Array.isArray(e) ? e.map((r) => r === null ? null : t(r)) : Qt(e) ? Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {}) : e != null ? t(e) : null;
}
var bn = Le(function(t, r) {
  const n = eo("Text", t), { className: o, align: a, decoration: i, casing: s, ...l } = Wr(t), c = nC({
    textAlign: t.align,
    textDecoration: t.decoration,
    textTransform: t.casing
  });
  return /* @__PURE__ */ I.jsx(
    we.p,
    {
      ref: r,
      className: Ye("chakra-text", t.className),
      ...c,
      ...l,
      __css: n
    }
  );
});
bn.displayName = "Text";
var Cb = (e) => /* @__PURE__ */ I.jsx(
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
Cb.displayName = "StackItem";
function ij(e) {
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
    "&": aj(
      r,
      (o) => n[o]
    )
  };
}
var Mr = Le((e, t) => {
  const {
    isInline: r,
    direction: n,
    align: o,
    justify: a,
    spacing: i = "0.5rem",
    wrap: s,
    children: l,
    divider: c,
    className: u,
    shouldWrapChildren: d,
    ...m
  } = e, y = r ? "row" : n ?? "column", x = ot(
    () => ij({ spacing: i, direction: y }),
    [i, y]
  ), w = !!c, _ = !d && !w, T = ot(() => {
    const k = hI(l);
    return _ ? k : k.map(($, S) => {
      const C = typeof $.key < "u" ? $.key : S, v = S + 1 === k.length, h = d ? /* @__PURE__ */ I.jsx(Cb, { children: $ }, C) : $;
      if (!w)
        return h;
      const p = Fs(
        c,
        {
          __css: x
        }
      ), g = v ? null : p;
      return /* @__PURE__ */ I.jsxs(kS, { children: [
        h,
        g
      ] }, C);
    });
  }, [
    c,
    x,
    w,
    _,
    d,
    l
  ]), P = Ye("chakra-stack", u);
  return /* @__PURE__ */ I.jsx(
    we.div,
    {
      ref: t,
      display: "flex",
      alignItems: o,
      justifyContent: a,
      flexDirection: y,
      flexWrap: s,
      gap: w ? void 0 : i,
      className: P,
      ...m,
      children: T
    }
  );
});
Mr.displayName = "Stack";
var Rb = Le((e, t) => /* @__PURE__ */ I.jsx(Mr, { align: "center", ...e, direction: "column", ref: t }));
Rb.displayName = "VStack";
var Ab = Le((e, t) => /* @__PURE__ */ I.jsx(Mr, { align: "center", ...e, direction: "row", ref: t }));
Ab.displayName = "HStack";
var so = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), kt = {
  arrowShadowColor: so("--popper-arrow-shadow-color"),
  arrowSize: so("--popper-arrow-size", "8px"),
  arrowSizeHalf: so("--popper-arrow-size-half"),
  arrowBg: so("--popper-arrow-bg"),
  transformOrigin: so("--popper-transform-origin"),
  arrowOffset: so("--popper-arrow-offset")
};
function sj(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var lj = {
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
}, cj = (e) => lj[e], fm = {
  scroll: !0,
  resize: !0
};
function uj(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...fm, ...e }
  } : t = {
    enabled: e,
    options: fm
  }, t;
}
var fj = {
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
}, dj = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    dm(e);
  },
  effect: ({ state: e }) => () => {
    dm(e);
  }
}, dm = (e) => {
  e.elements.popper.style.setProperty(
    kt.transformOrigin.var,
    cj(e.placement)
  );
}, pj = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    hj(e);
  }
}, hj = (e) => {
  var t;
  if (!e.placement)
    return;
  const r = mj(e.placement);
  if ((t = e.elements) != null && t.arrow && r) {
    Object.assign(e.elements.arrow.style, {
      [r.property]: r.value,
      width: kt.arrowSize.varRef,
      height: kt.arrowSize.varRef,
      zIndex: -1
    });
    const n = {
      [kt.arrowSizeHalf.var]: `calc(${kt.arrowSize.varRef} / 2 - 1px)`,
      [kt.arrowOffset.var]: `calc(${kt.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in n)
      e.elements.arrow.style.setProperty(o, n[o]);
  }
}, mj = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: kt.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: kt.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: kt.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: kt.arrowOffset.varRef };
}, yj = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    pm(e);
  },
  effect: ({ state: e }) => () => {
    pm(e);
  }
}, pm = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const r = sj(e.placement);
  r && t.style.setProperty("--popper-arrow-default-shadow", r), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: kt.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, vj = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, gj = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function bj(e, t = "ltr") {
  var r, n;
  const o = ((r = vj[e]) == null ? void 0 : r[t]) || e;
  return t === "ltr" ? o : (n = gj[e]) != null ? n : o;
}
var Ut = "top", hr = "bottom", mr = "right", Ht = "left", Uf = "auto", gi = [Ut, hr, mr, Ht], No = "start", Ja = "end", Sj = "clippingParents", Db = "viewport", da = "popper", wj = "reference", hm = /* @__PURE__ */ gi.reduce(function(e, t) {
  return e.concat([t + "-" + No, t + "-" + Ja]);
}, []), Mb = /* @__PURE__ */ [].concat(gi, [Uf]).reduce(function(e, t) {
  return e.concat([t, t + "-" + No, t + "-" + Ja]);
}, []), xj = "beforeRead", _j = "read", Pj = "afterRead", Oj = "beforeMain", Ej = "main", kj = "afterMain", Tj = "beforeWrite", Cj = "write", Rj = "afterWrite", Aj = [xj, _j, Pj, Oj, Ej, kj, Tj, Cj, Rj];
function Br(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function rr(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Xn(e) {
  var t = rr(e).Element;
  return e instanceof t || e instanceof Element;
}
function dr(e) {
  var t = rr(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Hf(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = rr(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Dj(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !dr(a) || !Br(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(i) {
      var s = o[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function Mj(e) {
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
      var o = t.elements[n], a = t.attributes[n] || {}, i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = i.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !dr(o) || !Br(o) || (Object.assign(o.style, s), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const Ij = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Dj,
  effect: Mj,
  requires: ["computeStyles"]
};
function Fr(e) {
  return e.split("-")[0];
}
var Yn = Math.max, Is = Math.min, Bo = Math.round;
function _u() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ib() {
  return !/^((?!chrome|android).)*safari/i.test(_u());
}
function Vo(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && dr(e) && (o = e.offsetWidth > 0 && Bo(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Bo(n.height) / e.offsetHeight || 1);
  var i = Xn(e) ? rr(e) : window, s = i.visualViewport, l = !Ib() && r, c = (n.left + (l && s ? s.offsetLeft : 0)) / o, u = (n.top + (l && s ? s.offsetTop : 0)) / a, d = n.width / o, m = n.height / a;
  return {
    width: d,
    height: m,
    top: u,
    right: c + d,
    bottom: u + m,
    left: c,
    x: c,
    y: u
  };
}
function qf(e) {
  var t = Vo(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function $b(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Hf(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function on(e) {
  return rr(e).getComputedStyle(e);
}
function $j(e) {
  return ["table", "td", "th"].indexOf(Br(e)) >= 0;
}
function On(e) {
  return ((Xn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function sl(e) {
  return Br(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Hf(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    On(e)
  );
}
function mm(e) {
  return !dr(e) || // https://github.com/popperjs/popper-core/issues/837
  on(e).position === "fixed" ? null : e.offsetParent;
}
function jj(e) {
  var t = /firefox/i.test(_u()), r = /Trident/i.test(_u());
  if (r && dr(e)) {
    var n = on(e);
    if (n.position === "fixed")
      return null;
  }
  var o = sl(e);
  for (Hf(o) && (o = o.host); dr(o) && ["html", "body"].indexOf(Br(o)) < 0; ) {
    var a = on(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function bi(e) {
  for (var t = rr(e), r = mm(e); r && $j(r) && on(r).position === "static"; )
    r = mm(r);
  return r && (Br(r) === "html" || Br(r) === "body" && on(r).position === "static") ? t : r || jj(e) || t;
}
function Yf(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function $a(e, t, r) {
  return Yn(e, Is(t, r));
}
function Lj(e, t, r) {
  var n = $a(e, t, r);
  return n > r ? r : n;
}
function jb() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Lb(e) {
  return Object.assign({}, jb(), e);
}
function Fb(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Fj = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Lb(typeof t != "number" ? t : Fb(t, gi));
};
function Nj(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, i = r.modifiersData.popperOffsets, s = Fr(r.placement), l = Yf(s), c = [Ht, mr].indexOf(s) >= 0, u = c ? "height" : "width";
  if (!(!a || !i)) {
    var d = Fj(o.padding, r), m = qf(a), y = l === "y" ? Ut : Ht, x = l === "y" ? hr : mr, w = r.rects.reference[u] + r.rects.reference[l] - i[l] - r.rects.popper[u], _ = i[l] - r.rects.reference[l], T = bi(a), P = T ? l === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0, k = w / 2 - _ / 2, $ = d[y], S = P - m[u] - d[x], C = P / 2 - m[u] / 2 + k, v = $a($, C, S), f = l;
    r.modifiersData[n] = (t = {}, t[f] = v, t.centerOffset = v - C, t);
  }
}
function Bj(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || $b(t.elements.popper, o) && (t.elements.arrow = o));
}
const Vj = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Nj,
  effect: Bj,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function zo(e) {
  return e.split("-")[1];
}
var zj = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Wj(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Bo(r * o) / o || 0,
    y: Bo(n * o) / o || 0
  };
}
function ym(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, m = i.x, y = m === void 0 ? 0 : m, x = i.y, w = x === void 0 ? 0 : x, _ = typeof u == "function" ? u({
    x: y,
    y: w
  }) : {
    x: y,
    y: w
  };
  y = _.x, w = _.y;
  var T = i.hasOwnProperty("x"), P = i.hasOwnProperty("y"), k = Ht, $ = Ut, S = window;
  if (c) {
    var C = bi(r), v = "clientHeight", f = "clientWidth";
    if (C === rr(r) && (C = On(r), on(C).position !== "static" && s === "absolute" && (v = "scrollHeight", f = "scrollWidth")), C = C, o === Ut || (o === Ht || o === mr) && a === Ja) {
      $ = hr;
      var h = d && C === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[v]
      );
      w -= h - n.height, w *= l ? 1 : -1;
    }
    if (o === Ht || (o === Ut || o === hr) && a === Ja) {
      k = mr;
      var p = d && C === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[f]
      );
      y -= p - n.width, y *= l ? 1 : -1;
    }
  }
  var g = Object.assign({
    position: s
  }, c && zj), A = u === !0 ? Wj({
    x: y,
    y: w
  }, rr(r)) : {
    x: y,
    y: w
  };
  if (y = A.x, w = A.y, l) {
    var D;
    return Object.assign({}, g, (D = {}, D[$] = P ? "0" : "", D[k] = T ? "0" : "", D.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + w + "px)" : "translate3d(" + y + "px, " + w + "px, 0)", D));
  }
  return Object.assign({}, g, (t = {}, t[$] = P ? w + "px" : "", t[k] = T ? y + "px" : "", t.transform = "", t));
}
function Uj(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, i = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s, c = {
    placement: Fr(t.placement),
    variation: zo(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ym(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ym(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Hj = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Uj,
  data: {}
};
var Ni = {
  passive: !0
};
function qj(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, i = n.resize, s = i === void 0 ? !0 : i, l = rr(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, Ni);
  }), s && l.addEventListener("resize", r.update, Ni), function() {
    a && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, Ni);
    }), s && l.removeEventListener("resize", r.update, Ni);
  };
}
const Yj = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: qj,
  data: {}
};
var Kj = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ss(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Kj[t];
  });
}
var Gj = {
  start: "end",
  end: "start"
};
function vm(e) {
  return e.replace(/start|end/g, function(t) {
    return Gj[t];
  });
}
function Kf(e) {
  var t = rr(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Gf(e) {
  return Vo(On(e)).left + Kf(e).scrollLeft;
}
function Xj(e, t) {
  var r = rr(e), n = On(e), o = r.visualViewport, a = n.clientWidth, i = n.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    var c = Ib();
    (c || !c && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s + Gf(e),
    y: l
  };
}
function Zj(e) {
  var t, r = On(e), n = Kf(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Yn(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Yn(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + Gf(e), l = -n.scrollTop;
  return on(o || r).direction === "rtl" && (s += Yn(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function Xf(e) {
  var t = on(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function Nb(e) {
  return ["html", "body", "#document"].indexOf(Br(e)) >= 0 ? e.ownerDocument.body : dr(e) && Xf(e) ? e : Nb(sl(e));
}
function ja(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Nb(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = rr(n), i = o ? [a].concat(a.visualViewport || [], Xf(n) ? n : []) : n, s = t.concat(i);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(ja(sl(i)))
  );
}
function Pu(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Jj(e, t) {
  var r = Vo(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function gm(e, t, r) {
  return t === Db ? Pu(Xj(e, r)) : Xn(t) ? Jj(t, r) : Pu(Zj(On(e)));
}
function Qj(e) {
  var t = ja(sl(e)), r = ["absolute", "fixed"].indexOf(on(e).position) >= 0, n = r && dr(e) ? bi(e) : e;
  return Xn(n) ? t.filter(function(o) {
    return Xn(o) && $b(o, n) && Br(o) !== "body";
  }) : [];
}
function e2(e, t, r, n) {
  var o = t === "clippingParents" ? Qj(e) : [].concat(t), a = [].concat(o, [r]), i = a[0], s = a.reduce(function(l, c) {
    var u = gm(e, c, n);
    return l.top = Yn(u.top, l.top), l.right = Is(u.right, l.right), l.bottom = Is(u.bottom, l.bottom), l.left = Yn(u.left, l.left), l;
  }, gm(e, i, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Bb(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Fr(n) : null, a = n ? zo(n) : null, i = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case Ut:
      l = {
        x: i,
        y: t.y - r.height
      };
      break;
    case hr:
      l = {
        x: i,
        y: t.y + t.height
      };
      break;
    case mr:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Ht:
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
  var c = o ? Yf(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (a) {
      case No:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case Ja:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function Qa(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, i = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? Sj : s, c = r.rootBoundary, u = c === void 0 ? Db : c, d = r.elementContext, m = d === void 0 ? da : d, y = r.altBoundary, x = y === void 0 ? !1 : y, w = r.padding, _ = w === void 0 ? 0 : w, T = Lb(typeof _ != "number" ? _ : Fb(_, gi)), P = m === da ? wj : da, k = e.rects.popper, $ = e.elements[x ? P : m], S = e2(Xn($) ? $ : $.contextElement || On(e.elements.popper), l, u, i), C = Vo(e.elements.reference), v = Bb({
    reference: C,
    element: k,
    strategy: "absolute",
    placement: o
  }), f = Pu(Object.assign({}, k, v)), h = m === da ? f : C, p = {
    top: S.top - h.top + T.top,
    bottom: h.bottom - S.bottom + T.bottom,
    left: S.left - h.left + T.left,
    right: h.right - S.right + T.right
  }, g = e.modifiersData.offset;
  if (m === da && g) {
    var A = g[o];
    Object.keys(p).forEach(function(D) {
      var R = [mr, hr].indexOf(D) >= 0 ? 1 : -1, F = [Ut, hr].indexOf(D) >= 0 ? "y" : "x";
      p[D] += A[F] * R;
    });
  }
  return p;
}
function t2(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, i = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? Mb : l, u = zo(n), d = u ? s ? hm : hm.filter(function(x) {
    return zo(x) === u;
  }) : gi, m = d.filter(function(x) {
    return c.indexOf(x) >= 0;
  });
  m.length === 0 && (m = d);
  var y = m.reduce(function(x, w) {
    return x[w] = Qa(e, {
      placement: w,
      boundary: o,
      rootBoundary: a,
      padding: i
    })[Fr(w)], x;
  }, {});
  return Object.keys(y).sort(function(x, w) {
    return y[x] - y[w];
  });
}
function r2(e) {
  if (Fr(e) === Uf)
    return [];
  var t = ss(e);
  return [vm(e), t, vm(t)];
}
function n2(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !0 : i, l = r.fallbackPlacements, c = r.padding, u = r.boundary, d = r.rootBoundary, m = r.altBoundary, y = r.flipVariations, x = y === void 0 ? !0 : y, w = r.allowedAutoPlacements, _ = t.options.placement, T = Fr(_), P = T === _, k = l || (P || !x ? [ss(_)] : r2(_)), $ = [_].concat(k).reduce(function(Y, Z) {
      return Y.concat(Fr(Z) === Uf ? t2(t, {
        placement: Z,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: x,
        allowedAutoPlacements: w
      }) : Z);
    }, []), S = t.rects.reference, C = t.rects.popper, v = /* @__PURE__ */ new Map(), f = !0, h = $[0], p = 0; p < $.length; p++) {
      var g = $[p], A = Fr(g), D = zo(g) === No, R = [Ut, hr].indexOf(A) >= 0, F = R ? "width" : "height", U = Qa(t, {
        placement: g,
        boundary: u,
        rootBoundary: d,
        altBoundary: m,
        padding: c
      }), L = R ? D ? mr : Ht : D ? hr : Ut;
      S[F] > C[F] && (L = ss(L));
      var j = ss(L), V = [];
      if (a && V.push(U[A] <= 0), s && V.push(U[L] <= 0, U[j] <= 0), V.every(function(Y) {
        return Y;
      })) {
        h = g, f = !1;
        break;
      }
      v.set(g, V);
    }
    if (f)
      for (var E = x ? 3 : 1, O = function(Z) {
        var Q = $.find(function(re) {
          var J = v.get(re);
          if (J)
            return J.slice(0, Z).every(function(oe) {
              return oe;
            });
        });
        if (Q)
          return h = Q, "break";
      }, B = E; B > 0; B--) {
        var K = O(B);
        if (K === "break")
          break;
      }
    t.placement !== h && (t.modifiersData[n]._skip = !0, t.placement = h, t.reset = !0);
  }
}
const o2 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: n2,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function bm(e, t, r) {
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
function Sm(e) {
  return [Ut, mr, hr, Ht].some(function(t) {
    return e[t] >= 0;
  });
}
function a2(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, i = Qa(t, {
    elementContext: "reference"
  }), s = Qa(t, {
    altBoundary: !0
  }), l = bm(i, n), c = bm(s, o, a), u = Sm(l), d = Sm(c);
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
const i2 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: a2
};
function s2(e, t, r) {
  var n = Fr(e), o = [Ht, Ut].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, i = a[0], s = a[1];
  return i = i || 0, s = (s || 0) * o, [Ht, mr].indexOf(n) >= 0 ? {
    x: s,
    y: i
  } : {
    x: i,
    y: s
  };
}
function l2(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, i = Mb.reduce(function(u, d) {
    return u[d] = s2(d, t.rects, a), u;
  }, {}), s = i[t.placement], l = s.x, c = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = i;
}
const c2 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: l2
};
function u2(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Bb({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const f2 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: u2,
  data: {}
};
function d2(e) {
  return e === "x" ? "y" : "x";
}
function p2(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !1 : i, l = r.boundary, c = r.rootBoundary, u = r.altBoundary, d = r.padding, m = r.tether, y = m === void 0 ? !0 : m, x = r.tetherOffset, w = x === void 0 ? 0 : x, _ = Qa(t, {
    boundary: l,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), T = Fr(t.placement), P = zo(t.placement), k = !P, $ = Yf(T), S = d2($), C = t.modifiersData.popperOffsets, v = t.rects.reference, f = t.rects.popper, h = typeof w == "function" ? w(Object.assign({}, t.rects, {
    placement: t.placement
  })) : w, p = typeof h == "number" ? {
    mainAxis: h,
    altAxis: h
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, h), g = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, A = {
    x: 0,
    y: 0
  };
  if (C) {
    if (a) {
      var D, R = $ === "y" ? Ut : Ht, F = $ === "y" ? hr : mr, U = $ === "y" ? "height" : "width", L = C[$], j = L + _[R], V = L - _[F], E = y ? -f[U] / 2 : 0, O = P === No ? v[U] : f[U], B = P === No ? -f[U] : -v[U], K = t.elements.arrow, Y = y && K ? qf(K) : {
        width: 0,
        height: 0
      }, Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : jb(), Q = Z[R], re = Z[F], J = $a(0, v[U], Y[U]), oe = k ? v[U] / 2 - E - J - Q - p.mainAxis : O - J - Q - p.mainAxis, ae = k ? -v[U] / 2 + E + J + re + p.mainAxis : B + J + re + p.mainAxis, ne = t.elements.arrow && bi(t.elements.arrow), G = ne ? $ === "y" ? ne.clientTop || 0 : ne.clientLeft || 0 : 0, ge = (D = g == null ? void 0 : g[$]) != null ? D : 0, et = L + oe - ge - G, Be = L + ae - ge, Je = $a(y ? Is(j, et) : j, L, y ? Yn(V, Be) : V);
      C[$] = Je, A[$] = Je - L;
    }
    if (s) {
      var ht, Ke = $ === "x" ? Ut : Ht, bt = $ === "x" ? hr : mr, lt = C[S], Tt = S === "y" ? "height" : "width", mt = lt + _[Ke], at = lt - _[bt], Vt = [Ut, Ht].indexOf(T) !== -1, Mt = (ht = g == null ? void 0 : g[S]) != null ? ht : 0, nr = Vt ? mt : lt - v[Tt] - f[Tt] - Mt + p.altAxis, St = Vt ? lt + v[Tt] + f[Tt] - Mt - p.altAxis : at, Kt = y && Vt ? Lj(nr, lt, St) : $a(y ? nr : mt, lt, y ? St : at);
      C[S] = Kt, A[S] = Kt - lt;
    }
    t.modifiersData[n] = A;
  }
}
const h2 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: p2,
  requiresIfExists: ["offset"]
};
function m2(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function y2(e) {
  return e === rr(e) || !dr(e) ? Kf(e) : m2(e);
}
function v2(e) {
  var t = e.getBoundingClientRect(), r = Bo(t.width) / e.offsetWidth || 1, n = Bo(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function g2(e, t, r) {
  r === void 0 && (r = !1);
  var n = dr(t), o = dr(t) && v2(t), a = On(t), i = Vo(e, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Br(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Xf(a)) && (s = y2(t)), dr(t) ? (l = Vo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Gf(a))), {
    x: i.left + s.scrollLeft - l.x,
    y: i.top + s.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function b2(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    r.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || o(a);
  }), n;
}
function S2(e) {
  var t = b2(e);
  return Aj.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function w2(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function x2(e) {
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
var wm = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function xm() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function _2(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? wm : o;
  return function(s, l, c) {
    c === void 0 && (c = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, wm, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], m = !1, y = {
      state: u,
      setOptions: function(T) {
        var P = typeof T == "function" ? T(u.options) : T;
        w(), u.options = Object.assign({}, a, u.options, P), u.scrollParents = {
          reference: Xn(s) ? ja(s) : s.contextElement ? ja(s.contextElement) : [],
          popper: ja(l)
        };
        var k = S2(x2([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = k.filter(function($) {
          return $.enabled;
        }), x(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!m) {
          var T = u.elements, P = T.reference, k = T.popper;
          if (xm(P, k)) {
            u.rects = {
              reference: g2(P, bi(k), u.options.strategy === "fixed"),
              popper: qf(k)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(p) {
              return u.modifiersData[p.name] = Object.assign({}, p.data);
            });
            for (var $ = 0; $ < u.orderedModifiers.length; $++) {
              if (u.reset === !0) {
                u.reset = !1, $ = -1;
                continue;
              }
              var S = u.orderedModifiers[$], C = S.fn, v = S.options, f = v === void 0 ? {} : v, h = S.name;
              typeof C == "function" && (u = C({
                state: u,
                options: f,
                name: h,
                instance: y
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: w2(function() {
        return new Promise(function(_) {
          y.forceUpdate(), _(u);
        });
      }),
      destroy: function() {
        w(), m = !0;
      }
    };
    if (!xm(s, l))
      return y;
    y.setOptions(c).then(function(_) {
      !m && c.onFirstUpdate && c.onFirstUpdate(_);
    });
    function x() {
      u.orderedModifiers.forEach(function(_) {
        var T = _.name, P = _.options, k = P === void 0 ? {} : P, $ = _.effect;
        if (typeof $ == "function") {
          var S = $({
            state: u,
            name: T,
            instance: y,
            options: k
          }), C = function() {
          };
          d.push(S || C);
        }
      });
    }
    function w() {
      d.forEach(function(_) {
        return _();
      }), d = [];
    }
    return y;
  };
}
var P2 = [Yj, f2, Hj, Ij, c2, o2, h2, Vj, i2], O2 = /* @__PURE__ */ _2({
  defaultModifiers: P2
});
function E2(e = {}) {
  const {
    enabled: t = !0,
    modifiers: r,
    placement: n = "bottom",
    strategy: o = "absolute",
    arrowPadding: a = 8,
    eventListeners: i = !0,
    offset: s,
    gutter: l = 8,
    flip: c = !0,
    boundary: u = "clippingParents",
    preventOverflow: d = !0,
    matchWidth: m,
    direction: y = "ltr"
  } = e, x = De(null), w = De(null), _ = De(null), T = bj(n, y), P = De(() => {
  }), k = pe(() => {
    var p;
    !t || !x.current || !w.current || ((p = P.current) == null || p.call(P), _.current = O2(x.current, w.current, {
      placement: T,
      modifiers: [
        yj,
        pj,
        dj,
        {
          ...fj,
          enabled: !!m
        },
        {
          name: "eventListeners",
          ...uj(i)
        },
        {
          name: "arrow",
          options: { padding: a }
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
    }), _.current.forceUpdate(), P.current = _.current.destroy);
  }, [
    T,
    t,
    r,
    m,
    i,
    a,
    s,
    l,
    c,
    d,
    u,
    o
  ]);
  Me(() => () => {
    var p;
    !x.current && !w.current && ((p = _.current) == null || p.destroy(), _.current = null);
  }, []);
  const $ = pe(
    (p) => {
      x.current = p, k();
    },
    [k]
  ), S = pe(
    (p = {}, g = null) => ({
      ...p,
      ref: nn($, g)
    }),
    [$]
  ), C = pe(
    (p) => {
      w.current = p, k();
    },
    [k]
  ), v = pe(
    (p = {}, g = null) => ({
      ...p,
      ref: nn(C, g),
      style: {
        ...p.style,
        position: o,
        minWidth: m ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [o, C, m]
  ), f = pe((p = {}, g = null) => {
    const { size: A, shadowColor: D, bg: R, style: F, ...U } = p;
    return {
      ...U,
      ref: g,
      "data-popper-arrow": "",
      style: k2(p)
    };
  }, []), h = pe(
    (p = {}, g = null) => ({
      ...p,
      ref: g,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      var p;
      (p = _.current) == null || p.update();
    },
    forceUpdate() {
      var p;
      (p = _.current) == null || p.forceUpdate();
    },
    transformOrigin: kt.transformOrigin.varRef,
    referenceRef: $,
    popperRef: C,
    getPopperProps: v,
    getArrowProps: f,
    getArrowInnerProps: h,
    getReferenceProps: S
  };
}
function k2(e) {
  const { size: t, shadowColor: r, bg: n, style: o } = e, a = { ...o, position: "absolute" };
  return t && (a["--popper-arrow-size"] = t), r && (a["--popper-arrow-shadow-color"] = r), n && (a["--popper-arrow-bg"] = n), a;
}
function T2(e = {}) {
  const {
    onClose: t,
    onOpen: r,
    isOpen: n,
    id: o
  } = e, a = xs(r), i = xs(t), [s, l] = ue(e.defaultIsOpen || !1), c = n !== void 0 ? n : s, u = n !== void 0, d = zr(), m = o ?? `disclosure-${d}`, y = pe(() => {
    u || l(!1), i == null || i();
  }, [u, i]), x = pe(() => {
    u || l(!0), a == null || a();
  }, [u, a]), w = pe(() => {
    c ? y() : x();
  }, [c, x, y]);
  function _(P = {}) {
    return {
      ...P,
      "aria-expanded": c,
      "aria-controls": m,
      onClick(k) {
        var $;
        ($ = P.onClick) == null || $.call(P, k), w();
      }
    };
  }
  function T(P = {}) {
    return {
      ...P,
      hidden: !c,
      id: m
    };
  }
  return {
    isOpen: c,
    onOpen: x,
    onClose: y,
    onToggle: w,
    isControlled: u,
    getButtonProps: _,
    getDisclosureProps: T
  };
}
var C2 = {
  slideInBottom: {
    ..._a,
    custom: { offsetY: 16, reverse: !0 }
  },
  slideInRight: {
    ..._a,
    custom: { offsetX: 16, reverse: !0 }
  },
  slideInTop: {
    ..._a,
    custom: { offsetY: -16, reverse: !0 }
  },
  slideInLeft: {
    ..._a,
    custom: { offsetX: -16, reverse: !0 }
  },
  scale: {
    ...zg,
    custom: { initialScale: 0.95, reverse: !0 }
  },
  none: {}
}, R2 = we(no.section), A2 = (e) => C2[e || "none"], Vb = Qn(
  (e, t) => {
    const { preset: r, motionProps: n = A2(r), ...o } = e;
    return /* @__PURE__ */ I.jsx(R2, { ref: t, ...n, ...o });
  }
);
Vb.displayName = "ModalTransition";
var D2 = Object.defineProperty, M2 = (e, t, r) => t in e ? D2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, I2 = (e, t, r) => (M2(e, typeof t != "symbol" ? t + "" : t, r), r), $2 = class {
  constructor() {
    I2(this, "modals"), this.modals = /* @__PURE__ */ new Map();
  }
  add(e) {
    return this.modals.set(e, this.modals.size + 1), this.modals.size;
  }
  remove(e) {
    this.modals.delete(e);
  }
  isTopModal(e) {
    return e ? this.modals.get(e) === this.modals.size : !1;
  }
}, Ou = new $2();
function zb(e, t) {
  const [r, n] = ue(0);
  return Me(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const a = Ou.add(o);
        n(a);
      }
      return () => {
        Ou.remove(o), n(0);
      };
    }
  }, [t, e]), r;
}
var j2 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, lo = /* @__PURE__ */ new WeakMap(), Bi = /* @__PURE__ */ new WeakMap(), Vi = {}, mc = 0, Wb = function(e) {
  return e && (e.host || Wb(e.parentNode));
}, L2 = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Wb(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, F2 = function(e, t, r, n) {
  var o = L2(t, Array.isArray(e) ? e : [e]);
  Vi[r] || (Vi[r] = /* @__PURE__ */ new WeakMap());
  var a = Vi[r], i = [], s = /* @__PURE__ */ new Set(), l = new Set(o), c = function(d) {
    !d || s.has(d) || (s.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(m) {
      if (s.has(m))
        u(m);
      else {
        var y = m.getAttribute(n), x = y !== null && y !== "false", w = (lo.get(m) || 0) + 1, _ = (a.get(m) || 0) + 1;
        lo.set(m, w), a.set(m, _), i.push(m), w === 1 && x && Bi.set(m, !0), _ === 1 && m.setAttribute(r, "true"), x || m.setAttribute(n, "true");
      }
    });
  };
  return u(t), s.clear(), mc++, function() {
    i.forEach(function(d) {
      var m = lo.get(d) - 1, y = a.get(d) - 1;
      lo.set(d, m), a.set(d, y), m || (Bi.has(d) || d.removeAttribute(n), Bi.delete(d)), y || d.removeAttribute(r);
    }), mc--, mc || (lo = /* @__PURE__ */ new WeakMap(), lo = /* @__PURE__ */ new WeakMap(), Bi = /* @__PURE__ */ new WeakMap(), Vi = {});
  };
}, N2 = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = t || j2(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), F2(n, o, r, "aria-hidden")) : function() {
    return null;
  };
};
function B2(e) {
  const {
    isOpen: t,
    onClose: r,
    id: n,
    closeOnOverlayClick: o = !0,
    closeOnEsc: a = !0,
    useInert: i = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, c = De(null), u = De(null), [d, m, y] = z2(
    n,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  V2(c, t && i);
  const x = zb(c, t), w = De(null), _ = pe((h) => {
    w.current = h.target;
  }, []), T = pe(
    (h) => {
      h.key === "Escape" && (h.stopPropagation(), a && (r == null || r()), l == null || l());
    },
    [a, r, l]
  ), [P, k] = ue(!1), [$, S] = ue(!1), C = pe(
    (h = {}, p = null) => ({
      role: "dialog",
      ...h,
      ref: nn(p, c),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": P ? m : void 0,
      "aria-describedby": $ ? y : void 0,
      onClick: ft(
        h.onClick,
        (g) => g.stopPropagation()
      )
    }),
    [y, $, d, m, P]
  ), v = pe(
    (h) => {
      h.stopPropagation(), w.current === h.target && Ou.isTopModal(c.current) && (o && (r == null || r()), s == null || s());
    },
    [r, o, s]
  ), f = pe(
    (h = {}, p = null) => ({
      ...h,
      ref: nn(p, u),
      onClick: ft(h.onClick, v),
      onKeyDown: ft(h.onKeyDown, T),
      onMouseDown: ft(h.onMouseDown, _)
    }),
    [T, _, v]
  );
  return {
    isOpen: t,
    onClose: r,
    headerId: m,
    bodyId: y,
    setBodyMounted: S,
    setHeaderMounted: k,
    dialogRef: c,
    overlayRef: u,
    getDialogProps: C,
    getDialogContainerProps: f,
    index: x
  };
}
function V2(e, t) {
  const r = e.current;
  Me(() => {
    if (!(!e.current || !t))
      return N2(e.current);
  }, [t, e, r]);
}
function z2(e, ...t) {
  const r = zr(), n = e || r;
  return ot(() => t.map((o) => `${o}-${n}`), [n, t]);
}
var [W2, Go] = yr({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [U2, Zn] = yr({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), Zf = (e) => {
  const t = {
    scrollBehavior: "outside",
    autoFocus: !0,
    trapFocus: !0,
    returnFocusOnClose: !0,
    blockScrollOnMount: !0,
    allowPinchZoom: !1,
    motionPreset: "scale",
    lockFocusAcrossFrames: !0,
    ...e
  }, {
    portalProps: r,
    children: n,
    autoFocus: o,
    trapFocus: a,
    initialFocusRef: i,
    finalFocusRef: s,
    returnFocusOnClose: l,
    blockScrollOnMount: c,
    allowPinchZoom: u,
    preserveScrollBarGap: d,
    motionPreset: m,
    lockFocusAcrossFrames: y,
    onCloseComplete: x
  } = t, w = li("Modal", t), T = {
    ...B2(t),
    autoFocus: o,
    trapFocus: a,
    initialFocusRef: i,
    finalFocusRef: s,
    returnFocusOnClose: l,
    blockScrollOnMount: c,
    allowPinchZoom: u,
    preserveScrollBarGap: d,
    motionPreset: m,
    lockFocusAcrossFrames: y
  };
  return /* @__PURE__ */ I.jsx(U2, { value: T, children: /* @__PURE__ */ I.jsx(W2, { value: w, children: /* @__PURE__ */ I.jsx(Yo, { onExitComplete: x, children: T.isOpen && /* @__PURE__ */ I.jsx(qo, { ...r, children: n }) }) }) });
};
Zf.displayName = "Modal";
var ls = "right-scroll-bar-position", cs = "width-before-scroll-bar", H2 = "with-scroll-bars-hidden", q2 = "--removed-body-scroll-bar-size", Ub = eb(), yc = function() {
}, ll = te.forwardRef(function(e, t) {
  var r = te.useRef(null), n = te.useState({
    onScrollCapture: yc,
    onWheelCapture: yc,
    onTouchMoveCapture: yc
  }), o = n[0], a = n[1], i = e.forwardProps, s = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, d = e.shards, m = e.sideCar, y = e.noIsolation, x = e.inert, w = e.allowPinchZoom, _ = e.as, T = _ === void 0 ? "div" : _, P = e.gapMode, k = Zg(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), $ = m, S = Xg([r, t]), C = Rr(Rr({}, k), o);
  return te.createElement(
    te.Fragment,
    null,
    u && te.createElement($, { sideCar: Ub, removeScrollBar: c, shards: d, noIsolation: y, inert: x, setCallbacks: a, allowPinchZoom: !!w, lockRef: r, gapMode: P }),
    i ? te.cloneElement(te.Children.only(s), Rr(Rr({}, C), { ref: S })) : te.createElement(T, Rr({}, C, { className: l, ref: S }), s)
  );
});
ll.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ll.classNames = {
  fullWidth: cs,
  zeroRight: ls
};
var _m, Y2 = function() {
  if (_m)
    return _m;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function K2() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Y2();
  return t && e.setAttribute("nonce", t), e;
}
function G2(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function X2(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Z2 = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = K2()) && (G2(t, r), X2(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, J2 = function() {
  var e = Z2();
  return function(t, r) {
    te.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Hb = function() {
  var e = J2(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, Q2 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, vc = function(e) {
  return parseInt(e || "", 10) || 0;
}, eL = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [vc(r), vc(n), vc(o)];
}, tL = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Q2;
  var t = eL(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, rL = Hb(), nL = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(H2, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(s, "px ").concat(n, `;
  }
  body {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(s, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ls, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(cs, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(ls, " .").concat(ls, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(cs, " .").concat(cs, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(q2, ": ").concat(s, `px;
  }
`);
}, oL = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n, a = te.useMemo(function() {
    return tL(o);
  }, [o]);
  return te.createElement(rL, { styles: nL(a, !t, o, r ? "" : "!important") });
}, Eu = !1;
if (typeof window < "u")
  try {
    var zi = Object.defineProperty({}, "passive", {
      get: function() {
        return Eu = !0, !0;
      }
    });
    window.addEventListener("test", zi, zi), window.removeEventListener("test", zi, zi);
  } catch {
    Eu = !1;
  }
var co = Eu ? { passive: !1 } : !1, aL = function(e) {
  return e.tagName === "TEXTAREA";
}, qb = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !aL(e) && r[t] === "visible")
  );
}, iL = function(e) {
  return qb(e, "overflowY");
}, sL = function(e) {
  return qb(e, "overflowX");
}, Pm = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Yb(e, n);
    if (o) {
      var a = Kb(e, n), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, lL = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, cL = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Yb = function(e, t) {
  return e === "v" ? iL(t) : sL(t);
}, Kb = function(e, t) {
  return e === "v" ? lL(t) : cL(t);
}, uL = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, fL = function(e, t, r, n, o) {
  var a = uL(e, window.getComputedStyle(t).direction), i = a * n, s = r.target, l = t.contains(s), c = !1, u = i > 0, d = 0, m = 0;
  do {
    var y = Kb(e, s), x = y[0], w = y[1], _ = y[2], T = w - _ - a * x;
    (x || T) && Yb(e, s) && (d += T, m += x), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (u && (o && Math.abs(d) < 1 || !o && i > d) || !u && (o && Math.abs(m) < 1 || !o && -i > m)) && (c = !0), c;
}, Wi = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Om = function(e) {
  return [e.deltaX, e.deltaY];
}, Em = function(e) {
  return e && "current" in e ? e.current : e;
}, dL = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, pL = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, hL = 0, uo = [];
function mL(e) {
  var t = te.useRef([]), r = te.useRef([0, 0]), n = te.useRef(), o = te.useState(hL++)[0], a = te.useState(Hb)[0], i = te.useRef(e);
  te.useEffect(function() {
    i.current = e;
  }, [e]), te.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var w = zI([e.lockRef.current], (e.shards || []).map(Em), !0).filter(Boolean);
      return w.forEach(function(_) {
        return _.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), w.forEach(function(_) {
          return _.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = te.useCallback(function(w, _) {
    if ("touches" in w && w.touches.length === 2)
      return !i.current.allowPinchZoom;
    var T = Wi(w), P = r.current, k = "deltaX" in w ? w.deltaX : P[0] - T[0], $ = "deltaY" in w ? w.deltaY : P[1] - T[1], S, C = w.target, v = Math.abs(k) > Math.abs($) ? "h" : "v";
    if ("touches" in w && v === "h" && C.type === "range")
      return !1;
    var f = Pm(v, C);
    if (!f)
      return !0;
    if (f ? S = v : (S = v === "v" ? "h" : "v", f = Pm(v, C)), !f)
      return !1;
    if (!n.current && "changedTouches" in w && (k || $) && (n.current = S), !S)
      return !0;
    var h = n.current || S;
    return fL(h, _, w, h === "h" ? k : $, !0);
  }, []), l = te.useCallback(function(w) {
    var _ = w;
    if (!(!uo.length || uo[uo.length - 1] !== a)) {
      var T = "deltaY" in _ ? Om(_) : Wi(_), P = t.current.filter(function(S) {
        return S.name === _.type && (S.target === _.target || _.target === S.shadowParent) && dL(S.delta, T);
      })[0];
      if (P && P.should) {
        _.cancelable && _.preventDefault();
        return;
      }
      if (!P) {
        var k = (i.current.shards || []).map(Em).filter(Boolean).filter(function(S) {
          return S.contains(_.target);
        }), $ = k.length > 0 ? s(_, k[0]) : !i.current.noIsolation;
        $ && _.cancelable && _.preventDefault();
      }
    }
  }, []), c = te.useCallback(function(w, _, T, P) {
    var k = { name: w, delta: _, target: T, should: P, shadowParent: yL(T) };
    t.current.push(k), setTimeout(function() {
      t.current = t.current.filter(function($) {
        return $ !== k;
      });
    }, 1);
  }, []), u = te.useCallback(function(w) {
    r.current = Wi(w), n.current = void 0;
  }, []), d = te.useCallback(function(w) {
    c(w.type, Om(w), w.target, s(w, e.lockRef.current));
  }, []), m = te.useCallback(function(w) {
    c(w.type, Wi(w), w.target, s(w, e.lockRef.current));
  }, []);
  te.useEffect(function() {
    return uo.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", l, co), document.addEventListener("touchmove", l, co), document.addEventListener("touchstart", u, co), function() {
      uo = uo.filter(function(w) {
        return w !== a;
      }), document.removeEventListener("wheel", l, co), document.removeEventListener("touchmove", l, co), document.removeEventListener("touchstart", u, co);
    };
  }, []);
  var y = e.removeScrollBar, x = e.inert;
  return te.createElement(
    te.Fragment,
    null,
    x ? te.createElement(a, { styles: pL(o) }) : null,
    y ? te.createElement(oL, { gapMode: e.gapMode }) : null
  );
}
function yL(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const vL = WI(Ub, mL);
var Gb = te.forwardRef(function(e, t) {
  return te.createElement(ll, Rr({}, e, { ref: t, sideCar: vL }));
});
Gb.classNames = ll.classNames;
const gL = Gb;
function bL(e) {
  const {
    autoFocus: t,
    trapFocus: r,
    dialogRef: n,
    initialFocusRef: o,
    blockScrollOnMount: a,
    allowPinchZoom: i,
    finalFocusRef: s,
    returnFocusOnClose: l,
    preserveScrollBarGap: c,
    lockFocusAcrossFrames: u,
    isOpen: d
  } = Zn(), [m, y] = bg();
  Me(() => {
    !m && y && setTimeout(y);
  }, [m, y]);
  const x = zb(n, d);
  return /* @__PURE__ */ I.jsx(
    kb,
    {
      autoFocus: t,
      isDisabled: !r,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: n,
      lockFocusAcrossFrames: u,
      children: /* @__PURE__ */ I.jsx(
        gL,
        {
          removeScrollBar: !c,
          allowPinchZoom: i,
          enabled: x === 1 && a,
          forwardProps: !0,
          children: e.children
        }
      )
    }
  );
}
var Jf = Le(
  (e, t) => {
    const {
      className: r,
      children: n,
      containerProps: o,
      motionProps: a,
      ...i
    } = e, { getDialogProps: s, getDialogContainerProps: l } = Zn(), c = s(i, t), u = l(o), d = Ye("chakra-modal__content", r), m = Go(), y = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...m.dialog
    }, x = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...m.dialogContainer
    }, { motionPreset: w } = Zn();
    return /* @__PURE__ */ I.jsx(bL, { children: /* @__PURE__ */ I.jsx(
      we.div,
      {
        ...u,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: x,
        children: /* @__PURE__ */ I.jsx(
          Vb,
          {
            preset: w,
            motionProps: a,
            className: d,
            ...c,
            __css: y,
            children: n
          }
        )
      }
    ) });
  }
);
Jf.displayName = "ModalContent";
var Qf = Le(
  (e, t) => {
    const { className: r, ...n } = e, o = Ye("chakra-modal__footer", r), i = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ...Go().footer
    };
    return /* @__PURE__ */ I.jsx(
      we.footer,
      {
        ref: t,
        ...n,
        __css: i,
        className: o
      }
    );
  }
);
Qf.displayName = "ModalFooter";
var ed = Le(
  (e, t) => {
    const { className: r, ...n } = e, { headerId: o, setHeaderMounted: a } = Zn();
    Me(() => (a(!0), () => a(!1)), [a]);
    const i = Ye("chakra-modal__header", r), l = {
      flex: 0,
      ...Go().header
    };
    return /* @__PURE__ */ I.jsx(
      we.header,
      {
        ref: t,
        className: i,
        id: o,
        ...n,
        __css: l
      }
    );
  }
);
ed.displayName = "ModalHeader";
var SL = we(no.div), td = Le(
  (e, t) => {
    const { className: r, transition: n, motionProps: o, ...a } = e, i = Ye("chakra-modal__overlay", r), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Go().overlay
    }, { motionPreset: c } = Zn(), d = o || (c === "none" ? {} : Vg);
    return /* @__PURE__ */ I.jsx(
      SL,
      {
        ...d,
        __css: l,
        ref: t,
        className: i,
        ...a
      }
    );
  }
);
td.displayName = "ModalOverlay";
var rd = Le((e, t) => {
  const { className: r, ...n } = e, { bodyId: o, setBodyMounted: a } = Zn();
  Me(() => (a(!0), () => a(!1)), [a]);
  const i = Ye("chakra-modal__body", r), s = Go();
  return /* @__PURE__ */ I.jsx(
    we.div,
    {
      ref: t,
      className: i,
      id: o,
      ...n,
      __css: s.body
    }
  );
});
rd.displayName = "ModalBody";
var Xb = Le(
  (e, t) => {
    const { onClick: r, className: n, ...o } = e, { onClose: a } = Zn(), i = Ye("chakra-modal__close-btn", n), s = Go();
    return /* @__PURE__ */ I.jsx(
      Rf,
      {
        ref: t,
        __css: s.closeButton,
        className: i,
        onClick: ft(r, (l) => {
          l.stopPropagation(), a();
        }),
        ...o
      }
    );
  }
);
Xb.displayName = "ModalCloseButton";
function wL(e, t, r) {
  return (e - t) * 100 / (r - t);
}
ii({
  "0%": {
    strokeDasharray: "1, 400",
    strokeDashoffset: "0"
  },
  "50%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-100"
  },
  "100%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-260"
  }
});
ii({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
var xL = ii({
  "0%": { left: "-40%" },
  "100%": { left: "100%" }
}), _L = ii({
  from: { backgroundPosition: "1rem 0" },
  to: { backgroundPosition: "0 0" }
});
function PL(e) {
  const {
    value: t = 0,
    min: r,
    max: n,
    valueText: o,
    getValueText: a,
    isIndeterminate: i,
    role: s = "progressbar"
  } = e, l = wL(t, r, n);
  return {
    bind: {
      "data-indeterminate": i ? "" : void 0,
      "aria-valuemax": n,
      "aria-valuemin": r,
      "aria-valuenow": i ? void 0 : t,
      "aria-valuetext": (() => {
        if (t != null)
          return typeof a == "function" ? a(t, l) : o;
      })(),
      role: s
    },
    percent: l,
    value: t
  };
}
var [OL, EL] = yr({
  name: "ProgressStylesContext",
  errorMessage: `useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `
}), kL = Le(
  (e, t) => {
    const { min: r, max: n, value: o, isIndeterminate: a, role: i, ...s } = e, l = PL({
      value: o,
      min: r,
      max: n,
      isIndeterminate: a,
      role: i
    }), u = {
      height: "100%",
      ...EL().filledTrack
    };
    return /* @__PURE__ */ I.jsx(
      we.div,
      {
        ref: t,
        style: { width: `${l.percent}%`, ...s.style },
        ...l.bind,
        ...s,
        __css: u
      }
    );
  }
), Zb = Le((e, t) => {
  var r;
  const {
    value: n,
    min: o = 0,
    max: a = 100,
    hasStripe: i,
    isAnimated: s,
    children: l,
    borderRadius: c,
    isIndeterminate: u,
    "aria-label": d,
    "aria-labelledby": m,
    "aria-valuetext": y,
    title: x,
    role: w,
    ..._
  } = Wr(e), T = li("Progress", e), P = c ?? ((r = T.track) == null ? void 0 : r.borderRadius), k = { animation: `${_L} 1s linear infinite` }, C = {
    ...!u && i && s && k,
    ...u && {
      position: "absolute",
      willChange: "left",
      minWidth: "50%",
      animation: `${xL} 1s ease infinite normal none running`
    }
  }, v = {
    overflow: "hidden",
    position: "relative",
    ...T.track
  };
  return /* @__PURE__ */ I.jsx(
    we.div,
    {
      ref: t,
      borderRadius: P,
      __css: v,
      ..._,
      children: /* @__PURE__ */ I.jsxs(OL, { value: T, children: [
        /* @__PURE__ */ I.jsx(
          kL,
          {
            "aria-label": d,
            "aria-labelledby": m,
            "aria-valuetext": y,
            min: o,
            max: a,
            value: n,
            isIndeterminate: u,
            css: C,
            borderRadius: P,
            title: x,
            role: w
          }
        ),
        l
      ] })
    }
  );
});
Zb.displayName = "Progress";
function TL(e) {
  return e && Qt(e) && Qt(e.target);
}
function CL(e = {}) {
  const {
    onChange: t,
    value: r,
    defaultValue: n,
    name: o,
    isDisabled: a,
    isFocusable: i,
    isNative: s,
    ...l
  } = e, [c, u] = ue(n || ""), d = typeof r < "u", m = d ? r : c, y = De(null), x = pe(() => {
    const S = y.current;
    if (!S)
      return;
    let C = "input:not(:disabled):checked";
    const v = S.querySelector(
      C
    );
    if (v) {
      v.focus();
      return;
    }
    C = "input:not(:disabled)";
    const f = S.querySelector(C);
    f == null || f.focus();
  }, []), _ = `radio-${zr()}`, T = o || _, P = pe(
    (S) => {
      const C = TL(S) ? S.target.value : S;
      d || u(C), t == null || t(String(C));
    },
    [t, d]
  ), k = pe(
    (S = {}, C = null) => ({
      ...S,
      ref: nn(C, y),
      role: "radiogroup"
    }),
    []
  ), $ = pe(
    (S = {}, C = null) => ({
      ...S,
      ref: C,
      name: T,
      [s ? "checked" : "isChecked"]: m != null ? S.value === m : void 0,
      onChange(f) {
        P(f);
      },
      "data-radiogroup": !0
    }),
    [s, T, P, m]
  );
  return {
    getRootProps: k,
    getRadioProps: $,
    name: T,
    ref: y,
    focus: x,
    setValue: u,
    value: m,
    onChange: P,
    isDisabled: a,
    isFocusable: i,
    htmlProps: l
  };
}
var [RL, Jb] = yr({
  name: "RadioGroupContext",
  strict: !1
}), Qb = Le((e, t) => {
  const {
    colorScheme: r,
    size: n,
    variant: o,
    children: a,
    className: i,
    isDisabled: s,
    isFocusable: l,
    ...c
  } = e, { value: u, onChange: d, getRootProps: m, name: y, htmlProps: x } = CL(c), w = ot(
    () => ({
      name: y,
      size: n,
      onChange: d,
      colorScheme: r,
      value: u,
      variant: o,
      isDisabled: s,
      isFocusable: l
    }),
    [
      y,
      n,
      d,
      r,
      u,
      o,
      s,
      l
    ]
  );
  return /* @__PURE__ */ I.jsx(RL, { value: w, children: /* @__PURE__ */ I.jsx(
    we.div,
    {
      ...m(x, t),
      className: Ye("chakra-radio-group", i),
      children: a
    }
  ) });
});
Qb.displayName = "RadioGroup";
var AL = {
  border: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
function DL(e = {}) {
  const {
    defaultChecked: t,
    isChecked: r,
    isFocusable: n,
    isDisabled: o,
    isReadOnly: a,
    isRequired: i,
    onChange: s,
    isInvalid: l,
    name: c,
    value: u,
    id: d,
    "data-radiogroup": m,
    "aria-describedby": y,
    ...x
  } = e, w = `radio-${zr()}`, _ = al(), P = !!Jb() || !!m;
  let $ = !!_ && !P ? _.id : w;
  $ = d ?? $;
  const S = o ?? (_ == null ? void 0 : _.isDisabled), C = a ?? (_ == null ? void 0 : _.isReadOnly), v = i ?? (_ == null ? void 0 : _.isRequired), f = l ?? (_ == null ? void 0 : _.isInvalid), [h, p] = ue(!1), [g, A] = ue(!1), [D, R] = ue(!1), [F, U] = ue(!1), [L, j] = ue(!!t), V = typeof r < "u", E = V ? r : L;
  Me(() => CI(p), []);
  const O = pe(
    (ne) => {
      if (C || S) {
        ne.preventDefault();
        return;
      }
      V || j(ne.target.checked), s == null || s(ne);
    },
    [V, S, C, s]
  ), B = pe(
    (ne) => {
      ne.key === " " && U(!0);
    },
    [U]
  ), K = pe(
    (ne) => {
      ne.key === " " && U(!1);
    },
    [U]
  ), Y = pe(
    (ne = {}, G = null) => ({
      ...ne,
      ref: G,
      "data-active": qe(F),
      "data-hover": qe(D),
      "data-disabled": qe(S),
      "data-invalid": qe(f),
      "data-checked": qe(E),
      "data-focus": qe(g),
      "data-focus-visible": qe(g && h),
      "data-readonly": qe(C),
      "aria-hidden": !0,
      onMouseDown: ft(ne.onMouseDown, () => U(!0)),
      onMouseUp: ft(ne.onMouseUp, () => U(!1)),
      onMouseEnter: ft(
        ne.onMouseEnter,
        () => R(!0)
      ),
      onMouseLeave: ft(
        ne.onMouseLeave,
        () => R(!1)
      )
    }),
    [
      F,
      D,
      S,
      f,
      E,
      g,
      C,
      h
    ]
  ), { onFocus: Z, onBlur: Q } = _ ?? {}, re = pe(
    (ne = {}, G = null) => {
      const ge = S && !n;
      return {
        ...ne,
        id: $,
        ref: G,
        type: "radio",
        name: c,
        value: u,
        onChange: ft(ne.onChange, O),
        onBlur: ft(
          Q,
          ne.onBlur,
          () => A(!1)
        ),
        onFocus: ft(
          Z,
          ne.onFocus,
          () => A(!0)
        ),
        onKeyDown: ft(ne.onKeyDown, B),
        onKeyUp: ft(ne.onKeyUp, K),
        checked: E,
        disabled: ge,
        readOnly: C,
        required: v,
        "aria-invalid": El(f),
        "aria-disabled": El(ge),
        "aria-required": El(v),
        "data-readonly": qe(C),
        "aria-describedby": y,
        style: AL
      };
    },
    [
      S,
      n,
      $,
      c,
      u,
      O,
      Q,
      Z,
      B,
      K,
      E,
      C,
      v,
      f,
      y
    ]
  );
  return {
    state: {
      isInvalid: f,
      isFocused: g,
      isChecked: E,
      isActive: F,
      isHovered: D,
      isDisabled: S,
      isReadOnly: C,
      isRequired: v
    },
    /**
     * @deprecated - use `getRadioProps` instead
     */
    getCheckboxProps: Y,
    getRadioProps: Y,
    getInputProps: re,
    getLabelProps: (ne = {}, G = null) => ({
      ...ne,
      ref: G,
      onMouseDown: ft(ne.onMouseDown, ML),
      "data-disabled": qe(S),
      "data-checked": qe(E),
      "data-invalid": qe(f)
    }),
    getRootProps: (ne, G = null) => ({
      ...ne,
      ref: G,
      "data-disabled": qe(S),
      "data-checked": qe(E),
      "data-invalid": qe(f)
    }),
    htmlProps: x
  };
}
function ML(e) {
  e.preventDefault(), e.stopPropagation();
}
function IL(e, t) {
  const r = {}, n = {};
  for (const [o, a] of Object.entries(e))
    t.includes(o) ? r[o] = a : n[o] = a;
  return [r, n];
}
var ku = Le((e, t) => {
  var r;
  const n = Jb(), { onChange: o, value: a } = e, i = li("Radio", { ...n, ...e }), s = Wr(e), {
    spacing: l = "0.5rem",
    children: c,
    isDisabled: u = n == null ? void 0 : n.isDisabled,
    isFocusable: d = n == null ? void 0 : n.isFocusable,
    inputProps: m,
    ...y
  } = s;
  let x = e.isChecked;
  (n == null ? void 0 : n.value) != null && a != null && (x = n.value === a);
  let w = o;
  n != null && n.onChange && a != null && (w = tx(n.onChange, o));
  const _ = (r = e == null ? void 0 : e.name) != null ? r : n == null ? void 0 : n.name, {
    getInputProps: T,
    getCheckboxProps: P,
    getLabelProps: k,
    getRootProps: $,
    htmlProps: S
  } = DL({
    ...y,
    isChecked: x,
    isFocusable: d,
    isDisabled: u,
    onChange: w,
    name: _
  }), [C, v] = IL(S, a_), f = P(v), h = T(m, t), p = k(), g = Object.assign({}, C, $()), A = {
    display: "inline-flex",
    alignItems: "center",
    verticalAlign: "top",
    cursor: "pointer",
    position: "relative",
    ...i.container
  }, D = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    ...i.control
  }, R = {
    userSelect: "none",
    marginStart: l,
    ...i.label
  };
  return /* @__PURE__ */ I.jsxs(we.label, { className: "chakra-radio", ...g, __css: A, children: [
    /* @__PURE__ */ I.jsx("input", { className: "chakra-radio__input", ...h }),
    /* @__PURE__ */ I.jsx(
      we.span,
      {
        className: "chakra-radio__control",
        ...f,
        __css: D
      }
    ),
    c && /* @__PURE__ */ I.jsx(
      we.span,
      {
        className: "chakra-radio__label",
        ...p,
        __css: R,
        children: c
      }
    )
  ] });
});
ku.displayName = "Radio";
var $L = {
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
}, Tu = (e) => {
  var t;
  return ((t = e.current) == null ? void 0 : t.ownerDocument) || document;
}, us = (e) => {
  var t, r;
  return ((r = (t = e.current) == null ? void 0 : t.ownerDocument) == null ? void 0 : r.defaultView) || window;
};
function jL(e = {}) {
  const {
    openDelay: t = 0,
    closeDelay: r = 0,
    closeOnClick: n = !0,
    closeOnMouseDown: o,
    closeOnScroll: a,
    closeOnPointerDown: i = o,
    closeOnEsc: s = !0,
    onOpen: l,
    onClose: c,
    placement: u,
    id: d,
    isOpen: m,
    defaultIsOpen: y,
    arrowSize: x = 10,
    arrowShadowColor: w,
    arrowPadding: _,
    modifiers: T,
    isDisabled: P,
    gutter: k,
    offset: $,
    direction: S,
    ...C
  } = e, { isOpen: v, onOpen: f, onClose: h } = T2({
    isOpen: m,
    defaultIsOpen: y,
    onOpen: l,
    onClose: c
  }), { referenceRef: p, getPopperProps: g, getArrowInnerProps: A, getArrowProps: D } = E2({
    enabled: v,
    placement: u,
    arrowPadding: _,
    modifiers: T,
    gutter: k,
    offset: $,
    direction: S
  }), R = zr(), U = `tooltip-${d ?? R}`, L = De(null), j = De(), V = pe(() => {
    j.current && (clearTimeout(j.current), j.current = void 0);
  }, []), E = De(), O = pe(() => {
    E.current && (clearTimeout(E.current), E.current = void 0);
  }, []), B = pe(() => {
    O(), h();
  }, [h, O]), K = LL(L, B), Y = pe(() => {
    if (!P && !j.current) {
      v && K();
      const G = us(L);
      j.current = G.setTimeout(f, t);
    }
  }, [K, P, v, f, t]), Z = pe(() => {
    V();
    const G = us(L);
    E.current = G.setTimeout(B, r);
  }, [r, B, V]), Q = pe(() => {
    v && n && Z();
  }, [n, Z, v]), re = pe(() => {
    v && i && Z();
  }, [i, Z, v]), J = pe(
    (G) => {
      v && G.key === "Escape" && Z();
    },
    [v, Z]
  );
  oc(
    () => Tu(L),
    "keydown",
    s ? J : void 0
  ), oc(
    () => {
      if (!a)
        return null;
      const G = L.current;
      if (!G)
        return null;
      const ge = Ob(G);
      return ge.localName === "body" ? us(L) : ge;
    },
    "scroll",
    () => {
      v && a && B();
    },
    { passive: !0, capture: !0 }
  ), Me(() => {
    P && (V(), v && h());
  }, [P, v, h, V]), Me(() => () => {
    V(), O();
  }, [V, O]), oc(() => L.current, "pointerleave", Z);
  const oe = pe(
    (G = {}, ge = null) => ({
      ...G,
      ref: nn(L, ge, p),
      onPointerEnter: ft(G.onPointerEnter, (Be) => {
        Be.pointerType !== "touch" && Y();
      }),
      onClick: ft(G.onClick, Q),
      onPointerDown: ft(G.onPointerDown, re),
      onFocus: ft(G.onFocus, Y),
      onBlur: ft(G.onBlur, Z),
      "aria-describedby": v ? U : void 0
    }),
    [
      Y,
      Z,
      re,
      v,
      U,
      Q,
      p
    ]
  ), ae = pe(
    (G = {}, ge = null) => g(
      {
        ...G,
        style: {
          ...G.style,
          [kt.arrowSize.var]: x ? `${x}px` : void 0,
          [kt.arrowShadowColor.var]: w
        }
      },
      ge
    ),
    [g, x, w]
  ), ne = pe(
    (G = {}, ge = null) => {
      const et = {
        ...G.style,
        position: "relative",
        transformOrigin: kt.transformOrigin.varRef
      };
      return {
        ref: ge,
        ...C,
        ...G,
        id: U,
        role: "tooltip",
        style: et
      };
    },
    [C, U]
  );
  return {
    isOpen: v,
    show: Y,
    hide: Z,
    getTriggerProps: oe,
    getTooltipProps: ne,
    getTooltipPositionerProps: ae,
    getArrowProps: D,
    getArrowInnerProps: A
  };
}
var gc = "chakra-ui:close-tooltip";
function LL(e, t) {
  return Me(() => {
    const r = Tu(e);
    return r.addEventListener(gc, t), () => r.removeEventListener(gc, t);
  }, [t, e]), () => {
    const r = Tu(e), n = us(e);
    r.dispatchEvent(new n.CustomEvent(gc));
  };
}
function FL(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function NL(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
var BL = we(no.div), Nr = Le((e, t) => {
  var r, n;
  const o = eo("Tooltip", e), a = Wr(e), i = Iy(), {
    children: s,
    label: l,
    shouldWrapChildren: c,
    "aria-label": u,
    hasArrow: d,
    bg: m,
    portalProps: y,
    background: x,
    backgroundColor: w,
    bgColor: _,
    motionProps: T,
    ...P
  } = a, k = (n = (r = x ?? w) != null ? r : m) != null ? n : _;
  if (k) {
    o.bg = k;
    const g = b_(i, "colors", k);
    o[kt.arrowBg.var] = g;
  }
  const $ = jL({ ...P, direction: i.direction }), S = typeof s == "string" || c;
  let C;
  if (S)
    C = /* @__PURE__ */ I.jsx(
      we.span,
      {
        display: "inline-block",
        tabIndex: 0,
        ...$.getTriggerProps(),
        children: s
      }
    );
  else {
    const g = Ns.only(s);
    C = Fs(
      g,
      $.getTriggerProps(g.props, g.ref)
    );
  }
  const v = !!u, f = $.getTooltipProps({}, t), h = v ? FL(f, ["role", "id"]) : f, p = NL(f, ["role", "id"]);
  return l ? /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
    C,
    /* @__PURE__ */ I.jsx(Yo, { children: $.isOpen && /* @__PURE__ */ I.jsx(qo, { ...y, children: /* @__PURE__ */ I.jsx(
      we.div,
      {
        ...$.getTooltipPositionerProps(),
        __css: {
          zIndex: o.zIndex,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ I.jsxs(
          BL,
          {
            variants: $L,
            initial: "exit",
            animate: "enter",
            exit: "exit",
            ...T,
            ...h,
            __css: o,
            children: [
              l,
              v && /* @__PURE__ */ I.jsx(we.span, { srOnly: !0, ...p, children: u }),
              d && /* @__PURE__ */ I.jsx(
                we.div,
                {
                  "data-popper-arrow": !0,
                  className: "chakra-tooltip__arrow-wrapper",
                  children: /* @__PURE__ */ I.jsx(
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
  ] }) : /* @__PURE__ */ I.jsx(I.Fragment, { children: s });
});
Nr.displayName = "Tooltip";
var e0 = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, km = ke.createContext && ke.createContext(e0), Sn = function() {
  return Sn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Sn.apply(this, arguments);
}, VL = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function t0(e) {
  return e && e.map(function(t, r) {
    return ke.createElement(t.tag, Sn({
      key: r
    }, t.attr), t0(t.child));
  });
}
function oo(e) {
  return function(t) {
    return ke.createElement(zL, Sn({
      attr: Sn({}, e.attr)
    }, t), t0(e.child));
  };
}
function zL(e) {
  var t = function(r) {
    var n = e.attr, o = e.size, a = e.title, i = VL(e, ["attr", "size", "title"]), s = o || r.size || "1em", l;
    return r.className && (l = r.className), e.className && (l = (l ? l + " " : "") + e.className), ke.createElement("svg", Sn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, i, {
      className: l,
      style: Sn(Sn({
        color: e.color || r.color
      }, r.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && ke.createElement("title", null, a), e.children);
  };
  return km !== void 0 ? ke.createElement(km.Consumer, null, function(r) {
    return t(r);
  }) : t(e0);
}
function WL(e) {
  return oo({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "20 6 9 17 4 12" } }] })(e);
}
function Tm(e) {
  return oo({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" } }, { tag: "path", attr: { d: "M19 10v2a7 7 0 0 1-14 0v-2" } }, { tag: "line", attr: { x1: "12", y1: "19", x2: "12", y2: "23" } }, { tag: "line", attr: { x1: "8", y1: "23", x2: "16", y2: "23" } }] })(e);
}
function UL(e) {
  return oo({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "1 4 1 10 7 10" } }, { tag: "polyline", attr: { points: "23 20 23 14 17 14" } }, { tag: "path", attr: { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" } }] })(e);
}
function HL(e) {
  return oo({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polygon", attr: { points: "5 4 15 12 5 20 5 4" } }, { tag: "line", attr: { x1: "19", y1: "5", x2: "19", y2: "19" } }] })(e);
}
function qL(e) {
  return oo({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "line", attr: { x1: "18", y1: "6", x2: "6", y2: "18" } }, { tag: "line", attr: { x1: "6", y1: "6", x2: "18", y2: "18" } }] })(e);
}
const YL = ({
  onClick: e,
  showInterview: t,
  botPreference: r
}) => {
  const n = !r || r === "male" ? new URL("./images/avatar_gif.gif", import.meta.url).href : new URL("./images/female_avatar.gif", import.meta.url).href;
  return /* @__PURE__ */ I.jsx(Nr, { hasArrow: !0, label: t ? "Hide Interview" : "Show Interview", placement: "left", children: /* @__PURE__ */ I.jsx(
    fr,
    {
      "aria-label": "Toggle Interview",
      size: "lg",
      colorScheme: "facebook",
      borderRadius: "50%",
      width: "fit-content",
      position: "absolute",
      right: "20px",
      bottom: "20px",
      h: "80px",
      w: "80px",
      padding: 0,
      onClick: e,
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
      zIndex: 2,
      children: t ? (
        // <Image h={'80px'} src={<FiX />} borderRadius={'50%'} />
        /* @__PURE__ */ I.jsx(qL, { size: "60px" })
      ) : /* @__PURE__ */ I.jsx(Df, { h: "80px", src: n, borderRadius: "50%" })
    }
  ) });
};
var KL = Ig({
  displayName: "SunIcon",
  path: /* @__PURE__ */ I.jsxs(
    "g",
    {
      strokeLinejoin: "round",
      strokeLinecap: "round",
      strokeWidth: "2",
      fill: "none",
      stroke: "currentColor",
      children: [
        /* @__PURE__ */ I.jsx("circle", { cx: "12", cy: "12", r: "5" }),
        /* @__PURE__ */ I.jsx("path", { d: "M12 1v2" }),
        /* @__PURE__ */ I.jsx("path", { d: "M12 21v2" }),
        /* @__PURE__ */ I.jsx("path", { d: "M4.22 4.22l1.42 1.42" }),
        /* @__PURE__ */ I.jsx("path", { d: "M18.36 18.36l1.42 1.42" }),
        /* @__PURE__ */ I.jsx("path", { d: "M1 12h2" }),
        /* @__PURE__ */ I.jsx("path", { d: "M21 12h2" }),
        /* @__PURE__ */ I.jsx("path", { d: "M4.22 19.78l1.42-1.42" }),
        /* @__PURE__ */ I.jsx("path", { d: "M18.36 5.64l1.42-1.42" })
      ]
    }
  )
}), GL = Ig({
  d: "M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z",
  displayName: "MoonIcon"
});
const XL = () => {
  const { colorMode: e, toggleColorMode: t } = Ys();
  return /* @__PURE__ */ I.jsx(
    Nr,
    {
      hasArrow: !0,
      placement: "left",
      label: e === "light" ? "Toggle Dark Mode" : "Toggle Light Mode",
      children: /* @__PURE__ */ I.jsx(
        fr,
        {
          onClick: t,
          width: "fit-content",
          position: "absolute",
          top: "20px",
          right: "20px",
          zIndex: 20,
          children: e === "light" ? /* @__PURE__ */ I.jsx(GL, {}) : /* @__PURE__ */ I.jsx(KL, {})
        }
      )
    }
  );
};
function r0(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ZL } = Object.prototype, { getPrototypeOf: nd } = Object, cl = ((e) => (t) => {
  const r = ZL.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Hr = (e) => (e = e.toLowerCase(), (t) => cl(t) === e), ul = (e) => (t) => typeof t === e, { isArray: Xo } = Array, ei = ul("undefined");
function JL(e) {
  return e !== null && !ei(e) && e.constructor !== null && !ei(e.constructor) && pr(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const n0 = Hr("ArrayBuffer");
function QL(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && n0(e.buffer), t;
}
const eF = ul("string"), pr = ul("function"), o0 = ul("number"), fl = (e) => e !== null && typeof e == "object", tF = (e) => e === !0 || e === !1, fs = (e) => {
  if (cl(e) !== "object")
    return !1;
  const t = nd(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, rF = Hr("Date"), nF = Hr("File"), oF = Hr("Blob"), aF = Hr("FileList"), iF = (e) => fl(e) && pr(e.pipe), sF = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || pr(e.append) && ((t = cl(e)) === "formdata" || // detect form-data instance
  t === "object" && pr(e.toString) && e.toString() === "[object FormData]"));
}, lF = Hr("URLSearchParams"), cF = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Si(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), Xo(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = a.length;
    let s;
    for (n = 0; n < i; n++)
      s = a[n], t.call(null, e[s], s, e);
  }
}
function a0(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const i0 = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), s0 = (e) => !ei(e) && e !== i0;
function Cu() {
  const { caseless: e } = s0(this) && this || {}, t = {}, r = (n, o) => {
    const a = e && a0(t, o) || o;
    fs(t[a]) && fs(n) ? t[a] = Cu(t[a], n) : fs(n) ? t[a] = Cu({}, n) : Xo(n) ? t[a] = n.slice() : t[a] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Si(arguments[n], r);
  return t;
}
const uF = (e, t, r, { allOwnKeys: n } = {}) => (Si(t, (o, a) => {
  r && pr(o) ? e[a] = r0(o, r) : e[a] = o;
}, { allOwnKeys: n }), e), fF = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), dF = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, pF = (e, t, r, n) => {
  let o, a, i;
  const s = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      i = o[a], (!n || n(i, e, t)) && !s[i] && (t[i] = e[i], s[i] = !0);
    e = r !== !1 && nd(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, hF = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, mF = (e) => {
  if (!e)
    return null;
  if (Xo(e))
    return e;
  let t = e.length;
  if (!o0(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, yF = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && nd(Uint8Array)), vF = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, gF = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, bF = Hr("HTMLFormElement"), SF = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Cm = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), wF = Hr("RegExp"), l0 = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Si(r, (o, a) => {
    let i;
    (i = t(o, a, e)) !== !1 && (n[a] = i || o);
  }), Object.defineProperties(e, n);
}, xF = (e) => {
  l0(e, (t, r) => {
    if (pr(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (pr(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, _F = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((a) => {
      r[a] = !0;
    });
  };
  return Xo(e) ? n(e) : n(String(e).split(t)), r;
}, PF = () => {
}, OF = (e, t) => (e = +e, Number.isFinite(e) ? e : t), bc = "abcdefghijklmnopqrstuvwxyz", Rm = "0123456789", c0 = {
  DIGIT: Rm,
  ALPHA: bc,
  ALPHA_DIGIT: bc + bc.toUpperCase() + Rm
}, EF = (e = 16, t = c0.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function kF(e) {
  return !!(e && pr(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const TF = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (fl(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const a = Xo(n) ? [] : {};
        return Si(n, (i, s) => {
          const l = r(i, o + 1);
          !ei(l) && (a[s] = l);
        }), t[o] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, CF = Hr("AsyncFunction"), RF = (e) => e && (fl(e) || pr(e)) && pr(e.then) && pr(e.catch), X = {
  isArray: Xo,
  isArrayBuffer: n0,
  isBuffer: JL,
  isFormData: sF,
  isArrayBufferView: QL,
  isString: eF,
  isNumber: o0,
  isBoolean: tF,
  isObject: fl,
  isPlainObject: fs,
  isUndefined: ei,
  isDate: rF,
  isFile: nF,
  isBlob: oF,
  isRegExp: wF,
  isFunction: pr,
  isStream: iF,
  isURLSearchParams: lF,
  isTypedArray: yF,
  isFileList: aF,
  forEach: Si,
  merge: Cu,
  extend: uF,
  trim: cF,
  stripBOM: fF,
  inherits: dF,
  toFlatObject: pF,
  kindOf: cl,
  kindOfTest: Hr,
  endsWith: hF,
  toArray: mF,
  forEachEntry: vF,
  matchAll: gF,
  isHTMLForm: bF,
  hasOwnProperty: Cm,
  hasOwnProp: Cm,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: l0,
  freezeMethods: xF,
  toObjectSet: _F,
  toCamelCase: SF,
  noop: PF,
  toFiniteNumber: OF,
  findKey: a0,
  global: i0,
  isContextDefined: s0,
  ALPHABET: c0,
  generateString: EF,
  isSpecCompliantForm: kF,
  toJSONObject: TF,
  isAsyncFn: CF,
  isThenable: RF
};
function Oe(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
X.inherits(Oe, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: X.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const u0 = Oe.prototype, f0 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  f0[e] = { value: e };
});
Object.defineProperties(Oe, f0);
Object.defineProperty(u0, "isAxiosError", { value: !0 });
Oe.from = (e, t, r, n, o, a) => {
  const i = Object.create(u0);
  return X.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (s) => s !== "isAxiosError"), Oe.call(i, e.message, t, r, n, o), i.cause = e, i.name = e.name, a && Object.assign(i, a), i;
};
const AF = null;
function Ru(e) {
  return X.isPlainObject(e) || X.isArray(e);
}
function d0(e) {
  return X.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Am(e, t, r) {
  return e ? e.concat(t).map(function(o, a) {
    return o = d0(o), !r && a ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function DF(e) {
  return X.isArray(e) && !e.some(Ru);
}
const MF = X.toFlatObject(X, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function dl(e, t, r) {
  if (!X.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = X.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, _) {
    return !X.isUndefined(_[w]);
  });
  const n = r.metaTokens, o = r.visitor || u, a = r.dots, i = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && X.isSpecCompliantForm(t);
  if (!X.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(x) {
    if (x === null)
      return "";
    if (X.isDate(x))
      return x.toISOString();
    if (!l && X.isBlob(x))
      throw new Oe("Blob is not supported. Use a Buffer instead.");
    return X.isArrayBuffer(x) || X.isTypedArray(x) ? l && typeof Blob == "function" ? new Blob([x]) : Buffer.from(x) : x;
  }
  function u(x, w, _) {
    let T = x;
    if (x && !_ && typeof x == "object") {
      if (X.endsWith(w, "{}"))
        w = n ? w : w.slice(0, -2), x = JSON.stringify(x);
      else if (X.isArray(x) && DF(x) || (X.isFileList(x) || X.endsWith(w, "[]")) && (T = X.toArray(x)))
        return w = d0(w), T.forEach(function(k, $) {
          !(X.isUndefined(k) || k === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Am([w], $, a) : i === null ? w : w + "[]",
            c(k)
          );
        }), !1;
    }
    return Ru(x) ? !0 : (t.append(Am(_, w, a), c(x)), !1);
  }
  const d = [], m = Object.assign(MF, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Ru
  });
  function y(x, w) {
    if (!X.isUndefined(x)) {
      if (d.indexOf(x) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      d.push(x), X.forEach(x, function(T, P) {
        (!(X.isUndefined(T) || T === null) && o.call(
          t,
          T,
          X.isString(P) ? P.trim() : P,
          w,
          m
        )) === !0 && y(T, w ? w.concat(P) : [P]);
      }), d.pop();
    }
  }
  if (!X.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function Dm(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function od(e, t) {
  this._pairs = [], e && dl(e, this, t);
}
const p0 = od.prototype;
p0.append = function(t, r) {
  this._pairs.push([t, r]);
};
p0.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Dm);
  } : Dm;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function IF(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function h0(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || IF, o = r && r.serialize;
  let a;
  if (o ? a = o(t, r) : a = X.isURLSearchParams(t) ? t.toString() : new od(t, r).toString(n), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class $F {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    X.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Mm = $F, m0 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, jF = typeof URLSearchParams < "u" ? URLSearchParams : od, LF = typeof FormData < "u" ? FormData : null, FF = typeof Blob < "u" ? Blob : null, NF = {
  isBrowser: !0,
  classes: {
    URLSearchParams: jF,
    FormData: LF,
    Blob: FF
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, y0 = typeof window < "u" && typeof document < "u", BF = ((e) => y0 && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), VF = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), zF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: y0,
  hasStandardBrowserEnv: BF,
  hasStandardBrowserWebWorkerEnv: VF
}, Symbol.toStringTag, { value: "Module" })), Ir = {
  ...zF,
  ...NF
};
function WF(e, t) {
  return dl(e, new Ir.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, a) {
      return Ir.isNode && X.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function UF(e) {
  return X.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function HF(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let a;
  for (n = 0; n < o; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function v0(e) {
  function t(r, n, o, a) {
    let i = r[a++];
    const s = Number.isFinite(+i), l = a >= r.length;
    return i = !i && X.isArray(o) ? o.length : i, l ? (X.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !s) : ((!o[i] || !X.isObject(o[i])) && (o[i] = []), t(r, n, o[i], a) && X.isArray(o[i]) && (o[i] = HF(o[i])), !s);
  }
  if (X.isFormData(e) && X.isFunction(e.entries)) {
    const r = {};
    return X.forEachEntry(e, (n, o) => {
      t(UF(n), o, r, 0);
    }), r;
  }
  return null;
}
function qF(e, t, r) {
  if (X.isString(e))
    try {
      return (t || JSON.parse)(e), X.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const ad = {
  transitional: m0,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, a = X.isObject(t);
    if (a && X.isHTMLForm(t) && (t = new FormData(t)), X.isFormData(t))
      return o && o ? JSON.stringify(v0(t)) : t;
    if (X.isArrayBuffer(t) || X.isBuffer(t) || X.isStream(t) || X.isFile(t) || X.isBlob(t))
      return t;
    if (X.isArrayBufferView(t))
      return t.buffer;
    if (X.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return WF(t, this.formSerializer).toString();
      if ((s = X.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return dl(
          s ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return a || o ? (r.setContentType("application/json", !1), qF(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || ad.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (t && X.isString(t) && (n && !this.responseType || o)) {
      const i = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (i)
          throw s.name === "SyntaxError" ? Oe.from(s, Oe.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ir.classes.FormData,
    Blob: Ir.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
X.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ad.headers[e] = {};
});
const id = ad, YF = X.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), KF = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), r = i.substring(0, o).trim().toLowerCase(), n = i.substring(o + 1).trim(), !(!r || t[r] && YF[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Im = Symbol("internals");
function pa(e) {
  return e && String(e).trim().toLowerCase();
}
function ds(e) {
  return e === !1 || e == null ? e : X.isArray(e) ? e.map(ds) : String(e);
}
function GF(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const XF = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Sc(e, t, r, n, o) {
  if (X.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!X.isString(t)) {
    if (X.isString(n))
      return t.indexOf(n) !== -1;
    if (X.isRegExp(n))
      return n.test(t);
  }
}
function ZF(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function JF(e, t) {
  const r = X.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, a, i) {
        return this[n].call(this, t, o, a, i);
      },
      configurable: !0
    });
  });
}
class pl {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function a(s, l, c) {
      const u = pa(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = X.findKey(o, u);
      (!d || o[d] === void 0 || c === !0 || c === void 0 && o[d] !== !1) && (o[d || l] = ds(s));
    }
    const i = (s, l) => X.forEach(s, (c, u) => a(c, u, l));
    return X.isPlainObject(t) || t instanceof this.constructor ? i(t, r) : X.isString(t) && (t = t.trim()) && !XF(t) ? i(KF(t), r) : t != null && a(r, t, n), this;
  }
  get(t, r) {
    if (t = pa(t), t) {
      const n = X.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return GF(o);
        if (X.isFunction(r))
          return r.call(this, o, n);
        if (X.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = pa(t), t) {
      const n = X.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Sc(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function a(i) {
      if (i = pa(i), i) {
        const s = X.findKey(n, i);
        s && (!r || Sc(n, n[s], s, r)) && (delete n[s], o = !0);
      }
    }
    return X.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || Sc(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return X.forEach(this, (o, a) => {
      const i = X.findKey(n, a);
      if (i) {
        r[i] = ds(o), delete r[a];
        return;
      }
      const s = t ? ZF(a) : String(a).trim();
      s !== a && delete r[a], r[s] = ds(o), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return X.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && X.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[Im] = this[Im] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(i) {
      const s = pa(i);
      n[s] || (JF(o, i), n[s] = !0);
    }
    return X.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
pl.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
X.reduceDescriptors(pl.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
X.freezeMethods(pl);
const en = pl;
function wc(e, t) {
  const r = this || id, n = t || r, o = en.from(n.headers);
  let a = n.data;
  return X.forEach(e, function(s) {
    a = s.call(r, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function g0(e) {
  return !!(e && e.__CANCEL__);
}
function wi(e, t, r) {
  Oe.call(this, e ?? "canceled", Oe.ERR_CANCELED, t, r), this.name = "CanceledError";
}
X.inherits(wi, Oe, {
  __CANCEL__: !0
});
function QF(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new Oe(
    "Request failed with status code " + r.status,
    [Oe.ERR_BAD_REQUEST, Oe.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const eN = Ir.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, a) {
      const i = [e + "=" + encodeURIComponent(t)];
      X.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), X.isString(n) && i.push("path=" + n), X.isString(o) && i.push("domain=" + o), a === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function tN(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function rN(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function b0(e, t) {
  return e && !tN(t) ? rN(e, t) : t;
}
const nN = Ir.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function o(a) {
      let i = a;
      return t && (r.setAttribute("href", i), i = r.href), r.setAttribute("href", i), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = o(window.location.href), function(i) {
      const s = X.isString(i) ? o(i) : i;
      return s.protocol === n.protocol && s.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function oN(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function aN(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, a = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), u = n[a];
    i || (i = c), r[o] = l, n[o] = c;
    let d = a, m = 0;
    for (; d !== o; )
      m += r[d++], d = d % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), c - i < t)
      return;
    const y = u && c - u;
    return y ? Math.round(m * 1e3 / y) : void 0;
  };
}
function $m(e, t) {
  let r = 0;
  const n = aN(50, 250);
  return (o) => {
    const a = o.loaded, i = o.lengthComputable ? o.total : void 0, s = a - r, l = n(s), c = a <= i;
    r = a;
    const u = {
      loaded: a,
      total: i,
      progress: i ? a / i : void 0,
      bytes: s,
      rate: l || void 0,
      estimated: l && i && c ? (i - a) / l : void 0,
      event: o
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const iN = typeof XMLHttpRequest < "u", sN = iN && function(e) {
  return new Promise(function(r, n) {
    let o = e.data;
    const a = en.from(e.headers).normalize();
    let { responseType: i, withXSRFToken: s } = e, l;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    let u;
    if (X.isFormData(o)) {
      if (Ir.hasStandardBrowserEnv || Ir.hasStandardBrowserWebWorkerEnv)
        a.setContentType(!1);
      else if ((u = a.getContentType()) !== !1) {
        const [w, ..._] = u ? u.split(";").map((T) => T.trim()).filter(Boolean) : [];
        a.setContentType([w || "multipart/form-data", ..._].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (e.auth) {
      const w = e.auth.username || "", _ = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      a.set("Authorization", "Basic " + btoa(w + ":" + _));
    }
    const m = b0(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), h0(m, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function y() {
      if (!d)
        return;
      const w = en.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), T = {
        data: !i || i === "text" || i === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: w,
        config: e,
        request: d
      };
      QF(function(k) {
        r(k), c();
      }, function(k) {
        n(k), c();
      }, T), d = null;
    }
    if ("onloadend" in d ? d.onloadend = y : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, d.onabort = function() {
      d && (n(new Oe("Request aborted", Oe.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      n(new Oe("Network Error", Oe.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let _ = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const T = e.transitional || m0;
      e.timeoutErrorMessage && (_ = e.timeoutErrorMessage), n(new Oe(
        _,
        T.clarifyTimeoutError ? Oe.ETIMEDOUT : Oe.ECONNABORTED,
        e,
        d
      )), d = null;
    }, Ir.hasStandardBrowserEnv && (s && X.isFunction(s) && (s = s(e)), s || s !== !1 && nN(m))) {
      const w = e.xsrfHeaderName && e.xsrfCookieName && eN.read(e.xsrfCookieName);
      w && a.set(e.xsrfHeaderName, w);
    }
    o === void 0 && a.setContentType(null), "setRequestHeader" in d && X.forEach(a.toJSON(), function(_, T) {
      d.setRequestHeader(T, _);
    }), X.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), i && i !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", $m(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", $m(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (w) => {
      d && (n(!w || w.type ? new wi(null, e, d) : w), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const x = oN(m);
    if (x && Ir.protocols.indexOf(x) === -1) {
      n(new Oe("Unsupported protocol " + x + ":", Oe.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(o || null);
  });
}, Au = {
  http: AF,
  xhr: sN
};
X.forEach(Au, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const jm = (e) => `- ${e}`, lN = (e) => X.isFunction(e) || e === null || e === !1, S0 = {
  getAdapter: (e) => {
    e = X.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const o = {};
    for (let a = 0; a < t; a++) {
      r = e[a];
      let i;
      if (n = r, !lN(r) && (n = Au[(i = String(r)).toLowerCase()], n === void 0))
        throw new Oe(`Unknown adapter '${i}'`);
      if (n)
        break;
      o[i || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(o).map(
        ([s, l]) => `adapter ${s} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? a.length > 1 ? `since :
` + a.map(jm).join(`
`) : " " + jm(a[0]) : "as no adapter specified";
      throw new Oe(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Au
};
function xc(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new wi(null, e);
}
function Lm(e) {
  return xc(e), e.headers = en.from(e.headers), e.data = wc.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), S0.getAdapter(e.adapter || id.adapter)(e).then(function(n) {
    return xc(e), n.data = wc.call(
      e,
      e.transformResponse,
      n
    ), n.headers = en.from(n.headers), n;
  }, function(n) {
    return g0(n) || (xc(e), n && n.response && (n.response.data = wc.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = en.from(n.response.headers))), Promise.reject(n);
  });
}
const Fm = (e) => e instanceof en ? e.toJSON() : e;
function Wo(e, t) {
  t = t || {};
  const r = {};
  function n(c, u, d) {
    return X.isPlainObject(c) && X.isPlainObject(u) ? X.merge.call({ caseless: d }, c, u) : X.isPlainObject(u) ? X.merge({}, u) : X.isArray(u) ? u.slice() : u;
  }
  function o(c, u, d) {
    if (X.isUndefined(u)) {
      if (!X.isUndefined(c))
        return n(void 0, c, d);
    } else
      return n(c, u, d);
  }
  function a(c, u) {
    if (!X.isUndefined(u))
      return n(void 0, u);
  }
  function i(c, u) {
    if (X.isUndefined(u)) {
      if (!X.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, u);
  }
  function s(c, u, d) {
    if (d in t)
      return n(c, u);
    if (d in e)
      return n(void 0, c);
  }
  const l = {
    url: a,
    method: a,
    data: a,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: s,
    headers: (c, u) => o(Fm(c), Fm(u), !0)
  };
  return X.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = l[u] || o, m = d(e[u], t[u], u);
    X.isUndefined(m) && d !== s || (r[u] = m);
  }), r;
}
const w0 = "1.6.2", sd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  sd[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Nm = {};
sd.transitional = function(t, r, n) {
  function o(a, i) {
    return "[Axios v" + w0 + "] Transitional option '" + a + "'" + i + (n ? ". " + n : "");
  }
  return (a, i, s) => {
    if (t === !1)
      throw new Oe(
        o(i, " has been removed" + (r ? " in " + r : "")),
        Oe.ERR_DEPRECATED
      );
    return r && !Nm[i] && (Nm[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, i, s) : !0;
  };
};
function cN(e, t, r) {
  if (typeof e != "object")
    throw new Oe("options must be an object", Oe.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const a = n[o], i = t[a];
    if (i) {
      const s = e[a], l = s === void 0 || i(s, a, e);
      if (l !== !0)
        throw new Oe("option " + a + " must be " + l, Oe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Oe("Unknown option " + a, Oe.ERR_BAD_OPTION);
  }
}
const Du = {
  assertOptions: cN,
  validators: sd
}, pn = Du.validators;
class $s {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Mm(),
      response: new Mm()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Wo(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: a } = r;
    n !== void 0 && Du.assertOptions(n, {
      silentJSONParsing: pn.transitional(pn.boolean),
      forcedJSONParsing: pn.transitional(pn.boolean),
      clarifyTimeoutError: pn.transitional(pn.boolean)
    }, !1), o != null && (X.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Du.assertOptions(o, {
      encode: pn.function,
      serialize: pn.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = a && X.merge(
      a.common,
      a[r.method]
    );
    a && X.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (x) => {
        delete a[x];
      }
    ), r.headers = en.concat(i, a);
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function(w) {
      typeof w.runWhen == "function" && w.runWhen(r) === !1 || (l = l && w.synchronous, s.unshift(w.fulfilled, w.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(w) {
      c.push(w.fulfilled, w.rejected);
    });
    let u, d = 0, m;
    if (!l) {
      const x = [Lm.bind(this), void 0];
      for (x.unshift.apply(x, s), x.push.apply(x, c), m = x.length, u = Promise.resolve(r); d < m; )
        u = u.then(x[d++], x[d++]);
      return u;
    }
    m = s.length;
    let y = r;
    for (d = 0; d < m; ) {
      const x = s[d++], w = s[d++];
      try {
        y = x(y);
      } catch (_) {
        w.call(this, _);
        break;
      }
    }
    try {
      u = Lm.call(this, y);
    } catch (x) {
      return Promise.reject(x);
    }
    for (d = 0, m = c.length; d < m; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = Wo(this.defaults, t);
    const r = b0(t.baseURL, t.url);
    return h0(r, t.params, t.paramsSerializer);
  }
}
X.forEach(["delete", "get", "head", "options"], function(t) {
  $s.prototype[t] = function(r, n) {
    return this.request(Wo(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
X.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(a, i, s) {
      return this.request(Wo(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: i
      }));
    };
  }
  $s.prototype[t] = r(), $s.prototype[t + "Form"] = r(!0);
});
const ps = $s;
class ld {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let a;
      const i = new Promise((s) => {
        n.subscribe(s), a = s;
      }).then(o);
      return i.cancel = function() {
        n.unsubscribe(a);
      }, i;
    }, t(function(a, i, s) {
      n.reason || (n.reason = new wi(a, i, s), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new ld(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const uN = ld;
function fN(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function dN(e) {
  return X.isObject(e) && e.isAxiosError === !0;
}
const Mu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Mu).forEach(([e, t]) => {
  Mu[t] = e;
});
const pN = Mu;
function x0(e) {
  const t = new ps(e), r = r0(ps.prototype.request, t);
  return X.extend(r, ps.prototype, t, { allOwnKeys: !0 }), X.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return x0(Wo(e, o));
  }, r;
}
const pt = x0(id);
pt.Axios = ps;
pt.CanceledError = wi;
pt.CancelToken = uN;
pt.isCancel = g0;
pt.VERSION = w0;
pt.toFormData = dl;
pt.AxiosError = Oe;
pt.Cancel = pt.CanceledError;
pt.all = function(t) {
  return Promise.all(t);
};
pt.spread = fN;
pt.isAxiosError = dN;
pt.mergeConfig = Wo;
pt.AxiosHeaders = en;
pt.formToJSON = (e) => v0(X.isHTMLForm(e) ? new FormData(e) : e);
pt.getAdapter = S0.getAdapter;
pt.HttpStatusCode = pN;
pt.default = pt;
const ti = pt, hN = ({
  isOpen: e,
  onClose: t,
  botPreference: r,
  setBotPreference: n
}) => /* @__PURE__ */ I.jsx(I.Fragment, { children: /* @__PURE__ */ I.jsxs(Zf, { isOpen: e, onClose: () => {
}, isCentered: !0, children: [
  /* @__PURE__ */ I.jsx(td, {}),
  /* @__PURE__ */ I.jsxs(Jf, { children: [
    /* @__PURE__ */ I.jsx(ed, { children: "Bot Preference" }),
    /* @__PURE__ */ I.jsx(rd, { children: /* @__PURE__ */ I.jsxs(Ug, { as: "fieldset", children: [
      /* @__PURE__ */ I.jsx(Hg, { as: "legend", children: "Choose your bot preference" }),
      /* @__PURE__ */ I.jsx(
        Qb,
        {
          defaultValue: r,
          onChange: (o) => {
            n(o);
          },
          children: /* @__PURE__ */ I.jsxs(Ab, { spacing: 2, children: [
            /* @__PURE__ */ I.jsx(ku, { value: "male", children: "Male" }),
            /* @__PURE__ */ I.jsx(ku, { value: "female", children: "Female" })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ I.jsx(Qf, { children: /* @__PURE__ */ I.jsx(
      fr,
      {
        colorScheme: "facebook",
        mr: 3,
        onClick: () => {
          console.log("botPreference", r), t();
        },
        children: "Done"
      }
    ) })
  ] })
] }) }), mN = () => {
  const e = new URL("./images/interview_end.png", import.meta.url).href;
  return /* @__PURE__ */ I.jsx(I.Fragment, { children: /* @__PURE__ */ I.jsx(Rb, { spacing: 2, p: 4, justifyContent: "center", alignItems: "center", h: "100vh", children: /* @__PURE__ */ I.jsx(
    Df,
    {
      src: e,
      h: "90vh",
      style: {
        borderRadius: "30px",
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
      }
    }
  ) }) });
}, yN = (e) => {
  const { replayQuestion: t } = e;
  return /* @__PURE__ */ I.jsx(Nr, { label: "Replay", placement: "top", hasArrow: !0, children: /* @__PURE__ */ I.jsx(
    fr,
    {
      onClick: t,
      style: {
        borderRadius: "50%",
        border: "1px",
        width: "75px",
        height: "75px",
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
        // color: '#fff',
        // borderColor: '#ffffff',
      },
      children: /* @__PURE__ */ I.jsx(bn, { fontSize: "1.2rem", children: /* @__PURE__ */ I.jsx(
        UL,
        {
          style: {
            width: "2em",
            height: "2em",
            fontSize: "large"
          }
        }
      ) })
    }
  ) });
}, vN = (e) => {
  const { skipQuestion: t, loading: r } = e;
  return /* @__PURE__ */ I.jsx("div", { children: /* @__PURE__ */ I.jsx("main", { children: /* @__PURE__ */ I.jsx("div", { className: "audio-controls", children: /* @__PURE__ */ I.jsx("div", { children: /* @__PURE__ */ I.jsx(Nr, { label: "Skip Question", placement: "top", hasArrow: !0, children: /* @__PURE__ */ I.jsx("div", { children: /* @__PURE__ */ I.jsx(
    fr,
    {
      onClick: t,
      style: {
        borderRadius: "50%",
        border: "1px",
        width: "75px",
        height: "75px",
        // color: '#fff',
        // borderColor: '#ffffff',
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
      },
      isLoading: r,
      children: /* @__PURE__ */ I.jsx(
        HL,
        {
          style: {
            width: "2em",
            height: "2em",
            fontSize: "large"
          }
        }
      )
    }
  ) }) }) }) }) }) });
};
function gN(e) {
  return oo({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z" } }] })(e);
}
function bN(e) {
  return oo({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 0 0-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z" } }] })(e);
}
var _0 = {}, P0 = {}, Ne = {}, SN = function(t, r, n) {
  var o = document.head || document.getElementsByTagName("head")[0], a = document.createElement("script");
  typeof r == "function" && (n = r, r = {}), r = r || {}, n = n || function() {
  }, a.type = r.type || "text/javascript", a.charset = r.charset || "utf8", a.async = "async" in r ? !!r.async : !0, a.src = t, r.attrs && wN(a, r.attrs), r.text && (a.text = "" + r.text);
  var i = "onload" in a ? Bm : xN;
  i(a, n), a.onload || Bm(a, n), o.appendChild(a);
};
function wN(e, t) {
  for (var r in t)
    e.setAttribute(r, t[r]);
}
function Bm(e, t) {
  e.onload = function() {
    this.onerror = this.onload = null, t(null, e);
  }, e.onerror = function() {
    this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e);
  };
}
function xN(e, t) {
  e.onreadystatechange = function() {
    this.readyState != "complete" && this.readyState != "loaded" || (this.onreadystatechange = null, t(null, e));
  };
}
var _N = function(t) {
  return PN(t) && !ON(t);
};
function PN(e) {
  return !!e && typeof e == "object";
}
function ON(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || TN(e);
}
var EN = typeof Symbol == "function" && Symbol.for, kN = EN ? Symbol.for("react.element") : 60103;
function TN(e) {
  return e.$$typeof === kN;
}
function CN(e) {
  return Array.isArray(e) ? [] : {};
}
function ri(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Uo(CN(e), e, t) : e;
}
function RN(e, t, r) {
  return e.concat(t).map(function(n) {
    return ri(n, r);
  });
}
function AN(e, t) {
  if (!t.customMerge)
    return Uo;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : Uo;
}
function DN(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function Vm(e) {
  return Object.keys(e).concat(DN(e));
}
function O0(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function MN(e, t) {
  return O0(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function IN(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && Vm(e).forEach(function(o) {
    n[o] = ri(e[o], r);
  }), Vm(t).forEach(function(o) {
    MN(e, o) || (O0(e, o) && r.isMergeableObject(t[o]) ? n[o] = AN(o, r)(e[o], t[o], r) : n[o] = ri(t[o], r));
  }), n;
}
function Uo(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || RN, r.isMergeableObject = r.isMergeableObject || _N, r.cloneUnlessOtherwiseSpecified = ri;
  var n = Array.isArray(t), o = Array.isArray(e), a = n === o;
  return a ? n ? r.arrayMerge(e, t, r) : IN(e, t, r) : ri(t, r);
}
Uo.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, o) {
    return Uo(n, o, r);
  }, {});
};
var $N = Uo, E0 = $N;
Object.defineProperty(Ne, "__esModule", {
  value: !0
});
Ne.parseStartTime = YN;
Ne.parseEndTime = KN;
Ne.randomString = GN;
Ne.queryString = XN;
Ne.getSDK = ZN;
Ne.getConfig = JN;
Ne.omit = QN;
Ne.callPlayer = eB;
Ne.isMediaStream = tB;
Ne.isBlobUrl = rB;
Ne.supportsWebKitPresentationMode = nB;
var jN = k0(SN), LN = k0(E0);
function k0(e) {
  return e && e.__esModule ? e : { default: e };
}
function FN(e, t) {
  return zN(e) || VN(e, t) || BN(e, t) || NN();
}
function NN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BN(e, t) {
  if (e) {
    if (typeof e == "string")
      return zm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return zm(e, t);
  }
}
function zm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function VN(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, o = !1, a = void 0;
    try {
      for (var i = e[Symbol.iterator](), s; !(n = (s = i.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0)
        ;
    } catch (l) {
      o = !0, a = l;
    } finally {
      try {
        !n && i.return != null && i.return();
      } finally {
        if (o)
          throw a;
      }
    }
    return r;
  }
}
function zN(e) {
  if (Array.isArray(e))
    return e;
}
var WN = /[?&#](?:start|t)=([0-9hms]+)/, UN = /[?&#]end=([0-9hms]+)/, Iu = /(\d+)(h|m|s)/g, HN = /^\d+$/;
function T0(e, t) {
  if (!(e instanceof Array)) {
    var r = e.match(t);
    if (r) {
      var n = r[1];
      if (n.match(Iu))
        return qN(n);
      if (HN.test(n))
        return parseInt(n);
    }
  }
}
function qN(e) {
  for (var t = 0, r = Iu.exec(e); r !== null; ) {
    var n = r, o = FN(n, 3), a = o[1], i = o[2];
    i === "h" && (t += parseInt(a, 10) * 60 * 60), i === "m" && (t += parseInt(a, 10) * 60), i === "s" && (t += parseInt(a, 10)), r = Iu.exec(e);
  }
  return t;
}
function YN(e) {
  return T0(e, WN);
}
function KN(e) {
  return T0(e, UN);
}
function GN() {
  return Math.random().toString(36).substr(2, 5);
}
function XN(e) {
  return Object.keys(e).map(function(t) {
    return "".concat(t, "=").concat(e[t]);
  }).join("&");
}
function _c(e) {
  return window[e] ? window[e] : window.exports && window.exports[e] ? window.exports[e] : window.module && window.module.exports && window.module.exports[e] ? window.module.exports[e] : null;
}
var fo = {};
function ZN(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function() {
    return !0;
  }, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : jN.default, a = _c(t);
  return a && n(a) ? Promise.resolve(a) : new Promise(function(i, s) {
    if (fo[e]) {
      fo[e].push({
        resolve: i,
        reject: s
      });
      return;
    }
    fo[e] = [{
      resolve: i,
      reject: s
    }];
    var l = function(d) {
      fo[e].forEach(function(m) {
        return m.resolve(d);
      });
    };
    if (r) {
      var c = window[r];
      window[r] = function() {
        c && c(), l(_c(t));
      };
    }
    o(e, function(u) {
      u ? (fo[e].forEach(function(d) {
        return d.reject(u);
      }), fo[e] = null) : r || l(_c(t));
    });
  });
}
function JN(e, t) {
  return (0, LN.default)(t.config, e.config);
}
function QN(e) {
  for (var t, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    n[o - 1] = arguments[o];
  for (var a = (t = []).concat.apply(t, n), i = {}, s = Object.keys(e), l = 0, c = s; l < c.length; l++) {
    var u = c[l];
    a.indexOf(u) === -1 && (i[u] = e[u]);
  }
  return i;
}
function eB(e) {
  var t;
  if (!this.player || !this.player[e]) {
    var r = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(e, "%c – ");
    return this.player ? this.player[e] || (r += "The method was not available") : r += "The player was not available", console.warn(r, "font-weight: bold", ""), null;
  }
  for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    o[a - 1] = arguments[a];
  return (t = this.player)[e].apply(t, o);
}
function tB(e) {
  return typeof window < "u" && typeof window.MediaStream < "u" && e instanceof window.MediaStream;
}
function rB(e) {
  return /^blob:/.test(e);
}
function nB() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document.createElement("video"), t = /iPhone|iPod/.test(navigator.userAgent) === !1;
  return e.webkitSupportsPresentationMode && typeof e.webkitSetPresentationMode == "function" && t;
}
var he = {};
Object.defineProperty(he, "__esModule", {
  value: !0
});
he.canPlay = he.FLV_EXTENSIONS = he.DASH_EXTENSIONS = he.HLS_EXTENSIONS = he.VIDEO_EXTENSIONS = he.AUDIO_EXTENSIONS = he.MATCH_URL_KALTURA = he.MATCH_URL_VIDYARD = he.MATCH_URL_MIXCLOUD = he.MATCH_URL_DAILYMOTION = he.MATCH_URL_TWITCH_CHANNEL = he.MATCH_URL_TWITCH_VIDEO = he.MATCH_URL_WISTIA = he.MATCH_URL_STREAMABLE = he.MATCH_URL_FACEBOOK_WATCH = he.MATCH_URL_FACEBOOK = he.MATCH_URL_VIMEO = he.MATCH_URL_SOUNDCLOUD = he.MATCH_URL_YOUTUBE = void 0;
var Wm = Ne;
function oB(e, t) {
  var r;
  if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (r = aB(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var n = 0, o = function() {
      };
      return { s: o, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(c) {
        throw c;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, i = !1, s;
  return { s: function() {
    r = e[Symbol.iterator]();
  }, n: function() {
    var c = r.next();
    return a = c.done, c;
  }, e: function(c) {
    i = !0, s = c;
  }, f: function() {
    try {
      !a && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function aB(e, t) {
  if (e) {
    if (typeof e == "string")
      return Um(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Um(e, t);
  }
}
function Um(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var $u = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
he.MATCH_URL_YOUTUBE = $u;
var C0 = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
he.MATCH_URL_SOUNDCLOUD = C0;
var R0 = /vimeo\.com\/(?!progressive_redirect).+/;
he.MATCH_URL_VIMEO = R0;
var A0 = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
he.MATCH_URL_FACEBOOK = A0;
var D0 = /^https?:\/\/fb\.watch\/.+$/;
he.MATCH_URL_FACEBOOK_WATCH = D0;
var M0 = /streamable\.com\/([a-z0-9]+)$/;
he.MATCH_URL_STREAMABLE = M0;
var I0 = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/;
he.MATCH_URL_WISTIA = I0;
var $0 = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
he.MATCH_URL_TWITCH_VIDEO = $0;
var j0 = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
he.MATCH_URL_TWITCH_CHANNEL = j0;
var L0 = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/;
he.MATCH_URL_DAILYMOTION = L0;
var F0 = /mixcloud\.com\/([^/]+\/[^/]+)/;
he.MATCH_URL_MIXCLOUD = F0;
var N0 = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
he.MATCH_URL_VIDYARD = N0;
var B0 = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;
he.MATCH_URL_KALTURA = B0;
var cd = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
he.AUDIO_EXTENSIONS = cd;
var ud = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
he.VIDEO_EXTENSIONS = ud;
var fd = /\.(m3u8)($|\?)/i;
he.HLS_EXTENSIONS = fd;
var V0 = /\.(mpd)($|\?)/i;
he.DASH_EXTENSIONS = V0;
var z0 = /\.(flv)($|\?)/i;
he.FLV_EXTENSIONS = z0;
var iB = function e(t) {
  if (t instanceof Array) {
    var r = oB(t), n;
    try {
      for (r.s(); !(n = r.n()).done; ) {
        var o = n.value;
        if (typeof o == "string" && e(o) || e(o.src))
          return !0;
      }
    } catch (a) {
      r.e(a);
    } finally {
      r.f();
    }
    return !1;
  }
  return (0, Wm.isMediaStream)(t) || (0, Wm.isBlobUrl)(t) ? !0 : cd.test(t) || ud.test(t) || fd.test(t) || V0.test(t) || z0.test(t);
}, sB = {
  youtube: function(t) {
    return t instanceof Array ? t.every(function(r) {
      return $u.test(r);
    }) : $u.test(t);
  },
  soundcloud: function(t) {
    return C0.test(t) && !cd.test(t);
  },
  vimeo: function(t) {
    return R0.test(t) && !ud.test(t) && !fd.test(t);
  },
  facebook: function(t) {
    return A0.test(t) || D0.test(t);
  },
  streamable: function(t) {
    return M0.test(t);
  },
  wistia: function(t) {
    return I0.test(t);
  },
  twitch: function(t) {
    return $0.test(t) || j0.test(t);
  },
  dailymotion: function(t) {
    return L0.test(t);
  },
  mixcloud: function(t) {
    return F0.test(t);
  },
  vidyard: function(t) {
    return N0.test(t);
  },
  kaltura: function(t) {
    return B0.test(t);
  },
  file: iB
};
he.canPlay = sB;
var Pc = {}, Hm;
function lB() {
  return Hm || (Hm = 1, function(e) {
    function t(j) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(E) {
        return typeof E;
      } : t = function(E) {
        return E && typeof Symbol == "function" && E.constructor === Symbol && E !== Symbol.prototype ? "symbol" : typeof E;
      }, t(j);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(ke), n = Ne, o = he;
    function a() {
      if (typeof WeakMap != "function")
        return null;
      var j = /* @__PURE__ */ new WeakMap();
      return a = function() {
        return j;
      }, j;
    }
    function i(j) {
      if (j && j.__esModule)
        return j;
      if (j === null || t(j) !== "object" && typeof j != "function")
        return { default: j };
      var V = a();
      if (V && V.has(j))
        return V.get(j);
      var E = {}, O = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var B in j)
        if (Object.prototype.hasOwnProperty.call(j, B)) {
          var K = O ? Object.getOwnPropertyDescriptor(j, B) : null;
          K && (K.get || K.set) ? Object.defineProperty(E, B, K) : E[B] = j[B];
        }
      return E.default = j, V && V.set(j, E), E;
    }
    function s(j, V) {
      var E = Object.keys(j);
      if (Object.getOwnPropertySymbols) {
        var O = Object.getOwnPropertySymbols(j);
        V && (O = O.filter(function(B) {
          return Object.getOwnPropertyDescriptor(j, B).enumerable;
        })), E.push.apply(E, O);
      }
      return E;
    }
    function l(j) {
      for (var V = 1; V < arguments.length; V++) {
        var E = arguments[V] != null ? arguments[V] : {};
        V % 2 ? s(Object(E), !0).forEach(function(O) {
          h(j, O, E[O]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(E)) : s(Object(E)).forEach(function(O) {
          Object.defineProperty(j, O, Object.getOwnPropertyDescriptor(E, O));
        });
      }
      return j;
    }
    function c(j, V) {
      return x(j) || y(j, V) || d(j, V) || u();
    }
    function u() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function d(j, V) {
      if (j) {
        if (typeof j == "string")
          return m(j, V);
        var E = Object.prototype.toString.call(j).slice(8, -1);
        if (E === "Object" && j.constructor && (E = j.constructor.name), E === "Map" || E === "Set")
          return Array.from(j);
        if (E === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))
          return m(j, V);
      }
    }
    function m(j, V) {
      (V == null || V > j.length) && (V = j.length);
      for (var E = 0, O = new Array(V); E < V; E++)
        O[E] = j[E];
      return O;
    }
    function y(j, V) {
      if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(j)))) {
        var E = [], O = !0, B = !1, K = void 0;
        try {
          for (var Y = j[Symbol.iterator](), Z; !(O = (Z = Y.next()).done) && (E.push(Z.value), !(V && E.length === V)); O = !0)
            ;
        } catch (Q) {
          B = !0, K = Q;
        } finally {
          try {
            !O && Y.return != null && Y.return();
          } finally {
            if (B)
              throw K;
          }
        }
        return E;
      }
    }
    function x(j) {
      if (Array.isArray(j))
        return j;
    }
    function w(j, V) {
      if (!(j instanceof V))
        throw new TypeError("Cannot call a class as a function");
    }
    function _(j, V) {
      for (var E = 0; E < V.length; E++) {
        var O = V[E];
        O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(j, O.key, O);
      }
    }
    function T(j, V, E) {
      return V && _(j.prototype, V), E && _(j, E), j;
    }
    function P(j, V) {
      if (typeof V != "function" && V !== null)
        throw new TypeError("Super expression must either be null or a function");
      j.prototype = Object.create(V && V.prototype, { constructor: { value: j, writable: !0, configurable: !0 } }), V && k(j, V);
    }
    function k(j, V) {
      return k = Object.setPrototypeOf || function(O, B) {
        return O.__proto__ = B, O;
      }, k(j, V);
    }
    function $(j) {
      var V = v();
      return function() {
        var O = f(j), B;
        if (V) {
          var K = f(this).constructor;
          B = Reflect.construct(O, arguments, K);
        } else
          B = O.apply(this, arguments);
        return S(this, B);
      };
    }
    function S(j, V) {
      return V && (t(V) === "object" || typeof V == "function") ? V : C(j);
    }
    function C(j) {
      if (j === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return j;
    }
    function v() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function f(j) {
      return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(E) {
        return E.__proto__ || Object.getPrototypeOf(E);
      }, f(j);
    }
    function h(j, V, E) {
      return V in j ? Object.defineProperty(j, V, { value: E, enumerable: !0, configurable: !0, writable: !0 }) : j[V] = E, j;
    }
    var p = "https://www.youtube.com/iframe_api", g = "YT", A = "onYouTubeIframeAPIReady", D = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/, R = /user\/([a-zA-Z0-9_-]+)\/?/, F = /youtube-nocookie\.com/, U = "https://www.youtube-nocookie.com", L = /* @__PURE__ */ function(j) {
      P(E, j);
      var V = $(E);
      function E() {
        var O;
        w(this, E);
        for (var B = arguments.length, K = new Array(B), Y = 0; Y < B; Y++)
          K[Y] = arguments[Y];
        return O = V.call.apply(V, [this].concat(K)), h(C(O), "callPlayer", n.callPlayer), h(C(O), "parsePlaylist", function(Z) {
          if (Z instanceof Array)
            return {
              listType: "playlist",
              playlist: Z.map(O.getID).join(",")
            };
          if (D.test(Z)) {
            var Q = Z.match(D), re = c(Q, 2), J = re[1];
            return {
              listType: "playlist",
              list: J.replace(/^UC/, "UU")
            };
          }
          if (R.test(Z)) {
            var oe = Z.match(R), ae = c(oe, 2), ne = ae[1];
            return {
              listType: "user_uploads",
              list: ne
            };
          }
          return {};
        }), h(C(O), "onStateChange", function(Z) {
          var Q = Z.data, re = O.props, J = re.onPlay, oe = re.onPause, ae = re.onBuffer, ne = re.onBufferEnd, G = re.onEnded, ge = re.onReady, et = re.loop, Be = re.config, Je = Be.playerVars, ht = Be.onUnstarted, Ke = window[g].PlayerState, bt = Ke.UNSTARTED, lt = Ke.PLAYING, Tt = Ke.PAUSED, mt = Ke.BUFFERING, at = Ke.ENDED, Vt = Ke.CUED;
          if (Q === bt && ht(), Q === lt && (J(), ne()), Q === Tt && oe(), Q === mt && ae(), Q === at) {
            var Mt = !!O.callPlayer("getPlaylist");
            et && !Mt && (Je.start ? O.seekTo(Je.start) : O.play()), G();
          }
          Q === Vt && ge();
        }), h(C(O), "mute", function() {
          O.callPlayer("mute");
        }), h(C(O), "unmute", function() {
          O.callPlayer("unMute");
        }), h(C(O), "ref", function(Z) {
          O.container = Z;
        }), O;
      }
      return T(E, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "getID",
        value: function(B) {
          return !B || B instanceof Array || D.test(B) ? null : B.match(o.MATCH_URL_YOUTUBE)[1];
        }
      }, {
        key: "load",
        value: function(B, K) {
          var Y = this, Z = this.props, Q = Z.playing, re = Z.muted, J = Z.playsinline, oe = Z.controls, ae = Z.loop, ne = Z.config, G = Z.onError, ge = ne.playerVars, et = ne.embedOptions, Be = this.getID(B);
          if (K) {
            if (D.test(B) || R.test(B) || B instanceof Array) {
              this.player.loadPlaylist(this.parsePlaylist(B));
              return;
            }
            this.player.cueVideoById({
              videoId: Be,
              startSeconds: (0, n.parseStartTime)(B) || ge.start,
              endSeconds: (0, n.parseEndTime)(B) || ge.end
            });
            return;
          }
          (0, n.getSDK)(p, g, A, function(Je) {
            return Je.loaded;
          }).then(function(Je) {
            Y.container && (Y.player = new Je.Player(Y.container, l({
              width: "100%",
              height: "100%",
              videoId: Be,
              playerVars: l(l({
                autoplay: Q ? 1 : 0,
                mute: re ? 1 : 0,
                controls: oe ? 1 : 0,
                start: (0, n.parseStartTime)(B),
                end: (0, n.parseEndTime)(B),
                origin: window.location.origin,
                playsinline: J ? 1 : 0
              }, Y.parsePlaylist(B)), ge),
              events: {
                onReady: function() {
                  ae && Y.player.setLoop(!0), Y.props.onReady();
                },
                onPlaybackRateChange: function(Ke) {
                  return Y.props.onPlaybackRateChange(Ke.data);
                },
                onPlaybackQualityChange: function(Ke) {
                  return Y.props.onPlaybackQualityChange(Ke);
                },
                onStateChange: Y.onStateChange,
                onError: function(Ke) {
                  return G(Ke.data);
                }
              },
              host: F.test(B) ? U : void 0
            }, et)));
          }, G), et.events && console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause");
        }
      }, {
        key: "play",
        value: function() {
          this.callPlayer("playVideo");
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pauseVideo");
        }
      }, {
        key: "stop",
        value: function() {
          document.body.contains(this.callPlayer("getIframe")) && this.callPlayer("stopVideo");
        }
      }, {
        key: "seekTo",
        value: function(B) {
          var K = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          this.callPlayer("seekTo", B), !K && !this.props.playing && this.pause();
        }
      }, {
        key: "setVolume",
        value: function(B) {
          this.callPlayer("setVolume", B * 100);
        }
      }, {
        key: "setPlaybackRate",
        value: function(B) {
          this.callPlayer("setPlaybackRate", B);
        }
      }, {
        key: "setLoop",
        value: function(B) {
          this.callPlayer("setLoop", B);
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.callPlayer("getDuration");
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.callPlayer("getCurrentTime");
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return this.callPlayer("getVideoLoadedFraction") * this.getDuration();
        }
      }, {
        key: "render",
        value: function() {
          var B = this.props.display, K = {
            width: "100%",
            height: "100%",
            display: B
          };
          return /* @__PURE__ */ r.default.createElement("div", {
            style: K
          }, /* @__PURE__ */ r.default.createElement("div", {
            ref: this.ref
          }));
        }
      }]), E;
    }(r.Component);
    e.default = L, h(L, "displayName", "YouTube"), h(L, "canPlay", o.canPlay.youtube);
  }(Pc)), Pc;
}
var Oc = {}, qm;
function cB() {
  return qm || (qm = 1, function(e) {
    function t(v) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(h) {
        return typeof h;
      } : t = function(h) {
        return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
      }, t(v);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(ke), n = Ne, o = he;
    function a() {
      if (typeof WeakMap != "function")
        return null;
      var v = /* @__PURE__ */ new WeakMap();
      return a = function() {
        return v;
      }, v;
    }
    function i(v) {
      if (v && v.__esModule)
        return v;
      if (v === null || t(v) !== "object" && typeof v != "function")
        return { default: v };
      var f = a();
      if (f && f.has(v))
        return f.get(v);
      var h = {}, p = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var g in v)
        if (Object.prototype.hasOwnProperty.call(v, g)) {
          var A = p ? Object.getOwnPropertyDescriptor(v, g) : null;
          A && (A.get || A.set) ? Object.defineProperty(h, g, A) : h[g] = v[g];
        }
      return h.default = v, f && f.set(v, h), h;
    }
    function s(v, f) {
      var h = Object.keys(v);
      if (Object.getOwnPropertySymbols) {
        var p = Object.getOwnPropertySymbols(v);
        f && (p = p.filter(function(g) {
          return Object.getOwnPropertyDescriptor(v, g).enumerable;
        })), h.push.apply(h, p);
      }
      return h;
    }
    function l(v) {
      for (var f = 1; f < arguments.length; f++) {
        var h = arguments[f] != null ? arguments[f] : {};
        f % 2 ? s(Object(h), !0).forEach(function(p) {
          k(v, p, h[p]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(h)) : s(Object(h)).forEach(function(p) {
          Object.defineProperty(v, p, Object.getOwnPropertyDescriptor(h, p));
        });
      }
      return v;
    }
    function c(v, f) {
      if (!(v instanceof f))
        throw new TypeError("Cannot call a class as a function");
    }
    function u(v, f) {
      for (var h = 0; h < f.length; h++) {
        var p = f[h];
        p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(v, p.key, p);
      }
    }
    function d(v, f, h) {
      return f && u(v.prototype, f), h && u(v, h), v;
    }
    function m(v, f) {
      if (typeof f != "function" && f !== null)
        throw new TypeError("Super expression must either be null or a function");
      v.prototype = Object.create(f && f.prototype, { constructor: { value: v, writable: !0, configurable: !0 } }), f && y(v, f);
    }
    function y(v, f) {
      return y = Object.setPrototypeOf || function(p, g) {
        return p.__proto__ = g, p;
      }, y(v, f);
    }
    function x(v) {
      var f = T();
      return function() {
        var p = P(v), g;
        if (f) {
          var A = P(this).constructor;
          g = Reflect.construct(p, arguments, A);
        } else
          g = p.apply(this, arguments);
        return w(this, g);
      };
    }
    function w(v, f) {
      return f && (t(f) === "object" || typeof f == "function") ? f : _(v);
    }
    function _(v) {
      if (v === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return v;
    }
    function T() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function P(v) {
      return P = Object.setPrototypeOf ? Object.getPrototypeOf : function(h) {
        return h.__proto__ || Object.getPrototypeOf(h);
      }, P(v);
    }
    function k(v, f, h) {
      return f in v ? Object.defineProperty(v, f, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : v[f] = h, v;
    }
    var $ = "https://w.soundcloud.com/player/api.js", S = "SC", C = /* @__PURE__ */ function(v) {
      m(h, v);
      var f = x(h);
      function h() {
        var p;
        c(this, h);
        for (var g = arguments.length, A = new Array(g), D = 0; D < g; D++)
          A[D] = arguments[D];
        return p = f.call.apply(f, [this].concat(A)), k(_(p), "callPlayer", n.callPlayer), k(_(p), "duration", null), k(_(p), "currentTime", null), k(_(p), "fractionLoaded", null), k(_(p), "mute", function() {
          p.setVolume(0);
        }), k(_(p), "unmute", function() {
          p.props.volume !== null && p.setVolume(p.props.volume);
        }), k(_(p), "ref", function(R) {
          p.iframe = R;
        }), p;
      }
      return d(h, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function(g, A) {
          var D = this;
          (0, n.getSDK)($, S).then(function(R) {
            if (D.iframe) {
              var F = R.Widget.Events, U = F.PLAY, L = F.PLAY_PROGRESS, j = F.PAUSE, V = F.FINISH, E = F.ERROR;
              A || (D.player = R.Widget(D.iframe), D.player.bind(U, D.props.onPlay), D.player.bind(j, function() {
                var O = D.duration - D.currentTime;
                O < 0.05 || D.props.onPause();
              }), D.player.bind(L, function(O) {
                D.currentTime = O.currentPosition / 1e3, D.fractionLoaded = O.loadedProgress;
              }), D.player.bind(V, function() {
                return D.props.onEnded();
              }), D.player.bind(E, function(O) {
                return D.props.onError(O);
              })), D.player.load(g, l(l({}, D.props.config.options), {}, {
                callback: function() {
                  D.player.getDuration(function(B) {
                    D.duration = B / 1e3, D.props.onReady();
                  });
                }
              }));
            }
          });
        }
      }, {
        key: "play",
        value: function() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function() {
        }
      }, {
        key: "seekTo",
        value: function(g) {
          var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.callPlayer("seekTo", g * 1e3), A || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(g) {
          this.callPlayer("setVolume", g * 100);
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.duration;
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.currentTime;
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return this.fractionLoaded * this.duration;
        }
      }, {
        key: "render",
        value: function() {
          var g = this.props.display, A = {
            width: "100%",
            height: "100%",
            display: g
          };
          return /* @__PURE__ */ r.default.createElement("iframe", {
            ref: this.ref,
            src: "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),
            style: A,
            frameBorder: 0,
            allow: "autoplay"
          });
        }
      }]), h;
    }(r.Component);
    e.default = C, k(C, "displayName", "SoundCloud"), k(C, "canPlay", o.canPlay.soundcloud), k(C, "loopOnEnded", !0);
  }(Oc)), Oc;
}
var Ec = {}, Ym;
function uB() {
  return Ym || (Ym = 1, function(e) {
    function t(f) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(p) {
        return typeof p;
      } : t = function(p) {
        return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
      }, t(f);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(ke), n = Ne, o = he;
    function a() {
      if (typeof WeakMap != "function")
        return null;
      var f = /* @__PURE__ */ new WeakMap();
      return a = function() {
        return f;
      }, f;
    }
    function i(f) {
      if (f && f.__esModule)
        return f;
      if (f === null || t(f) !== "object" && typeof f != "function")
        return { default: f };
      var h = a();
      if (h && h.has(f))
        return h.get(f);
      var p = {}, g = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var A in f)
        if (Object.prototype.hasOwnProperty.call(f, A)) {
          var D = g ? Object.getOwnPropertyDescriptor(f, A) : null;
          D && (D.get || D.set) ? Object.defineProperty(p, A, D) : p[A] = f[A];
        }
      return p.default = f, h && h.set(f, p), p;
    }
    function s(f, h) {
      var p = Object.keys(f);
      if (Object.getOwnPropertySymbols) {
        var g = Object.getOwnPropertySymbols(f);
        h && (g = g.filter(function(A) {
          return Object.getOwnPropertyDescriptor(f, A).enumerable;
        })), p.push.apply(p, g);
      }
      return p;
    }
    function l(f) {
      for (var h = 1; h < arguments.length; h++) {
        var p = arguments[h] != null ? arguments[h] : {};
        h % 2 ? s(Object(p), !0).forEach(function(g) {
          k(f, g, p[g]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(p)) : s(Object(p)).forEach(function(g) {
          Object.defineProperty(f, g, Object.getOwnPropertyDescriptor(p, g));
        });
      }
      return f;
    }
    function c(f, h) {
      if (!(f instanceof h))
        throw new TypeError("Cannot call a class as a function");
    }
    function u(f, h) {
      for (var p = 0; p < h.length; p++) {
        var g = h[p];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(f, g.key, g);
      }
    }
    function d(f, h, p) {
      return h && u(f.prototype, h), p && u(f, p), f;
    }
    function m(f, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Super expression must either be null or a function");
      f.prototype = Object.create(h && h.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), h && y(f, h);
    }
    function y(f, h) {
      return y = Object.setPrototypeOf || function(g, A) {
        return g.__proto__ = A, g;
      }, y(f, h);
    }
    function x(f) {
      var h = T();
      return function() {
        var g = P(f), A;
        if (h) {
          var D = P(this).constructor;
          A = Reflect.construct(g, arguments, D);
        } else
          A = g.apply(this, arguments);
        return w(this, A);
      };
    }
    function w(f, h) {
      return h && (t(h) === "object" || typeof h == "function") ? h : _(f);
    }
    function _(f) {
      if (f === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return f;
    }
    function T() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function P(f) {
      return P = Object.setPrototypeOf ? Object.getPrototypeOf : function(p) {
        return p.__proto__ || Object.getPrototypeOf(p);
      }, P(f);
    }
    function k(f, h, p) {
      return h in f ? Object.defineProperty(f, h, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : f[h] = p, f;
    }
    var $ = "https://player.vimeo.com/api/player.js", S = "Vimeo", C = function(h) {
      return h.replace("/manage/videos", "");
    }, v = /* @__PURE__ */ function(f) {
      m(p, f);
      var h = x(p);
      function p() {
        var g;
        c(this, p);
        for (var A = arguments.length, D = new Array(A), R = 0; R < A; R++)
          D[R] = arguments[R];
        return g = h.call.apply(h, [this].concat(D)), k(_(g), "callPlayer", n.callPlayer), k(_(g), "duration", null), k(_(g), "currentTime", null), k(_(g), "secondsLoaded", null), k(_(g), "mute", function() {
          g.setMuted(!0);
        }), k(_(g), "unmute", function() {
          g.setMuted(!1);
        }), k(_(g), "ref", function(F) {
          g.container = F;
        }), g;
      }
      return d(p, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function(A) {
          var D = this;
          this.duration = null, (0, n.getSDK)($, S).then(function(R) {
            if (D.container) {
              var F = D.props.config, U = F.playerOptions, L = F.title;
              D.player = new R.Player(D.container, l({
                url: C(A),
                autoplay: D.props.playing,
                muted: D.props.muted,
                loop: D.props.loop,
                playsinline: D.props.playsinline,
                controls: D.props.controls
              }, U)), D.player.ready().then(function() {
                var j = D.container.querySelector("iframe");
                j.style.width = "100%", j.style.height = "100%", L && (j.title = L);
              }).catch(D.props.onError), D.player.on("loaded", function() {
                D.props.onReady(), D.refreshDuration();
              }), D.player.on("play", function() {
                D.props.onPlay(), D.refreshDuration();
              }), D.player.on("pause", D.props.onPause), D.player.on("seeked", function(j) {
                return D.props.onSeek(j.seconds);
              }), D.player.on("ended", D.props.onEnded), D.player.on("error", D.props.onError), D.player.on("timeupdate", function(j) {
                var V = j.seconds;
                D.currentTime = V;
              }), D.player.on("progress", function(j) {
                var V = j.seconds;
                D.secondsLoaded = V;
              }), D.player.on("bufferstart", D.props.onBuffer), D.player.on("bufferend", D.props.onBufferEnd), D.player.on("playbackratechange", function(j) {
                return D.props.onPlaybackRateChange(j.playbackRate);
              });
            }
          }, this.props.onError);
        }
      }, {
        key: "refreshDuration",
        value: function() {
          var A = this;
          this.player.getDuration().then(function(D) {
            A.duration = D;
          });
        }
      }, {
        key: "play",
        value: function() {
          var A = this.callPlayer("play");
          A && A.catch(this.props.onError);
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function() {
          this.callPlayer("unload");
        }
      }, {
        key: "seekTo",
        value: function(A) {
          var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.callPlayer("setCurrentTime", A), D || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(A) {
          this.callPlayer("setVolume", A);
        }
      }, {
        key: "setMuted",
        value: function(A) {
          this.callPlayer("setMuted", A);
        }
      }, {
        key: "setLoop",
        value: function(A) {
          this.callPlayer("setLoop", A);
        }
      }, {
        key: "setPlaybackRate",
        value: function(A) {
          this.callPlayer("setPlaybackRate", A);
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.duration;
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.currentTime;
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return this.secondsLoaded;
        }
      }, {
        key: "render",
        value: function() {
          var A = this.props.display, D = {
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display: A
          };
          return /* @__PURE__ */ r.default.createElement("div", {
            key: this.props.url,
            ref: this.ref,
            style: D
          });
        }
      }]), p;
    }(r.Component);
    e.default = v, k(v, "displayName", "Vimeo"), k(v, "canPlay", o.canPlay.vimeo), k(v, "forceLoad", !0);
  }(Ec)), Ec;
}
var kc = {}, Km;
function fB() {
  return Km || (Km = 1, function(e) {
    function t(f) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(p) {
        return typeof p;
      } : t = function(p) {
        return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
      }, t(f);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(ke), n = Ne, o = he;
    function a() {
      if (typeof WeakMap != "function")
        return null;
      var f = /* @__PURE__ */ new WeakMap();
      return a = function() {
        return f;
      }, f;
    }
    function i(f) {
      if (f && f.__esModule)
        return f;
      if (f === null || t(f) !== "object" && typeof f != "function")
        return { default: f };
      var h = a();
      if (h && h.has(f))
        return h.get(f);
      var p = {}, g = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var A in f)
        if (Object.prototype.hasOwnProperty.call(f, A)) {
          var D = g ? Object.getOwnPropertyDescriptor(f, A) : null;
          D && (D.get || D.set) ? Object.defineProperty(p, A, D) : p[A] = f[A];
        }
      return p.default = f, h && h.set(f, p), p;
    }
    function s() {
      return s = Object.assign || function(f) {
        for (var h = 1; h < arguments.length; h++) {
          var p = arguments[h];
          for (var g in p)
            Object.prototype.hasOwnProperty.call(p, g) && (f[g] = p[g]);
        }
        return f;
      }, s.apply(this, arguments);
    }
    function l(f, h) {
      if (!(f instanceof h))
        throw new TypeError("Cannot call a class as a function");
    }
    function c(f, h) {
      for (var p = 0; p < h.length; p++) {
        var g = h[p];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(f, g.key, g);
      }
    }
    function u(f, h, p) {
      return h && c(f.prototype, h), p && c(f, p), f;
    }
    function d(f, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Super expression must either be null or a function");
      f.prototype = Object.create(h && h.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), h && m(f, h);
    }
    function m(f, h) {
      return m = Object.setPrototypeOf || function(g, A) {
        return g.__proto__ = A, g;
      }, m(f, h);
    }
    function y(f) {
      var h = _();
      return function() {
        var g = T(f), A;
        if (h) {
          var D = T(this).constructor;
          A = Reflect.construct(g, arguments, D);
        } else
          A = g.apply(this, arguments);
        return x(this, A);
      };
    }
    function x(f, h) {
      return h && (t(h) === "object" || typeof h == "function") ? h : w(f);
    }
    function w(f) {
      if (f === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return f;
    }
    function _() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function T(f) {
      return T = Object.setPrototypeOf ? Object.getPrototypeOf : function(p) {
        return p.__proto__ || Object.getPrototypeOf(p);
      }, T(f);
    }
    function P(f, h, p) {
      return h in f ? Object.defineProperty(f, h, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : f[h] = p, f;
    }
    var k = "https://connect.facebook.net/en_US/sdk.js", $ = "FB", S = "fbAsyncInit", C = "facebook-player-", v = /* @__PURE__ */ function(f) {
      d(p, f);
      var h = y(p);
      function p() {
        var g;
        l(this, p);
        for (var A = arguments.length, D = new Array(A), R = 0; R < A; R++)
          D[R] = arguments[R];
        return g = h.call.apply(h, [this].concat(D)), P(w(g), "callPlayer", n.callPlayer), P(w(g), "playerID", g.props.config.playerId || "".concat(C).concat((0, n.randomString)())), P(w(g), "mute", function() {
          g.callPlayer("mute");
        }), P(w(g), "unmute", function() {
          g.callPlayer("unmute");
        }), g;
      }
      return u(p, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function(A, D) {
          var R = this;
          if (D) {
            (0, n.getSDK)(k, $, S).then(function(F) {
              return F.XFBML.parse();
            });
            return;
          }
          (0, n.getSDK)(k, $, S).then(function(F) {
            F.init({
              appId: R.props.config.appId,
              xfbml: !0,
              version: R.props.config.version
            }), F.Event.subscribe("xfbml.render", function(U) {
              R.props.onLoaded();
            }), F.Event.subscribe("xfbml.ready", function(U) {
              U.type === "video" && U.id === R.playerID && (R.player = U.instance, R.player.subscribe("startedPlaying", R.props.onPlay), R.player.subscribe("paused", R.props.onPause), R.player.subscribe("finishedPlaying", R.props.onEnded), R.player.subscribe("startedBuffering", R.props.onBuffer), R.player.subscribe("finishedBuffering", R.props.onBufferEnd), R.player.subscribe("error", R.props.onError), R.props.muted ? R.callPlayer("mute") : R.callPlayer("unmute"), R.props.onReady(), document.getElementById(R.playerID).querySelector("iframe").style.visibility = "visible");
            });
          });
        }
      }, {
        key: "play",
        value: function() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function() {
        }
      }, {
        key: "seekTo",
        value: function(A) {
          var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.callPlayer("seek", A), D || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(A) {
          this.callPlayer("setVolume", A);
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.callPlayer("getDuration");
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.callPlayer("getCurrentPosition");
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return null;
        }
      }, {
        key: "render",
        value: function() {
          var A = this.props.config.attributes, D = {
            width: "100%",
            height: "100%"
          };
          return /* @__PURE__ */ r.default.createElement("div", s({
            style: D,
            id: this.playerID,
            className: "fb-video",
            "data-href": this.props.url,
            "data-autoplay": this.props.playing ? "true" : "false",
            "data-allowfullscreen": "true",
            "data-controls": this.props.controls ? "true" : "false"
          }, A));
        }
      }]), p;
    }(r.Component);
    e.default = v, P(v, "displayName", "Facebook"), P(v, "canPlay", o.canPlay.facebook), P(v, "loopOnEnded", !0);
  }(kc)), kc;
}
var Tc = {}, Gm;
function dB() {
  return Gm || (Gm = 1, function(e) {
    function t(S) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(v) {
        return typeof v;
      } : t = function(v) {
        return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
      }, t(S);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(ke), n = Ne, o = he;
    function a() {
      if (typeof WeakMap != "function")
        return null;
      var S = /* @__PURE__ */ new WeakMap();
      return a = function() {
        return S;
      }, S;
    }
    function i(S) {
      if (S && S.__esModule)
        return S;
      if (S === null || t(S) !== "object" && typeof S != "function")
        return { default: S };
      var C = a();
      if (C && C.has(S))
        return C.get(S);
      var v = {}, f = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var h in S)
        if (Object.prototype.hasOwnProperty.call(S, h)) {
          var p = f ? Object.getOwnPropertyDescriptor(S, h) : null;
          p && (p.get || p.set) ? Object.defineProperty(v, h, p) : v[h] = S[h];
        }
      return v.default = S, C && C.set(S, v), v;
    }
    function s(S, C) {
      if (!(S instanceof C))
        throw new TypeError("Cannot call a class as a function");
    }
    function l(S, C) {
      for (var v = 0; v < C.length; v++) {
        var f = C[v];
        f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(S, f.key, f);
      }
    }
    function c(S, C, v) {
      return C && l(S.prototype, C), v && l(S, v), S;
    }
    function u(S, C) {
      if (typeof C != "function" && C !== null)
        throw new TypeError("Super expression must either be null or a function");
      S.prototype = Object.create(C && C.prototype, { constructor: { value: S, writable: !0, configurable: !0 } }), C && d(S, C);
    }
    function d(S, C) {
      return d = Object.setPrototypeOf || function(f, h) {
        return f.__proto__ = h, f;
      }, d(S, C);
    }
    function m(S) {
      var C = w();
      return function() {
        var f = _(S), h;
        if (C) {
          var p = _(this).constructor;
          h = Reflect.construct(f, arguments, p);
        } else
          h = f.apply(this, arguments);
        return y(this, h);
      };
    }
    function y(S, C) {
      return C && (t(C) === "object" || typeof C == "function") ? C : x(S);
    }
    function x(S) {
      if (S === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return S;
    }
    function w() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function _(S) {
      return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(v) {
        return v.__proto__ || Object.getPrototypeOf(v);
      }, _(S);
    }
    function T(S, C, v) {
      return C in S ? Object.defineProperty(S, C, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : S[C] = v, S;
    }
    var P = "https://cdn.embed.ly/player-0.1.0.min.js", k = "playerjs", $ = /* @__PURE__ */ function(S) {
      u(v, S);
      var C = m(v);
      function v() {
        var f;
        s(this, v);
        for (var h = arguments.length, p = new Array(h), g = 0; g < h; g++)
          p[g] = arguments[g];
        return f = C.call.apply(C, [this].concat(p)), T(x(f), "callPlayer", n.callPlayer), T(x(f), "duration", null), T(x(f), "currentTime", null), T(x(f), "secondsLoaded", null), T(x(f), "mute", function() {
          f.callPlayer("mute");
        }), T(x(f), "unmute", function() {
          f.callPlayer("unmute");
        }), T(x(f), "ref", function(A) {
          f.iframe = A;
        }), f;
      }
      return c(v, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function(h) {
          var p = this;
          (0, n.getSDK)(P, k).then(function(g) {
            p.iframe && (p.player = new g.Player(p.iframe), p.player.setLoop(p.props.loop), p.player.on("ready", p.props.onReady), p.player.on("play", p.props.onPlay), p.player.on("pause", p.props.onPause), p.player.on("seeked", p.props.onSeek), p.player.on("ended", p.props.onEnded), p.player.on("error", p.props.onError), p.player.on("timeupdate", function(A) {
              var D = A.duration, R = A.seconds;
              p.duration = D, p.currentTime = R;
            }), p.player.on("buffered", function(A) {
              var D = A.percent;
              p.duration && (p.secondsLoaded = p.duration * D);
            }), p.props.muted && p.player.mute());
          }, this.props.onError);
        }
      }, {
        key: "play",
        value: function() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function() {
        }
      }, {
        key: "seekTo",
        value: function(h) {
          var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.callPlayer("setCurrentTime", h), p || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(h) {
          this.callPlayer("setVolume", h * 100);
        }
      }, {
        key: "setLoop",
        value: function(h) {
          this.callPlayer("setLoop", h);
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.duration;
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.currentTime;
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return this.secondsLoaded;
        }
      }, {
        key: "render",
        value: function() {
          var h = this.props.url.match(o.MATCH_URL_STREAMABLE)[1], p = {
            width: "100%",
            height: "100%"
          };
          return /* @__PURE__ */ r.default.createElement("iframe", {
            ref: this.ref,
            src: "https://streamable.com/o/".concat(h),
            frameBorder: "0",
            scrolling: "no",
            style: p,
            allow: "encrypted-media; autoplay; fullscreen;"
          });
        }
      }]), v;
    }(r.Component);
    e.default = $, T($, "displayName", "Streamable"), T($, "canPlay", o.canPlay.streamable);
  }(Tc)), Tc;
}
var Cc = {}, Xm;
function pB() {
  return Xm || (Xm = 1, function(e) {
    function t(f) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(p) {
        return typeof p;
      } : t = function(p) {
        return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
      }, t(f);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(ke), n = Ne, o = he;
    function a() {
      if (typeof WeakMap != "function")
        return null;
      var f = /* @__PURE__ */ new WeakMap();
      return a = function() {
        return f;
      }, f;
    }
    function i(f) {
      if (f && f.__esModule)
        return f;
      if (f === null || t(f) !== "object" && typeof f != "function")
        return { default: f };
      var h = a();
      if (h && h.has(f))
        return h.get(f);
      var p = {}, g = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var A in f)
        if (Object.prototype.hasOwnProperty.call(f, A)) {
          var D = g ? Object.getOwnPropertyDescriptor(f, A) : null;
          D && (D.get || D.set) ? Object.defineProperty(p, A, D) : p[A] = f[A];
        }
      return p.default = f, h && h.set(f, p), p;
    }
    function s(f, h) {
      var p = Object.keys(f);
      if (Object.getOwnPropertySymbols) {
        var g = Object.getOwnPropertySymbols(f);
        h && (g = g.filter(function(A) {
          return Object.getOwnPropertyDescriptor(f, A).enumerable;
        })), p.push.apply(p, g);
      }
      return p;
    }
    function l(f) {
      for (var h = 1; h < arguments.length; h++) {
        var p = arguments[h] != null ? arguments[h] : {};
        h % 2 ? s(Object(p), !0).forEach(function(g) {
          k(f, g, p[g]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(p)) : s(Object(p)).forEach(function(g) {
          Object.defineProperty(f, g, Object.getOwnPropertyDescriptor(p, g));
        });
      }
      return f;
    }
    function c(f, h) {
      if (!(f instanceof h))
        throw new TypeError("Cannot call a class as a function");
    }
    function u(f, h) {
      for (var p = 0; p < h.length; p++) {
        var g = h[p];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(f, g.key, g);
      }
    }
    function d(f, h, p) {
      return h && u(f.prototype, h), p && u(f, p), f;
    }
    function m(f, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Super expression must either be null or a function");
      f.prototype = Object.create(h && h.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), h && y(f, h);
    }
    function y(f, h) {
      return y = Object.setPrototypeOf || function(g, A) {
        return g.__proto__ = A, g;
      }, y(f, h);
    }
    function x(f) {
      var h = T();
      return function() {
        var g = P(f), A;
        if (h) {
          var D = P(this).constructor;
          A = Reflect.construct(g, arguments, D);
        } else
          A = g.apply(this, arguments);
        return w(this, A);
      };
    }
    function w(f, h) {
      return h && (t(h) === "object" || typeof h == "function") ? h : _(f);
    }
    function _(f) {
      if (f === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return f;
    }
    function T() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function P(f) {
      return P = Object.setPrototypeOf ? Object.getPrototypeOf : function(p) {
        return p.__proto__ || Object.getPrototypeOf(p);
      }, P(f);
    }
    function k(f, h, p) {
      return h in f ? Object.defineProperty(f, h, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : f[h] = p, f;
    }
    var $ = "https://fast.wistia.com/assets/external/E-v1.js", S = "Wistia", C = "wistia-player-", v = /* @__PURE__ */ function(f) {
      m(p, f);
      var h = x(p);
      function p() {
        var g;
        c(this, p);
        for (var A = arguments.length, D = new Array(A), R = 0; R < A; R++)
          D[R] = arguments[R];
        return g = h.call.apply(h, [this].concat(D)), k(_(g), "callPlayer", n.callPlayer), k(_(g), "playerID", g.props.config.playerId || "".concat(C).concat((0, n.randomString)())), k(_(g), "onPlay", function() {
          var F;
          return (F = g.props).onPlay.apply(F, arguments);
        }), k(_(g), "onPause", function() {
          var F;
          return (F = g.props).onPause.apply(F, arguments);
        }), k(_(g), "onSeek", function() {
          var F;
          return (F = g.props).onSeek.apply(F, arguments);
        }), k(_(g), "onEnded", function() {
          var F;
          return (F = g.props).onEnded.apply(F, arguments);
        }), k(_(g), "onPlaybackRateChange", function() {
          var F;
          return (F = g.props).onPlaybackRateChange.apply(F, arguments);
        }), k(_(g), "mute", function() {
          g.callPlayer("mute");
        }), k(_(g), "unmute", function() {
          g.callPlayer("unmute");
        }), g;
      }
      return d(p, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function(A) {
          var D = this, R = this.props, F = R.playing, U = R.muted, L = R.controls, j = R.onReady, V = R.config, E = R.onError;
          (0, n.getSDK)($, S).then(function(O) {
            V.customControls && V.customControls.forEach(function(B) {
              return O.defineControl(B);
            }), window._wq = window._wq || [], window._wq.push({
              id: D.playerID,
              options: l({
                autoPlay: F,
                silentAutoPlay: "allow",
                muted: U,
                controlsVisibleOnLoad: L,
                fullscreenButton: L,
                playbar: L,
                playbackRateControl: L,
                qualityControl: L,
                volumeControl: L,
                settingsControl: L,
                smallPlayButton: L
              }, V.options),
              onReady: function(K) {
                D.player = K, D.unbind(), D.player.bind("play", D.onPlay), D.player.bind("pause", D.onPause), D.player.bind("seek", D.onSeek), D.player.bind("end", D.onEnded), D.player.bind("playbackratechange", D.onPlaybackRateChange), j();
              }
            });
          }, E);
        }
      }, {
        key: "unbind",
        value: function() {
          this.player.unbind("play", this.onPlay), this.player.unbind("pause", this.onPause), this.player.unbind("seek", this.onSeek), this.player.unbind("end", this.onEnded), this.player.unbind("playbackratechange", this.onPlaybackRateChange);
        }
        // Proxy methods to prevent listener leaks
      }, {
        key: "play",
        value: function() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function() {
          this.unbind(), this.callPlayer("remove");
        }
      }, {
        key: "seekTo",
        value: function(A) {
          var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.callPlayer("time", A), D || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(A) {
          this.callPlayer("volume", A);
        }
      }, {
        key: "setPlaybackRate",
        value: function(A) {
          this.callPlayer("playbackRate", A);
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.callPlayer("duration");
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.callPlayer("time");
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return null;
        }
      }, {
        key: "render",
        value: function() {
          var A = this.props.url, D = A && A.match(o.MATCH_URL_WISTIA)[1], R = "wistia_embed wistia_async_".concat(D), F = {
            width: "100%",
            height: "100%"
          };
          return /* @__PURE__ */ r.default.createElement("div", {
            id: this.playerID,
            key: D,
            className: R,
            style: F
          });
        }
      }]), p;
    }(r.Component);
    e.default = v, k(v, "displayName", "Wistia"), k(v, "canPlay", o.canPlay.wistia), k(v, "loopOnEnded", !0);
  }(Cc)), Cc;
}
var Rc = {}, Zm;
function hB() {
  return Zm || (Zm = 1, function(e) {
    function t(f) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(p) {
        return typeof p;
      } : t = function(p) {
        return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
      }, t(f);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(ke), n = Ne, o = he;
    function a() {
      if (typeof WeakMap != "function")
        return null;
      var f = /* @__PURE__ */ new WeakMap();
      return a = function() {
        return f;
      }, f;
    }
    function i(f) {
      if (f && f.__esModule)
        return f;
      if (f === null || t(f) !== "object" && typeof f != "function")
        return { default: f };
      var h = a();
      if (h && h.has(f))
        return h.get(f);
      var p = {}, g = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var A in f)
        if (Object.prototype.hasOwnProperty.call(f, A)) {
          var D = g ? Object.getOwnPropertyDescriptor(f, A) : null;
          D && (D.get || D.set) ? Object.defineProperty(p, A, D) : p[A] = f[A];
        }
      return p.default = f, h && h.set(f, p), p;
    }
    function s(f, h) {
      var p = Object.keys(f);
      if (Object.getOwnPropertySymbols) {
        var g = Object.getOwnPropertySymbols(f);
        h && (g = g.filter(function(A) {
          return Object.getOwnPropertyDescriptor(f, A).enumerable;
        })), p.push.apply(p, g);
      }
      return p;
    }
    function l(f) {
      for (var h = 1; h < arguments.length; h++) {
        var p = arguments[h] != null ? arguments[h] : {};
        h % 2 ? s(Object(p), !0).forEach(function(g) {
          k(f, g, p[g]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(p)) : s(Object(p)).forEach(function(g) {
          Object.defineProperty(f, g, Object.getOwnPropertyDescriptor(p, g));
        });
      }
      return f;
    }
    function c(f, h) {
      if (!(f instanceof h))
        throw new TypeError("Cannot call a class as a function");
    }
    function u(f, h) {
      for (var p = 0; p < h.length; p++) {
        var g = h[p];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(f, g.key, g);
      }
    }
    function d(f, h, p) {
      return h && u(f.prototype, h), p && u(f, p), f;
    }
    function m(f, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Super expression must either be null or a function");
      f.prototype = Object.create(h && h.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), h && y(f, h);
    }
    function y(f, h) {
      return y = Object.setPrototypeOf || function(g, A) {
        return g.__proto__ = A, g;
      }, y(f, h);
    }
    function x(f) {
      var h = T();
      return function() {
        var g = P(f), A;
        if (h) {
          var D = P(this).constructor;
          A = Reflect.construct(g, arguments, D);
        } else
          A = g.apply(this, arguments);
        return w(this, A);
      };
    }
    function w(f, h) {
      return h && (t(h) === "object" || typeof h == "function") ? h : _(f);
    }
    function _(f) {
      if (f === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return f;
    }
    function T() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function P(f) {
      return P = Object.setPrototypeOf ? Object.getPrototypeOf : function(p) {
        return p.__proto__ || Object.getPrototypeOf(p);
      }, P(f);
    }
    function k(f, h, p) {
      return h in f ? Object.defineProperty(f, h, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : f[h] = p, f;
    }
    var $ = "https://player.twitch.tv/js/embed/v1.js", S = "Twitch", C = "twitch-player-", v = /* @__PURE__ */ function(f) {
      m(p, f);
      var h = x(p);
      function p() {
        var g;
        c(this, p);
        for (var A = arguments.length, D = new Array(A), R = 0; R < A; R++)
          D[R] = arguments[R];
        return g = h.call.apply(h, [this].concat(D)), k(_(g), "callPlayer", n.callPlayer), k(_(g), "playerID", g.props.config.playerId || "".concat(C).concat((0, n.randomString)())), k(_(g), "mute", function() {
          g.callPlayer("setMuted", !0);
        }), k(_(g), "unmute", function() {
          g.callPlayer("setMuted", !1);
        }), g;
      }
      return d(p, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function(A, D) {
          var R = this, F = this.props, U = F.playsinline, L = F.onError, j = F.config, V = F.controls, E = o.MATCH_URL_TWITCH_CHANNEL.test(A), O = E ? A.match(o.MATCH_URL_TWITCH_CHANNEL)[1] : A.match(o.MATCH_URL_TWITCH_VIDEO)[1];
          if (D) {
            E ? this.player.setChannel(O) : this.player.setVideo("v" + O);
            return;
          }
          (0, n.getSDK)($, S).then(function(B) {
            R.player = new B.Player(R.playerID, l({
              video: E ? "" : O,
              channel: E ? O : "",
              height: "100%",
              width: "100%",
              playsinline: U,
              autoplay: R.props.playing,
              muted: R.props.muted,
              // https://github.com/CookPete/react-player/issues/733#issuecomment-549085859
              controls: E ? !0 : V,
              time: (0, n.parseStartTime)(A)
            }, j.options));
            var K = B.Player, Y = K.READY, Z = K.PLAYING, Q = K.PAUSE, re = K.ENDED, J = K.ONLINE, oe = K.OFFLINE, ae = K.SEEK;
            R.player.addEventListener(Y, R.props.onReady), R.player.addEventListener(Z, R.props.onPlay), R.player.addEventListener(Q, R.props.onPause), R.player.addEventListener(re, R.props.onEnded), R.player.addEventListener(ae, R.props.onSeek), R.player.addEventListener(J, R.props.onLoaded), R.player.addEventListener(oe, R.props.onLoaded);
          }, L);
        }
      }, {
        key: "play",
        value: function() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "seekTo",
        value: function(A) {
          var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.callPlayer("seek", A), D || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(A) {
          this.callPlayer("setVolume", A);
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.callPlayer("getDuration");
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.callPlayer("getCurrentTime");
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return null;
        }
      }, {
        key: "render",
        value: function() {
          var A = {
            width: "100%",
            height: "100%"
          };
          return /* @__PURE__ */ r.default.createElement("div", {
            style: A,
            id: this.playerID
          });
        }
      }]), p;
    }(r.Component);
    e.default = v, k(v, "displayName", "Twitch"), k(v, "canPlay", o.canPlay.twitch), k(v, "loopOnEnded", !0);
  }(Rc)), Rc;
}
var Ac = {}, Jm;
function mB() {
  return Jm || (Jm = 1, function(e) {
    function t(R) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(U) {
        return typeof U;
      } : t = function(U) {
        return U && typeof Symbol == "function" && U.constructor === Symbol && U !== Symbol.prototype ? "symbol" : typeof U;
      }, t(R);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(ke), n = Ne, o = he;
    function a() {
      if (typeof WeakMap != "function")
        return null;
      var R = /* @__PURE__ */ new WeakMap();
      return a = function() {
        return R;
      }, R;
    }
    function i(R) {
      if (R && R.__esModule)
        return R;
      if (R === null || t(R) !== "object" && typeof R != "function")
        return { default: R };
      var F = a();
      if (F && F.has(R))
        return F.get(R);
      var U = {}, L = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var j in R)
        if (Object.prototype.hasOwnProperty.call(R, j)) {
          var V = L ? Object.getOwnPropertyDescriptor(R, j) : null;
          V && (V.get || V.set) ? Object.defineProperty(U, j, V) : U[j] = R[j];
        }
      return U.default = R, F && F.set(R, U), U;
    }
    function s(R, F) {
      var U = Object.keys(R);
      if (Object.getOwnPropertySymbols) {
        var L = Object.getOwnPropertySymbols(R);
        F && (L = L.filter(function(j) {
          return Object.getOwnPropertyDescriptor(R, j).enumerable;
        })), U.push.apply(U, L);
      }
      return U;
    }
    function l(R) {
      for (var F = 1; F < arguments.length; F++) {
        var U = arguments[F] != null ? arguments[F] : {};
        F % 2 ? s(Object(U), !0).forEach(function(L) {
          h(R, L, U[L]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(U)) : s(Object(U)).forEach(function(L) {
          Object.defineProperty(R, L, Object.getOwnPropertyDescriptor(U, L));
        });
      }
      return R;
    }
    function c(R, F) {
      return x(R) || y(R, F) || d(R, F) || u();
    }
    function u() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function d(R, F) {
      if (R) {
        if (typeof R == "string")
          return m(R, F);
        var U = Object.prototype.toString.call(R).slice(8, -1);
        if (U === "Object" && R.constructor && (U = R.constructor.name), U === "Map" || U === "Set")
          return Array.from(R);
        if (U === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U))
          return m(R, F);
      }
    }
    function m(R, F) {
      (F == null || F > R.length) && (F = R.length);
      for (var U = 0, L = new Array(F); U < F; U++)
        L[U] = R[U];
      return L;
    }
    function y(R, F) {
      if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(R)))) {
        var U = [], L = !0, j = !1, V = void 0;
        try {
          for (var E = R[Symbol.iterator](), O; !(L = (O = E.next()).done) && (U.push(O.value), !(F && U.length === F)); L = !0)
            ;
        } catch (B) {
          j = !0, V = B;
        } finally {
          try {
            !L && E.return != null && E.return();
          } finally {
            if (j)
              throw V;
          }
        }
        return U;
      }
    }
    function x(R) {
      if (Array.isArray(R))
        return R;
    }
    function w(R, F) {
      if (!(R instanceof F))
        throw new TypeError("Cannot call a class as a function");
    }
    function _(R, F) {
      for (var U = 0; U < F.length; U++) {
        var L = F[U];
        L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(R, L.key, L);
      }
    }
    function T(R, F, U) {
      return F && _(R.prototype, F), U && _(R, U), R;
    }
    function P(R, F) {
      if (typeof F != "function" && F !== null)
        throw new TypeError("Super expression must either be null or a function");
      R.prototype = Object.create(F && F.prototype, { constructor: { value: R, writable: !0, configurable: !0 } }), F && k(R, F);
    }
    function k(R, F) {
      return k = Object.setPrototypeOf || function(L, j) {
        return L.__proto__ = j, L;
      }, k(R, F);
    }
    function $(R) {
      var F = v();
      return function() {
        var L = f(R), j;
        if (F) {
          var V = f(this).constructor;
          j = Reflect.construct(L, arguments, V);
        } else
          j = L.apply(this, arguments);
        return S(this, j);
      };
    }
    function S(R, F) {
      return F && (t(F) === "object" || typeof F == "function") ? F : C(R);
    }
    function C(R) {
      if (R === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return R;
    }
    function v() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function f(R) {
      return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(U) {
        return U.__proto__ || Object.getPrototypeOf(U);
      }, f(R);
    }
    function h(R, F, U) {
      return F in R ? Object.defineProperty(R, F, { value: U, enumerable: !0, configurable: !0, writable: !0 }) : R[F] = U, R;
    }
    var p = "https://api.dmcdn.net/all.js", g = "DM", A = "dmAsyncInit", D = /* @__PURE__ */ function(R) {
      P(U, R);
      var F = $(U);
      function U() {
        var L;
        w(this, U);
        for (var j = arguments.length, V = new Array(j), E = 0; E < j; E++)
          V[E] = arguments[E];
        return L = F.call.apply(F, [this].concat(V)), h(C(L), "callPlayer", n.callPlayer), h(C(L), "onDurationChange", function() {
          var O = L.getDuration();
          L.props.onDuration(O);
        }), h(C(L), "mute", function() {
          L.callPlayer("setMuted", !0);
        }), h(C(L), "unmute", function() {
          L.callPlayer("setMuted", !1);
        }), h(C(L), "ref", function(O) {
          L.container = O;
        }), L;
      }
      return T(U, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function(j) {
          var V = this, E = this.props, O = E.controls, B = E.config, K = E.onError, Y = E.playing, Z = j.match(o.MATCH_URL_DAILYMOTION), Q = c(Z, 2), re = Q[1];
          if (this.player) {
            this.player.load(re, {
              start: (0, n.parseStartTime)(j),
              autoplay: Y
            });
            return;
          }
          (0, n.getSDK)(p, g, A, function(J) {
            return J.player;
          }).then(function(J) {
            if (V.container) {
              var oe = J.player;
              V.player = new oe(V.container, {
                width: "100%",
                height: "100%",
                video: re,
                params: l({
                  controls: O,
                  autoplay: V.props.playing,
                  mute: V.props.muted,
                  start: (0, n.parseStartTime)(j),
                  origin: window.location.origin
                }, B.params),
                events: {
                  apiready: V.props.onReady,
                  seeked: function() {
                    return V.props.onSeek(V.player.currentTime);
                  },
                  video_end: V.props.onEnded,
                  durationchange: V.onDurationChange,
                  pause: V.props.onPause,
                  playing: V.props.onPlay,
                  waiting: V.props.onBuffer,
                  error: function(ne) {
                    return K(ne);
                  }
                }
              });
            }
          }, K);
        }
      }, {
        key: "play",
        value: function() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function() {
        }
      }, {
        key: "seekTo",
        value: function(j) {
          var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.callPlayer("seek", j), V || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(j) {
          this.callPlayer("setVolume", j);
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.player.duration || null;
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.player.currentTime;
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return this.player.bufferedTime;
        }
      }, {
        key: "render",
        value: function() {
          var j = this.props.display, V = {
            width: "100%",
            height: "100%",
            display: j
          };
          return /* @__PURE__ */ r.default.createElement("div", {
            style: V
          }, /* @__PURE__ */ r.default.createElement("div", {
            ref: this.ref
          }));
        }
      }]), U;
    }(r.Component);
    e.default = D, h(D, "displayName", "DailyMotion"), h(D, "canPlay", o.canPlay.dailymotion), h(D, "loopOnEnded", !0);
  }(Ac)), Ac;
}
var Dc = {}, Qm;
function yB() {
  return Qm || (Qm = 1, function(e) {
    function t(v) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(h) {
        return typeof h;
      } : t = function(h) {
        return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
      }, t(v);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(ke), n = Ne, o = he;
    function a() {
      if (typeof WeakMap != "function")
        return null;
      var v = /* @__PURE__ */ new WeakMap();
      return a = function() {
        return v;
      }, v;
    }
    function i(v) {
      if (v && v.__esModule)
        return v;
      if (v === null || t(v) !== "object" && typeof v != "function")
        return { default: v };
      var f = a();
      if (f && f.has(v))
        return f.get(v);
      var h = {}, p = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var g in v)
        if (Object.prototype.hasOwnProperty.call(v, g)) {
          var A = p ? Object.getOwnPropertyDescriptor(v, g) : null;
          A && (A.get || A.set) ? Object.defineProperty(h, g, A) : h[g] = v[g];
        }
      return h.default = v, f && f.set(v, h), h;
    }
    function s(v, f) {
      var h = Object.keys(v);
      if (Object.getOwnPropertySymbols) {
        var p = Object.getOwnPropertySymbols(v);
        f && (p = p.filter(function(g) {
          return Object.getOwnPropertyDescriptor(v, g).enumerable;
        })), h.push.apply(h, p);
      }
      return h;
    }
    function l(v) {
      for (var f = 1; f < arguments.length; f++) {
        var h = arguments[f] != null ? arguments[f] : {};
        f % 2 ? s(Object(h), !0).forEach(function(p) {
          k(v, p, h[p]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(h)) : s(Object(h)).forEach(function(p) {
          Object.defineProperty(v, p, Object.getOwnPropertyDescriptor(h, p));
        });
      }
      return v;
    }
    function c(v, f) {
      if (!(v instanceof f))
        throw new TypeError("Cannot call a class as a function");
    }
    function u(v, f) {
      for (var h = 0; h < f.length; h++) {
        var p = f[h];
        p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(v, p.key, p);
      }
    }
    function d(v, f, h) {
      return f && u(v.prototype, f), h && u(v, h), v;
    }
    function m(v, f) {
      if (typeof f != "function" && f !== null)
        throw new TypeError("Super expression must either be null or a function");
      v.prototype = Object.create(f && f.prototype, { constructor: { value: v, writable: !0, configurable: !0 } }), f && y(v, f);
    }
    function y(v, f) {
      return y = Object.setPrototypeOf || function(p, g) {
        return p.__proto__ = g, p;
      }, y(v, f);
    }
    function x(v) {
      var f = T();
      return function() {
        var p = P(v), g;
        if (f) {
          var A = P(this).constructor;
          g = Reflect.construct(p, arguments, A);
        } else
          g = p.apply(this, arguments);
        return w(this, g);
      };
    }
    function w(v, f) {
      return f && (t(f) === "object" || typeof f == "function") ? f : _(v);
    }
    function _(v) {
      if (v === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return v;
    }
    function T() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function P(v) {
      return P = Object.setPrototypeOf ? Object.getPrototypeOf : function(h) {
        return h.__proto__ || Object.getPrototypeOf(h);
      }, P(v);
    }
    function k(v, f, h) {
      return f in v ? Object.defineProperty(v, f, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : v[f] = h, v;
    }
    var $ = "https://widget.mixcloud.com/media/js/widgetApi.js", S = "Mixcloud", C = /* @__PURE__ */ function(v) {
      m(h, v);
      var f = x(h);
      function h() {
        var p;
        c(this, h);
        for (var g = arguments.length, A = new Array(g), D = 0; D < g; D++)
          A[D] = arguments[D];
        return p = f.call.apply(f, [this].concat(A)), k(_(p), "callPlayer", n.callPlayer), k(_(p), "duration", null), k(_(p), "currentTime", null), k(_(p), "secondsLoaded", null), k(_(p), "mute", function() {
        }), k(_(p), "unmute", function() {
        }), k(_(p), "ref", function(R) {
          p.iframe = R;
        }), p;
      }
      return d(h, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function(g) {
          var A = this;
          (0, n.getSDK)($, S).then(function(D) {
            A.player = D.PlayerWidget(A.iframe), A.player.ready.then(function() {
              A.player.events.play.on(A.props.onPlay), A.player.events.pause.on(A.props.onPause), A.player.events.ended.on(A.props.onEnded), A.player.events.error.on(A.props.error), A.player.events.progress.on(function(R, F) {
                A.currentTime = R, A.duration = F;
              }), A.props.onReady();
            });
          }, this.props.onError);
        }
      }, {
        key: "play",
        value: function() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function() {
        }
      }, {
        key: "seekTo",
        value: function(g) {
          var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.callPlayer("seek", g), A || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(g) {
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.duration;
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.currentTime;
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return null;
        }
      }, {
        key: "render",
        value: function() {
          var g = this.props, A = g.url, D = g.config, R = A.match(o.MATCH_URL_MIXCLOUD)[1], F = {
            width: "100%",
            height: "100%"
          }, U = (0, n.queryString)(l(l({}, D.options), {}, {
            feed: "/".concat(R, "/")
          }));
          return /* @__PURE__ */ r.default.createElement("iframe", {
            key: R,
            ref: this.ref,
            style: F,
            src: "https://www.mixcloud.com/widget/iframe/?".concat(U),
            frameBorder: "0",
            allow: "autoplay"
          });
        }
      }]), h;
    }(r.Component);
    e.default = C, k(C, "displayName", "Mixcloud"), k(C, "canPlay", o.canPlay.mixcloud), k(C, "loopOnEnded", !0);
  }(Dc)), Dc;
}
var Mc = {}, ey;
function vB() {
  return ey || (ey = 1, function(e) {
    function t(f) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(p) {
        return typeof p;
      } : t = function(p) {
        return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
      }, t(f);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(ke), n = Ne, o = he;
    function a() {
      if (typeof WeakMap != "function")
        return null;
      var f = /* @__PURE__ */ new WeakMap();
      return a = function() {
        return f;
      }, f;
    }
    function i(f) {
      if (f && f.__esModule)
        return f;
      if (f === null || t(f) !== "object" && typeof f != "function")
        return { default: f };
      var h = a();
      if (h && h.has(f))
        return h.get(f);
      var p = {}, g = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var A in f)
        if (Object.prototype.hasOwnProperty.call(f, A)) {
          var D = g ? Object.getOwnPropertyDescriptor(f, A) : null;
          D && (D.get || D.set) ? Object.defineProperty(p, A, D) : p[A] = f[A];
        }
      return p.default = f, h && h.set(f, p), p;
    }
    function s(f, h) {
      var p = Object.keys(f);
      if (Object.getOwnPropertySymbols) {
        var g = Object.getOwnPropertySymbols(f);
        h && (g = g.filter(function(A) {
          return Object.getOwnPropertyDescriptor(f, A).enumerable;
        })), p.push.apply(p, g);
      }
      return p;
    }
    function l(f) {
      for (var h = 1; h < arguments.length; h++) {
        var p = arguments[h] != null ? arguments[h] : {};
        h % 2 ? s(Object(p), !0).forEach(function(g) {
          k(f, g, p[g]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(p)) : s(Object(p)).forEach(function(g) {
          Object.defineProperty(f, g, Object.getOwnPropertyDescriptor(p, g));
        });
      }
      return f;
    }
    function c(f, h) {
      if (!(f instanceof h))
        throw new TypeError("Cannot call a class as a function");
    }
    function u(f, h) {
      for (var p = 0; p < h.length; p++) {
        var g = h[p];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(f, g.key, g);
      }
    }
    function d(f, h, p) {
      return h && u(f.prototype, h), p && u(f, p), f;
    }
    function m(f, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Super expression must either be null or a function");
      f.prototype = Object.create(h && h.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), h && y(f, h);
    }
    function y(f, h) {
      return y = Object.setPrototypeOf || function(g, A) {
        return g.__proto__ = A, g;
      }, y(f, h);
    }
    function x(f) {
      var h = T();
      return function() {
        var g = P(f), A;
        if (h) {
          var D = P(this).constructor;
          A = Reflect.construct(g, arguments, D);
        } else
          A = g.apply(this, arguments);
        return w(this, A);
      };
    }
    function w(f, h) {
      return h && (t(h) === "object" || typeof h == "function") ? h : _(f);
    }
    function _(f) {
      if (f === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return f;
    }
    function T() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function P(f) {
      return P = Object.setPrototypeOf ? Object.getPrototypeOf : function(p) {
        return p.__proto__ || Object.getPrototypeOf(p);
      }, P(f);
    }
    function k(f, h, p) {
      return h in f ? Object.defineProperty(f, h, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : f[h] = p, f;
    }
    var $ = "https://play.vidyard.com/embed/v4.js", S = "VidyardV4", C = "onVidyardAPI", v = /* @__PURE__ */ function(f) {
      m(p, f);
      var h = x(p);
      function p() {
        var g;
        c(this, p);
        for (var A = arguments.length, D = new Array(A), R = 0; R < A; R++)
          D[R] = arguments[R];
        return g = h.call.apply(h, [this].concat(D)), k(_(g), "callPlayer", n.callPlayer), k(_(g), "mute", function() {
          g.setVolume(0);
        }), k(_(g), "unmute", function() {
          g.props.volume !== null && g.setVolume(g.props.volume);
        }), k(_(g), "ref", function(F) {
          g.container = F;
        }), g;
      }
      return d(p, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function(A) {
          var D = this, R = this.props, F = R.playing, U = R.config, L = R.onError, j = R.onDuration, V = A && A.match(o.MATCH_URL_VIDYARD)[1];
          this.player && this.stop(), (0, n.getSDK)($, S, C).then(function(E) {
            D.container && (E.api.addReadyListener(function(O, B) {
              D.player || (D.player = B, D.player.on("ready", D.props.onReady), D.player.on("play", D.props.onPlay), D.player.on("pause", D.props.onPause), D.player.on("seek", D.props.onSeek), D.player.on("playerComplete", D.props.onEnded));
            }, V), E.api.renderPlayer(l({
              uuid: V,
              container: D.container,
              autoplay: F ? 1 : 0
            }, U.options)), E.api.getPlayerMetadata(V).then(function(O) {
              D.duration = O.length_in_seconds, j(O.length_in_seconds);
            }));
          }, L);
        }
      }, {
        key: "play",
        value: function() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function() {
          window.VidyardV4.api.destroyPlayer(this.player);
        }
      }, {
        key: "seekTo",
        value: function(A) {
          var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.callPlayer("seek", A), D || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(A) {
          this.callPlayer("setVolume", A);
        }
      }, {
        key: "setPlaybackRate",
        value: function(A) {
          this.callPlayer("setPlaybackSpeed", A);
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.duration;
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.callPlayer("currentTime");
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return null;
        }
      }, {
        key: "render",
        value: function() {
          var A = this.props.display, D = {
            width: "100%",
            height: "100%",
            display: A
          };
          return /* @__PURE__ */ r.default.createElement("div", {
            style: D
          }, /* @__PURE__ */ r.default.createElement("div", {
            ref: this.ref
          }));
        }
      }]), p;
    }(r.Component);
    e.default = v, k(v, "displayName", "Vidyard"), k(v, "canPlay", o.canPlay.vidyard);
  }(Mc)), Mc;
}
var Ic = {}, ty;
function gB() {
  return ty || (ty = 1, function(e) {
    function t(S) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(v) {
        return typeof v;
      } : t = function(v) {
        return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
      }, t(S);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(ke), n = Ne, o = he;
    function a() {
      if (typeof WeakMap != "function")
        return null;
      var S = /* @__PURE__ */ new WeakMap();
      return a = function() {
        return S;
      }, S;
    }
    function i(S) {
      if (S && S.__esModule)
        return S;
      if (S === null || t(S) !== "object" && typeof S != "function")
        return { default: S };
      var C = a();
      if (C && C.has(S))
        return C.get(S);
      var v = {}, f = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var h in S)
        if (Object.prototype.hasOwnProperty.call(S, h)) {
          var p = f ? Object.getOwnPropertyDescriptor(S, h) : null;
          p && (p.get || p.set) ? Object.defineProperty(v, h, p) : v[h] = S[h];
        }
      return v.default = S, C && C.set(S, v), v;
    }
    function s(S, C) {
      if (!(S instanceof C))
        throw new TypeError("Cannot call a class as a function");
    }
    function l(S, C) {
      for (var v = 0; v < C.length; v++) {
        var f = C[v];
        f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(S, f.key, f);
      }
    }
    function c(S, C, v) {
      return C && l(S.prototype, C), v && l(S, v), S;
    }
    function u(S, C) {
      if (typeof C != "function" && C !== null)
        throw new TypeError("Super expression must either be null or a function");
      S.prototype = Object.create(C && C.prototype, { constructor: { value: S, writable: !0, configurable: !0 } }), C && d(S, C);
    }
    function d(S, C) {
      return d = Object.setPrototypeOf || function(f, h) {
        return f.__proto__ = h, f;
      }, d(S, C);
    }
    function m(S) {
      var C = w();
      return function() {
        var f = _(S), h;
        if (C) {
          var p = _(this).constructor;
          h = Reflect.construct(f, arguments, p);
        } else
          h = f.apply(this, arguments);
        return y(this, h);
      };
    }
    function y(S, C) {
      return C && (t(C) === "object" || typeof C == "function") ? C : x(S);
    }
    function x(S) {
      if (S === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return S;
    }
    function w() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function _(S) {
      return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(v) {
        return v.__proto__ || Object.getPrototypeOf(v);
      }, _(S);
    }
    function T(S, C, v) {
      return C in S ? Object.defineProperty(S, C, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : S[C] = v, S;
    }
    var P = "https://cdn.embed.ly/player-0.1.0.min.js", k = "playerjs", $ = /* @__PURE__ */ function(S) {
      u(v, S);
      var C = m(v);
      function v() {
        var f;
        s(this, v);
        for (var h = arguments.length, p = new Array(h), g = 0; g < h; g++)
          p[g] = arguments[g];
        return f = C.call.apply(C, [this].concat(p)), T(x(f), "callPlayer", n.callPlayer), T(x(f), "duration", null), T(x(f), "currentTime", null), T(x(f), "secondsLoaded", null), T(x(f), "mute", function() {
          f.callPlayer("mute");
        }), T(x(f), "unmute", function() {
          f.callPlayer("unmute");
        }), T(x(f), "ref", function(A) {
          f.iframe = A;
        }), f;
      }
      return c(v, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this);
        }
      }, {
        key: "load",
        value: function(h) {
          var p = this;
          (0, n.getSDK)(P, k).then(function(g) {
            p.iframe && (p.player = new g.Player(p.iframe), p.player.on("ready", function() {
              setTimeout(function() {
                p.player.isReady = !0, p.player.setLoop(p.props.loop), p.props.muted && p.player.mute(), p.addListeners(p.player, p.props), p.props.onReady();
              }, 500);
            }));
          }, this.props.onError);
        }
      }, {
        key: "addListeners",
        value: function(h, p) {
          var g = this;
          h.on("play", p.onPlay), h.on("pause", p.onPause), h.on("ended", p.onEnded), h.on("error", p.onError), h.on("timeupdate", function(A) {
            var D = A.duration, R = A.seconds;
            g.duration = D, g.currentTime = R;
          });
        }
      }, {
        key: "play",
        value: function() {
          this.callPlayer("play");
        }
      }, {
        key: "pause",
        value: function() {
          this.callPlayer("pause");
        }
      }, {
        key: "stop",
        value: function() {
        }
      }, {
        key: "seekTo",
        value: function(h) {
          var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.callPlayer("setCurrentTime", h), p || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(h) {
          this.callPlayer("setVolume", h);
        }
      }, {
        key: "setLoop",
        value: function(h) {
          this.callPlayer("setLoop", h);
        }
      }, {
        key: "getDuration",
        value: function() {
          return this.duration;
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.currentTime;
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          return this.secondsLoaded;
        }
      }, {
        key: "render",
        value: function() {
          var h = {
            width: "100%",
            height: "100%"
          };
          return /* @__PURE__ */ r.default.createElement("iframe", {
            ref: this.ref,
            src: this.props.url,
            frameBorder: "0",
            scrolling: "no",
            style: h,
            allow: "encrypted-media; autoplay; fullscreen;",
            referrerPolicy: "no-referrer-when-downgrade"
          });
        }
      }]), v;
    }(r.Component);
    e.default = $, T($, "displayName", "Kaltura"), T($, "canPlay", o.canPlay.kaltura);
  }(Ic)), Ic;
}
var $c = {}, ry;
function bB() {
  return ry || (ry = 1, function(e) {
    function t(L) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(V) {
        return typeof V;
      } : t = function(V) {
        return V && typeof Symbol == "function" && V.constructor === Symbol && V !== Symbol.prototype ? "symbol" : typeof V;
      }, t(L);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(ke), n = Ne, o = he;
    function a() {
      if (typeof WeakMap != "function")
        return null;
      var L = /* @__PURE__ */ new WeakMap();
      return a = function() {
        return L;
      }, L;
    }
    function i(L) {
      if (L && L.__esModule)
        return L;
      if (L === null || t(L) !== "object" && typeof L != "function")
        return { default: L };
      var j = a();
      if (j && j.has(L))
        return j.get(L);
      var V = {}, E = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var O in L)
        if (Object.prototype.hasOwnProperty.call(L, O)) {
          var B = E ? Object.getOwnPropertyDescriptor(L, O) : null;
          B && (B.get || B.set) ? Object.defineProperty(V, O, B) : V[O] = L[O];
        }
      return V.default = L, j && j.set(L, V), V;
    }
    function s() {
      return s = Object.assign || function(L) {
        for (var j = 1; j < arguments.length; j++) {
          var V = arguments[j];
          for (var E in V)
            Object.prototype.hasOwnProperty.call(V, E) && (L[E] = V[E]);
        }
        return L;
      }, s.apply(this, arguments);
    }
    function l(L, j) {
      if (!(L instanceof j))
        throw new TypeError("Cannot call a class as a function");
    }
    function c(L, j) {
      for (var V = 0; V < j.length; V++) {
        var E = j[V];
        E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(L, E.key, E);
      }
    }
    function u(L, j, V) {
      return j && c(L.prototype, j), V && c(L, V), L;
    }
    function d(L, j) {
      if (typeof j != "function" && j !== null)
        throw new TypeError("Super expression must either be null or a function");
      L.prototype = Object.create(j && j.prototype, { constructor: { value: L, writable: !0, configurable: !0 } }), j && m(L, j);
    }
    function m(L, j) {
      return m = Object.setPrototypeOf || function(E, O) {
        return E.__proto__ = O, E;
      }, m(L, j);
    }
    function y(L) {
      var j = _();
      return function() {
        var E = T(L), O;
        if (j) {
          var B = T(this).constructor;
          O = Reflect.construct(E, arguments, B);
        } else
          O = E.apply(this, arguments);
        return x(this, O);
      };
    }
    function x(L, j) {
      return j && (t(j) === "object" || typeof j == "function") ? j : w(L);
    }
    function w(L) {
      if (L === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return L;
    }
    function _() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function T(L) {
      return T = Object.setPrototypeOf ? Object.getPrototypeOf : function(V) {
        return V.__proto__ || Object.getPrototypeOf(V);
      }, T(L);
    }
    function P(L, j, V) {
      return j in L ? Object.defineProperty(L, j, { value: V, enumerable: !0, configurable: !0, writable: !0 }) : L[j] = V, L;
    }
    var k = typeof navigator < "u", $ = k && navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1, S = k && (/iPad|iPhone|iPod/.test(navigator.userAgent) || $) && !window.MSStream, C = k && /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !window.MSStream, v = "https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js", f = "Hls", h = "https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js", p = "dashjs", g = "https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js", A = "flvjs", D = /www\.dropbox\.com\/.+/, R = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/, F = "https://videodelivery.net/{id}/manifest/video.m3u8", U = /* @__PURE__ */ function(L) {
      d(V, L);
      var j = y(V);
      function V() {
        var E;
        l(this, V);
        for (var O = arguments.length, B = new Array(O), K = 0; K < O; K++)
          B[K] = arguments[K];
        return E = j.call.apply(j, [this].concat(B)), P(w(E), "onReady", function() {
          var Y;
          return (Y = E.props).onReady.apply(Y, arguments);
        }), P(w(E), "onPlay", function() {
          var Y;
          return (Y = E.props).onPlay.apply(Y, arguments);
        }), P(w(E), "onBuffer", function() {
          var Y;
          return (Y = E.props).onBuffer.apply(Y, arguments);
        }), P(w(E), "onBufferEnd", function() {
          var Y;
          return (Y = E.props).onBufferEnd.apply(Y, arguments);
        }), P(w(E), "onPause", function() {
          var Y;
          return (Y = E.props).onPause.apply(Y, arguments);
        }), P(w(E), "onEnded", function() {
          var Y;
          return (Y = E.props).onEnded.apply(Y, arguments);
        }), P(w(E), "onError", function() {
          var Y;
          return (Y = E.props).onError.apply(Y, arguments);
        }), P(w(E), "onPlayBackRateChange", function(Y) {
          return E.props.onPlaybackRateChange(Y.target.playbackRate);
        }), P(w(E), "onEnablePIP", function() {
          var Y;
          return (Y = E.props).onEnablePIP.apply(Y, arguments);
        }), P(w(E), "onDisablePIP", function(Y) {
          var Z = E.props, Q = Z.onDisablePIP, re = Z.playing;
          Q(Y), re && E.play();
        }), P(w(E), "onPresentationModeChange", function(Y) {
          if (E.player && (0, n.supportsWebKitPresentationMode)(E.player)) {
            var Z = E.player.webkitPresentationMode;
            Z === "picture-in-picture" ? E.onEnablePIP(Y) : Z === "inline" && E.onDisablePIP(Y);
          }
        }), P(w(E), "onSeek", function(Y) {
          E.props.onSeek(Y.target.currentTime);
        }), P(w(E), "mute", function() {
          E.player.muted = !0;
        }), P(w(E), "unmute", function() {
          E.player.muted = !1;
        }), P(w(E), "renderSourceElement", function(Y, Z) {
          return typeof Y == "string" ? /* @__PURE__ */ r.default.createElement("source", {
            key: Z,
            src: Y
          }) : /* @__PURE__ */ r.default.createElement("source", s({
            key: Z
          }, Y));
        }), P(w(E), "renderTrack", function(Y, Z) {
          return /* @__PURE__ */ r.default.createElement("track", s({
            key: Z
          }, Y));
        }), P(w(E), "ref", function(Y) {
          E.player && (E.prevPlayer = E.player), E.player = Y;
        }), E;
      }
      return u(V, [{
        key: "componentDidMount",
        value: function() {
          this.props.onMount && this.props.onMount(this), this.addListeners(this.player);
          var O = this.getSource(this.props.url);
          O && (this.player.src = O), (S || this.props.config.forceDisableHls) && this.player.load();
        }
      }, {
        key: "componentDidUpdate",
        value: function(O) {
          this.shouldUseAudio(this.props) !== this.shouldUseAudio(O) && (this.removeListeners(this.prevPlayer, O.url), this.addListeners(this.player)), this.props.url !== O.url && !(0, n.isMediaStream)(this.props.url) && !(this.props.url instanceof Array) && (this.player.srcObject = null);
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.player.removeAttribute("src"), this.removeListeners(this.player), this.hls && this.hls.destroy();
        }
      }, {
        key: "addListeners",
        value: function(O) {
          var B = this.props, K = B.url, Y = B.playsinline;
          O.addEventListener("play", this.onPlay), O.addEventListener("waiting", this.onBuffer), O.addEventListener("playing", this.onBufferEnd), O.addEventListener("pause", this.onPause), O.addEventListener("seeked", this.onSeek), O.addEventListener("ended", this.onEnded), O.addEventListener("error", this.onError), O.addEventListener("ratechange", this.onPlayBackRateChange), O.addEventListener("enterpictureinpicture", this.onEnablePIP), O.addEventListener("leavepictureinpicture", this.onDisablePIP), O.addEventListener("webkitpresentationmodechanged", this.onPresentationModeChange), this.shouldUseHLS(K) || O.addEventListener("canplay", this.onReady), Y && (O.setAttribute("playsinline", ""), O.setAttribute("webkit-playsinline", ""), O.setAttribute("x5-playsinline", ""));
        }
      }, {
        key: "removeListeners",
        value: function(O, B) {
          O.removeEventListener("canplay", this.onReady), O.removeEventListener("play", this.onPlay), O.removeEventListener("waiting", this.onBuffer), O.removeEventListener("playing", this.onBufferEnd), O.removeEventListener("pause", this.onPause), O.removeEventListener("seeked", this.onSeek), O.removeEventListener("ended", this.onEnded), O.removeEventListener("error", this.onError), O.removeEventListener("ratechange", this.onPlayBackRateChange), O.removeEventListener("enterpictureinpicture", this.onEnablePIP), O.removeEventListener("leavepictureinpicture", this.onDisablePIP), O.removeEventListener("webkitpresentationmodechanged", this.onPresentationModeChange), this.shouldUseHLS(B) || O.removeEventListener("canplay", this.onReady);
        }
        // Proxy methods to prevent listener leaks
      }, {
        key: "shouldUseAudio",
        value: function(O) {
          return O.config.forceVideo || O.config.attributes.poster ? !1 : o.AUDIO_EXTENSIONS.test(O.url) || O.config.forceAudio;
        }
      }, {
        key: "shouldUseHLS",
        value: function(O) {
          return C && this.props.config.forceSafariHLS || this.props.config.forceHLS ? !0 : S || this.props.config.forceDisableHls ? !1 : o.HLS_EXTENSIONS.test(O) || R.test(O);
        }
      }, {
        key: "shouldUseDASH",
        value: function(O) {
          return o.DASH_EXTENSIONS.test(O) || this.props.config.forceDASH;
        }
      }, {
        key: "shouldUseFLV",
        value: function(O) {
          return o.FLV_EXTENSIONS.test(O) || this.props.config.forceFLV;
        }
      }, {
        key: "load",
        value: function(O) {
          var B = this, K = this.props.config, Y = K.hlsVersion, Z = K.hlsOptions, Q = K.dashVersion, re = K.flvVersion;
          if (this.hls && this.hls.destroy(), this.dash && this.dash.reset(), this.shouldUseHLS(O) && (0, n.getSDK)(v.replace("VERSION", Y), f).then(function(J) {
            if (B.hls = new J(Z), B.hls.on(J.Events.MANIFEST_PARSED, function() {
              B.props.onReady();
            }), B.hls.on(J.Events.ERROR, function(ae, ne) {
              B.props.onError(ae, ne, B.hls, J);
            }), R.test(O)) {
              var oe = O.match(R)[1];
              B.hls.loadSource(F.replace("{id}", oe));
            } else
              B.hls.loadSource(O);
            B.hls.attachMedia(B.player), B.props.onLoaded();
          }), this.shouldUseDASH(O) && (0, n.getSDK)(h.replace("VERSION", Q), p).then(function(J) {
            B.dash = J.MediaPlayer().create(), B.dash.initialize(B.player, O, B.props.playing), B.dash.on("error", B.props.onError), parseInt(Q) < 3 ? B.dash.getDebug().setLogToBrowserConsole(!1) : B.dash.updateSettings({
              debug: {
                logLevel: J.Debug.LOG_LEVEL_NONE
              }
            }), B.props.onLoaded();
          }), this.shouldUseFLV(O) && (0, n.getSDK)(g.replace("VERSION", re), A).then(function(J) {
            B.flv = J.createPlayer({
              type: "flv",
              url: O
            }), B.flv.attachMediaElement(B.player), B.flv.on(J.Events.ERROR, function(oe, ae) {
              B.props.onError(oe, ae, B.flv, J);
            }), B.flv.load(), B.props.onLoaded();
          }), O instanceof Array)
            this.player.load();
          else if ((0, n.isMediaStream)(O))
            try {
              this.player.srcObject = O;
            } catch {
              this.player.src = window.URL.createObjectURL(O);
            }
        }
      }, {
        key: "play",
        value: function() {
          var O = this.player.play();
          O && O.catch(this.props.onError);
        }
      }, {
        key: "pause",
        value: function() {
          this.player.pause();
        }
      }, {
        key: "stop",
        value: function() {
          this.player.removeAttribute("src"), this.dash && this.dash.reset();
        }
      }, {
        key: "seekTo",
        value: function(O) {
          var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          this.player.currentTime = O, B || this.pause();
        }
      }, {
        key: "setVolume",
        value: function(O) {
          this.player.volume = O;
        }
      }, {
        key: "enablePIP",
        value: function() {
          this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player ? this.player.requestPictureInPicture() : (0, n.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== "picture-in-picture" && this.player.webkitSetPresentationMode("picture-in-picture");
        }
      }, {
        key: "disablePIP",
        value: function() {
          document.exitPictureInPicture && document.pictureInPictureElement === this.player ? document.exitPictureInPicture() : (0, n.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== "inline" && this.player.webkitSetPresentationMode("inline");
        }
      }, {
        key: "setPlaybackRate",
        value: function(O) {
          try {
            this.player.playbackRate = O;
          } catch (B) {
            this.props.onError(B);
          }
        }
      }, {
        key: "getDuration",
        value: function() {
          if (!this.player)
            return null;
          var O = this.player, B = O.duration, K = O.seekable;
          return B === 1 / 0 && K.length > 0 ? K.end(K.length - 1) : B;
        }
      }, {
        key: "getCurrentTime",
        value: function() {
          return this.player ? this.player.currentTime : null;
        }
      }, {
        key: "getSecondsLoaded",
        value: function() {
          if (!this.player)
            return null;
          var O = this.player.buffered;
          if (O.length === 0)
            return 0;
          var B = O.end(O.length - 1), K = this.getDuration();
          return B > K ? K : B;
        }
      }, {
        key: "getSource",
        value: function(O) {
          var B = this.shouldUseHLS(O), K = this.shouldUseDASH(O), Y = this.shouldUseFLV(O);
          if (!(O instanceof Array || (0, n.isMediaStream)(O) || B || K || Y))
            return D.test(O) ? O.replace("www.dropbox.com", "dl.dropboxusercontent.com") : O;
        }
      }, {
        key: "render",
        value: function() {
          var O = this.props, B = O.url, K = O.playing, Y = O.loop, Z = O.controls, Q = O.muted, re = O.config, J = O.width, oe = O.height, ae = this.shouldUseAudio(this.props), ne = ae ? "audio" : "video", G = {
            width: J === "auto" ? J : "100%",
            height: oe === "auto" ? oe : "100%"
          };
          return /* @__PURE__ */ r.default.createElement(ne, s({
            ref: this.ref,
            src: this.getSource(B),
            style: G,
            preload: "auto",
            autoPlay: K || void 0,
            controls: Z,
            muted: Q,
            loop: Y
          }, re.attributes), B instanceof Array && B.map(this.renderSourceElement), re.tracks.map(this.renderTrack));
        }
      }]), V;
    }(r.Component);
    e.default = U, P(U, "displayName", "FilePlayer"), P(U, "canPlay", o.canPlay.file);
  }($c)), $c;
}
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var t = ke, r = Ne, n = he;
  function o(l) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? o = function(u) {
      return typeof u;
    } : o = function(u) {
      return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
    }, o(l);
  }
  function a() {
    if (typeof WeakMap != "function")
      return null;
    var l = /* @__PURE__ */ new WeakMap();
    return a = function() {
      return l;
    }, l;
  }
  function i(l) {
    if (l && l.__esModule)
      return l;
    if (l === null || o(l) !== "object" && typeof l != "function")
      return { default: l };
    var c = a();
    if (c && c.has(l))
      return c.get(l);
    var u = {}, d = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var m in l)
      if (Object.prototype.hasOwnProperty.call(l, m)) {
        var y = d ? Object.getOwnPropertyDescriptor(l, m) : null;
        y && (y.get || y.set) ? Object.defineProperty(u, m, y) : u[m] = l[m];
      }
    return u.default = l, c && c.set(l, u), u;
  }
  var s = [{
    key: "youtube",
    name: "YouTube",
    canPlay: n.canPlay.youtube,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return i(lB());
      });
    })
  }, {
    key: "soundcloud",
    name: "SoundCloud",
    canPlay: n.canPlay.soundcloud,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return i(cB());
      });
    })
  }, {
    key: "vimeo",
    name: "Vimeo",
    canPlay: n.canPlay.vimeo,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return i(uB());
      });
    })
  }, {
    key: "facebook",
    name: "Facebook",
    canPlay: n.canPlay.facebook,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return i(fB());
      });
    })
  }, {
    key: "streamable",
    name: "Streamable",
    canPlay: n.canPlay.streamable,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return i(dB());
      });
    })
  }, {
    key: "wistia",
    name: "Wistia",
    canPlay: n.canPlay.wistia,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return i(pB());
      });
    })
  }, {
    key: "twitch",
    name: "Twitch",
    canPlay: n.canPlay.twitch,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return i(hB());
      });
    })
  }, {
    key: "dailymotion",
    name: "DailyMotion",
    canPlay: n.canPlay.dailymotion,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return i(mB());
      });
    })
  }, {
    key: "mixcloud",
    name: "Mixcloud",
    canPlay: n.canPlay.mixcloud,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return i(yB());
      });
    })
  }, {
    key: "vidyard",
    name: "Vidyard",
    canPlay: n.canPlay.vidyard,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return i(vB());
      });
    })
  }, {
    key: "kaltura",
    name: "Kaltura",
    canPlay: n.canPlay.kaltura,
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return i(gB());
      });
    })
  }, {
    key: "file",
    name: "FilePlayer",
    canPlay: n.canPlay.file,
    canEnablePIP: function(c) {
      return n.canPlay.file(c) && (document.pictureInPictureEnabled || (0, r.supportsWebKitPresentationMode)()) && !n.AUDIO_EXTENSIONS.test(c);
    },
    lazyPlayer: /* @__PURE__ */ (0, t.lazy)(function() {
      return Promise.resolve().then(function() {
        return i(bB());
      });
    })
  }];
  e.default = s;
})(P0);
var hl = {}, ny = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function SB(e, t) {
  return !!(e === t || ny(e) && ny(t));
}
function wB(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!SB(e[r], t[r]))
      return !1;
  return !0;
}
function xB(e, t) {
  t === void 0 && (t = wB);
  var r, n = [], o, a = !1;
  function i() {
    for (var s = [], l = 0; l < arguments.length; l++)
      s[l] = arguments[l];
    return a && r === this && t(s, n) || (o = e.apply(this, s), a = !0, r = this, n = s), o;
  }
  return i;
}
const _B = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xB
}, Symbol.toStringTag, { value: "Module" })), PB = /* @__PURE__ */ TS(_B);
var Jn = {};
Object.defineProperty(Jn, "__esModule", {
  value: !0
});
Jn.defaultProps = Jn.propTypes = void 0;
var an = OB(Fe);
function OB(e) {
  return e && e.__esModule ? e : { default: e };
}
var $t = an.default.string, jt = an.default.bool, po = an.default.number, jc = an.default.array, ha = an.default.oneOfType, cr = an.default.shape, Lt = an.default.object, vt = an.default.func, oy = an.default.node, EB = {
  url: ha([$t, jc, Lt]),
  playing: jt,
  loop: jt,
  controls: jt,
  volume: po,
  muted: jt,
  playbackRate: po,
  width: ha([$t, po]),
  height: ha([$t, po]),
  style: Lt,
  progressInterval: po,
  playsinline: jt,
  pip: jt,
  stopOnUnmount: jt,
  light: ha([jt, $t, Lt]),
  playIcon: oy,
  previewTabIndex: po,
  fallback: oy,
  oEmbedUrl: $t,
  wrapper: ha([$t, vt, cr({
    render: vt.isRequired
  })]),
  config: cr({
    soundcloud: cr({
      options: Lt
    }),
    youtube: cr({
      playerVars: Lt,
      embedOptions: Lt,
      onUnstarted: vt
    }),
    facebook: cr({
      appId: $t,
      version: $t,
      playerId: $t,
      attributes: Lt
    }),
    dailymotion: cr({
      params: Lt
    }),
    vimeo: cr({
      playerOptions: Lt,
      title: $t
    }),
    file: cr({
      attributes: Lt,
      tracks: jc,
      forceVideo: jt,
      forceAudio: jt,
      forceHLS: jt,
      forceSafariHLS: jt,
      forceDisableHls: jt,
      forceDASH: jt,
      forceFLV: jt,
      hlsOptions: Lt,
      hlsVersion: $t,
      dashVersion: $t,
      flvVersion: $t
    }),
    wistia: cr({
      options: Lt,
      playerId: $t,
      customControls: jc
    }),
    mixcloud: cr({
      options: Lt
    }),
    twitch: cr({
      options: Lt,
      playerId: $t
    }),
    vidyard: cr({
      options: Lt
    })
  }),
  onReady: vt,
  onStart: vt,
  onPlay: vt,
  onPause: vt,
  onBuffer: vt,
  onBufferEnd: vt,
  onEnded: vt,
  onError: vt,
  onDuration: vt,
  onSeek: vt,
  onPlaybackRateChange: vt,
  onPlaybackQualityChange: vt,
  onProgress: vt,
  onClickPreview: vt,
  onEnablePIP: vt,
  onDisablePIP: vt
};
Jn.propTypes = EB;
var Pt = function() {
}, kB = {
  playing: !1,
  loop: !1,
  controls: !1,
  volume: null,
  muted: !1,
  playbackRate: 1,
  width: "640px",
  height: "360px",
  style: {},
  progressInterval: 1e3,
  playsinline: !1,
  pip: !1,
  stopOnUnmount: !0,
  light: !1,
  fallback: null,
  wrapper: "div",
  previewTabIndex: 0,
  oEmbedUrl: "https://noembed.com/embed?url={url}",
  config: {
    soundcloud: {
      options: {
        visual: !0,
        // Undocumented, but makes player fill container and look better
        buying: !1,
        liking: !1,
        download: !1,
        sharing: !1,
        show_comments: !1,
        show_playcount: !1
      }
    },
    youtube: {
      playerVars: {
        playsinline: 1,
        showinfo: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1
      },
      embedOptions: {},
      onUnstarted: Pt
    },
    facebook: {
      appId: "1309697205772819",
      version: "v3.3",
      playerId: null,
      attributes: {}
    },
    dailymotion: {
      params: {
        api: 1,
        "endscreen-enable": !1
      }
    },
    vimeo: {
      playerOptions: {
        autopause: !1,
        byline: !1,
        portrait: !1,
        title: !1
      },
      title: null
    },
    file: {
      attributes: {},
      tracks: [],
      forceVideo: !1,
      forceAudio: !1,
      forceHLS: !1,
      forceDASH: !1,
      forceFLV: !1,
      hlsOptions: {},
      hlsVersion: "1.1.4",
      dashVersion: "3.1.3",
      flvVersion: "1.5.0",
      forceDisableHls: !1
    },
    wistia: {
      options: {},
      playerId: null,
      customControls: null
    },
    mixcloud: {
      options: {
        hide_cover: 1
      }
    },
    twitch: {
      options: {},
      playerId: null
    },
    vidyard: {
      options: {}
    }
  },
  onReady: Pt,
  onStart: Pt,
  onPlay: Pt,
  onPause: Pt,
  onBuffer: Pt,
  onBufferEnd: Pt,
  onEnded: Pt,
  onError: Pt,
  onDuration: Pt,
  onSeek: Pt,
  onPlaybackRateChange: Pt,
  onPlaybackQualityChange: Pt,
  onProgress: Pt,
  onClickPreview: Pt,
  onEnablePIP: Pt,
  onDisablePIP: Pt
};
Jn.defaultProps = kB;
var W0 = {};
(function(e) {
  function t(v) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(h) {
      return typeof h;
    } : t = function(h) {
      return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
    }, t(v);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = l(ke), n = i(af), o = Jn, a = Ne;
  function i(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function s() {
    if (typeof WeakMap != "function")
      return null;
    var v = /* @__PURE__ */ new WeakMap();
    return s = function() {
      return v;
    }, v;
  }
  function l(v) {
    if (v && v.__esModule)
      return v;
    if (v === null || t(v) !== "object" && typeof v != "function")
      return { default: v };
    var f = s();
    if (f && f.has(v))
      return f.get(v);
    var h = {}, p = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var g in v)
      if (Object.prototype.hasOwnProperty.call(v, g)) {
        var A = p ? Object.getOwnPropertyDescriptor(v, g) : null;
        A && (A.get || A.set) ? Object.defineProperty(h, g, A) : h[g] = v[g];
      }
    return h.default = v, f && f.set(v, h), h;
  }
  function c() {
    return c = Object.assign || function(v) {
      for (var f = 1; f < arguments.length; f++) {
        var h = arguments[f];
        for (var p in h)
          Object.prototype.hasOwnProperty.call(h, p) && (v[p] = h[p]);
      }
      return v;
    }, c.apply(this, arguments);
  }
  function u(v, f) {
    if (!(v instanceof f))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(v, f) {
    for (var h = 0; h < f.length; h++) {
      var p = f[h];
      p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(v, p.key, p);
    }
  }
  function m(v, f, h) {
    return f && d(v.prototype, f), h && d(v, h), v;
  }
  function y(v, f) {
    if (typeof f != "function" && f !== null)
      throw new TypeError("Super expression must either be null or a function");
    v.prototype = Object.create(f && f.prototype, { constructor: { value: v, writable: !0, configurable: !0 } }), f && x(v, f);
  }
  function x(v, f) {
    return x = Object.setPrototypeOf || function(p, g) {
      return p.__proto__ = g, p;
    }, x(v, f);
  }
  function w(v) {
    var f = P();
    return function() {
      var p = k(v), g;
      if (f) {
        var A = k(this).constructor;
        g = Reflect.construct(p, arguments, A);
      } else
        g = p.apply(this, arguments);
      return _(this, g);
    };
  }
  function _(v, f) {
    return f && (t(f) === "object" || typeof f == "function") ? f : T(v);
  }
  function T(v) {
    if (v === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return v;
  }
  function P() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function k(v) {
    return k = Object.setPrototypeOf ? Object.getPrototypeOf : function(h) {
      return h.__proto__ || Object.getPrototypeOf(h);
    }, k(v);
  }
  function $(v, f, h) {
    return f in v ? Object.defineProperty(v, f, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : v[f] = h, v;
  }
  var S = 5e3, C = /* @__PURE__ */ function(v) {
    y(h, v);
    var f = w(h);
    function h() {
      var p;
      u(this, h);
      for (var g = arguments.length, A = new Array(g), D = 0; D < g; D++)
        A[D] = arguments[D];
      return p = f.call.apply(f, [this].concat(A)), $(T(p), "mounted", !1), $(T(p), "isReady", !1), $(T(p), "isPlaying", !1), $(T(p), "isLoading", !0), $(T(p), "loadOnReady", null), $(T(p), "startOnPlay", !0), $(T(p), "seekOnPlay", null), $(T(p), "onDurationCalled", !1), $(T(p), "handlePlayerMount", function(R) {
        if (p.player) {
          p.progress();
          return;
        }
        p.player = R, p.player.load(p.props.url), p.progress();
      }), $(T(p), "getInternalPlayer", function(R) {
        return p.player ? p.player[R] : null;
      }), $(T(p), "progress", function() {
        if (p.props.url && p.player && p.isReady) {
          var R = p.getCurrentTime() || 0, F = p.getSecondsLoaded(), U = p.getDuration();
          if (U) {
            var L = {
              playedSeconds: R,
              played: R / U
            };
            F !== null && (L.loadedSeconds = F, L.loaded = F / U), (L.playedSeconds !== p.prevPlayed || L.loadedSeconds !== p.prevLoaded) && p.props.onProgress(L), p.prevPlayed = L.playedSeconds, p.prevLoaded = L.loadedSeconds;
          }
        }
        p.progressTimeout = setTimeout(p.progress, p.props.progressFrequency || p.props.progressInterval);
      }), $(T(p), "handleReady", function() {
        if (p.mounted) {
          p.isReady = !0, p.isLoading = !1;
          var R = p.props, F = R.onReady, U = R.playing, L = R.volume, j = R.muted;
          F(), !j && L !== null && p.player.setVolume(L), p.loadOnReady ? (p.player.load(p.loadOnReady, !0), p.loadOnReady = null) : U && p.player.play(), p.handleDurationCheck();
        }
      }), $(T(p), "handlePlay", function() {
        p.isPlaying = !0, p.isLoading = !1;
        var R = p.props, F = R.onStart, U = R.onPlay, L = R.playbackRate;
        p.startOnPlay && (p.player.setPlaybackRate && L !== 1 && p.player.setPlaybackRate(L), F(), p.startOnPlay = !1), U(), p.seekOnPlay && (p.seekTo(p.seekOnPlay), p.seekOnPlay = null), p.handleDurationCheck();
      }), $(T(p), "handlePause", function(R) {
        p.isPlaying = !1, p.isLoading || p.props.onPause(R);
      }), $(T(p), "handleEnded", function() {
        var R = p.props, F = R.activePlayer, U = R.loop, L = R.onEnded;
        F.loopOnEnded && U && p.seekTo(0), U || (p.isPlaying = !1, L());
      }), $(T(p), "handleError", function() {
        var R;
        p.isLoading = !1, (R = p.props).onError.apply(R, arguments);
      }), $(T(p), "handleDurationCheck", function() {
        clearTimeout(p.durationCheckTimeout);
        var R = p.getDuration();
        R ? p.onDurationCalled || (p.props.onDuration(R), p.onDurationCalled = !0) : p.durationCheckTimeout = setTimeout(p.handleDurationCheck, 100);
      }), $(T(p), "handleLoaded", function() {
        p.isLoading = !1;
      }), p;
    }
    return m(h, [{
      key: "componentDidMount",
      value: function() {
        this.mounted = !0;
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        clearTimeout(this.progressTimeout), clearTimeout(this.durationCheckTimeout), this.isReady && this.props.stopOnUnmount && (this.player.stop(), this.player.disablePIP && this.player.disablePIP()), this.mounted = !1;
      }
    }, {
      key: "componentDidUpdate",
      value: function(g) {
        var A = this;
        if (this.player) {
          var D = this.props, R = D.url, F = D.playing, U = D.volume, L = D.muted, j = D.playbackRate, V = D.pip, E = D.loop, O = D.activePlayer, B = D.disableDeferredLoading;
          if (!(0, n.default)(g.url, R)) {
            if (this.isLoading && !O.forceLoad && !B && !(0, a.isMediaStream)(R)) {
              console.warn("ReactPlayer: the attempt to load ".concat(R, " is being deferred until the player has loaded")), this.loadOnReady = R;
              return;
            }
            this.isLoading = !0, this.startOnPlay = !0, this.onDurationCalled = !1, this.player.load(R, this.isReady);
          }
          !g.playing && F && !this.isPlaying && this.player.play(), g.playing && !F && this.isPlaying && this.player.pause(), !g.pip && V && this.player.enablePIP && this.player.enablePIP(), g.pip && !V && this.player.disablePIP && this.player.disablePIP(), g.volume !== U && U !== null && this.player.setVolume(U), g.muted !== L && (L ? this.player.mute() : (this.player.unmute(), U !== null && setTimeout(function() {
            return A.player.setVolume(U);
          }))), g.playbackRate !== j && this.player.setPlaybackRate && this.player.setPlaybackRate(j), g.loop !== E && this.player.setLoop && this.player.setLoop(E);
        }
      }
    }, {
      key: "getDuration",
      value: function() {
        return this.isReady ? this.player.getDuration() : null;
      }
    }, {
      key: "getCurrentTime",
      value: function() {
        return this.isReady ? this.player.getCurrentTime() : null;
      }
    }, {
      key: "getSecondsLoaded",
      value: function() {
        return this.isReady ? this.player.getSecondsLoaded() : null;
      }
    }, {
      key: "seekTo",
      value: function(g, A, D) {
        var R = this;
        if (!this.isReady) {
          g !== 0 && (this.seekOnPlay = g, setTimeout(function() {
            R.seekOnPlay = null;
          }, S));
          return;
        }
        var F = A ? A === "fraction" : g > 0 && g < 1;
        if (F) {
          var U = this.player.getDuration();
          if (!U) {
            console.warn("ReactPlayer: could not seek using fraction – duration not yet available");
            return;
          }
          this.player.seekTo(U * g, D);
          return;
        }
        this.player.seekTo(g, D);
      }
    }, {
      key: "render",
      value: function() {
        var g = this.props.activePlayer;
        return g ? /* @__PURE__ */ r.default.createElement(g, c({}, this.props, {
          onMount: this.handlePlayerMount,
          onReady: this.handleReady,
          onPlay: this.handlePlay,
          onPause: this.handlePause,
          onEnded: this.handleEnded,
          onLoaded: this.handleLoaded,
          onError: this.handleError
        })) : null;
      }
    }]), h;
  }(r.Component);
  e.default = C, $(C, "displayName", "Player"), $(C, "propTypes", o.propTypes), $(C, "defaultProps", o.defaultProps);
})(W0);
var Lc = {}, ay;
function TB() {
  return ay || (ay = 1, function(e) {
    function t(S) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(v) {
        return typeof v;
      } : t = function(v) {
        return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
      }, t(S);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = o(ke);
    function n() {
      if (typeof WeakMap != "function")
        return null;
      var S = /* @__PURE__ */ new WeakMap();
      return n = function() {
        return S;
      }, S;
    }
    function o(S) {
      if (S && S.__esModule)
        return S;
      if (S === null || t(S) !== "object" && typeof S != "function")
        return { default: S };
      var C = n();
      if (C && C.has(S))
        return C.get(S);
      var v = {}, f = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var h in S)
        if (Object.prototype.hasOwnProperty.call(S, h)) {
          var p = f ? Object.getOwnPropertyDescriptor(S, h) : null;
          p && (p.get || p.set) ? Object.defineProperty(v, h, p) : v[h] = S[h];
        }
      return v.default = S, C && C.set(S, v), v;
    }
    function a(S, C) {
      var v = Object.keys(S);
      if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(S);
        C && (f = f.filter(function(h) {
          return Object.getOwnPropertyDescriptor(S, h).enumerable;
        })), v.push.apply(v, f);
      }
      return v;
    }
    function i(S) {
      for (var C = 1; C < arguments.length; C++) {
        var v = arguments[C] != null ? arguments[C] : {};
        C % 2 ? a(Object(v), !0).forEach(function(f) {
          T(S, f, v[f]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(v)) : a(Object(v)).forEach(function(f) {
          Object.defineProperty(S, f, Object.getOwnPropertyDescriptor(v, f));
        });
      }
      return S;
    }
    function s(S, C) {
      if (!(S instanceof C))
        throw new TypeError("Cannot call a class as a function");
    }
    function l(S, C) {
      for (var v = 0; v < C.length; v++) {
        var f = C[v];
        f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(S, f.key, f);
      }
    }
    function c(S, C, v) {
      return C && l(S.prototype, C), v && l(S, v), S;
    }
    function u(S, C) {
      if (typeof C != "function" && C !== null)
        throw new TypeError("Super expression must either be null or a function");
      S.prototype = Object.create(C && C.prototype, { constructor: { value: S, writable: !0, configurable: !0 } }), C && d(S, C);
    }
    function d(S, C) {
      return d = Object.setPrototypeOf || function(f, h) {
        return f.__proto__ = h, f;
      }, d(S, C);
    }
    function m(S) {
      var C = w();
      return function() {
        var f = _(S), h;
        if (C) {
          var p = _(this).constructor;
          h = Reflect.construct(f, arguments, p);
        } else
          h = f.apply(this, arguments);
        return y(this, h);
      };
    }
    function y(S, C) {
      return C && (t(C) === "object" || typeof C == "function") ? C : x(S);
    }
    function x(S) {
      if (S === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return S;
    }
    function w() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function _(S) {
      return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(v) {
        return v.__proto__ || Object.getPrototypeOf(v);
      }, _(S);
    }
    function T(S, C, v) {
      return C in S ? Object.defineProperty(S, C, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : S[C] = v, S;
    }
    var P = "64px", k = {}, $ = /* @__PURE__ */ function(S) {
      u(v, S);
      var C = m(v);
      function v() {
        var f;
        s(this, v);
        for (var h = arguments.length, p = new Array(h), g = 0; g < h; g++)
          p[g] = arguments[g];
        return f = C.call.apply(C, [this].concat(p)), T(x(f), "mounted", !1), T(x(f), "state", {
          image: null
        }), T(x(f), "handleKeyPress", function(A) {
          (A.key === "Enter" || A.key === " ") && f.props.onClick();
        }), f;
      }
      return c(v, [{
        key: "componentDidMount",
        value: function() {
          this.mounted = !0, this.fetchImage(this.props);
        }
      }, {
        key: "componentDidUpdate",
        value: function(h) {
          var p = this.props, g = p.url, A = p.light;
          (h.url !== g || h.light !== A) && this.fetchImage(this.props);
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
        }
      }, {
        key: "fetchImage",
        value: function(h) {
          var p = this, g = h.url, A = h.light, D = h.oEmbedUrl;
          if (!/* @__PURE__ */ r.default.isValidElement(A)) {
            if (typeof A == "string") {
              this.setState({
                image: A
              });
              return;
            }
            if (k[g]) {
              this.setState({
                image: k[g]
              });
              return;
            }
            return this.setState({
              image: null
            }), window.fetch(D.replace("{url}", g)).then(function(R) {
              return R.json();
            }).then(function(R) {
              if (R.thumbnail_url && p.mounted) {
                var F = R.thumbnail_url.replace("height=100", "height=480").replace("-d_295x166", "-d_640");
                p.setState({
                  image: F
                }), k[g] = F;
              }
            });
          }
        }
      }, {
        key: "render",
        value: function() {
          var h = this.props, p = h.light, g = h.onClick, A = h.playIcon, D = h.previewTabIndex, R = this.state.image, F = /* @__PURE__ */ r.default.isValidElement(p), U = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }, L = {
            preview: i({
              width: "100%",
              height: "100%",
              backgroundImage: R && !F ? "url(".concat(R, ")") : void 0,
              backgroundSize: "cover",
              backgroundPosition: "center",
              cursor: "pointer"
            }, U),
            shadow: i({
              background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
              borderRadius: P,
              width: P,
              height: P,
              position: F ? "absolute" : void 0
            }, U),
            playIcon: {
              borderStyle: "solid",
              borderWidth: "16px 0 16px 26px",
              borderColor: "transparent transparent transparent white",
              marginLeft: "7px"
            }
          }, j = /* @__PURE__ */ r.default.createElement("div", {
            style: L.shadow,
            className: "react-player__shadow"
          }, /* @__PURE__ */ r.default.createElement("div", {
            style: L.playIcon,
            className: "react-player__play-icon"
          }));
          return /* @__PURE__ */ r.default.createElement("div", {
            style: L.preview,
            className: "react-player__preview",
            onClick: g,
            tabIndex: D,
            onKeyPress: this.handleKeyPress
          }, F ? p : null, A || j);
        }
      }]), v;
    }(r.Component);
    e.default = $;
  }(Lc)), Lc;
}
Object.defineProperty(hl, "__esModule", {
  value: !0
});
hl.createReactPlayer = void 0;
var Fn = H0(ke), CB = ml(E0), Fc = ml(PB), iy = ml(af), Pa = Jn, RB = Ne, AB = ml(W0);
function ml(e) {
  return e && e.__esModule ? e : { default: e };
}
function La(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? La = function(r) {
    return typeof r;
  } : La = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, La(e);
}
function sy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ly(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sy(Object(r), !0).forEach(function(n) {
      rt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function js() {
  return js = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, js.apply(this, arguments);
}
function Nc(e) {
  return $B(e) || IB(e) || MB(e) || DB();
}
function DB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MB(e, t) {
  if (e) {
    if (typeof e == "string")
      return ju(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ju(e, t);
  }
}
function IB(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function $B(e) {
  if (Array.isArray(e))
    return ju(e);
}
function ju(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function jB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function LB(e, t, r) {
  return t && cy(e.prototype, t), r && cy(e, r), e;
}
function FB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Lu(e, t);
}
function Lu(e, t) {
  return Lu = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, Lu(e, t);
}
function NB(e) {
  var t = VB();
  return function() {
    var n = Ls(e), o;
    if (t) {
      var a = Ls(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else
      o = n.apply(this, arguments);
    return BB(this, o);
  };
}
function BB(e, t) {
  return t && (La(t) === "object" || typeof t == "function") ? t : Dt(e);
}
function Dt(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function VB() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ls(e) {
  return Ls = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ls(e);
}
function rt(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function U0() {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap();
  return U0 = function() {
    return e;
  }, e;
}
function H0(e) {
  if (e && e.__esModule)
    return e;
  if (e === null || La(e) !== "object" && typeof e != "function")
    return { default: e };
  var t = U0();
  if (t && t.has(e))
    return t.get(e);
  var r = {}, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
      a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o];
    }
  return r.default = e, t && t.set(e, r), r;
}
var zB = /* @__PURE__ */ (0, Fn.lazy)(function() {
  return Promise.resolve().then(function() {
    return H0(TB());
  });
}), WB = typeof window < "u" && window.document, UB = typeof Nn < "u" && Nn.window && Nn.window.document, HB = Object.keys(Pa.propTypes), qB = WB || UB ? Fn.Suspense : function() {
  return null;
}, ma = [], YB = function(t, r) {
  var n, o;
  return o = n = /* @__PURE__ */ function(a) {
    FB(s, a);
    var i = NB(s);
    function s() {
      var l;
      jB(this, s);
      for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
        u[d] = arguments[d];
      return l = i.call.apply(i, [this].concat(u)), rt(Dt(l), "state", {
        showPreview: !!l.props.light
      }), rt(Dt(l), "references", {
        wrapper: function(y) {
          l.wrapper = y;
        },
        player: function(y) {
          l.player = y;
        }
      }), rt(Dt(l), "handleClickPreview", function(m) {
        l.setState({
          showPreview: !1
        }), l.props.onClickPreview(m);
      }), rt(Dt(l), "showPreview", function() {
        l.setState({
          showPreview: !0
        });
      }), rt(Dt(l), "getDuration", function() {
        return l.player ? l.player.getDuration() : null;
      }), rt(Dt(l), "getCurrentTime", function() {
        return l.player ? l.player.getCurrentTime() : null;
      }), rt(Dt(l), "getSecondsLoaded", function() {
        return l.player ? l.player.getSecondsLoaded() : null;
      }), rt(Dt(l), "getInternalPlayer", function() {
        var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "player";
        return l.player ? l.player.getInternalPlayer(m) : null;
      }), rt(Dt(l), "seekTo", function(m, y, x) {
        if (!l.player)
          return null;
        l.player.seekTo(m, y, x);
      }), rt(Dt(l), "handleReady", function() {
        l.props.onReady(Dt(l));
      }), rt(Dt(l), "getActivePlayer", (0, Fc.default)(function(m) {
        for (var y = 0, x = [].concat(ma, Nc(t)); y < x.length; y++) {
          var w = x[y];
          if (w.canPlay(m))
            return w;
        }
        return r || null;
      })), rt(Dt(l), "getConfig", (0, Fc.default)(function(m, y) {
        var x = l.props.config;
        return CB.default.all([Pa.defaultProps.config, Pa.defaultProps.config[y] || {}, x, x[y] || {}]);
      })), rt(Dt(l), "getAttributes", (0, Fc.default)(function(m) {
        return (0, RB.omit)(l.props, HB);
      })), rt(Dt(l), "renderActivePlayer", function(m) {
        if (!m)
          return null;
        var y = l.getActivePlayer(m);
        if (!y)
          return null;
        var x = l.getConfig(m, y.key);
        return /* @__PURE__ */ Fn.default.createElement(AB.default, js({}, l.props, {
          key: y.key,
          ref: l.references.player,
          config: x,
          activePlayer: y.lazyPlayer || y,
          onReady: l.handleReady
        }));
      }), l;
    }
    return LB(s, [{
      key: "shouldComponentUpdate",
      value: function(c, u) {
        return !(0, iy.default)(this.props, c) || !(0, iy.default)(this.state, u);
      }
    }, {
      key: "componentDidUpdate",
      value: function(c) {
        var u = this.props.light;
        !c.light && u && this.setState({
          showPreview: !0
        }), c.light && !u && this.setState({
          showPreview: !1
        });
      }
    }, {
      key: "renderPreview",
      value: function(c) {
        if (!c)
          return null;
        var u = this.props, d = u.light, m = u.playIcon, y = u.previewTabIndex, x = u.oEmbedUrl;
        return /* @__PURE__ */ Fn.default.createElement(zB, {
          url: c,
          light: d,
          playIcon: m,
          previewTabIndex: y,
          oEmbedUrl: x,
          onClick: this.handleClickPreview
        });
      }
    }, {
      key: "render",
      value: function() {
        var c = this.props, u = c.url, d = c.style, m = c.width, y = c.height, x = c.fallback, w = c.wrapper, _ = this.state.showPreview, T = this.getAttributes(u), P = typeof w == "string" ? this.references.wrapper : void 0;
        return /* @__PURE__ */ Fn.default.createElement(w, js({
          ref: P,
          style: ly(ly({}, d), {}, {
            width: m,
            height: y
          })
        }, T), /* @__PURE__ */ Fn.default.createElement(qB, {
          fallback: x
        }, _ ? this.renderPreview(u) : this.renderActivePlayer(u)));
      }
    }]), s;
  }(Fn.Component), rt(n, "displayName", "ReactPlayer"), rt(n, "propTypes", Pa.propTypes), rt(n, "defaultProps", Pa.defaultProps), rt(n, "addCustomPlayer", function(a) {
    ma.push(a);
  }), rt(n, "removeCustomPlayers", function() {
    ma.length = 0;
  }), rt(n, "canPlay", function(a) {
    for (var i = 0, s = [].concat(ma, Nc(t)); i < s.length; i++) {
      var l = s[i];
      if (l.canPlay(a))
        return !0;
    }
    return !1;
  }), rt(n, "canEnablePIP", function(a) {
    for (var i = 0, s = [].concat(ma, Nc(t)); i < s.length; i++) {
      var l = s[i];
      if (l.canEnablePIP && l.canEnablePIP(a))
        return !0;
    }
    return !1;
  }), o;
};
hl.createReactPlayer = YB;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var t = n(P0), r = hl;
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = t.default[t.default.length - 1], a = (0, r.createReactPlayer)(t.default, o);
  e.default = a;
})(_0);
const uy = /* @__PURE__ */ Bs(_0), ni = "http://localhost:3001";
(function() {
  ((e) => {
    try {
      if (typeof window > "u")
        return;
      var t = document.createElement("style");
      t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
    } catch (r) {
      console.error("vite-plugin-css-injected-by-js", r);
    }
  })(".audio-recorder{background-color:#ebebeb;box-shadow:0 2px 5px #bebebe;border-radius:20px;box-sizing:border-box;color:#000;width:40px;display:flex;align-items:center;transition:all .2s ease-in;-webkit-tap-highlight-color:transparent}.audio-recorder-mic{box-sizing:content-box;cursor:pointer;height:16px;color:#000;padding:12px}.audio-recorder .audio-recorder-mic{border-radius:20px}.audio-recorder.recording .audio-recorder-mic{border-radius:0}.audio-recorder-timer,.audio-recorder-status{color:#000;margin-left:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;font-weight:400;line-height:1}.audio-recorder-status{margin-left:15px;display:flex;align-items:baseline;flex-grow:1;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite}.audio-recorder-status-dot{background-color:#d00;border-radius:50%;height:10px;width:9px;margin-right:5px}.audio-recorder-options{box-sizing:content-box;height:16px;cursor:pointer;padding:12px 6px 12px 12px}.audio-recorder-options~.audio-recorder-options{padding:12px 12px 12px 6px;border-radius:0 5px 5px 0}.recording{border-radius:12px;width:300px;transition:all .2s ease-out}.display-none{display:none}.audio-recorder-visualizer{margin-left:15px;flex-grow:1;align-self:center;display:flex;align-items:center}@keyframes fading-ar-status{0%{opacity:1}50%{opacity:0}to{opacity:1}}");
})();
var ya = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fy;
function KB() {
  if (fy)
    return ya;
  fy = 1;
  var e = ke, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, c) {
    var u, d = {}, m = null, y = null;
    c !== void 0 && (m = "" + c), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (y = l.ref);
    for (u in l)
      n.call(l, u) && !a.hasOwnProperty(u) && (d[u] = l[u]);
    if (s && s.defaultProps)
      for (u in l = s.defaultProps, l)
        d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: s, key: m, ref: y, props: d, _owner: o.current };
  }
  return ya.Fragment = r, ya.jsx = i, ya.jsxs = i, ya;
}
var Ui = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dy;
function GB() {
  return dy || (dy = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ke, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), x = Symbol.iterator, w = "@@iterator";
    function _(b) {
      if (b === null || typeof b != "object")
        return null;
      var N = x && b[x] || b[w];
      return typeof N == "function" ? N : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(b) {
      {
        for (var N = arguments.length, H = new Array(N > 1 ? N - 1 : 0), ee = 1; ee < N; ee++)
          H[ee - 1] = arguments[ee];
        k("error", b, H);
      }
    }
    function k(b, N, H) {
      {
        var ee = T.ReactDebugCurrentFrame, ce = ee.getStackAddendum();
        ce !== "" && (N += "%s", H = H.concat([ce]));
        var de = H.map(function(se) {
          return String(se);
        });
        de.unshift("Warning: " + N), Function.prototype.apply.call(console[b], console, de);
      }
    }
    var $ = !1, S = !1, C = !1, v = !1, f = !1, h;
    h = Symbol.for("react.module.reference");
    function p(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === n || b === a || f || b === o || b === c || b === u || v || b === y || $ || S || C || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === d || b.$$typeof === i || b.$$typeof === s || b.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === h || b.getModuleId !== void 0));
    }
    function g(b, N, H) {
      var ee = b.displayName;
      if (ee)
        return ee;
      var ce = N.displayName || N.name || "";
      return ce !== "" ? H + "(" + ce + ")" : H;
    }
    function A(b) {
      return b.displayName || "Context";
    }
    function D(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case s:
            var N = b;
            return A(N) + ".Consumer";
          case i:
            var H = b;
            return A(H._context) + ".Provider";
          case l:
            return g(b, b.render, "ForwardRef");
          case d:
            var ee = b.displayName || null;
            return ee !== null ? ee : D(b.type) || "Memo";
          case m: {
            var ce = b, de = ce._payload, se = ce._init;
            try {
              return D(se(de));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, F = 0, U, L, j, V, E, O, B;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function Y() {
      {
        if (F === 0) {
          U = console.log, L = console.info, j = console.warn, V = console.error, E = console.group, O = console.groupCollapsed, B = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: K,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        F++;
      }
    }
    function Z() {
      {
        if (F--, F === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, b, {
              value: U
            }),
            info: R({}, b, {
              value: L
            }),
            warn: R({}, b, {
              value: j
            }),
            error: R({}, b, {
              value: V
            }),
            group: R({}, b, {
              value: E
            }),
            groupCollapsed: R({}, b, {
              value: O
            }),
            groupEnd: R({}, b, {
              value: B
            })
          });
        }
        F < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = T.ReactCurrentDispatcher, re;
    function J(b, N, H) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (ce) {
            var ee = ce.stack.trim().match(/\n( *(at )?)/);
            re = ee && ee[1] || "";
          }
        return `
` + re + b;
      }
    }
    var oe = !1, ae;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new ne();
    }
    function G(b, N) {
      if (!b || oe)
        return "";
      {
        var H = ae.get(b);
        if (H !== void 0)
          return H;
      }
      var ee;
      oe = !0;
      var ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var de;
      de = Q.current, Q.current = null, Y();
      try {
        if (N) {
          var se = function() {
            throw Error();
          };
          if (Object.defineProperty(se.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(se, []);
            } catch (Ge) {
              ee = Ge;
            }
            Reflect.construct(b, [], se);
          } else {
            try {
              se.call();
            } catch (Ge) {
              ee = Ge;
            }
            b.call(se.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ge) {
            ee = Ge;
          }
          b();
        }
      } catch (Ge) {
        if (Ge && ee && typeof Ge.stack == "string") {
          for (var ie = Ge.stack.split(`
`), Ee = ee.stack.split(`
`), be = ie.length - 1, Se = Ee.length - 1; be >= 1 && Se >= 0 && ie[be] !== Ee[Se]; )
            Se--;
          for (; be >= 1 && Se >= 0; be--, Se--)
            if (ie[be] !== Ee[Se]) {
              if (be !== 1 || Se !== 1)
                do
                  if (be--, Se--, Se < 0 || ie[be] !== Ee[Se]) {
                    var Ve = `
` + ie[be].replace(" at new ", " at ");
                    return b.displayName && Ve.includes("<anonymous>") && (Ve = Ve.replace("<anonymous>", b.displayName)), typeof b == "function" && ae.set(b, Ve), Ve;
                  }
                while (be >= 1 && Se >= 0);
              break;
            }
        }
      } finally {
        oe = !1, Q.current = de, Z(), Error.prepareStackTrace = ce;
      }
      var xt = b ? b.displayName || b.name : "", Rn = xt ? J(xt) : "";
      return typeof b == "function" && ae.set(b, Rn), Rn;
    }
    function ge(b, N, H) {
      return G(b, !1);
    }
    function et(b) {
      var N = b.prototype;
      return !!(N && N.isReactComponent);
    }
    function Be(b, N, H) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return G(b, et(b));
      if (typeof b == "string")
        return J(b);
      switch (b) {
        case c:
          return J("Suspense");
        case u:
          return J("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case l:
            return ge(b.render);
          case d:
            return Be(b.type, N, H);
          case m: {
            var ee = b, ce = ee._payload, de = ee._init;
            try {
              return Be(de(ce), N, H);
            } catch {
            }
          }
        }
      return "";
    }
    var Je = Object.prototype.hasOwnProperty, ht = {}, Ke = T.ReactDebugCurrentFrame;
    function bt(b) {
      if (b) {
        var N = b._owner, H = Be(b.type, b._source, N ? N.type : null);
        Ke.setExtraStackFrame(H);
      } else
        Ke.setExtraStackFrame(null);
    }
    function lt(b, N, H, ee, ce) {
      {
        var de = Function.call.bind(Je);
        for (var se in b)
          if (de(b, se)) {
            var ie = void 0;
            try {
              if (typeof b[se] != "function") {
                var Ee = Error((ee || "React class") + ": " + H + " type `" + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ee.name = "Invariant Violation", Ee;
              }
              ie = b[se](N, se, ee, H, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (be) {
              ie = be;
            }
            ie && !(ie instanceof Error) && (bt(ce), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ee || "React class", H, se, typeof ie), bt(null)), ie instanceof Error && !(ie.message in ht) && (ht[ie.message] = !0, bt(ce), P("Failed %s type: %s", H, ie.message), bt(null));
          }
      }
    }
    var Tt = Array.isArray;
    function mt(b) {
      return Tt(b);
    }
    function at(b) {
      {
        var N = typeof Symbol == "function" && Symbol.toStringTag, H = N && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return H;
      }
    }
    function Vt(b) {
      try {
        return Mt(b), !1;
      } catch {
        return !0;
      }
    }
    function Mt(b) {
      return "" + b;
    }
    function nr(b) {
      if (Vt(b))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", at(b)), Mt(b);
    }
    var St = T.ReactCurrentOwner, Kt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, vr, xr, or;
    or = {};
    function sn(b) {
      if (Je.call(b, "ref")) {
        var N = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function fe(b) {
      if (Je.call(b, "key")) {
        var N = Object.getOwnPropertyDescriptor(b, "key").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function ct(b, N) {
      if (typeof b.ref == "string" && St.current && N && St.current.stateNode !== N) {
        var H = D(St.current.type);
        or[H] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(St.current.type), b.ref), or[H] = !0);
      }
    }
    function zt(b, N) {
      {
        var H = function() {
          vr || (vr = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        H.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: H,
          configurable: !0
        });
      }
    }
    function tt(b, N) {
      {
        var H = function() {
          xr || (xr = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        H.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: H,
          configurable: !0
        });
      }
    }
    var It = function(b, N, H, ee, ce, de, se) {
      var ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: b,
        key: N,
        ref: H,
        props: se,
        // Record the component responsible for creating this element.
        _owner: de
      };
      return ie._store = {}, Object.defineProperty(ie._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ie, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.defineProperty(ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.freeze && (Object.freeze(ie.props), Object.freeze(ie)), ie;
    };
    function ln(b, N, H, ee, ce) {
      {
        var de, se = {}, ie = null, Ee = null;
        H !== void 0 && (nr(H), ie = "" + H), fe(N) && (nr(N.key), ie = "" + N.key), sn(N) && (Ee = N.ref, ct(N, ce));
        for (de in N)
          Je.call(N, de) && !Kt.hasOwnProperty(de) && (se[de] = N[de]);
        if (b && b.defaultProps) {
          var be = b.defaultProps;
          for (de in be)
            se[de] === void 0 && (se[de] = be[de]);
        }
        if (ie || Ee) {
          var Se = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          ie && zt(se, Se), Ee && tt(se, Se);
        }
        return It(b, ie, Ee, ce, ee, St.current, se);
      }
    }
    var Gt = T.ReactCurrentOwner, _r = T.ReactDebugCurrentFrame;
    function yt(b) {
      if (b) {
        var N = b._owner, H = Be(b.type, b._source, N ? N.type : null);
        _r.setExtraStackFrame(H);
      } else
        _r.setExtraStackFrame(null);
    }
    var Ct;
    Ct = !1;
    function ar(b) {
      return typeof b == "object" && b !== null && b.$$typeof === t;
    }
    function Rt() {
      {
        if (Gt.current) {
          var b = D(Gt.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function cn(b) {
      {
        if (b !== void 0) {
          var N = b.fileName.replace(/^.*[\\\/]/, ""), H = b.lineNumber;
          return `

Check your code at ` + N + ":" + H + ".";
        }
        return "";
      }
    }
    var En = {};
    function Zo(b) {
      {
        var N = Rt();
        if (!N) {
          var H = typeof b == "string" ? b : b.displayName || b.name;
          H && (N = `

Check the top-level render call using <` + H + ">.");
        }
        return N;
      }
    }
    function kn(b, N) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var H = Zo(N);
        if (En[H])
          return;
        En[H] = !0;
        var ee = "";
        b && b._owner && b._owner !== Gt.current && (ee = " It was passed a child from " + D(b._owner.type) + "."), yt(b), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', H, ee), yt(null);
      }
    }
    function Tn(b, N) {
      {
        if (typeof b != "object")
          return;
        if (mt(b))
          for (var H = 0; H < b.length; H++) {
            var ee = b[H];
            ar(ee) && kn(ee, N);
          }
        else if (ar(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var ce = _(b);
          if (typeof ce == "function" && ce !== b.entries)
            for (var de = ce.call(b), se; !(se = de.next()).done; )
              ar(se.value) && kn(se.value, N);
        }
      }
    }
    function Xt(b) {
      {
        var N = b.type;
        if (N == null || typeof N == "string")
          return;
        var H;
        if (typeof N == "function")
          H = N.propTypes;
        else if (typeof N == "object" && (N.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        N.$$typeof === d))
          H = N.propTypes;
        else
          return;
        if (H) {
          var ee = D(N);
          lt(H, b.props, "prop", ee, b);
        } else if (N.PropTypes !== void 0 && !Ct) {
          Ct = !0;
          var ce = D(N);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
        }
        typeof N.getDefaultProps == "function" && !N.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jo(b) {
      {
        for (var N = Object.keys(b.props), H = 0; H < N.length; H++) {
          var ee = N[H];
          if (ee !== "children" && ee !== "key") {
            yt(b), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ee), yt(null);
            break;
          }
        }
        b.ref !== null && (yt(b), P("Invalid attribute `ref` supplied to `React.Fragment`."), yt(null));
      }
    }
    function Cn(b, N, H, ee, ce, de) {
      {
        var se = p(b);
        if (!se) {
          var ie = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ee = cn(ce);
          Ee ? ie += Ee : ie += Rt();
          var be;
          b === null ? be = "null" : mt(b) ? be = "array" : b !== void 0 && b.$$typeof === t ? (be = "<" + (D(b.type) || "Unknown") + " />", ie = " Did you accidentally export a JSX literal instead of a component?") : be = typeof b, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", be, ie);
        }
        var Se = ln(b, N, H, ce, de);
        if (Se == null)
          return Se;
        if (se) {
          var Ve = N.children;
          if (Ve !== void 0)
            if (ee)
              if (mt(Ve)) {
                for (var xt = 0; xt < Ve.length; xt++)
                  Tn(Ve[xt], b);
                Object.freeze && Object.freeze(Ve);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Tn(Ve, b);
        }
        return b === n ? Jo(Se) : Xt(Se), Se;
      }
    }
    function Qo(b, N, H) {
      return Cn(b, N, H, !0);
    }
    function ea(b, N, H) {
      return Cn(b, N, H, !1);
    }
    var ta = ea, Pr = Qo;
    Ui.Fragment = n, Ui.jsx = ta, Ui.jsxs = Pr;
  }()), Ui;
}
process.env.NODE_ENV === "production" ? KB() : GB();
const XB = (e, t, r) => {
  const [n, o] = ue(!1), [a, i] = ue(!1), [s, l] = ue(0), [c, u] = ue(), [d, m] = ue(), [y, x] = ue(), w = pe(() => {
    const $ = setInterval(() => {
      l((S) => S + 1);
    }, 1e3);
    m($);
  }, [l, m]), _ = pe(() => {
    d != null && clearInterval(d), m(void 0);
  }, [d, m]), T = pe(() => {
    d == null && navigator.mediaDevices.getUserMedia({ audio: e ?? !0 }).then(($) => {
      o(!0);
      const S = new MediaRecorder(
        $,
        r
      );
      u(S), S.start(), w(), S.addEventListener("dataavailable", (C) => {
        x(C.data), S.stream.getTracks().forEach((v) => v.stop()), u(void 0);
      });
    }).catch(($) => {
      console.log($.name, $.message, $.cause), t == null || t($);
    });
  }, [
    d,
    o,
    u,
    w,
    x,
    t,
    r
  ]), P = pe(() => {
    c == null || c.stop(), _(), l(0), o(!1), i(!1);
  }, [
    c,
    l,
    o,
    i,
    _
  ]), k = pe(() => {
    a ? (i(!1), c == null || c.resume(), w()) : (i(!0), _(), c == null || c.pause());
  }, [c, i, w, _]);
  return {
    startRecording: T,
    stopRecording: P,
    togglePauseResume: k,
    recordingBlob: y,
    isRecording: n,
    isPaused: a,
    recordingTime: s,
    mediaRecorder: c
  };
};
ke.lazy(async () => {
  const { LiveAudioVisualizer: e } = await import("./react-audio-visualize.es-69216c73--vAUlXl5.js");
  return { default: e };
});
let Hi;
const ZB = new Uint8Array(16);
function JB() {
  if (!Hi && (Hi = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Hi))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Hi(ZB);
}
const Ot = [];
for (let e = 0; e < 256; ++e)
  Ot.push((e + 256).toString(16).slice(1));
function QB(e, t = 0) {
  return Ot[e[t + 0]] + Ot[e[t + 1]] + Ot[e[t + 2]] + Ot[e[t + 3]] + "-" + Ot[e[t + 4]] + Ot[e[t + 5]] + "-" + Ot[e[t + 6]] + Ot[e[t + 7]] + "-" + Ot[e[t + 8]] + Ot[e[t + 9]] + "-" + Ot[e[t + 10]] + Ot[e[t + 11]] + Ot[e[t + 12]] + Ot[e[t + 13]] + Ot[e[t + 14]] + Ot[e[t + 15]];
}
const e5 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), py = {
  randomUUID: e5
};
function t5(e, t, r) {
  if (py.randomUUID && !t && !e)
    return py.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || JB)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    r = r || 0;
    for (let o = 0; o < 16; ++o)
      t[r + o] = n[o];
    return t;
  }
  return QB(n);
}
const r5 = (e) => {
  const {
    interviewKey: t,
    updateIsListening: r,
    questionId: n,
    goToNextQuestion: o,
    setPlaying: a,
    setPlaysinline: i
  } = e, s = Af(), [l, c] = ue("inactive"), [u, d] = ue(!1), [m, y] = ue(!1);
  Me(() => {
    c("inactive");
  }, [n]);
  const { startRecording: x, stopRecording: w, recordingBlob: _, isRecording: T } = XB(), P = async (S) => {
    y(!0);
    const v = `${t5()}_${t}.mp3`, f = new File([S], v, { type: "audio/mpeg" }), h = new FormData();
    h.append("question_id", n.toString()), h.append("interview_key", t), h.append("recording", f);
    const { data: p } = await ti.post(`${ni}/user/answer/save`, h, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    y(!1), p.success ? (s({
      title: p.message,
      status: "success",
      duration: 3e3,
      position: "top"
    }), d(!1), o()) : s({
      title: p.message,
      status: "error",
      duration: 3e3,
      position: "top"
    });
  }, k = async () => {
    try {
      r(!0), x(), c("recording"), d(!1), a(!0), i(!0);
    } catch (S) {
      console.error("Error accessing audio:", S);
    }
  }, $ = async () => {
    s({
      title: "If you are happy with your answer, click the checkmark to submit. Otherwise, click the microphone to re-record.",
      status: "info",
      duration: 3e3,
      position: "top"
    }), w(), d(!0), a(!1), i(!1), c("inactive");
  };
  return /* @__PURE__ */ I.jsxs(Mr, { direction: "row", children: [
    l !== "recording" && !T ? /* @__PURE__ */ I.jsx(
      Nr,
      {
        label: u ? "Re-record your answer" : "Record your answer",
        placement: "top",
        hasArrow: !0,
        children: /* @__PURE__ */ I.jsx("div", { children: /* @__PURE__ */ I.jsx(
          fr,
          {
            onClick: k,
            style: {
              borderRadius: "50%",
              border: "1px",
              width: "75px",
              height: "75px",
              // color: enabledRecording ? '#ffffff' : 'gray',
              // borderColor: '#ffffff',
              boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
            },
            isLoading: m,
            children: /* @__PURE__ */ I.jsx(bn, { fontSize: "1.2rem", children: /* @__PURE__ */ I.jsx(
              Tm,
              {
                style: {
                  width: "2em",
                  height: "2em",
                  fontSize: "large"
                }
              }
            ) })
          }
        ) })
      }
    ) : null,
    l === "recording" && T ? /* @__PURE__ */ I.jsx(Nr, { label: "Stop Recording", placement: "top", hasArrow: !0, children: /* @__PURE__ */ I.jsx(
      fr,
      {
        onClick: $,
        style: {
          borderRadius: "50%",
          border: "1px",
          width: "75px",
          height: "75px",
          backgroundColor: "red",
          // color: enabledRecording ? '#ffffff' : 'gray',
          // borderColor: '#ffffff',
          boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
        },
        isLoading: m,
        children: /* @__PURE__ */ I.jsx(bn, { fontSize: "1.2rem", children: /* @__PURE__ */ I.jsx(
          Tm,
          {
            style: {
              width: "2em",
              height: "2em",
              fontSize: "large"
            }
          }
        ) })
      }
    ) }) : null,
    u ? /* @__PURE__ */ I.jsx(Nr, { label: "Submit your answer", placement: "top", hasArrow: !0, children: /* @__PURE__ */ I.jsx(
      fr,
      {
        onClick: () => P(_),
        style: {
          borderRadius: "50%",
          border: "1px",
          width: "75px",
          height: "75px",
          boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
          // backgroundColor: 'green',
          // color: enabledRecording ? '#ffffff' : 'gray',
          // borderColor: '#ffffff',
        },
        isLoading: m,
        children: /* @__PURE__ */ I.jsx(bn, { fontSize: "1.2rem", children: /* @__PURE__ */ I.jsx(
          WL,
          {
            style: {
              width: "2em",
              height: "2em",
              fontSize: "large"
            }
          }
        ) })
      }
    ) }) : null
  ] });
}, n5 = ({
  smashUserId: e,
  botPreference: t,
  setKey: r,
  toggleInterview: n
}) => {
  const o = De(null), a = De(null), i = Af(), [s, l] = ue(!1), [c, u] = ue(""), { isOpen: d, onClose: m } = Tb(), [y, x] = ue(0), [w, _] = ue(!1), [T, P] = ue(!1), [, k] = ue(!1), [$, S] = ue(!1), [C, v] = ue(!1), [f, h] = ue(!1), [p, g] = ue(""), [A, D] = ue([]), [R, F] = ue(""), [U, L] = ue(""), [j, V] = ue({
    start_time: 0,
    end_time: 0
  }), [E, O] = ue([]), [B, K] = ue([]), [Y, Z] = ue([]), [Q, re] = ue(!1), [J, oe] = ue(!1), [ae, ne] = ue(!1), [G, ge] = ue(!1), [et, Be] = ue(!0), [Je, ht] = ue(!0), [Ke, bt] = ue(!1);
  Me(() => {
    w && (S(!0), v(!0), h(!0));
  }, [w]), Me(() => {
    o && o.current && (o.current.seekTo(E[y].start_time), h(!1));
  }, [y]);
  const lt = (fe) => {
    const ct = fe.split("_");
    let zt = "";
    for (let tt = 0; tt < ct.length; tt++)
      zt += ct[tt][0].toUpperCase() + ct[tt].slice(1) + " ";
    return zt;
  }, Tt = async () => {
    bt(!0), S(!1), v(!1);
    const { data: fe } = await ti.post(`${ni}/user/answer/skip`, {
      interview_key: c,
      question_id: A[y].question_id
    });
    bt(!1), fe.success ? (i({
      title: `Question ${y + 1} skipped`,
      status: "info",
      duration: 2e3,
      position: "top"
    }), _(!1), h(!1), ge(!0), Mt()) : i({
      title: `Error skipping question ${y + 1}`,
      status: "error",
      duration: 2e3,
      position: "top"
    });
  }, mt = (fe) => {
    _(fe), fe ? (S(!1), v(!1)) : at();
  }, at = () => {
    Be(!0), ht(!0), S(!1), v(!1), _(!1), h(!1), ge(!1), ne(!0), Vt();
  }, Vt = () => {
    console.log(
      "inside positive response timestamps",
      B[y].start_time
    ), o.current && (console.log("inside reacplayeref"), o.current.seekTo(B[y].start_time, "seconds"));
  }, Mt = () => {
    o.current && (console.log("inside reacplayeref in skip response"), o.current.seekTo(Y[y].start_time, "seconds"));
  }, nr = async () => {
    var zt, tt, It, ln, Gt, _r, yt, Ct, ar, Rt, cn;
    l(!0);
    const { data: fe } = await ti.post(`${ni}/user/login`, {
      smash_user_id: e,
      bot_preference: t
    }), ct = (zt = fe == null ? void 0 : fe.data) == null ? void 0 : zt.questionsByCategory;
    fe.success && (ct ? (D(ct == null ? void 0 : ct.questions), g(ct == null ? void 0 : ct.category)) : (D((tt = fe == null ? void 0 : fe.data) == null ? void 0 : tt.questions), g((It = fe == null ? void 0 : fe.data) == null ? void 0 : It.category)), u((ln = fe == null ? void 0 : fe.data) == null ? void 0 : ln.interview_key), r((Gt = fe == null ? void 0 : fe.data) == null ? void 0 : Gt.interview_key), x(0), V((_r = fe == null ? void 0 : fe.data) == null ? void 0 : _r.listening_timestamps), O((yt = fe == null ? void 0 : fe.data) == null ? void 0 : yt.questions_timestamps), K((Ct = fe == null ? void 0 : fe.data) == null ? void 0 : Ct.response_timestamps), Z((ar = fe == null ? void 0 : fe.data) == null ? void 0 : ar.skip_timestamps), L((Rt = fe == null ? void 0 : fe.data) == null ? void 0 : Rt.desktop_video_link), F((cn = fe == null ? void 0 : fe.data) == null ? void 0 : cn.desktop_intro_video_link), l(!1));
  }, St = () => {
    P(!0), k(!0);
  }, Kt = () => {
    var fe;
    (fe = o == null ? void 0 : o.current) == null || fe.seekTo(j == null ? void 0 : j.start_time, "seconds");
  }, vr = () => {
    console.log("handlepostquestionaction"), !w && y <= E.length - 1 && (_(!0), Kt());
  }, xr = ({ playedSeconds: fe }) => {
    var ct, zt, tt;
    Q || ((zt = o == null ? void 0 : o.current) == null || zt.seekTo((ct = E[y]) == null ? void 0 : ct.start_time), re(!0)), console.log("currentQuestionIndex", y), console.log("questionTimestamps.length", E.length), ae && fe >= B[y].end_time && y <= E.length && (y === E.length - 1 ? (console.log("inside "), oe(!0), n()) : (x((It) => It + 1), ne(!1), ge(!1))), G && fe >= Y[y].end_time && y <= E.length && (y === E.length - 1 ? (oe(!0), n()) : (console.log("inside is skip"), v(!1), S(!1), x((It) => It + 1), ge(!1), _(!1))), !w && !ae && !G && y !== E.length - 1 && fe >= E[y].end_time && (h(!0), S(!0), v(!0), vr()), y >= E.length && fe >= E[y].start_time && (_(!1), h(!1), S(!1), v(!1)), y === E.length - 1 && fe >= (E == null ? void 0 : E[y].end_time) && (i({
      title: "Congratulations!!🥳🎉",
      description: "You have completed the interview",
      status: "success",
      duration: 2e3,
      position: "top"
    }), oe(!0), _(!1), h(!1), S(!1), v(!1), n()), w && fe >= j.end_time && ((tt = o == null ? void 0 : o.current) == null || tt.seekTo(j.start_time));
  }, or = () => {
    y <= E.length - 1 ? vr() : (oe(!0), n());
  }, sn = () => {
    o.current && o.current.seekTo(E[y].start_time), _(!1), h(!1), v(!1), S(!1);
  };
  return Me(() => {
    c || nr();
  }, [c]), console.log("inside data", A), /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
    s && /* @__PURE__ */ I.jsx(mi, { size: "xl" }),
    !s && /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
      /* @__PURE__ */ I.jsxs(Zf, { isOpen: d, onClose: m, isCentered: !0, children: [
        /* @__PURE__ */ I.jsx(td, {}),
        /* @__PURE__ */ I.jsxs(Jf, { children: [
          /* @__PURE__ */ I.jsx(ed, { children: "Interview Completed" }),
          /* @__PURE__ */ I.jsx(Xb, {}),
          /* @__PURE__ */ I.jsx(rd, { children: /* @__PURE__ */ I.jsx(bn, { children: "Thank you for completing the interview." }) }),
          /* @__PURE__ */ I.jsx(Qf, { children: /* @__PURE__ */ I.jsx(fr, { colorScheme: "facebook", mr: 3, onClick: m, children: "Close" }) })
        ] })
      ] }),
      /* @__PURE__ */ I.jsxs(Mr, { justifyContent: "center", alignItems: "center", children: [
        p && /* @__PURE__ */ I.jsx(bn, { fontSize: "1.3rem", children: lt(p) }),
        !s && !!R && !T && /* @__PURE__ */ I.jsx(
          uy,
          {
            ref: a,
            playing: !0,
            playsinline: !0,
            onEnded: St,
            width: "100%",
            height: "90vh",
            style: {
              overflow: "hidden",
              borderRadius: "30px",
              boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
            },
            controls: !0,
            url: R,
            pip: !1,
            onContextMenu: (fe) => fe.preventDefault(),
            config: {
              file: {
                attributes: {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onContextMenu: (fe) => fe.preventDefault()
                }
              }
            }
          }
        ),
        !s && T && A && A.length > 0 && /* @__PURE__ */ I.jsxs(Mr, { justifyContent: "center", alignItems: "center", children: [
          /* @__PURE__ */ I.jsx(
            Zb,
            {
              value: (y + 1) / (A == null ? void 0 : A.length) * 100,
              size: "sm",
              h: "10px",
              w: "73vw",
              borderRadius: "20px",
              position: "absolute",
              bottom: "20px",
              colorScheme: "facebook",
              zIndex: 2
            }
          ),
          /* @__PURE__ */ I.jsxs(
            Mr,
            {
              direction: "column",
              position: "absolute",
              top: "10vh",
              left: "4vw",
              spacing: 0,
              gap: 0,
              zIndex: 2,
              children: [
                /* @__PURE__ */ I.jsx(
                  Nr,
                  {
                    label: `Question ${y + 1} of ${A == null ? void 0 : A.length} - ${A[y].question_text}`,
                    placement: "right",
                    hasArrow: !0,
                    defaultIsOpen: !0,
                    isOpen: !0,
                    children: /* @__PURE__ */ I.jsx(
                      fr,
                      {
                        colorScheme: "facebook",
                        bg: "none",
                        padding: 0,
                        fontSize: "1.5rem",
                        _hover: { bg: "none" },
                        color: "#000000",
                        children: /* @__PURE__ */ I.jsx(bN, {})
                      }
                    )
                  }
                ),
                /* @__PURE__ */ I.jsx(Nr, { label: "More Info", placement: "right", hasArrow: !0, children: /* @__PURE__ */ I.jsx(
                  fr,
                  {
                    colorScheme: "facebook",
                    bg: "none",
                    fontSize: "1.5rem",
                    _hover: { bg: "none" },
                    color: "#000000",
                    children: /* @__PURE__ */ I.jsx(gN, {})
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ I.jsx(
            uy,
            {
              ref: o,
              url: U,
              playing: et,
              width: "100%",
              height: "90vh",
              style: {
                overflow: "hidden",
                borderRadius: "30px",
                boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
              },
              playsinline: Je,
              progressInterval: 1e3,
              onProgress: xr,
              onEnded: or,
              pip: !1
            }
          )
        ] }),
        /* @__PURE__ */ I.jsxs(
          Mr,
          {
            direction: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: "80px",
            gap: "20px",
            left: 0,
            right: 0,
            mr: "auto",
            ml: "auto",
            zIndex: 2,
            children: [
              $ && !J && /* @__PURE__ */ I.jsx(yN, { replayQuestion: sn }),
              (A == null ? void 0 : A.length) > 0 && f && !J && /* @__PURE__ */ I.jsx(
                r5,
                {
                  interviewKey: c,
                  handleAnswer: () => {
                  },
                  updateIsListening: mt,
                  questionId: A[y].question_id,
                  goToNextQuestion: at,
                  setPlaying: Be,
                  setPlaysinline: ht
                }
              ),
              C && !J && /* @__PURE__ */ I.jsx(vN, { skipQuestion: Tt, loading: Ke })
            ]
          }
        )
      ] })
    ] })
  ] });
}, l5 = (e) => {
  const { smashUserId: t } = e, { isOpen: r, onOpen: n, onClose: o } = Tb(), [a, i] = ue(!1), [s, l] = ue("male"), [c, u] = ue(!1), [d, m] = ue(!1), [y, x] = ue(!1), w = Af(), [_, T] = ue(""), P = async () => {
    if (_) {
      const { data: S } = await ti.post(`${ni}/user/answer/skip/all`, {
        interview_key: _
      });
      S.success ? console.log("interview skipped") : w({
        title: "Failed to skip interview",
        status: "error",
        duration: 3e3,
        isClosable: !0,
        position: "top"
      });
    } else
      w({
        title: "Interview key empty",
        status: "error",
        duration: 3e3,
        isClosable: !0,
        position: "top"
      });
  }, k = async () => {
    if (a && d) {
      i(!1), m(!1);
      return;
    }
    if (c)
      P(), T(""), u(!c), m(!d), i(!1);
    else {
      x(!0);
      const { data: S } = await ti.post(`${ni}/user/check`, {
        smash_user_id: t
      });
      if (S.success) {
        if (S.isCompleted) {
          i(!0), x(!1), m(!0);
          return;
        }
        l(S.data), u(!0), m(!0);
      } else
        !S.success && S.error ? console.log(S.error) : n();
      x(!1);
    }
  }, $ = () => {
    u(!0), m(!0), o();
  };
  return /* @__PURE__ */ I.jsx(rI, { children: /* @__PURE__ */ I.jsx(Mr, { h: "100vh", children: /* @__PURE__ */ I.jsxs(Mr, { h: "100vh", justifyContent: "center", alignItems: "center", children: [
    y && /* @__PURE__ */ I.jsx(mi, { size: "xl" }),
    !y && /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
      /* @__PURE__ */ I.jsx(
        hN,
        {
          onClose: $,
          onOpen: n,
          isOpen: r,
          botPreference: s,
          setBotPreference: l
        }
      ),
      a && /* @__PURE__ */ I.jsx(mN, {}),
      !c && !a && /* @__PURE__ */ I.jsx(bn, { fontSize: "1.3rem", children: "Smash Dashboard" }),
      /* @__PURE__ */ I.jsx(XL, {}),
      /* @__PURE__ */ I.jsx(
        YL,
        {
          botPreference: s,
          onClick: k,
          showInterview: d
        }
      ),
      c && /* @__PURE__ */ I.jsx(
        n5,
        {
          smashUserId: t,
          botPreference: s,
          setKey: T,
          toggleInterview: k
        }
      )
    ] })
  ] }) }) });
};
export {
  l5 as Interview
};
