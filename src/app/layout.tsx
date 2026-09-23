import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alston Hsu",
  description:
    "An aspiring product designer from Vancouver, formerly psychology and commerce, now designing UI/UX with both in mind.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif4.variable} h-full antialiased`}
    >
      {/* suppressHydrationWarning: browser extensions (e.g. Grammarly) inject attributes onto <body> before React hydrates. Applies to this element's own attributes only. */}
      <body
        className="min-h-full flex flex-col bg-white font-sans"
        suppressHydrationWarning
      >
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
