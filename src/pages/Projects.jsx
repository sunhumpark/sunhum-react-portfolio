const projects = [
  {
    title: "React Personal Portfolio",
    tag: "React · Vite",
    image: `${import.meta.env.BASE_URL}project1.png`,
    desc: "Designed and developed a responsive multi-page portfolio using reusable React components and React Router. My role included page structure, navigation, styling, and deployment preparation.",
    outcome: "A clean portfolio that presents my education, projects, services, and contact information."
  },
  {
    title: "Java Dice Game",
    tag: "Java · OOP",
    image: `${import.meta.env.BASE_URL}project2.png`,
    desc: "Built a console-based four-dice game with random dice rolls, win/loss rules, and a goal-number mechanic. I implemented the program logic, tested outcomes, and managed the code with GitHub.",
    outcome: "A working Java program that applies conditionals, loops, methods, and random values."
  },
  {
    title: "Interactive React Forms",
    tag: "React · JavaScript",
    image: `${import.meta.env.BASE_URL}project3.png`,
    desc: "Created controlled inputs, dropdowns, checkboxes, validation, and multi-field form components while practicing React state management and event handling.",
    outcome: "Reusable form components that validate and capture user input."
  }
];

export default function Projects() {
  return (
    <section className="page">
      <h1>Projects</h1>

      <p className="lead">
        A selection of projects that demonstrate my growing software-development skills.
      </p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={project.title}>

            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            ) : (
              <div className="project-placeholder">
                Project {index + 1}
              </div>
            )}

            <p className="project-tag">{project.tag}</p>

            <h2>{project.title}</h2>

            <p>{project.desc}</p>

            <p>
              <strong>Outcome:</strong> {project.outcome}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}