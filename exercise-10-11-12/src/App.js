import './App.css';
import Square from './components/square';

function App() {
    return (
		<div className="App">
			<h1>Elige un color</h1>
			<p>Deja el mouse encima del cuadrado para que la paleta de colores varie. Si apartas el ratón la animación parará</p>
			<p>Cuando encuentres el color que te gusta haz 'doubleClick' para detener la animación y mostrarlo en formato rbg</p>
			<Square></Square>
		</div>
    )
}

export default App;
