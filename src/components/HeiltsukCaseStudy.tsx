import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { FramedScreenshot, Triptych } from "./ProjectMedia";
import {
  CaseStudyBody,
  CaseStudyEyebrow,
  CaseStudyHeading,
  CaseStudyMedia,
  CaseStudyToc,
  ContainBox,
  CoverBox,
  wdth,
} from "./CaseStudy";
import { LightboxTrigger } from "./Lightbox";

const IMG = "/images/projects/heiltsuk";

function MetaColumn({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-1.5 text-black/60 sm:w-auto sm:min-w-[120px]">
      <p
        className="text-[12px] font-bold leading-[1.4] sm:text-[14px] md:text-[18px]"
        style={wdth}
      >
        {label}
      </p>
      <div
        className="flex flex-col gap-0.5 text-[12px] leading-[1.3] tracking-[-0.25px] sm:text-[14px] md:text-[18px]"
        style={wdth}
      >
        {children}
      </div>
    </div>
  );
}

const OTHER_WORKS = [
  {
    href: "/work/avail",
    title:
      "Creating an app that helps BC Students Claim the Benefits they're already owed.",
    company: "Avail",
    tags: ["2026", "BCIT", "School Project"],
    background: "#F7F7F7",
    pillLabel: "View project",
    pillColor: "#0e9090",
    media: (
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
            fit: "contain" as const,
          },
        ]}
      />
    ),
  },
  {
    href: "/#work",
    title:
      "A wildfire alert app built to guide action, not just relay information.",
    company: "Firewatch BC",
    tags: ["2026", "BCIT", "School Project"],
    background: "#F7F7F7",
    pillLabel: "View project",
    pillColor: "#fa9f00",
    comingSoon: true,
    media: (
      <Triptych
        images={[
          {
            src: "/images/projects/firewatch-home.webp",
            alt: "Firewatch BC app home screen",
          },
          {
            src: "/images/projects/firewatch-map-2.webp",
            alt: "Firewatch BC app map screen",
          },
          {
            src: "/images/projects/firewatch-map-1.webp",
            alt: "Firewatch BC app alert map screen",
          },
        ]}
      />
    ),
  },
  {
    href: "/#work",
    title:
      "Designed FLUI's landing page in high fidelity and caught inconsistencies before developer handoff.",
    company: "FLUI Hackathon",
    tags: ["2026", "Hackathon", "Web Design"],
    background: "#F7F7F7",
    pillLabel: "Coming soon",
    pillColor: "#0063c7",
    comingSoon: true,
    media: (
      <FramedScreenshot
        src="/images/projects/flui-hackathon.webp"
        alt="FLUI Design Jam landing page"
        size="sm"
      />
    ),
  },
];

export function HeiltsukHero() {
  return (
    <div className="mx-auto w-full max-w-[1920px] px-6 sm:px-8 xl:px-16">
      <div className="relative mx-auto w-full max-w-[1160px]">
        <div
          className="relative w-full overflow-hidden rounded-lg shadow-[0_3px_20px_rgba(0,0,0,0.4)]"
          style={{ aspectRatio: "1120/637" }}
        >
          <Image
            src={`${IMG}/hero-main.webp`}
            alt="Heiltsuk Nation homepage redesign"
            fill
            sizes="(min-width: 1280px) 1160px, 90vw"
            className="object-cover object-top"
            priority
          />
        </div>
        <div
          className="absolute right-0 overflow-hidden rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.35)] xl:right-[-48px]"
          style={{
            aspectRatio: "240/568",
            bottom: "0",
            width: "21.4%",
          }}
        >
          <Image
            src={`${IMG}/hero-side.webp`}
            alt="Heiltsuk Nation site detail view"
            fill
            sizes="(min-width: 1280px) 248px, 19vw"
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default function HeiltsukCaseStudy() {
  return (
    <div className="relative -mt-6 bg-white px-6 pt-[60px] pb-24 sm:-mt-8 sm:px-8 sm:pb-32 xl:-mt-10 xl:px-16">
      <div className="page-fade-in relative mx-auto flex max-w-[1920px] flex-col gap-16 sm:gap-20 xl:gap-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 xl:flex-row xl:items-start xl:gap-16">
          <CaseStudyToc iconDir={IMG} />
          <div className="flex w-full flex-col gap-16 sm:gap-20 xl:gap-24">
            {/* Title + metadata */}
            <div className="flex flex-col gap-[75px] sm:gap-[94px] xl:gap-[118px]">
              <div className="flex flex-col gap-4 xl:gap-6">
                <p
                  className="text-[14px] font-medium tracking-[0.4px] text-black/60 sm:text-[18px] md:text-[22px]"
                  style={wdth}
                >
                  Burst! Creative Group
                </p>
                <h1
                  className="font-serif max-w-[1428px] text-[35px] leading-[1.1] text-black/60 sm:text-[44px] md:text-[55px]"
                  style={wdth}
                >
                  Building Heiltsuk Nation&rsquo;s site to grow, not just to be
                  patched together.
                </h1>
              </div>

              <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-y-8">
                <MetaColumn label="My Contributions">
                  <p>Research</p>
                  <p>UI Design</p>
                  <p>Usability testing</p>
                  <p>Prototyping</p>
                  <p>User research</p>
                  <p>Responsiveness</p>
                </MetaColumn>
                <MetaColumn label="Client">
                  <p>Heiltsuk Nation</p>
                </MetaColumn>
                <MetaColumn label="Team">
                  <p>1 Product manager</p>
                  <p>1 Lead designer</p>
                  <p>
                    1 Product designer <span className="opacity-50">(me)</span>
                  </p>
                </MetaColumn>
                <MetaColumn label="Duration">
                  <p>6 weeks</p>
                </MetaColumn>
                <MetaColumn label="Tools">
                  <p>Figma, AI, Illustrator</p>
                </MetaColumn>
              </div>
            </div>

            {/* Overview */}
            <div
              id="overview"
              className="scroll-mt-28 flex flex-col gap-8 sm:gap-10 xl:gap-14"
            >
              <div className="flex flex-col gap-6">
                <CaseStudyEyebrow>Overview</CaseStudyEyebrow>
                <div className="flex flex-col gap-5 sm:gap-6">
                  <CaseStudyBody
                    paragraphs={[
                      "Heiltsuk Nation's (Client) website is a single scrolling homepage — as their content grew, they faced challenges in organizing new material and integrating sub-categories into the existing structure. Burst! Creative Group brought me on to this project during my internship to rebuild it as a structured, scalable website using the Client's colours and typefaces. I was appointed to be the lead designer on the project with only a few weeks left before my internship ended. I used Claude Design to speed up the brainstorm-to-mid-fidelity process, then built and tested the pages one at a time. By handoff, I had already incorporated most of the Client's content without needing a redesign. Before I left Burst!, I built a separate set of mobile screens and wrote developer comments so the project could be handed off smoothly to the next Lead.",
                    ]}
                  />
                  <a
                    href="#final-design"
                    className="group flex w-fit items-center gap-0.5"
                  >
                    <span
                      className="text-[12px] font-medium tracking-[-0.48px] text-black/60 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-active:underline sm:text-[14px] md:text-[16px]"
                      style={wdth}
                    >
                      Jump to final designs
                    </span>
                    <Image
                      src={`${IMG}/icon-jump-arrow.svg`}
                      alt=""
                      width={17}
                      height={17}
                      className="rotate-[135deg] transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:translate-y-1"
                    />
                  </a>
                </div>
              </div>
              <div
                className="relative overflow-hidden rounded-[15px] border border-black/5 bg-gradient-to-b from-[#ededed] to-[#e5e5e5]"
                style={{ aspectRatio: "1429/780" }}
              >
                <div
                  className="absolute overflow-hidden rounded-lg"
                  style={{
                    left: "2.8%",
                    top: "5.5%",
                    width: "69.3%",
                    height: "142.3%",
                  }}
                >
                  <LightboxTrigger
                    src={`${IMG}/overview-1.webp`}
                    alt="Heiltsuk Nation site redesign, page one"
                    className="relative block h-full w-full"
                  >
                    <Image
                      src={`${IMG}/overview-1.webp`}
                      alt="Heiltsuk Nation site redesign, page one"
                      fill
                      sizes="(min-width: 1280px) 1000px, 70vw"
                      className="object-cover object-top"
                    />
                  </LightboxTrigger>
                </div>
                <div
                  className="absolute overflow-hidden rounded-lg shadow-[0_3px_20px_rgba(0,0,0,0.35)]"
                  style={{
                    left: "27.8%",
                    top: "38.1%",
                    width: "69.3%",
                    height: "109.7%",
                  }}
                >
                  <LightboxTrigger
                    src={`${IMG}/overview-2.webp`}
                    alt="Heiltsuk Nation site redesign, page two"
                    className="relative block h-full w-full"
                  >
                    <Image
                      src={`${IMG}/overview-2.webp`}
                      alt="Heiltsuk Nation site redesign, page two"
                      fill
                      sizes="(min-width: 1280px) 1000px, 70vw"
                      className="object-cover object-top"
                    />
                  </LightboxTrigger>
                </div>
              </div>
            </div>

            {/* Problem */}
            <div
              id="problem"
              className="scroll-mt-28 flex flex-col gap-8 sm:gap-10"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <CaseStudyEyebrow>Problem</CaseStudyEyebrow>
                  <CaseStudyHeading>
                    Every new content added a longer scroll, and the
                    sub-categories the client wanted outgrew the format.
                  </CaseStudyHeading>
                </div>
                <CaseStudyBody
                  paragraphs={[
                    "I was first brought in to update sections of the existing site. Each addition made the page longer making it harder to navigate. The client also wanted sub-categories within sections, something a single scrolling page has no way to represent. A user also didn't have the ability to see news and announcements because that section didn't exist. This would have a large impact on the nation's website SEO, discoverability, conversion, funnel metrics, bounce rates, and shareability just to name a few.",
                    "A giveaway promotion and a visitor announcement both needed a News or Announcements section that simply didn't exist, and there was no sensible way to add one to a page that only scrolled, and already had so many navigation items. So instead, they both became pop-ups. Rebuilding the site meant giving new content an actual section to live in, not another paragraph tacked onto an already-long page.",
                  ]}
                />
              </div>
              <CaseStudyMedia aspect="1429/617">
                <video
                  src={`${IMG}/infinite-scroll.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </CaseStudyMedia>
            </div>

            {/* Discovery */}
            <div
              id="discovery"
              className="scroll-mt-28 flex flex-col gap-8 sm:gap-10"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <CaseStudyEyebrow>Discovery</CaseStudyEyebrow>
                  <CaseStudyHeading>
                    We gathered requirements from the Heiltsuk Nation, and I
                    worked with my PM to synthesize.
                  </CaseStudyHeading>
                </div>
                <CaseStudyBody
                  paragraphs={[
                    "My lead and I gathered requirements directly from the Heiltsuk Nation, who wanted to add substantial new content, including departments, emergency readiness information, and more, much of which the current site structure couldn't support. My lead led the calls while I synthesized the findings and rebuilt the sitemap. It quickly became clear that the requested additions didn't fit within the existing structure, which meant the project needed more design thought rather than a simple content update.",
                  ]}
                />
              </div>
              <ContainBox
                src={`${IMG}/discovery-sitemap.webp`}
                alt="Rebuilt sitemap for the Heiltsuk Nation site"
                aspect="1429/869"
              />
            </div>

            {/* Ideation */}
            <div
              id="ideation"
              className="scroll-mt-28 flex flex-col gap-8 sm:gap-10"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <CaseStudyEyebrow>Ideation</CaseStudyEyebrow>
                  <CaseStudyHeading>
                    Since I was the main designer, with some direction from our
                    lead, and the tight timeline, I used AI tooling to
                    brainstorm and prototype quicker.
                  </CaseStudyHeading>
                </div>
                <CaseStudyBody
                  paragraphs={[
                    "My lead was focused on other projects, which put me in the main design seat. With only a few weeks left in the internship, we agreed on using Claude Design to move faster. I explored early directions directly with Claude Design, generated a range of variations to gather feedback, then refined and polished the final work in Figma.",
                  ]}
                />
              </div>
              <div
                className="relative w-full overflow-hidden rounded-lg border border-black/5 bg-gradient-to-b from-[#ededed] to-[#e5e5e5]"
                style={{ aspectRatio: "1429/598" }}
              >
                <div
                  className="absolute overflow-hidden rounded-md bg-[#d9d9d9] p-1.5 sm:p-2"
                  style={{
                    left: "7.9%",
                    top: "36.6%",
                    width: "26.7%",
                    height: "74%",
                  }}
                >
                  <LightboxTrigger
                    src={`${IMG}/ideation-style-1.webp`}
                    alt="Early style exploration, left"
                    className="relative block h-full w-full overflow-hidden rounded-md"
                  >
                    <Image
                      src={`${IMG}/ideation-style-1.webp`}
                      alt="Early style exploration, left"
                      fill
                      sizes="(min-width: 1280px) 380px, 27vw"
                      className="object-contain object-top"
                    />
                  </LightboxTrigger>
                </div>
                <div
                  className="absolute overflow-hidden rounded-md bg-[#d9d9d9] p-1.5 sm:p-2"
                  style={{
                    left: "63.3%",
                    top: "50.5%",
                    width: "26.7%",
                    height: "49.5%",
                  }}
                >
                  <LightboxTrigger
                    src={`${IMG}/ideation-style-2.webp`}
                    alt="Early style exploration, right"
                    className="relative block h-full w-full overflow-hidden rounded-md"
                  >
                    <Image
                      src={`${IMG}/ideation-style-2.webp`}
                      alt="Early style exploration, right"
                      fill
                      sizes="(min-width: 1280px) 380px, 27vw"
                      className="object-contain object-top"
                    />
                  </LightboxTrigger>
                </div>
                <div
                  className="absolute overflow-hidden rounded-lg bg-[#d9d9d9] p-2 shadow-[0_4px_2px_rgba(0,0,0,0.45)] sm:p-2.5"
                  style={{
                    left: "32.7%",
                    top: "15.4%",
                    width: "33.3%",
                    height: "92.5%",
                  }}
                >
                  <LightboxTrigger
                    src={`${IMG}/ideation-style-3.webp`}
                    alt="Refined style direction, center"
                    className="relative block h-full w-full overflow-hidden rounded-lg"
                  >
                    <Image
                      src={`${IMG}/ideation-style-3.webp`}
                      alt="Refined style direction, center"
                      fill
                      sizes="(min-width: 1280px) 476px, 34vw"
                      className="object-contain"
                    />
                  </LightboxTrigger>
                </div>
              </div>
            </div>

            {/* Early feedback */}
            <div className="flex flex-col gap-8 sm:gap-10">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <CaseStudyEyebrow>Early feedback</CaseStudyEyebrow>
                  <CaseStudyHeading>
                    After my designs were reviewed and approved, we started
                    working directly with the client on the copy to pressure
                    test the designs.
                  </CaseStudyHeading>
                </div>
                <CaseStudyBody
                  paragraphs={[
                    "I built each page as a fully interactive prototype and tested it directly with the client, gathering feedback from both internal team members and the client's side. That feedback was folded back into the prototype iteratively. The payoff came later: the same category-page template held up across completely different sections, proof that the structure wasn't just working for one part of the site.",
                  ]}
                />
              </div>
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8 xl:gap-[62px]">
                <CoverBox
                  src={`${IMG}/feedback-1.webp`}
                  alt="Client feedback annotated on the homepage prototype"
                  aspect="684/725"
                  frameAspect="612/538"
                  className="p-4 sm:p-6 xl:p-9"
                />
                <CoverBox
                  src={`${IMG}/feedback-2.webp`}
                  alt="Client feedback annotated on a category page prototype"
                  aspect="675/725"
                  frameAspect="603/536"
                  className="p-4 sm:p-6 xl:p-9"
                />
              </div>
            </div>

            {/* Mega menu */}
            <div className="flex flex-col gap-8 sm:gap-10">
              <div className="flex flex-col gap-6">
                <CaseStudyHeading>The mega-menu concept</CaseStudyHeading>
                <CaseStudyBody
                  paragraphs={[
                    "We discovered a traditional dropdown didn't fit the client's needs. That led to the mega menu concept, designed to showcase land and community imagery alongside the navigation itself rather than treating it as a plain text menu. The client loved the direction and wanted to move forward with it.",
                    "The structure was also built to scale. Some dropdowns had as few as five items, so when the client later asked to add a new topic, it dropped straight into the existing grid without requiring a redesign.",
                  ]}
                />
              </div>
              <CoverBox
                src={`${IMG}/megamenu.webp`}
                alt="Mega menu navigation concept"
                aspect="1429/764"
                className="p-4 sm:p-6 xl:p-9"
              />

              <div className="flex flex-col gap-8 sm:gap-10">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-9">
                  <ContainBox
                    src={`${IMG}/dropdown-1.webp`}
                    alt="Left-side dropdown navigation, wireframe"
                    aspect="457/232"
                  />
                  <ContainBox
                    src={`${IMG}/dropdown-2.webp`}
                    alt="Left-side dropdown navigation, refined"
                    aspect="457/231"
                  />
                </div>
                <CaseStudyBody
                  paragraphs={[
                    "Once the mega menu was in place, each category page needed its own way to guide visitors from that broad entry point toward specific content, rather than presenting everything at once. Drawing on patterns from other sites handling deep category nesting, I designed a left-side dropdown, validated in lo-fi wireframes before carrying it into higher-fidelity pages. The result is a single nav pattern shared across every other section.",
                  ]}
                />
              </div>

              <CoverBox
                src={`${IMG}/nav-pattern.webp`}
                alt="Final left-side dropdown navigation pattern"
                aspect="1429/860"
                tone="dark"
                className="p-4 sm:p-6 xl:p-9"
              />
            </div>

            {/* Final design */}
            <div
              id="final-design"
              className="scroll-mt-28 flex flex-col gap-8 sm:gap-10"
            >
              <CaseStudyHeading>Final design</CaseStudyHeading>
              <CaseStudyMedia aspect="1400/1026">
                <video
                  src={`${IMG}/heiltsuk-prototype.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </CaseStudyMedia>
            </div>

            {/* Handoff */}
            <div className="flex flex-col gap-8 sm:gap-10">
              <div className="flex flex-col gap-6">
                <CaseStudyHeading>
                  I completed the designs, but my internship ended
                  mid-development.
                </CaseStudyHeading>
                <CaseStudyBody
                  paragraphs={[
                    "Once developers started picking up the wireframes, I commented directly on interactions in Figma so the intent didn't depend on someone asking me. I also built a separate set of mobile screens, since the desktop layout didn't make mobile behaviour obvious, and I wouldn't be there after the internship ended to answer questions about it. The mobile mock-up would show the developers how the interactions should work. However, if something was still not making sense, I made sure to continue to make myself available to them.",
                  ]}
                />
              </div>
              <div className="flex items-center justify-center gap-6 rounded-lg border border-black/5 bg-gradient-to-b from-[#ededed] to-[#e5e5e5] px-6 py-10 sm:gap-10 sm:px-10 sm:py-14 xl:gap-[58px]">
                {[
                  {
                    src: `${IMG}/mobile-1.webp`,
                    alt: "Mobile handoff screen, home",
                  },
                  {
                    src: `${IMG}/mobile-2.webp`,
                    alt: "Mobile handoff screen, category page",
                  },
                ].map(({ src, alt }) => (
                  <div
                    key={src}
                    className="relative w-[38%] max-w-[300px]"
                    style={{ aspectRatio: "416.346/849.038" }}
                  >
                    <div
                      className="absolute overflow-hidden rounded-[10%]"
                      style={{
                        left: "4.85%",
                        right: "4.85%",
                        top: "2.15%",
                        bottom: "1.96%",
                      }}
                    >
                      <LightboxTrigger
                        src={src}
                        alt={alt}
                        className="relative block h-full w-full"
                      >
                        <Image
                          src={src}
                          alt={alt}
                          fill
                          sizes="(min-width: 1280px) 300px, 38vw"
                          className="object-cover object-top"
                        />
                      </LightboxTrigger>
                    </div>
                    <Image
                      src={`${IMG}/phone-frame.webp`}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 300px, 38vw"
                      className="pointer-events-none object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Reflection */}
            <div
              id="reflection"
              className="scroll-mt-28 flex flex-col gap-6 sm:gap-8"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <CaseStudyEyebrow>Reflection</CaseStudyEyebrow>
                  <CaseStudyHeading>
                    Even though the site hadn&rsquo;t launched by the end of my
                    internship, the experience shaped how I think about
                    pacing, documentation, and where AI fits into a design
                    process.
                  </CaseStudyHeading>
                </div>
                <CaseStudyBody
                  paragraphs={[
                    "Knowing from the start that I had a few weeks, I could have worked faster and tightened the feedback loops earlier than I did. This was also my first time leading a project of this scope, being the sole designer on the team meant I was learning that pacing on the fly rather than following an established rhythm.",
                    "I also learned the value of writing thorough handoff notes. Since the site hadn't launched by the time my internship ended, the next person needed to be able to pick up the project without me there to explain context in person. That meant documenting decisions and reasoning in enough depth that someone unfamiliar with the process could still move forward with it.",
                    "AI tooling played a real role in expediting the work. It didn't replace design judgment, but it gave me a way to move faster at a stage where I was the only designer driving the process, especially useful given the timeline.",
                    "The clearest proof point that the work held up: the category structure survived new content without needing a rebuild, even though the site itself hadn't launched by the end of the internship.",
                  ]}
                />
              </div>
            </div>

            {/* Other works */}
            <div className="flex flex-col gap-8 sm:gap-10">
              <CaseStudyHeading>Other works</CaseStudyHeading>
              <div className="flex flex-col gap-16 sm:gap-20">
                {OTHER_WORKS.map((work) => (
                  <ProjectCard key={work.company} {...work} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
