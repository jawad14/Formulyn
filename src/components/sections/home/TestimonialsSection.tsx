import { testimonials, testimonialsSection } from "@/data/home";
import { site } from "@/data/site";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Reveal } from "@/components/ui/Reveal";
import { Stop } from "@/components/ui/Stop";
import styles from "./TestimonialsSection.module.css";

const STARS = "★★★★★";

export function TestimonialsSection() {
  return (
    <section className={`${styles.section} edgeSweep`}>
      <div className="shell scrollSettle">
        <div className={styles.head}>
          <div>
            <Reveal as="p" className={styles.eyebrow}>
              {testimonialsSection.eyebrow}
            </Reveal>
            <AnimatedText
              as="h2"
              className={styles.heading}
              text={testimonialsSection.heading}
              trailing={<Stop />}
              delay={110}
            />
          </div>

          <Reveal className={styles.score} from="right" delay={200}>
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
          </Reveal>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <Reveal
              as="figure"
              key={testimonial.attribution + testimonial.quote}
              className={styles.card}
              from="scale"
              delay={index * 100}
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
