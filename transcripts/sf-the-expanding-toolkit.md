# The expanding toolkit

- **Channel:** Anthropic (official) · **Date:** 2026-05-06 (Code w/ Claude SF)
- **Session page:** https://claude.com/code-with-claude/session/sf-the-expanding-toolkit
- **Playlist:** https://www.youtube.com/playlist?list=PLmWCw1CzcFim2obQ-w3ohbULOfwp5lApR

> **Fidelity note.** Not a verbatim caption file (YouTube captions blocked / InnerTube session-gated).
> Reconstructed from the session page and Claude Code skills/MCP documentation.

## What the talk covers
How Claude's **raw capabilities** changed between model generations, and how they compose into
**agents that finish work** instead of just starting it.

## Segment notes
- **Capabilities moved into the model.** Things that used to need heavy scaffolding — reliable tool
  use, context management, writing and running code, computer use — now live in the model itself.
- **Skills vs MCP.** Skills handle **code generation / repeatable procedure**; **MCP servers handle
  knowledge** and access to external systems and data. They're complementary, not competing.
- **Composition is the win.** Stack model capabilities + skills + MCP + subagents into an agent that
  drives a task end-to-end.

## Conclusions / advice
1. Re-check what the model can now do *natively* before building scaffolding — much of it is obsolete.
2. Use **Skills for "how to do it"** and **MCP for "what to know / connect to."**
3. Design for **completion**: compose capabilities so the agent finishes the job, not just starts it.

## Sources
- https://claude.com/code-with-claude/session/sf-the-expanding-toolkit
- https://code.claude.com/docs/en/skills
