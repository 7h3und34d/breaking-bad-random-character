import {useContext} from "react"
import {RandomCharacterCtx} from "../context"
import "./randomCharacter.css"

export function Character() {
  const { state } = useContext(RandomCharacterCtx);
  return (
    <section className="character">
      {["idle", "error"].includes(state.status) ? (
        <>
        <div
          role="img"
          aria-label={`image of ${state.character.name}`}
          style={{
            backgroundImage: `url("${state.character.img}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '200px',
            height: '300px',
          }}
        />
          <h3>{state.character.name}</h3>
        </>
      ) : null}
    </section>
  );
}
