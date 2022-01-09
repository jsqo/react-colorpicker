import './App.css';

import {useState} from 'react';

import Slide from './Slide';
import FloatingWidget from './FloatingWidget';
import Footer from './Footer';

const slides = require("./slides.json").slides;

function App() {
	let [color, serColor] = useState("#777");
	let slideItems = slides.map((slide) => 
		<Slide slideContent={slide} color={color} />
	);

	return (
		<div className="App">
			<header className="App-header">
				<p>Hello, React!</p>
			</header>
			<div className="Slides">
				{slideItems}
			</div>
			<FloatingWidget color={color} />
			<Footer />
		</div>
	);
}

export default App;
