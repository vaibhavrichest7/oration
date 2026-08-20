# MANCH — Mascot Component

Your slice of the shared gamified UI library (per `Rudra-GamifiedUI_1.md`).
Sanskar owns streak/XP/session-complete/leaderboard — this is mascot only.

## Files

- `Mascot.jsx` — the component, self-contained (art embedded as WebP data
  URIs so it previews standalone with zero setup), plus a `MascotDemo`
  default export used only for preview.
- `assets/*.webp` — the same 6 images as separate files (idle, encouraging,
  celebrating, onboarding, empty, logo), compressed to ~5–8KB each, for
  anyone who'd rather `import` them the normal Vite way instead of using
  the embedded data URIs.

## Usage

```jsx
import { Mascot, mascotTokens } from "./Mascot";

<Mascot
  name="Sparky"              // swap in the real name once decided
  state="celebrating"        // "idle" | "encouraging" | "celebrating" | "onboarding" | "empty"
  message="5-day streak!"    // optional speech-bubble text
  size={220}                 // px, square
/>
```

## Props

| Prop      | Type   | Default            | Notes                                          |
|-----------|--------|--------------------|--------------------------------------------------|
| `name`    | string | `"[MASCOT NAME]"`  | Used for image alt text until it's named        |
| `state`   | string | `"idle"`           | Picks the image + animation                      |
| `message` | string | —                  | Renders a speech bubble if provided              |
| `size`    | number | `220`              | Canvas size in px                                |

## States → art

| State         | Pose                                  |
|---------------|----------------------------------------|
| `idle`        | Sitting, relaxed, hands down            |
| `encouraging` | Holding a mic, mid-cheer                |
| `celebrating` | Jumping, confetti                       |
| `onboarding`  | Arms wide open, welcoming               |
| `empty`       | Sitting cross-legged, low-key           |

`logo.webp` is separate — the standing/waving pose you picked for the app
logo, not a component state.

## Design tokens

`mascotTokens` (exported from `Mascot.jsx`) holds the color palette
(pulled from the actual art — teal glasses, cream body, ink outlines),
fonts, radius, and spacing scale. Share this with Sanskar so streak/XP/
leaderboard visuals match.

## Before merging into the real repo

1. If you'd rather not ship embedded base64 art, swap the `mascotAssets`
   object in `Mascot.jsx` for `import` statements pointing at
   `assets/*.webp` instead — cleaner for a production bundle.
2. Confirm the mascot name with the team and replace the placeholder.
3. Compare palette/fonts with Sanskar's components for consistency.
4. Wire real trigger points (onboarding, streak milestones,
   session-complete, empty states) — the demo just has buttons for preview.

## Uploading (no terminal needed)

GitHub web UI → your repo → **Add file → Upload files** → drag in
`Mascot.jsx`, the `assets` folder, and this README → commit.
