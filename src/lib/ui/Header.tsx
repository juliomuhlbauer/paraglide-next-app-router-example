"use client";
import * as m from "@/paraglide/messages.js";
import { Link, usePathname } from "@/lib/i18n";
import { SelectLanguage } from "./SelectLanguage";
import { usePathname as useNextPathname } from "@/lib/i18n";

export function Header() {
  const nextPathname = useNextPathname();
  const pathname = usePathname();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        borderBottom: "1px solid #ccc",
      }}
    >
      <nav
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/search">Search</Link>
        <Link href="/search/buy/homes">Homes to buy</Link>
      </nav>
      <div>{nextPathname}</div>

      <SelectLanguage />
    </header>
  );
}
