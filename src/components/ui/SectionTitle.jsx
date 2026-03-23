// ui/SectionTitle.jsx
import React from "react";

export default function SectionTitle({ title, subtitle, className = "" }) {
  return (
    <div className={`mb-8 text-center ${className}`}>
      {subtitle && (
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl font-bold">{title}</h2>
    </div>
  );
}