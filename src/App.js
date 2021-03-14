import './App.css';
import {RandomCharacterProvider} from './randomCharacter/context';
import {Character} from './randomCharacter/components/Character';
import {RefreshButton} from './randomCharacter/components/RefreshButton';

function App() {
  return (
    <main className="app">
      <section className="app-container">
      <h1 className="app-title">Breaking Bad</h1>
      <RandomCharacterProvider>
        <Character />
        <RefreshButton />
      </RandomCharacterProvider>
        </section>
    </main>
  );
}

export default App;
