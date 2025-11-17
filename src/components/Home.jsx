import { useState } from "react";
import "./Home.css";


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

                <button
                    className="btn btn-primary btn-lg"
                    onClick={handleGenerate}
                >
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
                📌 Note: Max resolution may not be available for some videos.
            </p>
        </div>
    );
}

export default Home;
