import { business } from '../data/business.js';
import { heroMedia } from '../data/media.js';
import Icon from './Icon.jsx';

function HeroVisual() {
  if (heroMedia.type === 'video' && heroMedia.src) {
    return (
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster={heroMedia.poster || undefined}
        aria-label={heroMedia.alt}
      >
        <source src={heroMedia.src} type="video/mp4" />
        Your browser does not support embedded video.
      </video>
    );
  }

  return (
    <img
      className="hero-image"
      src={heroMedia.src}
      alt={heroMedia.alt}
      fetchPriority="high"
    />
  );
}

export default function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="hero-kicker"><span /> Bloemfontein · Men’s grooming</p>
          <h1 id="hero-title">
            LOOK GOOD<span className="hero-comma">,</span>
            <span className="hero-title-second">MAKE <em>HEADLINES.</em></span>
          </h1>
          <p className="hero-tagline">{business.tagline}</p>
          <p className="hero-description">
            Sharp cuts, considered grooming and a comfortable chair. Leave looking like you mean it.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Book Your Cut <Icon name="arrow" size={18} />
            </a>
            <a className="button button-outline" href="#services">
              View Services
            </a>
          </div>
          <div className="hero-note">
            <span className="hero-note-mark" aria-hidden="true">HB</span>
            <span>Modern barbering<br />made personal.</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Editorial barber shop photography">
          <div className="hero-photo">
            <HeroVisual />
            <span className="photo-stamp">HEADLINES<br />BARBER</span>
            <span className="photo-index">STYLE / 01</span>
            <div className="photo-caption">
              <span>THE HEADLINES EDIT</span>
              <span>Bloemfontein, SA</span>
            </div>
          </div>
          <span className="hero-art-vertical">CUT WITH INTENTION</span>
        </div>
      </div>
      <div className="hero-footer" aria-hidden="true">
        <span>GROOMING / STYLE / CONFIDENCE</span>
        <span>01 — 06</span>
        <span className="hero-footer-line" />
        <span>SCROLL TO EXPLORE <Icon name="arrow" size={14} /></span>
      </div>
    </section>
  );
}
