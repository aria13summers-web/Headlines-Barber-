import { reviews } from '../data/reviews.js';
import Icon from './Icon.jsx';

export default function ReviewsSection() {
  return (
    <section className="reviews-section section-pad" id="reviews" aria-labelledby="reviews-title">
      <div className="reviews-intro">
        <p className="section-index">YOUR WORDS, SOON</p>
        <h2 id="reviews-title">Good style<br />gets <em>around.</em></h2>
        <p>Real customer feedback will appear here when it is available.</p>
      </div>
      <div className="review-grid">
        {reviews.map((review, index) => (
          <article className="review-card" key={`${review.name}-${index}`}>
            <span className="sample-label">{review.label} · replace before launch</span>
            <div className="review-stars" aria-label={`Illustrative ${review.rating}-star rating`}>
              {Array.from({ length: review.rating }, (_, star) => <Icon name="star" size={16} key={star} />)}
            </div>
            <blockquote>“{review.quote}”</blockquote>
            <div className="review-byline">
              <span className="review-avatar" aria-hidden="true">?</span>
              <span>{review.name}<small>Sample content — not a real testimonial</small></span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
