import { useEffect, useRef, useState } from 'react';
import { galleryItems } from '../data/media.js';
import Icon from './Icon.jsx';

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState(null);
  const [comparisonPosition, setComparisonPosition] = useState(50);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activeImage && !dialog.open) dialog.showModal();
    if (!activeImage && dialog.open) dialog.close();
  }, [activeImage]);

  return (
    <section className="gallery-section section-pad" id="gallery" aria-labelledby="gallery-title">
      <div className="section-heading gallery-heading">
        <div>
          <p className="section-index">A CLOSER LOOK</p>
          <h2 id="gallery-title">The work<br /><em>speaks.</em></h2>
        </div>
        <p className="section-intro">
          A few frames from the world of grooming.
        </p>
      </div>
      <div className="gallery-comparison">
        <div className="gallery-comparison-frame">
          <img
            className="comparison-image comparison-before"
            src="/images/gallery/before.png"
            alt="Before haircut"
            loading="lazy"
            decoding="async"
          />
          <div
            className="comparison-after"
            style={{ clipPath: `inset(0 0 0 ${comparisonPosition}%)` }}
            aria-hidden="true"
          >
            <img
              className="comparison-image"
              src="/images/gallery/after.png"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
          <div
            className="comparison-divider"
            style={{ left: `${comparisonPosition}%` }}
            aria-hidden="true"
          >
            <span className="comparison-handle">
              <span>‹</span>
              <span>›</span>
            </span>
          </div>
          <input
            className="comparison-range"
            type="range"
            min="0"
            max="100"
            value={comparisonPosition}
            onChange={(event) => setComparisonPosition(Number(event.target.value))}
            aria-label="Compare before and after haircut images"
          />
          <span className="comparison-label comparison-label-before">Before</span>
          <span className="comparison-label comparison-label-after">After</span>
        </div>
        <div className="gallery-caption">
          <span>The transformation</span>
          <span className="gallery-label">Before &amp; after</span>
        </div>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <article className={`gallery-item gallery-item-${index + 1}`} key={item.src}>
            {item.type === 'video' ? (
              <video
                className="gallery-media"
                controls
                playsInline
                preload="metadata"
                poster={item.poster || undefined}
                aria-label={item.alt}
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support embedded video. You can open the MP4 at {item.src}.
              </video>
            ) : (
              <button
                className="gallery-image-button"
                type="button"
                onClick={() => setActiveImage(item)}
                aria-label={`Open image: ${item.alt}`}
              >
                <img
                  className="gallery-media"
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="gallery-zoom" aria-hidden="true">+</span>
              </button>
            )}
            <div className="gallery-caption">
              <span>{item.caption}</span>
              <span className="gallery-label">{item.label || 'Local video'}</span>
            </div>
          </article>
        ))}
      </div>
      <dialog
        className="gallery-dialog"
        ref={dialogRef}
        aria-labelledby="gallery-dialog-title"
        onClose={() => setActiveImage(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActiveImage(null);
        }}
      >
        {activeImage && (
          <div className="dialog-content">
            <div className="dialog-heading">
              <h3 id="gallery-dialog-title">{activeImage.caption}</h3>
              <button className="dialog-close" type="button" onClick={() => setActiveImage(null)} aria-label="Close image">
                <Icon name="close" size={22} />
              </button>
            </div>
            <img src={activeImage.src} alt={activeImage.alt} />
            <p>{activeImage.label}</p>
          </div>
        )}
      </dialog>
    </section>
  );
}
