import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="page-fade-in flex flex-1 flex-col">
        <About />
      </main>
      <Footer />
    </div>
  );
}
