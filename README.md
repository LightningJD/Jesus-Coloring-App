# Jesus Coloring App

A production workspace for creating original Christian paint-by-number artwork, coloring-region assets, palettes, metadata, and app-ready content packs.

## Core Vision

Create a peaceful, premium Christian coloring experience centered on:

- Devotion
- Relaxation
- Beautiful reveal moments
- Original Jesus and Bible-themed artwork
- Tap-to-fill solid-color segments

This repo is **not** for copying another app's artwork. The goal is to build an original art library inspired by the broader Christian devotional coloring genre.

## Key Production Rule

Do **not** mass-generate hundreds of images before proving the full asset pipeline.

Start with 10 pilot images, fully convert them into playable coloring assets, test them, then scale.

## Asset Pipeline

1. Create finished full-color artwork.
2. Simplify it for coloring.
3. Segment it into closed solid-color regions.
4. Assign every region to a palette color.
5. Export app-ready files.
6. Test tap targets, zoom behavior, palette accuracy, and reveal quality.

## Standard Asset Folder

Each artwork should eventually include:

```text
assets/packs/<pack-id>/<asset-id>/
  final_art.png
  line_art.svg
  regions.svg
  palette.json
  metadata.json
  thumbnail.png
  source_notes.md
```

## Launch Strategy

Build 30-50 high-quality images for launch after the 10-image pilot pipeline is proven.

Recommended first packs:

- Life of Jesus
- Miracles
- Peace & Prayer
- Bible Stories
- Kids Bible Pack

## Current Status

This repository currently contains production documentation, schemas, and a sample pilot asset structure. Real artwork files should be added after the art direction and segmentation workflow are tested.
