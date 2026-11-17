# Headlines Barber Design System

## Direction

Menswear editorial: a grooming visit presented with the confidence of a cover story. The interface uses bold, image-led compositions and editorial pacing while keeping services and contact actions direct.

## Tokens

- **Charcoal** `#191A19`: primary dark field, header, hero, and contact section.
- **Barber red** `#B72D32`: primary actions and decisive emphasis.
- **Metallic gold** `#B69A62` / `#C7AC73`: fine rules, markers, and small highlights.
- **Warm paper** `#F2EFE9` and **bright paper** `#FAF8F3`: light content fields.
- **Typography:** Bebas Neue for display lettering; Archivo Variable for body copy, navigation, and controls.

## Composition

Use the full-width charcoal cover for the opening statement, paired with a large local photo or video. Alternate calm paper sections with strong charcoal content. Services use open ruled rows rather than enclosed cards; gallery frames can vary in scale and alignment. Keep generous section spacing and clear reading order.

## Components and states

Red rectangular CTAs are primary; outlined controls are secondary. Use thin gold rules and restrained line icons. Interactive elements retain visible gold keyboard focus. The mobile navigation is a toggled panel; gallery images open a native modal dialog, while videos use native controls and do not autoplay.

## Motion and assets

Use short color and position transitions for hover affordances only. Respect `prefers-reduced-motion`; the custom scissors cursor is limited to fine pointers. Local image paths, alt text, hero video configuration, and gallery items live in `src/data/media.js`. Image provenance and replacement guidance are in `public/images/README.txt`.
