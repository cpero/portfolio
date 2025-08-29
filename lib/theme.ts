export const DAISYUI_THEMES = ["night"] as const;

export type ThemeName = (typeof DAISYUI_THEMES)[number];

/**
 * Returns an inline script that applies the night theme before first paint
 * to prevent a theme flash.
 */
export function generateNoFlashThemeScript(): string {
  return `(()=>{try{document.documentElement.setAttribute('data-theme','night')}catch(e){}})();`;
}
