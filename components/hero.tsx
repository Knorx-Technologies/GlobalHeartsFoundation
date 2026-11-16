import Image from "next/image";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { siteContent } from "@/lib/site-content";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero section-shell" id="home">
      <div className="hero__copy">
        <p className="hero__eyebrow">
          <span aria-hidden="true" /> GLOBAL HEARTS FOUNDATION
        </p>
        <h1 id="hero-title">
          Empowering people.
          <br />
          <span>Strengthening</span>
          <br />
          communities.
        </h1>
        <p className="hero__description">
          We believe meaningful change begins when people are empowered and
          communities are supported. Together, we can create opportunities,
          inspire hope, and build a brighter future.
        </p>
        <div className="hero__actions">
          <a className="button button--solid" href="#about">
            Explore Our Mission <ArrowRight aria-hidden="true" size={17} />
          </a>
          <a className="button button--quiet" href="#involved">
            Get Involved <ArrowDown aria-hidden="true" size={16} />
          </a>
        </div>
        <div className="hero__footnote">
          <span className="hero__footnote-icon"><Sparkles aria-hidden="true" size={14} /></span>
          <span>Change grows when we make room for one another.</span>
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__photo-frame">
          <Image
            alt={siteContent.photos.hero.alt}
            className="hero__photo"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 54vw"
            src={siteContent.photos.hero.src}
          />
          <div className="hero__photo-shade" />
          <div className="hero__photo-caption">
            <span className="hero__caption-mark" aria-hidden="true">GH</span>
            <span>
              <strong>People. Purpose. Possibility.</strong>
              <small>Every community holds the power to grow.</small>
            </span>
          </div>
        </div>
        <div className="hero__image-note">Illustrative photography · {siteContent.photos.hero.credit}</div>
        <div aria-hidden="true" className="hero__ornament">✳</div>
      </div>
      <a aria-label="Scroll to learn about the foundation" className="hero__scroll" href="#about">
        <span>SCROLL TO DISCOVER</span>
        <ArrowDown aria-hidden="true" size={15} />
      </a>
    </section>
  );
}
