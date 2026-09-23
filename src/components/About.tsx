import ArrowLink from "./ArrowLink";
import AboutPhotoGallery from "./AboutPhotoGallery";

const BIO_PARAGRAPHS = [
  "I'm a recent graduate from BCIT trying to find my place in the growing world of tech. I've always enjoyed making things, but design pulled me in because it sits at the intersection of people, creativity, and business.",
  "My path here is a bit unusual.",
  "It started in 2017 at Young Guns arts academy, where I learned the fundamentals of art. For a while design was just a hobby, redesigning basketball jerseys and album art for fun.",
  "Things came together when I started studying psychology at UBC. A friend introduced me to a design club, an unexpected pairing that connected my interests in people, creativity, problem-solving, and business. From there I worked on research papers and case studies covering topics like human perception, social norms, and what makes someone successful at their sport, then picked up product design through BCIT.",
  "To me, good design isn't just about making something look nice. It's about creating something that feels right to use, solves a problem, and works for the people using it and the business behind it.",
  "When I'm not designing, you'll probably find me running, lifting, playing basketball, finding somewhere good to eat, or listening to music.",
  "Interested in what I'm working on? I'd love to hear from you. Whether it's an opportunity, a project, or just a conversation about design, feel free to reach out.",
];

const EXPERIENCE = [
  { title: "UI Support", date: "Jul 2026 – Present", org: "FLUI" },
  {
    title: "Product Designer",
    date: "May 2026 – Jul 2026",
    org: "Burst! Creative Group",
  },
  {
    title: "Marketing Intern",
    date: "Apr 2023 – Jan 2024",
    org: "Gohobi London",
  },
];

const EDUCATION = [
  {
    title: "New Media and Web Design Student",
    date: "Jul 2026",
    org: "British Columbia Institute of Technology",
  },
  {
    title: "Bachelors in Psychology minor in Commerce",
    date: "Nov 2024",
    org: "University of British Columbia",
  },
];

const bodyText =
  "text-[12px] leading-[1.7] tracking-[-0.25px] text-black/60 sm:text-[14px] md:text-[18px]";
const metaText = "text-[9px] leading-[1.6] text-black/80 sm:text-[11px] md:text-sm";

function AboutEntry({
  title,
  date,
  org,
}: {
  title: string;
  date: string;
  org: string;
}) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <div className="flex w-full items-baseline justify-between gap-4">
        <p className={bodyText} style={{ fontVariationSettings: '"wdth" 100' }}>
          {title}
        </p>
        <p
          className={`shrink-0 ${bodyText}`}
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {date}
        </p>
      </div>
      <p className={metaText}>{org}</p>
    </div>
  );
}

export default function About() {
  return (
    <section className="px-6 pt-16 pb-24 sm:px-8 sm:pt-32 sm:pb-32 xl:px-16">
      <div className="flex flex-col gap-16 xl:flex-row xl:items-start">
        <AboutPhotoGallery />

        <div className="flex w-full flex-1 flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1
              className="font-serif text-[31px] leading-[1.4] text-black/60 sm:text-[38px] md:text-5xl"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Hi, I&rsquo;m Alston.
            </h1>
            <div className="flex max-w-[1400px] flex-col gap-6">
              {BIO_PARAGRAPHS.map((paragraph) => (
                <p
                  key={paragraph}
                  className={bodyText}
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ArrowLink
              href="https://www.linkedin.com/in/alston-hsu88/"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
            >
              LinkedIn
            </ArrowLink>
            <ArrowLink
              href="mailto:alstonhsu88@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
            >
              Email
            </ArrowLink>
          </div>

          <div className="flex max-w-[1400px] flex-col gap-6">
            <p className={bodyText} style={{ fontVariationSettings: '"wdth" 100' }}>
              Experience
            </p>
            {EXPERIENCE.map((entry) => (
              <AboutEntry key={entry.title} {...entry} />
            ))}
          </div>

          <div className="flex max-w-[1400px] flex-col gap-6">
            <p
              className="text-[10px] leading-[21px] text-black/60 sm:text-[13px] md:text-base"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Education
            </p>
            {EDUCATION.map((entry) => (
              <AboutEntry key={entry.title} {...entry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
