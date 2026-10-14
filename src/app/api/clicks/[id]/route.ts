import type { NextRequest } from "next/server";
import { incrementClick, isKnownLinkId } from "@/lib/clicks";

// 해당 링크의 클릭 수를 1 증가
export async function POST(_req: NextRequest, ctx: RouteContext<"/api/clicks/[id]">) {
  const { id } = await ctx.params;
  if (!isKnownLinkId(id)) {
    return Response.json({ error: "존재하지 않는 링크입니다" }, { status: 404 });
  }

  try {
    await incrementClick(id);
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("클릭 수 증가 실패", error);
    return Response.json({ error: "클릭 수를 기록하지 못했습니다" }, { status: 500 });
  }
}
