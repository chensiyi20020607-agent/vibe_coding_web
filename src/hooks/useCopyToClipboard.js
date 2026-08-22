import { useState, useCallback } from 'react';

export function useCopyToClipboard(resetMs = 2000) {
  const [copiedKey, setCopiedKey] = useState(null);

  const copy = useCallback(
    (text) => {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        setCopiedKey(text);
        setTimeout(() => setCopiedKey(null), resetMs);
      } catch (e) {
        console.error('Copy failed', e);
      }
      document.body.removeChild(textarea);
    },
    [resetMs]
  );

  return { copy, copiedKey };
}
