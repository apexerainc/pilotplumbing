import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield, Droplets, Building2, Home } from 'lucide-react'
import { ServiceAreaMap } from "@/components/service-area-map"

export default function VancouverPage() {
  const neighborhoods = [
    { name: "Downtown Vancouver", description: "Historic heart of the city and waterfront" },
    { name: "Fisher's Landing", description: "Family-friendly residential community" },
    { name: "Salmon Creek", description: "Rapidly growing northern suburb" },
    { name: "Cascade Park", description: "Established neighborhoods with large lots" },
    { name: "Orchards", description: "Mixed residential and commercial area" },
    { name: "Felida", description: "Upscale homes near Vancouver Lake" },
    { name: "Hazel Dell", description: "Bustling commercial and residential district" },
    { name: "Hough", description: "Historic neighborhood with character homes" },
    { name: "Arnada", description: "Tree-lined streets and vintage architecture" },
    { name: "Minnehaha", description: "Quiet residential community" },
    { name: "Evergreen", description: "Diverse neighborhood with easy access" },
    { name: "Lincoln", description: "Residential area near downtown" },
  ]

  const nearbyAreas = [
    { name: "Portland", slug: "portland" },
    { name: "Camas", slug: "camas" },
    { name: "Washougal", slug: "washougal" },
    { name: "Battle Ground", slug: "battle-ground" },
    { name: "Ridgefield", slug: "ridgefield" },
    { name: "Orchards", slug: "orchards" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1f3a] to-[#2a3055] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f3a]/95 via-[#1a1f3a]/85 to-[#2a3055]/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#5dceeb]/20 backdrop-blur-sm border border-[#5dceeb]/30 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4 text-[#5dceeb]" />
              <span className="text-sm font-medium">Serving All of Vancouver, WA</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Plumbing & Water Restoration in Vancouver, WA
            </h1>
            <p className="text-xl text-white/90 mb-8 text-pretty">
              Vancouver's trusted 24/7 emergency plumbing and restoration experts. From Downtown to Fisher's Landing, we provide expert
              plumbing repairs, water damage restoration, and mold remediation throughout Clark County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#5dceeb] hover:bg-[#5dceeb]/90 text-white border-0">
                <a href="tel:+13607680141">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (360) 768-0141
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link href="/contact">Request Free Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Vancouver Service */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Expert Plumbing & Restoration in Vancouver, Washington</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Pilot Plumbing & Drain is Vancouver's premier plumbing and water restoration company, providing
                comprehensive services to homes and businesses throughout Clark County. Our local technicians understand the specific plumbing challenges of the Pacific Northwest—from heavy rain impacting drainage systems to older pipe infrastructure in historic neighborhoods.
              </p>
              <p>
                We proudly serve all Vancouver neighborhoods including the historic <strong>Hough</strong> and <strong>Arnada</strong> districts,
                the family-focused communities of <strong>Fisher's Landing</strong> and <strong>Cascade Park</strong>,
                and the rapidly growing areas of <strong>Salmon Creek</strong> and <strong>Felida</strong>.
                Whether you have a Victorian home near downtown or a modern build in East Vancouver, our team is equipped to
                handle any plumbing or restoration challenge.
              </p>
              <p>
                Vancouver properties face specific risks including tree root intrusion in sewer lines, damp basements during the rainy season, and
                older galvanized piping issues. Our team is trained to address these local challenges with proven techniques and modern technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods We Serve */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vancouver Neighborhoods We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experts serve every corner of Vancouver with fast, professional service
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {neighborhoods.map((neighborhood) => (
              <div
                key={neighborhood.name}
                className="bg-background rounded-lg p-4 border hover:border-[#5dceeb]/50 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-foreground mb-1">{neighborhood.name}</h3>
                <p className="text-sm text-muted-foreground">{neighborhood.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Vancouver Services</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Comprehensive plumbing and restoration solutions for Vancouver homes and businesses
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-[#5dceeb]/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Droplets className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold">Water Damage Restoration</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Emergency water extraction, structural drying, and complete restoration for properties affected
                  by flooding, burst pipes, or appliance leaks. We respond quickly to minimize damage.
                </p>
                <Button asChild variant="link" className="p-0 text-[#5dceeb]">
                  <Link href="/services/water-damage">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#5dceeb]/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold">Mold Remediation</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Professional mold inspection, testing, and safe removal services. The PNW climate can
                  accelerate mold growth—we protect your home and health with thorough remediation.
                </p>
                <Button asChild variant="link" className="p-0 text-[#5dceeb]">
                  <Link href="/services/mold-remediation">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#5dceeb]/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                    <Home className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold">Plumbing Services</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  From leak repairs and drain cleaning to water heater installation and repiping.
                  Our licensed plumbers handle all residential and commercial plumbing needs.
                </p>
                <Button asChild variant="link" className="p-0 text-[#5dceeb]">
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#5dceeb]/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-slate-500/10 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-slate-500" />
                  </div>
                  <h3 className="text-xl font-bold">Commercial Services</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Comprehensive plumbing and restoration for Vancouver businesses.
                  We minimize downtime and protect your commercial investment with priority expert service.
                </p>
                <Button asChild variant="link" className="p-0 text-[#5dceeb]">
                  <Link href="/services/commercial-damage">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Vancouver Chooses Pilot Plumbing</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#5dceeb] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Local Vancouver Experts</h3>
                    <p className="text-muted-foreground">
                      We live and work here, understanding the unique needs of Vancouver homes and businesses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#5dceeb] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">24/7 Emergency Response</h3>
                    <p className="text-muted-foreground">
                      Our local crews can reach any location in Vancouver quickly, day or night.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#5dceeb] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Licensed & Insured</h3>
                    <p className="text-muted-foreground">
                      Fully licensed plumbers and certified restoration technicians for your peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background rounded-xl p-6 text-center border">
                <div className="text-4xl font-bold text-[#5dceeb] mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
              <div className="bg-background rounded-xl p-6 text-center border">
                <div className="text-4xl font-bold text-[#5dceeb] mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
              <div className="bg-background rounded-xl p-6 text-center border">
                <div className="text-4xl font-bold text-[#5dceeb] mb-2">Local</div>
                <div className="text-sm text-muted-foreground">Experts</div>
              </div>
              <div className="bg-background rounded-xl p-6 text-center border">
                <div className="text-4xl font-bold text-[#5dceeb] mb-2">Fast</div>
                <div className="text-sm text-muted-foreground">Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Service Area</h2>
          <div className="max-w-4xl mx-auto">
            <ServiceAreaMap />
          </div>
        </div>
      </section>

      {/* Nearby Service Areas */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">We Also Serve Areas Near Vancouver</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In addition to Vancouver, our services extend throughout the Portland-Vancouver Metro area
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {nearbyAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="bg-muted hover:bg-[#5dceeb]/10 px-6 py-3 rounded-full font-medium transition-colors border hover:border-[#5dceeb]/50"
              >
                {area.name}
              </Link>
            ))}
            <Link
              href="/service-areas"
              className="bg-[#5dceeb] text-white hover:bg-[#5dceeb]/90 px-6 py-3 rounded-full font-medium transition-colors"
            >
              View All Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#1a1f3a] to-[#2a3055] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Need Emergency Plumbing or Restoration?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto text-pretty">
            Don't wait—damage gets worse every minute. Call now for immediate assistance from Vancouver's trusted experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#5dceeb] hover:bg-[#5dceeb]/90 text-white text-lg border-0">
              <a href="tel:+13607680141">
                <Phone className="mr-2 h-5 w-5" />
                Call (360) 768-0141
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-[#1a1f3a] hover:bg-white/90 border-white"
            >
              <Link href="/contact">Request Service Online</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
