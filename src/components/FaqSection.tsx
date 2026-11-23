"use client";

import { useState } from "react";
import { ChevronDown, ShieldAlert, Usb, HeartHandshake, PackageCheck } from "lucide-react";

const FAQ_ITEMS = [
  {
    icon: ShieldAlert,
    question: "Why do I see a Windows SmartScreen warning?",
    answer:
      "Mobile Mirror is a free, open-source project and its Windows installer is not signed with a paid EV code-signing certificate yet. When Windows Defender SmartScreen shows 'Windows protected your PC', click 'More info' and then 'Run anyway'. You can also inspect the full source code and automated GitHub Actions build workflow on GitHub.",
  },
  {
    icon: Usb,
    question: "Device not detected?",
    answer:
      "First, make sure you are using a data-capable USB cable (some charging cables do not carry data lines). Second, confirm USB Debugging is enabled under Developer Options, unlock your phone screen, and accept the 'Allow USB debugging?' dialog. If your phone defaults to 'No data transfer', switch the USB notification to 'File Transfer / Android Auto'.",
  },
  {
    icon: HeartHandshake,
    question: "Is it free?",
    answer:
      "Yes — Mobile Mirror is 100% free and open-source with no watermarks, no time limits, no accounts, and no subscriptions.",
  },
  {
    icon: PackageCheck,
    question: "Do I need to install Android SDK, Java, or Rust?",
    answer:
      "No. MobileMirror-Setup.exe bundles the compiled native Windows client, SDL3, FFmpeg hardware decoding libraries, ADB (with WinUSB DLLs), and the pre-compiled Android server.jar so it works immediately after installation.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="font-mono text-xs font-medium tracking-wider text-[#5b92ff] uppercase">
          FAQ &amp; Troubleshooting
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Common questions, clear answers.
        </h2>
      </div>

      <div className="mt-12 space-y-3">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          const Icon = item.icon;
          return (
            <div
              key={item.question}
              className="bento-card overflow-hidden rounded-2xl transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              >
                <div className="flex items-center gap-3.5">
                  <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#7aa8ff]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold text-white sm:text-base">
                    {item.question}
                  </span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-white" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="border-t border-white/[0.06] px-5 pb-5 pt-4 text-sm leading-relaxed text-slate-400 sm:px-6 sm:pl-[74px]">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
