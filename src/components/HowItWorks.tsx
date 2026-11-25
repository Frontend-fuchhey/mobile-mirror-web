import { ArrowRight } from "lucide-react";

function ConnectIllustration() {
  return (
    <svg
      viewBox="0 0 110 116"
      fill="none"
      aria-hidden="true"
      className="h-24 w-24 shrink-0 sm:h-26 sm:w-26"
    >
      <defs>
        <linearGradient id="phoneScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="45%" stopColor="#3B82F6" />
          <stop offset="75%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#F472B6" />
        </linearGradient>
        <linearGradient id="phoneGlow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F9A8D4" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#93C5FD" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.9" />
        </linearGradient>
        <filter id="phoneShadow" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#1E3A8A" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* Subtle soft blue backdrop glow */}
      <ellipse cx="56" cy="54" rx="34" ry="38" fill="#EFF6FF" />

      {/* USB Cable & Plug at bottom */}
      <g transform="rotate(7 56 54)">
        {/* Cable cord */}
        <path
          d="M55 96 L55 114"
          stroke="#334155"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Plug housing */}
        <rect
          x="50.5"
          y="85"
          width="9"
          height="12"
          rx="2"
          fill="#1E293B"
        />
        {/* Metallic connector tip */}
        <rect
          x="52.5"
          y="81"
          width="5"
          height="4.5"
          rx="1"
          fill="#94A3B8"
        />

        {/* Phone outer body */}
        <rect
          x="33"
          y="10"
          width="44"
          height="73"
          rx="8.5"
          fill="#0F172A"
          filter="url(#phoneShadow)"
        />
        {/* Metallic side rim highlight */}
        <rect
          x="33.6"
          y="10.6"
          width="42.8"
          height="71.8"
          rx="8"
          stroke="#475569"
          strokeWidth="0.8"
        />

        {/* Phone inner screen */}
        <rect
          x="35.8"
          y="13"
          width="38.4"
          height="67"
          rx="6.2"
          fill="url(#phoneScreenGrad)"
        />

        {/* Soft wallpaper wave inside phone screen */}
        <path
          d="M35.8 54 C46 44, 58 64, 74.2 46 L74.2 80 L35.8 80 Z"
          fill="url(#phoneGlow)"
        />
        <circle cx="48" cy="30" r="10" fill="#DBEAFE" fillOpacity="0.35" />

        {/* Top notch / Dynamic Island */}
        <rect
          x="48"
          y="14.5"
          width="14"
          height="3.2"
          rx="1.6"
          fill="#0F172A"
        />
      </g>

      {/* Blue connection sparkles around the USB plug */}
      <path
        d="M35 83 L31 81 M34 88 L29 89 M37 92 L34 95"
        stroke="#3B82F6"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M72 85 L76 83 M73 90 L78 91 M70 94 L73 97"
        stroke="#3B82F6"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MirrorIllustration() {
  const appColors = [
    "#22C55E", "#3B82F6", "#F97316", "#EF4444",
    "#A855F7", "#06B6D4", "#EAB308", "#EC4899",
    "#10B981", "#6366F1", "#F59E0B", "#14B8A6",
    "#3B82F6", "#EF4444", "#22C55E", "#8B5CF6",
  ];

  return (
    <svg
      viewBox="0 0 144 104"
      fill="none"
      aria-hidden="true"
      className="h-24 w-32 shrink-0 sm:h-26 sm:w-36"
    >
      <defs>
        <linearGradient id="laptopWallpaper" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
        <linearGradient id="laptopWave" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="laptopBase" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="50%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#64748B" />
        </linearGradient>
      </defs>

      {/* Laptop lid / outer bezel */}
      <rect
        x="16"
        y="12"
        width="112"
        height="72"
        rx="5.5"
        fill="#0F172A"
      />
      <rect
        x="16.75"
        y="12.75"
        width="110.5"
        height="70.5"
        rx="4.8"
        stroke="#334155"
        strokeWidth="1"
      />

      {/* Laptop display area */}
      <rect
        x="20"
        y="16"
        width="104"
        height="63"
        rx="2.5"
        fill="url(#laptopWallpaper)"
      />

      {/* Wallpaper wave shapes */}
      <path
        d="M20 56 C46 38, 72 68, 124 40 L124 79 L20 79 Z"
        fill="url(#laptopWave)"
      />
      <path
        d="M20 68 C52 54, 88 76, 124 58 L124 79 L20 79 Z"
        fill="#EFF6FF"
        fillOpacity="0.65"
      />

      {/* Mirrored Phone centered inside the laptop display */}
      <rect
        x="57"
        y="19.5"
        width="30"
        height="56"
        rx="4.5"
        fill="#0F172A"
      />
      <rect
        x="59"
        y="22"
        width="26"
        height="51"
        rx="3.2"
        fill="#1E293B"
      />
      {/* Top phone notch */}
      <rect x="68" y="23" width="8" height="1.8" rx="0.9" fill="#0F172A" />

      {/* App icon grid on mirrored phone */}
      {appColors.map((color, idx) => {
        const col = idx % 4;
        const row = Math.floor(idx / 4);
        const x = 61.5 + col * 5.6;
        const y = 27 + row * 6.5;
        return (
          <rect
            key={idx}
            x={x}
            y={y}
            width="4.2"
            height="4.2"
            rx="1"
            fill={color}
          />
        );
      })}

      {/* Bottom phone dock */}
      <rect
        x="61"
        y="66.5"
        width="22"
        height="4.5"
        rx="2"
        fill="#334155"
      />
      <rect x="63" y="67.5" width="2.6" height="2.6" rx="0.6" fill="#22C55E" />
      <rect x="68" y="67.5" width="2.6" height="2.6" rx="0.6" fill="#3B82F6" />
      <rect x="73" y="67.5" width="2.6" height="2.6" rx="0.6" fill="#F97316" />
      <rect x="78" y="67.5" width="2.6" height="2.6" rx="0.6" fill="#EC4899" />

      {/* Laptop aluminum base */}
      <path
        d="M6 84 L138 84 L133 89.5 C132 90.5, 130 91, 128 91 L16 91 C14 91, 12 90.5, 11 89.5 Z"
        fill="url(#laptopBase)"
      />
      {/* Laptop trackpad lip */}
      <rect x="62" y="84" width="20" height="2.2" rx="1" fill="#64748B" />
    </svg>
  );
}

function RecordIllustration() {
  return (
    <svg
      viewBox="0 0 116 106"
      fill="none"
      aria-hidden="true"
      className="h-24 w-26 shrink-0 sm:h-26 sm:w-28"
    >
      <defs>
        <linearGradient id="slateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <filter id="clapperShadow" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#1E3A8A" floodOpacity="0.16" />
        </filter>
      </defs>

      {/* Soft blue glow backdrop */}
      <ellipse cx="58" cy="58" rx="38" ry="34" fill="#EFF6FF" />

      {/* Main Clapperboard Group */}
      <g transform="rotate(-6 56 62)" filter="url(#clapperShadow)">
        {/* Lower Slate Board */}
        <rect
          x="22"
          y="42"
          width="68"
          height="46"
          rx="6"
          fill="url(#slateGrad)"
        />

        {/* Lower Clapper Bar with diagonal blue/white stripes */}
        <rect x="22" y="34" width="68" height="10" rx="2.5" fill="#1E293B" />
        <path d="M28 44 L34 34 L43 34 L37 44 Z" fill="#60A5FA" />
        <path d="M46 44 L52 34 L61 34 L55 44 Z" fill="#93C5FD" />
        <path d="M64 44 L70 34 L79 34 L73 44 Z" fill="#60A5FA" />
        <path d="M80 44 L86 34 L90 34 L86 44 Z" fill="#DBEAFE" />

        {/* Hinged Top Clapper Stick (tilted open) */}
        <g transform="rotate(-16 24 34)">
          <rect
            x="22"
            y="22"
            width="68"
            height="10"
            rx="2.5"
            fill="#0F172A"
          />
          <path d="M28 22 L34 32 L43 32 L37 22 Z" fill="#3B82F6" />
          <path d="M46 22 L52 32 L61 32 L55 22 Z" fill="#93C5FD" />
          <path d="M64 22 L70 32 L79 32 L73 22 Z" fill="#3B82F6" />
          <path d="M80 22 L86 32 L90 32 L86 22 Z" fill="#DBEAFE" />
        </g>

        {/* Hinge bolts on left */}
        <circle cx="26" cy="36" r="1.8" fill="#94A3B8" />

        {/* Blue circular Play button in center of slate */}
        <circle cx="56" cy="66" r="12" fill="#2563EB" />
        <circle
          cx="56"
          cy="66"
          r="12"
          stroke="#60A5FA"
          strokeWidth="1.2"
          strokeOpacity="0.6"
        />
        <path d="M53.2 60.8 L62.2 66 L53.2 71.2 Z" fill="#FFFFFF" />
      </g>

      {/* Blue action sparkles near top right of clapper */}
      <path
        d="M95 20 L100 17 M97 26 L103 26 M94 31 L99 34"
        stroke="#3B82F6"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const STEPS = [
  {
    number: "1",
    title: "Connect",
    description: "Connect your phone using USB or Wi-Fi.",
    illustration: ConnectIllustration,
  },
  {
    number: "2",
    title: "Mirror",
    description: "View your phone screen on your computer.",
    illustration: MirrorIllustration,
  },
  {
    number: "3",
    title: "Record",
    description: "Capture and save your screen as a video.",
    illustration: RecordIllustration,
  },
] as const;

export function SectionDividerHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center gap-3.5">
      <div className="flex items-center">
        <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#cbd5e1] sm:w-28 md:w-36" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#cbd5e1]" />
      </div>
      <h2 className="text-xl font-bold tracking-[-0.02em] text-[#171717] sm:text-2xl">
        {title}
      </h2>
      <div className="flex items-center">
        <span className="h-1.5 w-1.5 rounded-full bg-[#cbd5e1]" />
        <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#cbd5e1] sm:w-28 md:w-36" />
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="border-t border-[#e5e5e5] bg-[#f8fafc] pt-14 pb-8 sm:pt-16 sm:pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionDividerHeading title="How It Works" />

        <div className="mt-8 grid grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-3">
          {STEPS.map((step, index) => {
            const Illustration = step.illustration;
            return (
              <div key={step.number} className="contents">
                <div className="flex min-h-[132px] items-center justify-between gap-3 rounded-2xl border border-[#e5e7eb] bg-white px-5 py-3.5 shadow-[0_2px_12px_rgba(15,23,42,0.035)]">
                  <div className="min-w-0 py-1">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e0ecff] text-sm font-bold text-[#2563eb]">
                        {step.number}
                      </span>
                      <h3 className="text-lg font-bold tracking-[-0.015em] text-[#171717]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 pl-9.5 text-xs leading-relaxed text-[#64748b] sm:text-[13px]">
                      {step.description}
                    </p>
                  </div>

                  <Illustration />
                </div>

                {index < STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden items-center justify-center px-0.5 text-[#94a3b8] lg:flex"
                  >
                    <ArrowRight className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
