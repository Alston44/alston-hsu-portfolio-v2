import Link from "next/link";
import Logo from "./Logo";

const FOOTER_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alston-hsu88/",
    external: true,
  },
  {
    label: "Contact",
    href: "mailto:alstonhsu88@gmail.com",
    external: true,
  },
  { label: "Work", href: "/#work" },
];

export default function Footer() {
  return (
    <footer className="bg-white px-6 pb-[10px] sm:px-8 xl:px-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-6 border-t border-black/10 pt-[18px] pb-2 sm:flex-row">
        <div className="flex flex-1 items-center gap-4">
          <Link href="/" aria-label="Alston Hsu, home">
            <Logo />
          </Link>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 sm:gap-x-[60px]">
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
