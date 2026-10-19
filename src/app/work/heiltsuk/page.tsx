import Header from "@/components/Header";
import HeiltsukCaseStudy, {
  HeiltsukHero,
} from "@/components/HeiltsukCaseStudy";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { LightboxProvider } from "@/components/Lightbox";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Heiltsuk Nation website",
  description:
    "Rebuilding the Heiltsuk Nation website to be structured and scalable, from sitemap and mega-menu to developer handoff. Product design internship at Burst! Creative Group.",
});

export default function HeiltsukPage() {
  return (
    <LightboxProvider>
      <div className="relative flex flex-1 flex-col">
        <Header />
        <HeiltsukHero />
        <main className="no-stagger route-transition-slide-only flex flex-1 flex-col">
          <HeiltsukCaseStudy />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </LightboxProvider>
  );
}
