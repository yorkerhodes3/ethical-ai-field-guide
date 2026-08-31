/*!
 * app.js — Interactivity for The Human Choice / AI, Power & Dignity Field Guide.
 * No external dependencies. Progressive enhancement over the static HTML/CSS.
 */
(function () {
  "use strict";

  var FG = window.FIELD_GUIDE;
  if (!FG) { return; } // graceful no-op if content failed to load

  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  var esc = function (str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  var labelText = {
    "observed-fact": "Observed fact",
    "source-claim": "Source claim",
    "scenario": "Scenario",
    "recommendation": "Recommendation",
    "synthesis": "Synthesis",
    "question": "Question"
  };

  function sourceById(id) {
    for (var i = 0; i < FG.sources.length; i++) { if (FG.sources[i].id === id) return FG.sources[i]; }
    return null;
  }

  function sourceReaderUrl(source) {
    return source.readerUrl || source.url;
  }

  function sourceReaderLabel(source) {
    return source.readerMode === "full-source"
      ? "Read source in V3"
      : "Read source guide in V3";
  }

  function sourceActionsHtml(source, compact) {
    var readerClass = compact ? "btn btn--ghost" : "source-card__link";
    var originalClass = compact ? "btn btn--ghost" : "source-card__link source-card__link--secondary";
    var related = source.relatedReaderUrl
      ? '<a class="' + readerClass + '" href="' + esc(source.relatedReaderUrl) +
        '" target="_blank" rel="noopener">' + esc(source.relatedReaderLabel || "Read related book in V3") + " ↗</a>"
      : "";
    return '<span class="source-actions">' +
      '<a class="' + readerClass + '" href="' + esc(sourceReaderUrl(source)) +
      '" target="_blank" rel="noopener">' + esc(sourceReaderLabel(source)) + " ↗</a>" +
      related +
      '<a class="' + originalClass + '" href="' + esc(source.url) +
      '" target="_blank" rel="noopener">Open original source ↗</a>' +
      "</span>";
  }

  function labelPill(label) {
    return '<span class="label-pill label-pill--' + esc(label) + '">' + esc(labelText[label] || label) + "</span>";
  }

  function sourceBadge(source) {
    if (source.attributionBadge) {
      return '<span class="badge badge--note">' + esc(source.attributionBadge) + "</span>";
    }
    return '<span class="badge badge--primary">Primary source</span>';
  }

  function sourceLinksHtml(sourceIds) {
    return sourceIds.map(function (sid) {
      var s = sourceById(sid);
      if (!s) return "";
      var href = sourceReaderUrl(s);
      return '<a class="source-card__link" href="' + esc(href) + '"' +
        (href.charAt(0) === "#" ? "" : ' target="_blank" rel="noopener"') +
        '>' + esc(s.shortName) + " ↗</a>";
    }).join(" ");
  }

  function claimHtml(c) {
    return '<li class="claim">' +
      '<div class="claim__meta">' + labelPill(c.label) + sourceLinksHtml(c.sourceIds) + "</div>" +
      '<p class="claim__text">' + esc(c.text) + "</p>" +
      "</li>";
  }

  /* ---------------- Accessible tabs (used for DAPPR lenses + audiences) ---------------- */
  function buildTabs(opts) {
    // opts: { listEl, panelsEl, items: [{id, label}], renderPanel(item) -> html, idPrefix }
    var listEl = opts.listEl, panelsEl = opts.panelsEl, items = opts.items, prefix = opts.idPrefix;
    listEl.innerHTML = items.map(function (item, i) {
      return '<button class="tab" role="tab" id="' + prefix + "-tab-" + item.id + '" ' +
        'aria-selected="' + (i === 0 ? "true" : "false") + '" aria-controls="' + prefix + "-panel-" + item.id + '" ' +
        'tabindex="' + (i === 0 ? "0" : "-1") + '" data-id="' + item.id + '">' + esc(item.label) + "</button>";
    }).join("");
    panelsEl.innerHTML = items.map(function (item, i) {
      return '<div class="tabs__panel' + (i === 0 ? " is-active" : "") + '" role="tabpanel" ' +
        'id="' + prefix + "-panel-" + item.id + '" aria-labelledby="' + prefix + "-tab-" + item.id + '" ' +
        (i === 0 ? "" : 'hidden') + ">" + opts.renderPanel(item) + "</div>";
    }).join("");

    var tabs = Array.prototype.slice.call(listEl.querySelectorAll(".tab"));
    function select(idx, focus) {
      tabs.forEach(function (t, i) {
        var active = i === idx;
        t.setAttribute("aria-selected", active ? "true" : "false");
        t.tabIndex = active ? 0 : -1;
        var panel = document.getElementById(t.getAttribute("aria-controls"));
        if (panel) {
          panel.classList.toggle("is-active", active);
          if (active) panel.removeAttribute("hidden"); else panel.setAttribute("hidden", "");
        }
      });
      if (focus) tabs[idx].focus();
    }
    listEl.addEventListener("click", function (e) {
      var btn = e.target.closest(".tab");
      if (!btn) return;
      select(tabs.indexOf(btn), false);
    });
    listEl.addEventListener("keydown", function (e) {
      var idx = tabs.findIndex(function (t) { return t === document.activeElement; });
      if (idx === -1) return;
      var next = null;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (idx + 1) % tabs.length;
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (idx - 1 + tabs.length) % tabs.length;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = tabs.length - 1;
      if (next !== null) { e.preventDefault(); select(next, true); }
    });
    return { select: select };
  }

  /* ---------------- DAPPR lenses ---------------- */
  function renderLenses() {
    buildTabs({
      listEl: document.getElementById("lensTabList"),
      panelsEl: document.getElementById("lensPanels"),
      idPrefix: "lens",
      items: FG.lenses.map(function (l) { return { id: l.id, label: l.name }; }),
      renderPanel: function (item) {
        var lens = FG.lenses.filter(function (l) { return l.id === item.id; })[0];
        var claims = FG.claims.filter(function (c) { return c.lensIds.indexOf(lens.id) !== -1; });
        return '<div class="lens-panel__head"><h3>' + esc(lens.name) + '</h3><span class="lens-panel__tagline">' +
          esc(lens.tagline) + "</span></div>" +
          '<p>' + esc(lens.description) + "</p>" +
          '<p class="footnote">Grounded in: ' + sourceLinksHtml(lens.groundedIn) + "</p>" +
          '<ul class="claim-list">' + claims.map(claimHtml).join("") + "</ul>";
      }
    });
  }

  /* ---------------- Audience switcher ---------------- */
  function renderAudiences() {
    buildTabs({
      listEl: document.getElementById("audienceTabList"),
      panelsEl: document.getElementById("audiencePanels"),
      idPrefix: "audience",
      items: FG.audiences.map(function (a) { return { id: a.id, label: a.name }; }),
      renderPanel: function (item) {
        var a = FG.audiences.filter(function (x) { return x.id === item.id; })[0];
        var lensNames = a.emphasisLensIds.map(function (lid) {
          var l = FG.lenses.filter(function (x) { return x.id === lid; })[0];
          return l ? l.name : lid;
        });
        return '<div class="lens-panel__head"><h3>' + esc(a.name) + '</h3><span class="lens-panel__tagline">' +
          esc(a.tagline) + "</span></div>" +
          '<p>' + esc(a.framing) + "</p>" +
          '<p class="footnote"><strong>Emphasized lenses:</strong> ' + esc(lensNames.join(", ")) + "</p>" +
          '<p class="footnote"><strong>Highlighted sources:</strong> ' + sourceLinksHtml(a.highlightSourceIds) + "</p>" +
          '<p><a class="btn btn--primary" href="' + esc(FG.repoBase + a.briefPath) +
          '" target="_blank" rel="noopener">' + esc(a.briefLabel) + " ↗</a></p>";
      }
    });
  }

  /* ---------------- Source Explorer ---------------- */
  var sourceFilterState = { topics: new Set(), audiences: new Set(), type: "", q: "" };

  function uniqueValues(field) {
    var set = new Set();
    FG.sources.forEach(function (s) { (s[field] || []).forEach(function (v) { set.add(v); }); });
    return Array.from(set).sort();
  }

  function renderSourceFilters() {
    var topicChips = document.getElementById("topicChips");
    var audienceChips = document.getElementById("audienceChips");
    var typeSelect = document.getElementById("typeFilterSelect");

    topicChips.innerHTML = uniqueValues("topics").map(function (t) {
      return '<button type="button" class="chip" aria-pressed="false" data-kind="topic" data-value="' + esc(t) + '">' + esc(t) + "</button>";
    }).join("");

    audienceChips.innerHTML = FG.audiences.map(function (a) {
      return '<button type="button" class="chip" aria-pressed="false" data-kind="audience" data-value="' + esc(a.id) + '">' + esc(a.name) + "</button>";
    }).join("");

    var types = Array.from(new Set(FG.sources.map(function (s) { return s.type; }))).sort();
    typeSelect.innerHTML = '<option value="">All types</option>' + types.map(function (t) {
      return '<option value="' + esc(t) + '">' + esc(t) + "</option>";
    }).join("");

    document.getElementById("sourceFilters").addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (!chip) return;
      var pressed = chip.getAttribute("aria-pressed") === "true";
      chip.setAttribute("aria-pressed", pressed ? "false" : "true");
      var set = chip.dataset.kind === "topic" ? sourceFilterState.topics : sourceFilterState.audiences;
      if (pressed) set.delete(chip.dataset.value); else set.add(chip.dataset.value);
      renderSourceGrid();
    });
    typeSelect.addEventListener("change", function () {
      sourceFilterState.type = typeSelect.value;
      renderSourceGrid();
    });
    document.getElementById("clearFilters").addEventListener("click", function () {
      sourceFilterState.topics.clear();
      sourceFilterState.audiences.clear();
      sourceFilterState.type = "";
      sourceFilterState.q = "";
      document.getElementById("globalSearch").value = "";
      typeSelect.value = "";
      Array.prototype.forEach.call(document.querySelectorAll("#sourceFilters .chip"), function (c) { c.setAttribute("aria-pressed", "false"); });
      renderSourceGrid();
      renderColabLibrary();
      Array.prototype.forEach.call(document.querySelectorAll("#promptDeck .prompt-card, #libraryList .library-item, #courseShelfList .shelf-card, #projectLibraryList .project-library-item"), function (item) {
        item.hidden = false;
      });
    });
  }

  function sourceCardHtml(s) {
    var claimCount = FG.claims.filter(function (c) { return c.sourceIds.indexOf(s.id) !== -1; }).length;
    var author = s.author || "Author not stated";
    var date = s.dateLabel || s.date || "Date not stated";
    return '<article class="source-card">' +
      '<div class="source-card__head"><h3>' + esc(s.shortName) + "</h3>" + sourceBadge(s) + "</div>" +
      '<p class="source-card__meta">' + esc(author) + " · " + esc(s.org) + " · " + esc(date) + "</p>" +
      (s.typeLabel ? '<p class="source-card__type">' + esc(s.typeLabel) + "</p>" : "") +
      '<p class="source-card__summary">' + esc(s.summary) + "</p>" +
      (s.authorNote ? '<p class="source-card__note">' + esc(s.authorNote) + "</p>" : "") +
      (s.dateNote ? '<p class="source-card__note">' + esc(s.dateNote) + "</p>" : "") +
      (s.license ? '<p class="source-card__note"><strong>Source license:</strong> ' + esc(s.license) + "</p>" : "") +
      '<div class="tag-row">' + s.topics.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>" +
      '<p class="footnote">' + claimCount + " tracked claim" + (claimCount === 1 ? "" : "s") + " from this source</p>" +
      sourceActionsHtml(s, false) +
      "</article>";
  }

  function renderSourceGrid() {
    var q = sourceFilterState.q.toLowerCase();
    var results = FG.sources.filter(function (s) {
      if (sourceFilterState.type && s.type !== sourceFilterState.type) return false;
      if (sourceFilterState.topics.size && !s.topics.some(function (t) { return sourceFilterState.topics.has(t); })) return false;
      if (sourceFilterState.audiences.size && !s.audiences.some(function (a) { return sourceFilterState.audiences.has(a); })) return false;
      if (q) {
        var hay = (s.title + " " + s.author + " " + s.org + " " + s.summary).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });
    document.getElementById("sourceGrid").innerHTML = results.map(sourceCardHtml).join("") ||
      '<p class="footnote">No sources match the current filters.</p>';
    document.getElementById("sourceResultCount").textContent = results.length + " of " + FG.sources.length + " sources shown";
  }

  /* ---------------- Comparison matrix ---------------- */
  function renderMatrix() {
    var m = FG.comparisonMatrix;
    var thead = "<thead><tr><th scope=\"col\">Source</th>" +
      m.dimensions.map(function (d) { return '<th scope="col">' + esc(d) + "</th>"; }).join("") + "</tr></thead>";
    var tbody = "<tbody>" + m.rows.map(function (row) {
      var s = sourceById(row.sourceId);
      return "<tr><th scope=\"row\">" + esc(s ? s.shortName : row.sourceId) + "</th>" +
        row.cells.map(function (cell) { return "<td>" + esc(cell) + "</td>"; }).join("") + "</tr>";
    }).join("") + "</tbody>";
    document.getElementById("matrixTable").innerHTML = thead + tbody;
  }

  /* ---------------- Scenario timeline ---------------- */
  var timelineActiveLabels = new Set();

  function renderTimelineFilters() {
    var labels = Array.from(new Set(FG.timeline.map(function (t) { return t.label; })));
    var el = document.getElementById("timelineLabelFilter");
    el.innerHTML = labels.map(function (l) {
      return '<button type="button" class="chip" aria-pressed="false" data-label="' + esc(l) + '">' + esc(labelText[l] || l) + "</button>";
    }).join("");
    el.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (!chip) return;
      var pressed = chip.getAttribute("aria-pressed") === "true";
      chip.setAttribute("aria-pressed", pressed ? "false" : "true");
      if (pressed) timelineActiveLabels.delete(chip.dataset.label); else timelineActiveLabels.add(chip.dataset.label);
      renderTimeline();
    });
  }

  function renderTimeline() {
    var items = FG.timeline.slice().sort(function (a, b) { return a.date.localeCompare(b.date); });
    document.getElementById("timelineList").innerHTML = items.map(function (t) {
      var visible = timelineActiveLabels.size === 0 || timelineActiveLabels.has(t.label);
      return '<li class="timeline__item"' + (visible ? "" : " hidden") + '>' +
        '<div class="claim__meta"><span class="timeline__date">' + esc(t.display) + "</span>" + labelPill(t.label) + "</div>" +
        '<h3 class="timeline__title">' + esc(t.title) + "</h3>" +
        "<p>" + esc(t.text) + "</p>" +
        '<p class="footnote">' + sourceLinksHtml(t.sourceIds) + "</p>" +
        "</li>";
    }).join("");
  }

  /* ---------------- Course weeks ---------------- */
  function renderCourseWeeks() {
    var demoNames = { "scenario-scrutiny": "Scenario Scrutiny Canvas", "plural-voice-lab": "Plural Voice Lab", "dignity-agency-audit": "Dignity & Agency Audit" };
    document.getElementById("weekGrid").innerHTML = FG.courseWeeks.map(function (w) {
      var lensNames = w.lensIds.map(function (lid) {
        var l = FG.lenses.filter(function (x) { return x.id === lid; })[0];
        return l ? l.name : lid;
      }).join(", ");
      return '<details class="week-card"' + (w.week === 1 ? " open" : "") + '>' +
        '<summary><span class="week-card__num">Wk ' + w.week + "</span> " + esc(w.title) + "</summary>" +
        '<div class="week-card__body">' +
        '<p class="week-card__question">' + esc(w.question) + "</p>" +
        '<p class="week-card__label">Reading path</p><ul class="week-card__readings">' +
        w.readings.map(function (reading) { return "<li>" + esc(reading) + "</li>"; }).join("") + "</ul>" +
        (w.colabCase ? '<p><strong>CoLab case:</strong> ' + esc(w.colabCase) + "</p>" : "") +
        '<p><strong>Studio:</strong> ' + esc(w.studio) + "</p>" +
        (lensNames ? '<p class="footnote"><strong>Lenses:</strong> ' + esc(lensNames) + "</p>" : "") +
        (w.sourceIds.length ? '<p class="footnote"><strong>Sources:</strong> ' + sourceLinksHtml(w.sourceIds) + "</p>" : "") +
        (w.demo ? '<a class="week-card__demo" href="demos/' + esc(w.demo) + '/index.html">Open ' + esc(demoNames[w.demo]) + " demo →</a>" : "") +
        "</div></details>";
    }).join("");
  }

  /* ---------------- Reading library ---------------- */
  function renderLibrary() {
    var sorted = FG.sources.slice().sort(function (a, b) {
      var da = a.date && String(a.date).match(/^\d/) ? String(a.date) : "9999";
      var db = b.date && String(b.date).match(/^\d/) ? String(b.date) : "9999";
      return da.localeCompare(db);
    });
    document.getElementById("libraryList").innerHTML = sorted.map(function (s) {
      return '<div class="library-item">' +
        '<span class="library-item__date">' + esc(s.dateLabel || s.date || "Date not stated") + "</span>" +
        '<span><span class="library-item__title">' + esc(s.title) + "</span><br>" +
        '<span class="library-item__author">' + esc(s.author || "Author not stated") + " — " + esc(s.org) + "</span></span>" +
        sourceActionsHtml(s, true) +
        "</div>";
    }).join("");
  }

  var colabFilterState = { collections: new Set(), lenses: new Set() };

  function renderColabFilters() {
    var collectionEl = document.getElementById("colabCollectionChips");
    var lensEl = document.getElementById("colabLensChips");
    var collections = Array.from(new Set(FG.colabLibrary.publications.map(function (p) { return p.collection; })));

    collectionEl.innerHTML = collections.map(function (collection) {
      return '<button type="button" class="chip" aria-pressed="false" data-kind="collection" data-value="' +
        esc(collection) + '">' + esc(collection) + "</button>";
    }).join("");
    lensEl.innerHTML = FG.lenses.map(function (lens) {
      return '<button type="button" class="chip" aria-pressed="false" data-kind="lens" data-value="' +
        esc(lens.id) + '">' + esc(lens.name) + "</button>";
    }).join("");

    document.getElementById("colabFilters").addEventListener("click", function (event) {
      var chip = event.target.closest(".chip");
      if (!chip) return;
      var pressed = chip.getAttribute("aria-pressed") === "true";
      var set = chip.dataset.kind === "collection" ? colabFilterState.collections : colabFilterState.lenses;
      chip.setAttribute("aria-pressed", pressed ? "false" : "true");
      if (pressed) set.delete(chip.dataset.value); else set.add(chip.dataset.value);
      renderColabLibrary();
    });

    document.getElementById("clearColabFilters").addEventListener("click", function () {
      colabFilterState.collections.clear();
      colabFilterState.lenses.clear();
      Array.prototype.forEach.call(document.querySelectorAll("#colabFilters .chip"), function (chip) {
        chip.setAttribute("aria-pressed", "false");
      });
      renderColabLibrary();
    });
  }

  function renderColabLibrary() {
    var q = sourceFilterState.q.toLowerCase();
    var publications = FG.colabLibrary.publications.filter(function (publication) {
      if (colabFilterState.collections.size && !colabFilterState.collections.has(publication.collection)) return false;
      if (colabFilterState.lenses.size && !publication.dappr.some(function (lens) { return colabFilterState.lenses.has(lens); })) return false;
      if (q && (publication.title + " " + publication.collection + " " + publication.dappr.join(" ")).toLowerCase().indexOf(q) === -1) return false;
      return true;
    });

    document.getElementById("colabGrid").innerHTML = publications.map(function (publication) {
      var href = FG.colabLibrary.readerBase + "?book=" + encodeURIComponent(publication.slug);
      return '<article class="colab-card">' +
        '<p class="colab-card__collection">' + esc(publication.collection) + "</p>" +
        '<h4>' + esc(publication.title) + "</h4>" +
        (publication.shelfTitle ? '<p class="colab-card__alias">Shelf label: ' + esc(publication.shelfTitle) + "</p>" : "") +
        '<p class="colab-card__meta">' + publication.pageCount + " pages · Weeks " + esc(publication.weeks.join(", ")) + "</p>" +
        '<div class="tag-row">' + publication.dappr.map(function (lens) { return '<span class="tag">' + esc(lens) + "</span>"; }).join("") + "</div>" +
        '<a class="source-card__link" href="' + esc(href) + '" target="_blank" rel="noopener">Open V3 semantic reader ↗</a>' +
        "</article>";
    }).join("") || '<p class="footnote">No CoLab publications match the current filters.</p>';
    document.getElementById("colabResultCount").textContent =
      publications.length + " of " + FG.colabLibrary.publications.length + " publications shown";
  }

  function renderCourseShelf() {
    document.getElementById("fullLibraryLink").href = FG.repoBase + "course/reading-library.md";
    document.getElementById("courseShelfList").innerHTML = FG.courseReadingShelf.map(function (reading) {
      var title = reading.url
        ? '<a href="' + esc(reading.url) + '" target="_blank" rel="noopener">' + esc(reading.title) + " ↗</a>"
        : esc(reading.title);
      return '<article class="shelf-card">' +
        '<h4>' + title + "</h4>" +
        '<p class="shelf-card__meta">' + esc(reading.author) + " · " + reading.year + "</p>" +
        '<p>' + esc(reading.use) + "</p>" +
        "</article>";
    }).join("");
  }

  function renderProjectLibrary() {
    document.getElementById("projectLibraryList").innerHTML = FG.projectLibrary.map(function (item) {
      return '<article class="project-library-item">' +
        '<div><h3>' + esc(item.title) + '</h3><p>' + esc(item.description) + "</p></div>" +
        '<a class="btn btn--ghost" href="' + esc(FG.repoBase + item.path) +
        '" target="_blank" rel="noopener">Open document ↗</a>' +
        "</article>";
    }).join("");
  }

  /* ---------------- Discussion prompt deck ---------------- */
  var promptOrder = FG.prompts.map(function (p) { return p.id; });

  function renderPrompts() {
    var byId = {};
    FG.prompts.forEach(function (p) { byId[p.id] = p; });
    document.getElementById("promptDeck").innerHTML = promptOrder.map(function (id) {
      var p = byId[id];
      var lensNames = p.lensIds.map(function (lid) {
        var l = FG.lenses.filter(function (x) { return x.id === lid; })[0];
        return l ? l.name : lid;
      }).join(", ");
      return '<li class="prompt-card">' +
        '<p class="prompt-card__q">\u201C' + esc(p.text) + '\u201D</p>' +
        '<p class="footnote"><strong>' + esc(lensNames) + "</strong> · " + sourceLinksHtml(p.sourceIds) + "</p>" +
        "</li>";
    }).join("");
  }

  function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }

  /* ---------------- Methodology ---------------- */
  function renderMethodology() {
    document.getElementById("methodologyBody").innerHTML = FG.methodology.map(function (m) {
      return "<div><h3>" + esc(m.heading) + "</h3><p>" + esc(m.body) + "</p></div>";
    }).join("");
  }

  /* ---------------- Global search ---------------- */
  function initSearch() {
    var input = document.getElementById("globalSearch");
    input.addEventListener("input", function () {
      sourceFilterState.q = input.value.trim();
      renderSourceGrid();
      renderColabLibrary();
      var q = sourceFilterState.q.toLowerCase();
      // Also filter the supporting reading, prompt, and project sections.
      Array.prototype.forEach.call(document.querySelectorAll("#promptDeck .prompt-card"), function (card) {
        card.hidden = q.length > 0 && card.textContent.toLowerCase().indexOf(q) === -1;
      });
      Array.prototype.forEach.call(document.querySelectorAll("#libraryList .library-item"), function (item) {
        item.hidden = q.length > 0 && item.textContent.toLowerCase().indexOf(q) === -1;
      });
      Array.prototype.forEach.call(document.querySelectorAll("#courseShelfList .shelf-card"), function (item) {
        item.hidden = q.length > 0 && item.textContent.toLowerCase().indexOf(q) === -1;
      });
      Array.prototype.forEach.call(document.querySelectorAll("#projectLibraryList .project-library-item"), function (item) {
        item.hidden = q.length > 0 && item.textContent.toLowerCase().indexOf(q) === -1;
      });
    });
  }

  /* ---------------- Nav: mobile toggle, active link, hash focus ---------------- */
  function initNav() {
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("siteNav");
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    Array.prototype.forEach.call(nav.querySelectorAll("a"), function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    var links = Array.prototype.slice.call(nav.querySelectorAll("a[href^='#']"));
    var sections = links.map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); }).filter(Boolean);

    function setActive(id) {
      links.forEach(function (a) {
        a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
      });
    }

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
      sections.forEach(function (s) { observer.observe(s); });
    }

    if (location.hash) {
      var target = document.getElementById(location.hash.slice(1));
      if (target) {
        setActive(target.id);
        window.setTimeout(function () {
          var previousScrollBehavior = document.documentElement.style.scrollBehavior;
          var header = document.querySelector(".site-header");
          var headerOffset = header ? header.getBoundingClientRect().height + 8 : 0;
          document.documentElement.style.scrollBehavior = "auto";
          window.scrollTo(0, Math.max(0, target.offsetTop - headerOffset));
          document.documentElement.style.scrollBehavior = previousScrollBehavior;
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
        }, 50);
      }
    }
  }

  function initPrint() {
    document.getElementById("printBtn").addEventListener("click", function () { window.print(); });
  }

  function initShuffle() {
    document.getElementById("shufflePrompts").addEventListener("click", function () {
      shuffleArray(promptOrder);
      renderPrompts();
    });
  }

  function init() {
    renderLenses();
    renderSourceFilters();
    renderSourceGrid();
    renderMatrix();
    renderTimelineFilters();
    renderTimeline();
    renderCourseWeeks();
    renderLibrary();
    renderColabFilters();
    renderColabLibrary();
    renderCourseShelf();
    renderAudiences();
    renderPrompts();
    renderProjectLibrary();
    renderMethodology();
    initSearch();
    initNav();
    initPrint();
    initShuffle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
