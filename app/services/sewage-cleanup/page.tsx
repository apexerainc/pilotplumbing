import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  CheckCircle,
  AlertTriangle,
  Shield,
  Droplets,
  Home,
  Clock,
  Award,
  Users,
  Biohazard,
  ShieldAlert,
  Sparkles,
} from "lucide-react"

export default function SewageCleanupPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Sewage Cleanup",
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
      "24/7 emergency sewage backup cleanup and biohazard remediation services. Professional sanitization using EPA-approved methods in Vancouver WA & Portland Metro.",
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
        name: "Sewage Cleanup",
        item: "https://pilotplumbinganddrain.com/services/sewage-cleanup",
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is sewage backup dangerous?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, sewage backup is extremely dangerous. It contains harmful bacteria, viruses, and parasites that can cause serious illness. Sewage is classified as Category 3 'black water' and requires professional biohazard cleanup.",
        },
      },
      {
        "@type": "Question",
        name: "Can I clean up sewage backup myself?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, sewage cleanup should only be performed by certified professionals with proper protective equipment. DIY cleanup poses serious health risks and may not properly sanitize affected areas.",
        },
      },
      {
        "@type": "Question",
        name: "How long does sewage cleanup take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sewage cleanup typically takes 2-5 days depending on the extent of contamination. This includes extraction, removal of contaminated materials, sanitization, drying, and restoration.",
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
            src="/sewage-cleanup-professional-service.jpg"
            alt="Professional sewage cleanup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a1f3a]/95" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(93,206,235,0.3),transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/20 border-2 border-red-500/40 rounded-full px-5 py-2.5 mb-8 animate-pulse">
              <Biohazard className="h-5 w-5 text-red-400" />
              <span className="text-sm font-bold text-red-300">Biohazard - Professional Cleanup Required</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">Professional Sewage Cleanup</h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-10 text-pretty leading-relaxed">
              24/7 emergency sewage backup cleanup and sanitization services in{" "}
              <Link href="/service-areas/vancouver" className="underline hover:text-accent">
                Vancouver
              </Link>
              ,{" "}
              <Link href="/service-areas/portland" className="underline hover:text-accent">
                Portland
              </Link>
              , and{" "}
              <Link href="/service-areas" className="underline hover:text-accent">
                surrounding areas
              </Link>
              . Protect your property and health with certified biohazard remediation.
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

      {/* Warning Section */}
      <section className="py-8 bg-red-50 border-y border-red-200">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2 text-red-900">Sewage Is a Serious Health Hazard</h3>
              <p className="text-red-800">
                Sewage contains dangerous bacteria, viruses, and parasites that can cause serious illness. Do not
                attempt to clean sewage without proper protective equipment. Contact us immediately for safe,
                professional cleanup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Health Risk Section */}
      <section className="py-16 bg-gradient-to-b from-red-50 to-white border-b-2 border-red-200">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-4 text-red-900">Health Risks of Sewage Exposure</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Sewage backup is classified as Category 3 "black water" - the most hazardous type of water damage.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 border-2 border-red-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-14 w-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Biohazard className="h-7 w-7 text-red-600" />
              </div>
              <h4 className="font-bold text-lg mb-3 text-red-800">Bacterial Infections</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                E. coli, Salmonella, and other harmful bacteria can cause severe gastrointestinal illness
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border-2 border-red-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-14 w-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <ShieldAlert className="h-7 w-7 text-red-600" />
              </div>
              <h4 className="font-bold text-lg mb-3 text-red-800">Viral Diseases</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hepatitis A, Rotavirus, and Norovirus can spread through sewage contamination
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border-2 border-red-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-14 w-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="h-7 w-7 text-red-600" />
              </div>
              <h4 className="font-bold text-lg mb-3 text-red-800">Parasitic Infections</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Giardia, Cryptosporidium, and other parasites pose serious health risks
              </p>
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
              <div className="text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">100%</div>
              <div className="text-muted-foreground">Sanitization</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">5★</div>
              <div className="text-muted-foreground">Google Reviews</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Expert Sewage Cleanup in Vancouver & Portland</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Sewage backups are among the most hazardous water damage situations. According to the{" "}
                  <a
                    href="https://www.epa.gov/ground-water-and-drinking-water/sanitary-sewer-overflows-ssos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline font-medium"
                  >
                    EPA
                  </a>
                  , sewage contains dangerous pathogens that require professional handling and disposal. The{" "}
                  <a
                    href="https://www.cdc.gov/healthywater/emergency/extreme-weather/sewage-backup.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline font-medium"
                  >
                    CDC recommends immediate professional cleanup
                  </a>{" "}
                  for any sewage exposure to prevent serious illness. Properties in{" "}
                  <Link href="/service-areas/vancouver" className="underline hover:text-accent">
                    Vancouver
                  </Link>
                  ,{" "}
                  <Link href="/service-areas/portland" className="underline hover:text-accent">
                    Portland
                  </Link>
                  , and surrounding areas can experience sewage backups from heavy rains, aging infrastructure, or
                  blockages.
                </p>
                <p>
                  Pilot Plumbing & Drain provides comprehensive sewage cleanup services using{" "}
                  <a
                    href="https://www.osha.gov/bloodborne-pathogens"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline font-medium"
                  >
                    OSHA-compliant protocols
                  </a>{" "}
                  for biohazard remediation. Our certified technicians safely extract contaminated water, remove
                  affected materials, thoroughly sanitize all surfaces, and restore your property to a safe, healthy
                  condition.
                </p>
                <p>
                  We use hospital-grade disinfectants and antimicrobial treatments to ensure complete sanitization. Our
                  team follows strict OSHA and EPA guidelines for handling and disposing of biohazardous materials.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl blur-2xl" />
              <img
                src="/images/2025-03-06t13-27-53-942.jpg"
                alt="Sewage cleanup equipment"
                className="rounded-xl shadow-2xl relative z-10 border-4 border-white"
              />
            </div>
          </div>

          {/* Our Services */}
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">Our Sewage Cleanup Services</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
              Complete biohazard remediation following strict industry protocols for safe, thorough cleanup.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-2 hover:shadow-xl transition-all hover:border-secondary/50">
                <CardContent className="p-8">
                  <div className="h-14 w-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                    <Droplets className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Sewage Extraction</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Rapid removal of contaminated water using specialized equipment designed for biohazard materials.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-xl transition-all hover:border-secondary/50">
                <CardContent className="p-8">
                  <div className="h-14 w-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                    <Biohazard className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Contaminated Material Removal</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Safe removal and disposal of porous materials that cannot be sanitized, including carpet, drywall,
                    and insulation.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-xl transition-all hover:border-secondary/50">
                <CardContent className="p-8">
                  <div className="h-14 w-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                    <Sparkles className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Deep Sanitization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Hospital-grade disinfection of all affected surfaces using EPA-registered antimicrobial agents.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-xl transition-all hover:border-secondary/50">
                <CardContent className="p-8">
                  <div className="h-14 w-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Odor Elimination</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Complete odor removal using industrial air scrubbers and deodorization treatments.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-xl transition-all hover:border-secondary/50">
                <CardContent className="p-8">
                  <div className="h-14 w-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                    <CheckCircle className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Structural Drying</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Industrial dehumidification and drying to prevent mold growth and secondary damage.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-xl transition-all hover:border-secondary/50">
                <CardContent className="p-8">
                  <div className="h-14 w-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                    <Home className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Full Restoration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Complete reconstruction of damaged areas including flooring, drywall, and fixtures.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Process */}
          <div className="bg-muted rounded-lg p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Sewage Cleanup Process</h2>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="h-16 w-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Emergency Response</h3>
                <p className="text-sm text-muted-foreground">Rapid arrival with protective equipment</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Extraction</h3>
                <p className="text-sm text-muted-foreground">Remove all contaminated water</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Removal</h3>
                <p className="text-sm text-muted-foreground">Dispose of contaminated materials</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Sanitize</h3>
                <p className="text-sm text-muted-foreground">Deep clean and disinfect</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  5
                </div>
                <h3 className="font-semibold mb-2">Restore</h3>
                <p className="text-sm text-muted-foreground">Rebuild and finish</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Biohazard className="h-16 w-16 mx-auto mb-6 text-accent" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">24/7 Sewage Cleanup Services</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Don't risk your health. Call now for professional sewage cleanup serving{" "}
            <Link href="/service-areas/vancouver" className="underline hover:text-accent text-white">
              Vancouver
            </Link>
            ,{" "}
            <Link href="/service-areas/portland" className="underline hover:text-accent text-white">
              Portland
            </Link>
            ,{" "}
            <Link href="/service-areas/camas" className="underline hover:text-accent text-white">
              Camas
            </Link>
            , and{" "}
            <Link href="/service-areas" className="underline hover:text-accent text-white">
              all local communities
            </Link>
            .
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg">
            <a href="tel:+13607680141">
              <Phone className="mr-2 h-5 w-5" />
              Call (360) 768-0141 Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
