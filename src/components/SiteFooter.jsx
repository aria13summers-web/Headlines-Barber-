import { business } from '../data/business.js';

const footerLinks = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Gallery', '#gallery'],
  ['Reviews', '#reviews'],
  ['Contact', '#contact'],
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="footer-wordmark" href="#home">{business.name}</a>
          <p>{business.tagline}</p>
          <span className="footer-location">{business.address}</span>
        </div>
        <div className="footer-column">
          <h2>Call us</h2>
          {business.phones.map((phone) => <a href={phone.href} key={phone.href}>{phone.display}</a>)}
          <a href={business.whatsapp} target="_blank" rel="noreferrer">WhatsApp Us</a>
        </div>
        <div className="footer-column">
          <h2>Hours</h2>
          {business.hours.map(({ day, time }) => <p key={day}><span>{day}</span><span>{time}</span></p>)}
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          {footerLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© Headlines Barber. All rights reserved.</span>
        <span className="footer-socials" aria-label="Social profiles to be added">
          <span>Instagram</span><span>Facebook</span>
        </span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
