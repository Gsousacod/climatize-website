"use client";

import { openCookiePreferences } from "@/lib/cookie-consent";

export function CookiePreferencesLink() {
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className="text-left text-sm text-blue-50 transition hover:text-white"
    >
      Preferências de cookies
    </button>
  );
}
