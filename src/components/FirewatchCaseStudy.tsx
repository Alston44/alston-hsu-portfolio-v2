import { Fragment } from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { FramedScreenshot, Triptych } from "./ProjectMedia";
import {
  CaseStudyBody,
  CaseStudyEyebrow,
  CaseStudyHeading,
  CaseStudyToc,
  wdth,
} from "./CaseStudy";
import { LightboxTrigger } from "./Lightbox";

const TOC_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Problem", href: "#problem" },
  { label: "Discovery", href: "#discovery" },
  { label: "Ideation", href: "#ideation" },
  { label: "Decisions", href: "#decisions" },
  { label: "Solo redesign", href: "#after-course" },
  { label: "Reflection", href: "#reflection" },
];

// Final screens in flow order. Taller scroll-captures are cropped to one
// phone screen (393/852) in the grid and shown in full in the lightbox.
const SCREENS = [
  { file: "screen-home", alt: "Home screen with current conditions, nearby fires, and quick guides", caption: "Home: current conditions" },
  { file: "screen-map", alt: "Map screen showing nearby fires and shelters", caption: "Map: fires and shelters" },
  { file: "screen-map-detail", alt: "Map screen with Pacific Spirit Regional Park detail card expanded", caption: "Map: fire detail card" },
];

const REFLECTIONS = [
  {
    heading: "Talking to people shaped the app more than sketching did.",
    body: "Design principles look great on a slide, but they don't tell you where people get stuck. The interviews and survey showed the real problem was people not knowing what to do, not a missing feature, and testing showed exactly where a checkbox or a shelter icon lost them.",
  },
  {
    heading: "Splitting screens made consistency my job too.",
    body: "We split the screens between us and pieced the tested version together from both our sketches. It worked, but consistency didn't come easy at first: tap targets, spacing and navigation had to be agreed on, not assumed. Next time I'd think of stricter rules before dividing up the screens, so we're reconciling decisions instead of fixing design drifts.",
  },
  {
    heading: "What I'd test next.",
    body: "A cleaner interface isn't proof of a better one, and the redesign is the one part of this project I haven't tested. Next it goes through the same process: moderated first, then unmoderated in Maze. I'd start with the shelter task, since a quarter of testers tapped the map before finding the list. If that doesn't improve, the problem is the path from map to shelter list, not how it looks, and I'd fix that before touching more visuals. One of our interviewees took a whole day to find out about a fire. The real test of any version is whether someone finds out fast and knows what to do next.",
  },
];

const OTHER_WORKS = [
  {
    href: "/work/heiltsuk",
    title:
      "Building Heiltsuk Nation's site to grow, not just to be patched together.",
    company: "Burst! Creative Group",
    tags: ["2026", "Internship", "Web Design"],
    background: "linear-gradient(-48deg, rgb(250, 194, 197) 1%, rgb(247, 228, 228) 100%)",
    pillLabel: "View project",
    pillColor: "#b8373d",
    media: (
      <FramedScreenshot
        src="/images/projects/heiltsuk-nation.webp"
        alt="Heiltsuk Nation website homepage"
        size="lg"
      />
    ),
  },
  {
    href: "/work/avail",
    title:
      "Creating an app that helps BC Students Claim the Benefits they're unaware of.",
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

function MetaColumn({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-1.5 text-black/60 sm:w-auto sm:min-w-[120px] xl:min-w-0 xl:shrink-0">
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

export function FirewatchHero() {
  return (
    // Same fixed-height-per-breakpoint approach as AvailHero, capped so it
    // never grows taller than this no matter how wide the screen gets
    // (unlike a plain aspect-ratio box, which keeps growing with viewport
    // width and was pushing the title below the fold on wide screens).
    // Shrinks fluidly between the xl and 2xl breakpoints (same approach as
    // AvailHero/HeiltsukHero) so the title below isn't pushed below the fold
    // on 1280-1535px laptop screens; restores to the full size at 2xl+.
    <div
      className="relative h-[300px] w-full sm:h-[420px] xl:h-[calc(64px+min(820px,58vw)*0.5688)] 2xl:h-[calc(64px+min(1160px,100vw-128px)*0.5688)]"
      style={{ backgroundColor: "#f7f3ed" }}
    >
      {/* Capped at (roughly) the source photo's native width so it never gets
          scaled up past its own resolution on wide screens, which is what
          was causing the visible grain. Past that width the matching cream
          background shows instead of stretching the image further. sizes
          uses min() so the cap applies below 2100px too — a plain media
          query like "(min-width: 2100px) 2100px, 100vw" only kicked in past
          2100px and still asked for a full 100vw (doubled again on Retina)
          below that, which is what was still blurry on ordinary large
          screens. */}
      <div className="pointer-events-none absolute -top-[100px] bottom-0 left-1/2 w-full max-w-[2100px] -translate-x-1/2">
        <Image
          src="/images/projects/firewatch/hero-main.webp"
          alt="A hand holding a phone running Firewatch BC in a park, showing an active fire alert for Pacific Spirit Regional Park"
          fill
          sizes="min(2100px, 100vw)"
          className="object-cover object-[75%_75%]"
          priority
        />
      </div>
    </div>
  );
}

export default function FirewatchCaseStudy() {
  return (
    <div className="relative -mt-6 bg-white px-6 pt-[60px] pb-24 sm:-mt-8 sm:px-8 sm:pb-32 xl:-mt-10 xl:px-16">
      <div className="page-fade-in relative mx-auto flex max-w-[1920px] flex-col gap-16 sm:gap-20 xl:gap-24">
        {/* Same left edge as the header logo: this wrapper and the header nav share the same max-width and side padding. */}
        <div className="absolute top-0 bottom-0 left-0 hidden xl:block">
          <CaseStudyToc iconDir="/images/projects/heiltsuk" links={TOC_LINKS} />
        </div>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 xl:max-w-[736px] 2xl:max-w-[832px]">
          <div className="flex w-full flex-col gap-16 sm:gap-20 xl:gap-24">
            {/* Title + metadata */}
            <div className="flex flex-col gap-[75px] sm:gap-[94px] xl:gap-[118px]">
              <div className="flex flex-col gap-4 xl:gap-6">
                <h1
                  className="font-serif max-w-[1428px] text-[32px] leading-[1.1] text-black/60 sm:text-[41px] xl:text-[41px] 2xl:text-[46px]"
                  style={wdth}
                >
                  A wildfire alert app built to guide action, not just relay
                  information.
                </h1>
              </div>

              <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-y-8 xl:flex-nowrap xl:gap-x-6">
                <MetaColumn label="My Contributions">
                  <p>UI/UX Design</p>
                  <p>Prototyping</p>
                  <p>User research</p>
                  <p>Usability testing</p>
                </MetaColumn>
                <MetaColumn label="Duration">
                  <p>6 weeks</p>
                </MetaColumn>
                <MetaColumn label="Team">
                  <p>2 UI/UX Designers</p>
                  <p className="opacity-50">(Me)</p>
                  <p>1 Developer</p>
                  <p>1 Project manager</p>
                </MetaColumn>
                <MetaColumn label="Tools">
                  <p>Figma</p>
                  <p>Maze</p>
                  <p>Google Forms</p>
                </MetaColumn>
              </div>
            </div>

            {/* Overview */}
            <div
              id="overview"
              className="scroll-mt-28 flex flex-col gap-8 sm:gap-10 xl:gap-14"
            >
              <figure className="flex max-w-[900px] flex-col gap-3 border-l-4 border-black/70 pl-6">
                <blockquote
                  className="font-serif text-[22px] leading-[1.4] text-black/80 sm:text-[26px]"
                  style={wdth}
                >
                  &ldquo;It took me a whole day to actually know there was a
                  wildfire.&rdquo;
                </blockquote>
                <figcaption
                  className="text-[14px] leading-[1.4] text-black/60 sm:text-[16px]"
                  style={wdth}
                >
                  BC resident, interview
                </figcaption>
              </figure>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <CaseStudyEyebrow>Overview</CaseStudyEyebrow>
                  <CaseStudyHeading>
                    A school project about wildfire alerts, two rounds of
                    testing, and a redesign I did on my own afterward.
                  </CaseStudyHeading>
                </div>
                <div className="flex flex-col gap-5 sm:gap-6">
                  <CaseStudyBody
                    paragraphs={[
                      "The brief was open: design something that helps people, with no client attached. Our team (two designers, a developer and a PM) picked wildfire safety for BC residents, and we worked using the Lean UX method: guess, sketch, test, fix.",
                      "Everything in the tested sections is our course work. The redesign at the end is something I decided to do to continue to refine the app. The changes come from feedback we ran out of time to act on.",
                      "I was one of the two designers, and we split the screens between us. I built the MVP with my co-designer and tested it, talking to users directly, and helping write the interview and survey questions.",
                    ]}
                  />
                  <a
                    href="#after-course"
                    className="group flex w-fit items-center gap-0.5"
                  >
                    <span
                      className="text-[13px] font-medium tracking-[-0.48px] text-black/60 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-active:underline sm:text-[14px] md:text-[16px]"
                      style={wdth}
                    >
                      Jump to final designs
                    </span>
                    <Image
                      src="/images/projects/heiltsuk/icon-jump-arrow.svg"
                      alt=""
                      width={17}
                      height={17}
                      className="rotate-180 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
              <div className="flex w-full items-center justify-center rounded-card border border-black/5 bg-gradient-to-b from-[#ededed] to-[#e5e5e5] px-6 py-10 sm:px-10 sm:py-14">
                <div
                  className="relative w-[min(300px,100%,calc((100svh-200px)*0.4613))] overflow-hidden rounded-[12%/5.5%] sm:w-[min(380px,calc((100svh-232px)*0.4613))] md:w-[min(440px,calc((100svh-232px)*0.4613))]"
                  style={{ aspectRatio: "393/852" }}
                >
                  <LightboxTrigger
                    src="/images/projects/firewatch-map-1.webp"
                    alt="Firewatch BC app alert map screen"
                    className="absolute inset-0"
                  >
                    <Image
                      src="/images/projects/firewatch-map-1.webp"
                      alt="Firewatch BC app alert map screen"
                      fill
                      sizes="440px"
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
              <div className="flex flex-col gap-3">
                <CaseStudyEyebrow>Problem</CaseStudyEyebrow>
                <CaseStudyHeading>
                  Plenty of wildfire information exists. Most of it leaves
                  you to figure out what to do.
                </CaseStudyHeading>
              </div>
              <CaseStudyBody
                paragraphs={[
                  "We started with a guess. BC residents can already find hazard maps, air quality readings and news alerts, but when smoke rolls in they still want a plain answer to three questions: what's happening near me, how serious is it, and what do I do next. The tools we looked at showed a lot of raw data and left that last question to the user.",
                  "So our hunch was that people don't need more information, they need to be told what to do with it: fewer things on screen, each one answering a question a worried person is asking. But it was only a hunch until we began talking to the people.",
                ]}
              />
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
                    None of the 12 people we surveyed had ever learned what
                    to do in a wildfire.
                  </CaseStudyHeading>
                </div>
                <CaseStudyBody
                  paragraphs={[
                    "We ran a survey with 12 people and sat down with two BC residents for longer interviews. We asked less about feature wish-lists and more about what they actually do, and how they feel.",
                  ]}
                />
              </div>

              <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
                {[
                  { stat: "12", label: "Survey respondents" },
                  { stat: "2", label: "In-depth interviews" },
                ].map(({ stat, label }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <p
                      className="text-[32px] leading-none font-bold text-black/80 sm:text-[36px]"
                      style={wdth}
                    >
                      {stat}
                    </p>
                    <p
                      className="max-w-[160px] text-[14px] leading-[1.4] text-black/60 sm:text-[16px]"
                      style={wdth}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2">
                {[
                  {
                    quote:
                      "I don't know, actually. I feel like my first instinct would be to stay in the house. I need to look it up.",
                    avatar: "avatar-2",
                  },
                  {
                    quote:
                      "Information is not specific to my location, Information isn't updated often enough, Messages or alerts are unclear.",
                    avatar: "avatar-3",
                  },
                  {
                    quote:
                      "Maps with red spots showing it's here and here, that would be easier for me to understand.",
                    avatar: "avatar-5",
                  },
                  {
                    quote:
                      "when it comes to staying or evacuating, I don't know, actually…",
                    avatar: "avatar-1",
                  },
                ].map(({ quote, avatar }) => (
                  <div key={avatar} className="flex flex-col gap-4">
                    <p
                      className="font-serif text-[28px] leading-none text-black/30"
                      aria-hidden
                    >
                      &ldquo;
                    </p>
                    <p
                      className="text-[14px] leading-[1.5] text-black/70 sm:text-[15px]"
                      style={wdth}
                    >
                      {quote}
                    </p>
                    <Image
                      src={`/images/projects/firewatch/${avatar}.webp`}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                ))}
              </div>

              <CaseStudyBody
                paragraphs={[
                  "Another interviewee only found out about a fire because a family member called her that evening. No app, no alert. The survey told the same story: none of the 12 had learned wildfire safety steps, and most rated their confidence about evacuating at 2 out of 5 or lower. Our hunch held, and it went deeper than clutter: a lot of people simply didn't know what to do.",
                  "People wanted a real-time map and called the tools they'd tried cluttered and confusing. \"A simplified layout with large elements\" came up more than anything else, and offline access and alerts for their exact location came up without us asking. Mostly, they wanted less to think about.",
                  "People cared about feeling reassured as much as about being accurate, so the brief changed from \"show more information\" to \"show the right amount, in a way that still makes sense when someone's panicking.\" We pulled it together into a persona, Maya Thompson, built from our two interviewees (24 and 30, both in North Vancouver) and the survey. She's anxious, a bit distracted, and would rather be told what to do than shown everything.",
                  
                ]}
              />

              <div className="flex w-full items-center justify-center rounded-card border border-black/5 bg-gradient-to-b from-[#ededed] to-[#e5e5e5] p-6 sm:p-10 xl:p-14">
                <LightboxTrigger
                  src="/images/projects/firewatch/discovery-journey-map.webp"
                  alt="User journey map for checking wildfire information during a smokey day, showing goals, actions, thoughts, pain points, emotions, and opportunities across five stages"
                  className="relative block aspect-[809/649] w-full max-w-[600px] overflow-hidden rounded-card"
                >
                  <Image
                    src="/images/projects/firewatch/discovery-journey-map.webp"
                    alt="User journey map for checking wildfire information during a smokey day, showing goals, actions, thoughts, pain points, emotions, and opportunities across five stages"
                    fill
                    sizes="(min-width: 1280px) 600px, 80vw"
                    className="object-cover object-top"
                  />
                </LightboxTrigger>
              </div>
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
                    We each sketched screens on our own, then picked the
                    clearest ones for the version we tested.
                  </CaseStudyHeading>
                </div>
                <CaseStudyBody
                  paragraphs={[
                    "We ran a Crazy 8s session where the team each sketched specific screens of the app on our own. Then we put them side by side, which meant setting aside ideas we each liked for whichever screen answered those three questions most clearly.",
                  ]}
                />
              </div>

              <div className="flex w-full items-center justify-center rounded-card border border-black/5 bg-gradient-to-b from-[#ededed] to-[#e5e5e5] p-3 sm:p-6 xl:p-9">
                <LightboxTrigger
                  src="/images/projects/firewatch/ideation-sketches.webp"
                  alt="Six hand-drawn sketches from a Crazy 8s session: three app-concept wireframes and three paper prototypes for shelter and resource screens"
                  className="relative block aspect-[798/808] w-full max-w-[600px] overflow-hidden rounded-card bg-white"
                >
                  <Image
                    src="/images/projects/firewatch/ideation-sketches.webp"
                    alt="Six hand-drawn sketches from a Crazy 8s session: three app-concept wireframes and three paper prototypes for shelter and resource screens"
                    fill
                    sizes="(min-width: 1280px) 600px, 80vw"
                    className="object-cover object-top"
                  />
                </LightboxTrigger>
              </div>

              <CaseStudyBody
                paragraphs={[
                  <Fragment key="ideation-principles">
                    Four principles kept coming up as we worked:{" "}
                    <strong className="font-semibold text-black/80">
                      contrast and emphasis, simplicity, accessibility, and
                      consistency
                    </strong>
                    . You can see them in the tested screens: orange fire
                    warnings against a muted palette, a single-column
                    checklist instead of a dashboard, bigger tap targets after
                    round 1, and a bottom navigation that stays put.
                  </Fragment>,
                ]}
              />

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-8">
                {[
                  {
                    title: "Contrast & Emphasis",
                    body: "The important stuff has to jump out, not compete with everything else on screen.",
                  },
                  {
                    title: "Simplicity",
                    body: "Fewer choices per screen, so the next step is obvious.",
                  },
                  {
                    title: "Accessibility",
                    body: "Big tap targets and readable text, for someone using one hand or in a hurry.",
                  },
                  {
                    title: "Consistency",
                    body: "Navigation that stays put, so stress doesn't come with a learning curve.",
                  },
                ].map(({ title, body }) => (
                  <div
                    key={title}
                    className="flex flex-col gap-2 border-b border-black/10 pb-6"
                  >
                    <p
                      className="font-serif text-[20px] text-black/80 sm:text-[22px]"
                      style={wdth}
                    >
                      {title}
                    </p>
                    <p
                      className="text-[14px] leading-[1.5] text-black/60 sm:text-[15px]"
                      style={wdth}
                    >
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Decisions */}
            <div
              id="decisions"
              className="scroll-mt-28 flex flex-col gap-8 sm:gap-10"
            >
              <div className="flex flex-col gap-3">
                <CaseStudyEyebrow>Decisions</CaseStudyEyebrow>
                <CaseStudyHeading>
                  In round 1, people got stuck in three places. In round 2, we
                  checked whether our fixes helped.
                </CaseStudyHeading>
              </div>

              <CaseStudyBody
                paragraphs={[
                  "From our combined sketches I built the MVP, along with my co-designer, in Figma, around an evacuation checklist and a map of fires and shelters. Round 1 was in person: we watched people use it and could ask why they hesitated. They got stuck in the same three places again and again.",
                ]}
              />

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
                {[
                  {
                    src: "decisions-r1-checklist",
                    alt: "Immediate Actions checklist screen, round 1",
                    aspect: "245/520",
                    title: "Evacuation guidance",
                    desc: "Only the checkbox was tappable, not the whole row, and the steps weren't in order of urgency.",
                  },
                  {
                    src: "decisions-r1-map",
                    alt: "Map screen showing active wildfires with no location marker, round 1",
                    aspect: "238/520",
                    title: "Map indicators",
                    desc: "Nothing showed where you were, and tapping a fire label did nothing.",
                  },
                  {
                    src: "decisions-r1-shelter",
                    alt: "Map screen with three shelter icons highlighted, round 1",
                    aspect: "240/520",
                    title: "Shelter navigation",
                    desc: 'We put a small "3" on the shelter icon to mean three shelters nearby. No one read it that way.',
                  },
                ].map(({ src, alt, aspect, title, desc }) => (
                  <div key={src} className="flex flex-col gap-3">
                    <div
                      className="relative w-full overflow-hidden rounded-card"
                      style={{ aspectRatio: aspect }}
                    >
                      <LightboxTrigger
                        src={`/images/projects/firewatch/${src}.webp`}
                        alt={alt}
                        className="absolute inset-0"
                      >
                        <Image
                          src={`/images/projects/firewatch/${src}.webp`}
                          alt={alt}
                          fill
                          sizes="(min-width: 1280px) 340px, 30vw"
                          className="object-cover object-top"
                        />
                      </LightboxTrigger>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p
                        className="text-[15px] font-semibold text-black/80 sm:text-[16px]"
                        style={wdth}
                      >
                        {title}
                      </p>
                      <p
                        className="text-[14px] leading-[1.5] text-black/60 sm:text-[15px]"
                        style={wdth}
                      >
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <CaseStudyBody
                paragraphs={[
                  "For round 2 we switched to Maze, so people tested on their own with nobody watching: 5 participants, 7 tasks. We wanted to know if the fixes actually helped, not just whether they felt better to us. Only two tasks covered the round 1 fixes, so those are the ones I'm reporting.",
                ]}
              />

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
                {[
                  {
                    src: "decisions-r2-checklist",
                    alt: "Immediate Actions checklist screen, round 2",
                    aspect: "245/520",
                    title: "Evacuation guidance",
                    desc: "Steps are in order of urgency, and the whole row is tappable.",
                  },
                  {
                    src: "decisions-r2-map",
                    alt: "Map screen with current location marker highlighted, round 2",
                    aspect: "238/520",
                    title: "Map indicators",
                    desc: "Your location now shows on the map, and fire labels open when you tap them.",
                  },
                  {
                    src: "decisions-r2-shelter",
                    alt: "Map screen with three shelter icons highlighted and a shelters list, round 2",
                    aspect: "240/520",
                    title: "Shelter navigation",
                    desc: 'Tap "Shelters" to see every option nearby, or tap a pin to open that shelter on its own.',
                  },
                ].map(({ src, alt, aspect, title, desc }) => (
                  <div key={src} className="flex flex-col gap-3">
                    <div
                      className="relative w-full overflow-hidden rounded-card"
                      style={{ aspectRatio: aspect }}
                    >
                      <LightboxTrigger
                        src={`/images/projects/firewatch/${src}.webp`}
                        alt={alt}
                        className="absolute inset-0"
                      >
                        <Image
                          src={`/images/projects/firewatch/${src}.webp`}
                          alt={alt}
                          fill
                          sizes="(min-width: 1280px) 340px, 30vw"
                          className="object-cover object-top"
                        />
                      </LightboxTrigger>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p
                        className="text-[15px] font-semibold text-black/80 sm:text-[16px]"
                        style={wdth}
                      >
                        {title}
                      </p>
                      <p
                        className="text-[14px] leading-[1.5] text-black/60 sm:text-[15px]"
                        style={wdth}
                      >
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {(() => {
                const results = [
                  {
                    task: "Find the nearest shelter",
                    success: "100%",
                    dropoff: "0%",
                    misclick: "25%",
                  },
                  {
                    task: "Read the fire map and report what's happening nearby",
                    success: "100%",
                    dropoff: "0%",
                    misclick: "9.1%",
                  },
                ];
                return (
                  <>
                    {/* Mobile: stacked cards so the numbers are never scrolled out of view */}
                    <div className="flex flex-col gap-6 sm:hidden">
                      {results.map(({ task, success, dropoff, misclick }) => (
                        <div
                          key={task}
                          className="flex flex-col gap-3 border-b border-black/10 pb-6 last:border-b-0 last:pb-0"
                        >
                          <p
                            className="text-[14px] leading-[1.4] text-black/70"
                            style={wdth}
                          >
                            {task}
                          </p>
                          <div className="flex gap-8">
                            {[
                              { label: "Success", value: success },
                              { label: "Drop-off", value: dropoff },
                              { label: "Misclick", value: misclick },
                            ].map(({ label, value }) => (
                              <div key={label} className="flex flex-col gap-0.5">
                                <p
                                  className="text-[11px] text-black/50"
                                  style={wdth}
                                >
                                  {label}
                                </p>
                                <p
                                  className="text-[18px] font-semibold text-black/80"
                                  style={wdth}
                                >
                                  {value}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* sm and up: full table */}
                    <table className="hidden w-full border-collapse sm:table">
                      <thead>
                        <tr className="border-b border-black/10">
                          {["Task", "Success", "Drop-off", "Misclick"].map(
                            (col, i) => (
                              <th
                                key={col}
                                className={`py-3 text-[15px] font-semibold text-black/80 ${i === 0 ? "text-left" : "text-right"}`}
                                style={wdth}
                              >
                                {col}
                              </th>
                            ),
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {results.map(({ task, success, dropoff, misclick }) => (
                          <tr key={task} className="border-b border-black/10">
                            <td
                              className="max-w-[220px] py-5 pr-4 text-[15px] leading-[1.4] text-black/70"
                              style={wdth}
                            >
                              {task}
                            </td>
                            <td
                              className="py-5 text-right text-[20px] font-semibold text-black/80"
                              style={wdth}
                            >
                              {success}
                            </td>
                            <td
                              className="py-5 text-right text-[20px] font-semibold text-black/80"
                              style={wdth}
                            >
                              {dropoff}
                            </td>
                            <td
                              className="py-5 text-right text-[20px] font-semibold text-black/80"
                              style={wdth}
                            >
                              {misclick}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                );
              })()}

              <CaseStudyBody
                paragraphs={[
                  "Both tasks hit 100% success with nobody dropping off. The number I care about more is the misclicks: on the shelter task, a quarter of testers tapped the map first before finding the shelter list. They got to the right place, but the first move wasn't obvious. With only 5 people and no round 1 numbers to compare against, I can't say the fixes caused this, only that nobody got stuck.",
                ]}
              />
            </div>

            {/* After the course */}
            <div
              id="after-course"
              className="scroll-mt-28 flex flex-col gap-8 sm:gap-10"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <CaseStudyEyebrow>Solo redesign</CaseStudyEyebrow>
                  <CaseStudyHeading>
                    The feedback we ran out of time to work on.
                  </CaseStudyHeading>
                </div>
                <CaseStudyBody
                  paragraphs={[
                    "Testing also gave us feedback we wrote down but never got to design for. Everything above is what we handed in for the course, but what follows is a redesign I did afterward on my own, based on leftover feedback. It hasn’t been tested yet, so read it as my answer to that feedback, not a proven fix.",
                  ]}
                />
              </div>

              <div className="flex flex-col gap-6">
                {[
                  {
                    title: "Map legibility",
                    desc: "The dark theme and busy road lines made the map hard to read. Testers told us that directly.",
                  },
                  {
                    title: "Visual trust",
                    desc: "Testers said the UI felt dated, closer to 2000s software than something you'd trust in an emergency.",
                  },
                  {
                    title: "Familiar interactions",
                    desc: "Map markers and tap targets didn't work like the map apps people already know. The team had planned to make the onboarding icon legend required reading, but it never shipped.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex flex-col gap-1">
                    <p
                      className="text-[15px] font-semibold text-black/80 sm:text-[16px]"
                      style={wdth}
                    >
                      {title}
                    </p>
                    <p
                      className="text-[14px] leading-[1.5] text-black/60 sm:text-[15px]"
                      style={wdth}
                    >
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

              {[
                {
                  key: "home",
                  cellAspect: "440/958",
                  cellRadius: "5% / 2.3%",
                  oldAlt: "Old home screen: dark-themed with a boxed evacuation alert",
                  newAlt: "Redesigned home screen: light-themed with the alert integrated into the map",
                  caption:
                    "Same information (alert status, map, nearby fires), but without the dark theme and the boxed-in feel.",
                },
                {
                  key: "marker",
                  cellAspect: "4/3",
                  cellRadius: "var(--radius-card)",
                  oldAlt: "Old fire marker: a plain label with no detail",
                  newAlt: "New fire marker: a cluster icon showing air quality and fire status",
                  caption:
                    "The old pin was a stock map icon that told you nothing. The new cluster shows what's there (park, air quality, active fire) before you tap.",
                },
                {
                  key: "infocard",
                  cellAspect: "4/3",
                  cellRadius: "var(--radius-card)",
                  oldAlt: "Old info card showing three lines of plain stats",
                  newAlt: "New info card styled like a Google or Apple Maps listing",
                  caption:
                    "Tapping a marker used to give you three lines of stats. Now it opens something closer to a Google or Apple Maps listing: a warning banner, hours, rating, actions and photos. Something more familiar to the user.",
                },
                {
                  key: "pin",
                  cellAspect: "4/3",
                  cellRadius: "var(--radius-card)",
                  oldAlt: "Old current-location marker: a red pin on a dark map",
                  newAlt: "New current-location marker: a blue radar dot on a light map",
                  caption:
                    "The current-location marker went from a generic red pin to the blue radar dot people know from other map apps as \"this is me,\" and tells them where they are facing.",
                },
              ].map(({ key, cellAspect, cellRadius, oldAlt, newAlt, caption }) => (
                <div key={key} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-3 rounded-card border border-black/5 bg-gradient-to-b from-[#ededed] to-[#e5e5e5] p-3 sm:gap-6 sm:p-6 xl:gap-9 xl:p-9">
                    {[
                      {
                        src: `compare-${key}-old`,
                        alt: oldAlt,
                        label: "Before",
                      },
                      {
                        src: `compare-${key}-new`,
                        alt: newAlt,
                        label: "After",
                      },
                    ].map(({ src, alt, label }) => (
                      <div key={src} className="flex flex-col gap-2">
                        <div
                          className="relative w-full overflow-hidden"
                          style={{ aspectRatio: cellAspect, borderRadius: cellRadius }}
                        >
                          <LightboxTrigger
                            src={`/images/projects/firewatch/${src}.webp`}
                            alt={alt}
                            className="absolute inset-0"
                          >
                            <Image
                              src={`/images/projects/firewatch/${src}.webp`}
                              alt={alt}
                              fill
                              sizes="(min-width: 1280px) 570px, 45vw"
                              className="object-contain"
                            />
                          </LightboxTrigger>
                        </div>
                        <p
                          className="text-center text-[11px] leading-[1.3] text-black/60 md:text-sm"
                          style={wdth}
                        >
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p
                    className="text-[13px] leading-[1.5] text-black/60 sm:text-[14px]"
                    style={wdth}
                  >
                    {caption}
                  </p>
                </div>
              ))}

              <CaseStudyBody
                paragraphs={[
                  "Here's how it comes together on the home screen and the map:",
                ]}
              />

              <div className="grid w-full grid-cols-3 gap-3 rounded-card border border-black/5 bg-gradient-to-b from-[#ededed] to-[#e5e5e5] p-3 sm:gap-6 sm:p-6 xl:gap-9 xl:p-9">
                {SCREENS.map(({ file, alt, caption }) => (
                  <div key={file} className="flex flex-col gap-1.5 sm:gap-2">
                    <LightboxTrigger
                      src={`/images/projects/firewatch/${file}.webp`}
                      alt={alt}
                      className="relative block aspect-[393/852] w-full overflow-hidden rounded-[5%/2.3%] bg-white"
                    >
                      <Image
                        src={`/images/projects/firewatch/${file}.webp`}
                        alt={alt}
                        fill
                        sizes="(min-width: 1280px) 340px, 30vw"
                        className="object-cover object-top"
                      />
                    </LightboxTrigger>
                    <p
                      className="text-center text-[11px] leading-[1.3] text-black/60 md:text-sm"
                      style={wdth}
                    >
                      {caption}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3 rounded-card border border-black/5 bg-gradient-to-b from-[#ededed] to-[#e5e5e5] p-3 sm:gap-6 sm:p-6 xl:gap-9 xl:p-9">
                  {[
                    { src: "redesign-old", label: "Before" },
                    { src: "redesign-new", label: "After" },
                  ].map(({ src, label }) => (
                    <div key={src} className="flex flex-col items-center gap-2">
                      <video
                        src={`/images/projects/firewatch/${src}.mp4`}
                        controls
                        playsInline
                        preload="metadata"
                        aria-label={`${label}: walkthrough of the app`}
                        className="w-full max-w-[320px] rounded-[5%/2.3%] bg-white"
                        style={{ aspectRatio: "840/1816" }}
                      />
                      <p
                        className="text-center text-[11px] leading-[1.3] text-black/60 md:text-sm"
                        style={wdth}
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
                <p
                  className="text-[13px] leading-[1.5] text-black/60 sm:text-[14px]"
                  style={wdth}
                >
                  The same flow in the original design (left) and the redesign
                  (right). Press play on either to step through it.
                </p>
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
              <div className="w-0 min-w-full overflow-x-auto pt-1 pb-4">
                <div className="flex w-full gap-6 sm:gap-8">
                  {OTHER_WORKS.map((work) => (
                    <div
                      key={work.company}
                      className="w-[280px] shrink-0 grow basis-[280px] xl:w-auto xl:min-w-0 xl:shrink xl:basis-0"
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
