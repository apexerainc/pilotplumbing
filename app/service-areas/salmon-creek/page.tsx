import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, CheckCircle, ArrowRight, Shield, Droplets, Building2, Home } from 'lucide-react'
import { ServiceAreaMap } from "@/components/service-area-map"

export default function SalmonCreekPage() {
    const neighborhoods = [
        { name: "WSU Vancouver Area", description: "Residential communities near the university campus" },
        { name: "Felida", description: "Upscale neighborhoods with easy access to Salmon Creek" },
        { name: "Mt. Vista", description: "Spacious properties with diverse plumbing needs" },
        { name: "Fairgrounds", description: "Busy mixed-use area requiring rapid response" },
        { name: "Legacy Hospital District", description: "Medical and commercial service zone" },
        { name: "Salmon Creek Avenue", description: "Historic heart of the community" },
    ]

    const nearbyAreas = [
        { name: "Vancouver", slug: "vancouver" },
        { name: "Ridgefield", slug: "ridgefield" },
        { name: "Orchards", slug: "orchards" },
    ]

    return (
        <div className="flex flex-col">
            <section className="relative bg-gradient-to-br from-[#1a1f3a] to-[#2a3055] text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f3a]/95 via-[#1a1f3a]/85 to-[#2a3055]/90" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-[#5dceeb]/20 backdrop-blur-sm border border-[#5dceeb]/30 px-4 py-2 rounded-full mb-6">
                            <MapPin className="h-4 w-4 text-[#5dceeb]" />
                            <span className="text-sm font-medium">Serving Salmon Creek, WA</span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
                            Expert Plumbing & Restoration in Salmon Creek
                        </h1>
                        <p className="text-xl text-white/90 mb-8 text-pretty">
                            From WSU Vancouver to Felida, our local technicians provide 24/7 emergency service for all your plumbing and water damage needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-[#5dceeb] hover:bg-[#5dceeb]/90 text-white border-0">
                                <a href="tel:+13607680141"><Phone className="mr-2 h-5 w-5" />Call (360) 768-0141</a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                                <Link href="/contact">Request Free Estimate</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Salmon Creek's Trusted Restoration Experts</h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                            <p>
                                Salmon Creek is a hub of activity in North Vancouver, and Pilot Plumbing & Drain is proud to keep its homes and businesses running smoothly.
                                Whether you're dealing with a burst pipe near Legacy Salmon Creek Medical Center or a slow drain in a Mt. Vista home, we are minutes away.
                            </p>
                            <p>
                                We understand the mix of older homes and new developments in the area. Our team is equipped to handle everything from modern fixture installations
                                to complex sewer line repairs in established neighborhoods. We also provide rapid water damage restoration to protect your property from the PNW rain.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24 bg-muted">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Neighborhoods We Serve</h2>
                    <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                        {neighborhoods.map((n) => (
                            <div key={n.name} className="bg-background rounded-lg p-4 border hover:border-[#5dceeb]/50 hover:shadow-md transition-all">
                                <h3 className="font-semibold text-foreground mb-1">{n.name}</h3>
                                <p className="text-sm text-muted-foreground">{n.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
                        <Card className="border-2 hover:border-[#5dceeb]/50 transition-all">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center"><Droplets className="h-6 w-6 text-blue-500" /></div>
                                    <h3 className="text-xl font-bold">Water Damage Restoration</h3>
                                </div>
                                <p className="text-muted-foreground mb-4">Fast extraction and structural drying for flooded basements and leaks.</p>
                                <Button asChild variant="link" className="p-0 text-[#5dceeb]"><Link href="/services/water-damage">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:border-[#5dceeb]/50 transition-all">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-12 w-12 bg-orange-500/10 rounded-lg flex items-center justify-center"><Home className="h-6 w-6 text-orange-500" /></div>
                                    <h3 className="text-xl font-bold">Plumbing Repairs</h3>
                                </div>
                                <p className="text-muted-foreground mb-4">Professional leak detection, pipe repair, and water heater services.</p>
                                <Button asChild variant="link" className="p-0 text-[#5dceeb]"><Link href="/contact">Contact Us <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Service Area</h2>
                    <div className="max-w-4xl mx-auto">
                        <ServiceAreaMap />
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24 bg-muted">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Nearby Areas</h2>
                    <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mt-8">
                        {nearbyAreas.map((area) => (
                            <Link key={area.slug} href={`/service-areas/${area.slug}`} className="bg-background hover:bg-[#5dceeb]/10 px-6 py-3 rounded-full font-medium transition-colors border hover:border-[#5dceeb]/50">{area.name}</Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
