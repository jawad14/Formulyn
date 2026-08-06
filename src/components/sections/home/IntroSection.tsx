import { intro } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";
import { Stop } from "@/components/ui/Stop";
import styles from "./IntroSection.module.css";

export function IntroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <Reveal>
          <p className={styles.eyebrow}>{intro.eyebrow}</p>
          <h2 className={styles.heading}>
            {intro.heading}
            <Stop />
          </h2>
        </Reveal>

        <Reveal>
          <p className={styles.lead}>{intro.lead}</p>
          <p className={styles.body}>{intro.body}</p>
          <div className={styles.tags}>
            {intro.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
