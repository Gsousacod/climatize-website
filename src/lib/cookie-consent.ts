export type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export type StoredConsent = {
  preferences: CookiePreferences;
  updatedAt: string;
};

const STORAGE_KEY = "climatize:cookie-consent";

export const COOKIE_CONSENT_UPDATED_EVENT = "climatize:cookie-consent-updated";
export const OPEN_COOKIE_PREFERENCES_EVENT = "climatize:open-cookie-preferences";

export const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function getStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as StoredConsent;
    if (!parsed?.preferences) return null;

    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(preferences: Pick<CookiePreferences, "analytics" | "marketing">): StoredConsent {
  const consent: StoredConsent = {
    preferences: { necessary: true, analytics: preferences.analytics, marketing: preferences.marketing },
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent<StoredConsent>(COOKIE_CONSENT_UPDATED_EVENT, { detail: consent }));

  return consent;
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT));
}
