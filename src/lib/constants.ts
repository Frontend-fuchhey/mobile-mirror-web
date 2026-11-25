export type PlatformId = "windows" | "macos" | "linux";

export interface PlatformDownloadInfo {
  id: PlatformId;
  label: string;
  shortLabel: string;
  osDetail: string;
  filename: string;
  packageType: string;
  downloadUrl: string;
  localUrl?: string;
}

const GITHUB_USERNAME = "Frontend-fuchhey";
const REPO_NAME = "mobile-mirror";
const RELEASES_LATEST = `https://github.com/${GITHUB_USERNAME}/${REPO_NAME}/releases/latest/download`;

export const PLATFORM_DOWNLOADS: Record<PlatformId, PlatformDownloadInfo> = {
  windows: {
    id: "windows",
    label: "Download for Windows",
    shortLabel: "Windows",
    osDetail: "Windows 10 / 11 (64-bit)",
    filename: "MobileMirror-Setup.exe",
    packageType: ".exe installer",
    downloadUrl: `${RELEASES_LATEST}/MobileMirror-Setup.exe`,
    localUrl: "/downloads/MobileMirror-Setup.exe",
  },
  macos: {
    id: "macos",
    label: "Download for macOS",
    shortLabel: "macOS",
    osDetail: "macOS 13+ (Apple Silicon)",
    filename: "MobileMirror-macOS.dmg",
    packageType: ".dmg disk image",
    downloadUrl: `${RELEASES_LATEST}/MobileMirror-macOS.dmg`,
  },
  linux: {
    id: "linux",
    label: "Download for Linux",
    shortLabel: "Linux",
    osDetail: "Linux x86_64 (Ubuntu / Fedora / Arch)",
    filename: "MobileMirror-Linux-x86_64.tar.gz",
    packageType: ".tar.gz bundle",
    downloadUrl: `${RELEASES_LATEST}/MobileMirror-Linux-x86_64.tar.gz`,
  },
};

export const SITE_CONFIG = {
  name: "Mobile Mirror",
  version: "v1.1.0",
  githubUsername: GITHUB_USERNAME,
  repoName: REPO_NAME,
  get githubUrl() {
    return `https://github.com/${this.githubUsername}/${this.repoName}`;
  },
  get releasesUrl() {
    return `https://github.com/${this.githubUsername}/${this.repoName}/releases`;
  },
  get githubDownloadUrl() {
    return PLATFORM_DOWNLOADS.windows.downloadUrl;
  },
  localDownloadUrl: "/downloads/MobileMirror-Setup.exe",
  installerFilename: "MobileMirror-Setup.exe",
  installerSize: "~10.1 MB",
  platform: "Windows · macOS · Linux",
} as const;

export function getDownloadUrl(platform: PlatformId = "windows"): string {
  const info = PLATFORM_DOWNLOADS[platform];
  if (platform === "windows") {
    if (process.env.NEXT_PUBLIC_DOWNLOAD_URL) {
      return process.env.NEXT_PUBLIC_DOWNLOAD_URL;
    }
    if (process.env.NODE_ENV === "development" && info.localUrl) {
      return info.localUrl;
    }
  }
  return info.downloadUrl;
}
