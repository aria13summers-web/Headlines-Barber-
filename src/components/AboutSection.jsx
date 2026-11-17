import Icon from './Icon.jsx';

export default function AboutSection() {
  return (
    <section className="about-section section-pad" id="about" aria-labelledby="about-title">
      <div className="about-mark" aria-hidden="true">HB<span> / </span>01</div>
      <div className="about-main">
        <div className="about-heading">
          <h2 id="about-title">A good cut<br />changes the <em>whole story.</em></h2>
          <p className="section-index">THE HEADLINES STANDARD</p>
        </div>
        <div className="about-copy">
          <p className="about-lead">
            Headlines Barber is a modern barber destination in Bloemfontein, focused on sharp cuts,
            clean grooming and confident style.
          </p>
          <p>
            We bring attention to detail and modern barbering together in a comfortable experience
            made for men who care about how they show up. Visit the locations listed above or find us
            at Royces PNP LHP Centre.
          </p>
          <a className="text-link" href="#contact">
            Find your chair <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
      <div className="about-bottom">
        <span>DETAIL, WITHOUT THE FUSS.</span>
        <span className="gold-rule" />
        <span>MADE FOR YOU.</span>
      </div>
    </section>
  );
}
