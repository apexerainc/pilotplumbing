"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Only apply hide/show behavior on mobile (screen width < 1024px)
      if (window.innerWidth < 1024) {
        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          // Scrolling up or at the top - show header
          setIsVisible(true)
        } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
          // Scrolling down and past threshold - hide header
          setIsVisible(false)
          // Close mobile menu when hiding
          setMobileMenuOpen(false)
        }
      } else {
        // Always show on desktop
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <header
      className={`sticky z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ${isVisible ? "top-0" : "-top-24 lg:top-0"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Pilot Plumbing & Drain"
              width={200}
              height={64}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-sm font-medium hover:text-primary transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-card border rounded-lg shadow-lg">
                <div className="p-2">
                  <Link href="/services/water-damage" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">
                    Water Damage Restoration
                  </Link>
                  <Link href="/services/mold-remediation" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">
                    Mold Remediation
                  </Link>
                  <Link href="/services/sewage-cleanup" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">
                    Sewage Cleanup
                  </Link>
                  <Link
                    href="/services/commercial-damage"
                    className="block px-4 py-2 text-sm hover:bg-muted rounded-md"
                  >
                    Commercial Damage
                  </Link>
                  <Link href="/services/emergency" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">
                    Emergency Services
                  </Link>
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm font-medium text-primary hover:bg-muted rounded-md"
                  >
                    All Services →
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-sm font-medium hover:text-primary transition-colors">
                Service Areas <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-card border rounded-lg shadow-lg">
                <div className="p-2 grid grid-cols-2 gap-1">
                  <Link href="/service-areas/vancouver" className="block px-3 py-2 text-sm hover:bg-muted rounded-md">
                    Vancouver
                  </Link>
                  <Link href="/service-areas/portland" className="block px-3 py-2 text-sm hover:bg-muted rounded-md">
                    Portland
                  </Link>
                  <Link href="/service-areas/camas" className="block px-3 py-2 text-sm hover:bg-muted rounded-md">
                    Camas
                  </Link>
                  <Link href="/service-areas/washougal" className="block px-3 py-2 text-sm hover:bg-muted rounded-md">
                    Washougal
                  </Link>
                  <Link
                    href="/service-areas/battle-ground"
                    className="block px-3 py-2 text-sm hover:bg-muted rounded-md"
                  >
                    Battle Ground
                  </Link>
                  <Link href="/service-areas/ridgefield" className="block px-3 py-2 text-sm hover:bg-muted rounded-md">
                    Ridgefield
                  </Link>
                  <Link href="/service-areas/salmon-creek" className="block px-3 py-2 text-sm hover:bg-muted rounded-md">
                    Salmon Creek
                  </Link>
                  <Link href="/service-areas/orchards" className="block px-3 py-2 text-sm hover:bg-muted rounded-md">
                    Orchards
                  </Link>
                  <Link
                    href="/service-areas"
                    className="col-span-2 block px-3 py-2 text-sm font-medium text-primary hover:bg-muted rounded-md"
                  >
                    View All Areas →
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+13607680141" className="flex items-center text-sm font-medium text-primary">
              <Phone className="h-4 w-4 mr-2" />
              (360) 768-0141
            </a>
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link href="/contact">Get Help Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium">
                About
              </Link>

              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-sm font-medium"
                >
                  Services{" "}
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link href="/services/water-damage" className="block text-sm">
                      Water Damage Restoration
                    </Link>
                    <Link href="/services/mold-remediation" className="block text-sm">
                      Mold Remediation
                    </Link>
                    <Link href="/services/sewage-cleanup" className="block text-sm">
                      Sewage Cleanup
                    </Link>
                    <Link href="/services/commercial-damage" className="block text-sm">
                      Commercial Damage
                    </Link>
                    <Link href="/services/emergency" className="block text-sm">
                      Emergency Services
                    </Link>
                    <Link href="/services" className="block text-sm">
                      All Services →
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setAreasOpen(!areasOpen)}
                  className="flex items-center justify-between w-full text-sm font-medium"
                >
                  Service Areas{" "}
                  <ChevronDown className={`h-4 w-4 transition-transform ${areasOpen ? "rotate-180" : ""}`} />
                </button>
                {areasOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link href="/service-areas" className="block text-sm">
                      All Areas
                    </Link>
                    <Link href="/service-areas/vancouver" className="block text-sm">
                      Vancouver
                    </Link>
                    <Link href="/service-areas/portland" className="block text-sm">
                      Portland
                    </Link>
                    <Link href="/service-areas/camas" className="block text-sm">
                      Camas
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/contact" className="text-sm font-medium">
                Contact
              </Link>

              <div className="pt-4 space-y-3">
                <a href="tel:+13607680141" className="flex items-center text-sm font-medium text-primary">
                  <Phone className="h-4 w-4 mr-2" />
                  (360) 768-0141
                </a>
                <Button asChild className="w-full bg-accent hover:bg-accent/90">
                  <Link href="/contact">Get Help Now</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
