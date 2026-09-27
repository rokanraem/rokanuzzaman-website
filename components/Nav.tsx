"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/content/portfolio";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // The panel is a CSS-driven overlay that only exists below the nav
  // breakpoint; if the viewport grows past it while open, drop the state so
  // the desktop bar doesn't come back in an "open" configuration.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="nav" data-open={open}>
      <a href="#top" className="nav__brand mono" onClick={() => setOpen(false)}>
        {site.monogram}
        <span>_</span>
      </a>

      <button
        type="button"
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="nav-links"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div id="nav-links" className="nav__links mono">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav__link"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a href="#contact" className="nav__cta" onClick={() => setOpen(false)}>
          CONTACT
        </a>
      </div>
    </nav>
  );
}
