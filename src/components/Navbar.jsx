import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="navbar-glass fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold tracking-wide">
            <span className="text-[var(--primary-black)]">JOEL </span>
            <span className="logo-last">OLADIPUPO</span>
          </h1>
          <p className="text-xs text-[var(--medium-gray)] mt-1">
            — Full Stack Developer —
          </p>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {[
            "about",
            "skills",
            "experience",
            "projects",
            "reviews",
            "connect",
          ].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="nav-link">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div
          className={`hamburger flex md:hidden ${open ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-menu md:hidden ${open ? "show" : ""}`}>
        {[
          "about",
          "skills",
          "experience",
          "projects",
          "reviews",
          "connect",
        ].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="mobile-link"
            onClick={() => setOpen(false)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}
