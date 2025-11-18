function Terms() {
    return (
        <div className="container mt-5 pt-5 text-light">
            <h2 className="fw-bold text-dark mb-4">Terms & Conditions</h2>

            <p className="text-secondary">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <p className="text-secondary">
                Welcome to <strong>YouTube Thumbnail Downloader HD</strong>. By accessing or using this website,
                you agree to the following terms and conditions. If you do not agree to any part of these terms,
                please discontinue use immediately.
            </p>

            <h4 className="fw-semibold mt-4 text-secondary">Use of the Service</h4>
            <p className="text-secondary">
                Our tool is provided for educational and fair-use purposes only. You agree not to:
                <br />– Use this service for illegal or abusive activities
                <br />– Download thumbnails for commercial purposes without permission
                <br />– Attempt to hack, reverse-engineer, or misuse the service
            </p>

            <h4 className="fw-semibold mt-4 text-secondary">No Copyright Ownership</h4>
            <p className="text-secondary">
                We do NOT host or store any YouTube videos or images. All thumbnails are publicly available through
                YouTube’s official servers. Copyright and ownership remain with their original creators.
            </p>

            <h4 className="fw-semibold mt-4 text-secondary">Google AdSense & Advertisers</h4>
            <p className="text-secondary">
                Our site may display ads via Google AdSense or third-party providers. We are not responsible for the
                content or tracking technologies used by external advertisers.
            </p>

            <h4 className="fw-semibold mt-4 text-secondary">Disclaimer of Warranty</h4>
            <p className="text-secondary">
                This website is provided “as is” with no warranties, express or implied. We do not guarantee uptime,
                accuracy, or compatibility.
            </p>

            <h4 className="fw-semibold mt-4 text-secondary">Limitation of Liability</h4>
            <p className="text-secondary">
                Under no circumstances shall we be liable for any damages resulting from:
                <br />– Misuse of the service
                <br />– Data loss
                <br />– Third-party advertisements or links
            </p>

            <h4 className="fw-semibold mt-4 text-secondary">Changes to Terms</h4>
            <p className="text-secondary">
                We reserve the right to modify or update these Terms & Conditions at any time. Continued use of the site
                after changes means you accept the revised terms.
            </p>

            <h4 className="fw-semibold mt-4 text-secondary">Contact Us</h4>
            <p className="text-secondary">
                If you have questions about these Terms, contact us at:
                <br />
                <a href="mailto:amnijam60@gmail.com" className="link-dark">amnijam60@gmail.com</a>
            </p>

            <hr className="mt-5" />
            <p className="text-center text-muted small">
                © {new Date().getFullYear()} YouTube Thumbnail Downloader. All rights reserved.
            </p>
        </div>
    );
}

export default Terms;
