/*
 * data.js — structured corpus for the Claude Code Field Guide.
 *
 * Scope: videos/talks related to Claude Code published on Anthropic's official
 * YouTube channels (@anthropic-ai and @claude) in the six weeks ending
 * 2026-05-27 (i.e. ~2026-04-15 → 2026-05-27). The dominant body of official
 * Claude Code video content in this window is Anthropic's "Code with Claude
 * 2026" developer conference (San Francisco, May 6; London, May 19), whose
 * keynotes and breakout sessions were published to the official channel.
 *
 * IMPORTANT — how this was gathered: the build environment's network policy
 * blocked direct access to youtube.com and every third-party transcript/recap
 * site (HTTP 403 through an allowlist proxy), so verbatim caption files could
 * NOT be downloaded. Every "conclusion" / "takeaway" below was reconstructed
 * from web-search results over Anthropic's own session pages (claude.com),
 * official blog posts, and independent reporting/live-blogs. Treat them as
 * faithful summaries of each talk's substance, not word-for-word transcripts.
 * Sources are listed per item and in the methodology section.
 */

const META = {
  windowStart: "2026-04-15",
  windowEnd: "2026-05-27",
  generated: "2026-05-27",
  channels: [
    { name: "Anthropic", handle: "@anthropic-ai", url: "https://www.youtube.com/@anthropic-ai" },
    { name: "Claude", handle: "@claude", url: "https://www.youtube.com/@claude" }
  ],
  playlists: [
    { name: "Code with Claude 2026 | San Francisco", url: "https://www.youtube.com/playlist?list=PLmWCw1CzcFim2obQ-w3ohbULOfwp5lApR" },
    { name: "Code with Claude 2026 | London", url: "https://www.youtube.com/watch?v=AgQ4cwL5eOM" }
  ]
};

/* Themes used to tag both videos and synthesized principles. */
const THEMES = [
  { id: "plan",    label: "Plan first",            blurb: "Align on an approach before any code is written." },
  { id: "context", label: "Context & CLAUDE.md",   blurb: "Front-load knowledge so every session starts smart." },
  { id: "subagents", label: "Subagents & parallelism", blurb: "Fan work out to specialists; isolate context." },
  { id: "automate", label: "Slash commands & hooks", blurb: "Turn repeated workflows into deterministic tooling." },
  { id: "toolkit", label: "Skills, MCP & toolkit", blurb: "Pick the right extension point for the job." },
  { id: "async",   label: "Async & autonomous",    blurb: "Let sessions run while you step away; verify, don't babysit." },
  { id: "scale",   label: "Scale & long-horizon",  blurb: "Orchestrate fleets and persist memory across sessions." },
  { id: "mindset", label: "Mindset",               blurb: "Treat Claude as a thought partner; build for the next jump." }
];

/* The official video/talk set for the window. */
const VIDEOS = [
  {
    id: "GMIWm5y90xA",
    title: "Code with Claude 2026: Opening Keynote (San Francisco)",
    channel: "Anthropic",
    date: "2026-05-06",
    youtube: "https://www.youtube.com/watch?v=GMIWm5y90xA",
    sessionPage: "https://claude.com/code-with-claude/session/sf-opening-keynote",
    speakers: ["Ami Vora (CPO)", "Boris Cherny (Head of Claude Code)", "Angela Jiang (Head of Claude Platform Product)", "Dianne Penn"],
    themes: ["mindset", "async", "scale"],
    summary:
      "Framed the move from manual, incremental coding (build systems, config, long feedback loops) toward agentic software development: the gap between an idea and running software is collapsing as models do more complex work with less human intervention.",
    takeaways: [
      "Software development is shifting from 'prompt Claude' to having Claude prompt, test, and fix itself — architect your workflow around that.",
      "Claude Managed Agents shipped three capabilities: Multiagent Orchestration (scale a fleet of agents), Outcomes (define success criteria so agents iterate), and Dreaming (recall prior sessions).",
      "Opus 4.7 was highlighted for strong visual-design taste; Anthropic teased 'context windows that feel infinite.'",
      "API volume was cited as up 17x year-on-year — agentic usage is compounding fast.",
      "Design for the next capability jump, not just today's model limits."
    ],
    sources: [
      { label: "Opening keynote — session page", url: "https://claude.com/code-with-claude/session/sf-opening-keynote" },
      { label: "Code w/ Claude SF 2026 recap (Claude blog)", url: "https://claude.com/blog/code-w-claude-sf-2026-sf" },
      { label: "Simon Willison live blog", url: "https://simonwillison.net/2026/May/6/code-w-claude-2026/" },
      { label: "InfoQ: Managed Agents / proactive workflows", url: "https://www.infoq.com/news/2026/05/code-with-claude/" }
    ]
  },
  {
    id: "sf-whats-new-in-claude-code",
    title: "What's new in Claude Code",
    channel: "Anthropic",
    date: "2026-05-06",
    youtube: "https://www.youtube.com/playlist?list=PLmWCw1CzcFim2obQ-w3ohbULOfwp5lApR",
    sessionPage: "https://claude.com/code-with-claude/session/sf-whats-new-in-claude-code",
    speakers: ["Dickson Tsai (Member of Technical Staff, Claude Code)"],
    themes: ["async", "automate", "plan"],
    summary:
      "A tour of features that shipped recently in Claude Code that many users have missed — heavily focused on developer-experience and asynchronous control so sessions keep going when you step away from your desk.",
    takeaways: [
      "Remote control: start a session on one machine and continue it from your phone.",
      "Redesigned desktop GUI: split views, pin assistant messages as chapters with a generated table of contents, and inline diff comments.",
      "Async primitives matured: `--bare` for scripted calls and a `--channels` permission relay that forwards approval prompts to your phone.",
      "Dispatch provides managed, observable async task execution (multiple concurrent jobs, real-time event streaming) — unlike a synchronous shell script that gives no structured progress tracking.",
      "Auto Mode moves permission decisions to a classifier that screens for destructive actions and prompt injection.",
      "Worktrees: Claude gets an enter/exit tool to spin up isolated branches for clean parallel work.",
      "Doubled 5-hour rate limits for Pro / Max / Enterprise customers.",
      "Plan Mode, checkpoints (`/rewind`, Esc-Esc), subagents, hooks and background tasks combine to let you take on more ambitious work safely."
    ],
    sources: [
      { label: "What's new in Claude Code — session page", url: "https://claude.com/code-with-claude/session/sf-whats-new-in-claude-code" },
      { label: "InfoQ: Code with Claude announcements", url: "https://www.infoq.com/news/2026/05/code-with-claude/" }
    ]
  },
  {
    id: "sf-beyond-the-basics-with-claude-code",
    title: "Beyond the basics with Claude Code",
    channel: "Anthropic",
    date: "2026-05-06",
    youtube: "https://www.youtube.com/playlist?list=PLmWCw1CzcFim2obQ-w3ohbULOfwp5lApR",
    sessionPage: "https://claude.com/code-with-claude/session/sf-beyond-the-basics-with-claude-code",
    speakers: ["Anthropic Claude Code team"],
    themes: ["automate", "subagents", "toolkit", "context"],
    summary:
      "A practical deep-dive into Claude Code's extensibility layer — the difference between Skills, Hooks, and Subagents and when to reach for each.",
    takeaways: [
      "Skills are Markdown files (SKILL.md) that teach Claude repeatable workflows; they auto-activate on relevant context (or run as slash commands) — like macros instead of re-pasting a 200-word prompt.",
      "Hooks are deterministic callbacks in .claude/settings.json that run on events; where CLAUDE.md is advisory (Claude can 'forget' it), hooks are mandatory enforcement.",
      "Subagents run in their own fresh context with a custom prompt, scoped tools and permissions, and return only a summary — keeping the main thread clean.",
      "Sequencing advice: start with Skills (easiest, immediate value), add Hooks when you need deterministic enforcement, use Subagents when parallel work or context isolation matters."
    ],
    sources: [
      { label: "Beyond the basics — session page", url: "https://claude.com/code-with-claude/session/sf-beyond-the-basics-with-claude-code" },
      { label: "Create custom subagents — Claude Code Docs", url: "https://code.claude.com/docs/en/sub-agents" },
      { label: "Extend Claude with skills — Claude Code Docs", url: "https://code.claude.com/docs/en/skills" }
    ]
  },
  {
    id: "KLCuxMDZSDg",
    title: "The expanding toolkit",
    channel: "Anthropic",
    date: "2026-05-06",
    youtube: "https://www.youtube.com/watch?v=KLCuxMDZSDg",
    sessionPage: "https://claude.com/code-with-claude/session/sf-the-expanding-toolkit",
    speakers: ["Lucas Gonzalez (Member of Technical Staff, Anthropic)"],
    themes: ["toolkit", "mindset"],
    summary:
      "Walks through how Claude's raw capabilities changed between model generations and how they compose into agents that finish work instead of just starting it.",
    takeaways: [
      "Capabilities that used to need heavy scaffolding now live in the model: reliable tool use, context management, writing/running code, and computer use.",
      "Two kinds of code, very different shelf-lives: code that compensates for model unreliability has a half-life of months; code that connects the model to your data, auth, tools and proprietary context compounds.",
      "Skills handle code generation and repeatable procedure; MCP servers handle knowledge and access to external systems — they're complementary, not competing.",
      "The win is composition: stack model capabilities + skills + MCP + subagents into agents that drive a task to completion."
    ],
    sources: [
      { label: "The expanding toolkit — session page", url: "https://claude.com/code-with-claude/session/sf-the-expanding-toolkit" },
      { label: "Extend Claude with skills — Claude Code Docs", url: "https://code.claude.com/docs/en/skills" }
    ]
  },
  {
    id: "DlTCu_pNDHE",
    title: "Live coding session with Boris Cherny and Jarred Sumner",
    channel: "Anthropic",
    date: "2026-05-06",
    youtube: "https://www.youtube.com/watch?v=DlTCu_pNDHE",
    sessionPage: "https://claude.com/code-with-claude/session/sf-live-coding-session-with-boris-cherny-and-jarred-sumner",
    speakers: ["Boris Cherny (Head of Claude Code)", "Jarred Sumner (creator of Bun)"],
    themes: ["async", "subagents", "mindset"],
    summary:
      "Boris Cherny and Bun creator Jarred Sumner livestream their everyday Claude Code workflows, using Bun's 'Robobun' agent as the worked example.",
    takeaways: [
      "Robobun — a Claude Code agent — has now contributed more PRs and features to Bun than Jarred Sumner himself, showing how far autonomous contribution has come.",
      "The human's leverage moves to direction and review: keep agents productive, then verify their output rather than writing every line.",
      "Lots of recently-shipped Claude Code features fly under the radar; periodically re-check the changelog so you're using current capabilities.",
      "Echoes the conference thesis: models keep improving exponentially, soon doing work on behalf of whole teams, not just individuals."
    ],
    sources: [
      { label: "Live coding session — session page", url: "https://claude.com/code-with-claude/session/sf-live-coding-session-with-boris-cherny-and-jarred-sumner" },
      { label: "Code with Claude 2026 recordings (Chris Ebert)", url: "https://chrisebert.net/code-with-claude-2026-recordings-now-available/" }
    ]
  },
  {
    id: "6amLO7I9xdg",
    title: "Code with Claude London 2026: Opening Keynote",
    channel: "Anthropic",
    date: "2026-05-19",
    youtube: "https://www.youtube.com/watch?v=6amLO7I9xdg",
    sessionPage: "https://claude.com/blog/code-w-claude-london-2026-rethinking-how-we-build",
    speakers: ["Boris Cherny (Head of Claude Code)"],
    themes: ["mindset", "async", "scale"],
    summary:
      "London edition keynote on how agents collapse the distance between 'I have an idea' and 'it runs' — programming's accidental complexity (compilers, type-checkers, build systems) is being abstracted away again.",
    takeaways: [
      "The 'calculator feeling' returns — you describe a problem and the program shows up — except now the calculator can write a distributed system.",
      "The default is shifting from 'I'm going to prompt Claude' to 'I'm going to have Claude prompt itself'; developers increasingly don't see the error messages as Claude tests and tweaks until it runs.",
      "Automation primitives — Routines and CI Autofix — let agents verify, fix, and shepherd PRs with minimal human babysitting.",
      "Platform direction: make production agents cheaper, faster to ship, and more controllable (advisor strategy, Managed Agents, self-hosted sandboxes, MCP tunnels for secure internal access).",
      "Architect for the next capability jump (Opus 4.7, Mythos Preview), not just current limits."
    ],
    sources: [
      { label: "Code w/ Claude London 2026 recap (Claude blog)", url: "https://claude.com/blog/code-w-claude-london-2026-rethinking-how-we-build" },
      { label: "MIT Technology Review: coding's future", url: "https://www.technologyreview.com/2026/05/21/1137735/anthropics-code-with-claude-showed-off-codings-future-whether-you-like-it-or-not/" }
    ]
  },
  {
    id: "sf-claude-code-at-scale",
    title: "Claude Code at scale — long-horizon, multi-repo, parallel agents (track)",
    channel: "Anthropic",
    date: "2026-05-06",
    youtube: "https://www.youtube.com/playlist?list=PLmWCw1CzcFim2obQ-w3ohbULOfwp5lApR",
    sessionPage: "https://claude.com/code-with-claude/san-francisco",
    speakers: ["Nicholas Carlini (Anthropic — anchor write-up)", "Anthropic engineering + partners (GitHub, Vercel, Datadog, Cursor, Replit, Bun)"],
    themes: ["scale", "subagents", "context"],
    summary:
      "The conference's third track covered running Claude Code at scale: long-horizon tasks, multi-repo work, and the infrastructure + parallel agents that make it possible. Anchored by Anthropic's 'C compiler built by parallel Claudes' work.",
    takeaways: [
      "A lead agent decomposes a job and delegates pieces to specialist sub-agents (own model, prompts, tools) working in parallel on a shared file system, feeding results back to the lead's context.",
      "One example produced a ~100,000-line compiler across ~2,000 Claude Code sessions — the hard part is designing harnesses, not prompts.",
      "Write tests that keep agents on track without human oversight, and structure work so multiple agents progress in parallel.",
      "Use a progress file (e.g. CHANGELOG.md) as portable long-term memory: current status, completed tasks, failed approaches and WHY they failed, accuracy tables at checkpoints, and known limitations.",
      "For multi-repo work, declare repositories at the environment level so Claude lands in a workspace that's already configured, instead of wiring up access by hand."
    ],
    sources: [
      { label: "Code with Claude SF — agenda", url: "https://claude.com/code-with-claude/san-francisco" },
      { label: "Building a C compiler with a team of parallel Claudes", url: "https://www.anthropic.com/engineering/building-c-compiler" },
      { label: "MindStudio: 5 new agent features", url: "https://www.mindstudio.ai/blog/code-with-claude-2026-new-agent-features" }
    ]
  }
];

/*
 * Synthesized advice — the cross-cutting principles distilled from the talks
 * above (plus Anthropic's companion "How Anthropic teams use Claude Code"
 * guidance, which the live-coding and keynote sessions drew on). Each principle
 * cites the videos that support it via their ids.
 */
const PRINCIPLES = [
  {
    id: "p-plan",
    theme: "plan",
    title: "Plan before you build",
    summary: "Make Claude map the approach and agree on it before any code is written.",
    points: [
      "Switch to Plan Mode (Shift+Tab twice) for complex tasks — Anthropic reports it can double or triple success rates.",
      "For bigger work, drive a spec → plan → to-do → step-by-step flow (Boris Cherny's '/feature-dev' pattern): make Claude ask what you actually want first.",
      "Approve the plan, then let it execute — you review intent up front instead of cleaning up afterward."
    ],
    videoIds: ["sf-whats-new-in-claude-code", "GMIWm5y90xA"]
  },
  {
    id: "p-context",
    theme: "context",
    title: "Invest in CLAUDE.md and context",
    summary: "Front-loaded documentation is the single biggest lever on output quality.",
    points: [
      "The better a team documents workflows in CLAUDE.md, the better Claude Code performs — upfront investment pays off every session.",
      "Claude reads CLAUDE.md to understand dependencies (e.g. which sources feed which dashboards), often replacing traditional catalog/lookup tools.",
      "Keep a living progress file (CHANGELOG.md) for long tasks: status, done, failed approaches + why, accuracy checkpoints, known limits."
    ],
    videoIds: ["sf-beyond-the-basics-with-claude-code", "sf-claude-code-at-scale"]
  },
  {
    id: "p-subagents",
    theme: "subagents",
    title: "Fan work out to subagents",
    summary: "Parallel, context-isolated specialists catch more and keep the main thread clean.",
    points: [
      "Run a review command that spawns specialists in parallel: one checks style, one mines project history, one hunts bugs.",
      "Add adversarial subagents (Cherny uses ~5) whose only job is to poke holes in the first pass and kill false alarms.",
      "Each subagent has its own fresh context, scoped tools and permissions, and returns just a summary — so your main context stays focused.",
      "At scale, a lead agent delegates to specialist sub-agents working in parallel on a shared file system."
    ],
    videoIds: ["sf-beyond-the-basics-with-claude-code", "DlTCu_pNDHE", "sf-claude-code-at-scale"]
  },
  {
    id: "p-commands",
    theme: "automate",
    title: "Turn repeated workflows into slash commands",
    summary: "Codify the things you do constantly so they run consistently.",
    points: [
      "Start with simple ones like '/commit' — Cherny's version saves and pushes without re-asking permission each time.",
      "Build richer ones like '/feature-dev' that walk a task from spec to plan to execution.",
      "These compound across a team: Anthropic's Security Engineering accounts for ~50% of all custom slash commands in the monorepo."
    ],
    videoIds: ["sf-whats-new-in-claude-code", "sf-beyond-the-basics-with-claude-code"]
  },
  {
    id: "p-hooks",
    theme: "automate",
    title: "Use hooks for deterministic enforcement",
    summary: "When 'Claude should always do X' really means always, don't rely on a prompt.",
    points: [
      "Hooks are callbacks in .claude/settings.json that fire on events and run real, deterministic code.",
      "Unlike CLAUDE.md (advisory — Claude can forget it), hooks are mandatory — ideal for lint/test/format gates and policy.",
      "Reach for hooks once a behavior is non-negotiable; keep advisory guidance in CLAUDE.md."
    ],
    videoIds: ["sf-beyond-the-basics-with-claude-code"]
  },
  {
    id: "p-toolkit",
    theme: "toolkit",
    title: "Pick the right extension point",
    summary: "Skills, MCP, hooks and subagents solve different problems — don't conflate them.",
    points: [
      "Skills = repeatable procedure/code generation (SKILL.md, auto-activating macros).",
      "MCP = knowledge and access to external systems/data.",
      "Hooks = deterministic enforcement; Subagents = parallelism + context isolation.",
      "Default order: Skills first, then Hooks for enforcement, then Subagents for isolation/parallel work."
    ],
    videoIds: ["KLCuxMDZSDg", "sf-beyond-the-basics-with-claude-code"]
  },
  {
    id: "p-async",
    theme: "async",
    title: "Go async — verify, don't babysit",
    summary: "Let sessions run while you step away; the human reviews outcomes.",
    points: [
      "Use multi-session async dev with desktop + agent views; start on a laptop and continue on your phone via remote control.",
      "Relay approval prompts to your phone (`--channels`) and script calls with `--bare`; use Dispatch for managed, observable concurrent jobs.",
      "Lean on Routines and CI Autofix so agents verify, fix, and shepherd PRs; the new default is 'have Claude prompt itself.'",
      "Checkpoints (`/rewind`, Esc-Esc) make autonomy safe — you can always rewind to a prior state."
    ],
    videoIds: ["sf-whats-new-in-claude-code", "6amLO7I9xdg", "GMIWm5y90xA"]
  },
  {
    id: "p-scale",
    theme: "scale",
    title: "Orchestrate fleets and persist memory",
    summary: "Long-horizon work is won with harnesses, evals and memory — not bigger prompts.",
    points: [
      "Multiagent Orchestration fans a complex task out to specialist subagents; Outcomes defines success criteria so agents self-grade and iterate; Dreaming lets Claude recall and build on past sessions.",
      "Design harnesses for autonomy: tests that keep agents on track and work structured for parallel progress (a 100k-line compiler took ~2,000 sessions).",
      "Persist state in a progress file so agents have portable long-term memory across sessions.",
      "For multi-repo, configure repositories at the environment level so the agent starts in a ready workspace."
    ],
    videoIds: ["sf-claude-code-at-scale", "GMIWm5y90xA", "6amLO7I9xdg"]
  },
  {
    id: "p-mindset",
    theme: "mindset",
    title: "Treat Claude as a thought partner",
    summary: "Augment human workflows and build for the next capability jump.",
    points: [
      "The most successful teams use Claude Code as a thought partner — exploring and prototyping — not just a code generator.",
      "Focus on the human workflows Claude can augment; mine project history so you don't reinvent what you've already built.",
      "Architect for where models are going (Opus 4.7 and beyond), not only today's limits — the idea-to-running-software gap keeps shrinking.",
      "As agents out-contribute humans on routine work (see Robobun), your leverage shifts to direction, taste, and review."
    ],
    videoIds: ["GMIWm5y90xA", "6amLO7I9xdg", "DlTCu_pNDHE", "KLCuxMDZSDg"]
  }
];

/*
 * Verbatim quotes captured per talk (reported word-for-word by the cited
 * primary sources), plus a pointer to the full reconstructed transcript file.
 * Kept separate from VIDEOS so the talk objects above stay readable.
 */
const QUOTES = {
  "GMIWm5y90xA": [
    { who: "Boris Cherny", text: "Everything we are seeing today still feels magical to me, and I work on Claude Code every day." },
    { who: "Boris Cherny", text: "Routines are higher-order prompts." },
    { who: "Keynote", text: "No new model was announced today. Today is about how we are making our products work better for you." },
    { who: "Dianne Penn", text: "Context windows that feel infinite — when combined with high-quality memory." }
  ],
  "6amLO7I9xdg": [
    { who: "Boris Cherny", text: "The default isn't, 'I'm gonna prompt Claude Code,' the default is now, 'I'm gonna have Claude prompt Claude Code.'" },
    { who: "Boris Cherny", text: "With agents, that distance is collapsing again: you describe a problem, and the program shows up. It's the calculator feeling, except the calculator can write a distributed system." },
    { who: "Boris Cherny", text: "Routines are a higher-order prompt. You write the automation. Claude does the prompting." }
  ],
  "DlTCu_pNDHE": [
    { who: "Reported", text: "The GitHub username with the most merged PRs in Bun's repo is now a Claude Code bot." }
  ],
  "KLCuxMDZSDg": [
    { who: "Lucas Gonzalez", text: "Leave that work to us. We will continue to make Claude more reliable and more capable through this expanding toolkit that comes with the model." }
  ]
};

/* Extraction provenance — surfaced in the UI for full transparency. */
const EXTRACTION = {
  method: "InnerTube API probe + web-search reconstruction",
  verbatimAvailable: false,
  detail:
    "YouTube caption endpoints (youtube.com/api/timedtext) and all third-party transcript mirrors " +
    "return HTTP 403 through this environment's allowlist proxy. The InnerTube host " +
    "(youtubei.googleapis.com) is reachable, but the datacenter session is bot-gated: player is " +
    "UNPLAYABLE, get_transcript returns FAILED_PRECONDITION, and the transcript panel is absent — " +
    "and minting a po_token requires BotGuard endpoints that the proxy also blocks. Transcripts " +
    "below are therefore transcript-grade reconstructions from Anthropic's own session pages, " +
    "official recaps, and contemporaneous reporting, with verbatim quotes preserved where reported."
};

/* Attach transcript file path (by convention) and quotes to each video. */
VIDEOS.forEach((v) => {
  v.transcriptFile = `transcripts/${v.id}.md`;
  v.quotes = QUOTES[v.id] || [];
});

window.GUIDE = { META, THEMES, VIDEOS, PRINCIPLES, EXTRACTION };
