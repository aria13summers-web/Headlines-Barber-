import { business } from '../data/business.js';

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar" aria-label="Additional visit locations">
      <div className="announcement-inner">
        <span className="announcement-label">Visit us at:</span>
        <ul className="location-list">
          {business.locations.map((location) => (
            <li key={location}>{location}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
