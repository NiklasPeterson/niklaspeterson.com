# Portfolio Experience Section Plan

## Purpose

Add a concise Experience section that explained the broader scope of each role without turning individual project cards into career summaries.

The section should strengthen Staff-level positioning by showing:

- Ownership across connected product areas
- Influence beyond individual project execution
- Collaboration with Product, Engineering, Brand, Marketing, and leadership
- Work spanning strategy, UX, UI, prototyping, implementation, reviews, and QA
- Career continuity across product design and front-end development

## Recommended placement

Place the section after the project grid and before About.

This preserved the visual-first opening of the portfolio while giving the broader role narrative a dedicated home. It also avoided interrupting or grouping the project grid with headings that only applied to some projects.

Page order:

1. Hero
2. Selected projects
3. Experience
4. About
5. Footer

## Content hierarchy

### LottieFiles

Make LottieFiles the featured entry because it represented the current role and carried the strongest Staff-level signals.

Show:

- Staff Product Designer
- LottieFiles
- November 2024 to Present
- Remote
- Two short paragraphs covering Web and Platform

Recommended draft:

> At LottieFiles, my work spanned the public web presence and core product experiences. I led the design and visual direction of the web presence, establishing the visual language, shared patterns, review process, and quality bar that guided the marketing pages that followed.
>
> Within LottieFiles Platform, I owned product design across digital asset management, Motion Systems, and developer handoff. I worked closely with Product, Engineering, and leadership from early problem framing and rapid prototypes through high-fidelity design, front-end implementation, and QA. I also guided how shared workflows extended into Lottie Creator and the plugins.

### Blush Design Inc.

Keep the entry considerably shorter than LottieFiles.

Show:

- Product Designer
- Blush Design Inc.
- November 2022 to September 2024
- Remote

Recommended draft:

> Designed product experiences across Lummi, Musho, and Bueno, from early flows and rapid prototypes to high-fidelity interfaces, design systems, and developer handoff.

### Shine Digital

Keep the entry concise while preserving the design-engineering foundation of the role.

Show:

- Design Engineer
- Shine Digital
- August 2015 to November 2022
- Halmstad, Sweden

Recommended draft:

> Designed and built websites, mobile apps, and CMS experiences for clients, combining interface design with front-end development in React and React Native.

## Visual direction

The section should feel editorial and lightweight, not like another collection of project cards.

### Desktop

- Use the same outer alignment as the rest of the homepage: `px-4 lg:px-20`
- Place the `Experience` heading in a narrow left column
- Place role content in a wider right column
- Give LottieFiles the most vertical space
- Present earlier roles as compact rows below it
- Keep paragraph width around 65 to 75 characters
- Use spacing rather than heavy containers or repeated borders

### Mobile

- Stack the heading, role metadata, and description
- Keep the role title and company together
- Place dates and location directly below in muted text
- Use the same horizontal padding as project and About sections
- Reduce the featured LottieFiles copy to two readable paragraphs without changing its meaning

### Styling constraints

- No cards or large background panels
- No project thumbnails
- No repeated Platform label on project cards
- No oversized heading competing with the hero or About heading
- At most one subtle divider between roles, if spacing alone was not enough
- Support light and dark themes using the existing zinc color palette

## Component structure

Create:

- `app/components/Experience.jsx`

Recommended semantic structure:

```jsx
<section aria-labelledby="experience-heading">
  <h2 id="experience-heading">Experience</h2>
  <ol>
    <li>{/* LottieFiles featured entry */}</li>
    <li>{/* Blush compact entry */}</li>
    <li>{/* Shine compact entry */}</li>
  </ol>
</section>
```

Use semantic `<time>` elements for dates where practical. Keep the experience data as a small constant inside the component initially. A separate data file was unnecessary unless the content later needed to be shared with the CV site.

Update:

- `app/page.js`

Render `<Experience />` between `<Projects />` and `<About />`.

## Copy rules

- Keep all role descriptions in past tense
- Avoid em dashes
- Lead with ownership and outcomes, not a list of design activities
- Mention Web and Platform once each in the LottieFiles entry
- Keep project-specific detail inside the case studies
- Avoid repeating the same phrases used in the project summaries
- Describe collaboration accurately without implying an official management title

## Implementation steps

1. Confirm the role names, dates, and locations.
2. Finalize the LottieFiles two-paragraph summary.
3. Create the semantic Experience component.
4. Add the component after Projects on the homepage.
5. Tune desktop spacing and line length.
6. Verify the stacked mobile layout below `md`.
7. Check light and dark themes.
8. Review the full homepage for repetition with the hero, project summaries, and About section.
9. Run formatting, diff checks, and the production build.

## Acceptance criteria

- The project grid remained uninterrupted.
- The LottieFiles entry clearly connected Web and Platform ownership.
- Staff-level influence was visible without overstating the formal role.
- Previous roles provided career context without making the homepage feel like a full CV.
- The section was easy to scan on mobile and desktop.
- The content did not duplicate project case-study details.
- All portfolio copy remained in past tense and contained no em dashes.

## Later opportunities

- Link the section to a dedicated CV page or downloadable CV.
- Share experience data between the portfolio and CV site if both moved into the same content system.
- Add selected outcomes or metrics when reliable numbers became available.
- Add a short recommendation or testimonial near the section only if it did not duplicate project testimonials.
