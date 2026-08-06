import { phases } from "@/data/process";
import { Reveal } from "@/components/ui/Reveal";
import { Timeline } from "./Timeline";
import styles from "./PhasesSection.module.css";

export function PhasesSection() {
  return (
    <section className={styles.section}>
      <div className="shell">
        <Timeline />

        <div className={styles.grid}>
          {phases.map((phase) => (
            <Reveal key={phase.number} className={styles.cell}>
              <div className={styles.cellHead}>
                <span className={styles.number}>{phase.number}</span>
                <span className={styles.weeks}>{phase.weeks}</span>
              </div>
              <h2 className={styles.title}>{phase.title}</h2>
              <p className={styles.body}>{phase.body}</p>
              <ul className={styles.deliverables}>
                {phase.deliverables.map((deliverable) => (
                  <li key={deliverable} className={styles.deliverable}>
                    <span className={styles.diamond} aria-hidden="true">
                      ◆
                    </span>
                    {"  "}
                    {deliverable}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
