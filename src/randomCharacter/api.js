import fetch from "node-fetch";

const URL = "https://www.breakingbadapi.com/api";

export async function getRandomCharacter() {
  return fetch(`${URL}/character/random`).then((resp) => resp.json());
}
