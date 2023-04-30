import { Character } from "@/app/interface/Character";
import { FunctionComponent } from "react";
import Link from "next/link";
import { useSelector } from "../store/hooks";
import { getPlanetSelector } from "../store/selectors/characters";

interface Props {
  id: number;
  item: Character;
}

const CharacterItem: FunctionComponent<Props> = (props) => {
  const { id, item } = props;
  const planetId = item.homeworld
    .substring(item.homeworld.indexOf("planets"))
    .replace("planets", "")
    .replaceAll("/", "");
  const peopleId = item.homeworld
    .substring(item.url.indexOf("people"))
    .replace("planets", "")
    .replaceAll("/", "");
  const planet = useSelector(getPlanetSelector(planetId));

  return (
    <Link href={`/people/${peopleId}`} role="a" data-testid={`CHARACTER_${id}`}>
      <div className="box-content border rounded p-4 hover:scale-105 cursor-pointer">
        <p>{item.name}</p>
        <p className="text-sm">{item.gender}</p>
        <p className="text-sm">{planet?.name}</p>
      </div>
    </Link>
  );
};

export default CharacterItem;
