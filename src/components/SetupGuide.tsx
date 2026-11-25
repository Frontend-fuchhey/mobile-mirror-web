import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Install for Windows, macOS, or Linux",
    description:
      "Run MobileMirror-Setup.exe on Windows, drag Mobile Mirror.app into Applications on macOS, or extract MobileMirror-Linux-x86_64.tar.gz and run ./install.sh on Linux.",
    note: "Native Rust binary with SDL3, FFmpeg, and server.jar ready to go.",
  },
  {
    number: "02",
    title: "Connect Android (USB) or iPhone (AirPlay)",
    description:
      "For Android, enable USB Debugging once under Developer Options. For iPhone or iPad, keep both devices on the same Wi-Fi and choose 'Mobile Mirror' in Control Center → Screen Mirroring.",
    pathSteps: [
      "Android: Developer Options → USB Debugging",
      "iOS: Control Center → Screen Mirroring",
    ],
  },
  {
    number: "03",
    title: "Mirror & record in one click",
    description:
      "Your phone screen opens automatically at up to 120 FPS with audio. Press R anytime to save lossless H.264 MP4 recordings directly to your Movies / Videos folder.",
    note: "Reconnects automatically whenever you plug in or start AirPlay.",
  },
];

export function SetupGuide() {
  return (
    <section
      id="how-it-works"
      className="border-t border-[#111827]/8 bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs text-[#6b7280]">
            Setup
          </p>
          <h2 className="mt-2 text-3xl leading-[1.15] font-medium tracking-[-0.02em] text-[#111827] sm:text-4xl">
            From installer to live mirror in under a minute
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#4b5563]">
            Built for everyday use as well as development—no command line or driver hunting.
          </p>
        </div>

        {/* Ruled 3-Column Setup Ledger */}
        <ol className="mt-12 grid grid-cols-1 divide-y divide-[#111827]/8 border-y border-[#111827]/8 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="flex flex-col justify-between py-8 lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              <div>
                <span className="font-mono text-xs tabular-nums text-[#6b7280]">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-medium text-[#111827]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4b5563]">
                  {step.description}
                </p>
              </div>

              {step.pathSteps ? (
                <div className="mt-6 border-t border-[#111827]/8 pt-3">
                  <div className="flex flex-wrap items-center gap-1 font-mono text-[11px] text-[#4b5563]">
                    {step.pathSteps.map((crumb, idx) => (
                      <span key={crumb} className="inline-flex items-center gap-1">
                        <span className="text-[#111827]">{crumb}</span>
                        {idx < step.pathSteps.length - 1 && (
                          <ArrowRight className="h-3 w-3 text-[#6b7280]" strokeWidth={1.5} />
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="mt-6 border-t border-[#111827]/8 pt-3 text-xs text-[#6b7280]">
                  {step.note}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
