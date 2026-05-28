# SVG Segmentation Rules

## Goal

Create coloring regions that are satisfying to fill on mobile devices.

## Region Size Rules

Large regions:
- skies
- robes
- water
- backgrounds

Medium regions:
- folds
- hair
- lighting transitions

Small regions only for:
- sparkles
- highlights
- jewelry
- stars

## Avoid

- microscopic fragments
- noisy gradients
- over-segmented faces
- broken paths
- thin slivers

## Face Rules

Faces must remain emotionally readable while incomplete.

Do not:
- split lips into many regions
- over-segment eyes
- create tiny skin fragments

## Color Rules

The app uses flat fills.

Gradients must be simulated using grouped regions.

Example:

- region 1 = pale gold
- region 2 = warm gold
- region 3 = amber
- region 4 = orange

## Export Rules

All SVG paths must:
- be closed
- avoid overlap
- support touch interaction
- render correctly in react-native-svg
