import { useRandomCharacterContext } from "../context";
import "./style.css";

export function RefreshButton() {
  const { state, dispatch } = useRandomCharacterContext();

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
