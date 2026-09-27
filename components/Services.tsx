import { services } from "@/content/portfolio";

export default function Services() {
  return (
    <section
      id="services"
      className="section"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <p data-reveal className="eyebrow eyebrow--gap-16 mono">
          SERVICES
        </p>
        <h2 id="services-heading" data-reveal className="section-title">
          What I do for clients
        </h2>
        <div className="services">
          {services.map((service) => (
            <article key={service.name} data-reveal className="services__row">
              <h3 className="services__name">{service.name}</h3>
              <p className="services__desc">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
