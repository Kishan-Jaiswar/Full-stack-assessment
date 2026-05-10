import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Index = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => {
        if (prev >= 30) {
          clearInterval();
          return prev;
        }

        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>{number}</p>;
};

export default Index;
