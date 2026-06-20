export function formatDate(date: Date): string {
  const opts: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  };
  // Wix convention: omit the year for posts from the current year.
  if (date.getUTCFullYear() !== new Date().getUTCFullYear()) {
    opts.year = 'numeric';
  }
  return new Intl.DateTimeFormat('en-US', opts).format(date);
}
