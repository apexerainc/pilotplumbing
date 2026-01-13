import { NextResponse } from "next/server"

async function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    return null
  }
  const { Resend } = await import("resend")
  return new Resend(process.env.RESEND_API_KEY)
}

export async function POST(request: Request) {
  console.log("[v0] API route hit - processing contact form submission")

  try {
    const body = await request.json()
    console.log("[v0] Request body received:", body)

    const { name, email, phone, serviceType, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      console.log("[v0] Validation failed - missing required fields")
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400, headers: { "Content-Type": "application/json" } },
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log("[v0] Validation failed - invalid email format")
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400, headers: { "Content-Type": "application/json" } },
      )
    }

    const resend = await getResendClient()

    if (!resend) {
      console.error("[v0] RESEND_API_KEY not configured")
      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured. Please call us directly at (214) 225-0829.",
        },
        { status: 500, headers: { "Content-Type": "application/json" } },
      )
    }

    try {
      console.log("[v0] Attempting to send email via Resend...")
      const { data, error } = await resend.emails.send({
        from: "TWM Water Restoration <onboarding@resend.dev>",
        to: ["Office@twmrestore.com"],
        replyTo: email,
        subject: `New Service Request from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #0ea5e9; border-bottom: 3px solid #0c4a6e; padding-bottom: 10px; margin-bottom: 20px;">
              New Service Request
            </h2>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0ea5e9;">${email}</a></p>
              <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #0ea5e9;">${phone}</a></p>
              <p style="margin: 10px 0;"><strong>Service Type:</strong> ${serviceType || "Not specified"}</p>
            </div>
            
            <div style="background: #ffffff; border-left: 4px solid #0c4a6e; padding: 15px; margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0;"><strong>Message:</strong></p>
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            
            <p style="color: #6b7280; font-size: 12px; margin: 10px 0; text-align: center;">
              Sent from TWM Water Restoration contact form
            </p>
          </div>
        `,
      })

      if (error) {
        console.error("[v0] Resend error:", error)
        return NextResponse.json(
          { success: false, error: "Failed to send email. Please call us directly at (214) 225-0829." },
          { status: 500, headers: { "Content-Type": "application/json" } },
        )
      }

      console.log("[v0] Email sent successfully:", data)
      return NextResponse.json(
        {
          success: true,
          message: "Thank you for your request! We will contact you shortly.",
        },
        { status: 200, headers: { "Content-Type": "application/json" } },
      )
    } catch (emailError) {
      console.error("[v0] Error sending email:", emailError)
      return NextResponse.json(
        { success: false, error: "Failed to send email. Please call us directly at (214) 225-0829." },
        { status: 500, headers: { "Content-Type": "application/json" } },
      )
    }
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try calling us directly at (214) 225-0829." },
      { status: 500, headers: { "Content-Type": "application/json" } },
    )
  }
}
