const MascotV2 = ({ size = 80, color = 'var(--before-accent)' }) => (
  <svg viewBox="0 0 200 220" width={size} height={size * 1.1} aria-label="kangaroo">
    <path d="M 40 180 Q 20 170 30 150 Q 60 140 90 160 L 110 170 Z" fill={color} opacity="0.7"/>
    <path d="M 70 90 Q 55 115 60 150 Q 55 175 75 195 L 120 195 Q 135 180 130 160 Q 150 135 145 100 Q 135 70 105 65 Q 80 68 70 90 Z" fill={color}/>
    <path d="M 82 130 Q 80 155 95 165 L 120 165 Q 128 158 125 138 Q 105 128 82 130 Z" fill="var(--cream)" opacity="0.85"/>
    <path d="M 105 100 Q 118 110 118 128 Q 112 132 108 130 Q 102 120 100 108 Z" fill={color}/>
    <ellipse cx="130" cy="55" rx="24" ry="28" fill={color}/>
    <path d="M 130 30 Q 125 10 122 8 Q 128 18 128 32 Z" fill={color}/>
    <path d="M 140 30 Q 145 10 148 8 Q 142 18 142 32 Z" fill={color}/>
    <path d="M 148 58 Q 160 62 158 70 Q 150 72 144 68 Z" fill={color}/>
    <circle cx="138" cy="52" r="2.5" fill="var(--ink)"/>
    <path d="M 110 42 Q 130 34 154 42 L 154 46 Q 130 40 110 48 Z" fill="var(--moss)" opacity="0.9"/>
  </svg>
);

window.MascotV2 = MascotV2;
