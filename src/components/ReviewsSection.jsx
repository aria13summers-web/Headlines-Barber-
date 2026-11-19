import { reviews } from '../data/reviews.js';
import Icon from './Icon.jsx';

export default function ReviewsSection() {
  return (
    <section className="reviews-section section-pad" id="reviews" aria-labelledby="reviews-title">
      <div className="reviews-intro">
        <p className="section-index">CUSTOMER REVIEWS</p>
        <h2 id="reviews-title">Good style<br />gets <em>around.</em></h2>
      </div>
      <div className="review-grid">
        {reviews.map((review, index) => (
          <article className="review-card" key={`${review.name}-${index}`}>
            <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
              {Array.from({ length: 5 }, (_, star) => (
                <Icon
                  name="star"
                  size={16}
                  key={star}
                  className={star < review.rating ? 'star-filled' : 'star-empty'}
                />
              ))}
            </div>
            <blockquote>“{review.quote}”</blockquote>
            <div className="review-byline">
              <span className="review-avatar" aria-hidden="true">{review.initials}</span>
              <span>{review.name}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
