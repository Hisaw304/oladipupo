import { useEffect, useState } from "react";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer {Backend Cracked}";

  useEffect(() => {
    let i = 0;
    let isDeleting = false;

    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseTime = 1200;

    const handleTyping = () => {
      if (!isDeleting) {
        setText(fullText.slice(0, i + 1));
        i++;

        if (i === fullText.length) {
          isDeleting = true;
          setTimeout(handleTyping, pauseTime);
          return;
        }
      } else {
        setText(fullText.slice(0, i - 1));
        i--;

        if (i === 0) {
          isDeleting = false;
        }
      }

      setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    };

    handleTyping();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center hero-container px-6">
      {/* Background Grid */}
      <div className="hero-grid"></div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div className="hero-left">
          {/* Availability */}
          <div className="hero-ava flex items-center gap-2 mb-6 fade-in">
            <span className="status-dot"></span>
            <p className="text-sm text-[var(--medium-gray)]">
              Available for projects
            </p>
          </div>

          {/* Name */}
          <h1 className="hero-title fade-in delay-1">
            <span className="block text-[var(--primary-black)]">JOEL</span>
            <span className="block hero-last">OLADIPUPO</span>
          </h1>

          {/* Typewriter */}
          <p className="mt-3 text-sm text-[var(--medium-gray)] fade-in delay-2">
            — {text}
            <span className="cursor">|</span> —
          </p>

          {/* Paragraph */}
          <p className="hero-text mt-6 fade-in delay-3">
            I build modern, scalable web applications with a focus on clean
            architecture and performance. Passionate about creating seamless
            user experiences and impactful digital products.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8 flex-wrap fade-in delay-4">
            <a href="#connect" className="btn-primary">
              Collaboration
            </a>
            <a href="/resume.pdf" className="btn-secondary">
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT SOCIALS */}
        <div className="hero-socials fade-in delay-5">
          <a
            href="https://www.instagram.com/oladipupo_15/"
            className="social-icon"
          >
            <FaInstagram />
          </a>
          <a href="https://github.com/Olatigbejoel15/" className="social-icon">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
