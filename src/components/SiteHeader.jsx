import { useEffect, useRef, useState } from 'react';
import { business } from '../data/business.js';
import Icon from './Icon.jsx';

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Gallery', '#gallery'],
  ['Reviews', '#reviews'],
  ['Contact', '#contact'],
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="header-shell">
      <div className="site-header-inner">
        <a className="wordmark" href="#home" aria-label={`${business.name}, home`} onClick={closeMenu}>
          <span className="wordmark-symbol" aria-hidden="true">H</span>
          <span className="wordmark-text">
            <span>Headlines</span>
            <span>Barber</span>
          </span>
        </a>
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={23} />
        </button>
        <nav
          className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="button button-small nav-booking" href="#contact" onClick={closeMenu}>
            Book Now <Icon name="arrow" size={16} />
          </a>
        </nav>
      </div>
    </div>
  );
}
