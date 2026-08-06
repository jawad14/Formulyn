import next from "eslint-config-next";

/** Flat config. `eslint-config-next` ships the Core Web Vitals + TS rules. */
const config = [
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
  ...next,
];

export default config;
