import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/lib/constants";

export async function GET() {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${SITE_CONFIG.githubUsername}/${SITE_CONFIG.repoName}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "mobile-mirror-web",
        },
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { stars: null },
        {
          status: 200,
          headers: {
            "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
          },
        }
      );
    }

    const data = (await res.json()) as { stargazers_count?: unknown };
    const stars =
      typeof data.stargazers_count === "number" ? data.stargazers_count : null;

    return NextResponse.json(
      { stars },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch {
    return NextResponse.json({ stars: null }, { status: 200 });
  }
}
