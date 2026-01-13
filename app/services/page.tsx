import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, ArrowRight, Droplets, Wind, Building2, AlertTriangle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">Plumbing & Restoration Services</h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 text-pretty">
              Comprehensive solutions for every type of plumbing and property damage
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Droplets className="h-8 w-8 mx-auto mb-2 text-accent" />
              <div className="font-semibold">Water</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Wind className="h-8 w-8 mx-auto mb-2 text-accent" />
              <div className="font-semibold">Mold</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-accent" />
              <div className="font-semibold">Sewage</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <Building2 className="h-8 w-8 mx-auto mb-2 text-accent" />
              <div className="font-semibold">Commercial</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Highlight */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-accent to-accent/90">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur">
            <CardContent className="p-10 md:p-14">
              <div className="grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">24/7 Emergency Response</h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-pretty">
                    Disasters don't wait for business hours. Our emergency response team is available around the clock
                    to respond to your property emergency quickly.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="h-3.5 w-3.5 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold">Immediate Response</div>
                        <div className="text-sm text-muted-foreground">24/7/365 availability</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="h-3.5 w-3.5 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold">Same-Day Service</div>
                        <div className="text-sm text-muted-foreground">Fast on-site arrival</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="h-3.5 w-3.5 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold">Insurance Help</div>
                        <div className="text-sm text-muted-foreground">Direct billing available</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="h-3.5 w-3.5 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold">Expert Team</div>
                        <div className="text-sm text-muted-foreground">Licensed technicians</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary p-1 shadow-2xl">
                    <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-primary via-primary/95 to-secondary/90 p-8">
                      <div className="absolute -right-4 -top-4 h-32 w-32">
                        <div
                          className="absolute inset-0 animate-ping rounded-full bg-white/10"
                          style={{ animationDuration: "3s" }}
                        />
                        <div
                          className="absolute inset-4 animate-ping rounded-full bg-white/10"
                          style={{ animationDuration: "3s", animationDelay: "0.5s" }}
                        />
                      </div>

                      <div
                        className="absolute inset-0 opacity-5"
                        style={{
                          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                          backgroundSize: "24px 24px",
                        }}
                      />

                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-24 w-48 bg-white/20 blur-3xl rounded-full" />

                      <div className="relative">
                        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                            Available Now
                          </span>
                        </div>

                        <div className="mb-2 text-sm font-medium text-white/70">24/7 Emergency Hotline</div>
                        <div className="mb-6 text-4xl lg:text-5xl font-bold tracking-tight text-white">
                          (360) 768-0141
                        </div>

                        <Button
                          asChild
                          size="lg"
                          className="w-full bg-white text-primary hover:bg-white/90 text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                        >
                          <a href="tel:+13607680141" className="flex items-center justify-center gap-2">
                            <Phone className="h-5 w-5" />
                            Call Now - Free Estimate
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Grid - same structure, keeping images */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Water Damage - Image Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex h-14 w-14 bg-secondary/10 rounded-lg items-center justify-center mb-6">
                  <Droplets className="h-7 w-7 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Water Damage Restoration</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Fast response to flooding, burst pipes, and water emergencies. Our advanced extraction and drying
                  equipment prevents secondary damage and mold growth.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Emergency water extraction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Structural drying and dehumidification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Moisture detection and monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Content restoration and pack-out services</span>
                  </li>
                </ul>
                <Button asChild size="lg">
                  <Link href="/services/water-damage">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/10 rounded-3xl blur-2xl" />
                <img
                  src="/images/design-mode/download%20%2822%29.jpg"
                  alt="Water damage restoration equipment"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Mold - Image Left */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="inline-flex h-14 w-14 bg-secondary/10 rounded-lg items-center justify-center mb-6">
                  <Wind className="h-7 w-7 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Mold Remediation</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Safe and effective mold removal using EPA-approved methods. We identify the source, contain the
                  spread, and prevent future growth.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Comprehensive mold inspection and testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Containment and air filtration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Safe mold removal and disposal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Prevention strategies and moisture control</span>
                  </li>
                </ul>
                <Button asChild size="lg">
                  <Link href="/services/mold-remediation">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative lg:order-1">
                <div className="absolute -inset-4 bg-secondary/10 rounded-3xl blur-2xl" />
                <img
                  src="/images/design-mode/IMG_6173.jpeg"
                  alt="Mold remediation professional"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Sewage Cleanup - Image Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex h-14 w-14 bg-secondary/10 rounded-lg items-center justify-center mb-6">
                  <AlertTriangle className="h-7 w-7 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Sewage Cleanup</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Professional sewage and biohazard cleanup with thorough sanitization. We safely remove contaminated
                  materials and restore your property to a safe condition.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Emergency sewage extraction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Biohazard and contamination removal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Sanitization and decontamination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Odor elimination and air purification</span>
                  </li>
                </ul>
                <Button asChild size="lg">
                  <Link href="/services/sewage-cleanup">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/10 rounded-3xl blur-2xl" />
                <img
                  src="/images/download-20-284-293.jpg"
                  alt="Sewage cleanup service"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Commercial Damage - Image Left */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="inline-flex h-14 w-14 bg-secondary/10 rounded-lg items-center justify-center mb-6">
                  <Building2 className="h-7 w-7 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Commercial Damage Restoration</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Comprehensive restoration services for businesses to minimize downtime. We understand the urgency of
                  getting your business back to normal operations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Large-scale water extraction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Commercial property drying</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Business interruption minimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Insurance documentation assistance</span>
                  </li>
                </ul>
                <Button asChild size="lg">
                  <Link href="/services/commercial-damage">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative lg:order-1">
                <div className="absolute -inset-4 bg-secondary/10 rounded-3xl blur-2xl" />
                <img
                  src="/images/design-mode/IMG_9209.jpeg"
                  alt="Commercial damage restoration"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven, systematic approach to complete restoration
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: "1", title: "Emergency Contact", desc: "Call us 24/7 for immediate dispatch" },
                { num: "2", title: "Inspection", desc: "Thorough assessment and restoration plan" },
                { num: "3", title: "Restoration", desc: "Professional mitigation and repair work" },
                { num: "4", title: "Completion", desc: "Final walkthrough and satisfaction guarantee" },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="text-center">
                    <div className="inline-flex h-16 w-16 bg-accent text-white rounded-full items-center justify-center mb-4 text-2xl font-bold shadow-lg">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-accent/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Contact us today for a free consultation. Our team is available 24/7 for emergencies.
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
