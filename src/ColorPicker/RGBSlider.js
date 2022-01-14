import React from 'react';

import {roundOffComponent} from '../Utils';

import RGBSliderButton from './RGBSliderButton';


export default function RGBSlider ({name, bg, componentValue, setComponentValue}) {
	let [percentValue, setPercentValue] = React.useState(componentValue * 100 / 256);

	function handleClick (e) {
		let percent = (e.pageX - e.target.offsetLeft) * 100 / (e.target.offsetWidth);
		percent = percent.toFixed(2);
		setPercentValue(percent);
		// setComponentValue(roundOffComponent(percent * 255));
		console.log("Mouse was clicked");
	}

	return (
		<div className="p-4">
			<h3>{name}</h3>
			<div
				className={`${bg} h-8 my-2 relative`}
				onClick={handleClick}
			>
				<RGBSliderButton percentValue={percentValue} />
			</div>
		</div>
	);
}

