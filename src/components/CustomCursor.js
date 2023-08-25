import React, { useEffect } from 'react';
import styles from './CustomCursor.module.css';
import animatedCursor from 'animated-cursor'; // Import the animatedCursor library

const CustomCursor = () => {
  useEffect(() => {
    const ac = animatedCursor();
    ac.init();
  }, []);

  return (
    <div id="cursor" className={styles.cursor}>
      <div id="cursor-outer"></div>
      <div id="cursor-inner"></div>
      <style jsx>{`
        #cursor-outer {
            background-color: #a9278fa8!important;
         border-style: dotted;
  border: 2px solid white;
            
        }
        #cursor-inner {
            background-color: #fff!important;
            width: 10px!important;
            height: 10px!important;
       
        }
      `}</style>
    </div>
  );
};

export default CustomCursor;
