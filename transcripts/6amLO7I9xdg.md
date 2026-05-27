# Code with Claude London 2026 — Opening Keynote

- **Channel:** Anthropic (official) · **Date:** 2026-05-19
- **Video:** https://www.youtube.com/watch?v=6amLO7I9xdg
- **Recap:** https://claude.com/blog/code-w-claude-london-2026-rethinking-how-we-build
- **Speaker:** Boris Cherny (Head of Claude Code)

> **Fidelity note.** Not a verbatim caption file — YouTube caption endpoints and transcript mirrors
> are network-blocked here (HTTP 403) and InnerTube `get_transcript` is session-gated. Reconstructed
> from Anthropic's official recap, the London event page, and reporting (MIT Technology Review).
> Quoted lines were reported verbatim.

## What the talk covers
The London edition keynote reframes the whole conference: **agents are collapsing the distance
between "I have an idea" and "it runs."** Programming kept adding accidental complexity (compilers,
type-checkers, build systems) that pushed that distance further out; agents pull it back in.

## Segment notes
- **Origin story — the "calculator feeling."** Cherny recalls first feeling coding's magic in
  secondary school: writing TI-83 programs that solved his math homework, and teaching himself HTML
  so his eBay Pokémon-card listings would sell better. The point: when something just *runs*, it's
  exciting — and agents bring that immediacy back, "except the calculator can write a distributed
  system."
- **The default has flipped.** "The default isn't 'I'm going to prompt Claude' — the default is now
  'I'm going to have Claude prompt itself.'" Reframed elsewhere as moving from *"I prompt Claude
  Code"* to *"Claude prompts Claude Code."*
- **Routines = higher-order prompts.** "You write the automation. Claude does the prompting."
- **CI Autofix demo.** CI Autofix watches an open PR from creation until merge and handles review
  comments, security flags, merge conflicts, and flaky CI. Live demo: a CI job flaked on a network
  timeout → a Routine triggered → it diagnosed a *known* infra problem → retried the job → green —
  **with no human intervention.** Cherny noted developers increasingly don't even see the error
  messages, because Claude tests and tweaks until it runs.
- **Platform direction.** Make production agents cheaper, faster to ship, and more controllable:
  the advisor strategy, Claude Managed Agents, self-hosted sandboxes, and MCP tunnels for secure
  internal access.
- **Model progress.** Build for the next jump (Opus 4.7, "Mythos Preview"), not just current limits.

## Direct quotes
- "The default isn't 'I'm going to prompt Claude' — the default is now 'I'm going to have Claude prompt itself.'" — Boris Cherny
- "Routines are a higher-order prompt. You write the automation. Claude does the prompting." — Boris Cherny

## Conclusions / advice
1. Stop thinking in single prompts; design **routines/automations** that let Claude prompt itself.
2. Wire agents into your **PR lifecycle** (CI Autofix) so review comments, conflicts, and flaky CI
   resolve themselves and you only look at merge-ready results.
3. Architect for the next model — the idea→running-software gap keeps shrinking.

## Sources
- https://claude.com/blog/code-w-claude-london-2026-rethinking-how-we-build
- https://www.technologyreview.com/2026/05/21/1137735/anthropics-code-with-claude-showed-off-codings-future-whether-you-like-it-or-not/
- https://claude.com/code-with-claude/london
