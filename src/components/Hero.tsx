import ArrowLink from "./ArrowLink";
import HeroShaderBackground from "./HeroShaderBackground"; // experimental — to hide again, comment this + the usage below

export default function Hero() {
  return (
    <section className="relative px-6 pt-40 pb-10 sm:px-8 sm:pt-56 xl:px-16">
      <HeroShaderBackground />
      <div className="mx-auto flex max-w-[1920px] flex-col gap-2">
        <h1
          className="font-serif text-[52px] leading-[1.4] text-black/60 sm:text-[64px] md:text-[75px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Alston Hsu
        </h1>
        <div className="grid grid-cols-1 gap-x-16 gap-y-6 sm:gap-y-9 lg:grid-cols-2 lg:items-start">
          <p
            className="max-w-[1112px] text-[13px] leading-[1.4] text-black/80 opacity-56 sm:text-[16px] md:text-[20px] lg:max-w-[692px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            An aspiring product designer from Vancouver, bringing a background in 
            psychology and commerce to design effortless UI/UX experiences.
          </p>
          <div className="flex flex-wrap items-center gap-4 lg:flex-col lg:flex-nowrap lg:items-start lg:gap-[17px]">
            <ArrowLink href="/about">Learn more about me</ArrowLink>
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
