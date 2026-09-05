import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import { pagesSeo } from "@/data/seo";
import { pageHref } from "@/lib/routes";

export function Breadcrumbs({ slug }: { slug: string }) {
  const seo = pagesSeo[slug];
  return (
    <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-7xl px-5 pt-5 text-[13px] text-steel-400 sm:px-8">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className="hover:text-white">
            Acasă
          </Link>
        </li>
        <li aria-hidden>
          <CaretRight weight="bold" className="size-3" />
        </li>
        <li aria-current="page" className="font-semibold text-steel-200">
          <Link href={pageHref(slug)}>{seo.crumb}</Link>
        </li>
      </ol>
    </nav>
  );
}
