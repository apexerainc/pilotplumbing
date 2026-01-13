import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pilot Plumbing & Drain | Vancouver & Portland Plumbing Experts",
  description:
    "Professional plumbing, drain cleaning, water damage restoration, and emergency plumbing services in Vancouver WA & Portland Metro. 24/7 emergency response. Licensed & insured.",
  keywords:
    "plumbing, drain cleaning, water damage restoration, Vancouver WA, Portland OR, emergency plumber, licensed plumber, plumbing repair",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://pilotplumbinganddrain.com/#organization",
    name: "Pilot Plumbing & Drain",
    image: "https://pilotplumbinganddrain.com/logo.png",
    description:
      "Professional plumbing, drain cleaning, water damage restoration, and emergency services in Vancouver WA & Portland Metro. 24/7 emergency response.",
    telephone: "+1-360-768-0141",
    email: "pilotplumbinganddrainportland@gmail.com",
    url: "https://pilotplumbinganddrain.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12323 NE 99th St #123",
      addressLocality: "Vancouver",
      addressRegion: "WA",
      postalCode: "98682",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Vancouver",
        "@id": "https://en.wikipedia.org/wiki/Vancouver,_Washington",
      },
      {
        "@type": "City",
        name: "Portland",
        "@id": "https://en.wikipedia.org/wiki/Portland,_Oregon",
      },
      {
        "@type": "City",
        name: "Camas",
      },
      {
        "@type": "City",
        name: "Washougal",
      },
      {
        "@type": "City",
        name: "Battle Ground",
      },
      {
        "@type": "City",
        name: "Ridgefield",
      },
      {
        "@type": "City",
        name: "Salmon Creek",
      },
      {
        "@type": "City",
        name: "Orchards",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "45.6872",
      longitude: "-122.6615",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: ["https://www.pilotplumbinganddrain.com"],
    serviceType: [
      "Plumbing Repair",
      "Drain Cleaning",
      "Water Damage Restoration",
      "Emergency Plumbing",
      "Water Heater Services",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://pilotplumbinganddrain.com/#website",
    url: "https://pilotplumbinganddrain.com",
    name: "Pilot Plumbing & Drain",
    publisher: {
      "@id": "https://pilotplumbinganddrain.com/#organization",
    },
  }

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
