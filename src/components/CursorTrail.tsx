'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CursorTrail = () => {
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPoints((prevPoints) => [...prevPoints, { x: e.clientX, y: e.clientY }]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prevPoints) => {
        const newPoints = [...prevPoints];
        newPoints.shift();
        return newPoints;
      });
    }, 200); // Even shorter trail

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {points.map((point, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999]"
          style={{
            background: 'var(--gradient-cursor)',
            opacity: (index / points.length),
          }}
          initial={{ x: point.x - 8, y: point.y - 8 }}
          animate={{ x: point.x - 8, y: point.y - 8 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 25,
            mass: 0.5,
          }}
        />
      ))}
    </>
  );
};
