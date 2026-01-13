"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, AlertCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitStatus({
      type: "success",
      message: "Thank you! Your request has been submitted successfully. We'll contact you shortly.",
    })

    const form = event.currentTarget
    form.reset()
    setIsSubmitting(false)
  }

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Contact Us</h1>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              Get in touch with Pilot Plumbing & Drain for emergency services or to request a free consultation. We're
              here to help 24/7.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
            <div className="space-y-6">
              <Card className="border-2 border-accent bg-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">24/7 Emergency Response</h3>
                      <p className="text-muted-foreground mb-4">We respond quickly for emergency situations</p>
                      <Button asChild size="lg" className="w-full">
                        <a href="tel:+13607680141">(360) 768-0141</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Phone</p>
                        <a
                          href="tel:+13607680141"
                          className="text-muted-foreground hover:text-primary transition-colors block"
                        >
                          (360) 768-0141
                        </a>
                        <a
                          href="tel:+13602182885"
                          className="text-muted-foreground hover:text-primary transition-colors block text-sm"
                        >
                          Service/Scheduling: (360) 218-2885
                        </a>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Email</p>
                          <a
                            href="mailto:pilotplumbinganddrainportland@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors break-all"
                          >
                            pilotplumbinganddrainportland@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Address</p>
                          <p className="text-muted-foreground">
                            12323 NE 99th St #123
                            <br />
                            Vancouver, WA 98682
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Hours</p>
                          <p className="text-muted-foreground">
                            24/7 Emergency Service
                            <br />
                            365 Days a Year
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form - same structure */}
            <Card className="border-2 border-primary/10 bg-gradient-to-br from-background to-secondary/5 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-3 text-balance">Request Service</h2>
                  <p className="text-muted-foreground text-pretty">
                    Fill out the form and we'll get back to you shortly
                  </p>
                </div>

                {submitStatus && (
                  <div
                    className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-900 border-2 border-green-200"
                        : "bg-red-50 text-red-900 border-2 border-red-200"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    )}
                    <p className="text-sm font-medium">{submitStatus.message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-base font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      required
                      disabled={isSubmitting}
                      className="h-12 mt-2 border-2 focus:border-primary"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="email" className="text-base font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        disabled={isSubmitting}
                        className="h-12 mt-2 border-2 focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base font-medium">
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(360) 555-1234"
                        required
                        disabled={isSubmitting}
                        className="h-12 mt-2 border-2 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="serviceType" className="text-base font-medium">
                      Service Type
                    </Label>
                    <Select name="serviceType" disabled={isSubmitting}>
                      <SelectTrigger id="serviceType" className="h-12 mt-2 border-2 focus:border-primary">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="water-damage">Water Damage Restoration</SelectItem>
                        <SelectItem value="mold-remediation">Mold Remediation</SelectItem>
                        <SelectItem value="sewage-cleanup">Sewage Cleanup</SelectItem>
                        <SelectItem value="commercial-damage">Commercial Damage</SelectItem>
                        <SelectItem value="emergency">Emergency Services</SelectItem>
                        <SelectItem value="plumbing">Plumbing Repair</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-base font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your plumbing or restoration needs..."
                      rows={4}
                      required
                      disabled={isSubmitting}
                      className="mt-2 border-2 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 text-base font-semibold"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center pt-2">
                    By submitting this form, you agree to our{" "}
                    <Link href="/privacy" className="underline hover:text-primary font-medium">
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Service Area</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We serve the Vancouver WA and Portland Metro Area with fast, professional plumbing and restoration
              services.
            </p>
          </div>
          <div className="relative h-[450px] rounded-xl overflow-hidden shadow-xl border-2 border-border max-w-5xl mx-auto">
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
      </section>
    </div>
  )
}
