import { getRandomCharacter } from "./api";
import {useReducer, useEffect, useCallback } from "react";

const initialRandomCharacterState = {
  status: "init",
  character: null,
  error: null,
};

function randomCharacterReducer(state, action) {
  switch(action.type) {
    case "FETCH":
      return {
        ...state,
        status: "loading",
      };
    case "DONE":
      return {
        status: "idle",
        character: action.payload,
        error: null,
      };
    case "ERROR":
      return {
        ...state,
        status: "error",
        error: action.payload,
      }
    default:
      return state;
  }
}

export function useRandomCharacter() {
  const [state, dispatch] = useReducer(randomCharacterReducer, initialRandomCharacterState);
  const retrieve = useCallback(() => {
    fetchCharacter(dispatch)();
  }, [dispatch]);

  useEffect(() => {
    if (state.status === "loading") {
      retrieve();
    }
  }, [state.status, retrieve]);

  return {state, dispatch};
}

export function fetchCharacter(dispatch) {
  return function() {
    dispatch({ type: "FETCH" });
    getRandomCharacter()
      .then(resp => { dispatch({type: "DONE", payload: resp[0] }) })
      .catch(err => { dispatch({ type: "ERROR", payload: err }) });
  }
}
