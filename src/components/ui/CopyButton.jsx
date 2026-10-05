import { useEffect, useState } from 'react';
import { CheckIcon, CopyIcon } from './icons.jsx';
import './CopyButton.css';

export default function CopyButton({ value, label = 'Copy' }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); fall back to a prompt.
      window.prompt('Copy this:', value);
    }
  }

  return (
    <button type="button" className={`copy-button ${copied ? 'copy-button--done' : ''}`} onClick={copy}>
      {copied ? <CheckIcon /> : <CopyIcon />}
      <span>{copied ? 'Copied' : label}</span>
      <span className="visually-hidden" role="status">
        {copied ? `${value} copied to clipboard` : ''}
      </span>
    </button>
  );
}
