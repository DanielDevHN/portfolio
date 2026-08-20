/**
 * Theme switching.
 *
 * Dark is the default and needs no stamp; choosing light stamps
 * data-theme="light" on <html>. The stored choice is re-applied by an inline
 * script in the document head, so there is no flash before the first paint.
 */

const STORAGE_KEY = 'theme';

type Theme = 'light' | 'dark';

function persist(theme: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* Private mode: the choice simply does not survive a reload. */
  }
}

/** The theme rendering right now. Dark is the default, light is opt-in. */
export function effectiveTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
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
}
