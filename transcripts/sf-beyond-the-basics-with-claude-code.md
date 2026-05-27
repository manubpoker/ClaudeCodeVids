# Beyond the basics with Claude Code

- **Channel:** Anthropic (official) · **Date:** 2026-05-06 (Code w/ Claude SF)
- **Session page:** https://claude.com/code-with-claude/session/sf-beyond-the-basics-with-claude-code
- **Playlist:** https://www.youtube.com/playlist?list=PLmWCw1CzcFim2obQ-w3ohbULOfwp5lApR

> **Fidelity note.** Not a verbatim caption file (YouTube captions blocked / InnerTube session-gated).
> Reconstructed from the session page and Claude Code documentation on subagents, skills, and hooks.

## What the talk covers
A practical deep-dive into Claude Code's **extensibility layer** — the difference between Skills,
Hooks, and Subagents, and when to reach for each.

## Segment notes
- **Skills** — Markdown files (`SKILL.md`) that teach Claude a repeatable workflow. They
  auto-activate when Claude detects relevant context (or run as slash commands). Mental model:
  *macros* — write the procedure once instead of re-pasting a 200-word prompt every time.
- **Hooks** — deterministic callbacks in `.claude/settings.json` that fire on events and run real
  code. Where `CLAUDE.md` is **advisory** (Claude can "forget" it), hooks are **mandatory** — ideal
  for lint/test/format gates and policy enforcement.
- **Subagents** — specialized helpers that run in their **own fresh context** with a custom system
  prompt, scoped tools, and independent permissions, and return only a **summary** so the main thread
  stays clean. Use them for parallel work and context isolation.
- **Custom slash commands** — codify multi-step workflows (e.g. `/commit`, `/feature-dev`).

## Conclusions / advice
1. **Sequencing:** start with **Skills** (easiest, immediate value) → add **Hooks** when a behavior
   must *always* happen → use **Subagents** when you need parallelism or context isolation.
2. Put non-negotiable rules in **hooks**, not prose in `CLAUDE.md`.
3. Keep the main context lean by delegating investigation to **subagents** that report back summaries.

## Sources
- https://claude.com/code-with-claude/session/sf-beyond-the-basics-with-claude-code
- https://code.claude.com/docs/en/sub-agents
- https://code.claude.com/docs/en/skills
