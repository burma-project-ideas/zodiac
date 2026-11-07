# Zodiac brand assets

The master is [`logo.svg`](../../BlazorWasm.Zodiac/wwwroot/brand/logo.svg): an original geometric Z constellation inside an orbit, with one four-point star. It uses the app's Untitled UI inspired purple `#7f56d9` and has a transparent background. It is a native vector design, not an AI-generated bitmap or an Untitled UI logo.

- Standard master: `brand/logo.svg`.
- Dark-surface variant: `brand/logo-dark.svg` (`#b692f6`).
- White variant: `brand/logo-white.svg`.
- Transparent PNG marks: 16, 32, 48, 64, 128, 256, 512, and 1024 pixels.
- Browser favicon: SVG plus ICO with 16, 32, and 48 pixel entries.
- App icons: 192 and 512 pixels, plus a 512 pixel maskable icon. Marks fit within the maskable safe area.
- Apple touch icon: 180 pixels.
- Social card: 1200 × 630 pixels.
- `brand/brand-preview.png`: light/dark backgrounds and small-size comparison.

Regenerate from the repository root using Python 3 and Pillow:

```sh
python scripts/generate-brand.py
```

The script reads all mark geometry and the purple color from the SVG master. Its assertions check transparency and dimensions. Social-card text uses Segoe UI when available, DejaVu Sans on Linux, or Pillow's fallback font. Typography may therefore differ between operating systems; mark geometry does not.

The app remains a light-theme interface. The logo has separate dark-surface and white variants for reuse, and its purple standard variant works on both light and charcoal backgrounds. This change does not introduce a dark-mode setting.

The original application, dataset, UI-reference, artwork, Inter font, and ApexCharts credits remain in the main README and their bundled licenses. The logo does not reuse third-party artwork.
