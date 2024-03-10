import Te, { useState as Y, useRef as De, useEffect as H, useCallback as fr, forwardRef as pr, useImperativeHandle as yr } from "react";
var ne = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function dr() {
  if (Ce)
    return W;
  Ce = 1;
  var y = Te, m = Symbol.for("react.element"), E = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, h = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(i, l, v) {
    var o, a = {}, d = null, x = null;
    v !== void 0 && (d = "" + v), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (x = l.ref);
    for (o in l)
      b.call(l, o) && !w.hasOwnProperty(o) && (a[o] = l[o]);
    if (i && i.defaultProps)
      for (o in l = i.defaultProps, l)
        a[o] === void 0 && (a[o] = l[o]);
    return { $$typeof: m, type: i, key: d, ref: x, props: a, _owner: h.current };
  }
  return W.Fragment = E, W.jsx = k, W.jsxs = k, W;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function mr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var y = Te, m = Symbol.for("react.element"), E = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), o = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S = Symbol.iterator, T = "@@iterator";
    function D(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = S && e[S] || e[T];
      return typeof r == "function" ? r : null;
    }
    var c = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        C("error", e, t);
      }
    }
    function C(e, r, t) {
      {
        var n = c.ReactDebugCurrentFrame, p = n.getStackAddendum();
        p !== "" && (r += "%s", t = t.concat([p]));
        var g = t.map(function(u) {
          return String(u);
        });
        g.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var Ne = !1, Pe = !1, Fe = !1, Ie = !1, Ae = !1, oe;
    oe = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === w || Ae || e === h || e === v || e === o || Ie || e === x || Ne || Pe || Fe || typeof e == "object" && e !== null && (e.$$typeof === d || e.$$typeof === a || e.$$typeof === k || e.$$typeof === i || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var p = r.displayName || r.name || "";
      return p !== "" ? t + "(" + p + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case E:
          return "Portal";
        case w:
          return "Profiler";
        case h:
          return "StrictMode";
        case v:
          return "Suspense";
        case o:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            var r = e;
            return ae(r) + ".Consumer";
          case k:
            var t = e;
            return ae(t._context) + ".Provider";
          case l:
            return We(e, e.render, "ForwardRef");
          case a:
            var n = e.displayName || null;
            return n !== null ? n : $(e.type) || "Memo";
          case d: {
            var p = e, g = p._payload, u = p._init;
            try {
              return $(u(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, A = 0, ie, se, ce, le, ue, fe, pe;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function ze() {
      {
        if (A === 0) {
          ie = console.log, se = console.info, ce = console.warn, le = console.error, ue = console.group, fe = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Me() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ie
            }),
            info: P({}, e, {
              value: se
            }),
            warn: P({}, e, {
              value: ce
            }),
            error: P({}, e, {
              value: le
            }),
            group: P({}, e, {
              value: ue
            }),
            groupCollapsed: P({}, e, {
              value: fe
            }),
            groupEnd: P({}, e, {
              value: pe
            })
          });
        }
        A < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = c.ReactCurrentDispatcher, X;
    function z(e, r, t) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (p) {
            var n = p.stack.trim().match(/\n( *(at )?)/);
            X = n && n[1] || "";
          }
        return `
` + X + e;
      }
    }
    var G = !1, M;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Ue();
    }
    function de(e, r) {
      if (!e || G)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      G = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = J.current, J.current = null, ze();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (N) {
              n = N;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (N) {
              n = N;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            n = N;
          }
          e();
        }
      } catch (N) {
        if (N && n && typeof N.stack == "string") {
          for (var s = N.stack.split(`
`), R = n.stack.split(`
`), _ = s.length - 1, j = R.length - 1; _ >= 1 && j >= 0 && s[_] !== R[j]; )
            j--;
          for (; _ >= 1 && j >= 0; _--, j--)
            if (s[_] !== R[j]) {
              if (_ !== 1 || j !== 1)
                do
                  if (_--, j--, j < 0 || s[_] !== R[j]) {
                    var O = `
` + s[_].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, O), O;
                  }
                while (_ >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        G = !1, J.current = g, Me(), Error.prepareStackTrace = p;
      }
      var I = e ? e.displayName || e.name : "", Re = I ? z(I) : "";
      return typeof e == "function" && M.set(e, Re), Re;
    }
    function Be(e, r, t) {
      return de(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Ve(e));
      if (typeof e == "string")
        return z(e);
      switch (e) {
        case v:
          return z("Suspense");
        case o:
          return z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Be(e.render);
          case a:
            return U(e.type, r, t);
          case d: {
            var n = e, p = n._payload, g = n._init;
            try {
              return U(g(p), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, me = {}, ve = c.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, p) {
      {
        var g = Function.call.bind(B);
        for (var u in e)
          if (g(e, u)) {
            var s = void 0;
            try {
              if (typeof e[u] != "function") {
                var R = Error((n || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              s = e[u](r, u, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              s = _;
            }
            s && !(s instanceof Error) && (V(p), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, u, typeof s), V(null)), s instanceof Error && !(s.message in me) && (me[s.message] = !0, V(p), f("Failed %s type: %s", t, s.message), V(null));
          }
      }
    }
    var Ye = Array.isArray;
    function K(e) {
      return Ye(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function he(e) {
      if (Je(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), ge(e);
    }
    var L = c.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, we, Q;
    Q = {};
    function Ge(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && L.current && r && L.current.stateNode !== r) {
        var t = $(L.current.type);
        Q[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(L.current.type), e.ref), Q[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          be || (be = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          we || (we = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, p, g, u) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: g
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function tr(e, r, t, n, p) {
      {
        var g, u = {}, s = null, R = null;
        t !== void 0 && (he(t), s = "" + t), Ke(r) && (he(r.key), s = "" + r.key), Ge(r) && (R = r.ref, Qe(r, p));
        for (g in r)
          B.call(r, g) && !Xe.hasOwnProperty(g) && (u[g] = r[g]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (g in _)
            u[g] === void 0 && (u[g] = _[g]);
        }
        if (s || R) {
          var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && Ze(u, j), R && er(u, j);
        }
        return rr(e, s, R, p, n, L.current, u);
      }
    }
    var Z = c.ReactCurrentOwner, _e = c.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === m;
    }
    function ke() {
      {
        if (Z.current) {
          var e = $(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var je = {};
    function or(e) {
      {
        var r = ke();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (je[t])
          return;
        je[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Z.current && (n = " It was passed a child from " + $(e._owner.type) + "."), F(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            re(n) && Ee(n, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = D(e);
          if (typeof p == "function" && p !== e.entries)
            for (var g = p.call(e), u; !(u = g.next()).done; )
              re(u.value) && Ee(u.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === a))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = $(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var p = $(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    function Se(e, r, t, n, p, g) {
      {
        var u = Le(e);
        if (!u) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = nr(p);
          R ? s += R : s += ke();
          var _;
          e === null ? _ = "null" : K(e) ? _ = "array" : e !== void 0 && e.$$typeof === m ? (_ = "<" + ($(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, s);
        }
        var j = tr(e, r, t, p, g);
        if (j == null)
          return j;
        if (u) {
          var O = r.children;
          if (O !== void 0)
            if (n)
              if (K(O)) {
                for (var I = 0; I < O.length; I++)
                  xe(O[I], e);
                Object.freeze && Object.freeze(O);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(O, e);
        }
        return e === b ? ir(j) : ar(j), j;
      }
    }
    function sr(e, r, t) {
      return Se(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Se(e, r, t, !1);
    }
    var lr = cr, ur = sr;
    q.Fragment = b, q.jsx = lr, q.jsxs = ur;
  }()), q;
}
process.env.NODE_ENV === "production" ? ne.exports = dr() : ne.exports = mr();
var $e = ne.exports;
const vr = (y, m, E, b) => {
  let h = m / (E + b), w = Math.floor(y.length / h);
  h > y.length && (h = y.length, w = 1);
  const k = [];
  for (let i = 0; i < h; i++) {
    let l = 0;
    for (let v = 0; v < w && i * w + v < y.length; v++)
      l += y[i * w + v];
    k.push(l / w);
  }
  return k;
}, gr = (y, m, E, b, h, w) => {
  const k = m.height / 2, i = m.getContext("2d");
  i && (i.clearRect(0, 0, m.width, m.height), h !== "transparent" && (i.fillStyle = h, i.fillRect(0, 0, m.width, m.height)), y.forEach((l, v) => {
    i.fillStyle = w;
    const o = v * (E + b), a = k - l / 2, d = E, x = l || 1;
    i.beginPath(), i.roundRect ? (i.roundRect(o, a, d, x, 50), i.fill()) : i.fillRect(o, a, d, x);
  }));
}, _r = ({
  mediaRecorder: y,
  width: m = "100%",
  height: E = "100%",
  barWidth: b = 2,
  gap: h = 1,
  backgroundColor: w = "transparent",
  barColor: k = "rgb(160, 198, 255)",
  fftSize: i = 1024,
  maxDecibels: l = -10,
  minDecibels: v = -90,
  smoothingTimeConstant: o = 0.4
}) => {
  const [a] = Y(() => new AudioContext()), [d, x] = Y(), S = De(null);
  H(() => {
    if (!y.stream)
      return;
    const c = a.createAnalyser();
    x(c), c.fftSize = i, c.minDecibels = v, c.maxDecibels = l, c.smoothingTimeConstant = o, a.createMediaStreamSource(y.stream).connect(c);
  }, [y.stream]), H(() => {
    d && y.state === "recording" && T();
  }, [d, y.state]);
  const T = fr(() => {
    if (!d)
      return;
    const c = new Uint8Array(d == null ? void 0 : d.frequencyBinCount);
    y.state === "recording" ? (d == null || d.getByteFrequencyData(c), D(c), requestAnimationFrame(T)) : y.state === "paused" ? D(c) : y.state === "inactive" && a.state !== "closed" && a.close();
  }, [d, a.state]), D = (c) => {
    if (!S.current)
      return;
    const f = vr(
      c,
      S.current.width,
      b,
      h
    );
    gr(
      f,
      S.current,
      b,
      h,
      w,
      k
    );
  };
  return /* @__PURE__ */ $e.jsx(
    "canvas",
    {
      ref: S,
      width: m,
      height: E,
      style: {
        aspectRatio: "unset"
      }
    }
  );
}, hr = (y, m, E, b, h) => {
  const w = y.getChannelData(0), k = E / (b + h), i = Math.floor(w.length / k), l = m / 2;
  let v = [], o = 0;
  for (let a = 0; a < k; a++) {
    const d = [];
    let x = 0;
    const S = [];
    let T = 0;
    for (let f = 0; f < i && a * i + f < y.length; f++) {
      const C = w[a * i + f];
      C <= 0 && (d.push(C), x++), C > 0 && (S.push(C), T++);
    }
    const D = d.reduce((f, C) => f + C, 0) / x, c = { max: S.reduce((f, C) => f + C, 0) / T, min: D };
    c.max > o && (o = c.max), Math.abs(c.min) > o && (o = Math.abs(c.min)), v.push(c);
  }
  if (l * 0.8 > o * l) {
    const a = l * 0.8 / o;
    v = v.map((d) => ({
      max: d.max * a,
      min: d.min * a
    }));
  }
  return v;
}, te = (y, m, E, b, h, w, k, i = 0, l = 1) => {
  const v = m.height / 2, o = m.getContext("2d");
  if (!o)
    return;
  o.clearRect(0, 0, m.width, m.height), h !== "transparent" && (o.fillStyle = h, o.fillRect(0, 0, m.width, m.height));
  const a = (i || 0) / l;
  y.forEach((d, x) => {
    const S = x / y.length, T = a > S;
    o.fillStyle = T && k ? k : w;
    const D = x * (E + b), c = v + d.min, f = E, C = v + d.max - c;
    o.beginPath(), o.roundRect ? (o.roundRect(D, c, f, C, 50), o.fill()) : o.fillRect(D, c, f, C);
  });
}, br = pr(
  ({
    blob: y,
    width: m,
    height: E,
    barWidth: b = 2,
    gap: h = 1,
    currentTime: w,
    style: k,
    backgroundColor: i = "transparent",
    barColor: l = "rgb(184, 184, 184)",
    barPlayedColor: v = "rgb(160, 198, 255)"
  }, o) => {
    const a = De(null), [d, x] = Y([]), [S, T] = Y(0);
    return yr(
      o,
      () => a.current,
      []
    ), H(() => {
      (async () => {
        if (!a.current)
          return;
        if (!y) {
          const c = Array.from({ length: 100 }, () => ({
            max: 0,
            min: 0
          }));
          te(
            c,
            a.current,
            b,
            h,
            i,
            l,
            v
          );
          return;
        }
        const D = await y.arrayBuffer();
        await new AudioContext().decodeAudioData(D, (c) => {
          if (!a.current)
            return;
          T(c.duration);
          const f = hr(
            c,
            E,
            m,
            b,
            h
          );
          x(f), te(
            f,
            a.current,
            b,
            h,
            i,
            l,
            v
          );
        });
      })();
    }, [y, a.current]), H(() => {
      a.current && te(
        d,
        a.current,
        b,
        h,
        i,
        l,
        v,
        w,
        S
      );
    }, [w, S]), /* @__PURE__ */ $e.jsx(
      "canvas",
      {
        ref: a,
        width: m,
        height: E,
        style: {
          ...k
        }
      }
    );
  }
);
br.displayName = "AudioVisualizer";
export {
  br as AudioVisualizer,
  _r as LiveAudioVisualizer
};
