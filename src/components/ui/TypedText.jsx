import { useEffect, useState } from 'react';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';
import './TypedText.css';

// Types `text` once, then stops. Screen readers get the full text immediately.
export default function TypedText({ text, speed = 55, startDelay = 150, onDone }) {
  const reduced = usePrefersReducedMotion();
  const [count, setCount] = useState(reduced ? text.length : 0);
  const done = count >= text.length;

  useEffect(() => {
    if (reduced) {
      setCount(text.length);
      return;
    }
    if (done) return;
    const timer = setTimeout(() => setCount((c) => c + 1), count === 0 ? startDelay : speed);
    return () => clearTimeout(timer);
  }, [count, done, reduced, speed, startDelay, text.length]);

  useEffect(() => {
    if (done) onDone?.();
  }, [done, onDone]);

  return (
    <span className="typed">
      <span className="visually-hidden">{text}</span>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span className={`typed__caret ${done ? 'typed__caret--done' : ''}`} aria-hidden="true" />
    </span>
  );
}
