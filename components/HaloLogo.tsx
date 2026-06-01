export default function HaloLogo({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string }) {
  const sizes = {
    sm: { width: 120, height: 60 },
    md: { width: 180, height: 90 },
    lg: { width: 260, height: 130 },
    xl: { width: 360, height: 180 },
  };
  const { width, height } = sizes[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 360 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Halo Audio"
      role="img"
      className={className}
    >
      <defs>
        {/* Gold gradient for arc and accents */}
        <linearGradient id="goldArc" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A08820" stopOpacity="0.4" />
          <stop offset="40%" stopColor="#D4AF37" stopOpacity="1" />
          <stop offset="70%" stopColor="#F5E27A" stopOpacity="1" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.8" />
        </linearGradient>
        {/* Silver gradient for HALO text */}
        <linearGradient id="silverText" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#E8E8E8" />
          <stop offset="100%" stopColor="#B0B0B0" />
        </linearGradient>
        {/* Gold gradient for AUDIO text */}
        <linearGradient id="goldText" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5E27A" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#A08820" />
        </linearGradient>
        {/* Glow filter */}
        <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Halo arc — outer sweep */}
      <path
        d="M 30 120 Q 80 10 200 30 Q 300 45 340 80"
        stroke="url(#goldArc)"
        strokeWidth="2.5"
        fill="none"
        filter="url(#arcGlow)"
        strokeLinecap="round"
      />
      {/* Halo arc — inner sweep (tighter) */}
      <path
        d="M 50 125 Q 95 25 205 42 Q 295 55 335 88"
        stroke="url(#goldArc)"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* HALO — main text */}
      <text
        x="180"
        y="108"
        textAnchor="middle"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontWeight="700"
        fontSize="68"
        letterSpacing="6"
        fill="url(#silverText)"
      >
        HALO
      </text>

      {/* Decorative lines flanking AUDIO */}
      <line x1="38" y1="122" x2="88" y2="122" stroke="url(#goldText)" strokeWidth="1" opacity="0.8" />
      <line x1="272" y1="122" x2="322" y2="122" stroke="url(#goldText)" strokeWidth="1" opacity="0.8" />

      {/* AUDIO text */}
      <text
        x="180"
        y="133"
        textAnchor="middle"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontWeight="400"
        fontSize="22"
        letterSpacing="12"
        fill="url(#goldText)"
      >
        AUDIO
      </text>

      {/* Decorative lines flanking waveform */}
      <line x1="52" y1="150" x2="118" y2="150" stroke="url(#goldText)" strokeWidth="0.8" opacity="0.5" />
      <line x1="242" y1="150" x2="308" y2="150" stroke="url(#goldText)" strokeWidth="0.8" opacity="0.5" />
      {/* Diamond dots */}
      <rect x="114" y="148" width="3" height="3" fill="#D4AF37" opacity="0.7" transform="rotate(45 115.5 149.5)" />
      <rect x="243" y="148" width="3" height="3" fill="#D4AF37" opacity="0.7" transform="rotate(45 244.5 149.5)" />

      {/* Waveform bars */}
      {[
        [130, 6], [136, 10], [142, 14], [148, 10], [154, 16], [160, 12],
        [166, 18], [172, 14], [178, 20], [184, 14], [190, 18], [196, 12],
        [202, 16], [208, 10], [214, 14], [220, 10], [226, 6],
      ].map(([x, h], i) => (
        <rect
          key={i}
          x={x}
          y={150 - h / 2}
          width="3"
          height={h}
          rx="1"
          fill="url(#goldText)"
          opacity="0.9"
        />
      ))}
    </svg>
  );
}
