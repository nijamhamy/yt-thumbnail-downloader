import { useState, useEffect } from "react";
import "./Home.css";
import FAQ from "./FAQ";
import AdsterraNative from "./AdsterraNative";
import AdsterraBanner from "./AdsterraBanner";

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
        <>
            <AdsterraBanner />
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

                <AdsterraNative />

                {/* ARTICLE SECTION */}
                <div className="mt-4 text-start article-container">

                    {/* SECTION 1 */}
                    <h2 className="fw-bold mt-4 text-dark heading-hover">What Is a YouTube Thumbnail?</h2>
                    <p className="text-secondary">
                        A YouTube thumbnail is the small preview image that appears before you open a video. It is the first thing viewers notice, and in many cases, it determines whether someone clicks your video or scrolls past it. A well-designed thumbnail acts like a mini-advertisement for your content, giving viewers a quick idea of what your video is about.

                        Thumbnails play a major role in YouTube’s algorithm because they directly influence CTR (Click-Through Rate). If many people click on your video after seeing the thumbnail, YouTube assumes your content is useful and starts pushing it to more viewers. This helps in ranking higher in search results, gaining more views, and building your online audience.

                        In simple words:
                        A YouTube thumbnail is the “face” of your video—and success on YouTube starts from the thumbnail.
                    </p>

                    {/* SECTION 2 */}
                    <h2 className="fw-bold mt-4 text-dark heading-hover">Why Thumbnails Are Important?</h2>

                    <p className="text-secondary">A thumbnail is more than just an image—it represents your content’s identity. Below are the major reasons why thumbnails are extremely important:</p>
                    <ul>
                        <li>Creates the First Impression</li>
                        <p className="text-secondary">Before your title, description, or video itself—your thumbnail is what viewers see first. A strong visual creates instant interest and makes your content look professional.</p>
                        <li>Increases Click-Through Rate (CTR)</li>
                        <p className="text-secondary">CTR is one of the most important ranking factors. If your thumbnail is attractive and clear, more people will click it, which increases your CTR and sends a positive signal to YouTube’s recommendation system. </p>
                        <li>Helps Videos Rank Higher</li>
                        <p className="text-secondary">A high CTR tells YouTube that your video is valuable. YouTube then pushes it to Home feed, Search results, Suggested videos, and Shorts feed.</p>
                        <li>Helps You Stand Out from Competitors</li>
                        <p className="text-secondary">Millions of videos are uploaded every day. A beautiful thumbnail helps your content stand out in a crowded platform.</p>
                        <li>Builds Your Brand Identity</li>
                        <p className="text-secondary">Many successful YouTubers keep a consistent style—same color theme, borders, fonts, and layout. This makes fans instantly recognize their videos.</p>
                    </ul>

                    {/* SECTION 3 */}
                    <h2 className="fw-bold mt-4 text-dark heading-hover">
                        How to Download YouTube Thumbnails Using This Tool?
                    </h2>

                    <p className="text-secondary">
                        Downloading a YouTube thumbnail manually is difficult. Normally, you need to inspect
                        the page source or search for the raw image link. But with this tool, everything
                        becomes simple, fast, and automated.
                    </p>

                    <p className="fw-bold text-dark mt-3">Follow these simple steps:</p>

                    <ol>
                        <li>Copy the YouTube video link from the YouTube app or website.</li>
                        <li>Paste it into the input box above.</li>
                        <li>Click the “Show Thumbnails” button.</li>
                        <li>All available resolutions (Max, HD, Medium, SD) will appear instantly.</li>
                        <li>Click the “Download” button to save your preferred thumbnail.</li>
                    </ol>

                    <p className="fw-bold text-dark mt-3">This tool works for:</p>

                    <ul>
                        <li>YouTube Videos</li>
                        <li>YouTube Shorts</li>
                        <li>Live Streams</li>
                        <li>Premiere Videos</li>
                        <li>Embedded YouTube URLs</li>
                    </ul>

                    <p className="text-secondary">
                        This tool is fast, free, secure, and requires no login. Anyone can use it on mobile
                        or desktop without installing any app.
                    </p>


                    {/* VIDEO TUTORIAL SECTION */}
                    <h2 className="fw-bold mt-4 text-dark heading-hover">How to Use This Tool: Video Tutorial</h2>

                    <p className="text-secondary">
                        To make things easier, we included a short YouTube tutorial. By watching this video,
                        you can quickly understand how to paste links, preview thumbnails, and download HD images.
                        Even beginners can use this tool without any technical knowledge.
                    </p>

                    <div className="ratio ratio-16x9 mb-4">
                        <iframe
                            src="https://www.youtube.com/embed/qvK8CrLgJBc"
                            title="YouTube Thumbnail Download Tutorial"
                            allowFullScreen
                        ></iframe>
                    </div>


                    {/* SECTION 4 */}
                    <h2 className="fw-bold mt-4 text-dark heading-hover">YouTube Thumbnail Size Guide</h2>

                    <p className="text-secondary">
                        Every YouTube thumbnail must follow YouTube’s recommended image guidelines to ensure
                        proper clarity on all devices.
                    </p>

                    <div className="table-responsive mt-3">
                        <table className="table table-bordered table-striped">
                            <thead className="table-dark">
                                <tr>
                                    <th>Resolution</th>
                                    <th>Quality</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1280 × 720</td>
                                    <td>Max</td>
                                    <td>Recommended HD (16:9)</td>
                                </tr>
                                <tr>
                                    <td>720 × 480</td>
                                    <td>High Quality</td>
                                    <td>Great for mobile</td>
                                </tr>
                                <tr>
                                    <td>480 × 360</td>
                                    <td>Medium</td>
                                    <td>Faster loading</td>
                                </tr>
                                <tr>
                                    <td>360 × 240</td>
                                    <td>Standard</td>
                                    <td>For low bandwidth users</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-secondary mt-3">
                        YouTube recommends the <strong>1280 × 720</strong> size for best clarity across all devices.
                    </p>


                    {/* SECTION 5 */}
                    <h2 className="fw-bold mt-4 text-dark heading-hover">How to Create a Professional YouTube Thumbnail</h2>

                    <p className="text-secondary">
                        A well-designed thumbnail can significantly increase your video views. Below are
                        professional tips used by top YouTube creators to design effective thumbnails.
                    </p>

                    <h4 className="fw-bold text-dark">1. Use Recommended Resolution</h4>
                    <ul>
                        <li>1280 × 720 pixels (YouTube recommended)</li>
                        <li>16:9 aspect ratio</li>
                        <li>Under 2MB size</li>
                        <li>JPG or PNG format</li>
                    </ul>

                    <h4 className="fw-bold text-dark">2. Use Powerful Editing Tools</h4>
                    <ul>
                        <li><strong>Canva:</strong> Best for beginners with ready-made templates.</li>
                        <li><strong>Photoshop:</strong> Most advanced for professional designs.</li>
                        <li><strong>Figma:</strong> Perfect for clean modern layouts.</li>
                        <li><strong>Photopea:</strong> Free online Photoshop-like tool.</li>
                        <li><strong>Pixlr / Fotor:</strong> Simple and fast for quick designs.</li>
                    </ul>

                    <h4 className="fw-bold text-dark">3. Focus on Readable Text</h4>
                    <ul>
                        <li>Use bold, clear fonts</li>
                        <li>Keep text short and simple</li>
                        <li>Ensure high contrast with the background</li>
                        <li>Avoid small text—most viewers use mobile</li>
                    </ul>

                    <h4 className="fw-bold text-dark">4. Use Bright Colors</h4>
                    <ul>
                        <li>Use attention-grabbing colors like yellow, red, green, or blue</li>
                        <li>Make sure your text color contrasts with the background</li>
                        <li>Avoid dull and low-contrast combinations</li>
                    </ul>

                    <h4 className="fw-bold text-dark">5. Use Emotional Faces (If applicable)</h4>
                    <ul>
                        <li>Expressions like surprise, happiness, sadness, or excitement work well</li>
                        <li>Faces attract attention and increase CTR</li>
                    </ul>

                    <h4 className="fw-bold text-dark">6. Keep the Design Simple</h4>
                    <ul>
                        <li>Avoid cluttered layouts</li>
                        <li>Make sure viewers can understand the idea instantly</li>
                        <li>Highlight only the key subject or message</li>
                    </ul>
                    <div class="text-center my-4">
                        <img
                            src="/og-image.png"
                            alt="YouTube Thumbnail Downloader HD Tool"
                            class="img-fluid rounded shadow"
                            loading="lazy"
                        />
                    </div>

                    {/* SECTION 6 */}
                    <h2 className="fw-bold mt-4 text-dark heading-hover">How to Choose a High-CTR YouTube Title</h2>

                    <p className="text-secondary">
                        Your thumbnail and title must work together. A strong, well-optimized title can
                        significantly increase your click-through rate (CTR) and help your videos rank better.
                    </p>

                    <h4 className="fw-bold text-dark">Tips for Writing Effective Titles</h4>
                    <ul>
                        <li>Keep the title short, clear, and easy to read</li>
                        <li>Use strong, relevant keywords that people are searching for</li>
                        <li>Include power words such as: Best, Free, Easy, Secret, Guide, Fast, Tips</li>
                        <li>Avoid clickbait—maintain trust with your audience</li>
                        <li>Make sure the title clearly connects with your thumbnail</li>
                    </ul>

                    <h4 className="fw-bold text-dark">Example of Good Titles</h4>
                    <ul>
                        <li>How to Edit Videos Like a Professional (Beginner Guide)</li>
                        <li>Top 10 Tips to Grow Your YouTube Channel Fast</li>
                        <li>How to Create High-Quality Thumbnails for Free</li>
                    </ul>


                    {/* SECTION 7 */}
                    <h2 className="fw-bold mt-4 text-dark heading-hover">What Is Copyright?</h2>

                    <p className="text-secondary">
                        Copyright protects the original work of creators such as images, videos, music,
                        graphics, and thumbnails. If you use copyrighted material without permission,
                        YouTube may take action against your video or channel.
                    </p>

                    <h4 className="fw-bold text-dark">YouTube Copyright Issues</h4>
                    <ul>
                        <li>Copyright claim</li>
                        <li>Video removal</li>
                        <li>Monetization block</li>
                        <li>Community strike</li>
                        <li>Channel termination in severe cases</li>
                    </ul>

                    <p className="text-secondary mt-3">
                        Downloading a thumbnail for learning, research, or personal reference is generally safe.
                        However, using someone else’s thumbnail in your own video is not allowed and may lead to
                        copyright violations.
                    </p>

                    <p className="text-secondary">
                        This tool is safe because it only provides publicly available image URLs that YouTube
                        already allows access to. No copyrighted video files or audio are downloaded, only the
                        publicly visible thumbnail image.
                    </p>

                    <h2 className="fw-bold mt-4 text-dark heading-hover">Disclaimer</h2>

                    <p className="text-secondary">
                        This website only provides access to publicly available YouTube thumbnail images.
                        All thumbnail images are retrieved directly from YouTube’s servers using official
                        YouTube image endpoints. We do not host, store, or modify any copyrighted content.
                    </p>

                    <p className="text-secondary">
                        This tool does not download, store, or distribute YouTube videos, audio files,
                        or any other copyrighted material. All images remain the property of their
                        respective copyright owners.
                    </p>

                    <p className="text-secondary">
                        Users are responsible for ensuring that any downloaded images are used in compliance
                        with YouTube’s Terms of Service and applicable copyright laws. This tool is intended
                        only for educational, research, and personal use.
                    </p>

                    <p className="text-secondary">
                        By using this website, you agree that we are not liable for any misuse of the images
                        downloaded through this tool.
                    </p>


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
        </>

    );
}

export default Home;
