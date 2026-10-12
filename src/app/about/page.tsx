import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "About Alston Hsu, a recent BCIT graduate and aspiring product designer from Vancouver with a background in psychology and commerce.",
});

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="page-fade-in flex flex-1 flex-col">
        <About />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
