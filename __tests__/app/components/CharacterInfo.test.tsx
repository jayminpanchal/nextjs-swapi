import "@testing-library/jest-dom";
import CharacterInfo from "@/app/components/CharacterInfo";
import { Films, Peoples, Planets } from "@/testUtils/mock-api";
import { render } from "@testing-library/react";

describe("CharacterInfo", () => {
  const props = {
    people: Peoples[0],
    films: Films,
    planet: Planets[0],
  };
  it("renders a character information", () => {
    const { getByText } = render(<CharacterInfo {...props} />);
    const peopleName = getByText(props.people.name);
    expect(peopleName).toBeInTheDocument();
    const height = getByText(`${props.people.height}cm`);
    expect(height).toBeInTheDocument();
  });
});
