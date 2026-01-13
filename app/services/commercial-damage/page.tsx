import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  CheckCircle,
  Building2,
  Shield,
  Clock,
  Award,
  Users,
  Briefcase,
  FileText,
  Warehouse,
  Store,
  Building,
} from "lucide-react"

export default function CommercialDamagePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Commercial Damage Restoration",
    provider: {
      "@type": "LocalBusiness",
      name: "Pilot Plumbing & Drain",
      telephone: "+1-360-768-0141",
      url: "https://pilotplumbinganddrain.com",
    },
    areaServed: {
      "@type": "State",
      name: "Washington",
    },
    description:
      "24/7 commercial property restoration services including water damage, mold remediation, and emergency cleanup for businesses in Vancouver WA & Portland Metro.",
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
        name: "Commercial Damage Restoration",
        item: "https://pilotplumbinganddrain.com/services/commercial-damage",
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How quickly can you respond to a commercial emergency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide 24/7 emergency response for commercial properties with technicians on-site within 2 hours. Our rapid response helps minimize business downtime and financial losses.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with commercial insurance companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we work directly with commercial insurance providers, handle all documentation, and provide direct billing to streamline the claims process for your business.",
        },
      },
      {
        "@type": "Question",
        name: "Can you work around our business hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We offer after-hours and weekend services to minimize disruption to your business operations. Our teams can work during off-hours to complete restoration with minimal impact.",
        },
      },
    ],
  }

  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="bg-[#1a1f3a] text-primary-foreground py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/commercial-building-restoration-professional.jpg"
            alt="Commercial damage restoration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a1f3a]/95" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(93,206,235,0.3),transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 border-2 border-accent/40 rounded-full px-5 py-2.5 mb-8">
              <Building2 className="h-5 w-5 text-accent" />
              <span className="text-sm font-bold text-accent">Commercial Property Experts</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">Commercial Damage Restoration</h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-10 text-pretty leading-relaxed">
              Fast, professional restoration services for businesses in{" "}
              <Link href="/service-areas/vancouver" className="underline hover:text-accent">
                Vancouver
              </Link>
              ,{" "}
              <Link href="/service-areas/portland" className="underline hover:text-accent">
                Portland
              </Link>
              , and the{" "}
              <Link href="/service-areas" className="underline hover:text-accent">
                Pacific Northwest
              </Link>
              . Minimize downtime and protect your business with 24/7 emergency response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg h-14 px-8">
                <a href="tel:+13607680141">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: (360) 768-0141
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 text-lg h-14 px-8"
              >
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                <span>24/7 Emergency Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                <span>Certified Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-20 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-muted-foreground">Emergency Response</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">2hr</div>
              <div className="text-muted-foreground">On-Site Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">100+</div>
              <div className="text-muted-foreground">Businesses Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">5★</div>
              <div className="text-muted-foreground">Google Reviews</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Commercial Restoration Services in Vancouver & Portland</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  When disaster strikes your business, every minute of downtime costs money. According to{" "}
                  <a
                    href="https://www.fema.gov/emergency-managers/risk-management/building-science/business-continuity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline font-medium"
                  >
                    FEMA
                  </a>
                  , 40% of businesses never reopen after a disaster, and another 25% fail within one year. Fast,
                  professional restoration is critical to business survival.
                </p>
                <p>
                  Pilot Plumbing & Drain specializes in commercial property restoration for businesses throughout{" "}
                  <Link href="/service-areas/vancouver" className="underline hover:text-accent">
                    Vancouver
                  </Link>
                  ,{" "}
                  <Link href="/service-areas/portland" className="underline hover:text-accent">
                    Portland
                  </Link>
                  , and the surrounding areas. Our certified technicians respond within 2 hours to minimize downtime and
                  financial losses. We follow{" "}
                  <a
                    href="https://www.iicrc.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline font-medium"
                  >
                    IICRC industry standards
                  </a>{" "}
                  for commercial restoration, ensuring thorough, professional service.
                </p>
                <p>
                  We work with commercial insurance providers, handle all documentation, and offer flexible scheduling
                  to minimize business disruption. Our goal is to get your business back to normal operations as quickly
                  as possible.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl blur-2xl" />
              <img
                src="/images/img-2206.jpeg"
                alt="Commercial restoration equipment"
                className="rounded-xl shadow-2xl relative z-10 border-4 border-white"
              />
            </div>
          </div>

          {/* Property Types */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-4 text-center">Commercial Properties We Serve</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
              We provide expert restoration services for all types of commercial properties in the Pacific Northwest
              area.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow border-2">
                <CardContent className="p-8">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Building className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Office Buildings</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Corporate offices, professional suites, and multi-tenant buildings
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow border-2">
                <CardContent className="p-8">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Store className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Retail Spaces</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Storefronts, shopping centers, and retail establishments
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow border-2">
                <CardContent className="p-8">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Warehouse className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Warehouses</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Distribution centers, storage facilities, and industrial spaces
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow border-2">
                <CardContent className="p-8">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Medical Facilities</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Clinics, dental offices, and healthcare facilities
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow border-2">
                <CardContent className="p-8">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Hotels & Hospitality</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Hotels, motels, restaurants, and entertainment venues
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow border-2">
                <CardContent className="p-8">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Educational Facilities</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Schools, daycare centers, and training facilities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Our Services */}
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
              Comprehensive Commercial Restoration Services
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
              Complete restoration solutions designed to minimize downtime and protect your business operations.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Emergency Water Damage Restoration</h3>
                  <p className="text-muted-foreground">
                    Rapid water extraction, structural drying, and damage mitigation to protect your property and
                    inventory.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Commercial Mold Remediation</h3>
                  <p className="text-muted-foreground">
                    EPA-compliant mold inspection, testing, and removal to maintain a healthy workplace environment.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Sewage & Biohazard Cleanup</h3>
                  <p className="text-muted-foreground">
                    Safe handling and disposal of contaminated materials following OSHA protocols.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Document & Content Restoration</h3>
                  <p className="text-muted-foreground">
                    Specialized recovery of important documents, inventory, and business equipment.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Commercial Insurance Claims</h3>
                  <p className="text-muted-foreground">
                    Direct billing, complete documentation, and claims support to expedite your recovery.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">After-Hours Service</h3>
                  <p className="text-muted-foreground">
                    Flexible scheduling including nights and weekends to minimize business disruption.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-muted rounded-lg p-8 lg:p-12 mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Businesses Choose Pilot Plumbing</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Rapid Response</h3>
                <p className="text-sm text-muted-foreground">
                  2-hour emergency response time to minimize business downtime and losses
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Certified Experts</h3>
                <p className="text-sm text-muted-foreground">
                  IICRC-certified technicians with specialized commercial restoration training
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Business-Focused</h3>
                <p className="text-sm text-muted-foreground">
                  We understand business needs and work to get you operational fast
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Building2 className="h-16 w-16 mx-auto mb-6 text-accent" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
            24/7 Commercial Emergency Response
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Don't let property damage shut down your business. Call now for immediate assistance serving{" "}
            <Link href="/service-areas/vancouver" className="underline hover:text-accent text-white">
              Vancouver
            </Link>
            ,{" "}
            <Link href="/service-areas/portland" className="underline hover:text-accent text-white">
              Portland
            </Link>
            , and the{" "}
            <Link href="/service-areas" className="underline hover:text-accent text-white">
              entire Pacific Northwest
            </Link>
            .
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg h-14 px-8">
            <a href="tel:+13607680141">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (360) 768-0141
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
