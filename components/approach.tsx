import { ArrowRight, Ear, HandHeart, Sprout } from "lucide-react";
import { siteContent } from "@/lib/site-content";
import { SectionHeading } from "@/components/section-heading";

const stepIcons = [Ear, HandHeart, Sprout];

export function Approach() {
  return (
    <section aria-labelledby="approach-title" className="approach section-pad" id="approach">
      <div className="section-shell">
        <SectionHeading
          centered
          titleId="approach-title"
          description="We believe lasting impact requires understanding people's needs, creating opportunities, and working together to strengthen communities."
          label="HOW WE CREATE CHANGE"
          title="Meaningful Change Begins With People."
        />
        <div className="approach__steps">
          {siteContent.approach.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <article className="approach-step" key={step.number}>
                <div className="approach-step__top">
                  <span>{step.number}</span>
                  <span className="approach-step__icon"><Icon aria-hidden="true" size={21} strokeWidth={1.6} /></span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < siteContent.approach.length - 1 ? <ArrowRight aria-hidden="true" className="approach-step__connector" size={20} /> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
