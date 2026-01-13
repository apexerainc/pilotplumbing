"use server"

async function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    return null
  }
  const { Resend } = await import("resend")
  return new Resend(process.env.RESEND_API_KEY)
}

export async function submitContactForm(formData: FormData) {
  console.log("[v0] Server: submitContactForm called")

  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const serviceType = formData.get("serviceType") as string
    const message = formData.get("message") as string

    console.log("[v0] Server: Form data received:", { name, email, phone, serviceType })

    // Validate required fields
    if (!name || !email || !phone || !message) {
      console.log("[v0] Server: Validation failed - missing required fields")
      return {
        success: false,
        error: "Please fill in all required fields",
      }
    }

    const resend = await getResendClient()

    if (!resend) {
      console.error("[v0] Server: RESEND_API_KEY not configured")
      return {
        success: false,
        error: "Email service not configured. Please call (214) 225-0829 or email Office@twmrestore.com",
      }
    }

    console.log("[v0] Server: Attempting to send email via Resend...")

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "TWM Water Restoration <onboarding@resend.dev>",
      to: "Office@twmrestore.com",
      replyTo: email,
      subject: `New Service Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9; border-bottom: 3px solid #0c4a6e; padding-bottom: 10px;">
            New Service Request
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #0c4a6e; margin-bottom: 10px;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            ${serviceType ? `<p><strong>Service Type:</strong> ${serviceType}</p>` : ""}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #0c4a6e; margin-bottom: 10px;">Message</h3>
            <p style="white-space: pre-wrap; background-color: #f0f9ff; padding: 15px; border-radius: 5px;">
              ${message}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the TWM Water Restoration website contact form.</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("[v0] Server: Resend error:", error)
      return {
        success: false,
        error: "Failed to send email. Please call (214) 225-0829 or email Office@twmrestore.com",
      }
    }

    console.log("[v0] Server: Email sent successfully:", data)

    return {
      success: true,
      message: "Thank you! Your request has been submitted successfully. We'll contact you shortly.",
    }
  } catch (error: any) {
    console.error("[v0] Server: Unexpected error:", error)
    return {
      success: false,
      error: error.message || "An unexpected error occurred. Please call (214) 225-0829",
    }
  }
}
