import { AppleIcon } from "@/components/Icons";
import { SectionDividerHeading } from "@/components/HowItWorks";

function FullAndroidRobotIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      {/* Antennae & dome head */}
      <path d="M15.6 5.28 16.9 3a.45.45 0 0 0-.78-.45l-1.33 2.31A6.3 6.3 0 0 0 12 4.2c-1 0-1.95.24-2.79.66L7.88 2.55a.45.45 0 0 0-.78.45l1.3 2.28A5.75 5.75 0 0 0 6 9.75h12a5.75 5.75 0 0 0-2.4-4.47ZM9.75 7.75a.65.65 0 1 1 0-1.3.65.65 0 0 1 0 1.3Zm4.5 0a.65.65 0 1 1 0-1.3.65.65 0 0 1 0 1.3Z" />
      {/* Left arm */}
      <rect x="3.2" y="10.5" width="2" height="6.2" rx="1" />
      {/* Right arm */}
      <rect x="18.8" y="10.5" width="2" height="6.2" rx="1" />
      {/* Torso + legs */}
      <path d="M6 10.5v6.8c0 .83.67 1.5 1.5 1.5h1v2.95a1.1 1.1 0 1 0 2.2 0V18.8h2.6v2.95a1.1 1.1 0 1 0 2.2 0V18.8h1c.83 0 1.5-.67 1.5-1.5v-6.8H6Z" />
    </svg>
  );
}

function SolidCameraIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M4.5 6.5A2.5 2.5 0 0 0 2 9v6a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 16 15V9a2.5 2.5 0 0 0-2.5-2.5h-9Zm13 3.3 3.4-2.15A.75.75 0 0 1 22 8.28v7.44a.75.75 0 0 1-1.1.63L17.5 14.2V9.8Z" />
    </svg>
  );
}

function HdBadgeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 22"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="1" y="2" width="26" height="18" rx="4" fill="#2563EB" />
      <path
        d="M6.4 15V7h1.9v3.1h2.8V7H13v8h-1.9v-3.3H8.3V15H6.4Zm8.6 0V7h3.1c2.4 0 3.9 1.5 3.9 4s-1.5 4-3.9 4H15Zm1.9-1.6h1.1c1.4 0 2.1-.9 2.1-2.4s-.7-2.4-2.1-2.4h-1.1v4.8Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function LaptopOutlineIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 26 22"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="3.5"
        y="3"
        width="19"
        height="12.5"
        rx="2"
        stroke="#2563EB"
        strokeWidth="2.1"
      />
      <path
        d="M1.5 17.5h23a1 1 0 0 1 0 2h-23a1 1 0 0 1 0-2Z"
        fill="#2563EB"
      />
    </svg>
  );
}

const FEATURES = [
  {
    line1: "Android",
    line2: "USB Mirroring",
    icon: "android" as const,
  },
  {
    line1: "iPhone AirPlay",
    line2: "& USB Support",
    icon: "apple" as const,
  },
  {
    line1: "Screen",
    line2: "Recording",
    icon: "camera" as const,
  },
  {
    line1: "High-Quality",
    line2: "Video",
    icon: "hd" as const,
  },
  {
    line1: "Cross-Platform",
    line2: "Support",
    icon: "laptop" as const,
  },
];

function FeatureBadgeIcon({
  kind,
}: {
  kind: (typeof FEATURES)[number]["icon"];
}) {
  switch (kind) {
    case "android":
      return <FullAndroidRobotIcon className="h-7 w-7 shrink-0 text-[#2563eb]" />;
    case "apple":
      return <AppleIcon className="h-7 w-7 shrink-0 text-[#2563eb]" />;
    case "camera":
      return <SolidCameraIcon className="h-7 w-7 shrink-0 text-[#2563eb]" />;
    case "hd":
      return <HdBadgeIcon className="h-6 w-8 shrink-0" />;
    case "laptop":
      return <LaptopOutlineIcon className="h-6 w-7 shrink-0" />;
  }
}

export function BentoFeatures() {
  return (
    <section
      id="features"
      className="bg-[#f8fafc] pt-6 pb-16 sm:pt-8 sm:pb-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionDividerHeading title="Features" />

        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {FEATURES.map((feature) => (
            <div
              key={`${feature.line1}-${feature.line2}`}
              className="flex items-center gap-3.5 rounded-2xl border border-[#e5e7eb] bg-white px-5 py-4 shadow-[0_2px_10px_rgba(15,23,42,0.03)]"
            >
              <FeatureBadgeIcon kind={feature.icon} />
              <div className="min-w-0">
                <p className="text-sm leading-snug font-semibold text-[#1e293b]">
                  {feature.line1}
                  <br />
                  {feature.line2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
