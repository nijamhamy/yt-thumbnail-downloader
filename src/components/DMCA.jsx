function DMCA() {
    return (
        <div className="container mt-5 pt-5 text-light">
            <h2 className="fw-bold text-dark mb-4">DMCA Policy</h2>

            <p className="text-secondary">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <p className="text-secondary">
                <strong>YouTube Thumbnail Downloader HD</strong> respects the intellectual property rights of all content creators.
                We comply with the Digital Millennium Copyright Act (DMCA) and respond to valid takedown notices.
            </p>

            <h4 className="fw-semibold mt-4 text-secondary">What We Host</h4>
            <p className="text-secondary">
                We do <strong>NOT</strong> host or store any copyrighted content.
                All thumbnails are served directly from YouTube’s public image servers using publicly accessible URLs.
            </p>

            <h4 className="fw-semibold mt-4 text-secondary">Submit a DMCA Notice</h4>
            <p className="text-secondary">
                If you believe your copyrighted material is being misused, please send a DMCA request containing:
                <br />– Your full name and contact information
                <br />– URL of the infringing content
                <br />– Proof of ownership or authorization
                <br />– A statement that the request is made in good faith
                <br />– A declaration that the information is accurate
            </p>

            <p className="text-secondary"><strong>Email DMCA requests to:</strong></p>
            <p className="text-secondary">
                📧 <a href="mailto:amnijam60@gmail.com?subject=DMCA%20Notice" className="link-dark">
                    amnijam60@gmail.com
                </a>
            </p>

            <h4 className="fw-semibold mt-4 text-secondary">Counter-Notice (If Applicable)</h4>
            <p className="text-secondary">
                If you believe a removal was incorrect, you may send a counter-notice. We reserve the right to restore content
                only after evaluation and legal verification.
            </p>

            <h4 className="fw-semibold mt-4 text-secondary">Repeat Offender Policy</h4>
            <p className="text-secondary">
                We reserve the right to block users who repeatedly misuse copyrighted material.
            </p>

            <hr className="mt-5" />
            <p className="text-center text-muted small">
                © {new Date().getFullYear()} YouTube Thumbnail Downloader. DMCA Compliance Policy.
            </p>
        </div>
    );
}

export default DMCA;
