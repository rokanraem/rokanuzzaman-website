import { testimonials } from "@/content/portfolio";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <h2
          id="testimonials-heading"
          data-reveal
          className="eyebrow eyebrow--gap-48 mono"
        >
          WHAT CLIENTS SAY
        </h2>
        <div className="testimonials">
          {testimonials.map((item) => (
            <figure key={item.quote} data-reveal className="testimonial">
              <blockquote>{`“${item.quote}”`}</blockquote>
              <figcaption className="mono">
                {item.who} <span>/</span> {item.org}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
