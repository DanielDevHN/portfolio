import { getCollection } from 'astro:content';
import type { Lang } from '../i18n/utils';

/**
 * Language-aware readers for the content collections.
 *
 * Each entry stores its translations side by side, so these helpers flatten
 * the requested language onto the shared fields and hand components a plain
 * object with no locale plumbing left in it. Everything comes back sorted by
 * the `order` field declared in the YAML.
 */

function byOrder<T extends { data: { order: number } }>(a: T, b: T): number {
  return a.data.order - b.data.order;
}

export async function getServices(lang: Lang) {
  const entries = await getCollection('services');
  return entries.sort(byOrder).map(({ id, data }) => ({
    id,
    icon: data.icon,
    highlight: data.highlight,
    chips: data.chips,
    ...data[lang],
  }));
}

export async function getExperience(lang: Lang) {
  const entries = await getCollection('experience');
  return entries.sort(byOrder).map(({ id, data }) => ({
    id,
    company: data.company,
    startYear: data.startYear,
    endYear: data.endYear,
    current: data.current,
    ...data[lang],
  }));
}

export async function getCaseStudies(lang: Lang) {
  const entries = await getCollection('caseStudies');
  return entries.sort(byOrder).map(({ id, data }) => ({
    id,
    icon: data.icon,
    organization: data.organization,
    ...data[lang],
  }));
}

export async function getEducation(lang: Lang) {
  const entries = await getCollection('education');
  return entries.sort(byOrder).map(({ id, data }) => ({
    id,
    startYear: data.startYear,
    endYear: data.endYear,
    inProgress: data.inProgress,
    ...data[lang],
  }));
}

/** "2022 — 2024", or "2025 — actual" while the role is ongoing. */
export function formatPeriod(
  startYear: number,
  endYear: number | undefined,
  presentLabel: string,
): string {
  return `${startYear} — ${endYear ?? presentLabel}`;
}

/** "En curso · 2027" for ongoing studies, "2020 — 2025" once completed. */
export function formatStudyPeriod(
  study: { startYear?: number; endYear: number; inProgress: boolean },
  inProgressLabel: string,
): string {
  return study.inProgress
    ? `${inProgressLabel} · ${study.endYear}`
    : `${study.startYear} — ${study.endYear}`;
}
