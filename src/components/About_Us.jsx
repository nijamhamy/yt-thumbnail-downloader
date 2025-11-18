import React from "react";

function AboutUs() {
    return (
        <div className="container py-5" style={{ maxWidth: "850px" }}>
            <h1 className="text-center mt-3 fw-bold mb-4 text-primary">
                About This Website
            </h1>

            <p className="lead text-secondary">
                This platform was created to provide a simple, fast, and reliable way for users to
                download YouTube thumbnails in multiple resolutions. Our goal is to help creators,
                students, editors, designers, and general users access high-quality thumbnails without
                needing technical tools or complex steps.
            </p>

            <h3 className="fw-bold mt-4">Our Purpose</h3>
            <p>
                Manually extracting thumbnails from YouTube can be difficult, especially for beginners.
                Many users struggle to find the correct image URL or access high-resolution versions.
                This tool was built to solve that problem by offering a clean and user-friendly
                interface that allows anyone to download thumbnails instantly using just a link.
            </p>

            <h3 className="fw-bold mt-4">What This Tool Offers</h3>
            <p>
                Our thumbnail downloader supports multiple resolutions, including max quality, HD,
                medium, and standard formats. The platform works on all devices, loads quickly, and
                does not require registration or installation. Whether you are preparing a presentation,
                designing content, or studying visual media, this website provides the resources you
                need in just one click.
            </p>

            <h3 className="fw-bold mt-4">Who We Serve</h3>
            <p>
                This service is designed for YouTube creators, bloggers, educators, designers, students,
                and anyone who needs quick access to thumbnails for analysis, inspiration, research, or
                personal use. Our goal is to make high-quality thumbnails easily accessible to everyone,
                regardless of technical skill.
            </p>

            <h3 className="fw-bold mt-4">Our Commitment</h3>
            <p>
                We are committed to maintaining a secure, user-friendly, and reliable platform. This
                website continues to evolve with performance improvements, new features, and expanded
                support. Your feedback helps us enhance the platform, and we strive to provide a smooth
                and valuable experience for all users.
            </p>

            <p className="text-center fw-semibold text-muted mt-4">
                If you have questions or suggestions, feel free to contact us through our Contact page.
            </p>
        </div>
    );
}

export default AboutUs;
