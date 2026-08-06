import type { CSSProperties } from "react";
import { Reveal } from "./Reveal";
import { Stop } from "./Stop";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  eyebrow: string;
  heading: string;
  intro?: string;
  /** Colour set for the surface the heading sits on. */
  tone: "light" | "dark";
  /** Per-section design values, passed straight through as CSS lengths. */
  headingSize?: string;
  headingMax?: string;
  introMax?: string;
  gap?: string;
};

export function SectionHeading({
  eyebrow,
  heading,
  intro,
  tone,
  headingSize,
  headingMax,
  introMax,
  gap,
}: SectionHeadingProps) {
  const vars = {
    "--heading-size": headingSize,
    "--heading-max": headingMax,
    "--intro-max": introMax,
    "--head-gap": gap,
  } as CSSProperties;

  return (
    <Reveal className={`${styles.head} ${styles[tone]}`} style={vars}>
      <div>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.heading}>
          {heading}
          <Stop />
        </h2>
      </div>
      {intro ? <p className={styles.intro}>{intro}</p> : null}
    </Reveal>
  );
}
