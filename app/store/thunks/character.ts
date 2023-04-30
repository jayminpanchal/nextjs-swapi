import { BASE_API_URL } from "@/app/config";
import { Character, Film, Planet } from "@/app/interface/Character";
import { AppThunk } from "@/app/interface/Store";
import { slice } from "@/app/store/slices/character";
import axios from "axios";

export const getCharacter =
  (peopleId: string): AppThunk =>
  async (dispatch): Promise<void> => {
    try {
      dispatch(slice.actions.fetch());
      const response = await axios.get<Character>(
        `${BASE_API_URL}people/${peopleId}`
      );
      dispatch(slice.actions.success({ ...response.data, id: peopleId }));
      response.data.films.map((film) => {
        dispatch(getFilm(film));
      });
      dispatch(getPlanet(response.data.homeworld));
    } catch (e: any) {
      dispatch(
        slice.actions.error(e?.response?.data.detail || "Invalid character")
      );
    }
  };

export const getPlanet =
  (url: string): AppThunk =>
  async (dispatch): Promise<void> => {
    const response = await axios.get<Planet>(url);
    dispatch(slice.actions.successPlanet(response.data));
  };

export const getFilm =
  (url: string): AppThunk =>
  async (dispatch): Promise<void> => {
    const response = await axios.get<Film>(url);
    dispatch(slice.actions.successFilm(response.data));
  };
