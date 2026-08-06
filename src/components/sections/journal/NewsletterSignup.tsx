import { newsletter } from "@/data/journal";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./NewsletterSignup.module.css";

/**
 * Monthly bench-notes signup. The form is presentational until a mailing
 * provider is wired up — point `action` at the endpoint when that lands.
 */
export function NewsletterSignup() {
  return (
    <Reveal className={styles.panel}>
      <div>
        <h2 className={styles.heading}>{newsletter.heading}</h2>
        <p className={styles.body}>{newsletter.body}</p>
      </div>

      <form className={styles.form}>
        <input
          name="email"
          type="email"
          className={styles.input}
          placeholder={newsletter.placeholder}
          aria-label="Email address"
        />
        <button type="submit" className={styles.submit}>
          {newsletter.submitLabel}
        </button>
      </form>
    </Reveal>
  );
}
