import { connection } from "next/server";
import { links } from "@/data/profile";
import { getDb } from "@/lib/mongodb";

// clicks 컬렉션 문서 형태: { _id: 링크 id, count: 클릭 수 }
type ClickDoc = { _id: string; count: number };

const linkIds = new Set(links.map((link) => link.id));

export function isKnownLinkId(id: string) {
  return linkIds.has(id);
}

export async function getClickCounts(): Promise<Record<string, number>> {
  await connection();
  const db = await getDb();
  const docs = await db.collection<ClickDoc>("clicks").find().toArray();

  const counts: Record<string, number> = {};
  for (const link of links) counts[link.id] = 0;
  for (const doc of docs) {
    if (linkIds.has(doc._id)) counts[doc._id] = doc.count;
  }
  return counts;
}

export async function incrementClick(id: string) {
  const db = await getDb();
  await db
    .collection<ClickDoc>("clicks")
    .updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
}
