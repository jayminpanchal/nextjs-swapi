import { Character, Film, Planet } from "@/app/interface/Character";
import { FunctionComponent } from "react";

interface Props {
  people?: Character;
  films: Film[];
  planet?: Planet;
}

const CharacterInfo: FunctionComponent<Props> = (props) => {
  const { films, people, planet } = props;

  return (
    <div className="w-6/12">
      <table className="w-ful min-w-full text-left text-sm font-light max-">
        <tbody>
          <tr className="">
            <th className="whitespace-nowrap px-6 py-4 ">Name:</th>
            <td className="whitespace-nowrap px-6 py-4">{people?.name}</td>
          </tr>
          <tr className="">
            <th className="whitespace-nowrap px-6 py-4 ">Height:</th>
            <td className="whitespace-nowrap px-6 py-4">{people?.height}cm</td>
          </tr>
          <tr className="">
            <th className="whitespace-nowrap px-6 py-4 ">Birth Year:</th>
            <td className="whitespace-nowrap px-6 py-4">
              {people?.birth_year}
            </td>
          </tr>
          <tr className="">
            <th className="whitespace-nowrap px-6 py-4 ">Eye Color:</th>
            <td className="whitespace-nowrap px-6 py-4">{people?.eye_color}</td>
          </tr>
          <tr className="">
            <th className="whitespace-nowrap px-6 py-4 ">Hair Color:</th>
            <td className="whitespace-nowrap px-6 py-4">
              {people?.hair_color}
            </td>
          </tr>
          <tr className="">
            <th className="whitespace-nowrap px-6 py-4 ">Planet:</th>
            <td className="whitespace-nowrap px-6 py-4">{planet?.name}</td>
          </tr>
          <tr className="">
            <th className="whitespace-nowrap px-6 py-4 ">Films:</th>
            <td className="whitespace-nowrap px-6 py-4">
              {films.map((film) => film?.title).join(", ")}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CharacterInfo;
