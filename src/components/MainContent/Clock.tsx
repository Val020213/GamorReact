import React, { useState } from "react";

export default function Clock(): JSX.Element {
  const [time, setTime] = useState<string>("");

  function updateClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTime(`${hours}:${minutes}:${seconds}`);
  }
  setInterval(updateClock, 1000);

  return <div className='clock'>{time}</div>;
}
