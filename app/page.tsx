"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "./store/hooks";
import {
  getCharactersLoadingSelector,
  getCharactersResultsSelector,
} from "./store/selectors/characters";
import { getCharacters } from "./store/thunks/characters";
import CharacterItem from "./components/CharacterItem";

export default function Home() {
  const dispatch = useDispatch();
  const characters = useSelector(getCharactersResultsSelector);
  const isLoading = useSelector(getCharactersLoadingSelector);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  function renderContent() {
    return (
      <div className=" w-full grid grid-cols-5 gap-8">
        {(characters || []).map((character, index) => (
          <CharacterItem key={`CHARACTER_${index}`} id={index} item={character} />
        ))}
      </div>
    );
  }

  function renderLoading() {
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

  return (
    <main className="flex flex-col items-center p-24">
      <p className="text-2xl mb-4">Characters</p>
      {isLoading && renderLoading()}
      {renderContent()}
    </main>
  );
}
