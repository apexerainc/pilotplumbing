import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Award, Clock, CheckCircle, Phone, ThumbsUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="relative text-primary-foreground py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/twm-fleet.png)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_transparent_0%,_transparent_50%,_rgba(0,0,0,0.3)_100%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <p className="text-accent font-semibold text-sm">Serving Vancouver WA & Portland Metro</p>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Your Trusted Plumbing & Restoration Partner
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 text-pretty leading-relaxed">
              A dedicated team committed to helping our community with professional plumbing and water damage
              restoration services with expertise and integrity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Pilot Plumbing & Drain</h2>
              <p className="text-xl text-muted-foreground">
                Dedicated to serving homes and businesses in Vancouver & Portland
              </p>
            </div>

            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Pilot Plumbing & Drain provides the Vancouver WA and Portland Metro area with expert plumbing and
                  water damage restoration services. Our team is dedicated to helping homes and businesses quickly and
                  efficiently, ensuring minimal disruption and complete customer satisfaction.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We understand that plumbing emergencies and water damage can be one of the most stressful experiences
                  for homeowners and business owners. That's why we're committed to providing fast, professional service
                  with transparent communication throughout the entire process—especially when working with your
                  insurance company.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 py-8 border-y">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Emergency Service</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-1">Same</div>
                  <div className="text-sm text-muted-foreground">Day Service</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-1">365</div>
                  <div className="text-sm text-muted-foreground">Days a Year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - same structure */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values shape every decision we make and every service we provide
            </p>
          </div>

          <div className="grid md:grid-cols-6 gap-6 max-w-6xl mx-auto">
            <Card className="md:col-span-3 md:row-span-2 bg-gradient-to-br from-secondary to-secondary/80 text-white border-0">
              <CardContent className="p-10 h-full flex flex-col justify-center">
                <Shield className="h-16 w-16 mb-6 opacity-90" />
                <h3 className="text-3xl font-bold mb-4">Integrity First</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  We operate with complete honesty and transparency. From accurate assessments to fair pricing, you can
                  trust us to do what's right—not what's profitable. Our reputation is built on keeping our promises.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-3">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Compassion</h3>
                <p className="text-muted-foreground">
                  We understand property damage is stressful. We treat every client with empathy and respect during
                  difficult times.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-3">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards of workmanship using industry-leading techniques and equipment.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 bg-accent/5 border-2 border-accent">
              <CardContent className="p-8 text-center">
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Always Ready</h3>
                <p className="text-muted-foreground text-sm">24/7 emergency response with same-day service</p>
              </CardContent>
            </Card>

            <Card className="md:col-span-4">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="h-14 w-14 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ThumbsUp className="h-7 w-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Customer Satisfaction</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Pilot Plumbing & Drain collaborates efficiently with our clients to achieve optimal outcomes. We
                      don't consider a job done until you're completely satisfied.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Expertise - same structure */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
                Certifications & Professional Expertise
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Our team maintains the highest industry certifications and continuously trains on the latest techniques.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Licensed and Insured Experts</h3>
                  <p className="text-muted-foreground">
                    All technicians are licensed and fully insured, providing the highest level of care to all clients.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Licensed & Bonded</h3>
                  <p className="text-muted-foreground">
                    Fully licensed, bonded, and insured to protect your property and provide peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Commercial and Residential</h3>
                  <p className="text-muted-foreground">
                    We provide expert plumbing and restoration services for both commercial and residential properties.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Immediate 24/7 Emergency Service</h3>
                  <p className="text-muted-foreground">
                    Our team is available 24/7, 365 days a year for emergency plumbing and water damage response.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Advanced Equipment</h3>
                  <p className="text-muted-foreground">
                    We invest in state-of-the-art moisture detection, air filtration, and drying equipment for optimal
                    results.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Insurance Assistance</h3>
                  <p className="text-muted-foreground">
                    We work with major insurance companies, ensuring smooth claims processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Serving Vancouver WA & Portland Metro</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              We proudly serve the entire Vancouver and Portland metropolitan area with fast, reliable plumbing and
              restoration services.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <Link href="/service-areas/vancouver" className="text-secondary hover:underline font-medium">
                  Vancouver
                </Link>
              </div>
              <div className="text-center">
                <Link href="/service-areas/portland" className="text-secondary hover:underline font-medium">
                  Portland
                </Link>
              </div>
              <div className="text-center">
                <Link href="/service-areas/camas" className="text-secondary hover:underline font-medium">
                  Camas
                </Link>
              </div>
              <div className="text-center">
                <Link href="/service-areas/washougal" className="text-secondary hover:underline font-medium">
                  Washougal
                </Link>
              </div>
              <div className="text-center">
                <Link href="/service-areas/battle-ground" className="text-secondary hover:underline font-medium">
                  Battle Ground
                </Link>
              </div>
              <div className="text-center">
                <Link href="/service-areas/ridgefield" className="text-secondary hover:underline font-medium">
                  Ridgefield
                </Link>
              </div>
            </div>
            <Button asChild size="lg">
              <Link href="/service-areas">View All Service Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Contact us today for a free consultation and let our experienced team help you with your plumbing and
            restoration needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg">
              <a href="tel:+13607680141">
                <Phone className="mr-2 h-5 w-5" />
                Call (360) 768-0141
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 text-lg">
              <Link href="/contact">Contact Us Online</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
