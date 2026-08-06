import { aboutBody, principles } from "@/data/about";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <Reveal>
          <p className={styles.lead}>{aboutBody.lead}</p>
          {aboutBody.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal className={styles.principles}>
          {principles.map((principle) => (
            <div key={principle.label} className={styles.principle}>
              <p className={styles.principleLabel}>{principle.label}</p>
              <div className={styles.principleTitle}>{principle.title}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
