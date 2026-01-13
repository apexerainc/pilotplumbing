import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  MapPin,
  ArrowRight,
  Clock,
  Shield,
  Award,
  Users,
  Home,
  Building2,
  CheckCircle,
  Droplets,
  Wind,
  AlertTriangle,
} from "lucide-react"

const serviceAreas = [
  { name: "Vancouver", slug: "vancouver", icon: Building2, description: "Vancouver WA and surrounding areas" },
  { name: "Portland", slug: "portland", icon: Building2, description: "Portland metro and surrounding areas" },
  { name: "Camas", slug: "camas", icon: Home, description: "Historic Camas community" },
  { name: "Washougal", slug: "washougal", icon: Home, description: "Columbia River Gorge area" },
  { name: "Battle Ground", slug: "battle-ground", icon: Home, description: "North Clark County" },
  { name: "Ridgefield", slug: "ridgefield", icon: Home, description: "Growing community north of Vancouver" },
  { name: "Salmon Creek", slug: "salmon-creek", icon: Home, description: "Waughop Lake and WSU Vancouver area" },
  { name: "Orchards", slug: "orchards", icon: Home, description: "Five Corners and Orchards area" },
  { name: "Hazel Dell", slug: "hazel-dell", icon: Home, description: "Busy commercial and residential hub" },
  { name: "Felida", slug: "felida", icon: Home, description: "Upscale community plumbing experts" },
]

export default function ServiceAreasPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-primary-foreground py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=800&width=1600"
            alt="Portland skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/95" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold text-white">Serving Vancouver WA & Portland Metro</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional Plumbing & Restoration Services Throughout the Pacific Northwest
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
              From Vancouver to Portland, Camas to Beaverton—Pilot Plumbing & Drain provides 24/7 emergency response and
              expert plumbing and restoration services to homeowners and businesses across the entire metro region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg"
              >
                <Link href="/contact">Request Service Online</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">12+</div>
                <div className="text-sm text-white/80">Cities Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">Same</div>
                <div className="text-sm text-white/80">Day Service</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-white/80">Availability</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">5★</div>
                <div className="text-sm text-white/80">Google Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Service Areas</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              We proudly serve homeowners and businesses throughout the Vancouver WA and Portland Metro area with
              comprehensive plumbing and restoration services. Click on any area below to learn more about our local
              services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {serviceAreas.map((area) => {
              const IconComponent = area.icon
              return (
                <Card
                  key={area.slug}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-secondary/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{area.name}</h3>
                        <p className="text-sm text-muted-foreground">{area.description}</p>
                      </div>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="w-full justify-between group">
                      <Link href={`/service-areas/${area.slug}`}>
                        View Details
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-8 lg:p-12 border-2 border-secondary/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Comprehensive Regional Coverage</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Clark County, WA</h4>
                      <p className="text-muted-foreground text-sm">
                        Vancouver, Camas, Washougal, Battle Ground, Ridgefield, and surrounding areas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Portland Metro, OR</h4>
                      <p className="text-muted-foreground text-sm">
                        Portland, Gresham, Beaverton, Hillsboro, Lake Oswego, and surrounding areas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Extended Service Area</h4>
                      <p className="text-muted-foreground text-sm">
                        We also serve surrounding communities—call to confirm coverage
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-xl shadow-2xl overflow-hidden border-4 border-white">
                  <iframe
                    src="https://maps.google.com/maps?q=12323+NE+99th+St+Vancouver+WA+98682&output=embed"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Pilot Plumbing & Drain Service Area - Vancouver WA & Portland Metro"
                    className="w-full"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-white px-6 py-3 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">Same-Day</div>
                  <div className="text-sm">Service Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Services Available in All Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every location we serve has access to our complete range of professional plumbing and restoration services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-secondary/50 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Water Damage Restoration</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Emergency water extraction, structural drying, and complete restoration
                </p>
                <Button asChild variant="link" size="sm" className="text-secondary">
                  <Link href="/services/water-damage">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary/50 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Wind className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Mold Remediation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Safe mold removal, air quality testing, and prevention strategies
                </p>
                <Button asChild variant="link" size="sm" className="text-secondary">
                  <Link href="/services/mold-remediation">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary/50 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Sewage Cleanup</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Biohazard removal, sanitization, and decontamination services
                </p>
                <Button asChild variant="link" size="sm" className="text-secondary">
                  <Link href="/services/sewage-cleanup">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary/50 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-slate-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-slate-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Commercial Damage</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Business restoration to minimize downtime and protect investments
                </p>
                <Button asChild variant="link" size="sm" className="text-secondary">
                  <Link href="/services/commercial-damage">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why the Pacific Northwest Trusts Pilot Plumbing & Drain</h2>
              <p className="text-lg text-muted-foreground mb-8">
                As a locally-operated plumbing and restoration company, we understand the unique needs of Pacific
                Northwest properties and provide personalized service you can count on.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Same-Day Service</h3>
                    <p className="text-muted-foreground">
                      We provide same-day service throughout our coverage area, 24/7/365.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Licensed and Insured</h3>
                    <p className="text-muted-foreground">
                      Our team is fully licensed and insured with strict safety protocols.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Insurance Assistance</h3>
                    <p className="text-muted-foreground">
                      We work directly with insurance companies to streamline your claims process.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Local Community Focus</h3>
                    <p className="text-muted-foreground">
                      We're committed to helping Pacific Northwest families and businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/d7992fc9-f078-4e81-8a7e-515cc40c10a3.png"
                alt="Pilot Plumbing & Drain team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Need Plumbing or Restoration Services in the Pacific Northwest?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Don't wait - every minute counts when dealing with property damage. Our team is ready to help 24/7.
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
