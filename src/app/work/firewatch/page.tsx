import Header from "@/components/Header";
import FirewatchCaseStudy, {
  FirewatchHero,
} from "@/components/FirewatchCaseStudy";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { LightboxProvider } from "@/components/Lightbox";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Firewatch BC",
  description:
    "A BC wildfire alert app built to tell people what to do, not just show data. Research, two rounds of usability testing and a solo redesign. A BCIT team project.",
});

export default function FirewatchPage() {
  return (
    <LightboxProvider>
      <div className="relative flex flex-1 flex-col">
        <Header />
        <FirewatchHero />
        <main className="no-stagger route-transition-slide-only flex flex-1 flex-col">
          <FirewatchCaseStudy />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </LightboxProvider>
  );
}
