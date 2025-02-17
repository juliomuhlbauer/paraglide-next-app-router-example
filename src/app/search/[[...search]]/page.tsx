import { redirect } from "@/lib/i18n";
import { languageTag } from "@/paraglide/runtime";
import * as m from "@/paraglide/messages.js";

const TRANSACTIONS = [
  {
    id: "buy",
    slugs: { en: "buy", "pt-br": "comprar" },
  },
];

const TYPES = [
  {
    id: "home",
    slugs: {
      en: "homes",
      "pt-br": "casas",
    },
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{
    search?: string[];
  }>;
}) {
  const { search } = await params;

  const transactionSlug = search?.[0];
  const typeSlug = search?.[1];

  if (!transactionSlug || !typeSlug) {
    return (
      <>
        <h1>Search</h1>
      </>
    );
  }

  const locale = languageTag();

  const transaction = TRANSACTIONS.find((t) =>
    Object.values(t.slugs as Record<string, string>).includes(transactionSlug)
  );

  const type = TYPES.find((t) =>
    Object.values(t.slugs as Record<string, string>).includes(typeSlug)
  );

  if (!transaction || !type) {
    redirect("/search");
  }

  if (
    transaction?.slugs[locale] !== transactionSlug ||
    type?.slugs[locale] !== typeSlug
  ) {
    redirect(`/search/${transaction?.slugs[locale]}/${type?.slugs[locale]}`);
  }

  return (
    <>
      <h1>
        {m.mellow_lofty_butterfly_urge()} {transaction?.slugs[locale]}{" "}
        {type?.slugs[locale]}
      </h1>
    </>
  );
}
