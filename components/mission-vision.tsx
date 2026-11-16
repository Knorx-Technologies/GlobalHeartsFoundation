import { Heart, Sparkles } from "lucide-react";
import { siteContent } from "@/lib/site-content";
import { SectionHeading } from "@/components/section-heading";

export function MissionVision() {
  return (
    <section aria-labelledby="purpose-title" className="purpose section-pad" id="purpose">
      <div aria-hidden="true" className="purpose__pattern" />
      <div className="section-shell purpose__inner">
        <SectionHeading centered label="OUR NORTH STAR" light title="Our Purpose. Our Commitment." titleId="purpose-title" />
        <div className="purpose__cards">
          <article className="purpose-card">
            <div className="purpose-card__icon"><Heart aria-hidden="true" size={22} strokeWidth={1.6} /></div>
            <p className="eyebrow">OUR MISSION</p>
            <p className="purpose-card__statement">{siteContent.mission}</p>
          </article>
          <div aria-hidden="true" className="purpose__divider"><span /></div>
          <article className="purpose-card">
            <div className="purpose-card__icon purpose-card__icon--red"><Sparkles aria-hidden="true" size={22} strokeWidth={1.6} /></div>
            <p className="eyebrow">OUR VISION</p>
            <p className="purpose-card__statement">{siteContent.vision}</p>
          </article>
        </div>
        <p className="purpose__note">Mission and vision wording is provisional, pending confirmation by the foundation.</p>
      </div>
    </section>
  );
}
