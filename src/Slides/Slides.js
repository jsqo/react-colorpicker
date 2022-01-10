import {Fragment} from 'react';

import Slide from './Slide';

const slides = require("./slides.json");

function Slides ({color}) {
	let slideItems = slides.colors.map((slideColor) => 
		<Fragment>
			<Slide elements={slides.elements} background={color} foreground={slideColor.code} />
			<Slide elements={slides.elements} background={slideColor.code} foreground={color} />
		</Fragment>
	);

	let preFooterSlideBoxItems = slides.colors.map((slideColor) => {
		let style = {
			"backgroundColor": slideColor.code
		};
		return (
			<div className="SlideBox w-40 m-4 inline-block border-2">
				<div className="p-2 font-bold">{slideColor.name}</div>
				<div className="h-24" style={style}></div>
				<div className="p-2">
					<code>{slideColor.code}</code>
				</div>
			</div>
		);
	});

	return (
		<Fragment>
			<div className="Slides">
				{slideItems}
			</div>
			<div className="PreFooter bg-white px-20 py-40 text-center">
				<h2 className="text-4xl p-10">List of colors:</h2>
				<ul>
					{preFooterSlideBoxItems}
				</ul>
			</div>
		</Fragment>
	);
}

export default Slides;
