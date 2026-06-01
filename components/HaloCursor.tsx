'use client';

import { useEffect, useRef } from 'react';

export default function HaloCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const trailPosRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Only activate on devices with fine pointers (desktop)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    document.body.classList.add('halo-cursor-active');

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const { x, y } = posRef.current;
      const tx = trailPosRef.current.x;
      const ty = trailPosRef.current.y;
      trailPosRef.current = {
        x: tx + (x - tx) * 0.12,
        y: ty + (y - ty) * 0.12,
      };

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${x - 8}px, ${y - 8}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailPosRef.current.x - 20}px, ${trailPosRef.current.y - 20}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      document.body.classList.remove('halo-cursor-active');
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-halo-gold z-[9999] pointer-events-none mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
      {/* Halo trail ring */}
      <div
        ref={trailRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-halo-gold/50 z-[9998] pointer-events-none"
        style={{
          willChange: 'transform',
          boxShadow: '0 0 12px rgba(212,175,55,0.3)',
        }}
      />
    </>
  );
}
