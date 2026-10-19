import Link from "next/link";
import Logo from "./Logo";

const FOOTER_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alston-hsu88/",
    external: true,
  },
  {
    label: "X",
    href: "https://x.com/alston_h2u",
    external: true,
  },
  { label: "Work", href: "/#work" },
];

export default function Footer() {
  return (
    <footer className="bg-white px-6 pb-2.5 sm:px-8 xl:px-16">
      <div className="relative mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-full border border-white/80 bg-white/90 py-1.5 pr-5 pl-3 shadow-[0_6px_24px_-10px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-[96px] sm:pr-8">
        <div className="flex flex-1 items-center gap-4">
          <Link href="/" aria-label="Alston Hsu, home">
            <Logo className="size-11" />
          </Link>
        </div>
        <ul className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 sm:gap-x-15">
          {FOOTER_LINKS.map(({ label, href, external }) => (
            <li key={label}>
              <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="font-inter text-[14px] leading-[21px] text-black/75 transition-colors duration-300 ease-out hover:text-black"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
