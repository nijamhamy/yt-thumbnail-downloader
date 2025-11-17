import React from "react";

function AboutUs() {
    return (
        <div className="container py-5" style={{ maxWidth: "850px" }}>
            <h1 className="text-center mt-3 fw-bold mb-4 text-primary">
                About This Tool
            </h1>

            <p className="lead text-center text-secondary">
                Easily download high-quality YouTube thumbnails in one click!
                Designed for creators, editors & bloggers.
            </p>

            <hr className="my-4" />

            <h3 className="fw-bold mt-4">🎯 What is this tool?</h3>
            <p>
                This YouTube Thumbnail Downloader allows you to extract and
                download thumbnails from YouTube videos in different resolutions
                including Max, HD, Medium, and Standard quality.
            </p>

            <h3 className="fw-bold mt-4">✨ Key Features</h3>
            <ul>
                <li>✔ No Signup Required</li>
                <li>✔ Supports all YouTube links and IDs</li>
                <li>✔ Download Max Resolution & HD thumbnails</li>
                <li>✔ Fully responsive and mobile-friendly</li>
                <li>✔ Safe & free – no watermarks</li>
            </ul>

            <h3 className="fw-bold mt-4">🙌 Who Can Use It?</h3>
            <p>
                This tool is great for:
            </p>
            <ul>
                <li>YouTubers</li>
                <li>Thumbnail Designers</li>
                <li>Content Creators</li>
                <li>Bloggers & News Websites</li>
                <li>Educators & Students</li>
            </ul>

            <h3 className="fw-bold mt-4">💡 Why This Exists?</h3>
            <p>
                Finding and downloading high-quality thumbnails manually is time-consuming.
                This tool solves that problem with just one click!
            </p>

            <hr />

            <p className="text-center fw-semibold text-muted mt-4">
                Made with ❤️ for the creator community.
            </p>
        </div>
    );
}


export default AboutUs;
