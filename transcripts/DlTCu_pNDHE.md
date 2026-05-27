# Live coding session with Boris Cherny and Jarred Sumner

- **Channel:** Anthropic (official) · **Date:** 2026-05-06 (Code w/ Claude SF)
- **Video:** https://www.youtube.com/watch?v=DlTCu_pNDHE
- **Session page:** https://claude.com/code-with-claude/session/sf-live-coding-with-bun-and-claude-code
- **Speakers:** Boris Cherny (Head of Claude Code), Jarred Sumner (creator of Bun)

> **Fidelity note.** Not a verbatim caption file (YouTube captions blocked / InnerTube session-gated).
> Reconstructed from the session page, Anthropic's recap, and reporting on Robobun.

## What the talk covers
Boris Cherny and Bun creator Jarred Sumner livestream their **everyday** Claude Code workflows,
using Bun's **"Robobun"** agent as the worked example.

## Segment notes
- **Robobun out-ships the maintainer.** The GitHub account with the **most merged PRs in the Bun
  repo is now a Claude Code bot.** Robobun has contributed more PRs and features to Bun than Jarred
  himself.
- **A disciplined fix loop.** Robobun reproduces every issue and **only opens a PR once a generated
  regression test fails on the previous Bun version and passes on the fix branch.** It also responds
  to review comments. It's wired into their internal Discord and used mostly to fix bugs.
- **Vanilla setup.** Cherny has said his own setup is "surprisingly vanilla" — Claude Code works
  well out of the box, so he customizes little. A lot of his code is built by **Routines**
  ("higher-order prompts").
- **The human's role shifts** to direction and review; verifying agent output becomes the leverage
  point.

## Direct quotes / facts
- "The GitHub username with the most merged PRs in Bun's repo is now a Claude Code bot."
- Robobun "opens PRs with tests that fail in the earlier system-installed version of Bun before the
  fix and pass in the fixed debug build of Bun. It responds to review comments."

## Conclusions / advice
1. **Gate agent PRs on a failing→passing regression test** — it forces real fixes and makes review trustworthy.
2. You don't need an exotic setup; vanilla Claude Code + **Routines** gets you far.
3. As agents take routine work, **invest your time in direction, taste, and review.**

## Sources
- https://claude.com/code-with-claude/session/sf-live-coding-with-bun-and-claude-code
- https://chrisebert.net/code-with-claude-2026-recordings-now-available/
- https://bun.com/blog/bun-joins-anthropic
