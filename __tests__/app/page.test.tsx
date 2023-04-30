import Home from "../../app/page";
import "@testing-library/jest-dom";
import { renderWithStore } from "@/testUtils/render-with-store";
import { Peoples, Planets } from "@/testUtils/mock-api";
import MockAdapter from "axios-mock-adapter";
import { cleanup } from "@testing-library/react";
import axios from "axios";
import { BASE_API_URL } from "@/app/config";

const mock = new MockAdapter(axios, { onNoMatch: "throwException" });

describe("Home", () => {
  beforeAll(() => {
    const pathRegex = new RegExp(`${BASE_API_URL}planets/*`);
    mock
      .onGet(`${BASE_API_URL}people/?page=1`)
      .reply(200, { results: Peoples });
    mock.onGet(pathRegex).reply(200, Planets[0]);
  });

  afterEach(cleanup);

  it("renders a heading", () => {
    const { getByText } = renderWithStore(<Home />, {
      characters: { loading: false, results: Peoples, planets: Planets },
    });
    const heading = getByText("Characters");
    expect(heading).toBeInTheDocument();
  });

  it("renders loading", () => {
    const { getAllByRole } = renderWithStore(<Home />, {});
    const status = getAllByRole("status");
    expect(status.length).toBe(1);
  });

  it("renders characters", () => {
    const { getAllByRole } = renderWithStore(<Home />, {
      characters: { loading: false, results: Peoples, planets: Planets },
    });
    const links = getAllByRole("a");
    expect(links.length).toBe(Peoples.length);
  });
});
