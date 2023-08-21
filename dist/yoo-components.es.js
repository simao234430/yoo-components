import p, { useMemo as C, createContext as N, useEffect as h, forwardRef as B, useContext as w, useRef as z } from "react";
function m(e, n) {
  const t = {
    ...e
  };
  return n.forEach((o) => {
    o in t && delete t[o];
  }), t;
}
function $(e, n, t) {
  const { _ignorePropsFromGlobal: o } = e, r = C(() => ({ ...n, ...o ? {} : t }), [n, t, o]);
  return C(() => {
    const c = m(e, ["_ignorePropsFromGlobal"]);
    for (const i in r)
      c[i] === void 0 && (c[i] = r[i]);
    return c;
  }, [e, r]);
}
function O(e) {
  ({
    ...e
  });
}
function S(e) {
  const n = [];
  let t = e.substr(1);
  return e.length === 3 && (t = e.replace(/(.)/g, "$1$1")), t.replace(/../g, (o) => {
    n.push(parseInt(o, 16));
  }), {
    r: n[0],
    g: n[1],
    b: n[2],
    rgb: `rgb(${n.join(",")})`
  };
}
function T(e) {
  const n = S(e);
  return { r: n.r, g: n.g, b: n.b };
}
function F(e) {
  const n = T(e), t = M(n.r, n.g, n.b);
  return { h: t.h, s: t.s, l: t.l };
}
function M(e, n, t) {
  const o = e / 255, r = n / 255, s = t / 255, c = Math.max(o, r, s), i = Math.min(o, r, s), a = (c + i) / 2;
  let l, u;
  if (c === i)
    l = 0, u = 0;
  else {
    const f = c - i;
    switch (u = a > 0.5 ? f / (2 - c - i) : f / (c + i), c) {
      case o:
        l = (r - s) / f + (r < s ? 6 : 0);
        break;
      case r:
        l = (s - o) / f + 2;
        break;
      case s:
        l = (o - r) / f + 4;
        break;
    }
    l /= 6;
  }
  return {
    h: l,
    s: u,
    l: a,
    hsl: `hsl(${l * 360}, ${u * 100}%, ${a * 100}%)`
  };
}
function y(e, n) {
  const t = F(e), o = +t.h, r = +t.s, s = +t.l * 100 + +n;
  return k([o * 360, r * 100, s]).join(",");
}
function k(e) {
  const n = e[0] / 360, t = e[1] / 100, o = e[2] / 100;
  let r, s, c;
  if (t === 0)
    return c = o * 255, [c, c, c];
  o < 0.5 ? r = o * (1 + t) : r = o + t - o * t;
  const i = 2 * o - r, a = [0, 0, 0];
  for (let l = 0; l < 3; l++)
    s = n + 1 / 3 * -(l - 1), s < 0 && s++, s > 1 && s--, 6 * s < 1 ? c = i + (r - i) * 6 * s : 2 * s < 1 ? c = r : 3 * s < 2 ? c = i + (r - i) * (2 / 3 - s) * 6 : c = i, a[l] = c * 255;
  return a;
}
const v = Object.prototype.toString;
function A(e) {
  return v.call(e) === "[object Array]";
}
function x(e) {
  return v.call(e) === "[object Object]";
}
function H(e) {
  return v.call(e) === "[object String]";
}
const g = {
  primaryColor: {
    default: "--arcoblue-6",
    hover: "--arcoblue-5",
    active: "--arcoblue-7"
  },
  successColor: {
    default: "--green-6",
    hover: "--green-5",
    active: "--green-7"
  },
  infoColor: {
    default: "--arcoblue-6",
    hover: "--arcoblue-5",
    active: "--arcoblue-7"
  },
  warningColor: {
    default: "--orangered-6",
    hover: "--orangered-5",
    active: "--orangered-7"
  },
  dangerColor: {
    default: "--red-6",
    hover: "--red-5",
    active: "--red-7"
  }
};
function G(e) {
  if (e && x(e)) {
    const n = document.body;
    Object.keys(g).forEach((t) => {
      e[t] && (n.style.setProperty(g[t].default, y(e[t], 0)), e[`${t}Hover`] || n.style.setProperty(g[t].hover, y(e[t], 10)), e[`${t}Active`] || n.style.setProperty(g[t].active, y(e[t], -10)));
    });
  }
}
const P = {
  prefixCls: "arco",
  size: "default"
}, I = {}, b = N({
  getPrefixCls: (e, n) => `${n || "arco"}-${e}`,
  ...P
});
function j(e) {
  const n = $(e, P, I), { theme: t, prefixCls: o, children: r } = n;
  h(() => {
    G(t);
  }, [t]), h(() => {
  }, [o]);
  function s(a, l) {
    return `${l || o}-${a}`;
  }
  const c = {
    ...m(n, ["children"]),
    getPrefixCls: s
  };
  h(() => {
    O({ prefixCls: o });
  }, [o]);
  let i = r;
  return p.createElement(b.Provider, { value: c }, i);
}
j.ConfigContext = b;
j.displayName = "ConfigProvider";
b.Consumer;
function q(...e) {
  const n = e.length;
  let t = [];
  for (let o = 0; o < n; o++) {
    const r = e[o];
    r && (H(r) ? t.push(r) : A(r) ? t = t.concat(r) : x(r) && Object.keys(r).forEach((s) => {
      r[s] && t.push(s);
    }));
  }
  return [...new Set(t)].join(" ");
}
const L = {
  htmlType: "button",
  type: "default",
  shape: "square"
};
function D(e, n) {
  const { getPrefixCls: t, size: o } = w(b), r = $(e, L, {}), { children: s, style: c, type: i, htmlType: a, size: l, className: u } = r, f = p.createElement(p.Fragment, null, s), _ = z(), R = n || _, d = t("btn"), E = q(d, `${d}-${i === "default" ? "secondary" : i}`, `${d}-size-${l || o}`, u);
  return p.createElement("button", { ref: R, style: c, className: E, type: a }, f);
}
const J = B(D), K = J;
K.displayName = "Button";
export {
  K as Button,
  j as ConfigProvider
};
