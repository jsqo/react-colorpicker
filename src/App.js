import './App.css';

import {useState} from 'react';

import Slide from './Slide';

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
		</div>
	);
}

export default App;
