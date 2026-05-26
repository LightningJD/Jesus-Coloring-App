# Production Pipeline

## Goal

Create app-ready Christian paint-by-number assets that are:

- beautiful
- emotionally warm
- easy to color
- technically playable
- scalable for production

---

# Step 1 — Final Artwork

Create the fully rendered image first.

Requirements:

- medium complexity
- readable silhouettes
- clean lighting
- emotionally expressive faces
- low clutter

Avoid:

- excessive texture noise
- hyper-realistic details
- messy backgrounds

---

# Step 2 — Simplification

Before segmentation:

- enlarge important areas
- simplify folds
- remove tiny details
- clean facial regions
- reduce micro-gradients

Goal:

Make the image enjoyable to color.

---

# Step 3 — Region Segmentation

Convert the image into:

- closed vector regions
- solid color zones
- grouped shading areas

Important:

The app does NOT blend colors.

All gradients must be simulated using multiple solid-color regions.

---

# Step 4 — Palette Mapping

Every region receives exactly one color ID.

Typical palette size:

- 10–20 colors

Avoid:

- 100+ color palettes
- excessive near-identical shades

---

# Step 5 — Export Files

Required exports:

```text
final_art.png
line_art.svg
regions.svg
palette.json
metadata.json
thumbnail.png
```

---

# Step 6 — Play Testing

Every image must be tested inside the actual app engine.

Check for:

- tiny impossible regions
- missed closed shapes
- ugly partial reveals
- frustrating zoom behavior
- incorrect palette assignments
- emotional quality during incomplete stages
