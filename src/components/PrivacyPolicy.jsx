function PrivacyPolicy() {
    return (
        <div className="container mt-5 pt-5 text-light">
            <h2 className="fw-bold mb-4 text-dark">Privacy Policy</h2>

            <p className="text-secondary">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <p className="text-secondary">
                Welcome to <strong>YouTube Thumbnail Downloader HD</strong>. Your privacy is very important to us.
                This Privacy Policy explains what information we collect, what we don't collect, and how your data is handled.
            </p>

            {/* SECTION 1 */}
            <h4 className="fw-semibold mt-4 text-secondary">Information We Do NOT Collect</h4>
            <p className="text-secondary">
                We do <strong>NOT</strong> collect:
                <br />– Name / Email / Personal details
                <br />– YouTube login or account information
                <br />– Thumbnail download history
                <br />– Stored URLs
                <br /><br />
                All processing happens directly inside your browser. No thumbnails or URLs are stored on our servers.
            </p>

            {/* SECTION 2 */}
            <h4 className="fw-semibold mt-4 text-secondary">Log Data</h4>
            <p className="text-secondary">
                We may receive basic technical data such as your:
                <br />– IP address
                <br />– Browser type
                <br />– Device information
                <br />– Date & time of visit
                <br /><br />
                This data is only used for security and analytics and is not personally identifiable.
            </p>

            {/* SECTION 3 */}
            <h4 className="fw-semibold mt-4 text-secondary">Cookies and Third-Party Services</h4>
            <p className="text-secondary">
                We use Google AdSense and other third-party services that may use cookies or tracking technologies
                to provide personalized ads.
            </p>

            <p className="text-secondary">
                You can disable personalized ads here:
                <br />
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="link-light">
                    Google Ads Settings
                </a>
            </p>

            {/* SECTION 4 */}
            <h4 className="fw-semibold mt-4 text-secondary">Google AdSense Disclosure</h4>
            <p className="text-secondary">
                Google and third-party vendors use cookies to:
                <br />– Display ads
                <br />– Measure engagement
                <br />– Avoid repeated ads
            </p>
            <p className="text-secondary">
                To learn more about how Google uses information:
                <br />
                <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="link-light">
                    https://policies.google.com/technologies/ads
                </a>
            </p>

            {/* SECTION 5 */}
            <h4 className="fw-semibold mt-4 text-secondary">External Links</h4>
            <p className="text-secondary">
                Our website may contain links to external websites. We are not responsible for the content or privacy practices
                of those sites.
            </p>

            {/* SECTION 6 */}
            <h4 className="fw-semibold mt-4 text-secondary">Copyright & YouTube Content</h4>
            <p className="text-secondary">
                This tool does <strong>not store or host any YouTube videos or images</strong>. It only retrieves public thumbnails
                using the YouTube public image endpoint. All rights remain with their respective owners.
            </p>

            {/* SECTION 7 */}
            <h4 className="fw-semibold mt-4 text-secondary">Your Rights (GDPR / CCPA)</h4>
            <p className="text-secondary">
                You have the right to:
                <br />– Request information about any data we may hold
                <br />– Request data deletion
                <br />– Opt-out of cookies & tracking
                <br /><br />
                Since we do not store personal information, most requests will simply confirm that no data exists.
            </p>

            {/* SECTION 8 */}
            <h4 className="fw-semibold mt-4 text-secondary">Children’s Privacy</h4>
            <p className="text-secondary">
                This service is not intended for children under 13. We do not knowingly collect personal data from minors.
            </p>

            {/* SECTION 9 */}
            <h4 className="fw-semibold mt-4 text-secondary">Changes to This Privacy Policy</h4>
            <p className="text-secondary">
                We may update this Privacy Policy at any time. Any changes will be posted here with a new “Last Updated” date.
            </p>

            {/* SECTION 10 */}
            <h4 className="fw-semibold mt-4 text-secondary">Contact Us</h4>
            <p className="text-secondary">
                If you have any questions, please contact us:
                <br />
                <a
                    href="mailto:amnijam60@gmail.com?subject=Privacy%20Policy%20Inquiry"
                    className="link-dark"
                >
                    amnijam60@gmail.com
                </a>
            </p>

            <hr className="mt-5" />
            <p className="text-center text-muted small">
                © {new Date().getFullYear()} YouTube Thumbnail Downloader. All rights reserved.
            </p>
        </div>
    );
}

export default PrivacyPolicy;
