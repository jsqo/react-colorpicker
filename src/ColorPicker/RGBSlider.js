import React from 'react';

import {roundOffComponent} from '../Utils';

import RGBSliderButton from './RGBSliderButton';


export default function RGBSlider ({name, bg, componentValue, setComponentValue}) {
	let percentValue = (componentValue * 100) / 256;

	function handleClick (e) {
		let percent = (e.pageX - e.currentTarget.offsetLeft) * 100 / (e.currentTarget.offsetWidth);
		percent = percent.toFixed(2);
		let newComponentValue = roundOffComponent(Math.floor(percent * 255 / 100));
		if (newComponentValue != componentValue) {
			setComponentValue(newComponentValue);
		}
		// console.log(`${e.pageX} == ${e.currentTarget.offsetLeft} == ${e.currentTarget.offsetWidth}`);
		// console.log("Mouse was clicked: " + percent + "%");
		// console.log(e.currentTarget);
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

