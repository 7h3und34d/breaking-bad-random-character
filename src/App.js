import './App.css';
import { Loading } from './randomCharacter/components/Loading';
import {RandomCharacterProvider} from './randomCharacter/context';
import {Character} from './randomCharacter/components/Character';
import {RefreshButton} from './randomCharacter/components/RefreshButton';

function App() {
  return (
    <main className="app">
      <h1 className="app-title">Breaking Bad</h1>
      <RandomCharacterProvider>
        <Loading />
        <Character />
        <RefreshButton />
      </RandomCharacterProvider>
    </main>
  );
}

export default App;
