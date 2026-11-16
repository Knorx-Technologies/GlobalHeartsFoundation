import Image from "next/image";
import { ArrowUpRight, HeartHandshake } from "lucide-react";
import { siteContent } from "@/lib/site-content";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section aria-labelledby="about-title" className="about section-pad" id="about">
      <div className="section-shell about__grid">
        <div className="about__visual">
          <div className="about__photo-wrap">
            <Image
              alt={siteContent.photos.about.alt}
              className="about__photo"
              fill
              sizes="(max-width: 760px) 90vw, 42vw"
              src={siteContent.photos.about.src}
            />
          </div>
          <div className="about__image-label">
            <HeartHandshake aria-hidden="true" size={22} strokeWidth={1.6} />
            <span>Grounded in care.<br /><strong>Growing through connection.</strong></span>
          </div>
          <div className="about__image-note">Illustrative photography · {siteContent.photos.about.credit}</div>
        </div>
        <div className="about__content">
          <SectionHeading label="WHO WE ARE" title={siteContent.about.heading} titleId="about-title" />
          <div className="about__paragraphs">
            {siteContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="about__highlights">
            {siteContent.about.highlights.map((item, index) => (
              <article className="about-highlight" key={item.title}>
                <span className="about-highlight__number">0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <ArrowUpRight aria-hidden="true" className="about-highlight__arrow" size={18} />
              </article>
            ))}
          </div>
          <a className="inline-link" href="#focus">Discover what guides us <ArrowUpRight aria-hidden="true" size={16} /></a>
        </div>
      </div>
    </section>
  );
}
