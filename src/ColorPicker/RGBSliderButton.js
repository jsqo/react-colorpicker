import React from 'react';


export default function RGBSliderButton ({percentValue}) {
	let style = {
		left: percentValue + "%"
	};

	return (
		<div
			className="absolute w-6 h-full bg-white border-slate-400 rounded-full border-2 -translate-x-1/2 shadow"
			style={style}
			data-s={percentValue}
			></div>
	);
}
