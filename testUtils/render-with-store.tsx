import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { render } from "@testing-library/react";

import { rootReducer } from "../app/store/root-reducer";
import { RootState } from "@/app/interface/Store";
import { ReactElement, ReactNode } from "react";

const testStore = (state: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: state,
  });
};

export const renderWithStore = (
  component: ReactElement,
  initialState: Partial<RootState>
) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <Provider store={testStore(initialState)}>{children}</Provider>
  );
  return render(component, { wrapper: Wrapper });
};
