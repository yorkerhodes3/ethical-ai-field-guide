# Field guide backlog

## Status key

- **Ready:** dependencies are complete and work can begin.
- **Blocked:** an external or internal dependency is incomplete.
- **Done:** acceptance criteria are verified and persistent.

## FG-001 - Replace Legacy viewer links with the V3 semantic viewer

| Field | Value |
| --- | --- |
| Priority | P1 |
| Status | Blocked |
| Depends on | `yorkerhodes3/pageturn-book` V2-238 marked **Complete** with geometry-path promotion approved |
| Upstream epic | V2-230 through V2-238 |
| Current integration | 21 CoLab publication links use the independently preserved Legacy viewer |

Replace the field guide's Legacy viewer links with the V3 semantic viewer only
after the upstream semantic page-turn work is production-complete. The
existence of the isolated V3 visual prototype does **not** satisfy this
dependency.

### Dependency completion gate

The dependency is complete only when:

1. upstream items V2-232 through V2-237 pass their implementation,
   accessibility, browser, payload, and performance gates;
2. upstream V2-238 records an approved promotion decision and is marked
   **Complete**;
3. a stable public V3 semantic route exists for every publication linked from
   this field guide; and
4. the Legacy viewer remains available as a rollback path until the field
   guide migration is independently verified.

Upstream references:

- https://github.com/yorkerhodes3/pageturn-book/blob/main/SEMANTIC-PAGE-TURN-GEOMETRY-PLAN.md
- https://github.com/yorkerhodes3/pageturn-book/blob/main/BACKLOG.md#v2-238---decide-geometry-path-promotion
- https://yorkerhodes3.github.io/pageturn-book/v3/

As checked on August 30, 2026, V2-230 and V2-231 are complete; V2-232 through
V2-238 remain ready rather than complete.

### Migration scope

- Replace `readerBaseUrl` in `data/colab-library-manifest.json`.
- Replace `COLAB_READER_BASE` and generated reader links in
  `docs/assets/content.js`.
- Update the 21 links in `course/colab-library-alignment.md`.
- Update source and portability documentation that describes the viewer.
- Preserve publication slugs, semantic anchors, and accessible fallback
  behavior.

### Acceptance

- All 21 publication links open the production V3 semantic viewer.
- Every publication renders native semantic content without page-image
  dependence.
- Keyboard, focus, selection, reduced-motion, history, and responsive behavior
  pass the upstream promotion matrix.
- Link checks and a real-browser smoke test pass against the public routes.
- The migration is committed and the live GitHub Pages dashboard is verified.
