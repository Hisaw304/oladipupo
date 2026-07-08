import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer-container mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Branding */}
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold tracking-wide">
            <span className="text-[var(--primary-black)]">JOEL </span>
            <span className="logo-last">OLADIPUPO</span>
          </h1>
          <p className="text-xs text-[var(--medium-gray)] mt-1">
            — Full Stack Developer —
          </p>

          <p className="footer-text mt-4">
            Building scalable web applications with modern technologies.
            Passionate about clean code, performance, and user experience.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="flex flex-col gap-3 mt-4">
            {[
              "about",
              "skills",
              "experience",
              "projects",
              "reviews",
              "connect",
            ].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="footer-link">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="footer-heading">Connect</h2>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/oladipupo_15/"
              className="social-icon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/Olatigbejoel15/"
              className="social-icon"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom text-center py-4">
        <p className="text-xs text-[var(--medium-gray)]">
          © {new Date().getFullYear()} Joel Oladipupo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
