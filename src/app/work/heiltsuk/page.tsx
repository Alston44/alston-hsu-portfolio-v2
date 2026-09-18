import Image from "next/image";
import Header from "@/components/Header";
import HeiltsukCaseStudy, {
  HeiltsukHero,
} from "@/components/HeiltsukCaseStudy";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { LightboxProvider } from "@/components/Lightbox";

export default function HeiltsukPage() {
  return (
    <LightboxProvider>
      <div className="relative flex flex-1 flex-col">
        <Header />
        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 -top-[100px] bottom-0">
            <Image
              src="/images/projects/heiltsuk/hero-bg.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-[0.14]"
              priority
            />
          </div>
          <div className="relative pt-10 sm:pt-14 xl:pt-16">
            <HeiltsukHero />
          </div>
        </div>
        <main className="flex flex-1 flex-col">
          <HeiltsukCaseStudy />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </LightboxProvider>
  );
}
