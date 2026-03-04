import { r as o, u as f, j as e } from "./index-D5PVpqHN.js";
import { L as n } from "./index-DdMl8o6H.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  m = (...s) =>
    s
      .filter((a, r, i) => !!a && a.trim() !== "" && i.indexOf(a) === r)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var g = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N = o.forwardRef(
  (
    {
      color: s = "currentColor",
      size: a = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: i,
      className: l = "",
      children: t,
      iconNode: d,
      ...h
    },
    u,
  ) =>
    o.createElement(
      "svg",
      {
        ref: u,
        ...g,
        width: a,
        height: a,
        stroke: s,
        strokeWidth: i ? (Number(r) * 24) / Number(a) : r,
        className: m("lucide", l),
        ...h,
      },
      [
        ...d.map(([p, j]) => o.createElement(p, j)),
        ...(Array.isArray(t) ? t : [t]),
      ],
    ),
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const c = (s, a) => {
  const r = o.forwardRef(({ className: i, ...l }, t) =>
    o.createElement(N, {
      ref: t,
      iconNode: a,
      className: m(`lucide-${v(s)}`, i),
      ...l,
    }),
  );
  return (r.displayName = `${s}`), r;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const b = c("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y = c("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w = c("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k = c("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H = c("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  x = "/assets/logo-no-text-alternate-DZcs-jxp.png",
  L = () => {
    const [s, a] = o.useState(!1),
      r = f(),
      i = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Services", path: "/services" },
        { title: "Referral", path: "/referral" },
        { title: "Contact", path: "/contact" },
      ],
      l = (t) => r.pathname === t;
    return e.jsxs("nav", {
      className: "bg-white border-b border-border sticky top-0 z-50 shadow-sm",
      children: [
        e.jsxs("div", {
          className: "autism-container flex justify-between items-center py-4",
          children: [
            e.jsxs(n, {
              to: "/",
              className: "flex items-center gap-2",
              children: [
                e.jsx("img", {
                  src: x,
                  alt: "Hopeful Horizons Logo",
                  className: "h-[5rem]",
                }),
                e.jsx("span", {
                  className: "text-3xl font-bold text-autism-bright-blue",
                  children: "Hopeful Horizons",
                }),
              ],
            }),
            e.jsx("div", {
              className: "hidden md:flex items-center space-x-8",
              children: i.map((t) =>
                e.jsx(
                  n,
                  {
                    to: t.path,
                    className: `text-primary hover:text-secondary transition-colors ${l(t.path) ? "font-semibold border-b-2 border-primary" : ""}`,
                    children: t.title,
                  },
                  t.path,
                ),
              ),
            }),
            e.jsx("div", {
              className: "md:hidden",
              children: e.jsx("button", {
                onClick: () => a(!s),
                className: "text-neutral-dark p-2",
                children: s ? e.jsx(H, { size: 24 }) : e.jsx(w, { size: 24 }),
              }),
            }),
          ],
        }),
        s &&
          e.jsx("div", {
            className: "md:hidden bg-white border-t border-border",
            children: e.jsx("div", {
              className: "autism-container py-4 flex flex-col space-y-4",
              children: i.map((t) =>
                e.jsx(
                  n,
                  {
                    to: t.path,
                    onClick: () => a(!1),
                    className: `text-neutral-dark hover:text-primary transition-colors py-2 ${l(t.path) ? "font-semibold border-l-4 pl-2 border-primary" : ""}`,
                    children: t.title,
                  },
                  t.path,
                ),
              ),
            }),
          }),
      ],
    });
  },
  z = () => {
    const s = new Date().getFullYear();
    return e.jsx("footer", {
      className: "bg-autism-neutral-dark text-autism-white",
      children: e.jsxs("div", {
        className: "autism-container py-12",
        children: [
          e.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
            children: [
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx("img", {
                        src: x,
                        alt: "Hopeful Horizons Logo",
                        className: "h-10 w-10 rounded-full",
                      }),
                      e.jsx("span", {
                        className: "text-xl font-bold",
                        children: "Hopeful Horizons",
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "max-w-xs",
                    children:
                      "Supporting individuals and families affected by autism with compassion, understanding, and expertise.",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsx("h3", {
                    className: "font-semibold text-lg",
                    children: "Quick Links",
                  }),
                  e.jsxs("ul", {
                    className: "space-y-2",
                    children: [
                      e.jsx("li", {
                        children: e.jsx(n, {
                          to: "/",
                          className:
                            "hover:text-autism-interactive-hover transition-colors",
                          children: "Home",
                        }),
                      }),
                      e.jsx("li", {
                        children: e.jsx(n, {
                          to: "/about",
                          className:
                            "hover:text-autism-interactive-hover transition-colors",
                          children: "About Us",
                        }),
                      }),
                      e.jsx("li", {
                        children: e.jsx(n, {
                          to: "/services",
                          className:
                            "hover:text-autism-interactive-hover transition-colors",
                          children: "Services",
                        }),
                      }),
                      e.jsx("li", {
                        children: e.jsx(n, {
                          to: "/resources",
                          className:
                            "hover:text-autism-interactive-hover transition-colors",
                          children: "Resources",
                        }),
                      }),
                      e.jsx("li", {
                        children: e.jsx(n, {
                          to: "/contact",
                          className:
                            "hover:text-autism-interactive-hover transition-colors",
                          children: "Contact",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsx("h3", {
                    className: "font-semibold text-lg",
                    children: "Contact Us",
                  }),
                  e.jsxs("address", {
                    className: "not-italic space-y-2",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(y, { size: 16 }),
                          e.jsx("span", {
                            children:
                              "5901 Brooklyn Blvd Ste #200 Brooklyn Center, MN 55429",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(k, { size: 16 }),
                          e.jsx("a", {
                            href: "tel:+16122222817",
                            className:
                              "hover:text-autism-accent-cta transition-colors",
                            children: "(612) 222-2817",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(b, { size: 16 }),
                          e.jsx("a", {
                            href: "mailto:admin@hopefulhorizonsmn.com",
                            className:
                              "hover:text-autism-accent-cta transition-colors",
                            children: "admin@hopefulhorizonsmn.com",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className: "border-t mt-8 pt-8 text-center",
            children: e.jsxs("p", {
              children: [
                "© ",
                s,
                " Hopeful Horizons LLC. All rights reserved.",
              ],
            }),
          }),
        ],
      }),
    });
  },
  $ = ({ children: s }) =>
    e.jsxs("div", {
      className: "flex flex-col min-h-screen",
      children: [
        e.jsx(L, {}),
        e.jsx("main", { className: "flex-grow", children: s }),
        e.jsx(z, {}),
      ],
    }),
  C = "/assets/logo-alternate-DIEAiVQw.png",
  E = ({
    title: s,
    subtitle: a,
    ctaText: r = "Learn More",
    ctaLink: i = "/about",
    image: l = C,
  }) =>
    e.jsx("div", {
      className: "bg-autism-neutral-light relative overflow-hidden",
      children: e.jsx("div", {
        className: "autism-container py-12 md:py-20",
        children: e.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
          children: [
            e.jsxs("div", {
              className: "space-y-6 animate-fade-in",
              children: [
                e.jsx("h1", {
                  className:
                    "text-4xl md:text-5xl font-bold text-autism-neutral-dark leading-tight",
                  children: s,
                }),
                e.jsx("p", {
                  className: "text-xl md:text-2xl text-autism-neutral-dark",
                  children: a,
                }),
                r &&
                  e.jsx("div", {
                    className: "pt-4",
                    children: e.jsx(n, {
                      to: i,
                      className: "autism-btn-primary inline-block",
                      children: r,
                    }),
                  }),
              ],
            }),
            e.jsx("div", {
              className:
                "order-first md:order-last flex justify-center md:justify-end animate-fade-in",
              children: l
                ? e.jsx("img", {
                    src: l,
                    alt: "Hopeful Horizons",
                    className:
                      "rounded-lg max-h-[400px] w-auto object-cover shadow-lg border-4 border-white",
                  })
                : e.jsx("div", {
                    className:
                      "aspect-video w-full max-w-lg bg-autism-bright-blue rounded-lg flex items-center justify-center",
                    children: e.jsx("span", {
                      className: "text-xl font-semibold",
                      children: "Hopeful Horizons",
                    }),
                  }),
            }),
          ],
        }),
      }),
    }),
  S = ({
    title: s,
    subtitle: a,
    children: r,
    className: i = "",
    color: l = "default",
    id: t,
  }) => {
    const d = l === "alternate" ? "bg-autism-light-gray" : "bg-white";
    return e.jsx("section", {
      id: t,
      className: `py-12 md:py-16 ${d} ${i}`,
      children: e.jsxs("div", {
        className: "autism-container",
        children: [
          (s || a) &&
            e.jsxs("div", {
              className: "mb-10 text-center max-w-3xl mx-auto",
              children: [
                s &&
                  e.jsx("h2", {
                    className: "text-3xl md:text-4xl font-bold mb-4",
                    children: s,
                  }),
                a &&
                  e.jsx("p", {
                    className: "text-lg text-autism-neutral-dark",
                    children: a,
                  }),
              ],
            }),
          r,
        ],
      }),
    });
  };
export { E as H, $ as L, y as M, k as P, S, b as a, c };
