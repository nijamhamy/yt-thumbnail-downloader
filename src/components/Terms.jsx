function Terms() {
    return (
        <div className="container mt-5 pt-5" style={{ maxWidth: "850px" }}>
            <h2 className="fw-bold text-primary mb-4">Terms & Conditions</h2>

            <p className="text-muted">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <p className="text-secondary">
                Welcome to <strong>YouTube Thumbnail Downloader</strong>. By accessing or using this website, you agree to be bound
                by these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use immediately.
            </p>

            <h4 className="fw-bold mt-4 text-dark">1. Use of the Service</h4>
            <p className="text-secondary">
                Our tool is intended for educational, informational, and fair-use purposes only. You agree NOT to:
                <br />– Use the service for illegal or harmful activities
                <br />– Download thumbnails for commercial use without permission
                <br />– Attempt to hack, modify, or reverse-engineer the website
                <br />– Use automated tools, bots, or scripts to overload our servers
                <br />– Violate YouTube’s Terms of Service in any way
            </p>

            <h4 className="fw-bold mt-4 text-dark">2. No Copyright Ownership</h4>
            <p className="text-secondary">
                We do not host or store any copyrighted images or videos. All thumbnails are public images served directly from
                YouTube’s official servers. Copyright and ownership remain with their respective creators.
            </p>

            <h4 className="fw-bold mt-4 text-dark">3. Intellectual Property</h4>
            <p className="text-secondary">
                The design, layout, logo, text, and code of this website are the intellectual property of the site owner. Users may
                not copy, reproduce, or redistribute any part of this website without permission.
            </p>

            <h4 className="fw-bold mt-4 text-dark">4. Google AdSense and Third-Party Advertisers</h4>
            <p className="text-secondary">
                Our website may display advertisements using Google AdSense and other third-party advertisers. We are not responsible
                for the content, practices, tracking, or cookies used by external advertising partners.
            </p>

            <h4 className="fw-bold mt-4 text-dark">5. Disclaimer of Warranties</h4>
            <p className="text-secondary">
                This website is provided “as is” and “as available.” We do not guarantee:
                <br />– Continuous uptime
                <br />– Accuracy of thumbnails
                <br />– Compatibility with all devices
                <br />– Error-free operation
                <br /><br />
                Use of this website is at your own risk.
            </p>

            <h4 className="fw-bold mt-4 text-dark">6. Limitation of Liability</h4>
            <p className="text-secondary">
                We are not liable for any damages, including:
                <br />– Loss of data or files
                <br />– Misuse of downloaded images
                <br />– Problems caused by third-party websites or ads
                <br />– Service interruptions
            </p>

            <h4 className="fw-bold mt-4 text-dark">7. External Links</h4>
            <p className="text-secondary">
                Our website may contain external links for convenience. We do not control and are not responsible for the privacy
                practices, content, or policies of third-party websites.
            </p>

            <h4 className="fw-bold mt-4 text-dark">8. Age Restrictions</h4>
            <p className="text-secondary">
                This service is intended for users who are at least 13 years old. Users under 13 should not use our website.
            </p>

            <h4 className="fw-bold mt-4 text-dark">9. Termination of Access</h4>
            <p className="text-secondary">
                We may restrict or terminate access to any user who violates these Terms & Conditions or engages in harmful
                activities.
            </p>

            <h4 className="fw-bold mt-4 text-dark">10. Changes to These Terms</h4>
            <p className="text-secondary">
                We may update or modify these Terms at any time. Continued use of the website after changes indicates your
                acceptance of the revised terms.
            </p>

            <h4 className="fw-bold mt-4 text-dark">11. Governing Law</h4>
            <p className="text-secondary">
                These Terms & Conditions are governed by applicable international laws. Any disputes shall be resolved in
                accordance with the laws of your local jurisdiction.
            </p>

            <h4 className="fw-bold mt-4 text-dark">12. Contact Us</h4>
            <p className="text-secondary">
                If you have any questions regarding these Terms & Conditions, you may contact us at:
                <br />
                <a href="mailto:amnijam60@gmail.com" className="text-primary">amnijam60@gmail.com</a>
            </p>

            <hr className="mt-5" />
            <p className="text-center text-muted small">
                © {new Date().getFullYear()} YouTube Thumbnail Downloader. All Rights Reserved.
            </p>
        </div>
    );
}

export default Terms;
