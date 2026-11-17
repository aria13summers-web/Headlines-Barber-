import { business } from '../data/business.js';
import Icon from './Icon.jsx';

export default function WhatsAppButton() {
  return (
    <a className="whatsapp-float" href={business.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Headlines Barber on WhatsApp">
      <Icon name="whatsapp" size={25} />
      <span>WhatsApp us</span>
    </a>
  );
}
