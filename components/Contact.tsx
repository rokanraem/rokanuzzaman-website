import { contact, site } from "@/content/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="contact__glow" aria-hidden="true" />
      <div className="container contact__inner">
        <p data-reveal className="eyebrow eyebrow--gap-24 mono">
          CONTACT
        </p>
        <h2 id="contact-heading" data-reveal className="contact__heading">
          {contact.heading[0]}
          <br />
          <span>{contact.heading[1]}</span>
        </h2>
        <div data-reveal className="contact__actions">
          <a href={`mailto:${site.email}`} className="btn-primary">
            {site.email}
          </a>
          <a
            href={site.linkedin}
            className="btn-ghost mono"
            {...(site.linkedin.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            LINKEDIN
          </a>
        </div>
        <footer className="footer mono">
          <span>
            © {new Date().getFullYear()}{" "}
            <a
              href={site.footerLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.footerBrand}
            </a>
          </span>
        </footer>
      </div>
    </section>
  );
}
