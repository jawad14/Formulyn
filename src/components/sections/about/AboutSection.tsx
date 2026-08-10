import { aboutBody, practiceLedger } from "@/data/about";
import { Reveal } from "@/components/ui/Reveal";
import { Stop } from "@/components/ui/Stop";
import styles from "./AboutSection.module.css";

/** The origin narrative, with the practice ledger set alongside it. */
export function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <Reveal>
          <p className={styles.lead}>{aboutBody.lead}</p>

          <h2 className={styles.heading}>
            {aboutBody.heading}
            <Stop />
          </h2>

          {aboutBody.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal>
          <dl className={styles.ledger}>
            {practiceLedger.map((entry) => (
              <div key={entry.label} className={styles.ledgerRow}>
                <dt className={styles.ledgerLabel}>{entry.label}</dt>
                <dd className={styles.ledgerValue}>{entry.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
