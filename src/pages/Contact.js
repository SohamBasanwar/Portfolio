import React, { useState } from "react";
import Header from "../components/Header";
import emailjs from "@emailjs/browser";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill out all fields.");
            return;
        }

        setIsSubmitting(true);

        try {
            await emailjs.send(
                "portfolio", // Your Service ID
                "template_y2ahig6", // Your Template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                "9DIDUs9yUhApjRZiQ" // Your Public Key
            );

            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" }); // Reset form
            setIsSubmitted(true);
        } catch (error) {
            console.error("Failed to send the message:", error);
            alert("Failed to send the message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Header />
            <div className="contact">
                <div className="container">
                    <div className="row pt-5 mb-3">
                        <div className="col-md-6 mb-3 p-5 n-box2" id="contact">
                            <h3 className="font-bold">Contact Me</h3>
                            <hr />
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Your Name"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Your Email"
                                />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-control"
                                    rows={8}
                                    placeholder="Your Message"
                                />
                                <button
                                    className="primary-button mt-3"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Sending..." : "Submit"}
                                </button>
                            </form>
                            {isSubmitted && (
                                <p className="success-message mt-3">
                                    Thank you! Your message has been sent.
                                </p>
                            )}
                        </div>
                        <div className="col-md-6">
                            <img
                                src="/images/BoyContact.png"
                                alt="A boy pointing to the left and the upper right corner towards the header icon."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
