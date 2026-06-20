/**
 * formatGCash
 * @param number
 */
export function formatGCash(number: string): string {
  const cleaned = number.replace(/[^0-9]/g, "");
  if (cleaned.startsWith("63")) return `+${cleaned}`;
  if (cleaned.startsWith("0")) return `+63${cleaned.slice(1)}`;
  return `+63${cleaned}`;
}

/**
 * validateGCash
 * @param number
 */
export function validateGCash(number: string): boolean {
  const cleaned = number.replace(/[^0-9]/g, "");
  return /^(\+63|63|0)?9\d{9}$/.test(cleaned);
}

/**
 * isGCashCompatible
 * @param number
 */
export function isGCashCompatible(number: string): boolean {
  return validateGCash(number);
}
