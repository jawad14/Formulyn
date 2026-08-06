import { briefForm, contactHero } from "@/data/contact";
import { site } from "@/data/site";
import { Stop } from "@/components/ui/Stop";
import styles from "./ContactSection.module.css";

/**
 * Contact masthead and brief intake form.
 *
 * The form is presentational until a handler is wired up — add an `action`
 * (route handler or third-party endpoint) when the backend lands.
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

        <form className={styles.form}>
          <p className={styles.formEyebrow}>{briefForm.eyebrow}</p>

          {/* Labelled via aria-label so each control stays a direct flex
              child and keeps the design's even 18px rhythm. */}
          {briefForm.fields.map((field) => (
            <input
              key={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              aria-label={field.placeholder}
              className={styles.field}
            />
          ))}

          <textarea
            name={briefForm.message.name}
            rows={briefForm.message.rows}
            placeholder={briefForm.message.placeholder}
            aria-label={briefForm.message.placeholder}
            className={styles.textarea}
          />

          <button type="submit" className={styles.submit}>
            {briefForm.submitLabel}
          </button>
        </form>
      </div>
    </header>
  );
}
