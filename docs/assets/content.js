/*!
 * content.js — Seed content for "The Human Choice / AI, Power & Dignity Field Guide"
 *
 * SOURCING RULES (see also the Methodology & Provenance section of index.html):
 *   1. Every claim below cites one or more entries in FIELD_GUIDE.sources via sourceIds.
 *   2. Every claim carries an epistemic `label`, one of:
 *        "observed-fact"  — a directly checkable past or present condition
 *                            (e.g. a publication, signature, or release date).
 *        "source-claim"   — an author's empirical, causal, or interpretive assertion.
 *        "scenario"       — an intentionally constructed possible future.
 *                            NEVER to be read or presented as a prediction of fact,
 *                            and never as an event that has occurred.
 *        "recommendation" — a proposed course of action a source argues for; not
 *                            adopted policy and not itself a dated event.
 *        "synthesis"      — this guide's own interpretive framing (e.g. the DAPPR
 *                            lens definitions). Not attributable to any single source.
 *        "question"       — an open discussion prompt, not a factual assertion.
 *   3. The nine anchor sources below form the comparative corpus. The Ethical Tech
 *      CoLab's existing 21-publication library, the external course reading shelf,
 *      and the project-library documents are supplemental teaching context — clearly
 *      separated from, and not folded into, the nine-source comparative corpus.
 *   4. Primary pages for the nine sources were retrieved with the Tavily Extract API
 *      on 2026-08-30 (advanced extraction, Markdown output). Tavily Search was used
 *      only for discovery and counterpoint; AI-generated search answers were not
 *      treated as citations. Raw third-party page extractions are not redistributed
 *      in this repository — only original analysis, compact metadata, short
 *      attributed quotations, and links back to the primary sources.
 */
(function (global) {
  "use strict";

  // Public GitHub repository that hosts the full project (this dashboard lives in
  // its docs/ folder). Used for "Project library" and audience-brief links.
  var REPO_BASE = "https://github.com/yorkerhodes3/ethical-ai-field-guide/blob/main/";
  var COLAB_READER_BASE = "https://yorkerhodes3.github.io/pageturn-book/v3/";
  var SOURCE_GUIDE_BOOK = "human-choice-source-guide";

  function sourceGuideUrl(chapter) {
    return COLAB_READER_BASE + "?book=" + SOURCE_GUIDE_BOOK +
      "&chapter=" + chapter + "#" + chapter;
  }

  var sources = [
    {
      id: "gates2026",
      shortName: "Gates, \u201CThe Turbulent AI Era\u201D",
      title: "The turbulent AI era is here. The choices we make now are critical.",
      author: "Bill Gates",
      org: "Gates Notes",
      date: "2026-08-26",
      url: "https://www.gatesnotes.com/work/make-ai-work-for-everyone/reader/a-turbulent-ai-era-and-critical-choices-to-make?WT.mc_id=20260826_ai-overture-2026-med-med",
      readerUrl: sourceGuideUrl("gates-turbulent-ai-era"),
      readerMode: "source-guide",
      type: "essay",
      typeLabel: "public policy essay",
      topics: ["work", "power", "risk", "governance"],
      audiences: ["ai2040", "salon", "unga"],
      summary:
        "A public essay arguing the AI transition could be among the most turbulent periods in modern history. Names job loss, misuse (fraud, cyberattacks, deepfakes), and the reshaping of human relationships as headline risks, and calls for deliberate transition planning \u2014 retraining, safety nets, \u201CHuman Reserved\u201D roles, and new coordinating institutions."
    },
    {
      id: "ethicalai",
      shortName: "What Is Ethical AI? (exec. summary)",
      title: "What Is Ethical AI? \u2014 Executive Summary",
      author: "Ethical Tech CoLab; NYU School of Professional Studies Center for Global Affairs, in collaboration with Microsoft",
      authorNote: "Canonical publication metadata gives institutional authorship; no individual author is named.",
      attributionBadge: "Institutional authorship",
      org: "Ethical Tech CoLab",
      date: "2026-07",
      dateLabel: "Edition 2026-07",
      url: "https://ethical-tech-colab.github.io/what-is-ethical-ai/",
      readerUrl: COLAB_READER_BASE + "?book=what-is-ethical-ai&chapter=executive-summary#executive-summary",
      readerMode: "full-source",
      type: "executive-summary",
      typeLabel: "book executive summary",
      topics: ["governance", "rights", "process"],
      audiences: ["ai2040", "salon", "unga"],
      summary:
        "A public executive summary that defines ethical AI institutionally: a lifecycle responsibility (design through decommissioning), grounded in a human-rights \u201Cfloor,\u201D an affirmative do-no-harm duty, and meaningful participation by the people affected by a system \u2014 not a one-time compliance checkbox."
    },
    {
      id: "magnifica2026",
      shortName: "Magnifica Humanitas",
      title: "Magnifica Humanitas",
      subtitle: "On Safeguarding the Human Person in the Time of Artificial Intelligence",
      author: "Pope Leo XIV",
      org: "The Holy See",
      date: "2026-05-15",
      dateLabel: "Signed 15 May 2026",
      url: "https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html",
      readerUrl: sourceGuideUrl("magnifica-humanitas"),
      readerMode: "source-guide",
      type: "encyclical",
      typeLabel: "encyclical",
      topics: ["dignity", "power", "labor", "truth"],
      audiences: ["salon", "unga"],
      summary:
        "An encyclical centering the intrinsic dignity of the human person as the standard for judging technological progress. Draws on the common good, subsidiarity, solidarity, and social justice; names truth, education, and work as goods AI can support or corrode; and calls for vigilance about the concentration of private digital power."
    },
    {
      id: "plurality-repo",
      shortName: "Plurality (GitHub repository)",
      title: "Plurality: The Future of Collaborative Technology and Democracy",
      subtitle: "Open collaborative repository",
      author: "E. Glen Weyl, Audrey Tang, and the Plurality Community",
      org: "GitHub \u2014 pluralitybook/plurality",
      date: "2026-07-12",
      dateLabel: "Release manifest 12 Jul 2026",
      dateNote: "Current repository release manifest is dated July 12, 2026 (source revision 8615885); the book also circulated publicly in 2024.",
      url: "https://github.com/pluralitybook/plurality",
      readerUrl: sourceGuideUrl("plurality-book-and-repository"),
      readerMode: "source-guide",
      license: "CC0-1.0",
      type: "repository",
      typeLabel: "open collaborative repository",
      topics: ["democracy", "collaboration", "governance"],
      audiences: ["ai2040", "salon"],
      summary:
        "The open, CC0-licensed GitHub repository behind the Plurality book: collaboratively authored source, translations, and governance for its argument that technology should support \u201Ccollaborative technology across difference\u201D rather than force sameness."
    },
    {
      id: "plurality-site",
      shortName: "Plurality.net",
      title: "Plurality.net",
      subtitle: "Public reading and distribution interface",
      author: "Plurality book project",
      org: "plurality.net",
      date: "ongoing",
      dateLabel: "Live reading interface",
      url: "https://plurality.net/",
      readerUrl: sourceGuideUrl("plurality-dot-net"),
      readerMode: "source-guide",
      relatedReaderUrl: COLAB_READER_BASE + "?book=plurality&chapter=1",
      relatedReaderLabel: "Read the full Plurality book in V3",
      type: "reading-interface",
      typeLabel: "public reading interface",
      topics: ["democracy", "collaboration"],
      audiences: ["ai2040", "salon"],
      summary:
        "The public web reading interface that distributes the Plurality book's chapters for free online reading, PDF, and ePub \u2014 distinct from, and downstream of, the underlying GitHub repository."
    },
    {
      id: "rxc",
      shortName: "RadicalxChange",
      title: "RadicalxChange",
      subtitle: "Quadratic Voting & Participatory Governance",
      author: "RadicalxChange Foundation",
      org: "radicalxchange.org",
      date: "ongoing",
      dateLabel: "Live site",
      url: "https://www.radicalxchange.org/",
      readerUrl: sourceGuideUrl("radicalxchange"),
      readerMode: "source-guide",
      type: "organization",
      typeLabel: "nonprofit website, mechanism library, and project portfolio",
      topics: ["democracy", "governance", "pilots"],
      audiences: ["ai2040", "salon"],
      summary:
        "A movement and foundation advancing participatory governance, running real-world pilots of plural and quadratic voting so people can express preference intensity within a bounded \u201Cvoice credit\u201D budget rather than casting a single flat vote."
    },
    {
      id: "ai2027",
      shortName: "AI 2027",
      title: "AI 2027",
      author: "Daniel Kokotajlo, Eli Lifland, Thomas Larsen, and Romeo Dean",
      authorNote: "Prose editing by Scott Alexander.",
      org: "AI Futures Project",
      date: "2025-04-03",
      dateLabel: "Published 3 Apr 2025",
      url: "https://ai-2027.com/",
      readerUrl: sourceGuideUrl("ai-2027"),
      readerMode: "source-guide",
      type: "scenario",
      typeLabel: "predictive scenario",
      topics: ["power", "risk", "forecasting"],
      audiences: ["ai2040", "unga"],
      summary:
        "A concrete, month-by-month predictive scenario running to 2027. The authors state their goal is predictive accuracy while explicitly acknowledging deep uncertainty, and note 2027 was their modal (most likely) year at publication, not a certainty. Splits into a \u201Crace\u201D branch and a \u201Cslowdown\u201D branch around a US\u2013China competition to superintelligence."
    },
    {
      id: "ai2040plana",
      shortName: "AI 2040: Plan A",
      title: "AI 2040: Plan A",
      author: "Thomas Larsen, Romeo Dean, Brendan Halstead, Eli Lifland, Ryan Greenblatt, and Daniel Kokotajlo",
      org: "AI Futures Project",
      date: "2026",
      dateLabel: "Published 2026",
      url: "https://ai-2040.com/",
      readerUrl: sourceGuideUrl("ai-2040-plan-a"),
      readerMode: "source-guide",
      type: "scenario-recommendation",
      typeLabel: "recommendation in scenario form",
      topics: ["power", "governance", "reversibility"],
      audiences: ["ai2040", "unga"],
      summary:
        "A follow-on to AI 2027. The authors state Plan A \u201Cis primarily a recommendation, not a prediction\u201D: a verified 2029 US\u2013China deal, total R&D transparency, managed diffusion, and a built-in reversibility mechanism \u2014 a scaling pause, later liftable only if verification and safety conditions are met. The downstream effects it describes are predictions conditional on adoption, not settled facts."
    },
    {
      id: "handout",
      shortName: "AI 2040 Reading-Group Handout",
      title: "AI 2040: Plan A \u2014 Reading Group",
      author: null,
      authorNote: "The public document does not state an author.",
      attributionBadge: "Author & date unstated",
      org: "Publicly shared Google Doc",
      date: null,
      dateLabel: "Undated ([DATE] placeholder)",
      dateNote: "The document contains a literal \u201C[DATE]\u201D placeholder rather than a stated publication date.",
      url: "https://docs.google.com/document/d/1JQRiPaIs8ouB9kUVEs-ht--jgEzxv-ty/edit",
      readerUrl: sourceGuideUrl("ai-2040-reading-group-handout"),
      readerMode: "source-guide",
      type: "handout",
      typeLabel: "event handout",
      topics: ["forecasting", "governance", "discussion"],
      audiences: ["ai2040", "salon", "unga"],
      summary:
        "A publicly shared discussion handout organizing seminar conversation around five elements: plausible timelines to transformative AI, the substance of the proposed US\u2013China deal, rival plans to Plan A, plausible failure modes, and five concrete forecasts worth tracking over time."
    }
  ];

  // DAPPR \u2014 Dignity / Agency / Plurality / Power / Reversibility.
  // This five-lens framework is THIS GUIDE'S OWN SYNTHESIS for reading across the
  // sources above. It is not proposed by, or attributed to, any single anchor source.
  var lenses = [
    {
      id: "dignity",
      name: "Dignity",
      tagline: "People as ends, not inputs",
      description:
        "Are people treated as ends, never merely as data, labor, targets, or risk scores? Whether a system treats people as bearers of intrinsic worth throughout its lifecycle.",
      groundedIn: ["magnifica2026", "ethicalai", "gates2026"]
    },
    {
      id: "agency",
      name: "Agency",
      tagline: "The retained capacity to choose",
      description:
        "Can people understand, refuse, contest, alter, or exit the arrangement? The lived complement to formal rights \u2014 notice, override, appeal, and meaningful choice.",
      groundedIn: ["gates2026", "ethicalai", "plurality-repo"]
    },
    {
      id: "plurality",
      name: "Plurality",
      tagline: "Designing for real difference",
      description:
        "Can people cooperate across difference without forced sameness? Whether systems represent genuine differences of value rather than one dominant voice or a false average.",
      groundedIn: ["plurality-repo", "plurality-site", "rxc", "magnifica2026"]
    },
    {
      id: "power",
      name: "Power",
      tagline: "Who holds the decision rights",
      description:
        "Who sets the ends, controls infrastructure, captures gains, and bears liability? Who holds effective decision rights over frontier AI development, deployment, and correction.",
      groundedIn: ["magnifica2026", "ai2027", "ai2040plana", "gates2026"]
    },
    {
      id: "reversibility",
      name: "Reversibility",
      tagline: "Can we still change course?",
      description:
        "Can society pause, correct, repair, or withdraw before harm becomes locked in? Whether a trajectory preserves the ability to slow down, correct course, or undo a decision.",
      groundedIn: ["ai2040plana", "ai2027", "gates2026"]
    }
  ];

  var claims = [
    // Dignity
    { id: "D1", label: "source-claim", lensIds: ["dignity"], topics: ["dignity", "power"], sourceIds: ["magnifica2026"],
      text: "Magnifica Humanitas grounds AI ethics in the intrinsic dignity of the human person as the primary criterion for judging technological progress \u2014 no efficiency gain overrides this worth." },
    { id: "D2", label: "source-claim", lensIds: ["dignity"], topics: ["rights", "governance"], sourceIds: ["ethicalai"],
      text: "The Ethical AI executive summary sets a \u201Chuman rights floor\u201D beneath which no AI system's operation may fall, treated as a non-negotiable baseline across the whole AI lifecycle." },
    { id: "D3", label: "source-claim", lensIds: ["dignity"], topics: ["work", "risk"], sourceIds: ["gates2026"],
      text: "Gates names the reshaping of human relationships \u2014 including AI companionship affecting how, especially young, people form social bonds \u2014 as one of his three headline risks, alongside job loss and misuse." },
    { id: "D4", label: "synthesis", lensIds: ["dignity"], topics: [], sourceIds: ["magnifica2026", "ethicalai", "gates2026"],
      text: "In this guide's synthesis, Dignity means treating people as ends in themselves across an AI system's lifecycle \u2014 never merely as data, labor, targets, or risk scores." },

    // Agency
    { id: "A1", label: "source-claim", lensIds: ["agency"], topics: ["work", "governance"], sourceIds: ["gates2026"],
      text: "Gates proposes deliberately reserving some jobs and activities for people alone \u2014 his term is \u201CHuman Reserved\u201D \u2014 plus retraining pathways and updated safety nets, even where technical substitution is possible." },
    { id: "A2", label: "source-claim", lensIds: ["agency"], topics: ["process", "rights"], sourceIds: ["ethicalai"],
      text: "The executive summary requires \u201Caffected participation\u201D: meaningful involvement of people affected by an AI system in its design, deployment, and evaluation, not just after-the-fact notice." },
    { id: "A3", label: "source-claim", lensIds: ["agency", "plurality"], topics: ["collaboration", "democracy"], sourceIds: ["plurality-repo"],
      text: "Plurality frames technology as something to be authored collaboratively \u201Cacross difference\u201D rather than imposed top-down, positioning ordinary people as co-authors of the systems that govern them." },
    { id: "A4", label: "synthesis", lensIds: ["agency"], topics: [], sourceIds: ["gates2026", "ethicalai", "plurality-repo"],
      text: "Agency, in our synthesis, is the retained capacity of workers, citizens, and communities to question, redirect, or opt out of AI-driven change \u2014 the practical complement to formal rights." },

    // Plurality
    { id: "P1", label: "source-claim", lensIds: ["plurality"], topics: ["democracy", "collaboration"], sourceIds: ["plurality-repo"],
      text: "Plurality advocates \u201Ccollaborative technology across difference\u201D and open, collaboratively authored digital-democracy tools rather than one-size-fits-all platforms." },
    { id: "P2", label: "source-claim", lensIds: ["plurality"], topics: ["democracy", "pilots"], sourceIds: ["rxc"],
      text: "RadicalxChange has run real-world pilots of plural and quadratic voting (for example, participatory-budgeting exercises) to test mechanisms that let people express preference intensity, not just a single vote." },
    { id: "P3", label: "source-claim", lensIds: ["plurality", "power"], topics: ["governance"], sourceIds: ["magnifica2026"],
      text: "Magnifica Humanitas invokes subsidiarity \u2014 decisions made at the most local competent level \u2014 as a check against both state and private overreach in digital governance." },
    { id: "P4", label: "synthesis", lensIds: ["plurality"], topics: [], sourceIds: ["plurality-repo", "rxc", "magnifica2026"],
      text: "Plurality, in our synthesis, is the design commitment to represent genuine differences of value and interest rather than collapsing them into a single optimized average or dominant voice." },
    { id: "P5", label: "source-claim", lensIds: ["plurality"], topics: ["collaboration"], sourceIds: ["plurality-repo", "plurality-site"],
      text: "The Plurality repository is an open, CC0-licensed, collaboratively authored, community-translated text; Plurality.net is the public reading interface that distributes it for free online, PDF, and ePub reading." },
    { id: "P6", label: "source-claim", lensIds: ["plurality", "agency"], topics: ["democracy", "pilots"], sourceIds: ["rxc"],
      text: "RadicalxChange positions quadratic voting as a way to express preference intensity within a bounded \u201Cvoice credit\u201D budget, aiming to temper both majority tyranny and capture by concentrated interests." },

    // Power
    { id: "Pw1", label: "source-claim", lensIds: ["power", "dignity"], topics: ["power", "governance"], sourceIds: ["magnifica2026"],
      text: "The encyclical explicitly warns about the concentration of digital power in a small number of private hands, treating this as a matter of social justice rather than only market competition." },
    { id: "Pw2", label: "scenario", lensIds: ["power", "reversibility"], topics: ["risk", "forecasting"], sourceIds: ["ai2027"],
      text: "AI 2027 states its goal is predictive accuracy while explicitly acknowledging deep uncertainty. Within its narrative, a \u201Crace\u201D branch depicts concentrated frontier capability amid intense US\u2013China competition leading to an unaligned system progressively disempowering human oversight \u2014 a predictive scenario, not a settled prediction of fact." },
    { id: "Pw3", label: "recommendation", lensIds: ["power", "reversibility"], topics: ["governance"], sourceIds: ["ai2040plana"],
      text: "AI 2040: Plan A recommends a verified US\u2013China agreement plus \u201Ctotal R&D transparency\u201D to convert a unilateral capability race into a jointly monitored, reversible process." },
    { id: "Pw4", label: "source-claim", lensIds: ["power"], topics: ["governance"], sourceIds: ["gates2026"],
      text: "Gates argues existing institutions are not built for AI-era power shifts and proposes new national coordinating bodies plus international coordination to manage them." },
    { id: "Pw5", label: "synthesis", lensIds: ["power"], topics: [], sourceIds: ["magnifica2026", "ai2027", "ai2040plana", "gates2026"],
      text: "Power, in our synthesis, tracks who sets the ends, controls infrastructure, captures gains, and bears liability for frontier AI \u2014 and how concentrated or contestable that power is." },

    // Reversibility
    { id: "R1", label: "recommendation", lensIds: ["reversibility", "power"], topics: ["governance"], sourceIds: ["ai2040plana"],
      text: "Plan A's design principle is reversibility: it recommends a pause on scaling toward superintelligence that can later be lifted only once verification and safety conditions are met \u2014 not a one-way, irreversible commitment." },
    { id: "R2", label: "scenario", lensIds: ["reversibility"], topics: ["risk", "forecasting"], sourceIds: ["ai2027"],
      text: "AI 2027's two branches (race vs. slowdown) are a predictive scenario the authors offer to show how differently reversible or irreversible the same starting point could become \u2014 they are not a forecast the authors present as certain." },
    { id: "R3", label: "source-claim", lensIds: ["reversibility", "agency"], topics: ["work"], sourceIds: ["gates2026"],
      text: "Gates frames the current moment as a narrow window for transition planning before AI-driven disruption becomes harder to reverse or redirect." },
    { id: "R4", label: "synthesis", lensIds: ["reversibility"], topics: [], sourceIds: ["ai2040plana", "ai2027", "gates2026"],
      text: "Reversibility, in our synthesis, asks whether an AI trajectory preserves future choice \u2014 the ability to slow down, correct course, or undo a decision \u2014 or forecloses it." },

    // Cross-cutting / ethical-AI lifecycle / handout / observed facts
    { id: "E1", label: "source-claim", lensIds: ["dignity", "agency"], topics: ["governance", "process"], sourceIds: ["ethicalai"],
      text: "The executive summary defines ethical AI institutionally as a lifecycle responsibility \u2014 spanning design, data, deployment, monitoring, and decommissioning \u2014 rather than a one-time compliance check." },
    { id: "E2", label: "source-claim", lensIds: ["dignity"], topics: ["rights"], sourceIds: ["ethicalai"],
      text: "It grounds \u201Cdo no harm\u201D as an affirmative duty to anticipate and mitigate foreseeable harms, not merely to avoid intentional wrongdoing." },
    { id: "E3", label: "observed-fact", lensIds: [], topics: ["governance"], sourceIds: ["ethicalai"],
      text: "The executive summary is publicly hosted (no login or paywall) and its publication metadata credits institutional authorship \u2014 Ethical Tech CoLab and the NYU SPS Center for Global Affairs, in collaboration with Microsoft \u2014 with no individual author named." },
    { id: "M1", label: "source-claim", lensIds: ["dignity", "power"], topics: ["truth", "work"], sourceIds: ["magnifica2026"],
      text: "The encyclical names truth, education, and work as goods that AI can support or corrode, and calls for vigilance rather than either techno-optimism or blanket rejection." },
    { id: "M2", label: "source-claim", lensIds: ["dignity", "plurality"], topics: ["governance"], sourceIds: ["magnifica2026"],
      text: "It grounds its claims in solidarity and the common good, arguing AI governance should be judged by its effect on the most vulnerable, not only aggregate welfare." },
    { id: "Gm1", label: "source-claim", lensIds: ["power", "dignity"], topics: ["risk"], sourceIds: ["gates2026"],
      text: "Gates lists AI-enabled misuse \u2014 fraud, cyberattacks, deepfakes, and disinformation \u2014 as a second headline risk category alongside job loss." },
    { id: "PR1", label: "observed-fact", lensIds: [], topics: ["collaboration"], sourceIds: ["plurality-repo"],
      text: "The Plurality repository is released under a CC0-1.0 public-domain dedication; its current release manifest is dated July 12, 2026 (source revision 8615885), and the book also circulated publicly in 2024." },
    { id: "A2027-1", label: "source-claim", lensIds: ["reversibility"], topics: ["forecasting"], sourceIds: ["ai2027"],
      text: "AI 2027's authors state their goal is predictive accuracy and that 2027 was their modal (most likely) year at time of publication, not a certainty; they have since published later, updated forecasts." },
    { id: "A2040-1", label: "source-claim", lensIds: ["reversibility", "power"], topics: ["governance"], sourceIds: ["ai2040plana"],
      text: "\u201CPlan A is primarily a recommendation, not a prediction,\u201D the authors state; the scenario's downstream effects are described as predictions conditional on the plan being adopted, not settled outcomes." },
    { id: "H1", label: "source-claim", lensIds: ["reversibility", "power"], topics: ["forecasting", "governance"], sourceIds: ["handout"],
      text: "The publicly shared discussion handout structures seminar conversation around five elements: plausible timelines to transformative AI, the substance of the US\u2013China \u201Cdeal,\u201D rival plans to Plan A, plausible failure modes, and five forecasts to track." },
    { id: "H2", label: "observed-fact", lensIds: [], topics: ["forecasting"], sourceIds: ["handout"],
      text: "The publicly posted handout does not name an author and contains a literal \u201C[DATE]\u201D placeholder in place of a publication date." },
    { id: "H3", label: "question", lensIds: ["reversibility"], topics: ["forecasting"], sourceIds: ["handout"],
      text: "Which of the handout's five tracked forecasts would most change your assessment of Plan A's feasibility if it resolved differently than expected?" }
  ];

  // Dated / scenario timeline. Publication, signature, and release events are
  // "observed-fact" (directly checkable, already occurred). The 2029/2035/2040
  // Plan A milestones are "scenario" elements \u2014 they have NOT occurred and are
  // never to be read as recommendations-as-events or as facts.
  var timeline = [
    { id: "t1", date: "2025-04-03", display: "3 Apr 2025", label: "observed-fact", sourceIds: ["ai2027"],
      title: "AI 2027 is published", text: "AI Futures Project publishes AI 2027, a concrete predictive scenario running to 2027, stating its goal as predictive accuracy alongside explicit uncertainty." },
    { id: "t2", date: "2026-05-15", display: "15 May 2026", label: "observed-fact", sourceIds: ["magnifica2026"],
      title: "Magnifica Humanitas is signed", text: "Pope Leo XIV's encyclical is signed, centering human dignity, subsidiarity, solidarity, and vigilance about concentrated private digital power." },
    { id: "t3", date: "2026-07-12", display: "12 Jul 2026", label: "observed-fact", sourceIds: ["plurality-repo"],
      title: "Plurality repository's current release", text: "The open, CC0-licensed Plurality GitHub repository's release manifest is dated July 12, 2026 (source revision 8615885); the book also circulated publicly in 2024." },
    { id: "t4", date: "2026-08-26", display: "26 Aug 2026", label: "observed-fact", sourceIds: ["gates2026"],
      title: "Gates publishes \u201CThe turbulent AI era\u201D", text: "Bill Gates argues the AI transition may be extraordinarily turbulent and calls for transition planning around job loss, misuse, and relationship-development risks." },
    { id: "t5", date: "2027-09-01", display: "\u2248 Sep 2027 (scenario fork)", label: "scenario", sourceIds: ["ai2027"],
      title: "AI 2027's race / slowdown fork", text: "AI 2027 depicts a branch point where events diverge toward a \u201Crace\u201D or \u201Cslowdown\u201D ending. A predictive scenario the authors offer for its stated goal of predictive accuracy \u2014 not an event that has occurred." },
    { id: "t6", date: "2029-01-01", display: "2029 (scenario)", label: "scenario", sourceIds: ["ai2040plana"],
      title: "Plan A's narrative: a verified US\u2013China deal", text: "Within Plan A's scenario narrative, a verified agreement plus total R&D transparency is depicted occurring in 2029. This has not happened; it illustrates the plan's recommended mechanism, not a dated fact." },
    { id: "t7", date: "2035-01-01", display: "2035 (scenario)", label: "scenario", sourceIds: ["ai2040plana"],
      title: "Plan A's narrative: a pause on scaling", text: "Plan A's narrative depicts a pause on scaling toward superintelligence holding through 2035. This is a scenario element illustrating the recommended reversibility mechanism, not an occurred event." },
    { id: "t8", date: "2040-01-01", display: "2040 (scenario)", label: "scenario", sourceIds: ["ai2040plana"],
      title: "Plan A's narrative: a conditional \u201Cunpause\u201D", text: "Plan A's narrative depicts scaling resuming in 2040 only if verification and safety conditions are met. A scenario element, not a prediction the authors present as fact \u2014 they state Plan A is primarily a recommendation." },
    { id: "t9", date: "1900-01-01", display: "Ongoing", label: "source-claim", sourceIds: ["rxc"],
      title: "RadicalxChange's plural-voting pilots", text: "RadicalxChange continues to run and refine real-world plural and quadratic voting pilots outside any single dated event." }
  ];

  // Canonical 14-week sequence, adapted from course/semester-studio.md (Ethical
  // Tech CoLab: AI, Power, and Human Choice). "colabCase" references the existing
  // 21-publication CoLab library (supplemental teaching context, not part of the
  // nine-source comparative corpus).
  var courseWeeks = [
    { week: 1, title: "Power before principles",
      question: "Why does an ethics course begin with power rather than a list of principles?",
      readings: ["What Is Ethical AI?, \u201CExecutive Summary\u201D and \u201CHumanity's Relationship with Power\u201D", "Gates, \u201CThe turbulent AI era is here,\u201D opening through \u201CThis time really is different\u201D"],
      colabCase: "What Is Ethical AI? establishes the vocabulary for the rest of the library.",
      studio: "Build a power map for a familiar AI product: goals, capital, compute, data, labor, distribution, affected non-users, regulators, and routes to remedy.",
      sourceIds: ["ethicalai", "gates2026"], lensIds: ["power"] },
    { week: 2, title: "What ethics is for",
      question: "What can ethical reasoning contribute that law, technical performance, and market choice cannot?",
      readings: ["What Is Ethical AI?, \u201CWhat Is Ethics?,\u201D \u201CWhy Humanity Created Ethics,\u201D and \u201CFrom Custom to Universal Ethics\u201D", "Coeckelbergh, AI Ethics (selected chapter)", "Vallor, Technology and the Virtues (selected chapter)"],
      colabCase: null,
      studio: "Analyze one case through five ethical traditions \u2014 consequences, duties, rights, virtues, and care \u2014 stating what each lens reveals, hides, and would need as evidence.",
      sourceIds: ["ethicalai"], lensIds: ["dignity", "agency"] },
    { week: 3, title: "Dignity, rights, and the common good",
      question: "What does human dignity rule out before benefits and risks are balanced?",
      readings: ["Magnifica Humanitas, introduction and chapter two (dignity, human rights, common good, subsidiarity, solidarity, social justice), \u00A7\u00A790\u2013106", "Universal Declaration of Human Rights, preamble and selected articles", "What Is Ethical AI?, \u201CHuman Rights Foundations\u201D"],
      colabCase: null,
      studio: "Use the Dignity & Agency Audit on a case involving automated eligibility, migration, education, or health. The score is a prompt for inquiry, not a certification.",
      sourceIds: ["magnifica2026", "ethicalai"], lensIds: ["dignity"], demo: "dignity-agency-audit" },
    { week: 4, title: "Systems are made ethical by institutions",
      question: "Where does responsibility live when no single model or actor determines the outcome?",
      readings: ["What Is Ethical AI?, \u201CWhat Is Ethical Tech?,\u201D \u201CWhat Is Ethical AI?,\u201D and \u201CThe Rise of Responsible AI\u201D", "NIST AI Risk Management Framework (selected sections)", "Elish, \u201CMoral Crumple Zones\u201D"],
      colabCase: "AI Model Performance, The Agentic Behavior Observatory, and The Digital Provenance Passport.",
      studio: "Create a lifecycle accountability chain from problem framing through retirement; every stage names a decision owner, evidence, affected participants, escalation path, and stop condition.",
      sourceIds: ["ethicalai"], lensIds: ["power", "agency"] },
    { week: 5, title: "Data, classification, and extraction",
      question: "What histories and labor disappear when an AI system is presented as an autonomous intelligence?",
      readings: ["Crawford, Atlas of AI (selected chapters)", "D'Ignazio & Klein, Data Feminism (selected chapters)", "Noble, Algorithms of Oppression (selected chapter)"],
      colabCase: "AI's Carbon Footprint, Provenance Search, and VANGO.",
      studio: "Produce a dataset genealogy and \u201Cmissing persons\u201D register for a proposed system, including who could not realistically consent.",
      sourceIds: [], lensIds: ["power", "dignity"] },
    { week: 6, title: "Humanitarian AI and radical asymmetry",
      question: "What changes when the person exposed to a system cannot walk away, vote out the deployer, or become a customer?",
      readings: ["What Is Ethical AI?, \u201CThe Historical Evolution of AI in Humanitarian Work\u201D and \u201CWhy Humanitarian AI Is Fundamentally Different\u201D", "ICRC or UN guidance relevant to the selected case", "Optional: Eubanks, Automating Inequality (selected case)"],
      colabCase: "CERAI \u2192 Evacuation Inform Index \u2192 ERCF \u2192 Evacuation Simulator \u2192 ERUS \u2192 HASTE \u2192 Mariupol Severity Model \u2192 After the Corridor.",
      studio: "A \u201Cdo no harm\u201D pre-mortem: write the incident report one year after a deployment failed, then design the decision gate that could have prevented it.",
      sourceIds: ["ethicalai"], lensIds: ["dignity", "agency"] },
    { week: 7, title: "Plurality as a theory of technology",
      question: "Can technology make difference a resource for cooperation instead of a problem to be compressed?",
      readings: ["Weyl, Tang & the Plurality Community, Plurality: Preface (labeled \u201CSeeing Plural\u201D in the shelf navigation), \u201CA View from Yushan,\u201D and \u201CWhat is Plurality?\u201D", "Allen, selected writing on connected society or democracy"],
      colabCase: "The Evacuation Simulator \u2014 does a model preserve social difference or turn relationships into fixed behavior parameters?",
      studio: "Map a contested issue as overlapping publics rather than two opposing camps; identify bridging statements acceptable for different reasons.",
      sourceIds: ["plurality-repo"], lensIds: ["plurality"] },
    { week: 8, title: "Voice, mechanism, and agenda power",
      question: "Does a more expressive vote create a more democratic decision?",
      readings: ["Plurality, \u201CAugmented Deliberation,\u201D \u201CPlural Voting,\u201D and \u201CSocial Markets\u201D", "RadicalxChange, \u201CQuadratic Voting\u201D and one civic case study", "Hasen, \u201CQV or Not QV?\u201D or another critical treatment"],
      colabCase: "The Diplomatic Simulator: compares plural voting's aggregation with a tool that preserves rounds, roles, and negotiation records without a ground truth.",
      studio: "Run the Plural Voice Lab twice: round one accepts the supplied agenda; round two lets a different group choose the options. Compare how agenda design changes the result.",
      sourceIds: ["plurality-repo", "rxc"], lensIds: ["plurality", "power"], demo: "plural-voice-lab" },
    { week: 9, title: "Work, distribution, and meaning",
      question: "If AI creates abundance while reducing paid work, what institutions connect people to income, contribution, status, and community?",
      readings: ["Gates, sections on job loss and preparation", "Magnifica Humanitas, \u201CThe dignity of work at a time of digital transition\u201D", "Acemoglu & Johnson, Power and Progress (selected chapters)"],
      colabCase: "ERCF and After the Corridor expose what financial models can support and what human or legal value they cannot price.",
      studio: "Negotiate a local AI transition compact among workers, students, employers, government, educators, and people outside formal employment.",
      sourceIds: ["gates2026", "magnifica2026"], lensIds: ["agency", "power"] },
    { week: 10, title: "Truth, attention, and human relationships",
      question: "What must digital systems protect if truth and relationship are common goods rather than content categories?",
      readings: ["Magnifica Humanitas, \u00A7\u00A7132\u2013147", "Gates, \u201CAI could stunt our kids' development and replace human relationships\u201D", "One empirical study on AI companions, attention, or learning selected close to the class date"],
      colabCase: "AI-Powered Research Questions and VANGO contrast generative assistance with a tool that intentionally refuses to infer beyond one narrow purpose.",
      studio: "Audit the \u201Ccommunication ecology\u201D around a platform: ranking, business model, provenance, friction, verification, community institutions, and protections for minors.",
      sourceIds: ["magnifica2026", "gates2026"], lensIds: ["dignity", "agency"] },
    { week: 11, title: "Forecast literacy and AI 2027",
      question: "How can a vivid scenario improve judgment without capturing it?",
      readings: ["AI 2027, front matter, uncertainty notes, 2025\u20132027 sequence, and both endings", "Selected forecast and takeoff supplements", "Tetlock & Gardner, Superforecasting (selected chapter)"],
      colabCase: "ERUS makes uncertainty manipulable; The Agentic Behavior Observatory audits model populations; The Only Winning Move shows literal goal pursuit can be dangerous without malice.",
      studio: "Build an assumption ledger: for each causal step, record a base rate or evidence proxy, a leading indicator, a disconfirming observation, and the next downstream claim that would change.",
      sourceIds: ["ai2027"], lensIds: ["reversibility", "power"], demo: "scenario-scrutiny" },
    { week: 12, title: "AI 2040 and scenario scrutiny",
      question: "Can radical transparency make a superintelligence race governable without producing new forms of concentrated power?",
      readings: ["AI 2040: Plan A, front matter, \u201C2029: Choose a Path,\u201D 2035 pause, 2040 handoff, and verification/transparency supplements", "AI 2040: Plan A \u2014 Reading Group handout", "A critical response focused on verification, geopolitical inclusion, or transparency's security tradeoffs"],
      colabCase: "The Diplomatic Simulator rehearses Plan A with additional delegations while preserving the disclaimer that a simulation is not a forecast and has no ground truth.",
      studio: "Use the Scenario Scrutiny Canvas: every team writes success and failure branches for Plan A or a rival plan, including third-country agency and a remedy for people who never consented to the bargain.",
      sourceIds: ["ai2040plana", "handout"], lensIds: ["reversibility", "power"] },
    { week: 13, title: "Multilateral governance and legitimate scale",
      question: "What can global institutions do that firms, cities, and states cannot \u2014 and what should remain closer to affected communities?",
      readings: ["What Is Ethical AI?, \u201CThe International Affairs Context\u201D and \u201CThe UN System's Evolving Approach to AI\u201D", "Global Digital Compact, selected commitments", "Magnifica Humanitas, sections on diplomacy and multilateralism"],
      colabCase: "After the Corridor and the Forced Labor Structural Risk Index test whether global governance reaches people through rights, information, and capable institutions.",
      studio: "Design a two-level governance arrangement: a global rights and monitoring floor plus local participatory control, with conflicts and an appeals path between levels.",
      sourceIds: ["ethicalai", "magnifica2026"], lensIds: ["power", "plurality"] },
    { week: 14, title: "A constitution for human agency",
      question: "What must remain true of people and institutions even if model capabilities change radically?",
      readings: ["Revisit the executive summaries and each student's assumption ledger", "Consolidated DAPPR point of view", "Student-selected source that most strongly challenges the course synthesis"],
      colabCase: "Each team selects one of the 21 CoLab publications and shows how its explicit limit, refusal, or uncertainty should become an article in the final constitution.",
      studio: "Studio and public salon: teams present an \u201CAI constitution\u201D for a chosen domain, each article naming a right or duty, institution, evidence source, enforcement path, review date, and repair mechanism.",
      sourceIds: [], lensIds: ["dignity", "agency", "plurality", "power", "reversibility"] }
  ];

  var audiences = [
    {
      id: "ai2040",
      name: "AI-2040",
      tagline: "Scenario planners & forecasters",
      framing:
        "Steal the method, not necessarily the conclusion. Plan A's scenario scrutiny is valuable; its missing layer is legitimacy. Verification among great powers does not tell us who may set the threshold, whose security counts, or what authority humanity may never hand off.",
      framingSource: "Quoted from the project's \u201CWhat to say in each room\u201D guidance.",
      emphasisLensIds: ["power", "reversibility"],
      highlightSourceIds: ["ai2027", "ai2040plana", "handout"],
      briefPath: "events/ai-2040-reading-group.md",
      briefLabel: "Full AI-2040 meeting brief"
    },
    {
      id: "salon",
      name: "Salon",
      tagline: "Public discussion / values-first audience",
      framing:
        "The useful divide is not optimism versus pessimism. It is passive inevitability versus institutional authorship: what should we enable, what should we reserve for people, who decides, and what must remain reversible?",
      framingSource: "Quoted from the project's \u201CWhat to say in each room\u201D guidance.",
      emphasisLensIds: ["dignity", "agency", "plurality"],
      highlightSourceIds: ["magnifica2026", "plurality-repo", "gates2026"],
      briefPath: "events/salon-discussion-kit.md",
      briefLabel: "Full salon discussion kit"
    },
    {
      id: "unga",
      name: "UNGA",
      tagline: "Policy & diplomatic audience",
      framing:
        "Human dignity must become decision power: a rights floor, meaningful participation, public capacity, contestability, remedy, and multilateral institutions in which countries and communities outside the frontier are authors rather than rule-takers.",
      framingSource: "Quoted from the project's \u201CWhat to say in each room\u201D guidance.",
      emphasisLensIds: ["power", "reversibility"],
      highlightSourceIds: ["ai2040plana", "magnifica2026", "gates2026"],
      briefPath: "events/unga-human-dignity-brief.md",
      briefLabel: "Full UNGA human dignity brief"
    }
  ];

  var prompts = [
    { id: "q1", lensIds: ["dignity"], sourceIds: ["magnifica2026", "ethicalai"], text: "Where in your own institution would a genuine \u201Chuman rights floor\u201D for AI use actually bind \u2014 and where would it currently be ignored?" },
    { id: "q2", lensIds: ["agency"], sourceIds: ["gates2026"], text: "What would credible transition planning for job displacement look like in your sector, concretely, in the next two years?" },
    { id: "q3", lensIds: ["plurality"], sourceIds: ["plurality-repo", "rxc"], text: "Where could a plural or quadratic voting mechanism improve a decision your community already makes by simple majority?" },
    { id: "q4", lensIds: ["power"], sourceIds: ["magnifica2026", "gates2026"], text: "Is concentrated private control of frontier AI best addressed by new public institutions, distributed governance, or both?" },
    { id: "q5", lensIds: ["reversibility"], sourceIds: ["ai2040plana"], text: "What would make a proposed pause on scaling credible and verifiable, rather than symbolic \u2014 and who certifies the certifiers?" },
    { id: "q6", lensIds: ["reversibility", "power"], sourceIds: ["ai2027"], text: "AI 2027 states its goal is predictive accuracy while acknowledging deep uncertainty. What is gained, and what is risked, by reasoning from a concrete scenario rather than an abstract warning?" },
    { id: "q7", lensIds: ["agency", "dignity"], sourceIds: ["gates2026"], text: "Gates raises AI's effect on human relationship-formation as a headline risk. What would evidence of harm \u2014 versus mere novelty \u2014 look like here?" },
    { id: "q8", lensIds: ["power", "reversibility"], sourceIds: ["handout"], text: "Of the handout's rival plans to Plan A, which best preserves reversibility if its central assumption turns out wrong?" },
    { id: "q9", lensIds: ["plurality", "agency"], sourceIds: ["plurality-repo", "plurality-site"], text: "What would it mean for your own community to be a co-author of the AI systems it uses, rather than only a user of them?" },
    { id: "q10", lensIds: ["dignity", "power"], sourceIds: ["magnifica2026"], text: "How should subsidiarity \u2014 deciding at the most local competent level \u2014 apply to a technology whose infrastructure is inherently global?" },
    { id: "q11", lensIds: ["reversibility", "power"], sourceIds: ["ai2040plana"], text: "Plan A's own supplements estimate a substantial chance the treaty eventually breaks down. What would make the plan still worth pursuing even if it later fails?" }
  ];

  // Comparison matrix: one row per source (nine rows), adapted from the "At a
  // glance" table in research/comparison-matrix.md.
  var comparisonMatrix = {
    dimensions: ["Genre / posture", "Primary problem", "Human agency", "Main governor", "Greatest contribution", "Principal blind spot"],
    rows: [
      { sourceId: "gates2026", cells: [
        "Public essay; forecast + recommendation",
        "Rapid substitution, concentrated gains, misuse, childhood and relationship harms",
        "Control over future, work, critical thought, human care",
        "New national and international transition bodies; democratic process",
        "Connects benefits, labor, tax base, Human Reserved, and institution building",
        "Treats global slowdown as largely infeasible; implementation criteria left open" ] },
      { sourceId: "ethicalai", cells: [
        "Institutional ethical argument",
        "Power without ethical architecture across the lifecycle",
        "Rights, do no harm, participation, remedy",
        "Accountable institutions across problem selection through retirement",
        "Makes ethical status institutional rather than a model property",
        "Participation and enforcing institutions need more concrete authority" ] },
      { sourceId: "magnifica2026", cells: [
        "Encyclical; theological and social doctrine",
        "Technocracy, dehumanization, private digital power, loss of truth/work/relationship/peace",
        "Freedom, conscience, participation, education, responsibility, relationship",
        "Layered institutions shaped by dignity, common good, subsidiarity, solidarity",
        "Richest account of the human person; most specific limits on private power",
        "Translation into plural secular institutions requires further design" ] },
      { sourceId: "plurality-repo", cells: [
        "Open book, manifesto, design agenda (repository)",
        "Atomization and centralized technocracy",
        "Collaboration through overlapping affiliations and publics",
        "Open protocols, plural institutions, public investment, adaptive governance",
        "Positive vision and concrete tools for cooperation across difference",
        "Identity/privacy, agenda power, infrastructure dependence, aspirational evidence" ] },
      { sourceId: "plurality-site", cells: [
        "Publishing interface",
        "Public access to the Plurality argument",
        "Read, choose a pathway, contribute",
        "Project authors/community and repository",
        "Makes a complex open book accessible in multiple formats",
        "Softer interface can hide polemic, governance detail, and unresolved risk" ] },
      { sourceId: "rxc", cells: [
        "Nonprofit, mechanism wiki, project portfolio",
        "Monopoly, plutocracy, centralized decisions, polarization",
        "Expressive voice, bargaining, stewardship, exit",
        "Participatory mechanisms and distributed institutions",
        "Turns democratic theory into testable mechanisms and projects",
        "Mechanisms can be complex, advisory, identity-dependent, or captured by agenda setters" ] },
      { sourceId: "ai2027", cells: [
        "Predictive scenario",
        "Rapid automated R&D, race pressure, misalignment, late oversight",
        "Mostly reactive outside labs and state executives",
        "Frontier labs, US executive, China; then AI or oversight committee",
        "Concrete causal chain, uncertainty markers, public correction history",
        "Narrow actor model; vivid dates can overpower stated uncertainty" ] },
      { sourceId: "ai2040plana", cells: [
        "Recommendation in scenario form",
        "Extinction and winner-take-all power under a superintelligence race",
        "Human control is the goal; public authorship is less specified",
        "US\u2013China deal, Consortium, national regulators, auditors, permit regime",
        "Time, visibility, diffusion, reversibility, and scenario scrutiny",
        "Technical fragility, great-power legitimacy, new governors, handoff paradox" ] },
      { sourceId: "handout", cells: [
        "Facilitation document",
        "How to discuss Plan A critically and concretely",
        "Small-group deliberation and recorded forecasts",
        "Facilitator and participant groups",
        "Excellent structure around cruxes, rival plans, failures, and calibration",
        "Date placeholder; version drift; limited treatment of global legitimacy" ] }
    ]
  };

  // "Project library" — public repository documents that go deeper than the
  // dashboard. These are normal GitHub links (target repo, default branch "main"),
  // not part of the docs/ static site itself.
  var projectLibrary = [
    { id: "executive-brief", title: "Executive brief", path: "EXECUTIVE-BRIEF.md",
      description: "Ten-minute orientation: the view in one paragraph, five conclusions, five live tensions, and what to say in each room." },
    { id: "consolidated-pov", title: "Consolidated point of view", path: "research/consolidated-point-of-view.md",
      description: "The full synthesis across all nine sources, expanded beyond the dashboard's summaries." },
    { id: "comparison-matrix-full", title: "Comparison matrix (extended)", path: "research/comparison-matrix.md",
      description: "The full agreement matrix, key disagreements, and missing voices behind the dashboard's compact table." },
    { id: "semester-studio", title: "14-week semester studio (full)", path: "course/semester-studio.md",
      description: "Complete governing questions, readings, seminar moves, studios, exit tickets, and assessment pattern for all 14 weeks." },
    { id: "colab-alignment", title: "CoLab library alignment", path: "course/colab-library-alignment.md",
      description: "How the existing 21-publication Ethical Tech CoLab library maps onto the semester, week by week." },
    { id: "reading-library-full", title: "Reading library (full)", path: "course/reading-library.md",
      description: "The complete external reading library: anchor texts, core shelves, counterpoints, reading pathways, and productive pairings." },
    { id: "ai2040-brief-full", title: "AI-2040 meeting brief", path: "events/ai-2040-reading-group.md",
      description: "Source hygiene, six crux cards, a DAPPR stress test of Plan A, and forecast discipline for a scenario-planning audience." },
    { id: "salon-kit-full", title: "Salon discussion kit", path: "events/salon-discussion-kit.md",
      description: "A 90-minute run of show, DAPPR table canvas, and prompt deck for a public, values-first discussion." },
    { id: "unga-brief-full", title: "UNGA human dignity brief", path: "events/unga-human-dignity-brief.md",
      description: "A seven-minute speaking architecture, five policy asks, and anticipated questions for a multilateral audience." },
    { id: "citation-ledger", title: "Citation & provenance ledger", path: "research/citation-ledger.md",
      description: "Per-source stable anchors, retrieval status, quotation ledger, and citation cautions for all nine sources." },
    { id: "backlog", title: "Dependency-aware backlog", path: "BACKLOG.md",
      description: "Completed and future work, including the owner-approved migration of all 21 CoLab paper links from Legacy to the current V3 semantic reader." },
    { id: "third-party-notices", title: "Third-party visual asset notices", path: "THIRD-PARTY-NOTICES.md",
      description: "Attribution, source revisions, modifications, and retained licenses for the five existing-asset favicon compositions." }
  ];

  // Existing Ethical Tech CoLab library: 21 publications, supplemental teaching
  // context (NOT part of the nine-source comparative corpus). Compact data drawn
  // from data/colab-library-manifest.json.
  var colabLibrary = {
    catalogUrl: "https://yorkerhodes3.github.io/pageturn-book/shelf/",
    readerBase: COLAB_READER_BASE,
    sourceRevision: "b456e8e137a0b6ce9a51799b71c6091f5241b5d7",
    publications: [
      { slug: "what-is-ethical-ai", title: "What Is Ethical AI?", collection: "Foundational & Policy", pageCount: 46, weeks: [1, 2, 3, 4, 6, 13, 14], dappr: ["dignity", "agency", "plurality", "power", "reversibility"] },
      { slug: "ai-carbon-footprint", title: "AI's Carbon Footprint", collection: "Foundational & Policy", pageCount: 18, weeks: [5, 13], dappr: ["dignity", "power", "reversibility"] },
      { slug: "ai-models-research", title: "AI Model Performance", shelfTitle: "AI Models Research", collection: "Foundational & Policy", pageCount: 19, weeks: [4, 5], dappr: ["power", "reversibility"] },
      { slug: "erus", title: "The Evacuation Readiness and Uncertainty Simulator", collection: "Foundational & Policy", pageCount: 24, weeks: [6, 11], dappr: ["dignity", "agency", "reversibility"] },
      { slug: "cerai", title: "The Civilian Evacuation Risk Anticipation Index", collection: "Foundational & Policy", pageCount: 13, weeks: [4, 6], dappr: ["dignity", "agency", "power"] },
      { slug: "agentic-language-development", title: "Agentic Language Development", collection: "Foundational & Policy", pageCount: 25, weeks: [4, 11], dappr: ["agency", "power", "reversibility"] },
      { slug: "war-games", title: "The Only Winning Move", shelfTitle: "War Games", collection: "Foundational & Policy", pageCount: 15, weeks: [4, 11, 12], dappr: ["agency", "power", "reversibility"] },
      { slug: "after-the-corridor", title: "After the Corridor", collection: "Humanitarian Systems", pageCount: 22, weeks: [6, 13, 14], dappr: ["dignity", "agency", "power", "reversibility"] },
      { slug: "ercf", title: "The Evacuation Risk and Cost Framework", collection: "Humanitarian Systems", pageCount: 32, weeks: [6, 9], dappr: ["dignity", "power", "reversibility"] },
      { slug: "evacuation-inform-index", title: "The Evacuation Inform Index", collection: "Humanitarian Systems", pageCount: 11, weeks: [6], dappr: ["dignity", "agency", "reversibility"] },
      { slug: "evacuation-simulation", title: "The Evacuation Simulator", collection: "Humanitarian Systems", pageCount: 22, weeks: [6, 7], dappr: ["agency", "plurality", "power"] },
      { slug: "haste", title: "HASTE: High-speed Assessment and Satellite Tracking for Emergencies", collection: "Humanitarian Systems", pageCount: 26, weeks: [4, 5, 6], dappr: ["dignity", "power", "reversibility"] },
      { slug: "mariupol-severity-model", title: "The Mariupol Corridor Severity Model", collection: "Humanitarian Systems", pageCount: 26, weeks: [6], dappr: ["dignity", "power"] },
      { slug: "forced-labor-structural-risk-index", title: "The Forced Labor Structural Risk Index", collection: "Humanitarian Systems", pageCount: 25, weeks: [5, 6, 13], dappr: ["dignity", "agency", "power"] },
      { slug: "agentic-behavior-observatory", title: "The Agentic Behavior Observatory", collection: "Research & Public Tools", pageCount: 12, weeks: [4, 11], dappr: ["dignity", "plurality", "power"] },
      { slug: "ai-research-assistant", title: "AI-Powered Research Questions", shelfTitle: "AI Research Assistant", collection: "Research & Public Tools", pageCount: 10, weeks: [2, 10, 11], dappr: ["agency", "power"] },
      { slug: "cyber-dictionary", title: "Cyber Dictionary", collection: "Research & Public Tools", pageCount: 44, weeks: [1, 12], dappr: ["agency", "power"] },
      { slug: "digital-provenance-passport", title: "The Digital Provenance Passport", collection: "Research & Public Tools", pageCount: 28, weeks: [4, 5], dappr: ["agency", "power", "reversibility"] },
      { slug: "diplomatic-simulator", title: "The Diplomatic Simulator", collection: "Research & Public Tools", pageCount: 23, weeks: [11, 12, 13], dappr: ["plurality", "power", "reversibility"] },
      { slug: "provenance-search", title: "Provenance Search", collection: "Research & Public Tools", pageCount: 20, weeks: [4, 5], dappr: ["agency", "power"] },
      { slug: "vango", title: "VANGO: The Art Passport", collection: "Research & Public Tools", pageCount: 16, weeks: [4, 5], dappr: ["dignity", "agency", "reversibility"] }
    ]
  };

  // Compact "course reading shelf" — a subset of course/reading-library.md, whose
  // full markdown is linked prominently from the Reading Library section.
  var courseReadingShelf = [
    { title: "Atlas of AI", author: "Kate Crawford", year: 2021,
      use: "Moves analysis from a seemingly immaterial model to extraction, labor, classification, infrastructure, energy, and political power. Pair with the dataset genealogy in week 5." },
    { title: "Power and Progress", author: "Daron Acemoglu and Simon Johnson", year: 2023,
      use: "Argues productivity gains do not automatically become broad prosperity \u2014 a direct counterweight and extension to Gates's transition concerns." },
    { title: "Data Feminism", author: "Catherine D'Ignazio and Lauren F. Klein", year: 2020, url: "https://data-feminism.mitpress.mit.edu/",
      use: "Examines power, challenges binaries and hierarchies, elevates emotion and embodiment, rethinks labor, and embraces pluralism." },
    { title: "Design Justice", author: "Sasha Costanza-Chock", year: 2020, url: "https://design-justice.pubpub.org/",
      use: "Tests the difference between consulting affected people and shifting design power. Pair with lifecycle governance and final constitutions." },
    { title: "Justice by Means of Democracy", author: "Danielle Allen", year: 2023,
      use: "Democracy as a route to justice, political equality, and connected citizenship \u2014 a deeper normative foundation for the Plurality weeks." },
    { title: "Human Compatible", author: "Stuart Russell", year: 2019,
      use: "The control problem and uncertainty about human preferences. Pair with Magnifica Humanitas's anthropological claims and ask whether preference learning is sufficient for dignity." },
    { title: "The Alignment Problem", author: "Brian Christian", year: 2020,
      use: "The history of technical alignment, reward design, imitation, and human values \u2014 connects technical methods to institutional choices." },
    { title: "AI Ethics", author: "Mark Coeckelbergh", year: 2020,
      use: "A concise conceptual map for agency, responsibility, consciousness, policy, and philosophical traditions." },
    { title: "Technology and the Virtues", author: "Shannon Vallor", year: 2016,
      use: "Asks what kind of people and communities technologies help form, not only what discrete outcomes they produce." },
    { title: "AI Snake Oil", author: "Arvind Narayanan and Sayash Kapoor", year: 2024,
      use: "A structured skeptical counterpoint on prediction, generative AI, and the gap between demos and dependable systems." },
    { title: "Automating Inequality", author: "Virginia Eubanks", year: 2018,
      use: "Grounded cases where automated administration reaches people with the least practical ability to refuse. Pair with humanitarian asymmetry and the Dignity & Agency Audit." },
    { title: "Unmasking AI", author: "Joy Buolamwini", year: 2023,
      use: "A first-person bridge among technical evaluation, public advocacy, institutional resistance, and policy change." }
  ];

  var methodology = [
    {
      heading: "Purpose",
      body: "This field guide synthesizes nine named anchor sources into a single dashboard for study and discussion. The Ethical Tech CoLab's existing 21-publication library, the external course reading shelf, and the project-library documents are supplemental teaching context, clearly separated from the nine-source comparative corpus."
    },
    {
      heading: "Retrieval method",
      body: "Primary pages for the nine sources were retrieved with the Tavily Extract API on 2026-08-30 (advanced extraction, Markdown output). Tavily Search was used only for discovery and counterpoint \u2014 to locate critiques, context, and candidate readings \u2014 and AI-generated search answers were never treated as citations or authorities. Raw third-party page extractions are not redistributed in this repository; only original analysis, compact metadata, short attributed quotations, and links back to the primary sources are published."
    },
    {
      heading: "Epistemic labels",
      body: "Every claim in assets/content.js carries one label: observed-fact (a directly checkable past or present condition, such as a publication or signature date), source-claim (an author's empirical, causal, or interpretive assertion), scenario (an intentionally constructed possible future \u2014 never a prediction of fact, and never an event that has occurred), recommendation (a proposed course of action a source argues for, not adopted policy), synthesis (this guide's own interpretive framing, such as the DAPPR lenses), or question (an open discussion prompt)."
    },
    {
      heading: "DAPPR is our synthesis",
      body: "Dignity, Agency, Plurality, Power, and Reversibility are this guide's own reading framework for comparing the sources. No anchor source proposes \u201CDAPPR\u201D by name \u2014 it is offered here as a study tool, grounded in recurring source concerns, and labeled as synthesis throughout."
    },
    {
      heading: "All nine sources open in V3",
      body: "Every source card now opens a canonical V3 semantic location. Where a complete licensed semantic edition exists, the link opens that publication directly; otherwise it opens the matching chapter in The Human Choice source guide, which contains original analysis rather than a copy of the third-party page. A separate original-source link always preserves provenance and access to the publisher's current version. The Ethical AI executive summary carries institutional rather than individual authorship, and the AI 2040 handout does not state an author or publication date; both facts remain visible on their cards."
    },
    {
      heading: "Scenario discipline",
      body: "AI 2027 states its goal is predictive accuracy while explicitly acknowledging deep uncertainty; it is a predictive scenario, not an illustrative exercise, and its branches are never presented as settled fact. AI 2040: Plan A states explicitly that \u201CPlan A is primarily a recommendation, not a prediction\u201D; its dated 2029/2035/2040 narrative milestones are scenario elements illustrating the recommended mechanism, and are never labeled as occurred events or as the recommendation itself."
    },
    {
      heading: "Supplemental CoLab alignment",
      body: "The existing Ethical Tech CoLab library (21 publications, three collections) was inspected after the nine-source analysis to align the semester plan with existing teaching materials. This alignment is supplemental context \u2014 it is not part of, and does not expand, the nine-source comparative corpus."
    }
  ];

  global.FIELD_GUIDE = {
    title: "The Human Choice",
    subtitle: "AI, Power & Dignity Field Guide",
    repoBase: REPO_BASE,
    sources: sources,
    lenses: lenses,
    claims: claims,
    timeline: timeline,
    courseWeeks: courseWeeks,
    audiences: audiences,
    prompts: prompts,
    comparisonMatrix: comparisonMatrix,
    projectLibrary: projectLibrary,
    colabLibrary: colabLibrary,
    courseReadingShelf: courseReadingShelf,
    methodology: methodology
  };
})(typeof window !== "undefined" ? window : this);
