import { ArrowUpRight, HandHeart, Heart, UsersRound } from "lucide-react";
import { siteContent } from "@/lib/site-content";
import { SectionHeading } from "@/components/section-heading";
import { PrototypeAction } from "@/components/prototype-action";

const icons = { heart: Heart, users: UsersRound, hand: HandHeart };

export function GetInvolved() {
  return (
    <section aria-labelledby="involved-title" className="involved section-pad" id="involved">
      <div className="section-shell">
        <SectionHeading
          centered
          titleId="involved-title"
          description="Creating meaningful change takes collective effort. Whether through your time, expertise, partnership, or support, you can help make a difference."
          label="MAKE A DIFFERENCE"
          title="Be Part of Something Bigger."
        />
        <div className="involved__cards">
          {siteContent.opportunities.map((opportunity, index) => {
            const Icon = icons[opportunity.icon];
            return (
              <article className={`involved-card involved-card--${index + 1}`} key={opportunity.title}>
                <div className="involved-card__top">
                  <span className="involved-card__icon"><Icon aria-hidden="true" size={22} strokeWidth={1.65} /></span>
                  <span className="involved-card__number">0{index + 1}</span>
                </div>
                <p className="eyebrow">{opportunity.title.toUpperCase()}</p>
                <h3>{opportunity.tagline}</h3>
                <p className="involved-card__description">{opportunity.description}</p>
                <PrototypeAction className="involved-card__action" label={opportunity.action} variant="text" />
                <ArrowUpRight aria-hidden="true" className="involved-card__decoration" size={68} strokeWidth={0.7} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
