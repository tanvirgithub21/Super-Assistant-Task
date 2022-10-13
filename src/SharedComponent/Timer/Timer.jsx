import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Timer = ({ timeEnd }) => {
  const [time, setTime] = useState(15 * 60 * 1000);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, [1000]);

    if (time === 0) {
      timeEnd(true);
    }
  }, [time]);

  const timeFormat = () => {
    const totalSecond = parseInt(Math.floor(time / 1000));
    const totalMin = parseInt(Math.floor(totalSecond / 60));

    const second = parseInt(totalSecond % 60);
    const min = parseInt(totalMin % 60);

    console.log(`Time: ${min}:${second} `);

    return `Time: ${min}:${second} `;
  };

  return <div>{timeFormat()}</div>;
};

export default Timer;
