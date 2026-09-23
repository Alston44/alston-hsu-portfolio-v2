import Header from "@/components/Header";
import AvailCaseStudy, { AvailHero } from "@/components/AvailCaseStudy";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { LightboxProvider } from "@/components/Lightbox";

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
