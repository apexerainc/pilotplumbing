import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, CheckCircle, Shield } from "lucide-react"
import Link from "next/link"

export default function EmergencyServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent via-accent/95 to-accent/90 text-accent-foreground py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5398ea88-ec90-4abd-bbde-2e813dd52b97-XQFcgs82u4LzGfavsFcoAUvAVbrBZM.png"
            alt="Emergency restoration services"
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/85" />
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)] animate-pulse" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 animate-pulse">
              <div className="h-3 w-3 bg-white rounded-full animate-ping" />
              <span className="text-sm font-bold text-white uppercase tracking-wide">Live 24/7 Response Team</span>
            </div>
            <Clock className="h-24 w-24 mx-auto mb-6 text-white drop-shadow-lg" />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance drop-shadow-lg">
              24/7 Emergency Restoration
            </h1>
            <p className="text-2xl text-white/95 mb-8 text-pretty font-medium">
              60-Minute Response Time • Available Now • Serving{" "}
              <Link href="/service-areas/dallas" className="underline hover:text-white text-white/90">
                Dallas
              </Link>
              ,{" "}
              <Link href="/service-areas/fort-worth" className="underline hover:text-white text-white/90">
                Fort Worth
              </Link>{" "}
              & DFW Metro Area
            </p>
            <Button
              asChild
              size="lg"
              className="text-xl py-6 px-8 shadow-2xl hover:scale-105 transition-transform bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
            >
              <a href="tel:+12142250829">
                <Phone className="mr-3 h-6 w-6" />
                (214) 225-0829
              </a>
            </Button>
            <p className="mt-4 text-sm text-white/80">Speak with a restoration specialist now</p>
          </div>
        </div>
      </section>

      {/* Why Call Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Why Call Us for Emergency Services?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              When disaster strikes, every minute counts. Here's why Dallas-Fort Worth residents trust us for emergency
              restoration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">60-Minute Response</h3>
                <p className="text-muted-foreground">
                  We arrive on-site within 60 minutes of your call, 24 hours a day, 7 days a week.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">IICRC Certified</h3>
                <p className="text-muted-foreground">
                  Our technicians are trained and certified in emergency restoration procedures.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
                <p className="text-muted-foreground">
                  Licensed, bonded, and insured for your protection and peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Direct Billing</h3>
                <p className="text-muted-foreground">
                  We work directly with your insurance company to simplify the claims process.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Services List - Updated for TWM services */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Emergency Services We Provide</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Emergency Water Extraction</h3>
                    <p className="text-muted-foreground">
                      Rapid removal of standing water from floods, burst pipes, or appliance failures. For flood safety
                      information, visit{" "}
                      <a
                        href="https://www.ready.gov/floods"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-accent"
                      >
                        Ready.gov
                      </a>
                      . Learn more about our{" "}
                      <Link href="/services/water-damage" className="underline hover:text-accent">
                        water damage restoration services
                      </Link>
                      .
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Sewage Backup Cleanup</h3>
                    <p className="text-muted-foreground">
                      Safe removal and sanitization of contaminated water from sewage backups. Learn more about our{" "}
                      <Link href="/services/sewage-cleanup" className="underline hover:text-accent">
                        sewage cleanup services
                      </Link>
                      .
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Mold Emergency Assessment</h3>
                    <p className="text-muted-foreground">
                      Rapid mold inspection and containment to prevent spread and health risks. Learn about our{" "}
                      <Link href="/services/mold-remediation" className="underline hover:text-accent">
                        mold remediation services
                      </Link>
                      .
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Commercial Emergency Response</h3>
                    <p className="text-muted-foreground">
                      Minimize business downtime with rapid response for commercial properties. See our{" "}
                      <Link href="/services/commercial-damage" className="underline hover:text-accent">
                        commercial damage restoration services
                      </Link>
                      .
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Emergency Board-Up & Tarping</h3>
                    <p className="text-muted-foreground">
                      Secure your property after damage to prevent further water intrusion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d7992fc9-f078-4e81-8a7e-515cc40c10a3-rCvpnwdaGJdgLSKcPUFgd0LlkAsPbz.png"
                alt="Emergency restoration team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">What to Expect When You Call</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our streamlined emergency response process ensures you get help fast when you need it most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-accent text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Immediate Answer</h3>
                <p className="text-muted-foreground">
                  Speak with a live restoration specialist who will gather information about your emergency and dispatch
                  our team immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-accent text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Rapid Response</h3>
                <p className="text-muted-foreground">
                  Our certified technicians arrive within 60 minutes with the equipment needed to begin emergency
                  mitigation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-accent text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Immediate Action</h3>
                <p className="text-muted-foreground">
                  We assess the damage, explain our action plan, and begin work immediately to prevent further damage to
                  your property.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-accent to-accent/90 text-accent-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)] animate-pulse" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <div className="h-3 w-3 bg-white rounded-full animate-ping" />
            <span className="text-sm font-bold text-white uppercase tracking-wide">Emergency Line Open Now</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Don't Wait - Every Minute Counts</h2>
          <p className="text-2xl mb-8 text-accent-foreground/95 max-w-2xl mx-auto text-pretty font-medium">
            Our emergency team is standing by 24/7 to respond to your property disaster in{" "}
            <Link href="/service-areas/dallas" className="underline hover:text-white text-white">
              Dallas
            </Link>
            ,{" "}
            <Link href="/service-areas/fort-worth" className="underline hover:text-white text-white">
              Fort Worth
            </Link>
            ,{" "}
            <Link href="/service-areas/plano" className="underline hover:text-white text-white">
              Plano
            </Link>
            , and all surrounding areas
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="text-2xl py-7 px-10 shadow-2xl hover:scale-105 transition-transform bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
            >
              <a href="tel:+12142250829">
                <Phone className="mr-3 h-7 w-7" />
                (214) 225-0829
              </a>
            </Button>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">Average Response Time:</p>
              <p className="text-3xl font-bold text-white">60 Minutes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
