function Contact() {
    return (
        <div className="container mt-5 pt-5" style={{ maxWidth: "700px" }}>
            <h2 className="fw-bold text-center mb-4">Contact Us</h2>

            <p className="text-secondary text-center">
                Have questions, feedback, or need support? We're happy to help!
            </p>

            <div className="card shadow-sm p-4 mt-4">
                <h5 className="fw-semibold mb-3">📩 Email</h5>
                <p className="text-secondary">
                    You can reach us anytime at:
                    <br />
                    <a
                        href="mailto:amnijam60@gmail.com?subject=Support%20Request"
                        className="fw-bold"
                    >
                        amnijam60@gmail.com
                    </a>
                </p>

                <hr />
            </div>

            <p className="text-center text-muted mt-4 small">
                We usually respond within 24-48 hours.
            </p>
        </div>
    );
}

export default Contact;
