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
        start += Math.ceil(end / totalFrames);
        if (start > end - slowDown) {
          start = end - slowDown;
        }
        setCount(start);

        if (start >= end - slowDown) {
          clearInterval(counter);
          const slowCounter = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
              clearInterval(slowCounter);
            }
          }, 50);
        }
      }, duration / totalFrames);

      return () => {
        clearInterval(counter);
      };
    }
  }, [startCounting, target]);

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const formattedText = text.split(' ').map((word, index) => (
    <span key={index} className="counter-text-line">{word}</span>
  ));

  return (
    <div className="counter">
      <div className="counter-value">{formatNumber(count)}+</div>
      <div className="counter-text">{formattedText}</div>
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
          <Counter target={32000} text="Habitantes Encuestados" startCounting={visible} />
          <Counter target={70} text="Municipios visitados" startCounting={visible} />
          <Counter target={30000} text="Propuestas" startCounting={visible} />
        </>
      )}
    </div>
  );
};

export default CountersSection;
