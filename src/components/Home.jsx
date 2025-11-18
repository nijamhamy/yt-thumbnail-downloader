import { useState, useEffect } from "react";
import "./Home.css";
import FAQ from "./FAQ";

function extractVideoId(input) {
    if (!input) return "";

    const trimmed = input.trim();

    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;

    const regex =
        /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/))([a-zA-Z0-9_-]{11})/;
    const match = trimmed.match(regex);

    return match ? match[1] : "";
}

function Home() {
    const [input, setInput] = useState("");
    const [videoId, setVideoId] = useState("");

    // Back to Top Button Logic
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleGenerate = () => {
        const id = extractVideoId(input);
        if (!id) {
            alert("❗ Please enter a valid YouTube video URL or ID.");
            return;
        }
        setVideoId(id);
    };

    const downloadImage = async (url, filename) => {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            link.remove();
            URL.revokeObjectURL(link.href);
        } catch (error) {
            alert("❌ Failed to download image. Try another resolution.");
        }
    };

    const thumbnails = videoId
        ? [
            {
                quality: "Max Resolution",
                file: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
            },
            {
                quality: "HD (720p)",
                file: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
            },
            {
                quality: "Medium (480p)",
                file: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
            },
            {
                quality: "Default (360p)",
                file: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
            },
        ]
        : [];

    return (
        <div className="container mt-5 pt-5 text-center">
            <h1 className="display-5 fw-bold text-danger">
                Download YouTube Thumbnails Instantly
            </h1>
            <p className="lead text-secondary">
                Paste a YouTube URL or Video ID and download thumbnails of all available resolutions.
            </p>

            <div className="mt-5">
                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="Paste YouTube link or video ID"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{ maxWidth: "600px", margin: "auto" }}
                />

                <button className="btn btn-primary btn-lg" onClick={handleGenerate}>
                    Show Thumbnails
                </button>
            </div>

            {thumbnails.length > 0 && (
                <div className="row m-auto mt-5 justify-content-center">
                    {thumbnails.map((thumb, index) => (
                        <div className="col-md-3 mb-4" key={index}>
                            <div className="card shadow-lg border-0">
                                <img
                                    src={thumb.file}
                                    className="card-img-top thumbnail-img"
                                    alt={thumb.quality}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{thumb.quality}</h5>
                                    <button
                                        className="btn btn-success"
                                        onClick={() =>
                                            downloadImage(
                                                thumb.file,
                                                `${videoId}-${thumb.quality}.jpg`
                                            )
                                        }
                                    >
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <p className="text-muted mt-5">
                Note: Max resolution may not be available for some videos.
            </p>

            {/* ARTICLE CONTENT */}
            <div
                className="mt-4 text-start"
                style={{ maxWidth: "900px", margin: "auto" }}
            >
                <h2 className="fw-bold mt-4 text-dark">What Is a YouTube Thumbnail?</h2>
                <p className="text-secondary">
                    A YouTube thumbnail is the small preview image that viewers see before
                    clicking a video. It plays a major role in attracting viewers and can
                    increase your CTR (Click Through Rate). A good thumbnail improves
                    visibility, watch-time, and overall video performance.
                </p>

                <h2 className="fw-bold mt-4 text-dark">Why Thumbnails Are Important?</h2>
                <ul>
                    <li>Creates the first impression for your video</li>
                    <li>Increases the click-through rate (CTR)</li>
                    <li>Helps your video perform better in search results</li>
                    <li>Makes your content stand out from competitors</li>
                </ul>

                <h2 className="fw-bold mt-4 text-dark">
                    How to Download YouTube Thumbnails Using Our Tool?
                </h2>
                <ol>
                    <li>Copy the YouTube video link from YouTube.</li>
                    <li>Paste the link into the search box above.</li>
                    <li>Click on “Show Thumbnails”.</li>
                    <li>Preview and download any resolution you want.</li>
                </ol>

                <h2 className="fw-bold mt-4 text-dark">How to Use This Tool (Video Guide)</h2>
                <p className="text-secondary">
                    Watch this video to see how to download YouTube thumbnails using our
                    website:
                </p>

                <div className="ratio ratio-16x9 mb-4">
                    <iframe
                        src="https://www.youtube.com/embed/qvK8CrLgJBc"
                        title="How to download YouTube Thumbnail"
                        allowFullScreen
                    ></iframe>
                </div>

                <h2 className="fw-bold mt-4 text-dark">
                    Tips to Create High-CTR YouTube Thumbnails
                </h2>
                <ul>
                    <li>Use bright and contrasting colors</li>
                    <li>Use big and bold text</li>
                    <li>Add emotional expressions on faces</li>
                    <li>Include important objects from your video</li>
                    <li>Keep the design clean and simple</li>
                    <li>Always design in 1280×720 resolution</li>
                </ul>

                <h2 className="fw-bold mt-4 text-dark">YouTube Thumbnail Size Guide</h2>
                <ul>
                    <li><strong>1280×720</strong> – Max Resolution (HD)</li>
                    <li><strong>720×480</strong> – High Quality (HQ)</li>
                    <li><strong>480×360</strong> – Medium Quality (MQ)</li>
                    <li><strong>360×240</strong> – Standard (SD)</li>
                </ul>

                <h2 className="fw-bold mt-4 text-dark">
                    Is It Legal to Download YouTube Thumbnails?
                </h2>
                <p className="text-secondary">
                    Yes, downloading thumbnails is safe as long as you use them for personal
                    use, inspiration, or educational purposes. Make sure you do not use
                    thumbnails commercially without the creator’s permission.
                </p>
            </div>

            {/* FAQ Section */}
            <FAQ />

            {/* BACK TO TOP BUTTON */}
            {showButton && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="btn btn-dark text-white position-fixed"
                    style={{
                        bottom: "20px",
                        right: "20px",
                        fontWeight: "bold",
                        border: "1px solid #444",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                        zIndex: 9999,
                    }}
                >
                    Back to Top
                </button>
            )}
        </div>
    );
}

export default Home;
