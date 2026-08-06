import Link from "next/link";
import { ctaBanner } from "@/data/contact";
import { Reveal } from "@/components/ui/Reveal";
import { Stop } from "@/components/ui/Stop";
import styles from "./CtaBanner.module.css";

/**
 * Closing call-to-action. Rendered at the foot of every page except
 * /contact, where it would only repeat the page itself.
 */
export function CtaBanner() {
  return (
    <section className={styles.section}>
      <Reveal className={styles.inner}>
        <p className={styles.eyebrow}>{ctaBanner.eyebrow}</p>
        <h2 className={styles.heading}>
          {ctaBanner.heading}
          <Stop />
        </h2>
        <p className={styles.body}>{ctaBanner.body}</p>
        <Link href={ctaBanner.cta.href} className={styles.cta}>
          {ctaBanner.cta.label}
        </Link>
      </Reveal>
    </section>
  );
}
