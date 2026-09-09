# CeRID Website Structure and UI Audit

Audit date: 29 July 2026

## Overall assessment

The website now has a strong institutional foundation: credible typography, restrained colour use, clear top-level navigation, authentic field photography, and a consistent content system. It already feels much closer to a serious international NGO website than a typical small-organisation template.

The main weakness is not visual quality; it is information differentiation. Thematic Areas, Projects, and Impact currently use very similar green headers and three-column image-card patterns. Visitors can understand that each section is important, but the interface does not yet make their different jobs obvious:

- Thematic Areas should explain CeRID's strategic programme pillars.
- Projects should document funded, time-bound interventions.
- Impact should prove results with verified figures, periods, sources, and stories.

## Journey review

### 1. Homepage orientation — Good

The hero gives CeRID an immediate institutional presence. The proposition is short, the photography feels authentic, and the two calls to action are clear. The statistic strip is highly visible.

Improvements:

- Add a reporting period and source label to the statistics, for example “Cumulative results, 2005–2026 · CeRID programme records”.
- Reduce the total homepage length by featuring only the strongest three items from Thematic Areas, Impact, and Projects.
- Give each homepage section a visibly different format so the page does not become a sequence of similar card grids.
- Consider changing “See our impact” to “Explore our results” if the destination is an evidence-led Impact page.

### 2. Thematic-area discovery — Good, but visually undifferentiated

The hierarchy and programme photography are clear. The title and supporting sentence correctly frame integrated programming.

Improvements:

- Keep this page as the strategic overview, but add a one-sentence outcome statement and 2–3 programme capabilities to each thematic area.
- Use a distinct programme-pillar treatment such as numbered bands, concise capability lists, or a vertical index rather than the same card language used for Impact.
- On detail pages, structure content as: Why it matters, What CeRID does, Who CeRID works with, Related projects, and Evidence/results.
- Remove the generic publication date from evergreen thematic content, or replace it with an accurate “Last reviewed” date.

### 3. Project discovery — Very good

The archive has the clearest information model on the site. Ongoing, completed, and archive filters make the portfolio understandable, and the project photography has strong visual consistency.

Improvements:

- Replace “Archive” with confirmed project statuses wherever records can be verified.
- Add consistent metadata to every card: implementation period, location, thematic area, donor/partner, and status.
- Consider filters for thematic area and location once more projects are added.
- Use a short explanation for “Archive” so visitors understand that it means historical record rather than incomplete information.

### 4. Project detail — Very good

The project status, implementation period, location, summary, and strong title create a professional programme-record page. This is the strongest detail-page pattern on the site.

Improvements:

- Add a compact “At a glance” results panel near the top: people targeted/reached, locations, partners, budget if publishable, and reporting period.
- Add sticky in-page navigation for long reports: Overview, Activities, Results, Partners, Gallery, Downloads.
- Distinguish targets from achieved results visually and in language.
- Add related thematic areas and related projects at the end to prevent dead ends.
- Use descriptive editorial alternative text for project images rather than title-based or numbered descriptions.

### 5. Impact and results — Needs redesign

The page is polished, but it looks too similar to Thematic Areas. Image cards communicate topics, not proof. This is the most important structural improvement.

Recommended impact-page model:

1. A small set of verified headline results with period and source.
2. Results grouped by outcome, not programme category alone.
3. Short evidence notes explaining what was measured.
4. Selected human stories that show what the numbers mean.
5. Links to the projects responsible for each result.
6. Optional downloadable annual reports or programme summaries.

Content governance issues to fix before promoting statistics:

- Education content says both 30,000 and 3,000 children.
- Climate content says both over 3,000 and over 2,000 farmers/pastoralists.
- Homepage figures currently have no reporting period or source.

Until these numbers are reconciled, use conservative verified figures or avoid presenting them as organisation-wide totals.

### 6. Mobile navigation — Good

The menu is simple, readable, and fits the viewport without horizontal overflow. The partner call to action remains prominent.

Improvements:

- Add visible grouping or slightly tighter spacing so primary navigation and secondary items such as Careers are easier to distinguish.
- Confirm keyboard focus order, focus visibility, Escape-to-close behaviour, and screen-reader labels through an interactive accessibility test.
- Confirm that opening the menu traps focus appropriately and prevents background interaction.

## Priority recommendations

### Priority 1 — Trust and information architecture

1. Redesign Impact as an evidence-led results page rather than another programme-card page.
2. Reconcile all public statistics and attach a reporting period, calculation scope, and source.
3. Clearly define the relationship between Thematic Areas, Projects, and Impact in page copy and cross-links.

### Priority 2 — Content usability

4. Reduce repeated card grids and homepage length.
5. Add structured metadata to all project records.
6. Add in-page navigation and related-content links to long detail pages.
7. Replace evergreen “published” dates with meaningful “last reviewed” dates where appropriate.

### Priority 3 — Accessibility and editorial polish

8. Write descriptive alternative text for significant images.
9. Test keyboard, focus, menu, heading, and screen-reader behaviour; screenshots alone cannot verify these.
10. Establish a lightweight editorial checklist for figures, dates, statuses, titles, and partner naming.

## What is already working well

- Clear institutional navigation and strong brand consistency.
- Professional type scale and excellent headline hierarchy.
- Credible, authentic photography rather than generic stock imagery.
- Strong contrast and restrained green/white palette.
- No horizontal overflow at the audited desktop or mobile widths.
- Project details communicate status, dates, and location effectively.
- Local MDX content gives CeRID direct ownership of its publishing workflow.

## Evidence limits

This review is based on current rendered desktop and mobile states, content files, and component structure. It is not a full accessibility certification, analytics review, user-research study, or content-fact verification. Keyboard use, screen-reader output, performance on slow networks, and real visitor behaviour need separate testing.
