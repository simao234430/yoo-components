function gt(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var $e = { exports: {} }, p = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ae, vr;
function mr() {
  if (vr)
    return Ae;
  vr = 1;
  var u = Object.getOwnPropertySymbols, d = Object.prototype.hasOwnProperty, _ = Object.prototype.propertyIsEnumerable;
  function w(P) {
    if (P == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(P);
  }
  function E() {
    try {
      if (!Object.assign)
        return !1;
      var P = new String("abc");
      if (P[5] = "de", Object.getOwnPropertyNames(P)[0] === "5")
        return !1;
      for (var T = {}, v = 0; v < 10; v++)
        T["_" + String.fromCharCode(v)] = v;
      var b = Object.getOwnPropertyNames(T).map(function(x) {
        return T[x];
      });
      if (b.join("") !== "0123456789")
        return !1;
      var $ = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(x) {
        $[x] = x;
      }), Object.keys(Object.assign({}, $)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ae = E() ? Object.assign : function(P, T) {
    for (var v, b = w(P), $, x = 1; x < arguments.length; x++) {
      v = Object(arguments[x]);
      for (var I in v)
        d.call(v, I) && (b[I] = v[I]);
      if (u) {
        $ = u(v);
        for (var M = 0; M < $.length; M++)
          _.call(v, $[M]) && (b[$[M]] = v[$[M]]);
      }
    }
    return b;
  }, Ae;
}
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yr;
function _t() {
  if (yr)
    return p;
  yr = 1;
  var u = mr(), d = 60103, _ = 60106;
  p.Fragment = 60107, p.StrictMode = 60108, p.Profiler = 60114;
  var w = 60109, E = 60110, P = 60112;
  p.Suspense = 60113;
  var T = 60115, v = 60116;
  if (typeof Symbol == "function" && Symbol.for) {
    var b = Symbol.for;
    d = b("react.element"), _ = b("react.portal"), p.Fragment = b("react.fragment"), p.StrictMode = b("react.strict_mode"), p.Profiler = b("react.profiler"), w = b("react.provider"), E = b("react.context"), P = b("react.forward_ref"), p.Suspense = b("react.suspense"), T = b("react.memo"), v = b("react.lazy");
  }
  var $ = typeof Symbol == "function" && Symbol.iterator;
  function x(t) {
    return t === null || typeof t != "object" ? null : (t = $ && t[$] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  function I(t) {
    for (var o = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, l = 1; l < arguments.length; l++)
      o += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + t + "; visit " + o + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var M = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, J = {};
  function U(t, o, l) {
    this.props = t, this.context = o, this.refs = J, this.updater = l || M;
  }
  U.prototype.isReactComponent = {}, U.prototype.setState = function(t, o) {
    if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error(I(85));
    this.updater.enqueueSetState(this, t, o, "setState");
  }, U.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function X() {
  }
  X.prototype = U.prototype;
  function R(t, o, l) {
    this.props = t, this.context = o, this.refs = J, this.updater = l || M;
  }
  var Q = R.prototype = new X();
  Q.constructor = R, u(Q, U.prototype), Q.isPureReactComponent = !0;
  var te = { current: null }, ne = Object.prototype.hasOwnProperty, ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function fe(t, o, l) {
    var h, m = {}, O = null, k = null;
    if (o != null)
      for (h in o.ref !== void 0 && (k = o.ref), o.key !== void 0 && (O = "" + o.key), o)
        ne.call(o, h) && !ae.hasOwnProperty(h) && (m[h] = o[h]);
    var j = arguments.length - 2;
    if (j === 1)
      m.children = l;
    else if (1 < j) {
      for (var C = Array(j), F = 0; F < j; F++)
        C[F] = arguments[F + 2];
      m.children = C;
    }
    if (t && t.defaultProps)
      for (h in j = t.defaultProps, j)
        m[h] === void 0 && (m[h] = j[h]);
    return { $$typeof: d, type: t, key: O, ref: k, props: m, _owner: te.current };
  }
  function Y(t, o) {
    return { $$typeof: d, type: t.type, key: o, ref: t.ref, props: t.props, _owner: t._owner };
  }
  function H(t) {
    return typeof t == "object" && t !== null && t.$$typeof === d;
  }
  function Z(t) {
    var o = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(l) {
      return o[l];
    });
  }
  var oe = /\/+/g;
  function ue(t, o) {
    return typeof t == "object" && t !== null && t.key != null ? Z("" + t.key) : o.toString(36);
  }
  function q(t, o, l, h, m) {
    var O = typeof t;
    (O === "undefined" || O === "boolean") && (t = null);
    var k = !1;
    if (t === null)
      k = !0;
    else
      switch (O) {
        case "string":
        case "number":
          k = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case d:
            case _:
              k = !0;
          }
      }
    if (k)
      return k = t, m = m(k), t = h === "" ? "." + ue(k, 0) : h, Array.isArray(m) ? (l = "", t != null && (l = t.replace(oe, "$&/") + "/"), q(m, o, l, "", function(F) {
        return F;
      })) : m != null && (H(m) && (m = Y(m, l + (!m.key || k && k.key === m.key ? "" : ("" + m.key).replace(oe, "$&/") + "/") + t)), o.push(m)), 1;
    if (k = 0, h = h === "" ? "." : h + ":", Array.isArray(t))
      for (var j = 0; j < t.length; j++) {
        O = t[j];
        var C = h + ue(O, j);
        k += q(O, o, l, C, m);
      }
    else if (C = x(t), typeof C == "function")
      for (t = C.call(t), j = 0; !(O = t.next()).done; )
        O = O.value, C = h + ue(O, j++), k += q(O, o, l, C, m);
    else if (O === "object")
      throw o = "" + t, Error(I(31, o === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : o));
    return k;
  }
  function z(t, o, l) {
    if (t == null)
      return t;
    var h = [], m = 0;
    return q(t, h, "", "", function(O) {
      return o.call(l, O, m++);
    }), h;
  }
  function y(t) {
    if (t._status === -1) {
      var o = t._result;
      o = o(), t._status = 0, t._result = o, o.then(function(l) {
        t._status === 0 && (l = l.default, t._status = 1, t._result = l);
      }, function(l) {
        t._status === 0 && (t._status = 2, t._result = l);
      });
    }
    if (t._status === 1)
      return t._result;
    throw t._result;
  }
  var ie = { current: null };
  function W() {
    var t = ie.current;
    if (t === null)
      throw Error(I(321));
    return t;
  }
  var se = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: te, IsSomeRendererActing: { current: !1 }, assign: u };
  return p.Children = { map: z, forEach: function(t, o, l) {
    z(t, function() {
      o.apply(this, arguments);
    }, l);
  }, count: function(t) {
    var o = 0;
    return z(t, function() {
      o++;
    }), o;
  }, toArray: function(t) {
    return z(t, function(o) {
      return o;
    }) || [];
  }, only: function(t) {
    if (!H(t))
      throw Error(I(143));
    return t;
  } }, p.Component = U, p.PureComponent = R, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se, p.cloneElement = function(t, o, l) {
    if (t == null)
      throw Error(I(267, t));
    var h = u({}, t.props), m = t.key, O = t.ref, k = t._owner;
    if (o != null) {
      if (o.ref !== void 0 && (O = o.ref, k = te.current), o.key !== void 0 && (m = "" + o.key), t.type && t.type.defaultProps)
        var j = t.type.defaultProps;
      for (C in o)
        ne.call(o, C) && !ae.hasOwnProperty(C) && (h[C] = o[C] === void 0 && j !== void 0 ? j[C] : o[C]);
    }
    var C = arguments.length - 2;
    if (C === 1)
      h.children = l;
    else if (1 < C) {
      j = Array(C);
      for (var F = 0; F < C; F++)
        j[F] = arguments[F + 2];
      h.children = j;
    }
    return {
      $$typeof: d,
      type: t.type,
      key: m,
      ref: O,
      props: h,
      _owner: k
    };
  }, p.createContext = function(t, o) {
    return o === void 0 && (o = null), t = { $$typeof: E, _calculateChangedBits: o, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null }, t.Provider = { $$typeof: w, _context: t }, t.Consumer = t;
  }, p.createElement = fe, p.createFactory = function(t) {
    var o = fe.bind(null, t);
    return o.type = t, o;
  }, p.createRef = function() {
    return { current: null };
  }, p.forwardRef = function(t) {
    return { $$typeof: P, render: t };
  }, p.isValidElement = H, p.lazy = function(t) {
    return { $$typeof: v, _payload: { _status: -1, _result: t }, _init: y };
  }, p.memo = function(t, o) {
    return { $$typeof: T, type: t, compare: o === void 0 ? null : o };
  }, p.useCallback = function(t, o) {
    return W().useCallback(t, o);
  }, p.useContext = function(t, o) {
    return W().useContext(t, o);
  }, p.useDebugValue = function() {
  }, p.useEffect = function(t, o) {
    return W().useEffect(t, o);
  }, p.useImperativeHandle = function(t, o, l) {
    return W().useImperativeHandle(t, o, l);
  }, p.useLayoutEffect = function(t, o) {
    return W().useLayoutEffect(t, o);
  }, p.useMemo = function(t, o) {
    return W().useMemo(t, o);
  }, p.useReducer = function(t, o, l) {
    return W().useReducer(t, o, l);
  }, p.useRef = function(t) {
    return W().useRef(t);
  }, p.useState = function(t) {
    return W().useState(t);
  }, p.version = "17.0.2", p;
}
var Te = {};
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr;
function bt() {
  return hr || (hr = 1, function(u) {
    process.env.NODE_ENV !== "production" && function() {
      var d = mr(), _ = "17.0.2", w = 60103, E = 60106;
      u.Fragment = 60107, u.StrictMode = 60108, u.Profiler = 60114;
      var P = 60109, T = 60110, v = 60112;
      u.Suspense = 60113;
      var b = 60120, $ = 60115, x = 60116, I = 60121, M = 60122, J = 60117, U = 60129, X = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var R = Symbol.for;
        w = R("react.element"), E = R("react.portal"), u.Fragment = R("react.fragment"), u.StrictMode = R("react.strict_mode"), u.Profiler = R("react.profiler"), P = R("react.provider"), T = R("react.context"), v = R("react.forward_ref"), u.Suspense = R("react.suspense"), b = R("react.suspense_list"), $ = R("react.memo"), x = R("react.lazy"), I = R("react.block"), M = R("react.server.block"), J = R("react.fundamental"), R("react.scope"), R("react.opaque.id"), U = R("react.debug_trace_mode"), R("react.offscreen"), X = R("react.legacy_hidden");
      }
      var Q = typeof Symbol == "function" && Symbol.iterator, te = "@@iterator";
      function ne(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = Q && e[Q] || e[te];
        return typeof r == "function" ? r : null;
      }
      var ae = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, fe = {
        transition: 0
      }, Y = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, H = {}, Z = null;
      function oe(e) {
        Z = e;
      }
      H.setExtraStackFrame = function(e) {
        Z = e;
      }, H.getCurrentStack = null, H.getStackAddendum = function() {
        var e = "";
        Z && (e += Z);
        var r = H.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var ue = {
        current: !1
      }, q = {
        ReactCurrentDispatcher: ae,
        ReactCurrentBatchConfig: fe,
        ReactCurrentOwner: Y,
        IsSomeRendererActing: ue,
        // Used by renderers to avoid bundling object-assign twice in UMD bundles:
        assign: d
      };
      q.ReactDebugCurrentFrame = H;
      function z(e) {
        {
          for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
            n[a - 1] = arguments[a];
          ie("warn", e, n);
        }
      }
      function y(e) {
        {
          for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
            n[a - 1] = arguments[a];
          ie("error", e, n);
        }
      }
      function ie(e, r, n) {
        {
          var a = q.ReactDebugCurrentFrame, i = a.getStackAddendum();
          i !== "" && (r += "%s", n = n.concat([i]));
          var f = n.map(function(c) {
            return "" + c;
          });
          f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
        }
      }
      var W = {};
      function se(e, r) {
        {
          var n = e.constructor, a = n && (n.displayName || n.name) || "ReactClass", i = a + "." + r;
          if (W[i])
            return;
          y("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, a), W[i] = !0;
        }
      }
      var t = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, n) {
          se(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, n, a) {
          se(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, n, a) {
          se(e, "setState");
        }
      }, o = {};
      Object.freeze(o);
      function l(e, r, n) {
        this.props = e, this.context = r, this.refs = o, this.updater = n || t;
      }
      l.prototype.isReactComponent = {}, l.prototype.setState = function(e, r) {
        if (!(typeof e == "object" || typeof e == "function" || e == null))
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, l.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var h = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, m = function(e, r) {
          Object.defineProperty(l.prototype, e, {
            get: function() {
              z("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var O in h)
          h.hasOwnProperty(O) && m(O, h[O]);
      }
      function k() {
      }
      k.prototype = l.prototype;
      function j(e, r, n) {
        this.props = e, this.context = r, this.refs = o, this.updater = n || t;
      }
      var C = j.prototype = new k();
      C.constructor = j, d(C, l.prototype), C.isPureReactComponent = !0;
      function F() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      function Er(e, r, n) {
        var a = r.displayName || r.name || "";
        return e.displayName || (a !== "" ? n + "(" + a + ")" : n);
      }
      function De(e) {
        return e.displayName || "Context";
      }
      function G(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && y("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case u.Fragment:
            return "Fragment";
          case E:
            return "Portal";
          case u.Profiler:
            return "Profiler";
          case u.StrictMode:
            return "StrictMode";
          case u.Suspense:
            return "Suspense";
          case b:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case T:
              var r = e;
              return De(r) + ".Consumer";
            case P:
              var n = e;
              return De(n._context) + ".Provider";
            case v:
              return Er(e, e.render, "ForwardRef");
            case $:
              return G(e.type);
            case I:
              return G(e._render);
            case x: {
              var a = e, i = a._payload, f = a._init;
              try {
                return G(f(i));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var le = Object.prototype.hasOwnProperty, Ie = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ne, Me, Re;
      Re = {};
      function Ue(e) {
        if (le.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Fe(e) {
        if (le.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Cr(e, r) {
        var n = function() {
          Ne || (Ne = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
      function wr(e, r) {
        var n = function() {
          Me || (Me = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
      function Pr(e) {
        if (typeof e.ref == "string" && Y.current && e.__self && Y.current.stateNode !== e.__self) {
          var r = G(Y.current.type);
          Re[r] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Re[r] = !0);
        }
      }
      var Ee = function(e, r, n, a, i, f, c) {
        var s = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: w,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: n,
          props: c,
          // Record the component responsible for creating this element.
          _owner: f
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
          value: a
        }), Object.defineProperty(s, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: i
        }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
      };
      function Or(e, r, n) {
        var a, i = {}, f = null, c = null, s = null, g = null;
        if (r != null) {
          Ue(r) && (c = r.ref, Pr(r)), Fe(r) && (f = "" + r.key), s = r.__self === void 0 ? null : r.__self, g = r.__source === void 0 ? null : r.__source;
          for (a in r)
            le.call(r, a) && !Ie.hasOwnProperty(a) && (i[a] = r[a]);
        }
        var S = arguments.length - 2;
        if (S === 1)
          i.children = n;
        else if (S > 1) {
          for (var A = Array(S), D = 0; D < S; D++)
            A[D] = arguments[D + 2];
          Object.freeze && Object.freeze(A), i.children = A;
        }
        if (e && e.defaultProps) {
          var V = e.defaultProps;
          for (a in V)
            i[a] === void 0 && (i[a] = V[a]);
        }
        if (f || c) {
          var N = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          f && Cr(i, N), c && wr(i, N);
        }
        return Ee(e, f, c, s, g, Y.current, i);
      }
      function jr(e, r) {
        var n = Ee(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return n;
      }
      function Sr(e, r, n) {
        if (e == null)
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var a, i = d({}, e.props), f = e.key, c = e.ref, s = e._self, g = e._source, S = e._owner;
        if (r != null) {
          Ue(r) && (c = r.ref, S = Y.current), Fe(r) && (f = "" + r.key);
          var A;
          e.type && e.type.defaultProps && (A = e.type.defaultProps);
          for (a in r)
            le.call(r, a) && !Ie.hasOwnProperty(a) && (r[a] === void 0 && A !== void 0 ? i[a] = A[a] : i[a] = r[a]);
        }
        var D = arguments.length - 2;
        if (D === 1)
          i.children = n;
        else if (D > 1) {
          for (var V = Array(D), N = 0; N < D; N++)
            V[N] = arguments[N + 2];
          i.children = V;
        }
        return Ee(e.type, f, c, s, g, S, i);
      }
      function ee(e) {
        return typeof e == "object" && e !== null && e.$$typeof === w;
      }
      var Ve = ".", kr = ":";
      function Ar(e) {
        var r = /[=:]/g, n = {
          "=": "=0",
          ":": "=2"
        }, a = e.replace(r, function(i) {
          return n[i];
        });
        return "$" + a;
      }
      var We = !1, Tr = /\/+/g;
      function Le(e) {
        return e.replace(Tr, "$&/");
      }
      function Ce(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? Ar("" + e.key) : r.toString(36);
      }
      function pe(e, r, n, a, i) {
        var f = typeof e;
        (f === "undefined" || f === "boolean") && (e = null);
        var c = !1;
        if (e === null)
          c = !0;
        else
          switch (f) {
            case "string":
            case "number":
              c = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case w:
                case E:
                  c = !0;
              }
          }
        if (c) {
          var s = e, g = i(s), S = a === "" ? Ve + Ce(s, 0) : a;
          if (Array.isArray(g)) {
            var A = "";
            S != null && (A = Le(S) + "/"), pe(g, r, A, "", function(mt) {
              return mt;
            });
          } else
            g != null && (ee(g) && (g = jr(
              g,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              n + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (g.key && (!s || s.key !== g.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                Le("" + g.key) + "/"
              ) : "") + S
            )), r.push(g));
          return 1;
        }
        var D, V, N = 0, L = a === "" ? Ve : a + kr;
        if (Array.isArray(e))
          for (var ge = 0; ge < e.length; ge++)
            D = e[ge], V = L + Ce(D, ge), N += pe(D, r, n, V, i);
        else {
          var ke = ne(e);
          if (typeof ke == "function") {
            var lr = e;
            ke === lr.entries && (We || z("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), We = !0);
            for (var yt = ke.call(lr), pr, ht = 0; !(pr = yt.next()).done; )
              D = pr.value, V = L + Ce(D, ht++), N += pe(D, r, n, V, i);
          } else if (f === "object") {
            var dr = "" + e;
            throw Error("Objects are not valid as a React child (found: " + (dr === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : dr) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return N;
      }
      function de(e, r, n) {
        if (e == null)
          return e;
        var a = [], i = 0;
        return pe(e, a, "", "", function(f) {
          return r.call(n, f, i++);
        }), a;
      }
      function $r(e) {
        var r = 0;
        return de(e, function() {
          r++;
        }), r;
      }
      function xr(e, r, n) {
        de(e, function() {
          r.apply(this, arguments);
        }, n);
      }
      function Dr(e) {
        return de(e, function(r) {
          return r;
        }) || [];
      }
      function Ir(e) {
        if (!ee(e))
          throw Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function Nr(e, r) {
        r === void 0 ? r = null : r !== null && typeof r != "function" && y("createContext: Expected the optional second argument to be a function. Instead received: %s", r);
        var n = {
          $$typeof: T,
          _calculateChangedBits: r,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null
        };
        n.Provider = {
          $$typeof: P,
          _context: n
        };
        var a = !1, i = !1, f = !1;
        {
          var c = {
            $$typeof: T,
            _context: n,
            _calculateChangedBits: n._calculateChangedBits
          };
          Object.defineProperties(c, {
            Provider: {
              get: function() {
                return i || (i = !0, y("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), n.Provider;
              },
              set: function(s) {
                n.Provider = s;
              }
            },
            _currentValue: {
              get: function() {
                return n._currentValue;
              },
              set: function(s) {
                n._currentValue = s;
              }
            },
            _currentValue2: {
              get: function() {
                return n._currentValue2;
              },
              set: function(s) {
                n._currentValue2 = s;
              }
            },
            _threadCount: {
              get: function() {
                return n._threadCount;
              },
              set: function(s) {
                n._threadCount = s;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, y("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), n.Consumer;
              }
            },
            displayName: {
              get: function() {
                return n.displayName;
              },
              set: function(s) {
                f || (z("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", s), f = !0);
              }
            }
          }), n.Consumer = c;
        }
        return n._currentRenderer = null, n._currentRenderer2 = null, n;
      }
      var Mr = -1, we = 0, Ye = 1, Ur = 2;
      function Fr(e) {
        if (e._status === Mr) {
          var r = e._result, n = r(), a = e;
          a._status = we, a._result = n, n.then(function(i) {
            if (e._status === we) {
              var f = i.default;
              f === void 0 && y(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, i);
              var c = e;
              c._status = Ye, c._result = f;
            }
          }, function(i) {
            if (e._status === we) {
              var f = e;
              f._status = Ur, f._result = i;
            }
          });
        }
        if (e._status === Ye)
          return e._result;
        throw e._result;
      }
      function Vr(e) {
        var r = {
          // We use these fields to store the result.
          _status: -1,
          _result: e
        }, n = {
          $$typeof: x,
          _payload: r,
          _init: Fr
        };
        {
          var a, i;
          Object.defineProperties(n, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return a;
              },
              set: function(f) {
                y("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), a = f, Object.defineProperty(n, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return i;
              },
              set: function(f) {
                y("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), i = f, Object.defineProperty(n, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return n;
      }
      function Wr(e) {
        e != null && e.$$typeof === $ ? y("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? y("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && y("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && y("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: v,
          render: e
        };
        {
          var n;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return n;
            },
            set: function(a) {
              n = a, e.displayName == null && (e.displayName = a);
            }
          });
        }
        return r;
      }
      var Lr = !1;
      function qe(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === u.Fragment || e === u.Profiler || e === U || e === u.StrictMode || e === u.Suspense || e === b || e === X || Lr || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === $ || e.$$typeof === P || e.$$typeof === T || e.$$typeof === v || e.$$typeof === J || e.$$typeof === I || e[0] === M));
      }
      function Yr(e, r) {
        qe(e) || y("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var n = {
          $$typeof: $,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var a;
          Object.defineProperty(n, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(i) {
              a = i, e.displayName == null && (e.displayName = i);
            }
          });
        }
        return n;
      }
      function B() {
        var e = ae.current;
        if (e === null)
          throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
        return e;
      }
      function qr(e, r) {
        var n = B();
        if (r !== void 0 && y("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", r, typeof r == "number" && Array.isArray(arguments[2]) ? `

Did you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks` : ""), e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? y("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && y("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return n.useContext(e, r);
      }
      function zr(e) {
        var r = B();
        return r.useState(e);
      }
      function Br(e, r, n) {
        var a = B();
        return a.useReducer(e, r, n);
      }
      function Hr(e) {
        var r = B();
        return r.useRef(e);
      }
      function Gr(e, r) {
        var n = B();
        return n.useEffect(e, r);
      }
      function Kr(e, r) {
        var n = B();
        return n.useLayoutEffect(e, r);
      }
      function Jr(e, r) {
        var n = B();
        return n.useCallback(e, r);
      }
      function Xr(e, r) {
        var n = B();
        return n.useMemo(e, r);
      }
      function Qr(e, r, n) {
        var a = B();
        return a.useImperativeHandle(e, r, n);
      }
      function Zr(e, r) {
        {
          var n = B();
          return n.useDebugValue(e, r);
        }
      }
      var ce = 0, ze, Be, He, Ge, Ke, Je, Xe;
      function Qe() {
      }
      Qe.__reactDisabledLog = !0;
      function et() {
        {
          if (ce === 0) {
            ze = console.log, Be = console.info, He = console.warn, Ge = console.error, Ke = console.group, Je = console.groupCollapsed, Xe = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Qe,
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
          ce++;
        }
      }
      function rt() {
        {
          if (ce--, ce === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: d({}, e, {
                value: ze
              }),
              info: d({}, e, {
                value: Be
              }),
              warn: d({}, e, {
                value: He
              }),
              error: d({}, e, {
                value: Ge
              }),
              group: d({}, e, {
                value: Ke
              }),
              groupCollapsed: d({}, e, {
                value: Je
              }),
              groupEnd: d({}, e, {
                value: Xe
              })
            });
          }
          ce < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Pe = q.ReactCurrentDispatcher, Oe;
      function ve(e, r, n) {
        {
          if (Oe === void 0)
            try {
              throw Error();
            } catch (i) {
              var a = i.stack.trim().match(/\n( *(at )?)/);
              Oe = a && a[1] || "";
            }
          return `
` + Oe + e;
        }
      }
      var je = !1, ye;
      {
        var tt = typeof WeakMap == "function" ? WeakMap : Map;
        ye = new tt();
      }
      function Ze(e, r) {
        if (!e || je)
          return "";
        {
          var n = ye.get(e);
          if (n !== void 0)
            return n;
        }
        var a;
        je = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var f;
        f = Pe.current, Pe.current = null, et();
        try {
          if (r) {
            var c = function() {
              throw Error();
            };
            if (Object.defineProperty(c.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(c, []);
              } catch (L) {
                a = L;
              }
              Reflect.construct(e, [], c);
            } else {
              try {
                c.call();
              } catch (L) {
                a = L;
              }
              e.call(c.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (L) {
              a = L;
            }
            e();
          }
        } catch (L) {
          if (L && a && typeof L.stack == "string") {
            for (var s = L.stack.split(`
`), g = a.stack.split(`
`), S = s.length - 1, A = g.length - 1; S >= 1 && A >= 0 && s[S] !== g[A]; )
              A--;
            for (; S >= 1 && A >= 0; S--, A--)
              if (s[S] !== g[A]) {
                if (S !== 1 || A !== 1)
                  do
                    if (S--, A--, A < 0 || s[S] !== g[A]) {
                      var D = `
` + s[S].replace(" at new ", " at ");
                      return typeof e == "function" && ye.set(e, D), D;
                    }
                  while (S >= 1 && A >= 0);
                break;
              }
          }
        } finally {
          je = !1, Pe.current = f, rt(), Error.prepareStackTrace = i;
        }
        var V = e ? e.displayName || e.name : "", N = V ? ve(V) : "";
        return typeof e == "function" && ye.set(e, N), N;
      }
      function er(e, r, n) {
        return Ze(e, !1);
      }
      function nt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function he(e, r, n) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Ze(e, nt(e));
        if (typeof e == "string")
          return ve(e);
        switch (e) {
          case u.Suspense:
            return ve("Suspense");
          case b:
            return ve("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case v:
              return er(e.render);
            case $:
              return he(e.type, r, n);
            case I:
              return er(e._render);
            case x: {
              var a = e, i = a._payload, f = a._init;
              try {
                return he(f(i), r, n);
              } catch {
              }
            }
          }
        return "";
      }
      var rr = {}, tr = q.ReactDebugCurrentFrame;
      function me(e) {
        if (e) {
          var r = e._owner, n = he(e.type, e._source, r ? r.type : null);
          tr.setExtraStackFrame(n);
        } else
          tr.setExtraStackFrame(null);
      }
      function at(e, r, n, a, i) {
        {
          var f = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var c in e)
            if (f(e, c)) {
              var s = void 0;
              try {
                if (typeof e[c] != "function") {
                  var g = Error((a || "React class") + ": " + n + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw g.name = "Invariant Violation", g;
                }
                s = e[c](r, c, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (S) {
                s = S;
              }
              s && !(s instanceof Error) && (me(i), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, c, typeof s), me(null)), s instanceof Error && !(s.message in rr) && (rr[s.message] = !0, me(i), y("Failed %s type: %s", n, s.message), me(null));
            }
        }
      }
      function re(e) {
        if (e) {
          var r = e._owner, n = he(e.type, e._source, r ? r.type : null);
          oe(n);
        } else
          oe(null);
      }
      var Se;
      Se = !1;
      function nr() {
        if (Y.current) {
          var e = G(Y.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function ot(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + r + ":" + n + ".";
        }
        return "";
      }
      function ut(e) {
        return e != null ? ot(e.__source) : "";
      }
      var ar = {};
      function it(e) {
        var r = nr();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
      function or(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var n = it(r);
          if (!ar[n]) {
            ar[n] = !0;
            var a = "";
            e && e._owner && e._owner !== Y.current && (a = " It was passed a child from " + G(e._owner.type) + "."), re(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), re(null);
          }
        }
      }
      function ur(e, r) {
        if (typeof e == "object") {
          if (Array.isArray(e))
            for (var n = 0; n < e.length; n++) {
              var a = e[n];
              ee(a) && or(a, r);
            }
          else if (ee(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var i = ne(e);
            if (typeof i == "function" && i !== e.entries)
              for (var f = i.call(e), c; !(c = f.next()).done; )
                ee(c.value) && or(c.value, r);
          }
        }
      }
      function ir(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var n;
          if (typeof r == "function")
            n = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === $))
            n = r.propTypes;
          else
            return;
          if (n) {
            var a = G(r);
            at(n, e.props, "prop", a, e);
          } else if (r.PropTypes !== void 0 && !Se) {
            Se = !0;
            var i = G(r);
            y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function st(e) {
        {
          for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
            var a = r[n];
            if (a !== "children" && a !== "key") {
              re(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), re(null);
              break;
            }
          }
          e.ref !== null && (re(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), re(null));
        }
      }
      function sr(e, r, n) {
        var a = qe(e);
        if (!a) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var f = ut(r);
          f ? i += f : i += nr();
          var c;
          e === null ? c = "null" : Array.isArray(e) ? c = "array" : e !== void 0 && e.$$typeof === w ? (c = "<" + (G(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, y("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, i);
        }
        var s = Or.apply(this, arguments);
        if (s == null)
          return s;
        if (a)
          for (var g = 2; g < arguments.length; g++)
            ur(arguments[g], e);
        return e === u.Fragment ? st(s) : ir(s), s;
      }
      var cr = !1;
      function ct(e) {
        var r = sr.bind(null, e);
        return r.type = e, cr || (cr = !0, z("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return z("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function ft(e, r, n) {
        for (var a = Sr.apply(this, arguments), i = 2; i < arguments.length; i++)
          ur(arguments[i], a.type);
        return ir(a), a;
      }
      try {
        var fr = Object.freeze({});
      } catch {
      }
      var lt = sr, pt = ft, dt = ct, vt = {
        map: de,
        forEach: xr,
        count: $r,
        toArray: Dr,
        only: Ir
      };
      u.Children = vt, u.Component = l, u.PureComponent = j, u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q, u.cloneElement = pt, u.createContext = Nr, u.createElement = lt, u.createFactory = dt, u.createRef = F, u.forwardRef = Wr, u.isValidElement = ee, u.lazy = Vr, u.memo = Yr, u.useCallback = Jr, u.useContext = qr, u.useDebugValue = Zr, u.useEffect = Gr, u.useImperativeHandle = Qr, u.useLayoutEffect = Kr, u.useMemo = Xr, u.useReducer = Br, u.useRef = Hr, u.useState = zr, u.version = _;
    }();
  }(Te)), Te;
}
process.env.NODE_ENV === "production" ? $e.exports = _t() : $e.exports = bt();
var K = $e.exports;
const _e = /* @__PURE__ */ gt(K);
function gr(u, d) {
  const _ = {
    ...u
  };
  return d.forEach((w) => {
    w in _ && delete _[w];
  }), _;
}
function _r(u, d, _) {
  const { _ignorePropsFromGlobal: w } = u, E = K.useMemo(() => ({ ...d, ...w ? {} : _ }), [d, _, w]);
  return K.useMemo(() => {
    const T = gr(u, ["_ignorePropsFromGlobal"]);
    for (const v in E)
      T[v] === void 0 && (T[v] = E[v]);
    return T;
  }, [u, E]);
}
function Rt(u) {
  ({
    ...u
  });
}
const br = {
  prefixCls: "arco",
  size: "default"
}, Et = {}, be = K.createContext({
  getPrefixCls: (u, d) => `${d || "arco"}-${u}`,
  ...br
});
function Rr(u) {
  const d = _r(u, br, Et), { prefixCls: _, children: w } = d;
  K.useEffect(() => {
  }, [_]);
  function E(v, b) {
    return `${b || _}-${v}`;
  }
  const P = {
    ...gr(d, ["children"]),
    getPrefixCls: E
  };
  K.useEffect(() => {
    Rt({ prefixCls: _ });
  }, [_]);
  let T = w;
  return /* @__PURE__ */ _e.createElement(be.Provider, { value: P }, T);
}
Rr.ConfigContext = be;
Rr.displayName = "ConfigProvider";
be.Consumer;
const xe = Object.prototype.toString;
function Ct(u) {
  return xe.call(u) === "[object Array]";
}
function wt(u) {
  return xe.call(u) === "[object Object]";
}
function Pt(u) {
  return xe.call(u) === "[object String]";
}
function Ot(...u) {
  const d = u.length;
  let _ = [];
  for (let w = 0; w < d; w++) {
    const E = u[w];
    E && (Pt(E) ? _.push(E) : Ct(E) ? _ = _.concat(E) : wt(E) && Object.keys(E).forEach((P) => {
      E[P] && _.push(P);
    }));
  }
  return [...new Set(_)].join(" ");
}
const jt = {
  htmlType: "button",
  type: "default",
  shape: "square"
};
function St(u, d) {
  const {
    getPrefixCls: _,
    size: w
  } = K.useContext(be), E = _r(u, jt, {}), { children: P, style: T, type: v, htmlType: b, size: $, className: x } = E, I = /* @__PURE__ */ _e.createElement(_e.Fragment, null, P), M = K.useRef(), J = d || M, U = _("btn"), R = Ot(
    U,
    `${U}-${v === "default" ? "secondary" : v}`,
    `${U}-size-${$ || w}`,
    x
  );
  return /* @__PURE__ */ _e.createElement(
    "button",
    {
      ref: J,
      style: T,
      className: R,
      type: b
    },
    I
  );
}
const kt = K.forwardRef(St), At = kt;
At.displayName = "Button";
export {
  At as Button,
  Rr as ConfigProvider
};
//# sourceMappingURL=yoo-components.es.js.map
