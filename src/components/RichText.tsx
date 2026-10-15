import React from 'react';

interface RichTextProps {
  content: string;
  className?: string;
}

/**
 * Safely parses and renders HTML tags commonly found in UTME past questions:
 * - Subscripts: <sub>...</sub> (e.g., chemical formulas H₂O, base notations 451₆)
 * - Superscripts: <sup>...</sup> (e.g., exponents x², ions Ca²⁺)
 * - Bold / Strong: <b>...</b>, <strong>...</strong>
 * - Italics / Emphasis: <i>...</i>, <em>...</em> (e.g. stress/antonym words in English)
 * - Underline: <u>...</u>
 * - Line breaks: <br>, <br/>
 */
export const RichText: React.FC<RichTextProps> = ({ content, className = '' }) => {
  if (!content) return null;

  // If there are no HTML tags, render directly for performance
  if (!/<[a-z][\s\S]*>/i.test(content) && !/&[a-z0-9#]+;/i.test(content)) {
    return <span className={className}>{content}</span>;
  }

  // Pre-process common HTML entities
  const decoded = content
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&deg;/g, '°');

  // Strip dangerous tags (script, iframe, object, etc.) while allowing safe styling tags
  const sanitized = decoded.replace(
    /<(?!\/?(b|strong|i|em|u|sub|sup|br|span)\b)[^>]+>/gi,
    ''
  );

  return (
    <span
      className={`rich-text inline leading-relaxed ${className}`}
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  );
};
