

export default function RGBSlider ({name, bg, componentValue, setComponentValue}) {
	let style = {
		left: "0%"
	};
	return (
		<div className="p-4">
			<h3>{name}</h3>
			<div className={`${bg} h-8 my-2 relative`}>
				<div className="w-3 h-full bg-white border-slate-600 border-2 absolute -translate-x-1/2" style={style}></div>
			</div>
		</div>
	);
}

