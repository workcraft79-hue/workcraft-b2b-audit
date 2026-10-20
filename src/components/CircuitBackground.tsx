import React from 'react';

interface CircuitBackgroundProps {
  side?: 'left' | 'right' | 'both';
  className?: string;
}

export const CircuitBackground: React.FC<CircuitBackgroundProps> = ({ 
  side = 'both', 
  className = ''
}) => {
  return (
    <div 
      className={`pointer-events-none absolute inset-y-0 w-full overflow-hidden select-none z-0 ${className}`} 
      aria-hidden="true"
    >
      {/* LEFT MARGIN CIRCUIT TRACES */}
      {(side === 'left' || side === 'both') && (
        <div className="absolute left-0 top-0 bottom-0 w-28 sm:w-40 md:w-56 lg:w-64 opacity-10 sm:opacity-15 pointer-events-none">
          <svg className="w-full h-full text-[#00E5FF]" viewBox="0 0 240 1000" fill="none" preserveAspectRatio="none">
            {/* Primary Data Bus 1 */}
            <path d="M 30 0 L 30 180 L 70 220 L 70 340 L 40 370 L 40 580 L 80 620 L 80 760 L 35 805 L 35 1000" 
              stroke="currentColor" strokeWidth="1.2" strokeDasharray="8 4" opacity="0.6" />
            
            {/* Secondary Trace */}
            <path d="M 60 40 L 60 160 L 110 210 L 110 320 L 75 355 L 75 560 L 120 605 L 120 740 L 70 790 L 70 980" 
              stroke="currentColor" strokeWidth="0.8" opacity="0.35" />

            {/* Branch Trace A with Resistor Zigzag */}
            <path d="M 15 90 L 45 90 L 85 130 L 160 130" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <path d="M 85 130 L 95 125 L 105 135 L 115 125 L 125 135 L 135 125 L 140 130" 
              stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
            <circle cx="160" cy="130" r="3.5" fill="#0D2136" stroke="currentColor" strokeWidth="1.2" />

            {/* Microchip IC 01 */}
            <g transform="translate(60, 210)">
              <rect x="-14" y="-12" width="28" height="24" rx="2" fill="#0A1420" stroke="currentColor" strokeWidth="1" />
              <line x1="-14" y1="-6" x2="-18" y2="-6" stroke="currentColor" strokeWidth="0.8" />
              <line x1="-14" y1="0" x2="-18" y2="0" stroke="currentColor" strokeWidth="0.8" />
              <line x1="-14" y1="6" x2="-18" y2="6" stroke="currentColor" strokeWidth="0.8" />
              <line x1="14" y1="-6" x2="18" y2="-6" stroke="currentColor" strokeWidth="0.8" />
              <line x1="14" y1="0" x2="18" y2="0" stroke="currentColor" strokeWidth="0.8" />
              <line x1="14" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="0.8" />
            </g>

            {/* Branch Trace B with Capacitor and Logic Buffer */}
            <path d="M 70 340 L 120 340 L 150 370 L 195 370" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="135" y1="334" x2="135" y2="346" stroke="currentColor" strokeWidth="1.5" />
            <line x1="140" y1="334" x2="140" y2="346" stroke="currentColor" strokeWidth="1.5" />
            <polygon points="170,366 170,374 180,370" fill="#0D2136" stroke="currentColor" strokeWidth="1" />
            <line x1="180" y1="365" x2="180" y2="375" stroke="currentColor" strokeWidth="1" />
            <circle cx="195" cy="370" r="3" fill="currentColor" />

            {/* Microchip IC 02 */}
            <g transform="translate(80, 620)">
              <rect x="-16" y="-14" width="32" height="28" rx="3" fill="#0A1420" stroke="currentColor" strokeWidth="1" />
              <line x1="-16" y1="-7" x2="-20" y2="-7" stroke="currentColor" strokeWidth="0.8" />
              <line x1="-16" y1="0" x2="-20" y2="0" stroke="currentColor" strokeWidth="0.8" />
              <line x1="-16" y1="7" x2="-20" y2="7" stroke="currentColor" strokeWidth="0.8" />
              <line x1="16" y1="-7" x2="20" y2="-7" stroke="currentColor" strokeWidth="0.8" />
              <line x1="16" y1="0" x2="20" y2="0" stroke="currentColor" strokeWidth="0.8" />
              <line x1="16" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="0.8" />
            </g>

            {/* Solder Points */}
            <circle cx="30" cy="180" r="2" fill="currentColor" />
            <circle cx="40" cy="370" r="2" fill="currentColor" />
            <circle cx="80" cy="760" r="2.5" fill="#0D2136" stroke="currentColor" strokeWidth="1" />
            <circle cx="35" cy="805" r="2" fill="currentColor" />
          </svg>
        </div>
      )}

      {/* RIGHT MARGIN CIRCUIT TRACES */}
      {(side === 'right' || side === 'both') && (
        <div className="absolute right-0 top-0 bottom-0 w-28 sm:w-40 md:w-56 lg:w-64 opacity-10 sm:opacity-15 pointer-events-none">
          <svg className="w-full h-full text-[#00E5FF]" viewBox="0 0 240 1000" fill="none" preserveAspectRatio="none">
            {/* Primary Data Bus */}
            <path d="M 210 0 L 210 190 L 170 230 L 170 350 L 200 380 L 200 600 L 160 640 L 160 770 L 205 815 L 205 1000" 
              stroke="currentColor" strokeWidth="1.2" strokeDasharray="8 4" opacity="0.6" />

            {/* Secondary Trace */}
            <path d="M 180 50 L 180 170 L 130 220 L 130 330 L 165 365 L 165 570 L 120 615 L 120 750 L 170 800 L 170 980" 
              stroke="currentColor" strokeWidth="0.8" opacity="0.35" />

            {/* Branch Trace A with Resistor */}
            <path d="M 225 100 L 195 100 L 155 140 L 80 140" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <path d="M 155 140 L 145 135 L 135 145 L 125 135 L 115 145 L 105 135 L 100 140" 
              stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
            <circle cx="80" cy="140" r="3" fill="#0D2136" stroke="currentColor" strokeWidth="1.2" />

            {/* Microchip IC 03 */}
            <g transform="translate(170, 230)">
              <rect x="-14" y="-12" width="28" height="24" rx="2" fill="#0A1420" stroke="currentColor" strokeWidth="1" />
              <line x1="-14" y1="-6" x2="-18" y2="-6" stroke="currentColor" strokeWidth="0.8" />
              <line x1="-14" y1="0" x2="-18" y2="0" stroke="currentColor" strokeWidth="0.8" />
              <line x1="-14" y1="6" x2="-18" y2="6" stroke="currentColor" strokeWidth="0.8" />
              <line x1="14" y1="-6" x2="18" y2="-6" stroke="currentColor" strokeWidth="0.8" />
              <line x1="14" y1="0" x2="18" y2="0" stroke="currentColor" strokeWidth="0.8" />
              <line x1="14" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="0.8" />
            </g>

            {/* Branch Trace B with Capacitor */}
            <path d="M 170 350 L 120 350 L 90 380 L 45 380" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="105" y1="344" x2="105" y2="356" stroke="currentColor" strokeWidth="1.5" />
            <line x1="100" y1="344" x2="100" y2="356" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="45" cy="380" r="3" fill="currentColor" />

            {/* Microchip IC 04 */}
            <g transform="translate(160, 640)">
              <rect x="-16" y="-14" width="32" height="28" rx="3" fill="#0A1420" stroke="currentColor" strokeWidth="1" />
              <line x1="-16" y1="-7" x2="-20" y2="-7" stroke="currentColor" strokeWidth="0.8" />
              <line x1="-16" y1="0" x2="-20" y2="0" stroke="currentColor" strokeWidth="0.8" />
              <line x1="-16" y1="7" x2="-20" y2="7" stroke="currentColor" strokeWidth="0.8" />
              <line x1="16" y1="-7" x2="20" y2="-7" stroke="currentColor" strokeWidth="0.8" />
              <line x1="16" y1="0" x2="20" y2="0" stroke="currentColor" strokeWidth="0.8" />
              <line x1="16" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="0.8" />
            </g>

            {/* Solder Points */}
            <circle cx="210" cy="190" r="2" fill="currentColor" />
            <circle cx="200" cy="380" r="2" fill="currentColor" />
            <circle cx="160" cy="770" r="2.5" fill="#0D2136" stroke="currentColor" strokeWidth="1" />
            <circle cx="205" cy="815" r="2" fill="currentColor" />
          </svg>
        </div>
      )}
    </div>
  );
};
