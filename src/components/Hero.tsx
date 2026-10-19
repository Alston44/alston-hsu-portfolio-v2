import ArrowLink from "./ArrowLink";
import HeroShaderBackground from "./HeroShaderBackground"; // experimental — to hide again, comment this + the usage below

export default function Hero() {
  return (
    <section className="relative px-6 pt-24 pb-10 sm:px-8 sm:pt-32 xl:px-16">
      <HeroShaderBackground />
      <div className="mx-auto flex max-w-3xl flex-col gap-2">
        <h1
          className="font-serif text-[36px] leading-[1.4] text-black/75"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Alston Hsu
        </h1>
        <div className="flex flex-col gap-6 sm:gap-9">
          <p
            className="text-[16px] leading-[1.4] text-black opacity-66 md:text-[18px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            An aspiring product designer from Vancouver, bringing a background in 
            psychology and commerce to design effortless UI/UX experiences.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <ArrowLink
              href="https://www.linkedin.com/in/alston-hsu88/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my LinkedIn
            </ArrowLink>
            <ArrowLink
              href="mailto:alstonhsu88@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let&rsquo;s chat
            </ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
