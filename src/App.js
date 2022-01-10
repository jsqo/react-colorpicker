import './App.css';

import {useState} from 'react';

import ColorPicker from './ColorPicker';
import Slides from './Slides';
import FloatingWidget from './FloatingWidget';
import Footer from './Footer';

import {rgbToHex, roundOffComponent} from './Utils';

function App() {
	let [color, setColor] = useState({
		"r": 128, "g": 128, "b": 128
	});
	let hexColor = rgbToHex(color);

	function updateColor (rc, gc, bc) {
		let jump = 5;
		let r = roundOffComponent(color.r + rc * jump);
		let g = roundOffComponent(color.g + gc * jump);
		let b = roundOffComponent(color.b + bc * jump);
		setColor({r: r, g: g, b: b});
		hexColor = rgbToHex(color);
	}

	function handleKeyPress (e) {
		const key = e.key.toUpperCase();
		switch (key) {
			case "Q": updateColor(-5, 0, 0); break;
			case "W": updateColor(-1, 0, 0); break;
			case "E": updateColor(1, 0, 0); break;
			case "R": updateColor(5, 0, 0); break;

			case "A": updateColor(0, -5, 0); break;
			case "S": updateColor(0, -1, 0); break;
			case "D": updateColor(0, 1, 0); break;
			case "F": updateColor(0, 5, 0); break;

			case "Z": updateColor(0, 0, -5); break;
			case "X": updateColor(0, 0, -1); break;
			case "C": updateColor(0, 0, 1); break;
			case "V": updateColor(0, 0, 5); break;
			default:
				console.log("default case");
		}
	}

	return (
		<div className="App"
			tabIndex="0"
			onKeyPress={handleKeyPress}
		>
			<ColorPicker color={color} setColor={setColor} />
			<Slides hexColor={hexColor} color={color} />
			<FloatingWidget hexColor={hexColor} color={color} />
			<Footer />
		</div>
	);
}

export default App;
