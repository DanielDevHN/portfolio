/**
 * Single source of truth for identity, contact channels and deployment URL.
 *
 * Everything here is language-neutral. Translatable copy lives in `src/i18n`,
 * and long-form content lives in `src/content`.
 */

/**
 * Canonical origin. Canonical URLs, hreflang alternates and the sitemap are
 * all generated from it, so it must match the deployed domain exactly.
 */
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

/**
 * Formspree endpoint the contact form posts to. Messages are delivered to the
 * inbox the Formspree account was registered with, so no mail credentials
 * live in this repository.
 *
 * Managed at https://formspree.io. The endpoint is a public identifier, not a
 * secret: it only accepts submissions, and Formspree handles spam filtering.
 */
export const CONTACT_FORM_ENDPOINT = 'https://formspree.io/f/xgawrpzv';

/** Year rendered in the footer. */
export const COPYRIGHT_YEAR = new Date().getFullYear();
