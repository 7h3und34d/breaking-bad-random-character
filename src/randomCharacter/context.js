import { createContext } from "react";
import {useRandomCharacter} from "./hooks";

export const RandomCharacterCtx = createContext({ state: {}, dispatch: () => null });

export function RandomCharacterProvider({ children }) {
  const { state, dispatch } = useRandomCharacter();

  return (
    <RandomCharacterCtx.Provider value={{ state, dispatch }}>
      {children}
    </RandomCharacterCtx.Provider>
  );
}
