import {
  FaReact,
  FaLaravel,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function TechStack() {
  const stack = [
    {
      name: "Laravel",
      icon: <FaLaravel />,
      desc: "Robust PHP framework for scalable backend systems.",
    },
    {
      name: "React",
      icon: <FaReact />,
      desc: "Building dynamic and interactive user interfaces.",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      desc: "Server-side rendering and optimized web apps.",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      desc: "Responsive UI components and layout system.",
    },
    {
      name: "HTML",
      icon: <FaHtml5 />,
      desc: "Structured and semantic web foundations.",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      desc: "Modern styling with responsive design techniques.",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      desc: "Core language for dynamic web functionality.",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      desc: "Utility-first CSS for fast UI development.",
    },
  ];

  return (
    <section id="skills" className="tech-container px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="tech-label">— INVENTORY —</p>

        <h2 className="tech-title">
          Tech <span>Stack</span>
        </h2>

        <h3 className="tech-heading mt-6">
          Building With <span>Tools That Scales</span>
        </h3>

        <p className="tech-text mt-4">
          I work across modern frontend and backend technologies to build
          scalable, high-performance applications. My stack is carefully chosen
          to ensure flexibility, maintainability, and speed — allowing me to
          deliver seamless user experiences while keeping systems efficient and
          future-proof.
        </p>

        <div className="tech-grid mt-12">
          {stack.map((tech) => (
            <div key={tech.name} className="tech-card">
              <div className="tech-logo">{tech.icon}</div>

              <h4 className="tech-name">{tech.name}</h4>
              <p className="tech-desc">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
