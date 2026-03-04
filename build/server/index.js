import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import {
  createReadableStreamFromReadable,
  unstable_composeUploadHandlers,
  unstable_createFileUploadHandler,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/node";
import {
  RemixServer,
  Outlet,
  useLocation,
  Meta,
  Links,
  ScrollRestoration,
  Scripts,
  useActionData,
} from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Toaster, toast } from "sonner";
import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation as useLocation$1, Link } from "react-router-dom";
import {
  X,
  Menu,
  MapPin,
  Phone,
  Mail,
  Calendar,
  BookOpen,
  Info,
  Download,
  ExternalLink,
  Check,
  Users,
  CheckCircle,
  Book,
  Clock,
} from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as LabelPrimitive from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import "next-themes";
import { Resend } from "resend";
const ABORT_DELAY = 5e3;
function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
  loadContext,
) {
  let prohibitOutOfOrderStreaming =
    isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode;
  return prohibitOutOfOrderStreaming
    ? handleBotRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext,
      )
    : handleBrowserRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext,
      );
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
function handleBotRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(RemixServer, {
        context: remixContext,
        url: request.url,
        abortDelay: ABORT_DELAY,
      }),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            }),
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        },
      },
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(RemixServer, {
        context: remixContext,
        url: request.url,
        abortDelay: ABORT_DELAY,
      }),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            }),
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        },
      },
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: handleRequest,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
const autismImg0 = "/assets/autism0-Cxt50i2D.jpg";
const siteUrl$6 = "https://hopefulhorizonsmn.com";
const siteName = "Hopeful Horizons ABA Therapy Center";
const siteDescription =
  "Compassionate autism support and ABA therapy for families across Minneapolis, St. Paul, and the Twin Cities.";
const ogImageUrl = autismImg0.startsWith("http")
  ? autismImg0
  : `${siteUrl$6}${autismImg0}`;
const meta$6 = () => [
  { title: `${siteName} | Autism & ABA Therapy in Minneapolis-St. Paul` },
  { name: "description", content: siteDescription },
  {
    name: "keywords",
    content:
      "Autism, ABA therapy, ABA center, Minneapolis, St. Paul, Twin Cities, Minnesota, autism services, behavior therapy",
  },
  { name: "robots", content: "index,follow" },
  {
    property: "og:title",
    content: `${siteName} | Autism & ABA Therapy in Minneapolis-St. Paul`,
  },
  { property: "og:description", content: siteDescription },
  { property: "og:type", content: "website" },
  { property: "og:url", content: siteUrl$6 },
  { property: "og:image", content: ogImageUrl },
  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: `${siteName} | Autism & ABA Therapy in Minneapolis-St. Paul`,
  },
  { name: "twitter:description", content: siteDescription },
  { name: "twitter:image", content: ogImageUrl },
];
function Layout$1({ children }) {
  const location = useLocation();
  const canonicalUrl = `${siteUrl$6}${location.pathname}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteUrl$6}/#organization`,
    name: siteName,
    url: siteUrl$6,
    telephone: "+1-612-222-2817",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5901 Brooklyn Blvd Ste #200",
      addressLocality: "Brooklyn Center",
      addressRegion: "MN",
      postalCode: "55429",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Minneapolis" },
      { "@type": "City", name: "St. Paul" },
      { "@type": "AdministrativeArea", name: "Twin Cities, MN" },
    ],
    description: siteDescription,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ jsxs("head", {
        children: [
          /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
          /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl }),
          /* @__PURE__ */ jsx("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          }),
          /* @__PURE__ */ jsx(Meta, {}),
          /* @__PURE__ */ jsx(Links, {}),
          /* @__PURE__ */ jsx("script", {
            type: "application/ld+json",
            dangerouslySetInnerHTML: { __html: JSON.stringify(structuredData) },
          }),
        ],
      }),
      /* @__PURE__ */ jsxs("body", {
        children: [
          /* @__PURE__ */ jsx(Toaster, { closeButton: true, richColors: true }),
          children,
          /* @__PURE__ */ jsx(ScrollRestoration, {}),
          /* @__PURE__ */ jsx(Scripts, {}),
        ],
      }),
    ],
  });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      Layout: Layout$1,
      default: App,
      meta: meta$6,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
const logo = "/assets/logo-no-text-alternate-DZcs-jxp.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation$1();
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    // { title: "Resources", path: "/resources" },
    { title: "Referral", path: "/referral" },
    { title: "Contact", path: "/contact" },
  ];
  const isActive = (path) => {
    return location.pathname === path;
  };
  return /* @__PURE__ */ jsxs("nav", {
    className: "bg-white border-b border-border sticky top-0 z-50 shadow-sm",
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "autism-container flex justify-between items-center py-4",
        children: [
          /* @__PURE__ */ jsxs(Link, {
            to: "/",
            className: "flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsx("img", {
                src: logo,
                alt: "Hopeful Horizons Logo",
                className: "h-[5rem]",
              }),
              /* @__PURE__ */ jsx("span", {
                className: "text-3xl font-bold text-autism-bright-blue",
                children: "Hopeful Horizons",
              }),
            ],
          }),
          /* @__PURE__ */ jsx("div", {
            className: "hidden md:flex items-center space-x-8",
            children: navLinks.map((link) =>
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: link.path,
                  className: `text-primary hover:text-secondary transition-colors ${isActive(link.path) ? "font-semibold border-b-2 border-primary" : ""}`,
                  children: link.title,
                },
                link.path,
              ),
            ),
          }),
          /* @__PURE__ */ jsx("div", {
            className: "md:hidden",
            children: /* @__PURE__ */ jsx("button", {
              onClick: () => setIsMenuOpen(!isMenuOpen),
              className: "text-neutral-dark p-2",
              children: isMenuOpen
                ? /* @__PURE__ */ jsx(X, { size: 24 })
                : /* @__PURE__ */ jsx(Menu, { size: 24 }),
            }),
          }),
        ],
      }),
      isMenuOpen &&
        /* @__PURE__ */ jsx("div", {
          className: "md:hidden bg-white border-t border-border",
          children: /* @__PURE__ */ jsx("div", {
            className: "autism-container py-4 flex flex-col space-y-4",
            children: navLinks.map((link) =>
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: link.path,
                  onClick: () => setIsMenuOpen(false),
                  className: `text-neutral-dark hover:text-primary transition-colors py-2 ${isActive(link.path) ? "font-semibold border-l-4 pl-2 border-primary" : ""}`,
                  children: link.title,
                },
                link.path,
              ),
            ),
          }),
        }),
    ],
  });
};
const Footer = () => {
  const currentYear = /* @__PURE__ */ new Date().getFullYear();
  return /* @__PURE__ */ jsx("footer", {
    className: "bg-autism-neutral-dark text-autism-white",
    children: /* @__PURE__ */ jsxs("div", {
      className: "autism-container py-12",
      children: [
        /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "space-y-3",
              children: [
                /* @__PURE__ */ jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsx("img", {
                      src: logo,
                      alt: "Hopeful Horizons Logo",
                      className: "h-10 w-10 rounded-full",
                    }),
                    /* @__PURE__ */ jsx("span", {
                      className: "text-xl font-bold",
                      children: "Hopeful Horizons",
                    }),
                  ],
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "max-w-xs",
                  children:
                    "Supporting individuals and families affected by autism with compassion, understanding, and expertise.",
                }),
              ],
            }),
            /* @__PURE__ */ jsxs("div", {
              className: "space-y-3",
              children: [
                /* @__PURE__ */ jsx("h3", {
                  className: "font-semibold text-lg",
                  children: "Quick Links",
                }),
                /* @__PURE__ */ jsxs("ul", {
                  className: "space-y-2",
                  children: [
                    /* @__PURE__ */ jsx("li", {
                      children: /* @__PURE__ */ jsx(Link, {
                        to: "/",
                        className:
                          "hover:text-autism-interactive-hover transition-colors",
                        children: "Home",
                      }),
                    }),
                    /* @__PURE__ */ jsx("li", {
                      children: /* @__PURE__ */ jsx(Link, {
                        to: "/about",
                        className:
                          "hover:text-autism-interactive-hover transition-colors",
                        children: "About Us",
                      }),
                    }),
                    /* @__PURE__ */ jsx("li", {
                      children: /* @__PURE__ */ jsx(Link, {
                        to: "/services",
                        className:
                          "hover:text-autism-interactive-hover transition-colors",
                        children: "Services",
                      }),
                    }),
                    /* @__PURE__ */ jsx("li", {
                      children: /* @__PURE__ */ jsx(Link, {
                        to: "/resources",
                        className:
                          "hover:text-autism-interactive-hover transition-colors",
                        children: "Resources",
                      }),
                    }),
                    /* @__PURE__ */ jsx("li", {
                      children: /* @__PURE__ */ jsx(Link, {
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
            /* @__PURE__ */ jsxs("div", {
              className: "space-y-3",
              children: [
                /* @__PURE__ */ jsx("h3", {
                  className: "font-semibold text-lg",
                  children: "Contact Us",
                }),
                /* @__PURE__ */ jsxs("address", {
                  className: "not-italic space-y-2",
                  children: [
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsx(MapPin, { size: 16 }),
                        /* @__PURE__ */ jsx("span", {
                          children:
                            "5901 Brooklyn Blvd Ste #200, Brooklyn Center, MN 55429",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsx(Phone, { size: 16 }),
                        /* @__PURE__ */ jsx("a", {
                          href: "tel:+16122222817",
                          className:
                            "hover:text-autism-accent-cta transition-colors",
                          children: "(612) 222-2817",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsx(Mail, { size: 16 }),
                        /* @__PURE__ */ jsx("a", {
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
        /* @__PURE__ */ jsx("div", {
          className: "border-t mt-8 pt-8 text-center",
          children: /* @__PURE__ */ jsxs("p", {
            children: [
              "© ",
              currentYear,
              " Hopeful Horizons LLC. All rights reserved.",
            ],
          }),
        }),
      ],
    }),
  });
};
const Layout = ({ children }) => {
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col min-h-screen",
    children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx("main", { className: "flex-grow", children }),
      /* @__PURE__ */ jsx(Footer, {}),
    ],
  });
};
const hopefulHorizonsLogo = "/assets/logo-alternate-DIEAiVQw.png";
const Hero = ({
  title,
  subtitle,
  ctaText = "Learn More",
  ctaLink = "/about",
  image = hopefulHorizonsLogo,
}) => {
  return /* @__PURE__ */ jsx("div", {
    className: "bg-autism-neutral-light relative overflow-hidden",
    children: /* @__PURE__ */ jsx("div", {
      className: "autism-container py-12 md:py-20",
      children: /* @__PURE__ */ jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "space-y-6 animate-fade-in",
            children: [
              /* @__PURE__ */ jsx("h1", {
                className:
                  "text-4xl md:text-5xl font-bold text-autism-neutral-dark leading-tight",
                children: title,
              }),
              /* @__PURE__ */ jsx("p", {
                className: "text-xl md:text-2xl text-autism-neutral-dark",
                children: subtitle,
              }),
              ctaText &&
                /* @__PURE__ */ jsx("div", {
                  className: "pt-4",
                  children: /* @__PURE__ */ jsx(Link, {
                    to: ctaLink,
                    className: "autism-btn-primary inline-block",
                    children: ctaText,
                  }),
                }),
            ],
          }),
          /* @__PURE__ */ jsx("div", {
            className:
              "order-first md:order-last flex justify-center md:justify-end animate-fade-in",
            children: image
              ? /* @__PURE__ */ jsx("img", {
                  src: image,
                  alt: "Hopeful Horizons",
                  className:
                    "rounded-lg max-h-[400px] w-auto object-cover shadow-lg border-4 border-white",
                })
              : /* @__PURE__ */ jsx("div", {
                  className:
                    "aspect-video w-full max-w-lg bg-autism-bright-blue rounded-lg flex items-center justify-center",
                  children: /* @__PURE__ */ jsx("span", {
                    className: "text-xl font-semibold",
                    children: "Hopeful Horizons",
                  }),
                }),
          }),
        ],
      }),
    }),
  });
};
const Section = ({
  title,
  subtitle,
  children,
  className = "",
  color = "default",
  id,
}) => {
  const bgColor = color === "alternate" ? "bg-autism-light-gray" : "bg-white";
  return /* @__PURE__ */ jsx("section", {
    id,
    className: `py-12 md:py-16 ${bgColor} ${className}`,
    children: /* @__PURE__ */ jsxs("div", {
      className: "autism-container",
      children: [
        (title || subtitle) &&
          /* @__PURE__ */ jsxs("div", {
            className: "mb-10 text-center max-w-3xl mx-auto",
            children: [
              title &&
                /* @__PURE__ */ jsx("h2", {
                  className: "text-3xl md:text-4xl font-bold mb-4",
                  children: title,
                }),
              subtitle &&
                /* @__PURE__ */ jsx("p", {
                  className: "text-lg text-autism-neutral-dark",
                  children: subtitle,
                }),
            ],
          }),
        children,
      ],
    }),
  });
};
const siteUrl$5 = "https://hopefulhorizonsmn.com/resources";
const meta$5 = () => [
  {
    title:
      "Autism Resources & Events | Minneapolis-St. Paul | Hopeful Horizons",
  },
  {
    name: "description",
    content:
      "Autism resources, workshops, and community connections for families in Minneapolis, St. Paul, and the Twin Cities.",
  },
  {
    name: "keywords",
    content:
      "autism resources, ABA workshops, Twin Cities events, Minneapolis St. Paul autism support",
  },
  {
    property: "og:title",
    content:
      "Autism Resources & Events | Minneapolis-St. Paul | Hopeful Horizons",
  },
  {
    property: "og:description",
    content:
      "Autism resources, workshops, and community connections for families in Minneapolis, St. Paul, and the Twin Cities.",
  },
  { property: "og:type", content: "website" },
  { property: "og:url", content: siteUrl$5 },
];
const Resources = () => {
  const upcomingEvents = [
    {
      title: "Understanding IEPs",
      date: "June 15, 2025",
      time: "6:30-8:00pm",
      location: "Hopeful Horizons - Conference Room",
      description:
        "Learn about Individualized Education Programs and how to advocate for your child in school settings.",
    },
    {
      title: "Sensory Strategies at Home",
      date: "June 22, 2025",
      time: "10:00-11:30am",
      location: "Hopeful Horizons - Activity Room",
      description:
        "Practical strategies for creating sensory-friendly environments and activities at home.",
    },
    {
      title: "Transition Planning Workshop",
      date: "July 8, 2025",
      time: "6:00-7:30pm",
      location: "Hopeful Horizons - Conference Room",
      description:
        "Planning for transitions across the lifespan, from early childhood to adulthood.",
    },
    {
      title: "Parent Support Group",
      date: "July 15, 2025",
      time: "7:00-8:30pm",
      location: "Hopeful Horizons - Community Room",
      description:
        "Monthly gathering for parents to share experiences and support one another.",
    },
  ];
  const educationalResources = [
    {
      title: "Understanding Autism Spectrum Disorder",
      description:
        "An overview of autism, including signs, symptoms, and support strategies.",
      type: "PDF Guide",
      icon: /* @__PURE__ */ jsx(Download, { size: 20 }),
    },
    {
      title: "Visual Supports and Social Stories",
      description:
        "Templates and examples to help with communication and transitions.",
      type: "Resource Kit",
      icon: /* @__PURE__ */ jsx(Download, { size: 20 }),
    },
    {
      title: "Sensory Processing Guide",
      description:
        "Understanding sensory challenges and implementing effective supports.",
      type: "PDF Guide",
      icon: /* @__PURE__ */ jsx(Download, { size: 20 }),
    },
    {
      title: "Executive Functioning Strategies",
      description:
        "Tools for improving organization, planning, and time management skills.",
      type: "PDF Guide",
      icon: /* @__PURE__ */ jsx(Download, { size: 20 }),
    },
  ];
  const communityResources = [
    {
      title: "Minnesota Department of Human Services",
      description:
        "Information on state programs and services for individuals with disabilities.",
      link: "https://mn.gov/dhs/",
      icon: /* @__PURE__ */ jsx(ExternalLink, { size: 20 }),
    },
    {
      title: "Autism Society of Minnesota",
      description:
        "Advocacy, education, and community connections for individuals affected by autism.",
      link: "https://ausm.org/",
      icon: /* @__PURE__ */ jsx(ExternalLink, { size: 20 }),
    },
    {
      title: "PACER Center",
      description:
        "Parent training and information center for families of children with disabilities.",
      link: "https://www.pacer.org/",
      icon: /* @__PURE__ */ jsx(ExternalLink, { size: 20 }),
    },
    {
      title: "Minnesota Autism Resource Portal",
      description:
        "Centralized resource for autism services and supports across Minnesota.",
      link: "https://mn.gov/autism/",
      icon: /* @__PURE__ */ jsx(ExternalLink, { size: 20 }),
    },
  ];
  return /* @__PURE__ */ jsxs(Layout, {
    children: [
      /* @__PURE__ */ jsx(Hero, {
        title: "Resources",
        subtitle:
          "Educational materials, upcoming events, and Twin Cities community connections to support your journey",
      }),
      /* @__PURE__ */ jsx(Section, {
        id: "upcoming-events",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col md:flex-row items-start gap-8",
          children: [
            /* @__PURE__ */ jsx("div", {
              className: "md:w-1/3",
              children: /* @__PURE__ */ jsxs("div", {
                className: "sticky top-24",
                children: [
                  /* @__PURE__ */ jsxs("div", {
                    className: "flex items-center gap-3 mb-6",
                    children: [
                      /* @__PURE__ */ jsx(Calendar, {
                        size: 32,
                        className: "text-autism-soft-coral",
                      }),
                      /* @__PURE__ */ jsx("h2", {
                        className: "text-2xl md:text-3xl font-bold",
                        children: "Upcoming Events",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsx("p", {
                    className: "mb-6 text-autism-complementary-text",
                    children:
                      "Join us for these informative and supportive events at our center. Registration is required for all workshops.",
                  }),
                  /* @__PURE__ */ jsx(Link, {
                    to: "/contact",
                    className: "autism-btn-primary block text-center",
                    children: "Register for Events",
                  }),
                ],
              }),
            }),
            /* @__PURE__ */ jsx("div", {
              className: "md:w-2/3 space-y-6",
              children: upcomingEvents.map((event, index) =>
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className:
                      "bg-white rounded-lg p-6 shadow-sm border border-autism-powder-apricot",
                    children: [
                      /* @__PURE__ */ jsx("h3", {
                        className: "text-xl font-semibold mb-2",
                        children: event.title,
                      }),
                      /* @__PURE__ */ jsxs("div", {
                        className:
                          "flex flex-wrap gap-x-8 gap-y-2 mb-4 text-autism-complementary-text",
                        children: [
                          /* @__PURE__ */ jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              /* @__PURE__ */ jsx(Calendar, {
                                size: 16,
                                className: "text-autism-soft-coral",
                              }),
                              /* @__PURE__ */ jsx("span", {
                                children: event.date,
                              }),
                            ],
                          }),
                          /* @__PURE__ */ jsx("div", {
                            className: "flex items-center gap-2",
                            children: /* @__PURE__ */ jsx("span", {
                              className: "font-medium",
                              children: event.time,
                            }),
                          }),
                          /* @__PURE__ */ jsx("div", {
                            className: "flex items-center gap-2",
                            children: /* @__PURE__ */ jsx("span", {
                              children: event.location,
                            }),
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsx("p", {
                        className: "text-autism-complementary-text",
                        children: event.description,
                      }),
                    ],
                  },
                  index,
                ),
              ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx(Section, {
        id: "educational-materials",
        color: "alternate",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col md:flex-row items-start gap-8",
          children: [
            /* @__PURE__ */ jsx("div", {
              className: "md:w-1/3",
              children: /* @__PURE__ */ jsxs("div", {
                className: "sticky top-24",
                children: [
                  /* @__PURE__ */ jsxs("div", {
                    className: "flex items-center gap-3 mb-6",
                    children: [
                      /* @__PURE__ */ jsx(BookOpen, {
                        size: 32,
                        className: "text-autism-soft-coral",
                      }),
                      /* @__PURE__ */ jsx("h2", {
                        className: "text-2xl md:text-3xl font-bold",
                        children: "Educational Materials",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsx("p", {
                    className: "mb-6 text-autism-complementary-text",
                    children:
                      "Free downloadable resources to help you better understand autism and implement effective strategies at home and in the community.",
                  }),
                ],
              }),
            }),
            /* @__PURE__ */ jsx("div", {
              className: "md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6",
              children: educationalResources.map((resource, index) =>
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className:
                      "bg-white rounded-lg p-6 shadow-sm border border-autism-powder-apricot",
                    children: [
                      /* @__PURE__ */ jsx("h3", {
                        className: "text-lg font-semibold mb-2",
                        children: resource.title,
                      }),
                      /* @__PURE__ */ jsx("p", {
                        className: "mb-4 text-autism-complementary-text",
                        children: resource.description,
                      }),
                      /* @__PURE__ */ jsxs("div", {
                        className: "flex justify-between items-center",
                        children: [
                          /* @__PURE__ */ jsx("span", {
                            className:
                              "text-sm bg-autism-honey-blush px-3 py-1 rounded-full",
                            children: resource.type,
                          }),
                          /* @__PURE__ */ jsxs("button", {
                            className:
                              "flex items-center gap-2 text-autism-soft-coral hover:text-autism-peach-cream transition-colors",
                            children: [
                              resource.icon,
                              /* @__PURE__ */ jsx("span", {
                                children: "Download",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  index,
                ),
              ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx(Section, {
        id: "community-resources",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col md:flex-row items-start gap-8",
          children: [
            /* @__PURE__ */ jsx("div", {
              className: "md:w-1/3",
              children: /* @__PURE__ */ jsxs("div", {
                className: "sticky top-24",
                children: [
                  /* @__PURE__ */ jsxs("div", {
                    className: "flex items-center gap-3 mb-6",
                    children: [
                      /* @__PURE__ */ jsx(Info, {
                        size: 32,
                        className: "text-autism-soft-coral",
                      }),
                      /* @__PURE__ */ jsx("h2", {
                        className: "text-2xl md:text-3xl font-bold",
                        children: "Community Resources",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsx("p", {
                    className: "mb-6 text-autism-complementary-text",
                    children:
                      "Connect with these valuable organizations and services in Minnesota that provide additional support for individuals with autism and their families.",
                  }),
                ],
              }),
            }),
            /* @__PURE__ */ jsx("div", {
              className: "md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6",
              children: communityResources.map((resource, index) =>
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className:
                      "bg-white rounded-lg p-6 shadow-sm border border-autism-powder-apricot",
                    children: [
                      /* @__PURE__ */ jsx("h3", {
                        className: "text-lg font-semibold mb-2",
                        children: resource.title,
                      }),
                      /* @__PURE__ */ jsx("p", {
                        className: "mb-4 text-autism-complementary-text",
                        children: resource.description,
                      }),
                      /* @__PURE__ */ jsx("div", {
                        className: "flex justify-end",
                        children: /* @__PURE__ */ jsxs("a", {
                          href: resource.link,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "flex items-center gap-2 text-autism-soft-coral hover:text-autism-peach-cream transition-colors",
                          children: [
                            resource.icon,
                            /* @__PURE__ */ jsx("span", {
                              children: "Visit Website",
                            }),
                          ],
                        }),
                      }),
                    ],
                  },
                  index,
                ),
              ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx(Section, {
        color: "alternate",
        className: "text-center",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-3xl mx-auto bg-autism-honey-blush p-8 rounded-lg",
          children: [
            /* @__PURE__ */ jsx("h2", {
              className: "text-2xl font-bold mb-4",
              children: "Resource Library",
            }),
            /* @__PURE__ */ jsx("p", {
              className: "text-lg mb-6",
              children:
                "Visit our center's resource library for books, visual supports, sensory tools, and more that you can borrow.",
            }),
            /* @__PURE__ */ jsx("div", {
              className: "flex flex-col md:flex-row justify-center gap-4",
              children: /* @__PURE__ */ jsx(Link, {
                to: "/contact",
                className: "autism-btn-primary text-center",
                children: "Contact for Library Hours",
              }),
            }),
          ],
        }),
      }),
    ],
  });
};
const route1 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: Resources,
      meta: meta$5,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
const NotFound = () => {
  const location = useLocation$1();
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);
  return /* @__PURE__ */ jsx("div", {
    className: "min-h-screen flex items-center justify-center bg-gray-100",
    children: /* @__PURE__ */ jsxs("div", {
      className: "text-center",
      children: [
        /* @__PURE__ */ jsx("h1", {
          className: "text-4xl font-bold mb-4",
          children: "404",
        }),
        /* @__PURE__ */ jsx("p", {
          className: "text-xl text-gray-600 mb-4",
          children: "Oops! Page not found",
        }),
        /* @__PURE__ */ jsx("a", {
          href: "/",
          className: "text-blue-500 hover:text-blue-700 underline",
          children: "Return to Home",
        }),
      ],
    }),
  });
};
const route2 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: NotFound,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props,
    });
  },
);
Button.displayName = "Button";
const Checkbox = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(CheckboxPrimitive.Root, {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className,
    ),
    ...props,
    children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, {
      className: cn("flex items-center justify-center text-current"),
      children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }),
    }),
  }),
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return /* @__PURE__ */ jsx("input", {
    type,
    className: cn(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      className,
    ),
    ref,
    ...props,
  });
});
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);
const Label = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx(LabelPrimitive.Root, {
    ref,
    className: cn(labelVariants(), className),
    ...props,
  }),
);
Label.displayName = LabelPrimitive.Root.displayName;
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx("textarea", {
    className: cn(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    ),
    ref,
    ...props,
  });
});
Textarea.displayName = "Textarea";
const EmailTemplate = ({ data, referral }) => {
  console.log({ data, referral });
  return referral
    ? /* @__PURE__ */ jsxs("div", {
        children: [
          /* @__PURE__ */ jsx("h2", { children: "New Referral Submission" }),
          /* @__PURE__ */ jsxs("p", {
            children: [
              /* @__PURE__ */ jsx("strong", { children: "Referral Type:" }),
              " ",
              Array.isArray(data.referralType)
                ? data.referralType.join(", ")
                : data.referralType || "N/A",
            ],
          }),
          /* @__PURE__ */ jsxs("p", {
            children: [
              /* @__PURE__ */ jsx("strong", { children: "Referrer Name:" }),
              " ",
              data.referrerName,
            ],
          }),
          /* @__PURE__ */ jsxs("p", {
            children: [
              /* @__PURE__ */ jsx("strong", { children: "Organization:" }),
              " ",
              data.referrerOrganization || "N/A",
            ],
          }),
          /* @__PURE__ */ jsxs("p", {
            children: [
              /* @__PURE__ */ jsx("strong", { children: "Email:" }),
              " ",
              data.referrerEmail,
            ],
          }),
          /* @__PURE__ */ jsxs("p", {
            children: [
              /* @__PURE__ */ jsx("strong", { children: "Phone:" }),
              " ",
              data.referrerPhone,
            ],
          }),
          /* @__PURE__ */ jsx("hr", {}),
          /* @__PURE__ */ jsxs("p", {
            children: [
              /* @__PURE__ */ jsx("strong", { children: "Client Name:" }),
              " ",
              data.clientName,
            ],
          }),
          /* @__PURE__ */ jsxs("p", {
            children: [
              /* @__PURE__ */ jsx("strong", { children: "Client Age:" }),
              " ",
              data.clientAge,
            ],
          }),
          /* @__PURE__ */ jsxs("p", {
            children: [
              /* @__PURE__ */ jsx("strong", {
                children: "Reason for Referral:",
              }),
              " ",
              data.reasonForReferral,
            ],
          }),
          /* @__PURE__ */ jsxs("p", {
            children: [
              /* @__PURE__ */ jsx("strong", {
                children: "Services Interested In:",
              }),
              " ",
              Array.isArray(data.servicesInterested)
                ? data.servicesInterested.join(", ")
                : data.servicesInterested || "N/A",
            ],
          }),
          /* @__PURE__ */ jsxs("p", {
            children: [
              /* @__PURE__ */ jsx("strong", { children: "Consent Given:" }),
              " ",
              data.consent ? "Yes" : "No",
            ],
          }),
        ],
      })
    : /* @__PURE__ */ jsxs("div", {
        children: [
          /* @__PURE__ */ jsx("h2", { children: "New Contact Submission" }),
          /* @__PURE__ */ jsxs("p", {
            children: [
              /* @__PURE__ */ jsx("strong", { children: "Name:" }),
              " ",
              data.name,
            ],
          }),
          /* @__PURE__ */ jsxs("p", {
            children: [
              /* @__PURE__ */ jsx("strong", { children: "Email:" }),
              " ",
              data.email,
            ],
          }),
          /* @__PURE__ */ jsxs("p", {
            children: [
              /* @__PURE__ */ jsx("strong", { children: "Phone:" }),
              " ",
              data.phone,
            ],
          }),
          /* @__PURE__ */ jsxs("p", {
            children: [
              /* @__PURE__ */ jsx("strong", { children: "Subject:" }),
              " ",
              data.subject,
            ],
          }),
          /* @__PURE__ */ jsxs("p", {
            children: [
              /* @__PURE__ */ jsx("strong", { children: "Message:" }),
              " ",
              data.message,
            ],
          }),
        ],
      });
};
const autismImg9 = "/assets/autism9-Br-D0TXm.jpg";
const siteUrl$4 = "https://hopefulhorizonsmn.com/referral";
const meta$4 = () => [
  { title: "Make a Referral | Autism & ABA Center in Minneapolis-St. Paul" },
  {
    name: "description",
    content:
      "Submit a referral to Hopeful Horizons for autism evaluations and ABA therapy in Minneapolis, St. Paul, and the Twin Cities.",
  },
  {
    name: "keywords",
    content:
      "autism referral, ABA therapy referral, Minneapolis St. Paul ABA center, Twin Cities autism",
  },
  {
    property: "og:title",
    content: "Make a Referral | Autism & ABA Center in Minneapolis-St. Paul",
  },
  {
    property: "og:description",
    content:
      "Submit a referral to Hopeful Horizons for autism evaluations and ABA therapy in Minneapolis, St. Paul, and the Twin Cities.",
  },
  { property: "og:type", content: "website" },
  { property: "og:url", content: siteUrl$4 },
];
async function action$1({ request }) {
  const uploadHandler = unstable_composeUploadHandlers(
    unstable_createFileUploadHandler({
      maxPartSize: 5e6,
      file: ({ filename }) => filename,
    }),
    // parse everything else into memory
    unstable_createMemoryUploadHandler(),
  );
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler,
  );
  const data = Object.fromEntries(formData.entries());
  console.log({ data });
  const resend = new Resend(process.env.RESEND_API_KEY);
  const response = await resend.emails.send({
    from: "admin@hopefulhorizonsmn.com",
    to: "admin@hopefulhorizonsmn.com",
    subject: `New Referral - ${data.clientName}`,
    react: /* @__PURE__ */ jsx(EmailTemplate, { data, referral: true }),
  });
  return response;
}
const Referral = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const [referralSent, setReferralSent] = useState(false);
  const [referralFailed, setReferralFailed] = useState(false);
  const response = useActionData();
  useEffect(() => {
    var _a;
    ((_a = response == null ? void 0 : response.data) == null
      ? void 0
      : _a.id) && setReferralSent(true);
    (response == null ? void 0 : response.error) && setReferralFailed(true);
  }, [response]);
  return /* @__PURE__ */ jsxs(Layout, {
    children: [
      referralSent && toast.success("Referral sent successfully."),
      referralFailed &&
        toast.error("Referral failed to send. Please try again."),
      /* @__PURE__ */ jsx(Hero, {
        title: "Make a Referral",
        subtitle:
          "We're here to help Minneapolis, St. Paul, and Twin Cities families find the support they need",
        ctaText: "",
        ctaLink: "",
        image: autismImg9,
      }),
      /* @__PURE__ */ jsx(Section, {
        title: "Referral Process",
        subtitle:
          "We welcome referrals from healthcare providers, educators, and families.",
        children: /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-8",
          children: [
            /* @__PURE__ */ jsxs("div", {
              children: [
                /* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold mb-4 text-primary",
                  children: "How Our Referral Process Works",
                }),
                /* @__PURE__ */ jsxs("div", {
                  className: "space-y-4",
                  children: [
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex items-start gap-3",
                      children: [
                        /* @__PURE__ */ jsx("div", {
                          className:
                            "w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold",
                          children: "1",
                        }),
                        /* @__PURE__ */ jsxs("div", {
                          children: [
                            /* @__PURE__ */ jsx("h4", {
                              className: "font-medium",
                              children: "Submit a Referral",
                            }),
                            /* @__PURE__ */ jsx("p", {
                              className: "text-neutral-dark mt-1",
                              children:
                                "Complete the referral form on this page with as much detail as possible.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex items-start gap-3",
                      children: [
                        /* @__PURE__ */ jsx("div", {
                          className:
                            "w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold",
                          children: "2",
                        }),
                        /* @__PURE__ */ jsxs("div", {
                          children: [
                            /* @__PURE__ */ jsx("h4", {
                              className: "font-medium",
                              children: "Initial Contact",
                            }),
                            /* @__PURE__ */ jsx("p", {
                              className: "text-neutral-dark mt-1",
                              children:
                                "Our intake coordinator will contact the family within 2 business days of receiving the referral.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex items-start gap-3",
                      children: [
                        /* @__PURE__ */ jsx("div", {
                          className:
                            "w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold",
                          children: "3",
                        }),
                        /* @__PURE__ */ jsxs("div", {
                          children: [
                            /* @__PURE__ */ jsx("h4", {
                              className: "font-medium",
                              children: "Screening & Assessment",
                            }),
                            /* @__PURE__ */ jsx("p", {
                              className: "text-neutral-dark mt-1",
                              children:
                                "We'll schedule an initial assessment to determine the appropriate services.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex items-start gap-3",
                      children: [
                        /* @__PURE__ */ jsx("div", {
                          className:
                            "w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold",
                          children: "4",
                        }),
                        /* @__PURE__ */ jsxs("div", {
                          children: [
                            /* @__PURE__ */ jsx("h4", {
                              className: "font-medium",
                              children: "Service Planning",
                            }),
                            /* @__PURE__ */ jsx("p", {
                              className: "text-neutral-dark mt-1",
                              children:
                                "Our team will develop a personalized plan of care based on individual needs.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs("div", {
                  className:
                    "mt-8 p-5 border border-interactive-hover rounded-lg bg-neutral-light",
                  children: [
                    /* @__PURE__ */ jsx("h4", {
                      className: "font-semibold mb-2",
                      children: "Need immediate assistance?",
                    }),
                    /* @__PURE__ */ jsx("p", {
                      className: "mb-4",
                      children:
                        "If you have urgent questions or need help with the referral process, please contact us directly.",
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex flex-col sm:flex-row gap-3",
                      children: [
                        /* @__PURE__ */ jsx(Button, {
                          className:
                            "bg-primary text-white hover:bg-interactive-hover",
                          children: /* @__PURE__ */ jsx(Link, {
                            to: "/contact",
                            children: "Contact Us",
                          }),
                        }),
                        /* @__PURE__ */ jsx("a", {
                          href: "tel:+16122222817",
                          children: /* @__PURE__ */ jsx(Button, {
                            variant: "outline",
                            className:
                              "border-primary text-primary hover:bg-primary hover:text-white",
                            children: "Call (612) 222-2817",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsxs("div", {
              className:
                "bg-white p-6 rounded-lg shadow-md border border-border",
              children: [
                /* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold mb-4 text-primary",
                  children: "Referral Form",
                }),
                /* @__PURE__ */ jsxs("form", {
                  action: "/referral",
                  method: "POST",
                  encType: "multipart/form-data",
                  id: "referral_form",
                  className: "space-y-5",
                  children: [
                    /* @__PURE__ */ jsxs("div", {
                      className: "space-y-1.5",
                      children: [
                        /* @__PURE__ */ jsx(Label, {
                          htmlFor: "referralType",
                          children: "Referral Type",
                        }),
                        /* @__PURE__ */ jsxs("div", {
                          className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                          children: [
                            /* @__PURE__ */ jsxs("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                /* @__PURE__ */ jsx(Checkbox, {
                                  id: "selfReferral",
                                  ...register("referralType"),
                                  value: "Self-Referral",
                                }),
                                /* @__PURE__ */ jsx("label", {
                                  htmlFor: "selfReferral",
                                  className:
                                    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                                  children: "Self-Referral",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ jsxs("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                /* @__PURE__ */ jsx(Checkbox, {
                                  id: "providerReferral",
                                  ...register("referralType"),
                                  value: "Provider Referral",
                                }),
                                /* @__PURE__ */ jsx("label", {
                                  htmlFor: "providerReferral",
                                  className:
                                    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                                  children: "Provider Referral",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                      children: [
                        /* @__PURE__ */ jsxs("div", {
                          className: "space-y-1.5",
                          children: [
                            /* @__PURE__ */ jsx(Label, {
                              htmlFor: "referrerName",
                              children: "Your Name*",
                            }),
                            /* @__PURE__ */ jsx(Input, {
                              id: "referrerName",
                              ...register("referrerName", { required: true }),
                              className: errors.referrerName
                                ? "border-red-500"
                                : "",
                            }),
                            errors.referrerName &&
                              /* @__PURE__ */ jsx("p", {
                                className: "text-red-500 text-xs mt-1",
                                children: "This field is required",
                              }),
                          ],
                        }),
                        /* @__PURE__ */ jsxs("div", {
                          className: "space-y-1.5",
                          children: [
                            /* @__PURE__ */ jsx(Label, {
                              htmlFor: "referrerOrganization",
                              children: "Organization (if applicable)",
                            }),
                            /* @__PURE__ */ jsx(Input, {
                              id: "referrerOrganization",
                              ...register("referrerOrganization"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                      children: [
                        /* @__PURE__ */ jsxs("div", {
                          className: "space-y-1.5",
                          children: [
                            /* @__PURE__ */ jsx(Label, {
                              htmlFor: "referrerEmail",
                              children: "Your Email*",
                            }),
                            /* @__PURE__ */ jsx(Input, {
                              id: "referrerEmail",
                              type: "email",
                              ...register("referrerEmail", { required: true }),
                              className: errors.referrerEmail
                                ? "border-red-500"
                                : "",
                            }),
                            errors.referrerEmail &&
                              /* @__PURE__ */ jsx("p", {
                                className: "text-red-500 text-xs mt-1",
                                children: "This field is required",
                              }),
                          ],
                        }),
                        /* @__PURE__ */ jsxs("div", {
                          className: "space-y-1.5",
                          children: [
                            /* @__PURE__ */ jsx(Label, {
                              htmlFor: "referrerPhone",
                              children: "Your Phone*",
                            }),
                            /* @__PURE__ */ jsx(Input, {
                              id: "referrerPhone",
                              ...register("referrerPhone", { required: true }),
                              className: errors.referrerPhone
                                ? "border-red-500"
                                : "",
                            }),
                            errors.referrerPhone &&
                              /* @__PURE__ */ jsx("p", {
                                className: "text-red-500 text-xs mt-1",
                                children: "This field is required",
                              }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "border-t border-border my-4 pt-4",
                      children: [
                        /* @__PURE__ */ jsx("h4", {
                          className: "font-medium mb-3",
                          children: "Client Information",
                        }),
                        /* @__PURE__ */ jsxs("div", {
                          className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                          children: [
                            /* @__PURE__ */ jsxs("div", {
                              className: "space-y-1.5",
                              children: [
                                /* @__PURE__ */ jsx(Label, {
                                  htmlFor: "clientName",
                                  children: "Client Name*",
                                }),
                                /* @__PURE__ */ jsx(Input, {
                                  id: "clientName",
                                  ...register("clientName", { required: true }),
                                  className: errors.clientName
                                    ? "border-red-500"
                                    : "",
                                }),
                                errors.clientName &&
                                  /* @__PURE__ */ jsx("p", {
                                    className: "text-red-500 text-xs mt-1",
                                    children: "This field is required",
                                  }),
                              ],
                            }),
                            /* @__PURE__ */ jsxs("div", {
                              className: "space-y-1.5",
                              children: [
                                /* @__PURE__ */ jsx(Label, {
                                  htmlFor: "clientAge",
                                  children: "Client Age*",
                                }),
                                /* @__PURE__ */ jsx(Input, {
                                  id: "clientAge",
                                  type: "number",
                                  ...register("clientAge", { required: true }),
                                  className: errors.clientAge
                                    ? "border-red-500"
                                    : "",
                                }),
                                errors.clientAge &&
                                  /* @__PURE__ */ jsx("p", {
                                    className: "text-red-500 text-xs mt-1",
                                    children: "This field is required",
                                  }),
                              ],
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsxs("div", {
                          className: "space-y-1.5 mt-4",
                          children: [
                            /* @__PURE__ */ jsx(Label, {
                              htmlFor: "reasonForReferral",
                              children: "Reason for Referral*",
                            }),
                            /* @__PURE__ */ jsx(Textarea, {
                              id: "reasonForReferral",
                              ...register("reasonForReferral", {
                                required: true,
                              }),
                              placeholder:
                                "Please describe the primary concerns and reasons for seeking services",
                              className: errors.reasonForReferral
                                ? "border-red-500"
                                : "",
                            }),
                            errors.reasonForReferral &&
                              /* @__PURE__ */ jsx("p", {
                                className: "text-red-500 text-xs mt-1",
                                children: "This field is required",
                              }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "space-y-1.5",
                      children: [
                        /* @__PURE__ */ jsx(Label, {
                          children: "Services Interested In",
                        }),
                        /* @__PURE__ */ jsxs("div", {
                          className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                          children: [
                            /* @__PURE__ */ jsxs("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                /* @__PURE__ */ jsx(Checkbox, {
                                  id: "service1",
                                  ...register("servicesInterested"),
                                  value: "Diagnostic Assessment",
                                }),
                                /* @__PURE__ */ jsx("label", {
                                  htmlFor: "service1",
                                  className: "text-sm font-medium leading-none",
                                  children: "Diagnostic Assessment",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ jsxs("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                /* @__PURE__ */ jsx(Checkbox, {
                                  id: "service2",
                                  ...register("servicesInterested"),
                                  value: "Therapy Services",
                                }),
                                /* @__PURE__ */ jsx("label", {
                                  htmlFor: "service2",
                                  className: "text-sm font-medium leading-none",
                                  children: "Therapy Services",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ jsxs("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                /* @__PURE__ */ jsx(Checkbox, {
                                  id: "service3",
                                  ...register("servicesInterested"),
                                  value: "Skills Development",
                                }),
                                /* @__PURE__ */ jsx("label", {
                                  htmlFor: "service3",
                                  className: "text-sm font-medium leading-none",
                                  children: "Skills Development",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ jsxs("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                /* @__PURE__ */ jsx(Checkbox, {
                                  id: "service4",
                                  ...register("servicesInterested"),
                                  value: "Family Support",
                                }),
                                /* @__PURE__ */ jsx("label", {
                                  htmlFor: "service4",
                                  className: "text-sm font-medium leading-none",
                                  children: "Family Support",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "space-y-1.5",
                      children: [
                        /* @__PURE__ */ jsxs("div", {
                          className: "flex items-start space-x-2",
                          children: [
                            /* @__PURE__ */ jsx(Checkbox, {
                              id: "consent",
                              ...register("consent", { required: true }),
                              className: errors.consent ? "border-red-500" : "",
                            }),
                            /* @__PURE__ */ jsx("label", {
                              htmlFor: "consent",
                              className: "text-sm",
                              children:
                                "I confirm that I have permission to refer this individual for services, and understand Hopeful Horizons will contact them directly.*",
                            }),
                          ],
                        }),
                        errors.consent &&
                          /* @__PURE__ */ jsx("p", {
                            className: "text-red-500 text-xs mt-1",
                            children: "You must consent to make a referral",
                          }),
                      ],
                    }),
                    /* @__PURE__ */ jsx("div", {
                      className: "pt-2",
                      children: /* @__PURE__ */ jsx(Button, {
                        onClick: () =>
                          toast.success("Referral submission pending..."),
                        type: "submit",
                        className:
                          "w-full bg-accent text-neutral-dark hover:bg-accent/80",
                        children: "Submit Referral",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
};
const route3 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      action: action$1,
      default: Referral,
      meta: meta$4,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
const autismImg8 = "/assets/autism8-EP8KNHFQ.jpg";
const siteUrl$3 = "https://hopefulhorizonsmn.com/services";
const meta$3 = () => [
  {
    title:
      "Autism & ABA Therapy Services | Minneapolis-St. Paul | Hopeful Horizons",
  },
  {
    name: "description",
    content:
      "ABA therapy, diagnostic evaluations, speech, occupational therapy, and family support for Minneapolis, St. Paul, and the Twin Cities.",
  },
  {
    name: "keywords",
    content:
      "ABA therapy Minneapolis, ABA therapy St. Paul, autism services, diagnostic evaluations, speech therapy, occupational therapy",
  },
  {
    property: "og:title",
    content:
      "Autism & ABA Therapy Services | Minneapolis-St. Paul | Hopeful Horizons",
  },
  {
    property: "og:description",
    content:
      "ABA therapy, diagnostic evaluations, speech, occupational therapy, and family support for Minneapolis, St. Paul, and the Twin Cities.",
  },
  { property: "og:type", content: "website" },
  { property: "og:url", content: siteUrl$3 },
];
const Services = () => {
  return /* @__PURE__ */ jsxs(Layout, {
    children: [
      /* @__PURE__ */ jsx(Hero, {
        title: "Our Services",
        subtitle:
          "Comprehensive, personalized autism and ABA services for Twin Cities families",
        image: autismImg8,
      }),
      /* @__PURE__ */ jsx(Section, {
        id: "diagnostics",
        children: /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "lg:col-span-2",
              children: [
                /* @__PURE__ */ jsx("h2", {
                  className: "text-2xl md:text-3xl font-bold mb-4",
                  children: "Diagnostic Evaluations",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "mb-4 text-autism-complementary-text",
                  children:
                    "Our comprehensive diagnostic process is designed to provide a clear understanding of an individual's strengths, challenges, and support needs. We offer evaluations for children, adolescents, and adults who may have autism spectrum disorder.",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "mb-4",
                  children:
                    "Our diagnostic team includes psychologists, speech-language pathologists, and occupational therapists who work together to conduct thorough assessments using gold-standard evaluation tools.",
                }),
                /* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold mt-6 mb-3",
                  children: "Our Evaluation Process Includes:",
                }),
                /* @__PURE__ */ jsxs("ul", {
                  className:
                    "list-disc pl-6 space-y-2 text-autism-complementary-text",
                  children: [
                    /* @__PURE__ */ jsxs("li", {
                      className: "flex items-start",
                      children: [
                        /* @__PURE__ */ jsx("span", {
                          className:
                            "w-2 h-2 rounded-full bg-autism-accent-cta mt-2 mr-3 flex-shrink-0",
                        }),
                        /* @__PURE__ */ jsx("span", {
                          children: "Developmental and medical history review",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("li", {
                      className: "flex items-start",
                      children: [
                        /* @__PURE__ */ jsx("span", {
                          className:
                            "w-2 h-2 rounded-full bg-autism-accent-cta mt-2 mr-3 flex-shrink-0",
                        }),
                        /* @__PURE__ */ jsx("span", {
                          children: "Standardized assessments and observations",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("li", {
                      className: "flex items-start",
                      children: [
                        /* @__PURE__ */ jsx("span", {
                          className:
                            "w-2 h-2 rounded-full bg-autism-accent-cta mt-2 mr-3 flex-shrink-0",
                        }),
                        /* @__PURE__ */ jsx("span", {
                          children: "Cognitive and language evaluations",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("li", {
                      className: "flex items-start",
                      children: [
                        /* @__PURE__ */ jsx("span", {
                          className:
                            "w-2 h-2 rounded-full bg-autism-accent-cta mt-2 mr-3 flex-shrink-0",
                        }),
                        /* @__PURE__ */ jsx("span", {
                          children: "Sensory and motor skills assessment",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("li", {
                      className: "flex items-start",
                      children: [
                        /* @__PURE__ */ jsx("span", {
                          className:
                            "w-2 h-2 rounded-full bg-autism-accent-cta mt-2 mr-3 flex-shrink-0",
                        }),
                        /* @__PURE__ */ jsx("span", {
                          children:
                            "Detailed feedback session and written report",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("li", {
                      className: "flex items-start",
                      children: [
                        /* @__PURE__ */ jsx("span", {
                          className:
                            "w-2 h-2 rounded-full bg-autism-accent-cta mt-2 mr-3 flex-shrink-0",
                        }),
                        /* @__PURE__ */ jsx("span", {
                          children:
                            "Personalized recommendations and resource referrals",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsx("div", {
              className: "flex items-center justify-center",
              children: /* @__PURE__ */ jsxs("div", {
                className: "bg-autism-neutral-light p-6 rounded-lg",
                children: [
                  /* @__PURE__ */ jsx(Calendar, {
                    size: 64,
                    className: "mx-auto mb-4 text-autism-accent-cta",
                  }),
                  /* @__PURE__ */ jsx("h3", {
                    className: "text-xl font-semibold mb-4 text-center",
                    children: "Schedule an Evaluation",
                  }),
                  /* @__PURE__ */ jsx("p", {
                    className: "mb-4 text-center",
                    children:
                      "Our team is here to guide you through the diagnostic process.",
                  }),
                  /* @__PURE__ */ jsx("div", {
                    className: "text-center",
                    children: /* @__PURE__ */ jsx("a", {
                      href: "/contact",
                      className: "autism-btn-primary block w-full text-center",
                      children: "Contact Us",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsxs(Section, {
        id: "therapy",
        color: "alternate",
        children: [
          /* @__PURE__ */ jsx("h2", {
            className: "text-2xl md:text-3xl font-bold mb-8",
            children: "Therapy Services",
          }),
          /* @__PURE__ */ jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12",
            children: [
              /* @__PURE__ */ jsxs("div", {
                className:
                  "bg-white p-6 rounded-lg shadow-sm border border-autism-border-divider h-full",
                children: [
                  /* @__PURE__ */ jsxs("h3", {
                    className: "text-xl font-semibold mb-4 flex items-center",
                    children: [
                      /* @__PURE__ */ jsx(Users, {
                        size: 24,
                        className: "mr-2 text-autism-accent-cta",
                      }),
                      "Applied Behavior Analysis (ABA)",
                    ],
                  }),
                  /* @__PURE__ */ jsx("p", {
                    className: "mb-4 text-autism-complementary-text",
                    children:
                      "Evidence-based therapy that focuses on improving specific behaviors, such as communication, social skills, learning abilities, and adaptive functioning.",
                  }),
                  /* @__PURE__ */ jsxs("ul", {
                    className: "list-none space-y-2",
                    children: [
                      /* @__PURE__ */ jsxs("li", {
                        className: "flex items-start",
                        children: [
                          /* @__PURE__ */ jsx(CheckCircle, {
                            size: 18,
                            className:
                              "mr-2 mt-1 text-autism-accent-cta flex-shrink-0",
                          }),
                          /* @__PURE__ */ jsx("span", {
                            children:
                              "Individualized treatment plans based on comprehensive assessments",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs("li", {
                        className: "flex items-start",
                        children: [
                          /* @__PURE__ */ jsx(CheckCircle, {
                            size: 18,
                            className:
                              "mr-2 mt-1 text-autism-accent-cta flex-shrink-0",
                          }),
                          /* @__PURE__ */ jsx("span", {
                            children:
                              "One-on-one therapy sessions with certified behavior technicians",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs("li", {
                        className: "flex items-start",
                        children: [
                          /* @__PURE__ */ jsx(CheckCircle, {
                            size: 18,
                            className:
                              "mr-2 mt-1 text-autism-accent-cta flex-shrink-0",
                          }),
                          /* @__PURE__ */ jsx("span", {
                            children:
                              "Regular progress monitoring and plan adjustments",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ jsxs("div", {
                className:
                  "bg-white p-6 rounded-lg shadow-sm border border-autism-border-divider h-full",
                children: [
                  /* @__PURE__ */ jsxs("h3", {
                    className: "text-xl font-semibold mb-4 flex items-center",
                    children: [
                      /* @__PURE__ */ jsx(Users, {
                        size: 24,
                        className: "mr-2 text-autism-accent-cta",
                      }),
                      "Speech and Language Therapy",
                    ],
                  }),
                  /* @__PURE__ */ jsx("p", {
                    className: "mb-4 text-autism-complementary-text",
                    children:
                      "Dedicated to improving communication skills, including verbal expression, comprehension, social language, and alternative communication systems.",
                  }),
                  /* @__PURE__ */ jsxs("ul", {
                    className: "list-none space-y-2",
                    children: [
                      /* @__PURE__ */ jsxs("li", {
                        className: "flex items-start",
                        children: [
                          /* @__PURE__ */ jsx(CheckCircle, {
                            size: 18,
                            className:
                              "mr-2 mt-1 text-autism-accent-cta flex-shrink-0",
                          }),
                          /* @__PURE__ */ jsx("span", {
                            children: "Comprehensive communication assessments",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs("li", {
                        className: "flex items-start",
                        children: [
                          /* @__PURE__ */ jsx(CheckCircle, {
                            size: 18,
                            className:
                              "mr-2 mt-1 text-autism-accent-cta flex-shrink-0",
                          }),
                          /* @__PURE__ */ jsx("span", {
                            children: "Individual and group therapy options",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs("li", {
                        className: "flex items-start",
                        children: [
                          /* @__PURE__ */ jsx(CheckCircle, {
                            size: 18,
                            className:
                              "mr-2 mt-1 text-autism-accent-cta flex-shrink-0",
                          }),
                          /* @__PURE__ */ jsx("span", {
                            children:
                              "Augmentative and alternative communication (AAC) training",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
            children: [
              /* @__PURE__ */ jsxs("div", {
                className:
                  "bg-white p-6 rounded-lg shadow-sm border border-autism-border-divider h-full",
                children: [
                  /* @__PURE__ */ jsxs("h3", {
                    className: "text-xl font-semibold mb-4 flex items-center",
                    children: [
                      /* @__PURE__ */ jsx(Users, {
                        size: 24,
                        className: "mr-2 text-autism-accent-cta",
                      }),
                      "Occupational Therapy",
                    ],
                  }),
                  /* @__PURE__ */ jsx("p", {
                    className: "mb-4 text-autism-complementary-text",
                    children:
                      "Helps individuals develop the skills needed for independent living, sensory processing, and participation in daily activities.",
                  }),
                  /* @__PURE__ */ jsxs("ul", {
                    className: "list-none space-y-2",
                    children: [
                      /* @__PURE__ */ jsxs("li", {
                        className: "flex items-start",
                        children: [
                          /* @__PURE__ */ jsx(CheckCircle, {
                            size: 18,
                            className:
                              "mr-2 mt-1 text-autism-accent-cta flex-shrink-0",
                          }),
                          /* @__PURE__ */ jsx("span", {
                            children: "Sensory integration therapy",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs("li", {
                        className: "flex items-start",
                        children: [
                          /* @__PURE__ */ jsx(CheckCircle, {
                            size: 18,
                            className:
                              "mr-2 mt-1 text-autism-accent-cta flex-shrink-0",
                          }),
                          /* @__PURE__ */ jsx("span", {
                            children: "Fine and gross motor skill development",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs("li", {
                        className: "flex items-start",
                        children: [
                          /* @__PURE__ */ jsx(CheckCircle, {
                            size: 18,
                            className:
                              "mr-2 mt-1 text-autism-accent-cta flex-shrink-0",
                          }),
                          /* @__PURE__ */ jsx("span", {
                            children:
                              "Activities of daily living (ADL) training",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ jsxs("div", {
                className:
                  "bg-white p-6 rounded-lg shadow-sm border border-autism-border-divider h-full",
                children: [
                  /* @__PURE__ */ jsxs("h3", {
                    className: "text-xl font-semibold mb-4 flex items-center",
                    children: [
                      /* @__PURE__ */ jsx(Users, {
                        size: 24,
                        className: "mr-2 text-autism-accent-cta",
                      }),
                      "Social Skills Groups",
                    ],
                  }),
                  /* @__PURE__ */ jsx("p", {
                    className: "mb-4 text-autism-complementary-text",
                    children:
                      "Structured, supportive environments where participants can practice and improve their social interaction abilities with peers.",
                  }),
                  /* @__PURE__ */ jsxs("ul", {
                    className: "list-none space-y-2",
                    children: [
                      /* @__PURE__ */ jsxs("li", {
                        className: "flex items-start",
                        children: [
                          /* @__PURE__ */ jsx(CheckCircle, {
                            size: 18,
                            className:
                              "mr-2 mt-1 text-autism-accent-cta flex-shrink-0",
                          }),
                          /* @__PURE__ */ jsx("span", {
                            children:
                              "Age-appropriate groups from preschool to adults",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs("li", {
                        className: "flex items-start",
                        children: [
                          /* @__PURE__ */ jsx(CheckCircle, {
                            size: 18,
                            className:
                              "mr-2 mt-1 text-autism-accent-cta flex-shrink-0",
                          }),
                          /* @__PURE__ */ jsx("span", {
                            children:
                              "Small group settings with trained facilitators",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs("li", {
                        className: "flex items-start",
                        children: [
                          /* @__PURE__ */ jsx(CheckCircle, {
                            size: 18,
                            className:
                              "mr-2 mt-1 text-autism-accent-cta flex-shrink-0",
                          }),
                          /* @__PURE__ */ jsx("span", {
                            children:
                              "Skill generalization through community outings",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsx(Section, {
        id: "family-support",
        children: /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "lg:col-span-2",
              children: [
                /* @__PURE__ */ jsx("h2", {
                  className: "text-2xl md:text-3xl font-bold mb-4",
                  children: "Family Support Services",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "mb-4",
                  children:
                    "We recognize that autism affects the entire family, and we're committed to providing comprehensive support for parents, siblings, and caregivers. Our family support services are designed to empower families with the knowledge, resources, and community connections they need.",
                }),
                /* @__PURE__ */ jsxs("div", {
                  className: "space-y-6 mt-8",
                  children: [
                    /* @__PURE__ */ jsxs("div", {
                      className:
                        "bg-white p-6 rounded-lg shadow-sm border border-autism-border-divider",
                      children: [
                        /* @__PURE__ */ jsx("h3", {
                          className: "text-xl font-semibold mb-3",
                          children: "Parent Education Workshops",
                        }),
                        /* @__PURE__ */ jsx("p", {
                          className: "text-autism-complementary-text",
                          children:
                            "Regular workshops on topics such as understanding autism, behavior management strategies, navigating educational systems, and planning for the future.",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className:
                        "bg-white p-6 rounded-lg shadow-sm border border-autism-border-divider",
                      children: [
                        /* @__PURE__ */ jsx("h3", {
                          className: "text-xl font-semibold mb-3",
                          children: "Support Groups",
                        }),
                        /* @__PURE__ */ jsx("p", {
                          className: "text-autism-complementary-text",
                          children:
                            "Facilitated groups for parents, siblings, and extended family members to share experiences, strategies, and emotional support.",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className:
                        "bg-white p-6 rounded-lg shadow-sm border border-autism-border-divider",
                      children: [
                        /* @__PURE__ */ jsx("h3", {
                          className: "text-xl font-semibold mb-3",
                          children: "Resource Navigation",
                        }),
                        /* @__PURE__ */ jsx("p", {
                          className: "text-autism-complementary-text",
                          children:
                            "Assistance connecting with community resources, educational services, funding options, and advocacy organizations.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsx("div", {
              className: "flex items-center justify-center",
              children: /* @__PURE__ */ jsxs("div", {
                className: "bg-autism-neutral-light p-6 rounded-lg",
                children: [
                  /* @__PURE__ */ jsx(Book, {
                    size: 64,
                    className: "mx-auto mb-4 text-autism-accent-cta",
                  }),
                  /* @__PURE__ */ jsx("h3", {
                    className: "text-xl font-semibold mb-4 text-center",
                    children: "Upcoming Workshops",
                  }),
                  /* @__PURE__ */ jsxs("ul", {
                    className: "space-y-4 mb-6",
                    children: [
                      /* @__PURE__ */ jsxs("li", {
                        className: "border-b border-autism-border-divider pb-2",
                        children: [
                          /* @__PURE__ */ jsx("p", {
                            className: "font-medium",
                            children: "Understanding IEPs",
                          }),
                          /* @__PURE__ */ jsx("p", {
                            className: "text-sm",
                            children: "June 15, 2025 • 6:30-8:00pm",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs("li", {
                        className: "border-b border-autism-border-divider pb-2",
                        children: [
                          /* @__PURE__ */ jsx("p", {
                            className: "font-medium",
                            children: "Sensory Strategies at Home",
                          }),
                          /* @__PURE__ */ jsx("p", {
                            className: "text-sm",
                            children: "June 22, 2025 • 10:00-11:30am",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs("li", {
                        children: [
                          /* @__PURE__ */ jsx("p", {
                            className: "font-medium",
                            children: "Transition Planning",
                          }),
                          /* @__PURE__ */ jsx("p", {
                            className: "text-sm",
                            children: "July 8, 2025 • 6:00-7:30pm",
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsx("div", {
                    className: "text-center",
                    children: /* @__PURE__ */ jsx("a", {
                      href: "/resources",
                      className: "autism-btn-primary block w-full text-center",
                      children: "View All Events",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx(Section, {
        className: "text-center",
        color: "alternate",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-3xl mx-auto",
          children: [
            /* @__PURE__ */ jsx("h2", {
              className: "text-3xl md:text-4xl font-bold mb-6",
              children: "Ready to Get Started?",
            }),
            /* @__PURE__ */ jsx("p", {
              className: "text-lg mb-8 text-autism-complementary-text",
              children:
                "Our team is here to help you navigate the process and find the services that best meet your needs.",
            }),
            /* @__PURE__ */ jsx("a", {
              href: "/contact",
              className: "autism-btn-primary text-lg px-8 py-3",
              children: "Contact Us Today",
            }),
          ],
        }),
      }),
    ],
  });
};
const route4 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: Services,
      meta: meta$3,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return /* @__PURE__ */ jsx("form", {
    action: "/contact",
    method: "POST",
    encType: "multipart/form-data",
    className: "space-y-6",
    children: /* @__PURE__ */ jsxs(Fragment, {
      children: [
        /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
          children: [
            /* @__PURE__ */ jsxs("div", {
              children: [
                /* @__PURE__ */ jsx("label", {
                  htmlFor: "name",
                  className: "block mb-2 font-medium",
                  children: "Name",
                }),
                /* @__PURE__ */ jsx("input", {
                  type: "text",
                  id: "name",
                  name: "name",
                  value: formData.name,
                  onChange: handleChange,
                  required: true,
                  className:
                    "w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-autism-bright-blue",
                }),
              ],
            }),
            /* @__PURE__ */ jsxs("div", {
              children: [
                /* @__PURE__ */ jsx("label", {
                  htmlFor: "email",
                  className: "block mb-2 font-medium",
                  children: "Email",
                }),
                /* @__PURE__ */ jsx("input", {
                  type: "email",
                  id: "email",
                  name: "email",
                  value: formData.email,
                  onChange: handleChange,
                  required: true,
                  className:
                    "w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-autism-bright-blue",
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
          children: [
            /* @__PURE__ */ jsxs("div", {
              children: [
                /* @__PURE__ */ jsx("label", {
                  htmlFor: "phone",
                  className: "block mb-2 font-medium",
                  children: "Phone (Optional)",
                }),
                /* @__PURE__ */ jsx("input", {
                  type: "tel",
                  id: "phone",
                  name: "phone",
                  value: formData.phone,
                  onChange: handleChange,
                  className:
                    "w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-autism-bright-blue",
                }),
              ],
            }),
            /* @__PURE__ */ jsxs("div", {
              children: [
                /* @__PURE__ */ jsx("label", {
                  htmlFor: "subject",
                  className: "block mb-2 font-medium",
                  children: "Subject",
                }),
                /* @__PURE__ */ jsxs("select", {
                  id: "subject",
                  name: "subject",
                  value: formData.subject,
                  onChange: handleChange,
                  required: true,
                  className:
                    "w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-autism-bright-blue",
                  children: [
                    /* @__PURE__ */ jsx("option", {
                      value: "",
                      children: "Please select",
                    }),
                    /* @__PURE__ */ jsx("option", {
                      value: "General Inquiry",
                      children: "General Inquiry",
                    }),
                    /* @__PURE__ */ jsx("option", {
                      value: "Services Information",
                      children: "Services Information",
                    }),
                    /* @__PURE__ */ jsx("option", {
                      value: "Appointment Request",
                      children: "Appointment Request",
                    }),
                    /* @__PURE__ */ jsx("option", {
                      value: "Employment",
                      children: "Employment",
                    }),
                    /* @__PURE__ */ jsx("option", {
                      value: "Feedback",
                      children: "Feedback",
                    }),
                    /* @__PURE__ */ jsx("option", {
                      value: "Other",
                      children: "Other",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ jsxs("div", {
          children: [
            /* @__PURE__ */ jsx("label", {
              htmlFor: "message",
              className: "block mb-2 font-medium",
              children: "Message",
            }),
            /* @__PURE__ */ jsx("textarea", {
              id: "message",
              name: "message",
              value: formData.message,
              onChange: handleChange,
              required: true,
              rows: 5,
              className:
                "w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-autism-bright-blue",
            }),
          ],
        }),
        /* @__PURE__ */ jsx("div", {
          className: "flex justify-center md:justify-start",
          children: /* @__PURE__ */ jsx("button", {
            type: "submit",
            className: "autism-btn-primary",
            children: "Send Message",
          }),
        }),
      ],
    }),
  });
};
const siteUrl$2 = "https://hopefulhorizonsmn.com/contact";
const meta$2 = () => [
  {
    title:
      "Contact Our Autism & ABA Center | Minneapolis-St. Paul | Hopeful Horizons",
  },
  {
    name: "description",
    content:
      "Contact Hopeful Horizons to schedule autism evaluations or ABA therapy in Minneapolis, St. Paul, and the Twin Cities.",
  },
  {
    name: "keywords",
    content:
      "contact ABA center, autism evaluations Minneapolis, ABA therapy St. Paul, Twin Cities",
  },
  {
    property: "og:title",
    content:
      "Contact Our Autism & ABA Center | Minneapolis-St. Paul | Hopeful Horizons",
  },
  {
    property: "og:description",
    content:
      "Contact Hopeful Horizons to schedule autism evaluations or ABA therapy in Minneapolis, St. Paul, and the Twin Cities.",
  },
  { property: "og:type", content: "website" },
  { property: "og:url", content: siteUrl$2 },
];
async function action({ request }) {
  const uploadHandler = unstable_composeUploadHandlers(
    unstable_createFileUploadHandler({
      maxPartSize: 5e6,
      file: ({ filename }) => filename,
    }),
    // parse everything else into memory
    unstable_createMemoryUploadHandler(),
  );
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler,
  );
  const data = Object.fromEntries(formData.entries());
  const resend = new Resend(process.env.RESEND_API_KEY);
  const response = await resend.emails.send({
    from: "admin@hopefulhorizonsmn.com",
    to: "admin@hopefulhorizonsmn.com",
    subject: `New Contact Submission - ${data.name}`,
    react: /* @__PURE__ */ jsx(EmailTemplate, { data }),
  });
  return response;
}
const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [messageFailed, setMessageFailed] = useState(false);
  const response = useActionData();
  useEffect(() => {
    var _a;
    ((_a = response == null ? void 0 : response.data) == null
      ? void 0
      : _a.id) && setMessageSent(true);
    (response == null ? void 0 : response.error) && setMessageFailed(true);
  }, [response]);
  return /* @__PURE__ */ jsxs(Layout, {
    children: [
      messageSent && toast.success("Message sent successfully."),
      messageFailed && toast.error("Message failed to send. Please try again."),
      /* @__PURE__ */ jsx(Hero, {
        title: "Contact Us",
        subtitle:
          "We're here to answer your questions and help you access the support you need",
      }),
      /* @__PURE__ */ jsx(Section, {
        children: /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-5 gap-8",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "lg:col-span-3",
              children: [
                /* @__PURE__ */ jsx("h2", {
                  className: "text-2xl md:text-3xl font-bold mb-6",
                  children: "Get In Touch",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "mb-8 text-autism-complementary-text",
                  children:
                    "Whether you have questions about our services, want to schedule an appointment, or need more information about autism resources in Minneapolis, St. Paul, or the Twin Cities, we're here to help. Fill out the form below, and a member of our team will get back to you as soon as possible.",
                }),
                /* @__PURE__ */ jsx(ContactForm, {}),
              ],
            }),
            /* @__PURE__ */ jsxs("div", {
              className:
                "lg:col-span-2 bg-autism-neutral-light p-6 rounded-lg border border-autism-border-divider",
              children: [
                /* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold mb-6",
                  children: "Contact Information",
                }),
                /* @__PURE__ */ jsxs("div", {
                  className: "space-y-6",
                  children: [
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex items-start gap-4",
                      children: [
                        /* @__PURE__ */ jsx("div", {
                          className: "mt-1 p-2 rounded-full",
                          children: /* @__PURE__ */ jsx(MapPin, {
                            size: 20,
                            className: "text-autism-accent-cta",
                          }),
                        }),
                        /* @__PURE__ */ jsxs("div", {
                          children: [
                            /* @__PURE__ */ jsx("h4", {
                              className: "font-semibold mb-1",
                              children: "Address",
                            }),
                            /* @__PURE__ */ jsxs("address", {
                              className:
                                "not-italic text-autism-complementary-text",
                              children: [
                                "5901 Brooklyn Blvd Ste #200",
                                /* @__PURE__ */ jsx("br", {}),
                                "Brooklyn Center, MN 55429",
                                /* @__PURE__ */ jsx("br", {}),
                                "United States",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex items-start gap-4",
                      children: [
                        /* @__PURE__ */ jsx("div", {
                          className: "mt-1 p-2 rounded-full",
                          children: /* @__PURE__ */ jsx(Phone, {
                            size: 20,
                            className: "text-autism-accent-cta",
                          }),
                        }),
                        /* @__PURE__ */ jsxs("div", {
                          children: [
                            /* @__PURE__ */ jsx("h4", {
                              className: "font-semibold mb-1",
                              children: "Phone",
                            }),
                            /* @__PURE__ */ jsx("p", {
                              className: "text-autism-complementary-text",
                              children: /* @__PURE__ */ jsx("a", {
                                href: "tel:+16122222817",
                                className: "hover:text-autism-bright-blue",
                                children: "(612) 222-2817",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex items-start gap-4",
                      children: [
                        /* @__PURE__ */ jsx("div", {
                          className: "mt-1 p-2 rounded-full",
                          children: /* @__PURE__ */ jsx(Mail, {
                            size: 20,
                            className: "text-autism-accent-cta",
                          }),
                        }),
                        /* @__PURE__ */ jsxs("div", {
                          children: [
                            /* @__PURE__ */ jsx("h4", {
                              className: "font-semibold mb-1",
                              children: "Email",
                            }),
                            /* @__PURE__ */ jsx("p", {
                              className: "text-autism-complementary-text",
                              children: /* @__PURE__ */ jsx("a", {
                                href: "mailto:admin@hopefulhorizonsmn.com",
                                className: "hover:text-autism-bright-blue",
                                children: "admin@hopefulhorizonsmn.com",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex items-start gap-4",
                      children: [
                        /* @__PURE__ */ jsx("div", {
                          className: "mt-1 p-2 rounded-full",
                          children: /* @__PURE__ */ jsx(Clock, {
                            size: 20,
                            className: "text-autism-accent-cta",
                          }),
                        }),
                        /* @__PURE__ */ jsxs("div", {
                          children: [
                            /* @__PURE__ */ jsx("h4", {
                              className: "font-semibold mb-1",
                              children: "Hours of Operation",
                            }),
                            /* @__PURE__ */ jsxs("p", {
                              className: "text-autism-complementary-text",
                              children: [
                                "Monday - Friday: 7:00am - 9:00pm",
                                /* @__PURE__ */ jsx("br", {}),
                                "Saturday - Sunday: 9:00am - 5:00pm",
                                /* @__PURE__ */ jsx("br", {}),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsxs(Section, {
        color: "alternate",
        children: [
          /* @__PURE__ */ jsx("h2", {
            className: "text-2xl md:text-3xl font-bold mb-8 text-center",
            children: "Find Us",
          }),
          /* @__PURE__ */ jsx("div", {
            className:
              "rounded-lg overflow-hidden border-4 border-white shadow-lg",
            children: /* @__PURE__ */ jsx("div", {
              className:
                "aspect-[16/9] w-full bg-autism-border-divider flex items-center justify-center",
              children: /* @__PURE__ */ jsx("iframe", {
                width: "100%",
                height: "100%",
                title: "Hopeful Horizons",
                src: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=5901%20Brooklyn%20Blvd%20Ste%20%23200,%20Brooklyn%20Center,%20MN%2055429+(Hopeful%20Horizons)&t=&z=14&ie=UTF8&iwloc=B&output=embed",
              }),
            }),
          }),
        ],
      }),
      /* @__PURE__ */ jsx(Section, {
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-3xl mx-auto",
          children: [
            /* @__PURE__ */ jsx("h2", {
              className: "text-2xl md:text-3xl font-bold mb-6 text-center",
              children: "Frequently Asked Questions",
            }),
            /* @__PURE__ */ jsxs("div", {
              className: "space-y-6",
              children: [
                /* @__PURE__ */ jsxs("div", {
                  className:
                    "bg-white p-6 rounded-lg shadow-sm border border-autism-border-divider",
                  children: [
                    /* @__PURE__ */ jsx("h3", {
                      className: "text-lg font-semibold mb-2",
                      children: "How do I schedule an evaluation?",
                    }),
                    /* @__PURE__ */ jsx("p", {
                      className: "text-autism-complementary-text",
                      children:
                        "To schedule an evaluation, please complete our contact form or call our office. Our intake coordinator will gather some initial information and guide you through the process.",
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs("div", {
                  className:
                    "bg-white p-6 rounded-lg shadow-sm border border-autism-border-divider",
                  children: [
                    /* @__PURE__ */ jsx("h3", {
                      className: "text-lg font-semibold mb-2",
                      children: "Does insurance cover your services?",
                    }),
                    /* @__PURE__ */ jsx("p", {
                      className: "text-autism-complementary-text",
                      children:
                        "We accept most major insurance plans, including Medical Assistance. Our administrative team can help verify your benefits and explain any out-of-pocket costs before services begin.",
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs("div", {
                  className:
                    "bg-white p-6 rounded-lg shadow-sm border border-autism-border-divider",
                  children: [
                    /* @__PURE__ */ jsx("h3", {
                      className: "text-lg font-semibold mb-2",
                      children: "How long is the waiting list for services?",
                    }),
                    /* @__PURE__ */ jsx("p", {
                      className: "text-autism-complementary-text",
                      children:
                        "Waiting times vary depending on the service and current demand. We strive to accommodate families as quickly as possible and can provide resources to support you while waiting for services to begin.",
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs("div", {
                  className:
                    "bg-white p-6 rounded-lg shadow-sm border border-autism-border-divider",
                  children: [
                    /* @__PURE__ */ jsx("h3", {
                      className: "text-lg font-semibold mb-2",
                      children: "What age groups do you serve?",
                    }),
                    /* @__PURE__ */ jsx("p", {
                      className: "text-autism-complementary-text",
                      children:
                        "We provide services for individuals of all ages, from early childhood through adulthood. Our programs are tailored to meet the developmental needs of each age group.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
};
const route5 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      action,
      default: Contact,
      meta: meta$2,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
const ServiceCard = ({ title, description, icon, link }) => {
  const content = /* @__PURE__ */ jsxs("div", {
    className: "autism-card h-full p-6 flex flex-col",
    children: [
      icon &&
        /* @__PURE__ */ jsx("div", {
          className: "mb-4 text-autism-bright-blue",
          children: icon,
        }),
      /* @__PURE__ */ jsx("h3", {
        className: "text-xl font-semibold mb-3",
        children: title,
      }),
      /* @__PURE__ */ jsx("p", {
        className: "text-autism-complementary-text flex-grow",
        children: description,
      }),
      link &&
        /* @__PURE__ */ jsx("div", {
          className: "mt-4 pt-2",
          children: /* @__PURE__ */ jsx("span", {
            className: "autism-link",
            children: "Learn more",
          }),
        }),
    ],
  });
  if (link) {
    return /* @__PURE__ */ jsx(Link, {
      to: link,
      className: "block h-full",
      children: content,
    });
  }
  return content;
};
const autismImg1 = "/assets/autism1-B3dFJvNA.jpg";
const autismImg2 = "/assets/autism2-DGCR9bZS.jpg";
const siteUrl$1 = "https://hopefulhorizonsmn.com";
const meta$1 = () => [
  { title: "Hopeful Horizons | Autism & ABA Center in the Twin Cities" },
  {
    name: "description",
    content:
      "Autism and ABA therapy center serving Minneapolis, St. Paul, and the Twin Cities with evaluations, therapy, and family support.",
  },
  {
    name: "keywords",
    content:
      "autism center, ABA therapy, Minneapolis, St. Paul, Twin Cities, diagnostic evaluations, family support",
  },
  {
    property: "og:title",
    content: "Hopeful Horizons | Autism & ABA Center in Minneapolis-St. Paul",
  },
  {
    property: "og:description",
    content:
      "Autism and ABA therapy center serving Minneapolis, St. Paul, and the Twin Cities with evaluations, therapy, and family support.",
  },
  { property: "og:type", content: "website" },
  { property: "og:url", content: siteUrl$1 },
];
const Index = () => {
  return /* @__PURE__ */ jsxs(Layout, {
    children: [
      /* @__PURE__ */ jsx(Hero, {
        title: "Supporting Every Journey on the Autism Spectrum",
        subtitle:
          "Compassionate ABA therapy and autism support for families in the Twin Cities.",
        ctaText: "Discover Our Services",
        ctaLink: "/services",
        image: autismImg0,
      }),
      /* @__PURE__ */ jsx(Section, {
        title: "Welcome to Hopeful Horizons",
        subtitle:
          "We're dedicated to providing comprehensive support, resources, and services for individuals with autism and their families across the Greater Minneapolis-St. Paul area.",
        children: /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className:
                "autism-card p-6 text-center flex flex-col items-center",
              children: [
                /* @__PURE__ */ jsx("div", {
                  className: "mb-4 flex justify-center",
                  children: /* @__PURE__ */ jsx(Users, {
                    size: 48,
                    className: "text-autism-accent-cta",
                  }),
                }),
                /* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold mb-2",
                  children: "Expert Team",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-autism-neutral-dark2",
                  children:
                    "Our dedicated specialists bring years of experience and compassion to every interaction.",
                }),
              ],
            }),
            /* @__PURE__ */ jsxs("div", {
              className:
                "autism-card p-6 text-center flex flex-col items-center",
              children: [
                /* @__PURE__ */ jsx("div", {
                  className: "mb-4 flex justify-center",
                  children: /* @__PURE__ */ jsx(Book, {
                    size: 48,
                    className: "text-autism-accent-cta",
                  }),
                }),
                /* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold mb-2",
                  children: "Evidence-Based Approach",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-autism-neutral-dark2",
                  children:
                    "We utilize proven methodologies tailored to each individual's unique needs.",
                }),
              ],
            }),
            /* @__PURE__ */ jsxs("div", {
              className:
                "autism-card p-6 text-center flex flex-col items-center",
              children: [
                /* @__PURE__ */ jsx("div", {
                  className: "mb-4 flex justify-center",
                  children: /* @__PURE__ */ jsx(MapPin, {
                    size: 48,
                    className: "text-autism-accent-cta",
                  }),
                }),
                /* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold mb-2",
                  children: "Community Focused",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-autism-neutral-dark2",
                  children:
                    "Proudly serving the Minnesota community with accessible resources and support.",
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsxs(Section, {
        color: "alternate",
        title: "Our Services",
        subtitle:
          "Comprehensive support for individuals across the autism spectrum",
        children: [
          /* @__PURE__ */ jsx("img", {
            src: autismImg1,
            alt: "Autism Services",
            className: "w-full max-h-64 object-cover rounded-lg mb-8",
          }),
          /* @__PURE__ */ jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: [
              /* @__PURE__ */ jsx(ServiceCard, {
                title: "Diagnostic Evaluations",
                description:
                  "Comprehensive assessments to identify autism spectrum disorders and related conditions.",
                icon: /* @__PURE__ */ jsx(Calendar, {
                  size: 36,
                  className: "text-autism-accent-cta",
                }),
                link: "/services#diagnostics",
              }),
              /* @__PURE__ */ jsx(ServiceCard, {
                title: "Therapy Services",
                description:
                  "Individualized therapy plans including ABA, speech, occupational, and social skills.",
                icon: /* @__PURE__ */ jsx(Users, {
                  size: 36,
                  className: "text-autism-accent-cta",
                }),
                link: "/services#therapy",
              }),
              /* @__PURE__ */ jsx(ServiceCard, {
                title: "Family Support",
                description:
                  "Resources, education, and guidance for families navigating autism diagnosis and care.",
                icon: /* @__PURE__ */ jsx(Book, {
                  size: 36,
                  className: "text-autism-accent-cta",
                }),
                link: "/services#family-support",
              }),
            ],
          }),
          /* @__PURE__ */ jsx("div", {
            className: "mt-10 text-center",
            children: /* @__PURE__ */ jsx(Link, {
              to: "/services",
              className: "autism-btn-primary",
              children: "View All Services",
            }),
          }),
        ],
      }),
      /* @__PURE__ */ jsx(Section, {
        className: "text-center",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-3xl mx-auto",
          children: [
            /* @__PURE__ */ jsx("img", {
              src: autismImg2,
              alt: "Contact Us",
              className: "w-full max-h-64 object-cover rounded-lg mb-8",
            }),
            /* @__PURE__ */ jsx("h2", {
              className: "text-3xl md:text-4xl font-bold mb-6",
              children: "Ready to Take the Next Step?",
            }),
            /* @__PURE__ */ jsx("p", {
              className: "text-lg mb-8 text-autism-neutral-dark",
              children:
                "Contact us today to learn more about our services or to schedule a consultation with our team of specialists.",
            }),
            /* @__PURE__ */ jsx(Link, {
              to: "/contact",
              className: "autism-btn-primary text-lg px-8 py-3",
              children: "Contact Us",
            }),
          ],
        }),
      }),
    ],
  });
};
const route6 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: Index,
      meta: meta$1,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
const autismImg3 = "/assets/autism3-ML4jLpn_.jpg";
const autismImg4 = "/assets/autism4-C_pWFn0I.jpg";
const autismImg5 = "/assets/autism5-C8j03O6T.jpeg";
const autismImg6 = "/assets/autism6-BzvmZDpE.jpg";
const autismImg7 = "/assets/autism7-CiIKjOkP.jpg";
const siteUrl = "https://hopefulhorizonsmn.com/about";
const meta = () => [
  {
    title:
      "About Hopeful Horizons | Autism & ABA Center in Minneapolis-St. Paul",
  },
  {
    name: "description",
    content:
      "Learn about Hopeful Horizons, an autism and ABA therapy center serving Minneapolis, St. Paul, and the Twin Cities.",
  },
  {
    name: "keywords",
    content:
      "about ABA center, autism services Minneapolis, autism services St. Paul, Twin Cities",
  },
  {
    property: "og:title",
    content:
      "About Hopeful Horizons | Autism & ABA Center in Minneapolis-St. Paul",
  },
  {
    property: "og:description",
    content:
      "Learn about Hopeful Horizons, an autism and ABA therapy center serving Minneapolis, St. Paul, and the Twin Cities.",
  },
  { property: "og:type", content: "website" },
  { property: "og:url", content: siteUrl },
];
const About = () => {
  return /* @__PURE__ */ jsxs(Layout, {
    children: [
      /* @__PURE__ */ jsx(Hero, {
        title: "About Hopeful Horizons",
        subtitle:
          "Our mission, team, and commitment to the autism community in the Twin Cities",
        image: autismImg3,
      }),
      /* @__PURE__ */ jsx(Section, {
        children: /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
          children: [
            /* @__PURE__ */ jsxs("div", {
              children: [
                /* @__PURE__ */ jsx("h2", {
                  className: "text-2xl md:text-3xl font-bold mb-4",
                  children: "Our Story",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "mb-4",
                  children:
                    "Hopeful Horizons was founded by a group of parents, educators, and healthcare professionals who recognized the need for comprehensive autism services in Minnesota. What began as a small support group has grown into a full-service center offering diagnostic, therapeutic, and educational resources for individuals on the autism spectrum.",
                }),
                /* @__PURE__ */ jsx("p", {
                  children:
                    "Our center was built on the belief that every individual with autism deserves access to personalized, evidence-based support that recognizes their unique strengths and challenges. Today, we continue to expand our services while maintaining our commitment to excellence, compassion, and community.",
                }),
              ],
            }),
            /* @__PURE__ */ jsxs("div", {
              className: "bg-autism-bright-blue/20 p-8 rounded-lg",
              children: [
                /* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold mb-4",
                  children: "Our Vision",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "italic mb-6",
                  children:
                    '"To create a world where individuals with autism spectrum disorders are embraced for their unique qualities, empowered to reach their full potential, and provided with the support they need to lead fulfilling lives."',
                }),
                /* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold mb-4",
                  children: "Our Mission",
                }),
                /* @__PURE__ */ jsx("p", {
                  children:
                    "To provide exceptional, person-centered services that improve the quality of life for individuals with autism and their families through comprehensive assessment, intervention, education, and advocacy.",
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx(Section, {
        color: "alternate",
        title: "Our Values",
        children: /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
          children: [
            /* @__PURE__ */ jsx("img", {
              src: autismImg4,
              alt: "Autism Image 4",
              className: "rounded-lg shadow-md",
            }),
            /* @__PURE__ */ jsxs("div", {
              className:
                "bg-white p-6 rounded-lg shadow-sm border border-autism-border-divider",
              children: [
                /* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold mb-3",
                  children: "Compassion",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-autism-complementary-text",
                  children:
                    "We approach each individual and family with understanding, empathy, and respect for their unique journey.",
                }),
              ],
            }),
            /* @__PURE__ */ jsx("img", {
              src: autismImg5,
              alt: "Autism Image 5",
              className: "rounded-lg shadow-md",
            }),
            /* @__PURE__ */ jsxs("div", {
              className:
                "bg-white p-6 rounded-lg shadow-sm border border-autism-border-divider",
              children: [
                /* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold mb-3",
                  children: "Excellence",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-autism-complementary-text",
                  children:
                    "We are committed to providing the highest quality services based on evidence-based practices and continuous improvement.",
                }),
              ],
            }),
            /* @__PURE__ */ jsx("img", {
              src: autismImg6,
              alt: "Autism Image 6",
              className: "rounded-lg shadow-md ",
            }),
            /* @__PURE__ */ jsxs("div", {
              className:
                "bg-white p-6 rounded-lg shadow-sm border border-autism-border-divider",
              children: [
                /* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold mb-3",
                  children: "Collaboration",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-autism-complementary-text",
                  children:
                    "We work together with families, professionals, and community partners to create comprehensive support networks.",
                }),
              ],
            }),
            /* @__PURE__ */ jsx("img", {
              src: autismImg7,
              alt: "Autism Image 7",
              className: "rounded-lg shadow-md",
            }),
            /* @__PURE__ */ jsxs("div", {
              className:
                "bg-white p-6 rounded-lg shadow-sm border border-autism-border-divider",
              children: [
                /* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold mb-3",
                  children: "Inclusion",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-autism-complementary-text",
                  children:
                    "We advocate for a society that values diversity and provides equal opportunities for individuals on the autism spectrum.",
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx(Section, {
        title: "Our Leadership Team",
        children: /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "text-center",
              children: [
                /* @__PURE__ */ jsx("div", {
                  className:
                    "w-40 h-40 mx-auto rounded-full bg-autism-bright-blue mb-4 flex items-center justify-center text-4xl font-bold",
                  children: "AB",
                }),
                /* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold",
                  children: "Abdulaziz Berento",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-autism-interactive-hover",
                  children: "Executive Director",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "mt-2 text-autism-complementary-text",
                  children:
                    "Behaviorial Therapist with 5+ years of experience in autism diagnosis and intervention.",
                }),
              ],
            }),
            /* @__PURE__ */ jsxs("div", {
              className: "text-center",
              children: [
                /* @__PURE__ */ jsx("div", {
                  className:
                    "w-40 h-40 mx-auto rounded-full bg-autism-accent-cta mb-4 flex items-center justify-center text-4xl font-bold",
                  children: "DW",
                }),
                /* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold",
                  children: "Dresden Warminski, BCBA, LBA",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-autism-interactive-hover",
                  children: "Clinical Director",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "mt-2 text-autism-complementary-text",
                  children:
                    "Specializing in evidence-based therapies for autism spectrum disorders with a focus on early intervention with over 10+ years of experience.",
                }),
              ],
            }),
            /* @__PURE__ */ jsxs("div", {
              className: "text-center",
              children: [
                /* @__PURE__ */ jsx("div", {
                  className:
                    "w-40 h-40 mx-auto rounded-full bg-autism-bright-blue mb-4 flex items-center justify-center text-4xl font-bold",
                  children: "OA",
                }),
                /* @__PURE__ */ jsx("h3", {
                  className: "text-xl font-semibold",
                  children: "Obsa Ali",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "text-autism-interactive-hover",
                  children: "Family Support Director",
                }),
                /* @__PURE__ */ jsx("p", {
                  className: "mt-2 text-autism-complementary-text",
                  children:
                    "Parent advocate with extensive experience coordinating resources and support for families affected by autism.",
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx(Section, {
        className: "text-center",
        color: "alternate",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-3xl mx-auto",
          children: [
            /* @__PURE__ */ jsx("h2", {
              className: "text-3xl md:text-4xl font-bold mb-6",
              children: "Join Our Community",
            }),
            /* @__PURE__ */ jsx("p", {
              className: "text-lg mb-8 text-autism-complementary-text",
              children:
                "Whether you're seeking services, looking to volunteer, or interested in employment opportunities, we invite you to become part of the Hopeful Horizons family.",
            }),
            /* @__PURE__ */ jsxs("div", {
              className: "flex flex-col md:flex-row justify-center gap-4",
              children: [
                /* @__PURE__ */ jsx("a", {
                  href: "/contact",
                  className: "autism-btn-primary text-center",
                  children: "Contact Us",
                }),
                /* @__PURE__ */ jsx("a", {
                  href: "/services",
                  className: "autism-btn-secondary text-center",
                  children: "Explore Our Services",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
};
const route7 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: About,
      meta,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
const serverManifest = {
  entry: {
    module: "/assets/entry.client-BppEw7Dj.js",
    imports: [
      "/assets/index-D5PVpqHN.js",
      "/assets/index-DdMl8o6H.js",
      "/assets/components-ak811H2G.js",
    ],
    css: [],
  },
  routes: {
    root: {
      id: "root",
      parentId: void 0,
      path: "",
      index: void 0,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: "/assets/root-CHb7xBWc.js",
      imports: [
        "/assets/index-D5PVpqHN.js",
        "/assets/index-DdMl8o6H.js",
        "/assets/components-ak811H2G.js",
        "/assets/index-D5VjBfMN.js",
        "/assets/autism0-BXS7FAi0.js",
      ],
      css: ["/assets/root-BIZxNAFs.css"],
    },
    "routes/resources": {
      id: "routes/resources",
      parentId: "root",
      path: "resources",
      index: void 0,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: "/assets/resources-DAo9gbuv.js",
      imports: [
        "/assets/index-D5PVpqHN.js",
        "/assets/Section-C3cr2EYD.js",
        "/assets/index-DdMl8o6H.js",
        "/assets/calendar-C4ADW7Zm.js",
      ],
      css: [],
    },
    "routes/notFound": {
      id: "routes/notFound",
      parentId: "root",
      path: "notFound",
      index: void 0,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: "/assets/notFound-BI7jLVY3.js",
      imports: ["/assets/index-D5PVpqHN.js"],
      css: [],
    },
    "routes/referral": {
      id: "routes/referral",
      parentId: "root",
      path: "referral",
      index: void 0,
      caseSensitive: void 0,
      hasAction: true,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: "/assets/referral-5ONXEzKF.js",
      imports: [
        "/assets/index-D5PVpqHN.js",
        "/assets/Section-C3cr2EYD.js",
        "/assets/index-DdMl8o6H.js",
        "/assets/index-CvELLS0v.js",
        "/assets/index-D5VjBfMN.js",
        "/assets/components-ak811H2G.js",
      ],
      css: [],
    },
    "routes/services": {
      id: "routes/services",
      parentId: "root",
      path: "services",
      index: void 0,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: "/assets/services-Cp_oCEly.js",
      imports: [
        "/assets/index-D5PVpqHN.js",
        "/assets/Section-C3cr2EYD.js",
        "/assets/calendar-C4ADW7Zm.js",
        "/assets/users-B3VIEvsp.js",
        "/assets/index-DdMl8o6H.js",
      ],
      css: [],
    },
    "routes/contact": {
      id: "routes/contact",
      parentId: "root",
      path: "contact",
      index: void 0,
      caseSensitive: void 0,
      hasAction: true,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: "/assets/contact-BO4SVM2t.js",
      imports: [
        "/assets/index-D5PVpqHN.js",
        "/assets/index-CvELLS0v.js",
        "/assets/index-D5VjBfMN.js",
        "/assets/Section-C3cr2EYD.js",
        "/assets/components-ak811H2G.js",
        "/assets/index-DdMl8o6H.js",
      ],
      css: [],
    },
    "routes/_index": {
      id: "routes/_index",
      parentId: "root",
      path: void 0,
      index: true,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: "/assets/_index-D-kOK8Ek.js",
      imports: [
        "/assets/index-D5PVpqHN.js",
        "/assets/Section-C3cr2EYD.js",
        "/assets/index-DdMl8o6H.js",
        "/assets/autism0-BXS7FAi0.js",
        "/assets/users-B3VIEvsp.js",
        "/assets/calendar-C4ADW7Zm.js",
      ],
      css: [],
    },
    "routes/about": {
      id: "routes/about",
      parentId: "root",
      path: "about",
      index: void 0,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: "/assets/about-Bkj4slVL.js",
      imports: [
        "/assets/index-D5PVpqHN.js",
        "/assets/Section-C3cr2EYD.js",
        "/assets/index-DdMl8o6H.js",
      ],
      css: [],
    },
  },
  url: "/assets/manifest-d286489c.js",
  version: "d286489c",
};
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = {
  v3_fetcherPersist: false,
  v3_relativeSplatPath: false,
  v3_throwAbortReason: false,
  v3_routeConfig: false,
  v3_singleFetch: false,
  v3_lazyRouteDiscovery: false,
  unstable_optimizeDeps: false,
};
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0,
  },
  "routes/resources": {
    id: "routes/resources",
    parentId: "root",
    path: "resources",
    index: void 0,
    caseSensitive: void 0,
    module: route1,
  },
  "routes/notFound": {
    id: "routes/notFound",
    parentId: "root",
    path: "notFound",
    index: void 0,
    caseSensitive: void 0,
    module: route2,
  },
  "routes/referral": {
    id: "routes/referral",
    parentId: "root",
    path: "referral",
    index: void 0,
    caseSensitive: void 0,
    module: route3,
  },
  "routes/services": {
    id: "routes/services",
    parentId: "root",
    path: "services",
    index: void 0,
    caseSensitive: void 0,
    module: route4,
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route5,
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route6,
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route7,
  },
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes,
};
