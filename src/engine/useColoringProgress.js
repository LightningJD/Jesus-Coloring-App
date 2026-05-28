import { useMemo, useState } from 'react';

export function useColoringProgress(artwork) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [filledRegions, setFilledRegions] = useState({});
  const [mistakes, setMistakes] = useState(0);

  const totalRegions = artwork.regions.length;
  const filledCount = Object.keys(filledRegions).length;
  const progress = totalRegions === 0 ? 0 : Math.round((filledCount / totalRegions) * 100);
  const isComplete = filledCount === totalRegions;

  const fillRegion = (region) => {
    if (filledRegions[region.id]) return;

    if (region.colorIndex !== selectedColorIndex) {
      setMistakes((value) => value + 1);
      return;
    }

    setFilledRegions((current) => ({
      ...current,
      [region.id]: artwork.palette[region.colorIndex]
    }));
  };

  const reset = () => {
    setFilledRegions({});
    setMistakes(0);
    setSelectedColorIndex(0);
  };

  return useMemo(() => ({
    selectedColorIndex,
    setSelectedColorIndex,
    filledRegions,
    fillRegion,
    progress,
    isComplete,
    mistakes,
    reset
  }), [selectedColorIndex, filledRegions, progress, isComplete, mistakes]);
}
