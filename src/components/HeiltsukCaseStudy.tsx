import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { FramedScreenshot, Triptych } from "./ProjectMedia";
import {
  CaseStudyBody,
  CaseStudyEyebrow,
  CaseStudyHeading,
  CaseStudyMedia,
  CaseStudyToc,
  CoverBox,
  wdth,
} from "./CaseStudy";
import { LightboxTrigger } from "./Lightbox";
import { MediaSlider } from "./MediaSlider";

const IMG = "/images/projects/heiltsuk";

const TOC_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Problem", href: "#problem" },
  { label: "Discovery", href: "#discovery" },
  { label: "Ideation", href: "#ideation" },
  { label: "Final design", href: "#final-design" },
  { label: "Reflection", href: "#reflection" },
];

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
        className="text-[16px] font-bold leading-[1.4] 2xl:text-[18px]"
        style={wdth}
      >
        {label}
      </p>
      <div
        className="flex flex-col gap-0.5 text-[16px] leading-[1.3] tracking-[-0.25px] 2xl:text-[18px]"
        style={wdth}
      >
        {children}
      </div>
    </div>
  );
}

const REFLECTIONS = [
  {
    heading: "Set the pace early",
    body: "I knew from the start that I only had a few weeks, and looking back, I could have moved faster and gotten feedback sooner. This was my first time leading a project this big, and as the main designer, there was no one to set the pace for me. I had to figure it out as I went. Next time, I'd plan out my timeline from day one and check in with the team more often, so feedback comes early instead of piling up at the end.",
  },
  {
    heading: "Design for the person after you",
    body: "The website was not launched when my internship ended, so the team or developers who picked up the project after me should be able to continue with my work. I made sure to document decisions and the reasoning behind them in enough depth that someone new to the project could understand.",
  },
  {
    heading: "AI as a force multiplier",
    body: "AI tooling played a real role in expediting the work. It didn't replace design judgment, but it gave me a way to move faster at a stage where I was the only designer driving the process, especially useful given the timeline.",
  },
  {
    heading: "Built to hold-up",
    body: "The best sign that the work held up was the category structure. When new content was added, everything still fit without needing to be rebuilt. The site hadn't launched yet by the time my internship ended, but knowing the structure could grow on its own gave me confidence it was built to last.",
  },
];

const OTHER_WORKS = [
  {
    href: "/work/avail",
    title:
      "Creating an app that helps BC Students Claim the Benefits they're already owed.",
    company: "Avail",
    tags: ["2026", "BCIT", "School Project"],
    background: "linear-gradient(to bottom, #d6f4f5, #caf2df)",
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
    background: "linear-gradient(33deg, rgb(246, 229, 207) 23%, rgb(245, 224, 199) 101%)",
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
    background: "linear-gradient(-49deg, rgb(174, 255, 255) 33%, rgb(224, 255, 255) 73%)",
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
      <div className="relative mx-auto w-full max-w-[min(900px,58vw)] 2xl:max-w-[1160px]">
        <div
          className="relative w-full overflow-hidden rounded-lg shadow-[0_3px_20px_rgba(0,0,0,0.4)]"
          style={{ aspectRatio: "1120/637" }}
        >
          <Image
            src={`${IMG}/hero-main.webp`}
            alt="Heiltsuk Nation homepage redesign"
            fill
            sizes="(min-width: 1536px) 1160px, 64vw"
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
        <div className="mx-auto flex max-w-6xl flex-col gap-16 xl:flex-row xl:items-start xl:gap-16">
          <CaseStudyToc iconDir={IMG} links={TOC_LINKS} />
          <div className="flex w-full flex-col gap-16 sm:gap-20 xl:gap-24">
            {/* Title + metadata */}
            <div className="flex flex-col gap-[75px] sm:gap-[94px] xl:gap-[118px]">
              <div className="flex flex-col gap-4 xl:gap-6">
                {/* <p
                  className="text-[14px] font-medium tracking-[0.4px] text-black/60 sm:text-[18px] md:text-[22px]"
                  style={wdth}
                >
                  Burst! Creative Group
                </p> */}
                <h1
                  className="font-serif max-w-[1428px] text-[32px] leading-[1.1] text-black/60 sm:text-[41px] md:text-[46px] 2xl:text-[52px]"
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
                <MetaColumn label="Company">
                  <p>Burst! Creative Group</p>
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
                <div className="flex flex-col gap-3">
                  <CaseStudyEyebrow>Overview</CaseStudyEyebrow>
                  <CaseStudyHeading>
                    Heiltsuk (Hel-sic) Nation came to Burst, looking to create a
                    digital space that can capture their community, culture, and
                    history.
                  </CaseStudyHeading>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:gap-8 xl:gap-14">
                  {[
                    {
                      src: `${IMG}/overview-photo-1.webp`,
                      alt: "Lead designer presenting the Heiltsuk site layouts on a large monitor",
                      position: "object-[center_13%]",
                    },
                    {
                      src: `${IMG}/overview-photo-2.webp`,
                      alt: "The Burst! team gathered around a table working on the project",
                      position: "object-center",
                    },
                  ].map(({ src, alt, position }) => (
                    <LightboxTrigger
                      key={src}
                      src={src}
                      alt={alt}
                      className="relative block aspect-[470/437] w-full overflow-hidden rounded-lg"
                    >
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(min-width: 1280px) 520px, 50vw"
                        className={`object-cover ${position}`}
                      />
                    </LightboxTrigger>
                  ))}
                </div>
                <CaseStudyBody
                  paragraphs={[
                    "Burst! Creative Group brought me on to this project during my internship to rebuild it as a structured, scalable website using the Client's colours, community images, and typeface. I was appointed to be the main designer on the project with only a few weeks left before my internship ended. I used Claude Design to speed up the brainstorm-to-mid-fidelity process, then built and tested the pages one at a time. By handoff, I had already incorporated most of the Client's content without needing a redesign."
                  ]}
                />
              </div>
              <div className="flex flex-col gap-5 sm:gap-6">
                <div
                  className="relative overflow-hidden rounded-[15px] border border-black/5 bg-gradient-to-b from-[#ededed] to-[#e5e5e5]"
                  style={{ aspectRatio: "1916/878" }}
                >
                  <div
                    className="absolute overflow-hidden rounded-lg"
                    style={{
                      left: "13.3%",
                      top: "10.8%",
                      width: "53.8%",
                      height: "131.7%",
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
                      left: "32.8%",
                      top: "31.9%",
                      width: "53.9%",
                      height: "101.5%",
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
                <CaseStudyBody
                  paragraphs={[
                    "Before I left Burst!, a separate set of mobile screens, along with developer comments were left so the project could be handed off smoothly to the next team.",
                  ]}
                />
                <a
                  href="#final-design"
                  className="group flex w-fit items-center gap-0.5 self-end"
                >
                  <span
                    className="text-[13px] font-medium tracking-[-0.48px] text-black/60 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-active:underline sm:text-[14px] md:text-[16px]"
                    style={wdth}
                  >
                    Jump to final designs
                  </span>
                  <Image
                    src={`${IMG}/icon-jump-arrow.svg`}
                    alt=""
                    width={17}
                    height={17}
                    className="rotate-180 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
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
                  As the Heiltsuk community grew, the existing website could no longer accommodate their expanding content. 

                  </CaseStudyHeading>
                </div>
                <CaseStudyBody
                  paragraphs={[
                    // I was first brought in to update and add new sections to the website, be we noticed that each addtional
                    // The page to was so hard to navigate, but they couldn't find 
                    // hard to find things, there was a lot of bandaid solutions.

                    "Heiltsuk Nation was already an existing client of Burst. I was first brought in to add more content to their old website, but noticed that each additional update just made the page longer and harder to navigate.",

                    "For example, users can have difficulty finding the latest news about the client due to the lack of a dedicated section for it. Instead, it was implemented as a pop-up on the page. It is bandaid solutions like this that have a large impact on the client's website discoverability, getting new members, relaying other crucial information, and expanding the website.",
                  ]}
                />
              </div>
              <CaseStudyMedia aspect="1440/796">
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
                  My lead designer and I gathered the requirements from Heiltsuk Nation, and after we worked together to synthesize the information.
                  </CaseStudyHeading>
                </div>
                <CaseStudyBody
                  paragraphs={[
                    // We found that our client wanted to add a lot more information to the website, but we also realized that the currnet....
                    // What did we discover, what was the conflict (website structure couldn't support) 
                    // iterated 
                    // Showed the client and realized that more design thought, rather than simple content updates

                    // "We found that our client wanted to add a lot more information to the website, but through this, we also realized that the current website didn’t have the capacity to do so. The conflict we faced was that the website structure could no longer support the client's request anymore. After some back and forth with the client, we found that the change needed was more of a design thought, rather than simple content updates. We kept iterating on their sitemap, and came up with a direction that captured what the client and our team wanted.",

                    "We found that our client wanted to add a lot more information to the website, and once we dug into it, realized the current site didn't have the structure to hold it. The client wanted things like Daycare and Social Development to live under Health & Wellness, which itself sat under Community. That's a real hierarchy, not just more content, and the current site was one long page that couldn't implement this well.",

                    "After some back and forth, we realized the fix wasn't content updates, it was a design problem: the site needed an actual structure to grow into. We kept iterating on their sitemap until we landed on five main sections, each able to hold its own sub-categories without needing a redesign every time the client added one.",


                  ]}
                />
              </div>
              <CoverBox
                src={`${IMG}/discovery-sitemap.webp`}
                alt="Rebuilt sitemap for the Heiltsuk Nation site"
                aspect="1534/942"
                frameAspect="2076/1226"
                className="px-[11.6%]"
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
                  As the main designer working under a tight timeline, I used Claude to prototype two real directions.
                  </CaseStudyHeading>
                </div>
                <CaseStudyBody
                  paragraphs={[
                    "One leaned into a classic homepage: full-bleed hero, a band of feature cards, then a content grid. The other flipped it into a sidebar-driven interior page, closer to how a news site organizes a category. Being able to prototype both quickly meant I could compare them side by side with the lead, who gave occasional input but wasn't building the screens themselves. The direction we landed on kept the homepage's structure, but carried one idea over from the sidebar exploration: category pages would get their own sidebar, giving us a way to store information without making pages too long.",
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
                    After my designs were reviewed and approved, we started working directly with the client on the copy to test the designs.
                  </CaseStudyHeading>
                </div>
                <CaseStudyBody
                  paragraphs={[
                    // added more sections 
                    // Showed clients, they liked it, so we decided to move fowaard with it

                    // "I prototyped the entire website and tested it, gathering feedback from both internal team members and the client's side. I gathered that feedback and folded it back into the prototype iteratively. Because the side menu was built so each row was just one component in a repeatable auto-layout stack, adding a new section meant duplicating a row and renaming it. Nothing else had to move. That's the structure that made it possible to keep adding sections through the rest of the project without redesigning the menu each time.",

                    "I prototyped the entire website and tested it, gathering feedback from both internal team members and the client's side, and folded that feedback back into the prototype as I went. With the timeline already tight, rebuilding the menu every time a new section came in wasn't an option, so I built it so each row was just one component in a repeatable auto-layout stack. Adding a new section meant duplicating a row and renaming it. Nothing else had to move. That's the structure that made it possible to keep adding sections through the rest of the project without redesigning the menu each time.",
                    
                    // We were also able to add more sections in much easier. Since the prototyping helped establish a re-useable structure, implementing new sections within the side menu bar became much quicker.",

                 
                  ]}
                />
              </div>
              <CoverBox
                src={`${IMG}/sidebar-variants.webp`}
                alt="Side menu states: collapsed, expanded, active sub-page and adding a section, with the sidebar item variants below"
                aspect="2000/1333"
              />
              <CaseStudyBody
                paragraphs={[
                  "One of the main reasons we decided to go with this side menu was to help guide visitors from a broader entry point, and funnel them towards more specific content. Looking at how other websites handled deep category nesting, the side dropdown made sense, allowing users to view more organized content at their own pace.",
                ]}
              />
              <div className="flex flex-col gap-3">
                <CoverBox
                  src={`${IMG}/sidebar-in-page.webp`}
                  alt="The side menu instance shown inside a page wireframe, with the content column beside it"
                  aspect="562/357"
                  frameAspect="518/318"
                  tone="dark"
                  className="p-4 sm:p-6 xl:p-9"
                />
                <p
                  className="text-[11px] leading-[1.6] text-black/60 md:text-sm"
                  style={wdth}
                >
                  Same sidebar instance, shown in a page. Content column allows
                  the user to drill down into their desired sections.
                </p>
              </div>
            </div>

            {/* Mega menu */}
            <div className="flex flex-col gap-8 sm:gap-10">
              <div className="flex flex-col gap-6">
                <CaseStudyHeading>The mega-menu concept</CaseStudyHeading>
                <CaseStudyBody
                  paragraphs={[
                    // "A traditional dropdown didn't fit the client's needs, so our lead proposed replacing it with images. Sustainability and a thriving future are central to the client's mission, and an image-based menu gave us a chance to showcase their land and community in a way that reflects those values. I took the idea and designed the concept, which the client approved to move forward.",

                    // "However, this non-traditional drop-down did come with some trade-offs. Although more visually appealing, I did note that adding more than six main sections of our main navigation would be a problem. The images themselves could also be difficult as a unique image must be used for each section, and the images themselves could be distracting. All of these we made sure to inform the clients, making sure they were aware of the trade-offs.",

                    "A standard dropdown would have worked fine, but it felt boring. It didn't show off what the client had to offer, like their beautiful land and culture. This wasn't something they asked for, but we saw an opportunity. Our lead threw out an idea: what if we replaced the dropdown with images instead? Sustainability and a thriving future are central to the client's mission, so showcasing their land and community felt like a natural fit.",

                    "I went ahead and designed what it could look like. I worked out the overall layout, where the text would sit on each image, and how the hover effects would feel. I also tried to pick images that connected to each navigation heading, so the visuals weren't just decoration. The client loved it and decided to move forward with it.",

                    "That said, the image-based menu came with trade-offs. It wouldn't scale well past six main sections, every section needed its own unique image, and the imagery could pull attention away from the navigation itself. We walked the client through all of this, and they were comfortable accepting those trade-offs for the experience it created for their website.",
                  ]}
                />
              </div>
              <MediaSlider
                aspect="1633/1005"
                slides={[
                  {
                    src: `${IMG}/megamenu-wireframe.webp`,
                    alt: "Mega menu concept: a header navigation with a grid of image cards and titles",
                    label: "Lo-fi",
                    caption:
                      "Mega-menu concept that was mock-up for the client to view.",
                  },
                  {
                    src: `${IMG}/megamenu-hifi.webp`,
                    alt: "Hi-fi mega menu open under Governance, showing five image cards for each sub-section",
                    label: "Hi-fi",
                    caption:
                      "Hi-fi version of the mega menu, shown here open under the Governance nav item.",
                  },
                ]}
              />
            </div>

            {/* Final design */}
            <div
              id="final-design"
              className="scroll-mt-28 flex flex-col gap-8 sm:gap-10"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <CaseStudyEyebrow>Final design</CaseStudyEyebrow>
                  <CaseStudyHeading>
                    Ideation paid off: the final design ties the homepage, mega menu, and category pages into one flow the client and developer could walk through before build.
                  </CaseStudyHeading>
                </div>
                <CaseStudyBody
                  paragraphs={[
                    "The final design flowed a lot better, with a strong focus on user flow, navigability, and room to expand down the road. From there, we sent the designs off to the client so they could click through the prototype themselves and share any feedback. We also looped in the developer early to talk through what was feasible to build, so there wouldn't be any surprises later.",
                  ]}
                />
              </div>
              <CoverBox
                src={`${IMG}/final-design-flow.webp`}
                alt="Final design flow: the homepage, the community mega menu, and a category page with the side dropdown, annotated with how a user moves between them"
                aspect="1613/1273"
                frameAspect="2000/1601"
                tone="dark"
                className="p-2 sm:p-3 xl:p-6"
              />
              <MediaSlider
                aspect="1429/900"
                slides={[
                  {
                    src: `${IMG}/infinite-scroll.mp4`,
                    alt: "The old Heiltsuk Nation homepage, a single long-scrolling page",
                    label: "Before",
                    type: "video",
                    caption:
                      "Before: the old homepage, a single page that just kept getting longer as content was added.",
                  },
                  {
                    src: `${IMG}/heiltsuk-prototype.mp4`,
                    alt: "The final Heiltsuk Nation site prototype, showing the rebuilt structure in use",
                    label: "Final design",
                    type: "video",
                    caption:
                      "Final design: the rebuilt site, structured into pages that can grow without needing a redesign.",
                  },
                ]}
              />
            </div>

            {/* Handoff */}
            <div className="flex flex-col gap-8 sm:gap-10">
              <div className="flex flex-col gap-6">
                <CaseStudyHeading>
                  I completed the designs, but my internship ended mid development.
                </CaseStudyHeading>
                <CaseStudyBody
                  paragraphs={[
                    // Sad that it ended early 
                    // Hand off process was smooth as possible 

                    "I wish I could have stayed to see the developers build from my wireframes. Since I wouldn't be around to answer questions, I annotated the interactions right in Figma. Desktop was straightforward, but mobile needed more explaining, so I put together a separate set of mobile screens to make sure nothing got lost in the handoff.",

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
              className="scroll-mt-28 flex flex-col gap-8 sm:gap-10"
            >
              {REFLECTIONS.map(({ heading, body }, index) => (
                <div key={heading} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    {index === 0 && (
                      <CaseStudyEyebrow>Reflection</CaseStudyEyebrow>
                    )}
                    <CaseStudyHeading>{heading}</CaseStudyHeading>
                  </div>
                  <CaseStudyBody paragraphs={[body]} />
                </div>
              ))}
            </div>

            {/* Other works */}
            <div className="flex flex-col gap-8 sm:gap-10">
              <CaseStudyHeading>Other works</CaseStudyHeading>
              {/* Row of 3 that scrolls sideways once the cards would drop below min width. */}
              <div className="w-0 min-w-full overflow-x-auto pt-1 pb-4">
                <div className="flex w-full gap-6 sm:gap-8">
                  {OTHER_WORKS.map((work) => (
                    <div
                      key={work.company}
                      className="w-[280px] shrink-0 grow basis-[280px]"
                    >
                      <ProjectCard {...work} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
