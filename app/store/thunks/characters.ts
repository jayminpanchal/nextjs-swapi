import { BASE_API_URL } from "@/app/config";
import { Planet } from "@/app/interface/Character";
import { CharactersApiResponse } from "@/app/interface/Response";
import { AppThunk } from "@/app/interface/Store";
import { slice } from "@/app/store/slices/characters";
import axios from "axios";

export const getCharacters =
  (): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(slice.actions.fetch());
    const response = await axios.get<CharactersApiResponse>(
      `${BASE_API_URL}people/?page=1`
    );
    dispatch(slice.actions.success(response.data));
    let planets = response.data.results.map((people) =>
      people.homeworld
        .substring(people.homeworld.indexOf("planets"))
        .replace("planets", "")
        .replaceAll("/", "")
    );
    planets = [...new Set(planets)];
    if (planets.length > 0) {
      planets.forEach((planet) => {
        dispatch(getPlanet(planet));
      });
    }
  };

export const getPlanet =
  (planetId: string): AppThunk =>
  async (dispatch): Promise<void> => {
    const response = await axios.get<Planet>(
      `${BASE_API_URL}planets/${planetId}`
    );
    dispatch(slice.actions.successPlanet({ ...response.data, id: planetId }));
  };
