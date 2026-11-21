// ---- Edit these three values, then everything on the page updates ----
const CONFIG = {
  github: "https://github.com/Aswinpratap",
  linkedin: "https://www.linkedin.com/in/ashwinpratap",
  repos: {
    "health-ai": "https://github.com/Aswinpratap/health-ai-triage",
    "predictive-maintenance": "https://github.com/Aswinpratap/predictive-maintenance-mlops"
  }
};

document.querySelectorAll("[data-profile]").forEach(a => {
  const url = CONFIG[a.dataset.profile];
  if (url && !url.includes("YOUR-")) { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
  else a.removeAttribute("href"), a.style.opacity = ".5";
});
document.querySelectorAll("[data-repo]").forEach(a => {
  const url = CONFIG.repos[a.dataset.repo];
  if (url && !url.includes("YOUR-")) { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
  else a.remove();
});

document.getElementById("year").textContent = new Date().getFullYear();

// theme toggle, remembers choice, defaults to system setting
const root = document.documentElement;
const saved = (() => { try { return localStorage.getItem("theme"); } catch { return null; } })();
const initial = saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
root.dataset.theme = initial;
document.getElementById("theme").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch {}
});
