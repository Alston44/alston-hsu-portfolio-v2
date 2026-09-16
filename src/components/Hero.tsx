import ArrowLink from "./ArrowLink";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-16 sm:px-8 sm:pt-32 xl:px-16">
      <div className="mx-auto flex max-w-[1920px] flex-col gap-6 sm:gap-9 xl:flex-row xl:items-end xl:gap-24">
        <div className="flex flex-col gap-4 xl:max-w-[692px]">
          <h1
            className="text-[31px] leading-[1.4] text-black/60 sm:text-[38px] md:text-5xl"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Alston Hsu
          </h1>
          <p
            className="max-w-[1112px] text-[13px] leading-[1.4] text-black/80 opacity-56 sm:text-[16px] md:text-[20px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            An aspiring product designer from Vancouver, formerly psychology
            and commerce, now designing UI/UX with both in mind.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 xl:flex-col xl:flex-nowrap xl:items-start xl:gap-[17px]">
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
    </section>
  );
}
