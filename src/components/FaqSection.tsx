"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const FAQ_ITEMS = [
  {
    question: "Does Mobile Mirror work on Windows, macOS, and Linux?",
    answer:
      "Yes. Native packages are built automatically via GitHub Actions for Windows 10/11 (MobileMirror-Setup.exe), macOS Apple Silicon (MobileMirror-macOS.dmg), and Linux x86_64 (MobileMirror-Linux-x86_64.tar.gz). On Linux, ensure system FFmpeg and ADB are installed (e.g. sudo apt install ffmpeg adb).",
  },
  {
    question: "Does it support both Android and iPhone / iPad?",
    answer:
      "Yes. Android phones connect over USB (ADB) at up to 120 FPS with system audio and voice-isolated microphone capture. iPhones and iPads connect wirelessly via built-in AirPlay 1 & 2 (with FairPlay authentication and AAC-ELD audio) or over USB QuickTime mode.",
  },
  {
    question: "Why do I see a Windows SmartScreen or macOS Gatekeeper warning?",
    answer:
      "Mobile Mirror is free and open-source and is not yet signed with a paid EV/Apple Developer certificate. On Windows, click 'More info' → 'Run anyway'. On macOS, right-click Mobile Mirror.app → 'Open' (or allow it in System Settings → Privacy & Security).",
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="border-t border-[#111827]/8 bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Header Column */}
          <div className="lg:col-span-4">
            <p className="font-mono text-xs text-[#6b7280]">
              FAQ &amp; troubleshooting
            </p>
            <h2 className="mt-2 text-3xl leading-[1.15] font-medium tracking-[-0.02em] text-[#111827]">
              Common questions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4b5563]">
              Need more details or want to check the build pipeline? Browse the{" "}
              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#111827] underline decoration-[#111827]/30 underline-offset-4 transition-colors duration-150 hover:decoration-[#111827]"
              >
                GitHub repository
              </a>
              .
            </p>
          </div>

          {/* Right Accordion Column */}
          <div className="divide-y divide-[#111827]/8 border-y border-[#111827]/8 lg:col-span-8">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-150 hover:text-[#111827] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
                  >
                    <span className="text-base font-medium text-[#111827]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#6b7280] transition-transform duration-150 ${
                        isOpen ? "rotate-180 text-[#111827]" : ""
                      }`}
                      strokeWidth={1.5}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-5 pr-8 text-sm leading-relaxed text-[#4b5563]">
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
