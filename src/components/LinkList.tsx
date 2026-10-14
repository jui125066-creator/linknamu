"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/types";

type Props = {
  links: LinkItem[];
};

type Counts = Record<string, number>;

export default function LinkList({ links }: Props) {
  // 서버에서 받은 값 (받기 전에는 비어 있어 0회로 표시)
  const [serverCounts, setServerCounts] = useState<Counts>({});
  // 이 페이지에서 누른 횟수 — 새로고침 없이 바로 숫자에 반영
  const [localClicks, setLocalClicks] = useState<Counts>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : null))
      .then((data: Counts | null) => {
        if (data) setServerCounts(data);
      })
      .catch(() => {});
  }, []);

  function handleClick(id: string) {
    // 새 탭으로 이동해도 요청이 끊기지 않도록 keepalive 사용
    fetch(`/api/clicks/${id}`, { method: "POST", keepalive: true }).catch(() => {});
    setLocalClicks((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }

  return (
    <ul className="mt-12 flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            count={(serverCounts[link.id] ?? 0) + (localClicks[link.id] ?? 0)}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
