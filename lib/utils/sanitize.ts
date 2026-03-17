/** Utilidades de sanitización y validación para el formulario de contacto */

const HTML_TAG_REGEX = /<[^>]*>/g;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s+\-().]{0,20}$/;

/** Elimina etiquetas HTML y recorta espacios */
export const sanitizeText = (input: string): string =>
  input.replace(HTML_TAG_REGEX, "").trim();

/** Valida formato de email */
export const isValidEmail = (email: string): boolean =>
  EMAIL_REGEX.test(email);

/** Valida formato de teléfono (opcional, acepta vacío) */
export const isValidPhone = (phone: string): boolean =>
  phone === "" || PHONE_REGEX.test(phone);

/** Constantes de longitud máxima */
export const MAX_LENGTHS = {
  name: 100,
  email: 254,
  phone: 20,
  message: 2000,
} as const;

/** Comprueba que ningún campo excede su longitud máxima */
export const validateLengths = (fields: Record<string, string>): boolean => {
  for (const [key, value] of Object.entries(fields)) {
    const maxLen = MAX_LENGTHS[key as keyof typeof MAX_LENGTHS];
    if (maxLen && value.length > maxLen) return false;
  }
  return true;
};
