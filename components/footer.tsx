import Image from "next/image";
import { ArrowUpRight, Instagram, Linkedin, Facebook } from "lucide-react";
import { siteContent } from "@/lib/site-content";

const socialIcons = [Instagram, Facebook, Linkedin];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell">
        <div className="footer__main">
          <div className="footer__brand">
            <a aria-label="Global Hearts Foundation home" href="#home">
              <Image alt="Global Hearts Foundation" height={112} src="/logo/global-hearts-logo.jpg.jpg" width={252} />
            </a>
            <p>Empowering people and strengthening communities through compassion, collaboration, and opportunity.</p>
          </div>
          <div className="footer__nav-group">
            <p className="footer__heading">Explore</p>
            <nav aria-label="Footer navigation" className="footer__nav">
              {siteContent.navigation.slice(1).map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
            </nav>
          </div>
          <div className="footer__social-group">
            <p className="footer__heading">Find us</p>
            <div className="footer__socials">
              {siteContent.contact.social.map((network, index) => {
                const Icon = socialIcons[index];
                return <span aria-label={`${network} account to be confirmed`} className="footer__social" key={network} role="img" title={`${network} — to be confirmed`}><Icon aria-hidden="true" size={17} /></span>;
              })}
            </div>
            <a className="footer__contact-link" href="#contact">Contact details <ArrowUpRight aria-hidden="true" size={14} /></a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Global Hearts Foundation. All rights reserved.</p>
          <p>Website Preview <span aria-hidden="true">·</span> Content and programme details are subject to confirmation.</p>
        </div>
      </div>
    </footer>
  );
}
