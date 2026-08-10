import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * A logotype rather than a drawing, so it is filled rather than stroked —
 * drawn as outlines the counters in the "in" close up at the 16px this is
 * used at and the mark stops reading as LinkedIn's.
 */
export function LinkedIn(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.75h4v10.75H3zM10 9.75h3.8v1.47a4.16 4.16 0 0 1 3.75-2.06c4 0 4.75 2.63 4.75 6.05v5.29h-4v-4.69c0-1.12-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.48v4.77h-4z" />
    </svg>
  );
}
