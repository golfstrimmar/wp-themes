!(function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = (t[i] = { i: i, l: !1, exports: {} });
        return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = e),
    (n.c = t),
    (n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function(e) {
        "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (
            (n.r(i),
                Object.defineProperty(i, "default", { enumerable: !0, value: e }),
                2 & t && "string" != typeof e)
        )
            for (var o in e)
                n.d(
                    i,
                    o,
                    function(t) {
                        return e[t];
                    }.bind(null, o)
                );
        return i;
    }),
    (n.n = function(e) {
        var t =
            e && e.__esModule ?

            function() {
                return e.default;
            } :
            function() {
                return e;
            };
        return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 10));
})([
    function(e, t, n) {
        var i;
        /*!
         * jQuery JavaScript Library v3.5.1
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2020-05-04T22:49Z
         */
        !(function(t, n) {
            "use strict";
            "object" == typeof e.exports ?
                (e.exports = t.document ?
                    n(t, !0) :
                    function(e) {
                        if (!e.document)
                            throw new Error("jQuery requires a window with a document");
                        return n(e);
                    }) :
                n(t);
        })("undefined" != typeof window ? window : this, function(n, o) {
            "use strict";
            var r = [],
                s = Object.getPrototypeOf,
                a = r.slice,
                l = r.flat ?

                function(e) {
                    return r.flat.call(e);
                } :
                function(e) {
                    return r.concat.apply([], e);
                },
                c = r.push,
                d = r.indexOf,
                u = {},
                p = u.toString,
                f = u.hasOwnProperty,
                h = f.toString,
                v = h.call(Object),
                g = {},
                y = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType;
                },
                m = function(e) {
                    return null != e && e === e.window;
                },
                w = n.document,
                b = { type: !0, src: !0, nonce: !0, noModule: !0 };

            function x(e, t, n) {
                var i,
                    o,
                    r = (n = n || w).createElement("script");
                if (((r.text = e), t))
                    for (i in b)
                        (o = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                        r.setAttribute(i, o);
                n.head.appendChild(r).parentNode.removeChild(r);
            }

            function k(e) {
                return null == e ?
                    e + "" :
                    "object" == typeof e || "function" == typeof e ?
                    u[p.call(e)] || "object" :
                    typeof e;
            }
            var T = function(e, t) {
                return new T.fn.init(e, t);
            };

            function S(e) {
                var t = !!e && "length" in e && e.length,
                    n = k(e);
                return (!y(e) &&
                    !m(e) &&
                    ("array" === n ||
                        0 === t ||
                        ("number" == typeof t && t > 0 && t - 1 in e))
                );
            }
            (T.fn = T.prototype = {
                jquery: "3.5.1",
                constructor: T,
                length: 0,
                toArray: function() {
                    return a.call(this);
                },
                get: function(e) {
                    return null == e ?
                        a.call(this) :
                        e < 0 ?
                        this[e + this.length] :
                        this[e];
                },
                pushStack: function(e) {
                    var t = T.merge(this.constructor(), e);
                    return (t.prevObject = this), t;
                },
                each: function(e) {
                    return T.each(this, e);
                },
                map: function(e) {
                    return this.pushStack(
                        T.map(this, function(t, n) {
                            return e.call(t, n, t);
                        })
                    );
                },
                slice: function() {
                    return this.pushStack(a.apply(this, arguments));
                },
                first: function() {
                    return this.eq(0);
                },
                last: function() {
                    return this.eq(-1);
                },
                even: function() {
                    return this.pushStack(
                        T.grep(this, function(e, t) {
                            return (t + 1) % 2;
                        })
                    );
                },
                odd: function() {
                    return this.pushStack(
                        T.grep(this, function(e, t) {
                            return t % 2;
                        })
                    );
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                },
                end: function() {
                    return this.prevObject || this.constructor();
                },
                push: c,
                sort: r.sort,
                splice: r.splice,
            }),
            (T.extend = T.fn.extend = function() {
                var e,
                    t,
                    n,
                    i,
                    o,
                    r,
                    s = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    c = !1;
                for (
                    "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
                    "object" == typeof s || y(s) || (s = {}),
                    a === l && ((s = this), a--); a < l; a++
                )
                    if (null != (e = arguments[a]))
                        for (t in e)
                            (i = e[t]),
                            "__proto__" !== t &&
                            s !== i &&
                            (c && i && (T.isPlainObject(i) || (o = Array.isArray(i))) ?
                                ((n = s[t]),
                                    (r =
                                        o && !Array.isArray(n) ? [] :
                                        o || T.isPlainObject(n) ?
                                        n : {}),
                                    (o = !1),
                                    (s[t] = T.extend(c, r, i))) :
                                void 0 !== i && (s[t] = i));
                return s;
            }),
            T.extend({
                    expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e);
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                        var t, n;
                        return (!(!e || "[object Object]" !== p.call(e)) &&
                            (!(t = s(e)) ||
                                ("function" ==
                                    typeof(n = f.call(t, "constructor") && t.constructor) &&
                                    h.call(n) === v))
                        );
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e) return !1;
                        return !0;
                    },
                    globalEval: function(e, t, n) {
                        x(e, { nonce: t && t.nonce }, n);
                    },
                    each: function(e, t) {
                        var n,
                            i = 0;
                        if (S(e))
                            for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                        else
                            for (i in e)
                                if (!1 === t.call(e[i], i, e[i])) break;
                        return e;
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return (
                            null != e &&
                            (S(Object(e)) ?
                                T.merge(n, "string" == typeof e ? [e] : e) :
                                c.call(n, e)),
                            n
                        );
                    },
                    inArray: function(e, t, n) {
                        return null == t ? -1 : d.call(t, e, n);
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, i = 0, o = e.length; i < n; i++)
                            e[o++] = t[i];
                        return (e.length = o), e;
                    },
                    grep: function(e, t, n) {
                        for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
                            !t(e[o], o) !== s && i.push(e[o]);
                        return i;
                    },
                    map: function(e, t, n) {
                        var i,
                            o,
                            r = 0,
                            s = [];
                        if (S(e))
                            for (i = e.length; r < i; r++)
                                null != (o = t(e[r], r, n)) && s.push(o);
                        else
                            for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
                        return l(s);
                    },
                    guid: 1,
                    support: g,
                }),
                "function" == typeof Symbol &&
                (T.fn[Symbol.iterator] = r[Symbol.iterator]),
                T.each(
                    "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                        " "
                    ),
                    function(e, t) {
                        u["[object " + t + "]"] = t.toLowerCase();
                    }
                );
            var C =
                /*!
                 * Sizzle CSS Selector Engine v2.3.5
                 * https://sizzlejs.com/
                 *
                 * Copyright JS Foundation and other contributors
                 * Released under the MIT license
                 * https://js.foundation/
                 *
                 * Date: 2020-03-14
                 */
                (function(e) {
                    var t,
                        n,
                        i,
                        o,
                        r,
                        s,
                        a,
                        l,
                        c,
                        d,
                        u,
                        p,
                        f,
                        h,
                        v,
                        g,
                        y,
                        m,
                        w,
                        b = "sizzle" + 1 * new Date(),
                        x = e.document,
                        k = 0,
                        T = 0,
                        S = le(),
                        C = le(),
                        $ = le(),
                        A = le(),
                        E = function(e, t) {
                            return e === t && (u = !0), 0;
                        },
                        j = {}.hasOwnProperty,
                        D = [],
                        O = D.pop,
                        L = D.push,
                        H = D.push,
                        N = D.slice,
                        P = function(e, t) {
                            for (var n = 0, i = e.length; n < i; n++)
                                if (e[n] === t) return n;
                            return -1;
                        },
                        q =
                        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        M = "[\\x20\\t\\r\\n\\f]",
                        _ =
                        "(?:\\\\[\\da-fA-F]{1,6}" +
                        M +
                        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                        I =
                        "\\[" +
                        M +
                        "*(" +
                        _ +
                        ")(?:" +
                        M +
                        "*([*^$|!~]?=)" +
                        M +
                        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                        _ +
                        "))|)" +
                        M +
                        "*\\]",
                        z =
                        ":(" +
                        _ +
                        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                        I +
                        ")*)|.*)\\)|)",
                        R = new RegExp(M + "+", "g"),
                        W = new RegExp(
                            "^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$",
                            "g"
                        ),
                        F = new RegExp("^" + M + "*," + M + "*"),
                        B = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                        U = new RegExp(M + "|>"),
                        X = new RegExp(z),
                        Y = new RegExp("^" + _ + "$"),
                        V = {
                            ID: new RegExp("^#(" + _ + ")"),
                            CLASS: new RegExp("^\\.(" + _ + ")"),
                            TAG: new RegExp("^(" + _ + "|[*])"),
                            ATTR: new RegExp("^" + I),
                            PSEUDO: new RegExp("^" + z),
                            CHILD: new RegExp(
                                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                                M +
                                "*(even|odd|(([+-]|)(\\d*)n|)" +
                                M +
                                "*(?:([+-]|)" +
                                M +
                                "*(\\d+)|))" +
                                M +
                                "*\\)|)",
                                "i"
                            ),
                            bool: new RegExp("^(?:" + q + ")$", "i"),
                            needsContext: new RegExp(
                                "^" +
                                M +
                                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                                M +
                                "*((?:-\\d)?\\d*)" +
                                M +
                                "*\\)|)(?=[^-]|$)",
                                "i"
                            ),
                        },
                        G = /HTML$/i,
                        Q = /^(?:input|select|textarea|button)$/i,
                        J = /^h\d$/i,
                        K = /^[^{]+\{\s*\[native \w/,
                        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        ee = /[+~]/,
                        te = new RegExp(
                            "\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])",
                            "g"
                        ),
                        ne = function(e, t) {
                            var n = "0x" + e.slice(1) - 65536;
                            return (
                                t ||
                                (n < 0 ?
                                    String.fromCharCode(n + 65536) :
                                    String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
                            );
                        },
                        ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        oe = function(e, t) {
                            return t ?
                                "\0" === e ?
                                "�" :
                                e.slice(0, -1) +
                                "\\" +
                                e.charCodeAt(e.length - 1).toString(16) +
                                " " :
                                "\\" + e;
                        },
                        re = function() {
                            p();
                        },
                        se = be(
                            function(e) {
                                return (!0 === e.disabled && "fieldset" === e.nodeName.toLowerCase());
                            }, { dir: "parentNode", next: "legend" }
                        );
                    try {
                        H.apply((D = N.call(x.childNodes)), x.childNodes),
                            D[x.childNodes.length].nodeType;
                    } catch (e) {
                        H = {
                            apply: D.length ?

                                function(e, t) {
                                    L.apply(e, N.call(t));
                                } : function(e, t) {
                                    for (var n = e.length, i = 0;
                                        (e[n++] = t[i++]););
                                    e.length = n - 1;
                                },
                        };
                    }

                    function ae(e, t, i, o) {
                        var r,
                            a,
                            c,
                            d,
                            u,
                            h,
                            y,
                            m = t && t.ownerDocument,
                            x = t ? t.nodeType : 9;
                        if (
                            ((i = i || []),
                                "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
                        )
                            return i;
                        if (!o && (p(t), (t = t || f), v)) {
                            if (11 !== x && (u = Z.exec(e)))
                                if ((r = u[1])) {
                                    if (9 === x) {
                                        if (!(c = t.getElementById(r))) return i;
                                        if (c.id === r) return i.push(c), i;
                                    } else if (
                                        m &&
                                        (c = m.getElementById(r)) &&
                                        w(t, c) &&
                                        c.id === r
                                    )
                                        return i.push(c), i;
                                } else {
                                    if (u[2]) return H.apply(i, t.getElementsByTagName(e)), i;
                                    if (
                                        (r = u[3]) &&
                                        n.getElementsByClassName &&
                                        t.getElementsByClassName
                                    )
                                        return H.apply(i, t.getElementsByClassName(r)), i;
                                }
                            if (
                                n.qsa &&
                                !A[e + " "] &&
                                (!g || !g.test(e)) &&
                                (1 !== x || "object" !== t.nodeName.toLowerCase())
                            ) {
                                if (((y = e), (m = t), 1 === x && (U.test(e) || B.test(e)))) {
                                    for (
                                        ((m = (ee.test(e) && ye(t.parentNode)) || t) === t &&
                                            n.scope) ||
                                        ((d = t.getAttribute("id")) ?
                                            (d = d.replace(ie, oe)) :
                                            t.setAttribute("id", (d = b))),
                                        a = (h = s(e)).length; a--;

                                    )
                                        h[a] = (d ? "#" + d : ":scope") + " " + we(h[a]);
                                    y = h.join(",");
                                }
                                try {
                                    return H.apply(i, m.querySelectorAll(y)), i;
                                } catch (t) {
                                    A(e, !0);
                                } finally {
                                    d === b && t.removeAttribute("id");
                                }
                            }
                        }
                        return l(e.replace(W, "$1"), t, i, o);
                    }

                    function le() {
                        var e = [];
                        return function t(n, o) {
                            return (
                                e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                                (t[n + " "] = o)
                            );
                        };
                    }

                    function ce(e) {
                        return (e[b] = !0), e;
                    }

                    function de(e) {
                        var t = f.createElement("fieldset");
                        try {
                            return !!e(t);
                        } catch (e) {
                            return !1;
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), (t = null);
                        }
                    }

                    function ue(e, t) {
                        for (var n = e.split("|"), o = n.length; o--;)
                            i.attrHandle[n[o]] = t;
                    }

                    function pe(e, t) {
                        var n = t && e,
                            i =
                            n &&
                            1 === e.nodeType &&
                            1 === t.nodeType &&
                            e.sourceIndex - t.sourceIndex;
                        if (i) return i;
                        if (n)
                            for (;
                                (n = n.nextSibling);)
                                if (n === t) return -1;
                        return e ? 1 : -1;
                    }

                    function fe(e) {
                        return function(t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e;
                        };
                    }

                    function he(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e;
                        };
                    }

                    function ve(e) {
                        return function(t) {
                            return "form" in t ?
                                t.parentNode && !1 === t.disabled ?
                                "label" in t ?
                                "label" in t.parentNode ?
                                t.parentNode.disabled === e :
                                t.disabled === e :
                                t.isDisabled === e || (t.isDisabled !== !e && se(t) === e) :
                                t.disabled === e :
                                "label" in t && t.disabled === e;
                        };
                    }

                    function ge(e) {
                        return ce(function(t) {
                            return (
                                (t = +t),
                                ce(function(n, i) {
                                    for (var o, r = e([], n.length, t), s = r.length; s--;)
                                        n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
                                })
                            );
                        });
                    }

                    function ye(e) {
                        return e && void 0 !== e.getElementsByTagName && e;
                    }
                    for (t in ((n = ae.support = {}),
                            (r = ae.isXML = function(e) {
                                var t = e.namespaceURI,
                                    n = (e.ownerDocument || e).documentElement;
                                return !G.test(t || (n && n.nodeName) || "HTML");
                            }),
                            (p = ae.setDocument = function(e) {
                                var t,
                                    o,
                                    s = e ? e.ownerDocument || e : x;
                                return s != f && 9 === s.nodeType && s.documentElement ?
                                    ((h = (f = s).documentElement),
                                        (v = !r(f)),
                                        x != f &&
                                        (o = f.defaultView) &&
                                        o.top !== o &&
                                        (o.addEventListener ?
                                            o.addEventListener("unload", re, !1) :
                                            o.attachEvent && o.attachEvent("onunload", re)),
                                        (n.scope = de(function(e) {
                                            return (
                                                h.appendChild(e).appendChild(f.createElement("div")),
                                                void 0 !== e.querySelectorAll &&
                                                !e.querySelectorAll(":scope fieldset div").length
                                            );
                                        })),
                                        (n.attributes = de(function(e) {
                                            return (e.className = "i"), !e.getAttribute("className");
                                        })),
                                        (n.getElementsByTagName = de(function(e) {
                                            return (
                                                e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                                            );
                                        })),
                                        (n.getElementsByClassName = K.test(f.getElementsByClassName)),
                                        (n.getById = de(function(e) {
                                            return (
                                                (h.appendChild(e).id = b), !f.getElementsByName || !f.getElementsByName(b).length
                                            );
                                        })),
                                        n.getById ?
                                        ((i.filter.ID = function(e) {
                                                var t = e.replace(te, ne);
                                                return function(e) {
                                                    return e.getAttribute("id") === t;
                                                };
                                            }),
                                            (i.find.ID = function(e, t) {
                                                if (void 0 !== t.getElementById && v) {
                                                    var n = t.getElementById(e);
                                                    return n ? [n] : [];
                                                }
                                            })) :
                                        ((i.filter.ID = function(e) {
                                                var t = e.replace(te, ne);
                                                return function(e) {
                                                    var n =
                                                        void 0 !== e.getAttributeNode &&
                                                        e.getAttributeNode("id");
                                                    return n && n.value === t;
                                                };
                                            }),
                                            (i.find.ID = function(e, t) {
                                                if (void 0 !== t.getElementById && v) {
                                                    var n,
                                                        i,
                                                        o,
                                                        r = t.getElementById(e);
                                                    if (r) {
                                                        if ((n = r.getAttributeNode("id")) && n.value === e)
                                                            return [r];
                                                        for (
                                                            o = t.getElementsByName(e), i = 0;
                                                            (r = o[i++]);

                                                        )
                                                            if ((n = r.getAttributeNode("id")) && n.value === e)
                                                                return [r];
                                                    }
                                                    return [];
                                                }
                                            })),
                                        (i.find.TAG = n.getElementsByTagName ?

                                            function(e, t) {
                                                return void 0 !== t.getElementsByTagName ?
                                                    t.getElementsByTagName(e) :
                                                    n.qsa ?
                                                    t.querySelectorAll(e) :
                                                    void 0;
                                            } :
                                            function(e, t) {
                                                var n,
                                                    i = [],
                                                    o = 0,
                                                    r = t.getElementsByTagName(e);
                                                if ("*" === e) {
                                                    for (;
                                                        (n = r[o++]);) 1 === n.nodeType && i.push(n);
                                                    return i;
                                                }
                                                return r;
                                            }),
                                        (i.find.CLASS =
                                            n.getElementsByClassName &&
                                            function(e, t) {
                                                if (void 0 !== t.getElementsByClassName && v)
                                                    return t.getElementsByClassName(e);
                                            }),
                                        (y = []),
                                        (g = []),
                                        (n.qsa = K.test(f.querySelectorAll)) &&
                                        (de(function(e) {
                                                var t;
                                                (h.appendChild(e).innerHTML =
                                                    "<a id='" +
                                                    b +
                                                    "'></a><select id='" +
                                                    b +
                                                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                                e.querySelectorAll("[msallowcapture^='']").length &&
                                                    g.push("[*^$]=" + M + "*(?:''|\"\")"),
                                                    e.querySelectorAll("[selected]").length ||
                                                    g.push("\\[" + M + "*(?:value|" + q + ")"),
                                                    e.querySelectorAll("[id~=" + b + "-]").length ||
                                                    g.push("~="),
                                                    (t = f.createElement("input")).setAttribute("name", ""),
                                                    e.appendChild(t),
                                                    e.querySelectorAll("[name='']").length ||
                                                    g.push(
                                                        "\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"
                                                    ),
                                                    e.querySelectorAll(":checked").length ||
                                                    g.push(":checked"),
                                                    e.querySelectorAll("a#" + b + "+*").length ||
                                                    g.push(".#.+[+~]"),
                                                    e.querySelectorAll("\\\f"),
                                                    g.push("[\\r\\n\\f]");
                                            }),
                                            de(function(e) {
                                                e.innerHTML =
                                                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                                var t = f.createElement("input");
                                                t.setAttribute("type", "hidden"),
                                                    e.appendChild(t).setAttribute("name", "D"),
                                                    e.querySelectorAll("[name=d]").length &&
                                                    g.push("name" + M + "*[*^$|!~]?="),
                                                    2 !== e.querySelectorAll(":enabled").length &&
                                                    g.push(":enabled", ":disabled"),
                                                    (h.appendChild(e).disabled = !0),
                                                    2 !== e.querySelectorAll(":disabled").length &&
                                                    g.push(":enabled", ":disabled"),
                                                    e.querySelectorAll("*,:x"),
                                                    g.push(",.*:");
                                            })),
                                        (n.matchesSelector = K.test(
                                            (m =
                                                h.matches ||
                                                h.webkitMatchesSelector ||
                                                h.mozMatchesSelector ||
                                                h.oMatchesSelector ||
                                                h.msMatchesSelector)
                                        )) &&
                                        de(function(e) {
                                            (n.disconnectedMatch = m.call(e, "*")),
                                            m.call(e, "[s!='']:x"),
                                                y.push("!=", z);
                                        }),
                                        (g = g.length && new RegExp(g.join("|"))),
                                        (y = y.length && new RegExp(y.join("|"))),
                                        (t = K.test(h.compareDocumentPosition)),
                                        (w =
                                            t || K.test(h.contains) ?

                                            function(e, t) {
                                                var n = 9 === e.nodeType ? e.documentElement : e,
                                                    i = t && t.parentNode;
                                                return (
                                                    e === i ||
                                                    !(!i ||
                                                        1 !== i.nodeType ||
                                                        !(n.contains ?
                                                            n.contains(i) :
                                                            e.compareDocumentPosition &&
                                                            16 & e.compareDocumentPosition(i))
                                                    )
                                                );
                                            } :
                                            function(e, t) {
                                                if (t)
                                                    for (;
                                                        (t = t.parentNode);)
                                                        if (t === e) return !0;
                                                return !1;
                                            }),
                                        (E = t ?

                                            function(e, t) {
                                                if (e === t) return (u = !0), 0;
                                                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                                return (
                                                    i ||
                                                    (1 &
                                                        (i =
                                                            (e.ownerDocument || e) == (t.ownerDocument || t) ?
                                                            e.compareDocumentPosition(t) :
                                                            1) ||
                                                        (!n.sortDetached && t.compareDocumentPosition(e) === i) ?
                                                        e == f || (e.ownerDocument == x && w(x, e)) ?
                                                        -1 :
                                                        t == f || (t.ownerDocument == x && w(x, t)) ?
                                                        1 :
                                                        d ?
                                                        P(d, e) - P(d, t) :
                                                        0 :
                                                        4 & i ?
                                                        -1 :
                                                        1)
                                                );
                                            } :
                                            function(e, t) {
                                                if (e === t) return (u = !0), 0;
                                                var n,
                                                    i = 0,
                                                    o = e.parentNode,
                                                    r = t.parentNode,
                                                    s = [e],
                                                    a = [t];
                                                if (!o || !r)
                                                    return e == f ?
                                                        -1 :
                                                        t == f ?
                                                        1 :
                                                        o ?
                                                        -1 :
                                                        r ?
                                                        1 :
                                                        d ?
                                                        P(d, e) - P(d, t) :
                                                        0;
                                                if (o === r) return pe(e, t);
                                                for (n = e;
                                                    (n = n.parentNode);) s.unshift(n);
                                                for (n = t;
                                                    (n = n.parentNode);) a.unshift(n);
                                                for (; s[i] === a[i];) i++;
                                                return i ?
                                                    pe(s[i], a[i]) :
                                                    s[i] == x ?
                                                    -1 :
                                                    a[i] == x ?
                                                    1 :
                                                    0;
                                            }),
                                        f) :
                                    f;
                            }),
                            (ae.matches = function(e, t) {
                                return ae(e, null, null, t);
                            }),
                            (ae.matchesSelector = function(e, t) {
                                if (
                                    (p(e),
                                        n.matchesSelector &&
                                        v &&
                                        !A[t + " "] &&
                                        (!y || !y.test(t)) &&
                                        (!g || !g.test(t)))
                                )
                                    try {
                                        var i = m.call(e, t);
                                        if (
                                            i ||
                                            n.disconnectedMatch ||
                                            (e.document && 11 !== e.document.nodeType)
                                        )
                                            return i;
                                    } catch (e) {
                                        A(t, !0);
                                    }
                                return ae(t, f, null, [e]).length > 0;
                            }),
                            (ae.contains = function(e, t) {
                                return (e.ownerDocument || e) != f && p(e), w(e, t);
                            }),
                            (ae.attr = function(e, t) {
                                (e.ownerDocument || e) != f && p(e);
                                var o = i.attrHandle[t.toLowerCase()],
                                    r =
                                    o && j.call(i.attrHandle, t.toLowerCase()) ?
                                    o(e, t, !v) :
                                    void 0;
                                return void 0 !== r ?
                                    r :
                                    n.attributes || !v ?
                                    e.getAttribute(t) :
                                    (r = e.getAttributeNode(t)) && r.specified ?
                                    r.value :
                                    null;
                            }),
                            (ae.escape = function(e) {
                                return (e + "").replace(ie, oe);
                            }),
                            (ae.error = function(e) {
                                throw new Error("Syntax error, unrecognized expression: " + e);
                            }),
                            (ae.uniqueSort = function(e) {
                                var t,
                                    i = [],
                                    o = 0,
                                    r = 0;
                                if (
                                    ((u = !n.detectDuplicates),
                                        (d = !n.sortStable && e.slice(0)),
                                        e.sort(E),
                                        u)
                                ) {
                                    for (;
                                        (t = e[r++]);) t === e[r] && (o = i.push(r));
                                    for (; o--;) e.splice(i[o], 1);
                                }
                                return (d = null), e;
                            }),
                            (o = ae.getText = function(e) {
                                var t,
                                    n = "",
                                    i = 0,
                                    r = e.nodeType;
                                if (r) {
                                    if (1 === r || 9 === r || 11 === r) {
                                        if ("string" == typeof e.textContent) return e.textContent;
                                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                                    } else if (3 === r || 4 === r) return e.nodeValue;
                                } else
                                    for (;
                                        (t = e[i++]);) n += o(t);
                                return n;
                            }),
                            ((i = ae.selectors = {
                                cacheLength: 50,
                                createPseudo: ce,
                                match: V,
                                attrHandle: {},
                                find: {},
                                relative: {
                                    ">": { dir: "parentNode", first: !0 },
                                    " ": { dir: "parentNode" },
                                    "+": { dir: "previousSibling", first: !0 },
                                    "~": { dir: "previousSibling" },
                                },
                                preFilter: {
                                    ATTR: function(e) {
                                        return (
                                            (e[1] = e[1].replace(te, ne)),
                                            (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                            e.slice(0, 4)
                                        );
                                    },
                                    CHILD: function(e) {
                                        return (
                                            (e[1] = e[1].toLowerCase()),
                                            "nth" === e[1].slice(0, 3) ?
                                            (e[3] || ae.error(e[0]),
                                                (e[4] = +(e[4] ?
                                                    e[5] + (e[6] || 1) :
                                                    2 * ("even" === e[3] || "odd" === e[3]))),
                                                (e[5] = +(e[7] + e[8] || "odd" === e[3]))) :
                                            e[3] && ae.error(e[0]),
                                            e
                                        );
                                    },
                                    PSEUDO: function(e) {
                                        var t,
                                            n = !e[6] && e[2];
                                        return V.CHILD.test(e[0]) ?
                                            null :
                                            (e[3] ?
                                                (e[2] = e[4] || e[5] || "") :
                                                n &&
                                                X.test(n) &&
                                                (t = s(n, !0)) &&
                                                (t = n.indexOf(")", n.length - t) - n.length) &&
                                                ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                                                e.slice(0, 3));
                                    },
                                },
                                filter: {
                                    TAG: function(e) {
                                        var t = e.replace(te, ne).toLowerCase();
                                        return "*" === e ?

                                            function() {
                                                return !0;
                                            } :
                                            function(e) {
                                                return e.nodeName && e.nodeName.toLowerCase() === t;
                                            };
                                    },
                                    CLASS: function(e) {
                                        var t = S[e + " "];
                                        return (
                                            t ||
                                            ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                                                S(e, function(e) {
                                                    return t.test(
                                                        ("string" == typeof e.className && e.className) ||
                                                        (void 0 !== e.getAttribute &&
                                                            e.getAttribute("class")) ||
                                                        ""
                                                    );
                                                }))
                                        );
                                    },
                                    ATTR: function(e, t, n) {
                                        return function(i) {
                                            var o = ae.attr(i, e);
                                            return null == o ?
                                                "!=" === t :
                                                !t ||
                                                ((o += ""),
                                                    "=" === t ?
                                                    o === n :
                                                    "!=" === t ?
                                                    o !== n :
                                                    "^=" === t ?
                                                    n && 0 === o.indexOf(n) :
                                                    "*=" === t ?
                                                    n && o.indexOf(n) > -1 :
                                                    "$=" === t ?
                                                    n && o.slice(-n.length) === n :
                                                    "~=" === t ?
                                                    (" " + o.replace(R, " ") + " ").indexOf(n) > -1 :
                                                    "|=" === t &&
                                                    (o === n || o.slice(0, n.length + 1) === n + "-"));
                                        };
                                    },
                                    CHILD: function(e, t, n, i, o) {
                                        var r = "nth" !== e.slice(0, 3),
                                            s = "last" !== e.slice(-4),
                                            a = "of-type" === t;
                                        return 1 === i && 0 === o ?

                                            function(e) {
                                                return !!e.parentNode;
                                            } :
                                            function(t, n, l) {
                                                var c,
                                                    d,
                                                    u,
                                                    p,
                                                    f,
                                                    h,
                                                    v = r !== s ? "nextSibling" : "previousSibling",
                                                    g = t.parentNode,
                                                    y = a && t.nodeName.toLowerCase(),
                                                    m = !l && !a,
                                                    w = !1;
                                                if (g) {
                                                    if (r) {
                                                        for (; v;) {
                                                            for (p = t;
                                                                (p = p[v]);)
                                                                if (
                                                                    a ?
                                                                    p.nodeName.toLowerCase() === y :
                                                                    1 === p.nodeType
                                                                )
                                                                    return !1;
                                                            h = v = "only" === e && !h && "nextSibling";
                                                        }
                                                        return !0;
                                                    }
                                                    if (((h = [s ? g.firstChild : g.lastChild]), s && m)) {
                                                        for (
                                                            w =
                                                            (f =
                                                                (c =
                                                                    (d =
                                                                        (u = (p = g)[b] || (p[b] = {}))[
                                                                            p.uniqueID
                                                                        ] || (u[p.uniqueID] = {}))[e] || [])[0] ===
                                                                k && c[1]) && c[2],
                                                            p = f && g.childNodes[f];
                                                            (p = (++f && p && p[v]) || (w = f = 0) || h.pop());

                                                        )
                                                            if (1 === p.nodeType && ++w && p === t) {
                                                                d[e] = [k, f, w];
                                                                break;
                                                            }
                                                    } else if (
                                                        (m &&
                                                            (w = f =
                                                                (c =
                                                                    (d =
                                                                        (u = (p = t)[b] || (p[b] = {}))[p.uniqueID] ||
                                                                        (u[p.uniqueID] = {}))[e] || [])[0] === k &&
                                                                c[1]), !1 === w)
                                                    )
                                                        for (;
                                                            (p =
                                                                (++f && p && p[v]) || (w = f = 0) || h.pop()) &&
                                                            ((a ?
                                                                    p.nodeName.toLowerCase() !== y :
                                                                    1 !== p.nodeType) ||
                                                                !++w ||
                                                                (m &&
                                                                    ((d =
                                                                        (u = p[b] || (p[b] = {}))[p.uniqueID] ||
                                                                        (u[p.uniqueID] = {}))[e] = [k, w]),
                                                                    p !== t));

                                                        );
                                                    return (w -= o) === i || (w % i == 0 && w / i >= 0);
                                                }
                                            };
                                    },
                                    PSEUDO: function(e, t) {
                                        var n,
                                            o =
                                            i.pseudos[e] ||
                                            i.setFilters[e.toLowerCase()] ||
                                            ae.error("unsupported pseudo: " + e);
                                        return o[b] ?
                                            o(t) :
                                            o.length > 1 ?
                                            ((n = [e, e, "", t]),
                                                i.setFilters.hasOwnProperty(e.toLowerCase()) ?
                                                ce(function(e, n) {
                                                    for (var i, r = o(e, t), s = r.length; s--;)
                                                        e[(i = P(e, r[s]))] = !(n[i] = r[s]);
                                                }) :
                                                function(e) {
                                                    return o(e, 0, n);
                                                }) :
                                            o;
                                    },
                                },
                                pseudos: {
                                    not: ce(function(e) {
                                        var t = [],
                                            n = [],
                                            i = a(e.replace(W, "$1"));
                                        return i[b] ?
                                            ce(function(e, t, n, o) {
                                                for (var r, s = i(e, null, o, []), a = e.length; a--;)
                                                    (r = s[a]) && (e[a] = !(t[a] = r));
                                            }) :
                                            function(e, o, r) {
                                                return (
                                                    (t[0] = e), i(t, null, r, n), (t[0] = null), !n.pop()
                                                );
                                            };
                                    }),
                                    has: ce(function(e) {
                                        return function(t) {
                                            return ae(e, t).length > 0;
                                        };
                                    }),
                                    contains: ce(function(e) {
                                        return (
                                            (e = e.replace(te, ne)),
                                            function(t) {
                                                return (t.textContent || o(t)).indexOf(e) > -1;
                                            }
                                        );
                                    }),
                                    lang: ce(function(e) {
                                        return (
                                            Y.test(e || "") || ae.error("unsupported lang: " + e),
                                            (e = e.replace(te, ne).toLowerCase()),
                                            function(t) {
                                                var n;
                                                do {
                                                    if (
                                                        (n = v ?
                                                            t.lang :
                                                            t.getAttribute("xml:lang") ||
                                                            t.getAttribute("lang"))
                                                    )
                                                        return (
                                                            (n = n.toLowerCase()) === e ||
                                                            0 === n.indexOf(e + "-")
                                                        );
                                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                                return !1;
                                            }
                                        );
                                    }),
                                    target: function(t) {
                                        var n = e.location && e.location.hash;
                                        return n && n.slice(1) === t.id;
                                    },
                                    root: function(e) {
                                        return e === h;
                                    },
                                    focus: function(e) {
                                        return (
                                            e === f.activeElement &&
                                            (!f.hasFocus || f.hasFocus()) &&
                                            !!(e.type || e.href || ~e.tabIndex)
                                        );
                                    },
                                    enabled: ve(!1),
                                    disabled: ve(!0),
                                    checked: function(e) {
                                        var t = e.nodeName.toLowerCase();
                                        return (
                                            ("input" === t && !!e.checked) ||
                                            ("option" === t && !!e.selected)
                                        );
                                    },
                                    selected: function(e) {
                                        return (
                                            e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                        );
                                    },
                                    empty: function(e) {
                                        for (e = e.firstChild; e; e = e.nextSibling)
                                            if (e.nodeType < 6) return !1;
                                        return !0;
                                    },
                                    parent: function(e) {
                                        return !i.pseudos.empty(e);
                                    },
                                    header: function(e) {
                                        return J.test(e.nodeName);
                                    },
                                    input: function(e) {
                                        return Q.test(e.nodeName);
                                    },
                                    button: function(e) {
                                        var t = e.nodeName.toLowerCase();
                                        return ("input" === t && "button" === e.type) || "button" === t;
                                    },
                                    text: function(e) {
                                        var t;
                                        return (
                                            "input" === e.nodeName.toLowerCase() &&
                                            "text" === e.type &&
                                            (null == (t = e.getAttribute("type")) ||
                                                "text" === t.toLowerCase())
                                        );
                                    },
                                    first: ge(function() {
                                        return [0];
                                    }),
                                    last: ge(function(e, t) {
                                        return [t - 1];
                                    }),
                                    eq: ge(function(e, t, n) {
                                        return [n < 0 ? n + t : n];
                                    }),
                                    even: ge(function(e, t) {
                                        for (var n = 0; n < t; n += 2) e.push(n);
                                        return e;
                                    }),
                                    odd: ge(function(e, t) {
                                        for (var n = 1; n < t; n += 2) e.push(n);
                                        return e;
                                    }),
                                    lt: ge(function(e, t, n) {
                                        for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;)
                                            e.push(i);
                                        return e;
                                    }),
                                    gt: ge(function(e, t, n) {
                                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                        return e;
                                    }),
                                },
                            }).pseudos.nth = i.pseudos.eq), { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                        i.pseudos[t] = fe(t);
                    for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);

                    function me() {}

                    function we(e) {
                        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                        return i;
                    }

                    function be(e, t, n) {
                        var i = t.dir,
                            o = t.next,
                            r = o || i,
                            s = n && "parentNode" === r,
                            a = T++;
                        return t.first ?

                            function(t, n, o) {
                                for (;
                                    (t = t[i]);)
                                    if (1 === t.nodeType || s) return e(t, n, o);
                                return !1;
                            } :
                            function(t, n, l) {
                                var c,
                                    d,
                                    u,
                                    p = [k, a];
                                if (l) {
                                    for (;
                                        (t = t[i]);)
                                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                                } else
                                    for (;
                                        (t = t[i]);)
                                        if (1 === t.nodeType || s)
                                            if (
                                                ((d =
                                                        (u = t[b] || (t[b] = {}))[t.uniqueID] ||
                                                        (u[t.uniqueID] = {})),
                                                    o && o === t.nodeName.toLowerCase())
                                            )
                                                t = t[i] || t;
                                            else {
                                                if ((c = d[r]) && c[0] === k && c[1] === a)
                                                    return (p[2] = c[2]);
                                                if (((d[r] = p), (p[2] = e(t, n, l)))) return !0;
                                            }
                                return !1;
                            };
                    }

                    function xe(e) {
                        return e.length > 1 ?

                            function(t, n, i) {
                                for (var o = e.length; o--;)
                                    if (!e[o](t, n, i)) return !1;
                                return !0;
                            } :
                            e[0];
                    }

                    function ke(e, t, n, i, o) {
                        for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                            (r = e[a]) && ((n && !n(r, i, o)) || (s.push(r), c && t.push(a)));
                        return s;
                    }

                    function Te(e, t, n, i, o, r) {
                        return (
                            i && !i[b] && (i = Te(i)),
                            o && !o[b] && (o = Te(o, r)),
                            ce(function(r, s, a, l) {
                                var c,
                                    d,
                                    u,
                                    p = [],
                                    f = [],
                                    h = s.length,
                                    v =
                                    r ||
                                    (function(e, t, n) {
                                        for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                                        return n;
                                    })(t || "*", a.nodeType ? [a] : a, []),
                                    g = !e || (!r && t) ? v : ke(v, p, e, a, l),
                                    y = n ? (o || (r ? e : h || i) ? [] : s) : g;
                                if ((n && n(g, y, a, l), i))
                                    for (c = ke(y, f), i(c, [], a, l), d = c.length; d--;)
                                        (u = c[d]) && (y[f[d]] = !(g[f[d]] = u));
                                if (r) {
                                    if (o || e) {
                                        if (o) {
                                            for (c = [], d = y.length; d--;)
                                                (u = y[d]) && c.push((g[d] = u));
                                            o(null, (y = []), c, l);
                                        }
                                        for (d = y.length; d--;)
                                            (u = y[d]) &&
                                            (c = o ? P(r, u) : p[d]) > -1 &&
                                            (r[c] = !(s[c] = u));
                                    }
                                } else(y = ke(y === s ? y.splice(h, y.length) : y)), o ? o(null, s, y, l) : H.apply(s, y);
                            })
                        );
                    }

                    function Se(e) {
                        for (
                            var t,
                                n,
                                o,
                                r = e.length,
                                s = i.relative[e[0].type],
                                a = s || i.relative[" "],
                                l = s ? 1 : 0,
                                d = be(
                                    function(e) {
                                        return e === t;
                                    },
                                    a, !0
                                ),
                                u = be(
                                    function(e) {
                                        return P(t, e) > -1;
                                    },
                                    a, !0
                                ),
                                p = [
                                    function(e, n, i) {
                                        var o =
                                            (!s && (i || n !== c)) ||
                                            ((t = n).nodeType ? d(e, n, i) : u(e, n, i));
                                        return (t = null), o;
                                    },
                                ]; l < r; l++
                        )
                            if ((n = i.relative[e[l].type])) p = [be(xe(p), n)];
                            else {
                                if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
                                    for (o = ++l; o < r && !i.relative[e[o].type]; o++);
                                    return Te(
                                        l > 1 && xe(p),
                                        l > 1 &&
                                        we(
                                            e
                                            .slice(0, l - 1)
                                            .concat({ value: " " === e[l - 2].type ? "*" : "" })
                                        ).replace(W, "$1"),
                                        n,
                                        l < o && Se(e.slice(l, o)),
                                        o < r && Se((e = e.slice(o))),
                                        o < r && we(e)
                                    );
                                }
                                p.push(n);
                            }
                        return xe(p);
                    }
                    return (
                        (me.prototype = i.filters = i.pseudos),
                        (i.setFilters = new me()),
                        (s = ae.tokenize = function(e, t) {
                            var n,
                                o,
                                r,
                                s,
                                a,
                                l,
                                c,
                                d = C[e + " "];
                            if (d) return t ? 0 : d.slice(0);
                            for (a = e, l = [], c = i.preFilter; a;) {
                                for (s in ((n && !(o = F.exec(a))) ||
                                        (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
                                        (n = !1),
                                        (o = B.exec(a)) &&
                                        ((n = o.shift()),
                                            r.push({ value: n, type: o[0].replace(W, " ") }),
                                            (a = a.slice(n.length))),
                                        i.filter))
                                    !(o = V[s].exec(a)) ||
                                    (c[s] && !(o = c[s](o))) ||
                                    ((n = o.shift()),
                                        r.push({ value: n, type: s, matches: o }),
                                        (a = a.slice(n.length)));
                                if (!n) break;
                            }
                            return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
                        }),
                        (a = ae.compile = function(e, t) {
                            var n,
                                o = [],
                                r = [],
                                a = $[e + " "];
                            if (!a) {
                                for (t || (t = s(e)), n = t.length; n--;)
                                    (a = Se(t[n]))[b] ? o.push(a) : r.push(a);
                                (a = $(
                                    e,
                                    (function(e, t) {
                                        var n = t.length > 0,
                                            o = e.length > 0,
                                            r = function(r, s, a, l, d) {
                                                var u,
                                                    h,
                                                    g,
                                                    y = 0,
                                                    m = "0",
                                                    w = r && [],
                                                    b = [],
                                                    x = c,
                                                    T = r || (o && i.find.TAG("*", d)),
                                                    S = (k += null == x ? 1 : Math.random() || 0.1),
                                                    C = T.length;
                                                for (
                                                    d && (c = s == f || s || d); m !== C && null != (u = T[m]); m++
                                                ) {
                                                    if (o && u) {
                                                        for (
                                                            h = 0,
                                                            s || u.ownerDocument == f || (p(u), (a = !v));
                                                            (g = e[h++]);

                                                        )
                                                            if (g(u, s || f, a)) {
                                                                l.push(u);
                                                                break;
                                                            }
                                                        d && (k = S);
                                                    }
                                                    n && ((u = !g && u) && y--, r && w.push(u));
                                                }
                                                if (((y += m), n && m !== y)) {
                                                    for (h = 0;
                                                        (g = t[h++]);) g(w, b, s, a);
                                                    if (r) {
                                                        if (y > 0)
                                                            for (; m--;) w[m] || b[m] || (b[m] = O.call(l));
                                                        b = ke(b);
                                                    }
                                                    H.apply(l, b),
                                                        d &&
                                                        !r &&
                                                        b.length > 0 &&
                                                        y + t.length > 1 &&
                                                        ae.uniqueSort(l);
                                                }
                                                return d && ((k = S), (c = x)), w;
                                            };
                                        return n ? ce(r) : r;
                                    })(r, o)
                                )).selector = e;
                            }
                            return a;
                        }),
                        (l = ae.select = function(e, t, n, o) {
                            var r,
                                l,
                                c,
                                d,
                                u,
                                p = "function" == typeof e && e,
                                f = !o && s((e = p.selector || e));
                            if (((n = n || []), 1 === f.length)) {
                                if (
                                    (l = f[0] = f[0].slice(0)).length > 2 &&
                                    "ID" === (c = l[0]).type &&
                                    9 === t.nodeType &&
                                    v &&
                                    i.relative[l[1].type]
                                ) {
                                    if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
                                        return n;
                                    p && (t = t.parentNode),
                                        (e = e.slice(l.shift().value.length));
                                }
                                for (
                                    r = V.needsContext.test(e) ? 0 : l.length; r-- && ((c = l[r]), !i.relative[(d = c.type)]);

                                )
                                    if (
                                        (u = i.find[d]) &&
                                        (o = u(
                                            c.matches[0].replace(te, ne),
                                            (ee.test(l[0].type) && ye(t.parentNode)) || t
                                        ))
                                    ) {
                                        if ((l.splice(r, 1), !(e = o.length && we(l))))
                                            return H.apply(n, o), n;
                                        break;
                                    }
                            }
                            return (
                                (p || a(e, f))(
                                    o,
                                    t, !v,
                                    n, !t || (ee.test(e) && ye(t.parentNode)) || t
                                ),
                                n
                            );
                        }),
                        (n.sortStable = b.split("").sort(E).join("") === b),
                        (n.detectDuplicates = !!u),
                        p(),
                        (n.sortDetached = de(function(e) {
                            return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
                        })),
                        de(function(e) {
                            return (
                                (e.innerHTML = "<a href='#'></a>"),
                                "#" === e.firstChild.getAttribute("href")
                            );
                        }) ||
                        ue("type|href|height|width", function(e, t, n) {
                            if (!n)
                                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                        }),
                        (n.attributes &&
                            de(function(e) {
                                return (
                                    (e.innerHTML = "<input/>"),
                                    e.firstChild.setAttribute("value", ""),
                                    "" === e.firstChild.getAttribute("value")
                                );
                            })) ||
                        ue("value", function(e, t, n) {
                            if (!n && "input" === e.nodeName.toLowerCase())
                                return e.defaultValue;
                        }),
                        de(function(e) {
                            return null == e.getAttribute("disabled");
                        }) ||
                        ue(q, function(e, t, n) {
                            var i;
                            if (!n)
                                return !0 === e[t] ?
                                    t.toLowerCase() :
                                    (i = e.getAttributeNode(t)) && i.specified ?
                                    i.value :
                                    null;
                        }),
                        ae
                    );
                })(n);
            (T.find = C),
            (T.expr = C.selectors),
            (T.expr[":"] = T.expr.pseudos),
            (T.uniqueSort = T.unique = C.uniqueSort),
            (T.text = C.getText),
            (T.isXMLDoc = C.isXML),
            (T.contains = C.contains),
            (T.escapeSelector = C.escape);
            var $ = function(e, t, n) {
                    for (var i = [], o = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (o && T(e).is(n)) break;
                            i.push(e);
                        }
                    return i;
                },
                A = function(e, t) {
                    for (var n = []; e; e = e.nextSibling)
                        1 === e.nodeType && e !== t && n.push(e);
                    return n;
                },
                E = T.expr.match.needsContext;

            function j(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }
            var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function O(e, t, n) {
                return y(t) ?
                    T.grep(e, function(e, i) {
                        return !!t.call(e, i, e) !== n;
                    }) :
                    t.nodeType ?
                    T.grep(e, function(e) {
                        return (e === t) !== n;
                    }) :
                    "string" != typeof t ?
                    T.grep(e, function(e) {
                        return d.call(t, e) > -1 !== n;
                    }) :
                    T.filter(t, e, n);
            }
            (T.filter = function(e, t, n) {
                var i = t[0];
                return (
                    n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === i.nodeType ?
                    T.find.matchesSelector(i, e) ? [i] : [] :
                    T.find.matches(
                        e,
                        T.grep(t, function(e) {
                            return 1 === e.nodeType;
                        })
                    )
                );
            }),
            T.fn.extend({
                find: function(e) {
                    var t,
                        n,
                        i = this.length,
                        o = this;
                    if ("string" != typeof e)
                        return this.pushStack(
                            T(e).filter(function() {
                                for (t = 0; t < i; t++)
                                    if (T.contains(o[t], this)) return !0;
                            })
                        );
                    for (n = this.pushStack([]), t = 0; t < i; t++) T.find(e, o[t], n);
                    return i > 1 ? T.uniqueSort(n) : n;
                },
                filter: function(e) {
                    return this.pushStack(O(this, e || [], !1));
                },
                not: function(e) {
                    return this.pushStack(O(this, e || [], !0));
                },
                is: function(e) {
                    return !!O(
                        this,
                        "string" == typeof e && E.test(e) ? T(e) : e || [], !1
                    ).length;
                },
            });
            var L,
                H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((T.fn.init = function(e, t, n) {
                var i, o;
                if (!e) return this;
                if (((n = n || L), "string" == typeof e)) {
                    if (!(i =
                            "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] :
                            H.exec(e)) ||
                        (!i[1] && t)
                    )
                        return !t || t.jquery ?
                            (t || n).find(e) :
                            this.constructor(t).find(e);
                    if (i[1]) {
                        if (
                            ((t = t instanceof T ? t[0] : t),
                                T.merge(
                                    this,
                                    T.parseHTML(
                                        i[1],
                                        t && t.nodeType ? t.ownerDocument || t : w, !0
                                    )
                                ),
                                D.test(i[1]) && T.isPlainObject(t))
                        )
                            for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this;
                    }
                    return (
                        (o = w.getElementById(i[2])) && ((this[0] = o), (this.length = 1)),
                        this
                    );
                }
                return e.nodeType ?
                    ((this[0] = e), (this.length = 1), this) :
                    y(e) ?
                    void 0 !== n.ready ?
                    n.ready(e) :
                    e(T) :
                    T.makeArray(e, this);
            }).prototype = T.fn),
            (L = T(w));
            var N = /^(?:parents|prev(?:Until|All))/,
                P = { children: !0, contents: !0, next: !0, prev: !0 };

            function q(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e;
            }
            T.fn.extend({
                    has: function(e) {
                        var t = T(e, this),
                            n = t.length;
                        return this.filter(function() {
                            for (var e = 0; e < n; e++)
                                if (T.contains(this, t[e])) return !0;
                        });
                    },
                    closest: function(e, t) {
                        var n,
                            i = 0,
                            o = this.length,
                            r = [],
                            s = "string" != typeof e && T(e);
                        if (!E.test(e))
                            for (; i < o; i++)
                                for (n = this[i]; n && n !== t; n = n.parentNode)
                                    if (
                                        n.nodeType < 11 &&
                                        (s ?
                                            s.index(n) > -1 :
                                            1 === n.nodeType && T.find.matchesSelector(n, e))
                                    ) {
                                        r.push(n);
                                        break;
                                    }
                        return this.pushStack(r.length > 1 ? T.uniqueSort(r) : r);
                    },
                    index: function(e) {
                        return e ?
                            "string" == typeof e ?
                            d.call(T(e), this[0]) :
                            d.call(this, e.jquery ? e[0] : e) :
                            this[0] && this[0].parentNode ?
                            this.first().prevAll().length :
                            -1;
                    },
                    add: function(e, t) {
                        return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
                    },
                    addBack: function(e) {
                        return this.add(
                            null == e ? this.prevObject : this.prevObject.filter(e)
                        );
                    },
                }),
                T.each({
                        parent: function(e) {
                            var t = e.parentNode;
                            return t && 11 !== t.nodeType ? t : null;
                        },
                        parents: function(e) {
                            return $(e, "parentNode");
                        },
                        parentsUntil: function(e, t, n) {
                            return $(e, "parentNode", n);
                        },
                        next: function(e) {
                            return q(e, "nextSibling");
                        },
                        prev: function(e) {
                            return q(e, "previousSibling");
                        },
                        nextAll: function(e) {
                            return $(e, "nextSibling");
                        },
                        prevAll: function(e) {
                            return $(e, "previousSibling");
                        },
                        nextUntil: function(e, t, n) {
                            return $(e, "nextSibling", n);
                        },
                        prevUntil: function(e, t, n) {
                            return $(e, "previousSibling", n);
                        },
                        siblings: function(e) {
                            return A((e.parentNode || {}).firstChild, e);
                        },
                        children: function(e) {
                            return A(e.firstChild);
                        },
                        contents: function(e) {
                            return null != e.contentDocument && s(e.contentDocument) ?
                                e.contentDocument :
                                (j(e, "template") && (e = e.content || e),
                                    T.merge([], e.childNodes));
                        },
                    },
                    function(e, t) {
                        T.fn[e] = function(n, i) {
                            var o = T.map(this, t, n);
                            return (
                                "Until" !== e.slice(-5) && (i = n),
                                i && "string" == typeof i && (o = T.filter(i, o)),
                                this.length > 1 &&
                                (P[e] || T.uniqueSort(o), N.test(e) && o.reverse()),
                                this.pushStack(o)
                            );
                        };
                    }
                );
            var M = /[^\x20\t\r\n\f]+/g;

            function _(e) {
                return e;
            }

            function I(e) {
                throw e;
            }

            function z(e, t, n, i) {
                var o;
                try {
                    e && y((o = e.promise)) ?
                        o.call(e).done(t).fail(n) :
                        e && y((o = e.then)) ?
                        o.call(e, t, n) :
                        t.apply(void 0, [e].slice(i));
                } catch (e) {
                    n.apply(void 0, [e]);
                }
            }
            (T.Callbacks = function(e) {
                e =
                    "string" == typeof e ?
                    (function(e) {
                        var t = {};
                        return (
                            T.each(e.match(M) || [], function(e, n) {
                                t[n] = !0;
                            }),
                            t
                        );
                    })(e) :
                    T.extend({}, e);
                var t,
                    n,
                    i,
                    o,
                    r = [],
                    s = [],
                    a = -1,
                    l = function() {
                        for (o = o || e.once, i = t = !0; s.length; a = -1)
                            for (n = s.shift(); ++a < r.length;)
                                !1 === r[a].apply(n[0], n[1]) &&
                                e.stopOnFalse &&
                                ((a = r.length), (n = !1));
                        e.memory || (n = !1), (t = !1), o && (r = n ? [] : "");
                    },
                    c = {
                        add: function() {
                            return (
                                r &&
                                (n && !t && ((a = r.length - 1), s.push(n)),
                                    (function t(n) {
                                        T.each(n, function(n, i) {
                                            y(i) ?
                                                (e.unique && c.has(i)) || r.push(i) :
                                                i && i.length && "string" !== k(i) && t(i);
                                        });
                                    })(arguments),
                                    n && !t && l()),
                                this
                            );
                        },
                        remove: function() {
                            return (
                                T.each(arguments, function(e, t) {
                                    for (var n;
                                        (n = T.inArray(t, r, n)) > -1;)
                                        r.splice(n, 1), n <= a && a--;
                                }),
                                this
                            );
                        },
                        has: function(e) {
                            return e ? T.inArray(e, r) > -1 : r.length > 0;
                        },
                        empty: function() {
                            return r && (r = []), this;
                        },
                        disable: function() {
                            return (o = s = []), (r = n = ""), this;
                        },
                        disabled: function() {
                            return !r;
                        },
                        lock: function() {
                            return (o = s = []), n || t || (r = n = ""), this;
                        },
                        locked: function() {
                            return !!o;
                        },
                        fireWith: function(e, n) {
                            return (
                                o ||
                                ((n = [e, (n = n || []).slice ? n.slice() : n]),
                                    s.push(n),
                                    t || l()),
                                this
                            );
                        },
                        fire: function() {
                            return c.fireWith(this, arguments), this;
                        },
                        fired: function() {
                            return !!i;
                        },
                    };
                return c;
            }),
            T.extend({
                Deferred: function(e) {
                    var t = [
                            [
                                "notify",
                                "progress",
                                T.Callbacks("memory"),
                                T.Callbacks("memory"),
                                2,
                            ],
                            [
                                "resolve",
                                "done",
                                T.Callbacks("once memory"),
                                T.Callbacks("once memory"),
                                0,
                                "resolved",
                            ],
                            [
                                "reject",
                                "fail",
                                T.Callbacks("once memory"),
                                T.Callbacks("once memory"),
                                1,
                                "rejected",
                            ],
                        ],
                        i = "pending",
                        o = {
                            state: function() {
                                return i;
                            },
                            always: function() {
                                return r.done(arguments).fail(arguments), this;
                            },
                            catch: function(e) {
                                return o.then(null, e);
                            },
                            pipe: function() {
                                var e = arguments;
                                return T.Deferred(function(n) {
                                    T.each(t, function(t, i) {
                                            var o = y(e[i[4]]) && e[i[4]];
                                            r[i[1]](function() {
                                                var e = o && o.apply(this, arguments);
                                                e && y(e.promise) ?
                                                    e
                                                    .promise()
                                                    .progress(n.notify)
                                                    .done(n.resolve)
                                                    .fail(n.reject) :
                                                    n[i[0] + "With"](this, o ? [e] : arguments);
                                            });
                                        }),
                                        (e = null);
                                }).promise();
                            },
                            then: function(e, i, o) {
                                var r = 0;

                                function s(e, t, i, o) {
                                    return function() {
                                        var a = this,
                                            l = arguments,
                                            c = function() {
                                                var n, c;
                                                if (!(e < r)) {
                                                    if ((n = i.apply(a, l)) === t.promise())
                                                        throw new TypeError("Thenable self-resolution");
                                                    (c =
                                                        n &&
                                                        ("object" == typeof n ||
                                                            "function" == typeof n) &&
                                                        n.then),
                                                    y(c) ?
                                                        o ?
                                                        c.call(n, s(r, t, _, o), s(r, t, I, o)) :
                                                        (r++,
                                                            c.call(
                                                                n,
                                                                s(r, t, _, o),
                                                                s(r, t, I, o),
                                                                s(r, t, _, t.notifyWith)
                                                            )) :
                                                        (i !== _ && ((a = void 0), (l = [n])),
                                                            (o || t.resolveWith)(a, l));
                                                }
                                            },
                                            d = o ?
                                            c :
                                            function() {
                                                try {
                                                    c();
                                                } catch (n) {
                                                    T.Deferred.exceptionHook &&
                                                        T.Deferred.exceptionHook(n, d.stackTrace),
                                                        e + 1 >= r &&
                                                        (i !== I && ((a = void 0), (l = [n])),
                                                            t.rejectWith(a, l));
                                                }
                                            };
                                        e
                                            ?
                                            d() :
                                            (T.Deferred.getStackHook &&
                                                (d.stackTrace = T.Deferred.getStackHook()),
                                                n.setTimeout(d));
                                    };
                                }
                                return T.Deferred(function(n) {
                                    t[0][3].add(s(0, n, y(o) ? o : _, n.notifyWith)),
                                        t[1][3].add(s(0, n, y(e) ? e : _)),
                                        t[2][3].add(s(0, n, y(i) ? i : I));
                                }).promise();
                            },
                            promise: function(e) {
                                return null != e ? T.extend(e, o) : o;
                            },
                        },
                        r = {};
                    return (
                        T.each(t, function(e, n) {
                            var s = n[2],
                                a = n[5];
                            (o[n[1]] = s.add),
                            a &&
                                s.add(
                                    function() {
                                        i = a;
                                    },
                                    t[3 - e][2].disable,
                                    t[3 - e][3].disable,
                                    t[0][2].lock,
                                    t[0][3].lock
                                ),
                                s.add(n[3].fire),
                                (r[n[0]] = function() {
                                    return (
                                        r[n[0] + "With"](this === r ? void 0 : this, arguments),
                                        this
                                    );
                                }),
                                (r[n[0] + "With"] = s.fireWith);
                        }),
                        o.promise(r),
                        e && e.call(r, r),
                        r
                    );
                },
                when: function(e) {
                    var t = arguments.length,
                        n = t,
                        i = Array(n),
                        o = a.call(arguments),
                        r = T.Deferred(),
                        s = function(e) {
                            return function(n) {
                                (i[e] = this),
                                (o[e] = arguments.length > 1 ? a.call(arguments) : n),
                                --t || r.resolveWith(i, o);
                            };
                        };
                    if (
                        t <= 1 &&
                        (z(e, r.done(s(n)).resolve, r.reject, !t),
                            "pending" === r.state() || y(o[n] && o[n].then))
                    )
                        return r.then();
                    for (; n--;) z(o[n], s(n), r.reject);
                    return r.promise();
                },
            });
            var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (T.Deferred.exceptionHook = function(e, t) {
                n.console &&
                    n.console.warn &&
                    e &&
                    R.test(e.name) &&
                    n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
            }),
            (T.readyException = function(e) {
                n.setTimeout(function() {
                    throw e;
                });
            });
            var W = T.Deferred();

            function F() {
                w.removeEventListener("DOMContentLoaded", F),
                    n.removeEventListener("load", F),
                    T.ready();
            }
            (T.fn.ready = function(e) {
                return (
                    W.then(e).catch(function(e) {
                        T.readyException(e);
                    }),
                    this
                );
            }),
            T.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                        (!0 === e ? --T.readyWait : T.isReady) ||
                        ((T.isReady = !0),
                            (!0 !== e && --T.readyWait > 0) || W.resolveWith(w, [T]));
                    },
                }),
                (T.ready.then = W.then),
                "complete" === w.readyState ||
                ("loading" !== w.readyState && !w.documentElement.doScroll) ?
                n.setTimeout(T.ready) :
                (w.addEventListener("DOMContentLoaded", F),
                    n.addEventListener("load", F));
            var B = function(e, t, n, i, o, r, s) {
                    var a = 0,
                        l = e.length,
                        c = null == n;
                    if ("object" === k(n))
                        for (a in ((o = !0), n)) B(e, t, a, n[a], !0, r, s);
                    else if (
                        void 0 !== i &&
                        ((o = !0),
                            y(i) || (s = !0),
                            c &&
                            (s ?
                                (t.call(e, i), (t = null)) :
                                ((c = t),
                                    (t = function(e, t, n) {
                                        return c.call(T(e), n);
                                    }))),
                            t)
                    )
                        for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                    return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
                },
                U = /^-ms-/,
                X = /-([a-z])/g;

            function Y(e, t) {
                return t.toUpperCase();
            }

            function V(e) {
                return e.replace(U, "ms-").replace(X, Y);
            }
            var G = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            };

            function Q() {
                this.expando = T.expando + Q.uid++;
            }
            (Q.uid = 1),
            (Q.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return (
                        t ||
                        ((t = {}),
                            G(e) &&
                            (e.nodeType ?
                                (e[this.expando] = t) :
                                Object.defineProperty(e, this.expando, {
                                    value: t,
                                    configurable: !0,
                                }))),
                        t
                    );
                },
                set: function(e, t, n) {
                    var i,
                        o = this.cache(e);
                    if ("string" == typeof t) o[V(t)] = n;
                    else
                        for (i in t) o[V(i)] = t[i];
                    return o;
                },
                get: function(e, t) {
                    return void 0 === t ?
                        this.cache(e) :
                        e[this.expando] && e[this.expando][V(t)];
                },
                access: function(e, t, n) {
                    return void 0 === t || (t && "string" == typeof t && void 0 === n) ?
                        this.get(e, t) :
                        (this.set(e, t, n), void 0 !== n ? n : t);
                },
                remove: function(e, t) {
                    var n,
                        i = e[this.expando];
                    if (void 0 !== i) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ?
                                t.map(V) :
                                (t = V(t)) in i ? [t] :
                                t.match(M) || []).length;
                            for (; n--;) delete i[t[n]];
                        }
                        (void 0 === t || T.isEmptyObject(i)) &&
                        (e.nodeType ?
                            (e[this.expando] = void 0) :
                            delete e[this.expando]);
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !T.isEmptyObject(t);
                },
            });
            var J = new Q(),
                K = new Q(),
                Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                ee = /[A-Z]/g;

            function te(e, t, n) {
                var i;
                if (void 0 === n && 1 === e.nodeType)
                    if (
                        ((i = "data-" + t.replace(ee, "-$&").toLowerCase()),
                            "string" == typeof(n = e.getAttribute(i)))
                    ) {
                        try {
                            n = (function(e) {
                                return (
                                    "true" === e ||
                                    ("false" !== e &&
                                        ("null" === e ?
                                            null :
                                            e === +e + "" ?
                                            +e :
                                            Z.test(e) ?
                                            JSON.parse(e) :
                                            e))
                                );
                            })(n);
                        } catch (e) {}
                        K.set(e, t, n);
                    } else n = void 0;
                return n;
            }
            T.extend({
                    hasData: function(e) {
                        return K.hasData(e) || J.hasData(e);
                    },
                    data: function(e, t, n) {
                        return K.access(e, t, n);
                    },
                    removeData: function(e, t) {
                        K.remove(e, t);
                    },
                    _data: function(e, t, n) {
                        return J.access(e, t, n);
                    },
                    _removeData: function(e, t) {
                        J.remove(e, t);
                    },
                }),
                T.fn.extend({
                    data: function(e, t) {
                        var n,
                            i,
                            o,
                            r = this[0],
                            s = r && r.attributes;
                        if (void 0 === e) {
                            if (
                                this.length &&
                                ((o = K.get(r)), 1 === r.nodeType && !J.get(r, "hasDataAttrs"))
                            ) {
                                for (n = s.length; n--;)
                                    s[n] &&
                                    0 === (i = s[n].name).indexOf("data-") &&
                                    ((i = V(i.slice(5))), te(r, i, o[i]));
                                J.set(r, "hasDataAttrs", !0);
                            }
                            return o;
                        }
                        return "object" == typeof e ?
                            this.each(function() {
                                K.set(this, e);
                            }) :
                            B(
                                this,
                                function(t) {
                                    var n;
                                    if (r && void 0 === t)
                                        return void 0 !== (n = K.get(r, e)) ||
                                            void 0 !== (n = te(r, e)) ?
                                            n :
                                            void 0;
                                    this.each(function() {
                                        K.set(this, e, t);
                                    });
                                },
                                null,
                                t,
                                arguments.length > 1,
                                null, !0
                            );
                    },
                    removeData: function(e) {
                        return this.each(function() {
                            K.remove(this, e);
                        });
                    },
                }),
                T.extend({
                    queue: function(e, t, n) {
                        var i;
                        if (e)
                            return (
                                (t = (t || "fx") + "queue"),
                                (i = J.get(e, t)),
                                n &&
                                (!i || Array.isArray(n) ?
                                    (i = J.access(e, t, T.makeArray(n))) :
                                    i.push(n)),
                                i || []
                            );
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = T.queue(e, t),
                            i = n.length,
                            o = n.shift(),
                            r = T._queueHooks(e, t);
                        "inprogress" === o && ((o = n.shift()), i--),
                            o &&
                            ("fx" === t && n.unshift("inprogress"),
                                delete r.stop,
                                o.call(
                                    e,
                                    function() {
                                        T.dequeue(e, t);
                                    },
                                    r
                                )), !i && r && r.empty.fire();
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return (
                            J.get(e, n) ||
                            J.access(e, n, {
                                empty: T.Callbacks("once memory").add(function() {
                                    J.remove(e, [t + "queue", n]);
                                }),
                            })
                        );
                    },
                }),
                T.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return (
                            "string" != typeof e && ((t = e), (e = "fx"), n--),
                            arguments.length < n ?
                            T.queue(this[0], e) :
                            void 0 === t ?
                            this :
                            this.each(function() {
                                var n = T.queue(this, e, t);
                                T._queueHooks(this, e),
                                    "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e);
                            })
                        );
                    },
                    dequeue: function(e) {
                        return this.each(function() {
                            T.dequeue(this, e);
                        });
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", []);
                    },
                    promise: function(e, t) {
                        var n,
                            i = 1,
                            o = T.Deferred(),
                            r = this,
                            s = this.length,
                            a = function() {
                                --i || o.resolveWith(r, [r]);
                            };
                        for (
                            "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--;

                        )
                            (n = J.get(r[s], e + "queueHooks")) &&
                            n.empty &&
                            (i++, n.empty.add(a));
                        return a(), o.promise(t);
                    },
                });
            var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ie = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
                oe = ["Top", "Right", "Bottom", "Left"],
                re = w.documentElement,
                se = function(e) {
                    return T.contains(e.ownerDocument, e);
                },
                ae = { composed: !0 };
            re.getRootNode &&
                (se = function(e) {
                    return (
                        T.contains(e.ownerDocument, e) ||
                        e.getRootNode(ae) === e.ownerDocument
                    );
                });
            var le = function(e, t) {
                return (
                    "none" === (e = t || e).style.display ||
                    ("" === e.style.display && se(e) && "none" === T.css(e, "display"))
                );
            };

            function ce(e, t, n, i) {
                var o,
                    r,
                    s = 20,
                    a = i ?

                    function() {
                        return i.cur();
                    } :
                    function() {
                        return T.css(e, t, "");
                    },
                    l = a(),
                    c = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
                    d =
                    e.nodeType &&
                    (T.cssNumber[t] || ("px" !== c && +l)) &&
                    ie.exec(T.css(e, t));
                if (d && d[3] !== c) {
                    for (l /= 2, c = c || d[3], d = +l || 1; s--;)
                        T.style(e, t, d + c),
                        (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0),
                        (d /= r);
                    (d *= 2), T.style(e, t, d + c), (n = n || []);
                }
                return (
                    n &&
                    ((d = +d || +l || 0),
                        (o = n[1] ? d + (n[1] + 1) * n[2] : +n[2]),
                        i && ((i.unit = c), (i.start = d), (i.end = o))),
                    o
                );
            }
            var de = {};

            function ue(e) {
                var t,
                    n = e.ownerDocument,
                    i = e.nodeName,
                    o = de[i];
                return (
                    o ||
                    ((t = n.body.appendChild(n.createElement(i))),
                        (o = T.css(t, "display")),
                        t.parentNode.removeChild(t),
                        "none" === o && (o = "block"),
                        (de[i] = o),
                        o)
                );
            }

            function pe(e, t) {
                for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
                    (i = e[r]).style &&
                    ((n = i.style.display),
                        t ?
                        ("none" === n &&
                            ((o[r] = J.get(i, "display") || null),
                                o[r] || (i.style.display = "")),
                            "" === i.style.display && le(i) && (o[r] = ue(i))) :
                        "none" !== n && ((o[r] = "none"), J.set(i, "display", n)));
                for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
                return e;
            }
            T.fn.extend({
                show: function() {
                    return pe(this, !0);
                },
                hide: function() {
                    return pe(this);
                },
                toggle: function(e) {
                    return "boolean" == typeof e ?
                        e ?
                        this.show() :
                        this.hide() :
                        this.each(function() {
                            le(this) ? T(this).show() : T(this).hide();
                        });
                },
            });
            var fe,
                he,
                ve = /^(?:checkbox|radio)$/i,
                ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                ye = /^$|^module$|\/(?:java|ecma)script/i;
            (fe = w.createDocumentFragment().appendChild(w.createElement("div"))),
            (he = w.createElement("input")).setAttribute("type", "radio"),
                he.setAttribute("checked", "checked"),
                he.setAttribute("name", "t"),
                fe.appendChild(he),
                (g.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked),
                (fe.innerHTML = "<textarea>x</textarea>"),
                (g.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue),
                (fe.innerHTML = "<option></option>"),
                (g.option = !!fe.lastChild);
            var me = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""],
            };

            function we(e, t) {
                var n;
                return (
                    (n =
                        void 0 !== e.getElementsByTagName ?
                        e.getElementsByTagName(t || "*") :
                        void 0 !== e.querySelectorAll ?
                        e.querySelectorAll(t || "*") : []),
                    void 0 === t || (t && j(e, t)) ? T.merge([e], n) : n
                );
            }

            function be(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
            }
            (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead),
            (me.th = me.td),
            g.option ||
                (me.optgroup = me.option = [
                    1,
                    "<select multiple='multiple'>",
                    "</select>",
                ]);
            var xe = /<|&#?\w+;/;

            function ke(e, t, n, i, o) {
                for (
                    var r,
                        s,
                        a,
                        l,
                        c,
                        d,
                        u = t.createDocumentFragment(),
                        p = [],
                        f = 0,
                        h = e.length; f < h; f++
                )
                    if ((r = e[f]) || 0 === r)
                        if ("object" === k(r)) T.merge(p, r.nodeType ? [r] : r);
                        else if (xe.test(r)) {
                    for (
                        s = s || u.appendChild(t.createElement("div")),
                        a = (ge.exec(r) || ["", ""])[1].toLowerCase(),
                        l = me[a] || me._default,
                        s.innerHTML = l[1] + T.htmlPrefilter(r) + l[2],
                        d = l[0]; d--;

                    )
                        s = s.lastChild;
                    T.merge(p, s.childNodes), ((s = u.firstChild).textContent = "");
                } else p.push(t.createTextNode(r));
                for (u.textContent = "", f = 0;
                    (r = p[f++]);)
                    if (i && T.inArray(r, i) > -1) o && o.push(r);
                    else if (
                    ((c = se(r)), (s = we(u.appendChild(r), "script")), c && be(s), n)
                )
                    for (d = 0;
                        (r = s[d++]);) ye.test(r.type || "") && n.push(r);
                return u;
            }
            var Te = /^key/,
                Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Ce = /^([^.]*)(?:\.(.+)|)/;

            function $e() {
                return !0;
            }

            function Ae() {
                return !1;
            }

            function Ee(e, t) {
                return (
                    (e ===
                        (function() {
                            try {
                                return w.activeElement;
                            } catch (e) {}
                        })()) ==
                    ("focus" === t)
                );
            }

            function je(e, t, n, i, o, r) {
                var s, a;
                if ("object" == typeof t) {
                    for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
                        je(e, a, n, i, t[a], r);
                    return e;
                }
                if (
                    (null == i && null == o ?
                        ((o = n), (i = n = void 0)) :
                        null == o &&
                        ("string" == typeof n ?
                            ((o = i), (i = void 0)) :
                            ((o = i), (i = n), (n = void 0))), !1 === o)
                )
                    o = Ae;
                else if (!o) return e;
                return (
                    1 === r &&
                    ((s = o),
                        ((o = function(e) {
                            return T().off(e), s.apply(this, arguments);
                        }).guid = s.guid || (s.guid = T.guid++))),
                    e.each(function() {
                        T.event.add(this, t, o, i, n);
                    })
                );
            }

            function De(e, t, n) {
                n
                    ?
                    (J.set(e, t, !1),
                        T.event.add(e, t, {
                            namespace: !1,
                            handler: function(e) {
                                var i,
                                    o,
                                    r = J.get(this, t);
                                if (1 & e.isTrigger && this[t]) {
                                    if (r.length)
                                        (T.event.special[t] || {}).delegateType &&
                                        e.stopPropagation();
                                    else if (
                                        ((r = a.call(arguments)),
                                            J.set(this, t, r),
                                            (i = n(this, t)),
                                            this[t](),
                                            r !== (o = J.get(this, t)) || i ?
                                            J.set(this, t, !1) :
                                            (o = {}),
                                            r !== o)
                                    )
                                        return (
                                            e.stopImmediatePropagation(), e.preventDefault(), o.value
                                        );
                                } else
                                    r.length &&
                                    (J.set(this, t, {
                                            value: T.event.trigger(
                                                T.extend(r[0], T.Event.prototype),
                                                r.slice(1),
                                                this
                                            ),
                                        }),
                                        e.stopImmediatePropagation());
                            },
                        })) :
                    void 0 === J.get(e, t) && T.event.add(e, t, $e);
            }
            (T.event = {
                global: {},
                add: function(e, t, n, i, o) {
                    var r,
                        s,
                        a,
                        l,
                        c,
                        d,
                        u,
                        p,
                        f,
                        h,
                        v,
                        g = J.get(e);
                    if (G(e))
                        for (
                            n.handler && ((n = (r = n).handler), (o = r.selector)),
                            o && T.find.matchesSelector(re, o),
                            n.guid || (n.guid = T.guid++),
                            (l = g.events) || (l = g.events = Object.create(null)),
                            (s = g.handle) ||
                            (s = g.handle = function(t) {
                                return void 0 !== T && T.event.triggered !== t.type ?
                                    T.event.dispatch.apply(e, arguments) :
                                    void 0;
                            }),
                            c = (t = (t || "").match(M) || [""]).length; c--;

                        )
                            (f = v = (a = Ce.exec(t[c]) || [])[1]),
                            (h = (a[2] || "").split(".").sort()),
                            f &&
                            ((u = T.event.special[f] || {}),
                                (f = (o ? u.delegateType : u.bindType) || f),
                                (u = T.event.special[f] || {}),
                                (d = T.extend({
                                        type: f,
                                        origType: v,
                                        data: i,
                                        handler: n,
                                        guid: n.guid,
                                        selector: o,
                                        needsContext: o && T.expr.match.needsContext.test(o),
                                        namespace: h.join("."),
                                    },
                                    r
                                )),
                                (p = l[f]) ||
                                (((p = l[f] = []).delegateCount = 0),
                                    (u.setup && !1 !== u.setup.call(e, i, h, s)) ||
                                    (e.addEventListener && e.addEventListener(f, s))),
                                u.add &&
                                (u.add.call(e, d),
                                    d.handler.guid || (d.handler.guid = n.guid)),
                                o ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                                (T.event.global[f] = !0));
                },
                remove: function(e, t, n, i, o) {
                    var r,
                        s,
                        a,
                        l,
                        c,
                        d,
                        u,
                        p,
                        f,
                        h,
                        v,
                        g = J.hasData(e) && J.get(e);
                    if (g && (l = g.events)) {
                        for (c = (t = (t || "").match(M) || [""]).length; c--;)
                            if (
                                ((f = v = (a = Ce.exec(t[c]) || [])[1]),
                                    (h = (a[2] || "").split(".").sort()),
                                    f)
                            ) {
                                for (
                                    u = T.event.special[f] || {},
                                    p = l[(f = (i ? u.delegateType : u.bindType) || f)] || [],
                                    a =
                                    a[2] &&
                                    new RegExp(
                                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                                    ),
                                    s = r = p.length; r--;

                                )
                                    (d = p[r]),
                                    (!o && v !== d.origType) ||
                                    (n && n.guid !== d.guid) ||
                                    (a && !a.test(d.namespace)) ||
                                    (i && i !== d.selector && ("**" !== i || !d.selector)) ||
                                    (p.splice(r, 1),
                                        d.selector && p.delegateCount--,
                                        u.remove && u.remove.call(e, d));
                                s &&
                                    !p.length &&
                                    ((u.teardown && !1 !== u.teardown.call(e, h, g.handle)) ||
                                        T.removeEvent(e, f, g.handle),
                                        delete l[f]);
                            } else
                                for (f in l) T.event.remove(e, f + t[c], n, i, !0);
                        T.isEmptyObject(l) && J.remove(e, "handle events");
                    }
                },
                dispatch: function(e) {
                    var t,
                        n,
                        i,
                        o,
                        r,
                        s,
                        a = new Array(arguments.length),
                        l = T.event.fix(e),
                        c = (J.get(this, "events") || Object.create(null))[l.type] || [],
                        d = T.event.special[l.type] || {};
                    for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                    if (
                        ((l.delegateTarget = this), !d.preDispatch || !1 !== d.preDispatch.call(this, l))
                    ) {
                        for (
                            s = T.event.handlers.call(this, l, c), t = 0;
                            (o = s[t++]) && !l.isPropagationStopped();

                        )
                            for (
                                l.currentTarget = o.elem, n = 0;
                                (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();

                            )
                                (l.rnamespace &&
                                    !1 !== r.namespace &&
                                    !l.rnamespace.test(r.namespace)) ||
                                ((l.handleObj = r),
                                    (l.data = r.data),
                                    void 0 !==
                                    (i = (
                                        (T.event.special[r.origType] || {}).handle || r.handler
                                    ).apply(o.elem, a)) &&
                                    !1 === (l.result = i) &&
                                    (l.preventDefault(), l.stopPropagation()));
                        return d.postDispatch && d.postDispatch.call(this, l), l.result;
                    }
                },
                handlers: function(e, t) {
                    var n,
                        i,
                        o,
                        r,
                        s,
                        a = [],
                        l = t.delegateCount,
                        c = e.target;
                    if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                        for (; c !== this; c = c.parentNode || this)
                            if (
                                1 === c.nodeType &&
                                ("click" !== e.type || !0 !== c.disabled)
                            ) {
                                for (r = [], s = {}, n = 0; n < l; n++)
                                    void 0 === s[(o = (i = t[n]).selector + " ")] &&
                                    (s[o] = i.needsContext ?
                                        T(o, this).index(c) > -1 :
                                        T.find(o, this, null, [c]).length),
                                    s[o] && r.push(i);
                                r.length && a.push({ elem: c, handlers: r });
                            }
                    return (
                        (c = this),
                        l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
                        a
                    );
                },
                addProp: function(e, t) {
                    Object.defineProperty(T.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: y(t) ?

                            function() {
                                if (this.originalEvent) return t(this.originalEvent);
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[e];
                            },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t,
                            });
                        },
                    });
                },
                fix: function(e) {
                    return e[T.expando] ? e : new T.Event(e);
                },
                special: {
                    load: { noBubble: !0 },
                    click: {
                        setup: function(e) {
                            var t = this || e;
                            return (
                                ve.test(t.type) &&
                                t.click &&
                                j(t, "input") &&
                                De(t, "click", $e), !1
                            );
                        },
                        trigger: function(e) {
                            var t = this || e;
                            return (
                                ve.test(t.type) && t.click && j(t, "input") && De(t, "click"), !0
                            );
                        },
                        _default: function(e) {
                            var t = e.target;
                            return (
                                (ve.test(t.type) &&
                                    t.click &&
                                    j(t, "input") &&
                                    J.get(t, "click")) ||
                                j(t, "a")
                            );
                        },
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result &&
                                e.originalEvent &&
                                (e.originalEvent.returnValue = e.result);
                        },
                    },
                },
            }),
            (T.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n);
            }),
            (T.Event = function(e, t) {
                if (!(this instanceof T.Event)) return new T.Event(e, t);
                e && e.type ?
                    ((this.originalEvent = e),
                        (this.type = e.type),
                        (this.isDefaultPrevented =
                            e.defaultPrevented ||
                            (void 0 === e.defaultPrevented && !1 === e.returnValue) ?
                            $e :
                            Ae),
                        (this.target =
                            e.target && 3 === e.target.nodeType ?
                            e.target.parentNode :
                            e.target),
                        (this.currentTarget = e.currentTarget),
                        (this.relatedTarget = e.relatedTarget)) :
                    (this.type = e),
                    t && T.extend(this, t),
                    (this.timeStamp = (e && e.timeStamp) || Date.now()),
                    (this[T.expando] = !0);
            }),
            (T.Event.prototype = {
                constructor: T.Event,
                isDefaultPrevented: Ae,
                isPropagationStopped: Ae,
                isImmediatePropagationStopped: Ae,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    (this.isDefaultPrevented = $e),
                    e && !this.isSimulated && e.preventDefault();
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    (this.isPropagationStopped = $e),
                    e && !this.isSimulated && e.stopPropagation();
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    (this.isImmediatePropagationStopped = $e),
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                        this.stopPropagation();
                },
            }),
            T.each({
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: function(e) {
                            var t = e.button;
                            return null == e.which && Te.test(e.type) ?
                                null != e.charCode ?
                                e.charCode :
                                e.keyCode :
                                !e.which && void 0 !== t && Se.test(e.type) ?
                                1 & t ?
                                1 :
                                2 & t ?
                                3 :
                                4 & t ?
                                2 :
                                0 :
                                e.which;
                        },
                    },
                    T.event.addProp
                ),
                T.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
                    T.event.special[e] = {
                        setup: function() {
                            return De(this, e, Ee), !1;
                        },
                        trigger: function() {
                            return De(this, e), !0;
                        },
                        delegateType: t,
                    };
                }),
                T.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout",
                    },
                    function(e, t) {
                        T.event.special[e] = {
                            delegateType: t,
                            bindType: t,
                            handle: function(e) {
                                var n,
                                    i = this,
                                    o = e.relatedTarget,
                                    r = e.handleObj;
                                return (
                                    (o && (o === i || T.contains(i, o))) ||
                                    ((e.type = r.origType),
                                        (n = r.handler.apply(this, arguments)),
                                        (e.type = t)),
                                    n
                                );
                            },
                        };
                    }
                ),
                T.fn.extend({
                    on: function(e, t, n, i) {
                        return je(this, e, t, n, i);
                    },
                    one: function(e, t, n, i) {
                        return je(this, e, t, n, i, 1);
                    },
                    off: function(e, t, n) {
                        var i, o;
                        if (e && e.preventDefault && e.handleObj)
                            return (
                                (i = e.handleObj),
                                T(e.delegateTarget).off(
                                    i.namespace ? i.origType + "." + i.namespace : i.origType,
                                    i.selector,
                                    i.handler
                                ),
                                this
                            );
                        if ("object" == typeof e) {
                            for (o in e) this.off(o, t, e[o]);
                            return this;
                        }
                        return (
                            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)), !1 === n && (n = Ae),
                            this.each(function() {
                                T.event.remove(this, e, n, t);
                            })
                        );
                    },
                });
            var Oe = /<script|<style|<link/i,
                Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
                He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Ne(e, t) {
                return (
                    (j(e, "table") &&
                        j(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                        T(e).children("tbody")[0]) ||
                    e
                );
            }

            function Pe(e) {
                return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
            }

            function qe(e) {
                return (
                    "true/" === (e.type || "").slice(0, 5) ?
                    (e.type = e.type.slice(5)) :
                    e.removeAttribute("type"),
                    e
                );
            }

            function Me(e, t) {
                var n, i, o, r, s, a;
                if (1 === t.nodeType) {
                    if (J.hasData(e) && (a = J.get(e).events))
                        for (o in (J.remove(t, "handle events"), a))
                            for (n = 0, i = a[o].length; n < i; n++)
                                T.event.add(t, o, a[o][n]);
                    K.hasData(e) &&
                        ((r = K.access(e)), (s = T.extend({}, r)), K.set(t, s));
                }
            }

            function _e(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && ve.test(e.type) ?
                    (t.checked = e.checked) :
                    ("input" !== n && "textarea" !== n) ||
                    (t.defaultValue = e.defaultValue);
            }

            function Ie(e, t, n, i) {
                t = l(t);
                var o,
                    r,
                    s,
                    a,
                    c,
                    d,
                    u = 0,
                    p = e.length,
                    f = p - 1,
                    h = t[0],
                    v = y(h);
                if (v || (p > 1 && "string" == typeof h && !g.checkClone && Le.test(h)))
                    return e.each(function(o) {
                        var r = e.eq(o);
                        v && (t[0] = h.call(this, o, r.html())), Ie(r, t, n, i);
                    });
                if (
                    p &&
                    ((r = (o = ke(t, e[0].ownerDocument, !1, e, i)).firstChild),
                        1 === o.childNodes.length && (o = r),
                        r || i)
                ) {
                    for (a = (s = T.map(we(o, "script"), Pe)).length; u < p; u++)
                        (c = o),
                        u !== f &&
                        ((c = T.clone(c, !0, !0)), a && T.merge(s, we(c, "script"))),
                        n.call(e[u], c, u);
                    if (a)
                        for (
                            d = s[s.length - 1].ownerDocument, T.map(s, qe), u = 0; u < a; u++
                        )
                            (c = s[u]),
                            ye.test(c.type || "") &&
                            !J.access(c, "globalEval") &&
                            T.contains(d, c) &&
                            (c.src && "module" !== (c.type || "").toLowerCase() ?
                                T._evalUrl &&
                                !c.noModule &&
                                T._evalUrl(
                                    c.src, { nonce: c.nonce || c.getAttribute("nonce") },
                                    d
                                ) :
                                x(c.textContent.replace(He, ""), c, d));
                }
                return e;
            }

            function ze(e, t, n) {
                for (var i, o = t ? T.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
                    n || 1 !== i.nodeType || T.cleanData(we(i)),
                    i.parentNode &&
                    (n && se(i) && be(we(i, "script")), i.parentNode.removeChild(i));
                return e;
            }
            T.extend({
                    htmlPrefilter: function(e) {
                        return e;
                    },
                    clone: function(e, t, n) {
                        var i,
                            o,
                            r,
                            s,
                            a = e.cloneNode(!0),
                            l = se(e);
                        if (!(
                                g.noCloneChecked ||
                                (1 !== e.nodeType && 11 !== e.nodeType) ||
                                T.isXMLDoc(e)
                            ))
                            for (s = we(a), i = 0, o = (r = we(e)).length; i < o; i++)
                                _e(r[i], s[i]);
                        if (t)
                            if (n)
                                for (
                                    r = r || we(e), s = s || we(a), i = 0, o = r.length; i < o; i++
                                )
                                    Me(r[i], s[i]);
                            else Me(e, a);
                        return (
                            (s = we(a, "script")).length > 0 && be(s, !l && we(e, "script")), a
                        );
                    },
                    cleanData: function(e) {
                        for (
                            var t, n, i, o = T.event.special, r = 0; void 0 !== (n = e[r]); r++
                        )
                            if (G(n)) {
                                if ((t = n[J.expando])) {
                                    if (t.events)
                                        for (i in t.events)
                                            o[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
                                    n[J.expando] = void 0;
                                }
                                n[K.expando] && (n[K.expando] = void 0);
                            }
                    },
                }),
                T.fn.extend({
                    detach: function(e) {
                        return ze(this, e, !0);
                    },
                    remove: function(e) {
                        return ze(this, e);
                    },
                    text: function(e) {
                        return B(
                            this,
                            function(e) {
                                return void 0 === e ?
                                    T.text(this) :
                                    this.empty().each(function() {
                                        (1 !== this.nodeType &&
                                            11 !== this.nodeType &&
                                            9 !== this.nodeType) ||
                                        (this.textContent = e);
                                    });
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    append: function() {
                        return Ie(this, arguments, function(e) {
                            (1 !== this.nodeType &&
                                11 !== this.nodeType &&
                                9 !== this.nodeType) ||
                            Ne(this, e).appendChild(e);
                        });
                    },
                    prepend: function() {
                        return Ie(this, arguments, function(e) {
                            if (
                                1 === this.nodeType ||
                                11 === this.nodeType ||
                                9 === this.nodeType
                            ) {
                                var t = Ne(this, e);
                                t.insertBefore(e, t.firstChild);
                            }
                        });
                    },
                    before: function() {
                        return Ie(this, arguments, function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this);
                        });
                    },
                    after: function() {
                        return Ie(this, arguments, function(e) {
                            this.parentNode &&
                                this.parentNode.insertBefore(e, this.nextSibling);
                        });
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++)
                            1 === e.nodeType &&
                            (T.cleanData(we(e, !1)), (e.textContent = ""));
                        return this;
                    },
                    clone: function(e, t) {
                        return (
                            (e = null != e && e),
                            (t = null == t ? e : t),
                            this.map(function() {
                                return T.clone(this, e, t);
                            })
                        );
                    },
                    html: function(e) {
                        return B(
                            this,
                            function(e) {
                                var t = this[0] || {},
                                    n = 0,
                                    i = this.length;
                                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                if (
                                    "string" == typeof e &&
                                    !Oe.test(e) &&
                                    !me[(ge.exec(e) || ["", ""])[1].toLowerCase()]
                                ) {
                                    e = T.htmlPrefilter(e);
                                    try {
                                        for (; n < i; n++)
                                            1 === (t = this[n] || {}).nodeType &&
                                            (T.cleanData(we(t, !1)), (t.innerHTML = e));
                                        t = 0;
                                    } catch (e) {}
                                }
                                t && this.empty().append(e);
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    replaceWith: function() {
                        var e = [];
                        return Ie(
                            this,
                            arguments,
                            function(t) {
                                var n = this.parentNode;
                                T.inArray(this, e) < 0 &&
                                    (T.cleanData(we(this)), n && n.replaceChild(t, this));
                            },
                            e
                        );
                    },
                }),
                T.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith",
                    },
                    function(e, t) {
                        T.fn[e] = function(e) {
                            for (
                                var n, i = [], o = T(e), r = o.length - 1, s = 0; s <= r; s++
                            )
                                (n = s === r ? this : this.clone(!0)),
                                T(o[s])[t](n),
                                c.apply(i, n.get());
                            return this.pushStack(i);
                        };
                    }
                );
            var Re = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
                We = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return (t && t.opener) || (t = n), t.getComputedStyle(e);
                },
                Fe = function(e, t, n) {
                    var i,
                        o,
                        r = {};
                    for (o in t)(r[o] = e.style[o]), (e.style[o] = t[o]);
                    for (o in ((i = n.call(e)), t)) e.style[o] = r[o];
                    return i;
                },
                Be = new RegExp(oe.join("|"), "i");

            function Ue(e, t, n) {
                var i,
                    o,
                    r,
                    s,
                    a = e.style;
                return (
                    (n = n || We(e)) &&
                    ("" !== (s = n.getPropertyValue(t) || n[t]) ||
                        se(e) ||
                        (s = T.style(e, t)), !g.pixelBoxStyles() &&
                        Re.test(s) &&
                        Be.test(t) &&
                        ((i = a.width),
                            (o = a.minWidth),
                            (r = a.maxWidth),
                            (a.minWidth = a.maxWidth = a.width = s),
                            (s = n.width),
                            (a.width = i),
                            (a.minWidth = o),
                            (a.maxWidth = r))),
                    void 0 !== s ? s + "" : s
                );
            }

            function Xe(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get;
                    },
                };
            }!(function() {
                function e() {
                    if (d) {
                        (c.style.cssText =
                            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                        (d.style.cssText =
                            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                        re.appendChild(c).appendChild(d);
                        var e = n.getComputedStyle(d);
                        (i = "1%" !== e.top),
                        (l = 12 === t(e.marginLeft)),
                        (d.style.right = "60%"),
                        (s = 36 === t(e.right)),
                        (o = 36 === t(e.width)),
                        (d.style.position = "absolute"),
                        (r = 12 === t(d.offsetWidth / 3)),
                        re.removeChild(c),
                            (d = null);
                    }
                }

                function t(e) {
                    return Math.round(parseFloat(e));
                }
                var i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    c = w.createElement("div"),
                    d = w.createElement("div");
                d.style &&
                    ((d.style.backgroundClip = "content-box"),
                        (d.cloneNode(!0).style.backgroundClip = ""),
                        (g.clearCloneStyle = "content-box" === d.style.backgroundClip),
                        T.extend(g, {
                            boxSizingReliable: function() {
                                return e(), o;
                            },
                            pixelBoxStyles: function() {
                                return e(), s;
                            },
                            pixelPosition: function() {
                                return e(), i;
                            },
                            reliableMarginLeft: function() {
                                return e(), l;
                            },
                            scrollboxSize: function() {
                                return e(), r;
                            },
                            reliableTrDimensions: function() {
                                var e, t, i, o;
                                return (
                                    null == a &&
                                    ((e = w.createElement("table")),
                                        (t = w.createElement("tr")),
                                        (i = w.createElement("div")),
                                        (e.style.cssText = "position:absolute;left:-11111px"),
                                        (t.style.height = "1px"),
                                        (i.style.height = "9px"),
                                        re.appendChild(e).appendChild(t).appendChild(i),
                                        (o = n.getComputedStyle(t)),
                                        (a = parseInt(o.height) > 3),
                                        re.removeChild(e)),
                                    a
                                );
                            },
                        }));
            })();
            var Ye = ["Webkit", "Moz", "ms"],
                Ve = w.createElement("div").style,
                Ge = {};

            function Qe(e) {
                var t = T.cssProps[e] || Ge[e];
                return (
                    t ||
                    (e in Ve ?
                        e :
                        (Ge[e] =
                            (function(e) {
                                for (
                                    var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--;

                                )
                                    if ((e = Ye[n] + t) in Ve) return e;
                            })(e) || e))
                );
            }
            var Je = /^(none|table(?!-c[ea]).+)/,
                Ke = /^--/,
                Ze = { position: "absolute", visibility: "hidden", display: "block" },
                et = { letterSpacing: "0", fontWeight: "400" };

            function tt(e, t, n) {
                var i = ie.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
            }

            function nt(e, t, n, i, o, r) {
                var s = "width" === t ? 1 : 0,
                    a = 0,
                    l = 0;
                if (n === (i ? "border" : "content")) return 0;
                for (; s < 4; s += 2)
                    "margin" === n && (l += T.css(e, n + oe[s], !0, o)),
                    i ?
                    ("content" === n && (l -= T.css(e, "padding" + oe[s], !0, o)),
                        "margin" !== n &&
                        (l -= T.css(e, "border" + oe[s] + "Width", !0, o))) :
                    ((l += T.css(e, "padding" + oe[s], !0, o)),
                        "padding" !== n ?
                        (l += T.css(e, "border" + oe[s] + "Width", !0, o)) :
                        (a += T.css(e, "border" + oe[s] + "Width", !0, o)));
                return (!i &&
                    r >= 0 &&
                    (l +=
                        Math.max(
                            0,
                            Math.ceil(
                                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                                r -
                                l -
                                a -
                                0.5
                            )
                        ) || 0),
                    l
                );
            }

            function it(e, t, n) {
                var i = We(e),
                    o =
                    (!g.boxSizingReliable() || n) &&
                    "border-box" === T.css(e, "boxSizing", !1, i),
                    r = o,
                    s = Ue(e, t, i),
                    a = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Re.test(s)) {
                    if (!n) return s;
                    s = "auto";
                }
                return (
                    ((!g.boxSizingReliable() && o) ||
                        (!g.reliableTrDimensions() && j(e, "tr")) ||
                        "auto" === s ||
                        (!parseFloat(s) && "inline" === T.css(e, "display", !1, i))) &&
                    e.getClientRects().length &&
                    ((o = "border-box" === T.css(e, "boxSizing", !1, i)),
                        (r = a in e) && (s = e[a])),
                    (s = parseFloat(s) || 0) +
                    nt(e, t, n || (o ? "border" : "content"), r, i, s) +
                    "px"
                );
            }

            function ot(e, t, n, i, o) {
                return new ot.prototype.init(e, t, n, i, o);
            }
            T.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = Ue(e, "opacity");
                                    return "" === n ? "1" : n;
                                }
                            },
                        },
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                    },
                    cssProps: {},
                    style: function(e, t, n, i) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var o,
                                r,
                                s,
                                a = V(t),
                                l = Ke.test(t),
                                c = e.style;
                            if (
                                (l || (t = Qe(a)),
                                    (s = T.cssHooks[t] || T.cssHooks[a]),
                                    void 0 === n)
                            )
                                return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ?
                                    o :
                                    c[t];
                            "string" === (r = typeof n) &&
                            (o = ie.exec(n)) &&
                            o[1] &&
                                ((n = ce(e, t, o)), (r = "number")),
                                null != n &&
                                n == n &&
                                ("number" !== r ||
                                    l ||
                                    (n += (o && o[3]) || (T.cssNumber[a] ? "" : "px")),
                                    g.clearCloneStyle ||
                                    "" !== n ||
                                    0 !== t.indexOf("background") ||
                                    (c[t] = "inherit"),
                                    (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                                    (l ? c.setProperty(t, n) : (c[t] = n)));
                        }
                    },
                    css: function(e, t, n, i) {
                        var o,
                            r,
                            s,
                            a = V(t);
                        return (
                            Ke.test(t) || (t = Qe(a)),
                            (s = T.cssHooks[t] || T.cssHooks[a]) &&
                            "get" in s &&
                            (o = s.get(e, !0, n)),
                            void 0 === o && (o = Ue(e, t, i)),
                            "normal" === o && t in et && (o = et[t]),
                            "" === n || n ?
                            ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o) :
                            o
                        );
                    },
                }),
                T.each(["height", "width"], function(e, t) {
                    T.cssHooks[t] = {
                        get: function(e, n, i) {
                            if (n)
                                return !Je.test(T.css(e, "display")) ||
                                    (e.getClientRects().length && e.getBoundingClientRect().width) ?
                                    it(e, t, i) :
                                    Fe(e, Ze, function() {
                                        return it(e, t, i);
                                    });
                        },
                        set: function(e, n, i) {
                            var o,
                                r = We(e),
                                s = !g.scrollboxSize() && "absolute" === r.position,
                                a = (s || i) && "border-box" === T.css(e, "boxSizing", !1, r),
                                l = i ? nt(e, t, i, a, r) : 0;
                            return (
                                a &&
                                s &&
                                (l -= Math.ceil(
                                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                                    parseFloat(r[t]) -
                                    nt(e, t, "border", !1, r) -
                                    0.5
                                )),
                                l &&
                                (o = ie.exec(n)) &&
                                "px" !== (o[3] || "px") &&
                                ((e.style[t] = n), (n = T.css(e, t))),
                                tt(0, n, l)
                            );
                        },
                    };
                }),
                (T.cssHooks.marginLeft = Xe(g.reliableMarginLeft, function(e, t) {
                    if (t)
                        return (
                            (parseFloat(Ue(e, "marginLeft")) ||
                                e.getBoundingClientRect().left -
                                Fe(e, { marginLeft: 0 }, function() {
                                    return e.getBoundingClientRect().left;
                                })) + "px"
                        );
                })),
                T.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
                    (T.cssHooks[e + t] = {
                        expand: function(n) {
                            for (
                                var i = 0,
                                    o = {},
                                    r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++
                            )
                                o[e + oe[i] + t] = r[i] || r[i - 2] || r[0];
                            return o;
                        },
                    }),
                    "margin" !== e && (T.cssHooks[e + t].set = tt);
                }),
                T.fn.extend({
                    css: function(e, t) {
                        return B(
                            this,
                            function(e, t, n) {
                                var i,
                                    o,
                                    r = {},
                                    s = 0;
                                if (Array.isArray(t)) {
                                    for (i = We(e), o = t.length; s < o; s++)
                                        r[t[s]] = T.css(e, t[s], !1, i);
                                    return r;
                                }
                                return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
                            },
                            e,
                            t,
                            arguments.length > 1
                        );
                    },
                }),
                (T.Tween = ot),
                (ot.prototype = {
                    constructor: ot,
                    init: function(e, t, n, i, o, r) {
                        (this.elem = e),
                        (this.prop = n),
                        (this.easing = o || T.easing._default),
                        (this.options = t),
                        (this.start = this.now = this.cur()),
                        (this.end = i),
                        (this.unit = r || (T.cssNumber[n] ? "" : "px"));
                    },
                    cur: function() {
                        var e = ot.propHooks[this.prop];
                        return e && e.get ? e.get(this) : ot.propHooks._default.get(this);
                    },
                    run: function(e) {
                        var t,
                            n = ot.propHooks[this.prop];
                        return (
                            this.options.duration ?
                            (this.pos = t = T.easing[this.easing](
                                e,
                                this.options.duration * e,
                                0,
                                1,
                                this.options.duration
                            )) :
                            (this.pos = t = e),
                            (this.now = (this.end - this.start) * t + this.start),
                            this.options.step &&
                            this.options.step.call(this.elem, this.now, this),
                            n && n.set ? n.set(this) : ot.propHooks._default.set(this),
                            this
                        );
                    },
                }),
                (ot.prototype.init.prototype = ot.prototype),
                (ot.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return 1 !== e.elem.nodeType ||
                                (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ?
                                e.elem[e.prop] :
                                (t = T.css(e.elem, e.prop, "")) && "auto" !== t ?
                                t :
                                0;
                        },
                        set: function(e) {
                            T.fx.step[e.prop] ?
                                T.fx.step[e.prop](e) :
                                1 !== e.elem.nodeType ||
                                (!T.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)]) ?
                                (e.elem[e.prop] = e.now) :
                                T.style(e.elem, e.prop, e.now + e.unit);
                        },
                    },
                }),
                (ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                    },
                }),
                (T.easing = {
                    linear: function(e) {
                        return e;
                    },
                    swing: function(e) {
                        return 0.5 - Math.cos(e * Math.PI) / 2;
                    },
                    _default: "swing",
                }),
                (T.fx = ot.prototype.init),
                (T.fx.step = {});
            var rt,
                st,
                at = /^(?:toggle|show|hide)$/,
                lt = /queueHooks$/;

            function ct() {
                st &&
                    (!1 === w.hidden && n.requestAnimationFrame ?
                        n.requestAnimationFrame(ct) :
                        n.setTimeout(ct, T.fx.interval),
                        T.fx.tick());
            }

            function dt() {
                return (
                    n.setTimeout(function() {
                        rt = void 0;
                    }),
                    (rt = Date.now())
                );
            }

            function ut(e, t) {
                var n,
                    i = 0,
                    o = { height: e };
                for (t = t ? 1 : 0; i < 4; i += 2 - t)
                    o["margin" + (n = oe[i])] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e), o;
            }

            function pt(e, t, n) {
                for (
                    var i,
                        o = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
                        r = 0,
                        s = o.length; r < s; r++
                )
                    if ((i = o[r].call(n, t, e))) return i;
            }

            function ft(e, t, n) {
                var i,
                    o,
                    r = 0,
                    s = ft.prefilters.length,
                    a = T.Deferred().always(function() {
                        delete l.elem;
                    }),
                    l = function() {
                        if (o) return !1;
                        for (
                            var t = rt || dt(),
                                n = Math.max(0, c.startTime + c.duration - t),
                                i = 1 - (n / c.duration || 0),
                                r = 0,
                                s = c.tweens.length; r < s; r++
                        )
                            c.tweens[r].run(i);
                        return (
                            a.notifyWith(e, [c, i, n]),
                            i < 1 && s ?
                            n :
                            (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
                        );
                    },
                    c = a.promise({
                        elem: e,
                        props: T.extend({}, t),
                        opts: T.extend(!0, { specialEasing: {}, easing: T.easing._default },
                            n
                        ),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: rt || dt(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var i = T.Tween(
                                e,
                                c.opts,
                                t,
                                n,
                                c.opts.specialEasing[t] || c.opts.easing
                            );
                            return c.tweens.push(i), i;
                        },
                        stop: function(t) {
                            var n = 0,
                                i = t ? c.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; n < i; n++) c.tweens[n].run(1);
                            return (
                                t ?
                                (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) :
                                a.rejectWith(e, [c, t]),
                                this
                            );
                        },
                    }),
                    d = c.props;
                for (!(function(e, t) {
                        var n, i, o, r, s;
                        for (n in e)
                            if (
                                ((o = t[(i = V(n))]),
                                    (r = e[n]),
                                    Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
                                    n !== i && ((e[i] = r), delete e[n]),
                                    (s = T.cssHooks[i]) && ("expand" in s))
                            )
                                for (n in ((r = s.expand(r)), delete e[i], r))
                                    (n in e) || ((e[n] = r[n]), (t[n] = o));
                            else t[i] = o;
                    })(d, c.opts.specialEasing); r < s; r++)
                    if ((i = ft.prefilters[r].call(c, e, d, c.opts)))
                        return (
                            y(i.stop) &&
                            (T._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                            i
                        );
                return (
                    T.map(d, pt, c),
                    y(c.opts.start) && c.opts.start.call(e, c),
                    c
                    .progress(c.opts.progress)
                    .done(c.opts.done, c.opts.complete)
                    .fail(c.opts.fail)
                    .always(c.opts.always),
                    T.fx.timer(T.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
                    c
                );
            }
            (T.Animation = T.extend(ft, {
                tweeners: {
                    "*": [
                        function(e, t) {
                            var n = this.createTween(e, t);
                            return ce(n.elem, e, ie.exec(t), n), n;
                        },
                    ],
                },
                tweener: function(e, t) {
                    y(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
                    for (var n, i = 0, o = e.length; i < o; i++)
                        (n = e[i]),
                        (ft.tweeners[n] = ft.tweeners[n] || []),
                        ft.tweeners[n].unshift(t);
                },
                prefilters: [
                    function(e, t, n) {
                        var i,
                            o,
                            r,
                            s,
                            a,
                            l,
                            c,
                            d,
                            u = "width" in t || "height" in t,
                            p = this,
                            f = {},
                            h = e.style,
                            v = e.nodeType && le(e),
                            g = J.get(e, "fxshow");
                        for (i in (n.queue ||
                                (null == (s = T._queueHooks(e, "fx")).unqueued &&
                                    ((s.unqueued = 0),
                                        (a = s.empty.fire),
                                        (s.empty.fire = function() {
                                            s.unqueued || a();
                                        })),
                                    s.unqueued++,
                                    p.always(function() {
                                        p.always(function() {
                                            s.unqueued--, T.queue(e, "fx").length || s.empty.fire();
                                        });
                                    })),
                                t))
                            if (((o = t[i]), at.test(o))) {
                                if (
                                    (delete t[i],
                                        (r = r || "toggle" === o),
                                        o === (v ? "hide" : "show"))
                                ) {
                                    if ("show" !== o || !g || void 0 === g[i]) continue;
                                    v = !0;
                                }
                                f[i] = (g && g[i]) || T.style(e, i);
                            }
                        if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(f))
                            for (i in (u &&
                                    1 === e.nodeType &&
                                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                                        null == (c = g && g.display) && (c = J.get(e, "display")),
                                        "none" === (d = T.css(e, "display")) &&
                                        (c ?
                                            (d = c) :
                                            (pe([e], !0),
                                                (c = e.style.display || c),
                                                (d = T.css(e, "display")),
                                                pe([e]))),
                                        ("inline" === d || ("inline-block" === d && null != c)) &&
                                        "none" === T.css(e, "float") &&
                                        (l ||
                                            (p.done(function() {
                                                    h.display = c;
                                                }),
                                                null == c &&
                                                ((d = h.display), (c = "none" === d ? "" : d))),
                                            (h.display = "inline-block"))),
                                    n.overflow &&
                                    ((h.overflow = "hidden"),
                                        p.always(function() {
                                            (h.overflow = n.overflow[0]),
                                            (h.overflowX = n.overflow[1]),
                                            (h.overflowY = n.overflow[2]);
                                        })),
                                    (l = !1),
                                    f))
                                l ||
                                (g ?
                                    "hidden" in g && (v = g.hidden) :
                                    (g = J.access(e, "fxshow", { display: c })),
                                    r && (g.hidden = !v),
                                    v && pe([e], !0),
                                    p.done(function() {
                                        for (i in (v || pe([e]), J.remove(e, "fxshow"), f))
                                            T.style(e, i, f[i]);
                                    })),
                                (l = pt(v ? g[i] : 0, i, p)),
                                i in g ||
                                ((g[i] = l.start), v && ((l.end = l.start), (l.start = 0)));
                    },
                ],
                prefilter: function(e, t) {
                    t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
                },
            })),
            (T.speed = function(e, t, n) {
                var i =
                    e && "object" == typeof e ?
                    T.extend({}, e) : {
                        complete: n || (!n && t) || (y(e) && e),
                        duration: e,
                        easing: (n && t) || (t && !y(t) && t),
                    };
                return (
                    T.fx.off ?
                    (i.duration = 0) :
                    "number" != typeof i.duration &&
                    (i.duration in T.fx.speeds ?
                        (i.duration = T.fx.speeds[i.duration]) :
                        (i.duration = T.fx.speeds._default)),
                    (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                    (i.old = i.complete),
                    (i.complete = function() {
                        y(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue);
                    }),
                    i
                );
            }),
            T.fn.extend({
                    fadeTo: function(e, t, n, i) {
                        return this.filter(le)
                            .css("opacity", 0)
                            .show()
                            .end()
                            .animate({ opacity: t }, e, n, i);
                    },
                    animate: function(e, t, n, i) {
                        var o = T.isEmptyObject(e),
                            r = T.speed(t, n, i),
                            s = function() {
                                var t = ft(this, T.extend({}, e), r);
                                (o || J.get(this, "finish")) && t.stop(!0);
                            };
                        return (
                            (s.finish = s),
                            o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                        );
                    },
                    stop: function(e, t, n) {
                        var i = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n);
                        };
                        return (
                            "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                            t && this.queue(e || "fx", []),
                            this.each(function() {
                                var t = !0,
                                    o = null != e && e + "queueHooks",
                                    r = T.timers,
                                    s = J.get(this);
                                if (o) s[o] && s[o].stop && i(s[o]);
                                else
                                    for (o in s) s[o] && s[o].stop && lt.test(o) && i(s[o]);
                                for (o = r.length; o--;)
                                    r[o].elem !== this ||
                                    (null != e && r[o].queue !== e) ||
                                    (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
                                (!t && n) || T.dequeue(this, e);
                            })
                        );
                    },
                    finish: function(e) {
                        return (!1 !== e && (e = e || "fx"),
                            this.each(function() {
                                var t,
                                    n = J.get(this),
                                    i = n[e + "queue"],
                                    o = n[e + "queueHooks"],
                                    r = T.timers,
                                    s = i ? i.length : 0;
                                for (
                                    n.finish = !0,
                                    T.queue(this, e, []),
                                    o && o.stop && o.stop.call(this, !0),
                                    t = r.length; t--;

                                )
                                    r[t].elem === this &&
                                    r[t].queue === e &&
                                    (r[t].anim.stop(!0), r.splice(t, 1));
                                for (t = 0; t < s; t++)
                                    i[t] && i[t].finish && i[t].finish.call(this);
                                delete n.finish;
                            })
                        );
                    },
                }),
                T.each(["toggle", "show", "hide"], function(e, t) {
                    var n = T.fn[t];
                    T.fn[t] = function(e, i, o) {
                        return null == e || "boolean" == typeof e ?
                            n.apply(this, arguments) :
                            this.animate(ut(t, !0), e, i, o);
                    };
                }),
                T.each({
                        slideDown: ut("show"),
                        slideUp: ut("hide"),
                        slideToggle: ut("toggle"),
                        fadeIn: { opacity: "show" },
                        fadeOut: { opacity: "hide" },
                        fadeToggle: { opacity: "toggle" },
                    },
                    function(e, t) {
                        T.fn[e] = function(e, n, i) {
                            return this.animate(t, e, n, i);
                        };
                    }
                ),
                (T.timers = []),
                (T.fx.tick = function() {
                    var e,
                        t = 0,
                        n = T.timers;
                    for (rt = Date.now(); t < n.length; t++)
                        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || T.fx.stop(), (rt = void 0);
                }),
                (T.fx.timer = function(e) {
                    T.timers.push(e), T.fx.start();
                }),
                (T.fx.interval = 13),
                (T.fx.start = function() {
                    st || ((st = !0), ct());
                }),
                (T.fx.stop = function() {
                    st = null;
                }),
                (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                (T.fn.delay = function(e, t) {
                    return (
                        (e = (T.fx && T.fx.speeds[e]) || e),
                        (t = t || "fx"),
                        this.queue(t, function(t, i) {
                            var o = n.setTimeout(t, e);
                            i.stop = function() {
                                n.clearTimeout(o);
                            };
                        })
                    );
                }),
                (function() {
                    var e = w.createElement("input"),
                        t = w
                        .createElement("select")
                        .appendChild(w.createElement("option"));
                    (e.type = "checkbox"),
                    (g.checkOn = "" !== e.value),
                    (g.optSelected = t.selected),
                    ((e = w.createElement("input")).value = "t"),
                    (e.type = "radio"),
                    (g.radioValue = "t" === e.value);
                })();
            var ht,
                vt = T.expr.attrHandle;
            T.fn.extend({
                    attr: function(e, t) {
                        return B(this, T.attr, e, t, arguments.length > 1);
                    },
                    removeAttr: function(e) {
                        return this.each(function() {
                            T.removeAttr(this, e);
                        });
                    },
                }),
                T.extend({
                    attr: function(e, t, n) {
                        var i,
                            o,
                            r = e.nodeType;
                        if (3 !== r && 8 !== r && 2 !== r)
                            return void 0 === e.getAttribute ?
                                T.prop(e, t, n) :
                                ((1 === r && T.isXMLDoc(e)) ||
                                    (o =
                                        T.attrHooks[t.toLowerCase()] ||
                                        (T.expr.match.bool.test(t) ? ht : void 0)),
                                    void 0 !== n ?
                                    null === n ?
                                    void T.removeAttr(e, t) :
                                    o && "set" in o && void 0 !== (i = o.set(e, n, t)) ?
                                    i :
                                    (e.setAttribute(t, n + ""), n) :
                                    o && "get" in o && null !== (i = o.get(e, t)) ?
                                    i :
                                    null == (i = T.find.attr(e, t)) ?
                                    void 0 :
                                    i);
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!g.radioValue && "radio" === t && j(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t;
                                }
                            },
                        },
                    },
                    removeAttr: function(e, t) {
                        var n,
                            i = 0,
                            o = t && t.match(M);
                        if (o && 1 === e.nodeType)
                            for (;
                                (n = o[i++]);) e.removeAttribute(n);
                    },
                }),
                (ht = {
                    set: function(e, t, n) {
                        return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
                    },
                }),
                T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
                    var n = vt[t] || T.find.attr;
                    vt[t] = function(e, t, i) {
                        var o,
                            r,
                            s = t.toLowerCase();
                        return (
                            i ||
                            ((r = vt[s]),
                                (vt[s] = o),
                                (o = null != n(e, t, i) ? s : null),
                                (vt[s] = r)),
                            o
                        );
                    };
                });
            var gt = /^(?:input|select|textarea|button)$/i,
                yt = /^(?:a|area)$/i;

            function mt(e) {
                return (e.match(M) || []).join(" ");
            }

            function wt(e) {
                return (e.getAttribute && e.getAttribute("class")) || "";
            }

            function bt(e) {
                return Array.isArray(e) ?
                    e :
                    ("string" == typeof e && e.match(M)) || [];
            }
            T.fn.extend({
                    prop: function(e, t) {
                        return B(this, T.prop, e, t, arguments.length > 1);
                    },
                    removeProp: function(e) {
                        return this.each(function() {
                            delete this[T.propFix[e] || e];
                        });
                    },
                }),
                T.extend({
                    prop: function(e, t, n) {
                        var i,
                            o,
                            r = e.nodeType;
                        if (3 !== r && 8 !== r && 2 !== r)
                            return (
                                (1 === r && T.isXMLDoc(e)) ||
                                ((t = T.propFix[t] || t), (o = T.propHooks[t])),
                                void 0 !== n ?
                                o && "set" in o && void 0 !== (i = o.set(e, n, t)) ?
                                i :
                                (e[t] = n) :
                                o && "get" in o && null !== (i = o.get(e, t)) ?
                                i :
                                e[t]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = T.find.attr(e, "tabindex");
                                return t ?
                                    parseInt(t, 10) :
                                    gt.test(e.nodeName) || (yt.test(e.nodeName) && e.href) ?
                                    0 :
                                    -1;
                            },
                        },
                    },
                    propFix: { for: "htmlFor", class: "className" },
                }),
                g.optSelected ||
                (T.propHooks.selected = {
                    get: function(e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex, null;
                    },
                    set: function(e) {
                        var t = e.parentNode;
                        t &&
                            (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                    },
                }),
                T.each(
                    [
                        "tabIndex",
                        "readOnly",
                        "maxLength",
                        "cellSpacing",
                        "cellPadding",
                        "rowSpan",
                        "colSpan",
                        "useMap",
                        "frameBorder",
                        "contentEditable",
                    ],
                    function() {
                        T.propFix[this.toLowerCase()] = this;
                    }
                ),
                T.fn.extend({
                    addClass: function(e) {
                        var t,
                            n,
                            i,
                            o,
                            r,
                            s,
                            a,
                            l = 0;
                        if (y(e))
                            return this.each(function(t) {
                                T(this).addClass(e.call(this, t, wt(this)));
                            });
                        if ((t = bt(e)).length)
                            for (;
                                (n = this[l++]);)
                                if (
                                    ((o = wt(n)), (i = 1 === n.nodeType && " " + mt(o) + " "))
                                ) {
                                    for (s = 0;
                                        (r = t[s++]);)
                                        i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                                    o !== (a = mt(i)) && n.setAttribute("class", a);
                                }
                        return this;
                    },
                    removeClass: function(e) {
                        var t,
                            n,
                            i,
                            o,
                            r,
                            s,
                            a,
                            l = 0;
                        if (y(e))
                            return this.each(function(t) {
                                T(this).removeClass(e.call(this, t, wt(this)));
                            });
                        if (!arguments.length) return this.attr("class", "");
                        if ((t = bt(e)).length)
                            for (;
                                (n = this[l++]);)
                                if (
                                    ((o = wt(n)), (i = 1 === n.nodeType && " " + mt(o) + " "))
                                ) {
                                    for (s = 0;
                                        (r = t[s++]);)
                                        for (; i.indexOf(" " + r + " ") > -1;)
                                            i = i.replace(" " + r + " ", " ");
                                    o !== (a = mt(i)) && n.setAttribute("class", a);
                                }
                        return this;
                    },
                    toggleClass: function(e, t) {
                        var n = typeof e,
                            i = "string" === n || Array.isArray(e);
                        return "boolean" == typeof t && i ?
                            t ?
                            this.addClass(e) :
                            this.removeClass(e) :
                            y(e) ?
                            this.each(function(n) {
                                T(this).toggleClass(e.call(this, n, wt(this), t), t);
                            }) :
                            this.each(function() {
                                var t, o, r, s;
                                if (i)
                                    for (o = 0, r = T(this), s = bt(e);
                                        (t = s[o++]);)
                                        r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                                else
                                    (void 0 !== e && "boolean" !== n) ||
                                    ((t = wt(this)) && J.set(this, "__className__", t),
                                        this.setAttribute &&
                                        this.setAttribute(
                                            "class",
                                            t || !1 === e ?
                                            "" :
                                            J.get(this, "__className__") || ""
                                        ));
                            });
                    },
                    hasClass: function(e) {
                        var t,
                            n,
                            i = 0;
                        for (t = " " + e + " ";
                            (n = this[i++]);)
                            if (1 === n.nodeType && (" " + mt(wt(n)) + " ").indexOf(t) > -1)
                                return !0;
                        return !1;
                    },
                });
            var xt = /\r/g;
            T.fn.extend({
                    val: function(e) {
                        var t,
                            n,
                            i,
                            o = this[0];
                        return arguments.length ?
                            ((i = y(e)),
                                this.each(function(n) {
                                    var o;
                                    1 === this.nodeType &&
                                        (null == (o = i ? e.call(this, n, T(this).val()) : e) ?
                                            (o = "") :
                                            "number" == typeof o ?
                                            (o += "") :
                                            Array.isArray(o) &&
                                            (o = T.map(o, function(e) {
                                                return null == e ? "" : e + "";
                                            })),
                                            ((t =
                                                    T.valHooks[this.type] ||
                                                    T.valHooks[this.nodeName.toLowerCase()]) &&
                                                "set" in t &&
                                                void 0 !== t.set(this, o, "value")) ||
                                            (this.value = o));
                                })) :
                            o ?
                            (t =
                                T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) &&
                            "get" in t &&
                            void 0 !== (n = t.get(o, "value")) ?
                            n :
                            "string" == typeof(n = o.value) ?
                            n.replace(xt, "") :
                            null == n ?
                            "" :
                            n :
                            void 0;
                    },
                }),
                T.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = T.find.attr(e, "value");
                                return null != t ? t : mt(T.text(e));
                            },
                        },
                        select: {
                            get: function(e) {
                                var t,
                                    n,
                                    i,
                                    o = e.options,
                                    r = e.selectedIndex,
                                    s = "select-one" === e.type,
                                    a = s ? null : [],
                                    l = s ? r + 1 : o.length;
                                for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                                    if (
                                        ((n = o[i]).selected || i === r) &&
                                        !n.disabled &&
                                        (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))
                                    ) {
                                        if (((t = T(n).val()), s)) return t;
                                        a.push(t);
                                    }
                                return a;
                            },
                            set: function(e, t) {
                                for (
                                    var n, i, o = e.options, r = T.makeArray(t), s = o.length; s--;

                                )
                                    ((i = o[s]).selected =
                                        T.inArray(T.valHooks.option.get(i), r) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1), r;
                            },
                        },
                    },
                }),
                T.each(["radio", "checkbox"], function() {
                    (T.valHooks[this] = {
                        set: function(e, t) {
                            if (Array.isArray(t))
                                return (e.checked = T.inArray(T(e).val(), t) > -1);
                        },
                    }),
                    g.checkOn ||
                        (T.valHooks[this].get = function(e) {
                            return null === e.getAttribute("value") ? "on" : e.value;
                        });
                }),
                (g.focusin = "onfocusin" in n);
            var kt = /^(?:focusinfocus|focusoutblur)$/,
                Tt = function(e) {
                    e.stopPropagation();
                };
            T.extend(T.event, {
                    trigger: function(e, t, i, o) {
                        var r,
                            s,
                            a,
                            l,
                            c,
                            d,
                            u,
                            p,
                            h = [i || w],
                            v = f.call(e, "type") ? e.type : e,
                            g = f.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (
                            ((s = p = a = i = i || w),
                                3 !== i.nodeType &&
                                8 !== i.nodeType &&
                                !kt.test(v + T.event.triggered) &&
                                (v.indexOf(".") > -1 &&
                                    ((g = v.split(".")), (v = g.shift()), g.sort()),
                                    (c = v.indexOf(":") < 0 && "on" + v),
                                    ((e = e[T.expando] ?
                                            e :
                                            new T.Event(v, "object" == typeof e && e)).isTrigger = o ?
                                        2 :
                                        3),
                                    (e.namespace = g.join(".")),
                                    (e.rnamespace = e.namespace ?
                                        new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") :
                                        null),
                                    (e.result = void 0),
                                    e.target || (e.target = i),
                                    (t = null == t ? [e] : T.makeArray(t, [e])),
                                    (u = T.event.special[v] || {}),
                                    o || !u.trigger || !1 !== u.trigger.apply(i, t)))
                        ) {
                            if (!o && !u.noBubble && !m(i)) {
                                for (
                                    l = u.delegateType || v, kt.test(l + v) || (s = s.parentNode); s; s = s.parentNode
                                )
                                    h.push(s), (a = s);
                                a === (i.ownerDocument || w) &&
                                    h.push(a.defaultView || a.parentWindow || n);
                            }
                            for (r = 0;
                                (s = h[r++]) && !e.isPropagationStopped();)
                                (p = s),
                                (e.type = r > 1 ? l : u.bindType || v),
                                (d =
                                    (J.get(s, "events") || Object.create(null))[e.type] &&
                                    J.get(s, "handle")) && d.apply(s, t),
                                (d = c && s[c]) &&
                                d.apply &&
                                G(s) &&
                                ((e.result = d.apply(s, t)), !1 === e.result && e.preventDefault());
                            return (
                                (e.type = v),
                                o ||
                                e.isDefaultPrevented() ||
                                (u._default && !1 !== u._default.apply(h.pop(), t)) ||
                                !G(i) ||
                                (c &&
                                    y(i[v]) &&
                                    !m(i) &&
                                    ((a = i[c]) && (i[c] = null),
                                        (T.event.triggered = v),
                                        e.isPropagationStopped() && p.addEventListener(v, Tt),
                                        i[v](),
                                        e.isPropagationStopped() && p.removeEventListener(v, Tt),
                                        (T.event.triggered = void 0),
                                        a && (i[c] = a))),
                                e.result
                            );
                        }
                    },
                    simulate: function(e, t, n) {
                        var i = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
                        T.event.trigger(i, null, t);
                    },
                }),
                T.fn.extend({
                    trigger: function(e, t) {
                        return this.each(function() {
                            T.event.trigger(e, t, this);
                        });
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if (n) return T.event.trigger(e, t, n, !0);
                    },
                }),
                g.focusin ||
                T.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
                    var n = function(e) {
                        T.event.simulate(t, e.target, T.event.fix(e));
                    };
                    T.event.special[t] = {
                        setup: function() {
                            var i = this.ownerDocument || this.document || this,
                                o = J.access(i, t);
                            o || i.addEventListener(e, n, !0), J.access(i, t, (o || 0) + 1);
                        },
                        teardown: function() {
                            var i = this.ownerDocument || this.document || this,
                                o = J.access(i, t) - 1;
                            o
                                ?
                                J.access(i, t, o) :
                                (i.removeEventListener(e, n, !0), J.remove(i, t));
                        },
                    };
                });
            var St = n.location,
                Ct = { guid: Date.now() },
                $t = /\?/;
            T.parseXML = function(e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = new n.DOMParser().parseFromString(e, "text/xml");
                } catch (e) {
                    t = void 0;
                }
                return (
                    (t && !t.getElementsByTagName("parsererror").length) ||
                    T.error("Invalid XML: " + e),
                    t
                );
            };
            var At = /\[\]$/,
                Et = /\r?\n/g,
                jt = /^(?:submit|button|image|reset|file)$/i,
                Dt = /^(?:input|select|textarea|keygen)/i;

            function Ot(e, t, n, i) {
                var o;
                if (Array.isArray(t))
                    T.each(t, function(t, o) {
                        n || At.test(e) ?
                            i(e, o) :
                            Ot(
                                e + "[" + ("object" == typeof o && null != o ? t : "") + "]",
                                o,
                                n,
                                i
                            );
                    });
                else if (n || "object" !== k(t)) i(e, t);
                else
                    for (o in t) Ot(e + "[" + o + "]", t[o], n, i);
            }
            (T.param = function(e, t) {
                var n,
                    i = [],
                    o = function(e, t) {
                        var n = y(t) ? t() : t;
                        i[i.length] =
                            encodeURIComponent(e) +
                            "=" +
                            encodeURIComponent(null == n ? "" : n);
                    };
                if (null == e) return "";
                if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
                    T.each(e, function() {
                        o(this.name, this.value);
                    });
                else
                    for (n in e) Ot(n, e[n], t, o);
                return i.join("&");
            }),
            T.fn.extend({
                serialize: function() {
                    return T.param(this.serializeArray());
                },
                serializeArray: function() {
                    return this.map(function() {
                            var e = T.prop(this, "elements");
                            return e ? T.makeArray(e) : this;
                        })
                        .filter(function() {
                            var e = this.type;
                            return (
                                this.name &&
                                !T(this).is(":disabled") &&
                                Dt.test(this.nodeName) &&
                                !jt.test(e) &&
                                (this.checked || !ve.test(e))
                            );
                        })
                        .map(function(e, t) {
                            var n = T(this).val();
                            return null == n ?
                                null :
                                Array.isArray(n) ?
                                T.map(n, function(e) {
                                    return { name: t.name, value: e.replace(Et, "\r\n") };
                                }) : { name: t.name, value: n.replace(Et, "\r\n") };
                        })
                        .get();
                },
            });
            var Lt = /%20/g,
                Ht = /#.*$/,
                Nt = /([?&])_=[^&]*/,
                Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                qt = /^(?:GET|HEAD)$/,
                Mt = /^\/\//,
                _t = {},
                It = {},
                zt = "*/".concat("*"),
                Rt = w.createElement("a");

            function Wt(e) {
                return function(t, n) {
                    "string" != typeof t && ((n = t), (t = "*"));
                    var i,
                        o = 0,
                        r = t.toLowerCase().match(M) || [];
                    if (y(n))
                        for (;
                            (i = r[o++]);)
                            "+" === i[0] ?
                            ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) :
                            (e[i] = e[i] || []).push(n);
                };
            }

            function Ft(e, t, n, i) {
                var o = {},
                    r = e === It;

                function s(a) {
                    var l;
                    return (
                        (o[a] = !0),
                        T.each(e[a] || [], function(e, a) {
                            var c = a(t, n, i);
                            return "string" != typeof c || r || o[c] ?
                                r ?
                                !(l = c) :
                                void 0 :
                                (t.dataTypes.unshift(c), s(c), !1);
                        }),
                        l
                    );
                }
                return s(t.dataTypes[0]) || (!o["*"] && s("*"));
            }

            function Bt(e, t) {
                var n,
                    i,
                    o = T.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
                return i && T.extend(!0, e, i), e;
            }
            (Rt.href = St.href),
            T.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: St.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                            St.protocol
                        ),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": zt,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript",
                        },
                        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON",
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": T.parseXML,
                        },
                        flatOptions: { url: !0, context: !0 },
                    },
                    ajaxSetup: function(e, t) {
                        return t ? Bt(Bt(e, T.ajaxSettings), t) : Bt(T.ajaxSettings, e);
                    },
                    ajaxPrefilter: Wt(_t),
                    ajaxTransport: Wt(It),
                    ajax: function(e, t) {
                        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                        var i,
                            o,
                            r,
                            s,
                            a,
                            l,
                            c,
                            d,
                            u,
                            p,
                            f = T.ajaxSetup({}, t),
                            h = f.context || f,
                            v = f.context && (h.nodeType || h.jquery) ? T(h) : T.event,
                            g = T.Deferred(),
                            y = T.Callbacks("once memory"),
                            m = f.statusCode || {},
                            b = {},
                            x = {},
                            k = "canceled",
                            S = {
                                readyState: 0,
                                getResponseHeader: function(e) {
                                    var t;
                                    if (c) {
                                        if (!s)
                                            for (s = {};
                                                (t = Pt.exec(r));)
                                                s[t[1].toLowerCase() + " "] = (
                                                    s[t[1].toLowerCase() + " "] || []
                                                ).concat(t[2]);
                                        t = s[e.toLowerCase() + " "];
                                    }
                                    return null == t ? null : t.join(", ");
                                },
                                getAllResponseHeaders: function() {
                                    return c ? r : null;
                                },
                                setRequestHeader: function(e, t) {
                                    return (
                                        null == c &&
                                        ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                                            (b[e] = t)),
                                        this
                                    );
                                },
                                overrideMimeType: function(e) {
                                    return null == c && (f.mimeType = e), this;
                                },
                                statusCode: function(e) {
                                    var t;
                                    if (e)
                                        if (c) S.always(e[S.status]);
                                        else
                                            for (t in e) m[t] = [m[t], e[t]];
                                    return this;
                                },
                                abort: function(e) {
                                    var t = e || k;
                                    return i && i.abort(t), C(0, t), this;
                                },
                            };
                        if (
                            (g.promise(S),
                                (f.url = ((e || f.url || St.href) + "").replace(
                                    Mt,
                                    St.protocol + "//"
                                )),
                                (f.type = t.method || t.type || f.method || f.type),
                                (f.dataTypes = (f.dataType || "*").toLowerCase().match(M) || [
                                    "",
                                ]),
                                null == f.crossDomain)
                        ) {
                            l = w.createElement("a");
                            try {
                                (l.href = f.url),
                                (l.href = l.href),
                                (f.crossDomain =
                                    Rt.protocol + "//" + Rt.host != l.protocol + "//" + l.host);
                            } catch (e) {
                                f.crossDomain = !0;
                            }
                        }
                        if (
                            (f.data &&
                                f.processData &&
                                "string" != typeof f.data &&
                                (f.data = T.param(f.data, f.traditional)),
                                Ft(_t, f, t, S),
                                c)
                        )
                            return S;
                        for (u in ((d = T.event && f.global) &&
                                0 == T.active++ &&
                                T.event.trigger("ajaxStart"),
                                (f.type = f.type.toUpperCase()),
                                (f.hasContent = !qt.test(f.type)),
                                (o = f.url.replace(Ht, "")),
                                f.hasContent ?
                                f.data &&
                                f.processData &&
                                0 ===
                                (f.contentType || "").indexOf(
                                    "application/x-www-form-urlencoded"
                                ) &&
                                (f.data = f.data.replace(Lt, "+")) :
                                ((p = f.url.slice(o.length)),
                                    f.data &&
                                    (f.processData || "string" == typeof f.data) &&
                                    ((o += ($t.test(o) ? "&" : "?") + f.data), delete f.data), !1 === f.cache &&
                                    ((o = o.replace(Nt, "$1")),
                                        (p = ($t.test(o) ? "&" : "?") + "_=" + Ct.guid++ + p)),
                                    (f.url = o + p)),
                                f.ifModified &&
                                (T.lastModified[o] &&
                                    S.setRequestHeader("If-Modified-Since", T.lastModified[o]),
                                    T.etag[o] && S.setRequestHeader("If-None-Match", T.etag[o])),
                                ((f.data && f.hasContent && !1 !== f.contentType) ||
                                    t.contentType) &&
                                S.setRequestHeader("Content-Type", f.contentType),
                                S.setRequestHeader(
                                    "Accept",
                                    f.dataTypes[0] && f.accepts[f.dataTypes[0]] ?
                                    f.accepts[f.dataTypes[0]] +
                                    ("*" !== f.dataTypes[0] ? ", " + zt + "; q=0.01" : "") :
                                    f.accepts["*"]
                                ),
                                f.headers))
                            S.setRequestHeader(u, f.headers[u]);
                        if (f.beforeSend && (!1 === f.beforeSend.call(h, S, f) || c))
                            return S.abort();
                        if (
                            ((k = "abort"),
                                y.add(f.complete),
                                S.done(f.success),
                                S.fail(f.error),
                                (i = Ft(It, f, t, S)))
                        ) {
                            if (((S.readyState = 1), d && v.trigger("ajaxSend", [S, f]), c))
                                return S;
                            f.async &&
                                f.timeout > 0 &&
                                (a = n.setTimeout(function() {
                                    S.abort("timeout");
                                }, f.timeout));
                            try {
                                (c = !1), i.send(b, C);
                            } catch (e) {
                                if (c) throw e;
                                C(-1, e);
                            }
                        } else C(-1, "No Transport");

                        function C(e, t, s, l) {
                            var u,
                                p,
                                w,
                                b,
                                x,
                                k = t;
                            c ||
                                ((c = !0),
                                    a && n.clearTimeout(a),
                                    (i = void 0),
                                    (r = l || ""),
                                    (S.readyState = e > 0 ? 4 : 0),
                                    (u = (e >= 200 && e < 300) || 304 === e),
                                    s &&
                                    (b = (function(e, t, n) {
                                        for (
                                            var i, o, r, s, a = e.contents, l = e.dataTypes;
                                            "*" === l[0];

                                        )
                                            l.shift(),
                                            void 0 === i &&
                                            (i =
                                                e.mimeType || t.getResponseHeader("Content-Type"));
                                        if (i)
                                            for (o in a)
                                                if (a[o] && a[o].test(i)) {
                                                    l.unshift(o);
                                                    break;
                                                }
                                        if (l[0] in n) r = l[0];
                                        else {
                                            for (o in n) {
                                                if (!l[0] || e.converters[o + " " + l[0]]) {
                                                    r = o;
                                                    break;
                                                }
                                                s || (s = o);
                                            }
                                            r = r || s;
                                        }
                                        if (r) return r !== l[0] && l.unshift(r), n[r];
                                    })(f, S, s)), !u &&
                                    T.inArray("script", f.dataTypes) > -1 &&
                                    (f.converters["text script"] = function() {}),
                                    (b = (function(e, t, n, i) {
                                        var o,
                                            r,
                                            s,
                                            a,
                                            l,
                                            c = {},
                                            d = e.dataTypes.slice();
                                        if (d[1])
                                            for (s in e.converters)
                                                c[s.toLowerCase()] = e.converters[s];
                                        for (r = d.shift(); r;)
                                            if (
                                                (e.responseFields[r] && (n[e.responseFields[r]] = t), !l &&
                                                    i &&
                                                    e.dataFilter &&
                                                    (t = e.dataFilter(t, e.dataType)),
                                                    (l = r),
                                                    (r = d.shift()))
                                            )
                                                if ("*" === r) r = l;
                                                else if ("*" !== l && l !== r) {
                                            if (!(s = c[l + " " + r] || c["* " + r]))
                                                for (o in c)
                                                    if (
                                                        (a = o.split(" "))[1] === r &&
                                                        (s = c[l + " " + a[0]] || c["* " + a[0]])
                                                    ) {
                                                        !0 === s ?
                                                            (s = c[o]) :
                                                            !0 !== c[o] && ((r = a[0]), d.unshift(a[1]));
                                                        break;
                                                    }
                                            if (!0 !== s)
                                                if (s && e.throws) t = s(t);
                                                else
                                                    try {
                                                        t = s(t);
                                                    } catch (e) {
                                                        return {
                                                            state: "parsererror",
                                                            error: s ?
                                                                e : "No conversion from " + l + " to " + r,
                                                        };
                                                    }
                                        }
                                        return { state: "success", data: t };
                                    })(f, b, S, u)),
                                    u ?
                                    (f.ifModified &&
                                        ((x = S.getResponseHeader("Last-Modified")) &&
                                            (T.lastModified[o] = x),
                                            (x = S.getResponseHeader("etag")) && (T.etag[o] = x)),
                                        204 === e || "HEAD" === f.type ?
                                        (k = "nocontent") :
                                        304 === e ?
                                        (k = "notmodified") :
                                        ((k = b.state), (p = b.data), (u = !(w = b.error)))) :
                                    ((w = k), (!e && k) || ((k = "error"), e < 0 && (e = 0))),
                                    (S.status = e),
                                    (S.statusText = (t || k) + ""),
                                    u ? g.resolveWith(h, [p, k, S]) : g.rejectWith(h, [S, k, w]),
                                    S.statusCode(m),
                                    (m = void 0),
                                    d &&
                                    v.trigger(u ? "ajaxSuccess" : "ajaxError", [S, f, u ? p : w]),
                                    y.fireWith(h, [S, k]),
                                    d &&
                                    (v.trigger("ajaxComplete", [S, f]),
                                        --T.active || T.event.trigger("ajaxStop")));
                        }
                        return S;
                    },
                    getJSON: function(e, t, n) {
                        return T.get(e, t, n, "json");
                    },
                    getScript: function(e, t) {
                        return T.get(e, void 0, t, "script");
                    },
                }),
                T.each(["get", "post"], function(e, t) {
                    T[t] = function(e, n, i, o) {
                        return (
                            y(n) && ((o = o || i), (i = n), (n = void 0)),
                            T.ajax(
                                T.extend({ url: e, type: t, dataType: o, data: n, success: i },
                                    T.isPlainObject(e) && e
                                )
                            )
                        );
                    };
                }),
                T.ajaxPrefilter(function(e) {
                    var t;
                    for (t in e.headers)
                        "content-type" === t.toLowerCase() &&
                        (e.contentType = e.headers[t] || "");
                }),
                (T._evalUrl = function(e, t, n) {
                    return T.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: { "text script": function() {} },
                        dataFilter: function(e) {
                            T.globalEval(e, t, n);
                        },
                    });
                }),
                T.fn.extend({
                    wrapAll: function(e) {
                        var t;
                        return (
                            this[0] &&
                            (y(e) && (e = e.call(this[0])),
                                (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                                this[0].parentNode && t.insertBefore(this[0]),
                                t
                                .map(function() {
                                    for (var e = this; e.firstElementChild;)
                                        e = e.firstElementChild;
                                    return e;
                                })
                                .append(this)),
                            this
                        );
                    },
                    wrapInner: function(e) {
                        return y(e) ?
                            this.each(function(t) {
                                T(this).wrapInner(e.call(this, t));
                            }) :
                            this.each(function() {
                                var t = T(this),
                                    n = t.contents();
                                n.length ? n.wrapAll(e) : t.append(e);
                            });
                    },
                    wrap: function(e) {
                        var t = y(e);
                        return this.each(function(n) {
                            T(this).wrapAll(t ? e.call(this, n) : e);
                        });
                    },
                    unwrap: function(e) {
                        return (
                            this.parent(e)
                            .not("body")
                            .each(function() {
                                T(this).replaceWith(this.childNodes);
                            }),
                            this
                        );
                    },
                }),
                (T.expr.pseudos.hidden = function(e) {
                    return !T.expr.pseudos.visible(e);
                }),
                (T.expr.pseudos.visible = function(e) {
                    return !!(
                        e.offsetWidth ||
                        e.offsetHeight ||
                        e.getClientRects().length
                    );
                }),
                (T.ajaxSettings.xhr = function() {
                    try {
                        return new n.XMLHttpRequest();
                    } catch (e) {}
                });
            var Ut = { 0: 200, 1223: 204 },
                Xt = T.ajaxSettings.xhr();
            (g.cors = !!Xt && "withCredentials" in Xt),
            (g.ajax = Xt = !!Xt),
            T.ajaxTransport(function(e) {
                    var t, i;
                    if (g.cors || (Xt && !e.crossDomain))
                        return {
                            send: function(o, r) {
                                var s,
                                    a = e.xhr();
                                if (
                                    (a.open(e.type, e.url, e.async, e.username, e.password),
                                        e.xhrFields)
                                )
                                    for (s in e.xhrFields) a[s] = e.xhrFields[s];
                                for (s in (e.mimeType &&
                                        a.overrideMimeType &&
                                        a.overrideMimeType(e.mimeType),
                                        e.crossDomain ||
                                        o["X-Requested-With"] ||
                                        (o["X-Requested-With"] = "XMLHttpRequest"),
                                        o))
                                    a.setRequestHeader(s, o[s]);
                                (t = function(e) {
                                    return function() {
                                        t &&
                                            ((t = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                                                "abort" === e ?
                                                a.abort() :
                                                "error" === e ?
                                                "number" != typeof a.status ?
                                                r(0, "error") :
                                                r(a.status, a.statusText) :
                                                r(
                                                    Ut[a.status] || a.status,
                                                    a.statusText,
                                                    "text" !== (a.responseType || "text") ||
                                                    "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText },
                                                    a.getAllResponseHeaders()
                                                ));
                                    };
                                }),
                                (a.onload = t()),
                                (i = a.onerror = a.ontimeout = t("error")),
                                void 0 !== a.onabort ?
                                    (a.onabort = i) :
                                    (a.onreadystatechange = function() {
                                        4 === a.readyState &&
                                            n.setTimeout(function() {
                                                t && i();
                                            });
                                    }),
                                    (t = t("abort"));
                                try {
                                    a.send((e.hasContent && e.data) || null);
                                } catch (e) {
                                    if (t) throw e;
                                }
                            },
                            abort: function() {
                                t && t();
                            },
                        };
                }),
                T.ajaxPrefilter(function(e) {
                    e.crossDomain && (e.contents.script = !1);
                }),
                T.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                    },
                    contents: { script: /\b(?:java|ecma)script\b/ },
                    converters: {
                        "text script": function(e) {
                            return T.globalEval(e), e;
                        },
                    },
                }),
                T.ajaxPrefilter("script", function(e) {
                    void 0 === e.cache && (e.cache = !1),
                        e.crossDomain && (e.type = "GET");
                }),
                T.ajaxTransport("script", function(e) {
                    var t, n;
                    if (e.crossDomain || e.scriptAttrs)
                        return {
                            send: function(i, o) {
                                (t = T("<script>")
                                    .attr(e.scriptAttrs || {})
                                    .prop({ charset: e.scriptCharset, src: e.url })
                                    .on(
                                        "load error",
                                        (n = function(e) {
                                            t.remove(),
                                                (n = null),
                                                e && o("error" === e.type ? 404 : 200, e.type);
                                        })
                                    )),
                                w.head.appendChild(t[0]);
                            },
                            abort: function() {
                                n && n();
                            },
                        };
                });
            var Yt,
                Vt = [],
                Gt = /(=)\?(?=&|$)|\?\?/;
            T.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var e = Vt.pop() || T.expando + "_" + Ct.guid++;
                        return (this[e] = !0), e;
                    },
                }),
                T.ajaxPrefilter("json jsonp", function(e, t, i) {
                    var o,
                        r,
                        s,
                        a = !1 !== e.jsonp &&
                        (Gt.test(e.url) ?
                            "url" :
                            "string" == typeof e.data &&
                            0 ===
                            (e.contentType || "").indexOf(
                                "application/x-www-form-urlencoded"
                            ) &&
                            Gt.test(e.data) &&
                            "data");
                    if (a || "jsonp" === e.dataTypes[0])
                        return (
                            (o = e.jsonpCallback = y(e.jsonpCallback) ?
                                e.jsonpCallback() :
                                e.jsonpCallback),
                            a ?
                            (e[a] = e[a].replace(Gt, "$1" + o)) :
                            !1 !== e.jsonp &&
                            (e.url += ($t.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                            (e.converters["script json"] = function() {
                                return s || T.error(o + " was not called"), s[0];
                            }),
                            (e.dataTypes[0] = "json"),
                            (r = n[o]),
                            (n[o] = function() {
                                s = arguments;
                            }),
                            i.always(function() {
                                void 0 === r ? T(n).removeProp(o) : (n[o] = r),
                                    e[o] && ((e.jsonpCallback = t.jsonpCallback), Vt.push(o)),
                                    s && y(r) && r(s[0]),
                                    (s = r = void 0);
                            }),
                            "script"
                        );
                }),
                (g.createHTMLDocument =
                    (((Yt = w.implementation.createHTMLDocument("").body).innerHTML =
                            "<form></form><form></form>"),
                        2 === Yt.childNodes.length)),
                (T.parseHTML = function(e, t, n) {
                    return "string" != typeof e ? [] :
                        ("boolean" == typeof t && ((n = t), (t = !1)),
                            t ||
                            (g.createHTMLDocument ?
                                (((i = (t = w.implementation.createHTMLDocument(
                                        ""
                                    )).createElement("base")).href = w.location.href),
                                    t.head.appendChild(i)) :
                                (t = w)),
                            (r = !n && []),
                            (o = D.exec(e)) ? [t.createElement(o[1])] :
                            ((o = ke([e], t, r)),
                                r && r.length && T(r).remove(),
                                T.merge([], o.childNodes)));
                    var i, o, r;
                }),
                (T.fn.load = function(e, t, n) {
                    var i,
                        o,
                        r,
                        s = this,
                        a = e.indexOf(" ");
                    return (
                        a > -1 && ((i = mt(e.slice(a))), (e = e.slice(0, a))),
                        y(t) ?
                        ((n = t), (t = void 0)) :
                        t && "object" == typeof t && (o = "POST"),
                        s.length > 0 &&
                        T.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                        .done(function(e) {
                            (r = arguments),
                            s.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e);
                        })
                        .always(
                            n &&
                            function(e, t) {
                                s.each(function() {
                                    n.apply(this, r || [e.responseText, t, e]);
                                });
                            }
                        ),
                        this
                    );
                }),
                (T.expr.pseudos.animated = function(e) {
                    return T.grep(T.timers, function(t) {
                        return e === t.elem;
                    }).length;
                }),
                (T.offset = {
                    setOffset: function(e, t, n) {
                        var i,
                            o,
                            r,
                            s,
                            a,
                            l,
                            c = T.css(e, "position"),
                            d = T(e),
                            u = {};
                        "static" === c && (e.style.position = "relative"),
                            (a = d.offset()),
                            (r = T.css(e, "top")),
                            (l = T.css(e, "left")),
                            ("absolute" === c || "fixed" === c) &&
                            (r + l).indexOf("auto") > -1 ?
                            ((s = (i = d.position()).top), (o = i.left)) :
                            ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
                            y(t) && (t = t.call(e, n, T.extend({}, a))),
                            null != t.top && (u.top = t.top - a.top + s),
                            null != t.left && (u.left = t.left - a.left + o),
                            "using" in t ?
                            t.using.call(e, u) :
                            ("number" == typeof u.top && (u.top += "px"),
                                "number" == typeof u.left && (u.left += "px"),
                                d.css(u));
                    },
                }),
                T.fn.extend({
                    offset: function(e) {
                        if (arguments.length)
                            return void 0 === e ?
                                this :
                                this.each(function(t) {
                                    T.offset.setOffset(this, e, t);
                                });
                        var t,
                            n,
                            i = this[0];
                        return i ?
                            i.getClientRects().length ?
                            ((t = i.getBoundingClientRect()),
                                (n = i.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } :
                            void 0;
                    },
                    position: function() {
                        if (this[0]) {
                            var e,
                                t,
                                n,
                                i = this[0],
                                o = { top: 0, left: 0 };
                            if ("fixed" === T.css(i, "position"))
                                t = i.getBoundingClientRect();
                            else {
                                for (
                                    t = this.offset(),
                                    n = i.ownerDocument,
                                    e = i.offsetParent || n.documentElement; e &&
                                    (e === n.body || e === n.documentElement) &&
                                    "static" === T.css(e, "position");

                                )
                                    e = e.parentNode;
                                e &&
                                    e !== i &&
                                    1 === e.nodeType &&
                                    (((o = T(e).offset()).top += T.css(e, "borderTopWidth", !0)),
                                        (o.left += T.css(e, "borderLeftWidth", !0)));
                            }
                            return {
                                top: t.top - o.top - T.css(i, "marginTop", !0),
                                left: t.left - o.left - T.css(i, "marginLeft", !0),
                            };
                        }
                    },
                    offsetParent: function() {
                        return this.map(function() {
                            for (
                                var e = this.offsetParent; e && "static" === T.css(e, "position");

                            )
                                e = e.offsetParent;
                            return e || re;
                        });
                    },
                }),
                T.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
                    function(e, t) {
                        var n = "pageYOffset" === t;
                        T.fn[e] = function(i) {
                            return B(
                                this,
                                function(e, i, o) {
                                    var r;
                                    if (
                                        (m(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                                            void 0 === o)
                                    )
                                        return r ? r[t] : e[i];
                                    r
                                        ?
                                        r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) :
                                        (e[i] = o);
                                },
                                e,
                                i,
                                arguments.length
                            );
                        };
                    }
                ),
                T.each(["top", "left"], function(e, t) {
                    T.cssHooks[t] = Xe(g.pixelPosition, function(e, n) {
                        if (n)
                            return (n = Ue(e, t)), Re.test(n) ? T(e).position()[t] + "px" : n;
                    });
                }),
                T.each({ Height: "height", Width: "width" }, function(e, t) {
                    T.each({ padding: "inner" + e, content: t, "": "outer" + e },
                        function(n, i) {
                            T.fn[i] = function(o, r) {
                                var s = arguments.length && (n || "boolean" != typeof o),
                                    a = n || (!0 === o || !0 === r ? "margin" : "border");
                                return B(
                                    this,
                                    function(t, n, o) {
                                        var r;
                                        return m(t) ?
                                            0 === i.indexOf("outer") ?
                                            t["inner" + e] :
                                            t.document.documentElement["client" + e] :
                                            9 === t.nodeType ?
                                            ((r = t.documentElement),
                                                Math.max(
                                                    t.body["scroll" + e],
                                                    r["scroll" + e],
                                                    t.body["offset" + e],
                                                    r["offset" + e],
                                                    r["client" + e]
                                                )) :
                                            void 0 === o ?
                                            T.css(t, n, a) :
                                            T.style(t, n, o, a);
                                    },
                                    t,
                                    s ? o : void 0,
                                    s
                                );
                            };
                        }
                    );
                }),
                T.each(
                    [
                        "ajaxStart",
                        "ajaxStop",
                        "ajaxComplete",
                        "ajaxError",
                        "ajaxSuccess",
                        "ajaxSend",
                    ],
                    function(e, t) {
                        T.fn[t] = function(e) {
                            return this.on(t, e);
                        };
                    }
                ),
                T.fn.extend({
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n);
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t);
                    },
                    delegate: function(e, t, n, i) {
                        return this.on(t, e, n, i);
                    },
                    undelegate: function(e, t, n) {
                        return 1 === arguments.length ?
                            this.off(e, "**") :
                            this.off(t, e || "**", n);
                    },
                    hover: function(e, t) {
                        return this.mouseenter(e).mouseleave(t || e);
                    },
                }),
                T.each(
                    "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                        " "
                    ),
                    function(e, t) {
                        T.fn[t] = function(e, n) {
                            return arguments.length > 0 ?
                                this.on(t, null, e, n) :
                                this.trigger(t);
                        };
                    }
                );
            var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            (T.proxy = function(e, t) {
                var n, i, o;
                if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
                    return (
                        (i = a.call(arguments, 2)),
                        ((o = function() {
                            return e.apply(t || this, i.concat(a.call(arguments)));
                        }).guid = e.guid = e.guid || T.guid++),
                        o
                    );
            }),
            (T.holdReady = function(e) {
                e ? T.readyWait++ : T.ready(!0);
            }),
            (T.isArray = Array.isArray),
            (T.parseJSON = JSON.parse),
            (T.nodeName = j),
            (T.isFunction = y),
            (T.isWindow = m),
            (T.camelCase = V),
            (T.type = k),
            (T.now = Date.now),
            (T.isNumeric = function(e) {
                var t = T.type(e);
                return (
                    ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                );
            }),
            (T.trim = function(e) {
                return null == e ? "" : (e + "").replace(Qt, "");
            }),
            void 0 ===
                (i = function() {
                    return T;
                }.apply(t, [])) || (e.exports = i);
            var Jt = n.jQuery,
                Kt = n.$;
            return (
                (T.noConflict = function(e) {
                    return (
                        n.$ === T && (n.$ = Kt), e && n.jQuery === T && (n.jQuery = Jt), T
                    );
                }),
                void 0 === o && (n.jQuery = n.$ = T),
                T
            );
        });
    },
    function(e, t, n) {
        "use strict";
        var i,
            o = function() {
                return (
                    void 0 === i &&
                    (i = Boolean(window && document && document.all && !window.atob)),
                    i
                );
            },
            r = (function() {
                var e = {};
                return function(t) {
                    if (void 0 === e[t]) {
                        var n = document.querySelector(t);
                        if (
                            window.HTMLIFrameElement &&
                            n instanceof window.HTMLIFrameElement
                        )
                            try {
                                n = n.contentDocument.head;
                            } catch (e) {
                                n = null;
                            }
                        e[t] = n;
                    }
                    return e[t];
                };
            })(),
            s = [];

        function a(e) {
            for (var t = -1, n = 0; n < s.length; n++)
                if (s[n].identifier === e) {
                    t = n;
                    break;
                }
            return t;
        }

        function l(e, t) {
            for (var n = {}, i = [], o = 0; o < e.length; o++) {
                var r = e[o],
                    l = t.base ? r[0] + t.base : r[0],
                    c = n[l] || 0,
                    d = "".concat(l, " ").concat(c);
                n[l] = c + 1;
                var u = a(d),
                    p = { css: r[1], media: r[2], sourceMap: r[3] }; -
                1 !== u ?
                    (s[u].references++, s[u].updater(p)) :
                    s.push({ identifier: d, updater: g(p, t), references: 1 }),
                    i.push(d);
            }
            return i;
        }

        function c(e) {
            var t = document.createElement("style"),
                i = e.attributes || {};
            if (void 0 === i.nonce) {
                var o = n.nc;
                o && (i.nonce = o);
            }
            if (
                (Object.keys(i).forEach(function(e) {
                        t.setAttribute(e, i[e]);
                    }),
                    "function" == typeof e.insert)
            )
                e.insert(t);
            else {
                var s = r(e.insert || "head");
                if (!s)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                s.appendChild(t);
            }
            return t;
        }
        var d,
            u =
            ((d = []),
                function(e, t) {
                    return (d[e] = t), d.filter(Boolean).join("\n");
                });

        function p(e, t, n, i) {
            var o = n ?
                "" :
                i.media ?
                "@media ".concat(i.media, " {").concat(i.css, "}") :
                i.css;
            if (e.styleSheet) e.styleSheet.cssText = u(t, o);
            else {
                var r = document.createTextNode(o),
                    s = e.childNodes;
                s[t] && e.removeChild(s[t]),
                    s.length ? e.insertBefore(r, s[t]) : e.appendChild(r);
            }
        }

        function f(e, t, n) {
            var i = n.css,
                o = n.media,
                r = n.sourceMap;
            if (
                (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
                    r &&
                    btoa &&
                    (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                        " */"
                    )),
                    e.styleSheet)
            )
                e.styleSheet.cssText = i;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(i));
            }
        }
        var h = null,
            v = 0;

        function g(e, t) {
            var n, i, o;
            if (t.singleton) {
                var r = v++;
                (n = h || (h = c(t))),
                (i = p.bind(null, n, r, !1)),
                (o = p.bind(null, n, r, !0));
            } else
                (n = c(t)),
                (i = f.bind(null, n, t)),
                (o = function() {
                    !(function(e) {
                        if (null === e.parentNode) return !1;
                        e.parentNode.removeChild(e);
                    })(n);
                });
            return (
                i(e),
                function(t) {
                    if (t) {
                        if (
                            t.css === e.css &&
                            t.media === e.media &&
                            t.sourceMap === e.sourceMap
                        )
                            return;
                        i((e = t));
                    } else o();
                }
            );
        }
        e.exports = function(e, t) {
            (t = t || {}).singleton ||
                "boolean" == typeof t.singleton ||
                (t.singleton = o());
            var n = l((e = e || []), t);
            return function(e) {
                if (
                    ((e = e || []),
                        "[object Array]" === Object.prototype.toString.call(e))
                ) {
                    for (var i = 0; i < n.length; i++) {
                        var o = a(n[i]);
                        s[o].references--;
                    }
                    for (var r = l(e, t), c = 0; c < n.length; c++) {
                        var d = a(n[c]);
                        0 === s[d].references && (s[d].updater(), s.splice(d, 1));
                    }
                    n = r;
                }
            };
        };
    },
    function(e, t) {
        !(function() {
            "use strict";
            var e,
                t = document.querySelector(".up_down_btn");
            window.addEventListener("scroll", function() {
                    var n = window.pageYOffset;
                    n > 200 &&
                        (t.classList.add("up_down_btn-show"),
                            (t.innerHTML = "<span></span>"),
                            t.setAttribute("title", "Наверх"),
                            (e = !1)),
                        n < 200 && ((t.innerHTML = "<p></p>"), (e = !0));
                }),
                t.addEventListener("click", function() {
                    t.classList.add("up_down_btn-disabled"),
                        e ?
                        e &&
                        (function e() {
                            Math.ceil(
                                    window.pageYOffset + document.documentElement.clientHeight
                                ) != document.documentElement.scrollHeight ?
                                (window.scrollBy(0, 15), setTimeout(e, 0)) :
                                t.classList.remove("up_down_btn-disabled");
                        })() :
                        (function e() {
                            0 !== window.pageYOffset ?
                                (window.scrollBy(0, -15), setTimeout(e, 0)) :
                                t.classList.remove("up_down_btn-disabled");
                        })();
                });
        })();
    },
    function(e, t, n) {
        var i, o, r;

        function s(e) {
            return (s =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

                function(e) {
                    return typeof e;
                } :
                function(e) {
                    return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype ?
                        "symbol" :
                        typeof e;
                })(e);
        }!(function(a) {
            "use strict";
            (o = [n(0)]),
            void 0 ===
                (r =
                    "function" ==
                    typeof(i = function(e) {
                        var t = window.Slick || {};
                        (((n = 0),
                            (t = function(t, i) {
                                var o,
                                    r = this;
                                (r.defaults = {
                                    accessibility: !0,
                                    adaptiveHeight: !1,
                                    appendArrows: e(t),
                                    appendDots: e(t),
                                    arrows: !0,
                                    asNavFor: null,
                                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                                    autoplay: !1,
                                    autoplaySpeed: 3e3,
                                    centerMode: !1,
                                    centerPadding: "50px",
                                    cssEase: "ease",
                                    customPaging: function(t, n) {
                                        return e('<button type="button" />').text(n + 1);
                                    },
                                    dots: !1,
                                    dotsClass: "slick-dots",
                                    draggable: !0,
                                    easing: "linear",
                                    edgeFriction: 0.35,
                                    fade: !1,
                                    focusOnSelect: !1,
                                    focusOnChange: !1,
                                    infinite: !0,
                                    initialSlide: 0,
                                    lazyLoad: "ondemand",
                                    mobileFirst: !1,
                                    pauseOnHover: !0,
                                    pauseOnFocus: !0,
                                    pauseOnDotsHover: !1,
                                    respondTo: "window",
                                    responsive: null,
                                    rows: 1,
                                    rtl: !1,
                                    slide: "",
                                    slidesPerRow: 1,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    speed: 500,
                                    swipe: !0,
                                    swipeToSlide: !1,
                                    touchMove: !0,
                                    touchThreshold: 5,
                                    useCSS: !0,
                                    useTransform: !0,
                                    variableWidth: !1,
                                    vertical: !1,
                                    verticalSwiping: !1,
                                    waitForAnimate: !0,
                                    zIndex: 1e3,
                                }),
                                (r.initials = {
                                    animating: !1,
                                    dragging: !1,
                                    autoPlayTimer: null,
                                    currentDirection: 0,
                                    currentLeft: null,
                                    currentSlide: 0,
                                    direction: 1,
                                    $dots: null,
                                    listWidth: null,
                                    listHeight: null,
                                    loadIndex: 0,
                                    $nextArrow: null,
                                    $prevArrow: null,
                                    scrolling: !1,
                                    slideCount: null,
                                    slideWidth: null,
                                    $slideTrack: null,
                                    $slides: null,
                                    sliding: !1,
                                    slideOffset: 0,
                                    swipeLeft: null,
                                    swiping: !1,
                                    $list: null,
                                    touchObject: {},
                                    transformsEnabled: !1,
                                    unslicked: !1,
                                }),
                                e.extend(r, r.initials),
                                    (r.activeBreakpoint = null),
                                    (r.animType = null),
                                    (r.animProp = null),
                                    (r.breakpoints = []),
                                    (r.breakpointSettings = []),
                                    (r.cssTransitions = !1),
                                    (r.focussed = !1),
                                    (r.interrupted = !1),
                                    (r.hidden = "hidden"),
                                    (r.paused = !0),
                                    (r.positionProp = null),
                                    (r.respondTo = null),
                                    (r.rowCount = 1),
                                    (r.shouldClick = !0),
                                    (r.$slider = e(t)),
                                    (r.$slidesCache = null),
                                    (r.transformType = null),
                                    (r.transitionType = null),
                                    (r.visibilityChange = "visibilitychange"),
                                    (r.windowWidth = 0),
                                    (r.windowTimer = null),
                                    (o = e(t).data("slick") || {}),
                                    (r.options = e.extend({}, r.defaults, i, o)),
                                    (r.currentSlide = r.options.initialSlide),
                                    (r.originalSettings = r.options),
                                    void 0 !== document.mozHidden ?
                                    ((r.hidden = "mozHidden"),
                                        (r.visibilityChange = "mozvisibilitychange")) :
                                    void 0 !== document.webkitHidden &&
                                    ((r.hidden = "webkitHidden"),
                                        (r.visibilityChange = "webkitvisibilitychange")),
                                    (r.autoPlay = e.proxy(r.autoPlay, r)),
                                    (r.autoPlayClear = e.proxy(r.autoPlayClear, r)),
                                    (r.autoPlayIterator = e.proxy(r.autoPlayIterator, r)),
                                    (r.changeSlide = e.proxy(r.changeSlide, r)),
                                    (r.clickHandler = e.proxy(r.clickHandler, r)),
                                    (r.selectHandler = e.proxy(r.selectHandler, r)),
                                    (r.setPosition = e.proxy(r.setPosition, r)),
                                    (r.swipeHandler = e.proxy(r.swipeHandler, r)),
                                    (r.dragHandler = e.proxy(r.dragHandler, r)),
                                    (r.keyHandler = e.proxy(r.keyHandler, r)),
                                    (r.instanceUid = n++),
                                    (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                                    r.registerBreakpoints(),
                                    r.init(!0);
                            })).prototype.activateADA = function() {
                            this.$slideTrack
                                .find(".slick-active")
                                .attr({ "aria-hidden": "false" })
                                .find("a, input, button, select")
                                .attr({ tabindex: "0" });
                        }),
                        (t.prototype.addSlide = t.prototype.slickAdd = function(
                            t,
                            n,
                            i
                        ) {
                            var o = this;
                            if ("boolean" == typeof n)(i = n), (n = null);
                            else if (n < 0 || n >= o.slideCount) return !1;
                            o.unload(),
                                "number" == typeof n ?
                                0 === n && 0 === o.$slides.length ?
                                e(t).appendTo(o.$slideTrack) :
                                i ?
                                e(t).insertBefore(o.$slides.eq(n)) :
                                e(t).insertAfter(o.$slides.eq(n)) :
                                !0 === i ?
                                e(t).prependTo(o.$slideTrack) :
                                e(t).appendTo(o.$slideTrack),
                                (o.$slides = o.$slideTrack.children(this.options.slide)),
                                o.$slideTrack.children(this.options.slide).detach(),
                                o.$slideTrack.append(o.$slides),
                                o.$slides.each(function(t, n) {
                                    e(n).attr("data-slick-index", t);
                                }),
                                (o.$slidesCache = o.$slides),
                                o.reinit();
                        }),
                        (t.prototype.animateHeight = function() {
                            var e = this;
                            if (
                                1 === e.options.slidesToShow &&
                                !0 === e.options.adaptiveHeight &&
                                !1 === e.options.vertical
                            ) {
                                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                                e.$list.animate({ height: t }, e.options.speed);
                            }
                        }),
                        (t.prototype.animateSlide = function(t, n) {
                            var i = {},
                                o = this;
                            o.animateHeight(), !0 === o.options.rtl &&
                                !1 === o.options.vertical &&
                                (t = -t), !1 === o.transformsEnabled ?
                                !1 === o.options.vertical ?
                                o.$slideTrack.animate({ left: t },
                                    o.options.speed,
                                    o.options.easing,
                                    n
                                ) :
                                o.$slideTrack.animate({ top: t },
                                    o.options.speed,
                                    o.options.easing,
                                    n
                                ) :
                                !1 === o.cssTransitions ?
                                (!0 === o.options.rtl &&
                                    (o.currentLeft = -o.currentLeft),
                                    e({ animStart: o.currentLeft }).animate({ animStart: t }, {
                                        duration: o.options.speed,
                                        easing: o.options.easing,
                                        step: function(e) {
                                            (e = Math.ceil(e)), !1 === o.options.vertical ?
                                                ((i[o.animType] =
                                                        "translate(" + e + "px, 0px)"),
                                                    o.$slideTrack.css(i)) :
                                                ((i[o.animType] =
                                                        "translate(0px," + e + "px)"),
                                                    o.$slideTrack.css(i));
                                        },
                                        complete: function() {
                                            n && n.call();
                                        },
                                    })) :
                                (o.applyTransition(),
                                    (t = Math.ceil(t)), !1 === o.options.vertical ?
                                    (i[o.animType] =
                                        "translate3d(" + t + "px, 0px, 0px)") :
                                    (i[o.animType] =
                                        "translate3d(0px," + t + "px, 0px)"),
                                    o.$slideTrack.css(i),
                                    n &&
                                    setTimeout(function() {
                                        o.disableTransition(), n.call();
                                    }, o.options.speed));
                        }),
                        (t.prototype.getNavTarget = function() {
                            var t = this.options.asNavFor;
                            return t && null !== t && (t = e(t).not(this.$slider)), t;
                        }),
                        (t.prototype.asNavFor = function(t) {
                            var n = this.getNavTarget();
                            null !== n &&
                                "object" === s(n) &&
                                n.each(function() {
                                    var n = e(this).slick("getSlick");
                                    n.unslicked || n.slideHandler(t, !0);
                                });
                        }),
                        (t.prototype.applyTransition = function(e) {
                            var t = this,
                                n = {};
                            !1 === t.options.fade ?
                                (n[t.transitionType] =
                                    t.transformType +
                                    " " +
                                    t.options.speed +
                                    "ms " +
                                    t.options.cssEase) :
                                (n[t.transitionType] =
                                    "opacity " +
                                    t.options.speed +
                                    "ms " +
                                    t.options.cssEase), !1 === t.options.fade ?
                                t.$slideTrack.css(n) :
                                t.$slides.eq(e).css(n);
                        }),
                        (t.prototype.autoPlay = function() {
                            var e = this;
                            e.autoPlayClear(),
                                e.slideCount > e.options.slidesToShow &&
                                (e.autoPlayTimer = setInterval(
                                    e.autoPlayIterator,
                                    e.options.autoplaySpeed
                                ));
                        }),
                        (t.prototype.autoPlayClear = function() {
                            this.autoPlayTimer && clearInterval(this.autoPlayTimer);
                        }),
                        (t.prototype.autoPlayIterator = function() {
                            var e = this,
                                t = e.currentSlide + e.options.slidesToScroll;
                            e.paused ||
                                e.interrupted ||
                                e.focussed ||
                                (!1 === e.options.infinite &&
                                    (1 === e.direction &&
                                        e.currentSlide + 1 === e.slideCount - 1 ?
                                        (e.direction = 0) :
                                        0 === e.direction &&
                                        ((t = e.currentSlide - e.options.slidesToScroll),
                                            e.currentSlide - 1 == 0 && (e.direction = 1))),
                                    e.slideHandler(t));
                        }),
                        (t.prototype.buildArrows = function() {
                            var t = this;
                            !0 === t.options.arrows &&
                                ((t.$prevArrow = e(t.options.prevArrow).addClass(
                                        "slick-arrow"
                                    )),
                                    (t.$nextArrow = e(t.options.nextArrow).addClass(
                                        "slick-arrow"
                                    )),
                                    t.slideCount > t.options.slidesToShow ?
                                    (t.$prevArrow
                                        .removeClass("slick-hidden")
                                        .removeAttr("aria-hidden tabindex"),
                                        t.$nextArrow
                                        .removeClass("slick-hidden")
                                        .removeAttr("aria-hidden tabindex"),
                                        t.htmlExpr.test(t.options.prevArrow) &&
                                        t.$prevArrow.prependTo(t.options.appendArrows),
                                        t.htmlExpr.test(t.options.nextArrow) &&
                                        t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite &&
                                        t.$prevArrow
                                        .addClass("slick-disabled")
                                        .attr("aria-disabled", "true")) :
                                    t.$prevArrow
                                    .add(t.$nextArrow)
                                    .addClass("slick-hidden")
                                    .attr({ "aria-disabled": "true", tabindex: "-1" }));
                        }),
                        (t.prototype.buildDots = function() {
                            var t,
                                n,
                                i = this;
                            if (!0 === i.options.dots &&
                                i.slideCount > i.options.slidesToShow
                            ) {
                                for (
                                    i.$slider.addClass("slick-dotted"),
                                    n = e("<ul />").addClass(i.options.dotsClass),
                                    t = 0; t <= i.getDotCount(); t += 1
                                )
                                    n.append(
                                        e("<li />").append(
                                            i.options.customPaging.call(this, i, t)
                                        )
                                    );
                                (i.$dots = n.appendTo(i.options.appendDots)),
                                i.$dots.find("li").first().addClass("slick-active");
                            }
                        }),
                        (t.prototype.buildOut = function() {
                            var t = this;
                            (t.$slides = t.$slider
                                .children(t.options.slide + ":not(.slick-cloned)")
                                .addClass("slick-slide")),
                            (t.slideCount = t.$slides.length),
                            t.$slides.each(function(t, n) {
                                    e(n)
                                        .attr("data-slick-index", t)
                                        .data("originalStyling", e(n).attr("style") || "");
                                }),
                                t.$slider.addClass("slick-slider"),
                                (t.$slideTrack =
                                    0 === t.slideCount ?
                                    e('<div class="slick-track"/>').appendTo(t.$slider) :
                                    t.$slides
                                    .wrapAll('<div class="slick-track"/>')
                                    .parent()),
                                (t.$list = t.$slideTrack
                                    .wrap('<div class="slick-list"/>')
                                    .parent()),
                                t.$slideTrack.css("opacity", 0),
                                (!0 !== t.options.centerMode &&
                                    !0 !== t.options.swipeToSlide) ||
                                (t.options.slidesToScroll = 1),
                                e("img[data-lazy]", t.$slider)
                                .not("[src]")
                                .addClass("slick-loading"),
                                t.setupInfinite(),
                                t.buildArrows(),
                                t.buildDots(),
                                t.updateDots(),
                                t.setSlideClasses(
                                    "number" == typeof t.currentSlide ? t.currentSlide : 0
                                ), !0 === t.options.draggable && t.$list.addClass("draggable");
                        }),
                        (t.prototype.buildRows = function() {
                            var e,
                                t,
                                n,
                                i,
                                o,
                                r,
                                s,
                                a = this;
                            if (
                                ((i = document.createDocumentFragment()),
                                    (r = a.$slider.children()),
                                    a.options.rows > 0)
                            ) {
                                for (
                                    s = a.options.slidesPerRow * a.options.rows,
                                    o = Math.ceil(r.length / s),
                                    e = 0; e < o; e++
                                ) {
                                    var l = document.createElement("div");
                                    for (t = 0; t < a.options.rows; t++) {
                                        var c = document.createElement("div");
                                        for (n = 0; n < a.options.slidesPerRow; n++) {
                                            var d = e * s + (t * a.options.slidesPerRow + n);
                                            r.get(d) && c.appendChild(r.get(d));
                                        }
                                        l.appendChild(c);
                                    }
                                    i.appendChild(l);
                                }
                                a.$slider.empty().append(i),
                                    a.$slider
                                    .children()
                                    .children()
                                    .children()
                                    .css({
                                        width: 100 / a.options.slidesPerRow + "%",
                                        display: "inline-block",
                                    });
                            }
                        }),
                        (t.prototype.checkResponsive = function(t, n) {
                            var i,
                                o,
                                r,
                                s = this,
                                a = !1,
                                l = s.$slider.width(),
                                c = window.innerWidth || e(window).width();
                            if (
                                ("window" === s.respondTo ?
                                    (r = c) :
                                    "slider" === s.respondTo ?
                                    (r = l) :
                                    "min" === s.respondTo && (r = Math.min(c, l)),
                                    s.options.responsive &&
                                    s.options.responsive.length &&
                                    null !== s.options.responsive)
                            ) {
                                for (i in ((o = null), s.breakpoints))
                                    s.breakpoints.hasOwnProperty(i) &&
                                    (!1 === s.originalSettings.mobileFirst ?
                                        r < s.breakpoints[i] && (o = s.breakpoints[i]) :
                                        r > s.breakpoints[i] && (o = s.breakpoints[i]));
                                null !== o ?
                                    null !== s.activeBreakpoint ?
                                    (o !== s.activeBreakpoint || n) &&
                                    ((s.activeBreakpoint = o),
                                        "unslick" === s.breakpointSettings[o] ?
                                        s.unslick(o) :
                                        ((s.options = e.extend({},
                                                s.originalSettings,
                                                s.breakpointSettings[o]
                                            )), !0 === t &&
                                            (s.currentSlide = s.options.initialSlide),
                                            s.refresh(t)),
                                        (a = o)) :
                                    ((s.activeBreakpoint = o),
                                        "unslick" === s.breakpointSettings[o] ?
                                        s.unslick(o) :
                                        ((s.options = e.extend({},
                                                s.originalSettings,
                                                s.breakpointSettings[o]
                                            )), !0 === t &&
                                            (s.currentSlide = s.options.initialSlide),
                                            s.refresh(t)),
                                        (a = o)) :
                                    null !== s.activeBreakpoint &&
                                    ((s.activeBreakpoint = null),
                                        (s.options = s.originalSettings), !0 === t && (s.currentSlide = s.options.initialSlide),
                                        s.refresh(t),
                                        (a = o)),
                                    t || !1 === a || s.$slider.trigger("breakpoint", [s, a]);
                            }
                        }),
                        (t.prototype.changeSlide = function(t, n) {
                            var i,
                                o,
                                r = this,
                                s = e(t.currentTarget);
                            switch (
                                (s.is("a") && t.preventDefault(),
                                    s.is("li") || (s = s.closest("li")),
                                    (i =
                                        r.slideCount % r.options.slidesToScroll != 0 ?
                                        0 :
                                        (r.slideCount - r.currentSlide) %
                                        r.options.slidesToScroll),
                                    t.data.message)
                            ) {
                                case "previous":
                                    (o =
                                        0 === i ?
                                        r.options.slidesToScroll :
                                        r.options.slidesToShow - i),
                                    r.slideCount > r.options.slidesToShow &&
                                        r.slideHandler(r.currentSlide - o, !1, n);
                                    break;
                                case "next":
                                    (o = 0 === i ? r.options.slidesToScroll : i),
                                    r.slideCount > r.options.slidesToShow &&
                                        r.slideHandler(r.currentSlide + o, !1, n);
                                    break;
                                case "index":
                                    var a =
                                        0 === t.data.index ?
                                        0 :
                                        t.data.index ||
                                        s.index() * r.options.slidesToScroll;
                                    r.slideHandler(r.checkNavigable(a), !1, n),
                                        s.children().trigger("focus");
                                    break;
                                default:
                                    return;
                            }
                        }),
                        (t.prototype.checkNavigable = function(e) {
                            var t, n;
                            if (
                                ((n = 0),
                                    e > (t = this.getNavigableIndexes())[t.length - 1])
                            )
                                e = t[t.length - 1];
                            else
                                for (var i in t) {
                                    if (e < t[i]) {
                                        e = n;
                                        break;
                                    }
                                    n = t[i];
                                }
                            return e;
                        }),
                        (t.prototype.cleanUpEvents = function() {
                            var t = this;
                            t.options.dots &&
                                null !== t.$dots &&
                                (e("li", t.$dots)
                                    .off("click.slick", t.changeSlide)
                                    .off("mouseenter.slick", e.proxy(t.interrupt, t, !0))
                                    .off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility &&
                                    t.$dots.off("keydown.slick", t.keyHandler)),
                                t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows &&
                                t.slideCount > t.options.slidesToShow &&
                                (t.$prevArrow &&
                                    t.$prevArrow.off("click.slick", t.changeSlide),
                                    t.$nextArrow &&
                                    t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility &&
                                    (t.$prevArrow &&
                                        t.$prevArrow.off("keydown.slick", t.keyHandler),
                                        t.$nextArrow &&
                                        t.$nextArrow.off("keydown.slick", t.keyHandler))),
                                t.$list.off(
                                    "touchstart.slick mousedown.slick",
                                    t.swipeHandler
                                ),
                                t.$list.off(
                                    "touchmove.slick mousemove.slick",
                                    t.swipeHandler
                                ),
                                t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
                                t.$list.off(
                                    "touchcancel.slick mouseleave.slick",
                                    t.swipeHandler
                                ),
                                t.$list.off("click.slick", t.clickHandler),
                                e(document).off(t.visibilityChange, t.visibility),
                                t.cleanUpSlideEvents(), !0 === t.options.accessibility &&
                                t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect &&
                                e(t.$slideTrack)
                                .children()
                                .off("click.slick", t.selectHandler),
                                e(window).off(
                                    "orientationchange.slick.slick-" + t.instanceUid,
                                    t.orientationChange
                                ),
                                e(window).off(
                                    "resize.slick.slick-" + t.instanceUid,
                                    t.resize
                                ),
                                e("[draggable!=true]", t.$slideTrack).off(
                                    "dragstart",
                                    t.preventDefault
                                ),
                                e(window).off(
                                    "load.slick.slick-" + t.instanceUid,
                                    t.setPosition
                                );
                        }),
                        (t.prototype.cleanUpSlideEvents = function() {
                            var t = this;
                            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
                                t.$list.off(
                                    "mouseleave.slick",
                                    e.proxy(t.interrupt, t, !1)
                                );
                        }),
                        (t.prototype.cleanUpRows = function() {
                            var e,
                                t = this;
                            t.options.rows > 0 &&
                                ((e = t.$slides.children().children()).removeAttr("style"),
                                    t.$slider.empty().append(e));
                        }),
                        (t.prototype.clickHandler = function(e) {
                            !1 === this.shouldClick &&
                                (e.stopImmediatePropagation(),
                                    e.stopPropagation(),
                                    e.preventDefault());
                        }),
                        (t.prototype.destroy = function(t) {
                            var n = this;
                            n.autoPlayClear(),
                                (n.touchObject = {}),
                                n.cleanUpEvents(),
                                e(".slick-cloned", n.$slider).detach(),
                                n.$dots && n.$dots.remove(),
                                n.$prevArrow &&
                                n.$prevArrow.length &&
                                (n.$prevArrow
                                    .removeClass("slick-disabled slick-arrow slick-hidden")
                                    .removeAttr("aria-hidden aria-disabled tabindex")
                                    .css("display", ""),
                                    n.htmlExpr.test(n.options.prevArrow) &&
                                    n.$prevArrow.remove()),
                                n.$nextArrow &&
                                n.$nextArrow.length &&
                                (n.$nextArrow
                                    .removeClass("slick-disabled slick-arrow slick-hidden")
                                    .removeAttr("aria-hidden aria-disabled tabindex")
                                    .css("display", ""),
                                    n.htmlExpr.test(n.options.nextArrow) &&
                                    n.$nextArrow.remove()),
                                n.$slides &&
                                (n.$slides
                                    .removeClass(
                                        "slick-slide slick-active slick-center slick-visible slick-current"
                                    )
                                    .removeAttr("aria-hidden")
                                    .removeAttr("data-slick-index")
                                    .each(function() {
                                        e(this).attr(
                                            "style",
                                            e(this).data("originalStyling")
                                        );
                                    }),
                                    n.$slideTrack.children(this.options.slide).detach(),
                                    n.$slideTrack.detach(),
                                    n.$list.detach(),
                                    n.$slider.append(n.$slides)),
                                n.cleanUpRows(),
                                n.$slider.removeClass("slick-slider"),
                                n.$slider.removeClass("slick-initialized"),
                                n.$slider.removeClass("slick-dotted"),
                                (n.unslicked = !0),
                                t || n.$slider.trigger("destroy", [n]);
                        }),
                        (t.prototype.disableTransition = function(e) {
                            var t = this,
                                n = {};
                            (n[t.transitionType] = ""), !1 === t.options.fade ?
                                t.$slideTrack.css(n) :
                                t.$slides.eq(e).css(n);
                        }),
                        (t.prototype.fadeSlide = function(e, t) {
                            var n = this;
                            !1 === n.cssTransitions ?
                                (n.$slides.eq(e).css({ zIndex: n.options.zIndex }),
                                    n.$slides
                                    .eq(e)
                                    .animate({ opacity: 1 },
                                        n.options.speed,
                                        n.options.easing,
                                        t
                                    )) :
                                (n.applyTransition(e),
                                    n.$slides
                                    .eq(e)
                                    .css({ opacity: 1, zIndex: n.options.zIndex }),
                                    t &&
                                    setTimeout(function() {
                                        n.disableTransition(e), t.call();
                                    }, n.options.speed));
                        }),
                        (t.prototype.fadeSlideOut = function(e) {
                            var t = this;
                            !1 === t.cssTransitions ?
                                t.$slides
                                .eq(e)
                                .animate({ opacity: 0, zIndex: t.options.zIndex - 2 },
                                    t.options.speed,
                                    t.options.easing
                                ) :
                                (t.applyTransition(e),
                                    t.$slides
                                    .eq(e)
                                    .css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
                        }),
                        (t.prototype.filterSlides = t.prototype.slickFilter = function(
                            e
                        ) {
                            var t = this;
                            null !== e &&
                                ((t.$slidesCache = t.$slides),
                                    t.unload(),
                                    t.$slideTrack.children(this.options.slide).detach(),
                                    t.$slidesCache.filter(e).appendTo(t.$slideTrack),
                                    t.reinit());
                        }),
                        (t.prototype.focusHandler = function() {
                            var t = this;
                            t.$slider
                                .off("focus.slick blur.slick")
                                .on("focus.slick blur.slick", "*", function(n) {
                                    n.stopImmediatePropagation();
                                    var i = e(this);
                                    setTimeout(function() {
                                        t.options.pauseOnFocus &&
                                            ((t.focussed = i.is(":focus")), t.autoPlay());
                                    }, 0);
                                });
                        }),
                        (t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
                            return this.currentSlide;
                        }),
                        (t.prototype.getDotCount = function() {
                            var e = this,
                                t = 0,
                                n = 0,
                                i = 0;
                            if (!0 === e.options.infinite)
                                if (e.slideCount <= e.options.slidesToShow) ++i;
                                else
                                    for (; t < e.slideCount;)
                                        ++i,
                                        (t = n + e.options.slidesToScroll),
                                        (n +=
                                            e.options.slidesToScroll <= e.options.slidesToShow ?
                                            e.options.slidesToScroll :
                                            e.options.slidesToShow);
                            else if (!0 === e.options.centerMode) i = e.slideCount;
                            else if (e.options.asNavFor)
                                for (; t < e.slideCount;)
                                    ++i,
                                    (t = n + e.options.slidesToScroll),
                                    (n +=
                                        e.options.slidesToScroll <= e.options.slidesToShow ?
                                        e.options.slidesToScroll :
                                        e.options.slidesToShow);
                            else
                                i =
                                1 +
                                Math.ceil(
                                    (e.slideCount - e.options.slidesToShow) /
                                    e.options.slidesToScroll
                                );
                            return i - 1;
                        }),
                        (t.prototype.getLeft = function(e) {
                            var t,
                                n,
                                i,
                                o,
                                r = this,
                                s = 0;
                            return (
                                (r.slideOffset = 0),
                                (n = r.$slides.first().outerHeight(!0)), !0 === r.options.infinite ?
                                (r.slideCount > r.options.slidesToShow &&
                                    ((r.slideOffset =
                                            r.slideWidth * r.options.slidesToShow * -1),
                                        (o = -1), !0 === r.options.vertical &&
                                        !0 === r.options.centerMode &&
                                        (2 === r.options.slidesToShow ?
                                            (o = -1.5) :
                                            1 === r.options.slidesToShow && (o = -2)),
                                        (s = n * r.options.slidesToShow * o)),
                                    r.slideCount % r.options.slidesToScroll != 0 &&
                                    e + r.options.slidesToScroll > r.slideCount &&
                                    r.slideCount > r.options.slidesToShow &&
                                    (e > r.slideCount ?
                                        ((r.slideOffset =
                                                (r.options.slidesToShow - (e - r.slideCount)) *
                                                r.slideWidth *
                                                -1),
                                            (s =
                                                (r.options.slidesToShow - (e - r.slideCount)) *
                                                n *
                                                -1)) :
                                        ((r.slideOffset =
                                                (r.slideCount % r.options.slidesToScroll) *
                                                r.slideWidth *
                                                -1),
                                            (s =
                                                (r.slideCount % r.options.slidesToScroll) *
                                                n *
                                                -1)))) :
                                e + r.options.slidesToShow > r.slideCount &&
                                ((r.slideOffset =
                                        (e + r.options.slidesToShow - r.slideCount) *
                                        r.slideWidth),
                                    (s = (e + r.options.slidesToShow - r.slideCount) * n)),
                                r.slideCount <= r.options.slidesToShow &&
                                ((r.slideOffset = 0), (s = 0)), !0 === r.options.centerMode &&
                                r.slideCount <= r.options.slidesToShow ?
                                (r.slideOffset =
                                    (r.slideWidth * Math.floor(r.options.slidesToShow)) /
                                    2 -
                                    (r.slideWidth * r.slideCount) / 2) :
                                !0 === r.options.centerMode && !0 === r.options.infinite ?
                                (r.slideOffset +=
                                    r.slideWidth *
                                    Math.floor(r.options.slidesToShow / 2) -
                                    r.slideWidth) :
                                !0 === r.options.centerMode &&
                                ((r.slideOffset = 0),
                                    (r.slideOffset +=
                                        r.slideWidth *
                                        Math.floor(r.options.slidesToShow / 2))),
                                (t = !1 === r.options.vertical ?
                                    e * r.slideWidth * -1 + r.slideOffset :
                                    e * n * -1 + s), !0 === r.options.variableWidth &&
                                ((i =
                                        r.slideCount <= r.options.slidesToShow ||
                                        !1 === r.options.infinite ?
                                        r.$slideTrack.children(".slick-slide").eq(e) :
                                        r.$slideTrack
                                        .children(".slick-slide")
                                        .eq(e + r.options.slidesToShow)),
                                    (t = !0 === r.options.rtl ?
                                        i[0] ?
                                        -1 *
                                        (r.$slideTrack.width() -
                                            i[0].offsetLeft -
                                            i.width()) :
                                        0 :
                                        i[0] ?
                                        -1 * i[0].offsetLeft :
                                        0), !0 === r.options.centerMode &&
                                    ((i =
                                            r.slideCount <= r.options.slidesToShow ||
                                            !1 === r.options.infinite ?
                                            r.$slideTrack.children(".slick-slide").eq(e) :
                                            r.$slideTrack
                                            .children(".slick-slide")
                                            .eq(e + r.options.slidesToShow + 1)),
                                        (t = !0 === r.options.rtl ?
                                            i[0] ?
                                            -1 *
                                            (r.$slideTrack.width() -
                                                i[0].offsetLeft -
                                                i.width()) :
                                            0 :
                                            i[0] ?
                                            -1 * i[0].offsetLeft :
                                            0),
                                        (t += (r.$list.width() - i.outerWidth()) / 2))),
                                t
                            );
                        }),
                        (t.prototype.getOption = t.prototype.slickGetOption = function(
                            e
                        ) {
                            return this.options[e];
                        }),
                        (t.prototype.getNavigableIndexes = function() {
                            var e,
                                t = this,
                                n = 0,
                                i = 0,
                                o = [];
                            for (!1 === t.options.infinite ?
                                (e = t.slideCount) :
                                ((n = -1 * t.options.slidesToScroll),
                                    (i = -1 * t.options.slidesToScroll),
                                    (e = 2 * t.slideCount)); n < e;

                            )
                                o.push(n),
                                (n = i + t.options.slidesToScroll),
                                (i +=
                                    t.options.slidesToScroll <= t.options.slidesToShow ?
                                    t.options.slidesToScroll :
                                    t.options.slidesToShow);
                            return o;
                        }),
                        (t.prototype.getSlick = function() {
                            return this;
                        }),
                        (t.prototype.getSlideCount = function() {
                            var t,
                                n,
                                i = this;
                            return (
                                (n = !0 === i.options.centerMode ?
                                    i.slideWidth * Math.floor(i.options.slidesToShow / 2) :
                                    0), !0 === i.options.swipeToSlide ?
                                (i.$slideTrack
                                    .find(".slick-slide")
                                    .each(function(o, r) {
                                        if (
                                            r.offsetLeft - n + e(r).outerWidth() / 2 >
                                            -1 * i.swipeLeft
                                        )
                                            return (t = r), !1;
                                    }),
                                    Math.abs(
                                        e(t).attr("data-slick-index") - i.currentSlide
                                    ) || 1) :
                                i.options.slidesToScroll
                            );
                        }),
                        (t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
                            this.changeSlide({ data: { message: "index", index: parseInt(e) } },
                                t
                            );
                        }),
                        (t.prototype.init = function(t) {
                            var n = this;
                            e(n.$slider).hasClass("slick-initialized") ||
                                (e(n.$slider).addClass("slick-initialized"),
                                    n.buildRows(),
                                    n.buildOut(),
                                    n.setProps(),
                                    n.startLoad(),
                                    n.loadSlider(),
                                    n.initializeEvents(),
                                    n.updateArrows(),
                                    n.updateDots(),
                                    n.checkResponsive(!0),
                                    n.focusHandler()),
                                t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(),
                                n.options.autoplay && ((n.paused = !1), n.autoPlay());
                        }),
                        (t.prototype.initADA = function() {
                            var t = this,
                                n = Math.ceil(t.slideCount / t.options.slidesToShow),
                                i = t.getNavigableIndexes().filter(function(e) {
                                    return e >= 0 && e < t.slideCount;
                                });
                            t.$slides
                                .add(t.$slideTrack.find(".slick-cloned"))
                                .attr({ "aria-hidden": "true", tabindex: "-1" })
                                .find("a, input, button, select")
                                .attr({ tabindex: "-1" }),
                                null !== t.$dots &&
                                (t.$slides
                                    .not(t.$slideTrack.find(".slick-cloned"))
                                    .each(function(n) {
                                        var o = i.indexOf(n);
                                        if (
                                            (e(this).attr({
                                                role: "tabpanel",
                                                id: "slick-slide" + t.instanceUid + n,
                                                tabindex: -1,
                                            }), -1 !== o)
                                        ) {
                                            var r = "slick-slide-control" + t.instanceUid + o;
                                            e("#" + r).length &&
                                                e(this).attr({ "aria-describedby": r });
                                        }
                                    }),
                                    t.$dots
                                    .attr("role", "tablist")
                                    .find("li")
                                    .each(function(o) {
                                        var r = i[o];
                                        e(this).attr({ role: "presentation" }),
                                            e(this)
                                            .find("button")
                                            .first()
                                            .attr({
                                                role: "tab",
                                                id: "slick-slide-control" + t.instanceUid + o,
                                                "aria-controls": "slick-slide" + t.instanceUid + r,
                                                "aria-label": o + 1 + " of " + n,
                                                "aria-selected": null,
                                                tabindex: "-1",
                                            });
                                    })
                                    .eq(t.currentSlide)
                                    .find("button")
                                    .attr({ "aria-selected": "true", tabindex: "0" })
                                    .end());
                            for (
                                var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++
                            )
                                t.options.focusOnChange ?
                                t.$slides.eq(o).attr({ tabindex: "0" }) :
                                t.$slides.eq(o).removeAttr("tabindex");
                            t.activateADA();
                        }),
                        (t.prototype.initArrowEvents = function() {
                            var e = this;
                            !0 === e.options.arrows &&
                                e.slideCount > e.options.slidesToShow &&
                                (e.$prevArrow
                                    .off("click.slick")
                                    .on(
                                        "click.slick", { message: "previous" },
                                        e.changeSlide
                                    ),
                                    e.$nextArrow
                                    .off("click.slick")
                                    .on("click.slick", { message: "next" }, e.changeSlide), !0 === e.options.accessibility &&
                                    (e.$prevArrow.on("keydown.slick", e.keyHandler),
                                        e.$nextArrow.on("keydown.slick", e.keyHandler)));
                        }),
                        (t.prototype.initDotEvents = function() {
                            var t = this;
                            !0 === t.options.dots &&
                                t.slideCount > t.options.slidesToShow &&
                                (e("li", t.$dots).on(
                                        "click.slick", { message: "index" },
                                        t.changeSlide
                                    ), !0 === t.options.accessibility &&
                                    t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots &&
                                !0 === t.options.pauseOnDotsHover &&
                                t.slideCount > t.options.slidesToShow &&
                                e("li", t.$dots)
                                .on("mouseenter.slick", e.proxy(t.interrupt, t, !0))
                                .on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
                        }),
                        (t.prototype.initSlideEvents = function() {
                            var t = this;
                            t.options.pauseOnHover &&
                                (t.$list.on(
                                        "mouseenter.slick",
                                        e.proxy(t.interrupt, t, !0)
                                    ),
                                    t.$list.on(
                                        "mouseleave.slick",
                                        e.proxy(t.interrupt, t, !1)
                                    ));
                        }),
                        (t.prototype.initializeEvents = function() {
                            var t = this;
                            t.initArrowEvents(),
                                t.initDotEvents(),
                                t.initSlideEvents(),
                                t.$list.on(
                                    "touchstart.slick mousedown.slick", { action: "start" },
                                    t.swipeHandler
                                ),
                                t.$list.on(
                                    "touchmove.slick mousemove.slick", { action: "move" },
                                    t.swipeHandler
                                ),
                                t.$list.on(
                                    "touchend.slick mouseup.slick", { action: "end" },
                                    t.swipeHandler
                                ),
                                t.$list.on(
                                    "touchcancel.slick mouseleave.slick", { action: "end" },
                                    t.swipeHandler
                                ),
                                t.$list.on("click.slick", t.clickHandler),
                                e(document).on(
                                    t.visibilityChange,
                                    e.proxy(t.visibility, t)
                                ), !0 === t.options.accessibility &&
                                t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect &&
                                e(t.$slideTrack)
                                .children()
                                .on("click.slick", t.selectHandler),
                                e(window).on(
                                    "orientationchange.slick.slick-" + t.instanceUid,
                                    e.proxy(t.orientationChange, t)
                                ),
                                e(window).on(
                                    "resize.slick.slick-" + t.instanceUid,
                                    e.proxy(t.resize, t)
                                ),
                                e("[draggable!=true]", t.$slideTrack).on(
                                    "dragstart",
                                    t.preventDefault
                                ),
                                e(window).on(
                                    "load.slick.slick-" + t.instanceUid,
                                    t.setPosition
                                ),
                                e(t.setPosition);
                        }),
                        (t.prototype.initUI = function() {
                            var e = this;
                            !0 === e.options.arrows &&
                                e.slideCount > e.options.slidesToShow &&
                                (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots &&
                                e.slideCount > e.options.slidesToShow &&
                                e.$dots.show();
                        }),
                        (t.prototype.keyHandler = function(e) {
                            var t = this;
                            e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                                (37 === e.keyCode && !0 === t.options.accessibility ?
                                    t.changeSlide({
                                        data: {
                                            message: !0 === t.options.rtl ? "next" : "previous",
                                        },
                                    }) :
                                    39 === e.keyCode &&
                                    !0 === t.options.accessibility &&
                                    t.changeSlide({
                                        data: {
                                            message: !0 === t.options.rtl ? "previous" : "next",
                                        },
                                    }));
                        }),
                        (t.prototype.lazyLoad = function() {
                            var t,
                                n,
                                i,
                                o = this;

                            function r(t) {
                                e("img[data-lazy]", t).each(function() {
                                    var t = e(this),
                                        n = e(this).attr("data-lazy"),
                                        i = e(this).attr("data-srcset"),
                                        r =
                                        e(this).attr("data-sizes") ||
                                        o.$slider.attr("data-sizes"),
                                        s = document.createElement("img");
                                    (s.onload = function() {
                                        t.animate({ opacity: 0 }, 100, function() {
                                            i && (t.attr("srcset", i), r && t.attr("sizes", r)),
                                                t
                                                .attr("src", n)
                                                .animate({ opacity: 1 }, 200, function() {
                                                    t.removeAttr(
                                                        "data-lazy data-srcset data-sizes"
                                                    ).removeClass("slick-loading");
                                                }),
                                                o.$slider.trigger("lazyLoaded", [o, t, n]);
                                        });
                                    }),
                                    (s.onerror = function() {
                                        t
                                            .removeAttr("data-lazy")
                                            .removeClass("slick-loading")
                                            .addClass("slick-lazyload-error"),
                                            o.$slider.trigger("lazyLoadError", [o, t, n]);
                                    }),
                                    (s.src = n);
                                });
                            }
                            if (
                                (!0 === o.options.centerMode ?
                                    !0 === o.options.infinite ?
                                    (i =
                                        (n =
                                            o.currentSlide +
                                            (o.options.slidesToShow / 2 + 1)) +
                                        o.options.slidesToShow +
                                        2) :
                                    ((n = Math.max(
                                            0,
                                            o.currentSlide - (o.options.slidesToShow / 2 + 1)
                                        )),
                                        (i =
                                            o.options.slidesToShow / 2 +
                                            1 +
                                            2 +
                                            o.currentSlide)) :
                                    ((n = o.options.infinite ?
                                            o.options.slidesToShow + o.currentSlide :
                                            o.currentSlide),
                                        (i = Math.ceil(n + o.options.slidesToShow)), !0 === o.options.fade &&
                                        (n > 0 && n--, i <= o.slideCount && i++)),
                                    (t = o.$slider.find(".slick-slide").slice(n, i)),
                                    "anticipated" === o.options.lazyLoad)
                            )
                                for (
                                    var s = n - 1,
                                        a = i,
                                        l = o.$slider.find(".slick-slide"),
                                        c = 0; c < o.options.slidesToScroll; c++
                                )
                                    s < 0 && (s = o.slideCount - 1),
                                    (t = (t = t.add(l.eq(s))).add(l.eq(a))),
                                    s--,
                                    a++;
                            r(t),
                                o.slideCount <= o.options.slidesToShow ?
                                r(o.$slider.find(".slick-slide")) :
                                o.currentSlide >= o.slideCount - o.options.slidesToShow ?
                                r(
                                    o.$slider
                                    .find(".slick-cloned")
                                    .slice(0, o.options.slidesToShow)
                                ) :
                                0 === o.currentSlide &&
                                r(
                                    o.$slider
                                    .find(".slick-cloned")
                                    .slice(-1 * o.options.slidesToShow)
                                );
                        }),
                        (t.prototype.loadSlider = function() {
                            var e = this;
                            e.setPosition(),
                                e.$slideTrack.css({ opacity: 1 }),
                                e.$slider.removeClass("slick-loading"),
                                e.initUI(),
                                "progressive" === e.options.lazyLoad &&
                                e.progressiveLazyLoad();
                        }),
                        (t.prototype.next = t.prototype.slickNext = function() {
                            this.changeSlide({ data: { message: "next" } });
                        }),
                        (t.prototype.orientationChange = function() {
                            this.checkResponsive(), this.setPosition();
                        }),
                        (t.prototype.pause = t.prototype.slickPause = function() {
                            this.autoPlayClear(), (this.paused = !0);
                        }),
                        (t.prototype.play = t.prototype.slickPlay = function() {
                            var e = this;
                            e.autoPlay(),
                                (e.options.autoplay = !0),
                                (e.paused = !1),
                                (e.focussed = !1),
                                (e.interrupted = !1);
                        }),
                        (t.prototype.postSlide = function(t) {
                            var n = this;
                            n.unslicked ||
                                (n.$slider.trigger("afterChange", [n, t]),
                                    (n.animating = !1),
                                    n.slideCount > n.options.slidesToShow && n.setPosition(),
                                    (n.swipeLeft = null),
                                    n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility &&
                                    (n.initADA(),
                                        n.options.focusOnChange &&
                                        e(n.$slides.get(n.currentSlide))
                                        .attr("tabindex", 0)
                                        .focus()));
                        }),
                        (t.prototype.prev = t.prototype.slickPrev = function() {
                            this.changeSlide({ data: { message: "previous" } });
                        }),
                        (t.prototype.preventDefault = function(e) {
                            e.preventDefault();
                        }),
                        (t.prototype.progressiveLazyLoad = function(t) {
                            t = t || 1;
                            var n,
                                i,
                                o,
                                r,
                                s,
                                a = this,
                                l = e("img[data-lazy]", a.$slider);
                            l.length ?
                                ((n = l.first()),
                                    (i = n.attr("data-lazy")),
                                    (o = n.attr("data-srcset")),
                                    (r =
                                        n.attr("data-sizes") || a.$slider.attr("data-sizes")),
                                    ((s = document.createElement(
                                        "img"
                                    )).onload = function() {
                                        o && (n.attr("srcset", o), r && n.attr("sizes", r)),
                                            n
                                            .attr("src", i)
                                            .removeAttr("data-lazy data-srcset data-sizes")
                                            .removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(),
                                            a.$slider.trigger("lazyLoaded", [a, n, i]),
                                            a.progressiveLazyLoad();
                                    }),
                                    (s.onerror = function() {
                                        t < 3 ?
                                            setTimeout(function() {
                                                a.progressiveLazyLoad(t + 1);
                                            }, 500) :
                                            (n
                                                .removeAttr("data-lazy")
                                                .removeClass("slick-loading")
                                                .addClass("slick-lazyload-error"),
                                                a.$slider.trigger("lazyLoadError", [a, n, i]),
                                                a.progressiveLazyLoad());
                                    }),
                                    (s.src = i)) :
                                a.$slider.trigger("allImagesLoaded", [a]);
                        }),
                        (t.prototype.refresh = function(t) {
                            var n,
                                i,
                                o = this;
                            (i = o.slideCount - o.options.slidesToShow), !o.options.infinite &&
                                o.currentSlide > i &&
                                (o.currentSlide = i),
                                o.slideCount <= o.options.slidesToShow &&
                                (o.currentSlide = 0),
                                (n = o.currentSlide),
                                o.destroy(!0),
                                e.extend(o, o.initials, { currentSlide: n }),
                                o.init(),
                                t ||
                                o.changeSlide({ data: { message: "index", index: n } }, !1);
                        }),
                        (t.prototype.registerBreakpoints = function() {
                            var t,
                                n,
                                i,
                                o = this,
                                r = o.options.responsive || null;
                            if ("array" === e.type(r) && r.length) {
                                for (t in ((o.respondTo = o.options.respondTo || "window"),
                                        r))
                                    if (
                                        ((i = o.breakpoints.length - 1), r.hasOwnProperty(t))
                                    ) {
                                        for (n = r[t].breakpoint; i >= 0;)
                                            o.breakpoints[i] &&
                                            o.breakpoints[i] === n &&
                                            o.breakpoints.splice(i, 1),
                                            i--;
                                        o.breakpoints.push(n),
                                            (o.breakpointSettings[n] = r[t].settings);
                                    }
                                o.breakpoints.sort(function(e, t) {
                                    return o.options.mobileFirst ? e - t : t - e;
                                });
                            }
                        }),
                        (t.prototype.reinit = function() {
                            var t = this;
                            (t.$slides = t.$slideTrack
                                .children(t.options.slide)
                                .addClass("slick-slide")),
                            (t.slideCount = t.$slides.length),
                            t.currentSlide >= t.slideCount &&
                                0 !== t.currentSlide &&
                                (t.currentSlide =
                                    t.currentSlide - t.options.slidesToScroll),
                                t.slideCount <= t.options.slidesToShow &&
                                (t.currentSlide = 0),
                                t.registerBreakpoints(),
                                t.setProps(),
                                t.setupInfinite(),
                                t.buildArrows(),
                                t.updateArrows(),
                                t.initArrowEvents(),
                                t.buildDots(),
                                t.updateDots(),
                                t.initDotEvents(),
                                t.cleanUpSlideEvents(),
                                t.initSlideEvents(),
                                t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect &&
                                e(t.$slideTrack)
                                .children()
                                .on("click.slick", t.selectHandler),
                                t.setSlideClasses(
                                    "number" == typeof t.currentSlide ? t.currentSlide : 0
                                ),
                                t.setPosition(),
                                t.focusHandler(),
                                (t.paused = !t.options.autoplay),
                                t.autoPlay(),
                                t.$slider.trigger("reInit", [t]);
                        }),
                        (t.prototype.resize = function() {
                            var t = this;
                            e(window).width() !== t.windowWidth &&
                                (clearTimeout(t.windowDelay),
                                    (t.windowDelay = window.setTimeout(function() {
                                        (t.windowWidth = e(window).width()),
                                        t.checkResponsive(),
                                            t.unslicked || t.setPosition();
                                    }, 50)));
                        }),
                        (t.prototype.removeSlide = t.prototype.slickRemove = function(
                            e,
                            t,
                            n
                        ) {
                            var i = this;
                            if (
                                ((e =
                                        "boolean" == typeof e ?
                                        !0 === (t = e) ?
                                        0 :
                                        i.slideCount - 1 :
                                        !0 === t ?
                                        --e :
                                        e),
                                    i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
                            )
                                return !1;
                            i.unload(), !0 === n ?
                                i.$slideTrack.children().remove() :
                                i.$slideTrack
                                .children(this.options.slide)
                                .eq(e)
                                .remove(),
                                (i.$slides = i.$slideTrack.children(this.options.slide)),
                                i.$slideTrack.children(this.options.slide).detach(),
                                i.$slideTrack.append(i.$slides),
                                (i.$slidesCache = i.$slides),
                                i.reinit();
                        }),
                        (t.prototype.setCSS = function(e) {
                            var t,
                                n,
                                i = this,
                                o = {};
                            !0 === i.options.rtl && (e = -e),
                                (t =
                                    "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                                (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                                (o[i.positionProp] = e), !1 === i.transformsEnabled ?
                                i.$slideTrack.css(o) :
                                ((o = {}), !1 === i.cssTransitions ?
                                    ((o[i.animType] =
                                            "translate(" + t + ", " + n + ")"),
                                        i.$slideTrack.css(o)) :
                                    ((o[i.animType] =
                                            "translate3d(" + t + ", " + n + ", 0px)"),
                                        i.$slideTrack.css(o)));
                        }),
                        (t.prototype.setDimensions = function() {
                            var e = this;
                            !1 === e.options.vertical ?
                                !0 === e.options.centerMode &&
                                e.$list.css({ padding: "0px " + e.options.centerPadding }) :
                                (e.$list.height(
                                        e.$slides.first().outerHeight(!0) *
                                        e.options.slidesToShow
                                    ), !0 === e.options.centerMode &&
                                    e.$list.css({
                                        padding: e.options.centerPadding + " 0px",
                                    })),
                                (e.listWidth = e.$list.width()),
                                (e.listHeight = e.$list.height()), !1 === e.options.vertical && !1 === e.options.variableWidth ?
                                ((e.slideWidth = Math.ceil(
                                        e.listWidth / e.options.slidesToShow
                                    )),
                                    e.$slideTrack.width(
                                        Math.ceil(
                                            e.slideWidth *
                                            e.$slideTrack.children(".slick-slide").length
                                        )
                                    )) :
                                !0 === e.options.variableWidth ?
                                e.$slideTrack.width(5e3 * e.slideCount) :
                                ((e.slideWidth = Math.ceil(e.listWidth)),
                                    e.$slideTrack.height(
                                        Math.ceil(
                                            e.$slides.first().outerHeight(!0) *
                                            e.$slideTrack.children(".slick-slide").length
                                        )
                                    ));
                            var t =
                                e.$slides.first().outerWidth(!0) -
                                e.$slides.first().width();
                            !1 === e.options.variableWidth &&
                                e.$slideTrack
                                .children(".slick-slide")
                                .width(e.slideWidth - t);
                        }),
                        (t.prototype.setFade = function() {
                            var t,
                                n = this;
                            n.$slides.each(function(i, o) {
                                    (t = n.slideWidth * i * -1), !0 === n.options.rtl ?
                                        e(o).css({
                                            position: "relative",
                                            right: t,
                                            top: 0,
                                            zIndex: n.options.zIndex - 2,
                                            opacity: 0,
                                        }) :
                                        e(o).css({
                                            position: "relative",
                                            left: t,
                                            top: 0,
                                            zIndex: n.options.zIndex - 2,
                                            opacity: 0,
                                        });
                                }),
                                n.$slides
                                .eq(n.currentSlide)
                                .css({ zIndex: n.options.zIndex - 1, opacity: 1 });
                        }),
                        (t.prototype.setHeight = function() {
                            var e = this;
                            if (
                                1 === e.options.slidesToShow &&
                                !0 === e.options.adaptiveHeight &&
                                !1 === e.options.vertical
                            ) {
                                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                                e.$list.css("height", t);
                            }
                        }),
                        (t.prototype.setOption = t.prototype.slickSetOption = function() {
                            var t,
                                n,
                                i,
                                o,
                                r,
                                s = this,
                                a = !1;
                            if (
                                ("object" === e.type(arguments[0]) ?
                                    ((i = arguments[0]),
                                        (a = arguments[1]),
                                        (r = "multiple")) :
                                    "string" === e.type(arguments[0]) &&
                                    ((i = arguments[0]),
                                        (o = arguments[1]),
                                        (a = arguments[2]),
                                        "responsive" === arguments[0] &&
                                        "array" === e.type(arguments[1]) ?
                                        (r = "responsive") :
                                        void 0 !== arguments[1] && (r = "single")),
                                    "single" === r)
                            )
                                s.options[i] = o;
                            else if ("multiple" === r)
                                e.each(i, function(e, t) {
                                    s.options[e] = t;
                                });
                            else if ("responsive" === r)
                                for (n in o)
                                    if ("array" !== e.type(s.options.responsive))
                                        s.options.responsive = [o[n]];
                                    else {
                                        for (t = s.options.responsive.length - 1; t >= 0;)
                                            s.options.responsive[t].breakpoint ===
                                            o[n].breakpoint &&
                                            s.options.responsive.splice(t, 1),
                                            t--;
                                        s.options.responsive.push(o[n]);
                                    }
                            a && (s.unload(), s.reinit());
                        }),
                        (t.prototype.setPosition = function() {
                            var e = this;
                            e.setDimensions(),
                                e.setHeight(), !1 === e.options.fade ?
                                e.setCSS(e.getLeft(e.currentSlide)) :
                                e.setFade(),
                                e.$slider.trigger("setPosition", [e]);
                        }),
                        (t.prototype.setProps = function() {
                            var e = this,
                                t = document.body.style;
                            (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
                            "top" === e.positionProp ?
                                e.$slider.addClass("slick-vertical") :
                                e.$slider.removeClass("slick-vertical"),
                                (void 0 === t.WebkitTransition &&
                                    void 0 === t.MozTransition &&
                                    void 0 === t.msTransition) ||
                                (!0 === e.options.useCSS && (e.cssTransitions = !0)),
                                e.options.fade &&
                                ("number" == typeof e.options.zIndex ?
                                    e.options.zIndex < 3 && (e.options.zIndex = 3) :
                                    (e.options.zIndex = e.defaults.zIndex)),
                                void 0 !== t.OTransform &&
                                ((e.animType = "OTransform"),
                                    (e.transformType = "-o-transform"),
                                    (e.transitionType = "OTransition"),
                                    void 0 === t.perspectiveProperty &&
                                    void 0 === t.webkitPerspective &&
                                    (e.animType = !1)),
                                void 0 !== t.MozTransform &&
                                ((e.animType = "MozTransform"),
                                    (e.transformType = "-moz-transform"),
                                    (e.transitionType = "MozTransition"),
                                    void 0 === t.perspectiveProperty &&
                                    void 0 === t.MozPerspective &&
                                    (e.animType = !1)),
                                void 0 !== t.webkitTransform &&
                                ((e.animType = "webkitTransform"),
                                    (e.transformType = "-webkit-transform"),
                                    (e.transitionType = "webkitTransition"),
                                    void 0 === t.perspectiveProperty &&
                                    void 0 === t.webkitPerspective &&
                                    (e.animType = !1)),
                                void 0 !== t.msTransform &&
                                ((e.animType = "msTransform"),
                                    (e.transformType = "-ms-transform"),
                                    (e.transitionType = "msTransition"),
                                    void 0 === t.msTransform && (e.animType = !1)),
                                void 0 !== t.transform &&
                                !1 !== e.animType &&
                                ((e.animType = "transform"),
                                    (e.transformType = "transform"),
                                    (e.transitionType = "transition")),
                                (e.transformsEnabled =
                                    e.options.useTransform &&
                                    null !== e.animType &&
                                    !1 !== e.animType);
                        }),
                        (t.prototype.setSlideClasses = function(e) {
                            var t,
                                n,
                                i,
                                o,
                                r = this;
                            if (
                                ((n = r.$slider
                                        .find(".slick-slide")
                                        .removeClass("slick-active slick-center slick-current")
                                        .attr("aria-hidden", "true")),
                                    r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode)
                            ) {
                                var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                                (t = Math.floor(r.options.slidesToShow / 2)), !0 === r.options.infinite &&
                                    (e >= t && e <= r.slideCount - 1 - t ?
                                        r.$slides
                                        .slice(e - t + s, e + t + 1)
                                        .addClass("slick-active")
                                        .attr("aria-hidden", "false") :
                                        ((i = r.options.slidesToShow + e),
                                            n
                                            .slice(i - t + 1 + s, i + t + 2)
                                            .addClass("slick-active")
                                            .attr("aria-hidden", "false")),
                                        0 === e ?
                                        n
                                        .eq(n.length - 1 - r.options.slidesToShow)
                                        .addClass("slick-center") :
                                        e === r.slideCount - 1 &&
                                        n
                                        .eq(r.options.slidesToShow)
                                        .addClass("slick-center")),
                                    r.$slides.eq(e).addClass("slick-center");
                            } else
                                e >= 0 && e <= r.slideCount - r.options.slidesToShow ?
                                r.$slides
                                .slice(e, e + r.options.slidesToShow)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false") :
                                n.length <= r.options.slidesToShow ?
                                n.addClass("slick-active").attr("aria-hidden", "false") :
                                ((o = r.slideCount % r.options.slidesToShow),
                                    (i = !0 === r.options.infinite ?
                                        r.options.slidesToShow + e :
                                        e),
                                    r.options.slidesToShow == r.options.slidesToScroll &&
                                    r.slideCount - e < r.options.slidesToShow ?
                                    n
                                    .slice(i - (r.options.slidesToShow - o), i + o)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false") :
                                    n
                                    .slice(i, i + r.options.slidesToShow)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false"));
                            ("ondemand" !== r.options.lazyLoad &&
                                "anticipated" !== r.options.lazyLoad) ||
                            r.lazyLoad();
                        }),
                        (t.prototype.setupInfinite = function() {
                            var t,
                                n,
                                i,
                                o = this;
                            if (
                                (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite &&
                                    !1 === o.options.fade &&
                                    ((n = null), o.slideCount > o.options.slidesToShow))
                            ) {
                                for (
                                    i = !0 === o.options.centerMode ?
                                    o.options.slidesToShow + 1 :
                                    o.options.slidesToShow,
                                    t = o.slideCount; t > o.slideCount - i; t -= 1
                                )
                                    (n = t - 1),
                                    e(o.$slides[n])
                                    .clone(!0)
                                    .attr("id", "")
                                    .attr("data-slick-index", n - o.slideCount)
                                    .prependTo(o.$slideTrack)
                                    .addClass("slick-cloned");
                                for (t = 0; t < i + o.slideCount; t += 1)
                                    (n = t),
                                    e(o.$slides[n])
                                    .clone(!0)
                                    .attr("id", "")
                                    .attr("data-slick-index", n + o.slideCount)
                                    .appendTo(o.$slideTrack)
                                    .addClass("slick-cloned");
                                o.$slideTrack
                                    .find(".slick-cloned")
                                    .find("[id]")
                                    .each(function() {
                                        e(this).attr("id", "");
                                    });
                            }
                        }),
                        (t.prototype.interrupt = function(e) {
                            e || this.autoPlay(), (this.interrupted = e);
                        }),
                        (t.prototype.selectHandler = function(t) {
                            var n = this,
                                i = e(t.target).is(".slick-slide") ?
                                e(t.target) :
                                e(t.target).parents(".slick-slide"),
                                o = parseInt(i.attr("data-slick-index"));
                            o || (o = 0),
                                n.slideCount <= n.options.slidesToShow ?
                                n.slideHandler(o, !1, !0) :
                                n.slideHandler(o);
                        }),
                        (t.prototype.slideHandler = function(e, t, n) {
                            var i,
                                o,
                                r,
                                s,
                                a,
                                l,
                                c = this;
                            if (
                                ((t = t || !1), !(
                                    (!0 === c.animating && !0 === c.options.waitForAnimate) ||
                                    (!0 === c.options.fade && c.currentSlide === e)
                                ))
                            )
                                if (
                                    (!1 === t && c.asNavFor(e),
                                        (i = e),
                                        (a = c.getLeft(i)),
                                        (s = c.getLeft(c.currentSlide)),
                                        (c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft), !1 === c.options.infinite &&
                                        !1 === c.options.centerMode &&
                                        (e < 0 ||
                                            e > c.getDotCount() * c.options.slidesToScroll))
                                )
                                    !1 === c.options.fade &&
                                    ((i = c.currentSlide), !0 !== n && c.slideCount > c.options.slidesToShow ?
                                        c.animateSlide(s, function() {
                                            c.postSlide(i);
                                        }) :
                                        c.postSlide(i));
                                else if (!1 === c.options.infinite &&
                                !0 === c.options.centerMode &&
                                (e < 0 || e > c.slideCount - c.options.slidesToScroll)
                            )
                                !1 === c.options.fade &&
                                ((i = c.currentSlide), !0 !== n && c.slideCount > c.options.slidesToShow ?
                                    c.animateSlide(s, function() {
                                        c.postSlide(i);
                                    }) :
                                    c.postSlide(i));
                            else {
                                if (
                                    (c.options.autoplay && clearInterval(c.autoPlayTimer),
                                        (o =
                                            i < 0 ?
                                            c.slideCount % c.options.slidesToScroll != 0 ?
                                            c.slideCount -
                                            (c.slideCount % c.options.slidesToScroll) :
                                            c.slideCount + i :
                                            i >= c.slideCount ?
                                            c.slideCount % c.options.slidesToScroll != 0 ?
                                            0 :
                                            i - c.slideCount :
                                            i),
                                        (c.animating = !0),
                                        c.$slider.trigger("beforeChange", [
                                            c,
                                            c.currentSlide,
                                            o,
                                        ]),
                                        (r = c.currentSlide),
                                        (c.currentSlide = o),
                                        c.setSlideClasses(c.currentSlide),
                                        c.options.asNavFor &&
                                        (l = (l = c.getNavTarget()).slick("getSlick"))
                                        .slideCount <= l.options.slidesToShow &&
                                        l.setSlideClasses(c.currentSlide),
                                        c.updateDots(),
                                        c.updateArrows(), !0 === c.options.fade)
                                )
                                    return (!0 !== n ?
                                        (c.fadeSlideOut(r),
                                            c.fadeSlide(o, function() {
                                                c.postSlide(o);
                                            })) :
                                        c.postSlide(o),
                                        void c.animateHeight()
                                    );
                                !0 !== n && c.slideCount > c.options.slidesToShow ?
                                    c.animateSlide(a, function() {
                                        c.postSlide(o);
                                    }) :
                                    c.postSlide(o);
                            }
                        }),
                        (t.prototype.startLoad = function() {
                            var e = this;
                            !0 === e.options.arrows &&
                                e.slideCount > e.options.slidesToShow &&
                                (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots &&
                                e.slideCount > e.options.slidesToShow &&
                                e.$dots.hide(),
                                e.$slider.addClass("slick-loading");
                        }),
                        (t.prototype.swipeDirection = function() {
                            var e,
                                t,
                                n,
                                i,
                                o = this;
                            return (
                                (e = o.touchObject.startX - o.touchObject.curX),
                                (t = o.touchObject.startY - o.touchObject.curY),
                                (n = Math.atan2(t, e)),
                                (i = Math.round((180 * n) / Math.PI)) < 0 &&
                                (i = 360 - Math.abs(i)),
                                (i <= 45 && i >= 0) || (i <= 360 && i >= 315) ?
                                !1 === o.options.rtl ?
                                "left" :
                                "right" :
                                i >= 135 && i <= 225 ?
                                !1 === o.options.rtl ?
                                "right" :
                                "left" :
                                !0 === o.options.verticalSwiping ?
                                i >= 35 && i <= 135 ?
                                "down" :
                                "up" :
                                "vertical"
                            );
                        }),
                        (t.prototype.swipeEnd = function(e) {
                            var t,
                                n,
                                i = this;
                            if (((i.dragging = !1), (i.swiping = !1), i.scrolling))
                                return (i.scrolling = !1), !1;
                            if (
                                ((i.interrupted = !1),
                                    (i.shouldClick = !(i.touchObject.swipeLength > 10)),
                                    void 0 === i.touchObject.curX)
                            )
                                return !1;
                            if (
                                (!0 === i.touchObject.edgeHit &&
                                    i.$slider.trigger("edge", [i, i.swipeDirection()]),
                                    i.touchObject.swipeLength >= i.touchObject.minSwipe)
                            ) {
                                switch ((n = i.swipeDirection())) {
                                    case "left":
                                    case "down":
                                        (t = i.options.swipeToSlide ?
                                            i.checkNavigable(i.currentSlide + i.getSlideCount()) :
                                            i.currentSlide + i.getSlideCount()),
                                        (i.currentDirection = 0);
                                        break;
                                    case "right":
                                    case "up":
                                        (t = i.options.swipeToSlide ?
                                            i.checkNavigable(i.currentSlide - i.getSlideCount()) :
                                            i.currentSlide - i.getSlideCount()),
                                        (i.currentDirection = 1);
                                }
                                "vertical" != n &&
                                    (i.slideHandler(t),
                                        (i.touchObject = {}),
                                        i.$slider.trigger("swipe", [i, n]));
                            } else
                                i.touchObject.startX !== i.touchObject.curX &&
                                (i.slideHandler(i.currentSlide), (i.touchObject = {}));
                        }),
                        (t.prototype.swipeHandler = function(e) {
                            var t = this;
                            if (!(!1 === t.options.swipe ||
                                    ("ontouchend" in document && !1 === t.options.swipe) ||
                                    (!1 === t.options.draggable &&
                                        -1 !== e.type.indexOf("mouse"))
                                ))
                                switch (
                                    ((t.touchObject.fingerCount =
                                            e.originalEvent && void 0 !== e.originalEvent.touches ?
                                            e.originalEvent.touches.length :
                                            1),
                                        (t.touchObject.minSwipe =
                                            t.listWidth / t.options.touchThreshold), !0 === t.options.verticalSwiping &&
                                        (t.touchObject.minSwipe =
                                            t.listHeight / t.options.touchThreshold),
                                        e.data.action)
                                ) {
                                    case "start":
                                        t.swipeStart(e);
                                        break;
                                    case "move":
                                        t.swipeMove(e);
                                        break;
                                    case "end":
                                        t.swipeEnd(e);
                                }
                        }),
                        (t.prototype.swipeMove = function(e) {
                            var t,
                                n,
                                i,
                                o,
                                r,
                                s,
                                a = this;
                            return (
                                (r =
                                    void 0 !== e.originalEvent ?
                                    e.originalEvent.touches :
                                    null), !(!a.dragging || a.scrolling || (r && 1 !== r.length)) &&
                                ((t = a.getLeft(a.currentSlide)),
                                    (a.touchObject.curX =
                                        void 0 !== r ? r[0].pageX : e.clientX),
                                    (a.touchObject.curY =
                                        void 0 !== r ? r[0].pageY : e.clientY),
                                    (a.touchObject.swipeLength = Math.round(
                                        Math.sqrt(
                                            Math.pow(a.touchObject.curX - a.touchObject.startX, 2)
                                        )
                                    )),
                                    (s = Math.round(
                                        Math.sqrt(
                                            Math.pow(a.touchObject.curY - a.touchObject.startY, 2)
                                        )
                                    )), !a.options.verticalSwiping && !a.swiping && s > 4 ?
                                    ((a.scrolling = !0), !1) :
                                    (!0 === a.options.verticalSwiping &&
                                        (a.touchObject.swipeLength = s),
                                        (n = a.swipeDirection()),
                                        void 0 !== e.originalEvent &&
                                        a.touchObject.swipeLength > 4 &&
                                        ((a.swiping = !0), e.preventDefault()),
                                        (o =
                                            (!1 === a.options.rtl ? 1 : -1) *
                                            (a.touchObject.curX > a.touchObject.startX ?
                                                1 :
                                                -1)), !0 === a.options.verticalSwiping &&
                                        (o =
                                            a.touchObject.curY > a.touchObject.startY ?
                                            1 :
                                            -1),
                                        (i = a.touchObject.swipeLength),
                                        (a.touchObject.edgeHit = !1), !1 === a.options.infinite &&
                                        ((0 === a.currentSlide && "right" === n) ||
                                            (a.currentSlide >= a.getDotCount() &&
                                                "left" === n)) &&
                                        ((i =
                                                a.touchObject.swipeLength *
                                                a.options.edgeFriction),
                                            (a.touchObject.edgeHit = !0)), !1 === a.options.vertical ?
                                        (a.swipeLeft = t + i * o) :
                                        (a.swipeLeft =
                                            t + i * (a.$list.height() / a.listWidth) * o), !0 === a.options.verticalSwiping &&
                                        (a.swipeLeft = t + i * o), !0 !== a.options.fade &&
                                        !1 !== a.options.touchMove &&
                                        (!0 === a.animating ?
                                            ((a.swipeLeft = null), !1) :
                                            void a.setCSS(a.swipeLeft))))
                            );
                        }),
                        (t.prototype.swipeStart = function(e) {
                            var t,
                                n = this;
                            if (
                                ((n.interrupted = !0),
                                    1 !== n.touchObject.fingerCount ||
                                    n.slideCount <= n.options.slidesToShow)
                            )
                                return (n.touchObject = {}), !1;
                            void 0 !== e.originalEvent &&
                                void 0 !== e.originalEvent.touches &&
                                (t = e.originalEvent.touches[0]),
                                (n.touchObject.startX = n.touchObject.curX =
                                    void 0 !== t ? t.pageX : e.clientX),
                                (n.touchObject.startY = n.touchObject.curY =
                                    void 0 !== t ? t.pageY : e.clientY),
                                (n.dragging = !0);
                        }),
                        (t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
                            var e = this;
                            null !== e.$slidesCache &&
                                (e.unload(),
                                    e.$slideTrack.children(this.options.slide).detach(),
                                    e.$slidesCache.appendTo(e.$slideTrack),
                                    e.reinit());
                        }),
                        (t.prototype.unload = function() {
                            var t = this;
                            e(".slick-cloned", t.$slider).remove(),
                                t.$dots && t.$dots.remove(),
                                t.$prevArrow &&
                                t.htmlExpr.test(t.options.prevArrow) &&
                                t.$prevArrow.remove(),
                                t.$nextArrow &&
                                t.htmlExpr.test(t.options.nextArrow) &&
                                t.$nextArrow.remove(),
                                t.$slides
                                .removeClass(
                                    "slick-slide slick-active slick-visible slick-current"
                                )
                                .attr("aria-hidden", "true")
                                .css("width", "");
                        }),
                        (t.prototype.unslick = function(e) {
                            var t = this;
                            t.$slider.trigger("unslick", [t, e]), t.destroy();
                        }),
                        (t.prototype.updateArrows = function() {
                            var e = this;
                            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows &&
                                e.slideCount > e.options.slidesToShow &&
                                !e.options.infinite &&
                                (e.$prevArrow
                                    .removeClass("slick-disabled")
                                    .attr("aria-disabled", "false"),
                                    e.$nextArrow
                                    .removeClass("slick-disabled")
                                    .attr("aria-disabled", "false"),
                                    0 === e.currentSlide ?
                                    (e.$prevArrow
                                        .addClass("slick-disabled")
                                        .attr("aria-disabled", "true"),
                                        e.$nextArrow
                                        .removeClass("slick-disabled")
                                        .attr("aria-disabled", "false")) :
                                    ((e.currentSlide >=
                                            e.slideCount - e.options.slidesToShow &&
                                            !1 === e.options.centerMode) ||
                                        (e.currentSlide >= e.slideCount - 1 &&
                                            !0 === e.options.centerMode)) &&
                                    (e.$nextArrow
                                        .addClass("slick-disabled")
                                        .attr("aria-disabled", "true"),
                                        e.$prevArrow
                                        .removeClass("slick-disabled")
                                        .attr("aria-disabled", "false")));
                        }),
                        (t.prototype.updateDots = function() {
                            var e = this;
                            null !== e.$dots &&
                                (e.$dots.find("li").removeClass("slick-active").end(),
                                    e.$dots
                                    .find("li")
                                    .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
                                    .addClass("slick-active"));
                        }),
                        (t.prototype.visibility = function() {
                            var e = this;
                            e.options.autoplay &&
                                (document[e.hidden] ?
                                    (e.interrupted = !0) :
                                    (e.interrupted = !1));
                        }),
                        (e.fn.slick = function() {
                            var e,
                                n,
                                i = this,
                                o = arguments[0],
                                r = Array.prototype.slice.call(arguments, 1),
                                a = i.length;
                            for (e = 0; e < a; e++)
                                if (
                                    ("object" == s(o) || void 0 === o ?
                                        (i[e].slick = new t(i[e], o)) :
                                        (n = i[e].slick[o].apply(i[e].slick, r)),
                                        void 0 !== n)
                                )
                                    return n;
                            return i;
                        });
                        var n;
                    }) ?
                    i.apply(t, o) :
                    i) || (e.exports = r);
        })();
    },
    function(e, t, n) {
        var i = n(1),
            o = n(5);
        "string" == typeof(o = o.__esModule ? o.default : o) &&
        (o = [
            [e.i, o, ""]
        ]);
        var r = { insert: "head", singleton: !1 };
        i(o, r);
        e.exports = o.locals || {};
    },
    function(e, t, n) {},
    function(e, t, n) {
        var i = n(1),
            o = n(7);
        "string" == typeof(o = o.__esModule ? o.default : o) &&
        (o = [
            [e.i, o, ""]
        ]);
        var r = { insert: "head", singleton: !1 };
        i(o, r);
        e.exports = o.locals || {};
    },
    function(e, t, n) {},
    function(e, t, n) {
        var i = n(1),
            o = n(9);
        "string" == typeof(o = o.__esModule ? o.default : o) &&
        (o = [
            [e.i, o, ""]
        ]);
        var r = { insert: "head", singleton: !1 };
        i(o, r);
        e.exports = o.locals || {};
    },
    function(e, t, n) {},
    function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n(0),
            o = n.n(i);
        o()(window).on("load", function() {
                o()(".cssload").delay(200).fadeOut("slow");
            }),
            o()(window).scroll(function() {
                o()("section").each(function(e, t) {
                    var n = o()(t).offset().top - 100,
                        i = n + o()(t).height(),
                        r = o()(window).scrollTop(),
                        s = o()(t).attr("id");
                    r > n &&
                        r < i &&
                        (o()("a.menu__link").removeClass("menu__link--active"),
                            o()('a[href="#' + s + '"').addClass("menu__link--active"),
                            o()("a.art_inner-vidget-item__link").removeClass(
                                "menu__link--active"
                            ),
                            o()('a[href="#' + s + '"').addClass("menu__link--active"));
                });
            }),
            o()(".art_inner__vidget").on("click", "a", function(e) {
                e.preventDefault();
                var t = o()(this).attr("href"),
                    n = o()(t).offset().top;
                o()("a").removeClass("menu__link--active"),
                    o()(this).addClass("menu__link--active"),
                    o()("body,html").animate({ scrollTop: n }, 800);
            }),
            o()(".menu__link").on("click", function(e) {
                e.preventDefault();
                var t = o()(this).attr("href"),
                    n = o()(t).offset().top;
                o()("a").removeClass("menu__link--active"),
                    o()(this).addClass("menu__link--active"),
                    o()('a[href="#' + t + '"').addClass("menu__link--active"),
                    o()("body,html").animate({ scrollTop: n }, 800),
                    setTimeout(function() {
                        o()(".menu")
                            .removeClass("menu-active")
                            .find(".header__info")
                            .remove(),
                            o()(".info").removeClass("info-active"),
                            o()("body").removeClass("lock");
                    }, 1e3);
            }),
            o()(document).ready(function(e) {
                o()(".header__burger").on("click", function() {
                        o()(".menu").addClass("menu-active"), o()("body").addClass("lock");
                    }),
                    o()(".header__close").on("click", function() {
                        o()(".menu")
                            .removeClass("menu-active")
                            .find(".header__info")
                            .remove(),
                            o()("body").removeClass("lock");
                    });
            }),
            window.addEventListener("scroll", function(e) {
                window.pageYOffset > 80 ?
                    document.querySelector(".header").classList.add("responciveHeader") :
                    document
                    .querySelector(".header")
                    .classList.remove("responciveHeader");
            }),
            (window.onresize = function() {
                window.innerWidth >= 768 &&
                    (o()(".menu")
                        .removeClass("menu-active")
                        .find(".header__info")
                        .remove(),
                        o()("body").removeClass("lock"));
            }),
            o()(document).ready(function(e) {}),
            o()(document).ready(function(e) {
                o()(".tabs__block").slideUp(1),
                    o()(".tabs__item").each(function() {
                        if ("active" == o()(this).attr("data")) {
                            var e = o()(this).attr("href");
                            o()(e).slideDown(1);
                        }
                    }),
                    o()(".tabs__item").on("click", function() {
                        event.preventDefault();
                        var e = o()(this).attr("href");
                        o()(".tabs__item").attr("data", "none"),
                            o()(".tabs__block").slideUp(1),
                            o()(this).attr("data", "active"),
                            o()(e).slideDown(200);
                    });
            }),
            o()(document).ready(function() {
                o()(".select").each(function() {
                    var e = o()(this),
                        t = e.find("option"),
                        n = t.length;
                    t.filter(":selected");
                    e.hide(),
                        e.wrap('<div class="select"></div>'),
                        o()("<div>", {
                            class: "new-select",
                            text: e.children("option:disabled").text(),
                        }).insertAfter(e);
                    var i = e.next(".new-select");
                    o()("<div>", { class: "new-select__list" }).insertAfter(i);
                    for (var r = i.next(".new-select__list"), s = 0; s < n; s++)
                        o()("<div>", {
                            class: "new-select__item",
                            html: o()("<span>", { text: t.eq(s).text() }),
                        })
                        .attr("data-value", t.eq(s).val())
                        .appendTo(r);
                    o()(".new-select__item:first-child").addClass("choosen");
                    var a = r.find(".new-select__item");
                    r.slideUp(0),
                        i.on("click", function() {
                            o()(this).hasClass("on") ?
                                (o()(this).removeClass("on"), r.slideUp(200)) :
                                (o()(this).addClass("on"), r.slideDown(200));
                        }),
                        a.on("click", function() {
                            o()(".new-select__item").removeClass("choosen");
                            var e = o()(this).addClass("choosen").data("value");
                            o()("select").val(e).attr("selected", "selected"),
                                i.text(o()(this).find("span").text()),
                                r.slideUp(200),
                                i.removeClass("on");
                            var t = o()(this).attr("data-value");
                            window.location.href = t;
                        });
                });
            }),
            o()(document).ready(function() {
                o()(".select").on("click", function() {
                    o()(this).siblings(".block__icon").toggleClass("img-active");
                });
            }),
            o()(document).mouseup(function(e) {
                var t = o()(".select");
                if (!t.is(e.target) && 0 === t.has(e.target).length) {
                    var n = t.siblings(".block__icon");
                    o()(".new-select").removeClass("on"),
                        o()(".new-select__list").slideUp(300),
                        n.hasClass("img-active") && n.toggleClass("img-active");
                }
            });
        n(2);
        o()(document).ready(function() {
                var e = o()(".popup"),
                    t = o()(".popup-init-js"),
                    n = o()(".popup__close");
                e.fadeOut(1),
                    t.on("click", function() {
                        e.fadeIn(200), o()("body").css("overflow", "hidden");
                    }),
                    n.on("click", function() {
                        e.fadeOut(200), o()("body").css("overflow", "visible");
                    });
            }),
            o()(document).on("mouseup", function(e) {
                o()(".popup__overlay").is(e.target) &&
                    (o()(".popup").fadeOut(200), o()("body").css("overflow", "visible"));
            });
        n(3);
        o()(Document).ready(function() {
            o()(".slider-js-1").show().slick({
                    dots: !0,
                    arrows: !1,
                    slidesToShow: 1,
                    speed: 800,
                    easing: "ease",
                    centerMode: !1,
                    infinite: !0,
                    pauseOnFocus: !0,
                    pauseOnHover: !0,
                }),
                o()(".slider-js-5").slick({
                    dots: !0,
                    arrows: !1,
                    slidesToShow: 1,
                    speed: 800,
                    easing: "ease",
                    centerMode: !1,
                    infinite: !0,
                    pauseOnFocus: !0,
                    pauseOnHover: !0,
                }),
                o()(".slider-js-5").on("beforeChange", function(e, t, n, i) {
                    o()("body,html").animate({ scrollTop: 0 }, 400);
                }),
                o()(".slider-js-3").show().slick({
                    dots: !0,
                    arrows: !1,
                    slidesToShow: 1,
                    speed: 800,
                    easing: "ease",
                    centerMode: !1,
                    infinite: !0,
                    pauseOnFocus: !0,
                    pauseOnHover: !0,
                }),
                o()(".slider-js-2").slick({
                    dots: !1,
                    slidesToShow: 4,
                    speed: 800,
                    easing: "ease",
                    centerMode: !1,
                    infinite: !0,
                    pauseOnFocus: !0,
                    pauseOnHover: !0,
                    responsive: [
                        { breakpoint: 1200, settings: { slidesToShow: 3 } },
                        { breakpoint: 800, settings: { slidesToShow: 2 } },
                        { breakpoint: 500, settings: { slidesToShow: 1 } },
                    ],
                }),
                o()(".carusel_block .slider-js-4").slick({
                    dots: !1,
                    slidesToShow: 4,
                    speed: 800,
                    easing: "ease",
                    centerMode: !1,
                    infinite: !0,
                    pauseOnFocus: !0,
                    pauseOnHover: !0,
                    responsive: [
                        { breakpoint: 1200, settings: { slidesToShow: 3 } },
                        { breakpoint: 800, settings: { slidesToShow: 1 } },
                    ],
                }),
                o()(".card-object").on("mouseenter", function(e) {
                    o()(this)
                        .find("a")
                        .append("<div class='carusel__mask'></div>");
                    o()(this).find(".carusel__mask").fadeOut(1).fadeIn(300);
                });
            o()(".card-object").on("mouseleave", function(e) {
                let el = o()(this).find(".carusel__mask");
                el.fadeOut(300);
                setTimeout(function() {
                    el.remove();
                }, 300);
            });


            o()(document).ready(function(e) {
                // o()(".tabs__block").slideUp(1);

                o()(".tabs__item").each(function() {
                    if (o()(this).attr("data") == "active") {
                        let targetLink = o()(this).attr("href");
                        o()(targetLink).css("display", "block")
                    }
                });

                o()(".tabs__item").on("click", function() {
                    event.preventDefault();
                    let targetLink = o()(this).attr("href");
                    o()(".tabs__block")
                        .etc(targetLink)
                        .slideUp(300)
                        .attr("data", "");
                    // o()(".tabs__item")
                    o()(this).attr("data", "active");
                    o()(targetLink).slideDown(300);
                });

                o()(".connect__form-item .wpcf7-form-control").on(
                    "click",
                    function() {
                        o()(this).parent().siblings("label").addClass("_input-focus");
                    }
                );



                document.addEventListener(
                    "wpcf7submit",
                    function(event) {
                        var inputs = event.detail.inputs;
                        console.log(inputs);
                    },
                    false
                );










            });

        });
        n(4), n(6), n(8);
    },
]);

//
// alert("kkkkkkkkk")


//--------- instagram---------------