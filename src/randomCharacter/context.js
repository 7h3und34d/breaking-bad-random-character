import { createContext, useContext } from "react";
import { useRandomCharacter } from "./hooks";

export const RandomCharacterCtx = createContext({
  state: null,
  dispatch: () => null,
});

export function RandomCharacterProvider({ children }) {
  const { state, dispatch } = useRandomCharacter();

  return (
    <RandomCharacterCtx.Provider value={{ state, dispatch }}>
      {children}
    </RandomCharacterCtx.Provider>
  );
}

export function useRandomCharacterContext() {
  const ctx = useContext(RandomCharacterCtx);
  if (ctx.state === null) {
    throw Error(
      "useRandomCharacterContext can be used only in components under RandomCharacterProvider"
    );
  }
  return ctx;
}
