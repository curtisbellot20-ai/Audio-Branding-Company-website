export default function HaloLogo({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string }) {
  const sizes = {
    sm:  { width: 140, height: 56 },
    md:  { width: 220, height: 88 },
    lg:  { width: 320, height: 128 },
    xl:  { width: 460, height: 184 },
  };
  const { width, height } = sizes[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 460 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Halo Audio"
      role="img"
      className={className}
      style={{ maxWidth: '90vw', height: 'auto' }}
    >
      <defs>
        <linearGradient id={`silverText-${size}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#F0F0F0" />
          <stop offset="70%" stopColor="#C8C8C8" />
          <stop offset="100%" stopColor="#A0A0A0" />
        </linearGradient>
        <linearGradient id={`goldText-${size}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5E27A" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#A08820" />
        </linearGradient>
        <linearGradient id={`goldLine-${size}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A08820" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
          <stop offset="100%" stopColor="#A08820" stopOpacity="0.2" />
        </linearGradient>
        <filter id={`textGlow-${size}`}>
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* HALO */}
      <text
        x="230"
        y="98"
        textAnchor="middle"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontWeight="700"
        fontSize="90"
        letterSpacing="8"
        fill={`url(#silverText-${size})`}
        filter={`url(#textGlow-${size})`}
      >
        HALO
      </text>

      {/* Decorative lines flanking AUDIO */}
      <line x1="40"  y1="118" x2="118" y2="118" stroke={`url(#goldLine-${size})`} strokeWidth="1" />
      <line x1="342" y1="118" x2="420" y2="118" stroke={`url(#goldLine-${size})`} strokeWidth="1" />

      {/* AUDIO */}
      <text
        x="230"
        y="130"
        textAnchor="middle"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontWeight="400"
        fontSize="24"
        letterSpacing="16"
        fill={`url(#goldText-${size})`}
      >
        AUDIO
      </text>

      {/* Waveform decorative lines */}
      <line x1="58"  y1="158" x2="148" y2="158" stroke={`url(#goldLine-${size})`} strokeWidth="0.8" opacity="0.6" />
      <line x1="312" y1="158" x2="402" y2="158" stroke={`url(#goldLine-${size})`} strokeWidth="0.8" opacity="0.6" />
      <rect x="144" y="156" width="3.5" height="3.5" fill="#D4AF37" opacity="0.8" transform="rotate(45 145.75 157.75)" />
      <rect x="312" y="156" width="3.5" height="3.5" fill="#D4AF37" opacity="0.8" transform="rotate(45 313.75 157.75)" />

      {/* Waveform bars */}
      {[
        [158,5],[163,9],[168,13],[173,9],[178,16],[183,11],
        [188,19],[193,14],[198,22],[203,16],[208,22],[213,14],
        [218,19],[223,11],[228,16],[233,9],[238,13],[243,9],[248,5],
      ].map(([x, h], i) => (
        <rect
          key={i}
          x={x}
          y={158 - (h as number) / 2}
          width="3.5"
          height={h}
          rx="1.5"
          fill={`url(#goldText-${size})`}
          opacity="0.95"
        />
      ))}
    </svg>
  );
}
