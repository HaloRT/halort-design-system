# HaloRT Design System

Centralized design system for the HaloRT platform — reusable UI components, design tokens, Storybook documentation, mobile patterns, email templates, accessibility standards, and multi-tenant theming.

## Architecture

```
halort-design-system/
├── apps/storybook/          # Storybook 9 documentation
├── packages/
│   ├── tokens/              # Style Dictionary design tokens
│   ├── themes/              # Dark/light + multi-tenant theming
│   ├── web/                 # React web components
│   ├── mobile/              # React Native components
│   ├── email/               # React Email templates
│   ├── icons/               # Curated icon exports
│   ├── illustrations/       # SVG illustrations
│   └── utils/               # Shared utilities
├── docs/                    # Developer guidelines
├── examples/                # Usage examples
└── scripts/                 # Build scripts
```

## Quick Start

```bash
npm install
npm run build
npm run storybook
```

Storybook runs at [http://localhost:6006](http://localhost:6006).

Production docs: [https://design.halort.com](https://design.halort.com)

Use the toolbar to switch **Dark/Light** modes and **Tenant** themes.

## Deploy to Vercel (GitHub Actions)

Deployments are handled by GitHub Actions — not Vercel's built-in Git integration.

### One-time setup

1. **Link the Vercel project** (already in `.vercel/project.json`):
   ```bash
   npx vercel link --scope halo-rt-s-projects --project halort-design-system
   ```

2. **GitHub repository secrets** (`Settings → Secrets and variables → Actions`):

   | Secret | Value |
   |---|---|
   | `VERCEL_TOKEN` | Same Vercel token as `halort-web` |
   | `VERCEL_ORG_ID` | From `.vercel/project.json` → `orgId` |
   | `VERCEL_PROJECT_ID` | From `.vercel/project.json` → `projectId` |

   ```bash
   gh secret set VERCEL_TOKEN --body "YOUR_TOKEN" --repo HaloRT/halort-design-system
   gh secret set VERCEL_ORG_ID --body "team_..." --repo HaloRT/halort-design-system
   gh secret set VERCEL_PROJECT_ID --body "prj_..." --repo HaloRT/halort-design-system
   ```

3. **DNS** — from `halort-infra`:
   ```bash
   npm run dns:design-vercel
   ```

4. **Disable Vercel auto-deploy** in the Vercel dashboard for this project.

### Pipeline behavior

| Trigger | Jobs |
|---|---|
| Pull request → `main` | Build, test, Storybook build, deploy **preview** |
| Push → `main` | Build, test, Storybook build, deploy **production** → `design.halort.com` |

Workflow file: `.github/workflows/deploy.yml`

## Packages

| Package | Description |
|---------|-------------|
| `@halort/tokens` | Colors, spacing, typography, shadows, breakpoints |
| `@halort/themes` | ThemeProvider, dark/light, multi-tenant white-label |
| `@halort/web` | Button, Input, Modal, domain cards, marketing site |
| `@halort/mobile` | React Native Button, Card, BottomSheet, etc. |
| `@halort/email` | Welcome, Payment Reminder, Announcement, etc. |
| `@halort/icons` | Lucide icon re-exports |
| `@halort/utils` | `cn()`, formatters |

## Dark & Light Themes

Themes use `data-theme="dark"` / `data-theme="light"` on the document root, matching the existing [halort-web](https://github.com/halort/halort-web) implementation.

```tsx
import { ThemeProvider, ThemeToggle } from "@halort/themes";
import "@halort/web/styles.css";

export function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      {/* your app */}
    </ThemeProvider>
  );
}
```

## Consumed By

- `halort-web` — public website
- `halort-admin` — admin dashboards
- `halort-mobile` — iOS/Android apps
- `halort-notification-service` — email & WhatsApp templates

## Deployment

Recommended Storybook URL: **https://storybook.halort.com**

```bash
npm run build-storybook
# Deploy apps/storybook/storybook-static
```

## License

Proprietary — HaloRT Platform
