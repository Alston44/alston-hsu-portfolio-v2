import ProjectCard from "./ProjectCard";
import { FramedScreenshot, Triptych } from "./ProjectMedia";

export default function ProjectGrid() {
  return (
    <section id="work" className="px-6 pt-10 pb-24 sm:px-8 sm:pb-32 xl:px-16">
      <div className="mx-auto grid max-w-[1920px] grid-cols-1 gap-x-16 gap-y-[75px] lg:grid-cols-2">
        <ProjectCard
          href="/work/heiltsuk"
          title="Building Heiltsuk Nation's site to grow, not just to be patched together."
          company="Burst! Creative Group"
          tags={["2026", "Internship", "Web Design"]}
          background="linear-gradient(-48deg, rgb(250, 194, 197) 1%, rgb(247, 228, 228) 100%)"
          pillLabel="View project"
          pillColor="#b8373d"
          media={
            <FramedScreenshot
              src="/images/projects/heiltsuk-nation.webp"
              alt="Heiltsuk Nation website homepage"
              size="lg"
            />
          }
        />
        <ProjectCard
          href="#"
          title="Creating an app that helps BC Students Claim the Benefits they're already owed."
          company="Avail"
          tags={["2026", "BCIT", "School Project"]}
          background="linear-gradient(to bottom, #d6f4f5, #caf2df)"
          pillLabel="View project"
          pillColor="#0e9090"
          media={
            <Triptych
              images={[
                { src: "/images/projects/avail-1.webp", alt: "Avail app home screen" },
                {
                  src: "/images/projects/avail-2.webp",
                  alt: "Avail app benefits screen",
                  stretch: { height: "137.61%", top: "0.09%" },
                },
                {
                  src: "/images/projects/avail-3.webp",
                  alt: "Avail app search screen",
                  fit: "contain",
                },
              ]}
            />
          }
        />
        <ProjectCard
          href="#"
          title="A wildfire alert app built to guide action, not just relay information."
          company="Firewatch BC"
          tags={["2026", "BCIT", "School Project"]}
          background="linear-gradient(33deg, rgb(246, 229, 207) 23%, rgb(245, 224, 199) 101%)"
          pillLabel="View project"
          pillColor="#fa9f00"
          media={
            <Triptych
              images={[
                { src: "/images/projects/firewatch-home.webp", alt: "Firewatch BC app home screen" },
                { src: "/images/projects/firewatch-map-2.webp", alt: "Firewatch BC app map screen" },
                { src: "/images/projects/firewatch-map-1.webp", alt: "Firewatch BC app alert map screen" },
              ]}
            />
          }
        />
        <ProjectCard
          href="#"
          title="Designed FLUI's landing page in high fidelity and caught inconsistencies before developer handoff."
          company="FLUI Hackathon"
          tags={["2026", "Hackathon", "Web Design"]}
          background="linear-gradient(-49deg, rgb(174, 255, 255) 33%, rgb(224, 255, 255) 73%)"
          pillLabel="Coming soon"
          pillColor="#0063c7"
          media={
            <FramedScreenshot
              src="/images/projects/flui-hackathon.webp"
              alt="FLUI Design Jam landing page"
              size="sm"
            />
          }
        />
      </div>
    </section>
  );
}
