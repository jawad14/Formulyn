import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { hero, heroStats, marqueeItems } from "@/data/home";
import { Stop } from "@/components/ui/Stop";
import styles from "./HeroSection.module.css";

/** One pass of the marquee, duplicated below to make the loop seamless. */
const marqueeText = `${marqueeItems.join(" · ")} · `;

export function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.grid}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span className={styles.eyebrowLabel}>{hero.eyebrow}</span>
          </p>

          <h1 className={styles.heading}>
            {hero.headingLines.map((line, index) => (
              <Fragment key={line}>
                {index > 0 ? <br /> : null}
                {line}
              </Fragment>
            ))}
            <Stop />
          </h1>

          <p className={styles.body}>{hero.body}</p>

          <div className={styles.actions}>
            <Link href={hero.primaryCta.href} className={styles.ctaPrimary}>
              {hero.primaryCta.label}
            </Link>
            <Link href={hero.secondaryCta.href} className={styles.ctaSecondary}>
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.frame} aria-hidden="true" />
          <div className={styles.imageWrap}>
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              className={styles.image}
              sizes="(max-width: 900px) 100vw, 50vw"
              fill
              priority
            />
          </div>
          <div className={styles.badge}>
            <div className={styles.badgeValue}>{hero.badge.value}</div>
            <div className={styles.badgeLabel}>{hero.badge.label}</div>
          </div>
        </div>
      </div>

      <div className={styles.stats}>
        {heroStats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          <span className={styles.marqueeItem}>{marqueeText}</span>
          <span className={styles.marqueeItem}>{marqueeText}</span>
        </div>
      </div>
    </header>
  );
}
