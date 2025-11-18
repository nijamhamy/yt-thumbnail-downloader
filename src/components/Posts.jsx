import React, { useEffect, useState } from "react";

function Posts() {
    const [showButton, setShowButton] = useState(false);

    // Show "Back to Top" button on scroll
    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const newsItems = [
        {
            title: "Powerful New Features Coming Soon",
            date: "November 2025",
            description:
                "We are working on advanced enhancements including multiple thumbnail extraction, drag-and-drop URL detection, playlist thumbnail support, and improved user experience.",
            highlight: true,
        },
        {
            title: "Performance Improvements",
            date: "October 2025",
            description:
                "Thumbnail loading times and download speeds have been optimized for faster performance across all devices.",
        },
        {
            title: "Improved Mobile Experience",
            date: "September 2025",
            description:
                "Our tool is now fully optimized for mobile devices with better touch response, faster loading, and improved layout for smaller screens.",
        },

    ];

    return (
        <div className="container mt-5 pt-5 text-light" style={{ maxWidth: "900px" }}>
            <h1 className="fw-bold mb-4 text-center text-dark">Blog & Updates</h1>

            <p className="text-secondary mb-5">
                Stay updated with the latest improvements, features, and insights related to
                YouTube thumbnail downloading, design best practices, and platform updates.
                This section contains helpful articles and important announcements to enhance
                your overall experience.
            </p>

            {/* Article Section */}
            <div className="mb-5">
                <h3 className="fw-bold mb-3 text-dark">Understanding the Importance of YouTube Thumbnails</h3>
                <p className="text-secondary">
                    A thumbnail acts as the cover image of a video. It plays a major role in
                    influencing whether a viewer decides to click the video. A well-designed
                    thumbnail can increase visibility, boost click-through rate, and improve
                    overall engagement. High-quality thumbnails with clear visuals, readable
                    text, and strong contrast tend to perform significantly better.
                </p>

                <h4 className="fw-semibold mt-4 text-dark">How Creators Can Improve Their Thumbnails</h4>
                <p className="text-secondary">
                    Creators should focus on clarity, sharpness, and the emotional appeal of
                    the visuals. Using a clean layout with large text and keeping the main
                    subject in focus helps capture attention more effectively. Consistency in
                    style also builds channel identity and trust among viewers.
                </p>

                <h4 className="fw-semibold mt-4 text-dark">Why Thumbnail Tools Are Essential</h4>
                <p className="text-secondary">
                    Tools like this website help creators quickly extract and save important
                    thumbnails for reference, editing, or content analysis. Having access to
                    multiple sizes allows creators to design optimized thumbnails across all
                    platforms and devices.
                </p>
            </div>

            <hr className="border-secondary mb-5" />

            <h2 className="fw-bold mb-4 text-dark">Latest Updates</h2>

            {newsItems.map((item, index) => (
                <div
                    key={index}
                    className={`p-3 mb-4 rounded ${item.highlight ? "bg-primary text-white" : "bg-dark text-secondary"
                        }`}
                >
                    <h4 className="fw-semibold mb-1">{item.title}</h4>
                    <small className="d-block mb-2">{item.date}</small>
                    <p className="mb-0">{item.description}</p>
                </div>
            ))}

            {/* Back to Top Button */}
            {showButton && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="btn btn-light position-fixed"
                    style={{
                        bottom: "20px",
                        right: "20px",
                        fontWeight: "bold",
                        border: "1px solid #ccc",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                    }}
                >
                    Back to Top
                </button>
            )}
        </div>
    );
}

export default Posts;
