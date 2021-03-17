import { useEffect } from "react";
import { useRandomCharacterContext } from "../context";
import "./style.css";
import spinner from "./three-dots.svg";
import Konnekt from "react-konnekt";

function CharacterCard({ name, ImageComponent }) {
  return (
    <section className="character">
      <ImageComponent />
      <h2>{name}</h2>
    </section>
  );
}

export const Character = Konnekt(() => {
  const { state, dispatch } = useRandomCharacterContext();

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "FETCH" });
    }, 2000);
  }, [dispatch]);

  if (["idle", "error"].includes(state.status)) {
    return {
      name: state.character.name,
      ImageComponent: () => (
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
      ),
    };
  }

  return {
    name:
      state.status === "loading"
        ? "Loading data..."
        : "Initializing application",
    ImageComponent: () => (
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
    ),
  };
})(CharacterCard);
