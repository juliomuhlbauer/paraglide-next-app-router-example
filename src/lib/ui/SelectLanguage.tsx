"use client";
import {
  availableLanguageTags,
  type AvailableLanguageTag,
  languageTag,
} from "@/paraglide/runtime";
import { usePathname, useRouter } from "@/lib/i18n";

export function SelectLanguage() {
  const pathname = usePathname();
  const router = useRouter();

  const labels: Record<AvailableLanguageTag, string> = {
    en: "🇬🇧 English",
    "pt-br": "🇧🇷 Português",
  };

  return (
    <select
      value={languageTag()}
      onChange={(e) =>
        router.push(pathname, {
          locale: e.target.value as AvailableLanguageTag,
        })
      }
    >
      {availableLanguageTags.map((lang) => (
        <option key={lang} value={lang}>
          {labels[lang]}
        </option>
      ))}
    </select>
  );
}
