# Research method, provenance, and limits

**Research date:** August 30, 2026
**Primary retrieval method:** Tavily Extract API
**Discovery and counterpoint:** Tavily Search API
**Secondary retrieval:** direct public web pages, public GitHub repository
content, and the public Google Docs export endpoint

## Method

### 1. Preserve the supplied source boundary

The nine supplied sources form the core corpus. Each receives a source brief
that identifies:

- genre and intended audience;
- central claims;
- prescriptions or proposed mechanisms;
- theory of power, agency, and governance;
- what is observed, asserted, imagined, or recommended;
- useful tensions and open questions;
- implications for teaching and public discussion.

### 2. Retrieve primary pages before searching for commentary

The primary URLs were submitted individually to Tavily Extract with advanced
extraction and Markdown output. All nine returned content. The Google document
was retrieved through its public HTML export URL because the normal edit page
returns only an unsupported-browser message to text clients.

The Gates Notes page blocks some generic fetchers with HTTP 403, but Tavily
Extract returned the article. This is one reason the corpus records retrieval
method rather than implying that every URL is equally accessible to every
reader or tool.

### 3. Use search as discovery, not proof

Ten Tavily advanced searches were used to locate:

- critiques and contextual readings for *AI 2027* and *AI 2040*;
- discussion of *Plurality* and RadicalxChange mechanisms;
- reactions to *Magnifica Humanitas* and the Gates essay;
- current UN AI-governance materials;
- evidence and disagreement on AI and labor;
- candidate books for the semester library.

AI-generated search answers were not treated as citations. Any retained claim
is either linked to the underlying result or presented as a question requiring
verification. Low-quality aggregators were not used as evidence.

### Alignment with the existing CoLab library

After the initial corpus analysis, the Ethical Tech CoLab chapter and public
book shelf were inspected to align the semester plan with the existing 21
publications. The chapter was retrieved through Tavily Extract. Publication
titles, page counts, groupings, subtitles, and thesis statements were checked
against the public `yorkerhodes3/pageturn-book` catalog and the pinned
`Ethical-Tech-CoLab/website` content revision
`b456e8e137a0b6ce9a51799b71c6091f5241b5d7`.

These publications are contextual teaching materials, not additions to the
nine-source comparative corpus. Their alignment is documented separately in
`course/colab-library-alignment.md`.

### 4. Code every statement by epistemic type

The project uses six labels:

| Label | Meaning | Example |
| --- | --- | --- |
| Observed fact | Directly checkable past or present condition | Publication date |
| Source claim | An author's empirical or causal assertion | Expected labor impact |
| Scenario | A constructed possible future | A treaty occurs in 2029 |
| Recommendation | A proposed course of action | Create transition institutions |
| Synthesis | This project's interpretation | The DAPPR framework |
| Question | A live uncertainty or decision crux | Can compute monitoring verify compliance? |

The labels constrain presentation, not truth. A source claim may be strong or
weak; an observed fact may still need a correction; a useful scenario need not
be likely.

### 5. Compare at the level of governing questions

The sources use incompatible genres: essay, executive summary, encyclical,
open book, nonprofit website, predictive scenario, policy scenario, and event
handout. They should not be averaged into a false consensus. Comparison is
therefore organized around common questions:

1. What is the problem?
2. Who or what has moral standing?
3. Where is power concentrated?
4. Who participates in setting ends?
5. What institution carries responsibility?
6. What remains reversible?
7. What evidence could change the view?

### 6. Separate synthesis from source attribution

DAPPR - dignity, agency, plurality, power, and reversibility - is original
synthesis for this project. Each lens is grounded in recurring source
concerns, but no source is described as endorsing the combined framework.

## Important limitations

### Source selection

The corpus is purposive, not representative. It contains several strongly
normative and future-oriented sources. It does not, by itself, represent the
full literatures on labor economics, AI safety, development, democratic
theory, Catholic social thought, or human rights.

### Future scenarios

*AI 2027* states that its purpose is predictive accuracy while acknowledging
high uncertainty and multiple possible futures. *AI 2040* states that Plan A
is primarily a recommendation expressed through a scenario. This project does
not convert either into a factual timeline.

### Institutional voice

The *What Is Ethical AI?* executive summary is analyzed as the text's
argument, not as an official position of NYU, the United Nations, or every
project mentioned in the underlying book.

### Religious and secular translation

*Magnifica Humanitas* grounds dignity in Christian anthropology. The project
draws public-reason bridges to human rights, labor, participation, and the
common good without erasing that theological foundation or implying that the
traditions are identical.

### Evidence freshness

Web pages can change. The citation ledger records an August 30, 2026 access
date and, where useful, section or paragraph anchors. Readers should re-check
time-sensitive policy, organizational, and forecast claims before reuse.

### Demonstrations

The interactive exercises are pedagogical models. They are not forecasting
systems, voting infrastructure, impact-assessment software, legal advice, or
compliance certification.

## Reproduction note

The raw Tavily responses contain full third-party pages and are not published
in this repository. That choice reduces copyright and staleness risk. The
repository publishes only original analysis, compact factual metadata, short
attributed quotations, and links back to the sources.
