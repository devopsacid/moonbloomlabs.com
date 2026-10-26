import { LOCALES, type Locale } from './routes';
import { READY_LOCALES } from './ready';

const env =
  (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.[
    'PUBLIC_ENABLE_ALL_LOCALES'
  ] ?? (typeof process !== 'undefined' ? process.env['PUBLIC_ENABLE_ALL_LOCALES'] : undefined);

/** Locales that are built: those whose copy deck was imported (or all, for review builds). */
export const ACTIVE_LOCALES: readonly Locale[] = env
  ? LOCALES
  : LOCALES.filter((l) => (READY_LOCALES as readonly string[]).includes(l));
