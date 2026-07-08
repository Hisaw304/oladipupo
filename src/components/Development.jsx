export default function Development() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Requirement Analysis & Architecture Design",
      desc: "I start by deeply understanding the project goals, business requirements, and user expectations. This phase involves research, planning, and structuring a scalable architecture that ensures long-term flexibility, performance, and maintainability across the system.",
    },
    {
      phase: "Phase 2",
      title: "Development & Implementation",
      desc: "During development, I focus on writing clean, efficient, and scalable code using modern technologies. I ensure that both frontend and backend systems are well-structured, responsive, and optimized to deliver a seamless and engaging user experience.",
    },
    {
      phase: "Phase 3",
      title: "Testing, Optimization & Deployment",
      desc: "Before deployment, I thoroughly test the application to identify and resolve issues. I optimize performance, improve responsiveness, and ensure stability. Once everything is refined, I deploy and continuously monitor the system for reliability and future improvements.",
    },
  ];

  return (
    <section className="dev-container px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p className="dev-label">— HOW I BUILD SYSTEMS —</p>

        {/* Title */}
        <h2 className="dev-title">
          My Development <span>Approach</span>
        </h2>

        {/* Heading */}
        <h3 className="dev-heading-top mt-6">
          Turning Ideas Into <span>Scalable Solutions</span>
        </h3>

        {/* Paragraph */}
        <p className="dev-text-top mt-4">
          My development process is structured to ensure efficiency, clarity,
          and long-term scalability. From understanding requirements to
          deploying optimized solutions, every phase is carefully executed to
          deliver high-quality applications that perform reliably and grow with
          user needs.
        </p>

        {/* Cards */}
        <div className="dev-grid mt-12">
          {phases.map((item, index) => (
            <div key={index} className="dev-card">
              <span className="dev-phase">{item.phase}</span>

              <h3 className="dev-heading">{item.title}</h3>
              <p className="dev-text">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
