import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Founder, Fintech Startup • United Kingdom",
    initials: "SM",
    text: "Joel was instrumental in bringing our product vision to life. He built a fast, reliable, and polished web platform that not only looked professional but also performed exceptionally well. His communication, technical skill, and attention to detail made him a pleasure to work with.",
  },
  {
    name: "David K.",
    role: "Small Business Owner • Canada",
    initials: "DK",
    text: "Working with Joel was a seamless experience from start to finish. He understood exactly what the business needed, translated it into a clean and modern website, and delivered with a level of quality that exceeded expectations. I’d gladly work with him again.",
  },
  {
    name: "Amina R.",
    role: "Product Manager • UAE",
    initials: "AR",
    text: "Joel combines strong frontend design sense with solid backend execution. He was able to take our requirements and turn them into a user-friendly product that felt both scalable and thoughtfully built. His professionalism stood out throughout the project.",
  },
  {
    name: "Michael T.",
    role: "Startup Founder • United States",
    initials: "MT",
    text: "What impressed me most about Joel was his ability to balance functionality with user experience. He delivered a smooth, responsive application with clean architecture and a refined interface. He’s dependable, efficient, and clearly takes pride in his work.",
  },
  {
    name: "Priya S.",
    role: "Creative Director • India",
    initials: "PS",
    text: "Joel brought structure, clarity, and technical excellence to our web project. He was responsive, solution-oriented, and very easy to collaborate with. The final result felt modern, intuitive, and far more premium than we initially imagined.",
  },
  {
    name: "Daniel O.",
    role: "Operations Lead • Nigeria",
    initials: "DO",
    text: "Joel delivered exactly what we needed — a clean, functional platform that was easy to use and professionally built. He was attentive throughout the process and consistently offered practical solutions whenever challenges came up.",
  },
  {
    name: "Emily J.",
    role: "Brand Consultant • Australia",
    initials: "EJ",
    text: "It’s rare to find a developer who understands both design and technical execution this well. Joel created a polished digital experience that felt intentional from top to bottom. He was reliable, collaborative, and highly detail-oriented.",
  },
  {
    name: "Ahmed L.",
    role: "E-commerce Founder • Saudi Arabia",
    initials: "AL",
    text: "Joel approached the project with a strong sense of ownership and professionalism. He built a responsive and modern web solution that improved both the user experience and the overall presentation of our business online.",
  },
  {
    name: "Grace W.",
    role: "Project Coordinator • South Africa",
    initials: "GW",
    text: "Joel was excellent to work with. He communicated clearly, stayed organized, and delivered work that felt polished and thoughtfully developed. His ability to turn ideas into a smooth digital product was genuinely impressive.",
  },
  {
    name: "Kevin B.",
    role: "Startup Collaborator • Germany",
    initials: "KB",
    text: "Joel brought a calm and professional approach to the project from day one. He delivered clean code, responsive layouts, and a product that felt modern and dependable. I appreciated how easy he was to work with throughout.",
  },
  {
    name: "Fatima H.",
    role: "Business Consultant • Qatar",
    initials: "FH",
    text: "The quality of Joel’s work stood out immediately. He was thoughtful in his implementation, fast in execution, and attentive to both technical performance and visual presentation. The final result exceeded our expectations.",
  },
  {
    name: "Lucas P.",
    role: "Product Founder • Brazil",
    initials: "LP",
    text: "Joel was able to understand our goals quickly and transform them into a refined digital experience. His work was efficient, polished, and clearly built with long-term usability in mind. I would absolutely recommend him.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const getCardClass = (index) => {
    const diff = (index - active + testimonials.length) % testimonials.length;

    if (diff === 0) return "testimonial-card active";
    if (diff === 1) return "testimonial-card next";
    if (diff === testimonials.length - 1) return "testimonial-card prev";
    if (diff === 2) return "testimonial-card next-far";
    if (diff === testimonials.length - 2) return "testimonial-card prev-far";
    return "testimonial-card hidden-card";
  };

  return (
    <section id="testimonials" className="testimonials-section px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="testimonials-label">— TESTIMONIALS —</p>

        <h2 className="testimonials-title">
          What <span>Clients Say</span>
        </h2>

        <p className="testimonials-intro">
          Feedback from founders, business owners, and collaborators I’ve had
          the opportunity to build with across different projects.
        </p>

        <div className="testimonials-slider">
          {testimonials.map((item, index) => (
            <div key={index} className={getCardClass(index)}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={18} />
                ))}
              </div>

              <p className="testimonial-text">{item.text}</p>

              <div className="testimonial-user">
                <div className="testimonial-avatar">{item.initials}</div>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                </div>
              </div>

              <div className="quote-mark">”</div>
            </div>
          ))}
        </div>

        <div className="testimonial-controls">
          <button onClick={prevSlide} aria-label="Previous testimonial">
            <FiChevronLeft size={20} />
          </button>
          <button onClick={nextSlide} aria-label="Next testimonial">
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
