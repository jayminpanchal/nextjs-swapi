"use client";

import CharacterInfo from "@/app/components/CharacterInfo";
import { useDispatch, useSelector } from "@/app/store/hooks";
import {
  getCharacterErrorSelector,
  getCharacterFilmsSelector,
  getCharacterLoadingSelector,
  getCharacterPlanetSelector,
  getCharacterSelector,
} from "@/app/store/selectors/character";
import { getCharacter } from "@/app/store/thunks/character";
import { useParams } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function People() {
  const dispatch = useDispatch();
  const params = useParams();
  const isLoading = useSelector(getCharacterLoadingSelector);
  const error = useSelector(getCharacterErrorSelector);
  const people = useSelector(getCharacterSelector);
  const films = useSelector(getCharacterFilmsSelector);
  const planet = useSelector(getCharacterPlanetSelector);

  const fetchDetails = useCallback(
    (id: string) => {
      dispatch(getCharacter(id));
    },
    [dispatch]
  );

  useEffect(() => {
    if (params?.id) fetchDetails(params.id as string);
  }, [params?.id, fetchDetails]);

  function renderContent() {
    if (isLoading) {
      return (
        <div
          className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      );
    }
    if (error) {
      return <p>{error}</p>;
    }
    if (people) {
      return <CharacterInfo people={people} films={films} planet={planet} />;
    }
    return null;
  }

  return (
    <main className="flex flex-col items-center p-24">{renderContent()}</main>
  );
}
