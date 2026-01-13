import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, Shield, Award, CheckCircle, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/hero-background.jpeg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f3a]/90 via-[#1a1f3a]/80 to-[#1a1f3a]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f3a]/50 via-transparent to-[#1a1f3a]/70" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
              Vancouver & Portland's Trusted Plumbing & Restoration Experts
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              24/7 emergency response for{" "}
              <Link href="/services/water-damage" className="underline hover:text-accent transition-colors">
                water damage
              </Link>
              ,{" "}
              <Link href="/services/mold-remediation" className="underline hover:text-accent transition-colors">
                mold remediation
              </Link>
              ,{" "}
              <Link href="/services/sewage-cleanup" className="underline hover:text-accent transition-colors">
                sewage cleanup
              </Link>
              , and{" "}
              <Link href="/services/commercial-damage" className="underline hover:text-accent transition-colors">
                commercial damage
              </Link>
              . Licensed plumbers serving{" "}
              <Link href="/service-areas/vancouver" className="underline hover:text-accent transition-colors">
                Vancouver
              </Link>
              ,{" "}
              <Link href="/service-areas/portland" className="underline hover:text-accent transition-colors">
                Portland
              </Link>
              , and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg">
                <Link href="/contact">
                  Get Emergency Help <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 text-lg">
                <a href="tel:+13607680141">
                  <Phone className="mr-2 h-5 w-5" />
                  (360) 768-0141
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - unchanged structure */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <Clock className="h-12 w-12 text-secondary mb-3" />
              <h3 className="font-semibold mb-1">24/7 Emergency</h3>
              <p className="text-sm text-muted-foreground">Always Available</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-secondary mb-3" />
              <h3 className="font-semibold mb-1">Licensed & Insured</h3>
              <p className="text-sm text-muted-foreground">Fully Certified</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Award className="h-12 w-12 text-secondary mb-3" />
              <h3 className="font-semibold mb-1">Certified Experts</h3>
              <p className="text-sm text-muted-foreground">Expert Technicians</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="h-12 w-12 text-secondary mb-3" />
              <h3 className="font-semibold mb-1">Fast Response</h3>
              <p className="text-sm text-muted-foreground">Same Day Service</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Our Restoration Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive plumbing and property restoration solutions for residential and commercial properties
              throughout{" "}
              <Link href="/service-areas/vancouver" className="text-secondary hover:underline">
                Vancouver
              </Link>
              ,{" "}
              <Link href="/service-areas/portland" className="text-secondary hover:underline">
                Portland
              </Link>
              , and{" "}
              <Link href="/service-areas" className="text-secondary hover:underline">
                surrounding areas
              </Link>
              .
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service cards - same structure, keeping images */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src="/images/design-mode/download%20%2822%29.jpg"
                    alt="Water damage restoration equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Water Damage Restoration</h3>
                  <p className="text-muted-foreground mb-4">
                    Fast water extraction, drying, and restoration to prevent further damage and mold growth.
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto text-secondary">
                    <Link href="/services/water-damage">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src="/images/design-mode/IMG_6173.jpeg"
                    alt="Mold remediation professional in protective gear"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Mold Remediation</h3>
                  <p className="text-muted-foreground mb-4">
                    Safe and effective mold removal with prevention strategies to protect your property and health.
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto text-secondary">
                    <Link href="/services/mold-remediation">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src="/images/download-20-284-293.jpg"
                    alt="Sewage cleanup service"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Sewage Cleanup</h3>
                  <p className="text-muted-foreground mb-4">
                    Professional sewage and biohazard cleanup with thorough sanitization and decontamination.
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto text-secondary">
                    <Link href="/services/sewage-cleanup">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src="/images/design-mode/IMG_9209.jpeg"
                    alt="Commercial damage restoration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Commercial Damage</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive restoration services for businesses to minimize downtime and protect your investment.
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto text-secondary">
                    <Link href="/services/commercial-damage">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src="/images/5398ea88-ec90-4abd-bbde-2e813dd52b97.png"
                    alt="Emergency restoration response"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Emergency Services</h3>
                  <p className="text-muted-foreground mb-4">
                    24/7 emergency response team ready to respond quickly to minimize damage.
                  </p>
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/contact">Contact Us Today</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-accent text-accent-foreground">
              <CardContent className="p-6 flex flex-col justify-center items-center text-center h-full">
                <h3 className="text-xl font-semibold mb-2">Need Help Now?</h3>
                <p className="mb-4">Our team is standing by 24/7 to assist you with any emergency.</p>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Why Choose Pilot Plumbing & Drain?</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Fast Response Time</h3>
                    <p className="text-muted-foreground">
                      We provide same-day service throughout Vancouver and Portland metro to start mitigation and
                      prevent further damage.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Licensed Expert Team</h3>
                    <p className="text-muted-foreground">
                      Our team is licensed and certified to provide the highest level of care with the latest
                      restoration techniques.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Insurance Assistance</h3>
                    <p className="text-muted-foreground">
                      We work directly with your insurance company to streamline the claims process and make it easier.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Satisfaction Guaranteed</h3>
                    <p className="text-muted-foreground">
                      Pilot Plumbing & Drain collaborates efficiently with our clients to achieve optimal outcomes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Local Vancouver & Portland Experts</h3>
                    <p className="text-muted-foreground">
                      Proudly serving{" "}
                      <Link href="/service-areas/vancouver" className="text-secondary hover:underline">
                        Vancouver
                      </Link>
                      ,{" "}
                      <Link href="/service-areas/portland" className="text-secondary hover:underline">
                        Portland
                      </Link>
                      , and surrounding communities.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="mt-8">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/images/design-mode/IMG_7762.JPG.jpeg"
                alt="Professional restoration technician"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Work gallery section - keeping same images */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Our Work in Action</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              See our professional restoration equipment and processes in action. We use industry-leading technology to
              restore your property quickly and effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg group bg-muted">
              <img
                src="/images/design-mode/IMG_6720.jpeg"
                alt="Basement water damage restoration with multiple dehumidifiers and air movers"
                className="w-full h-64 object-contain transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Basement Water Damage Restoration</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group bg-muted">
              <img
                src="/images/design-mode/IMG_6392.jpeg"
                alt="Thermal imaging camera detecting moisture in walls"
                className="w-full h-64 object-contain transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Advanced Moisture Detection</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group bg-muted">
              <img
                src="/images/design-mode/0f80120099c9ef89ceb6b49461deab80.jpeg"
                alt="Damaged pipes with mold growth in crawl space"
                className="w-full h-64 object-contain transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Pipe Damage Assessment</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group bg-muted">
              <img
                src="/images/design-mode/IMG_9209.jpeg"
                alt="Commercial water extraction"
                className="w-full h-64 object-contain transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Commercial Property Restoration</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group bg-muted">
              <img
                src="/images/design-mode/IMG_6719.jpeg"
                alt="Basement restoration with exposed wall studs and drying equipment"
                className="w-full h-64 object-contain transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Structural Drying & Restoration</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group bg-muted">
              <img
                src="/images/design-mode/5d160674014abf2e4571275b37f6f099.jpeg"
                alt="Mold remediation technician in full hazmat suit"
                className="w-full h-64 object-contain transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Professional Mold Remediation</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group bg-muted">
              <img
                src="/images/design-mode/IMG_6173.jpeg"
                alt="Containment barrier setup in garage for restoration work"
                className="w-full h-64 object-contain transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Professional Containment Systems</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group bg-muted">
              <img
                src="/images/design-mode/IMG_5296.jpeg"
                alt="Water damage restoration in hallway with containment barriers"
                className="w-full h-64 object-contain transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Emergency Water Damage Response</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group bg-muted">
              <img
                src="/images/design-mode/IMG_5431.jpeg"
                alt="Dehumidifier in crawl space with exposed insulation"
                className="w-full h-64 object-contain transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Crawl Space Drying</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group bg-muted">
              <img
                src="/images/design-mode/IMG_0006.jpeg"
                alt="Bathroom mold damage with exposed wall studs"
                className="w-full h-64 object-contain transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Mold Damage Remediation</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group bg-muted">
              <img
                src="/images/design-mode/IMG_7026.JPG.jpeg"
                alt="Professional restoration equipment including dehumidifier and air movers"
                className="w-full h-64 object-contain transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Industrial Drying Equipment</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group bg-muted">
              <img
                src="/images/design-mode/IMG_7785.JPG.jpeg"
                alt="Containment barrier with zipper access for restoration work"
                className="w-full h-64 object-contain transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Proper Containment Procedures</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/contact">Get Professional Help Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Our Service Area</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Proudly serving{" "}
              <Link href="/service-areas/vancouver" className="text-secondary hover:underline">
                Vancouver
              </Link>
              ,{" "}
              <Link href="/service-areas/portland" className="text-secondary hover:underline">
                Portland
              </Link>
              ,{" "}
              <Link href="/service-areas/camas" className="text-secondary hover:underline">
                Camas
              </Link>
              ,{" "}
              <Link href="/service-areas/washougal" className="text-secondary hover:underline">
                Washougal
              </Link>
              , and{" "}
              <Link href="/service-areas" className="text-secondary hover:underline">
                all surrounding communities
              </Link>{" "}
              with 24/7 emergency plumbing and restoration services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col">
              <Card className="border-2 h-full">
                <CardContent className="p-6 h-full flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold">Address</h3>
                      </div>
                      <div className="ml-13 space-y-1 text-muted-foreground">
                        <p className="font-medium text-foreground">12323 NE 99th St #123</p>
                        <p>Vancouver, WA 98682</p>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="h-5 w-5 text-secondary" />
                        </div>
                        <h3 className="text-lg font-bold">Contact Us</h3>
                      </div>
                      <div className="ml-13">
                        <a
                          href="tel:+13607680141"
                          className="text-xl font-bold text-secondary hover:text-secondary/80 transition-colors block mb-1"
                        >
                          (360) 768-0141
                        </a>
                        <a
                          href="tel:+13602182885"
                          className="text-sm text-muted-foreground hover:text-secondary transition-colors block mb-1"
                        >
                          Service/Scheduling: (360) 218-2885
                        </a>
                        <p className="text-sm text-muted-foreground">24/7 Emergency Service Available</p>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="h-5 w-5 text-secondary" />
                        </div>
                        <h3 className="text-lg font-bold">Service Hours</h3>
                      </div>
                      <div className="ml-13 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Emergency Response</span>
                          <span className="font-semibold text-secondary">24/7</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Same-Day Service</span>
                          <span className="font-semibold">Available</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative h-[450px] lg:h-full min-h-[450px] rounded-xl overflow-hidden shadow-xl border-2 border-border">
              <iframe
                src="https://maps.google.com/maps?q=12323+NE+99th+St+Vancouver+WA+98682&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pilot Plumbing & Drain - Vancouver, WA"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#1a1f3a] text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Need Emergency Plumbing or Restoration Services?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Don't wait - every minute counts when dealing with property damage. Our team is ready to help 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#5dceeb] hover:bg-[#5dceeb]/90 text-white text-lg">
              <a href="tel:+13607680141">
                <Phone className="mr-2 h-5 w-5" />
                Call (360) 768-0141
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-[#1a1f3a] hover:bg-white/90 text-lg border-white"
            >
              <Link href="/contact">Request Service Online</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
