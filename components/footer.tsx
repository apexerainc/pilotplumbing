import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="bg-white rounded-lg p-2 inline-block">
                <Image src="/logo.png" alt="Pilot Plumbing & Drain" width={180} height={57} className="h-10 w-auto" />
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Vancouver & Portland Metro's trusted plumbing and restoration experts. Available 24/7 for emergency
              services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="hover:text-secondary transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/water-damage" className="hover:text-secondary transition-colors">
                  Water Damage Restoration
                </Link>
              </li>
              <li>
                <Link href="/services/mold-remediation" className="hover:text-secondary transition-colors">
                  Mold Remediation
                </Link>
              </li>
              <li>
                <Link href="/services/sewage-cleanup" className="hover:text-secondary transition-colors">
                  Sewage Cleanup
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-damage" className="hover:text-secondary transition-colors">
                  Commercial Damage
                </Link>
              </li>
              <li>
                <Link href="/services/emergency" className="hover:text-secondary transition-colors">
                  Emergency Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Industry Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.iicrc.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  IICRC Standards
                </a>
              </li>
              <li>
                <a
                  href="https://www.epa.gov/mold"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  EPA Mold Guidelines
                </a>
              </li>
              <li>
                <a
                  href="https://www.cdc.gov/mold/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  CDC Mold Information
                </a>
              </li>
              <li>
                <a
                  href="https://www.fema.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  FEMA Resources
                </a>
              </li>
              <li>
                <a
                  href="https://www.redcross.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  Red Cross
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold mb-1">Address</div>
                <span className="text-sm text-primary-foreground/80">
                  12323 NE 99th St #123
                  <br />
                  Vancouver, WA 98682
                </span>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold mb-1">24/7 Emergency</div>
                <a href="tel:+13607680141" className="text-sm hover:text-secondary transition-colors block">
                  (360) 768-0141
                </a>
                <a href="tel:+13602182885" className="text-sm hover:text-secondary transition-colors block">
                  Service: (360) 218-2885
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold mb-1">Email Us</div>
                <a
                  href="mailto:pilotplumbinganddrainportland@gmail.com"
                  className="text-sm hover:text-secondary transition-colors break-all"
                >
                  pilotplumbinganddrainportland@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Pilot Plumbing & Drain. All rights reserved.</p>
          <p className="mt-2">
            Licensed, Bonded & Insured | Certified Technicians | Serving Vancouver WA & Portland Metro
          </p>
        </div>
      </div>
    </footer>
  )
}
