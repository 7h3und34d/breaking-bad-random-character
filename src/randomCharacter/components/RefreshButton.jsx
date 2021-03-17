import { useRandomCharacterContext } from "../context";
import "./style.css";
import Konnekt from "react-konnekt";

function MainActionButton({ isDisabled, onClick, text }) {
  return (
    <div className="actions">
      <button
        disabled={isDisabled}
        className="primary-action"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export const RefreshButton = Konnekt(() => {
  const { state, dispatch } = useRandomCharacterContext();
  const onClick = () => {
    dispatch({ type: "FETCH" });
  };

  return {
    onClick,
    isDisabled: ["loading", "init"].includes(state.status),
    text: "Get a new character",
  };
})(MainActionButton);
