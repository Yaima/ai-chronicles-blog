// Fixed display order for blog categories. The rail shows these (when used).
export const CATEGORY_ORDER = [
  'Foundations',
  'Ethics & Society',
  'Industry & Applications',
  'Creativity & Culture',
  'Reflections',
];

export function slugifyCategory(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
