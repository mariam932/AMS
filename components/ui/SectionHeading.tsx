import type { ReactNode } from "react";
import RotatingText from "./RotatingText";

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  lead?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeading({
  kicker,
  title,
  lead,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading text-${align}`}>
      {kicker && <p className="eyebrow">{kicker}</p>}
      <h2>
        <RotatingText text={title} />
      </h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
}
