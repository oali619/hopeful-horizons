import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import "./root.css";
import "../app/components/index.css";
import { Toaster } from "sonner";
import img from "./images/autism0.jpg";

const siteUrl = "https://hopefulhorizonsmn.com";
const siteName = "Hopeful Horizons ABA Therapy Center";
const siteDescription =
  "Compassionate autism support and ABA therapy for families across Minneapolis, St. Paul, and the Twin Cities.";
const ogImageUrl = img.startsWith("http") ? img : `${siteUrl}${img}`;

export const meta: MetaFunction = () => [
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
  { property: "og:url", content: siteUrl },
  { property: "og:image", content: ogImageUrl },
  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: `${siteName} | Autism & ABA Therapy in Minneapolis-St. Paul`,
  },
  { name: "twitter:description", content: siteDescription },
  { name: "twitter:image", content: ogImageUrl },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const canonicalUrl = `${siteUrl}${location.pathname}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    telephone: "+1-612-222-2817",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5901 Brooklyn Blvd Ste 200",
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

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Toaster closeButton richColors />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
