/* app.js — renders the Claude Code Field Guide from window.GUIDE (data.js). */
(function () {
  "use strict";
  const { META, THEMES, VIDEOS, PRINCIPLES } = window.GUIDE;
  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, props = {}, kids = []) => {
    const n = document.createElement(tag);
    Object.entries(props).forEach(([k, v]) => {
      if (k === "class") n.className = v;
      else if (k === "html") n.innerHTML = v;
      else if (k === "text") n.textContent = v;
      else if (k.startsWith("on") && typeof v === "function") n.addEventListener(k.slice(2), v);
      else if (v !== null && v !== undefined) n.setAttribute(k, v);
    });
    (Array.isArray(kids) ? kids : [kids]).forEach((c) => {
      if (c == null) return;
      n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return n;
  };

  const themeLabel = (id) => (THEMES.find((t) => t.id === id) || {}).label || id;
  const videoById = (id) => VIDEOS.find((v) => v.id === id);
  const isYouTubeId = (id) => /^[A-Za-z0-9_-]{11}$/.test(id) && !id.includes("-with-");
  const fmtDate = (iso) => {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  /* ---------- State ---------- */
  const state = { theme: "all", q: "" };

  /* ---------- Hero stats ---------- */
  function renderStats() {
    const dates = VIDEOS.map((v) => v.date).sort();
    const stats = [
      { n: VIDEOS.length, l: "official talks" },
      { n: PRINCIPLES.length, l: "synthesized principles" },
      { n: META.channels.length, l: "official channels" },
      { n: "6 wks", l: `${fmtDate(dates[0])} → ${fmtDate(META.windowEnd)}` }
    ];
    const box = $("#stats");
    stats.forEach((s) => box.appendChild(el("div", { class: "stat" }, [
      el("div", { class: "n", text: String(s.n) }),
      el("div", { class: "l", text: s.l })
    ])));

    const ch = $("#channels");
    META.channels.forEach((c) =>
      ch.appendChild(el("a", { href: c.url, target: "_blank", rel: "noopener", text: `${c.name} · ${c.handle}` }))
    );
    META.playlists.forEach((p) =>
      ch.appendChild(el("a", { href: p.url, target: "_blank", rel: "noopener", text: `▶ ${p.name}` }))
    );
  }

  /* ---------- Filter chips ---------- */
  function renderChips() {
    const box = $("#chips");
    const mk = (id, label) => {
      const c = el("span", { class: "chip" + (state.theme === id ? " active" : ""), text: label, "data-theme": id });
      c.addEventListener("click", () => { state.theme = id; refresh(); });
      return c;
    };
    box.appendChild(mk("all", "All themes"));
    THEMES.forEach((t) => box.appendChild(mk(t.id, t.label)));
  }
  function syncChips() {
    document.querySelectorAll("#chips .chip").forEach((c) =>
      c.classList.toggle("active", c.getAttribute("data-theme") === state.theme));
  }

  /* ---------- Matching ---------- */
  function matchText(obj, extra = "") {
    const q = state.q.trim().toLowerCase();
    if (!q) return true;
    const hay = (JSON.stringify(obj) + " " + extra).toLowerCase();
    return hay.includes(q);
  }
  const matchTheme = (themes) => state.theme === "all" || themes.includes(state.theme);

  /* ---------- Principles ---------- */
  function renderPrinciples() {
    const box = $("#principles");
    box.innerHTML = "";
    let shown = 0;
    PRINCIPLES.forEach((p) => {
      const okTheme = matchTheme([p.theme]);
      const okText = matchText(p);
      if (!okText) return;
      shown++;
      const card = el("article", { class: "principle" + (okTheme ? "" : " dim") }, [
        el("span", { class: "tag", text: themeLabel(p.theme) }),
        el("h3", { text: p.title }),
        el("p", { class: "sum", text: p.summary }),
        el("ul", {}, p.points.map((pt) => el("li", { text: pt }))),
        el("div", { class: "refs" }, p.videoIds.map((vid) => {
          const v = videoById(vid);
          if (!v) return null;
          const pill = el("span", { class: "ref-pill", text: shortTitle(v.title) });
          pill.addEventListener("click", () => openVideo(v));
          return pill;
        }))
      ]);
      box.appendChild(card);
    });
    $("#principles-empty").classList.toggle("hidden", shown > 0);
  }

  function shortTitle(t) {
    return t
      .replace("Code with Claude 2026: ", "")
      .replace("Code with Claude London 2026: ", "London: ")
      .replace(" — long-horizon, multi-repo, parallel agents (track)", "")
      .slice(0, 42);
  }

  /* ---------- Videos ---------- */
  function thumbUrl(v) {
    return isYouTubeId(v.id) ? `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg` : null;
  }

  function renderVideos() {
    const box = $("#videos");
    box.innerHTML = "";
    let shown = 0;
    VIDEOS.forEach((v) => {
      if (!matchText(v)) return;
      const okTheme = matchTheme(v.themes);
      shown++;
      const thumb = thumbUrl(v);
      const thumbEl = el("a", {
        class: "thumb",
        href: v.youtube, target: "_blank", rel: "noopener",
        style: thumb ? `background-image:url('${thumb}')` : "background:linear-gradient(135deg,#2d2820,#3a342a)",
        title: "Open on YouTube"
      }, [
        el("span", { class: "badge", text: isYouTubeId(v.id) ? "YouTube" : "Session" }),
        el("span", { class: "play" }, el("span", {}, el("span", {
          html: '<svg width="20" height="20" viewBox="0 0 24 24" fill="#1a1814"><path d="M8 5v14l11-7z"/></svg>'
        })))
      ]);
      // clicking thumbnail opens inline modal when we have an embeddable id
      if (isYouTubeId(v.id)) {
        thumbEl.addEventListener("click", (e) => { e.preventDefault(); openVideo(v); });
      }

      const card = el("article", { class: "video" + (okTheme ? "" : " dim"), "data-id": v.id }, [
        thumbEl,
        el("div", { class: "body" }, [
          el("div", { class: "meta" }, [
            el("span", { text: v.channel }),
            el("span", { class: "dot", text: "•" }),
            el("span", { text: fmtDate(v.date) })
          ]),
          el("h3", { text: v.title }),
          el("p", { class: "speakers", text: v.speakers.join(" · ") }),
          el("p", { class: "vsum", text: v.summary }),
          el("p", { class: "tk-h", text: "Conclusions & advice" }),
          el("ul", { class: "tk" }, v.takeaways.map((t) => el("li", { text: t }))),
          el("div", { class: "themetags" }, v.themes.map((t) => el("span", { class: "tt", text: themeLabel(t) }))),
          buildSources(v),
          el("div", { class: "vfoot" }, [
            el("a", { class: "btn primary", href: v.youtube, target: "_blank", rel: "noopener" }, [
              icon("M8 5v14l11-7z"), "Watch"
            ]),
            v.sessionPage ? el("a", { class: "btn", href: v.sessionPage, target: "_blank", rel: "noopener", text: "Session page" }) : null
          ])
        ])
      ]);
      box.appendChild(card);
    });
    $("#videos-empty").classList.toggle("hidden", shown > 0);
  }

  function buildSources(v) {
    const d = el("details", { class: "src" }, [
      el("summary", { text: `Sources (${v.sources.length})` }),
      el("ul", {}, v.sources.map((s) =>
        el("li", {}, el("a", { href: s.url, target: "_blank", rel: "noopener", text: s.label }))))
    ]);
    return d;
  }

  function icon(path) {
    return el("span", { html: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="${path}"/></svg>` });
  }

  /* ---------- Modal player ---------- */
  function openVideo(v) {
    if (!isYouTubeId(v.id)) { window.open(v.youtube, "_blank", "noopener"); return; }
    const modal = $("#modal");
    $("#modal-frame").src = `https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`;
    $("#modal-title").textContent = v.title;
    $("#modal-link").href = v.youtube;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    $("#modal").classList.remove("open");
    $("#modal-frame").src = "";
    document.body.style.overflow = "";
  }

  /* ---------- Refresh ---------- */
  function refresh() {
    syncChips();
    renderPrinciples();
    renderVideos();
  }

  /* ---------- Init ---------- */
  function init() {
    renderStats();
    renderChips();
    refresh();

    const search = $("#search-input");
    search.addEventListener("input", () => { state.q = search.value; refresh(); });

    $("#modal").addEventListener("click", (e) => { if (e.target.id === "modal") closeModal(); });
    $("#modal-close").addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

    $("#year").textContent = new Date(META.generated).getFullYear();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
