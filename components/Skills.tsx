import { skills } from "@/content/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <h2 id="skills-heading" data-reveal className="eyebrow eyebrow--gap-40 mono">
          CAPABILITIES
        </h2>
        <div className="skills">
          {skills.map((group) => (
            <div key={group.name} data-reveal className="skills__card">
              <h3 className="skills__name">{group.name}</h3>
              <ul className="skills__tags">
                {group.items.map((item) => (
                  <li key={item} className="tag mono">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
