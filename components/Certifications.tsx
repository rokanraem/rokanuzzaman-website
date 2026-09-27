import { certs } from "@/content/portfolio";

export default function Certifications() {
  return (
    <section id="certs" className="section" aria-labelledby="certs-heading">
      <div className="container">
        <h2 id="certs-heading" data-reveal className="eyebrow eyebrow--gap-40 mono">
          CERTIFICATIONS
        </h2>
        <ul className="certs">
          {certs.map((cert) => (
            <li key={cert} data-reveal className="certs__item mono">
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
