"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition, useMemo, useCallback } from "react";
import Flag from "react-flagkit";

const languages = {
  uz: { name: "O'zbek", countryCode: "UZ" },
  ru: { name: "Русский", countryCode: "RU" },
  en: { name: "English", countryCode: "GB" },
} as const;

type LanguageKey = keyof typeof languages;

export default function Language() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const currentLanguage = useLocale() as LanguageKey;

  const currentLanguageData = useMemo(
    () => languages[currentLanguage],
    [currentLanguage]
  );

  const handleLanguageChange = useCallback(
    (language: any) => {
      startTransition(() => {
        const newPathname = pathname.replace(
          `/${currentLanguage}`,
          `/${language}`
        );
        router.replace(newPathname);
      });
    },
    [pathname, currentLanguage, router]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center outline-none"
        aria-labelledby="current-language-label" // Use a unique ID
      >
        <Flag country={currentLanguageData.countryCode} className="mr-2" />
        <span id="current-language-label" className={`text-gray-700 hover:text-blue-600 transition-colors text-base`}>
          {currentLanguageData.name}
        </span>{" "}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Object.entries(languages).map(([key, { name, countryCode }]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => handleLanguageChange(key)}
            className="flex items-center focus:text-gray-700 text-base text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Flag country={countryCode}/>
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
