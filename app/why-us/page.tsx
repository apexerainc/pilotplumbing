import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Shield, Clock, Award, Users, ThumbsUp } from "lucide-react"

export default function WhyUsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-secondary via-secondary to-primary text-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                Licensed Experts
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                Licensed & Insured
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                24/7 Service
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">The Pilot Plumbing Difference</h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 text-pretty">
              When disaster strikes, you need more than just restoration—you need a partner you can trust. Here's why
              Vancouver and Portland residents choose us.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <a href="tel:+13607680141">
                <Phone className="mr-2 h-5 w-5" />
                Call (360) 768-0141
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="h-full bg-gradient-to-br from-accent to-accent/80 text-white border-0">
                  <CardContent className="p-10 lg:p-12">
                    <Clock className="h-16 w-16 mb-6 opacity-90" />
                    <h3 className="text-3xl lg:text-4xl font-bold mb-6">Fast Response Guarantee</h3>
                    <p className="text-lg text-white/90 leading-relaxed mb-6">
                      When you call Pilot Plumbing & Drain, you're not just getting a promise—you're getting a
                      guarantee. We provide same-day service throughout Vancouver and Portland metro, ready to start
                      mitigation and prevent further damage.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-3xl font-bold mb-1">24/7</div>
                        <div className="text-sm opacity-90">Always Available</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-3xl font-bold mb-1">Same Day</div>
                        <div className="text-sm opacity-90">Service Available</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <Card>
                  <CardContent className="p-8">
                    <Award className="h-12 w-12 text-secondary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Licensed Experts</h3>
                    <p className="text-muted-foreground">
                      Our team is licensed and certified to provide the highest level of care to all clients
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <Shield className="h-12 w-12 text-secondary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Fully Insured</h3>
                    <p className="text-muted-foreground">Comprehensive coverage protects your property and our team</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <Card>
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Local Pacific Northwest Experts</h3>
                  <p className="text-muted-foreground">
                    Serving Vancouver WA and Portland Metro with deep knowledge of local needs
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <svg className="h-12 w-12 text-secondary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold mb-3">Insurance Billing</h3>
                  <p className="text-muted-foreground">
                    We handle claims, documentation, and direct billing with your insurance
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <ThumbsUp className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Satisfaction Guaranteed</h3>
                  <p className="text-muted-foreground">
                    We collaborate efficiently with our clients to achieve optimal outcomes
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Proven Track Record</h2>
              <p className="text-xl text-muted-foreground">Numbers that demonstrate our commitment to excellence</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-accent mb-3">24/7</div>
                <div className="text-lg font-semibold mb-2">Always Available</div>
                <div className="text-sm text-muted-foreground">365 days a year</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-accent mb-3">5</div>
                <div className="text-lg font-semibold mb-2">Star Reviews</div>
                <div className="text-sm text-muted-foreground">Google verified</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-accent mb-3">100%</div>
                <div className="text-lg font-semibold mb-2">Satisfaction</div>
                <div className="text-sm text-muted-foreground">Guaranteed results</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-accent mb-3">Same</div>
                <div className="text-lg font-semibold mb-2">Day Service</div>
                <div className="text-sm text-muted-foreground">Fast arrival</div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-secondary/5 to-primary/5 border-2">
              <CardContent className="p-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-6">Advanced Equipment & Technology</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      We invest in the latest restoration equipment and technology to ensure efficient, effective
                      results. Our advanced tools allow us to detect hidden moisture, remove water quickly, and restore
                      your property faster than traditional methods.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Thermal imaging cameras for moisture detection",
                        "Industrial-grade water extractors and air movers",
                        "HEPA air filtration systems for mold remediation",
                        "Advanced deodorization equipment",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="h-6 w-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              className="h-3.5 w-3.5 text-accent"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <img
                      src="/images/design-mode/IMG_7026.JPG.jpeg"
                      alt="Advanced restoration equipment"
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Experience the Difference</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Join satisfied customers who trust Pilot Plumbing & Drain for their plumbing and property restoration needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg">
              <a href="tel:+13607680141">
                <Phone className="mr-2 h-5 w-5" />
                Call (360) 768-0141
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 text-lg">
              <Link href="/contact">Request Service Online</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
