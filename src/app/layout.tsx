import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { site } from "@/data/site";
import "@/styles/globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jost.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
