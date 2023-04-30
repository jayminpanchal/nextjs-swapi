import { Character, Planet } from "@/app/interface/Character";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { SliceKeys } from "@/app/config";
import { CharactersApiResponse } from "@/app/interface/Response";

interface CharactersState {
  count?: number;
  error?: string | null;
  loading?: boolean;
  next?: string;
  previous?: string;
  results: Character[];
  planets: Planet[];
}

const initialState: CharactersState = {
  count: 0,
  error: null,
  loading: false,
  next: "",
  previous: "",
  results: [],
  planets: [],
};

export const slice = createSlice({
  name: SliceKeys.characters,
  initialState,
  reducers: {
    fetch(state: CharactersState): void {
      state.loading = true;
      state.error = null;
    },
    error(state: CharactersState, action: PayloadAction<string>): void {
      state.loading = false;
      state.error = action.payload;
    },
    success(
      state: CharactersState,
      action: PayloadAction<CharactersApiResponse>
    ): void {
      state.loading = false;
      state.error = null;
      state.results = action.payload.results;
      state.count = action.payload.count;
      state.previous = action.payload.previous;
      state.next = action.payload.next;
    },
    successPlanet(state: CharactersState, action: PayloadAction<Planet>): void {
      const isPlanetExist = state.planets.find(
        (planet) => planet.id === action.payload.id
      );
      if (!isPlanetExist) {
        state.planets = state.planets.concat(action.payload);
      }
    },
  },
});

export const { reducer } = slice;
