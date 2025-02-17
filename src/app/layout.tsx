import "@/lib/ui/styles.css";
import { LanguageProvider } from "@inlang/paraglide-next";
import { AvailableLanguageTag, languageTag } from "@/paraglide/runtime";
import { Header } from "@/lib/ui/Header";
import * as m from "@/paraglide/messages.js";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = languageTag();
  return {
    title: m.title(),
    icons: "/favicon.png",
    openGraph: {
      locale,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <html lang={languageTag()}>
        <body>
          <Header />
          <main className="container">{children}</main>
        </body>
      </html>
    </LanguageProvider>
  );
}
