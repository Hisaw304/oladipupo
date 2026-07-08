import {
  FaReact,
  FaLaravel,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss, SiPhp, SiShadcnui } from "react-icons/si";

export default function TechStack() {
  const stack = [
    {
      name: "Laravel",
      icon: <FaLaravel />,
      desc: "Robust PHP framework for scalable backend systems.",
    },
    {
      name: "PHP",
      icon: <SiPhp />,
      desc: "Server-side scripting language powering secure web applications.",
    },
    {
      name: "React",
      icon: <FaReact />,
      desc: "Building dynamic and interactive user interfaces.",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      desc: "Server-side rendering and optimized web applications.",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      desc: "Utility-first CSS framework for fast, responsive interfaces.",
    },
    {
      name: "shadcn/ui",
      icon: <SiShadcnui />,
      desc: "Accessible, beautifully designed React components built on Radix UI.",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      desc: "Responsive UI components and flexible grid layouts.",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      desc: "The core language for creating dynamic web experiences.",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      desc: "Semantic markup for modern, accessible websites.",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      desc: "Modern styling with responsive layouts and animations.",
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
