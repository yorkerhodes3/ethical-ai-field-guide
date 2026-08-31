# Field guide backlog

## Status key

- **Ready:** dependencies are complete and work can begin.
- **Blocked:** an external or internal dependency is incomplete.
- **Done:** acceptance criteria are verified and persistent.

## FG-001 - Replace Legacy viewer links with the V3 semantic viewer

| Field | Value |
| --- | --- |
| Priority | P1 |
| Status | Done - August 30, 2026 |
| Original dependency | `yorkerhodes3/pageturn-book` V2-238 marked **Complete** with geometry-path promotion approved |
| Resolution | Repository owner explicitly accepted the current broad V3 beta for paper link-outs |
| Upstream epic | V2-230 through V2-238 |
| Current integration | All 21 CoLab publication links and all nine anchor-source links use canonical V3 routes |

The original backlog item required formal upstream promotion. The owner
subsequently reviewed the current V3 state and explicitly approved using it
for this field guide. The migration therefore records an authorized scope
change rather than incorrectly claiming upstream V2-238 is complete.

At migration time, upstream documented V3 as a broad beta across the full
22-volume shelf: 21 Ethical Tech CoLab publications plus *Plurality*. The
reader provides bounded chapter loading, canonical
`?book=<id>&chapter=<id>#<source-anchor>` locations, browser history,
per-publication typography, and sharing.

### Completed migration

- Replaced `readerBaseUrl` in `data/colab-library-manifest.json`.
- Replaced `COLAB_READER_BASE` and generated paper links in
  `docs/assets/content.js` and `docs/app.js`.
- Updated all 21 paper links in `course/colab-library-alignment.md`.
- Migrated chapter-specific *What Is Ethical AI?* references to canonical V3
  chapter and source-anchor locations.
- Added a pinned, nine-chapter *Human Choice: Source Guide* upstream for
  first-party analysis of sources without complete semantic editions.
- Routed all nine dashboard source cards through V3 while retaining separate
  original-publisher links for provenance and current-version checking.
- Preserved the upstream Legacy viewer as a separate rollback path.

Upstream references:

- https://github.com/yorkerhodes3/pageturn-book/blob/main/SEMANTIC-PAGE-TURN-GEOMETRY-PLAN.md
- https://github.com/yorkerhodes3/pageturn-book/blob/main/BACKLOG.md#v2-238---decide-geometry-path-promotion
- https://yorkerhodes3.github.io/pageturn-book/v3/

### Verification

- All 21 `?book=<id>` routes returned HTTP 200.
- All 21 routes initialized in fresh Chromium pages with
  `data-v3-ready="true"` and `aria-busy="false"`.
- Every initialized document title matched its selected publication.
- Chapter counts ranged from 7 to 20 and each publication composed a non-zero
  page set.
- All nine source-guide chapters initialized at their canonical
  `?book=human-choice-source-guide&chapter=<id>#<id>` locations.
- The field guide's automated checks reject regression to Legacy paper URLs.
- The field guide's automated checks require a V3 reader URL and declared
  reader mode for every anchor source.

The upstream formal promotion backlog remains authoritative for the reader
project itself; this completed item records only the field guide owner's
decision to adopt the current V3 beta for outbound paper links.
