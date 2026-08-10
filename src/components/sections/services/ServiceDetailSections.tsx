import type { ServiceDetail } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./ServiceDetailSections.module.css";

/** Body of a single service detail page: lead, inclusions, process, audience. */
export function ServiceDetailSections({ detail }: { detail: ServiceDetail }) {
  return (
    <>
      <section className={styles.leadSection}>
        <Reveal>
          <p className={styles.lead}>{detail.lead}</p>
        </Reveal>
      </section>

      <section className={styles.includes}>
        <div className="shell">
          <SectionHeading
            eyebrow="Scope"
            heading={detail.includesHeading}
            tone="light"
          />
          <div className={styles.grid}>
            {detail.includes.map((item) => (
              <Reveal as="article" key={item.title} className={styles.cell}>
                <h3 className={styles.cellTitle}>{item.title}</h3>
                <p className={styles.cellBody}>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className="shell">
          <SectionHeading
            eyebrow="Protocol"
            heading={detail.processHeading}
            tone="dark"
          />
          <ol className={styles.steps}>
            {detail.process.map((step) => (
              <Reveal as="li" key={step.step} className={styles.step}>
                <span className={styles.stepIndex}>{step.step}</span>
                <div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepBody}>{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <p className={styles.audience}>{detail.audience}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
