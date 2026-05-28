# The expanding toolkit

- **Channel:** Anthropic (official) · **Date:** 2026-05-06 (Code w/ Claude SF · 11:15–11:45)
- **Session page:** https://claude.com/code-with-claude/session/sf-the-expanding-toolkit
- **Video:** https://www.youtube.com/watch?v=KLCuxMDZSDg
- **Playlist:** https://www.youtube.com/playlist?list=PLmWCw1CzcFim2obQ-w3ohbULOfwp5lApR
- **Speaker:** Lucas Gonzalez (Member of Technical Staff, Anthropic)

> **Fidelity note.** Not a verbatim caption file (YouTube captions blocked / InnerTube session-gated).
> Reconstructed from the session page and Claude Code skills/MCP documentation.

## What the talk covers
How Claude's **raw capabilities** changed between model generations, and how they compose into
**agents that finish work** instead of just starting it.

## Segment notes
- **Capabilities moved into the model.** Things that used to need heavy scaffolding — reliable tool
  use, context management, writing and running code, computer use — now live in the model itself.
- **Two kinds of code, very different shelf-lives.**
  - Code that **compensates for model unreliability** has a half-life measured in **months** — it
    rots as the model gets better.
  - Code that **connects the model to your data, auth, tools, and proprietary context** **compounds**
    and keeps paying off.
- **Skills vs MCP.** Skills handle **code generation / repeatable procedure**; **MCP servers handle
  knowledge** and access to external systems and data. They're complementary, not competing.
- **Composition is the win.** Stack model capabilities + skills + MCP + subagents into an agent that
  drives a task end-to-end.

## Direct quote
- "Leave that work to us. We will continue to make Claude more reliable and more capable through this
  expanding toolkit that comes with the model." — Lucas Gonzalez

## Conclusions / advice
1. Don't write code that compensates for model unreliability — it has a months-long half-life.
   Invest in connectors (data, auth, tools, proprietary context) that **compound.**
2. Re-check what the model can now do *natively* before building scaffolding — much of it is obsolete.
3. Use **Skills for "how to do it"** and **MCP for "what to know / connect to."**
4. Design for **completion**: compose capabilities so the agent finishes the job, not just starts it.

## Sources
- https://claude.com/code-with-claude/session/sf-the-expanding-toolkit
- https://code.claude.com/docs/en/skills
