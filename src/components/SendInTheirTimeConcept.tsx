import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { FramedScreenshot, Triptych } from "./ProjectMedia";
import {
  CaseStudyBody,
  CaseStudyEyebrow,
  CaseStudyHeading,
  CaseStudyToc,
  MetaColumn,
  wdth,
} from "./CaseStudy";
import { LightboxTrigger } from "./Lightbox";
import { CARD_BACKGROUNDS } from "@/lib/cardBackgrounds";

const IMG = "/images/projects/send-in-their-time";

const TOC_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "The gap", href: "#gap" },
  { label: "The addition", href: "#addition" },
  { label: "Decisions", href: "#decisions" },
];

const GAP_STATS = [
  {
    stat: "6 of 7",
    label:
      "regularly message someone in another time zone, and every one of them is messaging family.",
  },
  {
    stat: "7 of 7",
    label:
      "work out the other person's time outside the app: a search, a clock app, or math in their head.",
  },
  {
    stat: "4 of 7",
    label:
      "held off sending a message in the past month because of the time difference.",
  },
];

const SCREENS = [
  {
    file: "screen-01",
    title: "01 Notice: John's local time, above the text field.",
    caption:
      "An Apple native badge shows it's 1:00 AM where he is, right where you're about to type.",
    alt: "iMessage thread with a line above the text field showing 1:00 AM for John in Taipei, with a Schedule link",
  },
  {
    file: "screen-02",
    title: "02 Choose: One new row, under Send Later.",
    caption:
      "Send in Their Time sits in the existing apps menu. No pop-ups and no new screens.",
    alt: "The iMessage apps menu with a new Send in Their Time row, tagged NEW, directly under Send Later",
  },
  {
    file: "screen-03",
    title: "03 Pick: Set the time in his clock.",
    caption:
      "The same picker as Send Later, plus a toggle for whose clock you're using and what that time means for you.",
    alt: "The Send Later time picker with a toggle between John's time in Taipei and my time in Vancouver, and a line reading That is Fri 16, 5:00 PM for you.",
  },
  {
    file: "screen-04",
    title: "04 Wait: It goes out at 8:00 AM his time.",
    caption:
      "The pending message shows both times, so you know when it lands for him and for you.",
    alt: "A scheduled message in the thread showing Sat 8:00 AM John's time and 5:00 PM yours",
  },
];

// Apple's Send Later as it ships today, next to the concept version of the same surface.
const COMPARISONS = [
  {
    key: "menu",
    cellAspect: "2/3",
    before: "compare-menu-before",
    after: "compare-menu-after",
    beforeAlt:
      "Apple's iMessage apps menu today: Camera, Photos, Stickers, Polls, Audio, Send Later and Genmoji",
    afterAlt:
      "The same apps menu with a new Send in Their Time row, tagged NEW, between Send Later and Genmoji",
    caption:
      "Apple's apps menu today, and the same menu with one new row under Send Later.",
  },
  {
    key: "picker",
    cellAspect: "4/5",
    before: "compare-picker-before",
    after: "compare-picker-after",
    beforeAlt:
      "Apple's Send Later today: a Today 7:00 PM chip above the text field and a date and time picker",
    afterAlt:
      "The same picker with a toggle between John's time in Taipei and my time in Vancouver, and a line reading That is Fri 16, 5:00 PM for you.",
    caption:
      "Apple's Send Later picker today, and the same picker with a toggle for whose clock you're using and a line for what that time means for you.",
  },
];

const DECISIONS = [
  {
    title: "No pop-up",
    body: "Scheduling stays opt-in. A pop-up prompting you to schedule ranked last of four placements in the survey, so the feature waits in the menu you already use for Send Later.",
  },
  {
    title: "Privacy",
    body: "A time zone, not a location. Comfort sharing a time zone averaged 4.1 out of 5, and most people wanted to pick who sees it. John shares his time zone with people he chooses, the way Focus status is shared.",
  },
  {
    title: "Considered",
    body: "Showing it under the contact's name. People ranked the contact header as the most useful spot. I kept the concept inside surfaces Apple already ships rather than redesign the header, and left that as a next step.",
  },
];

const OTHER_WORKS = [
  {
    href: "/work/heiltsuk",
    title:
      "Building Heiltsuk Nation's site to grow, not just to be patched together.",
    company: "Burst! Creative Group",
    tags: ["2026", "Internship", "Web Design"],
    background: CARD_BACKGROUNDS.heiltsuk,
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
    title: "An app that helps BC Students Claim the Benefits they're unaware of.",
    company: "Avail",
    tags: ["2026", "BCIT", "School Project"],
    background: CARD_BACKGROUNDS.avail,
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
    href: "/work/firewatch",
    title:
      "A wildfire alert app built to guide action, not just relay information.",
    company: "Firewatch BC",
    tags: ["2026", "BCIT", "School Project"],
    background: CARD_BACKGROUNDS.firewatch,
    pillLabel: "View project",
    pillColor: "#fa9f00",
    media: (
      <Triptych
        images={[
          { src: "/images/projects/firewatch-home.webp", alt: "Firewatch BC app home screen" },
          { src: "/images/projects/firewatch-map-2.webp", alt: "Firewatch BC app map screen" },
          { src: "/images/projects/firewatch-map-1.webp", alt: "Firewatch BC app alert map screen" },
        ]}
      />
    ),
  },
];

export function SendInTheirTimeHero() {
  // Hero: Choose and Wait as stills either side, the prototype recording in
  // the middle. (The Notice and Pick screens are further down the page.)
  const phoneClass =
    "relative shrink-0 overflow-hidden rounded-[12%/5.5%] bg-black shadow-[0_10px_40px_rgba(0,0,0,0.25)]";
  const sideClass = "hidden h-[88%] translate-y-[9%] sm:block";
  const stills = [SCREENS[1], SCREENS[3]];

  return (
    // Same height steps as the Avail and Firewatch heroes (shrinks fluidly
    // between xl and 2xl so the title stays above the fold on laptops). The
    // gradient and grain layers bleed 100px up under the translucent header.
    <div className="relative h-75 w-full bg-white sm:h-105 xl:h-[calc(64px+min(820px,58vw)*0.5688)] 2xl:h-[calc(64px+min(1160px,100vw-128px)*0.5688)]">
      <div
        className="pointer-events-none absolute inset-x-0 -top-25 bottom-0"
        style={{ background: CARD_BACKGROUNDS.sendInTheirTime }}
      />
      <div className="card-grain pointer-events-none absolute inset-x-0 -top-25 bottom-0 opacity-20" />
      <div className="pointer-events-none absolute inset-x-0 top-8 bottom-0 flex items-end justify-center gap-[3%] overflow-hidden px-6 sm:top-10">
        {[stills[0], null, stills[1]].map((screen) =>
          screen ? (
            <div
              key={screen.file}
              className={`${phoneClass} ${sideClass}`}
              style={{ aspectRatio: "1180/2556" }}
            >
              <Image
                src={`${IMG}/${screen.file}.webp`}
                alt={screen.alt}
                fill
                sizes="(min-width: 1536px) 300px, (min-width: 1280px) 220px, 180px"
                quality={95}
                className="object-cover object-top"
                priority
              />
            </div>
          ) : (
            <div
              key="recording"
              className={`${phoneClass} h-[100%] translate-y-[5%]`}
              style={{ aspectRatio: "1180/2556" }}
            >
              <video
                src={`${IMG}/prototype-card.mp4`}
                poster={`${IMG}/screen-03.webp`}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="Screen recording of the Send in Their Time prototype scheduling a message"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default function SendInTheirTimeConcept() {
  return (
    <div className="relative -mt-6 bg-white px-6 pt-15 pb-24 sm:-mt-8 sm:px-8 sm:pb-32 xl:-mt-10 xl:px-16">
      <div className="page-fade-in relative mx-auto flex max-w-320 flex-col gap-16 sm:gap-20 xl:gap-24">
        {/* Same left edge as the header logo: this wrapper and the header nav share the same max-width and side padding. */}
        <div className="absolute top-0 bottom-0 left-0 hidden xl:block">
          <CaseStudyToc iconDir="/images/projects/heiltsuk" links={TOC_LINKS} />
        </div>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 xl:max-w-184 2xl:max-w-208">
          <div className="flex w-full flex-col gap-16 sm:gap-20 xl:gap-24">
            {/* Title + metadata */}
            <div className="flex flex-col gap-[75px] sm:gap-23.5 xl:gap-29.5">
              <div className="flex flex-col gap-4 xl:gap-6">
                <h1
                  className="font-serif max-w-357 text-[32px] leading-[1.1] text-black/75 sm:text-[41px] xl:text-[41px] 2xl:text-[46px]"
                  style={wdth}
                >
                 Extending iMessage Send Later to their time zone, not just to your own.
                </h1>
              </div>

              <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-y-8 xl:flex-nowrap xl:gap-x-6">
                <MetaColumn label="My Contributions">
                  <p>UI Design</p>
                  <p>Prototyping</p>
                  <p>User research</p>
                </MetaColumn>
                <MetaColumn label="Type">
                  <p>Personal concept</p>
                </MetaColumn>
                <MetaColumn label="Duration">
                  <p>1 week</p>
                </MetaColumn>
                <MetaColumn label="Tools">
                  <p>Expo</p>
                  <p>Figma</p>
                </MetaColumn>
              </div>
            </div>

            {/* Intro */}
            <div
              id="overview"
              className="scroll-mt-28 flex flex-col gap-8 sm:gap-10 xl:gap-14"
            >
              <CaseStudyBody
                paragraphs={[
                  "iOS already lets you schedule a message with Send Later, but only in your local time. This concept adds one row to the same menu so you can pick a time in their timezone. No more check the time app, or doing the math in your head.",
                ]}
              />
              {/* <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
                <MetaColumn label={"You · Vancouver · UTC−7"}>
                  <p>Fri 10:00 AM</p>
                </MetaColumn>
                <MetaColumn label={"John · Taipei · UTC+8"}>
                  <p>Sat 1:00 AM</p>
                </MetaColumn>
              </div> */}
              <figure className="flex max-w-225 flex-col gap-3 border-l-4 border-black/70 pl-6">
                <blockquote
                  className="font-serif text-[22px] leading-[1.4] text-black sm:text-[26px]"
                  style={wdth}
                >
                  {
                    "“I was gonna ask my mom about a payment, but didn't realize it was 1 AM for her.”"
                  }
                </blockquote>
                <figcaption
                  className="text-[14px] leading-[1.4] text-black/75 sm:text-[16px]"
                  style={wdth}
                >
                  Survey respondent
                </figcaption>
              </figure>
            </div>

            {/* The gap */}
            <div
              id="gap"
              className="scroll-mt-28 flex flex-col gap-8 sm:gap-10"
            >
              <div className="flex flex-col gap-3">
                <CaseStudyEyebrow>The gap</CaseStudyEyebrow>
                <CaseStudyHeading>
                  {"Nobody checks the time inside the app they're texting from."}
                </CaseStudyHeading>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
                {GAP_STATS.map(({ stat, label }) => (
                  <div key={stat} className="flex flex-col gap-2">
                    <p
                      className="text-[32px] leading-none font-bold text-black sm:text-[36px]"
                      style={wdth}
                    >
                      {stat}
                    </p>
                    <p
                      className="text-[14px] leading-[1.5] text-black/75 sm:text-[16px]"
                      style={wdth}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              <p
                className="text-[13px] leading-[1.5] text-black/75 sm:text-[14px]"
                style={wdth}
              >
                A quick survey of 7 people, October 2026.
              </p>
            </div>

            {/* The addition */}
            <div
              id="addition"
              className="scroll-mt-28 flex flex-col gap-8 sm:gap-10"
            >
              <div className="flex flex-col gap-3">
                <CaseStudyEyebrow>The addition</CaseStudyEyebrow>
                <CaseStudyHeading>
                  {"An addition to Apple's Send Later, except tailored to scheduling based off one's time zone."}
                </CaseStudyHeading>
              </div>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
                {SCREENS.map(({ file, title, caption, alt }) => (
                  <div key={file} className="flex flex-col gap-4">
                    <div className="flex w-full items-center justify-center rounded-card border border-black/5 bg-linear-to-b from-[#ededed] to-[#e5e5e5] px-6 py-8 sm:px-8 sm:py-10">
                      <div
                        className="relative w-[min(230px,100%)] overflow-hidden rounded-[12%/5.5%] bg-white"
                        style={{ aspectRatio: "393/852" }}
                      >
                        <LightboxTrigger
                          src={`${IMG}/${file}.webp`}
                          alt={alt}
                          className="absolute inset-0"
                        >
                          <Image
                            src={`${IMG}/${file}.webp`}
                            alt={alt}
                            fill
                            sizes="230px"
                            quality={95}
                            className="object-cover object-top"
                          />
                        </LightboxTrigger>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      {/* <CaseStudyEyebrow>{step}</CaseStudyEyebrow> */}
                      <p
                        className="text-[15px] text-black/90 sm:text-[16px]"
                        style={wdth}
                      >
                        <span className="font-semibold">
                          {title.slice(0, title.indexOf(":") + 1)}
                        </span>
                        {title.slice(title.indexOf(":") + 1)}
                      </p>
                      <p
                        className="text-[14px] leading-[1.5] text-black/75 sm:text-[15px]"
                        style={wdth}
                      >
                        {caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-10">
                {COMPARISONS.map(
                  ({ key, cellAspect, before, after, beforeAlt, afterAlt, caption }) => (
                    <div key={key} className="flex flex-col gap-4">
                      <div className="grid grid-cols-2 gap-3 rounded-card border border-black/5 bg-linear-to-b from-[#ededed] to-[#e5e5e5] p-3 sm:gap-6 sm:p-6">
                        {[
                          { src: before, alt: beforeAlt, label: "Send Later today" },
                          { src: after, alt: afterAlt, label: "With Send in Their Time" },
                        ].map(({ src, alt, label }) => (
                          <div key={src} className="flex flex-col gap-2">
                            <div
                              className="relative w-full overflow-hidden"
                              style={{ aspectRatio: cellAspect }}
                            >
                              <LightboxTrigger
                                src={`${IMG}/${src}.webp`}
                                alt={alt}
                                className="absolute inset-0"
                              >
                                <Image
                                  src={`${IMG}/${src}.webp`}
                                  alt={alt}
                                  fill
                                  sizes="(min-width: 1280px) 340px, 45vw"
                                  quality={95}
                                  className="object-contain"
                                />
                              </LightboxTrigger>
                            </div>
                            <p
                              className="text-center text-[11px] leading-[1.3] text-black/75 md:text-sm"
                              style={wdth}
                            >
                              {label}
                            </p>
                          </div>
                        ))}
                      </div>
                      <p
                        className="text-[13px] leading-[1.5] text-black/75 sm:text-[14px]"
                        style={wdth}
                      >
                        {caption}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Decisions */}
            <div
              id="decisions"
              className="scroll-mt-28 flex flex-col gap-8 sm:gap-10"
            >
              <div className="flex flex-col gap-3">
                <CaseStudyEyebrow>Decisions</CaseStudyEyebrow>
                <CaseStudyHeading>Small on purpose</CaseStudyHeading>
              </div>
              <div className="grid grid-cols-1 gap-8">
                {DECISIONS.map(({ title, body }) => (
                  <div
                    key={title}
                    className="flex flex-col gap-2 border-b border-black/10 pb-6"
                  >
                    <p
                      className="font-serif text-[20px] text-black sm:text-[22px]"
                      style={wdth}
                    >
                      {title}
                    </p>
                    <p
                      className="text-[14px] leading-[1.5] text-black/75 sm:text-[15px]"
                      style={wdth}
                    >
                      {body}
                    </p>
                  </div>
                ))}
              </div>
              <div
                className="flex flex-col gap-1 text-[13px] leading-[1.5] text-black/75 sm:text-[14px]"
                style={wdth}
              >
                <p>{"Working prototype · Expo / React Native on iPhone"}</p>
              </div>
            </div>

            {/* Other works */}
            <div className="flex flex-col gap-8 sm:gap-10">
              <CaseStudyHeading>Other works</CaseStudyHeading>
              <div className="w-0 min-w-full overflow-x-auto pt-1 pb-4">
                <div className="flex w-full gap-6 sm:gap-8">
                  {OTHER_WORKS.map((work) => (
                    <div
                      key={work.company}
                      className="w-70 shrink-0 grow basis-70 xl:w-auto xl:min-w-0 xl:shrink xl:basis-0"
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
