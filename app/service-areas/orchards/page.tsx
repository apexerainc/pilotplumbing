import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, CheckCircle, ArrowRight, Shield, Droplets, Building2, Home } from 'lucide-react'
import { ServiceAreaMap } from "@/components/service-area-map"

export default function OrchardsPage() {
    const neighborhoods = [
        { name: "Padden Parkway", description: "Major corridor with diverse commercial and residential needs" },
        { name: "Sifton", description: "Established residential community" },
        { name: "Heritage Area", description: "Family-friendly neighborhoods near the high school" },
        { name: "Fourth Plain", description: "Bustling commercial and residential mix" },
        { name: "Five Corners", description: "Key transit and business hub" },
        { name: "Covington", description: "Quiet residential streets requiring expert care" },
    ]

    const nearbyAreas = [
        { name: "Vancouver", slug: "vancouver" },
        { name: "Battle Ground", slug: "battle-ground" },
        { name: "Camas", slug: "camas" },
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
                            <span className="text-sm font-medium">Serving Orchards, WA</span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
                            Reliable Plumbing & Restoration in Orchards
                        </h1>
                        <p className="text-xl text-white/90 mb-8 text-pretty">
                            Professional plumbing and water damage services for the Sifton, Five Corners, and Orchards communities.
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
                        <h2 className="text-3xl font-bold mb-6">Orchards' Plumbing Specialists</h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                            <p>
                                Pilot Plumbing & Drain delivers top-quality service to the Orchards area. We know the diverse mix of housing in neighborhoods like Sifton and near Heritage High School requires a versatile plumber.
                            </p>
                            <p>
                                From clogged drains on Fourth Plain to water line replacements in established subdivisions, our team has the local experience to get the job done right. We also provide immediate water damage restoration if handling storm flooding or pipe bursts.
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
                                    <h3 className="text-xl font-bold">Water Damage Cleanup</h3>
                                </div>
                                <p className="text-muted-foreground mb-4">Emergency extraction and drying services.</p>
                                <Button asChild variant="link" className="p-0 text-[#5dceeb]"><Link href="/services/water-damage">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:border-[#5dceeb]/50 transition-all">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-12 w-12 bg-orange-500/10 rounded-lg flex items-center justify-center"><Home className="h-6 w-6 text-orange-500" /></div>
                                    <h3 className="text-xl font-bold">Plumbing Service</h3>
                                </div>
                                <p className="text-muted-foreground mb-4">Reliable repairs for drains, pipes, and fixtures.</p>
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
