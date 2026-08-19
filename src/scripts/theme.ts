/**
 * Theme switching.
 *
 * The stored choice is applied by an inline script in the document head so
 * there is no flash before the first paint. This module only handles the
 * toggle itself and keeps the button label in sync.
 */

const STORAGE_KEY = 'theme';

type Theme = 'light' | 'dark';

function readStored(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'dark' || value === 'light' ? value : null;
  } catch {
    return null;
  }
}

function persist(theme: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* Private mode: the choice simply does not survive a reload. */
  }
}

/** The theme actually rendering right now, stamped or inherited from the OS. */
export function effectiveTheme(): Theme {
  const stamped = document.documentElement.dataset.theme;
  if (stamped === 'dark' || stamped === 'light') return stamped;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function initThemeToggle(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>(
    '[data-theme-toggle]',
  );
  if (buttons.length === 0) return;

  for (const button of buttons) {
    button.addEventListener('click', () => {
      const next: Theme = effectiveTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      persist(next);
    });
  }

  // Follow the operating system while the visitor has made no explicit choice.
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', () => {
      if (readStored() === null) delete document.documentElement.dataset.theme;
    });
}
