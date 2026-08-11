"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import styles from "./PageTransition.module.css";

/**
 * Fades each route in as it mounts, so a nav click resolves into the new page
 * instead of snapping to it. Keyed on the path: the tree remounts on
 * navigation, which also restarts every scroll reveal on the incoming page.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className={styles.page}>
      {children}
    </div>
  );
}
