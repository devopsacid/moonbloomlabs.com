import type { en } from './en';

/** Shape of every locale dictionary. A missing or extra key in any locale is a type error. */
export type Dictionary = typeof en;
