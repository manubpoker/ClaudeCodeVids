# Claude Code at scale — long-horizon, multi-repo, parallel agents (track)

- **Channel:** Anthropic (official) · **Date:** 2026-05-06 (Code w/ Claude SF)
- **Track / agenda:** https://claude.com/code-with-claude/san-francisco
- **Anchor write-up:** https://www.anthropic.com/engineering/building-c-compiler — by **Nicholas Carlini** (Anthropic)
- **Speakers:** Anthropic engineering + partners (GitHub, Vercel, Datadog, Cursor, Replit, Bun)

> **Fidelity note.** Not a verbatim caption file (YouTube captions blocked / InnerTube session-gated).
> Reconstructed from the SF agenda and Anthropic's engineering write-up "Building a C compiler with a
> team of parallel Claudes," which anchors this track's lessons.

## What the track covers
Running Claude Code **at scale**: long-horizon tasks, multi-repo work, and the infrastructure +
parallel agents that make it possible.

## Segment notes — the C-compiler case study
- **The result.** 16 agents wrote a Rust-based C compiler from scratch; over **~2,000 Claude Code
  sessions** and **~$20,000** in API cost they produced a **~100,000-line** compiler that builds
  **Linux 6.9 on x86, ARM, and RISC-V.**
- **Claude can't tell time.** Left alone it will happily spend hours running tests instead of making
  progress. The harness prints incremental progress **infrequently** and ships a default `--fast`
  option that runs a **1% or 10% random sample** of tests.
- **Progress file = portable long-term memory.** Conventionally `CHANGELOG.md`. A good one tracks
  current status, completed tasks, **failed approaches and why they failed**, accuracy tables at key
  checkpoints, and known limitations.
- **Parallelize with an oracle.** The Linux-kernel bottleneck was broken by using **GCC as an
  online known-good oracle** to diff against, letting each agent fix different bugs in different
  files in parallel. Concretely: randomly compile **most** of the kernel with GCC and only the
  remaining files with Claude's compiler — progressively expand Claude's coverage until it can
  compile everything.
- **Parallelism enables specialization.** One agent coalesced duplicate code, another improved
  compiler performance, a third focused on efficient codegen.
- **Orchestration pattern.** A **lead agent** decomposes the job and delegates to **specialist
  sub-agents** (own model, prompts, tools) working in parallel on a **shared file system**, feeding
  results back to the lead's context.
- **Multi-repo.** Declare which repositories belong to an environment so Claude lands in a
  pre-configured workspace instead of wiring access by hand.

## Direct quotes (from the anchor write-up)
- *"Time blindness: Claude can't tell time and, left alone, will happily spend hours running tests
  instead of making progress."* — Nicholas Carlini
- *"Building this compiler has been some of the most fun I've had recently, but I did not expect
  this to be anywhere near possible so early in 2026. The rapid progress in both language models and
  the scaffolds we use to interact with them opens the door to writing an enormous amount of new
  code."* — Nicholas Carlini

## Conclusions / advice
1. **The hard part is the harness, not the prompt** — design tests and progress tracking that keep
   agents honest without a human watching.
2. Give long-running agents **memory** (a structured progress file) and a **known-good oracle** to
   check against.
3. Structure work for **parallel specialists**; configure multi-repo access at the **environment**
   level.

## Sources
- https://claude.com/code-with-claude/san-francisco
- https://www.anthropic.com/engineering/building-c-compiler
- https://www.infoq.com/news/2026/02/claude-built-c-compiler/
- https://www.mindstudio.ai/blog/code-with-claude-2026-new-agent-features
