"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/constants";

let cachedStars: number | null = null;
let inflightRequest: Promise<number | null> | null = null;

function formatStarCount(count: number): string {
  if (count >= 10000) {
    return `${Math.round(count / 1000)}k`;
  }
  if (count >= 1000) {
    const val = (count / 1000).toFixed(1).replace(/\.0$/, "");
    return `${val}k`;
  }
  return count.toLocaleString("en-US");
}

async function fetchRepoStars(): Promise<number | null> {
  if (cachedStars !== null) return cachedStars;
  if (inflightRequest) return inflightRequest;

  inflightRequest = (async () => {
    // 1. Try Vercel edge-cached internal API route first
    try {
      const res = await fetch("/api/stars");
      if (res.ok) {
        const data = (await res.json()) as { stars?: unknown };
        if (typeof data.stars === "number") {
          cachedStars = data.stars;
          return cachedStars;
        }
      }
    } catch {
      // Fall through to direct GitHub REST API
    }

    // 2. Direct GitHub REST API fallback
    try {
      const res = await fetch(
        `https://api.github.com/repos/${SITE_CONFIG.githubUsername}/${SITE_CONFIG.repoName}`,
        {
          headers: { Accept: "application/vnd.github+json" },
        }
      );
      if (res.ok) {
        const data = (await res.json()) as { stargazers_count?: unknown };
        if (typeof data.stargazers_count === "number") {
          cachedStars = data.stargazers_count;
          return cachedStars;
        }
      }
    } catch {
      // Ignore network errors
    }

    return null;
  })().finally(() => {
    inflightRequest = null;
  });

  return inflightRequest;
}

interface GitHubStarPillProps {
  size?: "sm" | "md";
  className?: string;
}

export function GitHubStarPill({
  size = "sm",
  className = "",
}: GitHubStarPillProps) {
  const [stars, setStars] = useState<number | null>(cachedStars);

  useEffect(() => {
    let active = true;
    fetchRepoStars().then((count) => {
      if (active && count !== null) {
        setStars(count);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  const sizeClasses =
    size === "md"
      ? "h-11 gap-2.5 px-5 text-[15px]"
      : "h-9 gap-2 px-3.5 text-sm";

  const githubIconSize = size === "md" ? "h-5 w-5" : "h-4 w-4";
  const starIconSize = size === "md" ? "h-[18px] w-[18px]" : "h-4 w-4";

  return (
    <a
      href={SITE_CONFIG.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        stars !== null
          ? `Star Mobile Mirror on GitHub (${stars} stars)`
          : "Star Mobile Mirror on GitHub"
      }
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full border border-[#e5e5e5] bg-white font-medium text-[#171717] shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-colors duration-150 hover:border-[#d4d4d4] hover:bg-[#f8fafc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] ${sizeClasses} ${className}`}
    >
      <GitHubIcon className={`${githubIconSize} shrink-0 text-[#171717]`} />
      <span className="tabular-nums leading-none text-[#171717]">
        {stars !== null ? formatStarCount(stars) : "—"}
      </span>
      <Star
        className={`${starIconSize} shrink-0 fill-[#fbbf24] text-[#f59e0b]`}
        strokeWidth={1.75}
      />
    </a>
  );
}
