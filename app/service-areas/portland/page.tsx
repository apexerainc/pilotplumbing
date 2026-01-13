import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield, Droplets, Building2, Home } from 'lucide-react'

export default function PortlandPage() {
    const neighborhoods = [
        { name: "Downtown Portland", description: "City center and business district" },
        { name: "Pearl District", description: "Upscale urban living in former warehouses" },
        { name: "North Portland", description: "Diverse neighborhoods including St. Johns" },
        { name: "Nob Hill", description: "Trendy Northwest district with historic homes" },
        { name: "Hawthorne", description: "Eclectic southeast neighborhood" },
        { name: "Eastmoreland", description: "Tree-lined streets and classic architecture" },
        { name: "Sellwood-Moreland", description: "Family-friendly community by the river" },
        { name: "Alberta Arts District", description: "Vibrant arts and culture hub" },
        { name: "Laurelhurst", description: "Historic homes and beautiful park" },
        { name: "Multnomah Village", description: "Quaint village atmosphere in SW Portland" },
        { name: "Hollywood", description: "Historic district with theater and commerce" },
        { name: "Goose Hollow", description: "Historic neighborhood near downtown" },
    ]

    const nearbyAreas = [
        { name: "Vancouver", slug: "vancouver" },
        { name: "Beaverton", slug: "beaverton" },
        { name: "Gresham", slug: "gresham" },
        { name: "Lake Oswego", slug: "lake-oswego" },
        { name: "Tigard", slug: "tigard" },
        { name: "Milwaukie", slug: "milwaukie" },
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
                            <span className="text-sm font-medium">Serving All of Portland, OR</span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
                            Plumbing & Water Restoration in Portland, OR
                        </h1>
                        <p className="text-xl text-white/90 mb-8 text-pretty">
                            Portland's trusted 24/7 emergency plumbing and restoration experts. From the Pearl District to Sellwood, we provide expert
                            solutions for water damage, mold, and plumbing emergencies throughout the metro area.
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

            {/* About Portland Service */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Expert Plumbing & Restoration in Portland, Oregon</h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                            <p>
                                Pilot Plumbing & Drain brings top-tier plumbing and water restoration services to the Rose City.
                                Our team understands the unique characteristics of Portland homes, from extensive Craftsman bungalows
                                with older plumbing to modern condos in the Pearl. We navigate the city's bridges and quadrants efficiently
                                to reach you fast.
                            </p>
                            <p>
                                We proudly serve all Portland neighborhoods including the vibrant <strong>Hawthorne</strong> and <strong>Alberta Arts</strong> districts,
                                the historic <strong>Nob Hill</strong>, and residential favorites like <strong>Eastmoreland</strong> and <strong>Laurelhurst</strong>.
                                Whether you're dealing with a flooded basement in Southeast or a pipe leak in a Southwest hillside home,
                                we are ready to help.
                            </p>
                            <p>
                                Portland's rainy seasons can put stress on sumps pumps and drainage systems. Our technicians are experts in
                                local codes and common issues faced by Portland property owners, ensuring a long-lasting fix for your peace of mind.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Neighborhoods We Serve */}
            <section className="py-16 lg:py-24 bg-muted">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Portland Neighborhoods We Serve</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Our experts serve every quadrant of Portland with fast, professional service
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
                    <h2 className="text-3xl font-bold mb-4 text-center">Our Portland Services</h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Comprehensive plumbing and restoration solutions for Portland homes and businesses
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
                                    Emergency water extraction, structural drying, and complete restoration.
                                    We handle basement flooding, supply line failures, and weather-related water intrusion.
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
                                    Professional mold inspection and removal. In Portland's damp climate, mold is a common issue.
                                    We ensure it's removed safely and effectively from your property.
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
                                    Complete residential and commercial plumbing services. Leak detection, drain cleaning,
                                    fixture installation, and emergency repairs across Bridge City.
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
                                    Restoration and plumbing for Portland businesses. From restaurants in the Pearl
                                    to offices in Downtown, we keep your business running smoothly.
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
                            <h2 className="text-3xl font-bold mb-6">Why Portland Chooses Pilot Plumbing</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-[#5dceeb] flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Metro Area Experts</h3>
                                        <p className="text-muted-foreground">
                                            We know Portland's unique infrastructure and neighborhood needs.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-[#5dceeb] flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold mb-1">24/7 Emergency Service</h3>
                                        <p className="text-muted-foreground">
                                            Ready to respond to any plumbing or water emergency, day or night.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-[#5dceeb] flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Licensed & Certified</h3>
                                        <p className="text-muted-foreground">
                                            Fully licensed in Oregon (and Washington) with IICRC certified technicians.
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
                                <div className="text-4xl font-bold text-[#5dceeb] mb-2">PDX</div>
                                <div className="text-sm text-muted-foreground">Locals</div>
                            </div>
                            <div className="bg-background rounded-xl p-6 text-center border">
                                <div className="text-4xl font-bold text-[#5dceeb] mb-2">Fast</div>
                                <div className="text-sm text-muted-foreground">Response</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Service Areas */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">We Also Serve Areas Near Portland</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Extending expert service throughout the Metro region
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
                        Need Emergency Help in Portland?
                    </h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto text-pretty">
                        Don't wait—every minute counts. Call now for immediate assistance from our Portland team.
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
