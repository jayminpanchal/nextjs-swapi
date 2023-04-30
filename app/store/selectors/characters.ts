import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/app/interface/Store";

const charactersSelector = (state: RootState) => state.characters;

export const getCharactersLoadingSelector = createSelector(
  charactersSelector,
  (characters) => characters.loading
);

export const getCharactersResultsSelector = createSelector(
  charactersSelector,
  (characters) => characters.results
);

export const getPlanetSelector = (planetId: string) =>
  createSelector(charactersSelector, (characters) =>
    characters.planets.find((planet) => planet.id === planetId)
  );
