import './App.css';

import {useState} from 'react';

import Slides from './Slides';
import FloatingWidget from './FloatingWidget';
import Footer from './Footer';

function App() {
	let [color, setColor] = useState("#777");

	return (
		<div className="App">
			<header className="App-header p-20">
				<p>Hello, React!</p>
			</header>
			<Slides color={color} />
			<FloatingWidget color={color} />
			<Footer />
		</div>
	);
}

export default App;
