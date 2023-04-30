import "@testing-library/jest-dom";
import { Peoples, Planets } from "@/testUtils/mock-api";
import CharacterItem from "@/app/components/CharacterItem";
import { renderWithStore } from "@/testUtils/render-with-store";

describe("CharacterItem", () => {
  const props = {
    item: Peoples[0],
  };
  it("renders a character item", () => {
    const { getByText } = renderWithStore(<CharacterItem {...props} />, {
      characters: { planets: Planets, results: [] },
    });
    const peopleName = getByText(props.item.name);
    expect(peopleName).toBeInTheDocument();
    const planetName = getByText(Planets[0].name);
    expect(planetName).toBeInTheDocument();
  });
});
