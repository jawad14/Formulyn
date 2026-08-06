import type { CSSProperties } from "react";
import { Stop } from "./Stop";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  eyebrow: string;
  heading: string;
  body?: string;
  /** Heading measure in `ch`, matching the design per page. */
  headingMeasure?: number;
};

/**
 * The dark masthead shared by every interior page
 * (process, industries, journal, about).
 */
export function PageHero({
  eyebrow,
  heading,
  body,
  headingMeasure = 16,
}: PageHeroProps) {
  return (
    <header className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1
          className={styles.heading}
          style={
            { "--heading-measure": `${headingMeasure}ch` } as CSSProperties
          }
        >
          {heading}
          <Stop />
        </h1>
        {body ? <p className={styles.body}>{body}</p> : null}
      </div>
    </header>
  );
}
