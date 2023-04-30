import { combineReducers } from "@reduxjs/toolkit";

import { reducer as charactersReducer } from "./slices/characters";
import { reducer as characterReducer } from "./slices/character";

export const rootReducer = combineReducers({
  characters: charactersReducer,
  character: characterReducer,
});
