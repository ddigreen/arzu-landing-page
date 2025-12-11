const OyuBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[50] overflow-hidden">
      {/* Top left corner ornament */}
      <svg 
        className="absolute top-20 left-4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 text-primary"
        style={{ opacity: 0.25 }}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M0 0 L60 0 L60 10 L10 10 L10 60 L0 60 Z" 
          fill="currentColor"
        />
        <path 
          d="M30 30 Q50 10 70 30 Q90 50 70 70 Q50 90 30 70 Q10 50 30 30" 
          stroke="currentColor" 
          strokeWidth="2.5"
        />
        <path 
          d="M20 20 L40 40 M40 20 L20 40" 
          stroke="currentColor" 
          strokeWidth="2"
        />
        <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2"/>
        <path 
          d="M80 20 Q100 40 80 60" 
          stroke="currentColor" 
          strokeWidth="2"
        />
        <path 
          d="M20 80 Q40 100 60 80" 
          stroke="currentColor" 
          strokeWidth="2"
        />
        {/* Additional oyu details */}
        <path d="M90 90 L110 90 L100 110 Z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="100" cy="100" r="5" fill="currentColor" fillOpacity="0.3"/>
      </svg>

      {/* Top right corner ornament */}
      <svg 
        className="absolute top-20 right-4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 text-primary"
        style={{ opacity: 0.25 }}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M200 0 L140 0 L140 10 L190 10 L190 60 L200 60 Z" 
          fill="currentColor"
        />
        <path 
          d="M170 30 Q150 10 130 30 Q110 50 130 70 Q150 90 170 70 Q190 50 170 30" 
          stroke="currentColor" 
          strokeWidth="2.5"
        />
        <path 
          d="M160 20 L180 40 M180 20 L160 40" 
          stroke="currentColor" 
          strokeWidth="2"
        />
        <circle cx="150" cy="50" r="10" stroke="currentColor" strokeWidth="2"/>
        <path 
          d="M120 20 Q100 40 120 60" 
          stroke="currentColor" 
          strokeWidth="2"
        />
        <path 
          d="M180 80 Q160 100 140 80" 
          stroke="currentColor" 
          strokeWidth="2"
        />
        {/* Additional oyu details */}
        <path d="M90 90 L110 90 L100 110 Z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="100" cy="100" r="5" fill="currentColor" fillOpacity="0.3"/>
      </svg>

      {/* Left side decorative pattern - visible column */}
      <div className="absolute left-2 md:left-4 top-[30%] w-12 md:w-20 lg:w-28" style={{ height: '50%' }}>
        <svg 
          className="h-full w-full text-primary"
          style={{ opacity: 0.2 }}
          viewBox="0 0 80 500"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ram horns pattern (koshkar muiz) - Traditional Kazakh ornament */}
          {[0, 70, 140, 210, 280, 350, 420].map((y, i) => (
            <g key={i}>
              <path d={`M15 ${y + 25} Q35 ${y + 5} 55 ${y + 25} Q35 ${y + 45} 15 ${y + 25}`} stroke="currentColor" strokeWidth="2"/>
              <circle cx="35" cy={y + 25} r="4" fill="currentColor"/>
              <path d={`M30 ${y + 50} L40 ${y + 60} L30 ${y + 70} L20 ${y + 60} Z`} stroke="currentColor" strokeWidth="1.5"/>
            </g>
          ))}
        </svg>
      </div>

      {/* Right side decorative pattern - visible column */}
      <div className="absolute right-2 md:right-4 top-[30%] w-12 md:w-20 lg:w-28" style={{ height: '50%' }}>
        <svg 
          className="h-full w-full text-primary"
          style={{ opacity: 0.2 }}
          viewBox="0 0 80 500"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ram horns pattern (koshkar muiz) - mirrored */}
          {[0, 70, 140, 210, 280, 350, 420].map((y, i) => (
            <g key={i}>
              <path d={`M65 ${y + 25} Q45 ${y + 5} 25 ${y + 25} Q45 ${y + 45} 65 ${y + 25}`} stroke="currentColor" strokeWidth="2"/>
              <circle cx="45" cy={y + 25} r="4" fill="currentColor"/>
              <path d={`M50 ${y + 50} L60 ${y + 60} L50 ${y + 70} L40 ${y + 60} Z`} stroke="currentColor" strokeWidth="1.5"/>
            </g>
          ))}
        </svg>
      </div>

      {/* Center floating ornament */}
      <svg 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] text-primary"
        style={{ opacity: 0.04 }}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Large central medallion oyu pattern */}
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="2"/>
        <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="1"/>
        {/* 8-pointed star */}
        <path d="M200 50 L220 180 L350 200 L220 220 L200 350 L180 220 L50 200 L180 180 Z" stroke="currentColor" strokeWidth="2"/>
        {/* Ram horns in 4 corners */}
        <path d="M100 100 Q130 70 160 100 Q130 130 100 100" stroke="currentColor" strokeWidth="2"/>
        <path d="M300 100 Q270 70 240 100 Q270 130 300 100" stroke="currentColor" strokeWidth="2"/>
        <path d="M100 300 Q130 270 160 300 Q130 330 100 300" stroke="currentColor" strokeWidth="2"/>
        <path d="M300 300 Q270 270 240 300 Q270 330 300 300" stroke="currentColor" strokeWidth="2"/>
        {/* Diamond accents */}
        <path d="M200 70 L210 85 L200 100 L190 85 Z" fill="currentColor"/>
        <path d="M200 300 L210 315 L200 330 L190 315 Z" fill="currentColor"/>
        <path d="M70 200 L85 210 L100 200 L85 190 Z" fill="currentColor"/>
        <path d="M300 200 L315 210 L330 200 L315 190 Z" fill="currentColor"/>
      </svg>

      {/* Bottom wave pattern */}
      <svg 
        className="absolute bottom-0 left-0 right-0 h-16 md:h-24 text-primary"
        style={{ opacity: 0.15 }}
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M0 40 Q50 15 100 40 Q150 65 200 40 Q250 15 300 40 Q350 65 400 40 Q450 15 500 40 Q550 65 600 40 Q650 15 700 40 Q750 65 800 40 Q850 15 900 40 Q950 65 1000 40 Q1050 15 1100 40 Q1150 65 1200 40" 
          stroke="currentColor" 
          strokeWidth="2.5"
        />
        <path 
          d="M0 55 Q50 35 100 55 Q150 75 200 55 Q250 35 300 55 Q350 75 400 55 Q450 35 500 55 Q550 75 600 55 Q650 35 700 55 Q750 75 800 55 Q850 35 900 55 Q950 75 1000 55 Q1050 35 1100 55 Q1150 75 1200 55" 
          stroke="currentColor" 
          strokeWidth="1.5"
        />
        {[100, 300, 500, 700, 900, 1100].map((x) => (
          <g key={x}>
            <circle cx={x} cy={40} r="6" fill="currentColor"/>
            <path d={`M${x-8} ${55} L${x} ${47} L${x+8} ${55}`} stroke="currentColor" strokeWidth="1.5"/>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default OyuBackground;
