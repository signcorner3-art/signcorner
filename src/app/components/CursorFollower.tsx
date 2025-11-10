"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      setVisible(true); // show on movement

      // reset fade-out timer
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setVisible(false); // hide after inactivity
      }, 3000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const follow = () => {
      // Smooth motion for the outer circle
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12;

      const circle = cursorRef.current;
      const dot = dotRef.current;

      if (circle && dot) {
        circle.style.transform = `translate3d(${pos.current.x - 13}px, ${pos.current.y - 13}px, 0)`;
        dot.style.transform = `translate3d(${mouse.current.x - 1.5}px, ${mouse.current.y - 1.5}px, 0)`;

        // fade in/out smoothly
        const opacity = visible ? 1 : 0;
        circle.style.opacity = opacity.toString();
        dot.style.opacity = opacity.toString();
      }

      requestAnimationFrame(follow);
    };

    follow();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [visible]);

  return (
    <>
      {/* Smooth white ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-7 h-7 border-2 border-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-500"
      />
      {/* Fast center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference transition-opacity duration-500"
      />
    </>
  );
}
