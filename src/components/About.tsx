import ArrowLink from "./ArrowLink";
import AboutPhotoGallery from "./AboutPhotoGallery";

const BIO_PARAGRAPHS_INTRO = [
  "I'm a recent graduate from BCIT, trying to find my place in the growing world of tech. When I started university in psychology and commerce, the two felt like separate worlds. Psychology asked why people think and feel the way they do. Commerce asked what that means for a business. I was rarely taught how to use them together.", 
  
  
  "That gap stuck with me until I found digital design. It was the first place where understanding people and understanding business were part of the same job. I could make things that were both beautiful and useful, for the people using them and for the business behind them, even when the problem was as small as a confusing checkout button. It showed me the two sides don't have to compete, and together, they can create something awesome.",

];

const BIO_PARAGRAPHS = [
 "My path to get here was a bit unusual. It started in 2017 at Young Guns arts academy, learning the fundamentals of art. For a while design was just a hobby, redesigning basketball jerseys and album art for fun. At UBC, a friend introduced me to a design club, which connected my interests in people, creativity, problem-solving, and business. I went on to research topics like human perception and social norms, then picked up product design at BCIT.",

"To me, good design isn't just about looking nice. It should feel right to use, solve a problem, and work for both the people and the business behind it.",

"When I'm not designing, I'm probably running, lifting, playing basketball, finding good food, or listening to music. Whether it's an opportunity, a project, or just a chat about design, feel free to reach out.",
];

const EXPERIENCE = [
  { title: "UI Support", 
    date: "Jul 2026 – Present", 
    org: "FLUI" },
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
  "text-[16px] leading-[1.7] tracking-[-0.25px] text-black/60 md:text-[18px]";
const metaText = "text-[11px] leading-[1.6] text-black/80 md:text-sm";

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
      <div className="flex flex-col gap-16 md:flex-row md:items-start">
        <AboutPhotoGallery />

        <div className="flex w-full flex-1 flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1
              className="font-serif text-[32px] leading-[1.4] text-black/60 sm:text-[36px] md:text-[46px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Hi, I&rsquo;m Alston.
            </h1>
            <div className="flex max-w-[1400px] flex-col gap-6">
              {BIO_PARAGRAPHS_INTRO.map((paragraph) => (
                <p
                  key={paragraph}
                  className={bodyText}
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  {paragraph}
                </p>
              ))}
              <p
                className="font-serif text-[20px] leading-[1.3] font-normal text-black/60 sm:text-[23px] md:text-[29px]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                My Story
              </p>
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
            <p className={bodyText} style={{ fontVariationSettings: '"wdth" 100' }}>
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
