import Link from "next/link";
import { industries, industriesCta } from "@/data/industries";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./IndustryGrid.module.css";

export function IndustryGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {industries.map((industry) => (
          <Reveal key={industry.index} className={styles.cell}>
            <p className={styles.index}>{industry.index}</p>
            <h2 className={styles.title}>{industry.title}</h2>
            <p className={styles.body}>{industry.body}</p>
          </Reveal>
        ))}

        <Reveal className={styles.ctaCell}>
          <p className={styles.index}>{industriesCta.index}</p>
          <div>
            <h2 className={styles.title}>{industriesCta.title}</h2>
            <p className={styles.ctaBody}>{industriesCta.body}</p>
            <Link href={industriesCta.cta.href} className={styles.ctaLink}>
              {industriesCta.cta.label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
