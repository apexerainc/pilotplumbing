import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, CheckCircle } from "lucide-react"

interface CityPageProps {
  cityName: string
  description: string
}

export function CityPageTemplate({ cityName, description }: CityPageProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Restoration Services in {cityName}, GA</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty">{description}</p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <a href="tel:+17707434366">
                <Phone className="mr-2 h-5 w-5" />
                Call (770) 743-4366
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Local Service */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Serving {cityName}, Georgia</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  True Resolve Restoration provides professional property restoration services throughout {cityName} and
                  the surrounding areas. Our team is available 24/7 to respond to your emergency restoration needs.
                </p>
                <p>
                  Whether you're dealing with water damage from a burst pipe, mold growth, fire damage, or storm damage
                  from severe weather, we have the expertise and equipment to restore your property quickly and
                  effectively.
                </p>
                <p>
                  We understand that property damage is stressful. That's why we work directly with your insurance
                  company and provide clear communication throughout the entire restoration process.
                </p>
              </div>
            </div>
            <div>
              <img
                src={`/${cityName.toLowerCase().replace(/\s+/g, "-")}-georgia-restoration-services.jpg`}
                alt={`${cityName} Georgia`}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our {cityName} Restoration Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Water Damage Restoration</h3>
                  <p className="text-muted-foreground mb-4">
                    Emergency water extraction, structural drying, and complete restoration for {cityName} properties
                    affected by floods, leaks, or burst pipes.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/water-damage">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Mold Remediation</h3>
                  <p className="text-muted-foreground mb-4">
                    Professional mold inspection, testing, and safe removal services to protect your {cityName} home and
                    family's health.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/mold-remediation">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Fire Damage Repair</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete fire damage restoration including smoke and soot removal, odor elimination, and structural
                    repairs for {cityName} properties.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/fire-damage">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Storm Damage Restoration</h3>
                  <p className="text-muted-foreground mb-4">
                    Emergency response to storm damage including roof repairs, water intrusion, and debris removal for{" "}
                    {cityName} homes and businesses.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/storm-damage">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-muted rounded-lg p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Why {cityName} Residents Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Fast Response</h3>
                <p className="text-muted-foreground">
                  We respond to {cityName} emergencies within 60 minutes, 24/7/365.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <CheckCircle className="h-12 w-12 text-accent mb-4" />
                <h3 className="font-semibold mb-2">IICRC Certified</h3>
                <p className="text-muted-foreground">
                  Our technicians are trained and certified in the latest restoration techniques.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <svg
                  className="h-12 w-12 text-accent mb-4"
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
                <h3 className="font-semibold mb-2">Insurance Assistance</h3>
                <p className="text-muted-foreground">
                  We work directly with your insurance company to simplify the claims process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Need Restoration Services in {cityName}?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Call us now for immediate assistance with your property restoration needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg">
              <a href="tel:+17707434366">
                <Phone className="mr-2 h-5 w-5" />
                Call (770) 743-4366
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
