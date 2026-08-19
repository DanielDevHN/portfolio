import type { UIKey } from '../i18n/ui';

/**
 * Technology stack grid.
 *
 * Item names are product names and stay untranslated; only the group titles
 * live in the UI dictionary. `highlight` marks the group currently getting
 * the deepest investment, which the grid renders in the accent colour.
 */

export interface StackGroup {
  id: string;
  titleKey: UIKey;
  highlight?: boolean;
  items: readonly string[];
}

export const stackGroups: readonly StackGroup[] = [
  {
    id: 'ai',
    titleKey: 'stack.group.ai',
    highlight: true,
    items: [
      'OpenAI',
      'n8n',
      'Custom nodes',
      'Embeddings',
      'Vector Search',
      'Builderbot',
      'RAG',
    ],
  },
  {
    id: 'backend',
    titleKey: 'stack.group.backend',
    items: ['Node.js', 'Nest.js', '.NET Core', 'TypeScript', 'C#', 'REST'],
  },
  {
    id: 'frontend',
    titleKey: 'stack.group.frontend',
    items: ['Angular', 'NgRx', 'Nx', 'React', 'Vue.js', 'RxJS'],
  },
  {
    id: 'data',
    titleKey: 'stack.group.data',
    items: ['PostgreSQL', 'MongoDB', 'SQL Server', 'pgvector'],
  },
  {
    id: 'mobile',
    titleKey: 'stack.group.mobile',
    items: ['Flutter', 'React Native', 'WinForms'],
  },
  {
    id: 'practices',
    titleKey: 'stack.group.practices',
    items: ['Monorepo', 'Clean code', 'Code review', 'CI/CD', 'Git'],
  },
] as const;
