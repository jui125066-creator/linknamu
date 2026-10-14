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
      className="flex h-14 w-full items-center justify-center rounded-2xl border border-white/70 bg-white/45 text-[15px] font-semibold text-stone-800 shadow-[0_4px_20px_-6px_rgba(160,100,60,0.18)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_8px_28px_-8px_rgba(160,100,60,0.28)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
    >
      {link.title}
    </a>
  );
}
