import React from 'react'
export default function HighlightedText({ children, color = "#ffc5b2" }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span
        className="absolute bottom-1 left-0 w-full h-2 z-0 rounded-sm"
        style={{ backgroundColor: color }}
      ></span>
    </span>
  );
}

