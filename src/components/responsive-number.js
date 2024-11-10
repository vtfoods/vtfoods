import { useState, useEffect, useRef } from "react";

const ResponsiveNumber = ({
  initialValue = 0,
  increment = 1,
  value,
  interval = 100,
  initialDelay = 0,
}) => {
  const [number, setNumber] = useState(initialValue);
  const numberRef = useRef(null);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && value > number) {
          const timeoutId = setTimeout(() => {
            const id = setInterval(() => {
              setNumber((prevNumber) => {
                const nextNumber = prevNumber + increment;
                if (nextNumber >= value) {
                  clearInterval(id);
                  return value;
                }
                return nextNumber;
              });
            }, interval);
            setIntervalId(id);
          }, initialDelay);

          return () => clearTimeout(timeoutId);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(numberRef.current);

    return () => {
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, [number, value, increment, interval, initialDelay]);

  return <span ref={numberRef}>{number}</span>;
};

export default ResponsiveNumber;
