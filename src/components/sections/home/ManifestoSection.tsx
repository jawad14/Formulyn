import { manifesto } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./ManifestoSection.module.css";

export function ManifestoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal as="p" className={styles.eyebrow}>
          {manifesto.eyebrow}
        </Reveal>
        <Reveal as="p" className={styles.statement}>
          {manifesto.lead}{" "}
          <span className={styles.highlight}>{manifesto.highlight}</span>
        </Reveal>
      </div>
    </section>
  );
}
