import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { getRandomCharacter } from "../src/randomCharacter/api";
jest.mock('../src/randomCharacter/api');

const response = [{"char_id":39,"name":"Holly White","birthday":null,"occupation":["Infant"],"img":"https://static.wikia.nocookie.net/breakingbad/images/0/08/Tumblr_lqddc79K9S1qc5omm.png/revision/latest?cb=20111012055605","status":"Alive","nickname":"Holly","appearance":[2,3,4,5],"portrayed":"Unknown","category":"Breaking Bad","better_call_saul_appearance":null}];

test('initializng and loading data', async () => {
  getRandomCharacter.mockReturnValueOnce(new Promise(res => {
    setTimeout(() => {
      res(response);
    }, 862);
  }));
  render(<App />);
  expect(screen.getByRole('heading', { name: /breaking bad/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /initializing application/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /get a new character/i })).toBeDisabled();
  await waitFor(() => screen.getByRole('heading', { name: /loading data/i }));
  await waitFor(() => screen.getByRole('heading', { name: /holly white/i }));
  expect(screen.getByRole('button', { name: /get a new character/i })).toBeEnabled();
  expect(screen.getByRole('img', { name: /image of holly white/i })).toBeInTheDocument();
});
