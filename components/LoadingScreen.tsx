
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<SVGPathElement>(null);
  const rightRef = useRef<SVGPathElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1,
          onComplete
        });
      }
    });

    // Animate cutting line
    tl.fromTo(lineRef.current, 
      { scaleY: 0, opacity: 0 }, 
      { scaleY: 1, opacity: 1, duration: 0.8, ease: "power4.inOut" }
    )
    // Separate the halves
    .to(leftRef.current, { x: -50, opacity: 0, duration: 1.2, ease: "expo.out" }, "+=0.2")
    .to(rightRef.current, { x: 50, opacity: 0, duration: 1.2, ease: "expo.out" }, "<")
    .to(lineRef.current, { scaleY: 0, duration: 0.5, ease: "power2.in" }, "<");

  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Simple Croissant SVG representation */}
        <svg viewBox="0 0 100 60" className="w-full h-full fill-white">
          <path ref={leftRef} d="M10,30 Q10,10 35,15 Q50,20 50,30 Q50,40 35,45 Q10,50 10,30" />
          <path ref={rightRef} d="M90,30 Q90,10 65,15 Q50,20 50,30 Q50,40 65,45 Q90,50 90,30" />
        </svg>
        <div ref={lineRef} className="absolute left-1/2 top-0 w-[2px] h-full bg-neon origin-top"></div>
      </div>
      <div className="absolute bottom-20 text-[10px] font-black tracking-[0.5em] text-white/40 uppercase">
        Initializing Paddock Telemetry...
      </div>
    </div>
  );
};

export default LoadingScreen;
