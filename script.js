var Zc = e => {
    throw TypeError(e)
}
;
var Ra = (e, t, n) => t.has(e) || Zc("Cannot " + n);
var N = (e, t, n) => (Ra(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , Z = (e, t, n) => t.has(e) ? Zc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , U = (e, t, n, r) => (Ra(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Pe = (e, t, n) => (Ra(e, t, "access private method"),
n);
var Ni = (e, t, n, r) => ({
    set _(o) {
        U(e, t, o, n)
    },
    get _() {
        return N(e, t, r)
    }
});
function ty(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function fp(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var pp = {
    exports: {}
}
  , Gs = {}
  , hp = {
    exports: {}
}
  , G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hi = Symbol.for("react.element")
  , ny = Symbol.for("react.portal")
  , ry = Symbol.for("react.fragment")
  , oy = Symbol.for("react.strict_mode")
  , iy = Symbol.for("react.profiler")
  , sy = Symbol.for("react.provider")
  , ay = Symbol.for("react.context")
  , ly = Symbol.for("react.forward_ref")
  , uy = Symbol.for("react.suspense")
  , cy = Symbol.for("react.memo")
  , dy = Symbol.for("react.lazy")
  , Jc = Symbol.iterator;
function fy(e) {
    return e === null || typeof e != "object" ? null : (e = Jc && e[Jc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var mp = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , gp = Object.assign
  , vp = {};
function co(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = vp,
    this.updater = n || mp
}
co.prototype.isReactComponent = {};
co.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
co.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function yp() {}
yp.prototype = co.prototype;
function Pu(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = vp,
    this.updater = n || mp
}
var Tu = Pu.prototype = new yp;
Tu.constructor = Pu;
gp(Tu, co.prototype);
Tu.isPureReactComponent = !0;
var ed = Array.isArray
  , xp = Object.prototype.hasOwnProperty
  , Ru = {
    current: null
}
  , wp = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Sp(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            xp.call(t, r) && !wp.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: hi,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Ru.current
    }
}
function py(e, t) {
    return {
        $$typeof: hi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function ju(e) {
    return typeof e == "object" && e !== null && e.$$typeof === hi
}
function hy(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var td = /\/+/g;
function ja(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? hy("" + e.key) : t.toString(36)
}
function Ji(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case hi:
            case ny:
                s = !0
            }
        }
    if (s)
        return s = e,
        o = o(s),
        e = r === "" ? "." + ja(s, 0) : r,
        ed(o) ? (n = "",
        e != null && (n = e.replace(td, "$&/") + "/"),
        Ji(o, t, n, "", function(u) {
            return u
        })) : o != null && (ju(o) && (o = py(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(td, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    ed(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + ja(i, a);
            s += Ji(i, t, n, l, o)
        }
    else if (l = fy(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(i = e.next()).done; )
            i = i.value,
            l = r + ja(i, a++),
            s += Ji(i, t, n, l, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function Pi(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Ji(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function my(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var ze = {
    current: null
}
  , es = {
    transition: null
}
  , gy = {
    ReactCurrentDispatcher: ze,
    ReactCurrentBatchConfig: es,
    ReactCurrentOwner: Ru
};
function Ep() {
    throw Error("act(...) is not supported in production builds of React.")
}
G.Children = {
    map: Pi,
    forEach: function(e, t, n) {
        Pi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Pi(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Pi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ju(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
G.Component = co;
G.Fragment = ry;
G.Profiler = iy;
G.PureComponent = Pu;
G.StrictMode = oy;
G.Suspense = uy;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gy;
G.act = Ep;
G.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = gp({}, e.props)
      , o = e.key
      , i = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        s = Ru.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            xp.call(t, l) && !wp.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: hi,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
;
G.createContext = function(e) {
    return e = {
        $$typeof: ay,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: sy,
        _context: e
    },
    e.Consumer = e
}
;
G.createElement = Sp;
G.createFactory = function(e) {
    var t = Sp.bind(null, e);
    return t.type = e,
    t
}
;
G.createRef = function() {
    return {
        current: null
    }
}
;
G.forwardRef = function(e) {
    return {
        $$typeof: ly,
        render: e
    }
}
;
G.isValidElement = ju;
G.lazy = function(e) {
    return {
        $$typeof: dy,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: my
    }
}
;
G.memo = function(e, t) {
    return {
        $$typeof: cy,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
G.startTransition = function(e) {
    var t = es.transition;
    es.transition = {};
    try {
        e()
    } finally {
        es.transition = t
    }
}
;
G.unstable_act = Ep;
G.useCallback = function(e, t) {
    return ze.current.useCallback(e, t)
}
;
G.useContext = function(e) {
    return ze.current.useContext(e)
}
;
G.useDebugValue = function() {}
;
G.useDeferredValue = function(e) {
    return ze.current.useDeferredValue(e)
}
;
G.useEffect = function(e, t) {
    return ze.current.useEffect(e, t)
}
;
G.useId = function() {
    return ze.current.useId()
}
;
G.useImperativeHandle = function(e, t, n) {
    return ze.current.useImperativeHandle(e, t, n)
}
;
G.useInsertionEffect = function(e, t) {
    return ze.current.useInsertionEffect(e, t)
}
;
G.useLayoutEffect = function(e, t) {
    return ze.current.useLayoutEffect(e, t)
}
;
G.useMemo = function(e, t) {
    return ze.current.useMemo(e, t)
}
;
G.useReducer = function(e, t, n) {
    return ze.current.useReducer(e, t, n)
}
;
G.useRef = function(e) {
    return ze.current.useRef(e)
}
;
G.useState = function(e) {
    return ze.current.useState(e)
}
;
G.useSyncExternalStore = function(e, t, n) {
    return ze.current.useSyncExternalStore(e, t, n)
}
;
G.useTransition = function() {
    return ze.current.useTransition()
}
;
G.version = "18.3.1";
hp.exports = G;
var y = hp.exports;
const O = fp(y)
  , Ou = ty({
    __proto__: null,
    default: O
}, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vy = y
  , yy = Symbol.for("react.element")
  , xy = Symbol.for("react.fragment")
  , wy = Object.prototype.hasOwnProperty
  , Sy = vy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Ey = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function bp(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        wy.call(t, r) && !Ey.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: yy,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Sy.current
    }
}
Gs.Fragment = xy;
Gs.jsx = bp;
Gs.jsxs = bp;
pp.exports = Gs;
var p = pp.exports
  , Cp = {
    exports: {}
}
  , et = {}
  , kp = {
    exports: {}
}
  , Np = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, T) {
        var D = P.length;
        P.push(T);
        e: for (; 0 < D; ) {
            var W = D - 1 >>> 1
              , F = P[W];
            if (0 < o(F, T))
                P[W] = T,
                P[D] = F,
                D = W;
            else
                break e
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0]
    }
    function r(P) {
        if (P.length === 0)
            return null;
        var T = P[0]
          , D = P.pop();
        if (D !== T) {
            P[0] = D;
            e: for (var W = 0, F = P.length, K = F >>> 1; W < K; ) {
                var q = 2 * (W + 1) - 1
                  , me = P[q]
                  , Ne = q + 1
                  , J = P[Ne];
                if (0 > o(me, D))
                    Ne < F && 0 > o(J, me) ? (P[W] = J,
                    P[Ne] = D,
                    W = Ne) : (P[W] = me,
                    P[q] = D,
                    W = q);
                else if (Ne < F && 0 > o(J, D))
                    P[W] = J,
                    P[Ne] = D,
                    W = Ne;
                else
                    break e
            }
        }
        return T
    }
    function o(P, T) {
        var D = P.sortIndex - T.sortIndex;
        return D !== 0 ? D : P.id - T.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , f = null
      , g = 3
      , d = !1
      , S = !1
      , m = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , v = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function x(P) {
        for (var T = n(u); T !== null; ) {
            if (T.callback === null)
                r(u);
            else if (T.startTime <= P)
                r(u),
                T.sortIndex = T.expirationTime,
                t(l, T);
            else
                break;
            T = n(u)
        }
    }
    function E(P) {
        if (m = !1,
        x(P),
        !S)
            if (n(l) !== null)
                S = !0,
                $(b);
            else {
                var T = n(u);
                T !== null && V(E, T.startTime - P)
            }
    }
    function b(P, T) {
        S = !1,
        m && (m = !1,
        v(R),
        R = -1),
        d = !0;
        var D = g;
        try {
            for (x(T),
            f = n(l); f !== null && (!(f.expirationTime > T) || P && !z()); ) {
                var W = f.callback;
                if (typeof W == "function") {
                    f.callback = null,
                    g = f.priorityLevel;
                    var F = W(f.expirationTime <= T);
                    T = e.unstable_now(),
                    typeof F == "function" ? f.callback = F : f === n(l) && r(l),
                    x(T)
                } else
                    r(l);
                f = n(l)
            }
            if (f !== null)
                var K = !0;
            else {
                var q = n(u);
                q !== null && V(E, q.startTime - T),
                K = !1
            }
            return K
        } finally {
            f = null,
            g = D,
            d = !1
        }
    }
    var C = !1
      , k = null
      , R = -1
      , A = 5
      , _ = -1;
    function z() {
        return !(e.unstable_now() - _ < A)
    }
    function I() {
        if (k !== null) {
            var P = e.unstable_now();
            _ = P;
            var T = !0;
            try {
                T = k(!0, P)
            } finally {
                T ? Q() : (C = !1,
                k = null)
            }
        } else
            C = !1
    }
    var Q;
    if (typeof h == "function")
        Q = function() {
            h(I)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var M = new MessageChannel
          , Y = M.port2;
        M.port1.onmessage = I,
        Q = function() {
            Y.postMessage(null)
        }
    } else
        Q = function() {
            w(I, 0)
        }
        ;
    function $(P) {
        k = P,
        C || (C = !0,
        Q())
    }
    function V(P, T) {
        R = w(function() {
            P(e.unstable_now())
        }, T)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(P) {
        P.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        S || d || (S = !0,
        $(b))
    }
    ,
    e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < P ? Math.floor(1e3 / P) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return g
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(P) {
        switch (g) {
        case 1:
        case 2:
        case 3:
            var T = 3;
            break;
        default:
            T = g
        }
        var D = g;
        g = T;
        try {
            return P()
        } finally {
            g = D
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(P, T) {
        switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            P = 3
        }
        var D = g;
        g = P;
        try {
            return T()
        } finally {
            g = D
        }
    }
    ,
    e.unstable_scheduleCallback = function(P, T, D) {
        var W = e.unstable_now();
        switch (typeof D == "object" && D !== null ? (D = D.delay,
        D = typeof D == "number" && 0 < D ? W + D : W) : D = W,
        P) {
        case 1:
            var F = -1;
            break;
        case 2:
            F = 250;
            break;
        case 5:
            F = 1073741823;
            break;
        case 4:
            F = 1e4;
            break;
        default:
            F = 5e3
        }
        return F = D + F,
        P = {
            id: c++,
            callback: T,
            priorityLevel: P,
            startTime: D,
            expirationTime: F,
            sortIndex: -1
        },
        D > W ? (P.sortIndex = D,
        t(u, P),
        n(l) === null && P === n(u) && (m ? (v(R),
        R = -1) : m = !0,
        V(E, D - W))) : (P.sortIndex = F,
        t(l, P),
        S || d || (S = !0,
        $(b))),
        P
    }
    ,
    e.unstable_shouldYield = z,
    e.unstable_wrapCallback = function(P) {
        var T = g;
        return function() {
            var D = g;
            g = T;
            try {
                return P.apply(this, arguments)
            } finally {
                g = D
            }
        }
    }
}
)(Np);
kp.exports = Np;
var by = kp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cy = y
  , Je = by;
function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Pp = new Set
  , Wo = {};
function pr(e, t) {
    to(e, t),
    to(e + "Capture", t)
}
function to(e, t) {
    for (Wo[e] = t,
    e = 0; e < t.length; e++)
        Pp.add(t[e])
}
var qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , yl = Object.prototype.hasOwnProperty
  , ky = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , nd = {}
  , rd = {};
function Ny(e) {
    return yl.call(rd, e) ? !0 : yl.call(nd, e) ? !1 : ky.test(e) ? rd[e] = !0 : (nd[e] = !0,
    !1)
}
function Py(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Ty(e, t, n, r) {
    if (t === null || typeof t > "u" || Py(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function $e(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ce[e] = new $e(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ce[t] = new $e(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ce[e] = new $e(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ce[e] = new $e(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ce[e] = new $e(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ce[e] = new $e(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ce[e] = new $e(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ce[e] = new $e(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ce[e] = new $e(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var _u = /[\-:]([a-z])/g;
function Au(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(_u, Au);
    Ce[t] = new $e(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(_u, Au);
    Ce[t] = new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(_u, Au);
    Ce[t] = new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ce[e] = new $e(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ce.xlinkHref = new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ce[e] = new $e(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Mu(e, t, n, r) {
    var o = Ce.hasOwnProperty(t) ? Ce[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ty(t, n, o, r) && (n = null),
    r || o === null ? Ny(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var rn = Cy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Ti = Symbol.for("react.element")
  , kr = Symbol.for("react.portal")
  , Nr = Symbol.for("react.fragment")
  , Du = Symbol.for("react.strict_mode")
  , xl = Symbol.for("react.profiler")
  , Tp = Symbol.for("react.provider")
  , Rp = Symbol.for("react.context")
  , Lu = Symbol.for("react.forward_ref")
  , wl = Symbol.for("react.suspense")
  , Sl = Symbol.for("react.suspense_list")
  , Iu = Symbol.for("react.memo")
  , gn = Symbol.for("react.lazy")
  , jp = Symbol.for("react.offscreen")
  , od = Symbol.iterator;
function wo(e) {
    return e === null || typeof e != "object" ? null : (e = od && e[od] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var de = Object.assign, Oa;
function jo(e) {
    if (Oa === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Oa = t && t[1] || ""
        }
    return `
` + Oa + e
}
var _a = !1;
function Aa(e, t) {
    if (!e || _a)
        return "";
    _a = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a]; )
                a--;
            for (; 1 <= s && 0 <= a; s--,
            a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                            a--,
                            0 > a || o[s] !== i[a]) {
                                var l = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        _a = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? jo(e) : ""
}
function Ry(e) {
    switch (e.tag) {
    case 5:
        return jo(e.type);
    case 16:
        return jo("Lazy");
    case 13:
        return jo("Suspense");
    case 19:
        return jo("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Aa(e.type, !1),
        e;
    case 11:
        return e = Aa(e.type.render, !1),
        e;
    case 1:
        return e = Aa(e.type, !0),
        e;
    default:
        return ""
    }
}
function El(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Nr:
        return "Fragment";
    case kr:
        return "Portal";
    case xl:
        return "Profiler";
    case Du:
        return "StrictMode";
    case wl:
        return "Suspense";
    case Sl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Rp:
            return (e.displayName || "Context") + ".Consumer";
        case Tp:
            return (e._context.displayName || "Context") + ".Provider";
        case Lu:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Iu:
            return t = e.displayName || null,
            t !== null ? t : El(e.type) || "Memo";
        case gn:
            t = e._payload,
            e = e._init;
            try {
                return El(e(t))
            } catch {}
        }
    return null
}
function jy(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return El(t);
    case 8:
        return t === Du ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function In(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Op(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Oy(e) {
    var t = Op(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Ri(e) {
    e._valueTracker || (e._valueTracker = Oy(e))
}
function _p(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Op(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function gs(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function bl(e, t) {
    var n = t.checked;
    return de({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function id(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = In(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Ap(e, t) {
    t = t.checked,
    t != null && Mu(e, "checked", t, !1)
}
function Cl(e, t) {
    Ap(e, t);
    var n = In(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? kl(e, t.type, n) : t.hasOwnProperty("defaultValue") && kl(e, t.type, In(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function sd(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function kl(e, t, n) {
    (t !== "number" || gs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Oo = Array.isArray;
function Ir(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + In(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Nl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(j(91));
    return de({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function ad(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(j(92));
            if (Oo(n)) {
                if (1 < n.length)
                    throw Error(j(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: In(n)
    }
}
function Mp(e, t) {
    var n = In(t.value)
      , r = In(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function ld(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Dp(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Pl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Dp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ji, Lp = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (ji = ji || document.createElement("div"),
        ji.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = ji.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ho(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Mo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , _y = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mo).forEach(function(e) {
    _y.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Mo[t] = Mo[e]
    })
});
function Ip(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Mo.hasOwnProperty(e) && Mo[e] ? ("" + t).trim() : t + "px"
}
function Fp(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = Ip(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var Ay = de({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Tl(e, t) {
    if (t) {
        if (Ay[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(j(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(j(62))
    }
}
function Rl(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var jl = null;
function Fu(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Ol = null
  , Fr = null
  , zr = null;
function ud(e) {
    if (e = vi(e)) {
        if (typeof Ol != "function")
            throw Error(j(280));
        var t = e.stateNode;
        t && (t = Js(t),
        Ol(e.stateNode, e.type, t))
    }
}
function zp(e) {
    Fr ? zr ? zr.push(e) : zr = [e] : Fr = e
}
function $p() {
    if (Fr) {
        var e = Fr
          , t = zr;
        if (zr = Fr = null,
        ud(e),
        t)
            for (e = 0; e < t.length; e++)
                ud(t[e])
    }
}
function Bp(e, t) {
    return e(t)
}
function Up() {}
var Ma = !1;
function Vp(e, t, n) {
    if (Ma)
        return e(t, n);
    Ma = !0;
    try {
        return Bp(e, t, n)
    } finally {
        Ma = !1,
        (Fr !== null || zr !== null) && (Up(),
        $p())
    }
}
function Qo(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Js(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(j(231, t, typeof n));
    return n
}
var _l = !1;
if (qt)
    try {
        var So = {};
        Object.defineProperty(So, "passive", {
            get: function() {
                _l = !0
            }
        }),
        window.addEventListener("test", So, So),
        window.removeEventListener("test", So, So)
    } catch {
        _l = !1
    }
function My(e, t, n, r, o, i, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Do = !1
  , vs = null
  , ys = !1
  , Al = null
  , Dy = {
    onError: function(e) {
        Do = !0,
        vs = e
    }
};
function Ly(e, t, n, r, o, i, s, a, l) {
    Do = !1,
    vs = null,
    My.apply(Dy, arguments)
}
function Iy(e, t, n, r, o, i, s, a, l) {
    if (Ly.apply(this, arguments),
    Do) {
        if (Do) {
            var u = vs;
            Do = !1,
            vs = null
        } else
            throw Error(j(198));
        ys || (ys = !0,
        Al = u)
    }
}
function hr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Wp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function cd(e) {
    if (hr(e) !== e)
        throw Error(j(188))
}
function Fy(e) {
    var t = e.alternate;
    if (!t) {
        if (t = hr(e),
        t === null)
            throw Error(j(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return cd(o),
                    e;
                if (i === r)
                    return cd(o),
                    t;
                i = i.sibling
            }
            throw Error(j(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var s = !1, a = o.child; a; ) {
                if (a === n) {
                    s = !0,
                    n = o,
                    r = i;
                    break
                }
                if (a === r) {
                    s = !0,
                    r = o,
                    n = i;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        s = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (a === r) {
                        s = !0,
                        r = i,
                        n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(j(189))
            }
        }
        if (n.alternate !== r)
            throw Error(j(190))
    }
    if (n.tag !== 3)
        throw Error(j(188));
    return n.stateNode.current === n ? e : t
}
function Hp(e) {
    return e = Fy(e),
    e !== null ? Qp(e) : null
}
function Qp(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Qp(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Kp = Je.unstable_scheduleCallback
  , dd = Je.unstable_cancelCallback
  , zy = Je.unstable_shouldYield
  , $y = Je.unstable_requestPaint
  , he = Je.unstable_now
  , By = Je.unstable_getCurrentPriorityLevel
  , zu = Je.unstable_ImmediatePriority
  , Gp = Je.unstable_UserBlockingPriority
  , xs = Je.unstable_NormalPriority
  , Uy = Je.unstable_LowPriority
  , Yp = Je.unstable_IdlePriority
  , Ys = null
  , Dt = null;
function Vy(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function")
        try {
            Dt.onCommitFiberRoot(Ys, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var St = Math.clz32 ? Math.clz32 : Qy
  , Wy = Math.log
  , Hy = Math.LN2;
function Qy(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Wy(e) / Hy | 0) | 0
}
var Oi = 64
  , _i = 4194304;
function _o(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function ws(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var a = s & ~o;
        a !== 0 ? r = _o(a) : (i &= s,
        i !== 0 && (r = _o(i)))
    } else
        s = n & ~o,
        s !== 0 ? r = _o(s) : i !== 0 && (r = _o(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - St(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function Ky(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Gy(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - St(i)
          , a = 1 << s
          , l = o[s];
        l === -1 ? (!(a & n) || a & r) && (o[s] = Ky(a, t)) : l <= t && (e.expiredLanes |= a),
        i &= ~a
    }
}
function Ml(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function qp() {
    var e = Oi;
    return Oi <<= 1,
    !(Oi & 4194240) && (Oi = 64),
    e
}
function Da(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function mi(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - St(t),
    e[t] = n
}
function Yy(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - St(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function $u(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - St(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var ee = 0;
function Xp(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Zp, Bu, Jp, eh, th, Dl = !1, Ai = [], Tn = null, Rn = null, jn = null, Ko = new Map, Go = new Map, yn = [], qy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function fd(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Tn = null;
        break;
    case "dragenter":
    case "dragleave":
        Rn = null;
        break;
    case "mouseover":
    case "mouseout":
        jn = null;
        break;
    case "pointerover":
    case "pointerout":
        Ko.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Go.delete(t.pointerId)
    }
}
function Eo(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = vi(t),
    t !== null && Bu(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function Xy(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return Tn = Eo(Tn, e, t, n, r, o),
        !0;
    case "dragenter":
        return Rn = Eo(Rn, e, t, n, r, o),
        !0;
    case "mouseover":
        return jn = Eo(jn, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return Ko.set(i, Eo(Ko.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        Go.set(i, Eo(Go.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function nh(e) {
    var t = Yn(e.target);
    if (t !== null) {
        var n = hr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Wp(n),
                t !== null) {
                    e.blockedOn = t,
                    th(e.priority, function() {
                        Jp(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ts(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Ll(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            jl = r,
            n.target.dispatchEvent(r),
            jl = null
        } else
            return t = vi(n),
            t !== null && Bu(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function pd(e, t, n) {
    ts(e) && n.delete(t)
}
function Zy() {
    Dl = !1,
    Tn !== null && ts(Tn) && (Tn = null),
    Rn !== null && ts(Rn) && (Rn = null),
    jn !== null && ts(jn) && (jn = null),
    Ko.forEach(pd),
    Go.forEach(pd)
}
function bo(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Dl || (Dl = !0,
    Je.unstable_scheduleCallback(Je.unstable_NormalPriority, Zy)))
}
function Yo(e) {
    function t(o) {
        return bo(o, e)
    }
    if (0 < Ai.length) {
        bo(Ai[0], e);
        for (var n = 1; n < Ai.length; n++) {
            var r = Ai[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Tn !== null && bo(Tn, e),
    Rn !== null && bo(Rn, e),
    jn !== null && bo(jn, e),
    Ko.forEach(t),
    Go.forEach(t),
    n = 0; n < yn.length; n++)
        r = yn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < yn.length && (n = yn[0],
    n.blockedOn === null); )
        nh(n),
        n.blockedOn === null && yn.shift()
}
var $r = rn.ReactCurrentBatchConfig
  , Ss = !0;
function Jy(e, t, n, r) {
    var o = ee
      , i = $r.transition;
    $r.transition = null;
    try {
        ee = 1,
        Uu(e, t, n, r)
    } finally {
        ee = o,
        $r.transition = i
    }
}
function e0(e, t, n, r) {
    var o = ee
      , i = $r.transition;
    $r.transition = null;
    try {
        ee = 4,
        Uu(e, t, n, r)
    } finally {
        ee = o,
        $r.transition = i
    }
}
function Uu(e, t, n, r) {
    if (Ss) {
        var o = Ll(e, t, n, r);
        if (o === null)
            Ha(e, t, r, Es, n),
            fd(e, r);
        else if (Xy(o, e, t, n, r))
            r.stopPropagation();
        else if (fd(e, r),
        t & 4 && -1 < qy.indexOf(e)) {
            for (; o !== null; ) {
                var i = vi(o);
                if (i !== null && Zp(i),
                i = Ll(e, t, n, r),
                i === null && Ha(e, t, r, Es, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            Ha(e, t, r, null, n)
    }
}
var Es = null;
function Ll(e, t, n, r) {
    if (Es = null,
    e = Fu(r),
    e = Yn(e),
    e !== null)
        if (t = hr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Wp(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Es = e,
    null
}
function rh(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (By()) {
        case zu:
            return 1;
        case Gp:
            return 4;
        case xs:
        case Uy:
            return 16;
        case Yp:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var kn = null
  , Vu = null
  , ns = null;
function oh() {
    if (ns)
        return ns;
    var e, t = Vu, n = t.length, r, o = "value"in kn ? kn.value : kn.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return ns = o.slice(e, 1 < r ? 1 - r : void 0)
}
function rs(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Mi() {
    return !0
}
function hd() {
    return !1
}
function tt(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Mi : hd,
        this.isPropagationStopped = hd,
        this
    }
    return de(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Mi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Mi)
        },
        persist: function() {},
        isPersistent: Mi
    }),
    t
}
var fo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Wu = tt(fo), gi = de({}, fo, {
    view: 0,
    detail: 0
}), t0 = tt(gi), La, Ia, Co, qs = de({}, gi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Hu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Co && (Co && e.type === "mousemove" ? (La = e.screenX - Co.screenX,
        Ia = e.screenY - Co.screenY) : Ia = La = 0,
        Co = e),
        La)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Ia
    }
}), md = tt(qs), n0 = de({}, qs, {
    dataTransfer: 0
}), r0 = tt(n0), o0 = de({}, gi, {
    relatedTarget: 0
}), Fa = tt(o0), i0 = de({}, fo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), s0 = tt(i0), a0 = de({}, fo, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), l0 = tt(a0), u0 = de({}, fo, {
    data: 0
}), gd = tt(u0), c0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, d0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, f0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function p0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = f0[e]) ? !!t[e] : !1
}
function Hu() {
    return p0
}
var h0 = de({}, gi, {
    key: function(e) {
        if (e.key) {
            var t = c0[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = rs(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? d0[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Hu,
    charCode: function(e) {
        return e.type === "keypress" ? rs(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? rs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , m0 = tt(h0)
  , g0 = de({}, qs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , vd = tt(g0)
  , v0 = de({}, gi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Hu
})
  , y0 = tt(v0)
  , x0 = de({}, fo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , w0 = tt(x0)
  , S0 = de({}, qs, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , E0 = tt(S0)
  , b0 = [9, 13, 27, 32]
  , Qu = qt && "CompositionEvent"in window
  , Lo = null;
qt && "documentMode"in document && (Lo = document.documentMode);
var C0 = qt && "TextEvent"in window && !Lo
  , ih = qt && (!Qu || Lo && 8 < Lo && 11 >= Lo)
  , yd = " "
  , xd = !1;
function sh(e, t) {
    switch (e) {
    case "keyup":
        return b0.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function ah(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Pr = !1;
function k0(e, t) {
    switch (e) {
    case "compositionend":
        return ah(t);
    case "keypress":
        return t.which !== 32 ? null : (xd = !0,
        yd);
    case "textInput":
        return e = t.data,
        e === yd && xd ? null : e;
    default:
        return null
    }
}
function N0(e, t) {
    if (Pr)
        return e === "compositionend" || !Qu && sh(e, t) ? (e = oh(),
        ns = Vu = kn = null,
        Pr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return ih && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var P0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function wd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!P0[e.type] : t === "textarea"
}
function lh(e, t, n, r) {
    zp(r),
    t = bs(t, "onChange"),
    0 < t.length && (n = new Wu("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Io = null
  , qo = null;
function T0(e) {
    xh(e, 0)
}
function Xs(e) {
    var t = jr(e);
    if (_p(t))
        return e
}
function R0(e, t) {
    if (e === "change")
        return t
}
var uh = !1;
if (qt) {
    var za;
    if (qt) {
        var $a = "oninput"in document;
        if (!$a) {
            var Sd = document.createElement("div");
            Sd.setAttribute("oninput", "return;"),
            $a = typeof Sd.oninput == "function"
        }
        za = $a
    } else
        za = !1;
    uh = za && (!document.documentMode || 9 < document.documentMode)
}
function Ed() {
    Io && (Io.detachEvent("onpropertychange", ch),
    qo = Io = null)
}
function ch(e) {
    if (e.propertyName === "value" && Xs(qo)) {
        var t = [];
        lh(t, qo, e, Fu(e)),
        Vp(T0, t)
    }
}
function j0(e, t, n) {
    e === "focusin" ? (Ed(),
    Io = t,
    qo = n,
    Io.attachEvent("onpropertychange", ch)) : e === "focusout" && Ed()
}
function O0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Xs(qo)
}
function _0(e, t) {
    if (e === "click")
        return Xs(t)
}
function A0(e, t) {
    if (e === "input" || e === "change")
        return Xs(t)
}
function M0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var bt = typeof Object.is == "function" ? Object.is : M0;
function Xo(e, t) {
    if (bt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!yl.call(t, o) || !bt(e[o], t[o]))
            return !1
    }
    return !0
}
function bd(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Cd(e, t) {
    var n = bd(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = bd(n)
    }
}
function dh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? dh(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function fh() {
    for (var e = window, t = gs(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = gs(e.document)
    }
    return t
}
function Ku(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function D0(e) {
    var t = fh()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && dh(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ku(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = Cd(n, i);
                var s = Cd(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var L0 = qt && "documentMode"in document && 11 >= document.documentMode
  , Tr = null
  , Il = null
  , Fo = null
  , Fl = !1;
function kd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Fl || Tr == null || Tr !== gs(r) || (r = Tr,
    "selectionStart"in r && Ku(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Fo && Xo(Fo, r) || (Fo = r,
    r = bs(Il, "onSelect"),
    0 < r.length && (t = new Wu("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Tr)))
}
function Di(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Rr = {
    animationend: Di("Animation", "AnimationEnd"),
    animationiteration: Di("Animation", "AnimationIteration"),
    animationstart: Di("Animation", "AnimationStart"),
    transitionend: Di("Transition", "TransitionEnd")
}
  , Ba = {}
  , ph = {};
qt && (ph = document.createElement("div").style,
"AnimationEvent"in window || (delete Rr.animationend.animation,
delete Rr.animationiteration.animation,
delete Rr.animationstart.animation),
"TransitionEvent"in window || delete Rr.transitionend.transition);
function Zs(e) {
    if (Ba[e])
        return Ba[e];
    if (!Rr[e])
        return e;
    var t = Rr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in ph)
            return Ba[e] = t[n];
    return e
}
var hh = Zs("animationend")
  , mh = Zs("animationiteration")
  , gh = Zs("animationstart")
  , vh = Zs("transitionend")
  , yh = new Map
  , Nd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Bn(e, t) {
    yh.set(e, t),
    pr(t, [e])
}
for (var Ua = 0; Ua < Nd.length; Ua++) {
    var Va = Nd[Ua]
      , I0 = Va.toLowerCase()
      , F0 = Va[0].toUpperCase() + Va.slice(1);
    Bn(I0, "on" + F0)
}
Bn(hh, "onAnimationEnd");
Bn(mh, "onAnimationIteration");
Bn(gh, "onAnimationStart");
Bn("dblclick", "onDoubleClick");
Bn("focusin", "onFocus");
Bn("focusout", "onBlur");
Bn(vh, "onTransitionEnd");
to("onMouseEnter", ["mouseout", "mouseover"]);
to("onMouseLeave", ["mouseout", "mouseover"]);
to("onPointerEnter", ["pointerout", "pointerover"]);
to("onPointerLeave", ["pointerout", "pointerover"]);
pr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
pr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
pr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
pr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ao = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , z0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));
function Pd(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Iy(r, t, void 0, e),
    e.currentTarget = null
}
function xh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== i && o.isPropagationStopped())
                        break e;
                    Pd(o, a, u),
                    i = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== i && o.isPropagationStopped())
                        break e;
                    Pd(o, a, u),
                    i = l
                }
        }
    }
    if (ys)
        throw e = Al,
        ys = !1,
        Al = null,
        e
}
function oe(e, t) {
    var n = t[Vl];
    n === void 0 && (n = t[Vl] = new Set);
    var r = e + "__bubble";
    n.has(r) || (wh(t, e, 2, !1),
    n.add(r))
}
function Wa(e, t, n) {
    var r = 0;
    t && (r |= 4),
    wh(n, e, r, t)
}
var Li = "_reactListening" + Math.random().toString(36).slice(2);
function Zo(e) {
    if (!e[Li]) {
        e[Li] = !0,
        Pp.forEach(function(n) {
            n !== "selectionchange" && (z0.has(n) || Wa(n, !1, e),
            Wa(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Li] || (t[Li] = !0,
        Wa("selectionchange", !1, t))
    }
}
function wh(e, t, n, r) {
    switch (rh(t)) {
    case 1:
        var o = Jy;
        break;
    case 4:
        o = e0;
        break;
    default:
        o = Uu
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !_l || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Ha(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || a.nodeType === 8 && a.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                        l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; a !== null; ) {
                    if (s = Yn(a),
                    s === null)
                        return;
                    if (l = s.tag,
                    l === 5 || l === 6) {
                        r = i = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    Vp(function() {
        var u = i
          , c = Fu(n)
          , f = [];
        e: {
            var g = yh.get(e);
            if (g !== void 0) {
                var d = Wu
                  , S = e;
                switch (e) {
                case "keypress":
                    if (rs(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    d = m0;
                    break;
                case "focusin":
                    S = "focus",
                    d = Fa;
                    break;
                case "focusout":
                    S = "blur",
                    d = Fa;
                    break;
                case "beforeblur":
                case "afterblur":
                    d = Fa;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    d = md;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    d = r0;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    d = y0;
                    break;
                case hh:
                case mh:
                case gh:
                    d = s0;
                    break;
                case vh:
                    d = w0;
                    break;
                case "scroll":
                    d = t0;
                    break;
                case "wheel":
                    d = E0;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    d = l0;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    d = vd
                }
                var m = (t & 4) !== 0
                  , w = !m && e === "scroll"
                  , v = m ? g !== null ? g + "Capture" : null : g;
                m = [];
                for (var h = u, x; h !== null; ) {
                    x = h;
                    var E = x.stateNode;
                    if (x.tag === 5 && E !== null && (x = E,
                    v !== null && (E = Qo(h, v),
                    E != null && m.push(Jo(h, E, x)))),
                    w)
                        break;
                    h = h.return
                }
                0 < m.length && (g = new d(g,S,null,n,c),
                f.push({
                    event: g,
                    listeners: m
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (g = e === "mouseover" || e === "pointerover",
                d = e === "mouseout" || e === "pointerout",
                g && n !== jl && (S = n.relatedTarget || n.fromElement) && (Yn(S) || S[Xt]))
                    break e;
                if ((d || g) && (g = c.window === c ? c : (g = c.ownerDocument) ? g.defaultView || g.parentWindow : window,
                d ? (S = n.relatedTarget || n.toElement,
                d = u,
                S = S ? Yn(S) : null,
                S !== null && (w = hr(S),
                S !== w || S.tag !== 5 && S.tag !== 6) && (S = null)) : (d = null,
                S = u),
                d !== S)) {
                    if (m = md,
                    E = "onMouseLeave",
                    v = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (m = vd,
                    E = "onPointerLeave",
                    v = "onPointerEnter",
                    h = "pointer"),
                    w = d == null ? g : jr(d),
                    x = S == null ? g : jr(S),
                    g = new m(E,h + "leave",d,n,c),
                    g.target = w,
                    g.relatedTarget = x,
                    E = null,
                    Yn(c) === u && (m = new m(v,h + "enter",S,n,c),
                    m.target = x,
                    m.relatedTarget = w,
                    E = m),
                    w = E,
                    d && S)
                        t: {
                            for (m = d,
                            v = S,
                            h = 0,
                            x = m; x; x = Sr(x))
                                h++;
                            for (x = 0,
                            E = v; E; E = Sr(E))
                                x++;
                            for (; 0 < h - x; )
                                m = Sr(m),
                                h--;
                            for (; 0 < x - h; )
                                v = Sr(v),
                                x--;
                            for (; h--; ) {
                                if (m === v || v !== null && m === v.alternate)
                                    break t;
                                m = Sr(m),
                                v = Sr(v)
                            }
                            m = null
                        }
                    else
                        m = null;
                    d !== null && Td(f, g, d, m, !1),
                    S !== null && w !== null && Td(f, w, S, m, !0)
                }
            }
            e: {
                if (g = u ? jr(u) : window,
                d = g.nodeName && g.nodeName.toLowerCase(),
                d === "select" || d === "input" && g.type === "file")
                    var b = R0;
                else if (wd(g))
                    if (uh)
                        b = A0;
                    else {
                        b = O0;
                        var C = j0
                    }
                else
                    (d = g.nodeName) && d.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (b = _0);
                if (b && (b = b(e, u))) {
                    lh(f, b, n, c);
                    break e
                }
                C && C(e, g, u),
                e === "focusout" && (C = g._wrapperState) && C.controlled && g.type === "number" && kl(g, "number", g.value)
            }
            switch (C = u ? jr(u) : window,
            e) {
            case "focusin":
                (wd(C) || C.contentEditable === "true") && (Tr = C,
                Il = u,
                Fo = null);
                break;
            case "focusout":
                Fo = Il = Tr = null;
                break;
            case "mousedown":
                Fl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Fl = !1,
                kd(f, n, c);
                break;
            case "selectionchange":
                if (L0)
                    break;
            case "keydown":
            case "keyup":
                kd(f, n, c)
            }
            var k;
            if (Qu)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var R = "onCompositionStart";
                        break e;
                    case "compositionend":
                        R = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        R = "onCompositionUpdate";
                        break e
                    }
                    R = void 0
                }
            else
                Pr ? sh(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
            R && (ih && n.locale !== "ko" && (Pr || R !== "onCompositionStart" ? R === "onCompositionEnd" && Pr && (k = oh()) : (kn = c,
            Vu = "value"in kn ? kn.value : kn.textContent,
            Pr = !0)),
            C = bs(u, R),
            0 < C.length && (R = new gd(R,e,null,n,c),
            f.push({
                event: R,
                listeners: C
            }),
            k ? R.data = k : (k = ah(n),
            k !== null && (R.data = k)))),
            (k = C0 ? k0(e, n) : N0(e, n)) && (u = bs(u, "onBeforeInput"),
            0 < u.length && (c = new gd("onBeforeInput","beforeinput",null,n,c),
            f.push({
                event: c,
                listeners: u
            }),
            c.data = k))
        }
        xh(f, t)
    })
}
function Jo(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function bs(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = Qo(e, n),
        i != null && r.unshift(Jo(e, i, o)),
        i = Qo(e, t),
        i != null && r.push(Jo(e, i, o))),
        e = e.return
    }
    return r
}
function Sr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Td(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        o ? (l = Qo(n, i),
        l != null && s.unshift(Jo(n, l, a))) : o || (l = Qo(n, i),
        l != null && s.push(Jo(n, l, a)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var $0 = /\r\n?/g
  , B0 = /\u0000|\uFFFD/g;
function Rd(e) {
    return (typeof e == "string" ? e : "" + e).replace($0, `
`).replace(B0, "")
}
function Ii(e, t, n) {
    if (t = Rd(t),
    Rd(e) !== t && n)
        throw Error(j(425))
}
function Cs() {}
var zl = null
  , $l = null;
function Bl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ul = typeof setTimeout == "function" ? setTimeout : void 0
  , U0 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , jd = typeof Promise == "function" ? Promise : void 0
  , V0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof jd < "u" ? function(e) {
    return jd.resolve(null).then(e).catch(W0)
}
: Ul;
function W0(e) {
    setTimeout(function() {
        throw e
    })
}
function Qa(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    Yo(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Yo(t)
}
function On(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Od(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var po = Math.random().toString(36).slice(2)
  , _t = "__reactFiber$" + po
  , ei = "__reactProps$" + po
  , Xt = "__reactContainer$" + po
  , Vl = "__reactEvents$" + po
  , H0 = "__reactListeners$" + po
  , Q0 = "__reactHandles$" + po;
function Yn(e) {
    var t = e[_t];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Xt] || n[_t]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Od(e); e !== null; ) {
                    if (n = e[_t])
                        return n;
                    e = Od(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function vi(e) {
    return e = e[_t] || e[Xt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function jr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(j(33))
}
function Js(e) {
    return e[ei] || null
}
var Wl = []
  , Or = -1;
function Un(e) {
    return {
        current: e
    }
}
function ie(e) {
    0 > Or || (e.current = Wl[Or],
    Wl[Or] = null,
    Or--)
}
function ne(e, t) {
    Or++,
    Wl[Or] = e.current,
    e.current = t
}
var Fn = {}
  , _e = Un(Fn)
  , We = Un(!1)
  , sr = Fn;
function no(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Fn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function He(e) {
    return e = e.childContextTypes,
    e != null
}
function ks() {
    ie(We),
    ie(_e)
}
function _d(e, t, n) {
    if (_e.current !== Fn)
        throw Error(j(168));
    ne(_e, t),
    ne(We, n)
}
function Sh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(j(108, jy(e) || "Unknown", o));
    return de({}, n, r)
}
function Ns(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Fn,
    sr = _e.current,
    ne(_e, e),
    ne(We, We.current),
    !0
}
function Ad(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(j(169));
    n ? (e = Sh(e, t, sr),
    r.__reactInternalMemoizedMergedChildContext = e,
    ie(We),
    ie(_e),
    ne(_e, e)) : ie(We),
    ne(We, n)
}
var Wt = null
  , ea = !1
  , Ka = !1;
function Eh(e) {
    Wt === null ? Wt = [e] : Wt.push(e)
}
function K0(e) {
    ea = !0,
    Eh(e)
}
function Vn() {
    if (!Ka && Wt !== null) {
        Ka = !0;
        var e = 0
          , t = ee;
        try {
            var n = Wt;
            for (ee = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Wt = null,
            ea = !1
        } catch (o) {
            throw Wt !== null && (Wt = Wt.slice(e + 1)),
            Kp(zu, Vn),
            o
        } finally {
            ee = t,
            Ka = !1
        }
    }
    return null
}
var _r = []
  , Ar = 0
  , Ps = null
  , Ts = 0
  , ot = []
  , it = 0
  , ar = null
  , Qt = 1
  , Kt = "";
function Kn(e, t) {
    _r[Ar++] = Ts,
    _r[Ar++] = Ps,
    Ps = e,
    Ts = t
}
function bh(e, t, n) {
    ot[it++] = Qt,
    ot[it++] = Kt,
    ot[it++] = ar,
    ar = e;
    var r = Qt;
    e = Kt;
    var o = 32 - St(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - St(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        o -= s,
        Qt = 1 << 32 - St(t) + o | n << o | r,
        Kt = i + e
    } else
        Qt = 1 << i | n << o | r,
        Kt = e
}
function Gu(e) {
    e.return !== null && (Kn(e, 1),
    bh(e, 1, 0))
}
function Yu(e) {
    for (; e === Ps; )
        Ps = _r[--Ar],
        _r[Ar] = null,
        Ts = _r[--Ar],
        _r[Ar] = null;
    for (; e === ar; )
        ar = ot[--it],
        ot[it] = null,
        Kt = ot[--it],
        ot[it] = null,
        Qt = ot[--it],
        ot[it] = null
}
var Xe = null
  , qe = null
  , ae = !1
  , wt = null;
function Ch(e, t) {
    var n = st(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Md(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Xe = e,
        qe = On(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Xe = e,
        qe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = ar !== null ? {
            id: Qt,
            overflow: Kt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = st(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Xe = e,
        qe = null,
        !0) : !1;
    default:
        return !1
    }
}
function Hl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ql(e) {
    if (ae) {
        var t = qe;
        if (t) {
            var n = t;
            if (!Md(e, t)) {
                if (Hl(e))
                    throw Error(j(418));
                t = On(n.nextSibling);
                var r = Xe;
                t && Md(e, t) ? Ch(r, n) : (e.flags = e.flags & -4097 | 2,
                ae = !1,
                Xe = e)
            }
        } else {
            if (Hl(e))
                throw Error(j(418));
            e.flags = e.flags & -4097 | 2,
            ae = !1,
            Xe = e
        }
    }
}
function Dd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Xe = e
}
function Fi(e) {
    if (e !== Xe)
        return !1;
    if (!ae)
        return Dd(e),
        ae = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Bl(e.type, e.memoizedProps)),
    t && (t = qe)) {
        if (Hl(e))
            throw kh(),
            Error(j(418));
        for (; t; )
            Ch(e, t),
            t = On(t.nextSibling)
    }
    if (Dd(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(j(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            qe = On(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            qe = null
        }
    } else
        qe = Xe ? On(e.stateNode.nextSibling) : null;
    return !0
}
function kh() {
    for (var e = qe; e; )
        e = On(e.nextSibling)
}
function ro() {
    qe = Xe = null,
    ae = !1
}
function qu(e) {
    wt === null ? wt = [e] : wt.push(e)
}
var G0 = rn.ReactCurrentBatchConfig;
function ko(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(j(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(j(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var a = o.refs;
                s === null ? delete a[i] : a[i] = s
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(j(284));
        if (!n._owner)
            throw Error(j(290, e))
    }
    return e
}
function zi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Ld(e) {
    var t = e._init;
    return t(e._payload)
}
function Nh(e) {
    function t(v, h) {
        if (e) {
            var x = v.deletions;
            x === null ? (v.deletions = [h],
            v.flags |= 16) : x.push(h)
        }
    }
    function n(v, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(v, h),
            h = h.sibling;
        return null
    }
    function r(v, h) {
        for (v = new Map; h !== null; )
            h.key !== null ? v.set(h.key, h) : v.set(h.index, h),
            h = h.sibling;
        return v
    }
    function o(v, h) {
        return v = Dn(v, h),
        v.index = 0,
        v.sibling = null,
        v
    }
    function i(v, h, x) {
        return v.index = x,
        e ? (x = v.alternate,
        x !== null ? (x = x.index,
        x < h ? (v.flags |= 2,
        h) : x) : (v.flags |= 2,
        h)) : (v.flags |= 1048576,
        h)
    }
    function s(v) {
        return e && v.alternate === null && (v.flags |= 2),
        v
    }
    function a(v, h, x, E) {
        return h === null || h.tag !== 6 ? (h = el(x, v.mode, E),
        h.return = v,
        h) : (h = o(h, x),
        h.return = v,
        h)
    }
    function l(v, h, x, E) {
        var b = x.type;
        return b === Nr ? c(v, h, x.props.children, E, x.key) : h !== null && (h.elementType === b || typeof b == "object" && b !== null && b.$$typeof === gn && Ld(b) === h.type) ? (E = o(h, x.props),
        E.ref = ko(v, h, x),
        E.return = v,
        E) : (E = cs(x.type, x.key, x.props, null, v.mode, E),
        E.ref = ko(v, h, x),
        E.return = v,
        E)
    }
    function u(v, h, x, E) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== x.containerInfo || h.stateNode.implementation !== x.implementation ? (h = tl(x, v.mode, E),
        h.return = v,
        h) : (h = o(h, x.children || []),
        h.return = v,
        h)
    }
    function c(v, h, x, E, b) {
        return h === null || h.tag !== 7 ? (h = ir(x, v.mode, E, b),
        h.return = v,
        h) : (h = o(h, x),
        h.return = v,
        h)
    }
    function f(v, h, x) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = el("" + h, v.mode, x),
            h.return = v,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case Ti:
                return x = cs(h.type, h.key, h.props, null, v.mode, x),
                x.ref = ko(v, null, h),
                x.return = v,
                x;
            case kr:
                return h = tl(h, v.mode, x),
                h.return = v,
                h;
            case gn:
                var E = h._init;
                return f(v, E(h._payload), x)
            }
            if (Oo(h) || wo(h))
                return h = ir(h, v.mode, x, null),
                h.return = v,
                h;
            zi(v, h)
        }
        return null
    }
    function g(v, h, x, E) {
        var b = h !== null ? h.key : null;
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return b !== null ? null : a(v, h, "" + x, E);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case Ti:
                return x.key === b ? l(v, h, x, E) : null;
            case kr:
                return x.key === b ? u(v, h, x, E) : null;
            case gn:
                return b = x._init,
                g(v, h, b(x._payload), E)
            }
            if (Oo(x) || wo(x))
                return b !== null ? null : c(v, h, x, E, null);
            zi(v, x)
        }
        return null
    }
    function d(v, h, x, E, b) {
        if (typeof E == "string" && E !== "" || typeof E == "number")
            return v = v.get(x) || null,
            a(h, v, "" + E, b);
        if (typeof E == "object" && E !== null) {
            switch (E.$$typeof) {
            case Ti:
                return v = v.get(E.key === null ? x : E.key) || null,
                l(h, v, E, b);
            case kr:
                return v = v.get(E.key === null ? x : E.key) || null,
                u(h, v, E, b);
            case gn:
                var C = E._init;
                return d(v, h, x, C(E._payload), b)
            }
            if (Oo(E) || wo(E))
                return v = v.get(x) || null,
                c(h, v, E, b, null);
            zi(h, E)
        }
        return null
    }
    function S(v, h, x, E) {
        for (var b = null, C = null, k = h, R = h = 0, A = null; k !== null && R < x.length; R++) {
            k.index > R ? (A = k,
            k = null) : A = k.sibling;
            var _ = g(v, k, x[R], E);
            if (_ === null) {
                k === null && (k = A);
                break
            }
            e && k && _.alternate === null && t(v, k),
            h = i(_, h, R),
            C === null ? b = _ : C.sibling = _,
            C = _,
            k = A
        }
        if (R === x.length)
            return n(v, k),
            ae && Kn(v, R),
            b;
        if (k === null) {
            for (; R < x.length; R++)
                k = f(v, x[R], E),
                k !== null && (h = i(k, h, R),
                C === null ? b = k : C.sibling = k,
                C = k);
            return ae && Kn(v, R),
            b
        }
        for (k = r(v, k); R < x.length; R++)
            A = d(k, v, R, x[R], E),
            A !== null && (e && A.alternate !== null && k.delete(A.key === null ? R : A.key),
            h = i(A, h, R),
            C === null ? b = A : C.sibling = A,
            C = A);
        return e && k.forEach(function(z) {
            return t(v, z)
        }),
        ae && Kn(v, R),
        b
    }
    function m(v, h, x, E) {
        var b = wo(x);
        if (typeof b != "function")
            throw Error(j(150));
        if (x = b.call(x),
        x == null)
            throw Error(j(151));
        for (var C = b = null, k = h, R = h = 0, A = null, _ = x.next(); k !== null && !_.done; R++,
        _ = x.next()) {
            k.index > R ? (A = k,
            k = null) : A = k.sibling;
            var z = g(v, k, _.value, E);
            if (z === null) {
                k === null && (k = A);
                break
            }
            e && k && z.alternate === null && t(v, k),
            h = i(z, h, R),
            C === null ? b = z : C.sibling = z,
            C = z,
            k = A
        }
        if (_.done)
            return n(v, k),
            ae && Kn(v, R),
            b;
        if (k === null) {
            for (; !_.done; R++,
            _ = x.next())
                _ = f(v, _.value, E),
                _ !== null && (h = i(_, h, R),
                C === null ? b = _ : C.sibling = _,
                C = _);
            return ae && Kn(v, R),
            b
        }
        for (k = r(v, k); !_.done; R++,
        _ = x.next())
            _ = d(k, v, R, _.value, E),
            _ !== null && (e && _.alternate !== null && k.delete(_.key === null ? R : _.key),
            h = i(_, h, R),
            C === null ? b = _ : C.sibling = _,
            C = _);
        return e && k.forEach(function(I) {
            return t(v, I)
        }),
        ae && Kn(v, R),
        b
    }
    function w(v, h, x, E) {
        if (typeof x == "object" && x !== null && x.type === Nr && x.key === null && (x = x.props.children),
        typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case Ti:
                e: {
                    for (var b = x.key, C = h; C !== null; ) {
                        if (C.key === b) {
                            if (b = x.type,
                            b === Nr) {
                                if (C.tag === 7) {
                                    n(v, C.sibling),
                                    h = o(C, x.props.children),
                                    h.return = v,
                                    v = h;
                                    break e
                                }
                            } else if (C.elementType === b || typeof b == "object" && b !== null && b.$$typeof === gn && Ld(b) === C.type) {
                                n(v, C.sibling),
                                h = o(C, x.props),
                                h.ref = ko(v, C, x),
                                h.return = v,
                                v = h;
                                break e
                            }
                            n(v, C);
                            break
                        } else
                            t(v, C);
                        C = C.sibling
                    }
                    x.type === Nr ? (h = ir(x.props.children, v.mode, E, x.key),
                    h.return = v,
                    v = h) : (E = cs(x.type, x.key, x.props, null, v.mode, E),
                    E.ref = ko(v, h, x),
                    E.return = v,
                    v = E)
                }
                return s(v);
            case kr:
                e: {
                    for (C = x.key; h !== null; ) {
                        if (h.key === C)
                            if (h.tag === 4 && h.stateNode.containerInfo === x.containerInfo && h.stateNode.implementation === x.implementation) {
                                n(v, h.sibling),
                                h = o(h, x.children || []),
                                h.return = v,
                                v = h;
                                break e
                            } else {
                                n(v, h);
                                break
                            }
                        else
                            t(v, h);
                        h = h.sibling
                    }
                    h = tl(x, v.mode, E),
                    h.return = v,
                    v = h
                }
                return s(v);
            case gn:
                return C = x._init,
                w(v, h, C(x._payload), E)
            }
            if (Oo(x))
                return S(v, h, x, E);
            if (wo(x))
                return m(v, h, x, E);
            zi(v, x)
        }
        return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x,
        h !== null && h.tag === 6 ? (n(v, h.sibling),
        h = o(h, x),
        h.return = v,
        v = h) : (n(v, h),
        h = el(x, v.mode, E),
        h.return = v,
        v = h),
        s(v)) : n(v, h)
    }
    return w
}
var oo = Nh(!0)
  , Ph = Nh(!1)
  , Rs = Un(null)
  , js = null
  , Mr = null
  , Xu = null;
function Zu() {
    Xu = Mr = js = null
}
function Ju(e) {
    var t = Rs.current;
    ie(Rs),
    e._currentValue = t
}
function Kl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Br(e, t) {
    js = e,
    Xu = Mr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ve = !0),
    e.firstContext = null)
}
function lt(e) {
    var t = e._currentValue;
    if (Xu !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Mr === null) {
            if (js === null)
                throw Error(j(308));
            Mr = e,
            js.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Mr = Mr.next = e;
    return t
}
var qn = null;
function ec(e) {
    qn === null ? qn = [e] : qn.push(e)
}
function Th(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    ec(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Zt(e, r)
}
function Zt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var vn = !1;
function tc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Rh(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Yt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function _n(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    X & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Zt(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    ec(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Zt(e, n)
}
function os(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        $u(e, n)
    }
}
function Id(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Os(e, t, n, r) {
    var o = e.updateQueue;
    vn = !1;
    var i = o.firstBaseUpdate
      , s = o.lastBaseUpdate
      , a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        s === null ? i = u : s.next = u,
        s = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (i !== null) {
        var f = o.baseState;
        s = 0,
        c = u = l = null,
        a = i;
        do {
            var g = a.lane
              , d = a.eventTime;
            if ((r & g) === g) {
                c !== null && (c = c.next = {
                    eventTime: d,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var S = e
                      , m = a;
                    switch (g = t,
                    d = n,
                    m.tag) {
                    case 1:
                        if (S = m.payload,
                        typeof S == "function") {
                            f = S.call(d, f, g);
                            break e
                        }
                        f = S;
                        break e;
                    case 3:
                        S.flags = S.flags & -65537 | 128;
                    case 0:
                        if (S = m.payload,
                        g = typeof S == "function" ? S.call(d, f, g) : S,
                        g == null)
                            break e;
                        f = de({}, f, g);
                        break e;
                    case 2:
                        vn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                g = o.effects,
                g === null ? o.effects = [a] : g.push(a))
            } else
                d = {
                    eventTime: d,
                    lane: g,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = d,
                l = f) : c = c.next = d,
                s |= g;
            if (a = a.next,
            a === null) {
                if (a = o.shared.pending,
                a === null)
                    break;
                g = a,
                a = g.next,
                g.next = null,
                o.lastBaseUpdate = g,
                o.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = f),
        o.baseState = l,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = c,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                s |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        ur |= s,
        e.lanes = s,
        e.memoizedState = f
    }
}
function Fd(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(j(191, o));
                o.call(r)
            }
        }
}
var yi = {}
  , Lt = Un(yi)
  , ti = Un(yi)
  , ni = Un(yi);
function Xn(e) {
    if (e === yi)
        throw Error(j(174));
    return e
}
function nc(e, t) {
    switch (ne(ni, t),
    ne(ti, e),
    ne(Lt, yi),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Pl(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Pl(t, e)
    }
    ie(Lt),
    ne(Lt, t)
}
function io() {
    ie(Lt),
    ie(ti),
    ie(ni)
}
function jh(e) {
    Xn(ni.current);
    var t = Xn(Lt.current)
      , n = Pl(t, e.type);
    t !== n && (ne(ti, e),
    ne(Lt, n))
}
function rc(e) {
    ti.current === e && (ie(Lt),
    ie(ti))
}
var ue = Un(0);
function _s(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Ga = [];
function oc() {
    for (var e = 0; e < Ga.length; e++)
        Ga[e]._workInProgressVersionPrimary = null;
    Ga.length = 0
}
var is = rn.ReactCurrentDispatcher
  , Ya = rn.ReactCurrentBatchConfig
  , lr = 0
  , ce = null
  , ye = null
  , we = null
  , As = !1
  , zo = !1
  , ri = 0
  , Y0 = 0;
function Te() {
    throw Error(j(321))
}
function ic(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!bt(e[n], t[n]))
            return !1;
    return !0
}
function sc(e, t, n, r, o, i) {
    if (lr = i,
    ce = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    is.current = e === null || e.memoizedState === null ? J0 : ex,
    e = n(r, o),
    zo) {
        i = 0;
        do {
            if (zo = !1,
            ri = 0,
            25 <= i)
                throw Error(j(301));
            i += 1,
            we = ye = null,
            t.updateQueue = null,
            is.current = tx,
            e = n(r, o)
        } while (zo)
    }
    if (is.current = Ms,
    t = ye !== null && ye.next !== null,
    lr = 0,
    we = ye = ce = null,
    As = !1,
    t)
        throw Error(j(300));
    return e
}
function ac() {
    var e = ri !== 0;
    return ri = 0,
    e
}
function Tt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return we === null ? ce.memoizedState = we = e : we = we.next = e,
    we
}
function ut() {
    if (ye === null) {
        var e = ce.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ye.next;
    var t = we === null ? ce.memoizedState : we.next;
    if (t !== null)
        we = t,
        ye = e;
    else {
        if (e === null)
            throw Error(j(310));
        ye = e,
        e = {
            memoizedState: ye.memoizedState,
            baseState: ye.baseState,
            baseQueue: ye.baseQueue,
            queue: ye.queue,
            next: null
        },
        we === null ? ce.memoizedState = we = e : we = we.next = e
    }
    return we
}
function oi(e, t) {
    return typeof t == "function" ? t(e) : t
}
function qa(e) {
    var t = ut()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = ye
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
            i.next = s
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var a = s = null
          , l = null
          , u = i;
        do {
            var c = u.lane;
            if ((lr & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = f,
                s = r) : l = l.next = f,
                ce.lanes |= c,
                ur |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? s = r : l.next = a,
        bt(r, t.memoizedState) || (Ve = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            ce.lanes |= i,
            ur |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Xa(e) {
    var t = ut()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
            s = s.next;
        while (s !== o);
        bt(i, t.memoizedState) || (Ve = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Oh() {}
function _h(e, t) {
    var n = ce
      , r = ut()
      , o = t()
      , i = !bt(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    Ve = !0),
    r = r.queue,
    lc(Dh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || we !== null && we.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        ii(9, Mh.bind(null, n, r, o, t), void 0, null),
        Se === null)
            throw Error(j(349));
        lr & 30 || Ah(n, t, o)
    }
    return o
}
function Ah(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ce.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ce.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Mh(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Lh(t) && Ih(e)
}
function Dh(e, t, n) {
    return n(function() {
        Lh(t) && Ih(e)
    })
}
function Lh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !bt(e, n)
    } catch {
        return !0
    }
}
function Ih(e) {
    var t = Zt(e, 1);
    t !== null && Et(t, e, 1, -1)
}
function zd(e) {
    var t = Tt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: oi,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Z0.bind(null, ce, e),
    [t.memoizedState, e]
}
function ii(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ce.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ce.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Fh() {
    return ut().memoizedState
}
function ss(e, t, n, r) {
    var o = Tt();
    ce.flags |= e,
    o.memoizedState = ii(1 | t, n, void 0, r === void 0 ? null : r)
}
function ta(e, t, n, r) {
    var o = ut();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ye !== null) {
        var s = ye.memoizedState;
        if (i = s.destroy,
        r !== null && ic(r, s.deps)) {
            o.memoizedState = ii(t, n, i, r);
            return
        }
    }
    ce.flags |= e,
    o.memoizedState = ii(1 | t, n, i, r)
}
function $d(e, t) {
    return ss(8390656, 8, e, t)
}
function lc(e, t) {
    return ta(2048, 8, e, t)
}
function zh(e, t) {
    return ta(4, 2, e, t)
}
function $h(e, t) {
    return ta(4, 4, e, t)
}
function Bh(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Uh(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    ta(4, 4, Bh.bind(null, t, e), n)
}
function uc() {}
function Vh(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ic(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Wh(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ic(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Hh(e, t, n) {
    return lr & 21 ? (bt(n, t) || (n = qp(),
    ce.lanes |= n,
    ur |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ve = !0),
    e.memoizedState = n)
}
function q0(e, t) {
    var n = ee;
    ee = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Ya.transition;
    Ya.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ee = n,
        Ya.transition = r
    }
}
function Qh() {
    return ut().memoizedState
}
function X0(e, t, n) {
    var r = Mn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Kh(e))
        Gh(t, n);
    else if (n = Th(e, t, n, r),
    n !== null) {
        var o = Ie();
        Et(n, e, r, o),
        Yh(n, t, r)
    }
}
function Z0(e, t, n) {
    var r = Mn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Kh(e))
        Gh(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var s = t.lastRenderedState
                  , a = i(s, n);
                if (o.hasEagerState = !0,
                o.eagerState = a,
                bt(a, s)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                    ec(t)) : (o.next = l.next,
                    l.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Th(e, t, o, r),
        n !== null && (o = Ie(),
        Et(n, e, r, o),
        Yh(n, t, r))
    }
}
function Kh(e) {
    var t = e.alternate;
    return e === ce || t !== null && t === ce
}
function Gh(e, t) {
    zo = As = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Yh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        $u(e, n)
    }
}
var Ms = {
    readContext: lt,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1
}
  , J0 = {
    readContext: lt,
    useCallback: function(e, t) {
        return Tt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: lt,
    useEffect: $d,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        ss(4194308, 4, Bh.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return ss(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return ss(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Tt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Tt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = X0.bind(null, ce, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Tt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: zd,
    useDebugValue: uc,
    useDeferredValue: function(e) {
        return Tt().memoizedState = e
    },
    useTransition: function() {
        var e = zd(!1)
          , t = e[0];
        return e = q0.bind(null, e[1]),
        Tt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ce
          , o = Tt();
        if (ae) {
            if (n === void 0)
                throw Error(j(407));
            n = n()
        } else {
            if (n = t(),
            Se === null)
                throw Error(j(349));
            lr & 30 || Ah(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        $d(Dh.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        ii(9, Mh.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Tt()
          , t = Se.identifierPrefix;
        if (ae) {
            var n = Kt
              , r = Qt;
            n = (r & ~(1 << 32 - St(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = ri++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Y0++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , ex = {
    readContext: lt,
    useCallback: Vh,
    useContext: lt,
    useEffect: lc,
    useImperativeHandle: Uh,
    useInsertionEffect: zh,
    useLayoutEffect: $h,
    useMemo: Wh,
    useReducer: qa,
    useRef: Fh,
    useState: function() {
        return qa(oi)
    },
    useDebugValue: uc,
    useDeferredValue: function(e) {
        var t = ut();
        return Hh(t, ye.memoizedState, e)
    },
    useTransition: function() {
        var e = qa(oi)[0]
          , t = ut().memoizedState;
        return [e, t]
    },
    useMutableSource: Oh,
    useSyncExternalStore: _h,
    useId: Qh,
    unstable_isNewReconciler: !1
}
  , tx = {
    readContext: lt,
    useCallback: Vh,
    useContext: lt,
    useEffect: lc,
    useImperativeHandle: Uh,
    useInsertionEffect: zh,
    useLayoutEffect: $h,
    useMemo: Wh,
    useReducer: Xa,
    useRef: Fh,
    useState: function() {
        return Xa(oi)
    },
    useDebugValue: uc,
    useDeferredValue: function(e) {
        var t = ut();
        return ye === null ? t.memoizedState = e : Hh(t, ye.memoizedState, e)
    },
    useTransition: function() {
        var e = Xa(oi)[0]
          , t = ut().memoizedState;
        return [e, t]
    },
    useMutableSource: Oh,
    useSyncExternalStore: _h,
    useId: Qh,
    unstable_isNewReconciler: !1
};
function mt(e, t) {
    if (e && e.defaultProps) {
        t = de({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Gl(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : de({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var na = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? hr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ie()
          , o = Mn(e)
          , i = Yt(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = _n(e, i, o),
        t !== null && (Et(t, e, o, r),
        os(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ie()
          , o = Mn(e)
          , i = Yt(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = _n(e, i, o),
        t !== null && (Et(t, e, o, r),
        os(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ie()
          , r = Mn(e)
          , o = Yt(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = _n(e, o, r),
        t !== null && (Et(t, e, r, n),
        os(t, e, r))
    }
};
function Bd(e, t, n, r, o, i, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Xo(n, r) || !Xo(o, i) : !0
}
function qh(e, t, n) {
    var r = !1
      , o = Fn
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = lt(i) : (o = He(t) ? sr : _e.current,
    r = t.contextTypes,
    i = (r = r != null) ? no(e, o) : Fn),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = na,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Ud(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && na.enqueueReplaceState(t, t.state, null)
}
function Yl(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    tc(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = lt(i) : (i = He(t) ? sr : _e.current,
    o.context = no(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Gl(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && na.enqueueReplaceState(o, o.state, null),
    Os(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function so(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Ry(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Za(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ql(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var nx = typeof WeakMap == "function" ? WeakMap : Map;
function Xh(e, t, n) {
    n = Yt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Ls || (Ls = !0,
        su = r),
        ql(e, t)
    }
    ,
    n
}
function Zh(e, t, n) {
    n = Yt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            ql(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        ql(e, t),
        typeof r != "function" && (An === null ? An = new Set([this]) : An.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function Vd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new nx;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = gx.bind(null, e, t, n),
    t.then(e, e))
}
function Wd(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Hd(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Yt(-1, 1),
    t.tag = 2,
    _n(n, t, 1))),
    n.lanes |= 1),
    e)
}
var rx = rn.ReactCurrentOwner
  , Ve = !1;
function De(e, t, n, r) {
    t.child = e === null ? Ph(t, null, n, r) : oo(t, e.child, n, r)
}
function Qd(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Br(t, o),
    r = sc(e, t, n, r, i, o),
    n = ac(),
    e !== null && !Ve ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Jt(e, t, o)) : (ae && n && Gu(t),
    t.flags |= 1,
    De(e, t, r, o),
    t.child)
}
function Kd(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !vc(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        Jh(e, t, i, r, o)) : (e = cs(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Xo,
        n(s, r) && e.ref === t.ref)
            return Jt(e, t, o)
    }
    return t.flags |= 1,
    e = Dn(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Jh(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Xo(i, r) && e.ref === t.ref)
            if (Ve = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Ve = !0);
            else
                return t.lanes = e.lanes,
                Jt(e, t, o)
    }
    return Xl(e, t, n, r, o)
}
function em(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ne(Lr, Ge),
            Ge |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ne(Lr, Ge),
                Ge |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            ne(Lr, Ge),
            Ge |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        ne(Lr, Ge),
        Ge |= r;
    return De(e, t, o, n),
    t.child
}
function tm(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Xl(e, t, n, r, o) {
    var i = He(n) ? sr : _e.current;
    return i = no(t, i),
    Br(t, o),
    n = sc(e, t, n, r, i, o),
    r = ac(),
    e !== null && !Ve ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Jt(e, t, o)) : (ae && r && Gu(t),
    t.flags |= 1,
    De(e, t, n, o),
    t.child)
}
function Gd(e, t, n, r, o) {
    if (He(n)) {
        var i = !0;
        Ns(t)
    } else
        i = !1;
    if (Br(t, o),
    t.stateNode === null)
        as(e, t),
        qh(t, n, r),
        Yl(t, n, r, o),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , a = t.memoizedProps;
        s.props = a;
        var l = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = lt(u) : (u = He(n) ? sr : _e.current,
        u = no(t, u));
        var c = n.getDerivedStateFromProps
          , f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Ud(t, s, r, u),
        vn = !1;
        var g = t.memoizedState;
        s.state = g,
        Os(t, r, s, o),
        l = t.memoizedState,
        a !== r || g !== l || We.current || vn ? (typeof c == "function" && (Gl(t, n, c, r),
        l = t.memoizedState),
        (a = vn || Bd(t, n, a, r, g, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        s.props = r,
        s.state = l,
        s.context = u,
        r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Rh(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : mt(t.type, a),
        s.props = u,
        f = t.pendingProps,
        g = s.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = lt(l) : (l = He(n) ? sr : _e.current,
        l = no(t, l));
        var d = n.getDerivedStateFromProps;
        (c = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || g !== l) && Ud(t, s, r, l),
        vn = !1,
        g = t.memoizedState,
        s.state = g,
        Os(t, r, s, o);
        var S = t.memoizedState;
        a !== f || g !== S || We.current || vn ? (typeof d == "function" && (Gl(t, n, d, r),
        S = t.memoizedState),
        (u = vn || Bd(t, n, u, r, g, S, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, S, l),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, S, l)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = S),
        s.props = r,
        s.state = S,
        s.context = l,
        r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Zl(e, t, n, r, i, o)
}
function Zl(e, t, n, r, o, i) {
    tm(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && Ad(t, n, !1),
        Jt(e, t, i);
    r = t.stateNode,
    rx.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = oo(t, e.child, null, i),
    t.child = oo(t, null, a, i)) : De(e, t, a, i),
    t.memoizedState = r.state,
    o && Ad(t, n, !0),
    t.child
}
function nm(e) {
    var t = e.stateNode;
    t.pendingContext ? _d(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _d(e, t.context, !1),
    nc(e, t.containerInfo)
}
function Yd(e, t, n, r, o) {
    return ro(),
    qu(o),
    t.flags |= 256,
    De(e, t, n, r),
    t.child
}
var Jl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function eu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function rm(e, t, n) {
    var r = t.pendingProps, o = ue.current, i = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    ne(ue, o & 1),
    e === null)
        return Ql(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = ia(s, r, 0, null),
        e = ir(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = eu(n),
        t.memoizedState = Jl,
        e) : cc(t, s));
    if (o = e.memoizedState,
    o !== null && (a = o.dehydrated,
    a !== null))
        return ox(e, t, s, r, a, o, n);
    if (i) {
        i = r.fallback,
        s = t.mode,
        o = e.child,
        a = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = Dn(o, l),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        a !== null ? i = Dn(a, i) : (i = ir(i, s, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        s = e.child.memoizedState,
        s = s === null ? eu(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = Jl,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = Dn(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function cc(e, t) {
    return t = ia({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function $i(e, t, n, r) {
    return r !== null && qu(r),
    oo(t, e.child, null, n),
    e = cc(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function ox(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Za(Error(j(422))),
        $i(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = ia({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = ir(i, o, s, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && oo(t, e.child, null, s),
        t.child.memoizedState = eu(s),
        t.memoizedState = Jl,
        i);
    if (!(t.mode & 1))
        return $i(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        i = Error(j(419)),
        r = Za(i, r, void 0),
        $i(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0,
    Ve || a) {
        if (r = Se,
        r !== null) {
            switch (s & -s) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            Zt(e, o),
            Et(r, e, o, -1))
        }
        return gc(),
        r = Za(Error(j(421))),
        $i(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = vx.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    qe = On(o.nextSibling),
    Xe = t,
    ae = !0,
    wt = null,
    e !== null && (ot[it++] = Qt,
    ot[it++] = Kt,
    ot[it++] = ar,
    Qt = e.id,
    Kt = e.overflow,
    ar = t),
    t = cc(t, r.children),
    t.flags |= 4096,
    t)
}
function qd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Kl(e.return, t, n)
}
function Ja(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function om(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (De(e, t, r.children, n),
    r = ue.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && qd(e, n, t);
                else if (e.tag === 19)
                    qd(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ne(ue, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && _s(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Ja(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && _s(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Ja(t, !0, n, null, i);
            break;
        case "together":
            Ja(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function as(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Jt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    ur |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Dn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Dn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function ix(e, t, n) {
    switch (t.tag) {
    case 3:
        nm(t),
        ro();
        break;
    case 5:
        jh(t);
        break;
    case 1:
        He(t.type) && Ns(t);
        break;
    case 4:
        nc(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        ne(Rs, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ne(ue, ue.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? rm(e, t, n) : (ne(ue, ue.current & 1),
            e = Jt(e, t, n),
            e !== null ? e.sibling : null);
        ne(ue, ue.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return om(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        ne(ue, ue.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        em(e, t, n)
    }
    return Jt(e, t, n)
}
var im, tu, sm, am;
im = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
tu = function() {}
;
sm = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        Xn(Lt.current);
        var i = null;
        switch (n) {
        case "input":
            o = bl(e, o),
            r = bl(e, r),
            i = [];
            break;
        case "select":
            o = de({}, o, {
                value: void 0
            }),
            r = de({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = Nl(e, o),
            r = Nl(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Cs)
        }
        Tl(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Wo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                            n[s] = l[s])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Wo.hasOwnProperty(u) ? (l != null && u === "onScroll" && oe("scroll", e),
                    i || a === l || (i = [])) : (i = i || []).push(u, l))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
am = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function No(e, t) {
    if (!ae)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function sx(e, t, n) {
    var r = t.pendingProps;
    switch (Yu(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Re(t),
        null;
    case 1:
        return He(t.type) && ks(),
        Re(t),
        null;
    case 3:
        return r = t.stateNode,
        io(),
        ie(We),
        ie(_e),
        oc(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Fi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        wt !== null && (uu(wt),
        wt = null))),
        tu(e, t),
        Re(t),
        null;
    case 5:
        rc(t);
        var o = Xn(ni.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            sm(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(j(166));
                return Re(t),
                null
            }
            if (e = Xn(Lt.current),
            Fi(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[_t] = t,
                r[ei] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    oe("cancel", r),
                    oe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    oe("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Ao.length; o++)
                        oe(Ao[o], r);
                    break;
                case "source":
                    oe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    oe("error", r),
                    oe("load", r);
                    break;
                case "details":
                    oe("toggle", r);
                    break;
                case "input":
                    id(r, i),
                    oe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    oe("invalid", r);
                    break;
                case "textarea":
                    ad(r, i),
                    oe("invalid", r)
                }
                Tl(n, i),
                o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var a = i[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Ii(r.textContent, a, e),
                        o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Ii(r.textContent, a, e),
                        o = ["children", "" + a]) : Wo.hasOwnProperty(s) && a != null && s === "onScroll" && oe("scroll", r)
                    }
                switch (n) {
                case "input":
                    Ri(r),
                    sd(r, i, !0);
                    break;
                case "textarea":
                    Ri(r),
                    ld(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Cs)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Dp(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[_t] = t,
                e[ei] = r,
                im(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = Rl(n, r),
                    n) {
                    case "dialog":
                        oe("cancel", e),
                        oe("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        oe("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Ao.length; o++)
                            oe(Ao[o], e);
                        o = r;
                        break;
                    case "source":
                        oe("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        oe("error", e),
                        oe("load", e),
                        o = r;
                        break;
                    case "details":
                        oe("toggle", e),
                        o = r;
                        break;
                    case "input":
                        id(e, r),
                        o = bl(e, r),
                        oe("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = de({}, r, {
                            value: void 0
                        }),
                        oe("invalid", e);
                        break;
                    case "textarea":
                        ad(e, r),
                        o = Nl(e, r),
                        oe("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    Tl(n, o),
                    a = o;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var l = a[i];
                            i === "style" ? Fp(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Lp(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ho(e, l) : typeof l == "number" && Ho(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Wo.hasOwnProperty(i) ? l != null && i === "onScroll" && oe("scroll", e) : l != null && Mu(e, i, l, s))
                        }
                    switch (n) {
                    case "input":
                        Ri(e),
                        sd(e, r, !1);
                        break;
                    case "textarea":
                        Ri(e),
                        ld(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + In(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Ir(e, !!r.multiple, i, !1) : r.defaultValue != null && Ir(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Cs)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Re(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            am(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(j(166));
            if (n = Xn(ni.current),
            Xn(Lt.current),
            Fi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[_t] = t,
                (i = r.nodeValue !== n) && (e = Xe,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Ii(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Ii(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[_t] = t,
                t.stateNode = r
        }
        return Re(t),
        null;
    case 13:
        if (ie(ue),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ae && qe !== null && t.mode & 1 && !(t.flags & 128))
                kh(),
                ro(),
                t.flags |= 98560,
                i = !1;
            else if (i = Fi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(j(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(j(317));
                    i[_t] = t
                } else
                    ro(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Re(t),
                i = !1
            } else
                wt !== null && (uu(wt),
                wt = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ue.current & 1 ? xe === 0 && (xe = 3) : gc())),
        t.updateQueue !== null && (t.flags |= 4),
        Re(t),
        null);
    case 4:
        return io(),
        tu(e, t),
        e === null && Zo(t.stateNode.containerInfo),
        Re(t),
        null;
    case 10:
        return Ju(t.type._context),
        Re(t),
        null;
    case 17:
        return He(t.type) && ks(),
        Re(t),
        null;
    case 19:
        if (ie(ue),
        i = t.memoizedState,
        i === null)
            return Re(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                No(i, !1);
            else {
                if (xe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = _s(e),
                        s !== null) {
                            for (t.flags |= 128,
                            No(i, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ne(ue, ue.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && he() > ao && (t.flags |= 128,
                r = !0,
                No(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = _s(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    No(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !ae)
                        return Re(t),
                        null
                } else
                    2 * he() - i.renderingStartTime > ao && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    No(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = i.last,
            n !== null ? n.sibling = s : t.child = s,
            i.last = s)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = he(),
        t.sibling = null,
        n = ue.current,
        ne(ue, r ? n & 1 | 2 : n & 1),
        t) : (Re(t),
        null);
    case 22:
    case 23:
        return mc(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ge & 1073741824 && (Re(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(j(156, t.tag))
}
function ax(e, t) {
    switch (Yu(t),
    t.tag) {
    case 1:
        return He(t.type) && ks(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return io(),
        ie(We),
        ie(_e),
        oc(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return rc(t),
        null;
    case 13:
        if (ie(ue),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(j(340));
            ro()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ie(ue),
        null;
    case 4:
        return io(),
        null;
    case 10:
        return Ju(t.type._context),
        null;
    case 22:
    case 23:
        return mc(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Bi = !1
  , Oe = !1
  , lx = typeof WeakSet == "function" ? WeakSet : Set
  , L = null;
function Dr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                pe(e, t, r)
            }
        else
            n.current = null
}
function nu(e, t, n) {
    try {
        n()
    } catch (r) {
        pe(e, t, r)
    }
}
var Xd = !1;
function ux(e, t) {
    if (zl = Ss,
    e = fh(),
    Ku(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , f = e
                      , g = null;
                    t: for (; ; ) {
                        for (var d; f !== n || o !== 0 && f.nodeType !== 3 || (a = s + o),
                        f !== i || r !== 0 && f.nodeType !== 3 || (l = s + r),
                        f.nodeType === 3 && (s += f.nodeValue.length),
                        (d = f.firstChild) !== null; )
                            g = f,
                            f = d;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (g === n && ++u === o && (a = s),
                            g === i && ++c === r && (l = s),
                            (d = f.nextSibling) !== null)
                                break;
                            f = g,
                            g = f.parentNode
                        }
                        f = d
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for ($l = {
        focusedElem: e,
        selectionRange: n
    },
    Ss = !1,
    L = t; L !== null; )
        if (t = L,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            L = e;
        else
            for (; L !== null; ) {
                t = L;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var m = S.memoizedProps
                                  , w = S.memoizedState
                                  , v = t.stateNode
                                  , h = v.getSnapshotBeforeUpdate(t.elementType === t.type ? m : mt(t.type, m), w);
                                v.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var x = t.stateNode.containerInfo;
                            x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(j(163))
                        }
                } catch (E) {
                    pe(t, t.return, E)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    L = e;
                    break
                }
                L = t.return
            }
    return S = Xd,
    Xd = !1,
    S
}
function $o(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && nu(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function ra(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function ru(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function lm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    lm(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[_t],
    delete t[ei],
    delete t[Vl],
    delete t[H0],
    delete t[Q0])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function um(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Zd(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || um(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function ou(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Cs));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ou(e, t, n),
        e = e.sibling; e !== null; )
            ou(e, t, n),
            e = e.sibling
}
function iu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (iu(e, t, n),
        e = e.sibling; e !== null; )
            iu(e, t, n),
            e = e.sibling
}
var Ee = null
  , xt = !1;
function dn(e, t, n) {
    for (n = n.child; n !== null; )
        cm(e, t, n),
        n = n.sibling
}
function cm(e, t, n) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
        try {
            Dt.onCommitFiberUnmount(Ys, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Oe || Dr(n, t);
    case 6:
        var r = Ee
          , o = xt;
        Ee = null,
        dn(e, t, n),
        Ee = r,
        xt = o,
        Ee !== null && (xt ? (e = Ee,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ee.removeChild(n.stateNode));
        break;
    case 18:
        Ee !== null && (xt ? (e = Ee,
        n = n.stateNode,
        e.nodeType === 8 ? Qa(e.parentNode, n) : e.nodeType === 1 && Qa(e, n),
        Yo(e)) : Qa(Ee, n.stateNode));
        break;
    case 4:
        r = Ee,
        o = xt,
        Ee = n.stateNode.containerInfo,
        xt = !0,
        dn(e, t, n),
        Ee = r,
        xt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Oe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && (i & 2 || i & 4) && nu(n, t, s),
                o = o.next
            } while (o !== r)
        }
        dn(e, t, n);
        break;
    case 1:
        if (!Oe && (Dr(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                pe(n, t, a)
            }
        dn(e, t, n);
        break;
    case 21:
        dn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Oe = (r = Oe) || n.memoizedState !== null,
        dn(e, t, n),
        Oe = r) : dn(e, t, n);
        break;
    default:
        dn(e, t, n)
    }
}
function Jd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new lx),
        t.forEach(function(r) {
            var o = yx.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function pt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , s = t
                  , a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Ee = a.stateNode,
                        xt = !1;
                        break e;
                    case 3:
                        Ee = a.stateNode.containerInfo,
                        xt = !0;
                        break e;
                    case 4:
                        Ee = a.stateNode.containerInfo,
                        xt = !0;
                        break e
                    }
                    a = a.return
                }
                if (Ee === null)
                    throw Error(j(160));
                cm(i, s, o),
                Ee = null,
                xt = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                o.return = null
            } catch (u) {
                pe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            dm(t, e),
            t = t.sibling
}
function dm(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (pt(t, e),
        Pt(e),
        r & 4) {
            try {
                $o(3, e, e.return),
                ra(3, e)
            } catch (m) {
                pe(e, e.return, m)
            }
            try {
                $o(5, e, e.return)
            } catch (m) {
                pe(e, e.return, m)
            }
        }
        break;
    case 1:
        pt(t, e),
        Pt(e),
        r & 512 && n !== null && Dr(n, n.return);
        break;
    case 5:
        if (pt(t, e),
        Pt(e),
        r & 512 && n !== null && Dr(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Ho(o, "")
            } catch (m) {
                pe(e, e.return, m)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , s = n !== null ? n.memoizedProps : i
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && i.type === "radio" && i.name != null && Ap(o, i),
                    Rl(a, s);
                    var u = Rl(a, i);
                    for (s = 0; s < l.length; s += 2) {
                        var c = l[s]
                          , f = l[s + 1];
                        c === "style" ? Fp(o, f) : c === "dangerouslySetInnerHTML" ? Lp(o, f) : c === "children" ? Ho(o, f) : Mu(o, c, f, u)
                    }
                    switch (a) {
                    case "input":
                        Cl(o, i);
                        break;
                    case "textarea":
                        Mp(o, i);
                        break;
                    case "select":
                        var g = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var d = i.value;
                        d != null ? Ir(o, !!i.multiple, d, !1) : g !== !!i.multiple && (i.defaultValue != null ? Ir(o, !!i.multiple, i.defaultValue, !0) : Ir(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[ei] = i
                } catch (m) {
                    pe(e, e.return, m)
                }
        }
        break;
    case 6:
        if (pt(t, e),
        Pt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(j(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (m) {
                pe(e, e.return, m)
            }
        }
        break;
    case 3:
        if (pt(t, e),
        Pt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Yo(t.containerInfo)
            } catch (m) {
                pe(e, e.return, m)
            }
        break;
    case 4:
        pt(t, e),
        Pt(e);
        break;
    case 13:
        pt(t, e),
        Pt(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (pc = he())),
        r & 4 && Jd(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Oe = (u = Oe) || c,
        pt(t, e),
        Oe = u) : pt(t, e),
        Pt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (L = e,
                c = e.child; c !== null; ) {
                    for (f = L = c; L !== null; ) {
                        switch (g = L,
                        d = g.child,
                        g.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            $o(4, g, g.return);
                            break;
                        case 1:
                            Dr(g, g.return);
                            var S = g.stateNode;
                            if (typeof S.componentWillUnmount == "function") {
                                r = g,
                                n = g.return;
                                try {
                                    t = r,
                                    S.props = t.memoizedProps,
                                    S.state = t.memoizedState,
                                    S.componentWillUnmount()
                                } catch (m) {
                                    pe(r, n, m)
                                }
                            }
                            break;
                        case 5:
                            Dr(g, g.return);
                            break;
                        case 22:
                            if (g.memoizedState !== null) {
                                tf(f);
                                continue
                            }
                        }
                        d !== null ? (d.return = g,
                        L = d) : tf(f)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            o = f.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = f.stateNode,
                            l = f.memoizedProps.style,
                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = Ip("display", s))
                        } catch (m) {
                            pe(e, e.return, m)
                        }
                    }
                } else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (m) {
                            pe(e, e.return, m)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    c === f && (c = null),
                    f = f.return
                }
                c === f && (c = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        pt(t, e),
        Pt(e),
        r & 4 && Jd(e);
        break;
    case 21:
        break;
    default:
        pt(t, e),
        Pt(e)
    }
}
function Pt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (um(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(j(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Ho(o, ""),
                r.flags &= -33);
                var i = Zd(e);
                iu(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , a = Zd(e);
                ou(e, a, s);
                break;
            default:
                throw Error(j(161))
            }
        } catch (l) {
            pe(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function cx(e, t, n) {
    L = e,
    fm(e)
}
function fm(e, t, n) {
    for (var r = (e.mode & 1) !== 0; L !== null; ) {
        var o = L
          , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || Bi;
            if (!s) {
                var a = o.alternate
                  , l = a !== null && a.memoizedState !== null || Oe;
                a = Bi;
                var u = Oe;
                if (Bi = s,
                (Oe = l) && !u)
                    for (L = o; L !== null; )
                        s = L,
                        l = s.child,
                        s.tag === 22 && s.memoizedState !== null ? nf(o) : l !== null ? (l.return = s,
                        L = l) : nf(o);
                for (; i !== null; )
                    L = i,
                    fm(i),
                    i = i.sibling;
                L = o,
                Bi = a,
                Oe = u
            }
            ef(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            L = i) : ef(e)
    }
}
function ef(e) {
    for (; L !== null; ) {
        var t = L;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Oe || ra(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Oe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : mt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Fd(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Fd(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && Yo(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(j(163))
                    }
                Oe || t.flags & 512 && ru(t)
            } catch (g) {
                pe(t, t.return, g)
            }
        }
        if (t === e) {
            L = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            L = n;
            break
        }
        L = t.return
    }
}
function tf(e) {
    for (; L !== null; ) {
        var t = L;
        if (t === e) {
            L = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            L = n;
            break
        }
        L = t.return
    }
}
function nf(e) {
    for (; L !== null; ) {
        var t = L;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    ra(4, t)
                } catch (l) {
                    pe(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        pe(t, o, l)
                    }
                }
                var i = t.return;
                try {
                    ru(t)
                } catch (l) {
                    pe(t, i, l)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    ru(t)
                } catch (l) {
                    pe(t, s, l)
                }
            }
        } catch (l) {
            pe(t, t.return, l)
        }
        if (t === e) {
            L = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            L = a;
            break
        }
        L = t.return
    }
}
var dx = Math.ceil
  , Ds = rn.ReactCurrentDispatcher
  , dc = rn.ReactCurrentOwner
  , at = rn.ReactCurrentBatchConfig
  , X = 0
  , Se = null
  , ge = null
  , be = 0
  , Ge = 0
  , Lr = Un(0)
  , xe = 0
  , si = null
  , ur = 0
  , oa = 0
  , fc = 0
  , Bo = null
  , Ue = null
  , pc = 0
  , ao = 1 / 0
  , Vt = null
  , Ls = !1
  , su = null
  , An = null
  , Ui = !1
  , Nn = null
  , Is = 0
  , Uo = 0
  , au = null
  , ls = -1
  , us = 0;
function Ie() {
    return X & 6 ? he() : ls !== -1 ? ls : ls = he()
}
function Mn(e) {
    return e.mode & 1 ? X & 2 && be !== 0 ? be & -be : G0.transition !== null ? (us === 0 && (us = qp()),
    us) : (e = ee,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : rh(e.type)),
    e) : 1
}
function Et(e, t, n, r) {
    if (50 < Uo)
        throw Uo = 0,
        au = null,
        Error(j(185));
    mi(e, n, r),
    (!(X & 2) || e !== Se) && (e === Se && (!(X & 2) && (oa |= n),
    xe === 4 && xn(e, be)),
    Qe(e, r),
    n === 1 && X === 0 && !(t.mode & 1) && (ao = he() + 500,
    ea && Vn()))
}
function Qe(e, t) {
    var n = e.callbackNode;
    Gy(e, t);
    var r = ws(e, e === Se ? be : 0);
    if (r === 0)
        n !== null && dd(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && dd(n),
        t === 1)
            e.tag === 0 ? K0(rf.bind(null, e)) : Eh(rf.bind(null, e)),
            V0(function() {
                !(X & 6) && Vn()
            }),
            n = null;
        else {
            switch (Xp(r)) {
            case 1:
                n = zu;
                break;
            case 4:
                n = Gp;
                break;
            case 16:
                n = xs;
                break;
            case 536870912:
                n = Yp;
                break;
            default:
                n = xs
            }
            n = wm(n, pm.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function pm(e, t) {
    if (ls = -1,
    us = 0,
    X & 6)
        throw Error(j(327));
    var n = e.callbackNode;
    if (Ur() && e.callbackNode !== n)
        return null;
    var r = ws(e, e === Se ? be : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Fs(e, r);
    else {
        t = r;
        var o = X;
        X |= 2;
        var i = mm();
        (Se !== e || be !== t) && (Vt = null,
        ao = he() + 500,
        or(e, t));
        do
            try {
                hx();
                break
            } catch (a) {
                hm(e, a)
            }
        while (!0);
        Zu(),
        Ds.current = i,
        X = o,
        ge !== null ? t = 0 : (Se = null,
        be = 0,
        t = xe)
    }
    if (t !== 0) {
        if (t === 2 && (o = Ml(e),
        o !== 0 && (r = o,
        t = lu(e, o))),
        t === 1)
            throw n = si,
            or(e, 0),
            xn(e, r),
            Qe(e, he()),
            n;
        if (t === 6)
            xn(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !fx(o) && (t = Fs(e, r),
            t === 2 && (i = Ml(e),
            i !== 0 && (r = i,
            t = lu(e, i))),
            t === 1))
                throw n = si,
                or(e, 0),
                xn(e, r),
                Qe(e, he()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(j(345));
            case 2:
                Gn(e, Ue, Vt);
                break;
            case 3:
                if (xn(e, r),
                (r & 130023424) === r && (t = pc + 500 - he(),
                10 < t)) {
                    if (ws(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Ie(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Ul(Gn.bind(null, e, Ue, Vt), t);
                    break
                }
                Gn(e, Ue, Vt);
                break;
            case 4:
                if (xn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var s = 31 - St(r);
                    i = 1 << s,
                    s = t[s],
                    s > o && (o = s),
                    r &= ~i
                }
                if (r = o,
                r = he() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * dx(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Ul(Gn.bind(null, e, Ue, Vt), r);
                    break
                }
                Gn(e, Ue, Vt);
                break;
            case 5:
                Gn(e, Ue, Vt);
                break;
            default:
                throw Error(j(329))
            }
        }
    }
    return Qe(e, he()),
    e.callbackNode === n ? pm.bind(null, e) : null
}
function lu(e, t) {
    var n = Bo;
    return e.current.memoizedState.isDehydrated && (or(e, t).flags |= 256),
    e = Fs(e, t),
    e !== 2 && (t = Ue,
    Ue = n,
    t !== null && uu(t)),
    e
}
function uu(e) {
    Ue === null ? Ue = e : Ue.push.apply(Ue, e)
}
function fx(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!bt(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function xn(e, t) {
    for (t &= ~fc,
    t &= ~oa,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - St(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function rf(e) {
    if (X & 6)
        throw Error(j(327));
    Ur();
    var t = ws(e, 0);
    if (!(t & 1))
        return Qe(e, he()),
        null;
    var n = Fs(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Ml(e);
        r !== 0 && (t = r,
        n = lu(e, r))
    }
    if (n === 1)
        throw n = si,
        or(e, 0),
        xn(e, t),
        Qe(e, he()),
        n;
    if (n === 6)
        throw Error(j(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Gn(e, Ue, Vt),
    Qe(e, he()),
    null
}
function hc(e, t) {
    var n = X;
    X |= 1;
    try {
        return e(t)
    } finally {
        X = n,
        X === 0 && (ao = he() + 500,
        ea && Vn())
    }
}
function cr(e) {
    Nn !== null && Nn.tag === 0 && !(X & 6) && Ur();
    var t = X;
    X |= 1;
    var n = at.transition
      , r = ee;
    try {
        if (at.transition = null,
        ee = 1,
        e)
            return e()
    } finally {
        ee = r,
        at.transition = n,
        X = t,
        !(X & 6) && Vn()
    }
}
function mc() {
    Ge = Lr.current,
    ie(Lr)
}
function or(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    U0(n)),
    ge !== null)
        for (n = ge.return; n !== null; ) {
            var r = n;
            switch (Yu(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ks();
                break;
            case 3:
                io(),
                ie(We),
                ie(_e),
                oc();
                break;
            case 5:
                rc(r);
                break;
            case 4:
                io();
                break;
            case 13:
                ie(ue);
                break;
            case 19:
                ie(ue);
                break;
            case 10:
                Ju(r.type._context);
                break;
            case 22:
            case 23:
                mc()
            }
            n = n.return
        }
    if (Se = e,
    ge = e = Dn(e.current, null),
    be = Ge = t,
    xe = 0,
    si = null,
    fc = oa = ur = 0,
    Ue = Bo = null,
    qn !== null) {
        for (t = 0; t < qn.length; t++)
            if (n = qn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                    r.next = s
                }
                n.pending = r
            }
        qn = null
    }
    return e
}
function hm(e, t) {
    do {
        var n = ge;
        try {
            if (Zu(),
            is.current = Ms,
            As) {
                for (var r = ce.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                As = !1
            }
            if (lr = 0,
            we = ye = ce = null,
            zo = !1,
            ri = 0,
            dc.current = null,
            n === null || n.return === null) {
                xe = 1,
                si = t,
                ge = null;
                break
            }
            e: {
                var i = e
                  , s = n.return
                  , a = n
                  , l = t;
                if (t = be,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var g = c.alternate;
                        g ? (c.updateQueue = g.updateQueue,
                        c.memoizedState = g.memoizedState,
                        c.lanes = g.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var d = Wd(s);
                    if (d !== null) {
                        d.flags &= -257,
                        Hd(d, s, a, i, t),
                        d.mode & 1 && Vd(i, u, t),
                        t = d,
                        l = u;
                        var S = t.updateQueue;
                        if (S === null) {
                            var m = new Set;
                            m.add(l),
                            t.updateQueue = m
                        } else
                            S.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Vd(i, u, t),
                            gc();
                            break e
                        }
                        l = Error(j(426))
                    }
                } else if (ae && a.mode & 1) {
                    var w = Wd(s);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        Hd(w, s, a, i, t),
                        qu(so(l, a));
                        break e
                    }
                }
                i = l = so(l, a),
                xe !== 4 && (xe = 2),
                Bo === null ? Bo = [i] : Bo.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var v = Xh(i, l, t);
                        Id(i, v);
                        break e;
                    case 1:
                        a = l;
                        var h = i.type
                          , x = i.stateNode;
                        if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (An === null || !An.has(x)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var E = Zh(i, a, t);
                            Id(i, E);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            vm(n)
        } catch (b) {
            t = b,
            ge === n && n !== null && (ge = n = n.return);
            continue
        }
        break
    } while (!0)
}
function mm() {
    var e = Ds.current;
    return Ds.current = Ms,
    e === null ? Ms : e
}
function gc() {
    (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    Se === null || !(ur & 268435455) && !(oa & 268435455) || xn(Se, be)
}
function Fs(e, t) {
    var n = X;
    X |= 2;
    var r = mm();
    (Se !== e || be !== t) && (Vt = null,
    or(e, t));
    do
        try {
            px();
            break
        } catch (o) {
            hm(e, o)
        }
    while (!0);
    if (Zu(),
    X = n,
    Ds.current = r,
    ge !== null)
        throw Error(j(261));
    return Se = null,
    be = 0,
    xe
}
function px() {
    for (; ge !== null; )
        gm(ge)
}
function hx() {
    for (; ge !== null && !zy(); )
        gm(ge)
}
function gm(e) {
    var t = xm(e.alternate, e, Ge);
    e.memoizedProps = e.pendingProps,
    t === null ? vm(e) : ge = t,
    dc.current = null
}
function vm(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = ax(n, t),
            n !== null) {
                n.flags &= 32767,
                ge = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                xe = 6,
                ge = null;
                return
            }
        } else if (n = sx(n, t, Ge),
        n !== null) {
            ge = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ge = t;
            return
        }
        ge = t = e
    } while (t !== null);
    xe === 0 && (xe = 5)
}
function Gn(e, t, n) {
    var r = ee
      , o = at.transition;
    try {
        at.transition = null,
        ee = 1,
        mx(e, t, n, r)
    } finally {
        at.transition = o,
        ee = r
    }
    return null
}
function mx(e, t, n, r) {
    do
        Ur();
    while (Nn !== null);
    if (X & 6)
        throw Error(j(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(j(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Yy(e, i),
    e === Se && (ge = Se = null,
    be = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ui || (Ui = !0,
    wm(xs, function() {
        return Ur(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = at.transition,
        at.transition = null;
        var s = ee;
        ee = 1;
        var a = X;
        X |= 4,
        dc.current = null,
        ux(e, n),
        dm(n, e),
        D0($l),
        Ss = !!zl,
        $l = zl = null,
        e.current = n,
        cx(n),
        $y(),
        X = a,
        ee = s,
        at.transition = i
    } else
        e.current = n;
    if (Ui && (Ui = !1,
    Nn = e,
    Is = o),
    i = e.pendingLanes,
    i === 0 && (An = null),
    Vy(n.stateNode),
    Qe(e, he()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (Ls)
        throw Ls = !1,
        e = su,
        su = null,
        e;
    return Is & 1 && e.tag !== 0 && Ur(),
    i = e.pendingLanes,
    i & 1 ? e === au ? Uo++ : (Uo = 0,
    au = e) : Uo = 0,
    Vn(),
    null
}
function Ur() {
    if (Nn !== null) {
        var e = Xp(Is)
          , t = at.transition
          , n = ee;
        try {
            if (at.transition = null,
            ee = 16 > e ? 16 : e,
            Nn === null)
                var r = !1;
            else {
                if (e = Nn,
                Nn = null,
                Is = 0,
                X & 6)
                    throw Error(j(331));
                var o = X;
                for (X |= 4,
                L = e.current; L !== null; ) {
                    var i = L
                      , s = i.child;
                    if (L.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (L = u; L !== null; ) {
                                    var c = L;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        $o(8, c, i)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                        L = f;
                                    else
                                        for (; L !== null; ) {
                                            c = L;
                                            var g = c.sibling
                                              , d = c.return;
                                            if (lm(c),
                                            c === u) {
                                                L = null;
                                                break
                                            }
                                            if (g !== null) {
                                                g.return = d,
                                                L = g;
                                                break
                                            }
                                            L = d
                                        }
                                }
                            }
                            var S = i.alternate;
                            if (S !== null) {
                                var m = S.child;
                                if (m !== null) {
                                    S.child = null;
                                    do {
                                        var w = m.sibling;
                                        m.sibling = null,
                                        m = w
                                    } while (m !== null)
                                }
                            }
                            L = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                        L = s;
                    else
                        e: for (; L !== null; ) {
                            if (i = L,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    $o(9, i, i.return)
                                }
                            var v = i.sibling;
                            if (v !== null) {
                                v.return = i.return,
                                L = v;
                                break e
                            }
                            L = i.return
                        }
                }
                var h = e.current;
                for (L = h; L !== null; ) {
                    s = L;
                    var x = s.child;
                    if (s.subtreeFlags & 2064 && x !== null)
                        x.return = s,
                        L = x;
                    else
                        e: for (s = h; L !== null; ) {
                            if (a = L,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ra(9, a)
                                    }
                                } catch (b) {
                                    pe(a, a.return, b)
                                }
                            if (a === s) {
                                L = null;
                                break e
                            }
                            var E = a.sibling;
                            if (E !== null) {
                                E.return = a.return,
                                L = E;
                                break e
                            }
                            L = a.return
                        }
                }
                if (X = o,
                Vn(),
                Dt && typeof Dt.onPostCommitFiberRoot == "function")
                    try {
                        Dt.onPostCommitFiberRoot(Ys, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ee = n,
            at.transition = t
        }
    }
    return !1
}
function of(e, t, n) {
    t = so(n, t),
    t = Xh(e, t, 1),
    e = _n(e, t, 1),
    t = Ie(),
    e !== null && (mi(e, 1, t),
    Qe(e, t))
}
function pe(e, t, n) {
    if (e.tag === 3)
        of(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                of(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (An === null || !An.has(r))) {
                    e = so(n, e),
                    e = Zh(t, e, 1),
                    t = _n(t, e, 1),
                    e = Ie(),
                    t !== null && (mi(t, 1, e),
                    Qe(t, e));
                    break
                }
            }
            t = t.return
        }
}
function gx(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ie(),
    e.pingedLanes |= e.suspendedLanes & n,
    Se === e && (be & n) === n && (xe === 4 || xe === 3 && (be & 130023424) === be && 500 > he() - pc ? or(e, 0) : fc |= n),
    Qe(e, t)
}
function ym(e, t) {
    t === 0 && (e.mode & 1 ? (t = _i,
    _i <<= 1,
    !(_i & 130023424) && (_i = 4194304)) : t = 1);
    var n = Ie();
    e = Zt(e, t),
    e !== null && (mi(e, t, n),
    Qe(e, n))
}
function vx(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    ym(e, n)
}
function yx(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(j(314))
    }
    r !== null && r.delete(t),
    ym(e, n)
}
var xm;
xm = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || We.current)
            Ve = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ve = !1,
                ix(e, t, n);
            Ve = !!(e.flags & 131072)
        }
    else
        Ve = !1,
        ae && t.flags & 1048576 && bh(t, Ts, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        as(e, t),
        e = t.pendingProps;
        var o = no(t, _e.current);
        Br(t, n),
        o = sc(null, t, r, e, o, n);
        var i = ac();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        He(r) ? (i = !0,
        Ns(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        tc(t),
        o.updater = na,
        t.stateNode = o,
        o._reactInternals = t,
        Yl(t, r, e, n),
        t = Zl(null, t, r, !0, i, n)) : (t.tag = 0,
        ae && i && Gu(t),
        De(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (as(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = wx(r),
            e = mt(r, e),
            o) {
            case 0:
                t = Xl(null, t, r, e, n);
                break e;
            case 1:
                t = Gd(null, t, r, e, n);
                break e;
            case 11:
                t = Qd(null, t, r, e, n);
                break e;
            case 14:
                t = Kd(null, t, r, mt(r.type, e), n);
                break e
            }
            throw Error(j(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : mt(r, o),
        Xl(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : mt(r, o),
        Gd(e, t, r, o, n);
    case 3:
        e: {
            if (nm(t),
            e === null)
                throw Error(j(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            Rh(e, t),
            Os(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = so(Error(j(423)), t),
                    t = Yd(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = so(Error(j(424)), t),
                    t = Yd(e, t, r, n, o);
                    break e
                } else
                    for (qe = On(t.stateNode.containerInfo.firstChild),
                    Xe = t,
                    ae = !0,
                    wt = null,
                    n = Ph(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (ro(),
                r === o) {
                    t = Jt(e, t, n);
                    break e
                }
                De(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return jh(t),
        e === null && Ql(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        s = o.children,
        Bl(r, o) ? s = null : i !== null && Bl(r, i) && (t.flags |= 32),
        tm(e, t),
        De(e, t, s, n),
        t.child;
    case 6:
        return e === null && Ql(t),
        null;
    case 13:
        return rm(e, t, n);
    case 4:
        return nc(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = oo(t, null, r, n) : De(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : mt(r, o),
        Qd(e, t, r, o, n);
    case 7:
        return De(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return De(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return De(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            s = o.value,
            ne(Rs, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (bt(i.value, s)) {
                    if (i.children === o.children && !We.current) {
                        t = Jt(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var a = i.dependencies;
                        if (a !== null) {
                            s = i.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (i.tag === 1) {
                                        l = Yt(-1, n & -n),
                                        l.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    i.lanes |= n,
                                    l = i.alternate,
                                    l !== null && (l.lanes |= n),
                                    Kl(i.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(j(341));
                            s.lanes |= n,
                            a = s.alternate,
                            a !== null && (a.lanes |= n),
                            Kl(s, n, t),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            De(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Br(t, n),
        o = lt(o),
        r = r(o),
        t.flags |= 1,
        De(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = mt(r, t.pendingProps),
        o = mt(r.type, o),
        Kd(e, t, r, o, n);
    case 15:
        return Jh(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : mt(r, o),
        as(e, t),
        t.tag = 1,
        He(r) ? (e = !0,
        Ns(t)) : e = !1,
        Br(t, n),
        qh(t, r, o),
        Yl(t, r, o, n),
        Zl(null, t, r, !0, e, n);
    case 19:
        return om(e, t, n);
    case 22:
        return em(e, t, n)
    }
    throw Error(j(156, t.tag))
}
;
function wm(e, t) {
    return Kp(e, t)
}
function xx(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function st(e, t, n, r) {
    return new xx(e,t,n,r)
}
function vc(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function wx(e) {
    if (typeof e == "function")
        return vc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Lu)
            return 11;
        if (e === Iu)
            return 14
    }
    return 2
}
function Dn(e, t) {
    var n = e.alternate;
    return n === null ? (n = st(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function cs(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        vc(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case Nr:
            return ir(n.children, o, i, t);
        case Du:
            s = 8,
            o |= 8;
            break;
        case xl:
            return e = st(12, n, t, o | 2),
            e.elementType = xl,
            e.lanes = i,
            e;
        case wl:
            return e = st(13, n, t, o),
            e.elementType = wl,
            e.lanes = i,
            e;
        case Sl:
            return e = st(19, n, t, o),
            e.elementType = Sl,
            e.lanes = i,
            e;
        case jp:
            return ia(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Tp:
                    s = 10;
                    break e;
                case Rp:
                    s = 9;
                    break e;
                case Lu:
                    s = 11;
                    break e;
                case Iu:
                    s = 14;
                    break e;
                case gn:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(j(130, e == null ? e : typeof e, ""))
        }
    return t = st(s, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function ir(e, t, n, r) {
    return e = st(7, e, r, t),
    e.lanes = n,
    e
}
function ia(e, t, n, r) {
    return e = st(22, e, r, t),
    e.elementType = jp,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function el(e, t, n) {
    return e = st(6, e, null, t),
    e.lanes = n,
    e
}
function tl(e, t, n) {
    return t = st(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Sx(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Da(0),
    this.expirationTimes = Da(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Da(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function yc(e, t, n, r, o, i, s, a, l) {
    return e = new Sx(e,t,n,a,l),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = st(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    tc(i),
    e
}
function Ex(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: kr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Sm(e) {
    if (!e)
        return Fn;
    e = e._reactInternals;
    e: {
        if (hr(e) !== e || e.tag !== 1)
            throw Error(j(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (He(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(j(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (He(n))
            return Sh(e, n, t)
    }
    return t
}
function Em(e, t, n, r, o, i, s, a, l) {
    return e = yc(n, r, !0, e, o, i, s, a, l),
    e.context = Sm(null),
    n = e.current,
    r = Ie(),
    o = Mn(n),
    i = Yt(r, o),
    i.callback = t ?? null,
    _n(n, i, o),
    e.current.lanes = o,
    mi(e, o, r),
    Qe(e, r),
    e
}
function sa(e, t, n, r) {
    var o = t.current
      , i = Ie()
      , s = Mn(o);
    return n = Sm(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Yt(i, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = _n(o, t, s),
    e !== null && (Et(e, o, s, i),
    os(e, o, s)),
    s
}
function zs(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function sf(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function xc(e, t) {
    sf(e, t),
    (e = e.alternate) && sf(e, t)
}
function bx() {
    return null
}
var bm = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function wc(e) {
    this._internalRoot = e
}
aa.prototype.render = wc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(j(409));
    sa(e, t, null, null)
}
;
aa.prototype.unmount = wc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        cr(function() {
            sa(null, e, null, null)
        }),
        t[Xt] = null
    }
}
;
function aa(e) {
    this._internalRoot = e
}
aa.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = eh();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < yn.length && t !== 0 && t < yn[n].priority; n++)
            ;
        yn.splice(n, 0, e),
        n === 0 && nh(e)
    }
}
;
function Sc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function la(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function af() {}
function Cx(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = zs(s);
                i.call(u)
            }
        }
        var s = Em(t, r, e, 0, null, !1, !1, "", af);
        return e._reactRootContainer = s,
        e[Xt] = s.current,
        Zo(e.nodeType === 8 ? e.parentNode : e),
        cr(),
        s
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = zs(l);
            a.call(u)
        }
    }
    var l = yc(e, 0, !1, null, null, !1, !1, "", af);
    return e._reactRootContainer = l,
    e[Xt] = l.current,
    Zo(e.nodeType === 8 ? e.parentNode : e),
    cr(function() {
        sa(t, l, n, r)
    }),
    l
}
function ua(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var l = zs(s);
                a.call(l)
            }
        }
        sa(t, s, e, o)
    } else
        s = Cx(n, t, e, o, r);
    return zs(s)
}
Zp = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = _o(t.pendingLanes);
            n !== 0 && ($u(t, n | 1),
            Qe(t, he()),
            !(X & 6) && (ao = he() + 500,
            Vn()))
        }
        break;
    case 13:
        cr(function() {
            var r = Zt(e, 1);
            if (r !== null) {
                var o = Ie();
                Et(r, e, 1, o)
            }
        }),
        xc(e, 1)
    }
}
;
Bu = function(e) {
    if (e.tag === 13) {
        var t = Zt(e, 134217728);
        if (t !== null) {
            var n = Ie();
            Et(t, e, 134217728, n)
        }
        xc(e, 134217728)
    }
}
;
Jp = function(e) {
    if (e.tag === 13) {
        var t = Mn(e)
          , n = Zt(e, t);
        if (n !== null) {
            var r = Ie();
            Et(n, e, t, r)
        }
        xc(e, t)
    }
}
;
eh = function() {
    return ee
}
;
th = function(e, t) {
    var n = ee;
    try {
        return ee = e,
        t()
    } finally {
        ee = n
    }
}
;
Ol = function(e, t, n) {
    switch (t) {
    case "input":
        if (Cl(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Js(r);
                    if (!o)
                        throw Error(j(90));
                    _p(r),
                    Cl(r, o)
                }
            }
        }
        break;
    case "textarea":
        Mp(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Ir(e, !!n.multiple, t, !1)
    }
}
;
Bp = hc;
Up = cr;
var kx = {
    usingClientEntryPoint: !1,
    Events: [vi, jr, Js, zp, $p, hc]
}
  , Po = {
    findFiberByHostInstance: Yn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Nx = {
    bundleType: Po.bundleType,
    version: Po.version,
    rendererPackageName: Po.rendererPackageName,
    rendererConfig: Po.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Hp(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Po.findFiberByHostInstance || bx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vi.isDisabled && Vi.supportsFiber)
        try {
            Ys = Vi.inject(Nx),
            Dt = Vi
        } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kx;
et.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Sc(t))
        throw Error(j(200));
    return Ex(e, t, null, n)
}
;
et.createRoot = function(e, t) {
    if (!Sc(e))
        throw Error(j(299));
    var n = !1
      , r = ""
      , o = bm;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = yc(e, 1, !1, null, null, n, !1, r, o),
    e[Xt] = t.current,
    Zo(e.nodeType === 8 ? e.parentNode : e),
    new wc(t)
}
;
et.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","),
        Error(j(268, e)));
    return e = Hp(t),
    e = e === null ? null : e.stateNode,
    e
}
;
et.flushSync = function(e) {
    return cr(e)
}
;
et.hydrate = function(e, t, n) {
    if (!la(t))
        throw Error(j(200));
    return ua(null, e, t, !0, n)
}
;
et.hydrateRoot = function(e, t, n) {
    if (!Sc(e))
        throw Error(j(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , s = bm;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Em(t, null, e, 1, n ?? null, o, !1, i, s),
    e[Xt] = t.current,
    Zo(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new aa(t)
}
;
et.render = function(e, t, n) {
    if (!la(t))
        throw Error(j(200));
    return ua(null, e, t, !1, n)
}
;
et.unmountComponentAtNode = function(e) {
    if (!la(e))
        throw Error(j(40));
    return e._reactRootContainer ? (cr(function() {
        ua(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Xt] = null
        })
    }),
    !0) : !1
}
;
et.unstable_batchedUpdates = hc;
et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!la(n))
        throw Error(j(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(j(38));
    return ua(e, t, n, !1, r)
}
;
et.version = "18.3.1-next-f1338f8080-20240426";
function Cm() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cm)
        } catch (e) {
            console.error(e)
        }
}
Cm(),
Cp.exports = et;
var xi = Cp.exports;
const km = fp(xi);
var Nm, lf = xi;
Nm = lf.createRoot,
lf.hydrateRoot;
const Px = 1
  , Tx = 1e6;
let nl = 0;
function Rx() {
    return nl = (nl + 1) % Number.MAX_SAFE_INTEGER,
    nl.toString()
}
const rl = new Map
  , uf = e => {
    if (rl.has(e))
        return;
    const t = setTimeout( () => {
        rl.delete(e),
        Vo({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , Tx);
    rl.set(e, t)
}
  , jx = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, Px)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? uf(n) : e.toasts.forEach(r => {
                uf(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , ds = [];
let fs = {
    toasts: []
};
function Vo(e) {
    fs = jx(fs, e),
    ds.forEach(t => {
        t(fs)
    }
    )
}
function Ox({...e}) {
    const t = Rx()
      , n = o => Vo({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => Vo({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Vo({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function Ec() {
    const [e,t] = y.useState(fs);
    return y.useEffect( () => (ds.push(t),
    () => {
        const n = ds.indexOf(t);
        n > -1 && ds.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: Ox,
        dismiss: n => Vo({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function le(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function cf(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function Pm(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = cf(o, t);
            return !n && typeof i == "function" && (n = !0),
            i
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const i = r[o];
                    typeof i == "function" ? i() : cf(e[o], null)
                }
            }
    }
}
function Fe(...e) {
    return y.useCallback(Pm(...e), e)
}
function _x(e, t) {
    const n = y.createContext(t)
      , r = i => {
        const {children: s, ...a} = i
          , l = y.useMemo( () => a, Object.values(a));
        return p.jsx(n.Provider, {
            value: l,
            children: s
        })
    }
    ;
    r.displayName = e + "Provider";
    function o(i) {
        const s = y.useContext(n);
        if (s)
            return s;
        if (t !== void 0)
            return t;
        throw new Error(`\`${i}\` must be used within \`${e}\``)
    }
    return [r, o]
}
function wi(e, t=[]) {
    let n = [];
    function r(i, s) {
        const a = y.createContext(s)
          , l = n.length;
        n = [...n, s];
        const u = f => {
            var v;
            const {scope: g, children: d, ...S} = f
              , m = ((v = g == null ? void 0 : g[e]) == null ? void 0 : v[l]) || a
              , w = y.useMemo( () => S, Object.values(S));
            return p.jsx(m.Provider, {
                value: w,
                children: d
            })
        }
        ;
        u.displayName = i + "Provider";
        function c(f, g) {
            var m;
            const d = ((m = g == null ? void 0 : g[e]) == null ? void 0 : m[l]) || a
              , S = y.useContext(d);
            if (S)
                return S;
            if (s !== void 0)
                return s;
            throw new Error(`\`${f}\` must be used within \`${i}\``)
        }
        return [u, c]
    }
    const o = () => {
        const i = n.map(s => y.createContext(s));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || i;
            return y.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, Ax(o, ...t)]
}
function Ax(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const f = l(i)[`__scope${u}`];
                return {
                    ...a,
                    ...f
                }
            }
            , {});
            return y.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function ai(e) {
    const t = Dx(e)
      , n = y.forwardRef( (r, o) => {
        const {children: i, ...s} = r
          , a = y.Children.toArray(i)
          , l = a.find(Ix);
        if (l) {
            const u = l.props.children
              , c = a.map(f => f === l ? y.Children.count(u) > 1 ? y.Children.only(null) : y.isValidElement(u) ? u.props.children : null : f);
            return p.jsx(t, {
                ...s,
                ref: o,
                children: y.isValidElement(u) ? y.cloneElement(u, void 0, c) : null
            })
        }
        return p.jsx(t, {
            ...s,
            ref: o,
            children: i
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var Mx = ai("Slot");
function Dx(e) {
    const t = y.forwardRef( (n, r) => {
        const {children: o, ...i} = n;
        if (y.isValidElement(o)) {
            const s = zx(o)
              , a = Fx(i, o.props);
            return o.type !== y.Fragment && (a.ref = r ? Pm(r, s) : s),
            y.cloneElement(o, a)
        }
        return y.Children.count(o) > 1 ? y.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var Tm = Symbol("radix.slottable");
function Lx(e) {
    const t = ({children: n}) => p.jsx(p.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = Tm,
    t
}
function Ix(e) {
    return y.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === Tm
}
function Fx(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
            const l = i(...a);
            return o(...a),
            l
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function zx(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function $x(e) {
    const t = e + "CollectionProvider"
      , [n,r] = wi(t)
      , [o,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = m => {
        const {scope: w, children: v} = m
          , h = O.useRef(null)
          , x = O.useRef(new Map).current;
        return p.jsx(o, {
            scope: w,
            itemMap: x,
            collectionRef: h,
            children: v
        })
    }
    ;
    s.displayName = t;
    const a = e + "CollectionSlot"
      , l = ai(a)
      , u = O.forwardRef( (m, w) => {
        const {scope: v, children: h} = m
          , x = i(a, v)
          , E = Fe(w, x.collectionRef);
        return p.jsx(l, {
            ref: E,
            children: h
        })
    }
    );
    u.displayName = a;
    const c = e + "CollectionItemSlot"
      , f = "data-radix-collection-item"
      , g = ai(c)
      , d = O.forwardRef( (m, w) => {
        const {scope: v, children: h, ...x} = m
          , E = O.useRef(null)
          , b = Fe(w, E)
          , C = i(c, v);
        return O.useEffect( () => (C.itemMap.set(E, {
            ref: E,
            ...x
        }),
        () => void C.itemMap.delete(E))),
        p.jsx(g, {
            [f]: "",
            ref: b,
            children: h
        })
    }
    );
    d.displayName = c;
    function S(m) {
        const w = i(e + "CollectionConsumer", m);
        return O.useCallback( () => {
            const h = w.collectionRef.current;
            if (!h)
                return [];
            const x = Array.from(h.querySelectorAll(`[${f}]`));
            return Array.from(w.itemMap.values()).sort( (C, k) => x.indexOf(C.ref.current) - x.indexOf(k.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: s,
        Slot: u,
        ItemSlot: d
    }, S, r]
}
var Bx = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , ve = Bx.reduce( (e, t) => {
    const n = ai(`Primitive.${t}`)
      , r = y.forwardRef( (o, i) => {
        const {asChild: s, ...a} = o
          , l = s ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        p.jsx(l, {
            ...a,
            ref: i
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function Rm(e, t) {
    e && xi.flushSync( () => e.dispatchEvent(t))
}
function Ft(e) {
    const t = y.useRef(e);
    return y.useEffect( () => {
        t.current = e
    }
    ),
    y.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function Ux(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ft(e);
    y.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var Vx = "DismissableLayer", cu = "dismissableLayer.update", Wx = "dismissableLayer.pointerDownOutside", Hx = "dismissableLayer.focusOutside", df, jm = y.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), ca = y.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: a, ...l} = e
      , u = y.useContext(jm)
      , [c,f] = y.useState(null)
      , g = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,d] = y.useState({})
      , S = Fe(t, k => f(k))
      , m = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , v = m.indexOf(w)
      , h = c ? m.indexOf(c) : -1
      , x = u.layersWithOutsidePointerEventsDisabled.size > 0
      , E = h >= v
      , b = Kx(k => {
        const R = k.target
          , A = [...u.branches].some(_ => _.contains(R));
        !E || A || (o == null || o(k),
        s == null || s(k),
        k.defaultPrevented || a == null || a())
    }
    , g)
      , C = Gx(k => {
        const R = k.target;
        [...u.branches].some(_ => _.contains(R)) || (i == null || i(k),
        s == null || s(k),
        k.defaultPrevented || a == null || a())
    }
    , g);
    return Ux(k => {
        h === u.layers.size - 1 && (r == null || r(k),
        !k.defaultPrevented && a && (k.preventDefault(),
        a()))
    }
    , g),
    y.useEffect( () => {
        if (c)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (df = g.body.style.pointerEvents,
            g.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            ff(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = df)
            }
    }
    , [c, g, n, u]),
    y.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        ff())
    }
    , [c, u]),
    y.useEffect( () => {
        const k = () => d({});
        return document.addEventListener(cu, k),
        () => document.removeEventListener(cu, k)
    }
    , []),
    p.jsx(ve.div, {
        ...l,
        ref: S,
        style: {
            pointerEvents: x ? E ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: le(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: le(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: le(e.onPointerDownCapture, b.onPointerDownCapture)
    })
}
);
ca.displayName = Vx;
var Qx = "DismissableLayerBranch"
  , Om = y.forwardRef( (e, t) => {
    const n = y.useContext(jm)
      , r = y.useRef(null)
      , o = Fe(t, r);
    return y.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    p.jsx(ve.div, {
        ...e,
        ref: o
    })
}
);
Om.displayName = Qx;
function Kx(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ft(e)
      , r = y.useRef(!1)
      , o = y.useRef( () => {}
    );
    return y.useEffect( () => {
        const i = a => {
            if (a.target && !r.current) {
                let l = function() {
                    _m(Wx, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = l,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , s = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(s),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function Gx(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ft(e)
      , r = y.useRef(!1);
    return y.useEffect( () => {
        const o = i => {
            i.target && !r.current && _m(Hx, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function ff() {
    const e = new CustomEvent(cu);
    document.dispatchEvent(e)
}
function _m(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Rm(o, i) : o.dispatchEvent(i)
}
var Yx = ca
  , qx = Om
  , en = globalThis != null && globalThis.document ? y.useLayoutEffect : () => {}
  , Xx = "Portal"
  , bc = y.forwardRef( (e, t) => {
    var a;
    const {container: n, ...r} = e
      , [o,i] = y.useState(!1);
    en( () => i(!0), []);
    const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return s ? km.createPortal(p.jsx(ve.div, {
        ...r,
        ref: t
    }), s) : null
}
);
bc.displayName = Xx;
function Zx(e, t) {
    return y.useReducer( (n, r) => t[n][r] ?? n, e)
}
var ho = e => {
    const {present: t, children: n} = e
      , r = Jx(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : y.Children.only(n)
      , i = Fe(r.ref, ew(o));
    return typeof n == "function" || r.isPresent ? y.cloneElement(o, {
        ref: i
    }) : null
}
;
ho.displayName = "Presence";
function Jx(e) {
    const [t,n] = y.useState()
      , r = y.useRef(null)
      , o = y.useRef(e)
      , i = y.useRef("none")
      , s = e ? "mounted" : "unmounted"
      , [a,l] = Zx(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return y.useEffect( () => {
        const u = Wi(r.current);
        i.current = a === "mounted" ? u : "none"
    }
    , [a]),
    en( () => {
        const u = r.current
          , c = o.current;
        if (c !== e) {
            const g = i.current
              , d = Wi(u);
            e ? l("MOUNT") : d === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && g !== d ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, l]),
    en( () => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window
              , f = d => {
                const m = Wi(r.current).includes(d.animationName);
                if (d.target === t && m && (l("ANIMATION_END"),
                !o.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , g = d => {
                d.target === t && (i.current = Wi(r.current))
            }
            ;
            return t.addEventListener("animationstart", g),
            t.addEventListener("animationcancel", f),
            t.addEventListener("animationend", f),
            () => {
                c.clearTimeout(u),
                t.removeEventListener("animationstart", g),
                t.removeEventListener("animationcancel", f),
                t.removeEventListener("animationend", f)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: y.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function Wi(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function ew(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var tw = Ou[" useInsertionEffect ".trim().toString()] || en;
function Am({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,i,s] = nw({
        defaultProp: t,
        onChange: n
    })
      , a = e !== void 0
      , l = a ? e : o;
    {
        const c = y.useRef(e !== void 0);
        y.useEffect( () => {
            const f = c.current;
            f !== a && console.warn(`${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            c.current = a
        }
        , [a, r])
    }
    const u = y.useCallback(c => {
        var f;
        if (a) {
            const g = rw(c) ? c(e) : c;
            g !== e && ((f = s.current) == null || f.call(s, g))
        } else
            i(c)
    }
    , [a, e, i, s]);
    return [l, u]
}
function nw({defaultProp: e, onChange: t}) {
    const [n,r] = y.useState(e)
      , o = y.useRef(n)
      , i = y.useRef(t);
    return tw( () => {
        i.current = t
    }
    , [t]),
    y.useEffect( () => {
        var s;
        o.current !== n && ((s = i.current) == null || s.call(i, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, i]
}
function rw(e) {
    return typeof e == "function"
}
var ow = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , iw = "VisuallyHidden"
  , da = y.forwardRef( (e, t) => p.jsx(ve.span, {
    ...e,
    ref: t,
    style: {
        ...ow,
        ...e.style
    }
}));
da.displayName = iw;
var sw = da
  , Cc = "ToastProvider"
  , [kc,aw,lw] = $x("Toast")
  , [Mm,N2] = wi("Toast", [lw])
  , [uw,fa] = Mm(Cc)
  , Dm = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: i=50, children: s} = e
      , [a,l] = y.useState(null)
      , [u,c] = y.useState(0)
      , f = y.useRef(!1)
      , g = y.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Cc}\`. Expected non-empty \`string\`.`),
    p.jsx(kc.Provider, {
        scope: t,
        children: p.jsx(uw, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: y.useCallback( () => c(d => d + 1), []),
            onToastRemove: y.useCallback( () => c(d => d - 1), []),
            isFocusedToastEscapeKeyDownRef: f,
            isClosePausedRef: g,
            children: s
        })
    })
}
;
Dm.displayName = Cc;
var Lm = "ToastViewport"
  , cw = ["F8"]
  , du = "toast.viewportPause"
  , fu = "toast.viewportResume"
  , Im = y.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=cw, label: o="Notifications ({hotkey})", ...i} = e
      , s = fa(Lm, n)
      , a = aw(n)
      , l = y.useRef(null)
      , u = y.useRef(null)
      , c = y.useRef(null)
      , f = y.useRef(null)
      , g = Fe(t, f, s.onViewportChange)
      , d = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , S = s.toastCount > 0;
    y.useEffect( () => {
        const w = v => {
            var x;
            r.length !== 0 && r.every(E => v[E] || v.code === E) && ((x = f.current) == null || x.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    y.useEffect( () => {
        const w = l.current
          , v = f.current;
        if (S && w && v) {
            const h = () => {
                if (!s.isClosePausedRef.current) {
                    const C = new CustomEvent(du);
                    v.dispatchEvent(C),
                    s.isClosePausedRef.current = !0
                }
            }
              , x = () => {
                if (s.isClosePausedRef.current) {
                    const C = new CustomEvent(fu);
                    v.dispatchEvent(C),
                    s.isClosePausedRef.current = !1
                }
            }
              , E = C => {
                !w.contains(C.relatedTarget) && x()
            }
              , b = () => {
                w.contains(document.activeElement) || x()
            }
            ;
            return w.addEventListener("focusin", h),
            w.addEventListener("focusout", E),
            w.addEventListener("pointermove", h),
            w.addEventListener("pointerleave", b),
            window.addEventListener("blur", h),
            window.addEventListener("focus", x),
            () => {
                w.removeEventListener("focusin", h),
                w.removeEventListener("focusout", E),
                w.removeEventListener("pointermove", h),
                w.removeEventListener("pointerleave", b),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", x)
            }
        }
    }
    , [S, s.isClosePausedRef]);
    const m = y.useCallback( ({tabbingDirection: w}) => {
        const h = a().map(x => {
            const E = x.ref.current
              , b = [E, ...bw(E)];
            return w === "forwards" ? b : b.reverse()
        }
        );
        return (w === "forwards" ? h.reverse() : h).flat()
    }
    , [a]);
    return y.useEffect( () => {
        const w = f.current;
        if (w) {
            const v = h => {
                var b, C, k;
                const x = h.altKey || h.ctrlKey || h.metaKey;
                if (h.key === "Tab" && !x) {
                    const R = document.activeElement
                      , A = h.shiftKey;
                    if (h.target === w && A) {
                        (b = u.current) == null || b.focus();
                        return
                    }
                    const I = m({
                        tabbingDirection: A ? "backwards" : "forwards"
                    })
                      , Q = I.findIndex(M => M === R);
                    ol(I.slice(Q + 1)) ? h.preventDefault() : A ? (C = u.current) == null || C.focus() : (k = c.current) == null || k.focus()
                }
            }
            ;
            return w.addEventListener("keydown", v),
            () => w.removeEventListener("keydown", v)
        }
    }
    , [a, m]),
    p.jsxs(qx, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", d),
        tabIndex: -1,
        style: {
            pointerEvents: S ? void 0 : "none"
        },
        children: [S && p.jsx(pu, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = m({
                    tabbingDirection: "forwards"
                });
                ol(w)
            }
        }), p.jsx(kc.Slot, {
            scope: n,
            children: p.jsx(ve.ol, {
                tabIndex: -1,
                ...i,
                ref: g
            })
        }), S && p.jsx(pu, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const w = m({
                    tabbingDirection: "backwards"
                });
                ol(w)
            }
        })]
    })
}
);
Im.displayName = Lm;
var Fm = "ToastFocusProxy"
  , pu = y.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , i = fa(Fm, n);
    return p.jsx(da, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: s => {
            var u;
            const a = s.relatedTarget;
            !((u = i.viewport) != null && u.contains(a)) && r()
        }
    })
}
);
pu.displayName = Fm;
var Si = "Toast"
  , dw = "toast.swipeStart"
  , fw = "toast.swipeMove"
  , pw = "toast.swipeCancel"
  , hw = "toast.swipeEnd"
  , zm = y.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s} = e
      , [a,l] = Am({
        prop: r,
        defaultProp: o ?? !0,
        onChange: i,
        caller: Si
    });
    return p.jsx(ho, {
        present: n || a,
        children: p.jsx(vw, {
            open: a,
            ...s,
            ref: t,
            onClose: () => l(!1),
            onPause: Ft(e.onPause),
            onResume: Ft(e.onResume),
            onSwipeStart: le(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: le(e.onSwipeMove, u => {
                const {x: c, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`)
            }
            ),
            onSwipeCancel: le(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: le(e.onSwipeEnd, u => {
                const {x: c, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`),
                l(!1)
            }
            )
        })
    })
}
);
zm.displayName = Si;
var [mw,gw] = Mm(Si, {
    onClose() {}
})
  , vw = y.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: f, onSwipeCancel: g, onSwipeEnd: d, ...S} = e
      , m = fa(Si, n)
      , [w,v] = y.useState(null)
      , h = Fe(t, M => v(M))
      , x = y.useRef(null)
      , E = y.useRef(null)
      , b = o || m.duration
      , C = y.useRef(0)
      , k = y.useRef(b)
      , R = y.useRef(0)
      , {onToastAdd: A, onToastRemove: _} = m
      , z = Ft( () => {
        var Y;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((Y = m.viewport) == null || Y.focus()),
        s()
    }
    )
      , I = y.useCallback(M => {
        !M || M === 1 / 0 || (window.clearTimeout(R.current),
        C.current = new Date().getTime(),
        R.current = window.setTimeout(z, M))
    }
    , [z]);
    y.useEffect( () => {
        const M = m.viewport;
        if (M) {
            const Y = () => {
                I(k.current),
                u == null || u()
            }
              , $ = () => {
                const V = new Date().getTime() - C.current;
                k.current = k.current - V,
                window.clearTimeout(R.current),
                l == null || l()
            }
            ;
            return M.addEventListener(du, $),
            M.addEventListener(fu, Y),
            () => {
                M.removeEventListener(du, $),
                M.removeEventListener(fu, Y)
            }
        }
    }
    , [m.viewport, b, l, u, I]),
    y.useEffect( () => {
        i && !m.isClosePausedRef.current && I(b)
    }
    , [i, b, m.isClosePausedRef, I]),
    y.useEffect( () => (A(),
    () => _()), [A, _]);
    const Q = y.useMemo( () => w ? Qm(w) : null, [w]);
    return m.viewport ? p.jsxs(p.Fragment, {
        children: [Q && p.jsx(yw, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: Q
        }), p.jsx(mw, {
            scope: n,
            onClose: z,
            children: xi.createPortal(p.jsx(kc.ItemSlot, {
                scope: n,
                children: p.jsx(Yx, {
                    asChild: !0,
                    onEscapeKeyDown: le(a, () => {
                        m.isFocusedToastEscapeKeyDownRef.current || z(),
                        m.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: p.jsx(ve.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": m.swipeDirection,
                        ...S,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: le(e.onKeyDown, M => {
                            M.key === "Escape" && (a == null || a(M.nativeEvent),
                            M.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0,
                            z()))
                        }
                        ),
                        onPointerDown: le(e.onPointerDown, M => {
                            M.button === 0 && (x.current = {
                                x: M.clientX,
                                y: M.clientY
                            })
                        }
                        ),
                        onPointerMove: le(e.onPointerMove, M => {
                            if (!x.current)
                                return;
                            const Y = M.clientX - x.current.x
                              , $ = M.clientY - x.current.y
                              , V = !!E.current
                              , P = ["left", "right"].includes(m.swipeDirection)
                              , T = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max
                              , D = P ? T(0, Y) : 0
                              , W = P ? 0 : T(0, $)
                              , F = M.pointerType === "touch" ? 10 : 2
                              , K = {
                                x: D,
                                y: W
                            }
                              , q = {
                                originalEvent: M,
                                delta: K
                            };
                            V ? (E.current = K,
                            Hi(fw, f, q, {
                                discrete: !1
                            })) : pf(K, m.swipeDirection, F) ? (E.current = K,
                            Hi(dw, c, q, {
                                discrete: !1
                            }),
                            M.target.setPointerCapture(M.pointerId)) : (Math.abs(Y) > F || Math.abs($) > F) && (x.current = null)
                        }
                        ),
                        onPointerUp: le(e.onPointerUp, M => {
                            const Y = E.current
                              , $ = M.target;
                            if ($.hasPointerCapture(M.pointerId) && $.releasePointerCapture(M.pointerId),
                            E.current = null,
                            x.current = null,
                            Y) {
                                const V = M.currentTarget
                                  , P = {
                                    originalEvent: M,
                                    delta: Y
                                };
                                pf(Y, m.swipeDirection, m.swipeThreshold) ? Hi(hw, d, P, {
                                    discrete: !0
                                }) : Hi(pw, g, P, {
                                    discrete: !0
                                }),
                                V.addEventListener("click", T => T.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), m.viewport)
        })]
    }) : null
}
)
  , yw = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = fa(Si, t)
      , [i,s] = y.useState(!1)
      , [a,l] = y.useState(!1);
    return Sw( () => s(!0)),
    y.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    a ? null : p.jsx(bc, {
        asChild: !0,
        children: p.jsx(da, {
            ...r,
            children: i && p.jsxs(p.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , xw = "ToastTitle"
  , $m = y.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return p.jsx(ve.div, {
        ...r,
        ref: t
    })
}
);
$m.displayName = xw;
var ww = "ToastDescription"
  , Bm = y.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return p.jsx(ve.div, {
        ...r,
        ref: t
    })
}
);
Bm.displayName = ww;
var Um = "ToastAction"
  , Vm = y.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? p.jsx(Hm, {
        altText: n,
        asChild: !0,
        children: p.jsx(Nc, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Um}\`. Expected non-empty \`string\`.`),
    null)
}
);
Vm.displayName = Um;
var Wm = "ToastClose"
  , Nc = y.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = gw(Wm, n);
    return p.jsx(Hm, {
        asChild: !0,
        children: p.jsx(ve.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: le(e.onClick, o.onClose)
        })
    })
}
);
Nc.displayName = Wm;
var Hm = y.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return p.jsx(ve.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function Qm(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        Ew(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...Qm(r))
        }
    }
    ),
    t
}
function Hi(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Rm(o, i) : o.dispatchEvent(i)
}
var pf = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}
;
function Sw(e= () => {}
) {
    const t = Ft(e);
    en( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function Ew(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function bw(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function ol(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var Cw = Dm
  , Km = Im
  , Gm = zm
  , Ym = $m
  , qm = Bm
  , Xm = Vm
  , Zm = Nc;
function Jm(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = Jm(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function eg() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = Jm(e)) && (r && (r += " "),
        r += t);
    return r
}
const hf = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , mf = eg
  , Pc = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return mf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: i} = t
      , s = Object.keys(o).map(u => {
        const c = n == null ? void 0 : n[u]
          , f = i == null ? void 0 : i[u];
        if (c === null)
            return null;
        const g = hf(c) || hf(f);
        return o[u][g]
    }
    )
      , a = n && Object.entries(n).reduce( (u, c) => {
        let[f,g] = c;
        return g === void 0 || (u[f] = g),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, c) => {
        let {class: f, className: g, ...d} = c;
        return Object.entries(d).every(S => {
            let[m,w] = S;
            return Array.isArray(w) ? w.includes({
                ...i,
                ...a
            }[m]) : {
                ...i,
                ...a
            }[m] === w
        }
        ) ? [...u, f, g] : u
    }
    , []);
    return mf(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kw = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , tg = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Nw = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pw = y.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: i, iconNode: s, ...a}, l) => y.createElement("svg", {
    ref: l,
    ...Nw,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: tg("lucide", o),
    ...a
}, [...s.map( ([u,c]) => y.createElement(u, c)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ke = (e, t) => {
    const n = y.forwardRef( ({className: r, ...o}, i) => y.createElement(Pw, {
        ref: i,
        iconNode: t,
        className: tg(`lucide-${kw(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ng = ke("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gf = ke("Building2", [["path", {
    d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
    key: "1b4qmf"
}], ["path", {
    d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
    key: "i71pzd"
}], ["path", {
    d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
    key: "10jefs"
}], ["path", {
    d: "M10 6h4",
    key: "1itunk"
}], ["path", {
    d: "M10 10h4",
    key: "tcdvrf"
}], ["path", {
    d: "M10 14h4",
    key: "kelpxr"
}], ["path", {
    d: "M10 18h4",
    key: "1ulq68"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rg = ke("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tw = ke("Facebook", [["path", {
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    key: "1jg4f8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rw = ke("Flame", [["path", {
    d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
    key: "96xj49"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jw = ke("Gift", [["rect", {
    x: "3",
    y: "8",
    width: "18",
    height: "4",
    rx: "1",
    key: "bkv52"
}], ["path", {
    d: "M12 8v13",
    key: "1c76mn"
}], ["path", {
    d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
    key: "6wjy6b"
}], ["path", {
    d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
    key: "1ihvrl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ow = ke("Instagram", [["rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    rx: "5",
    ry: "5",
    key: "2e1cvw"
}], ["path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    key: "9exkf1"
}], ["line", {
    x1: "17.5",
    x2: "17.51",
    y1: "6.5",
    y2: "6.5",
    key: "r4j83e"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const og = ke("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ig = ke("MapPin", [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sg = ke("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _w = ke("Quote", [["path", {
    d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
    key: "rib7q0"
}], ["path", {
    d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
    key: "1ymkrd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ag = ke("Star", [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Aw = ke("TrendingUp", [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mw = ke("Truck", [["path", {
    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
    key: "wrbu53"
}], ["path", {
    d: "M15 18H9",
    key: "1lyqi6"
}], ["path", {
    d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
    key: "lysw3i"
}], ["circle", {
    cx: "17",
    cy: "18",
    r: "2",
    key: "332jqn"
}], ["circle", {
    cx: "7",
    cy: "18",
    r: "2",
    key: "19iecd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dw = ke("Twitter", [["path", {
    d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
    key: "pff0z6"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lw = ke("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tc = ke("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , Rc = "-"
  , Iw = e => {
    const t = zw(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: s => {
            const a = s.split(Rc);
            return a[0] === "" && a.length !== 1 && a.shift(),
            lg(a, t) || Fw(s)
        }
        ,
        getConflictingClassGroupIds: (s, a) => {
            const l = n[s] || [];
            return a && r[s] ? [...l, ...r[s]] : l
        }
    }
}
  , lg = (e, t) => {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? lg(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const i = e.join(Rc);
    return (s = t.validators.find( ({validator: a}) => a(i))) == null ? void 0 : s.classGroupId
}
  , vf = /^\[(.+)\]$/
  , Fw = e => {
    if (vf.test(e)) {
        const t = vf.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , zw = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return Bw(Object.entries(e.classGroups), n).forEach( ([i,s]) => {
        hu(s, r, i, t)
    }
    ),
    r
}
  , hu = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : yf(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if ($w(o)) {
                hu(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([i,s]) => {
            hu(s, yf(t, i), n, r)
        }
        )
    }
    )
}
  , yf = (e, t) => {
    let n = e;
    return t.split(Rc).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , $w = e => e.isThemeGetter
  , Bw = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([s,a]) => [t + s, a])) : i);
    return [n, o]
}
) : e
  , Uw = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (i, s) => {
        n.set(i, s),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(i) {
            let s = n.get(i);
            if (s !== void 0)
                return s;
            if ((s = r.get(i)) !== void 0)
                return o(i, s),
                s
        },
        set(i, s) {
            n.has(i) ? n.set(i, s) : o(i, s)
        }
    }
}
  , ug = "!"
  , Vw = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , i = t.length
      , s = a => {
        const l = [];
        let u = 0, c = 0, f;
        for (let w = 0; w < a.length; w++) {
            let v = a[w];
            if (u === 0) {
                if (v === o && (r || a.slice(w, w + i) === t)) {
                    l.push(a.slice(c, w)),
                    c = w + i;
                    continue
                }
                if (v === "/") {
                    f = w;
                    continue
                }
            }
            v === "[" ? u++ : v === "]" && u--
        }
        const g = l.length === 0 ? a : a.substring(c)
          , d = g.startsWith(ug)
          , S = d ? g.substring(1) : g
          , m = f && f > c ? f - c : void 0;
        return {
            modifiers: l,
            hasImportantModifier: d,
            baseClassName: S,
            maybePostfixModifierPosition: m
        }
    }
    ;
    return n ? a => n({
        className: a,
        parseClassName: s
    }) : s
}
  , Ww = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , Hw = e => ({
    cache: Uw(e.cacheSize),
    parseClassName: Vw(e),
    ...Iw(e)
})
  , Qw = /\s+/
  , Kw = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , i = []
      , s = e.trim().split(Qw);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
        const u = s[l]
          , {modifiers: c, hasImportantModifier: f, baseClassName: g, maybePostfixModifierPosition: d} = n(u);
        let S = !!d
          , m = r(S ? g.substring(0, d) : g);
        if (!m) {
            if (!S) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            if (m = r(g),
            !m) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            S = !1
        }
        const w = Ww(c).join(":")
          , v = f ? w + ug : w
          , h = v + m;
        if (i.includes(h))
            continue;
        i.push(h);
        const x = o(m, S);
        for (let E = 0; E < x.length; ++E) {
            const b = x[E];
            i.push(v + b)
        }
        a = u + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function Gw() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = cg(t)) && (r && (r += " "),
        r += n);
    return r
}
const cg = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = cg(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function Yw(e, ...t) {
    let n, r, o, i = s;
    function s(l) {
        const u = t.reduce( (c, f) => f(c), e());
        return n = Hw(u),
        r = n.cache.get,
        o = n.cache.set,
        i = a,
        a(l)
    }
    function a(l) {
        const u = r(l);
        if (u)
            return u;
        const c = Kw(l, n);
        return o(l, c),
        c
    }
    return function() {
        return i(Gw.apply(null, arguments))
    }
}
const re = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , dg = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , qw = /^\d+\/\d+$/
  , Xw = new Set(["px", "full", "screen"])
  , Zw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Jw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , e1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , t1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , n1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Bt = e => Vr(e) || Xw.has(e) || qw.test(e)
  , fn = e => mo(e, "length", c1)
  , Vr = e => !!e && !Number.isNaN(Number(e))
  , il = e => mo(e, "number", Vr)
  , To = e => !!e && Number.isInteger(Number(e))
  , r1 = e => e.endsWith("%") && Vr(e.slice(0, -1))
  , H = e => dg.test(e)
  , pn = e => Zw.test(e)
  , o1 = new Set(["length", "size", "percentage"])
  , i1 = e => mo(e, o1, fg)
  , s1 = e => mo(e, "position", fg)
  , a1 = new Set(["image", "url"])
  , l1 = e => mo(e, a1, f1)
  , u1 = e => mo(e, "", d1)
  , Ro = () => !0
  , mo = (e, t, n) => {
    const r = dg.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , c1 = e => Jw.test(e) && !e1.test(e)
  , fg = () => !1
  , d1 = e => t1.test(e)
  , f1 = e => n1.test(e)
  , p1 = () => {
    const e = re("colors")
      , t = re("spacing")
      , n = re("blur")
      , r = re("brightness")
      , o = re("borderColor")
      , i = re("borderRadius")
      , s = re("borderSpacing")
      , a = re("borderWidth")
      , l = re("contrast")
      , u = re("grayscale")
      , c = re("hueRotate")
      , f = re("invert")
      , g = re("gap")
      , d = re("gradientColorStops")
      , S = re("gradientColorStopPositions")
      , m = re("inset")
      , w = re("margin")
      , v = re("opacity")
      , h = re("padding")
      , x = re("saturate")
      , E = re("scale")
      , b = re("sepia")
      , C = re("skew")
      , k = re("space")
      , R = re("translate")
      , A = () => ["auto", "contain", "none"]
      , _ = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , z = () => ["auto", H, t]
      , I = () => [H, t]
      , Q = () => ["", Bt, fn]
      , M = () => ["auto", Vr, H]
      , Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , $ = () => ["solid", "dashed", "dotted", "double", "none"]
      , V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , T = () => ["", "0", H]
      , D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , W = () => [Vr, H];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Ro],
            spacing: [Bt, fn],
            blur: ["none", "", pn, H],
            brightness: W(),
            borderColor: [e],
            borderRadius: ["none", "", "full", pn, H],
            borderSpacing: I(),
            borderWidth: Q(),
            contrast: W(),
            grayscale: T(),
            hueRotate: W(),
            invert: T(),
            gap: I(),
            gradientColorStops: [e],
            gradientColorStopPositions: [r1, fn],
            inset: z(),
            margin: z(),
            opacity: W(),
            padding: I(),
            saturate: W(),
            scale: W(),
            sepia: T(),
            skew: W(),
            space: I(),
            translate: I()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", H]
            }],
            container: ["container"],
            columns: [{
                columns: [pn]
            }],
            "break-after": [{
                "break-after": D()
            }],
            "break-before": [{
                "break-before": D()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...Y(), H]
            }],
            overflow: [{
                overflow: _()
            }],
            "overflow-x": [{
                "overflow-x": _()
            }],
            "overflow-y": [{
                "overflow-y": _()
            }],
            overscroll: [{
                overscroll: A()
            }],
            "overscroll-x": [{
                "overscroll-x": A()
            }],
            "overscroll-y": [{
                "overscroll-y": A()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [m]
            }],
            "inset-x": [{
                "inset-x": [m]
            }],
            "inset-y": [{
                "inset-y": [m]
            }],
            start: [{
                start: [m]
            }],
            end: [{
                end: [m]
            }],
            top: [{
                top: [m]
            }],
            right: [{
                right: [m]
            }],
            bottom: [{
                bottom: [m]
            }],
            left: [{
                left: [m]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", To, H]
            }],
            basis: [{
                basis: z()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", H]
            }],
            grow: [{
                grow: T()
            }],
            shrink: [{
                shrink: T()
            }],
            order: [{
                order: ["first", "last", "none", To, H]
            }],
            "grid-cols": [{
                "grid-cols": [Ro]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", To, H]
                }, H]
            }],
            "col-start": [{
                "col-start": M()
            }],
            "col-end": [{
                "col-end": M()
            }],
            "grid-rows": [{
                "grid-rows": [Ro]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [To, H]
                }, H]
            }],
            "row-start": [{
                "row-start": M()
            }],
            "row-end": [{
                "row-end": M()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", H]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", H]
            }],
            gap: [{
                gap: [g]
            }],
            "gap-x": [{
                "gap-x": [g]
            }],
            "gap-y": [{
                "gap-y": [g]
            }],
            "justify-content": [{
                justify: ["normal", ...P()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...P(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...P(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [h]
            }],
            px: [{
                px: [h]
            }],
            py: [{
                py: [h]
            }],
            ps: [{
                ps: [h]
            }],
            pe: [{
                pe: [h]
            }],
            pt: [{
                pt: [h]
            }],
            pr: [{
                pr: [h]
            }],
            pb: [{
                pb: [h]
            }],
            pl: [{
                pl: [h]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [k]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [k]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", H, t]
            }],
            "min-w": [{
                "min-w": [H, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [H, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [pn]
                }, pn]
            }],
            h: [{
                h: [H, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [H, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", pn, fn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", il]
            }],
            "font-family": [{
                font: [Ro]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", H]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Vr, il]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Bt, H]
            }],
            "list-image": [{
                "list-image": ["none", H]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", H]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [v]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [v]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...$(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Bt, fn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Bt, H]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: I()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", H]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", H]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [v]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...Y(), s1]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", i1]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, l1]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [S]
            }],
            "gradient-via-pos": [{
                via: [S]
            }],
            "gradient-to-pos": [{
                to: [S]
            }],
            "gradient-from": [{
                from: [d]
            }],
            "gradient-via": [{
                via: [d]
            }],
            "gradient-to": [{
                to: [d]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [v]
            }],
            "border-style": [{
                border: [...$(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [v]
            }],
            "divide-style": [{
                divide: $()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...$()]
            }],
            "outline-offset": [{
                "outline-offset": [Bt, H]
            }],
            "outline-w": [{
                outline: [Bt, fn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: Q()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [v]
            }],
            "ring-offset-w": [{
                "ring-offset": [Bt, fn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", pn, u1]
            }],
            "shadow-color": [{
                shadow: [Ro]
            }],
            opacity: [{
                opacity: [v]
            }],
            "mix-blend": [{
                "mix-blend": [...V(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": V()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", pn, H]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [f]
            }],
            saturate: [{
                saturate: [x]
            }],
            sepia: [{
                sepia: [b]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [f]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [v]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [x]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [b]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", H]
            }],
            duration: [{
                duration: W()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", H]
            }],
            delay: [{
                delay: W()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", H]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [E]
            }],
            "scale-x": [{
                "scale-x": [E]
            }],
            "scale-y": [{
                "scale-y": [E]
            }],
            rotate: [{
                rotate: [To, H]
            }],
            "translate-x": [{
                "translate-x": [R]
            }],
            "translate-y": [{
                "translate-y": [R]
            }],
            "skew-x": [{
                "skew-x": [C]
            }],
            "skew-y": [{
                "skew-y": [C]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", H]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", H]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": I()
            }],
            "scroll-mx": [{
                "scroll-mx": I()
            }],
            "scroll-my": [{
                "scroll-my": I()
            }],
            "scroll-ms": [{
                "scroll-ms": I()
            }],
            "scroll-me": [{
                "scroll-me": I()
            }],
            "scroll-mt": [{
                "scroll-mt": I()
            }],
            "scroll-mr": [{
                "scroll-mr": I()
            }],
            "scroll-mb": [{
                "scroll-mb": I()
            }],
            "scroll-ml": [{
                "scroll-ml": I()
            }],
            "scroll-p": [{
                "scroll-p": I()
            }],
            "scroll-px": [{
                "scroll-px": I()
            }],
            "scroll-py": [{
                "scroll-py": I()
            }],
            "scroll-ps": [{
                "scroll-ps": I()
            }],
            "scroll-pe": [{
                "scroll-pe": I()
            }],
            "scroll-pt": [{
                "scroll-pt": I()
            }],
            "scroll-pr": [{
                "scroll-pr": I()
            }],
            "scroll-pb": [{
                "scroll-pb": I()
            }],
            "scroll-pl": [{
                "scroll-pl": I()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", H]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Bt, fn, il]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , h1 = Yw(p1);
function Ae(...e) {
    return h1(eg(e))
}
const m1 = Cw
  , pg = y.forwardRef( ({className: e, ...t}, n) => p.jsx(Km, {
    ref: n,
    className: Ae("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
pg.displayName = Km.displayName;
const g1 = Pc("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , hg = y.forwardRef( ({className: e, variant: t, ...n}, r) => p.jsx(Gm, {
    ref: r,
    className: Ae(g1({
        variant: t
    }), e),
    ...n
}));
hg.displayName = Gm.displayName;
const v1 = y.forwardRef( ({className: e, ...t}, n) => p.jsx(Xm, {
    ref: n,
    className: Ae("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
v1.displayName = Xm.displayName;
const mg = y.forwardRef( ({className: e, ...t}, n) => p.jsx(Zm, {
    ref: n,
    className: Ae("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: p.jsx(Tc, {
        className: "h-4 w-4"
    })
}));
mg.displayName = Zm.displayName;
const gg = y.forwardRef( ({className: e, ...t}, n) => p.jsx(Ym, {
    ref: n,
    className: Ae("text-sm font-semibold", e),
    ...t
}));
gg.displayName = Ym.displayName;
const vg = y.forwardRef( ({className: e, ...t}, n) => p.jsx(qm, {
    ref: n,
    className: Ae("text-sm opacity-90", e),
    ...t
}));
vg.displayName = qm.displayName;
function y1() {
    const {toasts: e} = Ec();
    return p.jsxs(m1, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...i}) {
            return p.jsxs(hg, {
                ...i,
                children: [p.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && p.jsx(gg, {
                        children: n
                    }), r && p.jsx(vg, {
                        children: r
                    })]
                }), o, p.jsx(mg, {})]
            }, t)
        }), p.jsx(pg, {})]
    })
}
var xf = ["light", "dark"]
  , x1 = "(prefers-color-scheme: dark)"
  , w1 = y.createContext(void 0)
  , S1 = {
    setTheme: e => {}
    ,
    themes: []
}
  , E1 = () => {
    var e;
    return (e = y.useContext(w1)) != null ? e : S1
}
;
y.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: i, value: s, attrs: a, nonce: l}) => {
    let u = i === "system"
      , c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(S => `'${S}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , f = o ? xf.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , g = (S, m=!1, w=!0) => {
        let v = s ? s[S] : S
          , h = m ? S + "|| ''" : `'${v}'`
          , x = "";
        return o && w && !m && xf.includes(S) && (x += `d.style.colorScheme = '${S}';`),
        n === "class" ? m || v ? x += `c.add(${h})` : x += "null" : v && (x += `d[s](n,${h})`),
        x
    }
      , d = e ? `!function(){${c}${g(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${x1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${g(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + g(i, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${g(s ? "x[e]" : "e", !0)}}else{${g(i, !1, !1)};}${f}}catch(t){}}();`;
    return y.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: d
        }
    })
}
);
var b1 = e => {
    switch (e) {
    case "success":
        return N1;
    case "info":
        return T1;
    case "warning":
        return P1;
    case "error":
        return R1;
    default:
        return null
    }
}
  , C1 = Array(12).fill(0)
  , k1 = ({visible: e, className: t}) => O.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, O.createElement("div", {
    className: "sonner-spinner"
}, C1.map( (n, r) => O.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , N1 = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , P1 = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , T1 = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , R1 = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , j1 = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, O.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), O.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , O1 = () => {
    let[e,t] = O.useState(document.hidden);
    return O.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , mu = 1
  , _1 = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : mu++
              , i = this.toasts.find(a => a.id === o)
              , s = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i ? this.toasts = this.toasts.map(a => a.id === o ? (this.publish({
                ...a,
                ...e,
                id: o,
                title: n
            }),
            {
                ...a,
                ...e,
                id: o,
                dismissible: s,
                title: n
            }) : a) : this.addToast({
                title: n,
                ...r,
                dismissible: s,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), o = n !== void 0, i, s = r.then(async l => {
                if (i = ["resolve", l],
                O.isValidElement(l))
                    o = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (M1(l) && !l.ok) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: c
                    })
                }
            }
            ).catch(async l => {
                if (i = ["reject", l],
                t.error !== void 0) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                }
            }
            ).finally( () => {
                var l;
                o && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), a = () => new Promise( (l, u) => s.then( () => i[0] === "reject" ? u(i[1]) : l(i[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: a
            } : Object.assign(n, {
                unwrap: a
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || mu++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , Be = new _1
  , A1 = (e, t) => {
    let n = (t == null ? void 0 : t.id) || mu++;
    return Be.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , M1 = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , D1 = A1
  , L1 = () => Be.toasts
  , I1 = () => Be.getActiveToasts();
Object.assign(D1, {
    success: Be.success,
    info: Be.info,
    warning: Be.warning,
    error: Be.error,
    custom: Be.custom,
    message: Be.message,
    promise: Be.promise,
    dismiss: Be.dismiss,
    loading: Be.loading
}, {
    getHistory: L1,
    getToasts: I1
});
function F1(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
F1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Qi(e) {
    return e.label !== void 0
}
var z1 = 3
  , $1 = "32px"
  , B1 = "16px"
  , wf = 4e3
  , U1 = 356
  , V1 = 14
  , W1 = 20
  , H1 = 200;
function ht(...e) {
    return e.filter(Boolean).join(" ")
}
function Q1(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var K1 = e => {
    var t, n, r, o, i, s, a, l, u, c, f;
    let {invert: g, toast: d, unstyled: S, interacting: m, setHeights: w, visibleToasts: v, heights: h, index: x, toasts: E, expanded: b, removeToast: C, defaultRichColors: k, closeButton: R, style: A, cancelButtonStyle: _, actionButtonStyle: z, className: I="", descriptionClassName: Q="", duration: M, position: Y, gap: $, loadingIcon: V, expandByDefault: P, classNames: T, icons: D, closeButtonAriaLabel: W="Close toast", pauseWhenPageIsHidden: F} = e
      , [K,q] = O.useState(null)
      , [me,Ne] = O.useState(null)
      , [J,mr] = O.useState(!1)
      , [on,Wn] = O.useState(!1)
      , [sn,gr] = O.useState(!1)
      , [an,bi] = O.useState(!1)
      , [ka,Ci] = O.useState(!1)
      , [Na,yo] = O.useState(0)
      , [vr,Qc] = O.useState(0)
      , xo = O.useRef(d.duration || M || wf)
      , Kc = O.useRef(null)
      , Hn = O.useRef(null)
      , Qv = x === 0
      , Kv = x + 1 <= v
      , nt = d.type
      , yr = d.dismissible !== !1
      , Gv = d.className || ""
      , Yv = d.descriptionClassName || ""
      , ki = O.useMemo( () => h.findIndex(B => B.toastId === d.id) || 0, [h, d.id])
      , qv = O.useMemo( () => {
        var B;
        return (B = d.closeButton) != null ? B : R
    }
    , [d.closeButton, R])
      , Gc = O.useMemo( () => d.duration || M || wf, [d.duration, M])
      , Pa = O.useRef(0)
      , xr = O.useRef(0)
      , Yc = O.useRef(0)
      , wr = O.useRef(null)
      , [Xv,Zv] = Y.split("-")
      , qc = O.useMemo( () => h.reduce( (B, te, se) => se >= ki ? B : B + te.height, 0), [h, ki])
      , Xc = O1()
      , Jv = d.invert || g
      , Ta = nt === "loading";
    xr.current = O.useMemo( () => ki * $ + qc, [ki, qc]),
    O.useEffect( () => {
        xo.current = Gc
    }
    , [Gc]),
    O.useEffect( () => {
        mr(!0)
    }
    , []),
    O.useEffect( () => {
        let B = Hn.current;
        if (B) {
            let te = B.getBoundingClientRect().height;
            return Qc(te),
            w(se => [{
                toastId: d.id,
                height: te,
                position: d.position
            }, ...se]),
            () => w(se => se.filter(ct => ct.toastId !== d.id))
        }
    }
    , [w, d.id]),
    O.useLayoutEffect( () => {
        if (!J)
            return;
        let B = Hn.current
          , te = B.style.height;
        B.style.height = "auto";
        let se = B.getBoundingClientRect().height;
        B.style.height = te,
        Qc(se),
        w(ct => ct.find(dt => dt.toastId === d.id) ? ct.map(dt => dt.toastId === d.id ? {
            ...dt,
            height: se
        } : dt) : [{
            toastId: d.id,
            height: se,
            position: d.position
        }, ...ct])
    }
    , [J, d.title, d.description, w, d.id]);
    let ln = O.useCallback( () => {
        Wn(!0),
        yo(xr.current),
        w(B => B.filter(te => te.toastId !== d.id)),
        setTimeout( () => {
            C(d)
        }
        , H1)
    }
    , [d, C, w, xr]);
    O.useEffect( () => {
        if (d.promise && nt === "loading" || d.duration === 1 / 0 || d.type === "loading")
            return;
        let B;
        return b || m || F && Xc ? ( () => {
            if (Yc.current < Pa.current) {
                let te = new Date().getTime() - Pa.current;
                xo.current = xo.current - te
            }
            Yc.current = new Date().getTime()
        }
        )() : xo.current !== 1 / 0 && (Pa.current = new Date().getTime(),
        B = setTimeout( () => {
            var te;
            (te = d.onAutoClose) == null || te.call(d, d),
            ln()
        }
        , xo.current)),
        () => clearTimeout(B)
    }
    , [b, m, d, nt, F, Xc, ln]),
    O.useEffect( () => {
        d.delete && ln()
    }
    , [ln, d.delete]);
    function ey() {
        var B, te, se;
        return D != null && D.loading ? O.createElement("div", {
            className: ht(T == null ? void 0 : T.loader, (B = d == null ? void 0 : d.classNames) == null ? void 0 : B.loader, "sonner-loader"),
            "data-visible": nt === "loading"
        }, D.loading) : V ? O.createElement("div", {
            className: ht(T == null ? void 0 : T.loader, (te = d == null ? void 0 : d.classNames) == null ? void 0 : te.loader, "sonner-loader"),
            "data-visible": nt === "loading"
        }, V) : O.createElement(k1, {
            className: ht(T == null ? void 0 : T.loader, (se = d == null ? void 0 : d.classNames) == null ? void 0 : se.loader),
            visible: nt === "loading"
        })
    }
    return O.createElement("li", {
        tabIndex: 0,
        ref: Hn,
        className: ht(I, Gv, T == null ? void 0 : T.toast, (t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast, T == null ? void 0 : T.default, T == null ? void 0 : T[nt], (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[nt]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = d.richColors) != null ? r : k,
        "data-styled": !(d.jsx || d.unstyled || S),
        "data-mounted": J,
        "data-promise": !!d.promise,
        "data-swiped": ka,
        "data-removed": on,
        "data-visible": Kv,
        "data-y-position": Xv,
        "data-x-position": Zv,
        "data-index": x,
        "data-front": Qv,
        "data-swiping": sn,
        "data-dismissible": yr,
        "data-type": nt,
        "data-invert": Jv,
        "data-swipe-out": an,
        "data-swipe-direction": me,
        "data-expanded": !!(b || P && J),
        style: {
            "--index": x,
            "--toasts-before": x,
            "--z-index": E.length - x,
            "--offset": `${on ? Na : xr.current}px`,
            "--initial-height": P ? "auto" : `${vr}px`,
            ...A,
            ...d.style
        },
        onDragEnd: () => {
            gr(!1),
            q(null),
            wr.current = null
        }
        ,
        onPointerDown: B => {
            Ta || !yr || (Kc.current = new Date,
            yo(xr.current),
            B.target.setPointerCapture(B.pointerId),
            B.target.tagName !== "BUTTON" && (gr(!0),
            wr.current = {
                x: B.clientX,
                y: B.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var B, te, se, ct;
            if (an || !yr)
                return;
            wr.current = null;
            let dt = Number(((B = Hn.current) == null ? void 0 : B.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , un = Number(((te = Hn.current) == null ? void 0 : te.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , Qn = new Date().getTime() - ((se = Kc.current) == null ? void 0 : se.getTime())
              , ft = K === "x" ? dt : un
              , cn = Math.abs(ft) / Qn;
            if (Math.abs(ft) >= W1 || cn > .11) {
                yo(xr.current),
                (ct = d.onDismiss) == null || ct.call(d, d),
                Ne(K === "x" ? dt > 0 ? "right" : "left" : un > 0 ? "down" : "up"),
                ln(),
                bi(!0),
                Ci(!1);
                return
            }
            gr(!1),
            q(null)
        }
        ,
        onPointerMove: B => {
            var te, se, ct, dt;
            if (!wr.current || !yr || ((te = window.getSelection()) == null ? void 0 : te.toString().length) > 0)
                return;
            let un = B.clientY - wr.current.y
              , Qn = B.clientX - wr.current.x
              , ft = (se = e.swipeDirections) != null ? se : Q1(Y);
            !K && (Math.abs(Qn) > 1 || Math.abs(un) > 1) && q(Math.abs(Qn) > Math.abs(un) ? "x" : "y");
            let cn = {
                x: 0,
                y: 0
            };
            K === "y" ? (ft.includes("top") || ft.includes("bottom")) && (ft.includes("top") && un < 0 || ft.includes("bottom") && un > 0) && (cn.y = un) : K === "x" && (ft.includes("left") || ft.includes("right")) && (ft.includes("left") && Qn < 0 || ft.includes("right") && Qn > 0) && (cn.x = Qn),
            (Math.abs(cn.x) > 0 || Math.abs(cn.y) > 0) && Ci(!0),
            (ct = Hn.current) == null || ct.style.setProperty("--swipe-amount-x", `${cn.x}px`),
            (dt = Hn.current) == null || dt.style.setProperty("--swipe-amount-y", `${cn.y}px`)
        }
    }, qv && !d.jsx ? O.createElement("button", {
        "aria-label": W,
        "data-disabled": Ta,
        "data-close-button": !0,
        onClick: Ta || !yr ? () => {}
        : () => {
            var B;
            ln(),
            (B = d.onDismiss) == null || B.call(d, d)
        }
        ,
        className: ht(T == null ? void 0 : T.closeButton, (o = d == null ? void 0 : d.classNames) == null ? void 0 : o.closeButton)
    }, (i = D == null ? void 0 : D.close) != null ? i : j1) : null, d.jsx || y.isValidElement(d.title) ? d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title : O.createElement(O.Fragment, null, nt || d.icon || d.promise ? O.createElement("div", {
        "data-icon": "",
        className: ht(T == null ? void 0 : T.icon, (s = d == null ? void 0 : d.classNames) == null ? void 0 : s.icon)
    }, d.promise || d.type === "loading" && !d.icon ? d.icon || ey() : null, d.type !== "loading" ? d.icon || (D == null ? void 0 : D[nt]) || b1(nt) : null) : null, O.createElement("div", {
        "data-content": "",
        className: ht(T == null ? void 0 : T.content, (a = d == null ? void 0 : d.classNames) == null ? void 0 : a.content)
    }, O.createElement("div", {
        "data-title": "",
        className: ht(T == null ? void 0 : T.title, (l = d == null ? void 0 : d.classNames) == null ? void 0 : l.title)
    }, typeof d.title == "function" ? d.title() : d.title), d.description ? O.createElement("div", {
        "data-description": "",
        className: ht(Q, Yv, T == null ? void 0 : T.description, (u = d == null ? void 0 : d.classNames) == null ? void 0 : u.description)
    }, typeof d.description == "function" ? d.description() : d.description) : null), y.isValidElement(d.cancel) ? d.cancel : d.cancel && Qi(d.cancel) ? O.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: d.cancelButtonStyle || _,
        onClick: B => {
            var te, se;
            Qi(d.cancel) && yr && ((se = (te = d.cancel).onClick) == null || se.call(te, B),
            ln())
        }
        ,
        className: ht(T == null ? void 0 : T.cancelButton, (c = d == null ? void 0 : d.classNames) == null ? void 0 : c.cancelButton)
    }, d.cancel.label) : null, y.isValidElement(d.action) ? d.action : d.action && Qi(d.action) ? O.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: d.actionButtonStyle || z,
        onClick: B => {
            var te, se;
            Qi(d.action) && ((se = (te = d.action).onClick) == null || se.call(te, B),
            !B.defaultPrevented && ln())
        }
        ,
        className: ht(T == null ? void 0 : T.actionButton, (f = d == null ? void 0 : d.classNames) == null ? void 0 : f.actionButton)
    }, d.action.label) : null))
}
;
function Sf() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function G1(e, t) {
    let n = {};
    return [e, t].forEach( (r, o) => {
        let i = o === 1
          , s = i ? "--mobile-offset" : "--offset"
          , a = i ? B1 : $1;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${s}-${u}`] = a : n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : l(a)
    }
    ),
    n
}
var Y1 = y.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: o=["altKey", "KeyT"], expand: i, closeButton: s, className: a, offset: l, mobileOffset: u, theme: c="light", richColors: f, duration: g, style: d, visibleToasts: S=z1, toastOptions: m, dir: w=Sf(), gap: v=V1, loadingIcon: h, icons: x, containerAriaLabel: E="Notifications", pauseWhenPageIsHidden: b} = e
      , [C,k] = O.useState([])
      , R = O.useMemo( () => Array.from(new Set([r].concat(C.filter(F => F.position).map(F => F.position)))), [C, r])
      , [A,_] = O.useState([])
      , [z,I] = O.useState(!1)
      , [Q,M] = O.useState(!1)
      , [Y,$] = O.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , V = O.useRef(null)
      , P = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , T = O.useRef(null)
      , D = O.useRef(!1)
      , W = O.useCallback(F => {
        k(K => {
            var q;
            return (q = K.find(me => me.id === F.id)) != null && q.delete || Be.dismiss(F.id),
            K.filter( ({id: me}) => me !== F.id)
        }
        )
    }
    , []);
    return O.useEffect( () => Be.subscribe(F => {
        if (F.dismiss) {
            k(K => K.map(q => q.id === F.id ? {
                ...q,
                delete: !0
            } : q));
            return
        }
        setTimeout( () => {
            km.flushSync( () => {
                k(K => {
                    let q = K.findIndex(me => me.id === F.id);
                    return q !== -1 ? [...K.slice(0, q), {
                        ...K[q],
                        ...F
                    }, ...K.slice(q + 1)] : [F, ...K]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    O.useEffect( () => {
        if (c !== "system") {
            $(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")),
        typeof window > "u")
            return;
        let F = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            F.addEventListener("change", ({matches: K}) => {
                $(K ? "dark" : "light")
            }
            )
        } catch {
            F.addListener( ({matches: q}) => {
                try {
                    $(q ? "dark" : "light")
                } catch (me) {
                    console.error(me)
                }
            }
            )
        }
    }
    , [c]),
    O.useEffect( () => {
        C.length <= 1 && I(!1)
    }
    , [C]),
    O.useEffect( () => {
        let F = K => {
            var q, me;
            o.every(Ne => K[Ne] || K.code === Ne) && (I(!0),
            (q = V.current) == null || q.focus()),
            K.code === "Escape" && (document.activeElement === V.current || (me = V.current) != null && me.contains(document.activeElement)) && I(!1)
        }
        ;
        return document.addEventListener("keydown", F),
        () => document.removeEventListener("keydown", F)
    }
    , [o]),
    O.useEffect( () => {
        if (V.current)
            return () => {
                T.current && (T.current.focus({
                    preventScroll: !0
                }),
                T.current = null,
                D.current = !1)
            }
    }
    , [V.current]),
    O.createElement("section", {
        ref: t,
        "aria-label": `${E} ${P}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, R.map( (F, K) => {
        var q;
        let[me,Ne] = F.split("-");
        return C.length ? O.createElement("ol", {
            key: F,
            dir: w === "auto" ? Sf() : w,
            tabIndex: -1,
            ref: V,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": Y,
            "data-y-position": me,
            "data-lifted": z && C.length > 1 && !i,
            "data-x-position": Ne,
            style: {
                "--front-toast-height": `${((q = A[0]) == null ? void 0 : q.height) || 0}px`,
                "--width": `${U1}px`,
                "--gap": `${v}px`,
                ...d,
                ...G1(l, u)
            },
            onBlur: J => {
                D.current && !J.currentTarget.contains(J.relatedTarget) && (D.current = !1,
                T.current && (T.current.focus({
                    preventScroll: !0
                }),
                T.current = null))
            }
            ,
            onFocus: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || D.current || (D.current = !0,
                T.current = J.relatedTarget)
            }
            ,
            onMouseEnter: () => I(!0),
            onMouseMove: () => I(!0),
            onMouseLeave: () => {
                Q || I(!1)
            }
            ,
            onDragEnd: () => I(!1),
            onPointerDown: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || M(!0)
            }
            ,
            onPointerUp: () => M(!1)
        }, C.filter(J => !J.position && K === 0 || J.position === F).map( (J, mr) => {
            var on, Wn;
            return O.createElement(K1, {
                key: J.id,
                icons: x,
                index: mr,
                toast: J,
                defaultRichColors: f,
                duration: (on = m == null ? void 0 : m.duration) != null ? on : g,
                className: m == null ? void 0 : m.className,
                descriptionClassName: m == null ? void 0 : m.descriptionClassName,
                invert: n,
                visibleToasts: S,
                closeButton: (Wn = m == null ? void 0 : m.closeButton) != null ? Wn : s,
                interacting: Q,
                position: F,
                style: m == null ? void 0 : m.style,
                unstyled: m == null ? void 0 : m.unstyled,
                classNames: m == null ? void 0 : m.classNames,
                cancelButtonStyle: m == null ? void 0 : m.cancelButtonStyle,
                actionButtonStyle: m == null ? void 0 : m.actionButtonStyle,
                removeToast: W,
                toasts: C.filter(sn => sn.position == J.position),
                heights: A.filter(sn => sn.position == J.position),
                setHeights: _,
                expandByDefault: i,
                gap: v,
                loadingIcon: h,
                expanded: z,
                pauseWhenPageIsHidden: b,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const q1 = ({...e}) => {
    const {theme: t="system"} = E1();
    return p.jsx(Y1, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
;
var X1 = Ou[" useId ".trim().toString()] || ( () => {}
)
  , Z1 = 0;
function sl(e) {
    const [t,n] = y.useState(X1());
    return en( () => {
        e || n(r => r ?? String(Z1++))
    }
    , [e]),
    e || (t ? `radix-${t}` : "")
}
const J1 = ["top", "right", "bottom", "left"]
  , zn = Math.min
  , Ye = Math.max
  , $s = Math.round
  , Ki = Math.floor
  , It = e => ({
    x: e,
    y: e
})
  , eS = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , tS = {
    start: "end",
    end: "start"
};
function gu(e, t, n) {
    return Ye(e, zn(t, n))
}
function tn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function nn(e) {
    return e.split("-")[0]
}
function go(e) {
    return e.split("-")[1]
}
function jc(e) {
    return e === "x" ? "y" : "x"
}
function Oc(e) {
    return e === "y" ? "height" : "width"
}
const nS = new Set(["top", "bottom"]);
function Mt(e) {
    return nS.has(nn(e)) ? "y" : "x"
}
function _c(e) {
    return jc(Mt(e))
}
function rS(e, t, n) {
    n === void 0 && (n = !1);
    const r = go(e)
      , o = _c(e)
      , i = Oc(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = Bs(s)),
    [s, Bs(s)]
}
function oS(e) {
    const t = Bs(e);
    return [vu(e), t, vu(t)]
}
function vu(e) {
    return e.replace(/start|end/g, t => tS[t])
}
const Ef = ["left", "right"]
  , bf = ["right", "left"]
  , iS = ["top", "bottom"]
  , sS = ["bottom", "top"];
function aS(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? bf : Ef : t ? Ef : bf;
    case "left":
    case "right":
        return t ? iS : sS;
    default:
        return []
    }
}
function lS(e, t, n, r) {
    const o = go(e);
    let i = aS(nn(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o),
    t && (i = i.concat(i.map(vu)))),
    i
}
function Bs(e) {
    return e.replace(/left|right|bottom|top/g, t => eS[t])
}
function uS(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function yg(e) {
    return typeof e != "number" ? uS(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Us(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function Cf(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = Mt(t)
      , s = _c(t)
      , a = Oc(s)
      , l = nn(t)
      , u = i === "y"
      , c = r.x + r.width / 2 - o.width / 2
      , f = r.y + r.height / 2 - o.height / 2
      , g = r[a] / 2 - o[a] / 2;
    let d;
    switch (l) {
    case "top":
        d = {
            x: c,
            y: r.y - o.height
        };
        break;
    case "bottom":
        d = {
            x: c,
            y: r.y + r.height
        };
        break;
    case "right":
        d = {
            x: r.x + r.width,
            y: f
        };
        break;
    case "left":
        d = {
            x: r.x - o.width,
            y: f
        };
        break;
    default:
        d = {
            x: r.x,
            y: r.y
        }
    }
    switch (go(t)) {
    case "start":
        d[s] -= g * (n && u ? -1 : 1);
        break;
    case "end":
        d[s] += g * (n && u ? -1 : 1);
        break
    }
    return d
}
const cS = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: s} = n
      , a = i.filter(Boolean)
      , l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: c, y: f} = Cf(u, r, l)
      , g = r
      , d = {}
      , S = 0;
    for (let m = 0; m < a.length; m++) {
        const {name: w, fn: v} = a[m]
          , {x: h, y: x, data: E, reset: b} = await v({
            x: c,
            y: f,
            initialPlacement: r,
            placement: g,
            strategy: o,
            middlewareData: d,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = h ?? c,
        f = x ?? f,
        d = {
            ...d,
            [w]: {
                ...d[w],
                ...E
            }
        },
        b && S <= 50 && (S++,
        typeof b == "object" && (b.placement && (g = b.placement),
        b.rects && (u = b.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : b.rects),
        {x: c, y: f} = Cf(u, g, l)),
        m = -1)
    }
    return {
        x: c,
        y: f,
        placement: g,
        strategy: o,
        middlewareData: d
    }
}
;
async function li(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: s, elements: a, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: f="floating", altBoundary: g=!1, padding: d=0} = tn(t, e)
      , S = yg(d)
      , w = a[g ? f === "floating" ? "reference" : "floating" : f]
      , v = Us(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: l
    }))
      , h = f === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating))
      , E = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , b = Us(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: h,
        offsetParent: x,
        strategy: l
    }) : h);
    return {
        top: (v.top - b.top + S.top) / E.y,
        bottom: (b.bottom - v.bottom + S.bottom) / E.y,
        left: (v.left - b.left + S.left) / E.x,
        right: (b.right - v.right + S.right) / E.x
    }
}
const dS = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: s, elements: a, middlewareData: l} = t
          , {element: u, padding: c=0} = tn(e, t) || {};
        if (u == null)
            return {};
        const f = yg(c)
          , g = {
            x: n,
            y: r
        }
          , d = _c(o)
          , S = Oc(d)
          , m = await s.getDimensions(u)
          , w = d === "y"
          , v = w ? "top" : "left"
          , h = w ? "bottom" : "right"
          , x = w ? "clientHeight" : "clientWidth"
          , E = i.reference[S] + i.reference[d] - g[d] - i.floating[S]
          , b = g[d] - i.reference[d]
          , C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let k = C ? C[x] : 0;
        (!k || !await (s.isElement == null ? void 0 : s.isElement(C))) && (k = a.floating[x] || i.floating[S]);
        const R = E / 2 - b / 2
          , A = k / 2 - m[S] / 2 - 1
          , _ = zn(f[v], A)
          , z = zn(f[h], A)
          , I = _
          , Q = k - m[S] - z
          , M = k / 2 - m[S] / 2 + R
          , Y = gu(I, M, Q)
          , $ = !l.arrow && go(o) != null && M !== Y && i.reference[S] / 2 - (M < I ? _ : z) - m[S] / 2 < 0
          , V = $ ? M < I ? M - I : M - Q : 0;
        return {
            [d]: g[d] + V,
            data: {
                [d]: Y,
                centerOffset: M - Y - V,
                ...$ && {
                    alignmentOffset: V
                }
            },
            reset: $
        }
    }
})
  , fS = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: i, rects: s, initialPlacement: a, platform: l, elements: u} = t
              , {mainAxis: c=!0, crossAxis: f=!0, fallbackPlacements: g, fallbackStrategy: d="bestFit", fallbackAxisSideDirection: S="none", flipAlignment: m=!0, ...w} = tn(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            const v = nn(o)
              , h = Mt(a)
              , x = nn(a) === a
              , E = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , b = g || (x || !m ? [Bs(a)] : oS(a))
              , C = S !== "none";
            !g && C && b.push(...lS(a, m, S, E));
            const k = [a, ...b]
              , R = await li(t, w)
              , A = [];
            let _ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (c && A.push(R[v]),
            f) {
                const M = rS(o, s, E);
                A.push(R[M[0]], R[M[1]])
            }
            if (_ = [..._, {
                placement: o,
                overflows: A
            }],
            !A.every(M => M <= 0)) {
                var z, I;
                const M = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1
                  , Y = k[M];
                if (Y && (!(f === "alignment" ? h !== Mt(Y) : !1) || _.every(P => P.overflows[0] > 0 && Mt(P.placement) === h)))
                    return {
                        data: {
                            index: M,
                            overflows: _
                        },
                        reset: {
                            placement: Y
                        }
                    };
                let $ = (I = _.filter(V => V.overflows[0] <= 0).sort( (V, P) => V.overflows[1] - P.overflows[1])[0]) == null ? void 0 : I.placement;
                if (!$)
                    switch (d) {
                    case "bestFit":
                        {
                            var Q;
                            const V = (Q = _.filter(P => {
                                if (C) {
                                    const T = Mt(P.placement);
                                    return T === h || T === "y"
                                }
                                return !0
                            }
                            ).map(P => [P.placement, P.overflows.filter(T => T > 0).reduce( (T, D) => T + D, 0)]).sort( (P, T) => P[1] - T[1])[0]) == null ? void 0 : Q[0];
                            V && ($ = V);
                            break
                        }
                    case "initialPlacement":
                        $ = a;
                        break
                    }
                if (o !== $)
                    return {
                        reset: {
                            placement: $
                        }
                    }
            }
            return {}
        }
    }
};
function kf(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Nf(e) {
    return J1.some(t => e[t] >= 0)
}
const pS = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = tn(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const i = await li(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , s = kf(i, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: s,
                            referenceHidden: Nf(s)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await li(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , s = kf(i, n.floating);
                    return {
                        data: {
                            escapedOffsets: s,
                            escaped: Nf(s)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , xg = new Set(["left", "top"]);
async function hS(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , s = nn(n)
      , a = go(n)
      , l = Mt(n) === "y"
      , u = xg.has(s) ? -1 : 1
      , c = i && l ? -1 : 1
      , f = tn(t, e);
    let {mainAxis: g, crossAxis: d, alignmentAxis: S} = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return a && typeof S == "number" && (d = a === "end" ? S * -1 : S),
    l ? {
        x: d * c,
        y: g * u
    } : {
        x: g * u,
        y: d * c
    }
}
const mS = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: i, placement: s, middlewareData: a} = t
              , l = await hS(t, e);
            return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: o + l.x,
                y: i + l.y,
                data: {
                    ...l,
                    placement: s
                }
            }
        }
    }
}
  , gS = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: i=!0, crossAxis: s=!1, limiter: a={
                fn: w => {
                    let {x: v, y: h} = w;
                    return {
                        x: v,
                        y: h
                    }
                }
            }, ...l} = tn(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await li(t, l)
              , f = Mt(nn(o))
              , g = jc(f);
            let d = u[g]
              , S = u[f];
            if (i) {
                const w = g === "y" ? "top" : "left"
                  , v = g === "y" ? "bottom" : "right"
                  , h = d + c[w]
                  , x = d - c[v];
                d = gu(h, d, x)
            }
            if (s) {
                const w = f === "y" ? "top" : "left"
                  , v = f === "y" ? "bottom" : "right"
                  , h = S + c[w]
                  , x = S - c[v];
                S = gu(h, S, x)
            }
            const m = a.fn({
                ...t,
                [g]: d,
                [f]: S
            });
            return {
                ...m,
                data: {
                    x: m.x - n,
                    y: m.y - r,
                    enabled: {
                        [g]: i,
                        [f]: s
                    }
                }
            }
        }
    }
}
  , vS = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: i, middlewareData: s} = t
              , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = tn(e, t)
              , c = {
                x: n,
                y: r
            }
              , f = Mt(o)
              , g = jc(f);
            let d = c[g]
              , S = c[f];
            const m = tn(a, t)
              , w = typeof m == "number" ? {
                mainAxis: m,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...m
            };
            if (l) {
                const x = g === "y" ? "height" : "width"
                  , E = i.reference[g] - i.floating[x] + w.mainAxis
                  , b = i.reference[g] + i.reference[x] - w.mainAxis;
                d < E ? d = E : d > b && (d = b)
            }
            if (u) {
                var v, h;
                const x = g === "y" ? "width" : "height"
                  , E = xg.has(nn(o))
                  , b = i.reference[f] - i.floating[x] + (E && ((v = s.offset) == null ? void 0 : v[f]) || 0) + (E ? 0 : w.crossAxis)
                  , C = i.reference[f] + i.reference[x] + (E ? 0 : ((h = s.offset) == null ? void 0 : h[f]) || 0) - (E ? w.crossAxis : 0);
                S < b ? S = b : S > C && (S = C)
            }
            return {
                [g]: d,
                [f]: S
            }
        }
    }
}
  , yS = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: i, platform: s, elements: a} = t
              , {apply: l= () => {}
            , ...u} = tn(e, t)
              , c = await li(t, u)
              , f = nn(o)
              , g = go(o)
              , d = Mt(o) === "y"
              , {width: S, height: m} = i.floating;
            let w, v;
            f === "top" || f === "bottom" ? (w = f,
            v = g === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = f,
            w = g === "end" ? "top" : "bottom");
            const h = m - c.top - c.bottom
              , x = S - c.left - c.right
              , E = zn(m - c[w], h)
              , b = zn(S - c[v], x)
              , C = !t.middlewareData.shift;
            let k = E
              , R = b;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (R = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (k = h),
            C && !g) {
                const _ = Ye(c.left, 0)
                  , z = Ye(c.right, 0)
                  , I = Ye(c.top, 0)
                  , Q = Ye(c.bottom, 0);
                d ? R = S - 2 * (_ !== 0 || z !== 0 ? _ + z : Ye(c.left, c.right)) : k = m - 2 * (I !== 0 || Q !== 0 ? I + Q : Ye(c.top, c.bottom))
            }
            await l({
                ...t,
                availableWidth: R,
                availableHeight: k
            });
            const A = await s.getDimensions(a.floating);
            return S !== A.width || m !== A.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function pa() {
    return typeof window < "u"
}
function vo(e) {
    return wg(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Ze(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function $t(e) {
    var t;
    return (t = (wg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function wg(e) {
    return pa() ? e instanceof Node || e instanceof Ze(e).Node : !1
}
function Ct(e) {
    return pa() ? e instanceof Element || e instanceof Ze(e).Element : !1
}
function zt(e) {
    return pa() ? e instanceof HTMLElement || e instanceof Ze(e).HTMLElement : !1
}
function Pf(e) {
    return !pa() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ze(e).ShadowRoot
}
const xS = new Set(["inline", "contents"]);
function Ei(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = kt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !xS.has(o)
}
const wS = new Set(["table", "td", "th"]);
function SS(e) {
    return wS.has(vo(e))
}
const ES = [":popover-open", ":modal"];
function ha(e) {
    return ES.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const bS = ["transform", "translate", "scale", "rotate", "perspective"]
  , CS = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , kS = ["paint", "layout", "strict", "content"];
function Ac(e) {
    const t = Mc()
      , n = Ct(e) ? kt(e) : e;
    return bS.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || CS.some(r => (n.willChange || "").includes(r)) || kS.some(r => (n.contain || "").includes(r))
}
function NS(e) {
    let t = $n(e);
    for (; zt(t) && !lo(t); ) {
        if (Ac(t))
            return t;
        if (ha(t))
            return null;
        t = $n(t)
    }
    return null
}
function Mc() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const PS = new Set(["html", "body", "#document"]);
function lo(e) {
    return PS.has(vo(e))
}
function kt(e) {
    return Ze(e).getComputedStyle(e)
}
function ma(e) {
    return Ct(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function $n(e) {
    if (vo(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Pf(e) && e.host || $t(e);
    return Pf(t) ? t.host : t
}
function Sg(e) {
    const t = $n(e);
    return lo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : zt(t) && Ei(t) ? t : Sg(t)
}
function ui(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = Sg(e)
      , i = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , s = Ze(o);
    if (i) {
        const a = yu(s);
        return t.concat(s, s.visualViewport || [], Ei(o) ? o : [], a && n ? ui(a) : [])
    }
    return t.concat(o, ui(o, [], n))
}
function yu(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Eg(e) {
    const t = kt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = zt(e)
      , i = o ? e.offsetWidth : n
      , s = o ? e.offsetHeight : r
      , a = $s(n) !== i || $s(r) !== s;
    return a && (n = i,
    r = s),
    {
        width: n,
        height: r,
        $: a
    }
}
function Dc(e) {
    return Ct(e) ? e : e.contextElement
}
function Wr(e) {
    const t = Dc(e);
    if (!zt(t))
        return It(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: i} = Eg(t);
    let s = (i ? $s(n.width) : n.width) / r
      , a = (i ? $s(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: s,
        y: a
    }
}
const TS = It(0);
function bg(e) {
    const t = Ze(e);
    return !Mc() || !t.visualViewport ? TS : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function RS(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== Ze(e) ? !1 : t
}
function dr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , i = Dc(e);
    let s = It(1);
    t && (r ? Ct(r) && (s = Wr(r)) : s = Wr(e));
    const a = RS(i, n, r) ? bg(i) : It(0);
    let l = (o.left + a.x) / s.x
      , u = (o.top + a.y) / s.y
      , c = o.width / s.x
      , f = o.height / s.y;
    if (i) {
        const g = Ze(i)
          , d = r && Ct(r) ? Ze(r) : r;
        let S = g
          , m = yu(S);
        for (; m && r && d !== S; ) {
            const w = Wr(m)
              , v = m.getBoundingClientRect()
              , h = kt(m)
              , x = v.left + (m.clientLeft + parseFloat(h.paddingLeft)) * w.x
              , E = v.top + (m.clientTop + parseFloat(h.paddingTop)) * w.y;
            l *= w.x,
            u *= w.y,
            c *= w.x,
            f *= w.y,
            l += x,
            u += E,
            S = Ze(m),
            m = yu(S)
        }
    }
    return Us({
        width: c,
        height: f,
        x: l,
        y: u
    })
}
function Lc(e, t) {
    const n = ma(e).scrollLeft;
    return t ? t.left + n : dr($t(e)).left + n
}
function Cg(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , o = r.left + t.scrollLeft - (n ? 0 : Lc(e, r))
      , i = r.top + t.scrollTop;
    return {
        x: o,
        y: i
    }
}
function jS(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const i = o === "fixed"
      , s = $t(r)
      , a = t ? ha(t.floating) : !1;
    if (r === s || a && i)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = It(1);
    const c = It(0)
      , f = zt(r);
    if ((f || !f && !i) && ((vo(r) !== "body" || Ei(s)) && (l = ma(r)),
    zt(r))) {
        const d = dr(r);
        u = Wr(r),
        c.x = d.x + r.clientLeft,
        c.y = d.y + r.clientTop
    }
    const g = s && !f && !i ? Cg(s, l, !0) : It(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x + g.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y + g.y
    }
}
function OS(e) {
    return Array.from(e.getClientRects())
}
function _S(e) {
    const t = $t(e)
      , n = ma(e)
      , r = e.ownerDocument.body
      , o = Ye(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , i = Ye(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Lc(e);
    const a = -n.scrollTop;
    return kt(r).direction === "rtl" && (s += Ye(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: i,
        x: s,
        y: a
    }
}
function AS(e, t) {
    const n = Ze(e)
      , r = $t(e)
      , o = n.visualViewport;
    let i = r.clientWidth
      , s = r.clientHeight
      , a = 0
      , l = 0;
    if (o) {
        i = o.width,
        s = o.height;
        const u = Mc();
        (!u || u && t === "fixed") && (a = o.offsetLeft,
        l = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: a,
        y: l
    }
}
const MS = new Set(["absolute", "fixed"]);
function DS(e, t) {
    const n = dr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , i = zt(e) ? Wr(e) : It(1)
      , s = e.clientWidth * i.x
      , a = e.clientHeight * i.y
      , l = o * i.x
      , u = r * i.y;
    return {
        width: s,
        height: a,
        x: l,
        y: u
    }
}
function Tf(e, t, n) {
    let r;
    if (t === "viewport")
        r = AS(e, n);
    else if (t === "document")
        r = _S($t(e));
    else if (Ct(t))
        r = DS(t, n);
    else {
        const o = bg(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return Us(r)
}
function kg(e, t) {
    const n = $n(e);
    return n === t || !Ct(n) || lo(n) ? !1 : kt(n).position === "fixed" || kg(n, t)
}
function LS(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = ui(e, [], !1).filter(a => Ct(a) && vo(a) !== "body")
      , o = null;
    const i = kt(e).position === "fixed";
    let s = i ? $n(e) : e;
    for (; Ct(s) && !lo(s); ) {
        const a = kt(s)
          , l = Ac(s);
        !l && a.position === "fixed" && (o = null),
        (i ? !l && !o : !l && a.position === "static" && !!o && MS.has(o.position) || Ei(s) && !l && kg(e, s)) ? r = r.filter(c => c !== s) : o = a,
        s = $n(s)
    }
    return t.set(e, r),
    r
}
function IS(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const s = [...n === "clippingAncestors" ? ha(t) ? [] : LS(t, this._c) : [].concat(n), r]
      , a = s[0]
      , l = s.reduce( (u, c) => {
        const f = Tf(t, c, o);
        return u.top = Ye(f.top, u.top),
        u.right = zn(f.right, u.right),
        u.bottom = zn(f.bottom, u.bottom),
        u.left = Ye(f.left, u.left),
        u
    }
    , Tf(t, a, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function FS(e) {
    const {width: t, height: n} = Eg(e);
    return {
        width: t,
        height: n
    }
}
function zS(e, t, n) {
    const r = zt(t)
      , o = $t(t)
      , i = n === "fixed"
      , s = dr(e, !0, i, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = It(0);
    function u() {
        l.x = Lc(o)
    }
    if (r || !r && !i)
        if ((vo(t) !== "body" || Ei(o)) && (a = ma(t)),
        r) {
            const d = dr(t, !0, i, t);
            l.x = d.x + t.clientLeft,
            l.y = d.y + t.clientTop
        } else
            o && u();
    i && !r && o && u();
    const c = o && !r && !i ? Cg(o, a) : It(0)
      , f = s.left + a.scrollLeft - l.x - c.x
      , g = s.top + a.scrollTop - l.y - c.y;
    return {
        x: f,
        y: g,
        width: s.width,
        height: s.height
    }
}
function al(e) {
    return kt(e).position === "static"
}
function Rf(e, t) {
    if (!zt(e) || kt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return $t(e) === n && (n = n.ownerDocument.body),
    n
}
function Ng(e, t) {
    const n = Ze(e);
    if (ha(e))
        return n;
    if (!zt(e)) {
        let o = $n(e);
        for (; o && !lo(o); ) {
            if (Ct(o) && !al(o))
                return o;
            o = $n(o)
        }
        return n
    }
    let r = Rf(e, t);
    for (; r && SS(r) && al(r); )
        r = Rf(r, t);
    return r && lo(r) && al(r) && !Ac(r) ? n : r || NS(e) || n
}
const $S = async function(e) {
    const t = this.getOffsetParent || Ng
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: zS(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function BS(e) {
    return kt(e).direction === "rtl"
}
const US = {
    convertOffsetParentRelativeRectToViewportRelativeRect: jS,
    getDocumentElement: $t,
    getClippingRect: IS,
    getOffsetParent: Ng,
    getElementRects: $S,
    getClientRects: OS,
    getDimensions: FS,
    getScale: Wr,
    isElement: Ct,
    isRTL: BS
};
function Pg(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function VS(e, t) {
    let n = null, r;
    const o = $t(e);
    function i() {
        var a;
        clearTimeout(r),
        (a = n) == null || a.disconnect(),
        n = null
    }
    function s(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        i();
        const u = e.getBoundingClientRect()
          , {left: c, top: f, width: g, height: d} = u;
        if (a || t(),
        !g || !d)
            return;
        const S = Ki(f)
          , m = Ki(o.clientWidth - (c + g))
          , w = Ki(o.clientHeight - (f + d))
          , v = Ki(c)
          , x = {
            rootMargin: -S + "px " + -m + "px " + -w + "px " + -v + "px",
            threshold: Ye(0, zn(1, l)) || 1
        };
        let E = !0;
        function b(C) {
            const k = C[0].intersectionRatio;
            if (k !== l) {
                if (!E)
                    return s();
                k ? s(!1, k) : r = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            k === 1 && !Pg(u, e.getBoundingClientRect()) && s(),
            E = !1
        }
        try {
            n = new IntersectionObserver(b,{
                ...x,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(b,x)
        }
        n.observe(e)
    }
    return s(!0),
    i
}
function WS(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: s=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = Dc(e)
      , c = o || i ? [...u ? ui(u) : [], ...ui(t)] : [];
    c.forEach(v => {
        o && v.addEventListener("scroll", n, {
            passive: !0
        }),
        i && v.addEventListener("resize", n)
    }
    );
    const f = u && a ? VS(u, n) : null;
    let g = -1
      , d = null;
    s && (d = new ResizeObserver(v => {
        let[h] = v;
        h && h.target === u && d && (d.unobserve(t),
        cancelAnimationFrame(g),
        g = requestAnimationFrame( () => {
            var x;
            (x = d) == null || x.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && d.observe(u),
    d.observe(t));
    let S, m = l ? dr(e) : null;
    l && w();
    function w() {
        const v = dr(e);
        m && !Pg(m, v) && n(),
        m = v,
        S = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var v;
        c.forEach(h => {
            o && h.removeEventListener("scroll", n),
            i && h.removeEventListener("resize", n)
        }
        ),
        f == null || f(),
        (v = d) == null || v.disconnect(),
        d = null,
        l && cancelAnimationFrame(S)
    }
}
const HS = mS
  , QS = gS
  , KS = fS
  , GS = yS
  , YS = pS
  , jf = dS
  , qS = vS
  , XS = (e, t, n) => {
    const r = new Map
      , o = {
        platform: US,
        ...n
    }
      , i = {
        ...o.platform,
        _c: r
    };
    return cS(e, t, {
        ...o,
        platform: i
    })
}
;
var ZS = typeof document < "u"
  , JS = function() {}
  , ps = ZS ? y.useLayoutEffect : JS;
function Vs(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Vs(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !Vs(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Tg(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Of(e, t) {
    const n = Tg(e);
    return Math.round(t * n) / n
}
function ll(e) {
    const t = y.useRef(e);
    return ps( () => {
        t.current = e
    }
    ),
    t
}
function eE(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: s}={}, transform: a=!0, whileElementsMounted: l, open: u} = e
      , [c,f] = y.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [g,d] = y.useState(r);
    Vs(g, r) || d(r);
    const [S,m] = y.useState(null)
      , [w,v] = y.useState(null)
      , h = y.useCallback(P => {
        P !== C.current && (C.current = P,
        m(P))
    }
    , [])
      , x = y.useCallback(P => {
        P !== k.current && (k.current = P,
        v(P))
    }
    , [])
      , E = i || S
      , b = s || w
      , C = y.useRef(null)
      , k = y.useRef(null)
      , R = y.useRef(c)
      , A = l != null
      , _ = ll(l)
      , z = ll(o)
      , I = ll(u)
      , Q = y.useCallback( () => {
        if (!C.current || !k.current)
            return;
        const P = {
            placement: t,
            strategy: n,
            middleware: g
        };
        z.current && (P.platform = z.current),
        XS(C.current, k.current, P).then(T => {
            const D = {
                ...T,
                isPositioned: I.current !== !1
            };
            M.current && !Vs(R.current, D) && (R.current = D,
            xi.flushSync( () => {
                f(D)
            }
            ))
        }
        )
    }
    , [g, t, n, z, I]);
    ps( () => {
        u === !1 && R.current.isPositioned && (R.current.isPositioned = !1,
        f(P => ({
            ...P,
            isPositioned: !1
        })))
    }
    , [u]);
    const M = y.useRef(!1);
    ps( () => (M.current = !0,
    () => {
        M.current = !1
    }
    ), []),
    ps( () => {
        if (E && (C.current = E),
        b && (k.current = b),
        E && b) {
            if (_.current)
                return _.current(E, b, Q);
            Q()
        }
    }
    , [E, b, Q, _, A]);
    const Y = y.useMemo( () => ({
        reference: C,
        floating: k,
        setReference: h,
        setFloating: x
    }), [h, x])
      , $ = y.useMemo( () => ({
        reference: E,
        floating: b
    }), [E, b])
      , V = y.useMemo( () => {
        const P = {
            position: n,
            left: 0,
            top: 0
        };
        if (!$.floating)
            return P;
        const T = Of($.floating, c.x)
          , D = Of($.floating, c.y);
        return a ? {
            ...P,
            transform: "translate(" + T + "px, " + D + "px)",
            ...Tg($.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: T,
            top: D
        }
    }
    , [n, a, $.floating, c.x, c.y]);
    return y.useMemo( () => ({
        ...c,
        update: Q,
        refs: Y,
        elements: $,
        floatingStyles: V
    }), [c, Q, Y, $, V])
}
const tE = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? jf({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? jf({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , nE = (e, t) => ({
    ...HS(e),
    options: [e, t]
})
  , rE = (e, t) => ({
    ...QS(e),
    options: [e, t]
})
  , oE = (e, t) => ({
    ...qS(e),
    options: [e, t]
})
  , iE = (e, t) => ({
    ...KS(e),
    options: [e, t]
})
  , sE = (e, t) => ({
    ...GS(e),
    options: [e, t]
})
  , aE = (e, t) => ({
    ...YS(e),
    options: [e, t]
})
  , lE = (e, t) => ({
    ...tE(e),
    options: [e, t]
});
var uE = "Arrow"
  , Rg = y.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...i} = e;
    return p.jsx(ve.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : p.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Rg.displayName = uE;
var cE = Rg;
function dE(e) {
    const [t,n] = y.useState(void 0);
    return en( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const i = o[0];
                let s, a;
                if ("borderBoxSize"in i) {
                    const l = i.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    s = u.inlineSize,
                    a = u.blockSize
                } else
                    s = e.offsetWidth,
                    a = e.offsetHeight;
                n({
                    width: s,
                    height: a
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var jg = "Popper"
  , [Og,_g] = wi(jg)
  , [P2,Ag] = Og(jg)
  , Mg = "PopperAnchor"
  , Dg = y.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , i = Ag(Mg, n)
      , s = y.useRef(null)
      , a = Fe(t, s);
    return y.useEffect( () => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
    }
    ),
    r ? null : p.jsx(ve.div, {
        ...o,
        ref: a
    })
}
);
Dg.displayName = Mg;
var Ic = "PopperContent"
  , [fE,pE] = Og(Ic)
  , Lg = y.forwardRef( (e, t) => {
    var J, mr, on, Wn, sn, gr;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: i="center", alignOffset: s=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: f="partial", hideWhenDetached: g=!1, updatePositionStrategy: d="optimized", onPlaced: S, ...m} = e
      , w = Ag(Ic, n)
      , [v,h] = y.useState(null)
      , x = Fe(t, an => h(an))
      , [E,b] = y.useState(null)
      , C = dE(E)
      , k = (C == null ? void 0 : C.width) ?? 0
      , R = (C == null ? void 0 : C.height) ?? 0
      , A = r + (i !== "center" ? "-" + i : "")
      , _ = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , z = Array.isArray(u) ? u : [u]
      , I = z.length > 0
      , Q = {
        padding: _,
        boundary: z.filter(mE),
        altBoundary: I
    }
      , {refs: M, floatingStyles: Y, placement: $, isPositioned: V, middlewareData: P} = eE({
        strategy: "fixed",
        placement: A,
        whileElementsMounted: (...an) => WS(...an, {
            animationFrame: d === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [nE({
            mainAxis: o + R,
            alignmentAxis: s
        }), l && rE({
            mainAxis: !0,
            crossAxis: !1,
            limiter: f === "partial" ? oE() : void 0,
            ...Q
        }), l && iE({
            ...Q
        }), sE({
            ...Q,
            apply: ({elements: an, rects: bi, availableWidth: ka, availableHeight: Ci}) => {
                const {width: Na, height: yo} = bi.reference
                  , vr = an.floating.style;
                vr.setProperty("--radix-popper-available-width", `${ka}px`),
                vr.setProperty("--radix-popper-available-height", `${Ci}px`),
                vr.setProperty("--radix-popper-anchor-width", `${Na}px`),
                vr.setProperty("--radix-popper-anchor-height", `${yo}px`)
            }
        }), E && lE({
            element: E,
            padding: a
        }), gE({
            arrowWidth: k,
            arrowHeight: R
        }), g && aE({
            strategy: "referenceHidden",
            ...Q
        })]
    })
      , [T,D] = zg($)
      , W = Ft(S);
    en( () => {
        V && (W == null || W())
    }
    , [V, W]);
    const F = (J = P.arrow) == null ? void 0 : J.x
      , K = (mr = P.arrow) == null ? void 0 : mr.y
      , q = ((on = P.arrow) == null ? void 0 : on.centerOffset) !== 0
      , [me,Ne] = y.useState();
    return en( () => {
        v && Ne(window.getComputedStyle(v).zIndex)
    }
    , [v]),
    p.jsx("div", {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...Y,
            transform: V ? Y.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: me,
            "--radix-popper-transform-origin": [(Wn = P.transformOrigin) == null ? void 0 : Wn.x, (sn = P.transformOrigin) == null ? void 0 : sn.y].join(" "),
            ...((gr = P.hide) == null ? void 0 : gr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: p.jsx(fE, {
            scope: n,
            placedSide: T,
            onArrowChange: b,
            arrowX: F,
            arrowY: K,
            shouldHideArrow: q,
            children: p.jsx(ve.div, {
                "data-side": T,
                "data-align": D,
                ...m,
                ref: x,
                style: {
                    ...m.style,
                    animation: V ? void 0 : "none"
                }
            })
        })
    })
}
);
Lg.displayName = Ic;
var Ig = "PopperArrow"
  , hE = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Fg = y.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , i = pE(Ig, r)
      , s = hE[i.placedSide];
    return p.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [s]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: p.jsx(cE, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
Fg.displayName = Ig;
function mE(e) {
    return e !== null
}
var gE = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, v, h;
        const {placement: n, rects: r, middlewareData: o} = t
          , s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0
          , a = s ? 0 : e.arrowWidth
          , l = s ? 0 : e.arrowHeight
          , [u,c] = zg(n)
          , f = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , g = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + a / 2
          , d = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
        let S = ""
          , m = "";
        return u === "bottom" ? (S = s ? f : `${g}px`,
        m = `${-l}px`) : u === "top" ? (S = s ? f : `${g}px`,
        m = `${r.floating.height + l}px`) : u === "right" ? (S = `${-l}px`,
        m = s ? f : `${d}px`) : u === "left" && (S = `${r.floating.width + l}px`,
        m = s ? f : `${d}px`),
        {
            data: {
                x: S,
                y: m
            }
        }
    }
});
function zg(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var vE = Dg
  , yE = Lg
  , xE = Fg
  , [ga,T2] = wi("Tooltip", [_g])
  , Fc = _g()
  , $g = "TooltipProvider"
  , wE = 700
  , _f = "tooltip.open"
  , [SE,Bg] = ga($g)
  , Ug = e => {
    const {__scopeTooltip: t, delayDuration: n=wE, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: i} = e
      , s = y.useRef(!0)
      , a = y.useRef(!1)
      , l = y.useRef(0);
    return y.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    p.jsx(SE, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: y.useCallback( () => {
            window.clearTimeout(l.current),
            s.current = !1
        }
        , []),
        onClose: y.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => s.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: y.useCallback(u => {
            a.current = u
        }
        , []),
        disableHoverableContent: o,
        children: i
    })
}
;
Ug.displayName = $g;
var Vg = "Tooltip"
  , [R2,va] = ga(Vg)
  , xu = "TooltipTrigger"
  , EE = y.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = va(xu, n)
      , i = Bg(xu, n)
      , s = Fc(n)
      , a = y.useRef(null)
      , l = Fe(t, a, o.onTriggerChange)
      , u = y.useRef(!1)
      , c = y.useRef(!1)
      , f = y.useCallback( () => u.current = !1, []);
    return y.useEffect( () => () => document.removeEventListener("pointerup", f), [f]),
    p.jsx(vE, {
        asChild: !0,
        ...s,
        children: p.jsx(ve.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: le(e.onPointerMove, g => {
                g.pointerType !== "touch" && !c.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(),
                c.current = !0)
            }
            ),
            onPointerLeave: le(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                c.current = !1
            }
            ),
            onPointerDown: le(e.onPointerDown, () => {
                o.open && o.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", f, {
                    once: !0
                })
            }
            ),
            onFocus: le(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: le(e.onBlur, o.onClose),
            onClick: le(e.onClick, o.onClose)
        })
    })
}
);
EE.displayName = xu;
var bE = "TooltipPortal"
  , [j2,CE] = ga(bE, {
    forceMount: void 0
})
  , uo = "TooltipContent"
  , Wg = y.forwardRef( (e, t) => {
    const n = CE(uo, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...i} = e
      , s = va(uo, e.__scopeTooltip);
    return p.jsx(ho, {
        present: r || s.open,
        children: s.disableHoverableContent ? p.jsx(Hg, {
            side: o,
            ...i,
            ref: t
        }) : p.jsx(kE, {
            side: o,
            ...i,
            ref: t
        })
    })
}
)
  , kE = y.forwardRef( (e, t) => {
    const n = va(uo, e.__scopeTooltip)
      , r = Bg(uo, e.__scopeTooltip)
      , o = y.useRef(null)
      , i = Fe(t, o)
      , [s,a] = y.useState(null)
      , {trigger: l, onClose: u} = n
      , c = o.current
      , {onPointerInTransitChange: f} = r
      , g = y.useCallback( () => {
        a(null),
        f(!1)
    }
    , [f])
      , d = y.useCallback( (S, m) => {
        const w = S.currentTarget
          , v = {
            x: S.clientX,
            y: S.clientY
        }
          , h = jE(v, w.getBoundingClientRect())
          , x = OE(v, h)
          , E = _E(m.getBoundingClientRect())
          , b = ME([...x, ...E]);
        a(b),
        f(!0)
    }
    , [f]);
    return y.useEffect( () => () => g(), [g]),
    y.useEffect( () => {
        if (l && c) {
            const S = w => d(w, c)
              , m = w => d(w, l);
            return l.addEventListener("pointerleave", S),
            c.addEventListener("pointerleave", m),
            () => {
                l.removeEventListener("pointerleave", S),
                c.removeEventListener("pointerleave", m)
            }
        }
    }
    , [l, c, d, g]),
    y.useEffect( () => {
        if (s) {
            const S = m => {
                const w = m.target
                  , v = {
                    x: m.clientX,
                    y: m.clientY
                }
                  , h = (l == null ? void 0 : l.contains(w)) || (c == null ? void 0 : c.contains(w))
                  , x = !AE(v, s);
                h ? g() : x && (g(),
                u())
            }
            ;
            return document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
        }
    }
    , [l, c, s, u, g]),
    p.jsx(Hg, {
        ...e,
        ref: i
    })
}
)
  , [NE,PE] = ga(Vg, {
    isInside: !1
})
  , TE = Lx("TooltipContent")
  , Hg = y.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: s, ...a} = e
      , l = va(uo, n)
      , u = Fc(n)
      , {onClose: c} = l;
    return y.useEffect( () => (document.addEventListener(_f, c),
    () => document.removeEventListener(_f, c)), [c]),
    y.useEffect( () => {
        if (l.trigger) {
            const f = g => {
                const d = g.target;
                d != null && d.contains(l.trigger) && c()
            }
            ;
            return window.addEventListener("scroll", f, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", f, {
                capture: !0
            })
        }
    }
    , [l.trigger, c]),
    p.jsx(ca, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: f => f.preventDefault(),
        onDismiss: c,
        children: p.jsxs(yE, {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [p.jsx(TE, {
                children: r
            }), p.jsx(NE, {
                scope: n,
                isInside: !0,
                children: p.jsx(sw, {
                    id: l.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
Wg.displayName = uo;
var Qg = "TooltipArrow"
  , RE = y.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Fc(n);
    return PE(Qg, n).isInside ? null : p.jsx(xE, {
        ...o,
        ...r,
        ref: t
    })
}
);
RE.displayName = Qg;
function jE(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
    case i:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function OE(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function _E(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function AE(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const a = t[i]
          , l = t[s]
          , u = a.x
          , c = a.y
          , f = l.x
          , g = l.y;
        c > r != g > r && n < (f - u) * (r - c) / (g - c) + u && (o = !o)
    }
    return o
}
function ME(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    DE(t)
}
function DE(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1]
              , s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1]
              , s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var LE = Ug
  , Kg = Wg;
const IE = LE
  , FE = y.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => p.jsx(Kg, {
    ref: r,
    sideOffset: t,
    className: Ae("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
FE.displayName = Kg.displayName;
var ya = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , xa = typeof window > "u" || "Deno"in globalThis;
function gt() {}
function zE(e, t) {
    return typeof e == "function" ? e(t) : e
}
function $E(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function BE(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function wu(e, t) {
    return typeof e == "function" ? e(t) : e
}
function UE(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Af(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: a} = e;
    if (s) {
        if (r) {
            if (t.queryHash !== zc(s, t.options))
                return !1
        } else if (!di(t.queryKey, s))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || o && o !== t.state.fetchStatus || i && !i(t))
}
function Mf(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: i} = e;
    if (i) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (ci(t.options.mutationKey) !== ci(i))
                return !1
        } else if (!di(t.options.mutationKey, i))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function zc(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || ci)(e)
}
function ci(e) {
    return JSON.stringify(e, (t, n) => Su(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function di(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => di(e[n], t[n])) : !1
}
function Gg(e, t) {
    if (e === t)
        return e;
    const n = Df(e) && Df(t);
    if (n || Su(e) && Su(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , i = n ? t : Object.keys(t)
          , s = i.length
          , a = n ? [] : {}
          , l = new Set(r);
        let u = 0;
        for (let c = 0; c < s; c++) {
            const f = n ? c : i[c];
            (!n && l.has(f) || n) && e[f] === void 0 && t[f] === void 0 ? (a[f] = void 0,
            u++) : (a[f] = Gg(e[f], t[f]),
            a[f] === e[f] && e[f] !== void 0 && u++)
        }
        return o === s && u === o ? e : a
    }
    return t
}
function Df(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Su(e) {
    if (!Lf(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Lf(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Lf(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function VE(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function WE(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Gg(e, t) : t
}
function HE(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function QE(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var $c = Symbol();
function Yg(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === $c ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Zn, wn, Kr, op, KE = (op = class extends ya {
    constructor() {
        super();
        Z(this, Zn);
        Z(this, wn);
        Z(this, Kr);
        U(this, Kr, t => {
            if (!xa && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, wn) || this.setEventListener(N(this, Kr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = N(this, wn)) == null || t.call(this),
        U(this, wn, void 0))
    }
    setEventListener(t) {
        var n;
        U(this, Kr, t),
        (n = N(this, wn)) == null || n.call(this),
        U(this, wn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        N(this, Zn) !== t && (U(this, Zn, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof N(this, Zn) == "boolean" ? N(this, Zn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Zn = new WeakMap,
wn = new WeakMap,
Kr = new WeakMap,
op), qg = new KE, Gr, Sn, Yr, ip, GE = (ip = class extends ya {
    constructor() {
        super();
        Z(this, Gr, !0);
        Z(this, Sn);
        Z(this, Yr);
        U(this, Yr, t => {
            if (!xa && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, Sn) || this.setEventListener(N(this, Yr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = N(this, Sn)) == null || t.call(this),
        U(this, Sn, void 0))
    }
    setEventListener(t) {
        var n;
        U(this, Yr, t),
        (n = N(this, Sn)) == null || n.call(this),
        U(this, Sn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        N(this, Gr) !== t && (U(this, Gr, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return N(this, Gr)
    }
}
,
Gr = new WeakMap,
Sn = new WeakMap,
Yr = new WeakMap,
ip), Ws = new GE;
function YE() {
    let e, t;
    const n = new Promise( (o, i) => {
        e = o,
        t = i
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function qE(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Xg(e) {
    return (e ?? "online") === "online" ? Ws.isOnline() : !0
}
var Zg = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function ul(e) {
    return e instanceof Zg
}
function Jg(e) {
    let t = !1, n = 0, r = !1, o;
    const i = YE()
      , s = m => {
        var w;
        r || (g(new Zg(m)),
        (w = e.abort) == null || w.call(e))
    }
      , a = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => qg.isFocused() && (e.networkMode === "always" || Ws.isOnline()) && e.canRun()
      , c = () => Xg(e.networkMode) && e.canRun()
      , f = m => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, m),
        o == null || o(),
        i.resolve(m))
    }
      , g = m => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, m),
        o == null || o(),
        i.reject(m))
    }
      , d = () => new Promise(m => {
        var w;
        o = v => {
            (r || u()) && m(v)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var m;
        o = void 0,
        r || (m = e.onContinue) == null || m.call(e)
    }
    )
      , S = () => {
        if (r)
            return;
        let m;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            m = w ?? e.fn()
        } catch (v) {
            m = Promise.reject(v)
        }
        Promise.resolve(m).then(f).catch(v => {
            var C;
            if (r)
                return;
            const h = e.retry ?? (xa ? 0 : 3)
              , x = e.retryDelay ?? qE
              , E = typeof x == "function" ? x(n, v) : x
              , b = h === !0 || typeof h == "number" && n < h || typeof h == "function" && h(n, v);
            if (t || !b) {
                g(v);
                return
            }
            n++,
            (C = e.onFail) == null || C.call(e, n, v),
            VE(E).then( () => u() ? void 0 : d()).then( () => {
                t ? g(v) : S()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(),
        i),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? S() : d().then(S),
        i)
    }
}
var XE = e => setTimeout(e, 0);
function ZE() {
    let e = []
      , t = 0
      , n = a => {
        a()
    }
      , r = a => {
        a()
    }
      , o = XE;
    const i = a => {
        t ? e.push(a) : o( () => {
            n(a)
        }
        )
    }
      , s = () => {
        const a = e;
        e = [],
        a.length && o( () => {
            r( () => {
                a.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--,
                t || s()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            i( () => {
                a(...l)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            r = a
        }
        ,
        setScheduler: a => {
            o = a
        }
    }
}
var Le = ZE(), Jn, sp, ev = (sp = class {
    constructor() {
        Z(this, Jn)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        $E(this.gcTime) && U(this, Jn, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (xa ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        N(this, Jn) && (clearTimeout(N(this, Jn)),
        U(this, Jn, void 0))
    }
}
,
Jn = new WeakMap,
sp), qr, er, rt, tr, je, fi, nr, vt, Ut, ap, JE = (ap = class extends ev {
    constructor(t) {
        super();
        Z(this, vt);
        Z(this, qr);
        Z(this, er);
        Z(this, rt);
        Z(this, tr);
        Z(this, je);
        Z(this, fi);
        Z(this, nr);
        U(this, nr, !1),
        U(this, fi, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        U(this, tr, t.client),
        U(this, rt, N(this, tr).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        U(this, qr, tb(this.options)),
        this.state = t.state ?? N(this, qr),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = N(this, je)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...N(this, fi),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && N(this, rt).remove(this)
    }
    setData(t, n) {
        const r = WE(this.state.data, t, this.options);
        return Pe(this, vt, Ut).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Pe(this, vt, Ut).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = N(this, je)) == null ? void 0 : r.promise;
        return (o = N(this, je)) == null || o.cancel(t),
        n ? n.then(gt).catch(gt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(N(this, qr))
    }
    isActive() {
        return this.observers.some(t => UE(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === $c || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => wu(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !BE(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = N(this, je)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = N(this, je)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        N(this, rt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (N(this, je) && (N(this, nr) ? N(this, je).cancel({
            revert: !0
        }) : N(this, je).cancelRetry()),
        this.scheduleGc()),
        N(this, rt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Pe(this, vt, Ut).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, c, f;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (N(this, je))
                return N(this, je).continueRetry(),
                N(this, je).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const g = this.observers.find(d => d.options.queryFn);
            g && this.setOptions(g.options)
        }
        const r = new AbortController
          , o = g => {
            Object.defineProperty(g, "signal", {
                enumerable: !0,
                get: () => (U(this, nr, !0),
                r.signal)
            })
        }
          , i = () => {
            const g = Yg(this.options, n)
              , S = ( () => {
                const m = {
                    client: N(this, tr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(m),
                m
            }
            )();
            return U(this, nr, !1),
            this.options.persister ? this.options.persister(g, S, this) : g(S)
        }
          , a = ( () => {
            const g = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: N(this, tr),
                state: this.state,
                fetchFn: i
            };
            return o(g),
            g
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(a, this),
        U(this, er, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = a.fetchOptions) == null ? void 0 : c.meta)) && Pe(this, vt, Ut).call(this, {
            type: "fetch",
            meta: (f = a.fetchOptions) == null ? void 0 : f.meta
        });
        const l = g => {
            var d, S, m, w;
            ul(g) && g.silent || Pe(this, vt, Ut).call(this, {
                type: "error",
                error: g
            }),
            ul(g) || ((S = (d = N(this, rt).config).onError) == null || S.call(d, g, this),
            (w = (m = N(this, rt).config).onSettled) == null || w.call(m, this.state.data, g, this)),
            this.scheduleGc()
        }
        ;
        return U(this, je, Jg({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: a.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: g => {
                var d, S, m, w;
                if (g === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(g)
                } catch (v) {
                    l(v);
                    return
                }
                (S = (d = N(this, rt).config).onSuccess) == null || S.call(d, g, this),
                (w = (m = N(this, rt).config).onSettled) == null || w.call(m, g, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (g, d) => {
                Pe(this, vt, Ut).call(this, {
                    type: "failed",
                    failureCount: g,
                    error: d
                })
            }
            ,
            onPause: () => {
                Pe(this, vt, Ut).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Pe(this, vt, Ut).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        })),
        N(this, je).start()
    }
}
,
qr = new WeakMap,
er = new WeakMap,
rt = new WeakMap,
tr = new WeakMap,
je = new WeakMap,
fi = new WeakMap,
nr = new WeakMap,
vt = new WeakSet,
Ut = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...eb(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return U(this, er, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return ul(o) && o.revert && N(this, er) ? {
                ...N(this, er),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    Le.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        N(this, rt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
ap);
function eb(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Xg(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function tb(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Rt, lp, nb = (lp = class extends ya {
    constructor(t={}) {
        super();
        Z(this, Rt);
        this.config = t,
        U(this, Rt, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , i = n.queryHash ?? zc(o, n);
        let s = this.get(i);
        return s || (s = new JE({
            client: t,
            queryKey: o,
            queryHash: i,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(s)),
        s
    }
    add(t) {
        N(this, Rt).has(t.queryHash) || (N(this, Rt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = N(this, Rt).get(t.queryHash);
        n && (t.destroy(),
        n === t && N(this, Rt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        Le.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return N(this, Rt).get(t)
    }
    getAll() {
        return [...N(this, Rt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Af(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Af(t, r)) : n
    }
    notify(t) {
        Le.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        Le.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Le.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Rt = new WeakMap,
lp), jt, Me, rr, Ot, hn, up, rb = (up = class extends ev {
    constructor(t) {
        super();
        Z(this, Ot);
        Z(this, jt);
        Z(this, Me);
        Z(this, rr);
        this.mutationId = t.mutationId,
        U(this, Me, t.mutationCache),
        U(this, jt, []),
        this.state = t.state || ob(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        N(this, jt).includes(t) || (N(this, jt).push(t),
        this.clearGcTimeout(),
        N(this, Me).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        U(this, jt, N(this, jt).filter(n => n !== t)),
        this.scheduleGc(),
        N(this, Me).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        N(this, jt).length || (this.state.status === "pending" ? this.scheduleGc() : N(this, Me).remove(this))
    }
    continue() {
        var t;
        return ((t = N(this, rr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var i, s, a, l, u, c, f, g, d, S, m, w, v, h, x, E, b, C, k, R;
        const n = () => {
            Pe(this, Ot, hn).call(this, {
                type: "continue"
            })
        }
        ;
        U(this, rr, Jg({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (A, _) => {
                Pe(this, Ot, hn).call(this, {
                    type: "failed",
                    failureCount: A,
                    error: _
                })
            }
            ,
            onPause: () => {
                Pe(this, Ot, hn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => N(this, Me).canRun(this)
        }));
        const r = this.state.status === "pending"
          , o = !N(this, rr).canStart();
        try {
            if (r)
                n();
            else {
                Pe(this, Ot, hn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((s = (i = N(this, Me).config).onMutate) == null ? void 0 : s.call(i, t, this));
                const _ = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                _ !== this.state.context && Pe(this, Ot, hn).call(this, {
                    type: "pending",
                    context: _,
                    variables: t,
                    isPaused: o
                })
            }
            const A = await N(this, rr).start();
            return await ((c = (u = N(this, Me).config).onSuccess) == null ? void 0 : c.call(u, A, t, this.state.context, this)),
            await ((g = (f = this.options).onSuccess) == null ? void 0 : g.call(f, A, t, this.state.context)),
            await ((S = (d = N(this, Me).config).onSettled) == null ? void 0 : S.call(d, A, null, this.state.variables, this.state.context, this)),
            await ((w = (m = this.options).onSettled) == null ? void 0 : w.call(m, A, null, t, this.state.context)),
            Pe(this, Ot, hn).call(this, {
                type: "success",
                data: A
            }),
            A
        } catch (A) {
            try {
                throw await ((h = (v = N(this, Me).config).onError) == null ? void 0 : h.call(v, A, t, this.state.context, this)),
                await ((E = (x = this.options).onError) == null ? void 0 : E.call(x, A, t, this.state.context)),
                await ((C = (b = N(this, Me).config).onSettled) == null ? void 0 : C.call(b, void 0, A, this.state.variables, this.state.context, this)),
                await ((R = (k = this.options).onSettled) == null ? void 0 : R.call(k, void 0, A, t, this.state.context)),
                A
            } finally {
                Pe(this, Ot, hn).call(this, {
                    type: "error",
                    error: A
                })
            }
        } finally {
            N(this, Me).runNext(this)
        }
    }
}
,
jt = new WeakMap,
Me = new WeakMap,
rr = new WeakMap,
Ot = new WeakSet,
hn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    Le.batch( () => {
        N(this, jt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        N(this, Me).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
up);
function ob() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Ht, yt, pi, cp, ib = (cp = class extends ya {
    constructor(t={}) {
        super();
        Z(this, Ht);
        Z(this, yt);
        Z(this, pi);
        this.config = t,
        U(this, Ht, new Set),
        U(this, yt, new Map),
        U(this, pi, 0)
    }
    build(t, n, r) {
        const o = new rb({
            mutationCache: this,
            mutationId: ++Ni(this, pi)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        N(this, Ht).add(t);
        const n = Gi(t);
        if (typeof n == "string") {
            const r = N(this, yt).get(n);
            r ? r.push(t) : N(this, yt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (N(this, Ht).delete(t)) {
            const n = Gi(t);
            if (typeof n == "string") {
                const r = N(this, yt).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else
                        r[0] === t && N(this, yt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = Gi(t);
        if (typeof n == "string") {
            const r = N(this, yt).get(n)
              , o = r == null ? void 0 : r.find(i => i.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = Gi(t);
        if (typeof n == "string") {
            const o = (r = N(this, yt).get(n)) == null ? void 0 : r.find(i => i !== t && i.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        Le.batch( () => {
            N(this, Ht).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            N(this, Ht).clear(),
            N(this, yt).clear()
        }
        )
    }
    getAll() {
        return Array.from(N(this, Ht))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Mf(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Mf(t, n))
    }
    notify(t) {
        Le.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Le.batch( () => Promise.all(t.map(n => n.continue().catch(gt))))
    }
}
,
Ht = new WeakMap,
yt = new WeakMap,
pi = new WeakMap,
cp);
function Gi(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function If(e) {
    return {
        onFetch: (t, n) => {
            var c, f, g, d, S;
            const r = t.options
              , o = (g = (f = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : g.direction
              , i = ((d = t.state.data) == null ? void 0 : d.pages) || []
              , s = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let m = !1;
                const w = x => {
                    Object.defineProperty(x, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? m = !0 : t.signal.addEventListener("abort", () => {
                            m = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , v = Yg(t.options, t.fetchOptions)
                  , h = async (x, E, b) => {
                    if (m)
                        return Promise.reject();
                    if (E == null && x.pages.length)
                        return Promise.resolve(x);
                    const k = ( () => {
                        const z = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: E,
                            direction: b ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return w(z),
                        z
                    }
                    )()
                      , R = await v(k)
                      , {maxPages: A} = t.options
                      , _ = b ? QE : HE;
                    return {
                        pages: _(x.pages, R, A),
                        pageParams: _(x.pageParams, E, A)
                    }
                }
                ;
                if (o && i.length) {
                    const x = o === "backward"
                      , E = x ? sb : Ff
                      , b = {
                        pages: i,
                        pageParams: s
                    }
                      , C = E(r, b);
                    a = await h(b, C, x)
                } else {
                    const x = e ?? i.length;
                    do {
                        const E = l === 0 ? s[0] ?? r.initialPageParam : Ff(r, a);
                        if (l > 0 && E == null)
                            break;
                        a = await h(a, E),
                        l++
                    } while (l < x)
                }
                return a
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var m, w;
                return (w = (m = t.options).persister) == null ? void 0 : w.call(m, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Ff(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function sb(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var fe, En, bn, Xr, Zr, Cn, Jr, eo, dp, ab = (dp = class {
    constructor(e={}) {
        Z(this, fe);
        Z(this, En);
        Z(this, bn);
        Z(this, Xr);
        Z(this, Zr);
        Z(this, Cn);
        Z(this, Jr);
        Z(this, eo);
        U(this, fe, e.queryCache || new nb),
        U(this, En, e.mutationCache || new ib),
        U(this, bn, e.defaultOptions || {}),
        U(this, Xr, new Map),
        U(this, Zr, new Map),
        U(this, Cn, 0)
    }
    mount() {
        Ni(this, Cn)._++,
        N(this, Cn) === 1 && (U(this, Jr, qg.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            N(this, fe).onFocus())
        }
        )),
        U(this, eo, Ws.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            N(this, fe).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        Ni(this, Cn)._--,
        N(this, Cn) === 0 && ((e = N(this, Jr)) == null || e.call(this),
        U(this, Jr, void 0),
        (t = N(this, eo)) == null || t.call(this),
        U(this, eo, void 0))
    }
    isFetching(e) {
        return N(this, fe).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return N(this, En).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = N(this, fe).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = N(this, fe).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(wu(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return N(this, fe).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = N(this, fe).get(r.queryHash)
          , i = o == null ? void 0 : o.state.data
          , s = zE(t, i);
        if (s !== void 0)
            return N(this, fe).build(this, r).setData(s, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return Le.batch( () => N(this, fe).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = N(this, fe).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = N(this, fe);
        Le.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = N(this, fe);
        return Le.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = Le.batch( () => N(this, fe).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(gt).catch(gt)
    }
    invalidateQueries(e, t={}) {
        return Le.batch( () => (N(this, fe).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = Le.batch( () => N(this, fe).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let i = o.fetch(void 0, n);
            return n.throwOnError || (i = i.catch(gt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(r).then(gt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = N(this, fe).build(this, t);
        return n.isStaleByTime(wu(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(gt).catch(gt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = If(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(gt).catch(gt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = If(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Ws.isOnline() ? N(this, En).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return N(this, fe)
    }
    getMutationCache() {
        return N(this, En)
    }
    getDefaultOptions() {
        return N(this, bn)
    }
    setDefaultOptions(e) {
        U(this, bn, e)
    }
    setQueryDefaults(e, t) {
        N(this, Xr).set(ci(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...N(this, Xr).values()]
          , n = {};
        return t.forEach(r => {
            di(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        N(this, Zr).set(ci(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...N(this, Zr).values()]
          , n = {};
        return t.forEach(r => {
            di(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...N(this, bn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = zc(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === $c && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...N(this, bn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        N(this, fe).clear(),
        N(this, En).clear()
    }
}
,
fe = new WeakMap,
En = new WeakMap,
bn = new WeakMap,
Xr = new WeakMap,
Zr = new WeakMap,
Cn = new WeakMap,
Jr = new WeakMap,
eo = new WeakMap,
dp), lb = y.createContext(void 0), ub = ({client: e, children: t}) => (y.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
p.jsx(lb.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Hs() {
    return Hs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Hs.apply(this, arguments)
}
var Pn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Pn || (Pn = {}));
const zf = "popstate";
function cb(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: i, search: s, hash: a} = r.location;
        return Eu("", {
            pathname: i,
            search: s,
            hash: a
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : nv(o)
    }
    return fb(t, n, null, e)
}
function Ke(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function tv(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function db() {
    return Math.random().toString(36).substr(2, 8)
}
function $f(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Eu(e, t, n, r) {
    return n === void 0 && (n = null),
    Hs({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? wa(t) : t, {
        state: n,
        key: t && t.key || r || db()
    })
}
function nv(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function wa(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function fb(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = r
      , s = o.history
      , a = Pn.Pop
      , l = null
      , u = c();
    u == null && (u = 0,
    s.replaceState(Hs({}, s.state, {
        idx: u
    }), ""));
    function c() {
        return (s.state || {
            idx: null
        }).idx
    }
    function f() {
        a = Pn.Pop;
        let w = c()
          , v = w == null ? null : w - u;
        u = w,
        l && l({
            action: a,
            location: m.location,
            delta: v
        })
    }
    function g(w, v) {
        a = Pn.Push;
        let h = Eu(m.location, w, v);
        u = c() + 1;
        let x = $f(h, u)
          , E = m.createHref(h);
        try {
            s.pushState(x, "", E)
        } catch (b) {
            if (b instanceof DOMException && b.name === "DataCloneError")
                throw b;
            o.location.assign(E)
        }
        i && l && l({
            action: a,
            location: m.location,
            delta: 1
        })
    }
    function d(w, v) {
        a = Pn.Replace;
        let h = Eu(m.location, w, v);
        u = c();
        let x = $f(h, u)
          , E = m.createHref(h);
        s.replaceState(x, "", E),
        i && l && l({
            action: a,
            location: m.location,
            delta: 0
        })
    }
    function S(w) {
        let v = o.location.origin !== "null" ? o.location.origin : o.location.href
          , h = typeof w == "string" ? w : nv(w);
        return h = h.replace(/ $/, "%20"),
        Ke(v, "No window.location.(origin|href) available to create URL for href: " + h),
        new URL(h,v)
    }
    let m = {
        get action() {
            return a
        },
        get location() {
            return e(o, s)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(zf, f),
            l = w,
            () => {
                o.removeEventListener(zf, f),
                l = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: S,
        encodeLocation(w) {
            let v = S(w);
            return {
                pathname: v.pathname,
                search: v.search,
                hash: v.hash
            }
        },
        push: g,
        replace: d,
        go(w) {
            return s.go(w)
        }
    };
    return m
}
var Bf;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Bf || (Bf = {}));
function pb(e, t, n) {
    return n === void 0 && (n = "/"),
    hb(e, t, n, !1)
}
function hb(e, t, n, r) {
    let o = typeof t == "string" ? wa(t) : t
      , i = iv(o.pathname || "/", n);
    if (i == null)
        return null;
    let s = rv(e);
    mb(s);
    let a = null;
    for (let l = 0; a == null && l < s.length; ++l) {
        let u = Nb(i);
        a = Cb(s[l], u, r)
    }
    return a
}
function rv(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (i, s, a) => {
        let l = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        l.relativePath.startsWith("/") && (Ke(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = Hr([r, l.relativePath])
          , c = n.concat(l);
        i.children && i.children.length > 0 && (Ke(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        rv(i.children, t, c, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: Eb(u, i.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (i, s) => {
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?")))
            o(i, s);
        else
            for (let l of ov(i.path))
                o(i, s, l)
    }
    ),
    t
}
function ov(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [i, ""] : [i];
    let s = ov(r.join("/"))
      , a = [];
    return a.push(...s.map(l => l === "" ? i : [i, l].join("/"))),
    o && a.push(...s),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function mb(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : bb(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const gb = /^:[\w-]+$/
  , vb = 3
  , yb = 2
  , xb = 1
  , wb = 10
  , Sb = -2
  , Uf = e => e === "*";
function Eb(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Uf) && (r += Sb),
    t && (r += yb),
    n.filter(o => !Uf(o)).reduce( (o, i) => o + (gb.test(i) ? vb : i === "" ? xb : wb), r)
}
function bb(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Cb(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , i = "/"
      , s = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , u = a === r.length - 1
          , c = i === "/" ? t : t.slice(i.length) || "/"
          , f = Vf({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, c)
          , g = l.route;
        if (!f && u && n && !r[r.length - 1].route.index && (f = Vf({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, c)),
        !f)
            return null;
        Object.assign(o, f.params),
        s.push({
            params: o,
            pathname: Hr([i, f.pathname]),
            pathnameBase: Pb(Hr([i, f.pathnameBase])),
            route: g
        }),
        f.pathnameBase !== "/" && (i = Hr([i, f.pathnameBase]))
    }
    return s
}
function Vf(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = kb(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let i = o[0]
      , s = i.replace(/(.)\/+$/, "$1")
      , a = o.slice(1);
    return {
        params: r.reduce( (u, c, f) => {
            let {paramName: g, isOptional: d} = c;
            if (g === "*") {
                let m = a[f] || "";
                s = i.slice(0, i.length - m.length).replace(/(.)\/+$/, "$1")
            }
            const S = a[f];
            return d && !S ? u[g] = void 0 : u[g] = (S || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}
function kb(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    tv(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function Nb(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return tv(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function iv(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Hr = e => e.join("/").replace(/\/\/+/g, "/")
  , Pb = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function Tb(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const sv = ["post", "put", "patch", "delete"];
new Set(sv);
const Rb = ["get", ...sv];
new Set(Rb);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Qs() {
    return Qs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Qs.apply(this, arguments)
}
const jb = y.createContext(null)
  , Ob = y.createContext(null)
  , av = y.createContext(null)
  , Sa = y.createContext(null)
  , Ea = y.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , lv = y.createContext(null);
function Bc() {
    return y.useContext(Sa) != null
}
function uv() {
    return Bc() || Ke(!1),
    y.useContext(Sa).location
}
function _b(e, t) {
    return Ab(e, t)
}
function Ab(e, t, n, r) {
    Bc() || Ke(!1);
    let {navigator: o} = y.useContext(av)
      , {matches: i} = y.useContext(Ea)
      , s = i[i.length - 1]
      , a = s ? s.params : {};
    s && s.pathname;
    let l = s ? s.pathnameBase : "/";
    s && s.route;
    let u = uv(), c;
    if (t) {
        var f;
        let w = typeof t == "string" ? wa(t) : t;
        l === "/" || (f = w.pathname) != null && f.startsWith(l) || Ke(!1),
        c = w
    } else
        c = u;
    let g = c.pathname || "/"
      , d = g;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        d = "/" + g.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let S = pb(e, {
        pathname: d
    })
      , m = Fb(S && S.map(w => Object.assign({}, w, {
        params: Object.assign({}, a, w.params),
        pathname: Hr([l, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : Hr([l, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), i, n, r);
    return t && m ? y.createElement(Sa.Provider, {
        value: {
            location: Qs({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Pn.Pop
        }
    }, m) : m
}
function Mb() {
    let e = Ub()
      , t = Tb(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return y.createElement(y.Fragment, null, y.createElement("h2", null, "Unexpected Application Error!"), y.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? y.createElement("pre", {
        style: o
    }, n) : null, null)
}
const Db = y.createElement(Mb, null);
class Lb extends y.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? y.createElement(Ea.Provider, {
            value: this.props.routeContext
        }, y.createElement(lv.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Ib(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = y.useContext(jb);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(Ea.Provider, {
        value: t
    }, r)
}
function Fb(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , a = (o = n) == null ? void 0 : o.errors;
    if (a != null) {
        let c = s.findIndex(f => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
        c >= 0 || Ke(!1),
        s = s.slice(0, Math.min(s.length, c + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < s.length; c++) {
            let f = s[c];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
            f.route.id) {
                let {loaderData: g, errors: d} = n
                  , S = f.route.loader && g[f.route.id] === void 0 && (!d || d[f.route.id] === void 0);
                if (f.route.lazy || S) {
                    l = !0,
                    u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (c, f, g) => {
        let d, S = !1, m = null, w = null;
        n && (d = a && f.route.id ? a[f.route.id] : void 0,
        m = f.route.errorElement || Db,
        l && (u < 0 && g === 0 ? (S = !0,
        w = null) : u === g && (S = !0,
        w = f.route.hydrateFallbackElement || null)));
        let v = t.concat(s.slice(0, g + 1))
          , h = () => {
            let x;
            return d ? x = m : S ? x = w : f.route.Component ? x = y.createElement(f.route.Component, null) : f.route.element ? x = f.route.element : x = c,
            y.createElement(Ib, {
                match: f,
                routeContext: {
                    outlet: c,
                    matches: v,
                    isDataRoute: n != null
                },
                children: x
            })
        }
        ;
        return n && (f.route.ErrorBoundary || f.route.errorElement || g === 0) ? y.createElement(Lb, {
            location: n.location,
            revalidation: n.revalidation,
            component: m,
            error: d,
            children: h(),
            routeContext: {
                outlet: null,
                matches: v,
                isDataRoute: !0
            }
        }) : h()
    }
    , null)
}
var bu = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(bu || {});
function zb(e) {
    let t = y.useContext(Ob);
    return t || Ke(!1),
    t
}
function $b(e) {
    let t = y.useContext(Ea);
    return t || Ke(!1),
    t
}
function Bb(e) {
    let t = $b()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Ke(!1),
    n.route.id
}
function Ub() {
    var e;
    let t = y.useContext(lv)
      , n = zb(bu.UseRouteError)
      , r = Bb(bu.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function Vb(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function Cu(e) {
    Ke(!1)
}
function Wb(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=Pn.Pop, navigator: i, static: s=!1, future: a} = e;
    Bc() && Ke(!1);
    let l = t.replace(/^\/*/, "/")
      , u = y.useMemo( () => ({
        basename: l,
        navigator: i,
        static: s,
        future: Qs({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, i, s]);
    typeof r == "string" && (r = wa(r));
    let {pathname: c="/", search: f="", hash: g="", state: d=null, key: S="default"} = r
      , m = y.useMemo( () => {
        let w = iv(c, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: f,
                hash: g,
                state: d,
                key: S
            },
            navigationType: o
        }
    }
    , [l, c, f, g, d, S, o]);
    return m == null ? null : y.createElement(av.Provider, {
        value: u
    }, y.createElement(Sa.Provider, {
        children: n,
        value: m
    }))
}
function Hb(e) {
    let {children: t, location: n} = e;
    return _b(ku(t), n)
}
new Promise( () => {}
);
function ku(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return y.Children.forEach(e, (r, o) => {
        if (!y.isValidElement(r))
            return;
        let i = [...t, o];
        if (r.type === y.Fragment) {
            n.push.apply(n, ku(r.props.children, i));
            return
        }
        r.type !== Cu && Ke(!1),
        !r.props.index || !r.props.children || Ke(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = ku(r.props.children, i)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Qb = "6";
try {
    window.__reactRouterVersion = Qb
} catch {}
const Kb = "startTransition"
  , Wf = Ou[Kb];
function Gb(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , i = y.useRef();
    i.current == null && (i.current = cb({
        window: o,
        v5Compat: !0
    }));
    let s = i.current
      , [a,l] = y.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: u} = r || {}
      , c = y.useCallback(f => {
        u && Wf ? Wf( () => l(f)) : l(f)
    }
    , [l, u]);
    return y.useLayoutEffect( () => s.listen(c), [s, c]),
    y.useEffect( () => Vb(r), [r]),
    y.createElement(Wb, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: s,
        future: r
    })
}
var Hf;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Hf || (Hf = {}));
var Qf;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Qf || (Qf = {}));
const Yb = Pc("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow hover:shadow-xl hover:scale-105",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-soft",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            cta: "bg-gradient-cta text-accent-foreground hover:shadow-xl hover:scale-105 font-bold shadow-soft",
            hero: "bg-gradient-hero text-primary-foreground hover:shadow-glow hover:scale-105 font-bold text-base shadow-glow"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-12 rounded-lg px-10 text-base",
            xl: "h-14 rounded-lg px-12 text-lg",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Ln = y.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, i) => {
    const s = r ? Mx : "button";
    return p.jsx(s, {
        className: Ae(Yb({
            variant: t,
            size: n,
            className: e
        })),
        ref: i,
        ...o
    })
}
);
Ln.displayName = "Button";
const Gt = y.forwardRef( ({className: e, type: t, ...n}, r) => p.jsx("input", {
    type: t,
    className: Ae("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
}));
Gt.displayName = "Input";
function Uc({variant: e="inline", className: t="", placeholder: n="Enter your email", buttonText: r="Get 10% Off", showName: o=!1, showPhone: i=!1, showZip: s=!1, incentiveText: a}) {
    const [l,u] = y.useState("")
      , [c,f] = y.useState("")
      , [g,d] = y.useState("")
      , [S,m] = y.useState("")
      , [w,v] = y.useState(!1)
      , {toast: h} = Ec()
      , x = async C => {
        if (C.preventDefault(),
        !l || !l.includes("@")) {
            h({
                title: "Invalid email",
                description: "Please enter a valid email address.",
                variant: "destructive"
            });
            return
        }
        v(!0);
        try {
            typeof window < "u" && window.gtag && window.gtag("event", "generate_lead", {
                event_category: "engagement",
                event_label: e,
                value: 1
            }),
            await new Promise(k => setTimeout(k, 1e3)),
            h({
                title: "Success! 🎉",
                description: a || "Check your email for your 10% off coupon code!"
            }),
            u(""),
            f(""),
            d(""),
            m("")
        } catch {
            h({
                title: "Oops!",
                description: "Something went wrong. Please try again.",
                variant: "destructive"
            })
        } finally {
            v(!1)
        }
    }
      , E = e === "hero"
      , b = e === "sticky";
    return p.jsxs("form", {
        onSubmit: x,
        className: `flex flex-col gap-3 w-full ${t}`,
        "data-form-variant": e,
        children: [E && o && p.jsx(Gt, {
            type: "text",
            placeholder: "Your name",
            value: c,
            onChange: C => f(C.target.value),
            className: "h-12 text-base",
            "aria-label": "Name"
        }), p.jsxs("div", {
            className: `flex ${b ? "flex-row" : "flex-col sm:flex-row"} gap-2 sm:gap-3 w-full`,
            children: [p.jsxs("div", {
                className: "flex-1 relative",
                children: [p.jsx(og, {
                    className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none"
                }), p.jsx(Gt, {
                    type: "email",
                    placeholder: n,
                    value: l,
                    onChange: C => u(C.target.value),
                    className: `pl-10 ${b ? "h-11" : "h-12"} text-base`,
                    required: !0,
                    "aria-label": "Email address"
                })]
            }), p.jsxs(Ln, {
                type: "submit",
                variant: E ? "hero" : "cta",
                size: b ? "default" : "lg",
                disabled: w,
                className: "whitespace-nowrap",
                children: [w ? "Sending..." : r, !w && p.jsx(ng, {
                    className: "ml-1 h-4 w-4"
                })]
            })]
        }), E && (i || s) && p.jsxs("div", {
            className: "flex flex-col sm:flex-row gap-2 sm:gap-3",
            children: [i && p.jsx(Gt, {
                type: "tel",
                placeholder: "Phone (optional)",
                value: g,
                onChange: C => d(C.target.value),
                className: "h-12 text-base",
                "aria-label": "Phone number"
            }), s && p.jsx(Gt, {
                type: "text",
                placeholder: "Zip code (optional)",
                value: S,
                onChange: C => m(C.target.value),
                className: "h-12 text-base",
                maxLength: 5,
                "aria-label": "Zip code"
            })]
        }), a && p.jsx("p", {
            className: "text-xs text-muted-foreground text-center sm:text-left",
            children: a
        })]
    })
}
const Kf = "/assets/hero-calzone-DNrVmNMA.jpg";
function qb() {
    return p.jsxs("section", {
        className: "relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-dark",
        children: [p.jsxs("div", {
            className: "absolute inset-0",
            children: [p.jsx("img", {
                src: Kf,
                alt: "Delicious golden calzone with melted cheese",
                className: "w-full h-full object-cover opacity-30"
            }), p.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80"
            })]
        }), p.jsx("div", {
            className: "container relative z-10 mx-auto px-4 py-20",
            children: p.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-12 items-center",
                children: [p.jsxs("div", {
                    className: "space-y-8 animate-fade-in",
                    children: [p.jsxs("div", {
                        className: "inline-flex items-center gap-2 bg-primary/10 text-primary-glow px-4 py-2 rounded-full text-sm font-medium border border-primary/20",
                        children: [p.jsx(rg, {
                            className: "h-4 w-4"
                        }), p.jsx("span", {
                            children: "Open Late Until 3 AM"
                        })]
                    }), p.jsxs("h1", {
                        className: "text-4xl sm:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight",
                        children: ["Late-Night Cravings?", p.jsx("span", {
                            className: "block text-primary-glow mt-2",
                            children: "We've Got You Covered."
                        })]
                    }), p.jsxs("p", {
                        className: "text-lg sm:text-xl text-primary-foreground/90 leading-relaxed max-w-xl",
                        children: ["Hot, fresh calzones delivered to your door. Get ", p.jsx("strong", {
                            className: "text-accent",
                            children: "10% off your first order"
                        }), " when you join our VIP list!"]
                    }), p.jsxs("div", {
                        className: "bg-card/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-primary/10 max-w-xl",
                        children: [p.jsxs("div", {
                            className: "mb-4",
                            children: [p.jsx("h3", {
                                className: "text-xl font-bold text-card-foreground mb-2",
                                children: "Claim Your 10% Off Coupon 🎉"
                            }), p.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Join 10,000+ students saving on late-night cravings"
                            })]
                        }), p.jsx(Uc, {
                            variant: "hero",
                            placeholder: "your@college.edu",
                            buttonText: "Get My Coupon",
                            showName: !1,
                            showPhone: !1,
                            showZip: !0,
                            incentiveText: "We respect your inbox. Unsubscribe anytime. 🔒"
                        }), p.jsx("div", {
                            className: "mt-4 pt-4 border-t border-border/50",
                            children: p.jsxs("div", {
                                className: "flex items-center gap-3 text-xs text-muted-foreground",
                                children: [p.jsx("div", {
                                    className: "flex -space-x-2",
                                    children: [...Array(4)].map( (e, t) => p.jsx("div", {
                                        className: "h-8 w-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-primary font-medium",
                                        children: String.fromCharCode(65 + t)
                                    }, t))
                                }), p.jsx("span", {
                                    children: "2,847 students joined this week"
                                })]
                            })
                        })]
                    }), p.jsxs("div", {
                        className: "flex flex-wrap gap-6 text-sm text-primary-foreground/80",
                        children: [p.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [p.jsx(ig, {
                                className: "h-5 w-5 text-primary-glow"
                            }), p.jsx("span", {
                                children: "Delivery to Campus"
                            })]
                        }), p.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [p.jsx(sg, {
                                className: "h-5 w-5 text-primary-glow"
                            }), p.jsx("span", {
                                children: "Order Online or Call"
                            })]
                        })]
                    })]
                }), p.jsx("div", {
                    className: "hidden lg:block relative animate-fade-in",
                    children: p.jsx("div", {
                        className: "relative",
                        children: p.jsx("img", {
                            src: Kf,
                            alt: "Mouth-watering D.P. Dough calzone",
                            className: "rounded-3xl shadow-glow w-full h-auto animate-pulse-glow"
                        })
                    })
                })]
            })
        })]
    })
}
const Xb = [{
    icon: rg,
    title: "Open Until 3 AM",
    description: "Late-night study sessions or party munchies, we're here when you need us most."
}, {
    icon: Mw,
    title: "Lightning Fast Delivery",
    description: "Average delivery time under 30 minutes. Hot food, delivered fresh to your door."
}, {
    icon: ag,
    title: "Student-Approved",
    description: "4.8★ rating from 15,000+ college students across 30+ campuses nationwide."
}, {
    icon: Rw,
    title: "Always Fresh, Never Frozen",
    description: "Hand-stretched dough, premium ingredients, and that perfect golden-brown crust every time."
}];
function Zb() {
    return p.jsx("section", {
        className: "py-20 bg-background",
        id: "why-choose-us",
        children: p.jsxs("div", {
            className: "container mx-auto px-4",
            children: [p.jsxs("div", {
                className: "text-center max-w-3xl mx-auto mb-16 animate-fade-in-up",
                children: [p.jsx("h2", {
                    className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4",
                    children: "Why Students Choose D.P. Dough"
                }), p.jsx("p", {
                    className: "text-lg text-muted-foreground",
                    children: "More than just calzones. We're the late-night tradition that's been fueling college life since 1987."
                })]
            }), p.jsx("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-8",
                children: Xb.map( (e, t) => p.jsxs("div", {
                    className: "group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border border-border/50",
                    style: {
                        animationDelay: `${t * 100}ms`
                    },
                    children: [p.jsx("div", {
                        className: "mb-4 inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110",
                        children: p.jsx(e.icon, {
                            className: "h-7 w-7"
                        })
                    }), p.jsx("h3", {
                        className: "text-xl font-bold text-card-foreground mb-2",
                        children: e.title
                    }), p.jsx("p", {
                        className: "text-sm text-muted-foreground leading-relaxed",
                        children: e.description
                    }), p.jsx("div", {
                        className: "absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-300 pointer-events-none"
                    })]
                }, t))
            })]
        })
    })
}
const Jb = "/assets/calzone-variety-B1lSReCu.jpg"
  , eC = Pc("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function tC({className: e, variant: t, ...n}) {
    return p.jsx("div", {
        className: Ae(eC({
            variant: t
        }), e),
        ...n
    })
}
const nC = [{
    name: "Classic Pepperoni",
    description: "Our most popular. Pepperoni, mozzarella, and signature sauce wrapped in golden perfection.",
    tag: "Best Seller",
    tagVariant: "default"
}, {
    name: "Buffalo Chicken",
    description: "Spicy buffalo chicken, ranch drizzle, and melted cheese. A late-night game-changer.",
    tag: "Fan Favorite",
    tagVariant: "secondary"
}, {
    name: "Veggie Deluxe",
    description: "Loaded with fresh veggies, ricotta, and mozzarella. Guilt-free indulgence.",
    tag: "Healthy Choice",
    tagVariant: "outline"
}];
function rC() {
    return p.jsx("section", {
        className: "py-20 bg-muted/30",
        id: "menu",
        children: p.jsx("div", {
            className: "container mx-auto px-4",
            children: p.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-12 items-center",
                children: [p.jsx("div", {
                    className: "relative animate-fade-in order-2 lg:order-1",
                    children: p.jsxs("div", {
                        className: "relative rounded-3xl overflow-hidden shadow-glow",
                        children: [p.jsx("img", {
                            src: Jb,
                            alt: "Variety of D.P. Dough calzones",
                            className: "w-full h-auto"
                        }), p.jsx("div", {
                            className: "absolute top-6 left-6 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold shadow-xl",
                            children: "20+ Varieties"
                        })]
                    })
                }), p.jsxs("div", {
                    className: "space-y-8 animate-fade-in-up order-1 lg:order-2",
                    children: [p.jsxs("div", {
                        children: [p.jsx("h2", {
                            className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4",
                            children: "Calzones Crafted for Cravings"
                        }), p.jsx("p", {
                            className: "text-lg text-muted-foreground",
                            children: "From classic combos to creative flavors, every calzone is made fresh to order with premium ingredients and that signature D.P. Dough taste."
                        })]
                    }), p.jsx("div", {
                        className: "space-y-4",
                        children: nC.map( (e, t) => p.jsxs("div", {
                            className: "bg-card rounded-xl p-5 shadow-soft border border-border/50 hover:shadow-glow transition-all duration-300 hover:-translate-x-2",
                            style: {
                                animationDelay: `${t * 100}ms`
                            },
                            children: [p.jsxs("div", {
                                className: "flex items-start justify-between mb-2",
                                children: [p.jsx("h3", {
                                    className: "text-xl font-bold text-card-foreground",
                                    children: e.name
                                }), p.jsx(tC, {
                                    variant: e.tagVariant,
                                    children: e.tag
                                })]
                            }), p.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: e.description
                            })]
                        }, t))
                    }), p.jsx("div", {
                        className: "pt-4",
                        children: p.jsxs(Ln, {
                            variant: "hero",
                            size: "lg",
                            className: "group",
                            children: ["View Full Menu", p.jsx(ng, {
                                className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                            })]
                        })
                    })]
                })]
            })
        })
    })
}
const oC = "/assets/college-students-DWr60TJQ.jpg"
  , iC = [{
    quote: "D.P. Dough saved my 2 AM study sessions. Fast delivery, hot food, and that Buffalo Chicken calzone is 🔥",
    author: "Sarah M.",
    school: "Ohio State University",
    rating: 5
}, {
    quote: "Best late-night food on campus, hands down. The coupon codes make it even better for a student budget!",
    author: "Mike T.",
    school: "Penn State",
    rating: 5
}, {
    quote: "I've tried every calzone place near campus. Nothing beats D.P. Dough's quality and speed.",
    author: "Jessica L.",
    school: "University of Maryland",
    rating: 5
}]
  , sC = [{
    value: "30+",
    label: "Campus Locations"
}, {
    value: "15K+",
    label: "5-Star Reviews"
}, {
    value: "<30min",
    label: "Avg. Delivery Time"
}, {
    value: "500K+",
    label: "Happy Students"
}];
function aC() {
    return p.jsxs("section", {
        className: "py-20 bg-gradient-dark relative overflow-hidden",
        id: "reviews",
        children: [p.jsx("div", {
            className: "absolute inset-0 opacity-20",
            children: p.jsx("img", {
                src: oC,
                alt: "Happy students enjoying D.P. Dough",
                className: "w-full h-full object-cover"
            })
        }), p.jsxs("div", {
            className: "container mx-auto px-4 relative z-10",
            children: [p.jsx("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in",
                children: sC.map( (e, t) => p.jsxs("div", {
                    className: "text-center bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-primary/10",
                    children: [p.jsx("div", {
                        className: "text-3xl sm:text-4xl font-black text-primary mb-2",
                        children: e.value
                    }), p.jsx("div", {
                        className: "text-sm text-muted-foreground font-medium",
                        children: e.label
                    })]
                }, t))
            }), p.jsxs("div", {
                className: "text-center max-w-3xl mx-auto mb-12 animate-fade-in-up",
                children: [p.jsx("h2", {
                    className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4",
                    children: "Loved by Students Everywhere"
                }), p.jsx("p", {
                    className: "text-lg text-primary-foreground/80",
                    children: "Don't just take our word for it. Here's what college students are saying about D.P. Dough."
                })]
            }), p.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: iC.map( (e, t) => p.jsxs("div", {
                    className: "bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border border-primary/10",
                    style: {
                        animationDelay: `${t * 100}ms`
                    },
                    children: [p.jsx("div", {
                        className: "mb-4",
                        children: p.jsx(_w, {
                            className: "h-8 w-8 text-primary/30"
                        })
                    }), p.jsx("div", {
                        className: "flex gap-1 mb-4",
                        children: [...Array(e.rating)].map( (n, r) => p.jsx(ag, {
                            className: "h-5 w-5 fill-accent text-accent"
                        }, r))
                    }), p.jsxs("p", {
                        className: "text-card-foreground mb-6 leading-relaxed",
                        children: ['"', e.quote, '"']
                    }), p.jsxs("div", {
                        className: "flex items-center gap-3 pt-4 border-t border-border/50",
                        children: [p.jsx("div", {
                            className: "h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold",
                            children: e.author.charAt(0)
                        }), p.jsxs("div", {
                            children: [p.jsx("div", {
                                className: "font-semibold text-card-foreground text-sm",
                                children: e.author
                            }), p.jsx("div", {
                                className: "text-xs text-muted-foreground",
                                children: e.school
                            })]
                        })]
                    })]
                }, t))
            })]
        })]
    })
}
const cv = y.forwardRef( ({className: e, ...t}, n) => p.jsx("textarea", {
    className: Ae("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
    ref: n,
    ...t
}));
cv.displayName = "Textarea";
function lC() {
    const [e,t] = y.useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: ""
    })
      , [n,r] = y.useState(!1)
      , {toast: o} = Ec()
      , i = async a => {
        if (a.preventDefault(),
        !e.name || !e.email || !e.phone) {
            o({
                title: "Missing information",
                description: "Please fill in all required fields.",
                variant: "destructive"
            });
            return
        }
        r(!0);
        try {
            typeof window < "u" && window.gtag && window.gtag("event", "franchise_inquiry", {
                event_category: "business",
                event_label: "franchise_form",
                value: 1
            }),
            await new Promise(l => setTimeout(l, 1e3)),
            o({
                title: "Thank you for your interest! 🎉",
                description: "Our franchise team will contact you within 24 hours."
            }),
            t({
                name: "",
                email: "",
                phone: "",
                location: "",
                message: ""
            })
        } catch {
            o({
                title: "Oops!",
                description: "Something went wrong. Please try again.",
                variant: "destructive"
            })
        } finally {
            r(!1)
        }
    }
      , s = a => {
        t({
            ...e,
            [a.target.name]: a.target.value
        })
    }
    ;
    return p.jsx("section", {
        className: "py-20 bg-muted/50",
        id: "franchise",
        children: p.jsx("div", {
            className: "container mx-auto px-4",
            children: p.jsxs("div", {
                className: "max-w-5xl mx-auto",
                children: [p.jsxs("div", {
                    className: "text-center mb-12 animate-fade-in-up",
                    children: [p.jsxs("div", {
                        className: "inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium border border-accent/20 mb-4",
                        children: [p.jsx(gf, {
                            className: "h-4 w-4"
                        }), p.jsx("span", {
                            children: "Business Opportunity"
                        })]
                    }), p.jsx("h2", {
                        className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4",
                        children: "Interested in Franchising?"
                    }), p.jsx("p", {
                        className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                        children: "Join the D.P. Dough family and bring late-night calzone magic to your campus or community."
                    })]
                }), p.jsxs("div", {
                    className: "grid lg:grid-cols-5 gap-8",
                    children: [p.jsxs("div", {
                        className: "lg:col-span-2 space-y-6 animate-fade-in",
                        children: [p.jsxs("div", {
                            className: "bg-card rounded-xl p-6 shadow-soft border border-border/50",
                            children: [p.jsx(Aw, {
                                className: "h-8 w-8 text-primary mb-3"
                            }), p.jsx("h3", {
                                className: "font-bold text-card-foreground mb-2",
                                children: "Proven Business Model"
                            }), p.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "35+ years of late-night success with strong unit economics and support."
                            })]
                        }), p.jsxs("div", {
                            className: "bg-card rounded-xl p-6 shadow-soft border border-border/50",
                            children: [p.jsx(Lw, {
                                className: "h-8 w-8 text-primary mb-3"
                            }), p.jsx("h3", {
                                className: "font-bold text-card-foreground mb-2",
                                children: "Built-In Customer Base"
                            }), p.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "College students nationwide already know and love our brand."
                            })]
                        }), p.jsxs("div", {
                            className: "bg-card rounded-xl p-6 shadow-soft border border-border/50",
                            children: [p.jsx(gf, {
                                className: "h-8 w-8 text-primary mb-3"
                            }), p.jsx("h3", {
                                className: "font-bold text-card-foreground mb-2",
                                children: "Comprehensive Training"
                            }), p.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Full operational support from site selection to grand opening and beyond."
                            })]
                        })]
                    }), p.jsx("div", {
                        className: "lg:col-span-3 animate-fade-in-up",
                        children: p.jsxs("form", {
                            onSubmit: i,
                            className: "bg-card rounded-2xl p-8 shadow-soft border border-border/50 space-y-4",
                            children: [p.jsxs("div", {
                                className: "grid sm:grid-cols-2 gap-4",
                                children: [p.jsxs("div", {
                                    children: [p.jsx("label", {
                                        htmlFor: "name",
                                        className: "block text-sm font-medium text-card-foreground mb-2",
                                        children: "Full Name *"
                                    }), p.jsx(Gt, {
                                        id: "name",
                                        name: "name",
                                        type: "text",
                                        value: e.name,
                                        onChange: s,
                                        required: !0,
                                        className: "h-11"
                                    })]
                                }), p.jsxs("div", {
                                    children: [p.jsx("label", {
                                        htmlFor: "email",
                                        className: "block text-sm font-medium text-card-foreground mb-2",
                                        children: "Email *"
                                    }), p.jsx(Gt, {
                                        id: "email",
                                        name: "email",
                                        type: "email",
                                        value: e.email,
                                        onChange: s,
                                        required: !0,
                                        className: "h-11"
                                    })]
                                })]
                            }), p.jsxs("div", {
                                className: "grid sm:grid-cols-2 gap-4",
                                children: [p.jsxs("div", {
                                    children: [p.jsx("label", {
                                        htmlFor: "phone",
                                        className: "block text-sm font-medium text-card-foreground mb-2",
                                        children: "Phone *"
                                    }), p.jsx(Gt, {
                                        id: "phone",
                                        name: "phone",
                                        type: "tel",
                                        value: e.phone,
                                        onChange: s,
                                        required: !0,
                                        className: "h-11"
                                    })]
                                }), p.jsxs("div", {
                                    children: [p.jsx("label", {
                                        htmlFor: "location",
                                        className: "block text-sm font-medium text-card-foreground mb-2",
                                        children: "Target Location"
                                    }), p.jsx(Gt, {
                                        id: "location",
                                        name: "location",
                                        type: "text",
                                        value: e.location,
                                        onChange: s,
                                        placeholder: "City, State",
                                        className: "h-11"
                                    })]
                                })]
                            }), p.jsxs("div", {
                                children: [p.jsx("label", {
                                    htmlFor: "message",
                                    className: "block text-sm font-medium text-card-foreground mb-2",
                                    children: "Tell us about your interest"
                                }), p.jsx(cv, {
                                    id: "message",
                                    name: "message",
                                    value: e.message,
                                    onChange: s,
                                    rows: 4,
                                    placeholder: "Experience, investment capacity, timeline...",
                                    className: "resize-none"
                                })]
                            }), p.jsx(Ln, {
                                type: "submit",
                                variant: "hero",
                                size: "lg",
                                disabled: n,
                                className: "w-full",
                                children: n ? "Submitting..." : "Request Franchise Info"
                            }), p.jsx("p", {
                                className: "text-xs text-muted-foreground text-center",
                                children: "By submitting, you agree to be contacted by our franchise team."
                            })]
                        })
                    })]
                })]
            })
        })
    })
}
function uC() {
    const [e,t] = y.useState(!1)
      , [n,r] = y.useState(!1);
    y.useEffect( () => {
        if (sessionStorage.getItem("emailBarDismissed")) {
            r(!0);
            return
        }
        const s = () => {
            const a = window.scrollY / window.innerHeight * 100;
            t(a > 50)
        }
        ;
        return window.addEventListener("scroll", s),
        () => window.removeEventListener("scroll", s)
    }
    , []);
    const o = () => {
        r(!0),
        sessionStorage.setItem("emailBarDismissed", "true")
    }
    ;
    return n ? null : p.jsx("div", {
        className: `fixed bottom-0 left-0 right-0 z-50 bg-gradient-hero backdrop-blur-md border-t border-primary/20 shadow-glow transition-transform duration-500 ${e ? "translate-y-0" : "translate-y-full"}`,
        role: "region",
        "aria-label": "Email signup bar",
        children: p.jsx("div", {
            className: "container mx-auto px-4 py-3",
            children: p.jsxs("div", {
                className: "flex items-center gap-4 max-w-4xl mx-auto",
                children: [p.jsx("div", {
                    className: "hidden sm:block text-primary-foreground font-bold text-sm lg:text-base whitespace-nowrap",
                    children: "Get 10% Off Your Order! 🎉"
                }), p.jsx("div", {
                    className: "flex-1",
                    children: p.jsx(Uc, {
                        variant: "sticky",
                        placeholder: "your@email.com",
                        buttonText: "Get Coupon",
                        className: "max-w-md mx-auto sm:mx-0"
                    })
                }), p.jsx(Ln, {
                    variant: "ghost",
                    size: "icon",
                    onClick: o,
                    className: "text-primary-foreground hover:bg-primary-foreground/10 shrink-0",
                    "aria-label": "Dismiss email signup",
                    children: p.jsx(Tc, {
                        className: "h-5 w-5"
                    })
                })]
            })
        })
    })
}
var cl = "focusScope.autoFocusOnMount"
  , dl = "focusScope.autoFocusOnUnmount"
  , Gf = {
    bubbles: !1,
    cancelable: !0
}
  , cC = "FocusScope"
  , dv = y.forwardRef( (e, t) => {
    const {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...s} = e
      , [a,l] = y.useState(null)
      , u = Ft(o)
      , c = Ft(i)
      , f = y.useRef(null)
      , g = Fe(t, m => l(m))
      , d = y.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    y.useEffect( () => {
        if (r) {
            let m = function(x) {
                if (d.paused || !a)
                    return;
                const E = x.target;
                a.contains(E) ? f.current = E : mn(f.current, {
                    select: !0
                })
            }
              , w = function(x) {
                if (d.paused || !a)
                    return;
                const E = x.relatedTarget;
                E !== null && (a.contains(E) || mn(f.current, {
                    select: !0
                }))
            }
              , v = function(x) {
                if (document.activeElement === document.body)
                    for (const b of x)
                        b.removedNodes.length > 0 && mn(a)
            };
            document.addEventListener("focusin", m),
            document.addEventListener("focusout", w);
            const h = new MutationObserver(v);
            return a && h.observe(a, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", m),
                document.removeEventListener("focusout", w),
                h.disconnect()
            }
        }
    }
    , [r, a, d.paused]),
    y.useEffect( () => {
        if (a) {
            qf.add(d);
            const m = document.activeElement;
            if (!a.contains(m)) {
                const v = new CustomEvent(cl,Gf);
                a.addEventListener(cl, u),
                a.dispatchEvent(v),
                v.defaultPrevented || (dC(gC(fv(a)), {
                    select: !0
                }),
                document.activeElement === m && mn(a))
            }
            return () => {
                a.removeEventListener(cl, u),
                setTimeout( () => {
                    const v = new CustomEvent(dl,Gf);
                    a.addEventListener(dl, c),
                    a.dispatchEvent(v),
                    v.defaultPrevented || mn(m ?? document.body, {
                        select: !0
                    }),
                    a.removeEventListener(dl, c),
                    qf.remove(d)
                }
                , 0)
            }
        }
    }
    , [a, u, c, d]);
    const S = y.useCallback(m => {
        if (!n && !r || d.paused)
            return;
        const w = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey
          , v = document.activeElement;
        if (w && v) {
            const h = m.currentTarget
              , [x,E] = fC(h);
            x && E ? !m.shiftKey && v === E ? (m.preventDefault(),
            n && mn(x, {
                select: !0
            })) : m.shiftKey && v === x && (m.preventDefault(),
            n && mn(E, {
                select: !0
            })) : v === h && m.preventDefault()
        }
    }
    , [n, r, d.paused]);
    return p.jsx(ve.div, {
        tabIndex: -1,
        ...s,
        ref: g,
        onKeyDown: S
    })
}
);
dv.displayName = cC;
function dC(e, {select: t=!1}={}) {
    const n = document.activeElement;
    for (const r of e)
        if (mn(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
function fC(e) {
    const t = fv(e)
      , n = Yf(t, e)
      , r = Yf(t.reverse(), e);
    return [n, r]
}
function fv(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Yf(e, t) {
    for (const n of e)
        if (!pC(n, {
            upTo: t
        }))
            return n
}
function pC(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function hC(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function mn(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && hC(e) && t && e.select()
    }
}
var qf = mC();
function mC() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
            e = Xf(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = Xf(e, t),
            (n = e[0]) == null || n.resume()
        }
    }
}
function Xf(e, t) {
    const n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
function gC(e) {
    return e.filter(t => t.tagName !== "A")
}
var fl = 0;
function vC() {
    y.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? Zf()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? Zf()),
        fl++,
        () => {
            fl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            fl--
        }
    }
    , [])
}
function Zf() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var At = function() {
    return At = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ,
    At.apply(this, arguments)
};
function pv(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
function yC(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, i; r < o; r++)
            (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)),
            i[r] = t[r]);
    return e.concat(i || Array.prototype.slice.call(t))
}
var hs = "right-scroll-bar-position"
  , ms = "width-before-scroll-bar"
  , xC = "with-scroll-bars-hidden"
  , wC = "--removed-body-scroll-bar-size";
function pl(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function SC(e, t) {
    var n = y.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r,
                    n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var EC = typeof window < "u" ? y.useLayoutEffect : y.useEffect
  , Jf = new WeakMap;
function bC(e, t) {
    var n = SC(null, function(r) {
        return e.forEach(function(o) {
            return pl(o, r)
        })
    });
    return EC(function() {
        var r = Jf.get(n);
        if (r) {
            var o = new Set(r)
              , i = new Set(e)
              , s = n.current;
            o.forEach(function(a) {
                i.has(a) || pl(a, null)
            }),
            i.forEach(function(a) {
                o.has(a) || pl(a, s)
            })
        }
        Jf.set(n, e)
    }, [e]),
    n
}
function CC(e) {
    return e
}
function kC(e, t) {
    t === void 0 && (t = CC);
    var n = []
      , r = !1
      , o = {
        read: function() {
            if (r)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(i) {
            var s = t(i, r);
            return n.push(s),
            function() {
                n = n.filter(function(a) {
                    return a !== s
                })
            }
        },
        assignSyncMedium: function(i) {
            for (r = !0; n.length; ) {
                var s = n;
                n = [],
                s.forEach(i)
            }
            n = {
                push: function(a) {
                    return i(a)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(i) {
            r = !0;
            var s = [];
            if (n.length) {
                var a = n;
                n = [],
                a.forEach(i),
                s = n
            }
            var l = function() {
                var c = s;
                s = [],
                c.forEach(i)
            }
              , u = function() {
                return Promise.resolve().then(l)
            };
            u(),
            n = {
                push: function(c) {
                    s.push(c),
                    u()
                },
                filter: function(c) {
                    return s = s.filter(c),
                    n
                }
            }
        }
    };
    return o
}
function NC(e) {
    e === void 0 && (e = {});
    var t = kC(null);
    return t.options = At({
        async: !0,
        ssr: !1
    }, e),
    t
}
var hv = function(e) {
    var t = e.sideCar
      , n = pv(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return y.createElement(r, At({}, n))
};
hv.isSideCarExport = !0;
function PC(e, t) {
    return e.useMedium(t),
    hv
}
var mv = NC()
  , hl = function() {}
  , ba = y.forwardRef(function(e, t) {
    var n = y.useRef(null)
      , r = y.useState({
        onScrollCapture: hl,
        onWheelCapture: hl,
        onTouchMoveCapture: hl
    })
      , o = r[0]
      , i = r[1]
      , s = e.forwardProps
      , a = e.children
      , l = e.className
      , u = e.removeScrollBar
      , c = e.enabled
      , f = e.shards
      , g = e.sideCar
      , d = e.noRelative
      , S = e.noIsolation
      , m = e.inert
      , w = e.allowPinchZoom
      , v = e.as
      , h = v === void 0 ? "div" : v
      , x = e.gapMode
      , E = pv(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , b = g
      , C = bC([n, t])
      , k = At(At({}, E), o);
    return y.createElement(y.Fragment, null, c && y.createElement(b, {
        sideCar: mv,
        removeScrollBar: u,
        shards: f,
        noRelative: d,
        noIsolation: S,
        inert: m,
        setCallbacks: i,
        allowPinchZoom: !!w,
        lockRef: n,
        gapMode: x
    }), s ? y.cloneElement(y.Children.only(a), At(At({}, k), {
        ref: C
    })) : y.createElement(h, At({}, k, {
        className: l,
        ref: C
    }), a))
});
ba.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
ba.classNames = {
    fullWidth: ms,
    zeroRight: hs
};
var TC = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function RC() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = TC();
    return t && e.setAttribute("nonce", t),
    e
}
function jC(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function OC(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var _C = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = RC()) && (jC(t, n),
            OC(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , AC = function() {
    var e = _C();
    return function(t, n) {
        y.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , gv = function() {
    var e = AC()
      , t = function(n) {
        var r = n.styles
          , o = n.dynamic;
        return e(r, o),
        null
    };
    return t
}
  , MC = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , ml = function(e) {
    return parseInt(e || "", 10) || 0
}
  , DC = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , r = t[e === "padding" ? "paddingTop" : "marginTop"]
      , o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [ml(n), ml(r), ml(o)]
}
  , LC = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return MC;
    var t = DC(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , IC = gv()
  , Qr = "data-scroll-locked"
  , FC = function(e, t, n, r) {
    var o = e.left
      , i = e.top
      , s = e.right
      , a = e.gap;
    return n === void 0 && (n = "margin"),
    `
  .`.concat(xC, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Qr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(hs, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(ms, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(hs, " .").concat(hs, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ms, " .").concat(ms, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Qr, `] {
    `).concat(wC, ": ").concat(a, `px;
  }
`)
}
  , ep = function() {
    var e = parseInt(document.body.getAttribute(Qr) || "0", 10);
    return isFinite(e) ? e : 0
}
  , zC = function() {
    y.useEffect(function() {
        return document.body.setAttribute(Qr, (ep() + 1).toString()),
        function() {
            var e = ep() - 1;
            e <= 0 ? document.body.removeAttribute(Qr) : document.body.setAttribute(Qr, e.toString())
        }
    }, [])
}
  , $C = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , o = r === void 0 ? "margin" : r;
    zC();
    var i = y.useMemo(function() {
        return LC(o)
    }, [o]);
    return y.createElement(IC, {
        styles: FC(i, !t, o, n ? "" : "!important")
    })
}
  , Nu = !1;
if (typeof window < "u")
    try {
        var Yi = Object.defineProperty({}, "passive", {
            get: function() {
                return Nu = !0,
                !0
            }
        });
        window.addEventListener("test", Yi, Yi),
        window.removeEventListener("test", Yi, Yi)
    } catch {
        Nu = !1
    }
var Er = Nu ? {
    passive: !1
} : !1
  , BC = function(e) {
    return e.tagName === "TEXTAREA"
}
  , vv = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !BC(e) && n[t] === "visible")
}
  , UC = function(e) {
    return vv(e, "overflowY")
}
  , VC = function(e) {
    return vv(e, "overflowX")
}
  , tp = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var o = yv(e, r);
        if (o) {
            var i = xv(e, r)
              , s = i[1]
              , a = i[2];
            if (s > a)
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , WC = function(e) {
    var t = e.scrollTop
      , n = e.scrollHeight
      , r = e.clientHeight;
    return [t, n, r]
}
  , HC = function(e) {
    var t = e.scrollLeft
      , n = e.scrollWidth
      , r = e.clientWidth;
    return [t, n, r]
}
  , yv = function(e, t) {
    return e === "v" ? UC(t) : VC(t)
}
  , xv = function(e, t) {
    return e === "v" ? WC(t) : HC(t)
}
  , QC = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , KC = function(e, t, n, r, o) {
    var i = QC(e, window.getComputedStyle(t).direction)
      , s = i * r
      , a = n.target
      , l = t.contains(a)
      , u = !1
      , c = s > 0
      , f = 0
      , g = 0;
    do {
        if (!a)
            break;
        var d = xv(e, a)
          , S = d[0]
          , m = d[1]
          , w = d[2]
          , v = m - w - i * S;
        (S || v) && yv(e, a) && (f += v,
        g += S);
        var h = a.parentNode;
        a = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h
    } while (!l && a !== document.body || l && (t.contains(a) || t === a));
    return (c && (Math.abs(f) < 1 || !o) || !c && (Math.abs(g) < 1 || !o)) && (u = !0),
    u
}
  , qi = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , np = function(e) {
    return [e.deltaX, e.deltaY]
}
  , rp = function(e) {
    return e && "current"in e ? e.current : e
}
  , GC = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , YC = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , qC = 0
  , br = [];
function XC(e) {
    var t = y.useRef([])
      , n = y.useRef([0, 0])
      , r = y.useRef()
      , o = y.useState(qC++)[0]
      , i = y.useState(gv)[0]
      , s = y.useRef(e);
    y.useEffect(function() {
        s.current = e
    }, [e]),
    y.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var m = yC([e.lockRef.current], (e.shards || []).map(rp), !0).filter(Boolean);
            return m.forEach(function(w) {
                return w.classList.add("allow-interactivity-".concat(o))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(o)),
                m.forEach(function(w) {
                    return w.classList.remove("allow-interactivity-".concat(o))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var a = y.useCallback(function(m, w) {
        if ("touches"in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
            return !s.current.allowPinchZoom;
        var v = qi(m), h = n.current, x = "deltaX"in m ? m.deltaX : h[0] - v[0], E = "deltaY"in m ? m.deltaY : h[1] - v[1], b, C = m.target, k = Math.abs(x) > Math.abs(E) ? "h" : "v";
        if ("touches"in m && k === "h" && C.type === "range")
            return !1;
        var R = tp(k, C);
        if (!R)
            return !0;
        if (R ? b = k : (b = k === "v" ? "h" : "v",
        R = tp(k, C)),
        !R)
            return !1;
        if (!r.current && "changedTouches"in m && (x || E) && (r.current = b),
        !b)
            return !0;
        var A = r.current || b;
        return KC(A, w, m, A === "h" ? x : E, !0)
    }, [])
      , l = y.useCallback(function(m) {
        var w = m;
        if (!(!br.length || br[br.length - 1] !== i)) {
            var v = "deltaY"in w ? np(w) : qi(w)
              , h = t.current.filter(function(b) {
                return b.name === w.type && (b.target === w.target || w.target === b.shadowParent) && GC(b.delta, v)
            })[0];
            if (h && h.should) {
                w.cancelable && w.preventDefault();
                return
            }
            if (!h) {
                var x = (s.current.shards || []).map(rp).filter(Boolean).filter(function(b) {
                    return b.contains(w.target)
                })
                  , E = x.length > 0 ? a(w, x[0]) : !s.current.noIsolation;
                E && w.cancelable && w.preventDefault()
            }
        }
    }, [])
      , u = y.useCallback(function(m, w, v, h) {
        var x = {
            name: m,
            delta: w,
            target: v,
            should: h,
            shadowParent: ZC(v)
        };
        t.current.push(x),
        setTimeout(function() {
            t.current = t.current.filter(function(E) {
                return E !== x
            })
        }, 1)
    }, [])
      , c = y.useCallback(function(m) {
        n.current = qi(m),
        r.current = void 0
    }, [])
      , f = y.useCallback(function(m) {
        u(m.type, np(m), m.target, a(m, e.lockRef.current))
    }, [])
      , g = y.useCallback(function(m) {
        u(m.type, qi(m), m.target, a(m, e.lockRef.current))
    }, []);
    y.useEffect(function() {
        return br.push(i),
        e.setCallbacks({
            onScrollCapture: f,
            onWheelCapture: f,
            onTouchMoveCapture: g
        }),
        document.addEventListener("wheel", l, Er),
        document.addEventListener("touchmove", l, Er),
        document.addEventListener("touchstart", c, Er),
        function() {
            br = br.filter(function(m) {
                return m !== i
            }),
            document.removeEventListener("wheel", l, Er),
            document.removeEventListener("touchmove", l, Er),
            document.removeEventListener("touchstart", c, Er)
        }
    }, []);
    var d = e.removeScrollBar
      , S = e.inert;
    return y.createElement(y.Fragment, null, S ? y.createElement(i, {
        styles: YC(o)
    }) : null, d ? y.createElement($C, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}
function ZC(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const JC = PC(mv, XC);
var wv = y.forwardRef(function(e, t) {
    return y.createElement(ba, At({}, e, {
        ref: t,
        sideCar: JC
    }))
});
wv.classNames = ba.classNames;
var e2 = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , Cr = new WeakMap
  , Xi = new WeakMap
  , Zi = {}
  , gl = 0
  , Sv = function(e) {
    return e && (e.host || Sv(e.parentNode))
}
  , t2 = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var r = Sv(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , n2 = function(e, t, n, r) {
    var o = t2(t, Array.isArray(e) ? e : [e]);
    Zi[n] || (Zi[n] = new WeakMap);
    var i = Zi[n]
      , s = []
      , a = new Set
      , l = new Set(o)
      , u = function(f) {
        !f || a.has(f) || (a.add(f),
        u(f.parentNode))
    };
    o.forEach(u);
    var c = function(f) {
        !f || l.has(f) || Array.prototype.forEach.call(f.children, function(g) {
            if (a.has(g))
                c(g);
            else
                try {
                    var d = g.getAttribute(r)
                      , S = d !== null && d !== "false"
                      , m = (Cr.get(g) || 0) + 1
                      , w = (i.get(g) || 0) + 1;
                    Cr.set(g, m),
                    i.set(g, w),
                    s.push(g),
                    m === 1 && S && Xi.set(g, !0),
                    w === 1 && g.setAttribute(n, "true"),
                    S || g.setAttribute(r, "true")
                } catch (v) {
                    console.error("aria-hidden: cannot operate on ", g, v)
                }
        })
    };
    return c(t),
    a.clear(),
    gl++,
    function() {
        s.forEach(function(f) {
            var g = Cr.get(f) - 1
              , d = i.get(f) - 1;
            Cr.set(f, g),
            i.set(f, d),
            g || (Xi.has(f) || f.removeAttribute(r),
            Xi.delete(f)),
            d || f.removeAttribute(n)
        }),
        gl--,
        gl || (Cr = new WeakMap,
        Cr = new WeakMap,
        Xi = new WeakMap,
        Zi = {})
    }
}
  , r2 = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , o = e2(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
    n2(r, o, n, "aria-hidden")) : function() {
        return null
    }
}
  , Ca = "Dialog"
  , [Ev,O2] = wi(Ca)
  , [o2,Nt] = Ev(Ca)
  , bv = e => {
    const {__scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: s=!0} = e
      , a = y.useRef(null)
      , l = y.useRef(null)
      , [u,c] = Am({
        prop: r,
        defaultProp: o ?? !1,
        onChange: i,
        caller: Ca
    });
    return p.jsx(o2, {
        scope: t,
        triggerRef: a,
        contentRef: l,
        contentId: sl(),
        titleId: sl(),
        descriptionId: sl(),
        open: u,
        onOpenChange: c,
        onOpenToggle: y.useCallback( () => c(f => !f), [c]),
        modal: s,
        children: n
    })
}
;
bv.displayName = Ca;
var Cv = "DialogTrigger"
  , i2 = y.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Nt(Cv, n)
      , i = Fe(t, o.triggerRef);
    return p.jsx(ve.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Hc(o.open),
        ...r,
        ref: i,
        onClick: le(e.onClick, o.onOpenToggle)
    })
}
);
i2.displayName = Cv;
var Vc = "DialogPortal"
  , [s2,kv] = Ev(Vc, {
    forceMount: void 0
})
  , Nv = e => {
    const {__scopeDialog: t, forceMount: n, children: r, container: o} = e
      , i = Nt(Vc, t);
    return p.jsx(s2, {
        scope: t,
        forceMount: n,
        children: y.Children.map(r, s => p.jsx(ho, {
            present: n || i.open,
            children: p.jsx(bc, {
                asChild: !0,
                container: o,
                children: s
            })
        }))
    })
}
;
Nv.displayName = Vc;
var Ks = "DialogOverlay"
  , Pv = y.forwardRef( (e, t) => {
    const n = kv(Ks, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , i = Nt(Ks, e.__scopeDialog);
    return i.modal ? p.jsx(ho, {
        present: r || i.open,
        children: p.jsx(l2, {
            ...o,
            ref: t
        })
    }) : null
}
);
Pv.displayName = Ks;
var a2 = ai("DialogOverlay.RemoveScroll")
  , l2 = y.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Nt(Ks, n);
    return p.jsx(wv, {
        as: a2,
        allowPinchZoom: !0,
        shards: [o.contentRef],
        children: p.jsx(ve.div, {
            "data-state": Hc(o.open),
            ...r,
            ref: t,
            style: {
                pointerEvents: "auto",
                ...r.style
            }
        })
    })
}
)
  , fr = "DialogContent"
  , Tv = y.forwardRef( (e, t) => {
    const n = kv(fr, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , i = Nt(fr, e.__scopeDialog);
    return p.jsx(ho, {
        present: r || i.open,
        children: i.modal ? p.jsx(u2, {
            ...o,
            ref: t
        }) : p.jsx(c2, {
            ...o,
            ref: t
        })
    })
}
);
Tv.displayName = fr;
var u2 = y.forwardRef( (e, t) => {
    const n = Nt(fr, e.__scopeDialog)
      , r = y.useRef(null)
      , o = Fe(t, n.contentRef, r);
    return y.useEffect( () => {
        const i = r.current;
        if (i)
            return r2(i)
    }
    , []),
    p.jsx(Rv, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: le(e.onCloseAutoFocus, i => {
            var s;
            i.preventDefault(),
            (s = n.triggerRef.current) == null || s.focus()
        }
        ),
        onPointerDownOutside: le(e.onPointerDownOutside, i => {
            const s = i.detail.originalEvent
              , a = s.button === 0 && s.ctrlKey === !0;
            (s.button === 2 || a) && i.preventDefault()
        }
        ),
        onFocusOutside: le(e.onFocusOutside, i => i.preventDefault())
    })
}
)
  , c2 = y.forwardRef( (e, t) => {
    const n = Nt(fr, e.__scopeDialog)
      , r = y.useRef(!1)
      , o = y.useRef(!1);
    return p.jsx(Rv, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: i => {
            var s, a;
            (s = e.onCloseAutoFocus) == null || s.call(e, i),
            i.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(),
            i.preventDefault()),
            r.current = !1,
            o.current = !1
        }
        ,
        onInteractOutside: i => {
            var l, u;
            (l = e.onInteractOutside) == null || l.call(e, i),
            i.defaultPrevented || (r.current = !0,
            i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
            const s = i.target;
            ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) && i.preventDefault(),
            i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault()
        }
    })
}
)
  , Rv = y.forwardRef( (e, t) => {
    const {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...s} = e
      , a = Nt(fr, n)
      , l = y.useRef(null)
      , u = Fe(t, l);
    return vC(),
    p.jsxs(p.Fragment, {
        children: [p.jsx(dv, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: p.jsx(ca, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": Hc(a.open),
                ...s,
                ref: u,
                onDismiss: () => a.onOpenChange(!1)
            })
        }), p.jsxs(p.Fragment, {
            children: [p.jsx(d2, {
                titleId: a.titleId
            }), p.jsx(p2, {
                contentRef: l,
                descriptionId: a.descriptionId
            })]
        })]
    })
}
)
  , Wc = "DialogTitle"
  , jv = y.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Nt(Wc, n);
    return p.jsx(ve.h2, {
        id: o.titleId,
        ...r,
        ref: t
    })
}
);
jv.displayName = Wc;
var Ov = "DialogDescription"
  , _v = y.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Nt(Ov, n);
    return p.jsx(ve.p, {
        id: o.descriptionId,
        ...r,
        ref: t
    })
}
);
_v.displayName = Ov;
var Av = "DialogClose"
  , Mv = y.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Nt(Av, n);
    return p.jsx(ve.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: le(e.onClick, () => o.onOpenChange(!1))
    })
}
);
Mv.displayName = Av;
function Hc(e) {
    return e ? "open" : "closed"
}
var Dv = "DialogTitleWarning"
  , [_2,Lv] = _x(Dv, {
    contentName: fr,
    titleName: Wc,
    docsSlug: "dialog"
})
  , d2 = ({titleId: e}) => {
    const t = Lv(Dv)
      , n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return y.useEffect( () => {
        e && (document.getElementById(e) || console.error(n))
    }
    , [n, e]),
    null
}
  , f2 = "DialogDescriptionWarning"
  , p2 = ({contentRef: e, descriptionId: t}) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Lv(f2).contentName}}.`;
    return y.useEffect( () => {
        var i;
        const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r))
    }
    , [r, e, t]),
    null
}
  , h2 = bv
  , m2 = Nv
  , Iv = Pv
  , Fv = Tv
  , zv = jv
  , $v = _v
  , g2 = Mv;
const v2 = h2
  , y2 = m2
  , Bv = y.forwardRef( ({className: e, ...t}, n) => p.jsx(Iv, {
    ref: n,
    className: Ae("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t
}));
Bv.displayName = Iv.displayName;
const Uv = y.forwardRef( ({className: e, children: t, ...n}, r) => p.jsxs(y2, {
    children: [p.jsx(Bv, {}), p.jsxs(Fv, {
        ref: r,
        className: Ae("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
        ...n,
        children: [t, p.jsxs(g2, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
            children: [p.jsx(Tc, {
                className: "h-4 w-4"
            }), p.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
Uv.displayName = Fv.displayName;
const Vv = ({className: e, ...t}) => p.jsx("div", {
    className: Ae("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t
});
Vv.displayName = "DialogHeader";
const Wv = y.forwardRef( ({className: e, ...t}, n) => p.jsx(zv, {
    ref: n,
    className: Ae("text-lg font-semibold leading-none tracking-tight", e),
    ...t
}));
Wv.displayName = zv.displayName;
const Hv = y.forwardRef( ({className: e, ...t}, n) => p.jsx($v, {
    ref: n,
    className: Ae("text-sm text-muted-foreground", e),
    ...t
}));
Hv.displayName = $v.displayName;
function x2() {
    const [e,t] = y.useState(!1);
    return y.useEffect( () => {
        if (!sessionStorage.getItem("hasSeenIncentiveModal")) {
            const r = setTimeout( () => {
                t(!0),
                sessionStorage.setItem("hasSeenIncentiveModal", "true")
            }
            , 1e4);
            return () => clearTimeout(r)
        }
    }
    , []),
    p.jsx(v2, {
        open: e,
        onOpenChange: t,
        children: p.jsxs(Uv, {
            className: "sm:max-w-md",
            children: [p.jsxs(Vv, {
                children: [p.jsx("div", {
                    className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent",
                    children: p.jsx(jw, {
                        className: "h-8 w-8"
                    })
                }), p.jsx(Wv, {
                    className: "text-center text-2xl",
                    children: "Wait! Before You Go... 🎉"
                }), p.jsxs(Hv, {
                    className: "text-center text-base",
                    children: ["Get ", p.jsx("strong", {
                        className: "text-accent",
                        children: "10% off your first order"
                    }), " when you join our VIP list. Plus, be the first to hear about exclusive deals!"]
                })]
            }), p.jsx("div", {
                className: "mt-4",
                children: p.jsx(Uc, {
                    variant: "inline",
                    placeholder: "your@college.edu",
                    buttonText: "Claim My 10% Off",
                    incentiveText: "No spam, just delicious deals. Unsubscribe anytime. 🔒"
                })
            }), p.jsx("p", {
                className: "text-xs text-center text-muted-foreground mt-4",
                children: "Limited time offer for new subscribers only"
            })]
        })
    })
}
const vl = {
    company: [{
        label: "About Us",
        href: "#about"
    }, {
        label: "Locations",
        href: "#locations"
    }, {
        label: "Franchise",
        href: "#franchise"
    }, {
        label: "Careers",
        href: "#careers"
    }],
    menu: [{
        label: "Calzones",
        href: "#menu"
    }, {
        label: "Sides",
        href: "#menu"
    }, {
        label: "Desserts",
        href: "#menu"
    }, {
        label: "Drinks",
        href: "#menu"
    }],
    legal: [{
        label: "Privacy Policy",
        href: "#privacy"
    }, {
        label: "Terms of Service",
        href: "#terms"
    }, {
        label: "Cookie Policy",
        href: "#cookies"
    }]
};
function w2() {
    return p.jsxs("footer", {
        className: "bg-secondary text-secondary-foreground",
        children: [p.jsx("div", {
            className: "container mx-auto px-4 py-16",
            children: p.jsxs("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-5 gap-8",
                children: [p.jsxs("div", {
                    className: "lg:col-span-2 space-y-4",
                    children: [p.jsx("div", {
                        className: "text-2xl font-black text-primary-glow",
                        children: "D.P. DOUGH"
                    }), p.jsx("p", {
                        className: "text-sm text-secondary-foreground/80 max-w-xs",
                        children: "Serving late-night calzone cravings to college campuses since 1987. Hot, fresh, and always delivered with a smile."
                    }), p.jsxs("div", {
                        className: "flex gap-3",
                        children: [p.jsx(Ln, {
                            variant: "ghost",
                            size: "icon",
                            className: "text-secondary-foreground/80 hover:text-primary-glow hover:bg-primary/10",
                            "aria-label": "Facebook",
                            children: p.jsx(Tw, {
                                className: "h-5 w-5"
                            })
                        }), p.jsx(Ln, {
                            variant: "ghost",
                            size: "icon",
                            className: "text-secondary-foreground/80 hover:text-primary-glow hover:bg-primary/10",
                            "aria-label": "Instagram",
                            children: p.jsx(Ow, {
                                className: "h-5 w-5"
                            })
                        }), p.jsx(Ln, {
                            variant: "ghost",
                            size: "icon",
                            className: "text-secondary-foreground/80 hover:text-primary-glow hover:bg-primary/10",
                            "aria-label": "Twitter",
                            children: p.jsx(Dw, {
                                className: "h-5 w-5"
                            })
                        })]
                    })]
                }), p.jsxs("div", {
                    children: [p.jsx("h4", {
                        className: "font-bold text-secondary-foreground mb-4",
                        children: "Company"
                    }), p.jsx("ul", {
                        className: "space-y-2",
                        children: vl.company.map( (e, t) => p.jsx("li", {
                            children: p.jsx("a", {
                                href: e.href,
                                className: "text-sm text-secondary-foreground/80 hover:text-primary-glow transition-colors",
                                children: e.label
                            })
                        }, t))
                    })]
                }), p.jsxs("div", {
                    children: [p.jsx("h4", {
                        className: "font-bold text-secondary-foreground mb-4",
                        children: "Menu"
                    }), p.jsx("ul", {
                        className: "space-y-2",
                        children: vl.menu.map( (e, t) => p.jsx("li", {
                            children: p.jsx("a", {
                                href: e.href,
                                className: "text-sm text-secondary-foreground/80 hover:text-primary-glow transition-colors",
                                children: e.label
                            })
                        }, t))
                    })]
                }), p.jsxs("div", {
                    children: [p.jsx("h4", {
                        className: "font-bold text-secondary-foreground mb-4",
                        children: "Contact"
                    }), p.jsxs("ul", {
                        className: "space-y-3",
                        children: [p.jsxs("li", {
                            className: "flex items-start gap-2 text-sm text-secondary-foreground/80",
                            children: [p.jsx(sg, {
                                className: "h-4 w-4 mt-0.5 shrink-0"
                            }), p.jsx("span", {
                                children: "1-800-DP-DOUGH"
                            })]
                        }), p.jsxs("li", {
                            className: "flex items-start gap-2 text-sm text-secondary-foreground/80",
                            children: [p.jsx(og, {
                                className: "h-4 w-4 mt-0.5 shrink-0"
                            }), p.jsx("span", {
                                children: "hello@dpdough.com"
                            })]
                        }), p.jsxs("li", {
                            className: "flex items-start gap-2 text-sm text-secondary-foreground/80",
                            children: [p.jsx(ig, {
                                className: "h-4 w-4 mt-0.5 shrink-0"
                            }), p.jsx("span", {
                                children: "Multiple Campus Locations"
                            })]
                        })]
                    })]
                })]
            })
        }), p.jsx("div", {
            className: "border-t border-secondary-foreground/10",
            children: p.jsxs("div", {
                className: "container mx-auto px-4 py-6",
                children: [p.jsxs("div", {
                    className: "flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60",
                    children: [p.jsxs("p", {
                        children: ["© ", new Date().getFullYear(), " D.P. Dough. All rights reserved."]
                    }), p.jsx("div", {
                        className: "flex gap-6",
                        children: vl.legal.map( (e, t) => p.jsx("a", {
                            href: e.href,
                            className: "hover:text-primary-glow transition-colors",
                            children: e.label
                        }, t))
                    })]
                }), p.jsxs("div", {
                    className: "mt-4 text-xs text-secondary-foreground/50 text-center sm:text-left",
                    children: ["We respect your privacy. By submitting your email, you agree to receive marketing communications from D.P. Dough. You can unsubscribe at any time. View our", " ", p.jsx("a", {
                        href: "#privacy",
                        className: "underline hover:text-primary-glow",
                        children: "Privacy Policy"
                    }), "."]
                })]
            })
        })]
    })
}
const S2 = () => p.jsxs("main", {
    className: "min-h-screen bg-background",
    children: [p.jsx(qb, {}), p.jsx(Zb, {}), p.jsx(rC, {}), p.jsx(aC, {}), p.jsx(lC, {}), p.jsx(w2, {}), p.jsx(uC, {}), p.jsx(x2, {})]
})
  , E2 = () => {
    const e = uv();
    return y.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    p.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-gray-100",
        children: p.jsxs("div", {
            className: "text-center",
            children: [p.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), p.jsx("p", {
                className: "mb-4 text-xl text-gray-600",
                children: "Oops! Page not found"
            }), p.jsx("a", {
                href: "/",
                className: "text-blue-500 underline hover:text-blue-700",
                children: "Return to Home"
            })]
        })
    })
}
  , b2 = new ab
  , C2 = () => p.jsx(ub, {
    client: b2,
    children: p.jsxs(IE, {
        children: [p.jsx(y1, {}), p.jsx(q1, {}), p.jsx(Gb, {
            children: p.jsxs(Hb, {
                children: [p.jsx(Cu, {
                    path: "/",
                    element: p.jsx(S2, {})
                }), p.jsx(Cu, {
                    path: "*",
                    element: p.jsx(E2, {})
                })]
            })
        })]
    })
});
Nm(document.getElementById("root")).render(p.jsx(C2, {}));
