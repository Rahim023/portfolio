import React, { useEffect, useState } from "react";
import CometDial from "./CometDial";
import "./LoadingDial.css";

export default function LoadingDial({ label, progress }) {
  const [estimated, setEstimated] = useState(0);

  useEffect(() => {
    if (progress !== undefined) return undefined;
    const timer = window.setInterval(() => {
      setEstimated((current) => Math.min(90, current + Math.max(1, Math.ceil((90 - current) / 18))));
    }, 90);
    return () => window.clearInterval(timer);
  }, [progress]);

  return (
    <div className="loading-dial">
      <CometDial readOnly value={progress === undefined ? estimated : progress} label={label} accent="#b89aff" size={190} />
      <p>{label}</p>
    </div>
  );
}
