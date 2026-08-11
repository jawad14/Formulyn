import { mandates, practiceSection } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./PracticeSection.module.css";

export function PracticeSection() {
  return (
    <section className={`${styles.section} edgeSweep`}>
      <div className="shell scrollSettle">
        <SectionHeading
          tone="light"
          eyebrow={practiceSection.eyebrow}
          heading={practiceSection.heading}
          intro={practiceSection.intro}
          introMax="400px"
          gap="clamp(28px, 3.5vw, 44px)"
        />

        <div className={styles.grid}>
          {mandates.map((mandate, index) => (
            <Reveal
              key={mandate.index}
              className={styles.cell}
              delay={index * 90}
            >
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
