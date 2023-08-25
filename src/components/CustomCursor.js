import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


const AnimatedCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={cursorRef} className='animated-cursor'>
      <div className='dot'></div>
      <style jsx>{`
      .animated-cursor {
        position: fixed;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
       border : 3px solid White;
        transform-origin: center;
        opacity: 0.8;
      }
      
      .dot {
        width: 10px;
        height: 10px;
        background-color: var(--bg-color-1);
        border-radius: 50%;
      }
      
    `}</style>

    </div>
  );
};

export default AnimatedCursor;
