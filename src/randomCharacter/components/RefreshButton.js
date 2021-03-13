import {useContext} from "react";
import {RandomCharacterCtx} from "../context";
import "./randomCharacter.css"

export function RefreshButton() {
  const { state, dispatch } = useContext(RandomCharacterCtx);

  const onClick = () => {
    dispatch({ type: "FETCH" });
  }

  return (
    <div className="actions">
      { ["idle", "error"].includes(state.status) ? <button className="primary-action" onClick={onClick}>Get a new character</button> : null }
    </div>
  )
}
