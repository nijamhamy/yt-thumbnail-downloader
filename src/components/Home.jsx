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
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowButton(window.scrollY > 300);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleGenerate = () => {
        const id = extractVideoId(input);
        if (!id) {
            alert("Please enter a valid YouTube URL or ID.");
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
        } catch {
            alert("Failed to download image. Try another resolution.");
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

            <h1 className="display-5 fw-bold text-danger heading-hover">
                Download YouTube Thumbnails Instantly
            </h1>

            <p className="lead text-secondary">
                Paste a YouTube URL or Video ID and download thumbnails of all available resolutions.
            </p>

            {/* INPUT SECTION */}
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

            {/* THUMBNAIL SECTION */}
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
                                            downloadImage(thumb.file, `${videoId}-${thumb.quality}.jpg`)
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

            {/* ARTICLE SECTION */}
            <div className="mt-4 text-start article-container">

                {/* SECTION 1 */}
                <h2 className="fw-bold mt-4 text-dark heading-hover">What Is a YouTube Thumbnail?</h2>
                <p className="text-secondary">
                    A YouTube thumbnail is the preview image viewers see before clicking a video.
                    A good thumbnail increases clicks, watch-time, and overall performance.
                </p>

                {/* SECTION 2 */}
                <h2 className="fw-bold mt-4 text-dark heading-hover">Why Thumbnails Are Important?</h2>
                <ul>
                    <li>Creates the first impression</li>
                    <li>Increases click-through rate (CTR)</li>
                    <li>Helps videos rank higher</li>
                    <li>Makes your content stand out</li>
                </ul>

                {/* SECTION 3 */}
                <h2 className="fw-bold mt-4 text-dark heading-hover">How to Download YouTube Thumbnails?</h2>
                <ol>
                    <li>Copy the YouTube video link.</li>
                    <li>Paste it into the search box.</li>
                    <li>Click “Show Thumbnails”.</li>
                    <li>Download your preferred resolution.</li>
                </ol>

                {/* VIDEO TUTORIAL SECTION */}
                <h2 className="fw-bold mt-4 text-dark heading-hover">How to Use This Tool (Video Guide)</h2>
                <p className="text-secondary">
                    Watch this short tutorial to learn how to download YouTube thumbnails using this tool.
                </p>

                <div className="ratio ratio-16x9 mb-4">
                    <iframe
                        src="https://www.youtube.com/embed/qvK8CrLgJBc"
                        title="YouTube Thumbnail Download Tutorial"
                        allowFullScreen
                    ></iframe>
                </div>


                {/* SECTION 4 */}
                <h2 className="fw-bold mt-4 text-dark heading-hover">Thumbnail Size Guide</h2>
                <ul>
                    <li>1280 × 720 — HD Max Resolution</li>
                    <li>720 × 480 — High Quality</li>
                    <li>480 × 360 — Medium Quality</li>
                    <li>360 × 240 — Standard Definition</li>
                </ul>

                {/* SECTION 5 */}
                <h2 className="fw-bold mt-4 text-dark heading-hover">How to Create a YouTube Thumbnail?</h2>
                <p className="text-secondary">
                    Follow these steps to design clean, professional thumbnails.
                </p>

                <h4 className="fw-bold text-dark">Correct Thumbnail Size</h4>
                <ul>
                    <li>Recommended: 1280 × 720 pixels</li>
                    <li>Aspect Ratio: 16:9</li>
                    <li>File Type: JPG or PNG</li>
                </ul>

                <h4 className="fw-bold text-dark">Tools to Create Thumbnails</h4>
                <p className="text-secondary"><strong>Canva:</strong> Best for beginners with templates.</p>
                <p className="text-secondary"><strong>Photoshop:</strong> Best for professionals.</p>
                <p className="text-secondary"><strong>Online Tools:</strong> Photopea, Pixlr, Fotor.</p>

                <h4 className="fw-bold text-dark">Thumbnail Design Tips</h4>
                <ul>
                    <li>Use bold, readable text</li>
                    <li>Use bright contrasting colors</li>
                    <li>Highlight your face or main object</li>
                    <li>Keep design simple and clean</li>
                </ul>

                {/* SECTION 6 */}
                <h2 className="fw-bold mt-4 text-dark heading-hover">How to Choose a YouTube Title?</h2>
                <ul>
                    <li>Keep it short and eye-catching</li>
                    <li>Use keywords people search for</li>
                    <li>Add strong words like Best, Free, Easy, Tutorial</li>
                    <li>Avoid clickbait — be honest</li>
                </ul>

                {/* SECTION 7 */}
                <h2 className="fw-bold mt-4 text-dark heading-hover">What Is Copyright?</h2>
                <p className="text-secondary">
                    Copyright protects original creators. You cannot reuse thumbnails, videos, or images without permission.
                    Using copyrighted content may cause:
                </p>

                <ul>
                    <li>Copyright claim</li>
                    <li>Video removal</li>
                    <li>Channel strike</li>
                </ul>

            </div>

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
