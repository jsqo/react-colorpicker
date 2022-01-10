
import Slide from './Slide';

const slides = require("./slides.json").slides;

function Slides ({color}) {
	let slideItems = slides.map((slide) => 
		<Slide slideContent={slide} color={color} />
	);

	return (
		<div className="Slides">
			{slideItems}
		</div>
	);
}

export default Slides;
