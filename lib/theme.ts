export const THEME_STORAGE_KEY = "theme" as const;

export const DAISYUI_THEMES = ["cupcake", "cyberpunk", "retro", "dracula", "night"] as const;

export type ThemeName = (typeof DAISYUI_THEMES)[number];

/**
 * Returns an inline script that applies the saved theme (or system preference)
 * before first paint to prevent a theme flash.
 */
export function generateNoFlashThemeScript(): string {
  // Inline, self-executing function kept extremely small to run ASAP
  // Only use system preference on first load to avoid flashing; no persistence
  return `(()=>{try{var d=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;var s=d?'night':'cupcake';document.documentElement.setAttribute('data-theme',s)}catch(e){}})();`;
}
