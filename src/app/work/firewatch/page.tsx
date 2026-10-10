import Header from "@/components/Header";
import FirewatchCaseStudy, {
  FirewatchHero,
} from "@/components/FirewatchCaseStudy";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { LightboxProvider } from "@/components/Lightbox";

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
