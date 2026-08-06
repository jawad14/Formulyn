import Link from "next/link";
import { footerBlurb, footerPracticeLinks, site } from "@/data/site";
import { Stop } from "@/components/ui/Stop";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.wordmark}>
            {site.name}
            <Stop />
          </div>
          <p className={styles.blurb}>{footerBlurb}</p>
          <div className={styles.status}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span className={styles.statusLabel}>{site.availability}</span>
          </div>
        </div>

        <div>
          <h2 className={styles.columnTitle}>Practice</h2>
          <div className={styles.columnList}>
            {footerPracticeLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.columnLink}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className={styles.columnTitle}>Consultancy</h2>
          <div className={styles.columnList}>
            <span className={styles.columnText}>{site.locationLong}</span>
            <a href={`mailto:${site.email}`} className={styles.goldLink}>
              {site.email}
            </a>
            <Link href="/contact" className={styles.goldLink}>
              Book a 30-min discovery call →
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.legal}>{site.copyright}</div>
    </footer>
  );
}
