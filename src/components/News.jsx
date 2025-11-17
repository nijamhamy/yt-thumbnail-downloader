import React from "react";

function News() {
    const newsItems = [
        {
            title: " Powerful New Features Coming Soon!",
            date: "November 2025",
            description:
                "We’re working on exciting enhancements like multiple thumbnail extraction, drag-and-drop URL support, YouTube playlist thumbnail support, and more.",
            highlight: true,
        },
        {
            title: " Performance Improvements",
            date: "October 2025",
            description:
                "We have optimized thumbnail loading and download speeds for a smoother experience.",
        },
        {
            title: " Multi-language Support",
            date: "September 2025",
            description:
                "Our tool now supports multiple languages to better serve users around the world.",
        },
    ];

    return (
        <div className="container mt-5 pt-5 text-light">
            <h2 className="fw-bold mb-4">Latest Updates</h2>

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
        </div>
    );
}

export default News;
