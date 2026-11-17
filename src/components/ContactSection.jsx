import { business } from '../data/business.js';
import { services } from '../data/services.js';
import Icon from './Icon.jsx';

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`;

export default function ContactSection() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fields = ['name', 'phone', 'email', 'service', 'message'];
    const values = fields.map((field) => `${field[0].toUpperCase()}${field.slice(1)}: ${formData.get(field)}`);
    const whatsappUrl = `${business.whatsapp}?text=${encodeURIComponent(`Hello Headlines Barber,\n\n${values.join('\n')}`)}`;
    window.location.assign(whatsappUrl);
  }

  return (
    <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
      <div className="contact-intro">
        <p className="section-index">YOUR NEXT MOVE</p>
        <h2 id="contact-title">Let’s make<br />an <em>entrance.</em></h2>
        <p>Call, WhatsApp or send an enquiry. Your next great cut starts with a conversation.</p>
        <div className="contact-quick-actions">
          <a className="button button-primary" href={business.phones[0].href}>Call Now <Icon name="arrow" size={17} /></a>
          <a className="button button-contact-outline" href={business.whatsapp} target="_blank" rel="noreferrer">WhatsApp Us <Icon name="arrow" size={17} /></a>
        </div>
      </div>
      <div className="contact-details">
        <div className="detail-block">
          <span className="detail-label"><Icon name="phone" size={17} /> CALL US</span>
          {business.phones.map((phone) => <a className="detail-phone" href={phone.href} key={phone.href}>{phone.display}</a>)}
        </div>
        <div className="detail-block">
          <span className="detail-label"><Icon name="pin" size={18} /> FIND US</span>
          <p>{business.address}</p>
          <a className="text-link text-link-light" href={directionsUrl} target="_blank" rel="noreferrer">
            Get Directions <Icon name="arrow" size={17} />
          </a>
        </div>
        <div className="detail-block">
          <span className="detail-label"><Icon name="clock" size={18} /> OPENING HOURS</span>
          <dl className="hours-list">
            {business.hours.map(({ day, time }) => (
              <div key={day}><dt>{day}</dt><dd>{time}</dd></div>
            ))}
          </dl>
        </div>
      </div>
      <form className="enquiry-form" onSubmit={handleSubmit}>
        <div className="form-heading">
          <h3>Send an enquiry</h3>
          <p>Front-end only — submit opens a WhatsApp draft. No information is stored on this site.</p>
        </div>
        <div className="form-grid">
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Phone
            <input name="phone" type="tel" autoComplete="tel" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Service
            <select name="service" defaultValue="" required>
              <option value="" disabled>Select a service</option>
              {services.map((service) => <option value={service.name} key={service.name}>{service.name}</option>)}
            </select>
          </label>
          <label className="form-message">
            Message
            <textarea name="message" rows="4" required />
          </label>
        </div>
        <button className="button button-primary form-submit" type="submit">
          Prepare WhatsApp Enquiry <Icon name="arrow" size={18} />
        </button>
      </form>
    </section>
  );
}
