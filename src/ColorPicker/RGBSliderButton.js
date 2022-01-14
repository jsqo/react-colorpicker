import React from 'react';


export default function RGBSliderButton ({percentValue}) {
	let style = {
		left: percentValue + "%"
	};

	return (
		<div
			className="w-0 h-full bg-white border-slate-600 border-2 absolute -translate-x-1/2 shadow"
			style={style}
			data-s={percentValue}
			></div>
	);
}
