import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine) and (hover: hover)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reducedMotion.matches) return undefined;

    const cursor = cursorRef.current;
    document.body.classList.add('custom-cursor-enabled');
    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    function moveCursor(event) {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.add('is-visible');
      if (!frame) frame = requestAnimationFrame(animateCursor);
    }

    function animateCursor() {
      currentX += (targetX - currentX) * 0.24;
      currentY += (targetY - currentY) * 0.24;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      if (Math.abs(targetX - currentX) > 0.25 || Math.abs(targetY - currentY) > 0.25) {
        frame = requestAnimationFrame(animateCursor);
      } else {
        frame = 0;
      }
    }

    function setHover(event) {
      if (event.type === 'pointerover' && event.target.closest('a, button, input, select, textarea, summary')) {
        cursor.classList.add('is-hovering');
      } else if (event.type === 'pointerout' && event.target.closest('a, button, input, select, textarea, summary')) {
        cursor.classList.remove('is-hovering');
      }
    }

    function hideCursor() {
      cursor.classList.remove('is-visible', 'is-hovering');
    }

    document.addEventListener('pointermove', moveCursor, { passive: true });
    document.addEventListener('pointerover', setHover);
    document.addEventListener('pointerout', setHover);
    document.addEventListener('pointerleave', hideCursor);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      document.body.classList.remove('custom-cursor-enabled');
      document.removeEventListener('pointermove', moveCursor);
      document.removeEventListener('pointerover', setHover);
      document.removeEventListener('pointerout', setHover);
      document.removeEventListener('pointerleave', hideCursor);
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true" ref={cursorRef}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="2.4" />
        <circle cx="6" cy="18" r="2.4" />
        <path d="m8 7.5 12 9M8 16.5l12-9M13.5 12l6.5 6.5M13.5 12 20 5.5" />
      </svg>
    </div>
  );
}
