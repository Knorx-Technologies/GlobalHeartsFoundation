import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { siteContent } from "@/lib/site-content";
import { SectionHeading } from "@/components/section-heading";

export function FocusAreas() {
  return (
    <section aria-labelledby="focus-title" className="focus section-pad" id="focus">
      <div className="section-shell">
        <SectionHeading
          centered
          titleId="focus-title"
          description="Our work centres on empowering individuals and reaching communities with the support, resources, and opportunities they need to thrive."
          label="WHAT WE DO"
          title="Two Focus Areas. One Shared Purpose."
        />
        <div className="focus__cards">
          {siteContent.focusAreas.map((area) => {
            const photo = siteContent.photos[area.image];
            return (
              <article className={`focus-card focus-card--${area.accent}`} key={area.number}>
                <div className="focus-card__visual">
                  <Image
                    alt={photo.alt}
                    className="focus-card__photo"
                    fill
                    sizes="(max-width: 760px) 100vw, 48vw"
                    src={photo.src}
                  />
                  <span className="focus-card__number">{area.number}</span>
                  <span className="focus-card__label">{area.eyebrow}</span>
                  <span className="focus-card__image-note">Illustrative · {photo.credit}</span>
                </div>
                <div className="focus-card__content">
                  <p className="eyebrow">{area.eyebrow}</p>
                  <h3>{area.title}</h3>
                  <p className="focus-card__description">{area.description}</p>
                  <ul>
                    {area.initiatives.map((initiative) => (
                      <li key={initiative}><Check aria-hidden="true" size={15} />{initiative}</li>
                    ))}
                  </ul>
                  <a className="focus-card__link" href="#approach" aria-label={`Learn about our approach to ${area.eyebrow.toLowerCase()}`}>
                    Explore our approach <ArrowUpRight aria-hidden="true" size={17} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        <p className="focus__prototype-note">Programme ideas shown here are proposed for discussion and have not yet been confirmed.</p>
      </div>
    </section>
  );
}
