"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const FAQ_ITEMS = [
  {
    question: "Does Mobile Mirror work on Windows, macOS, and Linux?",
    answer:
      "Yes. Native packages are built automatically via GitHub Actions for Windows 10/11 (MobileMirror-Setup.exe), macOS Apple Silicon (MobileMirror-macOS.dmg), and Linux x86_64 (MobileMirror-Linux-amd64.deb and MobileMirror-Linux-x86_64.tar.gz). On Linux, ensure system FFmpeg and ADB are installed (e.g. sudo apt install ffmpeg adb).",
  },
  {
    question: "Does it support both Android and iPhone / iPad?",
    answer:
      "Yes. Android phones connect over USB (ADB) at up to 120 FPS with system audio and voice-isolated microphone capture. iPhones and iPads connect wirelessly via built-in AirPlay 1 & 2 (with FairPlay authentication and AAC-ELD audio) or over USB QuickTime mode.",
  },
  {
    question: "How are installers signed and verified on Windows, macOS, and Linux?",
    answer:
      "All release binaries are compiled directly from public source code in GitHub Actions with SHA-256 checksums (SHA256SUMS.txt). Free Windows code signing is provided by SignPath.io (certificate by SignPath Foundation). On macOS, if Gatekeeper prompts on first launch, run the included 'First Time Open (Bypass Gatekeeper).command' inside the DMG or right-click Mobile Mirror.app → Open.",
  },
  {
    question: "What if my device is not detected?",
    answer:
      "For Android USB, verify you are using a data-capable USB cable, enable USB Debugging in Developer Options, unlock your phone, and tap Allow. For iOS AirPlay, ensure your iPhone and computer are on the same Wi-Fi network and allow Mobile Mirror through your firewall.",
  },
  {
    question: "Is Mobile Mirror free?",
    answer:
      "Yes. Mobile Mirror is completely free and open-source with no watermarks, no time limits, no accounts, and no subscriptions.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="border-t border-[#e5e5e5] bg-[#f8fafc] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#171717] sm:text-3xl">
              FAQ
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#737373]">
              Common questions and troubleshooting. Browse the{" "}
              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-underline font-medium text-[#2563eb] hover:text-[#1d4ed8]"
              >
                GitHub repository
              </a>{" "}
              for source and issues.
            </p>
          </div>

          <div className="divide-y divide-[#e5e5e5] border-y border-[#e5e5e5] lg:col-span-8">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors duration-150 hover:text-[#171717] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
                  >
                    <span className="text-[15px] font-medium text-[#171717]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#737373] transition-transform duration-150 ${
                        isOpen ? "rotate-180 text-[#171717]" : ""
                      }`}
                      strokeWidth={1.75}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-4 pr-8 text-sm leading-relaxed text-[#737373]">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
