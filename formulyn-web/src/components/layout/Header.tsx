"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navCta, navLinks, site } from "@/data/site";
import { Stop } from "@/components/ui/Stop";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Collapse the drawer when the viewport widens back to the full nav.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 900px)");
    const sync = () => {
      if (query.matches) setMenuOpen(false);
    };
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const isCurrent = (href: string) => pathname === href;

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.wordmark} onClick={closeMenu}>
        {site.name}
        <Stop />
      </Link>

      <div className={styles.desktop}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.link}
            aria-current={isCurrent(link.href) ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
        <Link href={navCta.href} className={styles.cta}>
          {navCta.label}
        </Link>
      </div>

      <div className={styles.mobile}>
        <Link
          href={navCta.href}
          className={styles.ctaCompact}
          onClick={closeMenu}
        >
          {navCta.label}
        </Link>
        <button
          type="button"
          className={styles.burger}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen ? (
        <div className={styles.drawer}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.drawerLink}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
