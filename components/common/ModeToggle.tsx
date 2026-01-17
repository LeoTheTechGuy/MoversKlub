"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none"
      aria-label="Toggle theme"
    >
      <Sun className={`absolute h-5 w-5 text-primary transition-all duration-300 ${theme === 'dark' ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`} />
      <Moon className={`absolute h-5 w-5 text-primary transition-all duration-300 ${theme === 'dark' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'}`} />
    </button>
  );
}
