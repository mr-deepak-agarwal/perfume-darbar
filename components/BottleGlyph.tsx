type BottleGlyphProps = {
  hue: [string, string];
  className?: string;
  id: string;
};

// Placeholder product art. Swap this component for <Image src={product.photo} .../>
// once real bottle photography is ready — every call site passes the product's
// slug as `id` so gradients stay unique per product.
export default function BottleGlyph({ hue, className, id }: BottleGlyphProps) {
  const gradId = `grad-${id}`;
  return (
    <svg
      viewBox="0 0 240 320"
      className={className}
      role="img"
      aria-label="Bottle illustration placeholder"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={hue[0]} />
          <stop offset="100%" stopColor={hue[1]} />
        </linearGradient>
      </defs>
      <rect x="86" y="26" width="68" height="34" rx="4" fill={`url(#${gradId})`} opacity="0.9" />
      <rect x="100" y="10" width="40" height="20" rx="3" fill={hue[1]} opacity="0.85" />
      <path
        d="M78 60 h84 a10 10 0 0 1 10 10 v18 a26 26 0 0 1 12 22 v170 a14 14 0 0 1 -14 14 H70 a14 14 0 0 1 -14 -14 V110 a26 26 0 0 1 12 -22 V70 a10 10 0 0 1 10 -10 Z"
        fill={`url(#${gradId})`}
      />
      <rect x="66" y="150" width="108" height="66" rx="2" fill="#F6F0E3" opacity="0.14" />
      <line x1="66" y1="150" x2="174" y2="150" stroke="#F6F0E3" strokeOpacity="0.35" strokeWidth="1" />
      <line x1="66" y1="216" x2="174" y2="216" stroke="#F6F0E3" strokeOpacity="0.35" strokeWidth="1" />
    </svg>
  );
}
