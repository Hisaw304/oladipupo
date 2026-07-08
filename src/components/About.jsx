export default function About() {
  return (
    <section id="about" className="about-container px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Top Label */}
        <p className="about-label">— ABOUT ME —</p>

        {/* Title */}
        <h2 className="about-title">
          What <span>I BUILD</span>
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-12 items-center mt-12">
          {/* LEFT (IMAGE) */}
          <div className="about-image-wrapper mx-auto md:mx-0">
            <span className="about-active">
              <span className="dot"></span> ACTIVE
            </span>

            <img src="/about.jpg" alt="Joel" className="about-image" />
          </div>

          {/* RIGHT (TEXT) */}
          <div>
            <p className="about-subtitle">• FULL STACK DEVELOPER</p>

            <h3 className="about-heading">
              Building scalable digital products with a focus on{" "}
              <span>performance</span> and modern web technologies.
            </h3>

            <p className="about-text mt-4">
              I’m a full stack developer based in Lagos, Nigeria, passionate
              about building digital products that are both functional and
              impactful. I focus on creating smooth user experiences, writing
              maintainable code, and developing scalable systems that support
              long-term growth.
            </p>

            {/* Info */}
            <div className="about-info mt-6">
              <div>
                <p className="info-label">Location</p>
                <p className="info-value">Lagos, Nigeria</p>
              </div>

              <div>
                <p className="info-label">Status</p>
                <p className="info-value">Open to Work</p>
              </div>
            </div>

            {/* Tools */}
            <div className="about-tools mt-6">
              {[
                "Laravel",
                "React",
                "Next.js",
                "Bootstrap",
                "HTML",
                "CSS",
                "JavaScript",
                "Tailwind",
              ].map((tool) => (
                <span key={tool} className="tool-tag">
                  {tool}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a href="#connect" className="about-cta mt-6 inline-block">
              Get in touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
