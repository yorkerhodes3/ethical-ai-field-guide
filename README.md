# The Human Choice

**AI, Power & Dignity Field Guide**

**Published dashboard:** https://yorkerhodes3.github.io/ethical-ai-field-guide/
**Public repository:** https://github.com/yorkerhodes3/ethical-ai-field-guide

A source-grounded briefing and teaching package for the NYU Ethical Tech
CoLab, AI-2040 discussions, public salons, and conversations at the UN General
Assembly and the Center for Human Dignity.

The project asks one governing question:

> How can societies remain the authors of the AI transition rather than merely
> its audience?

The answer developed across the materials is a five-part synthesis called
**DAPPR**: dignity, agency, plurality, power, and reversibility. DAPPR is an
interpretive framework created for this project, not a framework claimed by
any one source.

## Start here

- **Ten-minute orientation:** [`EXECUTIVE-BRIEF.md`](EXECUTIVE-BRIEF.md)
- **Public field guide:** the GitHub Pages site in [`docs/`](docs/)
- **Consolidated point of view:** [`research/consolidated-point-of-view.md`](research/consolidated-point-of-view.md)
- **Research package index:** [`research/README.md`](research/README.md)
- **Fourteen-week course studio:** [`course/semester-studio.md`](course/semester-studio.md)
- **Existing 21-book CoLab alignment:** [`course/colab-library-alignment.md`](course/colab-library-alignment.md)
- **Curated reading library:** [`course/reading-library.md`](course/reading-library.md)
- **AI-2040 meeting brief:** [`events/ai-2040-reading-group.md`](events/ai-2040-reading-group.md)
- **Salon discussion kit:** [`events/salon-discussion-kit.md`](events/salon-discussion-kit.md)
- **UNGA human dignity brief:** [`events/unga-human-dignity-brief.md`](events/unga-human-dignity-brief.md)
- **Citation ledger:** [`research/citation-ledger.md`](research/citation-ledger.md)
- **Research method and limits:** [`research/methodology.md`](research/methodology.md)
- **How to move individual parts:** [`PORTABILITY.md`](PORTABILITY.md)
- **Favicon design options:** [`docs/favicon-lab/`](docs/favicon-lab/)
- **Dependency-aware backlog:** [`BACKLOG.md`](BACKLOG.md)

## Source set

The analysis begins with nine supplied sources:

1. Bill Gates, "The turbulent AI era is here. The choices we make now are
   critical."
2. *What Is Ethical AI?*, executive summary.
3. Pope Leo XIV, *Magnifica Humanitas*.
4. The *Plurality* repository.
5. RadicalxChange.
6. Plurality.net.
7. *AI 2027*.
8. *AI 2040: Plan A*.
9. The supplied *AI 2040: Plan A - Reading Group* handout.

Primary pages were retrieved with the Tavily Extract API on August 30, 2026.
Tavily Search was also used for discovery and counterpoint. Claims in the
deliverables are anchored to primary sources wherever possible. Search
summaries are treated as discovery aids, not as authorities.

## Run locally

Prerequisite: Node.js 18 or later.

```powershell
npm run serve
```

Then open `http://localhost:4173`.

Run the repository checks with:

```powershell
npm test
```

No runtime dependencies, build step, analytics, cookies, or external fonts are
used.

All 21 Ethical Tech CoLab paper links open in the public V3 semantic geometry
viewer. The independently preserved Legacy viewer remains an upstream rollback
path rather than this field guide's default.

All nine anchor-source links also open in V3. Complete semantic editions open
directly where available; the remaining links open the corresponding chapter in
the portable *Human Choice: Source Guide*. Each dashboard card retains a
separate original-publisher link for provenance and current-version checking.

## What is portable

Every major output has its own directory and relative links:

| Directory | Purpose | Move independently? |
| --- | --- | --- |
| `books/` | Three sourcebook-ready teaching readers | Yes |
| `course/` | Semester map, library, and studio exercises | Yes |
| `events/` | Briefs for three distinct audiences | Yes |
| `research/` | Synthesis, source briefs, method, citations | Yes |
| `data/` | Machine-readable source provenance | Yes |
| `docs/demos/` | Standalone interactive teaching exercises | Yes |
| `docs/` | Complete static dashboard | Yes |

See [`PORTABILITY.md`](PORTABILITY.md) for the small set of links to update
after moving a directory.

## Epistemic labels

The dashboard and written materials distinguish:

- **Observed fact:** a dated event or directly checkable condition.
- **Source claim:** an author's empirical or causal assertion.
- **Scenario:** an intentionally constructed possible future.
- **Recommendation:** what an author argues should happen.
- **Synthesis:** an interpretation developed in this project.
- **Question:** an unresolved crux for discussion or research.

This distinction matters most for *AI 2027* and *AI 2040*. Their dated
narratives are not presented as established facts.

## Rights and attribution

No additional public reuse license is granted by this draft repository. A code
and content license should be chosen deliberately after review and before
inviting external reuse.

Third-party source text, names, marks, and linked materials remain subject to
their respective owners' terms. Short quotations are included for criticism,
commentary, and teaching with attribution.
