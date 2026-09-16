import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="page-fade-in flex flex-1 flex-col">
        <Hero />
        <ProjectGrid />
      </main>
      <Footer />
    </div>
  );
}
