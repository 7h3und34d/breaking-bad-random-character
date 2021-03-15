import { useEffect } from "react";
import { useRandomCharacterContext } from "../context";
import "./style.css";
import spinner from "./three-dots.svg";

export function Character() {
  const { state, dispatch } = useRandomCharacterContext();

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "FETCH" });
    }, 2000);
  }, [dispatch]);

  return (
    <section className="character">
      {["init", "loading"].includes(state.status) ? (
        <>
          <div
            role="img"
            aria-label="breaking bad logo"
            style={{
              backgroundColor: "#fff",
              width: "200px",
              height: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={spinner} alt="spinner" />
          </div>
          {state.status === "loading" ? <h3>Loading data...</h3> : null}
          {state.status === "init" ? <h3>Initializing application</h3> : null}
        </>
      ) : null}
      {["idle", "error"].includes(state.status) ? (
        <>
          <div
            role="img"
            aria-label={`image of ${state.character.name}`}
            style={{
              backgroundImage: `url("${state.character.img}")`,
              backgroundColor: "#369457 ",
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "200px",
              height: "300px",
            }}
          />
          <h3>{state.character.name}</h3>
        </>
      ) : null}
    </section>
  );
}
