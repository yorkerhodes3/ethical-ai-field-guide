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
| Current integration | All 21 CoLab publication links use canonical V3 `?book=<id>` routes |

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
- The field guide's automated checks reject regression to Legacy paper URLs.

The upstream formal promotion backlog remains authoritative for the reader
project itself; this completed item records only the field guide owner's
decision to adopt the current V3 beta for outbound paper links.
