import { useContext } from "react";
import { RandomCharacterCtx } from "../context";
import "./randomCharacter.css";

export function RefreshButton() {
  const { state, dispatch } = useContext(RandomCharacterCtx);

  const onClick = () => {
    dispatch({ type: "FETCH" });
  };

  return (
    <div className="actions">
      <button
        disabled={["loading", "init"].includes(state.status)}
        className="primary-action"
        onClick={onClick}
      >
        Get a new character
      </button>
    </div>
  );
}
