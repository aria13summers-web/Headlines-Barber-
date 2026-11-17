import { services } from '../data/services.js';
import Icon from './Icon.jsx';

export default function ServicesSection() {
  return (
    <section className="services-section section-pad" id="services" aria-labelledby="services-title">
      <div className="section-heading services-heading">
        <div>
          <p className="section-index">THE MENU</p>
          <h2 id="services-title">Good work.<br /><em>Sharp finish.</em></h2>
        </div>
        <p className="section-intro">
          The essentials, done with care. Choose what you need and let the details take care of themselves.
        </p>
      </div>
      <div className="services-list">
        {services.map((service) => (
          <article className="service-row" key={service.name}>
            <span className="service-number">{service.number}</span>
            <span className="service-icon"><Icon name={service.icon} size={29} /></span>
            <div className="service-copy">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
            <a className="service-action" href="#contact" aria-label={`Enquire about ${service.name}`}>
              <Icon name="arrow" size={20} />
            </a>
          </article>
        ))}
      </div>
      <div className="services-cta">
        <p>Ready for a cleaner finish?</p>
        <a className="button button-dark" href="#contact">
          Book Your Appointment <Icon name="arrow" size={18} />
        </a>
      </div>
    </section>
  );
}
