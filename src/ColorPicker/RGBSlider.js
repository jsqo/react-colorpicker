import React from 'react';

import {roundOffComponent} from '../Utils';

import RGBSliderButton from './RGBSliderButton';


export default function RGBSlider ({name, bg, componentValue, setComponentValue}) {
	let percentValue = (componentValue * 100) / 256;

	function handleClick (e) {
		let percent = (e.pageX - e.target.offsetLeft) * 100 / (e.target.offsetWidth);
		percent = percent.toFixed(2);
		let newComponentValue = roundOffComponent(Math.floor(percent * 255 / 100));
		setComponentValue(newComponentValue);
		// console.log("Mouse was clicked: " + percent + "%");
	}

	return (
		<div className="p-4">
			<h3>{name}</h3>
			<div
				className={`${bg} h-6 my-2 relative rounded-full`}
				onClick={handleClick}
			>
				<RGBSliderButton percentValue={percentValue} />
			</div>
		</div>
	);
}

