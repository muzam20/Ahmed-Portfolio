// ui/Button.jsx
import React from "react";

export default function Button({ children, variant = "primary", ...props }) {
  let baseClasses = "px-6 py-3 rounded-lg font-bold transition-all";

  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses = "bg-brand-accent text-black hover:scale-105";
      break;
    case "secondary":
      variantClasses =
        "border border-gray-500 text-white hover:bg-gray-700";
      break;
    default:
      variantClasses = "bg-gray-500 text-white";
  }

  return (
    <button className={`${baseClasses} ${variantClasses}`} {...props}>
      {children}
    </button>
  );
}