/** Rate limiter in-memory para Vercel Serverless */

interface RateLimitEntry {
  count: number;
  firstRequest: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

const WINDOW_MS = 15 * 60 * 1000; // 15 minutos
const MAX_REQUESTS = 3;

/** Limpia entradas expiradas del mapa */
const cleanup = () => {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap) {
    if (now - entry.firstRequest > WINDOW_MS) {
      rateLimitMap.delete(key);
    }
  }
};

/**
 * Comprueba si una IP ha excedido el límite de peticiones.
 * @returns `true` si la petición está permitida, `false` si debe rechazarse.
 */
export const checkRateLimit = (ip: string): boolean => {
  cleanup();

  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return true;
  }

  if (now - entry.firstRequest > WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) {
    return false;
  }

  entry.count += 1;
  return true;
};
