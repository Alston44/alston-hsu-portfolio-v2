import Header from "@/components/Header";
import SendInTheirTimeConcept, {
  SendInTheirTimeHero,
} from "@/components/SendInTheirTimeConcept";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { LightboxProvider } from "@/components/Lightbox";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Send in Their Time",
  description:
    "iOS already lets you schedule a message with Send Later, but only by your own clock. This concept adds one row to the same menu so you can pick a time in theirs.",
});

export default function SendInTheirTimePage() {
  return (
    <LightboxProvider>
      <div className="relative flex flex-1 flex-col">
        <Header />
        <SendInTheirTimeHero />
        <main className="no-stagger route-transition-slide-only flex flex-1 flex-col">
          <SendInTheirTimeConcept />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </LightboxProvider>
  );
}
