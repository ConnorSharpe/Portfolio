# AI Development Agent Efficiency Guide
## Deterministic Context + Handoff Protocol for Claude Code / Multi-Agent Systems

Version: 2026-05 (Architect Revision 4)

Author: Connor Sharpe

Audience:
- Claude Code
- Grok Architect
- Cursor
- Roo
- OpenHands
- Aider
- Multi-agent orchestration systems

---

# Core Principle

> Context is a limited computational resource.
> Treat it like memory management, not conversation history.

The objective is NOT larger context windows.

The objective is:
- precise context
- bounded memory
- deterministic retrieval
- explicit dependency routing
- minimal context entropy
- reliable handoffs

Efficient AI development systems behave more like operating systems than chat sessions.

---

# How to Use This Guide

- Read this guide once during project onboarding.
- Every session begins with Quick-Start Orientation.
- Treat all `/ai/*` files as authoritative living documents.
- Update this guide when better operational patterns emerge.
- Prefer deterministic handoffs over long conversational memory.

---

# Quick-Start Orientation (Mandatory)

Before doing ANY work:

Read ONLY:

```txt
/ai/handoffs/CURRENT_STATE.md
/ai/tasks/TASK-XXX.md
/ai/architecture/SYSTEM_OVERVIEW.md
Relevant sections of:
/ai/maps/FILE_MAP.md
CLAUDE.md (preferred) or AGENTS.md
```

Then:

1. Confirm scope boundaries
2. Confirm allowed/forbidden files
3. Confirm constraints
4. Confirm acceptance criteria
5. Ask clarification questions ONLY if necessary

DO NOT:
- explore the repo
- recursively search directories
- inspect unrelated files
- open large folders

Output a brief understanding summary before proceeding.

---

# Context Priority Order

When conflicts exist, prioritize context in this order:

1. Active TASK file
2. CURRENT_STATE.md
3. CLAUDE.md / AGENTS.md
4. SYSTEM_OVERVIEW.md
5. FILE_MAP.md
6. Existing codebase patterns
7. Historical conversation context

Never prioritize old chat history over repository truth.

---

# Context Engineering Principles

## Selection
Load only relevant context slices.

## Compression
Prefer summaries + references over raw data.

## Ordering
Put critical information first.

## Isolation
Use separate sessions/sub-agents for separate concerns.

## Format
Use dense structured markdown.

---

# Required Repository Structure

```txt
/ai
    /architecture
    /handoffs
    /maps
    /memory
    /tasks
    /plans
```

---

# Critical Files

## CURRENT_STATE.md
Canonical active handoff.

Every session MUST:
1. read this file first
2. update this file before ending

Purpose:
- eliminate rediscovery
- reduce repo searching
- preserve continuity
- compress active context

---

## FILE_MAP.md
Logical repository map.

Consult BEFORE searching.

Example:

```md
# Authentication

ENTRY:
- api/middleware/auth.ts

CORE:
- src/auth/token-service.ts
- src/auth/session-manager.ts

TYPES:
- src/types/auth.ts

TESTS:
- tests/auth/*
```

---

## SYSTEM_OVERVIEW.md
High-level architecture only.

Requirements:
- under 4k tokens
- no implementation noise
- critical flows and boundaries only

---

## STABLE_CONTEXT.md
Persistent invariants and architecture rules.

Example:

```md
- Repository pattern only
- No direct DB access in routes
- Zod validation required
- Feature flags handled server-side
```

---

## CLAUDE.md (preferred) or AGENTS.md

Root-level persistent operating contract.

Requirements:
- keep under ~200 lines
- use progressive disclosure
- reference other `/ai/*` files instead of inlining large docs

Purpose:
- coding conventions
- architecture rules
- stable workflows
- repo-wide expectations

Avoid giant CLAUDE.md files.

---

## TASK-XXX.md

Defines active scoped task.

Required sections:

```md
# Goal
# Allowed Files
# Forbidden Files
# Constraints
# Acceptance Criteria
# Verification Steps
```

No implementation begins without explicit scope.

---

# REQUIRED HANDOFF FORMAT (Use Exactly)

```md
# Task
[One-line title]

# Current Status
[Concise summary]

# Files Modified
- ...

# Files Required Next
- ...

# Files Already Reviewed
- ...

# Dependency Chain

Editing:
- ...

Requires:
- ...

Irrelevant:
- ...

# Architecture Notes
...

# Decisions Made
- ...

# Remaining Work
- ...

# Known Risks / Open Questions
- ...

# Verification Results
- auth tests: PASS
- lint: PASS

# Recommended Next Action
[Precise + scoped]

# Forbidden Exploration
- frontend/*
- analytics/*
- migrations/*

# Context Notes
- branch: ...
- worktree: ...
- context pressure: low | medium | high
- token usage concerns: ...
```

---

# Fundamental Rules

## 1. Never Explore the Entire Repo

DO NOT:
- recursively inspect directories
- perform broad semantic searches
- open entire folders
- read generated artifacts
- scan unrelated systems

INSTEAD:
- use maps first
- use handoffs first
- request missing files explicitly

---

## 2. Strict Scope Adherence

Rules:
- inspect only required files
- avoid rereading unchanged files
- request approval before expanding scope
- never inspect more than 5 new files without justification

If additional files are required:

```md
Additional Context Required:
- src/types/auth.ts

Reason:
token type definitions referenced by middleware
```

---

## 3. Markdown + Progressive Disclosure Only

Prefer:
- markdown
- references
- concise summaries
- structured lists

Avoid:
- screenshots
- PDFs
- pasted logs
- giant inline documents
- image-heavy specs

Text retrieval is significantly more token efficient.

---

## 4. Separate Operational Modes

Never mix:
- brainstorming
- planning
- debugging
- implementation
- verification
- refactoring

Use:
- separate sessions
- separate sub-agents
- separate worktrees

---

## 5. Aggressive Session Restarts

Start fresh sessions when:
- task scope changes
- architecture changes
- debugging completes
- context becomes noisy
- exploration expands too far

Do NOT rely on automatic compaction.

Use explicit handoffs instead.

---

## 6. Architecture Preservation Rule

DO NOT:
- introduce abstractions unnecessarily
- reorganize folders opportunistically
- rename files casually
- perform unrelated refactors
- "improve" unrelated systems

Preserve existing architecture unless explicitly tasked otherwise.

---

# Preferred Search Strategy

Search in this order:

1. CURRENT_STATE.md
2. TASK file
3. FILE_MAP.md
4. SYSTEM_OVERVIEW.md
5. Explicit dependency references
6. Targeted symbol search
7. Direct file inspection

Avoid:
- recursive grep across repo
- broad semantic scans
- opening entire directories

---

# Dependency Chain Requirements

Every task and handoff MUST specify:

```md
# Dependency Chain

Editing:
- src/auth/token-service.ts

Requires:
- src/types/auth.ts
- src/config/auth-config.ts

Irrelevant:
- frontend/*
- analytics/*
```

This exists specifically to reduce repo exploration.

---

# Escalation Rules

STOP and request approval if:
- more than 5 additional files are required
- architecture changes become necessary
- schema/database changes appear
- unrelated failures emerge
- task boundaries become ambiguous
- context requirements grow unexpectedly

Do not silently expand scope.

---

# Context Expiration Rules

Expire aggressively:
- old debugging logs
- obsolete plans
- resolved TODOs
- outdated assumptions
- completed subtasks
- stale investigations

Persist:
- invariants
- dependency maps
- accepted decisions
- active risks
- API contracts
- architecture rules

---

# Token Hygiene Rules

Avoid:
- repeating unchanged context
- verbose confirmations
- re-pasting plans
- giant summaries
- repeated architecture explanations
- dumping raw logs

Prefer:
- delta updates
- concise state transitions
- references
- compressed summaries

Good:

```md
Build failed:
- auth.ts line 48
- token-service.ts line 91
```

Bad:
- full terminal dumps
- repeated stack traces
- large JSON payloads

---

# Preferred Workflow

## Phase 0 — Orientation
Read ONLY:
- CURRENT_STATE.md
- TASK file
- SYSTEM_OVERVIEW.md
- relevant FILE_MAP sections
- CLAUDE.md

No repo searching yet.

---

## Phase 1 — Investigation

Rules:
- inspect allowed files only
- identify dependencies explicitly
- avoid speculative exploration
- summarize findings concisely

Output:

```md
Relevant Dependencies:
- src/types/auth.ts
- src/config/auth-config.ts

Irrelevant:
- frontend/*
- analytics/*
```

---

## Phase 2 — Planning

Produce:
- minimal change plan
- exact files affected
- dependency chain
- risks
- verification strategy

Prefer:
- verification-first workflows
- TDD when feasible

Recommended:
- annotation/review cycle before implementation

---

## Phase 3 — Implementation

Requirements:
- smallest viable diff
- preserve architecture
- avoid unrelated cleanup
- avoid formatting-only changes
- avoid opportunistic rewrites

---

## Phase 4 — Verification

Run:
- targeted tests only
- minimal verification commands

Compress results aggressively.

Example:

```md
Verification:
- auth tests passed
- lint passed
- build passed
```

---

## Phase 5 — Handoff Compression

Before ending session:

Update CURRENT_STATE.md.

Session is NOT complete until handoff is updated.

---

# REQUIRED SESSION END CHECKLIST

Before ending session, the agent MUST:

1. Update CURRENT_STATE.md
2. Record modified files
3. Record dependency chain
4. Record reviewed files
5. Record remaining work
6. Record verification results
7. Record known risks
8. Record forbidden exploration zones
9. Compress findings to minimal necessary context
10. Output PowerShell Commit and Merge Block

---

# Sub-Agent / Context Isolation Pattern

## Planner Agent
Reads: architecture, maps, task scope  
Outputs: plan, dependency chain, file list

## Executor Agent
Reads: approved plan, exact files only  
Implements: smallest viable diff

## Verification Agent
Reads: modified files, acceptance criteria  
Runs: tests, validation, lint/build

## Debugging Agent
Uses isolated troubleshooting context only.  
Purpose: prevent contamination of implementation context

---

# Worktree Strategy

Use git worktrees for:
- isolated experiments
- parallel agent execution
- speculative implementations
- architecture alternatives

Benefits:
- cleaner context
- isolated diffs
- reduced unrelated repo scanning

---

# Tool / MCP Optimization Rules

When tools are available:

Prefer:
- filtered outputs
- server-side summarization
- pagination
- caching
- compact serialization

Avoid:
- loading unnecessary tool schemas
- full raw tool outputs
- giant MCP responses

Tool context is expensive.

---

# Planning Discipline

Rules:
- keep plans short
- keep plans actionable
- avoid speculative architecture
- define dependency chains
- prefer explicit verification oracles

Strongly recommended:
- tests first
- verification-first workflows
- annotation/review cycles before implementation

---

# Multi-Agent Coordination Rules

When multiple agents are active:

Each agent MUST:
- own explicit scope
- own explicit file boundaries
- update shared handoff docs
- avoid overlapping modifications

Use:
- worktrees
- isolated plans
- explicit ownership

---

# Golden Rules

## ALWAYS

- Maintain CURRENT_STATE.md
- Use explicit Allowed/Forbidden lists
- Define dependency chains
- Compress findings aggressively
- Preserve architectural consistency
- Define forbidden exploration zones
- Use isolation (sub-agents / worktrees)
- Prefer verification-first workflows
- Prefer markdown only
- Prefer references over repetition

---

## NEVER

- Dump entire repos
- Recursively search without scope
- Continue bloated sessions indefinitely
- Mix operational modes
- Perform unrelated refactors
- Reread unchanged files repeatedly
- Rely on auto-compaction
- Expand scope silently
- Paste giant logs or payloads
- Tell the user to `cd` into a worktree or `checkout` a feature branch

---

# Recommended Master Prompt

```md
You are an implementation-focused development agent operating under the AI Development Agent Efficiency Guide.

Primary objectives:
1. Minimize token usage
2. Avoid unnecessary exploration
3. Preserve architectural consistency
4. Produce deterministic handoffs
5. Deliver smallest viable diffs

Rules:
- Never inspect the entire repo
- Use CURRENT_STATE.md first
- Use maps before searching
- Request approval before expanding scope
- Avoid rereading unchanged files
- Compress findings aggressively
- Preserve architecture
- Update CURRENT_STATE.md before ending session

Workflow:
1. Orient
2. Investigate
3. Plan
4. Implement
5. Verify
6. Compress handoff
```

---

# Final Principle

The future of effective AI development is not:
- larger prompts
- larger context windows
- more conversation history

It is:
- explicit context topology
- bounded memory systems
- deterministic retrieval
- context isolation
- dependency routing
- structured handoff protocols

Design context like infrastructure:
explicit, bounded, deterministic, and routable.

---

# PowerShell Commit and Merge Protocol

## Context

The user always operates from the **main branch**.
Worktrees are short-lived feature branches.
All PowerShell commands below are safe to run from main without switching branches.

**NEVER instruct the user to `cd` into a worktree or `git checkout` a feature branch.**
All operations use flags (`-C`, explicit paths) to target the correct branch remotely.

---

## Required: Agent Provides These Commands at Session End

```md
## PowerShell Commit and Merge

Run these commands from main. Do not switch branches.

# 1. Stage and commit inside the worktree (without leaving main)
git -C <WORKTREE_PATH> add .
git -C <WORKTREE_PATH> commit -m "<TASK-ID>: <one-line summary of changes>"

# 2. Squash-merge the feature branch into main
git merge --squash <FEATURE_BRANCH>
git commit -m "<TASK-ID>: <one-line summary of changes>"

# 3. Clean up — remove worktree and delete feature branch
git worktree remove <WORKTREE_PATH> --force
git branch -D <FEATURE_BRANCH>
```

---

## Rules

- Always use `git -C <WORKTREE_PATH>` to operate on the worktree from main.
- Never tell the user to `cd` into the worktree directory.
- Never tell the user to `git checkout` the feature branch.
- Use `--squash` for all merges. No merge commits. No rebase.
- Commit message format: `<TASK-ID>: <concise imperative summary>`.
- Always include cleanup commands (step 3).
