# Service Leverandøren

Offisiell nettside for SERVICELEVERANDØREN AS, bygget med Next.js 16,
React, TypeScript og Tailwind CSS. Publiseres på Vercel.

## Lokal kvalitetssjekk

```bash
npm ci
npm run lint
npm run build
npm run start -- -H 127.0.0.1 -p 3100
npm run site:check
```

`npm run images:optimize` konverterer rasterbildene til riktige formater,
reduserer filstørrelsen og fjerner innebygd metadata.
