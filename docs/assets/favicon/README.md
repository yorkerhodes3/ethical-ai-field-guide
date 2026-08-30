# Favicon asset provenance

The seven candidate favicons combine a Plurality visual language with a human
figure. Options 1-5 compose existing assets; options 6-7 are original art for
this field guide. Option 2, **Open Arms**, is the deployed default.

Run `npm run build:favicons` from the repository root to rebuild every
candidate and `favicon.svg` from the checked-in sources.

`favicon-32.png` and `apple-touch-icon.png` are checked-in raster exports of
the selected SVG at 32 and 180 pixels. Regenerate both whenever the selected
default changes.

## Shared Plurality asset

Options 1, 3, 4, and 5 preserve this asset's exact geometry:

- **Asset:** `design/logo-dark-focus.svg`
- **Source:** https://github.com/pluralitybook/plurality/blob/86158859464aee75633acd854c656928121a7fd8/design/logo-dark-focus.svg
- **Revision:** `86158859464aee75633acd854c656928121a7fd8`
- **License:** CC0 1.0 Universal

The asset is scaled onto the field guide's ink-colored tile. Option 2 adapts
the same visual vocabulary for stricter favicon constraints: its colored
squares are redistributed onto a simplified visible lattice and inset from
the rounded tile corners.

## Human assets

| Option | Asset | Source | License | Composition change |
| --- | --- | --- | --- | --- |
| 1 | Bootstrap Icons `person-standing` | https://github.com/twbs/icons/blob/main/icons/person-standing.svg | MIT | Scaled, recolored, and placed in a circular foreground field |
| 2 | Material Icons `accessibility_new` | https://github.com/google/material-design-icons/blob/master/src/action/accessibility_new/materialicons/24px.svg | Apache 2.0 | Scaled and recolored over an inset, color-distributed adaptation of the Plurality lattice; no enclosing circle |
| 3 | Heroicons `user` (24px solid) | https://github.com/tailwindlabs/heroicons/blob/master/optimized/24/solid/user.svg | MIT | Scaled, recolored, and placed in a circular foreground field |
| 4 | Font Awesome `person` (solid) | https://github.com/FortAwesome/Font-Awesome/blob/7.x/svgs/solid/person.svg | CC BY 4.0 | Scaled, recolored, and placed in a vertical foreground field |
| 5 | Noto Emoji `person standing` | https://github.com/googlefonts/noto-emoji/blob/main/svg/emoji_u1f9cd.svg | SIL Open Font License 1.1 | Scaled without recoloring and placed in a circular foreground field |

Complete license texts are retained under `source/licenses/`. Font Awesome
attribution is also present in the original source SVG and in the repository's
third-party notices.

## Original options

- **Human at the Center:** an original geometric human inside a ring of
  colored nodes.
- **Shared Humanity:** an original human portrait emerging from four
  overlapping fields.

These two candidates use the Plurality palette as visual inspiration but do
not copy the Plurality logo geometry or a third-party human icon.

## Name and mark note

CC0 does not waive trademark rights. This design exercise does not imply
endorsement by the Plurality project or any icon publisher. Confirm final mark
usage before adopting the favicon outside this field guide.
