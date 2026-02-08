"use client";

import { useEffect, useState } from "react";

type ClockProps = {
  className?: string;
};

const Clock = ({ className = "" }: ClockProps) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();

      const formattedTime = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      setTime(formattedTime);
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span className={className}>{time}</span>;
};

export default Clock;
