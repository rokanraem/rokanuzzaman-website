export type TimelineEntry = {
  years: string;
  /** Job title or degree. */
  title: string;
  /** Employer or institution. */
  org: string;
};

/**
 * Shared layout for the Experience and Education sections — a label column
 * beside a list of year/role rows.
 */
export default function Timeline({
  id,
  label,
  entries,
}: {
  id: string;
  label: string;
  entries: TimelineEntry[];
}) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-heading`}>
      <div className="container split">
        <h2 id={`${id}-heading`} data-reveal className="eyebrow mono">
          {label}
        </h2>
        <div className="timeline">
          {entries.map((entry) => (
            <article
              key={`${entry.years}-${entry.title}`}
              data-reveal
              className="timeline__row"
            >
              <p className="timeline__years mono">{entry.years}</p>
              <div>
                <h3 className="timeline__title">{entry.title}</h3>
                <p className="timeline__org mono">{entry.org}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
