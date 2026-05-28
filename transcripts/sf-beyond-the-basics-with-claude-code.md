# Beyond the basics with Claude Code

- **Channel:** Anthropic (official) · **Date:** 2026-05-06 (Code w/ Claude SF · 11:15AM–12:00PM, workshop format)
- **Session page:** https://claude.com/code-with-claude/session/sf-beyond-the-basics-with-claude-code
- **Playlist:** https://www.youtube.com/playlist?list=PLmWCw1CzcFim2obQ-w3ohbULOfwp5lApR
- **Speaker:** Daisy Hollman (Member of Technical Staff, Anthropic)

> **Fidelity note.** Not a verbatim caption file (YouTube captions blocked / InnerTube session-gated).
> Reconstructed from the session page and Claude Code documentation on subagents, skills, and hooks.

## What the talk covers
A practical workshop on the mechanics that separate basic Claude Code use from real leverage:
**CLAUDE.md done well, wiring tools in with MCP, packaging team knowledge as skills, and using
auto mode safely** — plus the difference between Skills, Hooks, and Subagents and when to reach for
each.

## Direct quotes
- **"You should be running agents overnight."** — Daisy Hollman
- On context engineering: *"One of the harder engineering challenges in building agents is choosing
  the right information to put into a fixed box."* — Daisy Hollman
- Hollman described supervising **"fleets of asynchronous agents"** as her own work pattern.

## Concrete optimisation example (from the session)
A sports company **reduced token usage by 66%** simply by:
1. Switching tool output from **JSON to markdown**.
2. **Removing unneeded fields.**
3. **Removing timestamps** from tool output.

The change cut cost *and* improved Claude's results.

## Segment notes
- **Skills** — Markdown files (`SKILL.md`) that teach Claude a repeatable workflow. They
  auto-activate when Claude detects relevant context (or run as slash commands). Mental model:
  *macros* — write the procedure once instead of re-pasting a 200-word prompt every time.
  Configure with YAML frontmatter (`name`, `description`, `disable-model-invocation`,
  `allowed-tools`). Unlike `CLAUDE.md`, a skill's body **loads only when invoked**, so long
  reference material costs almost nothing until needed. Worked example: an `explain-code` skill
  that walks code with diagrams and analogies when a user asks "how does this work?"
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
