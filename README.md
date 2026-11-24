# Mobile Mirror — Web Showcase

Official Next.js (App Router) + TypeScript + Tailwind CSS landing page for **Mobile Mirror** — an ultra-low latency Android USB screen mirroring, voice-isolated audio capture, and zero-CPU MP4 recording desktop application for Windows.

## Features
- Dark Bento-grid UI matching the native SDL3 Mobile Mirror desktop dashboard
- Interactive Hero Showcase with live quality switcher (`Auto / HD / FHD`), mic toggle, and recording timer
- Automatic Windows installer download pointing permanently to the latest GitHub Release (`MobileMirror-Setup.exe`)
- Local development fallback serving `/downloads/MobileMirror-Setup.exe`
- Visual 3-step USB Debugging setup guide and FAQ accordion

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build & Vercel Deployment

```bash
npm run lint
npm run build
```

Deploy directly on [Vercel](https://vercel.com/new) by importing this repository.
