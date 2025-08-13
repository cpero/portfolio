"use client";

import { useEffect, useMemo, useState, type ReactElement } from "react";
import { DAISYUI_THEMES, type ThemeName } from "@/lib/theme";

function getSystemPreferredTheme(): ThemeName {
  if (typeof window === "undefined") return "cupcake";
  const prefersDark =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "night" : "cupcake";
}

function readInitialTheme(): ThemeName {
  if (typeof window === "undefined") return "cupcake";
  const attr = document.documentElement.getAttribute("data-theme") as ThemeName | null;
  if (attr && DAISYUI_THEMES.includes(attr)) return attr;
  return getSystemPreferredTheme();
}

export default function ThemeToggle(): ReactElement {
  const [theme, setTheme] = useState<ThemeName>(() => readInitialTheme());
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const themeItems = useMemo(
    () =>
      (DAISYUI_THEMES as readonly ThemeName[]).map((t) => ({
        id: t,
        label: t.charAt(0).toUpperCase() + t.slice(1),
      })),
    [],
  );

  return (
    <div className="dropdown dropdown-end">
      <button
        tabIndex={0}
        className="btn btn-circle btn-sm btn-primary"
        aria-label="Change theme"
        aria-haspopup="menu"
        aria-expanded="false"
        title="Change theme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3a9 9 0 100 18 3 3 0 010-6h1a4 4 0 000-8h-1zM7 10h.01M7 14h.01M10 7h.01M14 7h.01"
          />
        </svg>
        <span className="sr-only">Change theme</span>
      </button>
      <ul
        tabIndex={0}
        role="menu"
        className="menu menu-sm dropdown-content bg-base-300 rounded-box z-50 mt-3 w-64 p-2 shadow"
      >
        {themeItems.map(({ id, label }) => (
          <li key={id} role="none">
            <button
              role="menuitemradio"
              aria-checked={hasMounted && theme === id}
              className={`flex w-full items-center justify-between gap-3 ${
                hasMounted && theme === id ? "active" : ""
              }`}
              onClick={() => setTheme(id)}
            >
              <span>{label}</span>
              <div
                data-theme={id}
                className="bg-base-100 outline-base-300 flex items-center gap-1 rounded-md p-1 outline"
              >
                <span className="bg-primary h-3 w-3 rounded" />
                <span className="bg-secondary h-3 w-3 rounded" />
                <span className="bg-accent h-3 w-3 rounded" />
                <span className="bg-neutral h-3 w-3 rounded" />
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
