"use client"

export function ServiceAreaMap() {
    return (
        <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden border-2 border-border shadow-lg">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d46552197.1602504!2d-116.5429688!3d44.5904672!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495b49b2944935d%3A0x7ed65de5dd0c81c1!2sPilot%20Plumbing%20and%20Water%20Restoration%20of%20Vancouver!5e0!3m2!1sen!2sus!4v1768347962067!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pilot Plumbing & Drain Service Area Map"
            ></iframe>
        </div>
    )
}
