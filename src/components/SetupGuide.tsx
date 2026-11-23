"use client";

import { motion } from "framer-motion";
import { Download, Smartphone, Usb, ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Download & Run Installer",
    icon: Download,
    description:
      "Download MobileMirror-Setup.exe and run the quick Windows installer. Everything — including ADB, SDL3, FFmpeg, and the Android server — is bundled automatically.",
    callout: "Zero terminal commands, zero SDKs, installs in under 10 seconds.",
  },
  {
    number: "02",
    title: "Enable USB Debugging",
    icon: Smartphone,
    description:
      "On your Android phone, unlock Developer Options once so your PC can establish a direct high-speed USB stream.",
    pathSteps: [
      "Settings",
      "About Phone",
      "Tap Build Number 7×",
      "Developer Options",
      "Enable USB Debugging",
    ],
  },
  {
    number: "03",
    title: "Connect USB Cable & Enjoy",
    icon: Usb,
    description:
      "Plug your phone into your PC with a data USB cable, tap 'Allow' on the one-time USB Debugging prompt, and your screen mirrors instantly at 60–120 FPS.",
    callout: "Auto-connects every time you plug in from then on.",
  },
];

export function SetupGuide() {
  return (
    <section
      id="how-it-works"
      className="border-y border-white/[0.06] bg-[#0a0d14]/80 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-medium tracking-wider text-[#5b92ff] uppercase">
            3-Step Setup Guide
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From download to live mirror in under a minute.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-400">
            Designed for everyday users as well as developers — no command line or driver
            hunting required.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bento-card flex flex-col justify-between rounded-2xl p-6"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#246bfd]/30 bg-[#246bfd]/15 text-[#7aa8ff]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-sm font-semibold text-slate-500">
                      STEP {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                </div>

                {step.pathSteps ? (
                  <div className="mt-6 rounded-xl border border-white/[0.08] bg-[#080b11] p-3.5">
                    <div className="flex flex-wrap items-center gap-1.5 text-xs">
                      {step.pathSteps.map((crumb, idx) => (
                        <span key={crumb} className="inline-flex items-center gap-1.5">
                          <span className="rounded-md border border-white/10 bg-white/[0.05] px-2 py-1 font-medium text-slate-200">
                            {crumb}
                          </span>
                          {idx < step.pathSteps.length - 1 && (
                            <ArrowRight className="h-3 w-3 text-slate-500" />
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 rounded-xl border border-white/[0.08] bg-[#080b11] px-3.5 py-3 text-xs text-slate-300">
                    {step.callout}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
