function DMCA() {
    return (
        <div className="container mt-5 pt-5" style={{ maxWidth: "850px" }}>
            <h2 className="fw-bold mb-4 text-primary">DMCA Policy</h2>

            <p className="text-muted">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <p className="text-secondary">
                <strong>YouTube Thumbnail Downloader</strong> respects the intellectual property
                rights of all creators and content owners. We operate this website in accordance
                with the Digital Millennium Copyright Act (DMCA) and respond promptly to valid
                copyright infringement notifications.
            </p>

            <h4 className="fw-bold mt-4 text-dark">1. No Storage of Copyrighted Content</h4>
            <p className="text-secondary">
                This website does <strong>not</strong> host, store, or distribute copyrighted content
                of any kind. All images displayed through this service are fetched directly from
                publicly accessible YouTube servers using publicly available URLs.
                We do not modify, copy, or store these files on our servers.
            </p>

            <h4 className="fw-bold mt-4 text-dark">2. Submitting a Valid DMCA Notice</h4>
            <p className="text-secondary">
                If you believe that your copyrighted material is being improperly displayed or
                linked through this website, you may submit a DMCA takedown request.
                To be valid under the DMCA, your notice must include the following information:
            </p>

            <ul className="text-secondary">
                <li>Your full legal name and contact information (email and/or address).</li>
                <li>A clear and complete description of the copyrighted work you claim is infringed.</li>
                <li>The exact URL(s) where the allegedly infringing material appears.</li>
                <li>A statement that you have a good-faith belief that the use is not authorized by the copyright owner.</li>
                <li>A statement, under penalty of perjury, that all information provided is accurate.</li>
                <li>Your physical or electronic signature.</li>
            </ul>

            <p className="text-secondary"><strong>Send all DMCA notices to:</strong></p>
            <p className="text-secondary fw-bold">
                Email:
                <a href="mailto:amnijam60@gmail.com?subject=DMCA%20Notice" className="ms-1">
                    amnijam60@gmail.com
                </a>
            </p>

            <h4 className="fw-bold mt-4 text-dark">3. Counter-Notice Procedure</h4>
            <p className="text-secondary">
                If you believe a takedown request was submitted in error, you may file a counter-notice.
                Your counter-notice must also follow DMCA requirements and include your contact details,
                identification of the removed material, a good-faith statement of non-infringement,
                and consent to jurisdiction of applicable courts.
            </p>

            <h4 className="fw-bold mt-4 text-dark">4. Repeat Infringers</h4>
            <p className="text-secondary">
                In accordance with DMCA requirements, users who repeatedly submit or access infringing content
                may be restricted or permanently blocked from using this service.
            </p>

            <h4 className="fw-bold mt-4 text-dark">5. Our Commitment</h4>
            <p className="text-secondary">
                We take copyright protection seriously and comply with all properly submitted DMCA notices.
                If you believe any content is being misused, we encourage you to contact us immediately so we
                can review and take appropriate action.
            </p>

            <hr className="mt-5" />
            <p className="text-center text-muted small">
                © {new Date().getFullYear()} YouTube Thumbnail Downloader — DMCA Compliance Policy.
            </p>
        </div>
    );
}

export default DMCA;
