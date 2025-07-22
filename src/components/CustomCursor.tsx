import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const cursorX = useSpring(0, { damping: 25, stiffness: 400, mass: 0.1 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 400, mass: 0.1 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    
    window.addEventListener('mousemove', updateMousePosition);
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-forest/30 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block backdrop-blur-sm"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 1.5 : 1,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-forest/20 rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 1.2 : 0.8,
          translateX: -12,
          translateY: -12,
        }}
        transition={{
          scale: {
            type: "spring",
            damping: 25,
            stiffness: 300,
          }
        }}
      />
    </>
  );
}