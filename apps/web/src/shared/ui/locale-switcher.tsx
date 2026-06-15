import { Languages } from "lucide-react";

import { getLocale, locales, setLocale } from "@rs-stack/i18n/runtime";
import { Button } from "@rs-stack/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@rs-stack/ui/components/dropdown-menu";
import { cn } from "@rs-stack/ui/lib/utils";

const LOCALE_DISPLAY: Record<string, { short: string; full: string }> = {
  en: { short: "EN", full: "English" },
  "zh-CN": { short: "中", full: "中文（简体）" }
};

export function LocaleSwitcher() {
  const currentLocale = getLocale();

  const switchLocale = async (newLocale: (typeof locales)[number]) => {
    if (newLocale === currentLocale) return;
    await setLocale(newLocale);
  };

  const display = LOCALE_DISPLAY[currentLocale] ?? { short: currentLocale, full: currentLocale };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-label="Switch language" className="gap-1.5" size="sm" variant="ghost">
          <Languages aria-hidden="true" className="size-4 shrink-0" />
          <span className="text-xs font-medium">{display.short}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            className={cn("cursor-pointer gap-2", {
              "font-semibold": locale === currentLocale
            })}
            onClick={() => switchLocale(locale)}
          >
            <span className="w-6 text-center text-xs text-muted-foreground">
              {LOCALE_DISPLAY[locale]?.short ?? locale}
            </span>
            <span>{LOCALE_DISPLAY[locale]?.full ?? locale}</span>
            {locale === currentLocale && (
              <span className="ml-auto size-1.5 rounded-full bg-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
