import Image from "next/image";
import { hero, site } from "@/content/portfolio";

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__top">
        <div className="hero__copy">
          <p data-reveal className="hero__eyebrow mono">
            {hero.eyebrow}
          </p>
          <h1 data-reveal className="hero__title">
            {hero.headline[0]}
            <br />
            <span>{hero.headline[1]}</span>
          </h1>
        </div>

        <div data-reveal className="hero__frame">
          <Image
            className="hero__photo"
            src="/profile.webp"
            alt="Portrait of Muhammad Rokanuzzaman Mollah"
            width={1200}
            height={1200}
            sizes="340px"
            priority
          />
        </div>
      </div>

      <div data-reveal className="hero__bottom">
        <p className="hero__intro">{hero.intro}</p>
        {site.available && (
          <p className="hero__badge mono">{hero.badge}</p>
        )}
      </div>

      <div className="hero__scroll mono" aria-hidden="true">
        SCROLL ↓
      </div>
    </header>
  );
}
