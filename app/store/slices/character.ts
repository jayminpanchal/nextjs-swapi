import { Character, Film, Planet } from "@/app/interface/Character";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { SliceKeys } from "@/app/config";

interface CharacterState {
  error?: string | null;
  loading?: boolean;
  people?: Character;
  planet?: Planet;
  films: Film[];
}

const initialState: CharacterState = {
  error: null,
  loading: false,
  people: undefined,
  planet: undefined,
  films: [],
};

export const slice = createSlice({
  name: SliceKeys.characters,
  initialState,
  reducers: {
    fetch(state: CharacterState): void {
      state.loading = true;
      state.error = null;
      state.people = undefined;
      state.planet = undefined;
      state.films = [];
    },
    error(state: CharacterState, action: PayloadAction<string>): void {
      state.loading = false;
      state.error = action.payload;
    },
    success(state: CharacterState, action: PayloadAction<Character>): void {
      state.loading = false;
      state.error = null;
      state.people = action.payload;
    },
    successPlanet(state: CharacterState, action: PayloadAction<Planet>): void {
      state.planet = action.payload;
    },
    successFilm(state: CharacterState, action: PayloadAction<Film>): void {
      state.films = state.films.concat(action.payload);
    },
  },
});

export const { reducer } = slice;
