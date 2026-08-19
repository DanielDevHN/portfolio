/**
 * Section entrance animation.
 *
 * Elements marked `.reveal` fade in and rise 18px as they enter the viewport,
 * once each. Siblings are staggered so a row of cards arrives as a group
 * rather than all at once.
 *
 * Progressive enhancement: the CSS only hides `.reveal` under `html.js`, so
 * without JavaScript everything is visible from the start.
 */

const STAGGER_MS = 70;
const STAGGER_GROUP = 3;

export function initReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>('.reveal');
  if (targets.length === 0) return;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    for (const el of targets) el.dataset.revealed = '';
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.dataset.revealed = '';
        observer.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
  );

  targets.forEach((el, index) => {
    el.style.transitionDelay = `${(index % STAGGER_GROUP) * STAGGER_MS}ms`;
    observer.observe(el);
  });
}
