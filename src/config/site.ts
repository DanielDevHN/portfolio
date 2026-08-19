/**
 * Single source of truth for identity, contact channels and deployment URL.
 *
 * Everything here is language-neutral. Translatable copy lives in `src/i18n`,
 * and long-form content lives in `src/content`.
 */

/** Canonical origin. Update this before the first production deploy. */
export const SITE_URL = 'https://danielreyes.dev';

export const AUTHOR = {
  name: 'Daniel Reyes',
  initials: 'DR',
  role: 'Senior Software Developer',
  location: 'San Pedro Sula, Honduras',
  email: 'dangrereyes@gmail.com',
  phone: '+504 3330-3580',
  /** Digits only, for wa.me links. */
  phoneDigits: '50433303580',
  github: 'DanielDevHN',
  linkedin: 'devdanielreyes',
} as const;

export const SOCIAL_LINKS = {
  email: `mailto:${AUTHOR.email}`,
  whatsapp: `https://wa.me/${AUTHOR.phoneDigits}`,
  github: `https://github.com/${AUTHOR.github}`,
  linkedin: `https://www.linkedin.com/in/${AUTHOR.linkedin}`,
} as const;

/** Year rendered in the footer. */
export const COPYRIGHT_YEAR = new Date().getFullYear();
