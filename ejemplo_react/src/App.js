import './plantilla.css'
import Titulito from './titulito.js';
import Titulito_cont from './Titulito_cont.js';
import Titulito_cont2 from './titulito_cont2.js';
import Twitter from './twitter.js';
import Piesito from './piesito.js';
function App() {
  return (
    <div className="App">
	<Titulito />
	<Titulito_cont/>
	<Titulito_cont2/>
	<Twitter/>
	<Piesito/>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
