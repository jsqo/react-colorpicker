import React from 'react';


export default function RGBSliderButton ({percentValue}) {
	let style = {
		left: percentValue + "%"
	};

	return (
		<div
			className="absolute w-3 h-8 border-white bg-slate-400 border-2 -top-1 outline outline-2 outline-slate-800 -translate-x-1/2 shadow-xl"
			style={style}
			data-s={percentValue}
			></div>
	);
}
