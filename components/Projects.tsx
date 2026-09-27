import { projects } from "@/content/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <p data-reveal className="eyebrow eyebrow--gap-16 mono">
          SELECTED WORK
        </p>
        <h2 id="projects-heading" data-reveal className="section-title">
          Case studies
        </h2>
        <div className="projects">
          {projects.map((project) => (
            <article key={project.title} data-reveal className="project">
              <div className="project__meta mono">
                <span>{project.tag}</span>
                <span className="project__year">{project.year}</span>
              </div>
              <h3 className="project__title">{project.title}</h3>
              <p className="project__desc">{project.desc}</p>
              <p className="project__result mono">{project.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
