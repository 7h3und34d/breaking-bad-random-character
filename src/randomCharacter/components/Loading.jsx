import {useContext, useEffect} from "react";
import {RandomCharacterCtx} from "../context";

export function Loading() {
  const { state, dispatch } = useContext(RandomCharacterCtx);
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "FETCH" });
    }, 2000)
  }, [dispatch]);

  return (
    <>
      { state.status === "loading" ? <div>Loading data...</div> : null }
      { state.status === "init" ? <div>Initializing application</div> : null }
    </>
  );
}
