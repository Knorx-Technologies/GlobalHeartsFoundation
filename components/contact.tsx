import { AtSign, MapPin, Phone } from "lucide-react";
import { siteContent } from "@/lib/site-content";
import { SectionHeading } from "@/components/section-heading";

const contactItems = [
  { icon: AtSign, label: "Email address", value: siteContent.contact.email },
  { icon: Phone, label: "Phone number", value: siteContent.contact.phone },
  { icon: MapPin, label: "Office location", value: siteContent.contact.office },
];

export function Contact() {
  return (
    <section aria-labelledby="contact-title" className="contact section-pad" id="contact">
      <div className="section-shell contact__grid">
        <div className="contact__intro">
          <SectionHeading
            titleId="contact-title"
            label="LET'S CONNECT"
            title="Let's Connect and Make a Difference."
            description="Interested in learning more about Global Hearts Foundation or exploring opportunities to collaborate? We'd love to connect."
          />
          <p className="contact__note">Official contact details are being confirmed and will be added here.</p>
        </div>
        <div className="contact__details">
          {contactItems.map(({ icon: Icon, label, value }) => (
            <article className="contact-detail" key={label}>
              <span className="contact-detail__icon"><Icon aria-hidden="true" size={19} strokeWidth={1.7} /></span>
              <div><p>{label}</p><strong>{value}</strong></div>
            </article>
          ))}
          <div className="contact__socials">
            <p>Social media</p>
            <div>{siteContent.contact.social.map((network) => <span key={network}>{network} <small>— to be confirmed</small></span>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
