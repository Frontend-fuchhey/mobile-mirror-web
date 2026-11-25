import Image from "next/image";
import { GitHubIcon } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-4 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <div className="relative h-6 w-6 overflow-hidden rounded-md border border-[#e5e5e5] bg-white">
            <Image
              src="/images/app.png"
              alt="Mobile Mirror logo"
              fill
              sizes="24px"
              className="scale-110 object-cover"
            />
          </div>
          <span className="text-sm font-semibold text-[#171717]">
            {SITE_CONFIG.name}
          </span>
          <span className="font-mono text-xs text-[#737373]">
            {SITE_CONFIG.version}
          </span>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center gap-6 text-sm text-[#737373]"
        >
          <a
            href="#features"
            className="hover-underline transition-colors duration-150 hover:text-[#171717]"
          >
            Features
          </a>
          <a
            href="#setup"
            className="hover-underline transition-colors duration-150 hover:text-[#171717]"
          >
            Setup
          </a>
          <a
            href="#faq"
            className="hover-underline transition-colors duration-150 hover:text-[#171717]"
          >
            FAQ
          </a>
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline inline-flex items-center gap-1.5 transition-colors duration-150 hover:text-[#171717]"
          >
            <GitHubIcon className="h-3.5 w-3.5 shrink-0" />
            GitHub
          </a>
        </nav>
      </div>

      <div className="border-t border-[#f0f0f0] bg-[#fafafa]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 py-4 text-xs text-[#737373] sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>
            Open-source under the MIT License. All mirroring runs 100% locally over USB or LAN with zero telemetry.
          </p>
          <p>
            Free code signing provided by{" "}
            <a
              href="https://signpath.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline font-medium text-[#171717]"
            >
              SignPath.io
            </a>
            , certificate by{" "}
            <a
              href="https://signpath.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline font-medium text-[#171717]"
            >
              SignPath Foundation
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
