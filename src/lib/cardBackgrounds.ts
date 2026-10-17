/**
 * Project card backgrounds: soft mesh gradients, built from a few overlapping
 * radial blobs of one colour family over a base tone. The film grain on top
 * comes from `.card-grain` (see ProjectCard and globals.css). Defined once so
 * the home grid and every "Other works" row stay identical.
 */
const mesh = (base: string, blobs: [string, string, string][]) =>
  [...blobs.map(([at, color, reach]) => `radial-gradient(at ${at}, ${color} 0px, transparent ${reach})`), base].join(", ");

export const CARD_BACKGROUNDS = {
  heiltsuk: mesh("#f8d6d9", [
    ["12% 18%", "#f4a9b5", "58%"],
    ["88% 12%", "#fde3df", "52%"],
    ["82% 88%", "#f2a1ad", "56%"],
    ["8% 92%", "#fde9e4", "50%"],
  ]),
  avail: mesh("#cdeee6", [
    ["14% 16%", "#aee7ea", "58%"],
    ["86% 14%", "#d9f7f2", "52%"],
    ["80% 90%", "#9fdcd2", "56%"],
    ["10% 88%", "#d4f4e6", "50%"],
  ]),
  firewatch: mesh("#f6e2c8", [
    ["12% 16%", "#f5c892", "58%"],
    ["88% 14%", "#fdf0df", "52%"],
    ["84% 88%", "#f1bb7d", "56%"],
    ["8% 90%", "#fbe9d2", "50%"],
  ]),
  flui: mesh("#c9f3f6", [
    ["14% 18%", "#8fe3ee", "58%"],
    ["86% 12%", "#e4ffff", "52%"],
    ["80% 90%", "#7fd8ea", "56%"],
    ["10% 90%", "#d6fafc", "50%"],
  ]),
} as const;
