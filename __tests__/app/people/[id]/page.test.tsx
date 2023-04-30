import "@testing-library/jest-dom";
import { renderWithStore } from "@/testUtils/render-with-store";
import { Films, Peoples, Planets } from "@/testUtils/mock-api";
import People from "@/app/people/[id]/page";

describe("People", () => {
  it("renders a component", () => {
    const { container } = renderWithStore(<People />, {});
    expect(container).toBeTruthy();
  });

  it("renders a character", () => {
    const { getByText } = renderWithStore(<People />, {
      character: { people: Peoples[0], films: Films, planet: Planets[0] },
    });
    expect(getByText(Peoples[0].name)).toBeInTheDocument();
  });

  it("renders a loading", () => {
    const { getByRole } = renderWithStore(<People />, {
      character: {
        loading: true,
        people: Peoples[0],
        films: Films,
        planet: Planets[0],
      },
    });
    expect(getByRole("status")).toBeInTheDocument();
  });

  it("renders an error", () => {
    const { getByText } = renderWithStore(<People />, {
      character: {
        error: "Not found",
        people: Peoples[0],
        films: Films,
        planet: Planets[0],
      },
    });
    expect(getByText("Not found")).toBeInTheDocument();
  });
});
