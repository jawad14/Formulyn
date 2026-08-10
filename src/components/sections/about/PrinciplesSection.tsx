import { principles, principlesSection } from "@/data/about";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./PrinciplesSection.module.css";

/** The four commitments, on the dark surface. */
export function PrinciplesSection() {
  return (
    <section className={styles.section}>
      <div className="shell">
        <SectionHeading
          eyebrow={principlesSection.eyebrow}
          heading={principlesSection.heading}
          tone="dark"
        />

        <div className={styles.grid}>
          {principles.map((principle) => (
            <Reveal as="article" key={principle.index} className={styles.cell}>
              <p className={styles.index}>{principle.index}</p>
              <h3 className={styles.name}>{principle.name}</h3>
              <p className={styles.line}>{principle.line}</p>
              <p className={styles.body}>{principle.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
