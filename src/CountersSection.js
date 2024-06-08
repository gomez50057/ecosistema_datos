// src/CountersSection.js
import React, { useEffect, useState, useRef } from 'react';
import './styles.css';

const Counter = ({ target, text, startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (startCounting) {
      let start = 0;
      const end = target;
      const duration = 2000;
      const slowDown = 10;
      const frameRate = 1000 / 60;
      const totalFrames = Math.round(duration / frameRate);

      const counter = setInterval(() => {
        start += 1;
        setCount(start);

        if (start >= end - slowDown) {
          clearInterval(counter);
          const slowCounter = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
              clearInterval(slowCounter);
            }
          }, 100);
        }
      }, duration / totalFrames);

      return () => clearInterval(counter);
    }
  }, [startCounting, target]);

  return (
    <div className="counter">
      <div className="counter-value">{count}+</div>
      <div className="counter-text">{text}</div>
    </div>
  );
};

const CountersSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="counters-section" ref={sectionRef}>
      {visible && (
        <>
          <Counter target={100} text="masivo" startCounting={visible} />
          <Counter target={110} text="masivo" startCounting={visible} />
          <Counter target={120} text="masivo" startCounting={visible} />
        </>
      )}
    </div>
  );
};

export default CountersSection;
