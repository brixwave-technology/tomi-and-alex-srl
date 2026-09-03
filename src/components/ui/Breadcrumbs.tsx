import Link from "next/link";
import { Fragment } from "react";
import { cn } from "@/lib/cn";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Navigare secundară" className={cn("text-[13px]", className)}>
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="link-line text-chalk/60 transition-colors hover:text-chalk">
            Acasă
          </Link>
        </li>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <Fragment key={item.label}>
              <li aria-hidden className="text-chalk/30">/</li>
              <li>
                {item.href && !last ? (
                  <Link href={item.href} className="link-line text-chalk/60 transition-colors hover:text-chalk">
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-chalk/90">{item.label}</span>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
