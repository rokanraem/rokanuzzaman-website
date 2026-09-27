import { about } from "@/content/portfolio";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container split">
        <p data-reveal className="eyebrow mono">
          ABOUT
        </p>
        <div data-reveal>
          <h2 id="about-heading" className="about__heading">
            {about.heading}
          </h2>
          {about.paragraphs.map((text) => (
            <p key={text} className="about__body">
              {text}
            </p>
          ))}
          <div className="stats">
            {about.stats.map((stat) => (
              <div key={stat.label} className="stats__cell">
                <div className="stats__value">{stat.value}</div>
                <div className="stats__label mono">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="about__highlight">
           <h3>{about.highlight.title}</h3>
            <p>{about.highlight.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
