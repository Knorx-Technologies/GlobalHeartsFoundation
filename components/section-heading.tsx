type SectionHeadingProps = {
  titleId?: string;
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeading({
  titleId,
  label,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading${centered ? " section-heading--centered" : ""}${light ? " section-heading--light" : ""}`}
    >
      <p className="eyebrow">{label}</p>
      <h2 id={titleId}>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  );
}
