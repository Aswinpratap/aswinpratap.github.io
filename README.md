# Aswin Pratap Nadar: Portfolio

Static portfolio site (plain HTML, CSS, JS). No build step.

## Deploy to GitHub Pages

1. Create a **public** repo named exactly `<your-github-username>.github.io`.
2. Upload everything in this folder to the repo root (keep `index.html` at the top level).
3. In the repo: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`**.
4. Your site goes live at `https://<your-github-username>.github.io` within a minute or two.

```bash
git init
git add .
git commit -m "Add portfolio"
git branch -M main
git remote add origin https://github.com/<your-github-username>/<your-github-username>.github.io.git
git push -u origin main
```

## Before you publish

- Add your photo as `assets/profile.jpg` (portrait, ~800px tall is plenty). Until then, initials are shown.
- Edit the `CONFIG` block at the top of `script.js` with your real GitHub, LinkedIn and project repo URLs.
- Phone number is intentionally left off the public page. Add it only if you want it public.
