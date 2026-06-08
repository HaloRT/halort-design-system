# Developer Guidelines

## Principles

1. **Single source of truth** — tokens in `@halort/tokens`, themes in `@halort/themes`
2. **Platform product** — not just components; include patterns, emails, mobile, domain cards
3. **API parity** — mobile components mirror web APIs where possible
4. **Accessibility** — WCAG 2.1 AA target; use semantic HTML and ARIA labels
5. **Multi-tenant** — all components must work with tenant theme overrides

## Adding a Component

1. Add to `packages/web/src/components/`
2. Export from `packages/web/src/index.ts`
3. Create Storybook story in `apps/storybook/stories/`
4. Add Vitest test if behavior is non-trivial

## Theming

- Dark/light: `data-theme` attribute + `ThemeProvider`
- Tenant: `data-tenant` + CSS class `theme-{id}`
- Never hardcode colors in components — use CSS variables or Tailwind tokens

## Publishing

Packages are published to NPM as `@halort/*`:

```bash
npm run build
npm publish -w @halort/web
```

## Testing

- **Vitest** — unit tests
- **Storybook** — visual documentation
- **Axe** — accessibility addon in Storybook
- **Playwright** — visual regression (CI roadmap)
