import { useState } from "react";

function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);

    const id = question.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    return (
        <div id={id} className="border rounded p-3 mb-3">
            <h5
                onClick={() => setOpen(!open)}
                style={{ cursor: "pointer" }}
                className="fw-bold d-flex justify-content-between"
            >
                <span>{question}</span>
                <span style={{ transition: "0.3s" }}>{open ? "▲" : "▼"}</span>
            </h5>

            {open && (
                <p className="text-secondary mt-2">
                    {answer}
                </p>
            )}
        </div>
    );
}

export default function FAQ() {
    const faqs = [
        {
            question: "Is downloading YouTube thumbnails allowed?",
            answer:
                "Yes, thumbnails are publicly visible images. You may download them for personal or educational use, but avoid commercial reuse without permission.",
        },
        {
            question: "Does this tool support YouTube Shorts?",
            answer:
                "Yes! You can paste any Shorts URL and our tool will extract the thumbnail instantly.",
        },
        {
            question: "Why is Max Resolution not available sometimes?",
            answer:
                "Some YouTube videos do not generate a 1280x720 thumbnail. So maxresdefault.jpg will not load.",
        },
        {
            question: "Does this tool work on all devices?",
            answer:
                "Yes! It works on PC, Android, iPhone, and tablets without installing anything.",
        },
        {
            question: "Can I use downloaded thumbnails for my videos?",
            answer:
                "You can use them for learning and inspiration, but avoid reusing others' thumbnails for your own videos.",
        },
    ];

    return (
        <div className="mt-5" style={{ maxWidth: "900px", margin: "auto" }}>
            <h2 className="fw-bold mb-4 text-start">Frequently Asked Questions</h2>

            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
}
