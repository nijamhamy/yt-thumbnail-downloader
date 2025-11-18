function Contact() {
    return (
        <div className="container mt-5 pt-5" style={{ maxWidth: "700px" }}>
            <h2 className="fw-bold text-center mb-4 text-primary">Contact Us</h2>

            <p className="text-secondary text-center">
                If you have any questions, feedback, technical issues, or suggestions related to this
                website, we encourage you to contact us. We value every message because it helps us
                improve the platform and continue providing a reliable and user-friendly experience.
            </p>

            <div className="card shadow-sm p-4 mt-4">
                <h5 className="fw-semibold mb-3">Email Support</h5>
                <p className="text-secondary mb-1">
                    For general inquiries, support requests, or feature suggestions, please contact us at:
                </p>

                <a
                    href="mailto:amnijam60@gmail.com?subject=Support%20Request"
                    className="fw-bold"
                >
                    amnijam60@gmail.com
                </a>

                <p className="text-secondary mt-3">
                    When contacting us, please include as much detail as possible so we can assist you
                    effectively. Our support team reviews all emails carefully and provides responses
                    in the order they are received.
                </p>

                <hr />

                <h5 className="fw-semibold mt-3">Response Time</h5>
                <p className="text-secondary">
                    We aim to respond to all messages within 24–48 hours. During peak times, responses
                    may take slightly longer, but we do our best to reply as quickly as possible.
                </p>
            </div>

            <p className="text-center text-muted mt-4 small">
                Thank you for using our platform. Your feedback helps us grow and improve this service.
            </p>
        </div>
    );
}

export default Contact;
