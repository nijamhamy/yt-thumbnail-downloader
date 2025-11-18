function PrivacyPolicy() {
    return (
        <div className="container mt-5 pt-5" style={{ maxWidth: "850px" }}>
            <h2 className="fw-bold mb-4 text-primary">Privacy Policy</h2>

            <p className="text-muted">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <p className="text-secondary">
                Welcome to <strong>YouTube Thumbnail Downloader</strong>. Your privacy is extremely important to us.
                This Privacy Policy explains what information we collect, how we use it, and how your data is protected.
            </p>

            <h4 className="fw-bold mt-4 text-dark">1. Information We Do Not Collect</h4>
            <p className="text-secondary">
                We do <strong>not</strong> collect or store:
                <br />– Names, email addresses, or personal details
                <br />– YouTube account login information
                <br />– Search history or downloaded thumbnails
                <br />– URLs entered into our tool
                <br /><br />
                All thumbnail processing is done directly in your browser. No data is sent or stored on our servers.
            </p>

            <h4 className="fw-bold mt-4 text-dark">2. Log Data</h4>
            <p className="text-secondary">
                Like most websites, we may collect basic technical data such as:
                <br />– IP address
                <br />– Browser type
                <br />– Device information
                <br />– Date and time of visit
                <br /><br />
                This information is used only for analytics, security, and improving site performance. It cannot identify you personally.
            </p>

            <h4 className="fw-bold mt-4 text-dark">3. Cookies and Third-Party Advertising</h4>
            <p className="text-secondary">
                Our website uses Google AdSense and other third-party advertisers. These services may use cookies,
                including the DoubleClick cookie, to provide personalized ads based on your browsing behavior.
            </p>

            <p className="text-secondary">
                Users may opt out of personalized advertising by visiting:
                <br />
                <a
                    href="https://www.google.com/settings/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                >
                    https://www.google.com/settings/ads
                </a>
            </p>

            <p className="text-secondary">
                To learn how Google uses data:
                <br />
                <a
                    href="https://policies.google.com/technologies/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                >
                    https://policies.google.com/technologies/ads
                </a>
            </p>

            <h4 className="fw-bold mt-4 text-dark">4. Third-Party Links</h4>
            <p className="text-secondary">
                Our site may contain links to external websites. We are not responsible for the content, privacy
                practices, or policies of those third-party sites. Users are encouraged to review the privacy policies
                of any external websites they visit.
            </p>

            <h4 className="fw-bold mt-4 text-dark">5. YouTube and Copyright Disclaimer</h4>
            <p className="text-secondary">
                This tool does not store, host, or download any copyrighted content. It only fetches publicly available
                thumbnails from YouTube’s public image server. All rights remain with their respective content owners.
            </p>

            <h4 className="fw-bold mt-4 text-dark">6. GDPR and CCPA User Rights</h4>
            <p className="text-secondary">
                If applicable, you have the right to:
                <br />– Request information about any stored data
                <br />– Request deletion of your data
                <br />– Opt out of tracking and cookies
                <br /><br />
                Since we do not store personal data, most requests will simply confirm that no data is held.
            </p>

            <h4 className="fw-bold mt-4 text-dark">7. Children's Privacy</h4>
            <p className="text-secondary">
                This service is not intended for children under the age of 13. We do not knowingly collect or store
                any information from minors.
            </p>

            <h4 className="fw-bold mt-4 text-dark">8. Policy Updates</h4>
            <p className="text-secondary">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with a
                new “Last Updated” date.
            </p>

            <h4 className="fw-bold mt-4 text-dark">9. Contact Us</h4>
            <p className="text-secondary">
                For questions or concerns regarding this Privacy Policy, contact us at:
                <br />
                <a
                    href="mailto:amnijam60@gmail.com?subject=Privacy%20Policy%20Inquiry"
                    className="text-primary"
                >
                    amnijam60@gmail.com
                </a>
            </p>

            <hr className="mt-5" />
            <p className="text-center text-muted small">
                © {new Date().getFullYear()} YouTube Thumbnail Downloader. All Rights Reserved.
            </p>
        </div>
    );
}

export default PrivacyPolicy;
