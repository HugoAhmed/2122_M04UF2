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
	<nav>
	<ul>
	<li><a href="plantilla.html"id="home-link">Portada</a></li>
	<li><a href="contacto.html" id="contacto-link">Contacto</a></li>
	<li><a href="cv.html"id="cv-link">CV</a></li>
	<li><a href="juego.html"id="juego-link">Juego</a></li>
	</ul>
	</nav>
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
