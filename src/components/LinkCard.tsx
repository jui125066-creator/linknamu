import type { LinkItem } from "@/types";

type Props = {
  link: LinkItem;
};

export default function LinkCard({ link }: Props) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-12 w-full items-center justify-center rounded-xl border-2 border-zinc-900 bg-white font-medium text-zinc-900 transition hover:-translate-y-0.5 hover:bg-emerald-50 active:translate-y-0"
    >
      {link.title}
    </a>
  );
}
