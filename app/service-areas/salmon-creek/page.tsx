import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, CheckCircle, ArrowRight, Shield, Droplets, Building2, Home } from 'lucide-react'

export default function SalmonCreekPage() {
    const nearbyAreas = [
        { name: "Vancouver", slug: "vancouver" },
        { name: "Felida", slug: "vancouver" }, // Felida is part of Vancouver service area
        { name: "Ridgefield", slug: "ridgefield" },
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
                            Plumbing & Restoration in Salmon Creek
                        </h1>
                        <p className="text-xl text-white/90 mb-8 text-pretty">
                            Your local Salmon Creek experts for plumbing repairs and emergency water restoration.
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
                        <h2 className="text-3xl font-bold mb-6">Salmon Creek Plumbing & Restoration</h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                            <p>
                                Pilot Plumbing & Drain serves the Salmon Creek area with fast, professional plumbing and restoration services.
                                Located centrally in our service area, we can respond to WSU Vancouver area, Legacy Hospital area, and surrounding neighborhoods rapidly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24 bg-muted">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
                        <Card className="border-2 hover:border-[#5dceeb]/50 transition-all">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center"><Droplets className="h-6 w-6 text-blue-500" /></div>
                                    <h3 className="text-xl font-bold">Water Restoration</h3>
                                </div>
                                <p className="text-muted-foreground mb-4">Fast drying and cleanup.</p>
                                <Button asChild variant="link" className="p-0 text-[#5dceeb]"><Link href="/services/water-damage">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:border-[#5dceeb]/50 transition-all">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-12 w-12 bg-orange-500/10 rounded-lg flex items-center justify-center"><Home className="h-6 w-6 text-orange-500" /></div>
                                    <h3 className="text-xl font-bold">Plumbing</h3>
                                </div>
                                <p className="text-muted-foreground mb-4">Expert repairs and installations.</p>
                                <Button asChild variant="link" className="p-0 text-[#5dceeb]"><Link href="/contact">Contact Us <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
