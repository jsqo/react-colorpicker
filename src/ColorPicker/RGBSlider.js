import React from 'react';

import {roundOffComponent} from '../Utils';

import RGBSliderButton from './RGBSliderButton';


export default function RGBSlider ({name, bg, componentValue, setComponentValue}) {
	let percentValue = (componentValue * 100) / 256;

	function handleClick (e) {
		let percent = (e.pageX - e.currentTarget.offsetLeft) * 100 / (e.currentTarget.offsetWidth);
		percent = percent.toFixed(2);
		let newComponentValue = roundOffComponent(Math.floor(percent * 255 / 100));
		if (newComponentValue !== componentValue) {
			setComponentValue(newComponentValue);
		}
		// console.log(`${e.pageX} == ${e.currentTarget.offsetLeft} == ${e.currentTarget.offsetWidth}`);
		// console.log("Mouse was clicked: " + percent + "%");
		// console.log(e.currentTarget);
	}

	return (
		<div className="p-4">
			<h3>
				{name}
				<span className={`text-black text-sm px-2 py-1`}>{componentValue}</span>
			</h3>
			<div
				className={`${bg} focus:outline focus:outline-2 focus:outline-slate-800 duration-200 h-6 my-2 relative`}
				onClick={handleClick} tabindex="0"
			>
				<RGBSliderButton percentValue={percentValue} />
			</div>
		</div>
	);
}

