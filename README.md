# Om Jain - AI Engineer Portfolio

Production-ready portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## 1) Install dependencies

Use npm:

```bash
npm install
```

## 2) Run locally

```bash
npm run dev
```

Open http://localhost:3000.

## 3) Build for production

```bash
npm run build
npm run start
```

## 4) Deploy on Vercel

1. Push this repository to GitHub.
2. Go to Vercel and click **Add New Project**.
3. Import the GitHub repository.
4. Vercel auto-detects Next.js settings. Keep defaults:
   - Build Command: `next build`
   - Output Directory: `.next`
5. Click **Deploy**.

For custom domain:
1. Open the deployed project in Vercel.
2. Go to **Settings → Domains**.
3. Add domain and update DNS records.

## Notes

- Update links in [data/portfolio.ts](data/portfolio.ts) for real GitHub, LinkedIn, email, and resume URL.
- Keep project cards updated with actual repository URLs and measurable metrics.