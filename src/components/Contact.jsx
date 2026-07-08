import { useState } from "react";
import { FiMail, FiMapPin, FiMessageCircle, FiSend } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!form.email || !form.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("Message sent successfully.");
      setForm({
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus(error.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="connect" className="contact-section px-6 py-24 ">
      <div className="max-w-6xl mx-auto">
        <div className="contact-card contact-container">
          <div className="contact-grid"></div>
          {/* Heading */}
          <p className="contact-label">— CONTACT —</p>

          <h2 className="contact-title">
            Let’s <span>Work Together</span>
          </h2>

          <p className="contact-intro">
            Have a project in mind, a collaboration opportunity, or just want to
            say hello? Feel free to reach out.
          </p>

          {/* Form */}
          <form className="contact-form mt-10" onSubmit={handleSubmit}>
            <div className="input-group">
              <FiMail className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group textarea-group">
              <FiSend className="input-icon textarea-icon" />
              <textarea
                name="message"
                placeholder="Your message"
                rows="6"
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="contact-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="contact-status">{status}</p>}
          </form>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-info-item">
              <FiMail className="contact-info-icon" />
              <div>
                <p className="contact-info-label">Email</p>
                <a
                  href="mailto:joel@example.com"
                  className="contact-info-value"
                >
                  olatigbejoel15@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <FiMessageCircle className="contact-info-icon" />
              <div>
                <p className="contact-info-label">WhatsApp</p>
                <a
                  href="https://wa.me/2347040299438"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-value"
                >
                  +234 70 4029 9438
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <FiMapPin className="contact-info-icon" />
              <div>
                <p className="contact-info-label">Address</p>
                <p className="contact-info-value">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
