import { Character } from "./Character";

export interface CharactersApiResponse {
  count?: number;
  error?: string | null;
  loading?: boolean;
  next?: string;
  previous?: string;
  results: Character[];
}
