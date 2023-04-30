import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/app/interface/Store";

const characterSelector = (state: RootState) => state.character;

export const getCharacterLoadingSelector = createSelector(
  characterSelector,
  (character) => character.loading
);

export const getCharacterErrorSelector = createSelector(
  characterSelector,
  (character) => character.error
);

export const getCharacterSelector = createSelector(
  characterSelector,
  (character) => character.people
);

export const getCharacterFilmsSelector = createSelector(
  characterSelector,
  (character) => character.films
);

export const getCharacterPlanetSelector = createSelector(
  characterSelector,
  (character) => character.planet
);
