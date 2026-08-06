import { testimonials, testimonialsSection } from "@/data/home";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { Stop } from "@/components/ui/Stop";
import styles from "./TestimonialsSection.module.css";

const STARS = "★★★★★";

export function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className="shell">
        <Reveal className={styles.head}>
          <div>
            <p className={styles.eyebrow}>{testimonialsSection.eyebrow}</p>
            <h2 className={styles.heading}>
              {testimonialsSection.heading}
              <Stop />
            </h2>
          </div>

          <div className={styles.score}>
            <div>
              <div className={styles.scoreValue}>
                {testimonialsSection.rating}
              </div>
              <div className={styles.scoreStars} aria-hidden="true">
                {STARS}
              </div>
              <span className="srOnly">
                Rated {testimonialsSection.rating} out of 5
              </span>
            </div>
            <div className={styles.scoreMeta}>
              <p className={styles.scoreCount}>
                {testimonialsSection.reviewCount}
              </p>
              <a
                href={site.googleReviewsUrl}
                className={styles.scoreLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read on Google →
              </a>
            </div>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <Reveal
              as="figure"
              key={testimonial.attribution + testimonial.quote}
              className={styles.card}
            >
              <div className={styles.cardStars} aria-hidden="true">
                {STARS}
              </div>
              <blockquote className={styles.quote}>
                {testimonial.quote}
              </blockquote>
              <figcaption className={styles.attribution}>
                {testimonial.attribution}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
