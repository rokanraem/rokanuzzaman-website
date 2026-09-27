import { ticker } from "@/content/portfolio";

/**
 * Two identical copies of the list scroll left by exactly 50% of the track,
 * which lands the second copy where the first started — a seamless loop.
 */
export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track mono">
        {[0, 1].map((copy) =>
          ticker.map((item) => (
            <span key={`${copy}-${item}`}>
              {item} <span className="ticker__sep">·</span>
            </span>
          )),
        )}
      </div>
    </div>
  );
}
