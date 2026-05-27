# Code with Claude 2026 — Opening Keynote (San Francisco)

- **Channel:** Anthropic (official) · **Date:** 2026-05-06
- **Video:** https://www.youtube.com/watch?v=GMIWm5y90xA
- **Session page:** https://claude.com/code-with-claude/session/sf-opening-keynote
- **Speakers:** Ami Vora (CPO), Boris Cherny (Head of Claude Code), Angela Jiang (Head of Claude Platform Product), Dianne Penn, Cat Wu, Katelyn Lesse

> **Fidelity note.** This is **not** a verbatim YouTube caption file. YouTube's own caption
> endpoints (`youtube.com/api/timedtext`) and every third-party transcript mirror are blocked by
> this environment's network allowlist (HTTP 403), and InnerTube's `get_transcript` is gated for
> the datacenter session (`FAILED_PRECONDITION`). The content below is a transcript-grade
> reconstruction assembled from Anthropic's own session page, the official Claude blog recap, and
> contemporaneous live-blogs. Quotes marked with “ ” were reported verbatim by those sources.

## What the talk covers
The opening keynote frames the conference thesis: software development is moving from manual,
incremental coding (build systems, config files, long feedback loops) toward **agentic
development**, where the gap between "I have an idea" and "it runs" is collapsing.

## Segment notes
- **Framing — this is a product day, not a model day.** "No new model was announced today. Today
  is about how we are making our products work better for you."
- **The exponential.** API volume on the Anthropic platform is **up 17x year-on-year**; the keynote
  argues teams should build for where models are going, not just today's limits.
- **Three new Managed Agents capabilities** announced:
  - **Multiagent Orchestration** — scale a fleet of agents that break a complex task into parts.
  - **Outcomes** — define success criteria so agents can iterate and self-improve over time.
  - **Dreaming** — let Claude recall previous sessions and build on past work.
- **Routines (Claude Code).** Positioned as the automation primitive that makes async development
  real: "With Routines, developers can set up async automations and wake up to PRs that are ready
  to merge."
- **Customer proof points.**
  - Mercado Libre (≈23,000 engineers) is targeting **"90% autonomous coding by Q3 this year."**
  - One team showed weekly PRs merged to main up **~300%** — from ~500 in January to ~1,150 in March.
- **Opus 4.7** highlighted for strong visual-design taste; Dianne Penn teased "context windows that
  feel infinite."

## Direct quotes
- "Everything we are seeing today still feels magical to me, and I work on Claude Code every day." — Boris Cherny
- "Routines are higher-order prompts." — Boris Cherny
- "No new model was announced today. Today is about how we are making our products work better for you."
- Opening framing (reported): Ami Vora walked onstage and told the room that their AI agents were
  "about to start dreaming."
- "Context windows that feel infinite" — Dianne Penn (Head of Product, Research), when combined with
  high-quality memory. (Cat Wu, Head of Product for Claude Code, also presented.)

## Conclusions / advice
1. Treat the model's trajectory as a design input — architect for the next capability jump.
2. Move routine, well-specified work to **Routines** so agents prepare merge-ready PRs while you sleep.
3. For ambitious work, compose **multiple agents** (orchestration) and give them **success criteria**
   (outcomes) and **memory** (dreaming) rather than babysitting a single chat.

## Sources
- https://claude.com/code-with-claude/session/sf-opening-keynote
- https://claude.com/blog/code-w-claude-sf-2026-sf
- https://simonwillison.net/2026/May/6/code-w-claude-2026/
- https://www.infoq.com/news/2026/05/code-with-claude/
- https://zenn.dev/noah33/articles/code-with-claude-2026-sf-keynote?locale=en
