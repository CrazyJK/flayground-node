import logo from './logo.svg';
import './App.css';
import Flay from './Flay';

function App() {
	const opus = 'SSIS-123';
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<div>
					<Flay opus={opus} />
				</div>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React1
				</a>
			</header>
		</div>
	);
}

export default App;
