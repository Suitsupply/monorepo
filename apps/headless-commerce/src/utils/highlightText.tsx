import type { ReactElement } from 'react';

export const highlightText = (text: string, highlight: string): ReactElement => {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

  return (
    <span>
      {parts.map((part, i) => (
        <span
          key={`part-${i + 1}`}
          className={part.toLowerCase() === highlight.toLowerCase() ? 'body-medium' : 'body-light'}
        >
          {part}
        </span>
      ))}
    </span>
  );
};
