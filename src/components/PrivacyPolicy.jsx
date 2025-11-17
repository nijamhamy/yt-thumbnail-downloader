
function PrivacyPolicy() {
    return (
        <div className="container mt-5 pt-5 text-light">
            <h2 className="fw-bold mb-4 text-dark ">Privacy Policy</h2>

            <p className="text-secondary">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <p className="text-secondary">
                Thank you for using our YouTube Thumbnail Downloader tool. Your privacy is extremely important to us.
                This Privacy Policy outlines the types of information we do and do not collect, how it is used, and your rights regarding your data.
            </p>

            <h4 className="fw-semibold mt-4 text-secondary"> Information We Do NOT Collect</h4>
            <p className="text-secondary">
                We do <strong>not</strong> collect or store any personal data, including names, emails, or browsing history.
                This tool works entirely on the client-side (in your browser), and your interaction with YouTube URLs stays on your device.
            </p>

            <h4 className="fw-semibold mt-4 text-secondary"> Log Data</h4>
            <p className="text-secondary">
                Like most web apps, we may automatically receive basic log data such as
                your browser type, IP address, and the date/time of your visit. This data is used only to maintain
                the security and performance of the site and is not linked to any personal information.
            </p>

            <h4 className="fw-semibold mt-4 text-secondary"> Cookies and Third-Party Services</h4>
            <p className="text-secondary">
                We may use third-party service providers, including Google AdSense, to serve ads on our website.
            </p>
            <p className="text-secondary">
                <strong>Google may use cookies</strong> to serve personalized ads based on your visits to this and other websites.
                You can opt out of personalized advertising by visiting Google's Ads Settings page.
            </p>

            <h4 className="fw-semibold mt-4 text-secondary"> Google AdSense & Advertising</h4>
            <p className="text-secondary">
                This website displays ads through Google AdSense. Third-party vendors, including Google, use cookies to serve ads
                based on your prior visits to this site or other sites on the Internet.
            </p>
            <p className="text-secondary">
                Users may opt out of personalized advertising through <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="link-light">Google Ads Settings</a>.
            </p>

            <h4 className="fw-semibold mt-4 text-secondary"> External Links</h4>
            <p className="text-secondary">
                This website may contain links to external sites. We are not responsible for the content or privacy practices of third-party websites.
            </p>

            <h4 className="fw-semibold mt-4 text-secondary"> Children’s Privacy</h4>
            <p className="text-secondary">
                Our website is not intended for children under 13. We do not knowingly collect personal data from children.
            </p>

            <h4 className="fw-semibold mt-4 text-secondary"> Changes to This Privacy Policy</h4>
            <p className="text-secondary">
                We reserve the right to update or change our Privacy Policy at any time. Any updates will be posted on this page with a revised update date.
            </p>

            <h4 className="fw-semibold mt-4 text-secondary"> Contact Us</h4>
            <p className="text-secondary">
                If you have any questions about this Privacy Policy, you can contact us at:
                <br />
                <a
                    href="mailto:amnijam60@gmail.com?subject=Support%20Request&body=Hello%20Mohammad,%0A%0AI need assistance regarding..."
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
