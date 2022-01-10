import './App.css';

import {useState} from 'react';

import ColorPicker from './ColorPicker';
import Slides from './Slides';
import FloatingWidget from './FloatingWidget';
import Footer from './Footer';

function App() {
	let [color, setColor] = useState("#777");

	return (
		<div className="App">
			<ColorPicker color={color} setColor={setColor} />
			<Slides color={color} />
			<FloatingWidget color={color} />
			<Footer />
		</div>
	);
}

export default App;
