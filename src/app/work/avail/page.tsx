import Header from "@/components/Header";
import AvailCaseStudy, { AvailHero } from "@/components/AvailCaseStudy";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { LightboxProvider } from "@/components/Lightbox";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Avail",
  description:
    "Avail is an app that helps BC students find the benefits they are unaware of, with a short quiz, matched results and an AI chat. A BCIT team project.",
});

export default function AvailPage() {
  return (
    <LightboxProvider>
      <div className="relative flex flex-1 flex-col">
        <Header />
        <AvailHero />
        <main className="no-stagger route-transition-slide-only flex flex-1 flex-col">
          <AvailCaseStudy />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </LightboxProvider>
  );
}
