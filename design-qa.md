# Design QA

- Source visual truth: `/Users/ahmed/.codex/generated_images/019fa352-5e63-70f0-af69-23cede252a72/call_QR0J4bW8NcVAqgPqqTBkVCmj.png`
- Implementation screenshot: `/Users/ahmed/Desktop/dev/CeRID/cerid/implementation-desktop.png`
- Mobile screenshot: `/Users/ahmed/Desktop/dev/CeRID/cerid/implementation-mobile.png`
- Interior detail screenshot: `/Users/ahmed/Desktop/dev/CeRID/cerid/implementation-detail.png`
- News detail screenshot: `/Users/ahmed/Desktop/dev/CeRID/cerid/implementation-news-detail.png`
- Mobile detail screenshot: `/Users/ahmed/Desktop/dev/CeRID/cerid/implementation-detail-mobile.png`
- Offices screenshot: `/Users/ahmed/Desktop/dev/CeRID/cerid/implementation-offices.png`
- Mobile offices screenshot: `/Users/ahmed/Desktop/dev/CeRID/cerid/implementation-offices-mobile.png`
- Project cards screenshot: `/Users/ahmed/Desktop/dev/CeRID/cerid/implementation-projects-home.png`
- Project detail screenshot: `/Users/ahmed/Desktop/dev/CeRID/cerid/implementation-project-detail.png`
- Mobile project detail screenshot: `/Users/ahmed/Desktop/dev/CeRID/cerid/implementation-project-detail-mobile.png`
- Project comparison: `/Users/ahmed/Desktop/dev/CeRID/cerid/project-design-comparison.png`
- Projects archive screenshot: `/Users/ahmed/Desktop/dev/CeRID/cerid/implementation-projects-archive.png`
- Mobile projects archive screenshot: `/Users/ahmed/Desktop/dev/CeRID/cerid/implementation-projects-archive-mobile.png`
- Homepage thematic areas screenshot: `/Users/ahmed/Desktop/dev/CeRID/cerid/implementation-thematic-home.png`
- Thematic detail green-header screenshot: `/Users/ahmed/Desktop/dev/CeRID/cerid/implementation-thematic-detail-green.png`
- Impact overview screenshot: `/Users/ahmed/Desktop/dev/CeRID/cerid/implementation-impact.png`
- Combined comparison: `/Users/ahmed/Desktop/dev/CeRID/cerid/design-comparison.png`
- Desktop viewport request: 1440 × 1000 CSS px
- Desktop captured pixels: 1425 × 990 at device density 1 (browser scrollbar and viewport chrome account for the difference)
- Mobile viewport request: 390 × 844 CSS px
- Mobile captured pixels: 375 × 812 at device density 1
- Source pixels: 941 × 1672
- State: homepage, default desktop state; homepage with mobile navigation open

## Full-view comparison evidence

The combined comparison places the selected visual target and the rendered
implementation together. Both use the same institutional utility bar and
masthead structure, documentary full-width hero, left-aligned outcome message,
paired calls to action, forest-green identity, evidence band, generous white
space, and restrained editorial hierarchy. The implementation intentionally
uses an available CeRID source photograph rather than recreating or inventing
the generated reference image.

## Focused region comparison evidence

The above-the-fold region was compared at matched desktop width because it
contains the most fidelity-sensitive typography, navigation, image crop, CTA,
and impact-stat treatments. Mobile was captured separately to verify the
responsive reflow and navigation state. Additional focused crops were not
needed: all repeated content below the fold uses the same verified type,
spacing, border, color, and image treatments.

## Required fidelity surfaces

- Fonts and typography: Public Sans provides the selected concept's direct,
  institutional tone. Heading weight, tight tracking, readable 16–20 px body
  copy, and short line lengths match the target hierarchy.
- Spacing and layout rhythm: the 1280 px content frame, large section spacing,
  four-column evidence band, editorial two-column sections, hairline dividers,
  and minimal corner radius follow the target.
- Colors and visual tokens: deep forest, CeRID green, charcoal, warm white,
  and white provide accessible contrast and reproduce the source balance.
- Image quality and asset fidelity: all visible photographs and logos are real
  local CeRID assets rendered through Next Image. No placeholders, CSS art,
  handcrafted SVGs, or fake brand assets are used.
- Copy and content: concise institutional messaging is paired with real CeRID
  programme titles, impact figures, descriptions, partner logos, and contact
  information.

## Comparison history

1. Initial rendered comparison found a P2 image-state issue: the deprecated
   loading callback left documentary imagery blurred during capture.
2. The image component was updated to use the supported load event, correct
   scale classes, and responsive image sizing.
3. Post-fix evidence shows the hero and content imagery fully resolved. Desktop
   layout now closely matches the selected hierarchy and mobile navigation
   opens and closes correctly.
4. The interior-page expansion was reviewed on thematic-area, news, project,
   organizational, and mobile article routes. A P2 mobile density issue was
   found on long article titles and excerpts.
5. Mobile detail headings were reduced one step and excerpts were bounded on
   small screens while retaining full desktop copy. Post-fix production build
   generated all interior routes successfully.
6. The four-office section was reviewed at desktop and mobile widths. The
   editorial two-column layout correctly becomes a readable single-column list,
   with working telephone, email, and directions affordances.
7. The gallery was reviewed in its default, filtered, and lightbox states.
   Desktop evidence is saved at `implementation-gallery.png`; responsive
   evidence is saved at `implementation-gallery-mobile.png`. The editorial
   feature grid, caption hierarchy, and filter controls remain consistent with
   the selected Field Impact Editorial direction.
8. The three supplied project records were reviewed as homepage cards and full
   project details. The combined comparison confirms that the new status
   treatments, image-led cards, typography, warm-white sections, and forest
   metadata hero extend the selected institutional direction consistently.
9. The first mobile project-detail pass found a P2 horizontal overflow caused
   by the desktop hero-image aspect ratio interacting with its minimum height.
   The mobile frame was changed to an explicit 260 px height with the wide
   aspect ratio restored at the `sm` breakpoint. Post-fix evidence measures a
   335 px image frame in a 375 px content viewport with no overflow.
10. The projects archive and homepage thematic-area section were checked at
    desktop and mobile widths. Ongoing, completed, and archive states are
    visually distinct without introducing new colors or component styles. The
    five thematic areas use the same documentary image, typography, and
    hairline-divider system as the selected design direction.
11. All thematic-area detail pages were aligned with the institutional
    forest-green interior header. Desktop and mobile checks confirm readable
    contrast, consistent breadcrumb treatment, and no horizontal overflow.
12. The former key-achievement content was repositioned as “Impact and
    results,” with a dedicated overview, five public detail routes, homepage
    feature cards, and primary navigation access. Desktop and mobile checks
    confirm consistent green headers, documentary imagery, and no overflow.

## Interaction and technical checks

- Mobile navigation open and close states tested.
- Primary hero and navigation links expose correct destinations.
- Mail and telephone actions remain functional.
- Gallery category filters tested; the selected category exposes only matching
  photographs.
- Gallery lightbox open, close, previous/next, and keyboard controls verified.
- All three supplied project routes, status labels, metadata, results, and
  documentary galleries verified.
- Project cards expose the correct destinations for both ongoing projects and
  the completed project.
- Project status filters verified with counts of 2 ongoing, 1 completed, and 6
  archive records.
- Homepage and navigation links expose both `/projects` and `/thematic-areas`.
- Production build completed successfully across all 42 generated pages.
- Browser console checked: no runtime errors.
- Breadcrumbs, category labels, article dates, and responsive long-form
  typography were checked across each dynamic content family.

## Findings

No actionable P0, P1, or P2 differences remain. The hero subject differs from
the generated concept because the implementation correctly uses CeRID's
available documentary photography; this is an acceptable content constraint.

## Follow-up polish

- P3: A future professional photo edit could create a wider hero crop with the
  primary subject positioned farther right, closer to the generated concept.

final result: passed
