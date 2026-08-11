import { aboutBody, practiceLedger } from "@/data/about";
import { site } from "@/data/site";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Reveal } from "@/components/ui/Reveal";
import { Stop } from "@/components/ui/Stop";
import { LinkedIn } from "@/components/ui/icons";
import styles from "./AboutSection.module.css";

/** The origin narrative, with the practice ledger set alongside it. */
export function AboutSection() {
  return (
    <section className={`${styles.section} edgeSweep`}>
      <div className={`${styles.grid} scrollSettle`}>
        <div>
          <Reveal as="p" className={styles.lead}>
            {aboutBody.lead}
          </Reveal>

          <AnimatedText
            as="h2"
            className={styles.heading}
            text={aboutBody.heading}
            trailing={<Stop />}
            delay={110}
          />

          <Reveal delay={200}>
            {aboutBody.paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}

            {/* The company page. The founder's own profile is linked further
                down the page, so both are named rather than left as
                "LinkedIn" twice over. */}
            <a
              href={site.linkedin}
              className={styles.social}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn className={styles.socialMark} />
              {site.name} on LinkedIn
            </a>
          </Reveal>
        </div>

        <Reveal from="right" delay={160}>
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
