import { mandates, practiceSection } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./PracticeSection.module.css";

export function PracticeSection() {
  return (
    <section className={styles.section}>
      <div className="shell">
        <SectionHeading
          tone="light"
          eyebrow={practiceSection.eyebrow}
          heading={practiceSection.heading}
          intro={practiceSection.intro}
          introMax="400px"
          gap="clamp(28px, 3.5vw, 44px)"
        />

        <div className={styles.grid}>
          {mandates.map((mandate) => (
            <Reveal key={mandate.index} className={styles.cell}>
              <p className={styles.index}>{mandate.index}</p>
              <h3 className={styles.title}>{mandate.title}</h3>
              <p className={styles.body}>{mandate.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
