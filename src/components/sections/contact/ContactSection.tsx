import { contactHero } from "@/data/contact";
import { site } from "@/data/site";
import { Stop } from "@/components/ui/Stop";
import { BriefForm } from "./BriefForm";
import styles from "./ContactSection.module.css";

/**
 * Contact masthead and brief intake form. The form itself is a client
 * component (BriefForm) so it can post to /api/leads.
 */
export function ContactSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.grid}>
        <div>
          <p className={styles.eyebrow}>{contactHero.eyebrow}</p>
          <h1 className={styles.heading}>
            {contactHero.heading}
            <Stop />
          </h1>
          <p className={styles.body}>{contactHero.body}</p>
          <div className={styles.details}>
            <a href={`mailto:${site.email}`} className={styles.email}>
              {site.email}
            </a>
            <span className={styles.location}>{site.locationLong}</span>
          </div>
        </div>

        <BriefForm />
      </div>
    </header>
  );
}
