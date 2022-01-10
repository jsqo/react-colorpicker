import {Fragment} from 'react';

import Slide from './Slide';

const slides = require("./slides.json");

function Slides ({color}) {
	let slideItems = slides.colors.map((slideColor) => 
		<Fragment>
			<Slide elements={slides.elements} background={color} foreground={slideColor} />
			<Slide elements={slides.elements} background={slideColor} foreground={color} />
		</Fragment>
	);

	return (
		<div className="Slides">
			{slideItems}
		</div>
	);
}

export default Slides;
