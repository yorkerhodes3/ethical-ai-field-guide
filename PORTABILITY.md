# Portability guide

The repository is deliberately organized as a set of small, separable
publishing units. Moving a unit should not require adopting the dashboard or
the rest of the repository.

## Portable units

### Sourcebooks

Each file in `books/` is a self-contained Markdown teaching reader. It has:

- a promise to the reader and central thesis;
- a sequenced chapter plan;
- primary-source pathways;
- a studio exercise in each chapter;
- cautions or an expansion brief;
- related project materials and source links.

To move one into an Ethical Tech CoLab publishing repository, copy the file
and update only the relative links in its "Related project materials" section.
Primary-source links are absolute and do not need adjustment.

### Course package

Files in `course/` can be copied together or separately. The semester map does
not depend on a learning-management system. Assignments use open formats and
the browser demonstrations save only to a participant's own browser.

### Event briefs

Every file in `events/` is designed to stand alone. Each begins with a short
brief, then expands into prompts, tensions, and optional facilitation moves.
Copying or printing a single file will preserve its source links.

### Demonstrations

Each folder in `docs/demos/` is a dependency-free web page. Copy the folder,
retain its local CSS or JavaScript files, and change the "Back to field guide"
link if it is hosted elsewhere. There is no server-side storage.

### Dashboard

The whole `docs/` directory is a static site. It can be hosted by GitHub Pages,
Azure Static Web Apps, any object store, or a local HTTP server. No build step
is required.

## Content boundaries

The project keeps three kinds of material separate:

1. **Primary-source description** reports what a source says.
2. **Project synthesis** develops the DAPPR framework and comparative view.
3. **Teaching design** turns the material into sequences, exercises, and
   audience-specific conversations.

Preserve the labels when moving content. In particular, do not remove
"scenario" labels from the AI Futures Project material or present DAPPR as a
framework endorsed by the source authors.

## Suggested migration into a book renderer

1. Copy the selected file from `books/`.
2. Convert its title and metadata to the destination's front-matter format.
3. Keep heading IDs stable where the renderer permits.
4. Copy only the cited demo folder if the book will link to an exercise.
5. Run the destination repository's link and accessibility checks.
6. Add the destination URL to the citation ledger so future readers can locate
   the canonical version.
7. Confirm that the destination's content and code licenses match the owner's
   intended reuse terms.
