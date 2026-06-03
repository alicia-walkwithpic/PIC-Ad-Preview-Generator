# PIC Ad Preview Generator

An internal agency tool for PIC account managers to input ad copy and see live, pixel-accurate previews of how ads will appear on each platform — then export to PDF or PNG for client approval.

## Supported Platforms & Formats

| Platform | Formats |
|---|---|
| Google Ads | Search (RSA), Display (RDA), Performance Max |
| Microsoft / Bing | Search (RSA), Display, Shopping |
| Meta Ads | Feed (Single Image), Story, Carousel |
| LinkedIn Ads | Single Image Ad, Text Ad, Message Ad (InMail) |

## Local Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build & Deploy

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## GitHub Pages URL

[https://pic-agency.github.io/PIC-Ad-Preview-Generator](https://pic-agency.github.io/PIC-Ad-Preview-Generator)

## Features

- Live preview updates as you type
- Character counters on all text fields with color-coded warnings
- Image upload with drag-and-drop style interface
- Desktop/mobile toggle for device preview context
- Dark mode toggle for Meta previews
- Export to PNG or PDF with client name, campaign, and milestone code metadata
- localStorage session persistence — your work is saved between browser refreshes

## Export Naming Convention

Exports follow the PIC naming convention:

```
YYYY-MM-DD-CLIENTCODE-Platform-Format.png
YYYY-MM-DD-CLIENTCODE-Platform-AdPreview.pdf
```

Example: `2026-06-03-COL-GoogleAds-SearchAdRSA.png`

## V2 Backlog

- Multi-ad PDF export (all formats in one document)
- TikTok Ads preview support
- YouTube Ads preview (bumper, skippable)
- Brand color theming per client
- Shareable preview links (read-only URL)
- Ad copy AI suggestions via Claude API
- Version history / undo
- Bulk import from Google Ads Editor CSV
