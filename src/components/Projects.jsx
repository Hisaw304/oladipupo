import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import logistics from "../assets/logistics.png";
import healthcare from "../assets/healthcare.png";
import gymwear from "../assets/gymwear.png";
import lawfirm from "../assets/lawfirm.png";
import imagetools from "../assets/imagetools.png";
import dancebooking from "../assets/dancebooking.png";

// Assign the imported images to your existing projects array
const projectImages = [
  healthcare,
  logistics,
  gymwear,
  lawfirm,
  imagetools,
  dancebooking,
];

const projects = [
  {
    id: 1,
    title: "Healthcare Clinic Website",
    stack: ["Next.js", "Laravel", "Tailwind CSS", "Cloudinary"],
    image: projectImages[1],
    link: "https://heritagehealthcare.co.uk/",
    description:
      "A modern healthcare website that enables patients to explore medical services, learn about specialists, schedule appointments, and access important clinic information through an intuitive, responsive, and accessible user experience.",
  },

  {
    id: 2,
    title: "Logistics Management Website",
    stack: ["React", "Laravel", "MySQL", "Tailwind CSS", "Cloudinary"],
    image: projectImages[0],
    link: "https://moromuboexpresslogistics.com/",
    description:
      "A logistics management platform built to streamline shipment tracking, customer requests, fleet coordination, and delivery management. Designed with a fast, responsive interface that helps businesses manage operations efficiently while providing customers with real-time updates.",
  },

  {
    id: 3,
    title: "Gym Wear E-commerce Platform",
    stack: ["React", "Laravel", "MySQL", "Tailwind CSS", "Stripe"],
    image: projectImages[2],
    link: "https://primewears.vercel.app/",
    description:
      "A full-featured fitness apparel e-commerce platform with secure online payments, customer authentication, order tracking, wishlists, customer dashboards, and a powerful admin dashboard for managing products, orders, and inventory.",
  },

  {
    id: 4,
    title: "Law Firm Website",
    stack: ["React", "Laravel", "Tailwind CSS", "MySQL"],
    image: projectImages[3],
    link: "https://seasidepartners.org/",
    description:
      "A professional law firm website focused on building trust and generating client inquiries. It features attorney profiles, practice areas, consultation booking, and a custom article management system that allows administrators to publish legal resources and updates.",
  },

  {
    id: 5,
    title: "AI Image Tools Platform",
    stack: ["Next.js", "Supabase", "Cloudinary", "Tailwind CSS"],
    image: projectImages[4],
    link: "https://freshmindstudio.vercel.app/",
    description:
      "A SaaS platform providing AI-powered image utilities including background removal, image compression, and optimization. Built with performance, scalability, and an intuitive workflow to help businesses and creators process images quickly.",
  },

  {
    id: 6,
    title: "Dance Class & Show Booking Platform",
    stack: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    image: projectImages[5],
    link: "https://dxbentertainment.vercel.app/",
    description:
      "A complete dance academy and event booking platform where users can register for classes, reserve show tickets, manage bookings, and receive updates. The platform also includes an administrative dashboard for scheduling classes, events, and managing participants.",
  },
];
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="max-w-6xl mx-auto">
          {/* <div className="-card contact-container"> */}
          {/* <div className="contact-grid"></div> */}

          <p className="tech-label">— PROJECTS —</p>

          <h2 className="contact-title">
            Selected <span>Projects</span>
          </h2>

          <p className="contact-intro">
            Explore a selection of websites and web applications I've designed
            and developed for businesses across different industries, combining
            modern design, scalable architecture, and high-performance user
            experiences.
          </p>
          {/* </div> */}
        </div>

        <motion.div
          className="projects-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card"
              variants={item}
              whileHover={{ y: -8 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image"
              >
                <img src={projectImages[index]} alt={project.title} />

                <div className="project-overlay">
                  <ArrowUpRight size={34} />
                </div>
              </a>

              <div className="project-content">
                <h3>{project.title}</h3>

                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <p>{project.description}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
