import ProjectCard from "./ProjectCard";
import ProjectStack from "./ProjectStack";
import { FramedScreenshot, Triptych } from "./ProjectMedia";
import { CARD_BACKGROUNDS } from "@/lib/cardBackgrounds";
import { SHOW_FLUI_CARD } from "@/lib/featureFlags";
import { SEND_IN_THEIR_TIME_CARD } from "@/lib/sendInTheirTimeCard";

export default function ProjectGrid() {
  return (
    <section id="work" className="scroll-mt-19 px-6 pt-10 pb-6 sm:px-8 sm:pb-8 xl:px-16">
      <ProjectStack>
        <ProjectCard
          href="/work/heiltsuk"
          title="Building Heiltsuk Nation's site to grow, not just to be patched together."
          company="Burst! Creative Group"
          tags={["2026", "Internship", "Web Design"]}
          background={CARD_BACKGROUNDS.heiltsuk}
          pillLabel="View project"
          pillColor="#b8373d"
          media={
            <FramedScreenshot
              src="/images/projects/heiltsuk-nation.webp"
              alt="Heiltsuk Nation website homepage"
              size="lg"
              priority
            />
          }
        />
        <ProjectCard
          href="/work/avail"
          title="An app that helps BC Students Claim the Benefits they're unaware of."
          company="Avail"
          tags={["2026", "BCIT", "School Project"]}
          background={CARD_BACKGROUNDS.avail}
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
        <ProjectCard {...SEND_IN_THEIR_TIME_CARD} />
        <ProjectCard
          href="/work/firewatch"
          title="A wildfire alert app built to guide action, not just relay information."
          company="Firewatch BC"
          tags={["2026", "BCIT", "School Project"]}
          background={CARD_BACKGROUNDS.firewatch}
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
        {SHOW_FLUI_CARD && (
          <ProjectCard
            href="#"
            title="Building FLUI's landing page to hand off cleanly, not just look polished."
            company="FLUI Hackathon"
            tags={["2026", "Hackathon", "Web Design"]}
            background={CARD_BACKGROUNDS.flui}
            pillLabel="Coming soon"
            pillColor="#0063c7"
            comingSoon
            media={
              <FramedScreenshot
                src="/images/projects/flui-hackathon.webp"
                alt="FLUI Design Jam landing page"
                size="sm"
              />
            }
          />
        )}
      </ProjectStack>
    </section>
  );
}
