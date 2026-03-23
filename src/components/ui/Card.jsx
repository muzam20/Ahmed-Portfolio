// ui/Card.jsx
import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl glass-morphism aspect-[16/10] flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}