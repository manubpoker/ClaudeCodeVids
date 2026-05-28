# What's new in Claude Code

- **Channel:** Anthropic (official) · **Date:** 2026-05-06 (Code w/ Claude SF)
- **Session page:** https://claude.com/code-with-claude/session/sf-whats-new-in-claude-code
- **Playlist:** https://www.youtube.com/playlist?list=PLmWCw1CzcFim2obQ-w3ohbULOfwp5lApR
- **Speaker:** Dickson Tsai (Member of Technical Staff, Claude Code)

> **Fidelity note.** Not a verbatim caption file (YouTube captions blocked / InnerTube session-gated
> in this environment). Reconstructed from the session page, Anthropic's Claude Code docs, and
> feature roundups.

## What the talk covers
A tour of recently shipped Claude Code features many users have missed — heavily weighted toward
**developer experience** and **asynchronous control** so a session keeps going when you step away.

## Segment notes
- **Remote Control.** Start a session on one machine (laptop/server/CI) and continue it from your
  phone: you run the command, get a URL, open it in the Claude mobile app, and you're attached to
  the *live* session running on your laptop.
- **Dispatch.** Managed, observable async task execution. Dispatch a task from your phone; the local
  desktop agent picks it up, works, and messages you when the result is ready. Unlike a synchronous
  shell script (no structured progress), Dispatch handles multiple concurrent jobs with real-time
  event streaming.
- **Channels.** Persistent, bidirectional pathways between Claude Code and external systems; they
  maintain state across exchanges so you can send instructions incrementally as conditions change.
  The `--channels` permission relay can forward approval prompts to your phone.
- **Scripting.** `--bare` for clean, scriptable calls.
- **Auto Mode** moves permission decisions to a **classifier** that screens for destructive actions
  and prompt injection, keeping human approval for the sensitive ones.
- **Worktrees.** Claude gets an *enter* and *exit* tool to spin up isolated branches — clean parallel
  work without polluting your main tree.
- **Redesigned desktop GUI.** Split views, pin assistant messages as **chapters** with a generated
  table of contents, and inline diff comments.
- **Doubled 5-hour rate limits** for Pro / Max / Enterprise customers.
- **Safety rails for autonomy.** Plan Mode, **checkpoints** (`/rewind`, Esc-Esc), subagents, hooks,
  and background tasks combine so you can take on more ambitious work and always rewind.
- **Context.** Q1 also brought Auto Mode and AutoDream alongside Computer Use improvements.

## Conclusions / advice
1. Adopt **async control** — Remote Control + Dispatch + Channels — so work continues off your desk
   and approvals reach your phone.
2. Use `--bare` to fold Claude Code into scripts/pipelines; prefer **Dispatch** over raw shell calls
   when you need observability and concurrency.
3. Lean on **checkpoints** to be braver: you can always `/rewind`.

## Sources
- https://claude.com/code-with-claude/session/sf-whats-new-in-claude-code
- https://code.claude.com/docs/en/remote-control
- https://www.mindstudio.ai/blog/claude-code-channels-vs-dispatch-vs-remote-control
- https://www.infoq.com/news/2026/05/code-with-claude/
