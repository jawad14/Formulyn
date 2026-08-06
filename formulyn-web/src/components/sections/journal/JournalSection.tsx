import { Fragment } from "react";
import { featuredPost, posts } from "@/data/journal";
import { Reveal } from "@/components/ui/Reveal";
import { NewsletterSignup } from "./NewsletterSignup";
import styles from "./JournalSection.module.css";

export function JournalSection() {
  return (
    <section className={styles.section}>
      <div className="shell">
        <Reveal as="article" className={styles.featured}>
          <div>
            <p className={styles.featuredEyebrow}>{featuredPost.eyebrow}</p>
            <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
            <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
            <div className={styles.featuredMeta}>
              <span>{featuredPost.date}</span>
              <span aria-hidden="true">·</span>
              <span>{featuredPost.readingTime}</span>
            </div>
          </div>
          <div className={styles.featuredThumb}>
            {featuredPost.imageLabel.map((line, index) => (
              <Fragment key={line}>
                {index > 0 ? <br /> : null}
                {line}
              </Fragment>
            ))}
          </div>
        </Reveal>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Reveal as="article" key={post.title} className={styles.card}>
              <div className={styles.cardThumb}>{post.imageLabel}</div>
              <div className={styles.cardBody}>
                <p className={styles.cardCategory}>{post.category}</p>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <div className={styles.cardMeta}>{post.meta}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <NewsletterSignup />
      </div>
    </section>
  );
}
