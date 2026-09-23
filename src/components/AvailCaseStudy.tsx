import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { LightboxTrigger } from "./Lightbox";
import { FramedScreenshot, Triptych } from "./ProjectMedia";
import {
  CaseStudyBody,
  CaseStudyEyebrow,
  CaseStudyHeading,
  CaseStudyMedia,
  CaseStudyToc,
  ContainBox,
  wdth,
} from "./CaseStudy";

const IMG = "/images/projects/avail";

const TOC_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Problem", href: "#problem" },
  { label: "Discovery", href: "#discovery" },
  { label: "Ideation", href: "#ideation" },
  { label: "Decisions", href: "#decisions" },
  { label: "Screens", href: "#final-design" },
  { label: "Reflection", href: "#reflection" },
];

// Final screens in flow order. Taller scroll-captures are cropped to one
// phone screen (393/852) in the grid and shown in full in the lightbox.
const SCREENS = [
  { file: "splash", alt: "Splash screen" },
  { file: "welcome", alt: "Welcome screen: Find student benefits you didn't know existed" },
  { file: "quiz-1", alt: "Quiz step 1: full-time or part-time" },
  { file: "quiz-2", alt: "Quiz step 2: type of school" },
  { file: "quiz-3", alt: "Quiz step 3: annual household income" },
  { file: "quiz-4", alt: "Quiz step 4: student status" },
  { file: "quiz-5", alt: "Quiz step 5: a few more questions" },
  { file: "loading", alt: "Loading screen: Finding your benefits" },
  { file: "home", alt: "Home screen with estimated annual value and top matches" },
  { file: "benefits", alt: "Benefits list: 5 benefits found" },
  { file: "benefit-detail", alt: "Benefit detail: BC Access Grant" },
  { file: "profile", alt: "Profile screen with answers used to match benefits" },
  { file: "ask", alt: "Ask Avail chat with guided prompts" },
  { file: "ask-keyboard", alt: "Ask Avail chat with the keyboard open, typing a question" },
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
    href: "/work/heiltsuk",
    title:
      "Building Heiltsuk Nation's site to grow, not just to be patched together.",
    company: "Burst! Creative Group",
    tags: ["2026", "Internship", "Web Design"],
    background: "#F7F7F7",
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
    href: "#",
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
    href: "#",
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

export function AvailHero() {
  return (
    // xl height matches HeiltsukHero: pt-16 + a max-1160px-wide 1120/637 card
    <div className="relative h-[300px] w-full sm:h-[420px] xl:h-[calc(64px+min(1160px,100vw-128px)*0.5688)]">
      <div className="pointer-events-none absolute inset-x-0 -top-[100px] bottom-0">
        <Image
          src={`${IMG}/case-hero-v4.webp`}
          alt="Avail app hero"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>
    </div>
  );
}

export default function AvailCaseStudy() {
  return (
    <div className="relative -mt-6 bg-white px-6 pt-[60px] pb-24 sm:-mt-8 sm:px-8 sm:pb-32 xl:-mt-10 xl:px-16">
      <div className="page-fade-in relative mx-auto flex max-w-[1920px] flex-col gap-16 sm:gap-20 xl:gap-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 xl:flex-row xl:items-start xl:gap-16">
          <CaseStudyToc iconDir="/images/projects/heiltsuk" links={TOC_LINKS} />
          <div className="flex w-full flex-col gap-16 sm:gap-20 xl:gap-24">
            {/* Title + metadata */}
            <div className="flex flex-col gap-[75px] sm:gap-[94px] xl:gap-[118px]">
              <div className="flex flex-col gap-4 xl:gap-6">
                <p
                  className="text-[14px] font-medium tracking-[0.4px] text-black/60 sm:text-[18px] md:text-[22px]"
                  style={wdth}
                >
                  Avail
                </p>
                <h1
                  className="font-serif max-w-[1428px] text-[35px] leading-[1.1] text-black/60 sm:text-[44px] md:text-[55px]"
                  style={wdth}
                >
                  Creating an app that helps BC Students Claim the Benefits
                  they&rsquo;re already owed.
                </h1>
              </div>

              <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-y-8">
                <MetaColumn label="My Contributions">
                  <p>Research</p>
                  <p>UI/UX Design</p>
                  <p>Prototyping</p>
                  <p>User research</p>
                  <p>Responsiveness</p>
                  <p>Design system</p>
                </MetaColumn>
                <MetaColumn label="Duration">
                  <p>4 weeks</p>
                </MetaColumn>
                <MetaColumn label="Team">
                  <p>
                    2 UI/UX Designers <span className="opacity-50">(me)</span>
                  </p>
                  <p>1 Developer</p>
                </MetaColumn>
                <MetaColumn label="Tools">
                  <p>React Native, Expo, Anthropic Claude API</p>
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
                      "Avail is a mobile-first tool that matches BC students to benefits they didn't know they qualified for, built as a final project for a BCIT app development course. It walks a student through a short quiz, matches them with BC benefit programs using AI, and provides results they can browse, filter, apply, or ask follow-up questions through Ask Avail, an in-app AI chat assistant. The app is functional, not just a static prototype, and runs on Expo. The demo below is what the running app looks like.",
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
                      src="/images/projects/heiltsuk/icon-jump-arrow.svg"
                      alt=""
                      width={17}
                      height={17}
                      className="rotate-[135deg] transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:translate-y-1"
                    />
                  </a>
                </div>
              </div>

              <div className="flex w-full items-center justify-center rounded-lg border border-black/5 bg-gradient-to-b from-[#ededed] to-[#e5e5e5] px-6 py-10 sm:px-10 sm:py-14">
                <div
                  className="relative w-[min(300px,100%)] overflow-hidden rounded-[12%/5.5%] sm:w-[380px] md:w-[440px]"
                  style={{ aspectRatio: "393/852" }}
                >
                  <video
                    src={`${IMG}/avail-demo.mp4`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
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
                  People have missed out on close to $9B in benefits over
                  five years, simply because they don&rsquo;t know the
                  programs exist.
                </CaseStudyHeading>
              </div>
              <div className="flex flex-col gap-6 rounded-lg bg-[#0d2422] px-6 py-10 text-white sm:px-10 sm:py-14">
                <p
                  className="text-[40px] leading-none font-bold sm:text-[56px] md:text-[72px]"
                  style={wdth}
                >
                  $9B
                </p>
                <div
                  className="flex flex-col gap-4 text-[12px] leading-[1.7] tracking-[-0.25px] text-white/80 sm:text-[14px] md:text-[18px]"
                  style={wdth}
                >
                  <p>
                    Canada&rsquo;s Parliamentary Budget Officer found benefits
                    missed by people who don&rsquo;t file taxes add up to
                    about $9 billion over five years, roughly $1.7&ndash;1.9B
                    a year. People aren&rsquo;t ineligible, they just
                    don&rsquo;t know the programs exist, the gap Avail&rsquo;s
                    matching and explanation screens are built to close.
                  </p>
                  <p>
                    Existing tools cover parts of this.{" "}
                    <strong className="font-semibold">
                      Canada.ca&rsquo;s Benefits Finder
                    </strong>{" "}
                    is a web checklist with no explanation of why a result
                    matches. <strong className="font-semibold">KOHO</strong>{" "}
                    speeds up access to benefits you&rsquo;re already
                    approved for, like early CRA payment access, it
                    doesn&rsquo;t help you discover ones you haven&rsquo;t
                    applied for. Avail combines discovery with reasoning:
                    mobile, student-specific, and explains why each match
                    applies.
                  </p>
                </div>
              </div>
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
                    Feedback from government contacts, reached through user
                    research, forced us to rethink who this was actually for.
                  </CaseStudyHeading>
                </div>
                <CaseStudyBody
                  paragraphs={[
                    "Our original proposal covered federal and provincial benefits for all Canadians. During our brainstorming phase, our instructor took the proposal to contacts in government for feedback, helping direct us to a more achievable outcome in a shorter time frame, as we only had 4 weeks until the deadline.",
                  ]}
                />
              </div>
              <div className="flex flex-col gap-4 rounded-lg bg-[#0e9090] px-6 py-8 text-white sm:px-10 sm:py-10">
                <p
                  className="text-[16px] leading-[1.5] italic sm:text-[18px] md:text-[22px]"
                  style={wdth}
                >
                  &ldquo;No single &lsquo;centralized&rsquo; system exists
                  across federal and provincial benefits. You&rsquo;d be
                  better off narrowing your scope, province vs. federal, and
                  one population vs. others.&rdquo;
                </p>
                <p
                  className="text-[13px] text-white/70 sm:text-[15px]"
                  style={wdth}
                >
                  &mdash; Feedback from government contacts
                </p>
              </div>
              <CaseStudyBody
                paragraphs={[
                  "The response flagged a problem we'd missed: federal and provincial benefits come from separate systems with no existing shared API. Matching across both in 4 weeks meant giving answers we couldn't verify. The closest thing to a real data source turned out to be province-only, and even that took stitching together separate open datasets.",
                  <span key="pivot">
                    With this new information, we pivoted to focusing on only
                    BC student benefits: <strong className="font-semibold">one province</strong>,{" "}
                    <strong className="font-semibold">one population</strong>,
                    a{" "}
                    <strong className="font-semibold">
                      defined set of programs with public eligibility data
                    </strong>
                    . This helped simplify our project scope.
                  </span>,
                ]}
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
                    Established the token system and validated core layout
                    patterns before moving into individual screens.
                  </CaseStudyHeading>
                </div>
                <CaseStudyBody
                  paragraphs={[
                    "With two designers splitting screens and one developer waiting to build, there wasn't room for our styles to drift apart mid-project and get corrected later. Before splitting screens with my co-designer, I built the token system: colour, type, spacing, states. One source, so neither of us had to reconcile our own version later.",
                  ]}
                />
              </div>
              <ContainBox
                src={`${IMG}/style-guide.webp`}
                alt="Avail design token system — colour, type, spacing, and button styles"
                aspect="1429/910"
              />
              <CaseStudyBody
                paragraphs={[
                  "A teal scale, neutral greys, and success/warning/error states, each with a fill, outline, and text variant. Category labels use the same three-part structure:",
                ]}
              />
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="rounded-lg px-5 py-2.5 text-[14px] font-medium sm:text-[16px]"
                  style={{ backgroundColor: "#EBF0FF", color: "#3A349E", ...wdth }}
                >
                  Student Aid
                </span>
                <span
                  className="rounded-lg px-5 py-2.5 text-[14px] font-medium sm:text-[16px]"
                  style={{ backgroundColor: "#FFF6EA", color: "#9C442A", ...wdth }}
                >
                  Health
                </span>
                <span
                  className="rounded-lg px-5 py-2.5 text-[14px] font-medium sm:text-[16px]"
                  style={{ backgroundColor: "#FDF0F7", color: "#7B1884", ...wdth }}
                >
                  Tax Credit
                </span>
              </div>
              <CaseStudyBody
                paragraphs={[
                  "Spacing is named by where it's used rather than by scale number: tightest between an icon and its label, small between filter pills or quiz options, larger between cards, largest between sections.",
                ]}
              />
            </div>

            {/* An early direction we dropped */}
            <div className="flex flex-col gap-8 sm:gap-10">
              <div className="flex flex-col gap-6">
                <CaseStudyHeading>
                  An early direction we dropped
                </CaseStudyHeading>
                <CaseStudyBody
                  paragraphs={[
                    "In some of our early iterations, we explored an icon grid. However, we felt like icons couldn't show the same nuance these answers really needed. For instance, income brackets or immigration status don't really have an icon or symbol to represent them. We also cut the number of options per screen, aiming for four to five choices at most, since having more than seven was too much for the user to hold in mind. The final version favours a shorter list over an icon grid.",
                  ]}
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-9">
                <CaseStudyMedia aspect="901/717">
                  <div className="absolute inset-0 flex items-center justify-center gap-[6%]">
                    {[
                      { src: "sketch-icon-grid", alt: "Early sketch: icon grid for quiz answers", w: 310 },
                      { src: "sketch-list", alt: "Early sketch: list of quiz answers", w: 320 },
                    ].map((sketch) => (
                      <LightboxTrigger
                        key={sketch.src}
                        src={`${IMG}/${sketch.src}.webp`}
                        alt={sketch.alt}
                        className="relative h-[80%] overflow-hidden rounded-[10px] bg-white sm:rounded-xl"
                      >
                        <div
                          className="relative h-full"
                          style={{ aspectRatio: `${sketch.w}/550` }}
                        >
                          <Image
                            src={`${IMG}/${sketch.src}.webp`}
                            alt={sketch.alt}
                            fill
                            sizes="(min-width: 1280px) 300px, 40vw"
                            className="object-cover"
                          />
                        </div>
                      </LightboxTrigger>
                    ))}
                  </div>
                </CaseStudyMedia>
                <CaseStudyMedia aspect="901/717">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <LightboxTrigger
                      src={`${IMG}/quiz-school-type.webp`}
                      alt="Final quiz screen: What type of school are you attending?"
                      className="relative h-[84%] overflow-hidden rounded-[12%/5.5%] bg-white"
                    >
                      <div className="relative h-full" style={{ aspectRatio: "393/852" }}>
                        <Image
                          src={`${IMG}/quiz-school-type.webp`}
                          alt="Final quiz screen: What type of school are you attending?"
                          fill
                          sizes="(min-width: 1280px) 300px, 40vw"
                          className="object-cover"
                        />
                      </div>
                    </LightboxTrigger>
                  </div>
                </CaseStudyMedia>
                <CaseStudyMedia aspect="901/717">
                  <LightboxTrigger
                    src={`${IMG}/sketch-sheet.webp`}
                    alt="Hand-drawn wireframe sketches of every screen"
                    className="absolute left-1/2 top-1/2 aspect-[2037/1299] w-[85%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[10px] bg-white sm:rounded-xl"
                  >
                    <Image
                      src={`${IMG}/sketch-sheet.webp`}
                      alt="Hand-drawn wireframe sketches of every screen"
                      fill
                      sizes="(min-width: 1280px) 500px, 85vw"
                      className="object-cover"
                    />
                  </LightboxTrigger>
                </CaseStudyMedia>
                <CaseStudyMedia aspect="901/717">
                  <LightboxTrigger
                    src={`${IMG}/screens-grid.webp`}
                    alt="Final Avail screens in sequence"
                    className="absolute inset-x-[10%] inset-y-[8%]"
                  >
                    <Image
                      src={`${IMG}/screens-grid.webp`}
                      alt="Final Avail screens in sequence"
                      fill
                      sizes="(min-width: 1280px) 500px, 80vw"
                      className="object-contain"
                    />
                  </LightboxTrigger>
                </CaseStudyMedia>
              </div>
            </div>

            {/* Decisions */}
            <div
              id="decisions"
              className="scroll-mt-28 flex flex-col gap-8 sm:gap-10"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <CaseStudyEyebrow>Decisions</CaseStudyEyebrow>
                  <CaseStudyHeading>
                    Onboarding and results stayed simple by design. The chat
                    prompts didn&rsquo;t, until we noticed they only worked
                    for some users.
                  </CaseStudyHeading>
                </div>
                <CaseStudyBody
                  paragraphs={[
                    "The design rests on four decisions. First, Avail positions itself as a discovery tool, not an eligibility checker, welcome copy and \"likely eligible\" badges make that distinction visible on screen rather than buried in fine print. Second, onboarding stays minimal: a 5-question quiz, under 2 minutes, no account required. Third, results appear in three ways depending on how deep a user wants to go, top 3 on Home, a filterable Benefits list, and a detail page with eligibility, how to apply, and a source link. Fourth, the Ask Avail chat opens with guided prompts instead of a blank search bar, since an unfamiliar AI feature already causes hesitation, and not knowing where to start would just make it worse.",
                    "Beyond the UX, a few technical calls changed what was possible. Claude handled benefit matching since no unified government API exists to integrate against, Sonnet ran matching where accuracy mattered most, Haiku ran the cheaper, faster chat. Everything lives in local AsyncStorage, no backend, keeping sensitive fields like immigration status on-device.",
                    "The Ask Avail chat's guided prompts needed their own adjustments as well. The first version referenced a specific benefit and condition directly, \"What's the deadline for the BC Access Grant?\", \"Do I qualify if I'm part-time?\" Fine if that's what a user matched with, confusing if it wasn't.",
                  ]}
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-9">
                <div className="mx-auto w-fit rounded-lg border border-black/5 bg-gradient-to-b from-[#ededed] to-[#e5e5e5] px-6 py-10 sm:px-10 sm:py-14">
                  <div
                    className="relative w-[220px] overflow-hidden rounded-[26px] sm:w-[260px] sm:rounded-[31px]"
                    style={{ aspectRatio: "393/852" }}
                  >
                    <LightboxTrigger
                      src={`${IMG}/ask-avail.webp`}
                      alt="Ask Avail chat screen with the original guided prompts highlighted"
                      className="absolute inset-0"
                    >
                      <Image
                        src={`${IMG}/ask-avail.webp`}
                        alt="Ask Avail chat screen with the original guided prompts highlighted"
                        fill
                        sizes="260px"
                        className="object-cover object-top"
                      />
                    </LightboxTrigger>
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="flex flex-col gap-2 rounded-lg bg-gradient-to-b from-[#ededed] to-[#e5e5e5] px-8 py-10 sm:px-10 sm:py-12">
                    <p
                      className="text-[13px] font-bold text-black/60 sm:text-[15px]"
                      style={wdth}
                    >
                      Before
                    </p>
                    <div className="flex flex-col gap-3">
                      {[
                        "What's the deadline for the BC Access Grant?",
                        "Do I qualify if I'm part-time?",
                        "Which benefit gives me the most money?",
                      ].map((prompt) => (
                        <p
                          key={prompt}
                          className="rounded-2xl bg-[#E0F4F4] px-5 py-4 text-[13px] text-[#0a6b6b] sm:text-[15px]"
                          style={wdth}
                        >
                          {prompt}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 rounded-lg bg-gradient-to-b from-[#ededed] to-[#e5e5e5] px-8 py-10 sm:px-10 sm:py-12">
                    <p
                      className="text-[13px] font-bold text-black/60 sm:text-[15px]"
                      style={wdth}
                    >
                      After
                    </p>
                    <div className="flex flex-col gap-3">
                      {[
                        "Which benefit gives me the most money?",
                        "How do I apply for my matched benefits?",
                        "What documents do I need to apply?",
                      ].map((prompt) => (
                        <p
                          key={prompt}
                          className="rounded-2xl bg-[#E0F4F4] px-5 py-4 text-[13px] text-[#0a6b6b] sm:text-[15px]"
                          style={wdth}
                        >
                          {prompt}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <CaseStudyBody
                paragraphs={[
                  "We rewrote the suggested prompts to match regardless of which benefits a user actually matched with: \"Which benefit gives me the most money?\", \"How do I apply for my matched benefits?\", \"What documents do I need to apply?\" Moreover, the user is already matched with the benefits based on their selection on the home, benefits page, and details page, so they will have a good idea on what they may want to ask Avail's chat already.",
                ]}
              />
            </div>

            {/* The Screens */}
            <div
              id="final-design"
              className="scroll-mt-28 flex flex-col gap-8 sm:gap-10"
            >
              <div className="flex flex-col gap-6">
                <CaseStudyHeading>The Screens</CaseStudyHeading>
                <CaseStudyBody
                  paragraphs={[
                    "The full flow, frame by frame: onboarding through to a matched benefit, browsing, chat, and profile.",
                  ]}
                />
              </div>
              <ContainBox
                src={`${IMG}/sitemap.webp`}
                alt="Avail site map: intake, personalization, matching and Ask Avail stages"
                aspect="372/286"
              />
              <div className="grid w-full grid-cols-3 gap-3 rounded-lg border border-black/5 bg-gradient-to-b from-[#ededed] to-[#e5e5e5] p-3 sm:gap-6 sm:p-6 xl:gap-9 xl:p-9">
                {SCREENS.map(({ file, alt }) => (
                  <LightboxTrigger
                    key={file}
                    src={`${IMG}/${file}.webp`}
                    alt={alt}
                    className="relative block aspect-[393/852] w-full overflow-hidden rounded-[5%/2.3%] bg-white"
                  >
                    <Image
                      src={`${IMG}/${file}.webp`}
                      alt={alt}
                      fill
                      sizes="(min-width: 1280px) 340px, 30vw"
                      className="object-cover object-top"
                    />
                  </LightboxTrigger>
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
                    Building the design system before dividing screens changed
                    how cleanly this translated into real code.
                  </CaseStudyHeading>
                </div>
                <CaseStudyBody
                  paragraphs={[
                    "I used auto-layout from the start, not just at handoff. The Design System section shows the token structure that came out of it. It kept the team consistent, and it's what let the Expo build the developer created match the Figma file with little back-and-forth. That clean handoff also meant more of the four weeks went into getting the matching logic right.",
                    "Some other key takeaways from this project:",
                  ]}
                />
              </div>
              <div className="flex flex-col gap-4 sm:gap-6">
                {[
                  {
                    number: "01",
                    title: "A confident first scope is often the wrong one",
                    body: "The original proposal covered all of Canada. One piece of outside feedback showed that ambition without a real data source just produces answers you can't back up. Narrowing to BC students was the version we could actually execute under limited time.",
                  },
                  {
                    number: "02",
                    title:
                      "Testing your own product catches problems fast, and has limits",
                    body: "Walking through the Ask screen ourselves caught prompts that only worked for one kind of match. Cheap and fast, but not a substitute for testing with people who didn't build it, which this project hasn't had yet. If this continued past the course, the next step is putting the quiz and chat in front of 5 to 10 BC students and seeing where the guided prompts still miss what they'd ask.",
                  },
                  {
                    number: "03",
                    title:
                      "AI matching is only as trustworthy as what you check it against",
                    body: "Claude's matching was validated against the eligibility criteria we hand-checked, not against edge cases we didn't think to test. With more time, that's where I'd focus next: stress-testing matches against messier student situations before trusting the output.",
                  },
                ].map(({ number, title, body }) => (
                  <div
                    key={number}
                    className="flex items-center gap-4 rounded-lg bg-[#f7f7f7] px-6 py-6 sm:gap-8 sm:px-8 sm:py-8"
                  >
                    <p
                      className="shrink-0 text-[16px] font-medium text-black/40 sm:text-[20px]"
                      style={wdth}
                    >
                      {number}
                    </p>
                    <div className="flex flex-col gap-2">
                      <p
                        className="text-[15px] font-semibold text-black/80 sm:text-[18px]"
                        style={wdth}
                      >
                        {title}
                      </p>
                      <p
                        className="text-[12px] leading-[1.7] tracking-[-0.25px] text-black/60 sm:text-[14px] md:text-[16px]"
                        style={wdth}
                      >
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
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
