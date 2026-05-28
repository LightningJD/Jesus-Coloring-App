# Release Checklist

## App basics

- App opens without crashing.
- Home screen loads quickly.
- Gallery displays available artworks.
- Coloring screen opens from gallery.
- Palette buttons are tappable.
- Regions fill with the correct color.
- Progress is saved locally.
- Completed artwork state is detected.
- Reset works.

## Asset readiness

- Every artwork has metadata.
- Every artwork has a palette.
- Every artwork has a region map.
- Every region is closed.
- No tiny unusable tap targets.
- Jesus is warm, inviting, and visually consistent.
- Images still look pleasant while incomplete.

## Mobile QA

- Test on small iPhone.
- Test on large iPhone.
- Test on Android phone.
- Test slow device performance.
- Test airplane mode.
- Test app relaunch after partial progress.

## Store prep

- App icon.
- Splash screen.
- Screenshots.
- Privacy policy.
- App description.
- Content rating.
- Review notes.

## Build commands

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm start
```

Build Android:

```bash
npm run build:android
```

Build iOS:

```bash
npm run build:ios
```
