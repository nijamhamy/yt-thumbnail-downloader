function Footer() {
    return (
        <footer className="bg-light border-top mt-5 py-4">
            <div className="container text-center">
                
                <div className="mb-3">
                    <a href="/privacy" className="text-muted small me-3">Privacy Policy</a>
                    <a href="/terms" className="text-muted small me-3">Terms & Conditions</a>
                    <a href="/dmca" className="text-muted small me-3">DMCA</a>
                    <a href="/about" className="text-muted small">About Us</a>
                </div>

                <p className="text-muted small mb-1">
                    © {new Date().getFullYear()} YouTube Thumbnail Downloader. All rights reserved.
                </p>

                <p className="text-muted small">
                    Designed by <span className="text-dark fw-semibold">Mohammathu Nijam</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
