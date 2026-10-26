/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_TURNSTILE_SITEKEY?: string;
  readonly PUBLIC_CF_ANALYTICS_TOKEN?: string;
  readonly PUBLIC_ENABLE_ALL_LOCALES?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
