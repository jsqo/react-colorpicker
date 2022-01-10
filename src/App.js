import './App.css';

import {useState} from 'react';

import ColorPicker from './ColorPicker';
import Slides from './Slides';
import FloatingWidget from './FloatingWidget';
import Footer from './Footer';

function App() {
	let [color, setColor] = useState("#777");

	function handleKeyPress (e) {
		console.log(e.key + " was pressed at " + Date.now());
	}

	return (
		<div className="App"
			tabIndex="0"
			onKeyPress={handleKeyPress}
		>
			<ColorPicker color={color} setColor={setColor} />
			<Slides color={color} />
			<FloatingWidget color={color} />
			<Footer />
		</div>
	);
}

export default App;
