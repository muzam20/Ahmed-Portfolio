import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed bottom-4 right-4 bg-gray-800 dark:bg-gray-200 text-white dark:text-black p-3 rounded-full shadow-lg"
    >
      {dark ? "☀ Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;