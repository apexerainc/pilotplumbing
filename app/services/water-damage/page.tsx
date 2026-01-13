import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, CheckCircle, AlertTriangle, Clock, Droplets, AlertOctagon, XCircle } from "lucide-react"

export default function WaterDamagePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Water Damage Restoration",
    provider: {
      "@type": "LocalBusiness",
      name: "Pilot Plumbing & Drain",
      telephone: "+1-360-768-0141",
      url: "https://pilotplumbinganddrain.com",
    },
    areaServed: [
      {
        "@type": "State",
        name: "Washington",
      },
      {
        "@type": "State",
        name: "Oregon",
      },
    ],
    description:
      "Professional water damage restoration services including emergency water extraction, structural drying, moisture detection, and mold prevention in Vancouver WA & Portland Metro.",
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: "+1-360-768-0141",
        contactType: "Emergency Service",
        availableLanguage: "English",
      },
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://pilotplumbinganddrain.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://pilotplumbinganddrain.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Water Damage Restoration",
        item: "https://pilotplumbinganddrain.com/services/water-damage",
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How quickly should I respond to water damage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You should respond to water damage immediately. Within 24-48 hours, mold can begin growing and structural damage can become severe. Call Pilot Plumbing & Drain at (360) 768-0141 for emergency water extraction and drying services.",
        },
      },
      {
        "@type": "Question",
        name: "Will my insurance cover water damage restoration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most homeowners insurance policies cover sudden and accidental water damage, such as burst pipes or appliance failures. We work directly with insurance companies and can help you navigate the claims process.",
        },
      },
      {
        "@type": "Question",
        name: "How long does water damage restoration take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The timeline varies depending on the extent of damage. Emergency water extraction typically takes a few hours, while structural drying can take 3-5 days. Complete restoration may take 1-2 weeks for extensive damage.",
        },
      },
    ],
  }

  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/design-mode/IMG_7787.JPG.jpeg"
            alt="Water damage restoration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary/80 opacity-20" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Water Damage Restoration</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty">
              Fast, professional water damage restoration services in{" "}
              <Link href="/service-areas/vancouver" className="underline hover:text-accent transition-colors">
                Vancouver
              </Link>
              ,{" "}
              <Link href="/service-areas/portland" className="underline hover:text-accent transition-colors">
                Portland
              </Link>
              , and{" "}
              <Link href="/service-areas" className="underline hover:text-accent transition-colors">
                surrounding areas
              </Link>
              . Available 24/7 for emergency water extraction and drying.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a href="tel:+13607680141">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: (360) 768-0141
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Request Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 border-y-4 border-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4 font-semibold">
              <Clock className="h-5 w-5" />
              Time is Critical
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-3">Water Damage Timeline</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Understanding how quickly water damage escalates can help you act fast and minimize losses
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div
              className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-red-500 to-red-700"
              style={{ top: "80px" }}
            />

            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="relative">
                <Card className="border-2 border-orange-200 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-20 w-20 bg-gradient-to-br from-orange-400 to-orange-500 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow-lg relative z-10">
                        <Droplets className="h-10 w-10" />
                      </div>
                      <div className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold mb-3">
                        0-24 HOURS
                      </div>
                      <h4 className="font-bold mb-2 text-lg text-orange-700">Immediate Impact</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Water spreads rapidly through porous materials. Furniture, carpets, and drywall begin absorbing
                        moisture.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <Card className="border-2 border-orange-300 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-20 w-20 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow-lg relative z-10">
                        <AlertTriangle className="h-10 w-10" />
                      </div>
                      <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-bold mb-3">
                        24-48 HOURS
                      </div>
                      <h4 className="font-bold mb-2 text-lg text-orange-800">Critical Window</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Mold and mildew begin growing. Doors, windows, and studs swell. Metal surfaces start to tarnish.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <Card className="border-2 border-red-300 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-20 w-20 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow-lg relative z-10">
                        <AlertOctagon className="h-10 w-10" />
                      </div>
                      <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold mb-3">
                        48-72 HOURS
                      </div>
                      <h4 className="font-bold mb-2 text-lg text-red-800">Severe Damage</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Structural damage intensifies. Mold spreads significantly. Biohazard contamination possible.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <Card className="border-2 border-red-400 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-20 w-20 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow-lg relative z-10">
                        <XCircle className="h-10 w-10" />
                      </div>
                      <div className="inline-block bg-red-100 text-red-900 px-3 py-1 rounded-full text-sm font-bold mb-3">
                        1+ WEEK
                      </div>
                      <h4 className="font-bold mb-2 text-lg text-red-900">Extensive Damage</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Major structural repairs needed. Serious health risks. Restoration costs increase dramatically.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-lg p-6 max-w-2xl mx-auto mb-6">
              <p className="text-lg font-semibold text-red-900 mb-2">
                Every minute counts when dealing with water damage
              </p>
              <p className="text-muted-foreground">
                Our fast response time can be the difference between minor repairs and major reconstruction
              </p>
            </div>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <a href="tel:+13607680141">
                <Phone className="mr-2 h-5 w-5" />
                Stop the Clock - Call (360) 768-0141 Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 bg-accent/10 border-y border-accent">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <AlertTriangle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Time is Critical with Water Damage</h3>
              <p className="text-muted-foreground">
                Water damage worsens rapidly. Within 24-48 hours, mold can begin growing, and structural damage can
                become severe. Call us immediately for emergency water extraction and drying services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6">Understanding Water Damage in the Pacific Northwest</h2>
            <p className="text-muted-foreground mb-6">
              Water damage is one of the most common and destructive problems facing property owners in Vancouver WA and
              the Portland Metro area. Whether from burst pipes, flooding, storms, or appliance failures, water can
              quickly compromise your property's structural integrity and create health hazards.
            </p>

            <p className="text-muted-foreground mb-6">
              At Pilot Plumbing & Drain, our licensed technicians follow industry best practices to ensure complete
              water extraction, thorough drying, and proper restoration of your property.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Common Causes of Water Damage</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <span>
                  <strong>Burst or Frozen Pipes:</strong> Pacific Northwest winters can cause pipes to freeze and burst,
                  leading to significant water damage
                </span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <span>
                  <strong>Heavy Rainfall & Flooding:</strong> The Pacific Northwest's heavy rainfall can lead to
                  flooding, especially during fall and winter
                </span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <span>
                  <strong>Appliance Failures:</strong> Water heaters, washing machines, and dishwashers can malfunction
                  and cause extensive water damage
                </span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <span>
                  <strong>Roof Leaks:</strong> Damaged shingles or flashing can allow water to penetrate your home or
                  business
                </span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                <span>
                  <strong>Sewage Backups:</strong> Clogged or damaged sewer lines can cause hazardous sewage water to
                  back up into your property
                </span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Why Immediate Action Is Critical</h3>
            <p className="text-muted-foreground mb-6">
              According to the{" "}
              <a
                href="https://www.epa.gov/mold/mold-cleanup-your-home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline font-medium"
              >
                EPA
              </a>
              , water damage should be addressed within 24-48 hours to prevent mold growth and structural damage. Our
              fast emergency response time ensures we can begin mitigation before serious problems develop.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Water Damage Restoration in Vancouver & Portland</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Water damage can strike at any time—from burst pipes and appliance failures to flooding and severe
                  storms. When it happens, you need a restoration company that responds fast and gets the job done
                  right. According to the{" "}
                  <a
                    href="https://www.epa.gov/mold/mold-cleanup-your-home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    EPA's mold prevention guidelines
                  </a>
                  , addressing water damage within 24-48 hours is critical to prevent mold growth.
                </p>
                <p>
                  Pilot Plumbing & Drain specializes in emergency water damage restoration throughout{" "}
                  <Link href="/service-areas/vancouver" className="text-secondary hover:underline">
                    Vancouver
                  </Link>
                  ,{" "}
                  <Link href="/service-areas/portland" className="text-secondary hover:underline">
                    Portland
                  </Link>
                  , and the greater{" "}
                  <Link href="/service-areas" className="text-secondary hover:underline">
                    Pacific Northwest area
                  </Link>
                  . Our licensed technicians use advanced moisture detection equipment and industrial-grade drying
                  systems to restore your property quickly and completely.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/images/design-mode/download%20%2822%29.jpg"
                alt="Water damage restoration equipment"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Emergency Water Extraction", desc: "Fast removal of standing water to prevent further damage" },
              { title: "Structural Drying", desc: "Industrial dehumidifiers and air movers for complete drying" },
              { title: "Moisture Detection", desc: "Advanced thermal imaging to find hidden moisture" },
              { title: "Mold Prevention", desc: "Antimicrobial treatments to prevent mold growth" },
            ].map((service, i) => (
              <Card key={i} className="border-2 hover:border-secondary/50 transition-all">
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Need Water Damage Help Now?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Don't wait—every minute counts. Our team is ready to respond 24/7 to your water damage emergency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg">
              <a href="tel:+13607680141">
                <Phone className="mr-2 h-5 w-5" />
                Call (360) 768-0141
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/90 text-lg border-white"
            >
              <Link href="/contact">Request Service Online</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
