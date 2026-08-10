import Link from "next/link";
import { mandates } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./ServicesGrid.module.css";

/** The four mandates. Cards with a detail page link through to it. */
export function ServicesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {mandates.map((mandate) => (
          <Reveal as="article" key={mandate.index} className={styles.cell}>
            <p className={styles.index}>{mandate.index}</p>
            <h2 className={styles.title}>{mandate.title}</h2>
            <p className={styles.tagline}>{mandate.tagline}</p>
            <p className={styles.body}>{mandate.body}</p>
            {mandate.href ? (
              <Link href={mandate.href} className={styles.link}>
                Read the detail →
              </Link>
            ) : null}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
