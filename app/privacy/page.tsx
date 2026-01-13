import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Privacy Policy</h1>
            <p className="text-xl text-primary-foreground/90 text-pretty">Last Updated: January 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 lg:p-12 prose prose-lg max-w-none">
                <h2>Introduction</h2>
                <p>
                  Pilot Plumbing & Drain ("we," "our," or "us") is committed to protecting your privacy. This Privacy
                  Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                  website or use our services.
                </p>

                <h2>Information We Collect</h2>
                <h3>Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide to us when you:</p>
                <ul>
                  <li>Request plumbing or restoration services</li>
                  <li>Fill out a contact form</li>
                  <li>Call or email us</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Interact with our website</li>
                </ul>
                <p>This information may include:</p>
                <ul>
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Property address</li>
                  <li>Details about your plumbing or restoration needs</li>
                </ul>

                <h3>Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect certain information, including:</p>
                <ul>
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website</li>
                  <li>Device information</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, operate, and maintain our plumbing and restoration services</li>
                  <li>Respond to your inquiries and service requests</li>
                  <li>Send you updates, marketing communications, and promotional materials</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and enhance security</li>
                </ul>

                <h2>Disclosure of Your Information</h2>
                <p>We may share your information in the following situations:</p>
                <ul>
                  <li>
                    <strong>Service Providers:</strong> We may share your information with third-party service providers
                    who perform services on our behalf, such as payment processing, data analysis, and marketing
                    assistance.
                  </li>
                  <li>
                    <strong>Insurance Companies:</strong> When you request restoration services, we may share relevant
                    information with your insurance company to facilitate claims processing.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or
                    in response to valid requests by public authorities.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your
                    information may be transferred to the acquiring entity.
                  </li>
                </ul>

                <h2>Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. However, no method of
                  transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute
                  security.
                </p>

                <h2>Your Privacy Rights</h2>
                <p>
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul>
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Objection to processing of your information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Withdrawal of consent</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided below. We will respond to
                  your request within a reasonable timeframe.
                </p>

                <h2>Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and store certain
                  information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                  sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>

                <h2>Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy
                  practices or content of these external sites. We encourage you to review the privacy policies of any
                  third-party sites you visit.
                </p>

                <h2>Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                  information from children. If you believe we have collected information from a child, please contact
                  us immediately.
                </p>

                <h2>Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this
                  Privacy Policy periodically for any changes.
                </p>

                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul>
                  <li>
                    <strong>Phone:</strong> <a href="tel:+13607680141">(360) 768-0141</a>
                  </li>
                  <li>
                    <strong>Service/Scheduling:</strong> <a href="tel:+13602182885">(360) 218-2885</a>
                  </li>
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:pilotplumbinganddrainportland@gmail.com">pilotplumbinganddrainportland@gmail.com</a>
                  </li>
                  <li>
                    <strong>Address:</strong> 12323 NE 99th St #123, Vancouver, WA 98682
                  </li>
                </ul>

                <h2>Consent</h2>
                <p>By using our website and services, you consent to our Privacy Policy and agree to its terms.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
