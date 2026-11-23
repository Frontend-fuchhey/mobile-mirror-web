export const SITE_CONFIG = {
  name: "Mobile Mirror",
  version: "v1.0.0",
  githubUsername: "Frontend-fuchhey",
  repoName: "mobile-mirror",
  get githubUrl() {
    return `https://github.com/${this.githubUsername}/${this.repoName}`;
  },
  get releasesUrl() {
    return `https://github.com/${this.githubUsername}/${this.repoName}/releases`;
  },
  get githubDownloadUrl() {
    return `https://github.com/${this.githubUsername}/${this.repoName}/releases/latest/download/MobileMirror-Setup.exe`;
  },
  localDownloadUrl: "/downloads/MobileMirror-Setup.exe",
  installerFilename: "MobileMirror-Setup.exe",
  installerSize: "~10.1 MB",
  platform: "Windows 10 / 11 (64-bit)",
} as const;

/**
 * Returns the permanent GitHub Releases latest download URL in production,
 * or the local `/downloads/MobileMirror-Setup.exe` fallback during local dev
 * (unless overridden via NEXT_PUBLIC_DOWNLOAD_URL).
 */
export function getDownloadUrl(): string {
  if (process.env.NEXT_PUBLIC_DOWNLOAD_URL) {
    return process.env.NEXT_PUBLIC_DOWNLOAD_URL;
  }
  if (process.env.NODE_ENV === "development") {
    return SITE_CONFIG.localDownloadUrl;
  }
  return SITE_CONFIG.githubDownloadUrl;
}
