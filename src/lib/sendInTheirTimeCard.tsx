import { PhoneVideo } from "@/components/ProjectMedia";
import { CARD_BACKGROUNDS } from "./cardBackgrounds";

/**
 * The Send in Their Time project card, defined once so the home grid and every
 * "Other works" row show the same card (the recording autoplays inside it).
 */
export const SEND_IN_THEIR_TIME_CARD = {
  href: "/work/send-in-their-time",
  title: "Extending iMessage Send Later to their time zone, not just to your own.",
  company: "iMessage",
  tags: ["2026", "Concept", "iOS"],
  background: CARD_BACKGROUNDS.sendInTheirTime,
  pillLabel: "View project",
  pillColor: "#c79a00",
  media: (
    <PhoneVideo
      src="/images/projects/send-in-their-time/prototype-card.mp4"
      label="Screen recording of the Send in Their Time prototype scheduling a message"
      aspect="1180/2556"
      poster="/images/projects/send-in-their-time/screen-03.webp"
    />
  ),
};
