# HARD CORE — UI prototypes

Three independent Next.js (TypeScript + Tailwind v4) front-end prototypes plus a lightweight selector for the client presentation. UI only: no backend, API, database, auth, notifications or payments.

| Folder | Direction | Port |
|---|---|---|
| `selector/` | Client presentation page (preview cards, button/state based) | 3000 |
| `ui1/` | Clean, friendly, light | 3001 |
| `ui2/` | Bold, dark, industrial | 3002 |
| `ui3/` | Premium, minimal, sophisticated | 3003 |

## Run

Requires Node 20+.

```bash
npm run install:all   # installs dependencies in all four apps
npm run dev           # starts all four; open http://localhost:3000
```

Or run one app on its own: `cd ui2 && npm install && npm run dev` (http://localhost:3002).

## Notes
- Company data lives in `uiX/lib/business.ts` (name, tagline, phones, hours, theme color). Only the confirmed phone numbers and hours are used. Email, address, WhatsApp number and social accounts are intentionally absent.
- Reviews and service areas are **demo placeholders**, labelled as such, and live in the same file.
- Images in `uiX/public/images/*.svg` are generated placeholders; swap in real photos with the same filenames (or update the paths in `business.ts`).
- The booking form (`components/BookingModal.tsx`) is a demo: submitting only shows a success message and sends nothing.
- No WhatsApp button is included because the WhatsApp number isn't confirmed.
- If the apps are deployed, set `NEXT_PUBLIC_UI1_URL`, `NEXT_PUBLIC_UI2_URL`, `NEXT_PUBLIC_UI3_URL` for the selector.
- Fonts load through `next/font/google` (needs internet on first build).
- Not yet compiled in my environment (no network for npm install), so run `npm run build` in each app once as a sanity check.
