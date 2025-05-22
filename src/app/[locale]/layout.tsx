import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";
import ThemeProvider from "@/theme";
import PreferencesMenu from "@/components/PreferencesMenu";
import ClientOnly from "@/components/ClientOnly";

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="bg-[linear-gradient(to_right,_#e2e2e2,_#c9d6ff)] dark:bg-[linear-gradient(to_right,_#171823,_#171823)] dark:text-[#FFFFFF]">
        <ClientOnly>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <NextIntlClientProvider>
              {children}
              <PreferencesMenu />
            </NextIntlClientProvider>
          </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
