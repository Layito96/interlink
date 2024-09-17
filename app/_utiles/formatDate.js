/**
 * Format a date string into a readable format.
 * @param {string} dateString - The ISO date string to format.
 * @param {string} locale - The locale string for formatting. Default is 'fr-FR'.
 * @param {object} options - Formatting options for the date.
 * @returns {string} - Formatted date string.
 */
export const formatDate = (dateString, locale = "fr-FR", options = {}) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
    ...options,
  });
};
