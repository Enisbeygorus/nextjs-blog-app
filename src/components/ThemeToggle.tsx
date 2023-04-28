"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/Button";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, theme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* <Button onClick={() => setTheme("light")} variant="ghost" size="sm">
        <Icons.Sun className="rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <Button onClick={() => setTheme("dark")} variant="ghost" size="sm">
        <Icons.Moon className="rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100" />
        <span className="sr-only">Toggle theme</span>
      </Button> */}
    </>
  );
}
